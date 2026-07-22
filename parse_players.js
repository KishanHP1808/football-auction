const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const pdfPath = path.join(__dirname, 'New folder', 'FIFA_World_Cup_2026_All_1248_Players.pdf');
const outputPath = path.join(__dirname, 'wc2026_players.js');

const dataBuffer = fs.readFileSync(pdfPath);
const parser = new PDFParse({ data: dataBuffer });

function cleanName(rawName) {
  const parts = rawName.trim().split(/\s+/);
  if (parts.length < 2) return rawName;
  const isLastNameFirst = parts[0] === parts[0].toUpperCase();
  const titleCase = (str) => {
    return str.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
  };
  if (isLastNameFirst && parts.length >= 2) {
    const last = parts.slice(0, parts.length - 1).join(' ');
    const first = parts[parts.length - 1];
    return titleCase(first) + ' ' + titleCase(last);
  }
  return parts.map(titleCase).join(' ');
}

function parseValue(valStr, rating) {
  if (!valStr || valStr === 'N/A') {
    return calculateBasePrice(rating);
  }
  let val = valStr.toLowerCase().replace(/[€$]/g, '').trim();
  if (val.endsWith('m')) {
    const num = parseFloat(val.replace('m', ''));
    return Math.max(1, Math.round(num));
  } else if (val.endsWith('k')) {
    const num = parseFloat(val.replace('k', ''));
    return Math.max(1, Math.round(num / 1000));
  }
  return calculateBasePrice(rating);
}

function calculateBasePrice(rating) {
  if (rating >= 90) return 50 + (rating - 90) * 15;
  if (rating >= 80) return 20 + (rating - 80) * 3;
  if (rating >= 70) return 5 + (rating - 70) * 1.5;
  return Math.max(1, Math.round(rating / 15));
}

parser.getText().then(function(result) {
  console.log("PDF parsed. Pages found:", result.pages.length);
  const players = [];
  
  // result.pages is an array of { text, num }
  // Page 1 is the cover page (index 0). Roster pages start from page 2 (index 1)
  for (let i = 1; i < result.pages.length; i++) {
    const pageText = result.pages[i].text;
    const lines = pageText.split('\n');
    
    // Extract country name
    let country = "Unknown";
    for (let l = 0; l < Math.min(5, lines.length); l++) {
      const match = lines[l].match(/^([A-Za-z\s\-]+)\s+\(([A-Z]{3})\)/);
      if (match) {
        country = match[1].trim();
        break;
      }
    }
    
    // Parse player lines
    lines.forEach(line => {
      const playerRegex = /^\s*(\d+)\s+(.+?)\s+(GK|DF|MF|FW)\s+(.+?)\s+([€$]?\d+(?:\.\d+)?[mKk]|N\/A)\s+(\d+|N\/A)\s*$/;
      const match = line.match(playerRegex);
      if (match) {
        const num = match[1];
        const rawName = match[2];
        const position = match[3];
        const club = match[4].trim();
        const valueStr = match[5];
        const ratingStr = match[6];
        
        let rating = 72;
        if (ratingStr !== 'N/A') {
          rating = parseInt(ratingStr);
        } else {
          rating = club.includes('FC') || club.includes('United') || club.includes('Real') || club.includes('Athletic') ? 75 : 70;
        }
        
        const name = cleanName(rawName);
        const basePrice = parseValue(valueStr, rating);
        const id = `wc_${country.substring(0,3).toLowerCase().replace(/[^a-z]/g, '')}_${num}`;
        
        players.push({
          id,
          name,
          position,
          rating,
          club,
          nationality: country,
          basePrice
        });
      }
    });
  }
  
  console.log(`Parsed ${players.length} players across the national teams.`);
  
  const outputContent = `// FIFA World Cup 2026 — All 48 Nations Squad Data
// Extracted from PDF list dated 10 July 2026

const WC2026_PLAYERS = ${JSON.stringify(players, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WC2026_PLAYERS };
}
`;

  fs.writeFileSync(outputPath, outputContent, 'utf8');
  console.log("Successfully wrote output to wc2026_players.js!");
}).catch(err => {
  console.error("PDF Parsing failed:", err);
});
