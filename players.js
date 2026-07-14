const INITIAL_PLAYERS = [
  // --- GOALKEEPERS (GK) ---
  { id: "gk1", name: "Thibaut Courtois", position: "GK", rating: 90, club: "Real Madrid", nationality: "Belgium", basePrice: 45 },
  { id: "gk2", name: "Alisson Becker", position: "GK", rating: 89, club: "Liverpool", nationality: "Brazil", basePrice: 40 },
  { id: "gk3", name: "Ederson Moraes", position: "GK", rating: 88, club: "Manchester City", nationality: "Brazil", basePrice: 38 },
  { id: "gk4", name: "Marc-André ter Stegen", position: "GK", rating: 89, club: "Barcelona", nationality: "Germany", basePrice: 35 },
  { id: "gk5", name: "Mike Maignan", position: "GK", rating: 87, club: "AC Milan", nationality: "France", basePrice: 35 },
  { id: "gk6", name: "Jan Oblak", position: "GK", rating: 87, club: "Atlético Madrid", nationality: "Slovenia", basePrice: 30 },
  { id: "gk7", name: "Gianluigi Donnarumma", position: "GK", rating: 87, club: "PSG", nationality: "Italy", basePrice: 40 },
  { id: "gk8", name: "Emiliano Martínez", position: "GK", rating: 86, club: "Aston Villa", nationality: "Argentina", basePrice: 28 },
  { id: "gk9", name: "Manuel Neuer", position: "GK", rating: 85, club: "Bayern Munich", nationality: "Germany", basePrice: 15 },
  { id: "gk10", name: "Yann Sommer", position: "GK", rating: 84, club: "Inter Milan", nationality: "Switzerland", basePrice: 12 },
  { id: "gk11", name: "André Onana", position: "GK", rating: 84, club: "Manchester United", nationality: "Cameroon", basePrice: 25 },
  { id: "gk12", name: "Guglielmo Vicario", position: "GK", rating: 83, club: "Tottenham", nationality: "Italy", basePrice: 22 },
  { id: "gk13", name: "Jordan Pickford", position: "GK", rating: 83, club: "Everton", nationality: "England", basePrice: 18 },

  // --- DEFENDERS (DF) ---
  { id: "df1", name: "Virgil van Dijk", position: "DF", rating: 89, club: "Liverpool", nationality: "Netherlands", basePrice: 50 },
  { id: "df2", name: "Rúben Dias", position: "DF", rating: 89, club: "Manchester City", nationality: "Portugal", basePrice: 55 },
  { id: "df3", name: "William Saliba", position: "DF", rating: 88, club: "Arsenal", nationality: "France", basePrice: 60 },
  { id: "df4", name: "John Stones", position: "DF", rating: 87, club: "Manchester City", nationality: "England", basePrice: 42 },
  { id: "df5", name: "Ronald Araújo", position: "DF", rating: 86, club: "Barcelona", nationality: "Uruguay", basePrice: 50 },
  { id: "df6", name: "Marquinhos", position: "DF", rating: 87, club: "PSG", nationality: "Brazil", basePrice: 40 },
  { id: "df7", name: "Éder Militão", position: "DF", rating: 86, club: "Real Madrid", nationality: "Brazil", basePrice: 48 },
  { id: "df8", name: "Antonio Rüdiger", position: "DF", rating: 87, club: "Real Madrid", nationality: "Germany", basePrice: 38 },
  { id: "df9", name: "Gabriel Magalhães", position: "DF", rating: 86, club: "Arsenal", nationality: "Brazil", basePrice: 45 },
  { id: "df10", name: "Alessandro Bastoni", position: "DF", rating: 86, club: "Inter Milan", nationality: "Italy", basePrice: 48 },
  { id: "df11", name: "Trent Alexander-Arnold", position: "DF", rating: 86, club: "Liverpool", nationality: "England", basePrice: 55 },
  { id: "df12", name: "Achraf Hakimi", position: "DF", rating: 86, club: "PSG", nationality: "Morocco", basePrice: 50 },
  { id: "df13", name: "Theo Hernández", position: "DF", rating: 86, club: "AC Milan", nationality: "France", basePrice: 48 },
  { id: "df14", name: "Alphonso Davies", position: "DF", rating: 84, club: "Bayern Munich", nationality: "Canada", basePrice: 42 },
  { id: "df15", name: "Kyle Walker", position: "DF", rating: 84, club: "Manchester City", nationality: "England", basePrice: 20 },
  { id: "df16", name: "Dani Carvajal", position: "DF", rating: 85, club: "Real Madrid", nationality: "Spain", basePrice: 22 },
  { id: "df17", name: "Jules Koundé", position: "DF", rating: 85, club: "Barcelona", nationality: "France", basePrice: 40 },
  { id: "df18", name: "Josko Gvardiol", position: "DF", rating: 85, club: "Manchester City", nationality: "Croatia", basePrice: 55 },
  { id: "df19", name: "Jeremie Frimpong", position: "DF", rating: 84, club: "Bayer Leverkusen", nationality: "Netherlands", basePrice: 45 },
  { id: "df20", name: "Cristian Romero", position: "DF", rating: 85, club: "Tottenham", nationality: "Argentina", basePrice: 45 },
  { id: "df21", name: "Kim Min-jae", position: "DF", rating: 84, club: "Bayern Munich", nationality: "South Korea", basePrice: 40 },
  { id: "df22", name: "Matthijs de Ligt", position: "DF", rating: 84, club: "Manchester United", nationality: "Netherlands", basePrice: 38 },
  { id: "df23", name: "Kieran Trippier", position: "DF", rating: 83, club: "Newcastle", nationality: "England", basePrice: 12 },
  { id: "df24", name: "Andrew Robertson", position: "DF", rating: 84, club: "Liverpool", nationality: "Scotland", basePrice: 28 },
  { id: "df25", name: "Nico Schlotterbeck", position: "DF", rating: 83, club: "Borussia Dortmund", nationality: "Germany", basePrice: 30 },
  { id: "df26", name: "Fikayo Tomori", position: "DF", rating: 83, club: "AC Milan", nationality: "England", basePrice: 28 },
  { id: "df27", name: "Gleison Bremer", position: "DF", rating: 84, club: "Juventus", nationality: "Brazil", basePrice: 35 },
  { id: "df28", name: "Ben White", position: "DF", rating: 83, club: "Arsenal", nationality: "England", basePrice: 35 },
  { id: "df29", name: "Federico Dimarco", position: "DF", rating: 84, club: "Inter Milan", nationality: "Italy", basePrice: 38 },
  { id: "df30", name: "Pau Torres", position: "DF", rating: 83, club: "Aston Villa", nationality: "Spain", basePrice: 28 },

  // --- MIDFIELDERS (MF) ---
  { id: "mf1", name: "Kevin De Bruyne", position: "MF", rating: 91, club: "Manchester City", nationality: "Belgium", basePrice: 65 },
  { id: "mf2", name: "Rodri (Rodrigo Hernández)", position: "MF", rating: 90, club: "Manchester City", nationality: "Spain", basePrice: 85 },
  { id: "mf3", name: "Jude Bellingham", position: "MF", rating: 90, club: "Real Madrid", nationality: "England", basePrice: 95 },
  { id: "mf4", name: "Declan Rice", position: "MF", rating: 88, club: "Arsenal", nationality: "England", basePrice: 70 },
  { id: "mf5", name: "Martin Ødegaard", position: "MF", rating: 89, club: "Arsenal", nationality: "Norway", basePrice: 75 },
  { id: "mf6", name: "Jamal Musiala", position: "MF", rating: 88, club: "Bayern Munich", nationality: "Germany", basePrice: 80 },
  { id: "mf7", name: "Florian Wirtz", position: "MF", rating: 88, club: "Bayer Leverkusen", nationality: "Germany", basePrice: 80 },
  { id: "mf8", name: "Pedri González", position: "MF", rating: 86, club: "Barcelona", nationality: "Spain", basePrice: 60 },
  { id: "mf9", name: "Federico Valverde", position: "MF", rating: 88, club: "Real Madrid", nationality: "Uruguay", basePrice: 75 },
  { id: "mf10", name: "Bruno Fernandes", position: "MF", rating: 87, club: "Manchester United", nationality: "Portugal", basePrice: 50 },
  { id: "mf11", name: "Ilkay Gündogan", position: "MF", rating: 86, club: "Barcelona", nationality: "Germany", basePrice: 20 },
  { id: "mf12", name: "Bernardo Silva", position: "MF", rating: 88, club: "Manchester City", nationality: "Portugal", basePrice: 55 },
  { id: "mf13", name: "Nicolò Barella", position: "MF", rating: 87, club: "Inter Milan", nationality: "Italy", basePrice: 60 },
  { id: "mf14", name: "Hakan Çalhanoglu", position: "MF", rating: 86, club: "Inter Milan", nationality: "Turkey", basePrice: 40 },
  { id: "mf15", name: "Luka Modric", position: "MF", rating: 85, club: "Real Madrid", nationality: "Croatia", basePrice: 10 },
  { id: "mf16", name: "Alexis Mac Allister", position: "MF", rating: 85, club: "Liverpool", nationality: "Argentina", basePrice: 55 },
  { id: "mf17", name: "Dominik Szoboszlai", position: "MF", rating: 84, club: "Liverpool", nationality: "Hungary", basePrice: 50 },
  { id: "mf18", name: "Aurelien Tchouaméni", position: "MF", rating: 85, club: "Real Madrid", nationality: "France", basePrice: 55 },
  { id: "mf19", name: "Eduardo Camavinga", position: "MF", rating: 85, club: "Real Madrid", nationality: "France", basePrice: 60 },
  { id: "mf20", name: "Joshua Kimmich", position: "MF", rating: 86, club: "Bayern Munich", nationality: "Germany", basePrice: 45 },
  { id: "mf21", name: "Enzo Fernández", position: "MF", rating: 84, club: "Chelsea", nationality: "Argentina", basePrice: 50 },
  { id: "mf22", name: "Bruno Guimarães", position: "MF", rating: 85, club: "Newcastle", nationality: "Brazil", basePrice: 55 },
  { id: "mf23", name: "James Maddison", position: "MF", rating: 84, club: "Tottenham", nationality: "England", basePrice: 38 },
  { id: "mf24", name: "Frenkie de Jong", position: "MF", rating: 86, club: "Barcelona", nationality: "Netherlands", basePrice: 48 },
  { id: "mf25", name: "Gavi (Pablo Martín)", position: "MF", rating: 83, club: "Barcelona", nationality: "Spain", basePrice: 50 },
  { id: "mf26", name: "Granit Xhaka", position: "MF", rating: 84, club: "Bayer Leverkusen", nationality: "Switzerland", basePrice: 20 },
  { id: "mf27", name: "Warren Zaïre-Emery", position: "MF", rating: 82, club: "PSG", nationality: "France", basePrice: 45 },
  { id: "mf28", name: "Douglas Luiz", position: "MF", rating: 84, club: "Juventus", nationality: "Brazil", basePrice: 38 },
  { id: "mf29", name: "Teun Koopmeiners", position: "MF", rating: 83, club: "Juventus", nationality: "Netherlands", basePrice: 35 },
  { id: "mf30", name: "João Palhinha", position: "MF", rating: 84, club: "Bayern Munich", nationality: "Portugal", basePrice: 35 },

  // --- FORWARDS (FW) ---
  { id: "fw1", name: "Kylian Mbappé", position: "FW", rating: 91, club: "Real Madrid", nationality: "France", basePrice: 110 },
  { id: "fw2", name: "Erling Haaland", position: "FW", rating: 91, club: "Manchester City", nationality: "Norway", basePrice: 110 },
  { id: "fw3", name: "Harry Kane", position: "FW", rating: 90, club: "Bayern Munich", nationality: "England", basePrice: 75 },
  { id: "fw4", name: "Vinícius Júnior", position: "FW", rating: 90, club: "Real Madrid", nationality: "Brazil", basePrice: 100 },
  { id: "fw5", name: "Mohamed Salah", position: "FW", rating: 89, club: "Liverpool", nationality: "Egypt", basePrice: 65 },
  { id: "fw6", name: "Bukayo Saka", position: "FW", rating: 89, club: "Arsenal", nationality: "England", basePrice: 85 },
  { id: "fw7", name: "Antoine Griezmann", position: "FW", rating: 88, club: "Atlético Madrid", nationality: "France", basePrice: 35 },
  { id: "fw8", name: "Phil Foden", position: "FW", rating: 89, club: "Manchester City", nationality: "England", basePrice: 85 },
  { id: "fw9", name: "Son Heung-min", position: "FW", rating: 87, club: "Tottenham", nationality: "South Korea", basePrice: 40 },
  { id: "fw10", name: "Robert Lewandowski", position: "FW", rating: 88, club: "Barcelona", nationality: "Poland", basePrice: 25 },
  { id: "fw11", name: "Lautaro Martínez", position: "FW", rating: 89, club: "Inter Milan", nationality: "Argentina", basePrice: 70 },
  { id: "fw12", name: "Victor Osimhen", position: "FW", rating: 88, club: "Galatasaray", nationality: "Nigeria", basePrice: 65 },
  { id: "fw13", name: "Rafael Leão", position: "FW", rating: 86, club: "AC Milan", nationality: "Portugal", basePrice: 60 },
  { id: "fw14", name: "Rodrygo Goes", position: "FW", rating: 86, club: "Real Madrid", nationality: "Brazil", basePrice: 65 },
  { id: "fw15", name: "(GOAT) Lionel Messi", position: "FW", rating: 88, club: "Inter Miami", nationality: "Argentina", basePrice: 20 },
  { id: "fw16", name: "Cristiano Ronaldo", position: "FW", rating: 86, club: "Al Nassr", nationality: "Portugal", basePrice: 15 },
  { id: "fw17", name: "Neymar Jr", position: "FW", rating: 86, club: "Al Hilal", nationality: "Brazil", basePrice: 20 },
  { id: "fw18", name: "Luis Díaz", position: "FW", rating: 84, club: "Liverpool", nationality: "Colombia", basePrice: 48 },
  { id: "fw19", name: "Marcus Rashford", position: "FW", rating: 84, club: "Manchester United", nationality: "England", basePrice: 40 },
  { id: "fw20", name: "Gabriel Martinelli", position: "FW", rating: 84, club: "Arsenal", nationality: "Brazil", basePrice: 45 },
  { id: "fw21", name: "Khvicha Kvaratskhelia", position: "FW", rating: 85, club: "Napoli", nationality: "Georgia", basePrice: 55 },
  { id: "fw22", name: "Ousmane Dembélé", position: "FW", rating: 85, club: "PSG", nationality: "France", basePrice: 42 },
  { id: "fw23", name: "Leroy Sané", position: "FW", rating: 84, club: "Bayern Munich", nationality: "Germany", basePrice: 40 },
  { id: "fw24", name: "Julián Álvarez", position: "FW", rating: 84, club: "Atlético Madrid", nationality: "Argentina", basePrice: 55 },
  { id: "fw25", name: "Darwin Núñez", position: "FW", rating: 82, club: "Liverpool", nationality: "Uruguay", basePrice: 35 },
  { id: "fw26", name: "Alexander Isak", position: "FW", rating: 84, club: "Newcastle", nationality: "Sweden", basePrice: 55 },
  { id: "fw27", name: "Ollie Watkins", position: "FW", rating: 84, club: "Aston Villa", nationality: "England", basePrice: 48 },
  { id: "fw28", name: "Dušan Vlahović", position: "FW", rating: 84, club: "Juventus", nationality: "Serbia", basePrice: 45 },
  { id: "fw29", name: "Viktor Gyökeres", position: "FW", rating: 83, club: "Sporting CP", nationality: "Sweden", basePrice: 45 },
  { id: "fw30", name: "Cole Palmer", position: "FW", rating: 86, club: "Chelsea", nationality: "England", basePrice: 70 },
  { id: "fw31", name: "Lamine Yamal", position: "FW", rating: 84, club: "Barcelona", nationality: "Spain", basePrice: 75 },
  { id: "fw32", name: "Nico Williams", position: "FW", rating: 84, club: "Athletic Bilbao", nationality: "Spain", basePrice: 50 },

  // --- INDIAN PLAYERS ---
  { id: "ind1", name: "Sunil Chhetri", position: "FW", rating: 75, club: "Bengaluru FC", nationality: "India", basePrice: 5 },
  { id: "ind2", name: "Gurpreet Singh Sandhu", position: "GK", rating: 72, club: "Bengaluru FC", nationality: "India", basePrice: 3 },
  { id: "ind3", name: "Sandesh Jhingan", position: "DF", rating: 73, club: "FC Goa", nationality: "India", basePrice: 3 },
  { id: "ind4", name: "Lallianzuala Chhangte", position: "FW", rating: 74, club: "Mumbai City FC", nationality: "India", basePrice: 4 },
  { id: "ind5", name: "Anirudh Thapa", position: "MF", rating: 71, club: "Mohun Bagan SG", nationality: "India", basePrice: 3 },
  { id: "ind6", name: "Liston Colaco", position: "FW", rating: 72, club: "Mohun Bagan SG", nationality: "India", basePrice: 3 },
  { id: "ind7", name: "Subhasish Bose", position: "DF", rating: 70, club: "Mohun Bagan SG", nationality: "India", basePrice: 2 },
  { id: "ind8", name: "Sahal Abdul Samad", position: "MF", rating: 72, club: "Mohun Bagan SG", nationality: "India", basePrice: 3 },
  { id: "ind9", name: "Manvir Singh", position: "FW", rating: 71, club: "Mohun Bagan SG", nationality: "India", basePrice: 3 },
  { id: "ind10", name: "Anwar Ali", position: "DF", rating: 71, club: "East Bengal FC", nationality: "India", basePrice: 2 },
  { id: "ind11", name: "Lalengmawia Ralte", position: "MF", rating: 72, club: "Mohun Bagan SG", nationality: "India", basePrice: 3 },
  { id: "ind12", name: "Jeakson Singh", position: "MF", rating: 70, club: "East Bengal FC", nationality: "India", basePrice: 2 },
  { id: "ind13", name: "Vishal Kaith", position: "GK", rating: 71, club: "Mohun Bagan SG", nationality: "India", basePrice: 2 },
  { id: "ind14", name: "Mehtab Singh", position: "DF", rating: 69, club: "Mumbai City FC", nationality: "India", basePrice: 2 },
  { id: "ind15", name: "Naorem Mahesh Singh", position: "FW", rating: 72, club: "East Bengal FC", nationality: "India", basePrice: 3 }
];

// Helper to retrieve players dynamically without localStorage
function getPlayersDatabase() {
  const combined = [...INITIAL_PLAYERS];
  const existingNames = new Set(combined.map(p => p.name.toLowerCase().trim()));
  const existingIds = new Set(combined.map(p => p.id));

  if (typeof WC2026_PLAYERS !== 'undefined') {
    WC2026_PLAYERS.forEach(p => {
      if (!existingIds.has(p.id) && !existingNames.has(p.name.toLowerCase().trim())) {
        combined.push(p);
        existingIds.add(p.id);
        existingNames.add(p.name.toLowerCase().trim());
      }
    });
  }
  return combined;
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
  module.exports = { INITIAL_PLAYERS, getPlayersDatabase, getPlayerCareerFantasyPoints };
}
