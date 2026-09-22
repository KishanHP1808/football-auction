const fs = require('fs');
const path = require('path');

const PLAYERS_FILE = path.join(__dirname, '..', 'public', 'players.js');
const WC_PLAYERS_FILE = path.join(__dirname, '..', 'public', 'wc2026_players.js');
const PHOTOS_CACHE_FILE = path.join(__dirname, '..', 'public', 'player_photos.json');

const { INITIAL_PLAYERS } = require('../public/players.js');
const { WC2026_PLAYERS } = require('../public/wc2026_players.js');

let photosCache = {};
if (fs.existsSync(PHOTOS_CACHE_FILE)) {
  try {
    photosCache = JSON.parse(fs.readFileSync(PHOTOS_CACHE_FILE, 'utf8'));
  } catch (e) {
    photosCache = {};
  }
}

async function fetchWikipediaPhoto(name, nationality = '', club = '') {
  let clean = name.replace(/\(GOAT\)|\(goat\)/gi, '').trim();
  clean = clean.replace(/\(.*?\)/g, '').trim();

  // Check cache
  const cacheKey = clean.toLowerCase();
  if (photosCache[cacheKey]) {
    return photosCache[cacheKey];
  }

  const tryDirect = async (pageTitle) => {
    try {
      const slug = encodeURIComponent(pageTitle.replace(/ /g, '_'));
      const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${slug}`, {
        headers: { 'User-Agent': 'FootballAuctionApp/1.0 (kishanhp18@gmail.com)' }
      });
      if (!res.ok) return null;
      const data = await res.json();
      return data.thumbnail?.source || null;
    } catch (e) {
      return null;
    }
  };

  const trySearch = async (searchTerm) => {
    try {
      const q = encodeURIComponent(searchTerm);
      const res = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${q}&format=json&utf8=1`, {
        headers: { 'User-Agent': 'FootballAuctionApp/1.0 (kishanhp18@gmail.com)' }
      });
      if (!res.ok) return null;
      const data = await res.json();
      const first = data.query?.search?.[0];
      if (!first) return null;
      return await tryDirect(first.title);
    } catch (e) {
      return null;
    }
  };

  let photo = await tryDirect(clean);
  if (!photo) photo = await tryDirect(`${clean} (footballer)`);
  if (!photo && nationality) photo = await trySearch(`${clean} ${nationality} footballer`);
  if (!photo && club) photo = await trySearch(`${clean} ${club} footballer`);
  if (!photo) photo = await trySearch(`${clean} football`);

  if (photo) {
    photosCache[cacheKey] = photo;
  }
  return photo;
}

// Special curated direct high-resolution portraits for key legends and stars
const CURATED_PHOTOS = {
  "lionel messi": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Leo_Messi_Argentina_v_Egypt_7_July_2026-1.jpg/330px-Leo_Messi_Argentina_v_Egypt_7_July_2026-1.jpg",
  "cristiano ronaldo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/330px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg",
  "kylian mbappé": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Kylian_Mbappe_France_v_Senegal_16_June_2026-391_%28cropped%29.jpg/330px-Kylian_Mbappe_France_v_Senegal_16_June_2026-391_%28cropped%29.jpg",
  "erling haaland": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Erling_Haaland_Morocco_v_Norway_7_June_2026-51.jpg/330px-Erling_Haaland_Morocco_v_Norway_7_June_2026-51.jpg",
  "jude bellingham": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Jude_Bellingham_England_v_Ghana_23_June_2026-061_%28cropped%29.jpg/330px-Jude_Bellingham_England_v_Ghana_23_June_2026-061_%28cropped%29.jpg",
  "vinícius júnior": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Vin%C3%ADcius_J%C3%BAnior_Brazil_V_Morocco_13_June_2026-207_%28cropped%29.jpg/330px-Vin%C3%ADcius_J%C3%BAnior_Brazil_V_Morocco_13_June_2026-207_%28cropped%29.jpg",
  "harry kane": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Harry_Kane_England_v_Ghana_23_June_2026-319_%28cropped%29.jpg/330px-Harry_Kane_England_v_Ghana_23_June_2026-319_%28cropped%29.jpg",
  "mohamed salah": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Mohamed_Salah_2018.jpg/330px-Mohamed_Salah_2018.jpg",
  "kevin de bruyne": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Kevin_De_Bruyne_201807091.jpg/330px-Kevin_De_Bruyne_201807091.jpg",
  "neymar jr": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Neymar_Jr._with_Al_Hilal%2C_3_October_2023_-_03_%28cropped%29.jpg/330px-Neymar_Jr._with_Al_Hilal%2C_3_October_2023_-_03_%28cropped%29.jpg",
  "robert lewandowski": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Robert_Lewandowski_2018.jpg/330px-Robert_Lewandowski_2018.jpg",
  "luka modric": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Luka_Modri%C4%87_at_the_2018_World_Cup_%28cropped%29.jpg/330px-Luka_Modri%C4%87_at_the_2018_World_Cup_%28cropped%29.jpg",
  "sunil chhetri": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/The_President%2C_Shri_Ram_Nath_Kovind_presenting_the_Major_Dhyan_Chand_Khel_Ratna_Award%2C_2021_to_Shri_Sunil_Chhetri_for_Football%2C_at_Rashtrapati_Bhavan%2C_in_New_Delhi_on_13_November_2021_%28cropped%29.jpg/330px-thumbnail.jpg",
  "virgil van dijk": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/20160604_AUT_NED_8876_%28cropped%29.jpg/330px-20160604_AUT_NED_8876_%28cropped%29.jpg",
  "thibaut courtois": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Thibaut_Courtois_at_the_2018_World_Cup_%28cropped%29.jpg/330px-Thibaut_Courtois_at_the_2018_World_Cup_%28cropped%29.jpg",
  "alisson becker": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Alisson_Becker_Brazil_V_Morocco_13_June_2026-117_%28cropped%29.jpg/330px-Alisson_Becker_Brazil_V_Morocco_13_June_2026-117_%28cropped%29.jpg",
  "rodri": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Rodri_Argentina_v_Spain_19_July_2026-187_%28cropped%29.jpg/330px-Rodri_Argentina_v_Spain_19_July_2026-187_%28cropped%29.jpg",
  "bukayo saka": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Bukayo_Saka_England_v_Ghana_23_June_2026-037_%28cropped%29.jpg/330px-Bukayo_Saka_England_v_Ghana_23_June_2026-037_%28cropped%29.jpg",
  "phil foden": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Phil_Foden_England_v_Ghana_23_June_2026-302_%28cropped%29.jpg/330px-Phil_Foden_England_v_Ghana_23_June_2026-302_%28cropped%29.jpg",
  "lamine yamal": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Lamine_Yamal_Spain_v_Croatia_15_June_2024.jpg/330px-Lamine_Yamal_Spain_v_Croatia_15_June_2024.jpg",
  "cole palmer": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Cole_Palmer_England_v_Ghana_23_June_2026-081_%28cropped%29.jpg/330px-Cole_Palmer_England_v_Ghana_23_June_2026-081_%28cropped%29.jpg"
};

