const GLOBAL_INITIAL_PLAYERS = [
  {
    "id": "gk1",
    "name": "Thibaut Courtois",
    "position": "GK",
    "rating": 90,
    "club": "Real Madrid",
    "nationality": "Belgium",
    "basePrice": 45,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Thibaut_Courtois_at_the_2018_World_Cup_%28cropped%29.jpg/330px-Thibaut_Courtois_at_the_2018_World_Cup_%28cropped%29.jpg"
  },
  {
    "id": "gk2",
    "name": "Alisson Becker",
    "position": "GK",
    "rating": 89,
    "club": "Liverpool",
    "nationality": "Brazil",
    "basePrice": 40,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Alisson_Becker_Brazil_V_Morocco_13_June_2026-117_%28cropped%29.jpg/330px-Alisson_Becker_Brazil_V_Morocco_13_June_2026-117_%28cropped%29.jpg"
  },
  {
    "id": "gk3",
    "name": "Ederson Moraes",
    "position": "GK",
    "rating": 88,
    "club": "Manchester City",
    "nationality": "Brazil",
    "basePrice": 38,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Ederson_Brazil_V_Morocco_13_June_2026-14_%28cropped%29.jpg/330px-Ederson_Brazil_V_Morocco_13_June_2026-14_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "gk4",
    "name": "Marc-André ter Stegen",
    "position": "GK",
    "rating": 89,
    "club": "Barcelona",
    "nationality": "Germany",
    "basePrice": 35,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Marc-Andre_Ter_Stegen_ACCI_FCBARCELONA_Turisme_Catalunya_gira_pretemporada_CATPRESS.jpg/330px-Marc-Andre_Ter_Stegen_ACCI_FCBARCELONA_Turisme_Catalunya_gira_pretemporada_CATPRESS.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "gk5",
    "name": "Mike Maignan",
    "position": "GK",
    "rating": 87,
    "club": "AC Milan",
    "nationality": "France",
    "basePrice": 35,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Mike_Maignan_France_v_Norway_26_June_26-132_%28cropped%29.jpg/330px-Mike_Maignan_France_v_Norway_26_June_26-132_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "gk6",
    "name": "Jan Oblak",
    "position": "GK",
    "rating": 87,
    "club": "Atlético Madrid",
    "nationality": "Slovenia",
    "basePrice": 30,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Jan_Oblak_2019.jpg/330px-Jan_Oblak_2019.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "gk7",
    "name": "Gianluigi Donnarumma",
    "position": "GK",
    "rating": 87,
    "club": "PSG",
    "nationality": "Italy",
    "basePrice": 40,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Norway_Italy_-_June_2025_A_17_%28Gianluigi_Donnarumma%29.jpg/330px-Norway_Italy_-_June_2025_A_17_%28Gianluigi_Donnarumma%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "gk8",
    "name": "Emiliano Martínez",
    "position": "GK",
    "rating": 86,
    "club": "Aston Villa",
    "nationality": "Argentina",
    "basePrice": 28,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Emiliano_Martinez_Argentina_v_Spain_19_July_2026-269.jpg/330px-Emiliano_Martinez_Argentina_v_Spain_19_July_2026-269.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "gk9",
    "name": "Manuel Neuer",
    "position": "GK",
    "rating": 85,
    "club": "Bayern Munich",
    "nationality": "Germany",
    "basePrice": 15,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Manuel_Neuer_Ecuador_v_Germany_25_June_2026-148.jpg/330px-Manuel_Neuer_Ecuador_v_Germany_25_June_2026-148.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "gk10",
    "name": "Yann Sommer",
    "position": "GK",
    "rating": 84,
    "club": "Inter Milan",
    "nationality": "Switzerland",
    "basePrice": 12,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/FC_Salzburg_gegen_Inter_Mailand_%28Testspiel_2023-08-09%29_69.jpg/330px-FC_Salzburg_gegen_Inter_Mailand_%28Testspiel_2023-08-09%29_69.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "gk11",
    "name": "André Onana",
    "position": "GK",
    "rating": 84,
    "club": "Manchester United",
    "nationality": "Cameroon",
    "basePrice": 25,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Andr%C3%A9_Onana.jpg/330px-Andr%C3%A9_Onana.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "gk12",
    "name": "Guglielmo Vicario",
    "position": "GK",
    "rating": 83,
    "club": "Tottenham",
    "nationality": "Italy",
    "basePrice": 22,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Guglielmo_Vicario.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
  },
  {
    "id": "gk13",
    "name": "Jordan Pickford",
    "position": "GK",
    "rating": 83,
    "club": "Everton",
    "nationality": "England",
    "basePrice": 18,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Jordan_Pickford_England_v_Ghana_23_June_2026-316_%28cropped%29.jpg/330px-Jordan_Pickford_England_v_Ghana_23_June_2026-316_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "df1",
    "name": "Virgil van Dijk",
    "position": "DF",
    "rating": 89,
    "club": "Liverpool",
    "nationality": "Netherlands",
    "basePrice": 50,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/20160604_AUT_NED_8876_%28cropped%29.jpg/330px-20160604_AUT_NED_8876_%28cropped%29.jpg"
  },
  {
    "id": "df2",
    "name": "Rúben Dias",
    "position": "DF",
    "rating": 89,
    "club": "Manchester City",
    "nationality": "Portugal",
    "basePrice": 55,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Diogo_Costa_Ruben_Dias_Croatia_v_Portugal_2_July_2026-181_%28cropped%29.jpg/330px-Diogo_Costa_Ruben_Dias_Croatia_v_Portugal_2_July_2026-181_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "df3",
    "name": "William Saliba",
    "position": "DF",
    "rating": 88,
    "club": "Arsenal",
    "nationality": "France",
    "basePrice": 60,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/William_Saliba_France_v_Senegal_16_June_2026-336_%28cropped%29.jpg/330px-William_Saliba_France_v_Senegal_16_June_2026-336_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "df4",
    "name": "John Stones",
    "position": "DF",
    "rating": 87,
    "club": "Manchester City",
    "nationality": "England",
    "basePrice": 42,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/John_Stones_England_v_Ghana_23_June_2026-038.jpg/330px-John_Stones_England_v_Ghana_23_June_2026-038.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "df5",
    "name": "Ronald Araújo",
    "position": "DF",
    "rating": 86,
    "club": "Barcelona",
    "nationality": "Uruguay",
    "basePrice": 50,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg/330px-FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "df6",
    "name": "Marquinhos",
    "position": "DF",
    "rating": 87,
    "club": "PSG",
    "nationality": "Brazil",
    "basePrice": 40,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Marquinhos_Brazil_V_Morocco_13_June_2026-153_%28cropped%29.jpg/330px-Marquinhos_Brazil_V_Morocco_13_June_2026-153_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "df7",
    "name": "Éder Militão",
    "position": "DF",
    "rating": 86,
    "club": "Real Madrid",
    "nationality": "Brazil",
    "basePrice": 48,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Eder_Militao_2021.jpg/330px-Eder_Militao_2021.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "df8",
    "name": "Antonio Rüdiger",
    "position": "DF",
    "rating": 87,
    "club": "Real Madrid",
    "nationality": "Germany",
    "basePrice": 38,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Antonio_Rudiger_Ecuador_v_Germany_25_June_2026-055_%28cropped%29.jpg/330px-Antonio_Rudiger_Ecuador_v_Germany_25_June_2026-055_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "df9",
    "name": "Gabriel Magalhães",
    "position": "DF",
    "rating": 86,
    "club": "Arsenal",
    "nationality": "Brazil",
    "basePrice": 45,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Gabriel_Magalhaes_Brazil_V_Morocco_13_June_2026-132_%28cropped%29.jpg/330px-Gabriel_Magalhaes_Brazil_V_Morocco_13_June_2026-132_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "df10",
    "name": "Alessandro Bastoni",
    "position": "DF",
    "rating": 86,
    "club": "Inter Milan",
    "nationality": "Italy",
    "basePrice": 48,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Norway_Italy_-_June_2025_A_36_%28cropped%29.jpg/330px-Norway_Italy_-_June_2025_A_36_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "df11",
    "name": "Trent Alexander-Arnold",
    "position": "DF",
    "rating": 86,
    "club": "Liverpool",
    "nationality": "England",
    "basePrice": 55,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Trent_Alexander-Arnold_2018_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
  },
  {
    "id": "df12",
    "name": "Achraf Hakimi",
    "position": "DF",
    "rating": 86,
    "club": "PSG",
    "nationality": "Morocco",
    "basePrice": 50,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Achraf_Hakimi_Morocco_v_Norway_7_June_2026-16.jpg/330px-Achraf_Hakimi_Morocco_v_Norway_7_June_2026-16.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "df13",
    "name": "Theo Hernández",
    "position": "DF",
    "rating": 86,
    "club": "AC Milan",
    "nationality": "France",
    "basePrice": 48,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Theo_Hernandez_France_v_Senegal_16_June_2026-222_%28cropped%29.jpg/330px-Theo_Hernandez_France_v_Senegal_16_June_2026-222_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "df14",
    "name": "Alphonso Davies",
    "position": "DF",
    "rating": 84,
    "club": "Bayern Munich",
    "nationality": "Canada",
    "basePrice": 42,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Alphonso_Davies_Canada_v_Qatar_18_June_2026-007_%28cropped%29.jpg/330px-Alphonso_Davies_Canada_v_Qatar_18_June_2026-007_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "df15",
    "name": "Kyle Walker",
    "position": "DF",
    "rating": 84,
    "club": "Manchester City",
    "nationality": "England",
    "basePrice": 20,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Kyle_Walker.jpg/330px-Kyle_Walker.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "df16",
    "name": "Dani Carvajal",
    "position": "DF",
    "rating": 85,
    "club": "Real Madrid",
    "nationality": "Spain",
    "basePrice": 22,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/UEFA_EURO_qualifiers_Sweden_vs_Spain_20191015_Dani_Carvajal_10_%28cropped%29.jpg/330px-UEFA_EURO_qualifiers_Sweden_vs_Spain_20191015_Dani_Carvajal_10_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "df17",
    "name": "Jules Koundé",
    "position": "DF",
    "rating": 85,
    "club": "Barcelona",
    "nationality": "France",
    "basePrice": 40,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Jules_Kounde_France_v_Senegal_16_June_2026-449_%28cropped%29.jpg/330px-Jules_Kounde_France_v_Senegal_16_June_2026-449_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "df18",
    "name": "Josko Gvardiol",
    "position": "DF",
    "rating": 85,
    "club": "Manchester City",
    "nationality": "Croatia",
    "basePrice": 55,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Josko_Gvardiol_Croatia_v_Portugal_2_July_2026-262.jpg/330px-Josko_Gvardiol_Croatia_v_Portugal_2_July_2026-262.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "df19",
    "name": "Jeremie Frimpong",
    "position": "DF",
    "rating": 84,
    "club": "Bayer Leverkusen",
    "nationality": "Netherlands",
    "basePrice": 45,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Jeremie_Frimpong_04012026_%283%29_%28cropped%29.jpg/330px-Jeremie_Frimpong_04012026_%283%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "df20",
    "name": "Cristian Romero",
    "position": "DF",
    "rating": 85,
    "club": "Tottenham",
    "nationality": "Argentina",
    "basePrice": 45,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Cristian_Romero_Argentina_v_Egypt_7_July_2026-108.jpg/330px-Cristian_Romero_Argentina_v_Egypt_7_July_2026-108.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "df21",
    "name": "Kim Min-jae",
    "position": "DF",
    "rating": 84,
    "club": "Bayern Munich",
    "nationality": "South Korea",
    "basePrice": 40,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/FC_Red_Bull_Salzburg_gegen_Bayern_M%C3%BCnchen_%282025-01-06_Testspiel%29_26.jpg/330px-FC_Red_Bull_Salzburg_gegen_Bayern_M%C3%BCnchen_%282025-01-06_Testspiel%29_26.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "df22",
    "name": "Matthijs de Ligt",
    "position": "DF",
    "rating": 84,
    "club": "Manchester United",
    "nationality": "Netherlands",
    "basePrice": 38,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/c/c9/2022-07-30_Fu%C3%9Fball%2C_M%C3%A4nner%2C_DFL-Supercup%2C_RB_Leipzig_-_FC_Bayern_M%C3%BCnchen_Matthijs_de_Ligt_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
  },
  {
    "id": "df23",
    "name": "Kieran Trippier",
    "position": "DF",
    "rating": 83,
    "club": "Newcastle",
    "nationality": "England",
    "basePrice": 12,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Kieran_Trippier_2018-07-14_1.jpg/330px-Kieran_Trippier_2018-07-14_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "df24",
    "name": "Andrew Robertson",
    "position": "DF",
    "rating": 84,
    "club": "Liverpool",
    "nationality": "Scotland",
    "basePrice": 28,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Andy_Robertson_Scotland_v_Bolivia_6_June_2026-43.jpg/330px-Andy_Robertson_Scotland_v_Bolivia_6_June_2026-43.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "df25",
    "name": "Nico Schlotterbeck",
    "position": "DF",
    "rating": 83,
    "club": "Borussia Dortmund",
    "nationality": "Germany",
    "basePrice": 30,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/2023-08-12_TSV_Schott_Mainz_gegen_Borussia_Dortmund_%28DFB-Pokal_2023-24%29_by_Sandro_Halank%E2%80%93069.jpg/330px-2023-08-12_TSV_Schott_Mainz_gegen_Borussia_Dortmund_%28DFB-Pokal_2023-24%29_by_Sandro_Halank%E2%80%93069.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "df26",
    "name": "Fikayo Tomori",
    "position": "DF",
    "rating": 83,
    "club": "AC Milan",
    "nationality": "England",
    "basePrice": 28,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/FC_Salzburg_vs._AC_Mailand_%28UEFA_Championsleague_2022-09-06%29_42.jpg/330px-FC_Salzburg_vs._AC_Mailand_%28UEFA_Championsleague_2022-09-06%29_42.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "df27",
    "name": "Gleison Bremer",
    "position": "DF",
    "rating": 84,
    "club": "Juventus",
    "nationality": "Brazil",
    "basePrice": 35,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Bremer_Brazil_V_Morocco_13_June_2026-143_%28cropped%29.jpg/330px-Bremer_Brazil_V_Morocco_13_June_2026-143_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "df28",
    "name": "Ben White",
    "position": "DF",
    "rating": 83,
    "club": "Arsenal",
    "nationality": "England",
    "basePrice": 35,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/Ben_White_2018.jpg/330px-Ben_White_2018.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "df29",
    "name": "Federico Dimarco",
    "position": "DF",
    "rating": 84,
    "club": "Inter Milan",
    "nationality": "Italy",
    "basePrice": 38,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Norway_Italy_-_June_2025_A_26_%28cropped%29.jpg/330px-Norway_Italy_-_June_2025_A_26_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "df30",
    "name": "Pau Torres",
    "position": "DF",
    "rating": 83,
    "club": "Aston Villa",
    "nationality": "Spain",
    "basePrice": 28,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/Pau_Torres_April_2026_%28cropped%29.jpg/330px-Pau_Torres_April_2026_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "mf1",
    "name": "Kevin De Bruyne",
    "position": "MF",
    "rating": 91,
    "club": "Manchester City",
    "nationality": "Belgium",
    "basePrice": 65,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Kevin_De_Bruyne_201807091.jpg/330px-Kevin_De_Bruyne_201807091.jpg"
  },
  {
    "id": "mf2",
    "name": "Rodri (Rodrigo Hernández)",
    "position": "MF",
    "rating": 90,
    "club": "Manchester City",
    "nationality": "Spain",
    "basePrice": 85,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Rodri_Argentina_v_Spain_19_July_2026-187_%28cropped%29.jpg/330px-Rodri_Argentina_v_Spain_19_July_2026-187_%28cropped%29.jpg"
  },
  {
    "id": "mf3",
    "name": "Jude Bellingham",
    "position": "MF",
    "rating": 90,
    "club": "Real Madrid",
    "nationality": "England",
    "basePrice": 95,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Jude_Bellingham_England_v_Ghana_23_June_2026-061_%28cropped%29.jpg/330px-Jude_Bellingham_England_v_Ghana_23_June_2026-061_%28cropped%29.jpg"
  },
  {
    "id": "mf4",
    "name": "Declan Rice",
    "position": "MF",
    "rating": 88,
    "club": "Arsenal",
    "nationality": "England",
    "basePrice": 70,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Declan_Rice_England_v_Ghana_23_June_2026-150.jpg/330px-Declan_Rice_England_v_Ghana_23_June_2026-150.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "mf5",
    "name": "Martin Ødegaard",
    "position": "MF",
    "rating": 89,
    "club": "Arsenal",
    "nationality": "Norway",
    "basePrice": 75,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Martin_Odegaard_France_v_Norway_26_June_26-014.jpg/330px-Martin_Odegaard_France_v_Norway_26_June_26-014.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "mf6",
    "name": "Jamal Musiala",
    "position": "MF",
    "rating": 88,
    "club": "Bayern Munich",
    "nationality": "Germany",
    "basePrice": 80,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Jamal_Musiala_Ecuador_v_Germany_25_June_2026-174_%28cropped%29.jpg/330px-Jamal_Musiala_Ecuador_v_Germany_25_June_2026-174_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "mf7",
    "name": "Florian Wirtz",
    "position": "MF",
    "rating": 88,
    "club": "Bayer Leverkusen",
    "nationality": "Germany",
    "basePrice": 80,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Florian_Wirtz_Ecuador_v_Germany_25_June_2026-181_%28cropped%29.jpg/330px-Florian_Wirtz_Ecuador_v_Germany_25_June_2026-181_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "mf8",
    "name": "Pedri González",
    "position": "MF",
    "rating": 86,
    "club": "Barcelona",
    "nationality": "Spain",
    "basePrice": 60,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Pedri_France_v_Spain_7.24.26-245.jpg/330px-Pedri_France_v_Spain_7.24.26-245.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "mf9",
    "name": "Federico Valverde",
    "position": "MF",
    "rating": 88,
    "club": "Real Madrid",
    "nationality": "Uruguay",
    "basePrice": 75,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Federico_Valverde_2021_%28cropped%29.jpg/330px-Federico_Valverde_2021_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "mf10",
    "name": "Bruno Fernandes",
    "position": "MF",
    "rating": 87,
    "club": "Manchester United",
    "nationality": "Portugal",
    "basePrice": 50,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Bruno_Fernandes_USMNT_v_Portugal_Mar_31_2026-27_%28cropped%29.jpg/330px-Bruno_Fernandes_USMNT_v_Portugal_Mar_31_2026-27_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "mf11",
    "name": "Ilkay Gündogan",
    "position": "MF",
    "rating": 86,
    "club": "Barcelona",
    "nationality": "Germany",
    "basePrice": 20,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/20180602_FIFA_Friendly_Match_Austria_vs._Germany_%C4%B0lkay_G%C3%BCndo%C4%9Fan_850_0728.jpg/330px-20180602_FIFA_Friendly_Match_Austria_vs._Germany_%C4%B0lkay_G%C3%BCndo%C4%9Fan_850_0728.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "mf12",
    "name": "Bernardo Silva",
    "position": "MF",
    "rating": 88,
    "club": "Manchester City",
    "nationality": "Portugal",
    "basePrice": 55,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Bernardo_Silva_Croatia_v_Portugal_2_July_2026-238.jpg/330px-Bernardo_Silva_Croatia_v_Portugal_2_July_2026-238.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "mf13",
    "name": "Nicolò Barella",
    "position": "MF",
    "rating": 87,
    "club": "Inter Milan",
    "nationality": "Italy",
    "basePrice": 60,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Nicol%C3%B2_Barella_in_2021_%28cropped_2%29.jpg/330px-Nicol%C3%B2_Barella_in_2021_%28cropped_2%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "mf14",
    "name": "Hakan Çalhanoglu",
    "position": "MF",
    "rating": 86,
    "club": "Inter Milan",
    "nationality": "Turkey",
    "basePrice": 40,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/AUT_vs._TUR_2016-03-29_%28342%29.jpg/330px-AUT_vs._TUR_2016-03-29_%28342%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "mf15",
    "name": "Luka Modric",
    "position": "MF",
    "rating": 85,
    "club": "Real Madrid",
    "nationality": "Croatia",
    "basePrice": 10,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Luka_Modri%C4%87_at_the_2018_World_Cup_%28cropped%29.jpg/330px-Luka_Modri%C4%87_at_the_2018_World_Cup_%28cropped%29.jpg"
  },
  {
    "id": "mf16",
    "name": "Alexis Mac Allister",
    "position": "MF",
    "rating": 85,
    "club": "Liverpool",
    "nationality": "Argentina",
    "basePrice": 55,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Alexis_Mac_Allister_Argentina_v_Spain_19_July_2026-162_%28cropped%29.jpg/330px-Alexis_Mac_Allister_Argentina_v_Spain_19_July_2026-162_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "mf17",
    "name": "Dominik Szoboszlai",
    "position": "MF",
    "rating": 84,
    "club": "Liverpool",
    "nationality": "Hungary",
    "basePrice": 50,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Dominik_Szoboszlai_04012026_%281%29.jpg/330px-Dominik_Szoboszlai_04012026_%281%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "mf18",
    "name": "Aurelien Tchouaméni",
    "position": "MF",
    "rating": 85,
    "club": "Real Madrid",
    "nationality": "France",
    "basePrice": 55,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Aurelien_Tchouameni_France_v_Senegal_16_June_2026-447_%28cropped%29.jpg/330px-Aurelien_Tchouameni_France_v_Senegal_16_June_2026-447_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "mf19",
    "name": "Eduardo Camavinga",
    "position": "MF",
    "rating": 85,
    "club": "Real Madrid",
    "nationality": "France",
    "basePrice": 60,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Ofrenda_de_la_Liga_y_la_Champions-13-L.Mill%C3%A1n_%2852109790215%29_%28cropped%29.jpg/330px-Ofrenda_de_la_Liga_y_la_Champions-13-L.Mill%C3%A1n_%2852109790215%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "mf20",
    "name": "Joshua Kimmich",
    "position": "MF",
    "rating": 86,
    "club": "Bayern Munich",
    "nationality": "Germany",
    "basePrice": 45,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Joshua_Kimmich_Ecuador_v_Germany_25_June_2026-149.jpg/330px-Joshua_Kimmich_Ecuador_v_Germany_25_June_2026-149.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "mf21",
    "name": "Enzo Fernández",
    "position": "MF",
    "rating": 84,
    "club": "Chelsea",
    "nationality": "Argentina",
    "basePrice": 50,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Enzo_Fernandez_Argentina_v_Spain_19_July_2026-050_%28cropped%29.jpg/330px-Enzo_Fernandez_Argentina_v_Spain_19_July_2026-050_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "mf22",
    "name": "Bruno Guimarães",
    "position": "MF",
    "rating": 85,
    "club": "Newcastle",
    "nationality": "Brazil",
    "basePrice": 55,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Bruno_Guimaraes_Brazil_V_Morocco_13_June_2026-78_%28cropped%29.jpg/330px-Bruno_Guimaraes_Brazil_V_Morocco_13_June_2026-78_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "mf23",
    "name": "James Maddison",
    "position": "MF",
    "rating": 84,
    "club": "Tottenham",
    "nationality": "England",
    "basePrice": 38,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/James_Maddison_pre-match_training_%28cropped%29.jpg/330px-James_Maddison_pre-match_training_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "mf24",
    "name": "Frenkie de Jong",
    "position": "MF",
    "rating": 86,
    "club": "Barcelona",
    "nationality": "Netherlands",
    "basePrice": 48,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Frenkie_De_Jong_%282025%29_%28cropped%29.png/330px-Frenkie_De_Jong_%282025%29_%28cropped%29.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "mf25",
    "name": "Gavi (Pablo Martín)",
    "position": "MF",
    "rating": 83,
    "club": "Barcelona",
    "nationality": "Spain",
    "basePrice": 50,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Gavi_Argentina_v_Spain_19_July_2026-013.jpg/330px-Gavi_Argentina_v_Spain_19_July_2026-013.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "mf26",
    "name": "Granit Xhaka",
    "position": "MF",
    "rating": 84,
    "club": "Bayer Leverkusen",
    "nationality": "Switzerland",
    "basePrice": 20,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Granit_Xhaka_%28cropped%29.jpg/330px-Granit_Xhaka_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "mf27",
    "name": "Warren Zaïre-Emery",
    "position": "MF",
    "rating": 82,
    "club": "PSG",
    "nationality": "France",
    "basePrice": 45,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Warren_Zaire-Emery_France_v_Senegal_16_June_2026-279.jpg/330px-Warren_Zaire-Emery_France_v_Senegal_16_June_2026-279.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "mf28",
    "name": "Douglas Luiz",
    "position": "MF",
    "rating": 84,
    "club": "Juventus",
    "nationality": "Brazil",
    "basePrice": 38,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Douglas_Luiz_April_2026_%28cropped%29.jpg/330px-Douglas_Luiz_April_2026_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "mf29",
    "name": "Teun Koopmeiners",
    "position": "MF",
    "rating": 83,
    "club": "Juventus",
    "nationality": "Netherlands",
    "basePrice": 35,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Teun_Koopmeiners_Manchester_United_v_Atalanta_BC%2C_20_October_2021_%2812%29_%28cropped%29.jpg/330px-Teun_Koopmeiners_Manchester_United_v_Atalanta_BC%2C_20_October_2021_%2812%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "mf30",
    "name": "João Palhinha",
    "position": "MF",
    "rating": 84,
    "club": "Bayern Munich",
    "nationality": "Portugal",
    "basePrice": 35,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Joaopalhinha.jpg/330px-Joaopalhinha.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "fw1",
    "name": "Kylian Mbappé",
    "position": "FW",
    "rating": 91,
    "club": "Real Madrid",
    "nationality": "France",
    "basePrice": 110,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Kylian_Mbappe_France_v_Senegal_16_June_2026-391_%28cropped%29.jpg/330px-Kylian_Mbappe_France_v_Senegal_16_June_2026-391_%28cropped%29.jpg"
  },
  {
    "id": "fw2",
    "name": "Erling Haaland",
    "position": "FW",
    "rating": 91,
    "club": "Manchester City",
    "nationality": "Norway",
    "basePrice": 110,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Erling_Haaland_Morocco_v_Norway_7_June_2026-51.jpg/330px-Erling_Haaland_Morocco_v_Norway_7_June_2026-51.jpg"
  },
  {
    "id": "fw3",
    "name": "Harry Kane",
    "position": "FW",
    "rating": 90,
    "club": "Bayern Munich",
    "nationality": "England",
    "basePrice": 75,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Harry_Kane_England_v_Ghana_23_June_2026-319_%28cropped%29.jpg/330px-Harry_Kane_England_v_Ghana_23_June_2026-319_%28cropped%29.jpg"
  },
  {
    "id": "fw4",
    "name": "Vinícius Júnior",
    "position": "FW",
    "rating": 90,
    "club": "Real Madrid",
    "nationality": "Brazil",
    "basePrice": 100,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Vin%C3%ADcius_J%C3%BAnior_Brazil_V_Morocco_13_June_2026-207_%28cropped%29.jpg/330px-Vin%C3%ADcius_J%C3%BAnior_Brazil_V_Morocco_13_June_2026-207_%28cropped%29.jpg"
  },
  {
    "id": "fw5",
    "name": "Mohamed Salah",
    "position": "FW",
    "rating": 89,
    "club": "Liverpool",
    "nationality": "Egypt",
    "basePrice": 65,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Mohamed_Salah_2018.jpg/330px-Mohamed_Salah_2018.jpg"
  },
  {
    "id": "fw6",
    "name": "Bukayo Saka",
    "position": "FW",
    "rating": 89,
    "club": "Arsenal",
    "nationality": "England",
    "basePrice": 85,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Bukayo_Saka_England_v_Ghana_23_June_2026-037_%28cropped%29.jpg/330px-Bukayo_Saka_England_v_Ghana_23_June_2026-037_%28cropped%29.jpg"
  },
  {
    "id": "fw7",
    "name": "Antoine Griezmann",
    "position": "FW",
    "rating": 88,
    "club": "Atlético Madrid",
    "nationality": "France",
    "basePrice": 35,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/FRA-ARG_%2810%29_%28cropped%29.jpg/330px-FRA-ARG_%2810%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "fw8",
    "name": "Phil Foden",
    "position": "FW",
    "rating": 89,
    "club": "Manchester City",
    "nationality": "England",
    "basePrice": 85,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Phil_Foden_England_v_Ghana_23_June_2026-302_%28cropped%29.jpg/330px-Phil_Foden_England_v_Ghana_23_June_2026-302_%28cropped%29.jpg"
  },
  {
    "id": "fw9",
    "name": "Son Heung-min",
    "position": "FW",
    "rating": 87,
    "club": "Tottenham",
    "nationality": "South Korea",
    "basePrice": 40,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/BFA_2023_-2_Heung-Min_Son_%28cropped%29.jpg/330px-BFA_2023_-2_Heung-Min_Son_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "fw10",
    "name": "Robert Lewandowski",
    "position": "FW",
    "rating": 88,
    "club": "Barcelona",
    "nationality": "Poland",
    "basePrice": 25,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Robert_Lewandowski_2018.jpg/330px-Robert_Lewandowski_2018.jpg"
  },
  {
    "id": "fw11",
    "name": "Lautaro Martínez",
    "position": "FW",
    "rating": 89,
    "club": "Inter Milan",
    "nationality": "Argentina",
    "basePrice": 70,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Lautaro_Martinez_Argentina_v_Spain_19_July_2026-049_%28cropped%29.jpg/330px-Lautaro_Martinez_Argentina_v_Spain_19_July_2026-049_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "fw12",
    "name": "Victor Osimhen",
    "position": "FW",
    "rating": 88,
    "club": "Galatasaray",
    "nationality": "Nigeria",
    "basePrice": 65,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Victor-osimhen-nigeria-2024-3-4.jpg/330px-Victor-osimhen-nigeria-2024-3-4.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "fw13",
    "name": "Rafael Leão",
    "position": "FW",
    "rating": 86,
    "club": "AC Milan",
    "nationality": "Portugal",
    "basePrice": 60,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/RafaelLe%C3%A3oPortugal23.jpg/330px-RafaelLe%C3%A3oPortugal23.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "fw14",
    "name": "Rodrygo Goes",
    "position": "FW",
    "rating": 86,
    "club": "Real Madrid",
    "nationality": "Brazil",
    "basePrice": 65,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Rodrygo_2023_%28cropped%29.jpg/330px-Rodrygo_2023_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "fw15",
    "name": "(GOAT) Lionel Messi",
    "position": "FW",
    "rating": 100,
    "club": "Inter Miami",
    "nationality": "Argentina",
    "basePrice": 20,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Leo_Messi_Argentina_v_Egypt_7_July_2026-1.jpg/330px-Leo_Messi_Argentina_v_Egypt_7_July_2026-1.jpg"
  },
  {
    "id": "fw16",
    "name": "Cristiano Ronaldo",
    "position": "FW",
    "rating": 86,
    "club": "Al Nassr",
    "nationality": "Portugal",
    "basePrice": 15,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/330px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg"
  },
  {
    "id": "fw17",
    "name": "Neymar Jr",
    "position": "FW",
    "rating": 86,
    "club": "Al Hilal",
    "nationality": "Brazil",
    "basePrice": 20,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Neymar_Jr._with_Al_Hilal%2C_3_October_2023_-_03_%28cropped%29.jpg/330px-Neymar_Jr._with_Al_Hilal%2C_3_October_2023_-_03_%28cropped%29.jpg"
  },
  {
    "id": "fw18",
    "name": "Luis Díaz",
    "position": "FW",
    "rating": 84,
    "club": "Liverpool",
    "nationality": "Colombia",
    "basePrice": 48,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/FC_RB_Salzburg_gegen_FC_Bayern_M%C3%BCnchen_%282026-01-06_Testspiel%29_40_%28Luiz_D%C3%ADaz%29.jpg/330px-FC_RB_Salzburg_gegen_FC_Bayern_M%C3%BCnchen_%282026-01-06_Testspiel%29_40_%28Luiz_D%C3%ADaz%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "fw19",
    "name": "Marcus Rashford",
    "position": "FW",
    "rating": 84,
    "club": "Manchester United",
    "nationality": "England",
    "basePrice": 40,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/Marcus_Rashford_England_v_Ghana_23_June_2026-073.jpg/330px-Marcus_Rashford_England_v_Ghana_23_June_2026-073.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "fw20",
    "name": "Gabriel Martinelli",
    "position": "FW",
    "rating": 84,
    "club": "Arsenal",
    "nationality": "Brazil",
    "basePrice": 45,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Gabriel_Martinelli_Brazil_V_Morocco_13_June_2026-144.jpg/330px-Gabriel_Martinelli_Brazil_V_Morocco_13_June_2026-144.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "fw21",
    "name": "Khvicha Kvaratskhelia",
    "position": "FW",
    "rating": 85,
    "club": "Napoli",
    "nationality": "Georgia",
    "basePrice": 55,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Kvaratskhelia_asse_psg_2425.png/330px-Kvaratskhelia_asse_psg_2425.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "fw22",
    "name": "Ousmane Dembélé",
    "position": "FW",
    "rating": 85,
    "club": "PSG",
    "nationality": "France",
    "basePrice": 42,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Ousmane_Dembele_France_v_Senegal_16_June_2026-341_%28cropped%29_2.jpg/330px-Ousmane_Dembele_France_v_Senegal_16_June_2026-341_%28cropped%29_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "fw23",
    "name": "Leroy Sané",
    "position": "FW",
    "rating": 84,
    "club": "Bayern Munich",
    "nationality": "Germany",
    "basePrice": 40,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Leroy_Sane_Ecuador_v_Germany_25_June_2026-119_%28cropped%29.jpg/330px-Leroy_Sane_Ecuador_v_Germany_25_June_2026-119_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "fw24",
    "name": "Julián Álvarez",
    "position": "FW",
    "rating": 84,
    "club": "Atlético Madrid",
    "nationality": "Argentina",
    "basePrice": 55,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Julian_Alvarez_Argentina_v_Spain_19_July_2026-052_%28cropped%29.jpg/330px-Julian_Alvarez_Argentina_v_Spain_19_July_2026-052_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "fw25",
    "name": "Darwin Núñez",
    "position": "FW",
    "rating": 82,
    "club": "Liverpool",
    "nationality": "Uruguay",
    "basePrice": 35,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Darwin_N%C3%BA%C3%B1ez_%28cropped%29.jpg/330px-Darwin_N%C3%BA%C3%B1ez_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "fw26",
    "name": "Alexander Isak",
    "position": "FW",
    "rating": 84,
    "club": "Newcastle",
    "nationality": "Sweden",
    "basePrice": 55,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Alexander_Isak_-_Sweden_-_Greece21_%28cropped%29.jpg/330px-Alexander_Isak_-_Sweden_-_Greece21_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "fw27",
    "name": "Ollie Watkins",
    "position": "FW",
    "rating": 84,
    "club": "Aston Villa",
    "nationality": "England",
    "basePrice": 48,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Ollie_Watkins_England_v_Ghana_23_June_2026-035.jpg/330px-Ollie_Watkins_England_v_Ghana_23_June_2026-035.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "fw28",
    "name": "Dušan Vlahović",
    "position": "FW",
    "rating": 84,
    "club": "Juventus",
    "nationality": "Serbia",
    "basePrice": 45,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Du%C5%A1an_Vlahovi%C4%87.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
  },
  {
    "id": "fw29",
    "name": "Viktor Gyökeres",
    "position": "FW",
    "rating": 83,
    "club": "Sporting CP",
    "nationality": "Sweden",
    "basePrice": 45,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Viktor_Gy%C3%B6keres_2026-06-04_1_%28cropped%29.jpg/330px-Viktor_Gy%C3%B6keres_2026-06-04_1_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "fw30",
    "name": "Cole Palmer",
    "position": "FW",
    "rating": 86,
    "club": "Chelsea",
    "nationality": "England",
    "basePrice": 70,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Cole_Palmer_England_v_Ghana_23_June_2026-081_%28cropped%29.jpg/330px-Cole_Palmer_England_v_Ghana_23_June_2026-081_%28cropped%29.jpg"
  },
  {
    "id": "fw31",
    "name": "Lamine Yamal",
    "position": "FW",
    "rating": 84,
    "club": "Barcelona",
    "nationality": "Spain",
    "basePrice": 75,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Lamine_Yamal_Spain_v_Croatia_15_June_2024.jpg/330px-Lamine_Yamal_Spain_v_Croatia_15_June_2024.jpg"
  },
  {
    "id": "fw32",
    "name": "Nico Williams",
    "position": "FW",
    "rating": 84,
    "club": "Athletic Bilbao",
    "nationality": "Spain",
    "basePrice": 50,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Nico_Williams_Argentina_v_Spain_19_July_2026-196_%28cropped%29.jpg/330px-Nico_Williams_Argentina_v_Spain_19_July_2026-196_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  }
];

