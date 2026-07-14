/* ============================================================
   api.js - Player Search & Image Scraping Service
   ============================================================ */

const { INITIAL_PLAYERS } = require('./players.js');
const { WC2026_PLAYERS } = require('./wc2026_players.js');

// Combine local database
const LOCAL_DATABASE = [...INITIAL_PLAYERS];
const seenNames = new Set(LOCAL_DATABASE.map(p => p.name.toLowerCase().trim()));
const seenIds = new Set(LOCAL_DATABASE.map(p => p.id));

if (WC2026_PLAYERS) {
  WC2026_PLAYERS.forEach(p => {
    const normName = p.name.toLowerCase().trim();
    if (!seenIds.has(p.id) && !seenNames.has(normName)) {
      LOCAL_DATABASE.push(p);
      seenIds.add(p.id);
      seenNames.add(normName);
    }
  });
}

/**
 * Normalizes positions from API-Football format to internal GK/DF/MF/FW
 */
function normalizePosition(apiPos) {
  if (!apiPos) return 'MF';
  const pos = apiPos.toLowerCase();
  if (pos.includes('goalkeeper') || pos === 'gk') return 'GK';
  if (pos.includes('defender') || pos === 'df') return 'DF';
  if (pos.includes('midfielder') || pos === 'mf') return 'MF';
  if (pos.includes('attacker') || pos.includes('forward') || pos === 'fw') return 'FW';
  return 'MF';
}

/**
 * Calculates a base price ($M) based on player rating.
 */
function calculateBasePrice(rating) {
  if (rating >= 90) return 50 + (rating - 90) * 15;
  if (rating >= 80) return 20 + (rating - 80) * 3;
  if (rating >= 70) return 5 + (rating - 70) * 1.5;
  return Math.max(1, Math.round(rating / 15));
}

/**
 * Dynamic DuckDuckGo Image Scraper to fetch player headshots
 */
async function searchDuckDuckGoImage(query) {
  try {
    const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
    
    // Step 1: Get the VQD token
    const tokenUrl = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
    const tokenRes = await fetch(tokenUrl, {
      headers: { 'User-Agent': userAgent }
    });
    
    if (!tokenRes.ok) throw new Error(`Token fetch failed: ${tokenRes.status}`);
    const tokenHtml = await tokenRes.text();
    
    // Extract VQD token using regex
    const vqdRegex = /vqd=['"]?([0-9A-Za-z-]+)['"]?/;
    const match = tokenHtml.match(vqdRegex);
    let vqd = null;
    if (!match || !match[1]) {
      const altRegex = /vqd\s*=\s*['"]([^'"]+)['"]/;
      const altMatch = tokenHtml.match(altRegex);
      if (!altMatch || !altMatch[1]) {
        throw new Error("Could not find VQD token in HTML body.");
      }
      vqd = altMatch[1];
    } else {
      vqd = match[1];
    }
    
    // Step 2: Fetch images from DuckDuckGo i.js endpoint
    const searchUrl = `https://duckduckgo.com/i.js?l=us-en&o=json&q=${encodeURIComponent(query)}&vqd=${vqd}&f=,,,`;
    const searchRes = await fetch(searchUrl, {
      headers: {
        'User-Agent': userAgent,
        'Accept': 'application/json',
        'Referer': 'https://duckduckgo.com/'
      }
    });
    
    if (!searchRes.ok) throw new Error(`Image search failed: ${searchRes.status}`);
    const data = await searchRes.json();
    
    if (data && data.results && Array.isArray(data.results)) {
      return data.results.map(r => ({
        title: r.title,
        image: r.image,
        thumbnail: r.thumbnail
      }));
    }
    
    return [];
  } catch (err) {
    console.error(`DuckDuckGo image search failed for "${query}":`, err.message);
    return [];
  }
}

/**
 * Searches players across API-Football (if keys available) or local database.
 */
async function searchPlayers(query, apiKey = null, apiHost = 'v3.football.api-sports.io') {
  const normQuery = (query || '').toLowerCase().trim();
  
  if (apiKey && apiKey.trim().length > 3) {
    try {
      const url = `https://${apiHost}/players?search=${encodeURIComponent(normQuery)}&season=2024`;
      console.log(`Querying API-Football: ${url}`);
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'x-apisports-key': apiKey,
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': apiHost
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data && data.response && Array.isArray(data.response)) {
        return data.response.map(item => {
          const p = item.player;
          const stats = item.statistics && item.statistics[0];
          
          let apiRating = 75;
          if (stats && stats.games && stats.games.rating) {
            const rawRating = parseFloat(stats.games.rating);
            if (!isNaN(rawRating)) {
              apiRating = Math.round(60 + (rawRating * 4));
            }
          } else {
            apiRating = Math.floor(Math.random() * (85 - 72 + 1)) + 72; 
          }
          apiRating = Math.min(99, Math.max(50, apiRating));

          const pos = normalizePosition(stats && stats.games && stats.games.position);
          const club = (stats && stats.team && stats.team.name) || 'Free Agent';
          const basePrice = calculateBasePrice(apiRating);
          
          return {
            id: `api_${p.id}`,
            name: p.name,
            position: pos,
            rating: apiRating,
            club: club,
            nationality: p.nationality || 'Unknown',
            basePrice: basePrice,
            photo: p.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(p.name)}&background=random&size=150`
          };
        });
      }
    } catch (err) {
      console.error('Error fetching from API-Football, falling back to local DB:', err.message);
    }
  }

  // Fallback: Local database search
  if (!normQuery) {
    return [...LOCAL_DATABASE].sort(() => Math.random() - 0.5).slice(0, 50);
  }

  return LOCAL_DATABASE.filter(p => {
    return (
      p.name.toLowerCase().includes(normQuery) ||
      p.club.toLowerCase().includes(normQuery) ||
      p.nationality.toLowerCase().includes(normQuery)
    );
  }).slice(0, 50);
}

module.exports = {
  searchPlayers,
  calculateBasePrice,
  searchDuckDuckGoImage,
  LOCAL_DATABASE
};