// Merge curated into cache
for (const [k, v] of Object.entries(CURATED_PHOTOS)) {
  photosCache[k] = v;
}

async function run() {
  console.log(`Starting photo population for ${INITIAL_PLAYERS.length} INITIAL_PLAYERS...`);

  let count = 0;
  for (let i = 0; i < INITIAL_PLAYERS.length; i++) {
    const p = INITIAL_PLAYERS[i];
    const clean = p.name.replace(/\(GOAT\)|\(goat\)/gi, '').trim().toLowerCase();
    
    let photo = photosCache[clean];
    if (!photo) {
      photo = await fetchWikipediaPhoto(p.name, p.nationality, p.club);
      // Small pause to be respectful to Wikimedia servers
      await new Promise(r => setTimeout(r, 60));
    }
    
    if (photo) {
      p.photo = photo;
      photosCache[clean] = photo;
      photosCache[p.id] = photo;
      count++;
    } else {
      // Fallback to high quality generated card avatar
      p.photo = `https://ui-avatars.com/api/?name=${encodeURIComponent(p.name)}&background=002b49&color=00f2fe&size=200&bold=true`;
    }

    if ((i + 1) % 15 === 0 || i === INITIAL_PLAYERS.length - 1) {
      console.log(`Processed ${i + 1}/${INITIAL_PLAYERS.length} players. Found photos: ${count}`);
    }
  }

  // Save photos cache
  fs.writeFileSync(PHOTOS_CACHE_FILE, JSON.stringify(photosCache, null, 2), 'utf8');
  console.log(`Saved photos cache to ${PHOTOS_CACHE_FILE}`);

  // Re-write public/players.js with photos included!
  const playersJsContent = `const INITIAL_PLAYERS = ${JSON.stringify(INITIAL_PLAYERS, null, 2)};\n\n` +
`function getBitwiseHash(str) {
  let hash = 0;
  const nameLower = str.toLowerCase();
  for (let i = 0; i < nameLower.length; i++) {
    hash = (hash << 5) - hash + nameLower.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % 100;
}

function applyPresentPerformance(p) {
  if (!p) return p;
  if (p._performanceApplied) return p;

  const baseRating = p.rating || 75;
  const nameLower = (p.name || '').toLowerCase();
  let formBoost = 0;
  let formStatus = '➖ Steady';
  let formClass = 'steady';

  const seed = getBitwiseHash(p.name || '');

  if (nameLower.includes('mbappé') || nameLower.includes('mbappe') || nameLower.includes('bellingham') || nameLower.includes('haaland') || nameLower.includes('vinícius') || nameLower.includes('yamal') || nameLower.includes('rodri') || nameLower.includes('kane')) {
    formBoost = 3;
    formStatus = '🔥 On Fire';
    formClass = 'on-fire';
  } else if (seed > 75) {
    formBoost = 3;
    formStatus = '🔥 On Fire';
    formClass = 'on-fire';
  } else if (seed > 45) {
    formBoost = 2;
    formStatus = '📈 Peak Form';
    formClass = 'peak-form';
  } else if (seed > 20) {
    formBoost = 1;
    formStatus = '⚡ Good Form';
    formClass = 'good-form';
  } else {
    formBoost = 0;
    formStatus = '➖ Steady';
    formClass = 'steady';
  }

  const effectiveRating = Math.min(99, Math.max(60, baseRating + formBoost));
  const calcPrice = (r) => {
    if (r >= 90) return 50 + (r - 90) * 15;
    if (r >= 80) return 20 + (r - 80) * 3;
    if (r >= 70) return 5 + (r - 70) * 1.5;
    return Math.max(1, Math.round(r / 15));
  };
  const effectiveBasePrice = calcPrice(effectiveRating);

  return {
    ...p,
    baseRating,
    rating: effectiveRating,
    formBoost,
    formStatus,
    formClass,
    basePrice: effectiveBasePrice,
    _performanceApplied: true
  };
}

function getPlayersDatabase(mode = 'special') {
  let wcPlayers = (typeof WC2026_PLAYERS !== 'undefined') ? WC2026_PLAYERS : [];
  if ((!wcPlayers || wcPlayers.length === 0) && typeof require !== 'undefined') {
    try {
      const imported = require('./wc2026_players.js');
      wcPlayers = imported.WC2026_PLAYERS || imported;
    } catch (e) {
      try {
        const imported2 = require('../wc2026_players.js');
        wcPlayers = imported2.WC2026_PLAYERS || imported2;
      } catch (err) {}
    }
  }

  let list = [];
  if (mode === 'wc2026_elite') {
    list = (wcPlayers && wcPlayers.length > 0) ? wcPlayers.filter(p => (p.rating || 0) >= 80) : [];
    if (list.length === 0) list = INITIAL_PLAYERS;
  } else if (mode === 'wc2026' || mode === 'wc2026_all') {
    list = (wcPlayers && wcPlayers.length > 0) ? wcPlayers : INITIAL_PLAYERS;
  } else {
    list = INITIAL_PLAYERS;
  }
  return list.map(applyPresentPerformance);
}

function getPlayerCareerFantasyPoints(p) {
  const nameLower = (p.name || '').toLowerCase().trim();
  if (nameLower.includes("messi")) return 990;
  if (nameLower.includes("ronaldo")) return 980;
  if (nameLower.includes("mbappé") || nameLower.includes("mbappe")) return 920;
  if (nameLower.includes("haaland")) return 895;
  if (nameLower.includes("kane")) return 830;
  if (nameLower.includes("bellingham")) return 880;
  if (nameLower.includes("chhetri")) return 760;
  if (nameLower.includes("de bruyne")) return 910;
  if (nameLower.includes("neymar")) return 890;
  if (nameLower.includes("salah")) return 880;
  if (nameLower.includes("modric")) return 940;
  if (nameLower.includes("kroos")) return 950;
  if (nameLower.includes("lewandowski")) return 900;
  if (nameLower.includes("courtois")) return 880;
  if (nameLower.includes("van dijk")) return 870;

  const base = Math.round(((p.rating || 80) / 99) * 700);

  let clubPoints = 30;
  const clubLower = (p.club || '').toLowerCase();
  if (clubLower.includes("real madrid") || clubLower.includes("manchester city") || clubLower.includes("bayern") || clubLower.includes("barcelona") || clubLower.includes("liverpool")) {
    clubPoints = 150;
  } else if (clubLower.includes("inter") || clubLower.includes("milan") || clubLower.includes("psg") || clubLower.includes("juventus") || clubLower.includes("arsenal") || clubLower.includes("atlético") || clubLower.includes("atletico") || clubLower.includes("dormund")) {
    clubPoints = 110;
  } else if (clubLower.includes("tottenham") || clubLower.includes("chelsea") || clubLower.includes("manchester united") || clubLower.includes("bayer leverkusen") || clubLower.includes("aston villa") || clubLower.includes("newcastle") || clubLower.includes("bengaluru") || clubLower.includes("mohun bagan") || clubLower.includes("east bengal") || clubLower.includes("goa")) {
    clubPoints = 70;
  }

  let nationPoints = 40;
  const nationLower = (p.nationality || '').toLowerCase();
  if (nationLower.includes("argentina") || nationLower.includes("france") || nationLower.includes("spain") || nationLower.includes("brazil") || nationLower.includes("germany") || nationLower.includes("italy")) {
    nationPoints = 150;
  } else if (nationLower.includes("portugal") || nationLower.includes("uruguay") || nationLower.includes("england") || nationLower.includes("belgium") || nationLower.includes("netherlands") || nationLower.includes("croatia") || nationLower.includes("colombia")) {
    nationPoints = 100;
  } else if (nationLower.includes("india")) {
    nationPoints = 65;
  }

  return Math.min(1000, base + clubPoints + nationPoints);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { INITIAL_PLAYERS, getPlayersDatabase, applyPresentPerformance, getPlayerCareerFantasyPoints };
}
`;

  fs.writeFileSync(PLAYERS_FILE, playersJsContent, 'utf8');
  console.log(`Updated ${PLAYERS_FILE} with photos!`);
}

run().catch(console.error);