const INDIAN_PLAYERS = [
  {
    "id": "ind_chhetri",
    "name": "Sunil Chhetri",
    "position": "FW",
    "rating": 85,
    "club": "Bengaluru FC",
    "nationality": "India",
    "basePrice": 12,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/The_President%2C_Shri_Ram_Nath_Kovind_presenting_the_Major_Dhyan_Chand_Khel_Ratna_Award%2C_2021_to_Shri_Sunil_Chhetri_for_Football%2C_at_Rashtrapati_Bhavan%2C_in_New_Delhi_on_13_November_2021_%28cropped%29.jpg/330px-thumbnail.jpg"
  },
  {
    "id": "ind_bhutia",
    "name": "Bhaichung Bhutia",
    "position": "FW",
    "rating": 83,
    "club": "East Bengal FC (Icon)",
    "nationality": "India",
    "basePrice": 10,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Bhaichung_Bhutia_at_the_NDTV_Marks_for_Sports_event_21.jpg/330px-Bhaichung_Bhutia_at_the_NDTV_Marks_for_Sports_event_21.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "ind_subrata",
    "name": "Subrata Paul",
    "position": "GK",
    "rating": 80,
    "club": "India Legend",
    "nationality": "India",
    "basePrice": 6,
    "photo": "/api/player-image?name=Subrata%20Pal&nat=India&club=India"
  },
  {
    "id": "ind_chhangte",
    "name": "Lallianzuala Chhangte",
    "position": "FW",
    "rating": 77,
    "club": "Mumbai City FC",
    "nationality": "India",
    "basePrice": 6,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/Lallianzuala-Chhangte-1-scaled.jpg/330px-Lallianzuala-Chhangte-1-scaled.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "ind_sandhu",
    "name": "Gurpreet Singh Sandhu",
    "position": "GK",
    "rating": 76,
    "club": "Bengaluru FC",
    "nationality": "India",
    "basePrice": 5,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Gurpreet_Singh_Sandhu_2019_AFC_Asian_Cup.jpg/330px-Gurpreet_Singh_Sandhu_2019_AFC_Asian_Cup.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "ind_sahal",
    "name": "Sahal Abdul Samad",
    "position": "MF",
    "rating": 76,
    "club": "Mohun Bagan SG",
    "nationality": "India",
    "basePrice": 5,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Sahal_Abdul_Samad.jpg/330px-Sahal_Abdul_Samad.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "ind_apuia",
    "name": "Lalengmawia Ralte (Apuia)",
    "position": "MF",
    "rating": 76,
    "club": "Mohun Bagan SG",
    "nationality": "India",
    "basePrice": 5,
    "photo": "/api/player-image?name=Lalengmawia%20Ralte&nat=India&club=Mohun%20Bagan%20SG"
  },
  {
    "id": "ind_anwar",
    "name": "Anwar Ali",
    "position": "DF",
    "rating": 76,
    "club": "East Bengal FC",
    "nationality": "India",
    "basePrice": 5,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Anwar_Ali_India_U17_World_Cup.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
  },
  {
    "id": "ind_jhingan",
    "name": "Sandesh Jhingan",
    "position": "DF",
    "rating": 75,
    "club": "FC Goa",
    "nationality": "India",
    "basePrice": 4,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Sandesh_Jjhingan_2019_AFC_AsianCup.jpg/330px-Sandesh_Jjhingan_2019_AFC_AsianCup.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "ind_colaco",
    "name": "Liston Colaco",
    "position": "FW",
    "rating": 75,
    "club": "Mohun Bagan SG",
    "nationality": "India",
    "basePrice": 4,
    "photo": "/api/player-image?name=Liston%20Colaco&nat=India&club=Mohun%20Bagan%20SG"
  },
  {
    "id": "ind_brandon",
    "name": "Brandon Fernandes",
    "position": "MF",
    "rating": 75,
    "club": "Mumbai City FC",
    "nationality": "India",
    "basePrice": 4,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/Brandon_3.jpg/330px-Brandon_3.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "ind_mahesh",
    "name": "Naorem Mahesh Singh",
    "position": "FW",
    "rating": 75,
    "club": "East Bengal FC",
    "nationality": "India",
    "basePrice": 4,
    "photo": "/api/player-image?name=Naorem%20Mahesh%20Singh&nat=India&club=East%20Bengal%20FC"
  },
  {
    "id": "ind_vikram",
    "name": "Vikram Partap Singh",
    "position": "FW",
    "rating": 75,
    "club": "Mumbai City FC",
    "nationality": "India",
    "basePrice": 4,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Vikram_Partap_Singh.png/330px-Vikram_Partap_Singh.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "ind_kaith",
    "name": "Vishal Kaith",
    "position": "GK",
    "rating": 75,
    "club": "Mohun Bagan SG",
    "nationality": "India",
    "basePrice": 4,
    "photo": "/api/player-image?name=Vishal%20Kaith&nat=India&club=Mohun%20Bagan%20SG"
  },
  {
    "id": "ind_lachenpa",
    "name": "Phurba Lachenpa",
    "position": "GK",
    "rating": 75,
    "club": "Mumbai City FC",
    "nationality": "India",
    "basePrice": 4,
    "photo": "/api/player-image?name=Phurba%20Lachenpa&nat=India&club=Mumbai%20City%20FC"
  },
  {
    "id": "ind_thapa",
    "name": "Anirudh Thapa",
    "position": "MF",
    "rating": 74,
    "club": "Mohun Bagan SG",
    "nationality": "India",
    "basePrice": 3,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Anirudh_Thapa_2019_%28cropped%29.jpg/330px-Anirudh_Thapa_2019_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "ind_subhasish",
    "name": "Subhasish Bose",
    "position": "DF",
    "rating": 74,
    "club": "Mohun Bagan SG",
    "nationality": "India",
    "basePrice": 3,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/b/bc/India_NT_at_2019_AFC_Asian_Cup_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
  },
  {
    "id": "ind_manvir",
    "name": "Manvir Singh",
    "position": "FW",
    "rating": 74,
    "club": "Mohun Bagan SG",
    "nationality": "India",
    "basePrice": 3,
    "photo": "/api/player-image?name=Manvir%20Singh&nat=India&club=Mohun%20Bagan%20SG"
  },
  {
    "id": "ind_bheke",
    "name": "Rahul Bheke",
    "position": "DF",
    "rating": 74,
    "club": "Bengaluru FC",
    "nationality": "India",
    "basePrice": 3,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Rahul_Bheke_-_Mumbai_City_FC_-_2023.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
  },
  {
    "id": "ind_ashique",
    "name": "Ashique Kuruniyan",
    "position": "FW",
    "rating": 74,
    "club": "Mohun Bagan SG",
    "nationality": "India",
    "basePrice": 3,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Ashique_Kuruniyan.jpg/330px-Ashique_Kuruniyan.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "ind_suresh",
    "name": "Suresh Singh Wangjam",
    "position": "MF",
    "rating": 74,
    "club": "Bengaluru FC",
    "nationality": "India",
    "basePrice": 3,
    "photo": "/api/player-image?name=Suresh%20Singh%20Wangjam&nat=India&club=Bengaluru%20FC"
  },
  {
    "id": "ind_amrinder",
    "name": "Amrinder Singh",
    "position": "GK",
    "rating": 74,
    "club": "Odisha FC",
    "nationality": "India",
    "basePrice": 3,
    "photo": "/api/player-image?name=Amrinder%20Singh&nat=India&club=Odisha%20FC"
  },
  {
    "id": "ind_jeakson",
    "name": "Jeakson Singh",
    "position": "MF",
    "rating": 73,
    "club": "East Bengal FC",
    "nationality": "India",
    "basePrice": 3,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Jeakson_%28cropped%29.jpg/330px-Jeakson_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "ind_mehtab",
    "name": "Mehtab Singh",
    "position": "DF",
    "rating": 73,
    "club": "Mumbai City FC",
    "nationality": "India",
    "basePrice": 3,
    "photo": "/api/player-image?name=Mehtab%20Singh&nat=India&club=Mumbai%20City%20FC"
  },
  {
    "id": "ind_nandha",
    "name": "Nandhakumar Sekar",
    "position": "FW",
    "rating": 73,
    "club": "East Bengal FC",
    "nationality": "India",
    "basePrice": 3,
    "photo": "/api/player-image?name=Nandhakumar%20Sekar&nat=India&club=East%20Bengal%20FC"
  },
  {
    "id": "ind_chinglensana",
    "name": "Chinglensana Singh",
    "position": "DF",
    "rating": 73,
    "club": "Bengaluru FC",
    "nationality": "India",
    "basePrice": 3,
    "photo": "/api/player-image?name=Chinglensana%20Singh&nat=India&club=Bengaluru%20FC"
  },
  {
    "id": "ind_jay",
    "name": "Jay Gupta",
    "position": "DF",
    "rating": 73,
    "club": "FC Goa",
    "nationality": "India",
    "basePrice": 3,
    "photo": "/api/player-image?name=Jay%20Gupta&nat=India&club=FC%20Goa"
  },
  {
    "id": "ind_udanta",
    "name": "Udanta Singh",
    "position": "FW",
    "rating": 73,
    "club": "FC Goa",
    "nationality": "India",
    "basePrice": 3,
    "photo": "/api/player-image?name=Udanta%20Singh&nat=India&club=FC%20Goa"
  },
  {
    "id": "ind_pritam",
    "name": "Pritam Kotal",
    "position": "DF",
    "rating": 73,
    "club": "Kerala Blasters FC",
    "nationality": "India",
    "basePrice": 3,
    "photo": "/api/player-image?name=Pritam%20Kotal&nat=India&club=Kerala%20Blasters%20FC"
  },
  {
    "id": "ind_parthib",
    "name": "Parthib Gogoi",
    "position": "FW",
    "rating": 72,
    "club": "NorthEast United FC",
    "nationality": "India",
    "basePrice": 2,
    "photo": "/api/player-image?name=Parthib%20Gogoi&nat=India&club=NorthEast%20United%20FC"
  }
];

