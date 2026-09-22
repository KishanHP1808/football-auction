const fs = require('fs');
const path = require('path');

const WC_FILE = path.join(__dirname, '..', 'public', 'wc2026_players.js');
const CACHE_FILE = path.join(__dirname, '..', 'public', 'player_photos.json');

const { WC2026_PLAYERS } = require('../public/wc2026_players.js');

let photosCache = {};
if (fs.existsSync(CACHE_FILE)) {
  try {
    photosCache = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
  } catch (e) {
    photosCache = {};
  }
}

async function fetchWikiPhoto(name, nationality = '', club = '') {
  let clean = name.replace(/\(GOAT\)|\(goat\)/gi, '').trim();
  clean = clean.replace(/\(.*?\)/g, '').trim();
  const cacheKey = clean.toLowerCase();

  if (photosCache[cacheKey]) {
    return photosCache[cacheKey];
  }

  const tryDirect = async (title) => {
    try {
      const slug = encodeURIComponent(title.replace(/ /g, '_'));
      const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${slug}`, {
        headers: { 'User-Agent': 'FootballAuctionApp/1.0 (kishanhp18@gmail.com)' },
        signal: AbortSignal.timeout(2500)
      });
      if (!res.ok) return null;
      const d = await res.json();
      return d.thumbnail?.source || null;
    } catch (e) {
      return null;
    }
  };

  const trySearch = async (query) => {
    try {
      const q = encodeURIComponent(query);
      const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${q}&format=json&utf8=1`, {
        headers: { 'User-Agent': 'FootballAuctionApp/1.0 (kishanhp18@gmail.com)' },
        signal: AbortSignal.timeout(2500)
      });
      if (!res.ok) return null;
      const d = await res.json();
      const top = d.query?.search?.[0];
      if (!top) return null;
      return await tryDirect(top.title);
    } catch (e) {
      return null;
    }
  };

  let photo = await tryDirect(clean);
  if (!photo) photo = await tryDirect(`${clean} (footballer)`);
  if (!photo && nationality) photo = await trySearch(`${clean} ${nationality} footballer`);
  if (!photo && club) photo = await trySearch(`${clean} ${club}`);
  if (!photo) photo = await trySearch(`${clean} footballer`);

  if (photo) {
    photosCache[cacheKey] = photo;
  }
  return photo;
}

async function run() {
  console.log(`Starting photo enrichment for WC2026_PLAYERS (${WC2026_PLAYERS.length} total)...`);

  let enrichedCount = 0;
  for (let i = 0; i < WC2026_PLAYERS.length; i++) {
    const p = WC2026_PLAYERS[i];
    if (p.photo && !p.photo.includes('ui-avatars') && !p.photo.startsWith('/api')) {
      enrichedCount++;
      continue;
    }

    const clean = p.name.replace(/\(GOAT\)|\(goat\)/gi, '').trim().toLowerCase();
    let photo = photosCache[clean] || photosCache[p.id];

    if (!photo && p.rating >= 80) {
      photo = await fetchWikiPhoto(p.name, p.nationality, p.club);
      await new Promise(r => setTimeout(r, 30));
    }

    if (photo) {
      p.photo = photo;
      photosCache[clean] = photo;
      photosCache[p.id] = photo;
      enrichedCount++;
    } else {
      // Direct high quality API resolver URL
      p.photo = `/api/player-image?name=${encodeURIComponent(p.name)}&nat=${encodeURIComponent(p.nationality || '')}&club=${encodeURIComponent(p.club || '')}&pos=${encodeURIComponent(p.position || '')}`;
    }

    // Save cache periodically
    if ((i + 1) % 100 === 0) {
      fs.writeFileSync(CACHE_FILE, JSON.stringify(photosCache, null, 2), 'utf8');
      console.log(`Saved partial cache at ${i + 1}/${WC2026_PLAYERS.length}. Enriched: ${enrichedCount}`);
    }
  }

  // Final cache save
  fs.writeFileSync(CACHE_FILE, JSON.stringify(photosCache, null, 2), 'utf8');
  console.log(`Saved photos cache to ${CACHE_FILE}`);

  // Save updated wc2026_players.js
  const content = `// FIFA World Cup 2026 — All 48 Nations Squad Data\n` +
    `// Extracted from PDF list dated 10 July 2026 with player portrait photos\n\n` +
    `const WC2026_PLAYERS = ${JSON.stringify(WC2026_PLAYERS, null, 2)};\n\n` +
    `if (typeof module !== 'undefined' && module.exports) {\n` +
    `  module.exports = { WC2026_PLAYERS };\n` +
    `}\n`;

  fs.writeFileSync(WC_FILE, content, 'utf8');
  console.log(`Updated ${WC_FILE} with photos! Total players: ${WC2026_PLAYERS.length}`);
}

run().catch(console.error);
