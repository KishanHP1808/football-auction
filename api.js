/* ============================================================
   api.js - Player Search & Image Scraping Service
   ============================================================ */

const { INITIAL_PLAYERS } = require('./public/players.js');
const { WC2026_PLAYERS } = require('./public/wc2026_players.js');

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

const PLAYER_CACHE = new Map();

/**
 * Searches players across API-Football (if keys available) or local database (with caching).
 */
async function searchPlayers(query, apiKey = null, apiHost = 'v3.football.api-sports.io') {
  const normQuery = (query || '').toLowerCase().trim();
  const cacheKey = `${normQuery}_${apiKey || ''}_${apiHost}`;
  
  if (PLAYER_CACHE.has(cacheKey)) {
    return PLAYER_CACHE.get(cacheKey);
  }

  let results = [];
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
        results = data.response.map(item => {
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

  // Fallback to local DB if no API results found
  if (results.length === 0) {
    if (!normQuery) {
      results = [...LOCAL_DATABASE].sort(() => Math.random() - 0.5).slice(0, 50);
    } else {
      results = LOCAL_DATABASE.filter(p => {
        return (
          p.name.toLowerCase().includes(normQuery) ||
          p.club.toLowerCase().includes(normQuery) ||
          p.nationality.toLowerCase().includes(normQuery)
        );
      }).slice(0, 50);
    }
  }

  PLAYER_CACHE.set(cacheKey, results);
  return results;
}

module.exports = {
  searchPlayers,
  calculateBasePrice,
  LOCAL_DATABASE
};