const INITIAL_PLAYERS = [...GLOBAL_INITIAL_PLAYERS, ...INDIAN_PLAYERS];

function getBitwiseHash(str) {
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
  if (mode === 'india') {
    list = INDIAN_PLAYERS;
  } else if (mode === 'wc2026_elite') {
    list = (wcPlayers && wcPlayers.length > 0) ? wcPlayers.filter(p => (p.rating || 0) >= 80) : [];
    // Ensure top rated Indian stars (e.g. Sunil Chhetri, Bhaichung Bhutia, Subrata Paul) are also included in the elite pool
    const topIndian = INDIAN_PLAYERS.filter(p => (p.rating || 0) >= 80);
    list = [...list, ...topIndian];
    if (list.length === 0) list = INITIAL_PLAYERS;
  } else if (mode === 'wc2026' || mode === 'wc2026_all') {
    const existingIds = new Set((wcPlayers || []).map(p => p.id));
    const uniqueIndian = INDIAN_PLAYERS.filter(p => !existingIds.has(p.id));
    list = [...(wcPlayers || []), ...uniqueIndian];
    if (list.length === 0) list = INITIAL_PLAYERS;
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
  if (nameLower.includes("chhetri")) return 820;
  if (nameLower.includes("bhutia")) return 800;
  if (nameLower.includes("sandhu")) return 730;
  if (nameLower.includes("chhangte")) return 740;
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
  module.exports = { INITIAL_PLAYERS, INDIAN_PLAYERS, GLOBAL_INITIAL_PLAYERS, getPlayersDatabase, applyPresentPerformance, getPlayerCareerFantasyPoints };
}
