// FIFA World Cup 2026 — All 48 Nations Squad Data
// Extracted from PDF list dated 10 July 2026 with player portrait photos

const WC2026_PLAYERS = [
  {
    "id": "wc_alg_1",
    "name": "Melvin Mastil",
    "position": "GK",
    "rating": 75,
    "club": "FC Stade Nyonnais (SUI)",
    "nationality": "Algeria",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Melvin%20Mastil&nat=Algeria&club=FC%20Stade%20Nyonnais%20(SUI)&pos=GK"
  },
  {
    "id": "wc_alg_2",
    "name": "Aissa Mandi",
    "position": "DF",
    "rating": 75,
    "club": "Lille OSC (FRA)",
    "nationality": "Algeria",
    "basePrice": 3,
    "photo": "/api/player-image?name=Aissa%20Mandi&nat=Algeria&club=Lille%20OSC%20(FRA)&pos=DF"
  },
  {
    "id": "wc_alg_3",
    "name": "Achref Abada",
    "position": "DF",
    "rating": 70,
    "club": "USM Alger (ALG)",
    "nationality": "Algeria",
    "basePrice": 5,
    "photo": "/api/player-image?name=Achref%20Abada&nat=Algeria&club=USM%20Alger%20(ALG)&pos=DF"
  },
  {
    "id": "wc_alg_4",
    "name": "Amine Tougai Mohamed",
    "position": "DF",
    "rating": 80,
    "club": "Espérance De Tunisie (TUN)",
    "nationality": "Algeria",
    "basePrice": 30,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Mohamed_Amine_Tougai.jpg/330px-Mohamed_Amine_Tougai.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_alg_5",
    "name": "Zineddine Belaid",
    "position": "DF",
    "rating": 70,
    "club": "JS Kabylie (ALG)",
    "nationality": "Algeria",
    "basePrice": 5,
    "photo": "/api/player-image?name=Zineddine%20Belaid&nat=Algeria&club=JS%20Kabylie%20(ALG)&pos=DF"
  },
  {
    "id": "wc_alg_6",
    "name": "Ramiz Zerrouki",
    "position": "MF",
    "rating": 73,
    "club": "FC Twente (NED)",
    "nationality": "Algeria",
    "basePrice": 3,
    "photo": "/api/player-image?name=Ramiz%20Zerrouki&nat=Algeria&club=FC%20Twente%20(NED)&pos=MF"
  },
  {
    "id": "wc_alg_7",
    "name": "Riyad Mahrez",
    "position": "FW",
    "rating": 84,
    "club": "Al Ahli FC (KSA)",
    "nationality": "Algeria",
    "basePrice": 20,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Mahrez_2021.jpg/330px-Mahrez_2021.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_alg_8",
    "name": "Houssem Aouar",
    "position": "MF",
    "rating": 77,
    "club": "Al Ittihad (KSA)",
    "nationality": "Algeria",
    "basePrice": 12,
    "photo": "/api/player-image?name=Houssem%20Aouar&nat=Algeria&club=Al%20Ittihad%20(KSA)&pos=MF"
  },
  {
    "id": "wc_alg_9",
    "name": "Amine Gouiri",
    "position": "FW",
    "rating": 79,
    "club": "Olympique Marseille (FRA)",
    "nationality": "Algeria",
    "basePrice": 26,
    "photo": "/api/player-image?name=Amine%20Gouiri&nat=Algeria&club=Olympique%20Marseille%20(FRA)&pos=FW"
  },
  {
    "id": "wc_alg_10",
    "name": "Fares Chaibi",
    "position": "MF",
    "rating": 74,
    "club": "Eintracht Frankfurt (GER)",
    "nationality": "Algeria",
    "basePrice": 9,
    "photo": "/api/player-image?name=Fares%20Chaibi&nat=Algeria&club=Eintracht%20Frankfurt%20(GER)&pos=MF"
  },
  {
    "id": "wc_alg_11",
    "name": "Anis Hadj Moussa",
    "position": "FW",
    "rating": 76,
    "club": "Feyenoord Rotterdam (NED)",
    "nationality": "Algeria",
    "basePrice": 12,
    "photo": "/api/player-image?name=Anis%20Hadj%20Moussa&nat=Algeria&club=Feyenoord%20Rotterdam%20(NED)&pos=FW"
  },
  {
    "id": "wc_alg_12",
    "name": "Nadhir Benbouali",
    "position": "FW",
    "rating": 75,
    "club": "Györi ETO FC (HUN)",
    "nationality": "Algeria",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Nadhir%20Benbouali&nat=Algeria&club=Gy%C3%B6ri%20ETO%20FC%20(HUN)&pos=FW"
  },
  {
    "id": "wc_alg_13",
    "name": "Jaouen Hadjam",
    "position": "DF",
    "rating": 69,
    "club": "BSC Young Boys (SUI)",
    "nationality": "Algeria",
    "basePrice": 3,
    "photo": "/api/player-image?name=Jaouen%20Hadjam&nat=Algeria&club=BSC%20Young%20Boys%20(SUI)&pos=DF"
  },
  {
    "id": "wc_alg_14",
    "name": "Hicham Boudaoui",
    "position": "MF",
    "rating": 77,
    "club": "OGC Nice (FRA)",
    "nationality": "Algeria",
    "basePrice": 14,
    "photo": "/api/player-image?name=Hicham%20Boudaoui&nat=Algeria&club=OGC%20Nice%20(FRA)&pos=MF"
  },
  {
    "id": "wc_alg_15",
    "name": "Rayan Ait-Nouri",
    "position": "DF",
    "rating": 81,
    "club": "Manchester City FC (ENG)",
    "nationality": "Algeria",
    "basePrice": 35,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7b/Rayan_A%C3%AFt-Nouri_playing_for_Algeria_in_2024.jpg/330px-Rayan_A%C3%AFt-Nouri_playing_for_Algeria_in_2024.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_alg_16",
    "name": "Oussama Benbot",
    "position": "GK",
    "rating": 70,
    "club": "USM Alger (ALG)",
    "nationality": "Algeria",
    "basePrice": 5,
    "photo": "/api/player-image?name=Oussama%20Benbot&nat=Algeria&club=USM%20Alger%20(ALG)&pos=GK"
  },
  {
    "id": "wc_alg_17",
    "name": "Ra Belghali",
    "position": "DF",
    "rating": 66,
    "club": "Hellas Verona FC (ITA)",
    "nationality": "Algeria",
    "basePrice": 2,
    "photo": "/api/player-image?name=Ra%20Belghali&nat=Algeria&club=Hellas%20Verona%20FC%20(ITA)&pos=DF"
  },
  {
    "id": "wc_alg_18",
    "name": "Mohamed Amoura",
    "position": "FW",
    "rating": 80,
    "club": "VfL Wolfsburg (GER)",
    "nationality": "Algeria",
    "basePrice": 30,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/Mohamed_Amoura%2C_October_2021.png/330px-Mohamed_Amoura%2C_October_2021.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_alg_19",
    "name": "Nabil Bentaleb",
    "position": "MF",
    "rating": 77,
    "club": "Lille OSC (FRA)",
    "nationality": "Algeria",
    "basePrice": 9,
    "photo": "/api/player-image?name=Nabil%20Bentaleb&nat=Algeria&club=Lille%20OSC%20(FRA)&pos=MF"
  },
  {
    "id": "wc_alg_20",
    "name": "Adil Boulbina",
    "position": "FW",
    "rating": 70,
    "club": "Al Duhail SC (QAT)",
    "nationality": "Algeria",
    "basePrice": 5,
    "photo": "/api/player-image?name=Adil%20Boulbina&nat=Algeria&club=Al%20Duhail%20SC%20(QAT)&pos=FW"
  },
  {
    "id": "wc_alg_21",
    "name": "Ramy Bensebaini",
    "position": "DF",
    "rating": 79,
    "club": "Borussia Dortmund (GER)",
    "nationality": "Algeria",
    "basePrice": 15,
    "photo": "/api/player-image?name=Ramy%20Bensebaini&nat=Algeria&club=Borussia%20Dortmund%20(GER)&pos=DF"
  },
  {
    "id": "wc_alg_22",
    "name": "Ibrahim Maza",
    "position": "MF",
    "rating": 71,
    "club": "Bayer 04 Leverkusen (GER)",
    "nationality": "Algeria",
    "basePrice": 4,
    "photo": "/api/player-image?name=Ibrahim%20Maza&nat=Algeria&club=Bayer%2004%20Leverkusen%20(GER)&pos=MF"
  },
  {
    "id": "wc_alg_23",
    "name": "Luca Zidane",
    "position": "GK",
    "rating": 71,
    "club": "Granada CF (ESP)",
    "nationality": "Algeria",
    "basePrice": 2,
    "photo": "/api/player-image?name=Luca%20Zidane&nat=Algeria&club=Granada%20CF%20(ESP)&pos=GK"
  },
  {
    "id": "wc_alg_24",
    "name": "Yassine Titraoui",
    "position": "MF",
    "rating": 68,
    "club": "Sporting Charleroi (BEL)",
    "nationality": "Algeria",
    "basePrice": 3,
    "photo": "/api/player-image?name=Yassine%20Titraoui&nat=Algeria&club=Sporting%20Charleroi%20(BEL)&pos=MF"
  },
  {
    "id": "wc_alg_25",
    "name": "Fares Ghedjemis",
    "position": "FW",
    "rating": 63,
    "club": "Frosinone (ITA)",
    "nationality": "Algeria",
    "basePrice": 1,
    "photo": "/api/player-image?name=Fares%20Ghedjemis&nat=Algeria&club=Frosinone%20(ITA)&pos=FW"
  },
  {
    "id": "wc_alg_26",
    "name": "Samir Chergui",
    "position": "DF",
    "rating": 67,
    "club": "Paris FC (FRA)",
    "nationality": "Algeria",
    "basePrice": 1,
    "photo": "/api/player-image?name=Samir%20Chergui&nat=Algeria&club=Paris%20FC%20(FRA)&pos=DF"
  },
  {
    "id": "wc_arg_1",
    "name": "Juan Musso",
    "position": "GK",
    "rating": 79,
    "club": "Atlético De Madrid (ESP)",
    "nationality": "Argentina",
    "basePrice": 10,
    "photo": "/api/player-image?name=Juan%20Musso&nat=Argentina&club=Atl%C3%A9tico%20De%20Madrid%20(ESP)&pos=GK"
  },
  {
    "id": "wc_arg_2",
    "name": "Marcos Senesi",
    "position": "DF",
    "rating": 78,
    "club": "AFC Bournemouth (ENG)",
    "nationality": "Argentina",
    "basePrice": 12,
    "photo": "/api/player-image?name=Marcos%20Senesi&nat=Argentina&club=AFC%20Bournemouth%20(ENG)&pos=DF"
  },
  {
    "id": "wc_arg_3",
    "name": "Nicolas Tagliafico",
    "position": "DF",
    "rating": 78,
    "club": "Olympique Lyonnais (FRA)",
    "nationality": "Argentina",
    "basePrice": 10,
    "photo": "/api/player-image?name=Nicolas%20Tagliafico&nat=Argentina&club=Olympique%20Lyonnais%20(FRA)&pos=DF"
  },
  {
    "id": "wc_arg_4",
    "name": "Gonzalo Montiel",
    "position": "DF",
    "rating": 78,
    "club": "CA River Plate (ARG)",
    "nationality": "Argentina",
    "basePrice": 13,
    "photo": "/api/player-image?name=Gonzalo%20Montiel&nat=Argentina&club=CA%20River%20Plate%20(ARG)&pos=DF"
  },
  {
    "id": "wc_arg_5",
    "name": "Leandro Paredes",
    "position": "MF",
    "rating": 78,
    "club": "CA Boca Juniors (ARG)",
    "nationality": "Argentina",
    "basePrice": 12,
    "photo": "/api/player-image?name=Leandro%20Paredes&nat=Argentina&club=CA%20Boca%20Juniors%20(ARG)&pos=MF"
  },
  {
    "id": "wc_arg_6",
    "name": "Lisandro Martinez",
    "position": "DF",
    "rating": 81,
    "club": "Manchester United FC (ENG)",
    "nationality": "Argentina",
    "basePrice": 26,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/Lisandro_Martinez_Argentina_v_Egypt_7_July_2026-343_%28cropped%29.jpg/330px-Lisandro_Martinez_Argentina_v_Egypt_7_July_2026-343_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_arg_7",
    "name": "Rodrigo De Paul",
    "position": "MF",
    "rating": 84,
    "club": "Inter Miami CF (USA)",
    "nationality": "Argentina",
    "basePrice": 35,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/Rodrigo_De_Paul_Argentina_v_Spain_19_July_2026-159.jpg/330px-Rodrigo_De_Paul_Argentina_v_Spain_19_July_2026-159.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_arg_8",
    "name": "Valentin Barco",
    "position": "MF",
    "rating": 75,
    "club": "RC Strasbourg (FRA)",
    "nationality": "Argentina",
    "basePrice": 12,
    "photo": "/api/player-image?name=Valentin%20Barco&nat=Argentina&club=RC%20Strasbourg%20(FRA)&pos=MF"
  },
  {
    "id": "wc_arg_9",
    "name": "Julian Alvarez",
    "position": "FW",
    "rating": 87,
    "club": "Atlético De Madrid (ESP)",
    "nationality": "Argentina",
    "basePrice": 107,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Julian_Alvarez_Argentina_v_Spain_19_July_2026-052_%28cropped%29.jpg/330px-Julian_Alvarez_Argentina_v_Spain_19_July_2026-052_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_arg_10",
    "name": "(GOAT) Lionel Messi",
    "position": "FW",
    "rating": 86,
    "club": "Inter Miami CF (USA)",
    "nationality": "Argentina",
    "basePrice": 22,
    "photo": "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQPMdFZPzsT1Uzxz9t2zAnkqlRv4hzPLNostaS7XDBPX2iMRHMkRnd-h-Jel6Vc01NAaGR_HWnEUs14TT5Q1SK_2PcDhwLRMbrF3Pq7TmQ9FOikvIL_Bpl4l6n3trwHqnRsbb5hnhQnt1qw&s=19"
  },
  {
    "id": "wc_arg_11",
    "name": "Giovani Lo Celso",
    "position": "MF",
    "rating": 82,
    "club": "Real Betis (ESP)",
    "nationality": "Argentina",
    "basePrice": 30,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Giovani_Lo_Celso_Argentina_v_Spain_19_July_2026-058.jpg/330px-Giovani_Lo_Celso_Argentina_v_Spain_19_July_2026-058.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_arg_12",
    "name": "Geronimo Rulli",
    "position": "GK",
    "rating": 82,
    "club": "Olympique Marseille (FRA)",
    "nationality": "Argentina",
    "basePrice": 10,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Geronimo_Rulli_Argentina_v_Spain_19_July_2026-267_%28cropped%29.jpg/330px-Geronimo_Rulli_Argentina_v_Spain_19_July_2026-267_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_arg_13",
    "name": "Cristian Romero",
    "position": "DF",
    "rating": 82,
    "club": "Tottenham Hotspur FC (ENG)",
    "nationality": "Argentina",
    "basePrice": 33,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Cristian_Romero_Argentina_v_Egypt_7_July_2026-108.jpg/330px-Cristian_Romero_Argentina_v_Egypt_7_July_2026-108.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_arg_14",
    "name": "Exequiel Palacios",
    "position": "MF",
    "rating": 84,
    "club": "Bayer 04 Leverkusen (GER)",
    "nationality": "Argentina",
    "basePrice": 52,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/Exequiel_Palacios_Argentina_v_Spain_19_July_2026-022.jpg/330px-Exequiel_Palacios_Argentina_v_Spain_19_July_2026-022.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_arg_15",
    "name": "Nico Gonzalez",
    "position": "MF",
    "rating": 78,
    "club": "Atlético De Madrid (ESP)",
    "nationality": "Argentina",
    "basePrice": 15,
    "photo": "/api/player-image?name=Nico%20Gonzalez&nat=Argentina&club=Atl%C3%A9tico%20De%20Madrid%20(ESP)&pos=MF"
  },
  {
    "id": "wc_arg_16",
    "name": "Thiago Almada",
    "position": "FW",
    "rating": 79,
    "club": "Atlético De Madrid (ESP)",
    "nationality": "Argentina",
    "basePrice": 35,
    "photo": "/api/player-image?name=Thiago%20Almada&nat=Argentina&club=Atl%C3%A9tico%20De%20Madrid%20(ESP)&pos=FW"
  },
  {
    "id": "wc_arg_17",
    "name": "Giuliano Simeone",
    "position": "FW",
    "rating": 81,
    "club": "Atlético De Madrid (ESP)",
    "nationality": "Argentina",
    "basePrice": 40,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Giuliano_Simeone_Argentina_v_Spain_19_July_2026-268.jpg/330px-Giuliano_Simeone_Argentina_v_Spain_19_July_2026-268.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_arg_18",
    "name": "Nico Paz",
    "position": "FW",
    "rating": 79,
    "club": "Como (ITA)",
    "nationality": "Argentina",
    "basePrice": 39,
    "photo": "/api/player-image?name=Nico%20Paz&nat=Argentina&club=Como%20(ITA)&pos=FW"
  },
  {
    "id": "wc_arg_19",
    "name": "Nicolas Otamendi",
    "position": "DF",
    "rating": 82,
    "club": "SL Ben",
    "nationality": "Argentina",
    "basePrice": 6,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Nicolas_Otamendi_Argentina_v_Spain_19_July_2026-059_%28cropped%29.jpg/330px-Nicolas_Otamendi_Argentina_v_Spain_19_July_2026-059_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_arg_20",
    "name": "Alexis Mac Allister",
    "position": "MF",
    "rating": 87,
    "club": "Liverpool FC (ENG)",
    "nationality": "Argentina",
    "basePrice": 93,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Alexis_Mac_Allister_Argentina_v_Spain_19_July_2026-162_%28cropped%29.jpg/330px-Alexis_Mac_Allister_Argentina_v_Spain_19_July_2026-162_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_arg_21",
    "name": "Manuel Lopez Jose",
    "position": "FW",
    "rating": 62,
    "club": "SE Palmeiras (BRA)",
    "nationality": "Argentina",
    "basePrice": 1,
    "photo": "/api/player-image?name=Manuel%20Lopez%20Jose&nat=Argentina&club=SE%20Palmeiras%20(BRA)&pos=FW"
  },
  {
    "id": "wc_arg_22",
    "name": "Lautaro Martinez",
    "position": "FW",
    "rating": 88,
    "club": "FC Internazionale Milano (ITA)",
    "nationality": "Argentina",
    "basePrice": 99,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Lautaro_Martinez_Argentina_v_Spain_19_July_2026-049_%28cropped%29.jpg/330px-Lautaro_Martinez_Argentina_v_Spain_19_July_2026-049_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_arg_23",
    "name": "Emiliano Martinez",
    "position": "GK",
    "rating": 85,
    "club": "Aston Villa FC (ENG)",
    "nationality": "Argentina",
    "basePrice": 27,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Emiliano_Martinez_Argentina_v_Spain_19_July_2026-269.jpg/330px-Emiliano_Martinez_Argentina_v_Spain_19_July_2026-269.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_arg_24",
    "name": "Enzo Fernandez",
    "position": "MF",
    "rating": 84,
    "club": "Chelsea FC (ENG)",
    "nationality": "Argentina",
    "basePrice": 57,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Enzo_Fernandez_Argentina_v_Spain_19_July_2026-050_%28cropped%29.jpg/330px-Enzo_Fernandez_Argentina_v_Spain_19_July_2026-050_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_arg_25",
    "name": "Facundo Medina",
    "position": "DF",
    "rating": 79,
    "club": "Olympique Marseille (FRA)",
    "nationality": "Argentina",
    "basePrice": 22,
    "photo": "/api/player-image?name=Facundo%20Medina&nat=Argentina&club=Olympique%20Marseille%20(FRA)&pos=DF"
  },
  {
    "id": "wc_arg_26",
    "name": "Nahuel Molina",
    "position": "DF",
    "rating": 79,
    "club": "Atlético De Madrid (ESP)",
    "nationality": "Argentina",
    "basePrice": 19,
    "photo": "/api/player-image?name=Nahuel%20Molina&nat=Argentina&club=Atl%C3%A9tico%20De%20Madrid%20(ESP)&pos=DF"
  },
  {
    "id": "wc_aus_1",
    "name": "Mathew Ryan",
    "position": "GK",
    "rating": 78,
    "club": "Levante UD (ESP)",
    "nationality": "Australia",
    "basePrice": 5,
    "photo": "/api/player-image?name=Mathew%20Ryan&nat=Australia&club=Levante%20UD%20(ESP)&pos=GK"
  },
  {
    "id": "wc_aus_2",
    "name": "Milos Degenek",
    "position": "DF",
    "rating": 75,
    "club": "APOEL FC (CYP)",
    "nationality": "Australia",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Milos%20Degenek&nat=Australia&club=APOEL%20FC%20(CYP)&pos=DF"
  },
  {
    "id": "wc_aus_3",
    "name": "Alessandro Circati",
    "position": "DF",
    "rating": 71,
    "club": "Parma (ITA)",
    "nationality": "Australia",
    "basePrice": 4,
    "photo": "/api/player-image?name=Alessandro%20Circati&nat=Australia&club=Parma%20(ITA)&pos=DF"
  },
  {
    "id": "wc_aus_4",
    "name": "Jacob Italiano",
    "position": "DF",
    "rating": 64,
    "club": "Grazer AK (AUT)",
    "nationality": "Australia",
    "basePrice": 1,
    "photo": "/api/player-image?name=Jacob%20Italiano&nat=Australia&club=Grazer%20AK%20(AUT)&pos=DF"
  },
  {
    "id": "wc_aus_5",
    "name": "Jordan Bos",
    "position": "DF",
    "rating": 69,
    "club": "Feyenoord Rotterdam (NED)",
    "nationality": "Australia",
    "basePrice": 3,
    "photo": "/api/player-image?name=Jordan%20Bos&nat=Australia&club=Feyenoord%20Rotterdam%20(NED)&pos=DF"
  },
  {
    "id": "wc_aus_6",
    "name": "Jason Geria",
    "position": "DF",
    "rating": 70,
    "club": "Albirex Niigata (JPN)",
    "nationality": "Australia",
    "basePrice": 5,
    "photo": "/api/player-image?name=Jason%20Geria&nat=Australia&club=Albirex%20Niigata%20(JPN)&pos=DF"
  },
  {
    "id": "wc_aus_7",
    "name": "Mathew Leckie",
    "position": "FW",
    "rating": 70,
    "club": "Melbourne City FC (AUS)",
    "nationality": "Australia",
    "basePrice": 1,
    "photo": "/api/player-image?name=Mathew%20Leckie&nat=Australia&club=Melbourne%20City%20FC%20(AUS)&pos=FW"
  },
  {
    "id": "wc_aus_8",
    "name": "Connor Metcalfe",
    "position": "MF",
    "rating": 69,
    "club": "FC St. Pauli (GER)",
    "nationality": "Australia",
    "basePrice": 2,
    "photo": "/api/player-image?name=Connor%20Metcalfe&nat=Australia&club=FC%20St.%20Pauli%20(GER)&pos=MF"
  },
  {
    "id": "wc_aus_9",
    "name": "Mohamed Toure",
    "position": "FW",
    "rating": 68,
    "club": "Norwich City FC (ENG)",
    "nationality": "Australia",
    "basePrice": 3,
    "photo": "/api/player-image?name=Mohamed%20Toure&nat=Australia&club=Norwich%20City%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_aus_10",
    "name": "Ajdin Hrustic",
    "position": "FW",
    "rating": 67,
    "club": "SC Heracles Almelo (NED)",
    "nationality": "Australia",
    "basePrice": 1,
    "photo": "/api/player-image?name=Ajdin%20Hrustic&nat=Australia&club=SC%20Heracles%20Almelo%20(NED)&pos=FW"
  },
  {
    "id": "wc_aus_11",
    "name": "Awer Mabil",
    "position": "FW",
    "rating": 67,
    "club": "CD Castellón (ESP)",
    "nationality": "Australia",
    "basePrice": 1,
    "photo": "/api/player-image?name=Awer%20Mabil&nat=Australia&club=CD%20Castell%C3%B3n%20(ESP)&pos=FW"
  },
  {
    "id": "wc_aus_12",
    "name": "Paul Izzo",
    "position": "GK",
    "rating": 70,
    "club": "Randers FC (DEN)",
    "nationality": "Australia",
    "basePrice": 1,
    "photo": "/api/player-image?name=Paul%20Izzo&nat=Australia&club=Randers%20FC%20(DEN)&pos=GK"
  },
  {
    "id": "wc_aus_13",
    "name": "Aiden Oneill",
    "position": "MF",
    "rating": 70,
    "club": "New York City FC (USA)",
    "nationality": "Australia",
    "basePrice": 2,
    "photo": "/api/player-image?name=Aiden%20Oneill&nat=Australia&club=New%20York%20City%20FC%20(USA)&pos=MF"
  },
  {
    "id": "wc_aus_14",
    "name": "Cameron Devlin",
    "position": "MF",
    "rating": 71,
    "club": "Heart Of Midlothian FC (SCO)",
    "nationality": "Australia",
    "basePrice": 2,
    "photo": "/api/player-image?name=Cameron%20Devlin&nat=Australia&club=Heart%20Of%20Midlothian%20FC%20(SCO)&pos=MF"
  },
  {
    "id": "wc_aus_15",
    "name": "Kai Trewin",
    "position": "DF",
    "rating": 69,
    "club": "New York City FC (USA)",
    "nationality": "Australia",
    "basePrice": 3,
    "photo": "/api/player-image?name=Kai%20Trewin&nat=Australia&club=New%20York%20City%20FC%20(USA)&pos=DF"
  },
  {
    "id": "wc_aus_16",
    "name": "Aziz Behich",
    "position": "DF",
    "rating": 67,
    "club": "Melbourne City FC (AUS)",
    "nationality": "Australia",
    "basePrice": 1,
    "photo": "/api/player-image?name=Aziz%20Behich&nat=Australia&club=Melbourne%20City%20FC%20(AUS)&pos=DF"
  },
  {
    "id": "wc_aus_17",
    "name": "Nestory Irankunda",
    "position": "FW",
    "rating": 67,
    "club": "Watford FC (ENG)",
    "nationality": "Australia",
    "basePrice": 2,
    "photo": "/api/player-image?name=Nestory%20Irankunda&nat=Australia&club=Watford%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_aus_18",
    "name": "Patrick Beach",
    "position": "GK",
    "rating": 65,
    "club": "Melbourne City FC (AUS)",
    "nationality": "Australia",
    "basePrice": 2,
    "photo": "/api/player-image?name=Patrick%20Beach&nat=Australia&club=Melbourne%20City%20FC%20(AUS)&pos=GK"
  },
  {
    "id": "wc_aus_19",
    "name": "Harry Souttar",
    "position": "DF",
    "rating": 73,
    "club": "Leicester City FC (ENG)",
    "nationality": "Australia",
    "basePrice": 3,
    "photo": "/api/player-image?name=Harry%20Souttar&nat=Australia&club=Leicester%20City%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_aus_20",
    "name": "Cristian Volpato",
    "position": "FW",
    "rating": 69,
    "club": "US Sassuolo (ITA)",
    "nationality": "Australia",
    "basePrice": 3,
    "photo": "/api/player-image?name=Cristian%20Volpato&nat=Australia&club=US%20Sassuolo%20(ITA)&pos=FW"
  },
  {
    "id": "wc_aus_21",
    "name": "Cameron Burgess",
    "position": "DF",
    "rating": 73,
    "club": "Swansea City AFC (WAL)",
    "nationality": "Australia",
    "basePrice": 3,
    "photo": "/api/player-image?name=Cameron%20Burgess&nat=Australia&club=Swansea%20City%20AFC%20(WAL)&pos=DF"
  },
  {
    "id": "wc_aus_22",
    "name": "Jackson Irvine",
    "position": "MF",
    "rating": 75,
    "club": "FC St. Pauli (GER)",
    "nationality": "Australia",
    "basePrice": 4,
    "photo": "/api/player-image?name=Jackson%20Irvine&nat=Australia&club=FC%20St.%20Pauli%20(GER)&pos=MF"
  },
  {
    "id": "wc_aus_23",
    "name": "Nishan Velupillay",
    "position": "FW",
    "rating": 65,
    "club": "Melbourne Victory FC (AUS)",
    "nationality": "Australia",
    "basePrice": 1,
    "photo": "/api/player-image?name=Nishan%20Velupillay&nat=Australia&club=Melbourne%20Victory%20FC%20(AUS)&pos=FW"
  },
  {
    "id": "wc_aus_24",
    "name": "Paul Okon-Engstler",
    "position": "MF",
    "rating": 52,
    "club": "Sydney FC (AUS)",
    "nationality": "Australia",
    "basePrice": 1,
    "photo": "/api/player-image?name=Paul%20Okon-Engstler&nat=Australia&club=Sydney%20FC%20(AUS)&pos=MF"
  },
  {
    "id": "wc_aus_25",
    "name": "Lucas Herrington",
    "position": "DF",
    "rating": 59,
    "club": "Colorado Rapids (USA)",
    "nationality": "Australia",
    "basePrice": 1,
    "photo": "/api/player-image?name=Lucas%20Herrington&nat=Australia&club=Colorado%20Rapids%20(USA)&pos=DF"
  },
  {
    "id": "wc_aus_26",
    "name": "Tete Yengi",
    "position": "FW",
    "rating": 59,
    "club": "FC Machida Zelvia (JPN)",
    "nationality": "Australia",
    "basePrice": 1,
    "photo": "/api/player-image?name=Tete%20Yengi&nat=Australia&club=FC%20Machida%20Zelvia%20(JPN)&pos=FW"
  },
  {
    "id": "wc_aus_1",
    "name": "Alexander Schlager",
    "position": "GK",
    "rating": 73,
    "club": "FC Red Bull Salzburg (AUT)",
    "nationality": "Austria",
    "basePrice": 3,
    "photo": "/api/player-image?name=Alexander%20Schlager&nat=Austria&club=FC%20Red%20Bull%20Salzburg%20(AUT)&pos=GK"
  },
  {
    "id": "wc_aus_2",
    "name": "David Affengruber",
    "position": "DF",
    "rating": 75,
    "club": "Elche CF (ESP)",
    "nationality": "Austria",
    "basePrice": 12,
    "photo": "/api/player-image?name=David%20Affengruber&nat=Austria&club=Elche%20CF%20(ESP)&pos=DF"
  },
  {
    "id": "wc_aus_3",
    "name": "Kevin Danso",
    "position": "DF",
    "rating": 79,
    "club": "Tottenham Hotspur FC (ENG)",
    "nationality": "Austria",
    "basePrice": 21,
    "photo": "/api/player-image?name=Kevin%20Danso&nat=Austria&club=Tottenham%20Hotspur%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_aus_4",
    "name": "Xaver Schlager",
    "position": "MF",
    "rating": 80,
    "club": "RB Leipzig (GER)",
    "nationality": "Austria",
    "basePrice": 23,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Xaver_Schlager_850_1680.jpg/330px-20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Xaver_Schlager_850_1680.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_aus_5",
    "name": "Stefan Posch",
    "position": "DF",
    "rating": 79,
    "club": "1. FSV Mainz 05 (GER)",
    "nationality": "Austria",
    "basePrice": 16,
    "photo": "/api/player-image?name=Stefan%20Posch&nat=Austria&club=1.%20FSV%20Mainz%2005%20(GER)&pos=DF"
  },
  {
    "id": "wc_aus_6",
    "name": "Nicolas Seiwald",
    "position": "MF",
    "rating": 77,
    "club": "RB Leipzig (GER)",
    "nationality": "Austria",
    "basePrice": 20,
    "photo": "/api/player-image?name=Nicolas%20Seiwald&nat=Austria&club=RB%20Leipzig%20(GER)&pos=MF"
  },
  {
    "id": "wc_aus_7",
    "name": "Marko Arnautovic",
    "position": "FW",
    "rating": 70,
    "club": "FK Crvena Zvezda (SRB)",
    "nationality": "Austria",
    "basePrice": 5,
    "photo": "/api/player-image?name=Marko%20Arnautovic&nat=Austria&club=FK%20Crvena%20Zvezda%20(SRB)&pos=FW"
  },
  {
    "id": "wc_aus_8",
    "name": "David Alaba",
    "position": "DF",
    "rating": 82,
    "club": "Real Madrid C. F. (ESP)",
    "nationality": "Austria",
    "basePrice": 15,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f4/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_David_Alaba_850_1632.jpg/330px-20180610_FIFA_Friendly_Match_Austria_vs._Brazil_David_Alaba_850_1632.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_aus_9",
    "name": "Marcel Sabitzer",
    "position": "MF",
    "rating": 80,
    "club": "Borussia Dortmund (GER)",
    "nationality": "Austria",
    "basePrice": 15,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Marcel_Sabitzer_2020_%28cropped%29.jpg/330px-Marcel_Sabitzer_2020_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_aus_10",
    "name": "Florian Grillitsch",
    "position": "MF",
    "rating": 75,
    "club": "SC Braga (POR)",
    "nationality": "Austria",
    "basePrice": 6,
    "photo": "/api/player-image?name=Florian%20Grillitsch&nat=Austria&club=SC%20Braga%20(POR)&pos=MF"
  },
  {
    "id": "wc_aus_11",
    "name": "Michael Gregoritsch",
    "position": "FW",
    "rating": 75,
    "club": "FC Augsburg (GER)",
    "nationality": "Austria",
    "basePrice": 5,
    "photo": "/api/player-image?name=Michael%20Gregoritsch&nat=Austria&club=FC%20Augsburg%20(GER)&pos=FW"
  },
  {
    "id": "wc_aus_12",
    "name": "Florian Wiegele",
    "position": "GK",
    "rating": 67,
    "club": "FC Viktoria Plzen (CZE)",
    "nationality": "Austria",
    "basePrice": 1,
    "photo": "/api/player-image?name=Florian%20Wiegele&nat=Austria&club=FC%20Viktoria%20Plzen%20(CZE)&pos=GK"
  },
  {
    "id": "wc_aus_13",
    "name": "Patrick Pentz",
    "position": "GK",
    "rating": 72,
    "club": "Brøndby IF (DEN)",
    "nationality": "Austria",
    "basePrice": 2,
    "photo": "/api/player-image?name=Patrick%20Pentz&nat=Austria&club=Br%C3%B8ndby%20IF%20(DEN)&pos=GK"
  },
  {
    "id": "wc_aus_14",
    "name": "Sasa Kalajdzic",
    "position": "FW",
    "rating": 74,
    "club": "LASK Linz (AUT)",
    "nationality": "Austria",
    "basePrice": 5,
    "photo": "/api/player-image?name=Sasa%20Kalajdzic&nat=Austria&club=LASK%20Linz%20(AUT)&pos=FW"
  },
  {
    "id": "wc_aus_15",
    "name": "Philipp Lienhart",
    "position": "DF",
    "rating": 79,
    "club": "SC Freiburg (GER)",
    "nationality": "Austria",
    "basePrice": 17,
    "photo": "/api/player-image?name=Philipp%20Lienhart&nat=Austria&club=SC%20Freiburg%20(GER)&pos=DF"
  },
  {
    "id": "wc_aus_16",
    "name": "Phillip Mwene",
    "position": "DF",
    "rating": 76,
    "club": "1. FSV Mainz 05 (GER)",
    "nationality": "Austria",
    "basePrice": 6,
    "photo": "/api/player-image?name=Phillip%20Mwene&nat=Austria&club=1.%20FSV%20Mainz%2005%20(GER)&pos=DF"
  },
  {
    "id": "wc_aus_17",
    "name": "Carney Chukwuemeka",
    "position": "MF",
    "rating": 76,
    "club": "Borussia Dortmund (GER)",
    "nationality": "Austria",
    "basePrice": 17,
    "photo": "/api/player-image?name=Carney%20Chukwuemeka&nat=Austria&club=Borussia%20Dortmund%20(GER)&pos=MF"
  },
  {
    "id": "wc_aus_18",
    "name": "Romano Schmid",
    "position": "MF",
    "rating": 78,
    "club": "SV Werder Bremen (GER)",
    "nationality": "Austria",
    "basePrice": 19,
    "photo": "/api/player-image?name=Romano%20Schmid&nat=Austria&club=SV%20Werder%20Bremen%20(GER)&pos=MF"
  },
  {
    "id": "wc_aus_19",
    "name": "Dejan Ljubicic",
    "position": "MF",
    "rating": 73,
    "club": "FC Schalke 04 (GER)",
    "nationality": "Austria",
    "basePrice": 4,
    "photo": "/api/player-image?name=Dejan%20Ljubicic&nat=Austria&club=FC%20Schalke%2004%20(GER)&pos=MF"
  },
  {
    "id": "wc_aus_20",
    "name": "Konrad Laimer",
    "position": "MF",
    "rating": 82,
    "club": "FC Bayern München (GER)",
    "nationality": "Austria",
    "basePrice": 28,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/2022-07-21_Fu%C3%9Fball%2C_M%C3%A4nner%2CFreundschaftsspiel%2C_RB_Leipzig_-_FC_Liverpool_1DX_2137_by_Stepro_%28cropped%29.jpg/330px-2022-07-21_Fu%C3%9Fball%2C_M%C3%A4nner%2CFreundschaftsspiel%2C_RB_Leipzig_-_FC_Liverpool_1DX_2137_by_Stepro_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_aus_21",
    "name": "Patrick Wimmer",
    "position": "FW",
    "rating": 77,
    "club": "VfL Wolfsburg (GER)",
    "nationality": "Austria",
    "basePrice": 17,
    "photo": "/api/player-image?name=Patrick%20Wimmer&nat=Austria&club=VfL%20Wolfsburg%20(GER)&pos=FW"
  },
  {
    "id": "wc_aus_22",
    "name": "Alexander Prass",
    "position": "MF",
    "rating": 74,
    "club": "TSG Hoffenheim (GER)",
    "nationality": "Austria",
    "basePrice": 6,
    "photo": "/api/player-image?name=Alexander%20Prass&nat=Austria&club=TSG%20Hoffenheim%20(GER)&pos=MF"
  },
  {
    "id": "wc_aus_23",
    "name": "Marco Friedl",
    "position": "DF",
    "rating": 77,
    "club": "SV Werder Bremen (GER)",
    "nationality": "Austria",
    "basePrice": 11,
    "photo": "/api/player-image?name=Marco%20Friedl&nat=Austria&club=SV%20Werder%20Bremen%20(GER)&pos=DF"
  },
  {
    "id": "wc_aus_24",
    "name": "Paul Wanner",
    "position": "MF",
    "rating": 72,
    "club": "PSV Eindhoven (NED)",
    "nationality": "Austria",
    "basePrice": 6,
    "photo": "/api/player-image?name=Paul%20Wanner&nat=Austria&club=PSV%20Eindhoven%20(NED)&pos=MF"
  },
  {
    "id": "wc_aus_25",
    "name": "Michael Svoboda",
    "position": "DF",
    "rating": 68,
    "club": "Venezia FC (ITA)",
    "nationality": "Austria",
    "basePrice": 1,
    "photo": "/api/player-image?name=Michael%20Svoboda&nat=Austria&club=Venezia%20FC%20(ITA)&pos=DF"
  },
  {
    "id": "wc_aus_26",
    "name": "Alessandro Schoepf",
    "position": "MF",
    "rating": 68,
    "club": "Wolfsberger AC (AUT)",
    "nationality": "Austria",
    "basePrice": 1,
    "photo": "/api/player-image?name=Alessandro%20Schoepf&nat=Austria&club=Wolfsberger%20AC%20(AUT)&pos=MF"
  },
  {
    "id": "wc_bel_1",
    "name": "Thibaut Courtois",
    "position": "GK",
    "rating": 89,
    "club": "Real Madrid C. F. (ESP)",
    "nationality": "Belgium",
    "basePrice": 34,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Thibaut_Courtois_at_the_2018_World_Cup_%28cropped%29.jpg/330px-Thibaut_Courtois_at_the_2018_World_Cup_%28cropped%29.jpg"
  },
  {
    "id": "wc_bel_2",
    "name": "Zeno Debast",
    "position": "DF",
    "rating": 78,
    "club": "Sporting CP (POR)",
    "nationality": "Belgium",
    "basePrice": 30,
    "photo": "/api/player-image?name=Zeno%20Debast&nat=Belgium&club=Sporting%20CP%20(POR)&pos=DF"
  },
  {
    "id": "wc_bel_3",
    "name": "Arthur Theate",
    "position": "DF",
    "rating": 80,
    "club": "Eintracht Frankfurt (GER)",
    "nationality": "Belgium",
    "basePrice": 27,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Arthur_Theate_USMNT_v_Belgium_Mar_28_2026-22_%28cropped%29.jpg/330px-Arthur_Theate_USMNT_v_Belgium_Mar_28_2026-22_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_bel_4",
    "name": "Brandon Mechele",
    "position": "DF",
    "rating": 76,
    "club": "Club Brugge (BEL)",
    "nationality": "Belgium",
    "basePrice": 5,
    "photo": "/api/player-image?name=Brandon%20Mechele&nat=Belgium&club=Club%20Brugge%20(BEL)&pos=DF"
  },
  {
    "id": "wc_bel_5",
    "name": "Maxim De Cuyper",
    "position": "DF",
    "rating": 80,
    "club": "Brighton & Hove Albion FC (ENG)",
    "nationality": "Belgium",
    "basePrice": 31,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Maxim_De_Cuyper_USMNT_v_Belgium_Mar_28_2026-79_%28cropped%29.jpg/330px-Maxim_De_Cuyper_USMNT_v_Belgium_Mar_28_2026-79_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_bel_6",
    "name": "Axel Witsel",
    "position": "MF",
    "rating": 77,
    "club": "Girona FC (ESP)",
    "nationality": "Belgium",
    "basePrice": 2,
    "photo": "/api/player-image?name=Axel%20Witsel&nat=Belgium&club=Girona%20FC%20(ESP)&pos=MF"
  },
  {
    "id": "wc_bel_7",
    "name": "Kevin De Bruyne",
    "position": "MF",
    "rating": 87,
    "club": "SSC Napoli (ITA)",
    "nationality": "Belgium",
    "basePrice": 37,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Kevin_De_Bruyne_201807091.jpg/330px-Kevin_De_Bruyne_201807091.jpg"
  },
  {
    "id": "wc_bel_8",
    "name": "Youri Tielemans",
    "position": "MF",
    "rating": 85,
    "club": "Aston Villa FC (ENG)",
    "nationality": "Belgium",
    "basePrice": 54,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Youri_Tielemans_USMNT_v_Belgium_Mar_28_2026-20_%28cropped%29.jpg/330px-Youri_Tielemans_USMNT_v_Belgium_Mar_28_2026-20_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_bel_9",
    "name": "Romelu Lukaku",
    "position": "FW",
    "rating": 84,
    "club": "SSC Napoli (ITA)",
    "nationality": "Belgium",
    "basePrice": 34,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Romelu_Lukaku_2021.jpg/330px-Romelu_Lukaku_2021.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_bel_10",
    "name": "Leandro Trossard",
    "position": "FW",
    "rating": 83,
    "club": "Arsenal FC (ENG)",
    "nationality": "Belgium",
    "basePrice": 35,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Leandro_Trossard_Belgium_v_USA_6_July_2026-258.jpg/330px-Leandro_Trossard_Belgium_v_USA_6_July_2026-258.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_bel_11",
    "name": "Jeremy Doku",
    "position": "FW",
    "rating": 80,
    "club": "Manchester City FC (ENG)",
    "nationality": "Belgium",
    "basePrice": 32,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/J%C3%A9r%C3%A9my_Doku_USMNT_v_Belgium_Mar_28_2026-27_%28cropped%29.jpg/330px-J%C3%A9r%C3%A9my_Doku_USMNT_v_Belgium_Mar_28_2026-27_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_bel_12",
    "name": "Senne Lammens",
    "position": "GK",
    "rating": 78,
    "club": "Manchester United FC (ENG)",
    "nationality": "Belgium",
    "basePrice": 28,
    "photo": "/api/player-image?name=Senne%20Lammens&nat=Belgium&club=Manchester%20United%20FC%20(ENG)&pos=GK"
  },
  {
    "id": "wc_bel_13",
    "name": "Mike Penders",
    "position": "GK",
    "rating": 73,
    "club": "RC Strasbourg (FRA)",
    "nationality": "Belgium",
    "basePrice": 6,
    "photo": "/api/player-image?name=Mike%20Penders&nat=Belgium&club=RC%20Strasbourg%20(FRA)&pos=GK"
  },
  {
    "id": "wc_bel_14",
    "name": "Dodi Lukebakio",
    "position": "FW",
    "rating": 82,
    "club": "SL Ben",
    "nationality": "Belgium",
    "basePrice": 33,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Dodi_Luk%C3%A9bakio_USMNT_v_Belgium_Mar_28_2026-212_%28cropped_2%29.jpg/330px-Dodi_Luk%C3%A9bakio_USMNT_v_Belgium_Mar_28_2026-212_%28cropped_2%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_bel_15",
    "name": "Thomas Meunier",
    "position": "DF",
    "rating": 76,
    "club": "Lille OSC (FRA)",
    "nationality": "Belgium",
    "basePrice": 4,
    "photo": "/api/player-image?name=Thomas%20Meunier&nat=Belgium&club=Lille%20OSC%20(FRA)&pos=DF"
  },
  {
    "id": "wc_bel_16",
    "name": "Koni De Winter",
    "position": "DF",
    "rating": 74,
    "club": "AC Milan (ITA)",
    "nationality": "Belgium",
    "basePrice": 9,
    "photo": "/api/player-image?name=Koni%20De%20Winter&nat=Belgium&club=AC%20Milan%20(ITA)&pos=DF"
  },
  {
    "id": "wc_bel_17",
    "name": "Charles De Ketelaere",
    "position": "FW",
    "rating": 82,
    "club": "Atalanta Bergamo (ITA)",
    "nationality": "Belgium",
    "basePrice": 44,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Charles_De_Ketelaere_USMNT_v_Belgium_Mar_28_2026-76_%28cropped%29.jpg/330px-Charles_De_Ketelaere_USMNT_v_Belgium_Mar_28_2026-76_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_bel_18",
    "name": "Joaquin Seys",
    "position": "DF",
    "rating": 73,
    "club": "Club Brugge (BEL)",
    "nationality": "Belgium",
    "basePrice": 7,
    "photo": "/api/player-image?name=Joaquin%20Seys&nat=Belgium&club=Club%20Brugge%20(BEL)&pos=DF"
  },
  {
    "id": "wc_bel_19",
    "name": "Diego Moreira",
    "position": "MF",
    "rating": 77,
    "club": "RC Strasbourg (FRA)",
    "nationality": "Belgium",
    "basePrice": 17,
    "photo": "/api/player-image?name=Diego%20Moreira&nat=Belgium&club=RC%20Strasbourg%20(FRA)&pos=MF"
  },
  {
    "id": "wc_bel_20",
    "name": "Hans Vanaken",
    "position": "MF",
    "rating": 80,
    "club": "Club Brugge (BEL)",
    "nationality": "Belgium",
    "basePrice": 17,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Hans_Vanaken_Belgium_v_USA_6_July_2026-035.jpg/330px-Hans_Vanaken_Belgium_v_USA_6_July_2026-035.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_bel_21",
    "name": "Timothy Castagne",
    "position": "DF",
    "rating": 76,
    "club": "Fulham FC (ENG)",
    "nationality": "Belgium",
    "basePrice": 7,
    "photo": "/api/player-image?name=Timothy%20Castagne&nat=Belgium&club=Fulham%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_bel_22",
    "name": "Alexis Saelemaekers",
    "position": "MF",
    "rating": 79,
    "club": "AC Milan (ITA)",
    "nationality": "Belgium",
    "basePrice": 21,
    "photo": "/api/player-image?name=Alexis%20Saelemaekers&nat=Belgium&club=AC%20Milan%20(ITA)&pos=MF"
  },
  {
    "id": "wc_bel_23",
    "name": "Nicolas Raskin",
    "position": "MF",
    "rating": 77,
    "club": "Rangers FC (SCO)",
    "nationality": "Belgium",
    "basePrice": 15,
    "photo": "/api/player-image?name=Nicolas%20Raskin&nat=Belgium&club=Rangers%20FC%20(SCO)&pos=MF"
  },
  {
    "id": "wc_bel_24",
    "name": "Amadou Onana",
    "position": "MF",
    "rating": 79,
    "club": "Aston Villa FC (ENG)",
    "nationality": "Belgium",
    "basePrice": 23,
    "photo": "/api/player-image?name=Amadou%20Onana&nat=Belgium&club=Aston%20Villa%20FC%20(ENG)&pos=MF"
  },
  {
    "id": "wc_bel_25",
    "name": "Nathan Ngoy",
    "position": "DF",
    "rating": 69,
    "club": "Lille OSC (FRA)",
    "nationality": "Belgium",
    "basePrice": 3,
    "photo": "/api/player-image?name=Nathan%20Ngoy&nat=Belgium&club=Lille%20OSC%20(FRA)&pos=DF"
  },
  {
    "id": "wc_bel_26",
    "name": "Matias Fernandez-Pardo",
    "position": "FW",
    "rating": 75,
    "club": "Lille OSC (FRA)",
    "nationality": "Belgium",
    "basePrice": 13,
    "photo": "/api/player-image?name=Matias%20Fernandez-Pardo&nat=Belgium&club=Lille%20OSC%20(FRA)&pos=FW"
  },
  {
    "id": "wc_bra_1",
    "name": "ALISSON",
    "position": "GK",
    "rating": 89,
    "club": "Liverpool FC (ENG)",
    "nationality": "Brazil",
    "basePrice": 51,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Alisson_Becker_Brazil_V_Morocco_13_June_2026-117_%28cropped%29.jpg/330px-Alisson_Becker_Brazil_V_Morocco_13_June_2026-117_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_bra_2",
    "name": "Silva Ederson",
    "position": "MF",
    "rating": 82,
    "club": "Atalanta Bergamo (ITA)",
    "nationality": "Brazil",
    "basePrice": 40,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Team_Brazil_at_2026_FIFA_World_Cup_by_YantsImages_%28%C3%89derson_Silva%29_%28cropped%29.jpg/330px-Team_Brazil_at_2026_FIFA_World_Cup_by_YantsImages_%28%C3%89derson_Silva%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_bra_3",
    "name": "Magalhaes Gabriel",
    "position": "DF",
    "rating": 88,
    "club": "Arsenal FC (ENG)",
    "nationality": "Brazil",
    "basePrice": 84,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Gabriel_Magalhaes_Brazil_V_Morocco_13_June_2026-132_%28cropped%29.jpg/330px-Gabriel_Magalhaes_Brazil_V_Morocco_13_June_2026-132_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_bra_4",
    "name": "MARQUINHOS",
    "position": "DF",
    "rating": 87,
    "club": "Paris Saint-Germain (FRA)",
    "nationality": "Brazil",
    "basePrice": 55,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Marquinhos_Brazil_V_Morocco_13_June_2026-153_%28cropped%29.jpg/330px-Marquinhos_Brazil_V_Morocco_13_June_2026-153_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_bra_5",
    "name": "CASEMIRO",
    "position": "MF",
    "rating": 80,
    "club": "Manchester United FC (ENG)",
    "nationality": "Brazil",
    "basePrice": 11,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Casemiro_Brazil_V_Morocco_13_June_2026-76_%28cropped%29.jpg/330px-Casemiro_Brazil_V_Morocco_13_June_2026-76_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_bra_6",
    "name": "Sandro Alex",
    "position": "DF",
    "rating": 80,
    "club": "CR Flamengo (BRA)",
    "nationality": "Brazil",
    "basePrice": 27,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Sandro_Alex_em_fevereiro_de_2015.jpg/330px-Sandro_Alex_em_fevereiro_de_2015.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_bra_7",
    "name": "Junior Vinicius",
    "position": "FW",
    "rating": 89,
    "club": "Real Madrid C. F. (ESP)",
    "nationality": "Brazil",
    "basePrice": 141,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Vin%C3%ADcius_J%C3%BAnior_Brazil_V_Morocco_13_June_2026-207_%28cropped%29.jpg/330px-Vin%C3%ADcius_J%C3%BAnior_Brazil_V_Morocco_13_June_2026-207_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_bra_8",
    "name": "Guimaraes Bruno",
    "position": "MF",
    "rating": 86,
    "club": "Newcastle United FC (ENG)",
    "nationality": "Brazil",
    "basePrice": 78,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Bruno_Guimaraes_Brazil_V_Morocco_13_June_2026-78_%28cropped%29.jpg/330px-Bruno_Guimaraes_Brazil_V_Morocco_13_June_2026-78_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_bra_9",
    "name": "Cunha Matheus",
    "position": "FW",
    "rating": 83,
    "club": "Manchester United FC (ENG)",
    "nationality": "Brazil",
    "basePrice": 45,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Matheus_Cunha_Brazil_V_Morocco_13_June_2026-178_%28cropped%29.jpg/330px-Matheus_Cunha_Brazil_V_Morocco_13_June_2026-178_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_bra_10",
    "name": "Jr Neymar",
    "position": "FW",
    "rating": 75,
    "club": "Santos FC (BRA)",
    "nationality": "Brazil",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Jr%20Neymar&nat=Brazil&club=Santos%20FC%20(BRA)&pos=FW"
  },
  {
    "id": "wc_bra_11",
    "name": "RAPHINHA",
    "position": "FW",
    "rating": 89,
    "club": "FC Barcelona (ESP)",
    "nationality": "Brazil",
    "basePrice": 104,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Raphinha_Brazil_V_Morocco_13_June_2026-133_%28cropped%29.jpg/330px-Raphinha_Brazil_V_Morocco_13_June_2026-133_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_bra_12",
    "name": "WEVERTON",
    "position": "GK",
    "rating": 68,
    "club": "Grêmio FBPA (BRA)",
    "nationality": "Brazil",
    "basePrice": 2,
    "photo": "/api/player-image?name=WEVERTON&nat=Brazil&club=Gr%C3%AAmio%20FBPA%20(BRA)&pos=GK"
  },
  {
    "id": "wc_bra_13",
    "name": "DANILO",
    "position": "DF",
    "rating": 75,
    "club": "CR Flamengo (BRA)",
    "nationality": "Brazil",
    "basePrice": 5,
    "photo": "/api/player-image?name=DANILO&nat=Brazil&club=CR%20Flamengo%20(BRA)&pos=DF"
  },
  {
    "id": "wc_bra_14",
    "name": "BREMER",
    "position": "DF",
    "rating": 85,
    "club": "Juventus FC (ITA)",
    "nationality": "Brazil",
    "basePrice": 51,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Bremer_Brazil_V_Morocco_13_June_2026-143_%28cropped%29.jpg/330px-Bremer_Brazil_V_Morocco_13_June_2026-143_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_bra_15",
    "name": "Pereira Leo",
    "position": "DF",
    "rating": 59,
    "club": "CR Flamengo (BRA)",
    "nationality": "Brazil",
    "basePrice": 1,
    "photo": "/api/player-image?name=Pereira%20Leo&nat=Brazil&club=CR%20Flamengo%20(BRA)&pos=DF"
  },
  {
    "id": "wc_bra_16",
    "name": "Santos Douglas",
    "position": "DF",
    "rating": 59,
    "club": "FC Zenit St. Petersburg (RUS)",
    "nationality": "Brazil",
    "basePrice": 1,
    "photo": "/api/player-image?name=Santos%20Douglas&nat=Brazil&club=FC%20Zenit%20St.%20Petersburg%20(RUS)&pos=DF"
  },
  {
    "id": "wc_bra_17",
    "name": "FABINHO",
    "position": "MF",
    "rating": 82,
    "club": "Al Ittihad (KSA)",
    "nationality": "Brazil",
    "basePrice": 22,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d0/Fabinho_Brazil_V_Morocco_13_June_2026-70.jpg/330px-Fabinho_Brazil_V_Morocco_13_June_2026-70.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_bra_18",
    "name": "Santos Danilo",
    "position": "MF",
    "rating": 59,
    "club": "Botafogo (BRA)",
    "nationality": "Brazil",
    "basePrice": 1,
    "photo": "/api/player-image?name=Santos%20Danilo&nat=Brazil&club=Botafogo%20(BRA)&pos=MF"
  },
  {
    "id": "wc_bra_19",
    "name": "ENDRICK",
    "position": "FW",
    "rating": 77,
    "club": "Olympique Lyonnais (FRA)",
    "nationality": "Brazil",
    "basePrice": 25,
    "photo": "/api/player-image?name=ENDRICK&nat=Brazil&club=Olympique%20Lyonnais%20(FRA)&pos=FW"
  },
  {
    "id": "wc_bra_20",
    "name": "Paqueta Lucas",
    "position": "MF",
    "rating": 80,
    "club": "CR Flamengo (BRA)",
    "nationality": "Brazil",
    "basePrice": 23,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Lucas_Paqueta_Brazil_V_Morocco_13_June_2026-134_%28cropped%29.jpg/330px-Lucas_Paqueta_Brazil_V_Morocco_13_June_2026-134_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_bra_21",
    "name": "Henrique Luiz",
    "position": "FW",
    "rating": 78,
    "club": "FC Zenit St. Petersburg (RUS)",
    "nationality": "Brazil",
    "basePrice": 21,
    "photo": "/api/player-image?name=Henrique%20Luiz&nat=Brazil&club=FC%20Zenit%20St.%20Petersburg%20(RUS)&pos=FW"
  },
  {
    "id": "wc_bra_22",
    "name": "Martinelli Gabriel",
    "position": "FW",
    "rating": 81,
    "club": "Arsenal FC (ENG)",
    "nationality": "Brazil",
    "basePrice": 35,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Gabriel_Martinelli_Brazil_V_Morocco_13_June_2026-144.jpg/330px-Gabriel_Martinelli_Brazil_V_Morocco_13_June_2026-144.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_bra_23",
    "name": "EDERSON",
    "position": "GK",
    "rating": 85,
    "club": "Fenerbahçe SK (TUR)",
    "nationality": "Brazil",
    "basePrice": 29,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Ederson_Brazil_V_Morocco_13_June_2026-14_%28cropped%29.jpg/330px-Ederson_Brazil_V_Morocco_13_June_2026-14_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_bra_24",
    "name": "Ibanez Roger",
    "position": "DF",
    "rating": 82,
    "club": "Al Ahli FC (KSA)",
    "nationality": "Brazil",
    "basePrice": 34,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Ibanez_Brazil_V_Morocco_13_June_2026-66.jpg/330px-Ibanez_Brazil_V_Morocco_13_June_2026-66.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_bra_25",
    "name": "Thiago Igor",
    "position": "FW",
    "rating": 75,
    "club": "Brentford FC (ENG)",
    "nationality": "Brazil",
    "basePrice": 8,
    "photo": "/api/player-image?name=Thiago%20Igor&nat=Brazil&club=Brentford%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_bra_26",
    "name": "RAYAN",
    "position": "FW",
    "rating": 75,
    "club": "AFC Bournemouth (ENG)",
    "nationality": "Brazil",
    "basePrice": 6,
    "photo": "/api/player-image?name=RAYAN&nat=Brazil&club=AFC%20Bournemouth%20(ENG)&pos=FW"
  },
  {
    "id": "wc_cab_1",
    "name": "VOZINHA",
    "position": "GK",
    "rating": 70,
    "club": "GD Chaves (POR)",
    "nationality": "Cabo Verde",
    "basePrice": 5,
    "photo": "/api/player-image?name=VOZINHA&nat=Cabo%20Verde&club=GD%20Chaves%20(POR)&pos=GK"
  },
  {
    "id": "wc_cab_2",
    "name": "STOPIRA",
    "position": "DF",
    "rating": 70,
    "club": "SCU Torreense (POR)",
    "nationality": "Cabo Verde",
    "basePrice": 5,
    "photo": "/api/player-image?name=STOPIRA&nat=Cabo%20Verde&club=SCU%20Torreense%20(POR)&pos=DF"
  },
  {
    "id": "wc_cab_3",
    "name": "Borges Diney",
    "position": "DF",
    "rating": 70,
    "club": "Al Bataeh Club (UAE)",
    "nationality": "Cabo Verde",
    "basePrice": 5,
    "photo": "/api/player-image?name=Borges%20Diney&nat=Cabo%20Verde&club=Al%20Bataeh%20Club%20(UAE)&pos=DF"
  },
  {
    "id": "wc_cab_4",
    "name": "Lopes Pico",
    "position": "DF",
    "rating": 66,
    "club": "Shamrock Rovers FC (IRL)",
    "nationality": "Cabo Verde",
    "basePrice": 1,
    "photo": "/api/player-image?name=Lopes%20Pico&nat=Cabo%20Verde&club=Shamrock%20Rovers%20FC%20(IRL)&pos=DF"
  },
  {
    "id": "wc_cab_5",
    "name": "Costa Logan",
    "position": "DF",
    "rating": 77,
    "club": "Villarreal CF (ESP)",
    "nationality": "Cabo Verde",
    "basePrice": 20,
    "photo": "/api/player-image?name=Costa%20Logan&nat=Cabo%20Verde&club=Villarreal%20CF%20(ESP)&pos=DF"
  },
  {
    "id": "wc_cab_6",
    "name": "Pina Kevin",
    "position": "MF",
    "rating": 75,
    "club": "FC Krasnodar (RUS)",
    "nationality": "Cabo Verde",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Pina%20Kevin&nat=Cabo%20Verde&club=FC%20Krasnodar%20(RUS)&pos=MF"
  },
  {
    "id": "wc_cab_7",
    "name": "Cabral Jovane",
    "position": "MF",
    "rating": 70,
    "club": "CF Estrela Da Amadora (POR)",
    "nationality": "Cabo Verde",
    "basePrice": 2,
    "photo": "/api/player-image?name=Cabral%20Jovane&nat=Cabo%20Verde&club=CF%20Estrela%20Da%20Amadora%20(POR)&pos=MF"
  },
  {
    "id": "wc_cab_8",
    "name": "Paulo Joao",
    "position": "MF",
    "rating": 64,
    "club": "FC FCSB (ROU)",
    "nationality": "Cabo Verde",
    "basePrice": 1,
    "photo": "/api/player-image?name=Paulo%20Joao&nat=Cabo%20Verde&club=FC%20FCSB%20(ROU)&pos=MF"
  },
  {
    "id": "wc_cab_9",
    "name": "Benchimol Gilson",
    "position": "FW",
    "rating": 75,
    "club": "FC Akron Tolyatti (RUS)",
    "nationality": "Cabo Verde",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Benchimol%20Gilson&nat=Cabo%20Verde&club=FC%20Akron%20Tolyatti%20(RUS)&pos=FW"
  },
  {
    "id": "wc_cab_10",
    "name": "Monteiro Jamiro",
    "position": "MF",
    "rating": 69,
    "club": "PEC Zwolle (NED)",
    "nationality": "Cabo Verde",
    "basePrice": 1,
    "photo": "/api/player-image?name=Monteiro%20Jamiro&nat=Cabo%20Verde&club=PEC%20Zwolle%20(NED)&pos=MF"
  },
  {
    "id": "wc_cab_11",
    "name": "Rodrigues Garry",
    "position": "MF",
    "rating": 70,
    "club": "Apollon Limassol (CYP)",
    "nationality": "Cabo Verde",
    "basePrice": 5,
    "photo": "/api/player-image?name=Rodrigues%20Garry&nat=Cabo%20Verde&club=Apollon%20Limassol%20(CYP)&pos=MF"
  },
  {
    "id": "wc_cab_12",
    "name": "Rosa Marcio",
    "position": "GK",
    "rating": 75,
    "club": "PFC Montana (BUL)",
    "nationality": "Cabo Verde",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Rosa%20Marcio&nat=Cabo%20Verde&club=PFC%20Montana%20(BUL)&pos=GK"
  },
  {
    "id": "wc_cab_13",
    "name": "Cabral Sidny Lopes",
    "position": "DF",
    "rating": 66,
    "club": "SL Ben",
    "nationality": "Cabo Verde",
    "basePrice": 2,
    "photo": "/api/player-image?name=Cabral%20Sidny%20Lopes&nat=Cabo%20Verde&club=SL%20Ben&pos=DF"
  },
  {
    "id": "wc_cab_14",
    "name": "Duarte Deroy",
    "position": "MF",
    "rating": 75,
    "club": "PFC Ludogorets Razgrad (BUL)",
    "nationality": "Cabo Verde",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Duarte%20Deroy&nat=Cabo%20Verde&club=PFC%20Ludogorets%20Razgrad%20(BUL)&pos=MF"
  },
  {
    "id": "wc_cab_15",
    "name": "Duarte Laros",
    "position": "MF",
    "rating": 75,
    "club": "Puskás Akadémia FC (HUN)",
    "nationality": "Cabo Verde",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Duarte%20Laros&nat=Cabo%20Verde&club=Pusk%C3%A1s%20Akad%C3%A9mia%20FC%20(HUN)&pos=MF"
  },
  {
    "id": "wc_cab_16",
    "name": "Semedo Yannick",
    "position": "MF",
    "rating": 70,
    "club": "SC Farense (POR)",
    "nationality": "Cabo Verde",
    "basePrice": 5,
    "photo": "/api/player-image?name=Semedo%20Yannick&nat=Cabo%20Verde&club=SC%20Farense%20(POR)&pos=MF"
  },
  {
    "id": "wc_cab_17",
    "name": "Semedo Willy",
    "position": "MF",
    "rating": 70,
    "club": "AC Omonia (CYP)",
    "nationality": "Cabo Verde",
    "basePrice": 5,
    "photo": "/api/player-image?name=Semedo%20Willy&nat=Cabo%20Verde&club=AC%20Omonia%20(CYP)&pos=MF"
  },
  {
    "id": "wc_cab_18",
    "name": "Arcanjo Telmo",
    "position": "MF",
    "rating": 71,
    "club": "Vitória SC (POR)",
    "nationality": "Cabo Verde",
    "basePrice": 3,
    "photo": "/api/player-image?name=Arcanjo%20Telmo&nat=Cabo%20Verde&club=Vit%C3%B3ria%20SC%20(POR)&pos=MF"
  },
  {
    "id": "wc_cab_19",
    "name": "Livramento Dailon",
    "position": "FW",
    "rating": 70,
    "club": "Casa Pia AC (POR)",
    "nationality": "Cabo Verde",
    "basePrice": 2,
    "photo": "/api/player-image?name=Livramento%20Dailon&nat=Cabo%20Verde&club=Casa%20Pia%20AC%20(POR)&pos=FW"
  },
  {
    "id": "wc_cab_20",
    "name": "Mendes Ryan",
    "position": "FW",
    "rating": 66,
    "club": "Indnr FK (TUR)",
    "nationality": "Cabo Verde",
    "basePrice": 1,
    "photo": "/api/player-image?name=Mendes%20Ryan&nat=Cabo%20Verde&club=Indnr%20FK%20(TUR)&pos=FW"
  },
  {
    "id": "wc_cab_21",
    "name": "Costa Nuno Da",
    "position": "MF",
    "rating": 74,
    "club": "Banaknehir FK (TUR)",
    "nationality": "Cabo Verde",
    "basePrice": 2,
    "photo": "/api/player-image?name=Costa%20Nuno%20Da&nat=Cabo%20Verde&club=Banaknehir%20FK%20(TUR)&pos=MF"
  },
  {
    "id": "wc_cab_22",
    "name": "Moreira Steven",
    "position": "DF",
    "rating": 72,
    "club": "Columbus Crew (USA)",
    "nationality": "Cabo Verde",
    "basePrice": 2,
    "photo": "/api/player-image?name=Moreira%20Steven&nat=Cabo%20Verde&club=Columbus%20Crew%20(USA)&pos=DF"
  },
  {
    "id": "wc_cab_23",
    "name": "Santos Cj Dos",
    "position": "GK",
    "rating": 63,
    "club": "San Diego FC (USA)",
    "nationality": "Cabo Verde",
    "basePrice": 1,
    "photo": "/api/player-image?name=Santos%20Cj%20Dos&nat=Cabo%20Verde&club=San%20Diego%20FC%20(USA)&pos=GK"
  },
  {
    "id": "wc_cab_24",
    "name": "Pina Wagner",
    "position": "DF",
    "rating": 72,
    "club": "Trabzonspor (TUR)",
    "nationality": "Cabo Verde",
    "basePrice": 6,
    "photo": "/api/player-image?name=Pina%20Wagner&nat=Cabo%20Verde&club=Trabzonspor%20(TUR)&pos=DF"
  },
  {
    "id": "wc_cab_25",
    "name": "Pires Kelvin",
    "position": "DF",
    "rating": 70,
    "club": "SJK (FIN)",
    "nationality": "Cabo Verde",
    "basePrice": 5,
    "photo": "/api/player-image?name=Pires%20Kelvin&nat=Cabo%20Verde&club=SJK%20(FIN)&pos=DF"
  },
  {
    "id": "wc_cab_26",
    "name": "Varela Helio",
    "position": "MF",
    "rating": 75,
    "club": "Maccabi Tel-Aviv FC (ISR)",
    "nationality": "Cabo Verde",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Varela%20Helio&nat=Cabo%20Verde&club=Maccabi%20Tel-Aviv%20FC%20(ISR)&pos=MF"
  },
  {
    "id": "wc_can_1",
    "name": "Dayne St. Clair",
    "position": "GK",
    "rating": 73,
    "club": "Inter Miami CF (USA)",
    "nationality": "Canada",
    "basePrice": 3,
    "photo": "/api/player-image?name=Dayne%20St.%20Clair&nat=Canada&club=Inter%20Miami%20CF%20(USA)&pos=GK"
  },
  {
    "id": "wc_can_2",
    "name": "Alistair Johnston",
    "position": "DF",
    "rating": 78,
    "club": "Celtic FC (SCO)",
    "nationality": "Canada",
    "basePrice": 17,
    "photo": "/api/player-image?name=Alistair%20Johnston&nat=Canada&club=Celtic%20FC%20(SCO)&pos=DF"
  },
  {
    "id": "wc_can_3",
    "name": "Al Jones",
    "position": "DF",
    "rating": 71,
    "club": "Middlesbrough FC (ENG)",
    "nationality": "Canada",
    "basePrice": 2,
    "photo": "/api/player-image?name=Al%20Jones&nat=Canada&club=Middlesbrough%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_can_4",
    "name": "Luc De Fougerolles",
    "position": "DF",
    "rating": 60,
    "club": "FCV Dender EH (BEL)",
    "nationality": "Canada",
    "basePrice": 1,
    "photo": "/api/player-image?name=Luc%20De%20Fougerolles&nat=Canada&club=FCV%20Dender%20EH%20(BEL)&pos=DF"
  },
  {
    "id": "wc_can_5",
    "name": "Joel Waterman",
    "position": "DF",
    "rating": 68,
    "club": "Chicago Fire FC (USA)",
    "nationality": "Canada",
    "basePrice": 1,
    "photo": "/api/player-image?name=Joel%20Waterman&nat=Canada&club=Chicago%20Fire%20FC%20(USA)&pos=DF"
  },
  {
    "id": "wc_can_6",
    "name": "Mathieu Choiniere",
    "position": "MF",
    "rating": 67,
    "club": "LAFC (USA)",
    "nationality": "Canada",
    "basePrice": 1,
    "photo": "/api/player-image?name=Mathieu%20Choiniere&nat=Canada&club=LAFC%20(USA)&pos=MF"
  },
  {
    "id": "wc_can_7",
    "name": "Stephen Eustaquio",
    "position": "MF",
    "rating": 77,
    "club": "LAFC (USA)",
    "nationality": "Canada",
    "basePrice": 10,
    "photo": "/api/player-image?name=Stephen%20Eustaquio&nat=Canada&club=LAFC%20(USA)&pos=MF"
  },
  {
    "id": "wc_can_8",
    "name": "Ismael Kone",
    "position": "MF",
    "rating": 72,
    "club": "US Sassuolo (ITA)",
    "nationality": "Canada",
    "basePrice": 5,
    "photo": "/api/player-image?name=Ismael%20Kone&nat=Canada&club=US%20Sassuolo%20(ITA)&pos=MF"
  },
  {
    "id": "wc_can_9",
    "name": "Cyle Larin",
    "position": "FW",
    "rating": 77,
    "club": "Southampton FC (ENG)",
    "nationality": "Canada",
    "basePrice": 11,
    "photo": "/api/player-image?name=Cyle%20Larin&nat=Canada&club=Southampton%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_can_10",
    "name": "Jonathan David",
    "position": "FW",
    "rating": 82,
    "club": "Juventus FC (ITA)",
    "nationality": "Canada",
    "basePrice": 41,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Jonathan_David_Canada_v_Qatar_18_June_2026-242_%28cropped%29.jpg/330px-Jonathan_David_Canada_v_Qatar_18_June_2026-242_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_can_11",
    "name": "Liam Millar",
    "position": "MF",
    "rating": 72,
    "club": "Hull City FC (ENG)",
    "nationality": "Canada",
    "basePrice": 3,
    "photo": "/api/player-image?name=Liam%20Millar&nat=Canada&club=Hull%20City%20FC%20(ENG)&pos=MF"
  },
  {
    "id": "wc_can_12",
    "name": "Tani Oluwaseyi",
    "position": "FW",
    "rating": 70,
    "club": "Villarreal CF (ESP)",
    "nationality": "Canada",
    "basePrice": 2,
    "photo": "/api/player-image?name=Tani%20Oluwaseyi&nat=Canada&club=Villarreal%20CF%20(ESP)&pos=FW"
  },
  {
    "id": "wc_can_13",
    "name": "Derek Cornelius",
    "position": "DF",
    "rating": 74,
    "club": "Rangers FC (SCO)",
    "nationality": "Canada",
    "basePrice": 5,
    "photo": "/api/player-image?name=Derek%20Cornelius&nat=Canada&club=Rangers%20FC%20(SCO)&pos=DF"
  },
  {
    "id": "wc_can_14",
    "name": "Jacob Shaffelburg",
    "position": "MF",
    "rating": 67,
    "club": "LAFC (USA)",
    "nationality": "Canada",
    "basePrice": 1,
    "photo": "/api/player-image?name=Jacob%20Shaffelburg&nat=Canada&club=LAFC%20(USA)&pos=MF"
  },
  {
    "id": "wc_can_15",
    "name": "Moise Bombito",
    "position": "DF",
    "rating": 76,
    "club": "OGC Nice (FRA)",
    "nationality": "Canada",
    "basePrice": 14,
    "photo": "/api/player-image?name=Moise%20Bombito&nat=Canada&club=OGC%20Nice%20(FRA)&pos=DF"
  },
  {
    "id": "wc_can_16",
    "name": "Maxime Crepeau",
    "position": "GK",
    "rating": 69,
    "club": "Orlando City SC (USA)",
    "nationality": "Canada",
    "basePrice": 1,
    "photo": "/api/player-image?name=Maxime%20Crepeau&nat=Canada&club=Orlando%20City%20SC%20(USA)&pos=GK"
  },
  {
    "id": "wc_can_17",
    "name": "Tajon Buchanan",
    "position": "FW",
    "rating": 74,
    "club": "Villarreal CF (ESP)",
    "nationality": "Canada",
    "basePrice": 5,
    "photo": "/api/player-image?name=Tajon%20Buchanan&nat=Canada&club=Villarreal%20CF%20(ESP)&pos=FW"
  },
  {
    "id": "wc_can_18",
    "name": "Owen Goodman",
    "position": "GK",
    "rating": 65,
    "club": "Barnsley (ENG)",
    "nationality": "Canada",
    "basePrice": 1,
    "photo": "/api/player-image?name=Owen%20Goodman&nat=Canada&club=Barnsley%20(ENG)&pos=GK"
  },
  {
    "id": "wc_can_19",
    "name": "Alphonso Davies",
    "position": "DF",
    "rating": 84,
    "club": "FC Bayern München (GER)",
    "nationality": "Canada",
    "basePrice": 54,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Alphonso_Davies_Canada_v_Qatar_18_June_2026-007_%28cropped%29.jpg/330px-Alphonso_Davies_Canada_v_Qatar_18_June_2026-007_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_can_20",
    "name": "Ali Ahmed",
    "position": "FW",
    "rating": 68,
    "club": "Norwich City FC (ENG)",
    "nationality": "Canada",
    "basePrice": 2,
    "photo": "/api/player-image?name=Ali%20Ahmed&nat=Canada&club=Norwich%20City%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_can_21",
    "name": "Jonathan Osorio",
    "position": "MF",
    "rating": 71,
    "club": "Toronto FC (CAN)",
    "nationality": "Canada",
    "basePrice": 1,
    "photo": "/api/player-image?name=Jonathan%20Osorio&nat=Canada&club=Toronto%20FC%20(CAN)&pos=MF"
  },
  {
    "id": "wc_can_22",
    "name": "Richie Laryea",
    "position": "DF",
    "rating": 72,
    "club": "Toronto FC (CAN)",
    "nationality": "Canada",
    "basePrice": 2,
    "photo": "/api/player-image?name=Richie%20Laryea&nat=Canada&club=Toronto%20FC%20(CAN)&pos=DF"
  },
  {
    "id": "wc_can_23",
    "name": "Niko Sigur",
    "position": "DF",
    "rating": 70,
    "club": "HNK Hajduk Split (CRO)",
    "nationality": "Canada",
    "basePrice": 3,
    "photo": "/api/player-image?name=Niko%20Sigur&nat=Canada&club=HNK%20Hajduk%20Split%20(CRO)&pos=DF"
  },
  {
    "id": "wc_can_24",
    "name": "Promise David",
    "position": "FW",
    "rating": 75,
    "club": "Royale Union Saint-Gilloise (BEL)",
    "nationality": "Canada",
    "basePrice": 9,
    "photo": "/api/player-image?name=Promise%20David&nat=Canada&club=Royale%20Union%20Saint-Gilloise%20(BEL)&pos=FW"
  },
  {
    "id": "wc_can_25",
    "name": "Nathan Saliba",
    "position": "MF",
    "rating": 68,
    "club": "RSC Anderlecht (BEL)",
    "nationality": "Canada",
    "basePrice": 3,
    "photo": "/api/player-image?name=Nathan%20Saliba&nat=Canada&club=RSC%20Anderlecht%20(BEL)&pos=MF"
  },
  {
    "id": "wc_can_26",
    "name": "Jayden Nelson",
    "position": "FW",
    "rating": 68,
    "club": "Austin FC (USA)",
    "nationality": "Canada",
    "basePrice": 3,
    "photo": "/api/player-image?name=Jayden%20Nelson&nat=Canada&club=Austin%20FC%20(USA)&pos=FW"
  },
  {
    "id": "wc_col_1",
    "name": "David Ospina",
    "position": "GK",
    "rating": 76,
    "club": "Atlético Nacional (COL)",
    "nationality": "Colombia",
    "basePrice": 1,
    "photo": "/api/player-image?name=David%20Ospina&nat=Colombia&club=Atl%C3%A9tico%20Nacional%20(COL)&pos=GK"
  },
  {
    "id": "wc_col_2",
    "name": "Daniel Munoz",
    "position": "DF",
    "rating": 81,
    "club": "Crystal Palace FC (ENG)",
    "nationality": "Colombia",
    "basePrice": 23,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Daniel_Mu%C3%B1oz%2C_Colombia_NT_presidential_send-off%2C_Jun_2026.jpg/330px-Daniel_Mu%C3%B1oz%2C_Colombia_NT_presidential_send-off%2C_Jun_2026.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_col_3",
    "name": "Jhon Lucumi",
    "position": "DF",
    "rating": 76,
    "club": "Bologna FC (ITA)",
    "nationality": "Colombia",
    "basePrice": 8,
    "photo": "/api/player-image?name=Jhon%20Lucumi&nat=Colombia&club=Bologna%20FC%20(ITA)&pos=DF"
  },
  {
    "id": "wc_col_4",
    "name": "Santiago Arias",
    "position": "DF",
    "rating": 68,
    "club": "CA Independiente (ARG)",
    "nationality": "Colombia",
    "basePrice": 3,
    "photo": "/api/player-image?name=Santiago%20Arias&nat=Colombia&club=CA%20Independiente%20(ARG)&pos=DF"
  },
  {
    "id": "wc_col_5",
    "name": "Kevin Castano",
    "position": "MF",
    "rating": 77,
    "club": "CA River Plate (ARG)",
    "nationality": "Colombia",
    "basePrice": 15,
    "photo": "/api/player-image?name=Kevin%20Castano&nat=Colombia&club=CA%20River%20Plate%20(ARG)&pos=MF"
  },
  {
    "id": "wc_col_6",
    "name": "Richard Rios",
    "position": "MF",
    "rating": 79,
    "club": "SL Ben",
    "nationality": "Colombia",
    "basePrice": 25,
    "photo": "/api/player-image?name=Richard%20Rios&nat=Colombia&club=SL%20Ben&pos=MF"
  },
  {
    "id": "wc_col_7",
    "name": "Luis Diaz",
    "position": "FW",
    "rating": 85,
    "club": "FC Bayern München (GER)",
    "nationality": "Colombia",
    "basePrice": 55,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/FC_RB_Salzburg_gegen_FC_Bayern_M%C3%BCnchen_%282026-01-06_Testspiel%29_40_%28Luiz_D%C3%ADaz%29.jpg/330px-FC_RB_Salzburg_gegen_FC_Bayern_M%C3%BCnchen_%282026-01-06_Testspiel%29_40_%28Luiz_D%C3%ADaz%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_col_8",
    "name": "Jorge Carrascal",
    "position": "MF",
    "rating": 70,
    "club": "CR Flamengo (BRA)",
    "nationality": "Colombia",
    "basePrice": 1,
    "photo": "/api/player-image?name=Jorge%20Carrascal&nat=Colombia&club=CR%20Flamengo%20(BRA)&pos=MF"
  },
  {
    "id": "wc_col_9",
    "name": "Jhon Cordoba",
    "position": "FW",
    "rating": 69,
    "club": "FC Krasnodar (RUS)",
    "nationality": "Colombia",
    "basePrice": 2,
    "photo": "/api/player-image?name=Jhon%20Cordoba&nat=Colombia&club=FC%20Krasnodar%20(RUS)&pos=FW"
  },
  {
    "id": "wc_col_10",
    "name": "James Rodriguez",
    "position": "MF",
    "rating": 56,
    "club": "Minnesota United FC (USA)",
    "nationality": "Colombia",
    "basePrice": 1,
    "photo": "/api/player-image?name=James%20Rodriguez&nat=Colombia&club=Minnesota%20United%20FC%20(USA)&pos=MF"
  },
  {
    "id": "wc_col_11",
    "name": "Jhon Arias",
    "position": "MF",
    "rating": 78,
    "club": "SE Palmeiras (BRA)",
    "nationality": "Colombia",
    "basePrice": 15,
    "photo": "/api/player-image?name=Jhon%20Arias&nat=Colombia&club=SE%20Palmeiras%20(BRA)&pos=MF"
  },
  {
    "id": "wc_col_12",
    "name": "Camilo Vargas",
    "position": "GK",
    "rating": 68,
    "club": "Atlas FC (MEX)",
    "nationality": "Colombia",
    "basePrice": 3,
    "photo": "/api/player-image?name=Camilo%20Vargas&nat=Colombia&club=Atlas%20FC%20(MEX)&pos=GK"
  },
  {
    "id": "wc_col_13",
    "name": "Yerry Mina",
    "position": "DF",
    "rating": 77,
    "club": "Cagliari (ITA)",
    "nationality": "Colombia",
    "basePrice": 9,
    "photo": "/api/player-image?name=Yerry%20Mina&nat=Colombia&club=Cagliari%20(ITA)&pos=DF"
  },
  {
    "id": "wc_col_14",
    "name": "Gustavo Puerta",
    "position": "DF",
    "rating": 68,
    "club": "Racing Santander (ESP)",
    "nationality": "Colombia",
    "basePrice": 3,
    "photo": "/api/player-image?name=Gustavo%20Puerta&nat=Colombia&club=Racing%20Santander%20(ESP)&pos=DF"
  },
  {
    "id": "wc_col_15",
    "name": "Juan Portilla",
    "position": "MF",
    "rating": 73,
    "club": "Athletico Paranaense (BRA)",
    "nationality": "Colombia",
    "basePrice": 4,
    "photo": "/api/player-image?name=Juan%20Portilla&nat=Colombia&club=Athletico%20Paranaense%20(BRA)&pos=MF"
  },
  {
    "id": "wc_col_16",
    "name": "Jefferson Lerma",
    "position": "MF",
    "rating": 77,
    "club": "Crystal Palace FC (ENG)",
    "nationality": "Colombia",
    "basePrice": 9,
    "photo": "/api/player-image?name=Jefferson%20Lerma&nat=Colombia&club=Crystal%20Palace%20FC%20(ENG)&pos=MF"
  },
  {
    "id": "wc_col_17",
    "name": "Johan Mojica",
    "position": "DF",
    "rating": 78,
    "club": "RCD Mallorca (ESP)",
    "nationality": "Colombia",
    "basePrice": 10,
    "photo": "/api/player-image?name=Johan%20Mojica&nat=Colombia&club=RCD%20Mallorca%20(ESP)&pos=DF"
  },
  {
    "id": "wc_col_18",
    "name": "Willer Ditta",
    "position": "DF",
    "rating": 70,
    "club": "CF Cruz Azul (MEX)",
    "nationality": "Colombia",
    "basePrice": 5,
    "photo": "/api/player-image?name=Willer%20Ditta&nat=Colombia&club=CF%20Cruz%20Azul%20(MEX)&pos=DF"
  },
  {
    "id": "wc_col_19",
    "name": "Cucho Hernandez",
    "position": "FW",
    "rating": 78,
    "club": "Real Betis (ESP)",
    "nationality": "Colombia",
    "basePrice": 19,
    "photo": "/api/player-image?name=Cucho%20Hernandez&nat=Colombia&club=Real%20Betis%20(ESP)&pos=FW"
  },
  {
    "id": "wc_col_20",
    "name": "Juan Quintero",
    "position": "MF",
    "rating": 77,
    "club": "CA River Plate (ARG)",
    "nationality": "Colombia",
    "basePrice": 9,
    "photo": "/api/player-image?name=Juan%20Quintero&nat=Colombia&club=CA%20River%20Plate%20(ARG)&pos=MF"
  },
  {
    "id": "wc_col_21",
    "name": "Jaminton Campaz",
    "position": "FW",
    "rating": 76,
    "club": "CA Rosario Central (ARG)",
    "nationality": "Colombia",
    "basePrice": 10,
    "photo": "/api/player-image?name=Jaminton%20Campaz&nat=Colombia&club=CA%20Rosario%20Central%20(ARG)&pos=FW"
  },
  {
    "id": "wc_col_22",
    "name": "Deiver Machado",
    "position": "DF",
    "rating": 76,
    "club": "FC Nantes (FRA)",
    "nationality": "Colombia",
    "basePrice": 6,
    "photo": "/api/player-image?name=Deiver%20Machado&nat=Colombia&club=FC%20Nantes%20(FRA)&pos=DF"
  },
  {
    "id": "wc_col_23",
    "name": "Davinson Sanchez",
    "position": "DF",
    "rating": 82,
    "club": "Galatasaray SK (TUR)",
    "nationality": "Colombia",
    "basePrice": 26,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/D%C3%A1vinson_S%C3%A1nchez%2C_Colombia_NT_presidential_send-off%2C_Jun_2026.jpg/330px-D%C3%A1vinson_S%C3%A1nchez%2C_Colombia_NT_presidential_send-off%2C_Jun_2026.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_col_24",
    "name": "Alvaro Montero",
    "position": "GK",
    "rating": 75,
    "club": "CA Vélez Sars",
    "nationality": "Colombia",
    "basePrice": 4,
    "photo": "/api/player-image?name=Alvaro%20Montero&nat=Colombia&club=CA%20V%C3%A9lez%20Sars&pos=GK"
  },
  {
    "id": "wc_col_25",
    "name": "Luis Suarez",
    "position": "FW",
    "rating": 77,
    "club": "Sporting CP (POR)",
    "nationality": "Colombia",
    "basePrice": 13,
    "photo": "/api/player-image?name=Luis%20Suarez&nat=Colombia&club=Sporting%20CP%20(POR)&pos=FW"
  },
  {
    "id": "wc_col_26",
    "name": "Andres Gomez",
    "position": "FW",
    "rating": 65,
    "club": "CR Vasco Da Gama (BRA)",
    "nationality": "Colombia",
    "basePrice": 1,
    "photo": "/api/player-image?name=Andres%20Gomez&nat=Colombia&club=CR%20Vasco%20Da%20Gama%20(BRA)&pos=FW"
  },
  {
    "id": "wc_unk_1",
    "name": "Yahia Fofana",
    "position": "GK",
    "rating": 76,
    "club": "Çaykur Rizespor (TUR)",
    "nationality": "Unknown",
    "basePrice": 9,
    "photo": "/api/player-image?name=Yahia%20Fofana&nat=Unknown&club=%C3%87aykur%20Rizespor%20(TUR)&pos=GK"
  },
  {
    "id": "wc_unk_2",
    "name": "Ousmane Diomande",
    "position": "DF",
    "rating": 80,
    "club": "Sporting CP (POR)",
    "nationality": "Unknown",
    "basePrice": 40,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Ousmane_Diomand%C3%A9_Cote_D%27Ivoire_v_Ecuador_14_June_2026-58.jpg/330px-Ousmane_Diomand%C3%A9_Cote_D%27Ivoire_v_Ecuador_14_June_2026-58.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_unk_3",
    "name": "Ghislain Konan",
    "position": "DF",
    "rating": 72,
    "club": "Gil Vicente FC (POR)",
    "nationality": "Unknown",
    "basePrice": 2,
    "photo": "/api/player-image?name=Ghislain%20Konan&nat=Unknown&club=Gil%20Vicente%20FC%20(POR)&pos=DF"
  },
  {
    "id": "wc_unk_4",
    "name": "Michael Seri Jean",
    "position": "MF",
    "rating": 70,
    "club": "NK Maribor (SVN)",
    "nationality": "Unknown",
    "basePrice": 5,
    "photo": "/api/player-image?name=Michael%20Seri%20Jean&nat=Unknown&club=NK%20Maribor%20(SVN)&pos=MF"
  },
  {
    "id": "wc_unk_5",
    "name": "Wilfried Singo",
    "position": "DF",
    "rating": 80,
    "club": "Galatasaray SK (TUR)",
    "nationality": "Unknown",
    "basePrice": 29,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Wilfried_Singo_Cote_D%27Ivoire_v_Ecuador_14_June_2026-18.jpg/330px-Wilfried_Singo_Cote_D%27Ivoire_v_Ecuador_14_June_2026-18.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_unk_6",
    "name": "Seko Fofana",
    "position": "MF",
    "rating": 77,
    "club": "FC Porto (POR)",
    "nationality": "Unknown",
    "basePrice": 10,
    "photo": "/api/player-image?name=Seko%20Fofana&nat=Unknown&club=FC%20Porto%20(POR)&pos=MF"
  },
  {
    "id": "wc_unk_7",
    "name": "Odilon Kossounou",
    "position": "DF",
    "rating": 80,
    "club": "Atalanta Bergamo (ITA)",
    "nationality": "Unknown",
    "basePrice": 29,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Odilon_Kossounou_Cote_D%27Ivoire_v_Ecuador_14_June_2026-57.jpg/330px-Odilon_Kossounou_Cote_D%27Ivoire_v_Ecuador_14_June_2026-57.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_unk_8",
    "name": "Franck Kessie",
    "position": "MF",
    "rating": 80,
    "club": "Al Ahli FC (KSA)",
    "nationality": "Unknown",
    "basePrice": 21,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Franck_Kessie_Cote_D%27Ivoire_v_Ecuador_14_June_2026-15_%28cropped%29.jpg/330px-Franck_Kessie_Cote_D%27Ivoire_v_Ecuador_14_June_2026-15_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_unk_9",
    "name": "Ange-Yoan Bonny",
    "position": "FW",
    "rating": 76,
    "club": "FC Internazionale Milano (ITA)",
    "nationality": "Unknown",
    "basePrice": 17,
    "photo": "/api/player-image?name=Ange-Yoan%20Bonny&nat=Unknown&club=FC%20Internazionale%20Milano%20(ITA)&pos=FW"
  },
  {
    "id": "wc_unk_10",
    "name": "Simon Adingra",
    "position": "FW",
    "rating": 76,
    "club": "AS Monaco (FRA)",
    "nationality": "Unknown",
    "basePrice": 15,
    "photo": "/api/player-image?name=Simon%20Adingra&nat=Unknown&club=AS%20Monaco%20(FRA)&pos=FW"
  },
  {
    "id": "wc_unk_11",
    "name": "Yan Diomande",
    "position": "FW",
    "rating": 66,
    "club": "RB Leipzig (GER)",
    "nationality": "Unknown",
    "basePrice": 2,
    "photo": "/api/player-image?name=Yan%20Diomande&nat=Unknown&club=RB%20Leipzig%20(GER)&pos=FW"
  },
  {
    "id": "wc_unk_12",
    "name": "Elye Wahi",
    "position": "FW",
    "rating": 75,
    "club": "OGC Nice (FRA)",
    "nationality": "Unknown",
    "basePrice": 12,
    "photo": "/api/player-image?name=Elye%20Wahi&nat=Unknown&club=OGC%20Nice%20(FRA)&pos=FW"
  },
  {
    "id": "wc_unk_13",
    "name": "Christopher Operi",
    "position": "DF",
    "rating": 74,
    "club": "Banaknehir FK (TUR)",
    "nationality": "Unknown",
    "basePrice": 4,
    "photo": "/api/player-image?name=Christopher%20Operi&nat=Unknown&club=Banaknehir%20FK%20(TUR)&pos=DF"
  },
  {
    "id": "wc_unk_14",
    "name": "Oumar Diakite",
    "position": "FW",
    "rating": 72,
    "club": "Cercle Brugge (BEL)",
    "nationality": "Unknown",
    "basePrice": 6,
    "photo": "/api/player-image?name=Oumar%20Diakite&nat=Unknown&club=Cercle%20Brugge%20(BEL)&pos=FW"
  },
  {
    "id": "wc_unk_15",
    "name": "Amad Diallo",
    "position": "FW",
    "rating": 79,
    "club": "Manchester United FC (ENG)",
    "nationality": "Unknown",
    "basePrice": 28,
    "photo": "/api/player-image?name=Amad%20Diallo&nat=Unknown&club=Manchester%20United%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_unk_16",
    "name": "Mohamed Kone",
    "position": "GK",
    "rating": 68,
    "club": "Sporting Charleroi (BEL)",
    "nationality": "Unknown",
    "basePrice": 2,
    "photo": "/api/player-image?name=Mohamed%20Kone&nat=Unknown&club=Sporting%20Charleroi%20(BEL)&pos=GK"
  },
  {
    "id": "wc_unk_17",
    "name": "Guela Doue",
    "position": "DF",
    "rating": 77,
    "club": "RC Strasbourg (FRA)",
    "nationality": "Unknown",
    "basePrice": 15,
    "photo": "/api/player-image?name=Guela%20Doue&nat=Unknown&club=RC%20Strasbourg%20(FRA)&pos=DF"
  },
  {
    "id": "wc_unk_18",
    "name": "Ibrahim Sangare",
    "position": "MF",
    "rating": 77,
    "club": "Nottingham Forest FC (ENG)",
    "nationality": "Unknown",
    "basePrice": 12,
    "photo": "/api/player-image?name=Ibrahim%20Sangare&nat=Unknown&club=Nottingham%20Forest%20FC%20(ENG)&pos=MF"
  },
  {
    "id": "wc_unk_19",
    "name": "Nicolas Pepe",
    "position": "FW",
    "rating": 80,
    "club": "Villarreal CF (ESP)",
    "nationality": "Unknown",
    "basePrice": 21,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Nicolas_Pepe_Cote_D%27Ivoire_v_Ecuador_14_June_2026-30.jpg/330px-Nicolas_Pepe_Cote_D%27Ivoire_v_Ecuador_14_June_2026-30.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_unk_20",
    "name": "Emmanuel Agbadou",
    "position": "DF",
    "rating": 79,
    "club": "Beniktan JK (TUR)",
    "nationality": "Unknown",
    "basePrice": 18,
    "photo": "/api/player-image?name=Emmanuel%20Agbadou&nat=Unknown&club=Beniktan%20JK%20(TUR)&pos=DF"
  },
  {
    "id": "wc_unk_21",
    "name": "Evan Ndicka",
    "position": "DF",
    "rating": 81,
    "club": "AS Roma (ITA)",
    "nationality": "Unknown",
    "basePrice": 29,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Evan_Ndicka_Cote_D%27Ivoire_v_Ecuador_14_June_2026-59.jpg/330px-Evan_Ndicka_Cote_D%27Ivoire_v_Ecuador_14_June_2026-59.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_unk_22",
    "name": "Evann Guessand",
    "position": "FW",
    "rating": 79,
    "club": "Crystal Palace FC (ENG)",
    "nationality": "Unknown",
    "basePrice": 27,
    "photo": "/api/player-image?name=Evann%20Guessand&nat=Unknown&club=Crystal%20Palace%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_unk_23",
    "name": "Alban Lafont",
    "position": "GK",
    "rating": 75,
    "club": "Panathinaikos FC (GRE)",
    "nationality": "Unknown",
    "basePrice": 6,
    "photo": "/api/player-image?name=Alban%20Lafont&nat=Unknown&club=Panathinaikos%20FC%20(GRE)&pos=GK"
  },
  {
    "id": "wc_unk_24",
    "name": "Bazoumana Toure",
    "position": "FW",
    "rating": 70,
    "club": "TSG Hoffenheim (GER)",
    "nationality": "Unknown",
    "basePrice": 4,
    "photo": "/api/player-image?name=Bazoumana%20Toure&nat=Unknown&club=TSG%20Hoffenheim%20(GER)&pos=FW"
  },
  {
    "id": "wc_unk_25",
    "name": "Parfait Guiagon",
    "position": "MF",
    "rating": 70,
    "club": "Sporting Charleroi (BEL)",
    "nationality": "Unknown",
    "basePrice": 5,
    "photo": "/api/player-image?name=Parfait%20Guiagon&nat=Unknown&club=Sporting%20Charleroi%20(BEL)&pos=MF"
  },
  {
    "id": "wc_unk_26",
    "name": "Inao Oulai Christ",
    "position": "MF",
    "rating": 64,
    "club": "Trabzonspor (TUR)",
    "nationality": "Unknown",
    "basePrice": 1,
    "photo": "/api/player-image?name=Inao%20Oulai%20Christ&nat=Unknown&club=Trabzonspor%20(TUR)&pos=MF"
  },
  {
    "id": "wc_cro_1",
    "name": "Dominik Livakovic",
    "position": "GK",
    "rating": 80,
    "club": "GNK Dinamo Zagreb (CRO)",
    "nationality": "Croatia",
    "basePrice": 14,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Dominik_Livakovic_Croatia_v_Portugal_2_July_2026-063.jpg/330px-Dominik_Livakovic_Croatia_v_Portugal_2_July_2026-063.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_cro_2",
    "name": "Josip Stanisic",
    "position": "DF",
    "rating": 78,
    "club": "FC Bayern München (GER)",
    "nationality": "Croatia",
    "basePrice": 18,
    "photo": "/api/player-image?name=Josip%20Stanisic&nat=Croatia&club=FC%20Bayern%20M%C3%BCnchen%20(GER)&pos=DF"
  },
  {
    "id": "wc_cro_3",
    "name": "Marin Pongracic",
    "position": "DF",
    "rating": 74,
    "club": "ACF Fiorentina (ITA)",
    "nationality": "Croatia",
    "basePrice": 5,
    "photo": "/api/player-image?name=Marin%20Pongracic&nat=Croatia&club=ACF%20Fiorentina%20(ITA)&pos=DF"
  },
  {
    "id": "wc_cro_4",
    "name": "Josko Gvardiol",
    "position": "DF",
    "rating": 84,
    "club": "Manchester City FC (ENG)",
    "nationality": "Croatia",
    "basePrice": 54,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Josko_Gvardiol_Croatia_v_Portugal_2_July_2026-262.jpg/330px-Josko_Gvardiol_Croatia_v_Portugal_2_July_2026-262.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_cro_5",
    "name": "Duje Caleta-Car",
    "position": "DF",
    "rating": 74,
    "club": "Real Sociedad (ESP)",
    "nationality": "Croatia",
    "basePrice": 4,
    "photo": "/api/player-image?name=Duje%20Caleta-Car&nat=Croatia&club=Real%20Sociedad%20(ESP)&pos=DF"
  },
  {
    "id": "wc_cro_6",
    "name": "Josip Sutalo",
    "position": "DF",
    "rating": 78,
    "club": "AFC Ajax (NED)",
    "nationality": "Croatia",
    "basePrice": 18,
    "photo": "/api/player-image?name=Josip%20Sutalo&nat=Croatia&club=AFC%20Ajax%20(NED)&pos=DF"
  },
  {
    "id": "wc_cro_7",
    "name": "Nikola Moro",
    "position": "MF",
    "rating": 75,
    "club": "Bologna FC (ITA)",
    "nationality": "Croatia",
    "basePrice": 6,
    "photo": "/api/player-image?name=Nikola%20Moro&nat=Croatia&club=Bologna%20FC%20(ITA)&pos=MF"
  },
  {
    "id": "wc_cro_8",
    "name": "Mateo Kovacic",
    "position": "MF",
    "rating": 83,
    "club": "Manchester City FC (ENG)",
    "nationality": "Croatia",
    "basePrice": 30,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Mateo_Kovacic_Croatia_v_Portugal_2_July_2026-132.jpg/330px-Mateo_Kovacic_Croatia_v_Portugal_2_July_2026-132.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_cro_9",
    "name": "Andrej Kramaric",
    "position": "FW",
    "rating": 81,
    "club": "TSG Hoffenheim (GER)",
    "nationality": "Croatia",
    "basePrice": 12,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Andrej_Kramaric_Croatia_v_Portugal_2_July_2026-014.jpg/330px-Andrej_Kramaric_Croatia_v_Portugal_2_July_2026-014.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_cro_10",
    "name": "Luka Modric",
    "position": "MF",
    "rating": 83,
    "club": "AC Milan (ITA)",
    "nationality": "Croatia",
    "basePrice": 12,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Luka_Modri%C4%87_at_the_2018_World_Cup_%28cropped%29.jpg/330px-Luka_Modri%C4%87_at_the_2018_World_Cup_%28cropped%29.jpg"
  },
  {
    "id": "wc_cro_11",
    "name": "Ante Budimir",
    "position": "FW",
    "rating": 82,
    "club": "CA Osasuna (ESP)",
    "nationality": "Croatia",
    "basePrice": 20,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Ante_Budimir_Croatia_v_Portugal_2_July_2026-034.jpg/330px-Ante_Budimir_Croatia_v_Portugal_2_July_2026-034.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_cro_12",
    "name": "Ivor Pandur",
    "position": "GK",
    "rating": 72,
    "club": "Hull City FC (ENG)",
    "nationality": "Croatia",
    "basePrice": 3,
    "photo": "/api/player-image?name=Ivor%20Pandur&nat=Croatia&club=Hull%20City%20FC%20(ENG)&pos=GK"
  },
  {
    "id": "wc_cro_13",
    "name": "Nikola Vlasic",
    "position": "MF",
    "rating": 79,
    "club": "Torino FC (ITA)",
    "nationality": "Croatia",
    "basePrice": 19,
    "photo": "/api/player-image?name=Nikola%20Vlasic&nat=Croatia&club=Torino%20FC%20(ITA)&pos=MF"
  },
  {
    "id": "wc_cro_14",
    "name": "Ivan Perisic",
    "position": "FW",
    "rating": 81,
    "club": "PSV Eindhoven (NED)",
    "nationality": "Croatia",
    "basePrice": 9,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Ivan_Perisic_Croatia_v_Portugal_2_July_2026-033.jpg/330px-Ivan_Perisic_Croatia_v_Portugal_2_July_2026-033.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_cro_15",
    "name": "Mario Pasalic",
    "position": "MF",
    "rating": 80,
    "club": "Atalanta Bergamo (ITA)",
    "nationality": "Croatia",
    "basePrice": 20,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/Mario_Pasalic_Croatia_v_Portugal_2_July_2026-023.jpg/330px-Mario_Pasalic_Croatia_v_Portugal_2_July_2026-023.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_cro_16",
    "name": "Martin Baturina",
    "position": "MF",
    "rating": 78,
    "club": "Como (ITA)",
    "nationality": "Croatia",
    "basePrice": 22,
    "photo": "/api/player-image?name=Martin%20Baturina&nat=Croatia&club=Como%20(ITA)&pos=MF"
  },
  {
    "id": "wc_cro_17",
    "name": "Petar Sucic",
    "position": "MF",
    "rating": 74,
    "club": "FC Internazionale Milano (ITA)",
    "nationality": "Croatia",
    "basePrice": 10,
    "photo": "/api/player-image?name=Petar%20Sucic&nat=Croatia&club=FC%20Internazionale%20Milano%20(ITA)&pos=MF"
  },
  {
    "id": "wc_cro_18",
    "name": "Kristijan Jakic",
    "position": "DF",
    "rating": 76,
    "club": "FC Augsburg (GER)",
    "nationality": "Croatia",
    "basePrice": 7,
    "photo": "/api/player-image?name=Kristijan%20Jakic&nat=Croatia&club=FC%20Augsburg%20(GER)&pos=DF"
  },
  {
    "id": "wc_cro_20",
    "name": "Igor Matanovic",
    "position": "FW",
    "rating": 71,
    "club": "SC Freiburg (GER)",
    "nationality": "Croatia",
    "basePrice": 4,
    "photo": "/api/player-image?name=Igor%20Matanovic&nat=Croatia&club=SC%20Freiburg%20(GER)&pos=FW"
  },
  {
    "id": "wc_cro_21",
    "name": "Luka Sucic",
    "position": "MF",
    "rating": 78,
    "club": "Real Sociedad (ESP)",
    "nationality": "Croatia",
    "basePrice": 32,
    "photo": "/api/player-image?name=Luka%20Sucic&nat=Croatia&club=Real%20Sociedad%20(ESP)&pos=MF"
  },
  {
    "id": "wc_cro_22",
    "name": "Luka Vuskovic",
    "position": "DF",
    "rating": 72,
    "club": "Hamburger SV (GER)",
    "nationality": "Croatia",
    "basePrice": 5,
    "photo": "/api/player-image?name=Luka%20Vuskovic&nat=Croatia&club=Hamburger%20SV%20(GER)&pos=DF"
  },
  {
    "id": "wc_cro_23",
    "name": "Dominik Kotarski",
    "position": "GK",
    "rating": 77,
    "club": "FC København (DEN)",
    "nationality": "Croatia",
    "basePrice": 12,
    "photo": "/api/player-image?name=Dominik%20Kotarski&nat=Croatia&club=FC%20K%C3%B8benhavn%20(DEN)&pos=GK"
  },
  {
    "id": "wc_cro_24",
    "name": "Marco Pasalic",
    "position": "FW",
    "rating": 71,
    "club": "Orlando City SC (USA)",
    "nationality": "Croatia",
    "basePrice": 3,
    "photo": "/api/player-image?name=Marco%20Pasalic&nat=Croatia&club=Orlando%20City%20SC%20(USA)&pos=FW"
  },
  {
    "id": "wc_cro_25",
    "name": "Martin Erlic",
    "position": "DF",
    "rating": 72,
    "club": "FC Midtjylland (DEN)",
    "nationality": "Croatia",
    "basePrice": 2,
    "photo": "/api/player-image?name=Martin%20Erlic&nat=Croatia&club=FC%20Midtjylland%20(DEN)&pos=DF"
  },
  {
    "id": "wc_cro_26",
    "name": "Petar Musa",
    "position": "FW",
    "rating": 76,
    "club": "FC Dallas (USA)",
    "nationality": "Croatia",
    "basePrice": 9,
    "photo": "/api/player-image?name=Petar%20Musa&nat=Croatia&club=FC%20Dallas%20(USA)&pos=FW"
  },
  {
    "id": "wc_unk_1",
    "name": "Eloy Room",
    "position": "GK",
    "rating": 75,
    "club": "Miami FC (USA)",
    "nationality": "Unknown",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Eloy%20Room&nat=Unknown&club=Miami%20FC%20(USA)&pos=GK"
  },
  {
    "id": "wc_unk_2",
    "name": "Shurandy Sambo",
    "position": "DF",
    "rating": 68,
    "club": "Sparta Rotterdam (NED)",
    "nationality": "Unknown",
    "basePrice": 2,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Ousmane_Diomand%C3%A9_Cote_D%27Ivoire_v_Ecuador_14_June_2026-58.jpg/330px-Ousmane_Diomand%C3%A9_Cote_D%27Ivoire_v_Ecuador_14_June_2026-58.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_unk_3",
    "name": "Jurien Gaari",
    "position": "DF",
    "rating": 70,
    "club": "Abha Club (KSA)",
    "nationality": "Unknown",
    "basePrice": 5,
    "photo": "/api/player-image?name=Jurien%20Gaari&nat=Unknown&club=Abha%20Club%20(KSA)&pos=DF"
  },
  {
    "id": "wc_unk_4",
    "name": "Roshon Van Eijma",
    "position": "DF",
    "rating": 70,
    "club": "RKC Waalwijk (NED)",
    "nationality": "Unknown",
    "basePrice": 5,
    "photo": "/api/player-image?name=Roshon%20Van%20Eijma&nat=Unknown&club=RKC%20Waalwijk%20(NED)&pos=DF"
  },
  {
    "id": "wc_unk_5",
    "name": "Sherel Floranus",
    "position": "DF",
    "rating": 66,
    "club": "PEC Zwolle (NED)",
    "nationality": "Unknown",
    "basePrice": 1,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Wilfried_Singo_Cote_D%27Ivoire_v_Ecuador_14_June_2026-18.jpg/330px-Wilfried_Singo_Cote_D%27Ivoire_v_Ecuador_14_June_2026-18.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_unk_6",
    "name": "Godfried Roemeratoe",
    "position": "MF",
    "rating": 70,
    "club": "RKC Waalwijk (NED)",
    "nationality": "Unknown",
    "basePrice": 5,
    "photo": "/api/player-image?name=Godfried%20Roemeratoe&nat=Unknown&club=RKC%20Waalwijk%20(NED)&pos=MF"
  },
  {
    "id": "wc_unk_7",
    "name": "Juninho Bacuna",
    "position": "MF",
    "rating": 69,
    "club": "FC Volendam (NED)",
    "nationality": "Unknown",
    "basePrice": 1,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Odilon_Kossounou_Cote_D%27Ivoire_v_Ecuador_14_June_2026-57.jpg/330px-Odilon_Kossounou_Cote_D%27Ivoire_v_Ecuador_14_June_2026-57.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_unk_8",
    "name": "Livano Comenencia",
    "position": "MF",
    "rating": 62,
    "club": "FC Zürich (SUI)",
    "nationality": "Unknown",
    "basePrice": 1,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Franck_Kessie_Cote_D%27Ivoire_v_Ecuador_14_June_2026-15_%28cropped%29.jpg/330px-Franck_Kessie_Cote_D%27Ivoire_v_Ecuador_14_June_2026-15_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_unk_9",
    "name": "Juergen Locadia",
    "position": "FW",
    "rating": 75,
    "club": "Miami FC (USA)",
    "nationality": "Unknown",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Juergen%20Locadia&nat=Unknown&club=Miami%20FC%20(USA)&pos=FW"
  },
  {
    "id": "wc_unk_10",
    "name": "Leandro Bacuna",
    "position": "MF",
    "rating": 69,
    "club": "Indnr FK (TUR)",
    "nationality": "Unknown",
    "basePrice": 1,
    "photo": "/api/player-image?name=Leandro%20Bacuna&nat=Unknown&club=Indnr%20FK%20(TUR)&pos=MF"
  },
  {
    "id": "wc_unk_11",
    "name": "Jeremy Antonisse",
    "position": "FW",
    "rating": 70,
    "club": "AE Ki",
    "nationality": "Unknown",
    "basePrice": 5,
    "photo": "/api/player-image?name=Jeremy%20Antonisse&nat=Unknown&club=AE%20Ki&pos=FW"
  },
  {
    "id": "wc_unk_12",
    "name": "Sontje Hansen",
    "position": "FW",
    "rating": 69,
    "club": "Middlesbrough FC (ENG)",
    "nationality": "Unknown",
    "basePrice": 3,
    "photo": "/api/player-image?name=Sontje%20Hansen&nat=Unknown&club=Middlesbrough%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_unk_13",
    "name": "Tyrese Noslin",
    "position": "FW",
    "rating": 66,
    "club": "SC Telstar (NED)",
    "nationality": "Unknown",
    "basePrice": 2,
    "photo": "/api/player-image?name=Tyrese%20Noslin&nat=Unknown&club=SC%20Telstar%20(NED)&pos=FW"
  },
  {
    "id": "wc_unk_14",
    "name": "Kenji Gorre",
    "position": "FW",
    "rating": 75,
    "club": "Maccabi Haifa FC (ISR)",
    "nationality": "Unknown",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Kenji%20Gorre&nat=Unknown&club=Maccabi%20Haifa%20FC%20(ISR)&pos=FW"
  },
  {
    "id": "wc_unk_15",
    "name": "Arjany Martha",
    "position": "MF",
    "rating": 64,
    "club": "Rotherham United FC (ENG)",
    "nationality": "Unknown",
    "basePrice": 1,
    "photo": "/api/player-image?name=Arjany%20Martha&nat=Unknown&club=Rotherham%20United%20FC%20(ENG)&pos=MF"
  },
  {
    "id": "wc_unk_16",
    "name": "Jearl Margaritha",
    "position": "FW",
    "rating": 70,
    "club": "SK Beveren (BEL)",
    "nationality": "Unknown",
    "basePrice": 5,
    "photo": "/api/player-image?name=Jearl%20Margaritha&nat=Unknown&club=SK%20Beveren%20(BEL)&pos=FW"
  },
  {
    "id": "wc_unk_17",
    "name": "Brandley Kuwas",
    "position": "FW",
    "rating": 67,
    "club": "FC Volendam (NED)",
    "nationality": "Unknown",
    "basePrice": 1,
    "photo": "/api/player-image?name=Brandley%20Kuwas&nat=Unknown&club=FC%20Volendam%20(NED)&pos=FW"
  },
  {
    "id": "wc_unk_18",
    "name": "Armando Obispo",
    "position": "DF",
    "rating": 73,
    "club": "PSV Eindhoven (NED)",
    "nationality": "Unknown",
    "basePrice": 4,
    "photo": "/api/player-image?name=Armando%20Obispo&nat=Unknown&club=PSV%20Eindhoven%20(NED)&pos=DF"
  },
  {
    "id": "wc_unk_19",
    "name": "Gervane Kastaneer",
    "position": "FW",
    "rating": 75,
    "club": "Terengganu FC (MAS)",
    "nationality": "Unknown",
    "basePrice": 12.5,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Nicolas_Pepe_Cote_D%27Ivoire_v_Ecuador_14_June_2026-30.jpg/330px-Nicolas_Pepe_Cote_D%27Ivoire_v_Ecuador_14_June_2026-30.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_unk_20",
    "name": "Joshua Brenet",
    "position": "DF",
    "rating": 70,
    "club": "Kayserispor (TUR)",
    "nationality": "Unknown",
    "basePrice": 5,
    "photo": "/api/player-image?name=Joshua%20Brenet&nat=Unknown&club=Kayserispor%20(TUR)&pos=DF"
  },
  {
    "id": "wc_unk_21",
    "name": "Tahith Chong",
    "position": "MF",
    "rating": 71,
    "club": "She",
    "nationality": "Unknown",
    "basePrice": 3,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Evan_Ndicka_Cote_D%27Ivoire_v_Ecuador_14_June_2026-59.jpg/330px-Evan_Ndicka_Cote_D%27Ivoire_v_Ecuador_14_June_2026-59.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_unk_22",
    "name": "Kevin Felida",
    "position": "MF",
    "rating": 75,
    "club": "FC Den Bosch (NED)",
    "nationality": "Unknown",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Kevin%20Felida&nat=Unknown&club=FC%20Den%20Bosch%20(NED)&pos=MF"
  },
  {
    "id": "wc_unk_23",
    "name": "Riechedly Bazoer",
    "position": "DF",
    "rating": 74,
    "club": "Konyaspor (TUR)",
    "nationality": "Unknown",
    "basePrice": 4,
    "photo": "/api/player-image?name=Riechedly%20Bazoer&nat=Unknown&club=Konyaspor%20(TUR)&pos=DF"
  },
  {
    "id": "wc_unk_24",
    "name": "Deveron Fonville",
    "position": "DF",
    "rating": 63,
    "club": "NEC Nijmegen (NED)",
    "nationality": "Unknown",
    "basePrice": 1,
    "photo": "/api/player-image?name=Deveron%20Fonville&nat=Unknown&club=NEC%20Nijmegen%20(NED)&pos=DF"
  },
  {
    "id": "wc_unk_25",
    "name": "Tyrick Bodak",
    "position": "GK",
    "rating": 60,
    "club": "SC Telstar (NED)",
    "nationality": "Unknown",
    "basePrice": 1,
    "photo": "/api/player-image?name=Tyrick%20Bodak&nat=Unknown&club=SC%20Telstar%20(NED)&pos=GK"
  },
  {
    "id": "wc_unk_26",
    "name": "Trevor Doornbusch",
    "position": "GK",
    "rating": 70,
    "club": "VVV Venlo (NED)",
    "nationality": "Unknown",
    "basePrice": 5,
    "photo": "/api/player-image?name=Trevor%20Doornbusch&nat=Unknown&club=VVV%20Venlo%20(NED)&pos=GK"
  },
  {
    "id": "wc_cze_1",
    "name": "Matej Kovar",
    "position": "GK",
    "rating": 75,
    "club": "PSV Eindhoven (NED)",
    "nationality": "Czechia",
    "basePrice": 7,
    "photo": "/api/player-image?name=Matej%20Kovar&nat=Czechia&club=PSV%20Eindhoven%20(NED)&pos=GK"
  },
  {
    "id": "wc_cze_2",
    "name": "David Zima",
    "position": "DF",
    "rating": 74,
    "club": "SK Slavia Praha (CZE)",
    "nationality": "Czechia",
    "basePrice": 5,
    "photo": "/api/player-image?name=David%20Zima&nat=Czechia&club=SK%20Slavia%20Praha%20(CZE)&pos=DF"
  },
  {
    "id": "wc_cze_3",
    "name": "Tomas Holes",
    "position": "DF",
    "rating": 76,
    "club": "SK Slavia Praha (CZE)",
    "nationality": "Czechia",
    "basePrice": 5,
    "photo": "/api/player-image?name=Tomas%20Holes&nat=Czechia&club=SK%20Slavia%20Praha%20(CZE)&pos=DF"
  },
  {
    "id": "wc_cze_4",
    "name": "Robin Hranac",
    "position": "DF",
    "rating": 71,
    "club": "TSG Hoffenheim (GER)",
    "nationality": "Czechia",
    "basePrice": 2,
    "photo": "/api/player-image?name=Robin%20Hranac&nat=Czechia&club=TSG%20Hoffenheim%20(GER)&pos=DF"
  },
  {
    "id": "wc_cze_5",
    "name": "Vladimir Coufal",
    "position": "DF",
    "rating": 73,
    "club": "TSG Hoffenheim (GER)",
    "nationality": "Czechia",
    "basePrice": 2,
    "photo": "/api/player-image?name=Vladimir%20Coufal&nat=Czechia&club=TSG%20Hoffenheim%20(GER)&pos=DF"
  },
  {
    "id": "wc_cze_6",
    "name": "Stepan Chaloupek",
    "position": "DF",
    "rating": 70,
    "club": "SK Slavia Praha (CZE)",
    "nationality": "Czechia",
    "basePrice": 2,
    "photo": "/api/player-image?name=Stepan%20Chaloupek&nat=Czechia&club=SK%20Slavia%20Praha%20(CZE)&pos=DF"
  },
  {
    "id": "wc_cze_7",
    "name": "Ladislav Krejci",
    "position": "DF",
    "rating": 78,
    "club": "Wolverhampton Wanderers FC (ENG)",
    "nationality": "Czechia",
    "basePrice": 18,
    "photo": "/api/player-image?name=Ladislav%20Krejci&nat=Czechia&club=Wolverhampton%20Wanderers%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_cze_8",
    "name": "Vladimir Darida",
    "position": "MF",
    "rating": 73,
    "club": "FC Hradec Králové (CZE)",
    "nationality": "Czechia",
    "basePrice": 2,
    "photo": "/api/player-image?name=Vladimir%20Darida&nat=Czechia&club=FC%20Hradec%20Kr%C3%A1lov%C3%A9%20(CZE)&pos=MF"
  },
  {
    "id": "wc_cze_9",
    "name": "Adam Hlozek",
    "position": "FW",
    "rating": 77,
    "club": "TSG Hoffenheim (GER)",
    "nationality": "Czechia",
    "basePrice": 17,
    "photo": "/api/player-image?name=Adam%20Hlozek&nat=Czechia&club=TSG%20Hoffenheim%20(GER)&pos=FW"
  },
  {
    "id": "wc_cze_10",
    "name": "Patrik Schick",
    "position": "FW",
    "rating": 85,
    "club": "Bayer 04 Leverkusen (GER)",
    "nationality": "Czechia",
    "basePrice": 54,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/2020-03-10_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League_Achtelfinale%2C_RB_Leipzig_-_Tottenham_Hotspur_1DX_3672_by_Stepro.jpg/330px-2020-03-10_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League_Achtelfinale%2C_RB_Leipzig_-_Tottenham_Hotspur_1DX_3672_by_Stepro.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_cze_11",
    "name": "Jan Kuchta",
    "position": "FW",
    "rating": 73,
    "club": "AC Sparta Praha (CZE)",
    "nationality": "Czechia",
    "basePrice": 3,
    "photo": "/api/player-image?name=Jan%20Kuchta&nat=Czechia&club=AC%20Sparta%20Praha%20(CZE)&pos=FW"
  },
  {
    "id": "wc_cze_12",
    "name": "Lukas Cerv",
    "position": "MF",
    "rating": 74,
    "club": "FC Viktoria Plzen (CZE)",
    "nationality": "Czechia",
    "basePrice": 6,
    "photo": "/api/player-image?name=Lukas%20Cerv&nat=Czechia&club=FC%20Viktoria%20Plzen%20(CZE)&pos=MF"
  },
  {
    "id": "wc_cze_13",
    "name": "Mojmir Chytil",
    "position": "FW",
    "rating": 74,
    "club": "SK Slavia Praha (CZE)",
    "nationality": "Czechia",
    "basePrice": 6,
    "photo": "/api/player-image?name=Mojmir%20Chytil&nat=Czechia&club=SK%20Slavia%20Praha%20(CZE)&pos=FW"
  },
  {
    "id": "wc_cze_14",
    "name": "David Jurasek",
    "position": "DF",
    "rating": 73,
    "club": "SK Slavia Praha (CZE)",
    "nationality": "Czechia",
    "basePrice": 4,
    "photo": "/api/player-image?name=David%20Jurasek&nat=Czechia&club=SK%20Slavia%20Praha%20(CZE)&pos=DF"
  },
  {
    "id": "wc_cze_15",
    "name": "Pavel Sulc",
    "position": "FW",
    "rating": 77,
    "club": "Olympique Lyonnais (FRA)",
    "nationality": "Czechia",
    "basePrice": 15,
    "photo": "/api/player-image?name=Pavel%20Sulc&nat=Czechia&club=Olympique%20Lyonnais%20(FRA)&pos=FW"
  },
  {
    "id": "wc_cze_16",
    "name": "Jindrich Stanek",
    "position": "GK",
    "rating": 76,
    "club": "SK Slavia Praha (CZE)",
    "nationality": "Czechia",
    "basePrice": 5,
    "photo": "/api/player-image?name=Jindrich%20Stanek&nat=Czechia&club=SK%20Slavia%20Praha%20(CZE)&pos=GK"
  },
  {
    "id": "wc_cze_17",
    "name": "Lukas Provod",
    "position": "MF",
    "rating": 78,
    "club": "SK Slavia Praha (CZE)",
    "nationality": "Czechia",
    "basePrice": 14,
    "photo": "/api/player-image?name=Lukas%20Provod&nat=Czechia&club=SK%20Slavia%20Praha%20(CZE)&pos=MF"
  },
  {
    "id": "wc_cze_18",
    "name": "Michal Sadilek",
    "position": "MF",
    "rating": 76,
    "club": "SK Slavia Praha (CZE)",
    "nationality": "Czechia",
    "basePrice": 9,
    "photo": "/api/player-image?name=Michal%20Sadilek&nat=Czechia&club=SK%20Slavia%20Praha%20(CZE)&pos=MF"
  },
  {
    "id": "wc_cze_19",
    "name": "Tomas Chory",
    "position": "FW",
    "rating": 75,
    "club": "SK Slavia Praha (CZE)",
    "nationality": "Czechia",
    "basePrice": 6,
    "photo": "/api/player-image?name=Tomas%20Chory&nat=Czechia&club=SK%20Slavia%20Praha%20(CZE)&pos=FW"
  },
  {
    "id": "wc_cze_20",
    "name": "Jaroslav Zeleny",
    "position": "DF",
    "rating": 72,
    "club": "AC Sparta Praha (CZE)",
    "nationality": "Czechia",
    "basePrice": 2,
    "photo": "/api/player-image?name=Jaroslav%20Zeleny&nat=Czechia&club=AC%20Sparta%20Praha%20(CZE)&pos=DF"
  },
  {
    "id": "wc_cze_21",
    "name": "David Doudera",
    "position": "DF",
    "rating": 74,
    "club": "SK Slavia Praha (CZE)",
    "nationality": "Czechia",
    "basePrice": 5,
    "photo": "/api/player-image?name=David%20Doudera&nat=Czechia&club=SK%20Slavia%20Praha%20(CZE)&pos=DF"
  },
  {
    "id": "wc_cze_22",
    "name": "Tomas Soucek",
    "position": "MF",
    "rating": 78,
    "club": "West Ham United FC (ENG)",
    "nationality": "Czechia",
    "basePrice": 12,
    "photo": "/api/player-image?name=Tomas%20Soucek&nat=Czechia&club=West%20Ham%20United%20FC%20(ENG)&pos=MF"
  },
  {
    "id": "wc_cze_23",
    "name": "Lukas Hornicek",
    "position": "GK",
    "rating": 73,
    "club": "SC Braga (POR)",
    "nationality": "Czechia",
    "basePrice": 6,
    "photo": "/api/player-image?name=Lukas%20Hornicek&nat=Czechia&club=SC%20Braga%20(POR)&pos=GK"
  },
  {
    "id": "wc_cze_24",
    "name": "Alexandr Sojka",
    "position": "MF",
    "rating": 75,
    "club": "FC Viktoria Plzen (CZE)",
    "nationality": "Czechia",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Alexandr%20Sojka&nat=Czechia&club=FC%20Viktoria%20Plzen%20(CZE)&pos=MF"
  },
  {
    "id": "wc_cze_25",
    "name": "Hugo Sochurek",
    "position": "MF",
    "rating": 70,
    "club": "AC Sparta Praha (CZE)",
    "nationality": "Czechia",
    "basePrice": 5,
    "photo": "/api/player-image?name=Hugo%20Sochurek&nat=Czechia&club=AC%20Sparta%20Praha%20(CZE)&pos=MF"
  },
  {
    "id": "wc_cze_26",
    "name": "Denis Visinsky",
    "position": "FW",
    "rating": 68,
    "club": "FC Viktoria Plzen (CZE)",
    "nationality": "Czechia",
    "basePrice": 2,
    "photo": "/api/player-image?name=Denis%20Visinsky&nat=Czechia&club=FC%20Viktoria%20Plzen%20(CZE)&pos=FW"
  },
  {
    "id": "wc_egy_1",
    "name": "Elshenawy Mohamed",
    "position": "GK",
    "rating": 73,
    "club": "Al Ahly FC (EGY)",
    "nationality": "Egypt",
    "basePrice": 3,
    "photo": "/api/player-image?name=Elshenawy%20Mohamed&nat=Egypt&club=Al%20Ahly%20FC%20(EGY)&pos=GK"
  },
  {
    "id": "wc_egy_2",
    "name": "Ibrahim Yasser",
    "position": "DF",
    "rating": 75,
    "club": "Al Ahly FC (EGY)",
    "nationality": "Egypt",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Ibrahim%20Yasser&nat=Egypt&club=Al%20Ahly%20FC%20(EGY)&pos=DF"
  },
  {
    "id": "wc_egy_3",
    "name": "Hany Mohamed",
    "position": "DF",
    "rating": 73,
    "club": "Al Ahly FC (EGY)",
    "nationality": "Egypt",
    "basePrice": 3,
    "photo": "/api/player-image?name=Hany%20Mohamed&nat=Egypt&club=Al%20Ahly%20FC%20(EGY)&pos=DF"
  },
  {
    "id": "wc_egy_4",
    "name": "Abdelmaguid Hossam",
    "position": "DF",
    "rating": 70,
    "club": "Zamalek SC (EGY)",
    "nationality": "Egypt",
    "basePrice": 5,
    "photo": "/api/player-image?name=Abdelmaguid%20Hossam&nat=Egypt&club=Zamalek%20SC%20(EGY)&pos=DF"
  },
  {
    "id": "wc_egy_5",
    "name": "Rabia Ramy",
    "position": "DF",
    "rating": 67,
    "club": "Al Ain FC (UAE)",
    "nationality": "Egypt",
    "basePrice": 1,
    "photo": "/api/player-image?name=Rabia%20Ramy&nat=Egypt&club=Al%20Ain%20FC%20(UAE)&pos=DF"
  },
  {
    "id": "wc_egy_6",
    "name": "Abdelmoneim Mohamed",
    "position": "DF",
    "rating": 74,
    "club": "OGC Nice (FRA)",
    "nationality": "Egypt",
    "basePrice": 6,
    "photo": "/api/player-image?name=Abdelmoneim%20Mohamed&nat=Egypt&club=OGC%20Nice%20(FRA)&pos=DF"
  },
  {
    "id": "wc_egy_7",
    "name": "TREZEGUET",
    "position": "FW",
    "rating": 75,
    "club": "Al Ahly FC (EGY)",
    "nationality": "Egypt",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=TREZEGUET&nat=Egypt&club=Al%20Ahly%20FC%20(EGY)&pos=FW"
  },
  {
    "id": "wc_egy_8",
    "name": "Ashour Emam",
    "position": "MF",
    "rating": 75,
    "club": "Al Ahly FC (EGY)",
    "nationality": "Egypt",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Ashour%20Emam&nat=Egypt&club=Al%20Ahly%20FC%20(EGY)&pos=MF"
  },
  {
    "id": "wc_egy_9",
    "name": "Abdelkarim Hamza",
    "position": "FW",
    "rating": 75,
    "club": "FC Barcelona (ESP)",
    "nationality": "Egypt",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Abdelkarim%20Hamza&nat=Egypt&club=FC%20Barcelona%20(ESP)&pos=FW"
  },
  {
    "id": "wc_egy_10",
    "name": "Salah Mohamed",
    "position": "FW",
    "rating": 91,
    "club": "Liverpool FC (ENG)",
    "nationality": "Egypt",
    "basePrice": 82,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Mohamed_Salah_Argentina_v_Egypt_7_July_2026-163_%28cropped%29.jpg/330px-Mohamed_Salah_Argentina_v_Egypt_7_July_2026-163_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_egy_11",
    "name": "Zico Mostafa",
    "position": "MF",
    "rating": 73,
    "club": "Pyramids FC (EGY)",
    "nationality": "Egypt",
    "basePrice": 3,
    "photo": "/api/player-image?name=Zico%20Mostafa&nat=Egypt&club=Pyramids%20FC%20(EGY)&pos=MF"
  },
  {
    "id": "wc_egy_12",
    "name": "Hassan Haissem",
    "position": "FW",
    "rating": 72,
    "club": "Real Oviedo (ESP)",
    "nationality": "Egypt",
    "basePrice": 5,
    "photo": "/api/player-image?name=Hassan%20Haissem&nat=Egypt&club=Real%20Oviedo%20(ESP)&pos=FW"
  },
  {
    "id": "wc_egy_13",
    "name": "Fatouh Ahmed",
    "position": "DF",
    "rating": 70,
    "club": "Zamalek SC (EGY)",
    "nationality": "Egypt",
    "basePrice": 5,
    "photo": "/api/player-image?name=Fatouh%20Ahmed&nat=Egypt&club=Zamalek%20SC%20(EGY)&pos=DF"
  },
  {
    "id": "wc_egy_14",
    "name": "Fathy Hamdy",
    "position": "MF",
    "rating": 70,
    "club": "Al Wakrah SC (QAT)",
    "nationality": "Egypt",
    "basePrice": 5,
    "photo": "/api/player-image?name=Fathy%20Hamdy&nat=Egypt&club=Al%20Wakrah%20SC%20(QAT)&pos=MF"
  },
  {
    "id": "wc_egy_15",
    "name": "Hafez Karim",
    "position": "DF",
    "rating": 53,
    "club": "Pyramids FC (EGY)",
    "nationality": "Egypt",
    "basePrice": 1,
    "photo": "/api/player-image?name=Hafez%20Karim&nat=Egypt&club=Pyramids%20FC%20(EGY)&pos=DF"
  },
  {
    "id": "wc_egy_16",
    "name": "Soliman Mahdy",
    "position": "GK",
    "rating": 70,
    "club": "Zamalek SC (EGY)",
    "nationality": "Egypt",
    "basePrice": 5,
    "photo": "/api/player-image?name=Soliman%20Mahdy&nat=Egypt&club=Zamalek%20SC%20(EGY)&pos=GK"
  },
  {
    "id": "wc_egy_17",
    "name": "Lashin Mohanad",
    "position": "MF",
    "rating": 75,
    "club": "Pyramids FC (EGY)",
    "nationality": "Egypt",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Lashin%20Mohanad&nat=Egypt&club=Pyramids%20FC%20(EGY)&pos=MF"
  },
  {
    "id": "wc_egy_18",
    "name": "Donga Nabil",
    "position": "MF",
    "rating": 70,
    "club": "Al Najmah SC (KSA)",
    "nationality": "Egypt",
    "basePrice": 5,
    "photo": "/api/player-image?name=Donga%20Nabil&nat=Egypt&club=Al%20Najmah%20SC%20(KSA)&pos=MF"
  },
  {
    "id": "wc_egy_19",
    "name": "Attia Marawan",
    "position": "MF",
    "rating": 75,
    "club": "Al Ahly FC (EGY)",
    "nationality": "Egypt",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Attia%20Marawan&nat=Egypt&club=Al%20Ahly%20FC%20(EGY)&pos=MF"
  },
  {
    "id": "wc_egy_20",
    "name": "Adel Ibrahim",
    "position": "FW",
    "rating": 75,
    "club": "FC Nordsjælland (DEN)",
    "nationality": "Egypt",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Adel%20Ibrahim&nat=Egypt&club=FC%20Nordsj%C3%A6lland%20(DEN)&pos=FW"
  },
  {
    "id": "wc_egy_21",
    "name": "Saber Mahmoud",
    "position": "MF",
    "rating": 75,
    "club": "ZED FC (EGY)",
    "nationality": "Egypt",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Saber%20Mahmoud&nat=Egypt&club=ZED%20FC%20(EGY)&pos=MF"
  },
  {
    "id": "wc_egy_22",
    "name": "Marmoush Omar",
    "position": "FW",
    "rating": 84,
    "club": "Manchester City FC (ENG)",
    "nationality": "Egypt",
    "basePrice": 51,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Omar_Marmoush_Argentina_v_Egypt_7_July_2026-018.jpg/330px-Omar_Marmoush_Argentina_v_Egypt_7_July_2026-018.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_egy_23",
    "name": "Shoubir Mostafa",
    "position": "GK",
    "rating": 75,
    "club": "Al Ahly FC (EGY)",
    "nationality": "Egypt",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Shoubir%20Mostafa&nat=Egypt&club=Al%20Ahly%20FC%20(EGY)&pos=GK"
  },
  {
    "id": "wc_egy_24",
    "name": "Alaa Tarek",
    "position": "DF",
    "rating": 75,
    "club": "ZED FC (EGY)",
    "nationality": "Egypt",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Alaa%20Tarek&nat=Egypt&club=ZED%20FC%20(EGY)&pos=DF"
  },
  {
    "id": "wc_egy_25",
    "name": "ZIZO",
    "position": "FW",
    "rating": 75,
    "club": "Al Ahly FC (EGY)",
    "nationality": "Egypt",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=ZIZO&nat=Egypt&club=Al%20Ahly%20FC%20(EGY)&pos=FW"
  },
  {
    "id": "wc_egy_26",
    "name": "Alaa Mohamed",
    "position": "GK",
    "rating": 73,
    "club": "El Gouna FC (EGY)",
    "nationality": "Egypt",
    "basePrice": 3,
    "photo": "/api/player-image?name=Alaa%20Mohamed&nat=Egypt&club=El%20Gouna%20FC%20(EGY)&pos=GK"
  },
  {
    "id": "wc_eng_1",
    "name": "Jordan Pickford",
    "position": "GK",
    "rating": 84,
    "club": "Everton FC (ENG)",
    "nationality": "England",
    "basePrice": 23,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Jordan_Pickford_England_v_Ghana_23_June_2026-316_%28cropped%29.jpg/330px-Jordan_Pickford_England_v_Ghana_23_June_2026-316_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_eng_2",
    "name": "Ezri Konsa",
    "position": "DF",
    "rating": 82,
    "club": "Aston Villa FC (ENG)",
    "nationality": "England",
    "basePrice": 31,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Ezri_Konsa_England_v_Panama_27_June_26-259_%28cropped%29.jpg/330px-Ezri_Konsa_England_v_Panama_27_June_26-259_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_eng_3",
    "name": "Nico Oreilly",
    "position": "DF",
    "rating": 73,
    "club": "Manchester City FC (ENG)",
    "nationality": "England",
    "basePrice": 7,
    "photo": "/api/player-image?name=Nico%20Oreilly&nat=England&club=Manchester%20City%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_eng_4",
    "name": "Declan Rice",
    "position": "MF",
    "rating": 87,
    "club": "Arsenal FC (ENG)",
    "nationality": "England",
    "basePrice": 84,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Declan_Rice_England_v_Ghana_23_June_2026-150.jpg/330px-Declan_Rice_England_v_Ghana_23_June_2026-150.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_eng_5",
    "name": "John Stones",
    "position": "DF",
    "rating": 82,
    "club": "Manchester City FC (ENG)",
    "nationality": "England",
    "basePrice": 21,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/John_Stones_England_v_Ghana_23_June_2026-038.jpg/330px-John_Stones_England_v_Ghana_23_June_2026-038.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_eng_6",
    "name": "Marc Guehi",
    "position": "DF",
    "rating": 82,
    "club": "Manchester City FC (ENG)",
    "nationality": "England",
    "basePrice": 35,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Marc_Guehi_England_v_Panama_27_June_26-182.jpg/330px-Marc_Guehi_England_v_Panama_27_June_26-182.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_eng_7",
    "name": "Bukayo Saka",
    "position": "FW",
    "rating": 88,
    "club": "Arsenal FC (ENG)",
    "nationality": "England",
    "basePrice": 119,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Bukayo_Saka_England_v_Ghana_23_June_2026-037_%28cropped%29.jpg/330px-Bukayo_Saka_England_v_Ghana_23_June_2026-037_%28cropped%29.jpg"
  },
  {
    "id": "wc_eng_8",
    "name": "Elliot Anderson",
    "position": "MF",
    "rating": 80,
    "club": "Nottingham Forest FC (ENG)",
    "nationality": "England",
    "basePrice": 30,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Elliot_Anderson_England_v_Ghana_23_June_2026-059_%28cropped%29.jpg/330px-Elliot_Anderson_England_v_Ghana_23_June_2026-059_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_eng_9",
    "name": "Harry Kane",
    "position": "FW",
    "rating": 89,
    "club": "FC Bayern München (GER)",
    "nationality": "England",
    "basePrice": 87,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Harry_Kane_England_v_Ghana_23_June_2026-319_%28cropped%29.jpg/330px-Harry_Kane_England_v_Ghana_23_June_2026-319_%28cropped%29.jpg"
  },
  {
    "id": "wc_eng_10",
    "name": "Jude Bellingham",
    "position": "MF",
    "rating": 90,
    "club": "Real Madrid C. F. (ESP)",
    "nationality": "England",
    "basePrice": 175,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Jude_Bellingham_England_v_Ghana_23_June_2026-061_%28cropped%29.jpg/330px-Jude_Bellingham_England_v_Ghana_23_June_2026-061_%28cropped%29.jpg"
  },
  {
    "id": "wc_eng_11",
    "name": "Marcus Rashford",
    "position": "FW",
    "rating": 80,
    "club": "FC Barcelona (ESP)",
    "nationality": "England",
    "basePrice": 23,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/Marcus_Rashford_England_v_Ghana_23_June_2026-073.jpg/330px-Marcus_Rashford_England_v_Ghana_23_June_2026-073.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_eng_12",
    "name": "Trevoh Chalobah",
    "position": "DF",
    "rating": 79,
    "club": "Chelsea FC (ENG)",
    "nationality": "England",
    "basePrice": 21,
    "photo": "/api/player-image?name=Trevoh%20Chalobah&nat=England&club=Chelsea%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_eng_13",
    "name": "Dean Henderson",
    "position": "GK",
    "rating": 81,
    "club": "Crystal Palace FC (ENG)",
    "nationality": "England",
    "basePrice": 21,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Dean_Henderson_England_v_Panama_27_June_26-039.jpg/330px-Dean_Henderson_England_v_Panama_27_June_26-039.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_eng_14",
    "name": "Jordan Henderson",
    "position": "MF",
    "rating": 79,
    "club": "Brentford FC (ENG)",
    "nationality": "England",
    "basePrice": 5,
    "photo": "/api/player-image?name=Jordan%20Henderson&nat=England&club=Brentford%20FC%20(ENG)&pos=MF"
  },
  {
    "id": "wc_eng_15",
    "name": "Dan Burn",
    "position": "DF",
    "rating": 79,
    "club": "Newcastle United FC (ENG)",
    "nationality": "England",
    "basePrice": 9,
    "photo": "/api/player-image?name=Dan%20Burn&nat=England&club=Newcastle%20United%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_eng_16",
    "name": "Kobbie Mainoo",
    "position": "MF",
    "rating": 77,
    "club": "Manchester United FC (ENG)",
    "nationality": "England",
    "basePrice": 23,
    "photo": "/api/player-image?name=Kobbie%20Mainoo&nat=England&club=Manchester%20United%20FC%20(ENG)&pos=MF"
  },
  {
    "id": "wc_eng_17",
    "name": "Morgan Rogers",
    "position": "MF",
    "rating": 82,
    "club": "Aston Villa FC (ENG)",
    "nationality": "England",
    "basePrice": 45,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Morgan_Rogers_England_v_Panama_27_June_26-144_%28cropped%29.jpg/330px-Morgan_Rogers_England_v_Panama_27_June_26-144_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_eng_18",
    "name": "Anthony Gordon",
    "position": "FW",
    "rating": 83,
    "club": "Newcastle United FC (ENG)",
    "nationality": "England",
    "basePrice": 50,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Team_England_England_v_Ghana_at_2026_Fifa_World_Cup_by_YantsImages_03_%28Anthony_Gordon%29.jpg/330px-Team_England_England_v_Ghana_at_2026_Fifa_World_Cup_by_YantsImages_03_%28Anthony_Gordon%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_eng_19",
    "name": "Ollie Watkins",
    "position": "FW",
    "rating": 84,
    "club": "Aston Villa FC (ENG)",
    "nationality": "England",
    "basePrice": 42,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Ollie_Watkins_England_v_Ghana_23_June_2026-035.jpg/330px-Ollie_Watkins_England_v_Ghana_23_June_2026-035.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_eng_20",
    "name": "Noni Madueke",
    "position": "FW",
    "rating": 80,
    "club": "Arsenal FC (ENG)",
    "nationality": "England",
    "basePrice": 30,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Noni_Madueke_England_v_Panama_27_June_26-054.jpg/330px-Noni_Madueke_England_v_Panama_27_June_26-054.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_eng_21",
    "name": "Eberechi Eze",
    "position": "MF",
    "rating": 83,
    "club": "Arsenal FC (ENG)",
    "nationality": "England",
    "basePrice": 42,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c5/Eberechi_Eze_England_v_Ghana_23_June_2026-039.jpg/330px-Eberechi_Eze_England_v_Ghana_23_June_2026-039.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_eng_22",
    "name": "Ivan Toney",
    "position": "FW",
    "rating": 81,
    "club": "Al Ahli FC (KSA)",
    "nationality": "England",
    "basePrice": 26,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Ivan_Toney_England_v_Ghana_23_June_2026-051.jpg/330px-Ivan_Toney_England_v_Ghana_23_June_2026-051.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_eng_23",
    "name": "James Trafford",
    "position": "GK",
    "rating": 76,
    "club": "Manchester City FC (ENG)",
    "nationality": "England",
    "basePrice": 15,
    "photo": "/api/player-image?name=James%20Trafford&nat=England&club=Manchester%20City%20FC%20(ENG)&pos=GK"
  },
  {
    "id": "wc_eng_24",
    "name": "Reece James",
    "position": "DF",
    "rating": 81,
    "club": "Chelsea FC (ENG)",
    "nationality": "England",
    "basePrice": 32,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Reece_James_England_v_Ghana_23_June_2026-248_%28cropped%29.jpg/330px-Reece_James_England_v_Ghana_23_June_2026-248_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_eng_25",
    "name": "Djed Spence",
    "position": "DF",
    "rating": 78,
    "club": "Tottenham Hotspur FC (ENG)",
    "nationality": "England",
    "basePrice": 19,
    "photo": "/api/player-image?name=Djed%20Spence&nat=England&club=Tottenham%20Hotspur%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_eng_26",
    "name": "Jarell Quansah",
    "position": "DF",
    "rating": 75,
    "club": "Bayer 04 Leverkusen (GER)",
    "nationality": "England",
    "basePrice": 12,
    "photo": "/api/player-image?name=Jarell%20Quansah&nat=England&club=Bayer%2004%20Leverkusen%20(GER)&pos=DF"
  },
  {
    "id": "wc_fra_1",
    "name": "Brice Samba",
    "position": "GK",
    "rating": 80,
    "club": "Stade Rennais FC (FRA)",
    "nationality": "France",
    "basePrice": 11,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Brice_Samba_France_v_Senegal_16_June_2026-280_%28cropped%29.jpg/330px-Brice_Samba_France_v_Senegal_16_June_2026-280_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_fra_2",
    "name": "Malo Gusto",
    "position": "DF",
    "rating": 79,
    "club": "Chelsea FC (ENG)",
    "nationality": "France",
    "basePrice": 25,
    "photo": "/api/player-image?name=Malo%20Gusto&nat=France&club=Chelsea%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_fra_3",
    "name": "Lucas Digne",
    "position": "DF",
    "rating": 80,
    "club": "Aston Villa FC (ENG)",
    "nationality": "France",
    "basePrice": 16,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Lucas_Digne_France_v_Norway_26_June_26-043.jpg/330px-Lucas_Digne_France_v_Norway_26_June_26-043.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_fra_4",
    "name": "Dayot Upamecano",
    "position": "DF",
    "rating": 85,
    "club": "FC Bayern München (GER)",
    "nationality": "France",
    "basePrice": 63,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/Dayot_Upamecano_France_v_Senegal_16_June_2026-402_%28cropped%29.jpg/330px-Dayot_Upamecano_France_v_Senegal_16_June_2026-402_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_fra_5",
    "name": "Jules Kounde",
    "position": "DF",
    "rating": 87,
    "club": "FC Barcelona (ESP)",
    "nationality": "France",
    "basePrice": 86,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Jules_Kounde_France_v_Senegal_16_June_2026-449_%28cropped%29.jpg/330px-Jules_Kounde_France_v_Senegal_16_June_2026-449_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_fra_6",
    "name": "Manu Kone",
    "position": "MF",
    "rating": 79,
    "club": "AS Roma (ITA)",
    "nationality": "France",
    "basePrice": 27,
    "photo": "/api/player-image?name=Manu%20Kone&nat=France&club=AS%20Roma%20(ITA)&pos=MF"
  },
  {
    "id": "wc_fra_7",
    "name": "Ousmane Dembele",
    "position": "FW",
    "rating": 90,
    "club": "Paris Saint-Germain (FRA)",
    "nationality": "France",
    "basePrice": 123,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Ousmane_Dembele_France_v_Senegal_16_June_2026-341_%28cropped%29_2.jpg/330px-Ousmane_Dembele_France_v_Senegal_16_June_2026-341_%28cropped%29_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_fra_8",
    "name": "Aurelien Tchouameni",
    "position": "MF",
    "rating": 84,
    "club": "Real Madrid C. F. (ESP)",
    "nationality": "France",
    "basePrice": 51,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Aurelien_Tchouameni_France_v_Senegal_16_June_2026-447_%28cropped%29.jpg/330px-Aurelien_Tchouameni_France_v_Senegal_16_June_2026-447_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_fra_9",
    "name": "Marcus Thuram",
    "position": "FW",
    "rating": 85,
    "club": "FC Internazionale Milano (ITA)",
    "nationality": "France",
    "basePrice": 59,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Marcus_Thuram_France_v_Senegal_16_June_2026-261_%28cropped%29.jpg/330px-Marcus_Thuram_France_v_Senegal_16_June_2026-261_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_fra_10",
    "name": "Kylian Mbappe",
    "position": "FW",
    "rating": 91,
    "club": "Real Madrid C. F. (ESP)",
    "nationality": "France",
    "basePrice": 174,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Kylian_Mbappe_France_v_Senegal_16_June_2026-391_%28cropped%29.jpg/330px-Kylian_Mbappe_France_v_Senegal_16_June_2026-391_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_fra_11",
    "name": "Michael Olise",
    "position": "FW",
    "rating": 86,
    "club": "FC Bayern München (GER)",
    "nationality": "France",
    "basePrice": 88,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Michael_Olise_France_v_Senegal_16_June_2026-307_%28cropped%29.jpg/330px-Michael_Olise_France_v_Senegal_16_June_2026-307_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_fra_12",
    "name": "Bradley Barcola",
    "position": "FW",
    "rating": 84,
    "club": "Paris Saint-Germain (FRA)",
    "nationality": "France",
    "basePrice": 62,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg/330px-Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_fra_13",
    "name": "Ngolo Kante",
    "position": "MF",
    "rating": 85,
    "club": "Fenerbahçe SK (TUR)",
    "nationality": "France",
    "basePrice": 19,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/N%27Golo_Kante_France_v_Senegal_16_June_2026-397.jpg/330px-N%27Golo_Kante_France_v_Senegal_16_June_2026-397.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_fra_14",
    "name": "Adrien Rabiot",
    "position": "MF",
    "rating": 83,
    "club": "AC Milan (ITA)",
    "nationality": "France",
    "basePrice": 35,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Adrien_Rabiot_France_v_Senegal_16_June_2026-253.jpg/330px-Adrien_Rabiot_France_v_Senegal_16_June_2026-253.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_fra_15",
    "name": "Ibrahima Konate",
    "position": "DF",
    "rating": 86,
    "club": "Liverpool FC (ENG)",
    "nationality": "France",
    "basePrice": 70,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Ibrahima_Konate_France_v_Senegal_16_June_2026-516_%28cropped%29.jpg/330px-Ibrahima_Konate_France_v_Senegal_16_June_2026-516_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_fra_16",
    "name": "Mike Maignan",
    "position": "GK",
    "rating": 87,
    "club": "AC Milan (ITA)",
    "nationality": "France",
    "basePrice": 61,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Mike_Maignan_France_v_Norway_26_June_26-132_%28cropped%29.jpg/330px-Mike_Maignan_France_v_Norway_26_June_26-132_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_fra_17",
    "name": "William Saliba",
    "position": "DF",
    "rating": 87,
    "club": "Arsenal FC (ENG)",
    "nationality": "France",
    "basePrice": 92,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/William_Saliba_France_v_Senegal_16_June_2026-336_%28cropped%29.jpg/330px-William_Saliba_France_v_Senegal_16_June_2026-336_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_fra_18",
    "name": "Warren Zaire-Emery",
    "position": "MF",
    "rating": 80,
    "club": "Paris Saint-Germain (FRA)",
    "nationality": "France",
    "basePrice": 41,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Warren_Zaire-Emery_France_v_Senegal_16_June_2026-279.jpg/330px-Warren_Zaire-Emery_France_v_Senegal_16_June_2026-279.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_fra_19",
    "name": "Theo Hernandez",
    "position": "DF",
    "rating": 84,
    "club": "Al Hilal SC (KSA)",
    "nationality": "France",
    "basePrice": 45,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Theo_Hernandez_France_v_Senegal_16_June_2026-222_%28cropped%29.jpg/330px-Theo_Hernandez_France_v_Senegal_16_June_2026-222_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_fra_20",
    "name": "Desire Doue",
    "position": "FW",
    "rating": 85,
    "club": "Paris Saint-Germain (FRA)",
    "nationality": "France",
    "basePrice": 84,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Desire_Doue_France_v_Senegal_16_June_2026-264.jpg/330px-Desire_Doue_France_v_Senegal_16_June_2026-264.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_fra_21",
    "name": "Lucas Hernandez",
    "position": "DF",
    "rating": 81,
    "club": "Paris Saint-Germain (FRA)",
    "nationality": "France",
    "basePrice": 22,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Lucas_Hernandez_France_v_Senegal_16_June_2026-281.jpg/330px-Lucas_Hernandez_France_v_Senegal_16_June_2026-281.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_fra_22",
    "name": "Jean-Philippe Mateta",
    "position": "FW",
    "rating": 82,
    "club": "Crystal Palace FC (ENG)",
    "nationality": "France",
    "basePrice": 31,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Jean-Philippe_Mateta_France_v_Senegal_16_June_2026-408_%28cropped%29.jpg/330px-Jean-Philippe_Mateta_France_v_Senegal_16_June_2026-408_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_fra_23",
    "name": "Robin Risser",
    "position": "GK",
    "rating": 72,
    "club": "RC Lens (FRA)",
    "nationality": "France",
    "basePrice": 4,
    "photo": "/api/player-image?name=Robin%20Risser&nat=France&club=RC%20Lens%20(FRA)&pos=GK"
  },
  {
    "id": "wc_fra_24",
    "name": "Rayan Cherki",
    "position": "MF",
    "rating": 81,
    "club": "Manchester City FC (ENG)",
    "nationality": "France",
    "basePrice": 53,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/97/Rayan_Cherki_France_v_Norway_26_June_26-114.jpg/330px-Rayan_Cherki_France_v_Norway_26_June_26-114.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_fra_25",
    "name": "Maghnes Akliouche",
    "position": "MF",
    "rating": 80,
    "club": "AS Monaco (FRA)",
    "nationality": "France",
    "basePrice": 34,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Maghnes_Akliouche_France_v_Senegal_16_June_2026-512.jpg/330px-Maghnes_Akliouche_France_v_Senegal_16_June_2026-512.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_fra_26",
    "name": "Maxence Lacroix",
    "position": "DF",
    "rating": 79,
    "club": "Crystal Palace FC (ENG)",
    "nationality": "France",
    "basePrice": 21,
    "photo": "/api/player-image?name=Maxence%20Lacroix&nat=France&club=Crystal%20Palace%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_ger_1",
    "name": "Manuel Neuer",
    "position": "GK",
    "rating": 84,
    "club": "FC Bayern München (GER)",
    "nationality": "Germany",
    "basePrice": 5,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Manuel_Neuer_Ecuador_v_Germany_25_June_2026-148.jpg/330px-Manuel_Neuer_Ecuador_v_Germany_25_June_2026-148.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_ger_2",
    "name": "Antonio Ruediger",
    "position": "DF",
    "rating": 86,
    "club": "Real Madrid C. F. (ESP)",
    "nationality": "Germany",
    "basePrice": 44,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Antonio_Rudiger_Ecuador_v_Germany_25_June_2026-055_%28cropped%29.jpg/330px-Antonio_Rudiger_Ecuador_v_Germany_25_June_2026-055_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_ger_3",
    "name": "Waldemar Anton",
    "position": "DF",
    "rating": 82,
    "club": "Borussia Dortmund (GER)",
    "nationality": "Germany",
    "basePrice": 27,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Waldemar_Anton_Ecuador_v_Germany_25_June_2026-062.jpg/330px-Waldemar_Anton_Ecuador_v_Germany_25_June_2026-062.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_ger_4",
    "name": "Jonathan Tah",
    "position": "DF",
    "rating": 87,
    "club": "FC Bayern München (GER)",
    "nationality": "Germany",
    "basePrice": 67,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Jonathan_Tah_Ecuador_v_Germany_25_June_2026-116.jpg/330px-Jonathan_Tah_Ecuador_v_Germany_25_June_2026-116.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_ger_5",
    "name": "Aleksandar Pavlovic",
    "position": "MF",
    "rating": 79,
    "club": "FC Bayern München (GER)",
    "nationality": "Germany",
    "basePrice": 37,
    "photo": "/api/player-image?name=Aleksandar%20Pavlovic&nat=Germany&club=FC%20Bayern%20M%C3%BCnchen%20(GER)&pos=MF"
  },
  {
    "id": "wc_ger_6",
    "name": "Joshua Kimmich",
    "position": "DF",
    "rating": 89,
    "club": "FC Bayern München (GER)",
    "nationality": "Germany",
    "basePrice": 86,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Joshua_Kimmich_Ecuador_v_Germany_25_June_2026-149.jpg/330px-Joshua_Kimmich_Ecuador_v_Germany_25_June_2026-149.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_ger_7",
    "name": "Kai Havertz",
    "position": "FW",
    "rating": 82,
    "club": "Arsenal FC (ENG)",
    "nationality": "Germany",
    "basePrice": 38,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Kai_Havertz_Ecuador_v_Germany_25_June_2026-118.jpg/330px-Kai_Havertz_Ecuador_v_Germany_25_June_2026-118.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_ger_8",
    "name": "Leon Goretzka",
    "position": "MF",
    "rating": 82,
    "club": "FC Bayern München (GER)",
    "nationality": "Germany",
    "basePrice": 29,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Leon_Goretzka_Ecuador_v_Germany_25_June_2026-159.jpg/330px-Leon_Goretzka_Ecuador_v_Germany_25_June_2026-159.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_ger_9",
    "name": "Jamie Leweling",
    "position": "MF",
    "rating": 75,
    "club": "VfB Stuttgart (GER)",
    "nationality": "Germany",
    "basePrice": 9,
    "photo": "/api/player-image?name=Jamie%20Leweling&nat=Germany&club=VfB%20Stuttgart%20(GER)&pos=MF"
  },
  {
    "id": "wc_ger_10",
    "name": "Jamal Musiala",
    "position": "MF",
    "rating": 88,
    "club": "FC Bayern München (GER)",
    "nationality": "Germany",
    "basePrice": 134,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Jamal_Musiala_Ecuador_v_Germany_25_June_2026-174_%28cropped%29.jpg/330px-Jamal_Musiala_Ecuador_v_Germany_25_June_2026-174_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_ger_11",
    "name": "Nick Woltemade",
    "position": "FW",
    "rating": 79,
    "club": "Newcastle United FC (ENG)",
    "nationality": "Germany",
    "basePrice": 27,
    "photo": "/api/player-image?name=Nick%20Woltemade&nat=Germany&club=Newcastle%20United%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_ger_12",
    "name": "Oliver Baumann",
    "position": "GK",
    "rating": 83,
    "club": "TSG Hoffenheim (GER)",
    "nationality": "Germany",
    "basePrice": 4,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Oliver_Baumann_Ecuador_v_Germany_25_June_2026-066.jpg/330px-Oliver_Baumann_Ecuador_v_Germany_25_June_2026-066.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_ger_13",
    "name": "Pascal Gross",
    "position": "MF",
    "rating": 80,
    "club": "Brighton & Hove Albion FC (ENG)",
    "nationality": "Germany",
    "basePrice": 7,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Pascal_Gross_Ecuador_v_Germany_25_June_2026-065.jpg/330px-Pascal_Gross_Ecuador_v_Germany_25_June_2026-065.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_ger_14",
    "name": "Maximilian Beier",
    "position": "FW",
    "rating": 79,
    "club": "Borussia Dortmund (GER)",
    "nationality": "Germany",
    "basePrice": 28,
    "photo": "/api/player-image?name=Maximilian%20Beier&nat=Germany&club=Borussia%20Dortmund%20(GER)&pos=FW"
  },
  {
    "id": "wc_ger_15",
    "name": "Nico Schlotterbeck",
    "position": "DF",
    "rating": 85,
    "club": "Borussia Dortmund (GER)",
    "nationality": "Germany",
    "basePrice": 64,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/2023-08-12_TSV_Schott_Mainz_gegen_Borussia_Dortmund_%28DFB-Pokal_2023-24%29_by_Sandro_Halank%E2%80%93069.jpg/330px-2023-08-12_TSV_Schott_Mainz_gegen_Borussia_Dortmund_%28DFB-Pokal_2023-24%29_by_Sandro_Halank%E2%80%93069.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_ger_16",
    "name": "Angelo Stiller",
    "position": "MF",
    "rating": 83,
    "club": "VfB Stuttgart (GER)",
    "nationality": "Germany",
    "basePrice": 48,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Angelo_Stiller_Ecuador_v_Germany_25_June_2026-233_%28cropped%29.jpg/330px-Angelo_Stiller_Ecuador_v_Germany_25_June_2026-233_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_ger_17",
    "name": "Florian Wirtz",
    "position": "MF",
    "rating": 89,
    "club": "Liverpool FC (ENG)",
    "nationality": "Germany",
    "basePrice": 151,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Florian_Wirtz_Ecuador_v_Germany_25_June_2026-181_%28cropped%29.jpg/330px-Florian_Wirtz_Ecuador_v_Germany_25_June_2026-181_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_ger_18",
    "name": "Nathaniel Brown",
    "position": "DF",
    "rating": 77,
    "club": "Eintracht Frankfurt (GER)",
    "nationality": "Germany",
    "basePrice": 23,
    "photo": "/api/player-image?name=Nathaniel%20Brown&nat=Germany&club=Eintracht%20Frankfurt%20(GER)&pos=DF"
  },
  {
    "id": "wc_ger_19",
    "name": "Leroy Sane",
    "position": "MF",
    "rating": 82,
    "club": "Galatasaray SK (TUR)",
    "nationality": "Germany",
    "basePrice": 30,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Leroy_Sane_Ecuador_v_Germany_25_June_2026-119_%28cropped%29.jpg/330px-Leroy_Sane_Ecuador_v_Germany_25_June_2026-119_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_ger_20",
    "name": "Nadiem Amiri",
    "position": "MF",
    "rating": 81,
    "club": "1. FSV Mainz 05 (GER)",
    "nationality": "Germany",
    "basePrice": 26,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Nadiem_Amiri_Ecuador_v_Germany_25_June_2026-158.jpg/330px-Nadiem_Amiri_Ecuador_v_Germany_25_June_2026-158.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_ger_21",
    "name": "Alexander Nuebel",
    "position": "GK",
    "rating": 81,
    "club": "VfB Stuttgart (GER)",
    "nationality": "Germany",
    "basePrice": 21,
    "photo": "/api/player-image?name=Alexander%20Nuebel&nat=Germany&club=VfB%20Stuttgart%20(GER)&pos=GK"
  },
  {
    "id": "wc_ger_22",
    "name": "David Raum",
    "position": "DF",
    "rating": 82,
    "club": "RB Leipzig (GER)",
    "nationality": "Germany",
    "basePrice": 32,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/David_Raum_Ecuador_v_Germany_25_June_2026-117.jpg/330px-David_Raum_Ecuador_v_Germany_25_June_2026-117.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_ger_23",
    "name": "Felix Nmecha",
    "position": "MF",
    "rating": 82,
    "club": "Borussia Dortmund (GER)",
    "nationality": "Germany",
    "basePrice": 40,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/Felix_Nmecha_Ecuador_v_Germany_25_June_2026-150.jpg/330px-Felix_Nmecha_Ecuador_v_Germany_25_June_2026-150.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_ger_24",
    "name": "Malick Thiaw",
    "position": "DF",
    "rating": 78,
    "club": "Newcastle United FC (ENG)",
    "nationality": "Germany",
    "basePrice": 20,
    "photo": "/api/player-image?name=Malick%20Thiaw&nat=Germany&club=Newcastle%20United%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_ger_25",
    "name": "Assan Ouedraogo",
    "position": "MF",
    "rating": 69,
    "club": "RB Leipzig (GER)",
    "nationality": "Germany",
    "basePrice": 4,
    "photo": "/api/player-image?name=Assan%20Ouedraogo&nat=Germany&club=RB%20Leipzig%20(GER)&pos=MF"
  },
  {
    "id": "wc_ger_26",
    "name": "Deniz Undav",
    "position": "FW",
    "rating": 80,
    "club": "VfB Stuttgart (GER)",
    "nationality": "Germany",
    "basePrice": 22,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Deniz_Undav_Ecuador_v_Germany_25_June_2026-203_%28cropped%29.jpg/330px-Deniz_Undav_Ecuador_v_Germany_25_June_2026-203_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_gha_1",
    "name": "Ati Zigi Lawrence",
    "position": "GK",
    "rating": 73,
    "club": "FC St. Gallen (SUI)",
    "nationality": "Ghana",
    "basePrice": 3,
    "photo": "/api/player-image?name=Ati%20Zigi%20Lawrence&nat=Ghana&club=FC%20St.%20Gallen%20(SUI)&pos=GK"
  },
  {
    "id": "wc_gha_2",
    "name": "Alidu Seidu",
    "position": "DF",
    "rating": 74,
    "club": "Stade Rennais FC (FRA)",
    "nationality": "Ghana",
    "basePrice": 6,
    "photo": "/api/player-image?name=Alidu%20Seidu&nat=Ghana&club=Stade%20Rennais%20FC%20(FRA)&pos=DF"
  },
  {
    "id": "wc_gha_3",
    "name": "Caleb Yirenkyi",
    "position": "MF",
    "rating": 67,
    "club": "FC Nordsjælland (DEN)",
    "nationality": "Ghana",
    "basePrice": 2,
    "photo": "/api/player-image?name=Caleb%20Yirenkyi&nat=Ghana&club=FC%20Nordsj%C3%A6lland%20(DEN)&pos=MF"
  },
  {
    "id": "wc_gha_4",
    "name": "Jonas Adjetey",
    "position": "DF",
    "rating": 70,
    "club": "VfL Wolfsburg (GER)",
    "nationality": "Ghana",
    "basePrice": 4,
    "photo": "/api/player-image?name=Jonas%20Adjetey&nat=Ghana&club=VfL%20Wolfsburg%20(GER)&pos=DF"
  },
  {
    "id": "wc_gha_5",
    "name": "Thomas Partey",
    "position": "MF",
    "rating": 83,
    "club": "Villarreal CF (ESP)",
    "nationality": "Ghana",
    "basePrice": 24,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Thomas_Partey_5_England_v_Ghana_at_2026_Fifa_World_Cup_by_YantsImages_02_%28cropped%29.jpg/330px-Thomas_Partey_5_England_v_Ghana_at_2026_Fifa_World_Cup_by_YantsImages_02_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_gha_6",
    "name": "Abdul Mumin",
    "position": "DF",
    "rating": 77,
    "club": "Rayo Vallecano (ESP)",
    "nationality": "Ghana",
    "basePrice": 12,
    "photo": "/api/player-image?name=Abdul%20Mumin&nat=Ghana&club=Rayo%20Vallecano%20(ESP)&pos=DF"
  },
  {
    "id": "wc_gha_7",
    "name": "Abdul Fatawu",
    "position": "FW",
    "rating": 76,
    "club": "Leicester City FC (ENG)",
    "nationality": "Ghana",
    "basePrice": 15,
    "photo": "/api/player-image?name=Abdul%20Fatawu&nat=Ghana&club=Leicester%20City%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_gha_8",
    "name": "Kwasi Sibo",
    "position": "MF",
    "rating": 69,
    "club": "Real Oviedo (ESP)",
    "nationality": "Ghana",
    "basePrice": 2,
    "photo": "/api/player-image?name=Kwasi%20Sibo&nat=Ghana&club=Real%20Oviedo%20(ESP)&pos=MF"
  },
  {
    "id": "wc_gha_9",
    "name": "Jordan Ayew",
    "position": "FW",
    "rating": 73,
    "club": "Leicester City FC (ENG)",
    "nationality": "Ghana",
    "basePrice": 2,
    "photo": "/api/player-image?name=Jordan%20Ayew&nat=Ghana&club=Leicester%20City%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_gha_10",
    "name": "Brandon Thomas-Asante",
    "position": "FW",
    "rating": 69,
    "club": "Coventry City FC (ENG)",
    "nationality": "Ghana",
    "basePrice": 2,
    "photo": "/api/player-image?name=Brandon%20Thomas-Asante&nat=Ghana&club=Coventry%20City%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_gha_11",
    "name": "Antoine Semenyo",
    "position": "MF",
    "rating": 80,
    "club": "Manchester City FC (ENG)",
    "nationality": "Ghana",
    "basePrice": 27,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Antoine_Semenyo_England_v_Ghana_23_June_2026-209_%28cropped2%29.jpg/330px-Antoine_Semenyo_England_v_Ghana_23_June_2026-209_%28cropped2%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_gha_12",
    "name": "Joseph Anang",
    "position": "GK",
    "rating": 67,
    "club": "St Patrick's Athletic FC (IRL)",
    "nationality": "Ghana",
    "basePrice": 1,
    "photo": "/api/player-image?name=Joseph%20Anang&nat=Ghana&club=St%20Patrick's%20Athletic%20FC%20(IRL)&pos=GK"
  },
  {
    "id": "wc_gha_13",
    "name": "Christopher Bonsu Baah",
    "position": "FW",
    "rating": 73,
    "club": "Al Qadsiah FC (KSA)",
    "nationality": "Ghana",
    "basePrice": 7,
    "photo": "/api/player-image?name=Christopher%20Bonsu%20Baah&nat=Ghana&club=Al%20Qadsiah%20FC%20(KSA)&pos=FW"
  },
  {
    "id": "wc_gha_14",
    "name": "Gideon Mensah",
    "position": "DF",
    "rating": 74,
    "club": "AJ Auxerre (FRA)",
    "nationality": "Ghana",
    "basePrice": 5,
    "photo": "/api/player-image?name=Gideon%20Mensah&nat=Ghana&club=AJ%20Auxerre%20(FRA)&pos=DF"
  },
  {
    "id": "wc_gha_15",
    "name": "Elisha Owusu",
    "position": "MF",
    "rating": 73,
    "club": "AJ Auxerre (FRA)",
    "nationality": "Ghana",
    "basePrice": 4,
    "photo": "/api/player-image?name=Elisha%20Owusu&nat=Ghana&club=AJ%20Auxerre%20(FRA)&pos=MF"
  },
  {
    "id": "wc_gha_16",
    "name": "Benjamin Asare",
    "position": "GK",
    "rating": 70,
    "club": "Hearts Of Oak SC (GHA)",
    "nationality": "Ghana",
    "basePrice": 5,
    "photo": "/api/player-image?name=Benjamin%20Asare&nat=Ghana&club=Hearts%20Of%20Oak%20SC%20(GHA)&pos=GK"
  },
  {
    "id": "wc_gha_17",
    "name": "Baba Rahman",
    "position": "DF",
    "rating": 76,
    "club": "PAOK Saloniki (GRE)",
    "nationality": "Ghana",
    "basePrice": 7,
    "photo": "/api/player-image?name=Baba%20Rahman&nat=Ghana&club=PAOK%20Saloniki%20(GRE)&pos=DF"
  },
  {
    "id": "wc_gha_18",
    "name": "Jerome Opoku",
    "position": "DF",
    "rating": 72,
    "club": "Banaknehir FK (TUR)",
    "nationality": "Ghana",
    "basePrice": 3,
    "photo": "/api/player-image?name=Jerome%20Opoku&nat=Ghana&club=Banaknehir%20FK%20(TUR)&pos=DF"
  },
  {
    "id": "wc_gha_19",
    "name": "Inaki Williams",
    "position": "FW",
    "rating": 83,
    "club": "Athletic Club (ESP)",
    "nationality": "Ghana",
    "basePrice": 30,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Inaki_Williams_England_v_Ghana_23_June_2026-154.jpg/330px-Inaki_Williams_England_v_Ghana_23_June_2026-154.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_gha_20",
    "name": "Augustine Boakye",
    "position": "MF",
    "rating": 69,
    "club": "AS Saint-Etienne (FRA)",
    "nationality": "Ghana",
    "basePrice": 2,
    "photo": "/api/player-image?name=Augustine%20Boakye&nat=Ghana&club=AS%20Saint-Etienne%20(FRA)&pos=MF"
  },
  {
    "id": "wc_gha_21",
    "name": "Peprah Oppong Kojo",
    "position": "DF",
    "rating": 68,
    "club": "OGC Nice (FRA)",
    "nationality": "Ghana",
    "basePrice": 3,
    "photo": "/api/player-image?name=Peprah%20Oppong%20Kojo&nat=Ghana&club=OGC%20Nice%20(FRA)&pos=DF"
  },
  {
    "id": "wc_gha_22",
    "name": "Kamaldeen Sulemana",
    "position": "FW",
    "rating": 71,
    "club": "Atalanta Bergamo (ITA)",
    "nationality": "Ghana",
    "basePrice": 3,
    "photo": "/api/player-image?name=Kamaldeen%20Sulemana&nat=Ghana&club=Atalanta%20Bergamo%20(ITA)&pos=FW"
  },
  {
    "id": "wc_gha_23",
    "name": "Derrick Luckassen",
    "position": "DF",
    "rating": 75,
    "club": "Pafos FC (CYP)",
    "nationality": "Ghana",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Derrick%20Luckassen&nat=Ghana&club=Pafos%20FC%20(CYP)&pos=DF"
  },
  {
    "id": "wc_gha_24",
    "name": "Ernest Nuamah",
    "position": "FW",
    "rating": 75,
    "club": "Olympique Lyonnais (FRA)",
    "nationality": "Ghana",
    "basePrice": 12,
    "photo": "/api/player-image?name=Ernest%20Nuamah&nat=Ghana&club=Olympique%20Lyonnais%20(FRA)&pos=FW"
  },
  {
    "id": "wc_gha_25",
    "name": "Prince Adu",
    "position": "FW",
    "rating": 70,
    "club": "FC Viktoria Plzen (CZE)",
    "nationality": "Ghana",
    "basePrice": 3,
    "photo": "/api/player-image?name=Prince%20Adu&nat=Ghana&club=FC%20Viktoria%20Plzen%20(CZE)&pos=FW"
  },
  {
    "id": "wc_gha_26",
    "name": "Marvin Senaya",
    "position": "DF",
    "rating": 69,
    "club": "AJ Auxerre (FRA)",
    "nationality": "Ghana",
    "basePrice": 2,
    "photo": "/api/player-image?name=Marvin%20Senaya&nat=Ghana&club=AJ%20Auxerre%20(FRA)&pos=DF"
  },
  {
    "id": "wc_ir_1",
    "name": "Alireza Beiranvand",
    "position": "GK",
    "rating": 75,
    "club": "Tractor Sazi Tabriz FC (IRN)",
    "nationality": "IR Iran",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Alireza%20Beiranvand&nat=IR%20Iran&club=Tractor%20Sazi%20Tabriz%20FC%20(IRN)&pos=GK"
  },
  {
    "id": "wc_ir_2",
    "name": "Saleh Hardani",
    "position": "DF",
    "rating": 75,
    "club": "Esteghlal Tehran FC (IRN)",
    "nationality": "IR Iran",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Saleh%20Hardani&nat=IR%20Iran&club=Esteghlal%20Tehran%20FC%20(IRN)&pos=DF"
  },
  {
    "id": "wc_ir_3",
    "name": "Ehsan Hajisafi",
    "position": "DF",
    "rating": 70,
    "club": "Sepahan SC (IRN)",
    "nationality": "IR Iran",
    "basePrice": 5,
    "photo": "/api/player-image?name=Ehsan%20Hajisafi&nat=IR%20Iran&club=Sepahan%20SC%20(IRN)&pos=DF"
  },
  {
    "id": "wc_ir_4",
    "name": "Shoja Khalilzadeh",
    "position": "DF",
    "rating": 75,
    "club": "Tractor Sazi Tabriz FC (IRN)",
    "nationality": "IR Iran",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Shoja%20Khalilzadeh&nat=IR%20Iran&club=Tractor%20Sazi%20Tabriz%20FC%20(IRN)&pos=DF"
  },
  {
    "id": "wc_ir_5",
    "name": "Milad Mohammadi",
    "position": "DF",
    "rating": 75,
    "club": "Persepolis FC (IRN)",
    "nationality": "IR Iran",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Milad%20Mohammadi&nat=IR%20Iran&club=Persepolis%20FC%20(IRN)&pos=DF"
  },
  {
    "id": "wc_ir_6",
    "name": "Saeid Ezatolahi",
    "position": "MF",
    "rating": 70,
    "club": "Shabab Al Ahli Club (UAE)",
    "nationality": "IR Iran",
    "basePrice": 5,
    "photo": "/api/player-image?name=Saeid%20Ezatolahi&nat=IR%20Iran&club=Shabab%20Al%20Ahli%20Club%20(UAE)&pos=MF"
  },
  {
    "id": "wc_ir_7",
    "name": "Alireza Jahanbakhsh",
    "position": "MF",
    "rating": 75,
    "club": "FCV Dender EH (BEL)",
    "nationality": "IR Iran",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Alireza%20Jahanbakhsh&nat=IR%20Iran&club=FCV%20Dender%20EH%20(BEL)&pos=MF"
  },
  {
    "id": "wc_ir_8",
    "name": "Mohammad Mohebbi",
    "position": "MF",
    "rating": 75,
    "club": "FC Rostov (RUS)",
    "nationality": "IR Iran",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Mohammad%20Mohebbi&nat=IR%20Iran&club=FC%20Rostov%20(RUS)&pos=MF"
  },
  {
    "id": "wc_ir_9",
    "name": "Mehdi Taremi",
    "position": "FW",
    "rating": 78,
    "club": "Olympiacos FC (GRE)",
    "nationality": "IR Iran",
    "basePrice": 12,
    "photo": "/api/player-image?name=Mehdi%20Taremi&nat=IR%20Iran&club=Olympiacos%20FC%20(GRE)&pos=FW"
  },
  {
    "id": "wc_ir_10",
    "name": "Mehdi Ghayedi",
    "position": "FW",
    "rating": 78,
    "club": "Al Nasr SC (UAE)",
    "nationality": "IR Iran",
    "basePrice": 12,
    "photo": "/api/player-image?name=Mehdi%20Ghayedi&nat=IR%20Iran&club=Al%20Nasr%20SC%20(UAE)&pos=FW"
  },
  {
    "id": "wc_ir_11",
    "name": "Ali Alipour",
    "position": "FW",
    "rating": 75,
    "club": "Persepolis FC (IRN)",
    "nationality": "IR Iran",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Ali%20Alipour&nat=IR%20Iran&club=Persepolis%20FC%20(IRN)&pos=FW"
  },
  {
    "id": "wc_ir_12",
    "name": "Payam Niazmand",
    "position": "GK",
    "rating": 75,
    "club": "Persepolis FC (IRN)",
    "nationality": "IR Iran",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Payam%20Niazmand&nat=IR%20Iran&club=Persepolis%20FC%20(IRN)&pos=GK"
  },
  {
    "id": "wc_ir_13",
    "name": "Hossein Kanani",
    "position": "DF",
    "rating": 75,
    "club": "Persepolis FC (IRN)",
    "nationality": "IR Iran",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Hossein%20Kanani&nat=IR%20Iran&club=Persepolis%20FC%20(IRN)&pos=DF"
  },
  {
    "id": "wc_ir_14",
    "name": "Saman Ghoddos",
    "position": "MF",
    "rating": 70,
    "club": "Al Ittihad Kalba SCC (UAE)",
    "nationality": "IR Iran",
    "basePrice": 5,
    "photo": "/api/player-image?name=Saman%20Ghoddos&nat=IR%20Iran&club=Al%20Ittihad%20Kalba%20SCC%20(UAE)&pos=MF"
  },
  {
    "id": "wc_ir_15",
    "name": "Roozbeh Cheshmi",
    "position": "MF",
    "rating": 75,
    "club": "Esteghlal Tehran FC (IRN)",
    "nationality": "IR Iran",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Roozbeh%20Cheshmi&nat=IR%20Iran&club=Esteghlal%20Tehran%20FC%20(IRN)&pos=MF"
  },
  {
    "id": "wc_ir_16",
    "name": "Mehdi Torabi",
    "position": "MF",
    "rating": 78,
    "club": "Tractor Sazi Tabriz FC (IRN)",
    "nationality": "IR Iran",
    "basePrice": 12,
    "photo": "/api/player-image?name=Mehdi%20Torabi&nat=IR%20Iran&club=Tractor%20Sazi%20Tabriz%20FC%20(IRN)&pos=MF"
  },
  {
    "id": "wc_ir_17",
    "name": "Arya Yousefi",
    "position": "DF",
    "rating": 70,
    "club": "Sepahan SC (IRN)",
    "nationality": "IR Iran",
    "basePrice": 5,
    "photo": "/api/player-image?name=Arya%20Yousefi&nat=IR%20Iran&club=Sepahan%20SC%20(IRN)&pos=DF"
  },
  {
    "id": "wc_ir_18",
    "name": "Amirhossein Hosseinzadeh",
    "position": "FW",
    "rating": 75,
    "club": "Tractor Sazi Tabriz FC (IRN)",
    "nationality": "IR Iran",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Amirhossein%20Hosseinzadeh&nat=IR%20Iran&club=Tractor%20Sazi%20Tabriz%20FC%20(IRN)&pos=FW"
  },
  {
    "id": "wc_ir_19",
    "name": "Ali Nemati",
    "position": "DF",
    "rating": 75,
    "club": "Foolad Khuzestan FC (IRN)",
    "nationality": "IR Iran",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Ali%20Nemati&nat=IR%20Iran&club=Foolad%20Khuzestan%20FC%20(IRN)&pos=DF"
  },
  {
    "id": "wc_ir_20",
    "name": "Shahriyar Moghanloo",
    "position": "FW",
    "rating": 70,
    "club": "Al Ittihad Kalba SCC (UAE)",
    "nationality": "IR Iran",
    "basePrice": 5,
    "photo": "/api/player-image?name=Shahriyar%20Moghanloo&nat=IR%20Iran&club=Al%20Ittihad%20Kalba%20SCC%20(UAE)&pos=FW"
  },
  {
    "id": "wc_ir_21",
    "name": "Mohammad Ghorbani",
    "position": "MF",
    "rating": 70,
    "club": "Al Wahda SC (UAE)",
    "nationality": "IR Iran",
    "basePrice": 5,
    "photo": "/api/player-image?name=Mohammad%20Ghorbani&nat=IR%20Iran&club=Al%20Wahda%20SC%20(UAE)&pos=MF"
  },
  {
    "id": "wc_ir_22",
    "name": "Hossein Hosseini",
    "position": "GK",
    "rating": 68,
    "club": "Sepahan SC (IRN)",
    "nationality": "IR Iran",
    "basePrice": 1,
    "photo": "/api/player-image?name=Hossein%20Hosseini&nat=IR%20Iran&club=Sepahan%20SC%20(IRN)&pos=GK"
  },
  {
    "id": "wc_ir_23",
    "name": "Ramin Rezaeian",
    "position": "DF",
    "rating": 75,
    "club": "Foolad Khuzestan FC (IRN)",
    "nationality": "IR Iran",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Ramin%20Rezaeian&nat=IR%20Iran&club=Foolad%20Khuzestan%20FC%20(IRN)&pos=DF"
  },
  {
    "id": "wc_ir_24",
    "name": "Dennis Dargahi",
    "position": "FW",
    "rating": 73,
    "club": "Standard Liège (BEL)",
    "nationality": "IR Iran",
    "basePrice": 3,
    "photo": "/api/player-image?name=Dennis%20Dargahi&nat=IR%20Iran&club=Standard%20Li%C3%A8ge%20(BEL)&pos=FW"
  },
  {
    "id": "wc_ir_25",
    "name": "Danial Iri",
    "position": "DF",
    "rating": 75,
    "club": "Malavan Anzali FC (IRN)",
    "nationality": "IR Iran",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Danial%20Iri&nat=IR%20Iran&club=Malavan%20Anzali%20FC%20(IRN)&pos=DF"
  },
  {
    "id": "wc_ir_26",
    "name": "Amirmohammad Razaghinia",
    "position": "MF",
    "rating": 75,
    "club": "Esteghlal Tehran FC (IRN)",
    "nationality": "IR Iran",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Amirmohammad%20Razaghinia&nat=IR%20Iran&club=Esteghlal%20Tehran%20FC%20(IRN)&pos=MF"
  },
  {
    "id": "wc_ira_1",
    "name": "Talib Fahad",
    "position": "GK",
    "rating": 70,
    "club": "Al Talaba SC (IRQ)",
    "nationality": "Iraq",
    "basePrice": 5,
    "photo": "/api/player-image?name=Talib%20Fahad&nat=Iraq&club=Al%20Talaba%20SC%20(IRQ)&pos=GK"
  },
  {
    "id": "wc_ira_2",
    "name": "Sulaka Rebin",
    "position": "DF",
    "rating": 75,
    "club": "Port FC (THA)",
    "nationality": "Iraq",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Sulaka%20Rebin&nat=Iraq&club=Port%20FC%20(THA)&pos=DF"
  },
  {
    "id": "wc_ira_3",
    "name": "Ali Hussein",
    "position": "DF",
    "rating": 61,
    "club": "Pogon Szczecin (POL)",
    "nationality": "Iraq",
    "basePrice": 1,
    "photo": "/api/player-image?name=Ali%20Hussein&nat=Iraq&club=Pogon%20Szczecin%20(POL)&pos=DF"
  },
  {
    "id": "wc_ira_4",
    "name": "Tahseen Zaid",
    "position": "DF",
    "rating": 70,
    "club": "Pakhtakor Tashkent FK (UZB)",
    "nationality": "Iraq",
    "basePrice": 5,
    "photo": "/api/player-image?name=Tahseen%20Zaid&nat=Iraq&club=Pakhtakor%20Tashkent%20FK%20(UZB)&pos=DF"
  },
  {
    "id": "wc_ira_5",
    "name": "Hashim Akam",
    "position": "DF",
    "rating": 70,
    "club": "Al Zawra'a SC (IRQ)",
    "nationality": "Iraq",
    "basePrice": 5,
    "photo": "/api/player-image?name=Hashim%20Akam&nat=Iraq&club=Al%20Zawra'a%20SC%20(IRQ)&pos=DF"
  },
  {
    "id": "wc_ira_6",
    "name": "Younus Munaf",
    "position": "DF",
    "rating": 70,
    "club": "Al Shorta SC (IRQ)",
    "nationality": "Iraq",
    "basePrice": 5,
    "photo": "/api/player-image?name=Younus%20Munaf&nat=Iraq&club=Al%20Shorta%20SC%20(IRQ)&pos=DF"
  },
  {
    "id": "wc_ira_7",
    "name": "Amyn Youssef",
    "position": "MF",
    "rating": 75,
    "club": "AEK Larnaca FC (CYP)",
    "nationality": "Iraq",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Amyn%20Youssef&nat=Iraq&club=AEK%20Larnaca%20FC%20(CYP)&pos=MF"
  },
  {
    "id": "wc_ira_8",
    "name": "Bayesh Ibrahim",
    "position": "MF",
    "rating": 68,
    "club": "Al Dhafra SCC (UAE)",
    "nationality": "Iraq",
    "basePrice": 2,
    "photo": "/api/player-image?name=Bayesh%20Ibrahim&nat=Iraq&club=Al%20Dhafra%20SCC%20(UAE)&pos=MF"
  },
  {
    "id": "wc_ira_9",
    "name": "Alhamadi Ali",
    "position": "FW",
    "rating": 66,
    "club": "Luton Town FC (ENG)",
    "nationality": "Iraq",
    "basePrice": 2,
    "photo": "/api/player-image?name=Alhamadi%20Ali&nat=Iraq&club=Luton%20Town%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_ira_10",
    "name": "Ali Mohanad",
    "position": "FW",
    "rating": 68,
    "club": "Dibba FC (UAE)",
    "nationality": "Iraq",
    "basePrice": 1,
    "photo": "/api/player-image?name=Ali%20Mohanad&nat=Iraq&club=Dibba%20FC%20(UAE)&pos=FW"
  },
  {
    "id": "wc_ira_11",
    "name": "Qasem Ahmed",
    "position": "FW",
    "rating": 66,
    "club": "Nashville SC (USA)",
    "nationality": "Iraq",
    "basePrice": 2,
    "photo": "/api/player-image?name=Qasem%20Ahmed&nat=Iraq&club=Nashville%20SC%20(USA)&pos=FW"
  },
  {
    "id": "wc_ira_12",
    "name": "Hassan Jalal",
    "position": "GK",
    "rating": 70,
    "club": "Al Zawra'a SC (IRQ)",
    "nationality": "Iraq",
    "basePrice": 5,
    "photo": "/api/player-image?name=Hassan%20Jalal&nat=Iraq&club=Al%20Zawra'a%20SC%20(IRQ)&pos=GK"
  },
  {
    "id": "wc_ira_13",
    "name": "Yousif Ali",
    "position": "FW",
    "rating": 67,
    "club": "Al Talaba SC (IRQ)",
    "nationality": "Iraq",
    "basePrice": 1,
    "photo": "/api/player-image?name=Yousif%20Ali&nat=Iraq&club=Al%20Talaba%20SC%20(IRQ)&pos=FW"
  },
  {
    "id": "wc_ira_14",
    "name": "Iqbal Zidane",
    "position": "MF",
    "rating": 68,
    "club": "FC Utrecht (NED)",
    "nationality": "Iraq",
    "basePrice": 3,
    "photo": "/api/player-image?name=Iqbal%20Zidane&nat=Iraq&club=FC%20Utrecht%20(NED)&pos=MF"
  },
  {
    "id": "wc_ira_15",
    "name": "Maknazi Ahmed",
    "position": "DF",
    "rating": 63,
    "club": "Al Karma SC (IRQ)",
    "nationality": "Iraq",
    "basePrice": 1,
    "photo": "/api/player-image?name=Maknazi%20Ahmed&nat=Iraq&club=Al%20Karma%20SC%20(IRQ)&pos=DF"
  },
  {
    "id": "wc_ira_16",
    "name": "Alammari Amir",
    "position": "MF",
    "rating": 65,
    "club": "KS Cracovia (POL)",
    "nationality": "Iraq",
    "basePrice": 1,
    "photo": "/api/player-image?name=Alammari%20Amir&nat=Iraq&club=KS%20Cracovia%20(POL)&pos=MF"
  },
  {
    "id": "wc_ira_17",
    "name": "Jasim Ali",
    "position": "FW",
    "rating": 62,
    "club": "Al Najmah SC (KSA)",
    "nationality": "Iraq",
    "basePrice": 1,
    "photo": "/api/player-image?name=Jasim%20Ali&nat=Iraq&club=Al%20Najmah%20SC%20(KSA)&pos=FW"
  },
  {
    "id": "wc_ira_18",
    "name": "Hussein Aymen",
    "position": "FW",
    "rating": 61,
    "club": "Al Karma SC (IRQ)",
    "nationality": "Iraq",
    "basePrice": 1,
    "photo": "/api/player-image?name=Hussein%20Aymen&nat=Iraq&club=Al%20Karma%20SC%20(IRQ)&pos=FW"
  },
  {
    "id": "wc_ira_19",
    "name": "Yakob Kevin",
    "position": "MF",
    "rating": 66,
    "club": "Aarhus GF (DEN)",
    "nationality": "Iraq",
    "basePrice": 1,
    "photo": "/api/player-image?name=Yakob%20Kevin&nat=Iraq&club=Aarhus%20GF%20(DEN)&pos=MF"
  },
  {
    "id": "wc_ira_20",
    "name": "Sher Aimar",
    "position": "MF",
    "rating": 67,
    "club": "Sarpsborg 08 FF (NOR)",
    "nationality": "Iraq",
    "basePrice": 2,
    "photo": "/api/player-image?name=Sher%20Aimar&nat=Iraq&club=Sarpsborg%2008%20FF%20(NOR)&pos=MF"
  },
  {
    "id": "wc_ira_21",
    "name": "Farji Marko",
    "position": "FW",
    "rating": 66,
    "club": "Venezia FC (ITA)",
    "nationality": "Iraq",
    "basePrice": 2,
    "photo": "/api/player-image?name=Farji%20Marko&nat=Iraq&club=Venezia%20FC%20(ITA)&pos=FW"
  },
  {
    "id": "wc_ira_22",
    "name": "Basil Ahmed",
    "position": "GK",
    "rating": 70,
    "club": "Al Shorta SC (IRQ)",
    "nationality": "Iraq",
    "basePrice": 5,
    "photo": "/api/player-image?name=Basil%20Ahmed&nat=Iraq&club=Al%20Shorta%20SC%20(IRQ)&pos=GK"
  },
  {
    "id": "wc_ira_23",
    "name": "Doski Merchas",
    "position": "DF",
    "rating": 68,
    "club": "FC Viktoria Plzen (CZE)",
    "nationality": "Iraq",
    "basePrice": 2,
    "photo": "/api/player-image?name=Doski%20Merchas&nat=Iraq&club=FC%20Viktoria%20Plzen%20(CZE)&pos=DF"
  },
  {
    "id": "wc_ira_24",
    "name": "Ismael Zaid",
    "position": "MF",
    "rating": 70,
    "club": "Al Talaba SC (IRQ)",
    "nationality": "Iraq",
    "basePrice": 5,
    "photo": "/api/player-image?name=Ismael%20Zaid&nat=Iraq&club=Al%20Talaba%20SC%20(IRQ)&pos=MF"
  },
  {
    "id": "wc_ira_25",
    "name": "Saadoon Mustafa",
    "position": "DF",
    "rating": 70,
    "club": "Al Shorta SC (IRQ)",
    "nationality": "Iraq",
    "basePrice": 5,
    "photo": "/api/player-image?name=Saadoon%20Mustafa&nat=Iraq&club=Al%20Shorta%20SC%20(IRQ)&pos=DF"
  },
  {
    "id": "wc_ira_26",
    "name": "Putros Frans",
    "position": "DF",
    "rating": 70,
    "club": "Persib Bandung (IDN)",
    "nationality": "Iraq",
    "basePrice": 5,
    "photo": "/api/player-image?name=Putros%20Frans&nat=Iraq&club=Persib%20Bandung%20(IDN)&pos=DF"
  },
  {
    "id": "wc_jap_1",
    "name": "Zion Suzuki",
    "position": "GK",
    "rating": 74,
    "club": "Parma (ITA)",
    "nationality": "Japan",
    "basePrice": 8,
    "photo": "/api/player-image?name=Zion%20Suzuki&nat=Japan&club=Parma%20(ITA)&pos=GK"
  },
  {
    "id": "wc_jap_2",
    "name": "Yukinari Sugawara",
    "position": "DF",
    "rating": 74,
    "club": "SV Werder Bremen (GER)",
    "nationality": "Japan",
    "basePrice": 6,
    "photo": "/api/player-image?name=Yukinari%20Sugawara&nat=Japan&club=SV%20Werder%20Bremen%20(GER)&pos=DF"
  },
  {
    "id": "wc_jap_3",
    "name": "Shogo Taniguchi",
    "position": "DF",
    "rating": 69,
    "club": "Sint-Truiden VV (BEL)",
    "nationality": "Japan",
    "basePrice": 1,
    "photo": "/api/player-image?name=Shogo%20Taniguchi&nat=Japan&club=Sint-Truiden%20VV%20(BEL)&pos=DF"
  },
  {
    "id": "wc_jap_4",
    "name": "Kou Itakura",
    "position": "DF",
    "rating": 77,
    "club": "AFC Ajax (NED)",
    "nationality": "Japan",
    "basePrice": 10,
    "photo": "/api/player-image?name=Kou%20Itakura&nat=Japan&club=AFC%20Ajax%20(NED)&pos=DF"
  },
  {
    "id": "wc_jap_5",
    "name": "Yuto Nagatomo",
    "position": "DF",
    "rating": 75,
    "club": "FC Tokyo (JPN)",
    "nationality": "Japan",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Yuto%20Nagatomo&nat=Japan&club=FC%20Tokyo%20(JPN)&pos=DF"
  },
  {
    "id": "wc_jap_6",
    "name": "Shuto Machino",
    "position": "FW",
    "rating": 75,
    "club": "Borussia Mönchengladbach (GER)",
    "nationality": "Japan",
    "basePrice": 8,
    "photo": "/api/player-image?name=Shuto%20Machino&nat=Japan&club=Borussia%20M%C3%B6nchengladbach%20(GER)&pos=FW"
  },
  {
    "id": "wc_jap_7",
    "name": "Ao Tanaka",
    "position": "MF",
    "rating": 76,
    "club": "Leeds United FC (ENG)",
    "nationality": "Japan",
    "basePrice": 9,
    "photo": "/api/player-image?name=Ao%20Tanaka&nat=Japan&club=Leeds%20United%20FC%20(ENG)&pos=MF"
  },
  {
    "id": "wc_jap_8",
    "name": "Takefusa Kubo",
    "position": "MF",
    "rating": 82,
    "club": "Real Sociedad (ESP)",
    "nationality": "Japan",
    "basePrice": 44,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Takefusa_Kubo_2019.png/330px-Takefusa_Kubo_2019.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_jap_9",
    "name": "Keisuke Goto",
    "position": "FW",
    "rating": 57,
    "club": "Sint-Truiden VV (BEL)",
    "nationality": "Japan",
    "basePrice": 1,
    "photo": "/api/player-image?name=Keisuke%20Goto&nat=Japan&club=Sint-Truiden%20VV%20(BEL)&pos=FW"
  },
  {
    "id": "wc_jap_10",
    "name": "Ritsu Doan",
    "position": "MF",
    "rating": 82,
    "club": "Eintracht Frankfurt (GER)",
    "nationality": "Japan",
    "basePrice": 33,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Ritsu_Doan%2C_2019_AFC_Asian_Cup_1.jpg/330px-Ritsu_Doan%2C_2019_AFC_Asian_Cup_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_jap_11",
    "name": "Daizen Maeda",
    "position": "MF",
    "rating": 79,
    "club": "Celtic FC (SCO)",
    "nationality": "Japan",
    "basePrice": 19,
    "photo": "/api/player-image?name=Daizen%20Maeda&nat=Japan&club=Celtic%20FC%20(SCO)&pos=MF"
  },
  {
    "id": "wc_jap_12",
    "name": "Keisuke Osako",
    "position": "GK",
    "rating": 57,
    "club": "Sanfrecce Hiroshima (JPN)",
    "nationality": "Japan",
    "basePrice": 1,
    "photo": "/api/player-image?name=Keisuke%20Osako&nat=Japan&club=Sanfrecce%20Hiroshima%20(JPN)&pos=GK"
  },
  {
    "id": "wc_jap_13",
    "name": "Keito Nakamura",
    "position": "MF",
    "rating": 76,
    "club": "Stade Reims (FRA)",
    "nationality": "Japan",
    "basePrice": 10,
    "photo": "/api/player-image?name=Keito%20Nakamura&nat=Japan&club=Stade%20Reims%20(FRA)&pos=MF"
  },
  {
    "id": "wc_jap_14",
    "name": "Junya Ito",
    "position": "MF",
    "rating": 77,
    "club": "KRC Genk (BEL)",
    "nationality": "Japan",
    "basePrice": 9,
    "photo": "/api/player-image?name=Junya%20Ito&nat=Japan&club=KRC%20Genk%20(BEL)&pos=MF"
  },
  {
    "id": "wc_jap_15",
    "name": "Daichi Kamada",
    "position": "MF",
    "rating": 77,
    "club": "Crystal Palace FC (ENG)",
    "nationality": "Japan",
    "basePrice": 11,
    "photo": "/api/player-image?name=Daichi%20Kamada&nat=Japan&club=Crystal%20Palace%20FC%20(ENG)&pos=MF"
  },
  {
    "id": "wc_jap_16",
    "name": "Tsuyoshi Watanabe",
    "position": "DF",
    "rating": 75,
    "club": "Feyenoord Rotterdam (NED)",
    "nationality": "Japan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Tsuyoshi%20Watanabe&nat=Japan&club=Feyenoord%20Rotterdam%20(NED)&pos=DF"
  },
  {
    "id": "wc_jap_17",
    "name": "Yuito Suzuki",
    "position": "MF",
    "rating": 71,
    "club": "SC Freiburg (GER)",
    "nationality": "Japan",
    "basePrice": 4,
    "photo": "/api/player-image?name=Yuito%20Suzuki&nat=Japan&club=SC%20Freiburg%20(GER)&pos=MF"
  },
  {
    "id": "wc_jap_18",
    "name": "Ayase Ueda",
    "position": "FW",
    "rating": 74,
    "club": "Feyenoord Rotterdam (NED)",
    "nationality": "Japan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Ayase%20Ueda&nat=Japan&club=Feyenoord%20Rotterdam%20(NED)&pos=FW"
  },
  {
    "id": "wc_jap_19",
    "name": "Koki Ogawa",
    "position": "FW",
    "rating": 68,
    "club": "NEC Nijmegen (NED)",
    "nationality": "Japan",
    "basePrice": 1,
    "photo": "/api/player-image?name=Koki%20Ogawa&nat=Japan&club=NEC%20Nijmegen%20(NED)&pos=FW"
  },
  {
    "id": "wc_jap_20",
    "name": "Ayumu Seko",
    "position": "DF",
    "rating": 69,
    "club": "Le Havre AC (FRA)",
    "nationality": "Japan",
    "basePrice": 2,
    "photo": "/api/player-image?name=Ayumu%20Seko&nat=Japan&club=Le%20Havre%20AC%20(FRA)&pos=DF"
  },
  {
    "id": "wc_jap_21",
    "name": "Hiroki Ito",
    "position": "DF",
    "rating": 78,
    "club": "FC Bayern München (GER)",
    "nationality": "Japan",
    "basePrice": 18,
    "photo": "/api/player-image?name=Hiroki%20Ito&nat=Japan&club=FC%20Bayern%20M%C3%BCnchen%20(GER)&pos=DF"
  },
  {
    "id": "wc_jap_22",
    "name": "Takehiro Tomiyasu",
    "position": "DF",
    "rating": 75,
    "club": "AFC Ajax (NED)",
    "nationality": "Japan",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Takehiro%20Tomiyasu&nat=Japan&club=AFC%20Ajax%20(NED)&pos=DF"
  },
  {
    "id": "wc_jap_23",
    "name": "Tomoki Hayakawa",
    "position": "GK",
    "rating": 70,
    "club": "Kashima Antlers (JPN)",
    "nationality": "Japan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Tomoki%20Hayakawa&nat=Japan&club=Kashima%20Antlers%20(JPN)&pos=GK"
  },
  {
    "id": "wc_jap_24",
    "name": "Kaishu Sano",
    "position": "MF",
    "rating": 79,
    "club": "1. FSV Mainz 05 (GER)",
    "nationality": "Japan",
    "basePrice": 23,
    "photo": "/api/player-image?name=Kaishu%20Sano&nat=Japan&club=1.%20FSV%20Mainz%2005%20(GER)&pos=MF"
  },
  {
    "id": "wc_jap_25",
    "name": "Junnosuke Suzuki",
    "position": "DF",
    "rating": 66,
    "club": "FC København (DEN)",
    "nationality": "Japan",
    "basePrice": 2,
    "photo": "/api/player-image?name=Junnosuke%20Suzuki&nat=Japan&club=FC%20K%C3%B8benhavn%20(DEN)&pos=DF"
  },
  {
    "id": "wc_jap_26",
    "name": "Kento Shiogai",
    "position": "FW",
    "rating": 66,
    "club": "VfL Wolfsburg (GER)",
    "nationality": "Japan",
    "basePrice": 2,
    "photo": "/api/player-image?name=Kento%20Shiogai&nat=Japan&club=VfL%20Wolfsburg%20(GER)&pos=FW"
  },
  {
    "id": "wc_jor_1",
    "name": "Abulaila Yazeed",
    "position": "GK",
    "rating": 70,
    "club": "Al Hussein SC (JOR)",
    "nationality": "Jordan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Abulaila%20Yazeed&nat=Jordan&club=Al%20Hussein%20SC%20(JOR)&pos=GK"
  },
  {
    "id": "wc_jor_2",
    "name": "Abuhasheesh Mohammad",
    "position": "DF",
    "rating": 70,
    "club": "Al Karma SC (IRQ)",
    "nationality": "Jordan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Abuhasheesh%20Mohammad&nat=Jordan&club=Al%20Karma%20SC%20(IRQ)&pos=DF"
  },
  {
    "id": "wc_jor_3",
    "name": "Nasib Abdallah",
    "position": "DF",
    "rating": 70,
    "club": "Al Zawra'a SC (IRQ)",
    "nationality": "Jordan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Nasib%20Abdallah&nat=Jordan&club=Al%20Zawra'a%20SC%20(IRQ)&pos=DF"
  },
  {
    "id": "wc_jor_4",
    "name": "Abudahab Husam",
    "position": "DF",
    "rating": 70,
    "club": "Al Faisaly SC (JOR)",
    "nationality": "Jordan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Abudahab%20Husam&nat=Jordan&club=Al%20Faisaly%20SC%20(JOR)&pos=DF"
  },
  {
    "id": "wc_jor_5",
    "name": "Alarab Yazan",
    "position": "DF",
    "rating": 75,
    "club": "FC Seoul (KOR)",
    "nationality": "Jordan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Alarab%20Yazan&nat=Jordan&club=FC%20Seoul%20(KOR)&pos=DF"
  },
  {
    "id": "wc_jor_6",
    "name": "Jamous Amer",
    "position": "MF",
    "rating": 70,
    "club": "Al Zawra'a SC (IRQ)",
    "nationality": "Jordan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Jamous%20Amer&nat=Jordan&club=Al%20Zawra'a%20SC%20(IRQ)&pos=MF"
  },
  {
    "id": "wc_jor_7",
    "name": "Abuzraiq Mohammad",
    "position": "FW",
    "rating": 70,
    "club": "Raja Casablanca (MAR)",
    "nationality": "Jordan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Abuzraiq%20Mohammad&nat=Jordan&club=Raja%20Casablanca%20(MAR)&pos=FW"
  },
  {
    "id": "wc_jor_8",
    "name": "Alrawabdeh Noor",
    "position": "MF",
    "rating": 75,
    "club": "Selangor FC (MAS)",
    "nationality": "Jordan",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Alrawabdeh%20Noor&nat=Jordan&club=Selangor%20FC%20(MAS)&pos=MF"
  },
  {
    "id": "wc_jor_9",
    "name": "Olwan Ali",
    "position": "FW",
    "rating": 70,
    "club": "Al Sailiya SC (QAT)",
    "nationality": "Jordan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Olwan%20Ali&nat=Jordan&club=Al%20Sailiya%20SC%20(QAT)&pos=FW"
  },
  {
    "id": "wc_jor_10",
    "name": "Altamari Mousa",
    "position": "FW",
    "rating": 75,
    "club": "Stade Rennais FC (FRA)",
    "nationality": "Jordan",
    "basePrice": 6,
    "photo": "/api/player-image?name=Altamari%20Mousa&nat=Jordan&club=Stade%20Rennais%20FC%20(FRA)&pos=FW"
  },
  {
    "id": "wc_jor_11",
    "name": "Fakhoury Odeh",
    "position": "FW",
    "rating": 75,
    "club": "Pyramids FC (EGY)",
    "nationality": "Jordan",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Fakhoury%20Odeh&nat=Jordan&club=Pyramids%20FC%20(EGY)&pos=FW"
  },
  {
    "id": "wc_jor_12",
    "name": "Baniateyah Nour",
    "position": "GK",
    "rating": 70,
    "club": "Al Faisaly SC (JOR)",
    "nationality": "Jordan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Baniateyah%20Nour&nat=Jordan&club=Al%20Faisaly%20SC%20(JOR)&pos=GK"
  },
  {
    "id": "wc_jor_13",
    "name": "Almardi Mahmoud",
    "position": "FW",
    "rating": 70,
    "club": "Al Hussein SC (JOR)",
    "nationality": "Jordan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Almardi%20Mahmoud&nat=Jordan&club=Al%20Hussein%20SC%20(JOR)&pos=FW"
  },
  {
    "id": "wc_jor_14",
    "name": "Ayed Rajaei",
    "position": "MF",
    "rating": 70,
    "club": "Al Hussein SC (JOR)",
    "nationality": "Jordan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Ayed%20Rajaei&nat=Jordan&club=Al%20Hussein%20SC%20(JOR)&pos=MF"
  },
  {
    "id": "wc_jor_15",
    "name": "Sadeh Ibrahim",
    "position": "MF",
    "rating": 61,
    "club": "Al Karma SC (IRQ)",
    "nationality": "Jordan",
    "basePrice": 1,
    "photo": "/api/player-image?name=Sadeh%20Ibrahim&nat=Jordan&club=Al%20Karma%20SC%20(IRQ)&pos=MF"
  },
  {
    "id": "wc_jor_16",
    "name": "Abualnadi Mohammad",
    "position": "DF",
    "rating": 75,
    "club": "Selangor FC (MAS)",
    "nationality": "Jordan",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Abualnadi%20Mohammad&nat=Jordan&club=Selangor%20FC%20(MAS)&pos=DF"
  },
  {
    "id": "wc_jor_17",
    "name": "Obaid Saleem",
    "position": "DF",
    "rating": 70,
    "club": "Al Hussein SC (JOR)",
    "nationality": "Jordan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Obaid%20Saleem&nat=Jordan&club=Al%20Hussein%20SC%20(JOR)&pos=DF"
  },
  {
    "id": "wc_jor_18",
    "name": "Abughoush Mohammad",
    "position": "MF",
    "rating": 61,
    "club": "Al Hussein SC (JOR)",
    "nationality": "Jordan",
    "basePrice": 1,
    "photo": "/api/player-image?name=Abughoush%20Mohammad&nat=Jordan&club=Al%20Hussein%20SC%20(JOR)&pos=MF"
  },
  {
    "id": "wc_jor_19",
    "name": "Alrosan Saed",
    "position": "DF",
    "rating": 70,
    "club": "Al Hussein SC (JOR)",
    "nationality": "Jordan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Alrosan%20Saed&nat=Jordan&club=Al%20Hussein%20SC%20(JOR)&pos=DF"
  },
  {
    "id": "wc_jor_20",
    "name": "Abutaha Mohannad",
    "position": "MF",
    "rating": 70,
    "club": "Al-Quwa Al-Jawiya (IRQ)",
    "nationality": "Jordan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Abutaha%20Mohannad&nat=Jordan&club=Al-Quwa%20Al-Jawiya%20(IRQ)&pos=MF"
  },
  {
    "id": "wc_jor_21",
    "name": "Alrashdan Nizar",
    "position": "MF",
    "rating": 70,
    "club": "Qatar SC (QAT)",
    "nationality": "Jordan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Alrashdan%20Nizar&nat=Jordan&club=Qatar%20SC%20(QAT)&pos=MF"
  },
  {
    "id": "wc_jor_22",
    "name": "Alfakhori Abdallah",
    "position": "GK",
    "rating": 70,
    "club": "Al Wahdat SC (JOR)",
    "nationality": "Jordan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Alfakhori%20Abdallah&nat=Jordan&club=Al%20Wahdat%20SC%20(JOR)&pos=GK"
  },
  {
    "id": "wc_jor_23",
    "name": "Haddad Ehsan",
    "position": "DF",
    "rating": 70,
    "club": "Al Hussein SC (JOR)",
    "nationality": "Jordan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Haddad%20Ehsan&nat=Jordan&club=Al%20Hussein%20SC%20(JOR)&pos=DF"
  },
  {
    "id": "wc_jor_24",
    "name": "Azaizeh Ali",
    "position": "FW",
    "rating": 75,
    "club": "Al Shabab FC (KSA)",
    "nationality": "Jordan",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Azaizeh%20Ali&nat=Jordan&club=Al%20Shabab%20FC%20(KSA)&pos=FW"
  },
  {
    "id": "wc_jor_25",
    "name": "Aldaoud Mohammad",
    "position": "MF",
    "rating": 70,
    "club": "Al Wahdat SC (JOR)",
    "nationality": "Jordan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Aldaoud%20Mohammad&nat=Jordan&club=Al%20Wahdat%20SC%20(JOR)&pos=MF"
  },
  {
    "id": "wc_jor_26",
    "name": "Badawi Anas",
    "position": "DF",
    "rating": 70,
    "club": "Al Faisaly SC (JOR)",
    "nationality": "Jordan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Badawi%20Anas&nat=Jordan&club=Al%20Faisaly%20SC%20(JOR)&pos=DF"
  },
  {
    "id": "wc_kor_1",
    "name": "Seunggyu Kim",
    "position": "GK",
    "rating": 66,
    "club": "FC Tokyo (JPN)",
    "nationality": "Korea Republic",
    "basePrice": 1,
    "photo": "/api/player-image?name=Seunggyu%20Kim&nat=Korea%20Republic&club=FC%20Tokyo%20(JPN)&pos=GK"
  },
  {
    "id": "wc_kor_2",
    "name": "Hanbeom Lee",
    "position": "DF",
    "rating": 69,
    "club": "FC Midtjylland (DEN)",
    "nationality": "Korea Republic",
    "basePrice": 3,
    "photo": "/api/player-image?name=Hanbeom%20Lee&nat=Korea%20Republic&club=FC%20Midtjylland%20(DEN)&pos=DF"
  },
  {
    "id": "wc_kor_3",
    "name": "Gihyuk Lee",
    "position": "MF",
    "rating": 69,
    "club": "Gangwon FC (KOR)",
    "nationality": "Korea Republic",
    "basePrice": 3,
    "photo": "/api/player-image?name=Gihyuk%20Lee&nat=Korea%20Republic&club=Gangwon%20FC%20(KOR)&pos=MF"
  },
  {
    "id": "wc_kor_4",
    "name": "Minjae Kim",
    "position": "DF",
    "rating": 82,
    "club": "FC Bayern München (GER)",
    "nationality": "Korea Republic",
    "basePrice": 29,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/80/FC_Red_Bull_Salzburg_gegen_Bayern_M%C3%BCnchen_%282025-01-06_Testspiel%29_26.jpg/330px-FC_Red_Bull_Salzburg_gegen_Bayern_M%C3%BCnchen_%282025-01-06_Testspiel%29_26.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_kor_5",
    "name": "Taehyeon Kim",
    "position": "DF",
    "rating": 50,
    "club": "Kashima Antlers (JPN)",
    "nationality": "Korea Republic",
    "basePrice": 1,
    "photo": "/api/player-image?name=Taehyeon%20Kim&nat=Korea%20Republic&club=Kashima%20Antlers%20(JPN)&pos=DF"
  },
  {
    "id": "wc_kor_6",
    "name": "Inbeom Hwang",
    "position": "MF",
    "rating": 77,
    "club": "Feyenoord Rotterdam (NED)",
    "nationality": "Korea Republic",
    "basePrice": 11,
    "photo": "/api/player-image?name=Inbeom%20Hwang&nat=Korea%20Republic&club=Feyenoord%20Rotterdam%20(NED)&pos=MF"
  },
  {
    "id": "wc_kor_7",
    "name": "Heungmin Son",
    "position": "FW",
    "rating": 85,
    "club": "LAFC (USA)",
    "nationality": "Korea Republic",
    "basePrice": 43,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/BFA_2023_-2_Heung-Min_Son_%28cropped%29.jpg/330px-BFA_2023_-2_Heung-Min_Son_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_kor_8",
    "name": "Seungho Paik",
    "position": "MF",
    "rating": 72,
    "club": "Birmingham City FC (ENG)",
    "nationality": "Korea Republic",
    "basePrice": 2,
    "photo": "/api/player-image?name=Seungho%20Paik&nat=Korea%20Republic&club=Birmingham%20City%20FC%20(ENG)&pos=MF"
  },
  {
    "id": "wc_kor_9",
    "name": "Guesung Cho",
    "position": "FW",
    "rating": 70,
    "club": "FC Midtjylland (DEN)",
    "nationality": "Korea Republic",
    "basePrice": 2,
    "photo": "/api/player-image?name=Guesung%20Cho&nat=Korea%20Republic&club=FC%20Midtjylland%20(DEN)&pos=FW"
  },
  {
    "id": "wc_kor_10",
    "name": "Jaesung Lee",
    "position": "MF",
    "rating": 77,
    "club": "1. FSV Mainz 05 (GER)",
    "nationality": "Korea Republic",
    "basePrice": 9,
    "photo": "/api/player-image?name=Jaesung%20Lee&nat=Korea%20Republic&club=1.%20FSV%20Mainz%2005%20(GER)&pos=MF"
  },
  {
    "id": "wc_kor_11",
    "name": "Heechan Hwang",
    "position": "MF",
    "rating": 75,
    "club": "Wolverhampton Wanderers FC (ENG)",
    "nationality": "Korea Republic",
    "basePrice": 6,
    "photo": "/api/player-image?name=Heechan%20Hwang&nat=Korea%20Republic&club=Wolverhampton%20Wanderers%20FC%20(ENG)&pos=MF"
  },
  {
    "id": "wc_kor_12",
    "name": "Bumkeun Song",
    "position": "GK",
    "rating": 74,
    "club": "Jeonbuk Hyundai Motors FC (KOR)",
    "nationality": "Korea Republic",
    "basePrice": 4,
    "photo": "/api/player-image?name=Bumkeun%20Song&nat=Korea%20Republic&club=Jeonbuk%20Hyundai%20Motors%20FC%20(KOR)&pos=GK"
  },
  {
    "id": "wc_kor_13",
    "name": "Taeseok Lee",
    "position": "DF",
    "rating": 69,
    "club": "FK Austria Wien (AUT)",
    "nationality": "Korea Republic",
    "basePrice": 2,
    "photo": "/api/player-image?name=Taeseok%20Lee&nat=Korea%20Republic&club=FK%20Austria%20Wien%20(AUT)&pos=DF"
  },
  {
    "id": "wc_kor_14",
    "name": "Wije Cho",
    "position": "DF",
    "rating": 75,
    "club": "Jeonbuk Hyundai Motors FC (KOR)",
    "nationality": "Korea Republic",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Wije%20Cho&nat=Korea%20Republic&club=Jeonbuk%20Hyundai%20Motors%20FC%20(KOR)&pos=DF"
  },
  {
    "id": "wc_kor_15",
    "name": "Moonhwan Kim",
    "position": "DF",
    "rating": 69,
    "club": "Daejeon Hana Citizen FC (KOR)",
    "nationality": "Korea Republic",
    "basePrice": 1,
    "photo": "/api/player-image?name=Moonhwan%20Kim&nat=Korea%20Republic&club=Daejeon%20Hana%20Citizen%20FC%20(KOR)&pos=DF"
  },
  {
    "id": "wc_kor_16",
    "name": "Jinseob Park",
    "position": "DF",
    "rating": 71,
    "club": "Zhejiang FC (CHN)",
    "nationality": "Korea Republic",
    "basePrice": 2,
    "photo": "/api/player-image?name=Jinseob%20Park&nat=Korea%20Republic&club=Zhejiang%20FC%20(CHN)&pos=DF"
  },
  {
    "id": "wc_kor_17",
    "name": "Junho Bae",
    "position": "MF",
    "rating": 71,
    "club": "Stoke City FC (ENG)",
    "nationality": "Korea Republic",
    "basePrice": 4,
    "photo": "/api/player-image?name=Junho%20Bae&nat=Korea%20Republic&club=Stoke%20City%20FC%20(ENG)&pos=MF"
  },
  {
    "id": "wc_kor_18",
    "name": "Hyeongyu Oh",
    "position": "FW",
    "rating": 71,
    "club": "Beniktan JK (TUR)",
    "nationality": "Korea Republic",
    "basePrice": 3,
    "photo": "/api/player-image?name=Hyeongyu%20Oh&nat=Korea%20Republic&club=Beniktan%20JK%20(TUR)&pos=FW"
  },
  {
    "id": "wc_kor_19",
    "name": "Kangin Lee",
    "position": "MF",
    "rating": 79,
    "club": "Paris Saint-Germain (FRA)",
    "nationality": "Korea Republic",
    "basePrice": 27,
    "photo": "/api/player-image?name=Kangin%20Lee&nat=Korea%20Republic&club=Paris%20Saint-Germain%20(FRA)&pos=MF"
  },
  {
    "id": "wc_kor_20",
    "name": "Hyunjun Yang",
    "position": "MF",
    "rating": 70,
    "club": "Celtic FC (SCO)",
    "nationality": "Korea Republic",
    "basePrice": 4,
    "photo": "/api/player-image?name=Hyunjun%20Yang&nat=Korea%20Republic&club=Celtic%20FC%20(SCO)&pos=MF"
  },
  {
    "id": "wc_kor_21",
    "name": "Hyeonwoo Jo",
    "position": "GK",
    "rating": 75,
    "club": "Ulsan HD (KOR)",
    "nationality": "Korea Republic",
    "basePrice": 2,
    "photo": "/api/player-image?name=Hyeonwoo%20Jo&nat=Korea%20Republic&club=Ulsan%20HD%20(KOR)&pos=GK"
  },
  {
    "id": "wc_kor_22",
    "name": "Youngwoo Seol",
    "position": "DF",
    "rating": 63,
    "club": "FK Crvena Zvezda (SRB)",
    "nationality": "Korea Republic",
    "basePrice": 1,
    "photo": "/api/player-image?name=Youngwoo%20Seol&nat=Korea%20Republic&club=FK%20Crvena%20Zvezda%20(SRB)&pos=DF"
  },
  {
    "id": "wc_kor_23",
    "name": "Jens Castrop",
    "position": "DF",
    "rating": 70,
    "club": "Borussia Mönchengladbach (GER)",
    "nationality": "Korea Republic",
    "basePrice": 4,
    "photo": "/api/player-image?name=Jens%20Castrop&nat=Korea%20Republic&club=Borussia%20M%C3%B6nchengladbach%20(GER)&pos=DF"
  },
  {
    "id": "wc_kor_24",
    "name": "Jingyu Kim",
    "position": "MF",
    "rating": 71,
    "club": "Jeonbuk Hyundai Motors FC (KOR)",
    "nationality": "Korea Republic",
    "basePrice": 2,
    "photo": "/api/player-image?name=Jingyu%20Kim&nat=Korea%20Republic&club=Jeonbuk%20Hyundai%20Motors%20FC%20(KOR)&pos=MF"
  },
  {
    "id": "wc_kor_25",
    "name": "Jisung Eom",
    "position": "MF",
    "rating": 71,
    "club": "Swansea City AFC (WAL)",
    "nationality": "Korea Republic",
    "basePrice": 4,
    "photo": "/api/player-image?name=Jisung%20Eom&nat=Korea%20Republic&club=Swansea%20City%20AFC%20(WAL)&pos=MF"
  },
  {
    "id": "wc_kor_26",
    "name": "Donggyeong Lee",
    "position": "MF",
    "rating": 75,
    "club": "Ulsan HD (KOR)",
    "nationality": "Korea Republic",
    "basePrice": 6,
    "photo": "/api/player-image?name=Donggyeong%20Lee&nat=Korea%20Republic&club=Ulsan%20HD%20(KOR)&pos=MF"
  },
  {
    "id": "wc_mex_4",
    "name": "Edson Alvarez",
    "position": "DF",
    "rating": 78,
    "club": "Fenerbahçe SK (TUR)",
    "nationality": "Mexico",
    "basePrice": 15,
    "photo": "/api/player-image?name=Edson%20Alvarez&nat=Mexico&club=Fenerbah%C3%A7e%20SK%20(TUR)&pos=DF"
  },
  {
    "id": "wc_mex_5",
    "name": "Johan Vasquez",
    "position": "DF",
    "rating": 75,
    "club": "Genoa CFC (ITA)",
    "nationality": "Mexico",
    "basePrice": 7,
    "photo": "/api/player-image?name=Johan%20Vasquez&nat=Mexico&club=Genoa%20CFC%20(ITA)&pos=DF"
  },
  {
    "id": "wc_mex_7",
    "name": "Luis Romo",
    "position": "MF",
    "rating": 70,
    "club": "CD Guadalajara (MEX)",
    "nationality": "Mexico",
    "basePrice": 5,
    "photo": "/api/player-image?name=Luis%20Romo&nat=Mexico&club=CD%20Guadalajara%20(MEX)&pos=MF"
  },
  {
    "id": "wc_mex_8",
    "name": "Alvaro Fidalgo",
    "position": "MF",
    "rating": 75,
    "club": "Real Betis (ESP)",
    "nationality": "Mexico",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Alvaro%20Fidalgo&nat=Mexico&club=Real%20Betis%20(ESP)&pos=MF"
  },
  {
    "id": "wc_mex_9",
    "name": "Raul Jimenez",
    "position": "FW",
    "rating": 77,
    "club": "Fulham FC (ENG)",
    "nationality": "Mexico",
    "basePrice": 5,
    "photo": "/api/player-image?name=Raul%20Jimenez&nat=Mexico&club=Fulham%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_mex_11",
    "name": "Santiago Gimenez",
    "position": "FW",
    "rating": 79,
    "club": "AC Milan (ITA)",
    "nationality": "Mexico",
    "basePrice": 27,
    "photo": "/api/player-image?name=Santiago%20Gimenez&nat=Mexico&club=AC%20Milan%20(ITA)&pos=FW"
  },
  {
    "id": "wc_mex_12",
    "name": "Carlos Acevedo",
    "position": "GK",
    "rating": 70,
    "club": "Club Santos Laguna (MEX)",
    "nationality": "Mexico",
    "basePrice": 5,
    "photo": "/api/player-image?name=Carlos%20Acevedo&nat=Mexico&club=Club%20Santos%20Laguna%20(MEX)&pos=GK"
  },
  {
    "id": "wc_mex_13",
    "name": "Guillermo Ochoa",
    "position": "GK",
    "rating": 62,
    "club": "AEL Limassol (CYP)",
    "nationality": "Mexico",
    "basePrice": 1,
    "photo": "/api/player-image?name=Guillermo%20Ochoa&nat=Mexico&club=AEL%20Limassol%20(CYP)&pos=GK"
  },
  {
    "id": "wc_mex_14",
    "name": "Armando Gonzalez",
    "position": "FW",
    "rating": 70,
    "club": "CD Guadalajara (MEX)",
    "nationality": "Mexico",
    "basePrice": 5,
    "photo": "/api/player-image?name=Armando%20Gonzalez&nat=Mexico&club=CD%20Guadalajara%20(MEX)&pos=FW"
  },
  {
    "id": "wc_mex_15",
    "name": "Israel Reyes",
    "position": "DF",
    "rating": 70,
    "club": "Club América (MEX)",
    "nationality": "Mexico",
    "basePrice": 5,
    "photo": "/api/player-image?name=Israel%20Reyes&nat=Mexico&club=Club%20Am%C3%A9rica%20(MEX)&pos=DF"
  },
  {
    "id": "wc_mex_16",
    "name": "Julian Quinones",
    "position": "FW",
    "rating": 80,
    "club": "Al Qadsiah FC (KSA)",
    "nationality": "Mexico",
    "basePrice": 22,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Juli%C3%A1n_Qui%C3%B1ones.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
  },
  {
    "id": "wc_mex_17",
    "name": "Orbelin Pineda",
    "position": "MF",
    "rating": 77,
    "club": "AEK Athens (GRE)",
    "nationality": "Mexico",
    "basePrice": 11,
    "photo": "/api/player-image?name=Orbelin%20Pineda&nat=Mexico&club=AEK%20Athens%20(GRE)&pos=MF"
  },
  {
    "id": "wc_mex_18",
    "name": "Obed Vargas",
    "position": "MF",
    "rating": 69,
    "club": "Atlético De Madrid (ESP)",
    "nationality": "Mexico",
    "basePrice": 3,
    "photo": "/api/player-image?name=Obed%20Vargas&nat=Mexico&club=Atl%C3%A9tico%20De%20Madrid%20(ESP)&pos=MF"
  },
  {
    "id": "wc_mex_20",
    "name": "Mateo Chavez",
    "position": "DF",
    "rating": 72,
    "club": "AZ Alkmaar (NED)",
    "nationality": "Mexico",
    "basePrice": 5,
    "photo": "/api/player-image?name=Mateo%20Chavez&nat=Mexico&club=AZ%20Alkmaar%20(NED)&pos=DF"
  },
  {
    "id": "wc_mex_21",
    "name": "Cesar Huerta",
    "position": "FW",
    "rating": 73,
    "club": "RSC Anderlecht (BEL)",
    "nationality": "Mexico",
    "basePrice": 4,
    "photo": "/api/player-image?name=Cesar%20Huerta&nat=Mexico&club=RSC%20Anderlecht%20(BEL)&pos=FW"
  },
  {
    "id": "wc_mex_22",
    "name": "Guillermo Martinez",
    "position": "FW",
    "rating": 70,
    "club": "Pumas UNAM (MEX)",
    "nationality": "Mexico",
    "basePrice": 5,
    "photo": "/api/player-image?name=Guillermo%20Martinez&nat=Mexico&club=Pumas%20UNAM%20(MEX)&pos=FW"
  },
  {
    "id": "wc_mex_24",
    "name": "Luis Chavez",
    "position": "MF",
    "rating": 72,
    "club": "FC Dynamo Moscow (RUS)",
    "nationality": "Mexico",
    "basePrice": 5,
    "photo": "/api/player-image?name=Luis%20Chavez&nat=Mexico&club=FC%20Dynamo%20Moscow%20(RUS)&pos=MF"
  },
  {
    "id": "wc_mex_26",
    "name": "Brian Gutierrez",
    "position": "MF",
    "rating": 68,
    "club": "CD Guadalajara (MEX)",
    "nationality": "Mexico",
    "basePrice": 3,
    "photo": "/api/player-image?name=Brian%20Gutierrez&nat=Mexico&club=CD%20Guadalajara%20(MEX)&pos=MF"
  },
  {
    "id": "wc_mor_1",
    "name": "Yassine Bounou",
    "position": "GK",
    "rating": 82,
    "club": "Al Hilal SC (KSA)",
    "nationality": "Morocco",
    "basePrice": 5,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Yassine_Bounou_Brazil_V_Morocco_13_June_2026-169.jpg/330px-Yassine_Bounou_Brazil_V_Morocco_13_June_2026-169.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_mor_2",
    "name": "Achraf Hakimi",
    "position": "DF",
    "rating": 89,
    "club": "Paris Saint-Germain (FRA)",
    "nationality": "Morocco",
    "basePrice": 111,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Achraf_Hakimi_Morocco_v_Norway_7_June_2026-16.jpg/330px-Achraf_Hakimi_Morocco_v_Norway_7_June_2026-16.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_mor_3",
    "name": "Noussair Mazraoui",
    "position": "DF",
    "rating": 80,
    "club": "Manchester United FC (ENG)",
    "nationality": "Morocco",
    "basePrice": 22,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Noussair_Mazraoui_at_2026_FIFA_World_Cup_by_YantsImages_%28cropped%29.jpg/330px-Noussair_Mazraoui_at_2026_FIFA_World_Cup_by_YantsImages_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_mor_4",
    "name": "Sofyan Amrabat",
    "position": "MF",
    "rating": 78,
    "club": "Real Betis (ESP)",
    "nationality": "Morocco",
    "basePrice": 13,
    "photo": "/api/player-image?name=Sofyan%20Amrabat&nat=Morocco&club=Real%20Betis%20(ESP)&pos=MF"
  },
  {
    "id": "wc_mor_5",
    "name": "Marwane Saadane",
    "position": "DF",
    "rating": 72,
    "club": "Al Fateh SC (KSA)",
    "nationality": "Morocco",
    "basePrice": 1,
    "photo": "/api/player-image?name=Marwane%20Saadane&nat=Morocco&club=Al%20Fateh%20SC%20(KSA)&pos=DF"
  },
  {
    "id": "wc_mor_6",
    "name": "Ayyoub Bouaddi",
    "position": "MF",
    "rating": 75,
    "club": "Lille OSC (FRA)",
    "nationality": "Morocco",
    "basePrice": 12,
    "photo": "/api/player-image?name=Ayyoub%20Bouaddi&nat=Morocco&club=Lille%20OSC%20(FRA)&pos=MF"
  },
  {
    "id": "wc_mor_7",
    "name": "Chemsdine Talbi",
    "position": "MF",
    "rating": 73,
    "club": "Sunderland AFC (ENG)",
    "nationality": "Morocco",
    "basePrice": 8,
    "photo": "/api/player-image?name=Chemsdine%20Talbi&nat=Morocco&club=Sunderland%20AFC%20(ENG)&pos=MF"
  },
  {
    "id": "wc_mor_8",
    "name": "Azzedine Ounahi",
    "position": "MF",
    "rating": 76,
    "club": "Girona FC (ESP)",
    "nationality": "Morocco",
    "basePrice": 11,
    "photo": "/api/player-image?name=Azzedine%20Ounahi&nat=Morocco&club=Girona%20FC%20(ESP)&pos=MF"
  },
  {
    "id": "wc_mor_9",
    "name": "Sou Rahimi",
    "position": "FW",
    "rating": 78,
    "club": "Al Ain FC (UAE)",
    "nationality": "Morocco",
    "basePrice": 14,
    "photo": "/api/player-image?name=Sou%20Rahimi&nat=Morocco&club=Al%20Ain%20FC%20(UAE)&pos=FW"
  },
  {
    "id": "wc_mor_10",
    "name": "Brahim Diaz",
    "position": "FW",
    "rating": 82,
    "club": "Real Madrid C. F. (ESP)",
    "nationality": "Morocco",
    "basePrice": 37,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Brahim_Diaz_Morocco_v_Norway_7_June_2026-36_%28cropped_3-4%29.jpg/330px-Brahim_Diaz_Morocco_v_Norway_7_June_2026-36_%28cropped_3-4%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_mor_11",
    "name": "Ismael Saibari",
    "position": "MF",
    "rating": 79,
    "club": "PSV Eindhoven (NED)",
    "nationality": "Morocco",
    "basePrice": 27,
    "photo": "/api/player-image?name=Ismael%20Saibari&nat=Morocco&club=PSV%20Eindhoven%20(NED)&pos=MF"
  },
  {
    "id": "wc_mor_13",
    "name": "Zakaria El Ouahdi",
    "position": "DF",
    "rating": 76,
    "club": "KRC Genk (BEL)",
    "nationality": "Morocco",
    "basePrice": 15,
    "photo": "/api/player-image?name=Zakaria%20El%20Ouahdi&nat=Morocco&club=KRC%20Genk%20(BEL)&pos=DF"
  },
  {
    "id": "wc_mor_14",
    "name": "Issa Diop",
    "position": "DF",
    "rating": 76,
    "club": "Fulham FC (ENG)",
    "nationality": "Morocco",
    "basePrice": 7,
    "photo": "/api/player-image?name=Issa%20Diop&nat=Morocco&club=Fulham%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_mor_15",
    "name": "Samir El Mourabet",
    "position": "MF",
    "rating": 66,
    "club": "RC Strasbourg (FRA)",
    "nationality": "Morocco",
    "basePrice": 2,
    "photo": "/api/player-image?name=Samir%20El%20Mourabet&nat=Morocco&club=RC%20Strasbourg%20(FRA)&pos=MF"
  },
  {
    "id": "wc_mor_16",
    "name": "Gessime Yassine",
    "position": "MF",
    "rating": 65,
    "club": "RC Strasbourg (FRA)",
    "nationality": "Morocco",
    "basePrice": 2,
    "photo": "/api/player-image?name=Gessime%20Yassine&nat=Morocco&club=RC%20Strasbourg%20(FRA)&pos=MF"
  },
  {
    "id": "wc_mor_17",
    "name": "Amine Sbai",
    "position": "FW",
    "rating": 68,
    "club": "Angers SCO (FRA)",
    "nationality": "Morocco",
    "basePrice": 2,
    "photo": "/api/player-image?name=Amine%20Sbai&nat=Morocco&club=Angers%20SCO%20(FRA)&pos=FW"
  },
  {
    "id": "wc_mor_18",
    "name": "Chadi Riad",
    "position": "DF",
    "rating": 72,
    "club": "Crystal Palace FC (ENG)",
    "nationality": "Morocco",
    "basePrice": 5,
    "photo": "/api/player-image?name=Chadi%20Riad&nat=Morocco&club=Crystal%20Palace%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_mor_19",
    "name": "Youssef Belammari",
    "position": "DF",
    "rating": 69,
    "club": "Al Ahly FC (EGY)",
    "nationality": "Morocco",
    "basePrice": 2,
    "photo": "/api/player-image?name=Youssef%20Belammari&nat=Morocco&club=Al%20Ahly%20FC%20(EGY)&pos=DF"
  },
  {
    "id": "wc_mor_20",
    "name": "Ayoub El Kaabi",
    "position": "FW",
    "rating": 80,
    "club": "Olympiacos FC (GRE)",
    "nationality": "Morocco",
    "basePrice": 17,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Ayoub_El_Kaabi_France_v_Morocco_9_July_2026-131.jpg/330px-Ayoub_El_Kaabi_France_v_Morocco_9_July_2026-131.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_mor_21",
    "name": "Ayoube Amaimouni",
    "position": "FW",
    "rating": 63,
    "club": "Eintracht Frankfurt (GER)",
    "nationality": "Morocco",
    "basePrice": 1,
    "photo": "/api/player-image?name=Ayoube%20Amaimouni&nat=Morocco&club=Eintracht%20Frankfurt%20(GER)&pos=FW"
  },
  {
    "id": "wc_mor_23",
    "name": "Bilal El Khannouss",
    "position": "MF",
    "rating": 76,
    "club": "VfB Stuttgart (GER)",
    "nationality": "Morocco",
    "basePrice": 17,
    "photo": "/api/player-image?name=Bilal%20El%20Khannouss&nat=Morocco&club=VfB%20Stuttgart%20(GER)&pos=MF"
  },
  {
    "id": "wc_mor_24",
    "name": "Neil El Aynaoui",
    "position": "MF",
    "rating": 77,
    "club": "AS Roma (ITA)",
    "nationality": "Morocco",
    "basePrice": 17,
    "photo": "/api/player-image?name=Neil%20El%20Aynaoui&nat=Morocco&club=AS%20Roma%20(ITA)&pos=MF"
  },
  {
    "id": "wc_mor_25",
    "name": "Redouane Halhal",
    "position": "DF",
    "rating": 63,
    "club": "KV Mechelen (BEL)",
    "nationality": "Morocco",
    "basePrice": 1,
    "photo": "/api/player-image?name=Redouane%20Halhal&nat=Morocco&club=KV%20Mechelen%20(BEL)&pos=DF"
  },
  {
    "id": "wc_mor_26",
    "name": "Anass Salah Eddine",
    "position": "DF",
    "rating": 71,
    "club": "PSV Eindhoven (NED)",
    "nationality": "Morocco",
    "basePrice": 4,
    "photo": "/api/player-image?name=Anass%20Salah%20Eddine&nat=Morocco&club=PSV%20Eindhoven%20(NED)&pos=DF"
  },
  {
    "id": "wc_net_1",
    "name": "Bart Verbruggen",
    "position": "GK",
    "rating": 78,
    "club": "Brighton & Hove Albion FC (ENG)",
    "nationality": "Netherlands",
    "basePrice": 19,
    "photo": "/api/player-image?name=Bart%20Verbruggen&nat=Netherlands&club=Brighton%20%26%20Hove%20Albion%20FC%20(ENG)&pos=GK"
  },
  {
    "id": "wc_net_2",
    "name": "Lutsharel Geertruida",
    "position": "DF",
    "rating": 78,
    "club": "Sunderland AFC (ENG)",
    "nationality": "Netherlands",
    "basePrice": 18,
    "photo": "/api/player-image?name=Lutsharel%20Geertruida&nat=Netherlands&club=Sunderland%20AFC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_net_3",
    "name": "Marten De Roon",
    "position": "MF",
    "rating": 81,
    "club": "Atalanta Bergamo (ITA)",
    "nationality": "Netherlands",
    "basePrice": 12,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d8/Marten_de_Roon_03.jpg/330px-Marten_de_Roon_03.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_net_4",
    "name": "Virgil Van Dijk",
    "position": "DF",
    "rating": 90,
    "club": "Liverpool FC (ENG)",
    "nationality": "Netherlands",
    "basePrice": 57,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/20160604_AUT_NED_8876_%28cropped%29.jpg/330px-20160604_AUT_NED_8876_%28cropped%29.jpg"
  },
  {
    "id": "wc_net_5",
    "name": "Nathan Ake",
    "position": "DF",
    "rating": 83,
    "club": "Manchester City FC (ENG)",
    "nationality": "Netherlands",
    "basePrice": 30,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Nathan_Ak%C3%A9_Fenerbah%C3%A7e_20260717_%285%29_%28cropped%29.jpg/330px-Nathan_Ak%C3%A9_Fenerbah%C3%A7e_20260717_%285%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_net_6",
    "name": "Paul Van Hecke Jan",
    "position": "DF",
    "rating": 80,
    "club": "Brighton & Hove Albion FC (ENG)",
    "nationality": "Netherlands",
    "basePrice": 25,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Jan_Paul_van_Hecke_24012026_%282%29_%28cropped%29.jpg/330px-Jan_Paul_van_Hecke_24012026_%282%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_net_7",
    "name": "Justin Kluivert",
    "position": "MF",
    "rating": 79,
    "club": "AFC Bournemouth (ENG)",
    "nationality": "Netherlands",
    "basePrice": 22,
    "photo": "/api/player-image?name=Justin%20Kluivert&nat=Netherlands&club=AFC%20Bournemouth%20(ENG)&pos=MF"
  },
  {
    "id": "wc_net_8",
    "name": "Ryan Gravenberch",
    "position": "MF",
    "rating": 85,
    "club": "Liverpool FC (ENG)",
    "nationality": "Netherlands",
    "basePrice": 67,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/2022-07-30_Fu%C3%9Fball%2C_M%C3%A4nner%2C_DFL-Supercup%2C_RB_Leipzig_-_FC_Bayern_M%C3%BCnchen_1DX_3342_by_Stepro_%28cropped%29.jpg/330px-2022-07-30_Fu%C3%9Fball%2C_M%C3%A4nner%2C_DFL-Supercup%2C_RB_Leipzig_-_FC_Bayern_M%C3%BCnchen_1DX_3342_by_Stepro_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_net_9",
    "name": "Wout Weghorst",
    "position": "FW",
    "rating": 78,
    "club": "AFC Ajax (NED)",
    "nationality": "Netherlands",
    "basePrice": 12,
    "photo": "/api/player-image?name=Wout%20Weghorst&nat=Netherlands&club=AFC%20Ajax%20(NED)&pos=FW"
  },
  {
    "id": "wc_net_11",
    "name": "Cody Gakpo",
    "position": "FW",
    "rating": 84,
    "club": "Liverpool FC (ENG)",
    "nationality": "Netherlands",
    "basePrice": 50,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Netherlands_v_Tunisia_2026_World_Cup_-_55373562032_%28Cody_Gakpo%29.jpg/330px-Netherlands_v_Tunisia_2026_World_Cup_-_55373562032_%28Cody_Gakpo%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_net_12",
    "name": "Mats Wieffer",
    "position": "DF",
    "rating": 78,
    "club": "Brighton & Hove Albion FC (ENG)",
    "nationality": "Netherlands",
    "basePrice": 18,
    "photo": "/api/player-image?name=Mats%20Wieffer&nat=Netherlands&club=Brighton%20%26%20Hove%20Albion%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_net_13",
    "name": "Robin Roefs",
    "position": "GK",
    "rating": 74,
    "club": "Sunderland AFC (ENG)",
    "nationality": "Netherlands",
    "basePrice": 8,
    "photo": "/api/player-image?name=Robin%20Roefs&nat=Netherlands&club=Sunderland%20AFC%20(ENG)&pos=GK"
  },
  {
    "id": "wc_net_14",
    "name": "Tijjani Reijnders",
    "position": "MF",
    "rating": 86,
    "club": "Manchester City FC (ENG)",
    "nationality": "Netherlands",
    "basePrice": 80,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Manchester_City_2025_06_26_Juventus_%28cropped_to_Reijniders%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
  },
  {
    "id": "wc_net_15",
    "name": "Micky Van De Ven",
    "position": "DF",
    "rating": 82,
    "club": "Tottenham Hotspur FC (ENG)",
    "nationality": "Netherlands",
    "basePrice": 37,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/Micky_Van_De_Ven_pre-match_training_%28cropped%29.jpg/330px-Micky_Van_De_Ven_pre-match_training_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_net_16",
    "name": "Guus Til",
    "position": "MF",
    "rating": 77,
    "club": "PSV Eindhoven (NED)",
    "nationality": "Netherlands",
    "basePrice": 11,
    "photo": "/api/player-image?name=Guus%20Til&nat=Netherlands&club=PSV%20Eindhoven%20(NED)&pos=MF"
  },
  {
    "id": "wc_net_17",
    "name": "Noa Lang",
    "position": "FW",
    "rating": 80,
    "club": "Galatasaray SK (TUR)",
    "nationality": "Netherlands",
    "basePrice": 25,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/Austria_U-18_vs._Netherlands_U-18_2017-03-23_%28094%29.jpg/330px-Austria_U-18_vs._Netherlands_U-18_2017-03-23_%28094%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_net_18",
    "name": "Donyell Malen",
    "position": "FW",
    "rating": 79,
    "club": "AS Roma (ITA)",
    "nationality": "Netherlands",
    "basePrice": 21,
    "photo": "/api/player-image?name=Donyell%20Malen&nat=Netherlands&club=AS%20Roma%20(ITA)&pos=FW"
  },
  {
    "id": "wc_net_19",
    "name": "Brian Brobbey",
    "position": "FW",
    "rating": 77,
    "club": "Sunderland AFC (ENG)",
    "nationality": "Netherlands",
    "basePrice": 17,
    "photo": "/api/player-image?name=Brian%20Brobbey&nat=Netherlands&club=Sunderland%20AFC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_net_20",
    "name": "Teun Koopmeiners",
    "position": "MF",
    "rating": 81,
    "club": "Juventus FC (ITA)",
    "nationality": "Netherlands",
    "basePrice": 28,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Teun_Koopmeiners_Manchester_United_v_Atalanta_BC%2C_20_October_2021_%2812%29_%28cropped%29.jpg/330px-Teun_Koopmeiners_Manchester_United_v_Atalanta_BC%2C_20_October_2021_%2812%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_net_21",
    "name": "Frenkie De Jong",
    "position": "MF",
    "rating": 87,
    "club": "FC Barcelona (ESP)",
    "nationality": "Netherlands",
    "basePrice": 80,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Frenkie_De_Jong_%282025%29_%28cropped%29.png/330px-Frenkie_De_Jong_%282025%29_%28cropped%29.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_net_22",
    "name": "Denzel Dumfries",
    "position": "DF",
    "rating": 84,
    "club": "FC Internazionale Milano (ITA)",
    "nationality": "Netherlands",
    "basePrice": 37,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/b/b7/Edison_ndreca_inter_egnati_%28cropped_Denzel_Dumfries%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
  },
  {
    "id": "wc_net_23",
    "name": "Mark Flekken",
    "position": "GK",
    "rating": 78,
    "club": "Bayer 04 Leverkusen (GER)",
    "nationality": "Netherlands",
    "basePrice": 7,
    "photo": "/api/player-image?name=Mark%20Flekken&nat=Netherlands&club=Bayer%2004%20Leverkusen%20(GER)&pos=GK"
  },
  {
    "id": "wc_net_24",
    "name": "Crysencio Summerville",
    "position": "FW",
    "rating": 76,
    "club": "West Ham United FC (ENG)",
    "nationality": "Netherlands",
    "basePrice": 17,
    "photo": "/api/player-image?name=Crysencio%20Summerville&nat=Netherlands&club=West%20Ham%20United%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_net_25",
    "name": "Jorrel Hato",
    "position": "DF",
    "rating": 78,
    "club": "Chelsea FC (ENG)",
    "nationality": "Netherlands",
    "basePrice": 29,
    "photo": "/api/player-image?name=Jorrel%20Hato&nat=Netherlands&club=Chelsea%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_net_26",
    "name": "Quinten Timber",
    "position": "MF",
    "rating": 80,
    "club": "Olympique Marseille (FRA)",
    "nationality": "Netherlands",
    "basePrice": 32,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Quinten_Timber.jpg/330px-Quinten_Timber.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_new_1",
    "name": "Max Crocombe",
    "position": "GK",
    "rating": 65,
    "club": "Millwall FC (ENG)",
    "nationality": "New Zealand",
    "basePrice": 1,
    "photo": "/api/player-image?name=Max%20Crocombe&nat=New%20Zealand&club=Millwall%20FC%20(ENG)&pos=GK"
  },
  {
    "id": "wc_new_2",
    "name": "Tim Payne",
    "position": "DF",
    "rating": 63,
    "club": "Wellington Phoenix FC (NZL)",
    "nationality": "New Zealand",
    "basePrice": 1,
    "photo": "/api/player-image?name=Tim%20Payne&nat=New%20Zealand&club=Wellington%20Phoenix%20FC%20(NZL)&pos=DF"
  },
  {
    "id": "wc_new_3",
    "name": "Francis De Vries",
    "position": "DF",
    "rating": 69,
    "club": "Auckland FC (NZL)",
    "nationality": "New Zealand",
    "basePrice": 1,
    "photo": "/api/player-image?name=Francis%20De%20Vries&nat=New%20Zealand&club=Auckland%20FC%20(NZL)&pos=DF"
  },
  {
    "id": "wc_new_4",
    "name": "Tyler Bindon",
    "position": "DF",
    "rating": 69,
    "club": "She",
    "nationality": "New Zealand",
    "basePrice": 3,
    "photo": "/api/player-image?name=Tyler%20Bindon&nat=New%20Zealand&club=She&pos=DF"
  },
  {
    "id": "wc_new_5",
    "name": "Michael Boxall",
    "position": "DF",
    "rating": 70,
    "club": "Minnesota United FC (USA)",
    "nationality": "New Zealand",
    "basePrice": 1,
    "photo": "/api/player-image?name=Michael%20Boxall&nat=New%20Zealand&club=Minnesota%20United%20FC%20(USA)&pos=DF"
  },
  {
    "id": "wc_new_6",
    "name": "Joe Bell",
    "position": "MF",
    "rating": 74,
    "club": "Viking Stavanger (NOR)",
    "nationality": "New Zealand",
    "basePrice": 5,
    "photo": "/api/player-image?name=Joe%20Bell&nat=New%20Zealand&club=Viking%20Stavanger%20(NOR)&pos=MF"
  },
  {
    "id": "wc_new_7",
    "name": "Logan Rogerson",
    "position": "FW",
    "rating": 64,
    "club": "Auckland FC (NZL)",
    "nationality": "New Zealand",
    "basePrice": 1,
    "photo": "/api/player-image?name=Logan%20Rogerson&nat=New%20Zealand&club=Auckland%20FC%20(NZL)&pos=FW"
  },
  {
    "id": "wc_new_8",
    "name": "Marko Stamenic",
    "position": "MF",
    "rating": 71,
    "club": "Swansea City AFC (WAL)",
    "nationality": "New Zealand",
    "basePrice": 4,
    "photo": "/api/player-image?name=Marko%20Stamenic&nat=New%20Zealand&club=Swansea%20City%20AFC%20(WAL)&pos=MF"
  },
  {
    "id": "wc_new_9",
    "name": "Chris Wood",
    "position": "FW",
    "rating": 82,
    "club": "Nottingham Forest FC (ENG)",
    "nationality": "New Zealand",
    "basePrice": 20,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Chris_Wood_%28cropped%29.jpg/330px-Chris_Wood_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_new_10",
    "name": "Sarpreet Singh",
    "position": "MF",
    "rating": 75,
    "club": "Wellington Phoenix FC (NZL)",
    "nationality": "New Zealand",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Sarpreet%20Singh&nat=New%20Zealand&club=Wellington%20Phoenix%20FC%20(NZL)&pos=MF"
  },
  {
    "id": "wc_new_11",
    "name": "Elijah Just",
    "position": "MF",
    "rating": 66,
    "club": "Motherwell FC (SCO)",
    "nationality": "New Zealand",
    "basePrice": 1,
    "photo": "/api/player-image?name=Elijah%20Just&nat=New%20Zealand&club=Motherwell%20FC%20(SCO)&pos=MF"
  },
  {
    "id": "wc_new_12",
    "name": "Alex Paulsen",
    "position": "GK",
    "rating": 71,
    "club": "Lechia Gdansk (POL)",
    "nationality": "New Zealand",
    "basePrice": 4,
    "photo": "/api/player-image?name=Alex%20Paulsen&nat=New%20Zealand&club=Lechia%20Gdansk%20(POL)&pos=GK"
  },
  {
    "id": "wc_new_13",
    "name": "Liberato Cacace",
    "position": "DF",
    "rating": 72,
    "club": "Wrexham AFC (WAL)",
    "nationality": "New Zealand",
    "basePrice": 3,
    "photo": "/api/player-image?name=Liberato%20Cacace&nat=New%20Zealand&club=Wrexham%20AFC%20(WAL)&pos=DF"
  },
  {
    "id": "wc_new_14",
    "name": "Alex Rufer",
    "position": "MF",
    "rating": 67,
    "club": "Wellington Phoenix FC (NZL)",
    "nationality": "New Zealand",
    "basePrice": 1,
    "photo": "/api/player-image?name=Alex%20Rufer&nat=New%20Zealand&club=Wellington%20Phoenix%20FC%20(NZL)&pos=MF"
  },
  {
    "id": "wc_new_15",
    "name": "Nando Pijnaker",
    "position": "DF",
    "rating": 67,
    "club": "Auckland FC (NZL)",
    "nationality": "New Zealand",
    "basePrice": 1,
    "photo": "/api/player-image?name=Nando%20Pijnaker&nat=New%20Zealand&club=Auckland%20FC%20(NZL)&pos=DF"
  },
  {
    "id": "wc_new_16",
    "name": "Finn Surman",
    "position": "DF",
    "rating": 68,
    "club": "Portland Timbers (USA)",
    "nationality": "New Zealand",
    "basePrice": 2,
    "photo": "/api/player-image?name=Finn%20Surman&nat=New%20Zealand&club=Portland%20Timbers%20(USA)&pos=DF"
  },
  {
    "id": "wc_new_17",
    "name": "Kosta Barbarouses",
    "position": "FW",
    "rating": 68,
    "club": "WS Wanderers FC (AUS)",
    "nationality": "New Zealand",
    "basePrice": 1,
    "photo": "/api/player-image?name=Kosta%20Barbarouses&nat=New%20Zealand&club=WS%20Wanderers%20FC%20(AUS)&pos=FW"
  },
  {
    "id": "wc_new_18",
    "name": "Ben Waine",
    "position": "FW",
    "rating": 62,
    "club": "Port Vale FC (ENG)",
    "nationality": "New Zealand",
    "basePrice": 1,
    "photo": "/api/player-image?name=Ben%20Waine&nat=New%20Zealand&club=Port%20Vale%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_new_19",
    "name": "Ben Old",
    "position": "MF",
    "rating": 68,
    "club": "AS Saint-Etienne (FRA)",
    "nationality": "New Zealand",
    "basePrice": 3,
    "photo": "/api/player-image?name=Ben%20Old&nat=New%20Zealand&club=AS%20Saint-Etienne%20(FRA)&pos=MF"
  },
  {
    "id": "wc_new_20",
    "name": "Mccowatt Callum",
    "position": "MF",
    "rating": 67,
    "club": "Silkeborg IF (DEN)",
    "nationality": "New Zealand",
    "basePrice": 1,
    "photo": "/api/player-image?name=Mccowatt%20Callum&nat=New%20Zealand&club=Silkeborg%20IF%20(DEN)&pos=MF"
  },
  {
    "id": "wc_new_21",
    "name": "Jesse Randall",
    "position": "FW",
    "rating": 60,
    "club": "Auckland FC (NZL)",
    "nationality": "New Zealand",
    "basePrice": 1,
    "photo": "/api/player-image?name=Jesse%20Randall&nat=New%20Zealand&club=Auckland%20FC%20(NZL)&pos=FW"
  },
  {
    "id": "wc_new_22",
    "name": "Michael Woud",
    "position": "GK",
    "rating": 60,
    "club": "Auckland FC (NZL)",
    "nationality": "New Zealand",
    "basePrice": 1,
    "photo": "/api/player-image?name=Michael%20Woud&nat=New%20Zealand&club=Auckland%20FC%20(NZL)&pos=GK"
  },
  {
    "id": "wc_new_23",
    "name": "Ryan Thomas",
    "position": "MF",
    "rating": 66,
    "club": "PEC Zwolle (NED)",
    "nationality": "New Zealand",
    "basePrice": 1,
    "photo": "/api/player-image?name=Ryan%20Thomas&nat=New%20Zealand&club=PEC%20Zwolle%20(NED)&pos=MF"
  },
  {
    "id": "wc_new_24",
    "name": "Callan Elliot",
    "position": "DF",
    "rating": 62,
    "club": "Auckland FC (NZL)",
    "nationality": "New Zealand",
    "basePrice": 1,
    "photo": "/api/player-image?name=Callan%20Elliot&nat=New%20Zealand&club=Auckland%20FC%20(NZL)&pos=DF"
  },
  {
    "id": "wc_new_25",
    "name": "Lachlan Bayliss",
    "position": "MF",
    "rating": 62,
    "club": "Newcastle United Jets FC (AUS)",
    "nationality": "New Zealand",
    "basePrice": 1,
    "photo": "/api/player-image?name=Lachlan%20Bayliss&nat=New%20Zealand&club=Newcastle%20United%20Jets%20FC%20(AUS)&pos=MF"
  },
  {
    "id": "wc_new_26",
    "name": "Tommy Smith",
    "position": "DF",
    "rating": 51,
    "club": "Braintree Town FC (ENG)",
    "nationality": "New Zealand",
    "basePrice": 1,
    "photo": "/api/player-image?name=Tommy%20Smith&nat=New%20Zealand&club=Braintree%20Town%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_nor_1",
    "name": "Orjan Nyland",
    "position": "GK",
    "rating": 76,
    "club": "Sevilla FC (ESP)",
    "nationality": "Norway",
    "basePrice": 1,
    "photo": "/api/player-image?name=Orjan%20Nyland&nat=Norway&club=Sevilla%20FC%20(ESP)&pos=GK"
  },
  {
    "id": "wc_nor_2",
    "name": "Morten Thorsby",
    "position": "MF",
    "rating": 72,
    "club": "US Cremonese (ITA)",
    "nationality": "Norway",
    "basePrice": 2,
    "photo": "/api/player-image?name=Morten%20Thorsby&nat=Norway&club=US%20Cremonese%20(ITA)&pos=MF"
  },
  {
    "id": "wc_nor_3",
    "name": "Kristoffer Ajer",
    "position": "DF",
    "rating": 75,
    "club": "Brentford FC (ENG)",
    "nationality": "Norway",
    "basePrice": 6,
    "photo": "/api/player-image?name=Kristoffer%20Ajer&nat=Norway&club=Brentford%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_nor_4",
    "name": "Leo Ostigard",
    "position": "DF",
    "rating": 73,
    "club": "Genoa CFC (ITA)",
    "nationality": "Norway",
    "basePrice": 6,
    "photo": "/api/player-image?name=Leo%20Ostigard&nat=Norway&club=Genoa%20CFC%20(ITA)&pos=DF"
  },
  {
    "id": "wc_nor_5",
    "name": "David Moller Wolfe",
    "position": "DF",
    "rating": 73,
    "club": "Wolverhampton Wanderers FC (ENG)",
    "nationality": "Norway",
    "basePrice": 4,
    "photo": "/api/player-image?name=David%20Moller%20Wolfe&nat=Norway&club=Wolverhampton%20Wanderers%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_nor_6",
    "name": "Patrick Berg",
    "position": "MF",
    "rating": 77,
    "club": "FK Bodø/Glimt (NOR)",
    "nationality": "Norway",
    "basePrice": 12,
    "photo": "/api/player-image?name=Patrick%20Berg&nat=Norway&club=FK%20Bod%C3%B8%2FGlimt%20(NOR)&pos=MF"
  },
  {
    "id": "wc_nor_7",
    "name": "Alexander Sorloth",
    "position": "FW",
    "rating": 84,
    "club": "Atlético De Madrid (ESP)",
    "nationality": "Norway",
    "basePrice": 42,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Alexander_Sorloth_France_v_Norway_26_June_26-048.jpg/330px-Alexander_Sorloth_France_v_Norway_26_June_26-048.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_nor_8",
    "name": "Sander Berge",
    "position": "MF",
    "rating": 79,
    "club": "Fulham FC (ENG)",
    "nationality": "Norway",
    "basePrice": 18,
    "photo": "/api/player-image?name=Sander%20Berge&nat=Norway&club=Fulham%20FC%20(ENG)&pos=MF"
  },
  {
    "id": "wc_nor_9",
    "name": "Erling Haaland",
    "position": "FW",
    "rating": 90,
    "club": "Manchester City FC (ENG)",
    "nationality": "Norway",
    "basePrice": 157,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Erling_Haaland_Morocco_v_Norway_7_June_2026-51.jpg/330px-Erling_Haaland_Morocco_v_Norway_7_June_2026-51.jpg"
  },
  {
    "id": "wc_nor_10",
    "name": "Martin Odegaard",
    "position": "MF",
    "rating": 87,
    "club": "Arsenal FC (ENG)",
    "nationality": "Norway",
    "basePrice": 98,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Martin_Odegaard_France_v_Norway_26_June_26-014.jpg/330px-Martin_Odegaard_France_v_Norway_26_June_26-014.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_nor_11",
    "name": "Jorgen Strand Larsen",
    "position": "FW",
    "rating": 78,
    "club": "Crystal Palace FC (ENG)",
    "nationality": "Norway",
    "basePrice": 21,
    "photo": "/api/player-image?name=Jorgen%20Strand%20Larsen&nat=Norway&club=Crystal%20Palace%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_nor_12",
    "name": "Sander Tangvik",
    "position": "GK",
    "rating": 69,
    "club": "Hamburger SV (GER)",
    "nationality": "Norway",
    "basePrice": 3,
    "photo": "/api/player-image?name=Sander%20Tangvik&nat=Norway&club=Hamburger%20SV%20(GER)&pos=GK"
  },
  {
    "id": "wc_nor_13",
    "name": "Egil Selvik",
    "position": "GK",
    "rating": 70,
    "club": "Watford FC (ENG)",
    "nationality": "Norway",
    "basePrice": 2,
    "photo": "/api/player-image?name=Egil%20Selvik&nat=Norway&club=Watford%20FC%20(ENG)&pos=GK"
  },
  {
    "id": "wc_nor_14",
    "name": "Fredrik Aursnes",
    "position": "MF",
    "rating": 80,
    "club": "SL Ben",
    "nationality": "Norway",
    "basePrice": 21,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Fredrik_Aursnes_France_v_Norway_26_June_26-148_%28cropped%29.jpg/330px-Fredrik_Aursnes_France_v_Norway_26_June_26-148_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_nor_15",
    "name": "Andre Bjorkan Fredrik",
    "position": "DF",
    "rating": 74,
    "club": "FK Bodø/Glimt (NOR)",
    "nationality": "Norway",
    "basePrice": 5,
    "photo": "/api/player-image?name=Andre%20Bjorkan%20Fredrik&nat=Norway&club=FK%20Bod%C3%B8%2FGlimt%20(NOR)&pos=DF"
  },
  {
    "id": "wc_nor_16",
    "name": "Marcus Holmgren Pedersen",
    "position": "DF",
    "rating": 72,
    "club": "Torino FC (ITA)",
    "nationality": "Norway",
    "basePrice": 3,
    "photo": "/api/player-image?name=Marcus%20Holmgren%20Pedersen&nat=Norway&club=Torino%20FC%20(ITA)&pos=DF"
  },
  {
    "id": "wc_nor_17",
    "name": "Torbjorn Heggem",
    "position": "DF",
    "rating": 73,
    "club": "Bologna FC (ITA)",
    "nationality": "Norway",
    "basePrice": 4,
    "photo": "/api/player-image?name=Torbjorn%20Heggem&nat=Norway&club=Bologna%20FC%20(ITA)&pos=DF"
  },
  {
    "id": "wc_nor_18",
    "name": "Kristian Thorstvedt",
    "position": "MF",
    "rating": 75,
    "club": "US Sassuolo (ITA)",
    "nationality": "Norway",
    "basePrice": 7,
    "photo": "/api/player-image?name=Kristian%20Thorstvedt&nat=Norway&club=US%20Sassuolo%20(ITA)&pos=MF"
  },
  {
    "id": "wc_nor_19",
    "name": "Thelo Aasgaard",
    "position": "MF",
    "rating": 68,
    "club": "Rangers FC (SCO)",
    "nationality": "Norway",
    "basePrice": 2,
    "photo": "/api/player-image?name=Thelo%20Aasgaard&nat=Norway&club=Rangers%20FC%20(SCO)&pos=MF"
  },
  {
    "id": "wc_nor_20",
    "name": "Antonio Nusa",
    "position": "FW",
    "rating": 76,
    "club": "RB Leipzig (GER)",
    "nationality": "Norway",
    "basePrice": 18,
    "photo": "/api/player-image?name=Antonio%20Nusa&nat=Norway&club=RB%20Leipzig%20(GER)&pos=FW"
  },
  {
    "id": "wc_nor_21",
    "name": "Andreas Schjelderup",
    "position": "MF",
    "rating": 75,
    "club": "SL Ben",
    "nationality": "Norway",
    "basePrice": 13,
    "photo": "/api/player-image?name=Andreas%20Schjelderup&nat=Norway&club=SL%20Ben&pos=MF"
  },
  {
    "id": "wc_nor_22",
    "name": "Oscar Bobb",
    "position": "MF",
    "rating": 72,
    "club": "Fulham FC (ENG)",
    "nationality": "Norway",
    "basePrice": 6,
    "photo": "/api/player-image?name=Oscar%20Bobb&nat=Norway&club=Fulham%20FC%20(ENG)&pos=MF"
  },
  {
    "id": "wc_nor_23",
    "name": "Petter Hauge Jens",
    "position": "MF",
    "rating": 74,
    "club": "FK Bodø/Glimt (NOR)",
    "nationality": "Norway",
    "basePrice": 6,
    "photo": "/api/player-image?name=Petter%20Hauge%20Jens&nat=Norway&club=FK%20Bod%C3%B8%2FGlimt%20(NOR)&pos=MF"
  },
  {
    "id": "wc_nor_24",
    "name": "Sondre Langas",
    "position": "DF",
    "rating": 71,
    "club": "Derby County FC (ENG)",
    "nationality": "Norway",
    "basePrice": 3,
    "photo": "/api/player-image?name=Sondre%20Langas&nat=Norway&club=Derby%20County%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_nor_25",
    "name": "Henrik Falchener",
    "position": "DF",
    "rating": 65,
    "club": "Viking Stavanger (NOR)",
    "nationality": "Norway",
    "basePrice": 2,
    "photo": "/api/player-image?name=Henrik%20Falchener&nat=Norway&club=Viking%20Stavanger%20(NOR)&pos=DF"
  },
  {
    "id": "wc_nor_26",
    "name": "Julian Ryerson",
    "position": "FW",
    "rating": 79,
    "club": "Borussia Dortmund (GER)",
    "nationality": "Norway",
    "basePrice": 19,
    "photo": "/api/player-image?name=Julian%20Ryerson&nat=Norway&club=Borussia%20Dortmund%20(GER)&pos=FW"
  },
  {
    "id": "wc_pan_1",
    "name": "Luis Mejia",
    "position": "GK",
    "rating": 72,
    "club": "Club Nacional (URU)",
    "nationality": "Panama",
    "basePrice": 1,
    "photo": "/api/player-image?name=Luis%20Mejia&nat=Panama&club=Club%20Nacional%20(URU)&pos=GK"
  },
  {
    "id": "wc_pan_2",
    "name": "Cesar Blackman",
    "position": "DF",
    "rating": 70,
    "club": "ŠK Slovan Bratislava (SVK)",
    "nationality": "Panama",
    "basePrice": 5,
    "photo": "/api/player-image?name=Cesar%20Blackman&nat=Panama&club=%C5%A0K%20Slovan%20Bratislava%20(SVK)&pos=DF"
  },
  {
    "id": "wc_pan_3",
    "name": "Jose Cordoba",
    "position": "DF",
    "rating": 68,
    "club": "Norwich City FC (ENG)",
    "nationality": "Panama",
    "basePrice": 2,
    "photo": "/api/player-image?name=Jose%20Cordoba&nat=Panama&club=Norwich%20City%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_pan_4",
    "name": "Fidel Escobar",
    "position": "DF",
    "rating": 70,
    "club": "Deportivo Saprissa (CRC)",
    "nationality": "Panama",
    "basePrice": 5,
    "photo": "/api/player-image?name=Fidel%20Escobar&nat=Panama&club=Deportivo%20Saprissa%20(CRC)&pos=DF"
  },
  {
    "id": "wc_pan_5",
    "name": "Edgardo Farina",
    "position": "DF",
    "rating": 75,
    "club": "FC Pari Nizhny Novgorod (RUS)",
    "nationality": "Panama",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Edgardo%20Farina&nat=Panama&club=FC%20Pari%20Nizhny%20Novgorod%20(RUS)&pos=DF"
  },
  {
    "id": "wc_pan_6",
    "name": "Cristian Martinez",
    "position": "MF",
    "rating": 75,
    "club": "Hapoel Kiryat Shmona FC (ISR)",
    "nationality": "Panama",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Cristian%20Martinez&nat=Panama&club=Hapoel%20Kiryat%20Shmona%20FC%20(ISR)&pos=MF"
  },
  {
    "id": "wc_pan_7",
    "name": "Luis Rodriguez Jose",
    "position": "MF",
    "rating": 75,
    "club": "FC Juárez (MEX)",
    "nationality": "Panama",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Luis%20Rodriguez%20Jose&nat=Panama&club=FC%20Ju%C3%A1rez%20(MEX)&pos=MF"
  },
  {
    "id": "wc_pan_8",
    "name": "Adalberto Carrasquilla",
    "position": "MF",
    "rating": 70,
    "club": "Pumas UNAM (MEX)",
    "nationality": "Panama",
    "basePrice": 5,
    "photo": "/api/player-image?name=Adalberto%20Carrasquilla&nat=Panama&club=Pumas%20UNAM%20(MEX)&pos=MF"
  },
  {
    "id": "wc_pan_9",
    "name": "Tomas Rodriguez",
    "position": "FW",
    "rating": 70,
    "club": "Deportivo Saprissa (CRC)",
    "nationality": "Panama",
    "basePrice": 5,
    "photo": "/api/player-image?name=Tomas%20Rodriguez&nat=Panama&club=Deportivo%20Saprissa%20(CRC)&pos=FW"
  },
  {
    "id": "wc_pan_10",
    "name": "Ismael Diaz",
    "position": "MF",
    "rating": 70,
    "club": "Club León (MEX)",
    "nationality": "Panama",
    "basePrice": 5,
    "photo": "/api/player-image?name=Ismael%20Diaz&nat=Panama&club=Club%20Le%C3%B3n%20(MEX)&pos=MF"
  },
  {
    "id": "wc_pan_11",
    "name": "Yoel Barcenas Edgar",
    "position": "MF",
    "rating": 75,
    "club": "Mazatlán FC (MEX)",
    "nationality": "Panama",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Yoel%20Barcenas%20Edgar&nat=Panama&club=Mazatl%C3%A1n%20FC%20(MEX)&pos=MF"
  },
  {
    "id": "wc_pan_12",
    "name": "Cesar Samudio",
    "position": "GK",
    "rating": 70,
    "club": "CD Marathón (HON)",
    "nationality": "Panama",
    "basePrice": 5,
    "photo": "/api/player-image?name=Cesar%20Samudio&nat=Panama&club=CD%20Marath%C3%B3n%20(HON)&pos=GK"
  },
  {
    "id": "wc_pan_13",
    "name": "Jiovany Ramos",
    "position": "DF",
    "rating": 70,
    "club": "Puerto Cabello CF (VEN)",
    "nationality": "Panama",
    "basePrice": 5,
    "photo": "/api/player-image?name=Jiovany%20Ramos&nat=Panama&club=Puerto%20Cabello%20CF%20(VEN)&pos=DF"
  },
  {
    "id": "wc_pan_14",
    "name": "Carlos Harvey",
    "position": "DF",
    "rating": 65,
    "club": "Minnesota United FC (USA)",
    "nationality": "Panama",
    "basePrice": 1,
    "photo": "/api/player-image?name=Carlos%20Harvey&nat=Panama&club=Minnesota%20United%20FC%20(USA)&pos=DF"
  },
  {
    "id": "wc_pan_15",
    "name": "Eric Davis",
    "position": "DF",
    "rating": 70,
    "club": "CD Plaza Amador (PAN)",
    "nationality": "Panama",
    "basePrice": 5,
    "photo": "/api/player-image?name=Eric%20Davis&nat=Panama&club=CD%20Plaza%20Amador%20(PAN)&pos=DF"
  },
  {
    "id": "wc_pan_16",
    "name": "Andres Andrade",
    "position": "DF",
    "rating": 69,
    "club": "LASK Linz (AUT)",
    "nationality": "Panama",
    "basePrice": 2,
    "photo": "/api/player-image?name=Andres%20Andrade&nat=Panama&club=LASK%20Linz%20(AUT)&pos=DF"
  },
  {
    "id": "wc_pan_17",
    "name": "Jose Fajardo",
    "position": "FW",
    "rating": 68,
    "club": "CD Universidad Católica (ECU)",
    "nationality": "Panama",
    "basePrice": 1,
    "photo": "/api/player-image?name=Jose%20Fajardo&nat=Panama&club=CD%20Universidad%20Cat%C3%B3lica%20(ECU)&pos=FW"
  },
  {
    "id": "wc_pan_18",
    "name": "Cecilio Waterman",
    "position": "FW",
    "rating": 70,
    "club": "CD Universidad De Concepción (CHI)",
    "nationality": "Panama",
    "basePrice": 5,
    "photo": "/api/player-image?name=Cecilio%20Waterman&nat=Panama&club=CD%20Universidad%20De%20Concepci%C3%B3n%20(CHI)&pos=FW"
  },
  {
    "id": "wc_pan_19",
    "name": "Alberto Quintero",
    "position": "MF",
    "rating": 70,
    "club": "CD Plaza Amador (PAN)",
    "nationality": "Panama",
    "basePrice": 5,
    "photo": "/api/player-image?name=Alberto%20Quintero&nat=Panama&club=CD%20Plaza%20Amador%20(PAN)&pos=MF"
  },
  {
    "id": "wc_pan_20",
    "name": "Anibal Godoy",
    "position": "MF",
    "rating": 70,
    "club": "San Diego FC (USA)",
    "nationality": "Panama",
    "basePrice": 1,
    "photo": "/api/player-image?name=Anibal%20Godoy&nat=Panama&club=San%20Diego%20FC%20(USA)&pos=MF"
  },
  {
    "id": "wc_pan_21",
    "name": "Cesar Yanis",
    "position": "MF",
    "rating": 70,
    "club": "CD Cobresal (CHI)",
    "nationality": "Panama",
    "basePrice": 5,
    "photo": "/api/player-image?name=Cesar%20Yanis&nat=Panama&club=CD%20Cobresal%20(CHI)&pos=MF"
  },
  {
    "id": "wc_pan_22",
    "name": "Orlando Mosquera",
    "position": "GK",
    "rating": 70,
    "club": "Al Fayha FC (KSA)",
    "nationality": "Panama",
    "basePrice": 1,
    "photo": "/api/player-image?name=Orlando%20Mosquera&nat=Panama&club=Al%20Fayha%20FC%20(KSA)&pos=GK"
  },
  {
    "id": "wc_pan_23",
    "name": "Amir Murillo",
    "position": "DF",
    "rating": 76,
    "club": "Beniktan JK (TUR)",
    "nationality": "Panama",
    "basePrice": 7,
    "photo": "/api/player-image?name=Amir%20Murillo&nat=Panama&club=Beniktan%20JK%20(TUR)&pos=DF"
  },
  {
    "id": "wc_pan_24",
    "name": "Azarias Londono",
    "position": "FW",
    "rating": 65,
    "club": "CD Universidad Católica (ECU)",
    "nationality": "Panama",
    "basePrice": 1,
    "photo": "/api/player-image?name=Azarias%20Londono&nat=Panama&club=CD%20Universidad%20Cat%C3%B3lica%20(ECU)&pos=FW"
  },
  {
    "id": "wc_pan_25",
    "name": "Roderick Miller",
    "position": "DF",
    "rating": 70,
    "club": "Turan Tovuz (AZE)",
    "nationality": "Panama",
    "basePrice": 5,
    "photo": "/api/player-image?name=Roderick%20Miller&nat=Panama&club=Turan%20Tovuz%20(AZE)&pos=DF"
  },
  {
    "id": "wc_pan_26",
    "name": "Jorge Gutierrez",
    "position": "DF",
    "rating": 70,
    "club": "Deportivo La Guaira (VEN)",
    "nationality": "Panama",
    "basePrice": 5,
    "photo": "/api/player-image?name=Jorge%20Gutierrez&nat=Panama&club=Deportivo%20La%20Guaira%20(VEN)&pos=DF"
  },
  {
    "id": "wc_par_1",
    "name": "Gatito Fernandez",
    "position": "GK",
    "rating": 70,
    "club": "Cerro Porteño (PAR)",
    "nationality": "Paraguay",
    "basePrice": 1,
    "photo": "/api/player-image?name=Gatito%20Fernandez&nat=Paraguay&club=Cerro%20Porte%C3%B1o%20(PAR)&pos=GK"
  },
  {
    "id": "wc_par_2",
    "name": "Gustavo Velazquez",
    "position": "DF",
    "rating": 73,
    "club": "Cerro Porteño (PAR)",
    "nationality": "Paraguay",
    "basePrice": 1,
    "photo": "/api/player-image?name=Gustavo%20Velazquez&nat=Paraguay&club=Cerro%20Porte%C3%B1o%20(PAR)&pos=DF"
  },
  {
    "id": "wc_par_3",
    "name": "Omar Alderete",
    "position": "DF",
    "rating": 78,
    "club": "Sunderland AFC (ENG)",
    "nationality": "Paraguay",
    "basePrice": 14,
    "photo": "/api/player-image?name=Omar%20Alderete&nat=Paraguay&club=Sunderland%20AFC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_par_4",
    "name": "Jose Caceres Juan",
    "position": "DF",
    "rating": 56,
    "club": "FC Dynamo Moscow (RUS)",
    "nationality": "Paraguay",
    "basePrice": 1,
    "photo": "/api/player-image?name=Jose%20Caceres%20Juan&nat=Paraguay&club=FC%20Dynamo%20Moscow%20(RUS)&pos=DF"
  },
  {
    "id": "wc_par_5",
    "name": "Fabian Balbuena",
    "position": "DF",
    "rating": 70,
    "club": "Grêmio FBPA (BRA)",
    "nationality": "Paraguay",
    "basePrice": 5,
    "photo": "/api/player-image?name=Fabian%20Balbuena&nat=Paraguay&club=Gr%C3%AAmio%20FBPA%20(BRA)&pos=DF"
  },
  {
    "id": "wc_par_6",
    "name": "Junior Alonso",
    "position": "DF",
    "rating": 60,
    "club": "Atlético Mineiro (BRA)",
    "nationality": "Paraguay",
    "basePrice": 1,
    "photo": "/api/player-image?name=Junior%20Alonso&nat=Paraguay&club=Atl%C3%A9tico%20Mineiro%20(BRA)&pos=DF"
  },
  {
    "id": "wc_par_7",
    "name": "Ramon Sosa",
    "position": "MF",
    "rating": 70,
    "club": "SE Palmeiras (BRA)",
    "nationality": "Paraguay",
    "basePrice": 5,
    "photo": "/api/player-image?name=Ramon%20Sosa&nat=Paraguay&club=SE%20Palmeiras%20(BRA)&pos=MF"
  },
  {
    "id": "wc_par_8",
    "name": "Diego Gomez",
    "position": "MF",
    "rating": 73,
    "club": "Brighton & Hove Albion FC (ENG)",
    "nationality": "Paraguay",
    "basePrice": 6,
    "photo": "/api/player-image?name=Diego%20Gomez&nat=Paraguay&club=Brighton%20%26%20Hove%20Albion%20FC%20(ENG)&pos=MF"
  },
  {
    "id": "wc_par_9",
    "name": "Antonio Sanabria",
    "position": "FW",
    "rating": 76,
    "club": "US Cremonese (ITA)",
    "nationality": "Paraguay",
    "basePrice": 8,
    "photo": "/api/player-image?name=Antonio%20Sanabria&nat=Paraguay&club=US%20Cremonese%20(ITA)&pos=FW"
  },
  {
    "id": "wc_par_10",
    "name": "Miguel Almiron",
    "position": "MF",
    "rating": 76,
    "club": "Atlanta United FC (USA)",
    "nationality": "Paraguay",
    "basePrice": 6,
    "photo": "/api/player-image?name=Miguel%20Almiron&nat=Paraguay&club=Atlanta%20United%20FC%20(USA)&pos=MF"
  },
  {
    "id": "wc_par_11",
    "name": "MAURICIO",
    "position": "MF",
    "rating": 70,
    "club": "SE Palmeiras (BRA)",
    "nationality": "Paraguay",
    "basePrice": 5,
    "photo": "/api/player-image?name=MAURICIO&nat=Paraguay&club=SE%20Palmeiras%20(BRA)&pos=MF"
  },
  {
    "id": "wc_par_12",
    "name": "Orlando Gill",
    "position": "GK",
    "rating": 65,
    "club": "CA San Lorenzo (ARG)",
    "nationality": "Paraguay",
    "basePrice": 1,
    "photo": "/api/player-image?name=Orlando%20Gill&nat=Paraguay&club=CA%20San%20Lorenzo%20(ARG)&pos=GK"
  },
  {
    "id": "wc_par_13",
    "name": "Jose Canale",
    "position": "DF",
    "rating": 69,
    "club": "CA Lanús (ARG)",
    "nationality": "Paraguay",
    "basePrice": 1,
    "photo": "/api/player-image?name=Jose%20Canale&nat=Paraguay&club=CA%20Lan%C3%BAs%20(ARG)&pos=DF"
  },
  {
    "id": "wc_par_14",
    "name": "Andres Cubas",
    "position": "MF",
    "rating": 74,
    "club": "Vancouver Whitecaps FC (CAN)",
    "nationality": "Paraguay",
    "basePrice": 4,
    "photo": "/api/player-image?name=Andres%20Cubas&nat=Paraguay&club=Vancouver%20Whitecaps%20FC%20(CAN)&pos=MF"
  },
  {
    "id": "wc_par_15",
    "name": "Gustavo Gomez",
    "position": "DF",
    "rating": 60,
    "club": "SE Palmeiras (BRA)",
    "nationality": "Paraguay",
    "basePrice": 1,
    "photo": "/api/player-image?name=Gustavo%20Gomez&nat=Paraguay&club=SE%20Palmeiras%20(BRA)&pos=DF"
  },
  {
    "id": "wc_par_16",
    "name": "Damian Bobadilla",
    "position": "MF",
    "rating": 71,
    "club": "São Paulo FC (BRA)",
    "nationality": "Paraguay",
    "basePrice": 2,
    "photo": "/api/player-image?name=Damian%20Bobadilla&nat=Paraguay&club=S%C3%A3o%20Paulo%20FC%20(BRA)&pos=MF"
  },
  {
    "id": "wc_par_17",
    "name": "Alejandro Romero Gamarra",
    "position": "FW",
    "rating": 79,
    "club": "Al Ain FC (UAE)",
    "nationality": "Paraguay",
    "basePrice": 17,
    "photo": "/api/player-image?name=Alejandro%20Romero%20Gamarra&nat=Paraguay&club=Al%20Ain%20FC%20(UAE)&pos=FW"
  },
  {
    "id": "wc_par_18",
    "name": "Alex Arce",
    "position": "FW",
    "rating": 75,
    "club": "CS Independiente Rivadavia (ARG)",
    "nationality": "Paraguay",
    "basePrice": 6,
    "photo": "/api/player-image?name=Alex%20Arce&nat=Paraguay&club=CS%20Independiente%20Rivadavia%20(ARG)&pos=FW"
  },
  {
    "id": "wc_par_19",
    "name": "Julio Enciso",
    "position": "FW",
    "rating": 73,
    "club": "RC Strasbourg (FRA)",
    "nationality": "Paraguay",
    "basePrice": 7,
    "photo": "/api/player-image?name=Julio%20Enciso&nat=Paraguay&club=RC%20Strasbourg%20(FRA)&pos=FW"
  },
  {
    "id": "wc_par_20",
    "name": "Braian Ojeda",
    "position": "MF",
    "rating": 70,
    "club": "Orlando City SC (USA)",
    "nationality": "Paraguay",
    "basePrice": 2,
    "photo": "/api/player-image?name=Braian%20Ojeda&nat=Paraguay&club=Orlando%20City%20SC%20(USA)&pos=MF"
  },
  {
    "id": "wc_par_21",
    "name": "Gabriel Avalos",
    "position": "FW",
    "rating": 75,
    "club": "CA Independiente (ARG)",
    "nationality": "Paraguay",
    "basePrice": 3,
    "photo": "/api/player-image?name=Gabriel%20Avalos&nat=Paraguay&club=CA%20Independiente%20(ARG)&pos=FW"
  },
  {
    "id": "wc_par_22",
    "name": "Gaston Olveira",
    "position": "GK",
    "rating": 74,
    "club": "Club Olimpia (PAR)",
    "nationality": "Paraguay",
    "basePrice": 2,
    "photo": "/api/player-image?name=Gaston%20Olveira&nat=Paraguay&club=Club%20Olimpia%20(PAR)&pos=GK"
  },
  {
    "id": "wc_par_23",
    "name": "Matias Galarza",
    "position": "MF",
    "rating": 73,
    "club": "Atlanta United FC (USA)",
    "nationality": "Paraguay",
    "basePrice": 6,
    "photo": "/api/player-image?name=Matias%20Galarza&nat=Paraguay&club=Atlanta%20United%20FC%20(USA)&pos=MF"
  },
  {
    "id": "wc_par_24",
    "name": "Gustavo Caballero",
    "position": "MF",
    "rating": 68,
    "club": "Portsmouth FC (ENG)",
    "nationality": "Paraguay",
    "basePrice": 1,
    "photo": "/api/player-image?name=Gustavo%20Caballero&nat=Paraguay&club=Portsmouth%20FC%20(ENG)&pos=MF"
  },
  {
    "id": "wc_par_25",
    "name": "Isidro Pitta",
    "position": "FW",
    "rating": 70,
    "club": "Red Bull Bragantino (BRA)",
    "nationality": "Paraguay",
    "basePrice": 5,
    "photo": "/api/player-image?name=Isidro%20Pitta&nat=Paraguay&club=Red%20Bull%20Bragantino%20(BRA)&pos=FW"
  },
  {
    "id": "wc_par_26",
    "name": "Alexandro Maidana",
    "position": "DF",
    "rating": 58,
    "club": "CA Talleres (ARG)",
    "nationality": "Paraguay",
    "basePrice": 1,
    "photo": "/api/player-image?name=Alexandro%20Maidana&nat=Paraguay&club=CA%20Talleres%20(ARG)&pos=DF"
  },
  {
    "id": "wc_por_1",
    "name": "Costa Diogo",
    "position": "GK",
    "rating": 84,
    "club": "FC Porto (POR)",
    "nationality": "Portugal",
    "basePrice": 50,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Diogo_Costa_Croatia_v_Portugal_2_July_2026-188_%28cropped%29.jpg/330px-Diogo_Costa_Croatia_v_Portugal_2_July_2026-188_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_por_2",
    "name": "Semedo Nelson",
    "position": "DF",
    "rating": 77,
    "club": "Fenerbahçe SK (TUR)",
    "nationality": "Portugal",
    "basePrice": 8,
    "photo": "/api/player-image?name=Semedo%20Nelson&nat=Portugal&club=Fenerbah%C3%A7e%20SK%20(TUR)&pos=DF"
  },
  {
    "id": "wc_por_3",
    "name": "Dias Ruben",
    "position": "DF",
    "rating": 86,
    "club": "Manchester City FC (ENG)",
    "nationality": "Portugal",
    "basePrice": 65,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Diogo_Costa_Ruben_Dias_Croatia_v_Portugal_2_July_2026-181_%28cropped%29.jpg/330px-Diogo_Costa_Ruben_Dias_Croatia_v_Portugal_2_July_2026-181_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_por_4",
    "name": "Araujo Tomas",
    "position": "DF",
    "rating": 78,
    "club": "SL Ben",
    "nationality": "Portugal",
    "basePrice": 29,
    "photo": "/api/player-image?name=Araujo%20Tomas&nat=Portugal&club=SL%20Ben&pos=DF"
  },
  {
    "id": "wc_por_5",
    "name": "Dalot Diogo",
    "position": "DF",
    "rating": 79,
    "club": "Manchester United FC (ENG)",
    "nationality": "Portugal",
    "basePrice": 20,
    "photo": "/api/player-image?name=Dalot%20Diogo&nat=Portugal&club=Manchester%20United%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_por_6",
    "name": "Nunes Matheus",
    "position": "MF",
    "rating": 79,
    "club": "Manchester City FC (ENG)",
    "nationality": "Portugal",
    "basePrice": 19,
    "photo": "/api/player-image?name=Nunes%20Matheus&nat=Portugal&club=Manchester%20City%20FC%20(ENG)&pos=MF"
  },
  {
    "id": "wc_por_8",
    "name": "Fernandes Bruno",
    "position": "MF",
    "rating": 87,
    "club": "Manchester United FC (ENG)",
    "nationality": "Portugal",
    "basePrice": 77,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Bruno_Fernandes_USMNT_v_Portugal_Mar_31_2026-27_%28cropped%29.jpg/330px-Bruno_Fernandes_USMNT_v_Portugal_Mar_31_2026-27_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_por_9",
    "name": "Ramos Goncalo",
    "position": "FW",
    "rating": 80,
    "club": "Paris Saint-Germain (FRA)",
    "nationality": "Portugal",
    "basePrice": 31,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Gon%C3%A7alo_Ramos_USMNT_v_Portugal_Mar_31_2026-32_%28cropped%29.jpg/330px-Gon%C3%A7alo_Ramos_USMNT_v_Portugal_Mar_31_2026-32_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_por_10",
    "name": "Silva Bernardo",
    "position": "MF",
    "rating": 84,
    "club": "Manchester City FC (ENG)",
    "nationality": "Portugal",
    "basePrice": 41,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Bernardo_Silva_Croatia_v_Portugal_2_July_2026-238.jpg/330px-Bernardo_Silva_Croatia_v_Portugal_2_July_2026-238.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_por_11",
    "name": "Felix Joao",
    "position": "FW",
    "rating": 79,
    "club": "Al Nassr FC (KSA)",
    "nationality": "Portugal",
    "basePrice": 23,
    "photo": "/api/player-image?name=Felix%20Joao&nat=Portugal&club=Al%20Nassr%20FC%20(KSA)&pos=FW"
  },
  {
    "id": "wc_por_12",
    "name": "Sa Jose",
    "position": "GK",
    "rating": 77,
    "club": "Wolverhampton Wanderers FC (ENG)",
    "nationality": "Portugal",
    "basePrice": 5,
    "photo": "/api/player-image?name=Sa%20Jose&nat=Portugal&club=Wolverhampton%20Wanderers%20FC%20(ENG)&pos=GK"
  },
  {
    "id": "wc_por_13",
    "name": "Veiga Renato",
    "position": "DF",
    "rating": 76,
    "club": "Villarreal CF (ESP)",
    "nationality": "Portugal",
    "basePrice": 16,
    "photo": "/api/player-image?name=Veiga%20Renato&nat=Portugal&club=Villarreal%20CF%20(ESP)&pos=DF"
  },
  {
    "id": "wc_por_14",
    "name": "Inacio Goncalo",
    "position": "DF",
    "rating": 81,
    "club": "Sporting CP (POR)",
    "nationality": "Portugal",
    "basePrice": 35,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Gon%C3%A7alo_In%C3%A1cio_USMNT_v_Portugal_Mar_31_2026-42_%28cropped%29.jpg/330px-Gon%C3%A7alo_In%C3%A1cio_USMNT_v_Portugal_Mar_31_2026-42_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_por_15",
    "name": "Neves Joao",
    "position": "MF",
    "rating": 85,
    "club": "Paris Saint-Germain (FRA)",
    "nationality": "Portugal",
    "basePrice": 80,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Joao_Neves_Croatia_v_Portugal_2_July_2026-102.jpg/330px-Joao_Neves_Croatia_v_Portugal_2_July_2026-102.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_por_16",
    "name": "Trincao Francisco",
    "position": "FW",
    "rating": 82,
    "club": "Sporting CP (POR)",
    "nationality": "Portugal",
    "basePrice": 38,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Francisco_Trinc%C3%A3o_USMNT_v_Portugal_Mar_31_2026-55_%28cropped%29.jpg/330px-Francisco_Trinc%C3%A3o_USMNT_v_Portugal_Mar_31_2026-55_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_por_17",
    "name": "Leao Rafael",
    "position": "FW",
    "rating": 84,
    "club": "AC Milan (ITA)",
    "nationality": "Portugal",
    "basePrice": 50,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/RafaelLe%C3%A3oPortugal23.jpg/330px-RafaelLe%C3%A3oPortugal23.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_por_18",
    "name": "Neto Pedro",
    "position": "FW",
    "rating": 80,
    "club": "Chelsea FC (ENG)",
    "nationality": "Portugal",
    "basePrice": 27,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Pedro_Neto_Croatia_v_Portugal_2_July_2026-113.jpg/330px-Pedro_Neto_Croatia_v_Portugal_2_July_2026-113.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_por_19",
    "name": "Guedes Goncalo",
    "position": "FW",
    "rating": 75,
    "club": "Real Sociedad (ESP)",
    "nationality": "Portugal",
    "basePrice": 6,
    "photo": "/api/player-image?name=Guedes%20Goncalo&nat=Portugal&club=Real%20Sociedad%20(ESP)&pos=FW"
  },
  {
    "id": "wc_por_20",
    "name": "Cancelo Joao",
    "position": "DF",
    "rating": 84,
    "club": "FC Barcelona (ESP)",
    "nationality": "Portugal",
    "basePrice": 31,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Joao_Cancelo_Croatia_v_Portugal_2_July_2026-002.jpg/330px-Joao_Cancelo_Croatia_v_Portugal_2_July_2026-002.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_por_21",
    "name": "Neves Ruben",
    "position": "MF",
    "rating": 84,
    "club": "Al Hilal SC (KSA)",
    "nationality": "Portugal",
    "basePrice": 41,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Ruben_Neves_USMNT_v_Portugal_Mar_31_2026-25.jpg/330px-Ruben_Neves_USMNT_v_Portugal_Mar_31_2026-25.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_por_22",
    "name": "Silva Rui",
    "position": "GK",
    "rating": 81,
    "club": "Sporting CP (POR)",
    "nationality": "Portugal",
    "basePrice": 14,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Rui_Silva_USMNT_v_Portugal_Mar_31_2026-14_%28cropped%29.jpg/330px-Rui_Silva_USMNT_v_Portugal_Mar_31_2026-14_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_por_23",
    "name": "VITINHA",
    "position": "MF",
    "rating": 89,
    "club": "Paris Saint-Germain (FRA)",
    "nationality": "Portugal",
    "basePrice": 129,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Vitinha_USMNT_v_Portugal_Mar_31_2026-50_%28cropped%29.jpg/330px-Vitinha_USMNT_v_Portugal_Mar_31_2026-50_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_por_24",
    "name": "Costa Samu",
    "position": "DF",
    "rating": 78,
    "club": "RCD Mallorca (ESP)",
    "nationality": "Portugal",
    "basePrice": 30,
    "photo": "/api/player-image?name=Costa%20Samu&nat=Portugal&club=RCD%20Mallorca%20(ESP)&pos=DF"
  },
  {
    "id": "wc_por_25",
    "name": "Mendes Nuno",
    "position": "DF",
    "rating": 86,
    "club": "Paris Saint-Germain (FRA)",
    "nationality": "Portugal",
    "basePrice": 86,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c0/Nuno_Mendes_Croatia_v_Portugal_2_July_2026-135_%28cropped%29.jpg/330px-Nuno_Mendes_Croatia_v_Portugal_2_July_2026-135_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_por_26",
    "name": "Conceicao Francisco",
    "position": "FW",
    "rating": 79,
    "club": "Juventus FC (ITA)",
    "nationality": "Portugal",
    "basePrice": 36,
    "photo": "/api/player-image?name=Conceicao%20Francisco&nat=Portugal&club=Juventus%20FC%20(ITA)&pos=FW"
  },
  {
    "id": "wc_sau_1",
    "name": "Alaqidi Nawaf",
    "position": "GK",
    "rating": 72,
    "club": "Al Nassr FC (KSA)",
    "nationality": "Saudi Arabia",
    "basePrice": 3,
    "photo": "/api/player-image?name=Alaqidi%20Nawaf&nat=Saudi%20Arabia&club=Al%20Nassr%20FC%20(KSA)&pos=GK"
  },
  {
    "id": "wc_sau_2",
    "name": "Majrashi Ali",
    "position": "DF",
    "rating": 70,
    "club": "Al Ahli FC (KSA)",
    "nationality": "Saudi Arabia",
    "basePrice": 2,
    "photo": "/api/player-image?name=Majrashi%20Ali&nat=Saudi%20Arabia&club=Al%20Ahli%20FC%20(KSA)&pos=DF"
  },
  {
    "id": "wc_sau_3",
    "name": "Lajami Ali",
    "position": "DF",
    "rating": 70,
    "club": "Al Hilal SC (KSA)",
    "nationality": "Saudi Arabia",
    "basePrice": 2,
    "photo": "/api/player-image?name=Lajami%20Ali&nat=Saudi%20Arabia&club=Al%20Hilal%20SC%20(KSA)&pos=DF"
  },
  {
    "id": "wc_sau_4",
    "name": "Alamri Abdulelah",
    "position": "DF",
    "rating": 70,
    "club": "Al Nassr FC (KSA)",
    "nationality": "Saudi Arabia",
    "basePrice": 2,
    "photo": "/api/player-image?name=Alamri%20Abdulelah&nat=Saudi%20Arabia&club=Al%20Nassr%20FC%20(KSA)&pos=DF"
  },
  {
    "id": "wc_sau_5",
    "name": "Altambakti Hassan",
    "position": "DF",
    "rating": 72,
    "club": "Al Hilal SC (KSA)",
    "nationality": "Saudi Arabia",
    "basePrice": 3,
    "photo": "/api/player-image?name=Altambakti%20Hassan&nat=Saudi%20Arabia&club=Al%20Hilal%20SC%20(KSA)&pos=DF"
  },
  {
    "id": "wc_sau_6",
    "name": "Aldawsari Nasser",
    "position": "MF",
    "rating": 68,
    "club": "Al Hilal SC (KSA)",
    "nationality": "Saudi Arabia",
    "basePrice": 2,
    "photo": "/api/player-image?name=Aldawsari%20Nasser&nat=Saudi%20Arabia&club=Al%20Hilal%20SC%20(KSA)&pos=MF"
  },
  {
    "id": "wc_sau_7",
    "name": "Aljuwayr Musab",
    "position": "MF",
    "rating": 75,
    "club": "Al Qadsiah FC (KSA)",
    "nationality": "Saudi Arabia",
    "basePrice": 12,
    "photo": "/api/player-image?name=Aljuwayr%20Musab&nat=Saudi%20Arabia&club=Al%20Qadsiah%20FC%20(KSA)&pos=MF"
  },
  {
    "id": "wc_sau_8",
    "name": "Yahya Aiman",
    "position": "FW",
    "rating": 68,
    "club": "Al Nassr FC (KSA)",
    "nationality": "Saudi Arabia",
    "basePrice": 2,
    "photo": "/api/player-image?name=Yahya%20Aiman&nat=Saudi%20Arabia&club=Al%20Nassr%20FC%20(KSA)&pos=FW"
  },
  {
    "id": "wc_sau_9",
    "name": "Albrikan Feras",
    "position": "FW",
    "rating": 75,
    "club": "Al Ahli FC (KSA)",
    "nationality": "Saudi Arabia",
    "basePrice": 8,
    "photo": "/api/player-image?name=Albrikan%20Feras&nat=Saudi%20Arabia&club=Al%20Ahli%20FC%20(KSA)&pos=FW"
  },
  {
    "id": "wc_sau_10",
    "name": "Aldawsari Salem",
    "position": "FW",
    "rating": 82,
    "club": "Al Hilal SC (KSA)",
    "nationality": "Saudi Arabia",
    "basePrice": 19,
    "photo": "/api/player-image?name=Aldawsari%20Salem&nat=Saudi%20Arabia&club=Al%20Hilal%20SC%20(KSA)&pos=FW"
  },
  {
    "id": "wc_sau_11",
    "name": "Alshehri Saleh",
    "position": "FW",
    "rating": 69,
    "club": "Al Ittihad (KSA)",
    "nationality": "Saudi Arabia",
    "basePrice": 1,
    "photo": "/api/player-image?name=Alshehri%20Saleh&nat=Saudi%20Arabia&club=Al%20Ittihad%20(KSA)&pos=FW"
  },
  {
    "id": "wc_sau_12",
    "name": "Abdulhamid Saud",
    "position": "DF",
    "rating": 75,
    "club": "RC Lens (FRA)",
    "nationality": "Saudi Arabia",
    "basePrice": 7,
    "photo": "/api/player-image?name=Abdulhamid%20Saud&nat=Saudi%20Arabia&club=RC%20Lens%20(FRA)&pos=DF"
  },
  {
    "id": "wc_sau_13",
    "name": "Washl Nawaf Bu",
    "position": "DF",
    "rating": 67,
    "club": "Al Nassr FC (KSA)",
    "nationality": "Saudi Arabia",
    "basePrice": 1,
    "photo": "/api/player-image?name=Washl%20Nawaf%20Bu&nat=Saudi%20Arabia&club=Al%20Nassr%20FC%20(KSA)&pos=DF"
  },
  {
    "id": "wc_sau_14",
    "name": "Kadish Hassan",
    "position": "DF",
    "rating": 71,
    "club": "Al Ittihad (KSA)",
    "nationality": "Saudi Arabia",
    "basePrice": 1,
    "photo": "/api/player-image?name=Kadish%20Hassan&nat=Saudi%20Arabia&club=Al%20Ittihad%20(KSA)&pos=DF"
  },
  {
    "id": "wc_sau_15",
    "name": "Alkhaibari Abdullah",
    "position": "MF",
    "rating": 68,
    "club": "Al Nassr FC (KSA)",
    "nationality": "Saudi Arabia",
    "basePrice": 1,
    "photo": "/api/player-image?name=Alkhaibari%20Abdullah&nat=Saudi%20Arabia&club=Al%20Nassr%20FC%20(KSA)&pos=MF"
  },
  {
    "id": "wc_sau_16",
    "name": "Aljohani Ziyad",
    "position": "MF",
    "rating": 67,
    "club": "Al Ahli FC (KSA)",
    "nationality": "Saudi Arabia",
    "basePrice": 2,
    "photo": "/api/player-image?name=Aljohani%20Ziyad&nat=Saudi%20Arabia&club=Al%20Ahli%20FC%20(KSA)&pos=MF"
  },
  {
    "id": "wc_sau_17",
    "name": "Alghannam Khalid",
    "position": "FW",
    "rating": 60,
    "club": "Al Ettifaq FC (KSA)",
    "nationality": "Saudi Arabia",
    "basePrice": 1,
    "photo": "/api/player-image?name=Alghannam%20Khalid&nat=Saudi%20Arabia&club=Al%20Ettifaq%20FC%20(KSA)&pos=FW"
  },
  {
    "id": "wc_sau_18",
    "name": "Alhajji Ala",
    "position": "MF",
    "rating": 63,
    "club": "Neom SC (KSA)",
    "nationality": "Saudi Arabia",
    "basePrice": 1,
    "photo": "/api/player-image?name=Alhajji%20Ala&nat=Saudi%20Arabia&club=Neom%20SC%20(KSA)&pos=MF"
  },
  {
    "id": "wc_sau_19",
    "name": "Alhamddan Abdullah",
    "position": "FW",
    "rating": 54,
    "club": "Al Nassr FC (KSA)",
    "nationality": "Saudi Arabia",
    "basePrice": 1,
    "photo": "/api/player-image?name=Alhamddan%20Abdullah&nat=Saudi%20Arabia&club=Al%20Nassr%20FC%20(KSA)&pos=FW"
  },
  {
    "id": "wc_sau_20",
    "name": "Mandash Sultan",
    "position": "FW",
    "rating": 67,
    "club": "Al Hilal SC (KSA)",
    "nationality": "Saudi Arabia",
    "basePrice": 1,
    "photo": "/api/player-image?name=Mandash%20Sultan&nat=Saudi%20Arabia&club=Al%20Hilal%20SC%20(KSA)&pos=FW"
  },
  {
    "id": "wc_sau_21",
    "name": "Alowais Mohammed",
    "position": "GK",
    "rating": 54,
    "club": "Al Ula Saudi FC (KSA)",
    "nationality": "Saudi Arabia",
    "basePrice": 1,
    "photo": "/api/player-image?name=Alowais%20Mohammed&nat=Saudi%20Arabia&club=Al%20Ula%20Saudi%20FC%20(KSA)&pos=GK"
  },
  {
    "id": "wc_sau_22",
    "name": "Alkassar Ahmed",
    "position": "GK",
    "rating": 63,
    "club": "Al Qadsiah FC (KSA)",
    "nationality": "Saudi Arabia",
    "basePrice": 1,
    "photo": "/api/player-image?name=Alkassar%20Ahmed&nat=Saudi%20Arabia&club=Al%20Qadsiah%20FC%20(KSA)&pos=GK"
  },
  {
    "id": "wc_sau_23",
    "name": "Kanno Mohamed",
    "position": "MF",
    "rating": 72,
    "club": "Al Hilal SC (KSA)",
    "nationality": "Saudi Arabia",
    "basePrice": 2,
    "photo": "/api/player-image?name=Kanno%20Mohamed&nat=Saudi%20Arabia&club=Al%20Hilal%20SC%20(KSA)&pos=MF"
  },
  {
    "id": "wc_sau_24",
    "name": "Alharbi Moteb",
    "position": "DF",
    "rating": 67,
    "club": "Al Hilal SC (KSA)",
    "nationality": "Saudi Arabia",
    "basePrice": 1,
    "photo": "/api/player-image?name=Alharbi%20Moteb&nat=Saudi%20Arabia&club=Al%20Hilal%20SC%20(KSA)&pos=DF"
  },
  {
    "id": "wc_sau_25",
    "name": "Thikri Jehad",
    "position": "DF",
    "rating": 66,
    "club": "Al Qadsiah FC (KSA)",
    "nationality": "Saudi Arabia",
    "basePrice": 2,
    "photo": "/api/player-image?name=Thikri%20Jehad&nat=Saudi%20Arabia&club=Al%20Qadsiah%20FC%20(KSA)&pos=DF"
  },
  {
    "id": "wc_sau_26",
    "name": "Alshamat Mohammed Abu",
    "position": "DF",
    "rating": 67,
    "club": "Al Qadsiah FC (KSA)",
    "nationality": "Saudi Arabia",
    "basePrice": 2,
    "photo": "/api/player-image?name=Alshamat%20Mohammed%20Abu&nat=Saudi%20Arabia&club=Al%20Qadsiah%20FC%20(KSA)&pos=DF"
  },
  {
    "id": "wc_sco_1",
    "name": "Angus Gunn",
    "position": "GK",
    "rating": 72,
    "club": "Nottingham Forest FC (ENG)",
    "nationality": "Scotland",
    "basePrice": 2,
    "photo": "/api/player-image?name=Angus%20Gunn&nat=Scotland&club=Nottingham%20Forest%20FC%20(ENG)&pos=GK"
  },
  {
    "id": "wc_sco_2",
    "name": "Aaron Hickey",
    "position": "DF",
    "rating": 74,
    "club": "Brentford FC (ENG)",
    "nationality": "Scotland",
    "basePrice": 6,
    "photo": "/api/player-image?name=Aaron%20Hickey&nat=Scotland&club=Brentford%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_sco_3",
    "name": "Andy Robertson",
    "position": "DF",
    "rating": 82,
    "club": "Liverpool FC (ENG)",
    "nationality": "Scotland",
    "basePrice": 22,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Andy_Robertson_Scotland_v_Bolivia_6_June_2026-43.jpg/330px-Andy_Robertson_Scotland_v_Bolivia_6_June_2026-43.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_sco_4",
    "name": "Mctominay Scott",
    "position": "MF",
    "rating": 85,
    "club": "SSC Napoli (ITA)",
    "nationality": "Scotland",
    "basePrice": 54,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Scott_McTominay_Scotland_v_Bolivia_6_June_2026-41.jpg/330px-Scott_McTominay_Scotland_v_Bolivia_6_June_2026-41.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_sco_5",
    "name": "Grant Hanley",
    "position": "DF",
    "rating": 70,
    "club": "Hibernian FC (SCO)",
    "nationality": "Scotland",
    "basePrice": 1,
    "photo": "/api/player-image?name=Grant%20Hanley&nat=Scotland&club=Hibernian%20FC%20(SCO)&pos=DF"
  },
  {
    "id": "wc_sco_6",
    "name": "Kieran Tierney",
    "position": "DF",
    "rating": 77,
    "club": "Celtic FC (SCO)",
    "nationality": "Scotland",
    "basePrice": 10,
    "photo": "/api/player-image?name=Kieran%20Tierney&nat=Scotland&club=Celtic%20FC%20(SCO)&pos=DF"
  },
  {
    "id": "wc_sco_7",
    "name": "Mcginn John",
    "position": "MF",
    "rating": 81,
    "club": "Aston Villa FC (ENG)",
    "nationality": "Scotland",
    "basePrice": 25,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/John_McGinn_Scotland_v_Bolivia_6_June_2026-2.jpg/330px-John_McGinn_Scotland_v_Bolivia_6_June_2026-2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_sco_8",
    "name": "Tyler Fletcher",
    "position": "MF",
    "rating": 75,
    "club": "Manchester United FC (ENG)",
    "nationality": "Scotland",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Tyler%20Fletcher&nat=Scotland&club=Manchester%20United%20FC%20(ENG)&pos=MF"
  },
  {
    "id": "wc_sco_9",
    "name": "Lyndon Dykes",
    "position": "FW",
    "rating": 68,
    "club": "Charlton Athletic FC (ENG)",
    "nationality": "Scotland",
    "basePrice": 1,
    "photo": "/api/player-image?name=Lyndon%20Dykes&nat=Scotland&club=Charlton%20Athletic%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_sco_10",
    "name": "Che Adams",
    "position": "FW",
    "rating": 77,
    "club": "Torino FC (ITA)",
    "nationality": "Scotland",
    "basePrice": 11,
    "photo": "/api/player-image?name=Che%20Adams&nat=Scotland&club=Torino%20FC%20(ITA)&pos=FW"
  },
  {
    "id": "wc_sco_11",
    "name": "Ryan Christie",
    "position": "MF",
    "rating": 79,
    "club": "AFC Bournemouth (ENG)",
    "nationality": "Scotland",
    "basePrice": 15,
    "photo": "/api/player-image?name=Ryan%20Christie&nat=Scotland&club=AFC%20Bournemouth%20(ENG)&pos=MF"
  },
  {
    "id": "wc_sco_12",
    "name": "Liam Kelly",
    "position": "GK",
    "rating": 67,
    "club": "Rangers FC (SCO)",
    "nationality": "Scotland",
    "basePrice": 1,
    "photo": "/api/player-image?name=Liam%20Kelly&nat=Scotland&club=Rangers%20FC%20(SCO)&pos=GK"
  },
  {
    "id": "wc_sco_13",
    "name": "Jack Hendry",
    "position": "DF",
    "rating": 74,
    "club": "Al Ettifaq FC (KSA)",
    "nationality": "Scotland",
    "basePrice": 4,
    "photo": "/api/player-image?name=Jack%20Hendry&nat=Scotland&club=Al%20Ettifaq%20FC%20(KSA)&pos=DF"
  },
  {
    "id": "wc_sco_14",
    "name": "Ross Stewart",
    "position": "FW",
    "rating": 71,
    "club": "Southampton FC (ENG)",
    "nationality": "Scotland",
    "basePrice": 2,
    "photo": "/api/player-image?name=Ross%20Stewart&nat=Scotland&club=Southampton%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_sco_15",
    "name": "John Souttar",
    "position": "DF",
    "rating": 73,
    "club": "Rangers FC (SCO)",
    "nationality": "Scotland",
    "basePrice": 3,
    "photo": "/api/player-image?name=John%20Souttar&nat=Scotland&club=Rangers%20FC%20(SCO)&pos=DF"
  },
  {
    "id": "wc_sco_16",
    "name": "Dominic Hyam",
    "position": "DF",
    "rating": 71,
    "club": "Wrexham AFC (WAL)",
    "nationality": "Scotland",
    "basePrice": 2,
    "photo": "/api/player-image?name=Dominic%20Hyam&nat=Scotland&club=Wrexham%20AFC%20(WAL)&pos=DF"
  },
  {
    "id": "wc_sco_17",
    "name": "Ben Gannon-Doak",
    "position": "FW",
    "rating": 71,
    "club": "AFC Bournemouth (ENG)",
    "nationality": "Scotland",
    "basePrice": 4,
    "photo": "/api/player-image?name=Ben%20Gannon-Doak&nat=Scotland&club=AFC%20Bournemouth%20(ENG)&pos=FW"
  },
  {
    "id": "wc_sco_18",
    "name": "George Hirst",
    "position": "FW",
    "rating": 72,
    "club": "Ipswich Town FC (ENG)",
    "nationality": "Scotland",
    "basePrice": 3,
    "photo": "/api/player-image?name=George%20Hirst&nat=Scotland&club=Ipswich%20Town%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_sco_19",
    "name": "Lewis Ferguson",
    "position": "MF",
    "rating": 78,
    "club": "Bologna FC (ITA)",
    "nationality": "Scotland",
    "basePrice": 19,
    "photo": "/api/player-image?name=Lewis%20Ferguson&nat=Scotland&club=Bologna%20FC%20(ITA)&pos=MF"
  },
  {
    "id": "wc_sco_20",
    "name": "Lawrence Shankland",
    "position": "FW",
    "rating": 73,
    "club": "Heart Of Midlothian FC (SCO)",
    "nationality": "Scotland",
    "basePrice": 3,
    "photo": "/api/player-image?name=Lawrence%20Shankland&nat=Scotland&club=Heart%20Of%20Midlothian%20FC%20(SCO)&pos=FW"
  },
  {
    "id": "wc_sco_21",
    "name": "Craig Gordon",
    "position": "GK",
    "rating": 67,
    "club": "Heart Of Midlothian FC (SCO)",
    "nationality": "Scotland",
    "basePrice": 1,
    "photo": "/api/player-image?name=Craig%20Gordon&nat=Scotland&club=Heart%20Of%20Midlothian%20FC%20(SCO)&pos=GK"
  },
  {
    "id": "wc_sco_22",
    "name": "Nathan Patterson",
    "position": "DF",
    "rating": 71,
    "club": "Everton FC (ENG)",
    "nationality": "Scotland",
    "basePrice": 3,
    "photo": "/api/player-image?name=Nathan%20Patterson&nat=Scotland&club=Everton%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_sco_23",
    "name": "Mclean Kenny",
    "position": "MF",
    "rating": 72,
    "club": "Norwich City FC (ENG)",
    "nationality": "Scotland",
    "basePrice": 1,
    "photo": "/api/player-image?name=Mclean%20Kenny&nat=Scotland&club=Norwich%20City%20FC%20(ENG)&pos=MF"
  },
  {
    "id": "wc_sco_24",
    "name": "Anthony Ralston",
    "position": "DF",
    "rating": 71,
    "club": "Celtic FC (SCO)",
    "nationality": "Scotland",
    "basePrice": 2,
    "photo": "/api/player-image?name=Anthony%20Ralston&nat=Scotland&club=Celtic%20FC%20(SCO)&pos=DF"
  },
  {
    "id": "wc_sco_25",
    "name": "Findlay Curtis",
    "position": "FW",
    "rating": 63,
    "club": "Kilmarnock FC (SCO)",
    "nationality": "Scotland",
    "basePrice": 2,
    "photo": "/api/player-image?name=Findlay%20Curtis&nat=Scotland&club=Kilmarnock%20FC%20(SCO)&pos=FW"
  },
  {
    "id": "wc_sco_26",
    "name": "Mckenna Scott",
    "position": "DF",
    "rating": 75,
    "club": "GNK Dinamo Zagreb (CRO)",
    "nationality": "Scotland",
    "basePrice": 6,
    "photo": "/api/player-image?name=Mckenna%20Scott&nat=Scotland&club=GNK%20Dinamo%20Zagreb%20(CRO)&pos=DF"
  },
  {
    "id": "wc_sen_1",
    "name": "Yehvann Diouf",
    "position": "GK",
    "rating": 78,
    "club": "OGC Nice (FRA)",
    "nationality": "Senegal",
    "basePrice": 17,
    "photo": "/api/player-image?name=Yehvann%20Diouf&nat=Senegal&club=OGC%20Nice%20(FRA)&pos=GK"
  },
  {
    "id": "wc_sen_2",
    "name": "Mamadou Sarr",
    "position": "DF",
    "rating": 76,
    "club": "Chelsea FC (ENG)",
    "nationality": "Senegal",
    "basePrice": 15,
    "photo": "/api/player-image?name=Mamadou%20Sarr&nat=Senegal&club=Chelsea%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_sen_3",
    "name": "Kalidou Koulibaly",
    "position": "DF",
    "rating": 82,
    "club": "Al Hilal SC (KSA)",
    "nationality": "Senegal",
    "basePrice": 10,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Kalidou_Koulibaly_France_v_Senegal_16_June_2026-370_%28cropped%29.jpg/330px-Kalidou_Koulibaly_France_v_Senegal_16_June_2026-370_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_sen_4",
    "name": "Abdoulaye Seck",
    "position": "DF",
    "rating": 55,
    "club": "Maccabi Haifa FC (ISR)",
    "nationality": "Senegal",
    "basePrice": 1,
    "photo": "/api/player-image?name=Abdoulaye%20Seck&nat=Senegal&club=Maccabi%20Haifa%20FC%20(ISR)&pos=DF"
  },
  {
    "id": "wc_sen_5",
    "name": "Gana Gueye Idrissa",
    "position": "MF",
    "rating": 79,
    "club": "Everton FC (ENG)",
    "nationality": "Senegal",
    "basePrice": 5,
    "photo": "/api/player-image?name=Gana%20Gueye%20Idrissa&nat=Senegal&club=Everton%20FC%20(ENG)&pos=MF"
  },
  {
    "id": "wc_sen_6",
    "name": "Pathe Ciss",
    "position": "MF",
    "rating": 77,
    "club": "Rayo Vallecano (ESP)",
    "nationality": "Senegal",
    "basePrice": 8,
    "photo": "/api/player-image?name=Pathe%20Ciss&nat=Senegal&club=Rayo%20Vallecano%20(ESP)&pos=MF"
  },
  {
    "id": "wc_sen_7",
    "name": "Assane Diao",
    "position": "FW",
    "rating": 76,
    "club": "Como (ITA)",
    "nationality": "Senegal",
    "basePrice": 16,
    "photo": "/api/player-image?name=Assane%20Diao&nat=Senegal&club=Como%20(ITA)&pos=FW"
  },
  {
    "id": "wc_sen_8",
    "name": "Lamine Camara",
    "position": "MF",
    "rating": 77,
    "club": "AS Monaco (FRA)",
    "nationality": "Senegal",
    "basePrice": 24,
    "photo": "/api/player-image?name=Lamine%20Camara&nat=Senegal&club=AS%20Monaco%20(FRA)&pos=MF"
  },
  {
    "id": "wc_sen_9",
    "name": "Bamba Dieng",
    "position": "FW",
    "rating": 71,
    "club": "FC Lorient (FRA)",
    "nationality": "Senegal",
    "basePrice": 3,
    "photo": "/api/player-image?name=Bamba%20Dieng&nat=Senegal&club=FC%20Lorient%20(FRA)&pos=FW"
  },
  {
    "id": "wc_sen_10",
    "name": "Sadio Mane",
    "position": "FW",
    "rating": 83,
    "club": "Al Nassr FC (KSA)",
    "nationality": "Senegal",
    "basePrice": 23,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Sadio_Mane_France_v_Senegal_16_June_2026-450.jpg/330px-Sadio_Mane_France_v_Senegal_16_June_2026-450.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_sen_11",
    "name": "Nicolas Jackson",
    "position": "FW",
    "rating": 80,
    "club": "FC Bayern München (GER)",
    "nationality": "Senegal",
    "basePrice": 31,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Nicolas_Jackson_France_v_Senegal_16_June_2026-369_%28cropped%29.jpg/330px-Nicolas_Jackson_France_v_Senegal_16_June_2026-369_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_sen_12",
    "name": "Cherif Ndiaye",
    "position": "FW",
    "rating": 70,
    "club": "Samsunspor (TUR)",
    "nationality": "Senegal",
    "basePrice": 2,
    "photo": "/api/player-image?name=Cherif%20Ndiaye&nat=Senegal&club=Samsunspor%20(TUR)&pos=FW"
  },
  {
    "id": "wc_sen_13",
    "name": "Iliman Ndiaye",
    "position": "FW",
    "rating": 79,
    "club": "Everton FC (ENG)",
    "nationality": "Senegal",
    "basePrice": 23,
    "photo": "/api/player-image?name=Iliman%20Ndiaye&nat=Senegal&club=Everton%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_sen_14",
    "name": "Ismail Jakobs",
    "position": "DF",
    "rating": 75,
    "club": "Galatasaray SK (TUR)",
    "nationality": "Senegal",
    "basePrice": 7,
    "photo": "/api/player-image?name=Ismail%20Jakobs&nat=Senegal&club=Galatasaray%20SK%20(TUR)&pos=DF"
  },
  {
    "id": "wc_sen_15",
    "name": "Krepin Diatta",
    "position": "DF",
    "rating": 74,
    "club": "AS Monaco (FRA)",
    "nationality": "Senegal",
    "basePrice": 5,
    "photo": "/api/player-image?name=Krepin%20Diatta&nat=Senegal&club=AS%20Monaco%20(FRA)&pos=DF"
  },
  {
    "id": "wc_sen_16",
    "name": "Edouard Mendy",
    "position": "GK",
    "rating": 80,
    "club": "Al Ahli FC (KSA)",
    "nationality": "Senegal",
    "basePrice": 7,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Edouard_Mendy_France_v_Senegal_16_June_2026-375_%28cropped%29.jpg/330px-Edouard_Mendy_France_v_Senegal_16_June_2026-375_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_sen_17",
    "name": "Matar Sarr Pape",
    "position": "MF",
    "rating": 79,
    "club": "Tottenham Hotspur FC (ENG)",
    "nationality": "Senegal",
    "basePrice": 27,
    "photo": "/api/player-image?name=Matar%20Sarr%20Pape&nat=Senegal&club=Tottenham%20Hotspur%20FC%20(ENG)&pos=MF"
  },
  {
    "id": "wc_sen_18",
    "name": "Ismaila Sarr",
    "position": "FW",
    "rating": 79,
    "club": "Crystal Palace FC (ENG)",
    "nationality": "Senegal",
    "basePrice": 19,
    "photo": "/api/player-image?name=Ismaila%20Sarr&nat=Senegal&club=Crystal%20Palace%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_sen_19",
    "name": "Moussa Niakhate",
    "position": "DF",
    "rating": 77,
    "club": "Olympique Lyonnais (FRA)",
    "nationality": "Senegal",
    "basePrice": 9,
    "photo": "/api/player-image?name=Moussa%20Niakhate&nat=Senegal&club=Olympique%20Lyonnais%20(FRA)&pos=DF"
  },
  {
    "id": "wc_sen_20",
    "name": "Ibrahim Mbaye",
    "position": "FW",
    "rating": 68,
    "club": "Paris Saint-Germain (FRA)",
    "nationality": "Senegal",
    "basePrice": 3,
    "photo": "/api/player-image?name=Ibrahim%20Mbaye&nat=Senegal&club=Paris%20Saint-Germain%20(FRA)&pos=FW"
  },
  {
    "id": "wc_sen_21",
    "name": "Habib Diarra",
    "position": "MF",
    "rating": 77,
    "club": "Sunderland AFC (ENG)",
    "nationality": "Senegal",
    "basePrice": 17,
    "photo": "/api/player-image?name=Habib%20Diarra&nat=Senegal&club=Sunderland%20AFC%20(ENG)&pos=MF"
  },
  {
    "id": "wc_sen_22",
    "name": "Sapoko Ndiaye Bara",
    "position": "MF",
    "rating": 63,
    "club": "FC Bayern München (GER)",
    "nationality": "Senegal",
    "basePrice": 1,
    "photo": "/api/player-image?name=Sapoko%20Ndiaye%20Bara&nat=Senegal&club=FC%20Bayern%20M%C3%BCnchen%20(GER)&pos=MF"
  },
  {
    "id": "wc_sen_23",
    "name": "Mory Diaw",
    "position": "GK",
    "rating": 70,
    "club": "Le Havre AC (FRA)",
    "nationality": "Senegal",
    "basePrice": 1,
    "photo": "/api/player-image?name=Mory%20Diaw&nat=Senegal&club=Le%20Havre%20AC%20(FRA)&pos=GK"
  },
  {
    "id": "wc_sen_24",
    "name": "Antoine Mendy",
    "position": "DF",
    "rating": 70,
    "club": "OGC Nice (FRA)",
    "nationality": "Senegal",
    "basePrice": 3,
    "photo": "/api/player-image?name=Antoine%20Mendy&nat=Senegal&club=OGC%20Nice%20(FRA)&pos=DF"
  },
  {
    "id": "wc_sen_25",
    "name": "Malick Diouf El Hadji",
    "position": "DF",
    "rating": 75,
    "club": "West Ham United FC (ENG)",
    "nationality": "Senegal",
    "basePrice": 11,
    "photo": "/api/player-image?name=Malick%20Diouf%20El%20Hadji&nat=Senegal&club=West%20Ham%20United%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_sen_26",
    "name": "Pape Gueye",
    "position": "MF",
    "rating": 78,
    "club": "Villarreal CF (ESP)",
    "nationality": "Senegal",
    "basePrice": 18,
    "photo": "/api/player-image?name=Pape%20Gueye&nat=Senegal&club=Villarreal%20CF%20(ESP)&pos=MF"
  },
  {
    "id": "wc_sou_1",
    "name": "Ronwen Williams",
    "position": "GK",
    "rating": 75,
    "club": "Mamelodi Sundowns FC (RSA)",
    "nationality": "South Africa",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Ronwen%20Williams&nat=South%20Africa&club=Mamelodi%20Sundowns%20FC%20(RSA)&pos=GK"
  },
  {
    "id": "wc_sou_2",
    "name": "Thabang Matuludi",
    "position": "DF",
    "rating": 75,
    "club": "Polokwane City FC (RSA)",
    "nationality": "South Africa",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Thabang%20Matuludi&nat=South%20Africa&club=Polokwane%20City%20FC%20(RSA)&pos=DF"
  },
  {
    "id": "wc_sou_3",
    "name": "Khulumani Ndamane",
    "position": "DF",
    "rating": 75,
    "club": "Mamelodi Sundowns FC (RSA)",
    "nationality": "South Africa",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Khulumani%20Ndamane&nat=South%20Africa&club=Mamelodi%20Sundowns%20FC%20(RSA)&pos=DF"
  },
  {
    "id": "wc_sou_4",
    "name": "Teboho Mokoena",
    "position": "MF",
    "rating": 75,
    "club": "Mamelodi Sundowns FC (RSA)",
    "nationality": "South Africa",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Teboho%20Mokoena&nat=South%20Africa&club=Mamelodi%20Sundowns%20FC%20(RSA)&pos=MF"
  },
  {
    "id": "wc_sou_5",
    "name": "Thalente Mbatha",
    "position": "MF",
    "rating": 75,
    "club": "Orlando Pirates FC (RSA)",
    "nationality": "South Africa",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Thalente%20Mbatha&nat=South%20Africa&club=Orlando%20Pirates%20FC%20(RSA)&pos=MF"
  },
  {
    "id": "wc_sou_6",
    "name": "Aubrey Modiba",
    "position": "DF",
    "rating": 75,
    "club": "Mamelodi Sundowns FC (RSA)",
    "nationality": "South Africa",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Aubrey%20Modiba&nat=South%20Africa&club=Mamelodi%20Sundowns%20FC%20(RSA)&pos=DF"
  },
  {
    "id": "wc_sou_7",
    "name": "Oswin Appollis",
    "position": "FW",
    "rating": 75,
    "club": "Orlando Pirates FC (RSA)",
    "nationality": "South Africa",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Oswin%20Appollis&nat=South%20Africa&club=Orlando%20Pirates%20FC%20(RSA)&pos=FW"
  },
  {
    "id": "wc_sou_8",
    "name": "Tshepang Moremi",
    "position": "FW",
    "rating": 75,
    "club": "Orlando Pirates FC (RSA)",
    "nationality": "South Africa",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Tshepang%20Moremi&nat=South%20Africa&club=Orlando%20Pirates%20FC%20(RSA)&pos=FW"
  },
  {
    "id": "wc_sou_9",
    "name": "Lyle Foster",
    "position": "FW",
    "rating": 72,
    "club": "Burnley FC (ENG)",
    "nationality": "South Africa",
    "basePrice": 4,
    "photo": "/api/player-image?name=Lyle%20Foster&nat=South%20Africa&club=Burnley%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_sou_10",
    "name": "Relebohile Mofokeng",
    "position": "FW",
    "rating": 75,
    "club": "Orlando Pirates FC (RSA)",
    "nationality": "South Africa",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Relebohile%20Mofokeng&nat=South%20Africa&club=Orlando%20Pirates%20FC%20(RSA)&pos=FW"
  },
  {
    "id": "wc_sou_11",
    "name": "Themba Zwane",
    "position": "MF",
    "rating": 75,
    "club": "Mamelodi Sundowns FC (RSA)",
    "nationality": "South Africa",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Themba%20Zwane&nat=South%20Africa&club=Mamelodi%20Sundowns%20FC%20(RSA)&pos=MF"
  },
  {
    "id": "wc_sou_12",
    "name": "Thapelo Maseko",
    "position": "FW",
    "rating": 70,
    "club": "AEL Limassol (CYP)",
    "nationality": "South Africa",
    "basePrice": 5,
    "photo": "/api/player-image?name=Thapelo%20Maseko&nat=South%20Africa&club=AEL%20Limassol%20(CYP)&pos=FW"
  },
  {
    "id": "wc_sou_13",
    "name": "Sphephelo Sithole",
    "position": "MF",
    "rating": 65,
    "club": "CD Tondela (POR)",
    "nationality": "South Africa",
    "basePrice": 1,
    "photo": "/api/player-image?name=Sphephelo%20Sithole&nat=South%20Africa&club=CD%20Tondela%20(POR)&pos=MF"
  },
  {
    "id": "wc_sou_14",
    "name": "Mbekezeli Mbokazi",
    "position": "DF",
    "rating": 75,
    "club": "Chicago Fire FC (USA)",
    "nationality": "South Africa",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Mbekezeli%20Mbokazi&nat=South%20Africa&club=Chicago%20Fire%20FC%20(USA)&pos=DF"
  },
  {
    "id": "wc_sou_15",
    "name": "Iqraam Rayners",
    "position": "FW",
    "rating": 75,
    "club": "Mamelodi Sundowns FC (RSA)",
    "nationality": "South Africa",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Iqraam%20Rayners&nat=South%20Africa&club=Mamelodi%20Sundowns%20FC%20(RSA)&pos=FW"
  },
  {
    "id": "wc_sou_16",
    "name": "Sipho Chaine",
    "position": "GK",
    "rating": 75,
    "club": "Orlando Pirates FC (RSA)",
    "nationality": "South Africa",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Sipho%20Chaine&nat=South%20Africa&club=Orlando%20Pirates%20FC%20(RSA)&pos=GK"
  },
  {
    "id": "wc_sou_17",
    "name": "Evidence Makgopa",
    "position": "FW",
    "rating": 75,
    "club": "Orlando Pirates FC (RSA)",
    "nationality": "South Africa",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Evidence%20Makgopa&nat=South%20Africa&club=Orlando%20Pirates%20FC%20(RSA)&pos=FW"
  },
  {
    "id": "wc_sou_18",
    "name": "Samukele Kabini",
    "position": "DF",
    "rating": 63,
    "club": "Molde FK (NOR)",
    "nationality": "South Africa",
    "basePrice": 1,
    "photo": "/api/player-image?name=Samukele%20Kabini&nat=South%20Africa&club=Molde%20FK%20(NOR)&pos=DF"
  },
  {
    "id": "wc_sou_19",
    "name": "Nkosinathi Sibisi",
    "position": "DF",
    "rating": 75,
    "club": "Orlando Pirates FC (RSA)",
    "nationality": "South Africa",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Nkosinathi%20Sibisi&nat=South%20Africa&club=Orlando%20Pirates%20FC%20(RSA)&pos=DF"
  },
  {
    "id": "wc_sou_20",
    "name": "Khuliso Mudau",
    "position": "DF",
    "rating": 75,
    "club": "Mamelodi Sundowns FC (RSA)",
    "nationality": "South Africa",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Khuliso%20Mudau&nat=South%20Africa&club=Mamelodi%20Sundowns%20FC%20(RSA)&pos=DF"
  },
  {
    "id": "wc_sou_21",
    "name": "Ime Okon",
    "position": "DF",
    "rating": 67,
    "club": "Hannover 96 (GER)",
    "nationality": "South Africa",
    "basePrice": 2,
    "photo": "/api/player-image?name=Ime%20Okon&nat=South%20Africa&club=Hannover%2096%20(GER)&pos=DF"
  },
  {
    "id": "wc_sou_22",
    "name": "Ricardo Goss",
    "position": "GK",
    "rating": 75,
    "club": "Siwelele FC (RSA)",
    "nationality": "South Africa",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Ricardo%20Goss&nat=South%20Africa&club=Siwelele%20FC%20(RSA)&pos=GK"
  },
  {
    "id": "wc_sou_23",
    "name": "Jayden Adams",
    "position": "MF",
    "rating": 75,
    "club": "Mamelodi Sundowns FC (RSA)",
    "nationality": "South Africa",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Jayden%20Adams&nat=South%20Africa&club=Mamelodi%20Sundowns%20FC%20(RSA)&pos=MF"
  },
  {
    "id": "wc_sou_24",
    "name": "Olwethu Makhanya",
    "position": "DF",
    "rating": 57,
    "club": "Philadelphia Union (USA)",
    "nationality": "South Africa",
    "basePrice": 1,
    "photo": "/api/player-image?name=Olwethu%20Makhanya&nat=South%20Africa&club=Philadelphia%20Union%20(USA)&pos=DF"
  },
  {
    "id": "wc_sou_25",
    "name": "Kamogelo Sebelebele",
    "position": "FW",
    "rating": 75,
    "club": "Orlando Pirates FC (RSA)",
    "nationality": "South Africa",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Kamogelo%20Sebelebele&nat=South%20Africa&club=Orlando%20Pirates%20FC%20(RSA)&pos=FW"
  },
  {
    "id": "wc_sou_26",
    "name": "Bradley Cross",
    "position": "DF",
    "rating": 75,
    "club": "Kaizer Chiefs FC (RSA)",
    "nationality": "South Africa",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Bradley%20Cross&nat=South%20Africa&club=Kaizer%20Chiefs%20FC%20(RSA)&pos=DF"
  },
  {
    "id": "wc_spa_1",
    "name": "David Raya",
    "position": "GK",
    "rating": 87,
    "club": "Arsenal FC (ENG)",
    "nationality": "Spain",
    "basePrice": 55,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/David_Raya_Argentina_v_Spain_19_July_2026-003_%28cropped%29.jpg/330px-David_Raya_Argentina_v_Spain_19_July_2026-003_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_spa_2",
    "name": "Marc Pubill",
    "position": "DF",
    "rating": 73,
    "club": "Atlético De Madrid (ESP)",
    "nationality": "Spain",
    "basePrice": 7,
    "photo": "/api/player-image?name=Marc%20Pubill&nat=Spain&club=Atl%C3%A9tico%20De%20Madrid%20(ESP)&pos=DF"
  },
  {
    "id": "wc_spa_3",
    "name": "Alex Grimaldo",
    "position": "DF",
    "rating": 84,
    "club": "Bayer 04 Leverkusen (GER)",
    "nationality": "Spain",
    "basePrice": 42,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Alex_Grimaldo_Argentina_v_Spain_19_July_2026-314.jpg/330px-Alex_Grimaldo_Argentina_v_Spain_19_July_2026-314.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_spa_4",
    "name": "Eric Garcia",
    "position": "DF",
    "rating": 79,
    "club": "FC Barcelona (ESP)",
    "nationality": "Spain",
    "basePrice": 24,
    "photo": "/api/player-image?name=Eric%20Garcia&nat=Spain&club=FC%20Barcelona%20(ESP)&pos=DF"
  },
  {
    "id": "wc_spa_5",
    "name": "Marcos Llorente",
    "position": "DF",
    "rating": 84,
    "club": "Atlético De Madrid (ESP)",
    "nationality": "Spain",
    "basePrice": 37,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Marcos_Llorente_France_v_Spain_7.24.26-020.jpg/330px-Marcos_Llorente_France_v_Spain_7.24.26-020.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_spa_6",
    "name": "Mikel Merino",
    "position": "MF",
    "rating": 83,
    "club": "Arsenal FC (ENG)",
    "nationality": "Spain",
    "basePrice": 36,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Mikel_Merino_France_v_Spain_7.24.26-241_%28cropped%29.jpg/330px-Mikel_Merino_France_v_Spain_7.24.26-241_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_spa_7",
    "name": "Ferran Torres",
    "position": "FW",
    "rating": 83,
    "club": "FC Barcelona (ESP)",
    "nationality": "Spain",
    "basePrice": 48,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Ferran_Torres_France_v_Spain_7.24.26-237_%28cropped%29.jpg/330px-Ferran_Torres_France_v_Spain_7.24.26-237_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_spa_8",
    "name": "Fabian Ruiz",
    "position": "MF",
    "rating": 85,
    "club": "Paris Saint-Germain (FRA)",
    "nationality": "Spain",
    "basePrice": 53,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Fabian_Ruiz_Argentina_v_Spain_19_July_2026-315.jpg/330px-Fabian_Ruiz_Argentina_v_Spain_19_July_2026-315.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_spa_9",
    "name": "GAVI",
    "position": "MF",
    "rating": 83,
    "club": "FC Barcelona (ESP)",
    "nationality": "Spain",
    "basePrice": 56,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Gavi_Argentina_v_Spain_19_July_2026-013.jpg/330px-Gavi_Argentina_v_Spain_19_July_2026-013.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_spa_10",
    "name": "Dani Olmo",
    "position": "FW",
    "rating": 85,
    "club": "FC Barcelona (ESP)",
    "nationality": "Spain",
    "basePrice": 62,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/Dani_Olmo_France_v_Spain_7.24.26-176_%28cropped%29.jpg/330px-Dani_Olmo_France_v_Spain_7.24.26-176_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_spa_11",
    "name": "Yeremy Pino",
    "position": "FW",
    "rating": 80,
    "club": "Crystal Palace FC (ENG)",
    "nationality": "Spain",
    "basePrice": 48,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Yeremy_Pino_Argentina_v_Spain_19_July_2026-019.jpg/330px-Yeremy_Pino_Argentina_v_Spain_19_July_2026-019.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_spa_12",
    "name": "Pedro Porro",
    "position": "DF",
    "rating": 82,
    "club": "Tottenham Hotspur FC (ENG)",
    "nationality": "Spain",
    "basePrice": 37,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Pedro_Porro_Argentina_v_Spain_19_July_2026-177_%28cropped%29.jpg/330px-Pedro_Porro_Argentina_v_Spain_19_July_2026-177_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_spa_13",
    "name": "Joan Garcia",
    "position": "GK",
    "rating": 83,
    "club": "FC Barcelona (ESP)",
    "nationality": "Spain",
    "basePrice": 47,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/P20260719DT-1994_President_Donald_J._Trump_and_First_Lady_Melania_Trump_attend_the_FIFA_World_Cup_Final_%28cropped%29.jpg/330px-P20260719DT-1994_President_Donald_J._Trump_and_First_Lady_Melania_Trump_attend_the_FIFA_World_Cup_Final_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_spa_14",
    "name": "Aymeric Laporte",
    "position": "DF",
    "rating": 82,
    "club": "Athletic Club (ESP)",
    "nationality": "Spain",
    "basePrice": 21,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Aymeric_Laporte_Argentina_v_Spain_19_July_2026-067_%28cropped%29.jpg/330px-Aymeric_Laporte_Argentina_v_Spain_19_July_2026-067_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_spa_15",
    "name": "Alex Baena",
    "position": "MF",
    "rating": 84,
    "club": "Atlético De Madrid (ESP)",
    "nationality": "Spain",
    "basePrice": 64,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Alex_Baena_France_v_Spain_7.24.26-024.jpg/330px-Alex_Baena_France_v_Spain_7.24.26-024.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_spa_16",
    "name": "RODRI",
    "position": "MF",
    "rating": 90,
    "club": "Manchester City FC (ENG)",
    "nationality": "Spain",
    "basePrice": 102,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Rodri_Argentina_v_Spain_19_July_2026-187_%28cropped%29.jpg/330px-Rodri_Argentina_v_Spain_19_July_2026-187_%28cropped%29.jpg"
  },
  {
    "id": "wc_spa_17",
    "name": "Nico Williams",
    "position": "FW",
    "rating": 86,
    "club": "Athletic Club (ESP)",
    "nationality": "Spain",
    "basePrice": 95,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Nico_Williams_Argentina_v_Spain_19_July_2026-196_%28cropped%29.jpg/330px-Nico_Williams_Argentina_v_Spain_19_July_2026-196_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_spa_18",
    "name": "Martin Zubimendi",
    "position": "MF",
    "rating": 83,
    "club": "Arsenal FC (ENG)",
    "nationality": "Spain",
    "basePrice": 46,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Martin_Zubimendi_Argentina_v_Spain_19_July_2026-012.jpg/330px-Martin_Zubimendi_Argentina_v_Spain_19_July_2026-012.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_spa_19",
    "name": "Lamine Yamal",
    "position": "FW",
    "rating": 89,
    "club": "FC Barcelona (ESP)",
    "nationality": "Spain",
    "basePrice": 147,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Lamine_Yamal_Spain_v_Croatia_15_June_2024.jpg/330px-Lamine_Yamal_Spain_v_Croatia_15_June_2024.jpg"
  },
  {
    "id": "wc_spa_20",
    "name": "PEDRI",
    "position": "MF",
    "rating": 89,
    "club": "FC Barcelona (ESP)",
    "nationality": "Spain",
    "basePrice": 150,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Pedri_France_v_Spain_7.24.26-245.jpg/330px-Pedri_France_v_Spain_7.24.26-245.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_spa_21",
    "name": "Mikel Oyarzabal",
    "position": "FW",
    "rating": 82,
    "club": "Real Sociedad (ESP)",
    "nationality": "Spain",
    "basePrice": 31,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/Mikel_Oyarzabal_France_v_Spain_7.24.26-161_%28cropped%29.jpg/330px-Mikel_Oyarzabal_France_v_Spain_7.24.26-161_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_spa_22",
    "name": "Pau Cubarsi",
    "position": "DF",
    "rating": 82,
    "club": "FC Barcelona (ESP)",
    "nationality": "Spain",
    "basePrice": 41,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Pau_Cubarsi_Argentina_v_Spain_19_July_2026-181_%28cropped%29.jpg/330px-Pau_Cubarsi_Argentina_v_Spain_19_July_2026-181_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_spa_23",
    "name": "Unai Simon",
    "position": "GK",
    "rating": 85,
    "club": "Athletic Club (ESP)",
    "nationality": "Spain",
    "basePrice": 43,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Unai_Simon_Argentina_v_Spain_19_July_2026-078_%28cropped%29.jpg/330px-Unai_Simon_Argentina_v_Spain_19_July_2026-078_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_spa_24",
    "name": "Marc Cucurella",
    "position": "DF",
    "rating": 84,
    "club": "Chelsea FC (ENG)",
    "nationality": "Spain",
    "basePrice": 46,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Marc_Cucurella_Argentina_v_Spain_19_July_2026-064_%28cropped%29.jpg/330px-Marc_Cucurella_Argentina_v_Spain_19_July_2026-064_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_spa_25",
    "name": "Victor Munoz",
    "position": "FW",
    "rating": 65,
    "club": "CA Osasuna (ESP)",
    "nationality": "Spain",
    "basePrice": 2,
    "photo": "/api/player-image?name=Victor%20Munoz&nat=Spain&club=CA%20Osasuna%20(ESP)&pos=FW"
  },
  {
    "id": "wc_spa_26",
    "name": "Borja Iglesias",
    "position": "FW",
    "rating": 80,
    "club": "RC Celta Vigo (ESP)",
    "nationality": "Spain",
    "basePrice": 17,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Borja_Iglesias_Argentina_v_Spain_19_July_2026-253_%28cropped%29.jpg/330px-Borja_Iglesias_Argentina_v_Spain_19_July_2026-253_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_swe_1",
    "name": "Jacob Widell Zetterstrom",
    "position": "GK",
    "rating": 71,
    "club": "Derby County FC (ENG)",
    "nationality": "Sweden",
    "basePrice": 2,
    "photo": "/api/player-image?name=Jacob%20Widell%20Zetterstrom&nat=Sweden&club=Derby%20County%20FC%20(ENG)&pos=GK"
  },
  {
    "id": "wc_swe_2",
    "name": "Gustaf Lagerbielke",
    "position": "DF",
    "rating": 71,
    "club": "SC Braga (POR)",
    "nationality": "Sweden",
    "basePrice": 2,
    "photo": "/api/player-image?name=Gustaf%20Lagerbielke&nat=Sweden&club=SC%20Braga%20(POR)&pos=DF"
  },
  {
    "id": "wc_swe_3",
    "name": "Victor Lindelof",
    "position": "DF",
    "rating": 75,
    "club": "Aston Villa FC (ENG)",
    "nationality": "Sweden",
    "basePrice": 5,
    "photo": "/api/player-image?name=Victor%20Lindelof&nat=Sweden&club=Aston%20Villa%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_swe_4",
    "name": "Isak Hien",
    "position": "DF",
    "rating": 78,
    "club": "Atalanta Bergamo (ITA)",
    "nationality": "Sweden",
    "basePrice": 17,
    "photo": "/api/player-image?name=Isak%20Hien&nat=Sweden&club=Atalanta%20Bergamo%20(ITA)&pos=DF"
  },
  {
    "id": "wc_swe_5",
    "name": "Gabriel Gudmundsson",
    "position": "DF",
    "rating": 77,
    "club": "Leeds United FC (ENG)",
    "nationality": "Sweden",
    "basePrice": 12,
    "photo": "/api/player-image?name=Gabriel%20Gudmundsson&nat=Sweden&club=Leeds%20United%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_swe_6",
    "name": "Herman Johansson",
    "position": "DF",
    "rating": 70,
    "club": "FC Dallas (USA)",
    "nationality": "Sweden",
    "basePrice": 2,
    "photo": "/api/player-image?name=Herman%20Johansson&nat=Sweden&club=FC%20Dallas%20(USA)&pos=DF"
  },
  {
    "id": "wc_swe_7",
    "name": "Lucas Bergvall",
    "position": "MF",
    "rating": 77,
    "club": "Tottenham Hotspur FC (ENG)",
    "nationality": "Sweden",
    "basePrice": 23,
    "photo": "/api/player-image?name=Lucas%20Bergvall&nat=Sweden&club=Tottenham%20Hotspur%20FC%20(ENG)&pos=MF"
  },
  {
    "id": "wc_swe_8",
    "name": "Daniel Svensson",
    "position": "DF",
    "rating": 77,
    "club": "Borussia Dortmund (GER)",
    "nationality": "Sweden",
    "basePrice": 15,
    "photo": "/api/player-image?name=Daniel%20Svensson&nat=Sweden&club=Borussia%20Dortmund%20(GER)&pos=DF"
  },
  {
    "id": "wc_swe_9",
    "name": "Alexander Isak",
    "position": "FW",
    "rating": 88,
    "club": "Liverpool FC (ENG)",
    "nationality": "Sweden",
    "basePrice": 111,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Alexander_Isak_-_Sweden_-_Greece21_%28cropped%29.jpg/330px-Alexander_Isak_-_Sweden_-_Greece21_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_swe_10",
    "name": "Benjamin Nygren",
    "position": "MF",
    "rating": 73,
    "club": "Celtic FC (SCO)",
    "nationality": "Sweden",
    "basePrice": 5,
    "photo": "/api/player-image?name=Benjamin%20Nygren&nat=Sweden&club=Celtic%20FC%20(SCO)&pos=MF"
  },
  {
    "id": "wc_swe_11",
    "name": "Anthony Elanga",
    "position": "FW",
    "rating": 81,
    "club": "Newcastle United FC (ENG)",
    "nationality": "Sweden",
    "basePrice": 35,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Anthony_Elanga_France_v_Sweden_6.30.26-040.jpg/330px-Anthony_Elanga_France_v_Sweden_6.30.26-040.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_swe_12",
    "name": "Viktor Johansson",
    "position": "GK",
    "rating": 74,
    "club": "Stoke City FC (ENG)",
    "nationality": "Sweden",
    "basePrice": 4,
    "photo": "/api/player-image?name=Viktor%20Johansson&nat=Sweden&club=Stoke%20City%20FC%20(ENG)&pos=GK"
  },
  {
    "id": "wc_swe_14",
    "name": "Hjalmar Ekdal",
    "position": "DF",
    "rating": 72,
    "club": "Burnley FC (ENG)",
    "nationality": "Sweden",
    "basePrice": 3,
    "photo": "/api/player-image?name=Hjalmar%20Ekdal&nat=Sweden&club=Burnley%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_swe_15",
    "name": "Carl Starfelt",
    "position": "DF",
    "rating": 78,
    "club": "RC Celta Vigo (ESP)",
    "nationality": "Sweden",
    "basePrice": 12,
    "photo": "/api/player-image?name=Carl%20Starfelt&nat=Sweden&club=RC%20Celta%20Vigo%20(ESP)&pos=DF"
  },
  {
    "id": "wc_swe_16",
    "name": "Jesper Karlstrom",
    "position": "MF",
    "rating": 75,
    "club": "Udinese (ITA)",
    "nationality": "Sweden",
    "basePrice": 5,
    "photo": "/api/player-image?name=Jesper%20Karlstrom&nat=Sweden&club=Udinese%20(ITA)&pos=MF"
  },
  {
    "id": "wc_swe_17",
    "name": "Viktor Gyokeres",
    "position": "FW",
    "rating": 87,
    "club": "Arsenal FC (ENG)",
    "nationality": "Sweden",
    "basePrice": 93,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Viktor_Gy%C3%B6keres_2026-06-04_1_%28cropped%29.jpg/330px-Viktor_Gy%C3%B6keres_2026-06-04_1_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_swe_18",
    "name": "Yasin Ayari",
    "position": "MF",
    "rating": 75,
    "club": "Brighton & Hove Albion FC (ENG)",
    "nationality": "Sweden",
    "basePrice": 12,
    "photo": "/api/player-image?name=Yasin%20Ayari&nat=Sweden&club=Brighton%20%26%20Hove%20Albion%20FC%20(ENG)&pos=MF"
  },
  {
    "id": "wc_swe_19",
    "name": "Mattias Svanberg",
    "position": "MF",
    "rating": 76,
    "club": "VfL Wolfsburg (GER)",
    "nationality": "Sweden",
    "basePrice": 10,
    "photo": "/api/player-image?name=Mattias%20Svanberg&nat=Sweden&club=VfL%20Wolfsburg%20(GER)&pos=MF"
  },
  {
    "id": "wc_swe_20",
    "name": "Eric Smith",
    "position": "DF",
    "rating": 75,
    "club": "FC St. Pauli (GER)",
    "nationality": "Sweden",
    "basePrice": 6,
    "photo": "/api/player-image?name=Eric%20Smith&nat=Sweden&club=FC%20St.%20Pauli%20(GER)&pos=DF"
  },
  {
    "id": "wc_swe_21",
    "name": "Alexander Bernhardsson",
    "position": "DF",
    "rating": 72,
    "club": "Holstein Kiel (GER)",
    "nationality": "Sweden",
    "basePrice": 3,
    "photo": "/api/player-image?name=Alexander%20Bernhardsson&nat=Sweden&club=Holstein%20Kiel%20(GER)&pos=DF"
  },
  {
    "id": "wc_swe_22",
    "name": "Besfort Zeneli",
    "position": "MF",
    "rating": 72,
    "club": "Royale Union Saint-Gilloise (BEL)",
    "nationality": "Sweden",
    "basePrice": 5,
    "photo": "/api/player-image?name=Besfort%20Zeneli&nat=Sweden&club=Royale%20Union%20Saint-Gilloise%20(BEL)&pos=MF"
  },
  {
    "id": "wc_swe_23",
    "name": "Kristoffer Nordfeldt",
    "position": "GK",
    "rating": 72,
    "club": "AIK Stockholm (SWE)",
    "nationality": "Sweden",
    "basePrice": 1,
    "photo": "/api/player-image?name=Kristoffer%20Nordfeldt&nat=Sweden&club=AIK%20Stockholm%20(SWE)&pos=GK"
  },
  {
    "id": "wc_swe_24",
    "name": "Elliot Stroud",
    "position": "DF",
    "rating": 71,
    "club": "Mjällby AIF (SWE)",
    "nationality": "Sweden",
    "basePrice": 3,
    "photo": "/api/player-image?name=Elliot%20Stroud&nat=Sweden&club=Mj%C3%A4llby%20AIF%20(SWE)&pos=DF"
  },
  {
    "id": "wc_swe_25",
    "name": "Gustaf Nilsson",
    "position": "FW",
    "rating": 75,
    "club": "Club Brugge (BEL)",
    "nationality": "Sweden",
    "basePrice": 6,
    "photo": "/api/player-image?name=Gustaf%20Nilsson&nat=Sweden&club=Club%20Brugge%20(BEL)&pos=FW"
  },
  {
    "id": "wc_swe_26",
    "name": "Taha Ali",
    "position": "FW",
    "rating": 68,
    "club": "Malmö FF (SWE)",
    "nationality": "Sweden",
    "basePrice": 1,
    "photo": "/api/player-image?name=Taha%20Ali&nat=Sweden&club=Malm%C3%B6%20FF%20(SWE)&pos=FW"
  },
  {
    "id": "wc_swi_1",
    "name": "Gregor Kobel",
    "position": "GK",
    "rating": 86,
    "club": "Borussia Dortmund (GER)",
    "nationality": "Switzerland",
    "basePrice": 67,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/2023-08-12_TSV_Schott_Mainz_gegen_Borussia_Dortmund_%28DFB-Pokal_2023-24%29_by_Sandro_Halank%E2%80%93090.jpg/330px-2023-08-12_TSV_Schott_Mainz_gegen_Borussia_Dortmund_%28DFB-Pokal_2023-24%29_by_Sandro_Halank%E2%80%93090.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_swi_2",
    "name": "Miro Muheim",
    "position": "DF",
    "rating": 75,
    "club": "Hamburger SV (GER)",
    "nationality": "Switzerland",
    "basePrice": 6,
    "photo": "/api/player-image?name=Miro%20Muheim&nat=Switzerland&club=Hamburger%20SV%20(GER)&pos=DF"
  },
  {
    "id": "wc_swi_3",
    "name": "Silvan Widmer",
    "position": "DF",
    "rating": 72,
    "club": "1. FSV Mainz 05 (GER)",
    "nationality": "Switzerland",
    "basePrice": 2,
    "photo": "/api/player-image?name=Silvan%20Widmer&nat=Switzerland&club=1.%20FSV%20Mainz%2005%20(GER)&pos=DF"
  },
  {
    "id": "wc_swi_4",
    "name": "Nico Elvedi",
    "position": "DF",
    "rating": 77,
    "club": "Borussia Mönchengladbach (GER)",
    "nationality": "Switzerland",
    "basePrice": 9,
    "photo": "/api/player-image?name=Nico%20Elvedi&nat=Switzerland&club=Borussia%20M%C3%B6nchengladbach%20(GER)&pos=DF"
  },
  {
    "id": "wc_swi_5",
    "name": "Manuel Akanji",
    "position": "DF",
    "rating": 82,
    "club": "FC Internazionale Milano (ITA)",
    "nationality": "Switzerland",
    "basePrice": 26,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/2023-10-04_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2792_%28Manuel_Akanji%29.jpg/330px-2023-10-04_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2792_%28Manuel_Akanji%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_swi_6",
    "name": "Denis Zakaria",
    "position": "MF",
    "rating": 82,
    "club": "AS Monaco (FRA)",
    "nationality": "Switzerland",
    "basePrice": 30,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Zakaria_asse_asm_2425_%28cropped%29.png/330px-Zakaria_asse_asm_2425_%28cropped%29.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_swi_7",
    "name": "Breel Embolo",
    "position": "FW",
    "rating": 77,
    "club": "Stade Rennais FC (FRA)",
    "nationality": "Switzerland",
    "basePrice": 11,
    "photo": "/api/player-image?name=Breel%20Embolo&nat=Switzerland&club=Stade%20Rennais%20FC%20(FRA)&pos=FW"
  },
  {
    "id": "wc_swi_8",
    "name": "Remo Freuler",
    "position": "MF",
    "rating": 81,
    "club": "Bologna FC (ITA)",
    "nationality": "Switzerland",
    "basePrice": 13,
    "photo": "https://upload.wikimedia.org/wikipedia/commons/c/c6/RemoFreuler.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
  },
  {
    "id": "wc_swi_9",
    "name": "Johan Manzambi",
    "position": "MF",
    "rating": 67,
    "club": "SC Freiburg (GER)",
    "nationality": "Switzerland",
    "basePrice": 3,
    "photo": "/api/player-image?name=Johan%20Manzambi&nat=Switzerland&club=SC%20Freiburg%20(GER)&pos=MF"
  },
  {
    "id": "wc_swi_10",
    "name": "Granit Xhaka",
    "position": "MF",
    "rating": 85,
    "club": "Sunderland AFC (ENG)",
    "nationality": "Switzerland",
    "basePrice": 36,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Granit_Xhaka_%28cropped%29.jpg/330px-Granit_Xhaka_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_swi_11",
    "name": "Dan Ndoye",
    "position": "FW",
    "rating": 79,
    "club": "Nottingham Forest FC (ENG)",
    "nationality": "Switzerland",
    "basePrice": 24,
    "photo": "/api/player-image?name=Dan%20Ndoye&nat=Switzerland&club=Nottingham%20Forest%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_swi_12",
    "name": "Yvon Mvogo",
    "position": "GK",
    "rating": 76,
    "club": "FC Lorient (FRA)",
    "nationality": "Switzerland",
    "basePrice": 4,
    "photo": "/api/player-image?name=Yvon%20Mvogo&nat=Switzerland&club=FC%20Lorient%20(FRA)&pos=GK"
  },
  {
    "id": "wc_swi_13",
    "name": "Ricardo Rodriguez",
    "position": "DF",
    "rating": 74,
    "club": "Real Betis (ESP)",
    "nationality": "Switzerland",
    "basePrice": 3,
    "photo": "/api/player-image?name=Ricardo%20Rodriguez&nat=Switzerland&club=Real%20Betis%20(ESP)&pos=DF"
  },
  {
    "id": "wc_swi_14",
    "name": "Ardon Jashari",
    "position": "MF",
    "rating": 77,
    "club": "AC Milan (ITA)",
    "nationality": "Switzerland",
    "basePrice": 23,
    "photo": "/api/player-image?name=Ardon%20Jashari&nat=Switzerland&club=AC%20Milan%20(ITA)&pos=MF"
  },
  {
    "id": "wc_swi_15",
    "name": "Djibril Sow",
    "position": "MF",
    "rating": 76,
    "club": "Sevilla FC (ESP)",
    "nationality": "Switzerland",
    "basePrice": 8,
    "photo": "/api/player-image?name=Djibril%20Sow&nat=Switzerland&club=Sevilla%20FC%20(ESP)&pos=MF"
  },
  {
    "id": "wc_swi_16",
    "name": "Christian Fassnacht",
    "position": "FW",
    "rating": 72,
    "club": "BSC Young Boys (SUI)",
    "nationality": "Switzerland",
    "basePrice": 2,
    "photo": "/api/player-image?name=Christian%20Fassnacht&nat=Switzerland&club=BSC%20Young%20Boys%20(SUI)&pos=FW"
  },
  {
    "id": "wc_swi_17",
    "name": "Ruben Vargas",
    "position": "FW",
    "rating": 75,
    "club": "Sevilla FC (ESP)",
    "nationality": "Switzerland",
    "basePrice": 6,
    "photo": "/api/player-image?name=Ruben%20Vargas&nat=Switzerland&club=Sevilla%20FC%20(ESP)&pos=FW"
  },
  {
    "id": "wc_swi_18",
    "name": "Eray Coemert",
    "position": "DF",
    "rating": 72,
    "club": "Valencia CF (ESP)",
    "nationality": "Switzerland",
    "basePrice": 3,
    "photo": "/api/player-image?name=Eray%20Coemert&nat=Switzerland&club=Valencia%20CF%20(ESP)&pos=DF"
  },
  {
    "id": "wc_swi_19",
    "name": "Noah Okafor",
    "position": "FW",
    "rating": 76,
    "club": "Leeds United FC (ENG)",
    "nationality": "Switzerland",
    "basePrice": 10,
    "photo": "/api/player-image?name=Noah%20Okafor&nat=Switzerland&club=Leeds%20United%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_swi_20",
    "name": "Michel Aebischer",
    "position": "MF",
    "rating": 74,
    "club": "Pisa SC (ITA)",
    "nationality": "Switzerland",
    "basePrice": 4,
    "photo": "/api/player-image?name=Michel%20Aebischer&nat=Switzerland&club=Pisa%20SC%20(ITA)&pos=MF"
  },
  {
    "id": "wc_swi_21",
    "name": "Marvin Keller",
    "position": "GK",
    "rating": 72,
    "club": "BSC Young Boys (SUI)",
    "nationality": "Switzerland",
    "basePrice": 5,
    "photo": "/api/player-image?name=Marvin%20Keller&nat=Switzerland&club=BSC%20Young%20Boys%20(SUI)&pos=GK"
  },
  {
    "id": "wc_swi_22",
    "name": "Fabian Rieder",
    "position": "MF",
    "rating": 74,
    "club": "FC Augsburg (GER)",
    "nationality": "Switzerland",
    "basePrice": 10,
    "photo": "/api/player-image?name=Fabian%20Rieder&nat=Switzerland&club=FC%20Augsburg%20(GER)&pos=MF"
  },
  {
    "id": "wc_swi_23",
    "name": "Zeki Amdouni",
    "position": "FW",
    "rating": 75,
    "club": "Burnley FC (ENG)",
    "nationality": "Switzerland",
    "basePrice": 9,
    "photo": "/api/player-image?name=Zeki%20Amdouni&nat=Switzerland&club=Burnley%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_swi_24",
    "name": "Aurele Amenda",
    "position": "DF",
    "rating": 71,
    "club": "Eintracht Frankfurt (GER)",
    "nationality": "Switzerland",
    "basePrice": 4,
    "photo": "/api/player-image?name=Aurele%20Amenda&nat=Switzerland&club=Eintracht%20Frankfurt%20(GER)&pos=DF"
  },
  {
    "id": "wc_swi_25",
    "name": "Luca Jaquez",
    "position": "DF",
    "rating": 69,
    "club": "VfB Stuttgart (GER)",
    "nationality": "Switzerland",
    "basePrice": 3,
    "photo": "/api/player-image?name=Luca%20Jaquez&nat=Switzerland&club=VfB%20Stuttgart%20(GER)&pos=DF"
  },
  {
    "id": "wc_swi_26",
    "name": "Cedric Itten",
    "position": "FW",
    "rating": 70,
    "club": "Fortuna Düsseldorf (GER)",
    "nationality": "Switzerland",
    "basePrice": 2,
    "photo": "/api/player-image?name=Cedric%20Itten&nat=Switzerland&club=Fortuna%20D%C3%BCsseldorf%20(GER)&pos=FW"
  },
  {
    "id": "wc_unk_1",
    "name": "Mert Gunok",
    "position": "GK",
    "rating": 78,
    "club": "Fenerbahçe SK (TUR)",
    "nationality": "Unknown",
    "basePrice": 2,
    "photo": "/api/player-image?name=Mert%20Gunok&nat=Unknown&club=Fenerbah%C3%A7e%20SK%20(TUR)&pos=GK"
  },
  {
    "id": "wc_unk_2",
    "name": "Zeki Celik",
    "position": "DF",
    "rating": 76,
    "club": "AS Roma (ITA)",
    "nationality": "Unknown",
    "basePrice": 7,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Ousmane_Diomand%C3%A9_Cote_D%27Ivoire_v_Ecuador_14_June_2026-58.jpg/330px-Ousmane_Diomand%C3%A9_Cote_D%27Ivoire_v_Ecuador_14_June_2026-58.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_unk_3",
    "name": "Merih Demiral",
    "position": "DF",
    "rating": 78,
    "club": "Al Ahli FC (KSA)",
    "nationality": "Unknown",
    "basePrice": 16,
    "photo": "/api/player-image?name=Merih%20Demiral&nat=Unknown&club=Al%20Ahli%20FC%20(KSA)&pos=DF"
  },
  {
    "id": "wc_unk_4",
    "name": "Caglar Soyuncu",
    "position": "DF",
    "rating": 77,
    "club": "Fenerbahçe SK (TUR)",
    "nationality": "Unknown",
    "basePrice": 10,
    "photo": "/api/player-image?name=Caglar%20Soyuncu&nat=Unknown&club=Fenerbah%C3%A7e%20SK%20(TUR)&pos=DF"
  },
  {
    "id": "wc_unk_5",
    "name": "Salih Ozcan",
    "position": "MF",
    "rating": 75,
    "club": "Borussia Dortmund (GER)",
    "nationality": "Unknown",
    "basePrice": 6,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Wilfried_Singo_Cote_D%27Ivoire_v_Ecuador_14_June_2026-18.jpg/330px-Wilfried_Singo_Cote_D%27Ivoire_v_Ecuador_14_June_2026-18.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_unk_6",
    "name": "Orkun Kokcu",
    "position": "MF",
    "rating": 82,
    "club": "Beniktan JK (TUR)",
    "nationality": "Unknown",
    "basePrice": 44,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Orkun_K%C3%B6k%C3%A7%C3%BC_20260121_%282%29_-_cropped_version.jpg/330px-Orkun_K%C3%B6k%C3%A7%C3%BC_20260121_%282%29_-_cropped_version.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_unk_7",
    "name": "Kerem Akturkoglu",
    "position": "FW",
    "rating": 80,
    "club": "Fenerbahçe SK (TUR)",
    "nationality": "Unknown",
    "basePrice": 25,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Odilon_Kossounou_Cote_D%27Ivoire_v_Ecuador_14_June_2026-57.jpg/330px-Odilon_Kossounou_Cote_D%27Ivoire_v_Ecuador_14_June_2026-57.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_unk_8",
    "name": "Arda Guler",
    "position": "FW",
    "rating": 81,
    "club": "Real Madrid C. F. (ESP)",
    "nationality": "Unknown",
    "basePrice": 57,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Franck_Kessie_Cote_D%27Ivoire_v_Ecuador_14_June_2026-15_%28cropped%29.jpg/330px-Franck_Kessie_Cote_D%27Ivoire_v_Ecuador_14_June_2026-15_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_unk_9",
    "name": "Deniz Gul",
    "position": "FW",
    "rating": 66,
    "club": "FC Porto (POR)",
    "nationality": "Unknown",
    "basePrice": 2,
    "photo": "/api/player-image?name=Deniz%20Gul&nat=Unknown&club=FC%20Porto%20(POR)&pos=FW"
  },
  {
    "id": "wc_unk_10",
    "name": "Hakan Calhanoglu",
    "position": "MF",
    "rating": 86,
    "club": "FC Internazionale Milano (ITA)",
    "nationality": "Unknown",
    "basePrice": 48,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/AUT_vs._TUR_2016-03-29_%28342%29.jpg/330px-AUT_vs._TUR_2016-03-29_%28342%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_unk_11",
    "name": "Kenan Yildiz",
    "position": "FW",
    "rating": 79,
    "club": "Juventus FC (ITA)",
    "nationality": "Unknown",
    "basePrice": 39,
    "photo": "/api/player-image?name=Kenan%20Yildiz&nat=Unknown&club=Juventus%20FC%20(ITA)&pos=FW"
  },
  {
    "id": "wc_unk_12",
    "name": "Altay Bayindir",
    "position": "GK",
    "rating": 75,
    "club": "Manchester United FC (ENG)",
    "nationality": "Unknown",
    "basePrice": 5,
    "photo": "/api/player-image?name=Altay%20Bayindir&nat=Unknown&club=Manchester%20United%20FC%20(ENG)&pos=GK"
  },
  {
    "id": "wc_unk_13",
    "name": "Eren Elmali",
    "position": "DF",
    "rating": 75,
    "club": "Galatasaray SK (TUR)",
    "nationality": "Unknown",
    "basePrice": 8,
    "photo": "/api/player-image?name=Eren%20Elmali&nat=Unknown&club=Galatasaray%20SK%20(TUR)&pos=DF"
  },
  {
    "id": "wc_unk_14",
    "name": "Abdulkerim Bardakci",
    "position": "DF",
    "rating": 80,
    "club": "Galatasaray SK (TUR)",
    "nationality": "Unknown",
    "basePrice": 18,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Abd%C3%BClkerim_Bardak%C3%A7%C4%B1_-_beIN-Sports-Reklam_%282021%29_%28cropped%29.png/330px-Abd%C3%BClkerim_Bardak%C3%A7%C4%B1_-_beIN-Sports-Reklam_%282021%29_%28cropped%29.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_unk_15",
    "name": "Ozan Kabak",
    "position": "DF",
    "rating": 75,
    "club": "TSG Hoffenheim (GER)",
    "nationality": "Unknown",
    "basePrice": 7,
    "photo": "/api/player-image?name=Ozan%20Kabak&nat=Unknown&club=TSG%20Hoffenheim%20(GER)&pos=DF"
  },
  {
    "id": "wc_unk_16",
    "name": "Ismail Yuksek",
    "position": "MF",
    "rating": 77,
    "club": "Fenerbahçe SK (TUR)",
    "nationality": "Unknown",
    "basePrice": 12,
    "photo": "/api/player-image?name=Ismail%20Yuksek&nat=Unknown&club=Fenerbah%C3%A7e%20SK%20(TUR)&pos=MF"
  },
  {
    "id": "wc_unk_17",
    "name": "Can Kahveci Irfan",
    "position": "FW",
    "rating": 78,
    "club": "Kasnmpana SK (TUR)",
    "nationality": "Unknown",
    "basePrice": 14,
    "photo": "/api/player-image?name=Can%20Kahveci%20Irfan&nat=Unknown&club=Kasnmpana%20SK%20(TUR)&pos=FW"
  },
  {
    "id": "wc_unk_18",
    "name": "Mert Muldur",
    "position": "DF",
    "rating": 74,
    "club": "Fenerbahçe SK (TUR)",
    "nationality": "Unknown",
    "basePrice": 5,
    "photo": "/api/player-image?name=Mert%20Muldur&nat=Unknown&club=Fenerbah%C3%A7e%20SK%20(TUR)&pos=DF"
  },
  {
    "id": "wc_unk_19",
    "name": "Yunus Akgun",
    "position": "FW",
    "rating": 78,
    "club": "Galatasaray SK (TUR)",
    "nationality": "Unknown",
    "basePrice": 19,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Nicolas_Pepe_Cote_D%27Ivoire_v_Ecuador_14_June_2026-30.jpg/330px-Nicolas_Pepe_Cote_D%27Ivoire_v_Ecuador_14_June_2026-30.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_unk_20",
    "name": "Ferdi Kadioglu",
    "position": "DF",
    "rating": 79,
    "club": "Brighton & Hove Albion FC (ENG)",
    "nationality": "Unknown",
    "basePrice": 20,
    "photo": "/api/player-image?name=Ferdi%20Kadioglu&nat=Unknown&club=Brighton%20%26%20Hove%20Albion%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_unk_21",
    "name": "Alper Yilmaz Baris",
    "position": "FW",
    "rating": 80,
    "club": "Galatasaray SK (TUR)",
    "nationality": "Unknown",
    "basePrice": 28,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Evan_Ndicka_Cote_D%27Ivoire_v_Ecuador_14_June_2026-59.jpg/330px-Evan_Ndicka_Cote_D%27Ivoire_v_Ecuador_14_June_2026-59.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_unk_22",
    "name": "Kaan Ayhan",
    "position": "MF",
    "rating": 76,
    "club": "Galatasaray SK (TUR)",
    "nationality": "Unknown",
    "basePrice": 7,
    "photo": "/api/player-image?name=Kaan%20Ayhan&nat=Unknown&club=Galatasaray%20SK%20(TUR)&pos=MF"
  },
  {
    "id": "wc_unk_23",
    "name": "Ugurcan Cakir",
    "position": "GK",
    "rating": 80,
    "club": "Galatasaray SK (TUR)",
    "nationality": "Unknown",
    "basePrice": 18,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/U%C4%9Furcan_%C3%87ak%C4%B1r_-_beIN-Sports-Reklam_%282021%29_%28cropped%29.png/330px-U%C4%9Furcan_%C3%87ak%C4%B1r_-_beIN-Sports-Reklam_%282021%29_%28cropped%29.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_unk_24",
    "name": "Oguz Aydin",
    "position": "FW",
    "rating": 77,
    "club": "Fenerbahçe SK (TUR)",
    "nationality": "Unknown",
    "basePrice": 15,
    "photo": "/api/player-image?name=Oguz%20Aydin&nat=Unknown&club=Fenerbah%C3%A7e%20SK%20(TUR)&pos=FW"
  },
  {
    "id": "wc_unk_25",
    "name": "Samet Akaydin",
    "position": "DF",
    "rating": 70,
    "club": "Çaykur Rizespor (TUR)",
    "nationality": "Unknown",
    "basePrice": 1,
    "photo": "/api/player-image?name=Samet%20Akaydin&nat=Unknown&club=%C3%87aykur%20Rizespor%20(TUR)&pos=DF"
  },
  {
    "id": "wc_unk_26",
    "name": "Can Uzun",
    "position": "FW",
    "rating": 74,
    "club": "Eintracht Frankfurt (GER)",
    "nationality": "Unknown",
    "basePrice": 9,
    "photo": "/api/player-image?name=Can%20Uzun&nat=Unknown&club=Eintracht%20Frankfurt%20(GER)&pos=FW"
  },
  {
    "id": "wc_uru_1",
    "name": "Sergio Rochet",
    "position": "GK",
    "rating": 70,
    "club": "SC Internacional (BRA)",
    "nationality": "Uruguay",
    "basePrice": 5,
    "photo": "/api/player-image?name=Sergio%20Rochet&nat=Uruguay&club=SC%20Internacional%20(BRA)&pos=GK"
  },
  {
    "id": "wc_uru_2",
    "name": "Maria Gimenez Jose",
    "position": "DF",
    "rating": 83,
    "club": "Atlético De Madrid (ESP)",
    "nationality": "Uruguay",
    "basePrice": 30,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Jos%C3%A9_Mar%C3%ADa_Gim%C3%A9nez.jpg/330px-Jos%C3%A9_Mar%C3%ADa_Gim%C3%A9nez.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_uru_3",
    "name": "Sebastian Caceres",
    "position": "DF",
    "rating": 79,
    "club": "Club América (MEX)",
    "nationality": "Uruguay",
    "basePrice": 6,
    "photo": "/api/player-image?name=Sebastian%20Caceres&nat=Uruguay&club=Club%20Am%C3%A9rica%20(MEX)&pos=DF"
  },
  {
    "id": "wc_uru_4",
    "name": "Ronald Araujo",
    "position": "DF",
    "rating": 83,
    "club": "FC Barcelona (ESP)",
    "nationality": "Uruguay",
    "basePrice": 42,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg/330px-FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_uru_5",
    "name": "Manuel Ugarte",
    "position": "MF",
    "rating": 79,
    "club": "Manchester United FC (ENG)",
    "nationality": "Uruguay",
    "basePrice": 23,
    "photo": "/api/player-image?name=Manuel%20Ugarte&nat=Uruguay&club=Manchester%20United%20FC%20(ENG)&pos=MF"
  },
  {
    "id": "wc_uru_6",
    "name": "Rodrigo Bentancur",
    "position": "MF",
    "rating": 80,
    "club": "Tottenham Hotspur FC (ENG)",
    "nationality": "Uruguay",
    "basePrice": 21,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/20171114_AUT_URU_4518_-_Rodrigo_Bentancur_%28cropped%29_2.jpg/330px-20171114_AUT_URU_4518_-_Rodrigo_Bentancur_%28cropped%29_2.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_uru_7",
    "name": "Nicolas De La Cruz",
    "position": "MF",
    "rating": 70,
    "club": "CR Flamengo (BRA)",
    "nationality": "Uruguay",
    "basePrice": 2,
    "photo": "/api/player-image?name=Nicolas%20De%20La%20Cruz&nat=Uruguay&club=CR%20Flamengo%20(BRA)&pos=MF"
  },
  {
    "id": "wc_uru_8",
    "name": "Federico Valverde",
    "position": "MF",
    "rating": 89,
    "club": "Real Madrid C. F. (ESP)",
    "nationality": "Uruguay",
    "basePrice": 121,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Federico_Valverde_2021_%28cropped%29.jpg/330px-Federico_Valverde_2021_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_uru_9",
    "name": "Darwin Nunez",
    "position": "FW",
    "rating": 79,
    "club": "Al Hilal SC (KSA)",
    "nationality": "Uruguay",
    "basePrice": 23,
    "photo": "/api/player-image?name=Darwin%20Nunez&nat=Uruguay&club=Al%20Hilal%20SC%20(KSA)&pos=FW"
  },
  {
    "id": "wc_uru_10",
    "name": "Giorgian De Arrascaeta",
    "position": "MF",
    "rating": 70,
    "club": "CR Flamengo (BRA)",
    "nationality": "Uruguay",
    "basePrice": 5,
    "photo": "/api/player-image?name=Giorgian%20De%20Arrascaeta&nat=Uruguay&club=CR%20Flamengo%20(BRA)&pos=MF"
  },
  {
    "id": "wc_uru_11",
    "name": "Facundo Pellistri",
    "position": "FW",
    "rating": 73,
    "club": "Panathinaikos FC (GRE)",
    "nationality": "Uruguay",
    "basePrice": 7,
    "photo": "/api/player-image?name=Facundo%20Pellistri&nat=Uruguay&club=Panathinaikos%20FC%20(GRE)&pos=FW"
  },
  {
    "id": "wc_uru_12",
    "name": "Santiago Mele",
    "position": "GK",
    "rating": 65,
    "club": "CF Monterrey (MEX)",
    "nationality": "Uruguay",
    "basePrice": 1,
    "photo": "/api/player-image?name=Santiago%20Mele&nat=Uruguay&club=CF%20Monterrey%20(MEX)&pos=GK"
  },
  {
    "id": "wc_uru_13",
    "name": "Guillermo Varela",
    "position": "DF",
    "rating": 68,
    "club": "CR Flamengo (BRA)",
    "nationality": "Uruguay",
    "basePrice": 1,
    "photo": "/api/player-image?name=Guillermo%20Varela&nat=Uruguay&club=CR%20Flamengo%20(BRA)&pos=DF"
  },
  {
    "id": "wc_uru_14",
    "name": "Agustin Canobbio",
    "position": "MF",
    "rating": 75,
    "club": "Fluminense FC (BRA)",
    "nationality": "Uruguay",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Agustin%20Canobbio&nat=Uruguay&club=Fluminense%20FC%20(BRA)&pos=MF"
  },
  {
    "id": "wc_uru_15",
    "name": "Emiliano Martinez",
    "position": "MF",
    "rating": 67,
    "club": "SE Palmeiras (BRA)",
    "nationality": "Uruguay",
    "basePrice": 2,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Emiliano_Martinez_Argentina_v_Spain_19_July_2026-269.jpg/330px-Emiliano_Martinez_Argentina_v_Spain_19_July_2026-269.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_uru_16",
    "name": "Mathias Olivera",
    "position": "DF",
    "rating": 78,
    "club": "SSC Napoli (ITA)",
    "nationality": "Uruguay",
    "basePrice": 14,
    "photo": "/api/player-image?name=Mathias%20Olivera&nat=Uruguay&club=SSC%20Napoli%20(ITA)&pos=DF"
  },
  {
    "id": "wc_uru_17",
    "name": "Matias Vina",
    "position": "DF",
    "rating": 66,
    "club": "CA River Plate (ARG)",
    "nationality": "Uruguay",
    "basePrice": 2,
    "photo": "/api/player-image?name=Matias%20Vina&nat=Uruguay&club=CA%20River%20Plate%20(ARG)&pos=DF"
  },
  {
    "id": "wc_uru_18",
    "name": "Brian Rodriguez",
    "position": "FW",
    "rating": 66,
    "club": "Club América (MEX)",
    "nationality": "Uruguay",
    "basePrice": 1,
    "photo": "/api/player-image?name=Brian%20Rodriguez&nat=Uruguay&club=Club%20Am%C3%A9rica%20(MEX)&pos=FW"
  },
  {
    "id": "wc_uru_19",
    "name": "Rodrigo Aguirre",
    "position": "FW",
    "rating": 70,
    "club": "Tigres UANL (MEX)",
    "nationality": "Uruguay",
    "basePrice": 5,
    "photo": "/api/player-image?name=Rodrigo%20Aguirre&nat=Uruguay&club=Tigres%20UANL%20(MEX)&pos=FW"
  },
  {
    "id": "wc_uru_20",
    "name": "Maxi Araujo",
    "position": "MF",
    "rating": 77,
    "club": "Sporting CP (POR)",
    "nationality": "Uruguay",
    "basePrice": 14,
    "photo": "/api/player-image?name=Maxi%20Araujo&nat=Uruguay&club=Sporting%20CP%20(POR)&pos=MF"
  },
  {
    "id": "wc_uru_21",
    "name": "Federico Vinas",
    "position": "FW",
    "rating": 72,
    "club": "Real Oviedo (ESP)",
    "nationality": "Uruguay",
    "basePrice": 3,
    "photo": "/api/player-image?name=Federico%20Vinas&nat=Uruguay&club=Real%20Oviedo%20(ESP)&pos=FW"
  },
  {
    "id": "wc_uru_22",
    "name": "Joaquin Piquerez",
    "position": "MF",
    "rating": 70,
    "club": "SE Palmeiras (BRA)",
    "nationality": "Uruguay",
    "basePrice": 1,
    "photo": "/api/player-image?name=Joaquin%20Piquerez&nat=Uruguay&club=SE%20Palmeiras%20(BRA)&pos=MF"
  },
  {
    "id": "wc_uru_23",
    "name": "Fernando Muslera",
    "position": "GK",
    "rating": 79,
    "club": "Estudiantes LP (ARG)",
    "nationality": "Uruguay",
    "basePrice": 2,
    "photo": "/api/player-image?name=Fernando%20Muslera&nat=Uruguay&club=Estudiantes%20LP%20(ARG)&pos=GK"
  },
  {
    "id": "wc_uru_24",
    "name": "Santiago Bueno",
    "position": "DF",
    "rating": 76,
    "club": "Wolverhampton Wanderers FC (ENG)",
    "nationality": "Uruguay",
    "basePrice": 9,
    "photo": "/api/player-image?name=Santiago%20Bueno&nat=Uruguay&club=Wolverhampton%20Wanderers%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_uru_25",
    "name": "Manuel Sanabria Juan",
    "position": "MF",
    "rating": 69,
    "club": "Real Salt Lake (USA)",
    "nationality": "Uruguay",
    "basePrice": 3,
    "photo": "/api/player-image?name=Manuel%20Sanabria%20Juan&nat=Uruguay&club=Real%20Salt%20Lake%20(USA)&pos=MF"
  },
  {
    "id": "wc_uru_26",
    "name": "Rodrigo Zalazar",
    "position": "MF",
    "rating": 79,
    "club": "SC Braga (POR)",
    "nationality": "Uruguay",
    "basePrice": 23,
    "photo": "/api/player-image?name=Rodrigo%20Zalazar&nat=Uruguay&club=SC%20Braga%20(POR)&pos=MF"
  },
  {
    "id": "wc_usa_1",
    "name": "Matt Turner",
    "position": "GK",
    "rating": 74,
    "club": "New England Revolution (USA)",
    "nationality": "USA",
    "basePrice": 2,
    "photo": "/api/player-image?name=Matt%20Turner&nat=USA&club=New%20England%20Revolution%20(USA)&pos=GK"
  },
  {
    "id": "wc_usa_2",
    "name": "Sergino Dest",
    "position": "DF",
    "rating": 79,
    "club": "PSV Eindhoven (NED)",
    "nationality": "USA",
    "basePrice": 24,
    "photo": "/api/player-image?name=Sergino%20Dest&nat=USA&club=PSV%20Eindhoven%20(NED)&pos=DF"
  },
  {
    "id": "wc_usa_3",
    "name": "Chris Richards",
    "position": "DF",
    "rating": 77,
    "club": "Crystal Palace FC (ENG)",
    "nationality": "USA",
    "basePrice": 13,
    "photo": "/api/player-image?name=Chris%20Richards&nat=USA&club=Crystal%20Palace%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_usa_4",
    "name": "Tyler Adams",
    "position": "MF",
    "rating": 79,
    "club": "AFC Bournemouth (ENG)",
    "nationality": "USA",
    "basePrice": 20,
    "photo": "/api/player-image?name=Tyler%20Adams&nat=USA&club=AFC%20Bournemouth%20(ENG)&pos=MF"
  },
  {
    "id": "wc_usa_5",
    "name": "Antonee Robinson",
    "position": "DF",
    "rating": 82,
    "club": "Fulham FC (ENG)",
    "nationality": "USA",
    "basePrice": 30,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Antonee_Robinson_Australia_v_USA_19_June_2026-24_%28cropped%29.jpg/330px-Antonee_Robinson_Australia_v_USA_19_June_2026-24_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_usa_6",
    "name": "Auston Trusty",
    "position": "DF",
    "rating": 74,
    "club": "Celtic FC (SCO)",
    "nationality": "USA",
    "basePrice": 5,
    "photo": "/api/player-image?name=Auston%20Trusty&nat=USA&club=Celtic%20FC%20(SCO)&pos=DF"
  },
  {
    "id": "wc_usa_7",
    "name": "Giovanni Reyna",
    "position": "MF",
    "rating": 75,
    "club": "Borussia Mönchengladbach (GER)",
    "nationality": "USA",
    "basePrice": 9,
    "photo": "/api/player-image?name=Giovanni%20Reyna&nat=USA&club=Borussia%20M%C3%B6nchengladbach%20(GER)&pos=MF"
  },
  {
    "id": "wc_usa_8",
    "name": "Mckennie Weston",
    "position": "MF",
    "rating": 78,
    "club": "Juventus FC (ITA)",
    "nationality": "USA",
    "basePrice": 17,
    "photo": "/api/player-image?name=Mckennie%20Weston&nat=USA&club=Juventus%20FC%20(ITA)&pos=MF"
  },
  {
    "id": "wc_usa_9",
    "name": "Ricardo Pepi",
    "position": "FW",
    "rating": 76,
    "club": "PSV Eindhoven (NED)",
    "nationality": "USA",
    "basePrice": 17,
    "photo": "/api/player-image?name=Ricardo%20Pepi&nat=USA&club=PSV%20Eindhoven%20(NED)&pos=FW"
  },
  {
    "id": "wc_usa_10",
    "name": "Christian Pulisic",
    "position": "FW",
    "rating": 84,
    "club": "AC Milan (ITA)",
    "nationality": "USA",
    "basePrice": 46,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Christian_Pulisic_USMNT_v_Belgium_Mar_28_2026-73_%28cropped%29.jpg/330px-Christian_Pulisic_USMNT_v_Belgium_Mar_28_2026-73_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_usa_11",
    "name": "Brenden Aaronson",
    "position": "FW",
    "rating": 74,
    "club": "Leeds United FC (ENG)",
    "nationality": "USA",
    "basePrice": 6,
    "photo": "/api/player-image?name=Brenden%20Aaronson&nat=USA&club=Leeds%20United%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_usa_12",
    "name": "Miles Robinson",
    "position": "DF",
    "rating": 73,
    "club": "FC Cincinnatti (USA)",
    "nationality": "USA",
    "basePrice": 3,
    "photo": "/api/player-image?name=Miles%20Robinson&nat=USA&club=FC%20Cincinnatti%20(USA)&pos=DF"
  },
  {
    "id": "wc_usa_13",
    "name": "Tim Ream",
    "position": "DF",
    "rating": 72,
    "club": "Charlotte FC (USA)",
    "nationality": "USA",
    "basePrice": 1,
    "photo": "/api/player-image?name=Tim%20Ream&nat=USA&club=Charlotte%20FC%20(USA)&pos=DF"
  },
  {
    "id": "wc_usa_14",
    "name": "Sebastian Berhalter",
    "position": "MF",
    "rating": 67,
    "club": "Vancouver Whitecaps FC (CAN)",
    "nationality": "USA",
    "basePrice": 2,
    "photo": "/api/player-image?name=Sebastian%20Berhalter&nat=USA&club=Vancouver%20Whitecaps%20FC%20(CAN)&pos=MF"
  },
  {
    "id": "wc_usa_15",
    "name": "Cristian Roldan",
    "position": "MF",
    "rating": 74,
    "club": "Seattle Sounders FC (USA)",
    "nationality": "USA",
    "basePrice": 4,
    "photo": "/api/player-image?name=Cristian%20Roldan&nat=USA&club=Seattle%20Sounders%20FC%20(USA)&pos=MF"
  },
  {
    "id": "wc_usa_16",
    "name": "Alex Freeman",
    "position": "DF",
    "rating": 65,
    "club": "Villarreal CF (ESP)",
    "nationality": "USA",
    "basePrice": 2,
    "photo": "/api/player-image?name=Alex%20Freeman&nat=USA&club=Villarreal%20CF%20(ESP)&pos=DF"
  },
  {
    "id": "wc_usa_17",
    "name": "Malik Tillman",
    "position": "MF",
    "rating": 82,
    "club": "Bayer 04 Leverkusen (GER)",
    "nationality": "USA",
    "basePrice": 46,
    "photo": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Malik_Tillman_Australia_v_USA_19_June_2026-143_%28cropped%29.jpg/330px-Malik_Tillman_Australia_v_USA_19_June_2026-143_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "id": "wc_usa_18",
    "name": "Max Arfsten",
    "position": "DF",
    "rating": 67,
    "club": "Columbus Crew (USA)",
    "nationality": "USA",
    "basePrice": 2,
    "photo": "/api/player-image?name=Max%20Arfsten&nat=USA&club=Columbus%20Crew%20(USA)&pos=DF"
  },
  {
    "id": "wc_usa_19",
    "name": "Haji Wright",
    "position": "FW",
    "rating": 73,
    "club": "Coventry City FC (ENG)",
    "nationality": "USA",
    "basePrice": 4,
    "photo": "/api/player-image?name=Haji%20Wright&nat=USA&club=Coventry%20City%20FC%20(ENG)&pos=FW"
  },
  {
    "id": "wc_usa_20",
    "name": "Folarin Balogun",
    "position": "FW",
    "rating": 77,
    "club": "AS Monaco (FRA)",
    "nationality": "USA",
    "basePrice": 16,
    "photo": "/api/player-image?name=Folarin%20Balogun&nat=USA&club=AS%20Monaco%20(FRA)&pos=FW"
  },
  {
    "id": "wc_usa_21",
    "name": "Timothy Weah",
    "position": "FW",
    "rating": 77,
    "club": "Olympique Marseille (FRA)",
    "nationality": "USA",
    "basePrice": 13,
    "photo": "/api/player-image?name=Timothy%20Weah&nat=USA&club=Olympique%20Marseille%20(FRA)&pos=FW"
  },
  {
    "id": "wc_usa_22",
    "name": "Mckenzie Mark",
    "position": "DF",
    "rating": 74,
    "club": "Toulouse FC (FRA)",
    "nationality": "USA",
    "basePrice": 6,
    "photo": "/api/player-image?name=Mckenzie%20Mark&nat=USA&club=Toulouse%20FC%20(FRA)&pos=DF"
  },
  {
    "id": "wc_usa_23",
    "name": "Joe Scally",
    "position": "DF",
    "rating": 74,
    "club": "Borussia Mönchengladbach (GER)",
    "nationality": "USA",
    "basePrice": 6,
    "photo": "/api/player-image?name=Joe%20Scally&nat=USA&club=Borussia%20M%C3%B6nchengladbach%20(GER)&pos=DF"
  },
  {
    "id": "wc_usa_24",
    "name": "Matt Freese",
    "position": "GK",
    "rating": 69,
    "club": "New York City FC (USA)",
    "nationality": "USA",
    "basePrice": 2,
    "photo": "/api/player-image?name=Matt%20Freese&nat=USA&club=New%20York%20City%20FC%20(USA)&pos=GK"
  },
  {
    "id": "wc_usa_25",
    "name": "Chris Brady",
    "position": "GK",
    "rating": 69,
    "club": "Chicago Fire FC (USA)",
    "nationality": "USA",
    "basePrice": 3,
    "photo": "/api/player-image?name=Chris%20Brady&nat=USA&club=Chicago%20Fire%20FC%20(USA)&pos=GK"
  },
  {
    "id": "wc_uzb_1",
    "name": "Utkir Yusupov",
    "position": "GK",
    "rating": 75,
    "club": "PFC Navbahor Namangan (UZB)",
    "nationality": "Uzbekistan",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Utkir%20Yusupov&nat=Uzbekistan&club=PFC%20Navbahor%20Namangan%20(UZB)&pos=GK"
  },
  {
    "id": "wc_uzb_2",
    "name": "Abdukodir Khusanov",
    "position": "DF",
    "rating": 77,
    "club": "Manchester City FC (ENG)",
    "nationality": "Uzbekistan",
    "basePrice": 22,
    "photo": "/api/player-image?name=Abdukodir%20Khusanov&nat=Uzbekistan&club=Manchester%20City%20FC%20(ENG)&pos=DF"
  },
  {
    "id": "wc_uzb_3",
    "name": "Khojiakbar Alijonov",
    "position": "DF",
    "rating": 70,
    "club": "Pakhtakor Tashkent FK (UZB)",
    "nationality": "Uzbekistan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Khojiakbar%20Alijonov&nat=Uzbekistan&club=Pakhtakor%20Tashkent%20FK%20(UZB)&pos=DF"
  },
  {
    "id": "wc_uzb_4",
    "name": "Farrukh Sayfiev",
    "position": "DF",
    "rating": 70,
    "club": "FK Neftchi Farg'ona (UZB)",
    "nationality": "Uzbekistan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Farrukh%20Sayfiev&nat=Uzbekistan&club=FK%20Neftchi%20Farg'ona%20(UZB)&pos=DF"
  },
  {
    "id": "wc_uzb_5",
    "name": "Rustam Ashurmatov",
    "position": "DF",
    "rating": 75,
    "club": "Esteghlal Tehran FC (IRN)",
    "nationality": "Uzbekistan",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Rustam%20Ashurmatov&nat=Uzbekistan&club=Esteghlal%20Tehran%20FC%20(IRN)&pos=DF"
  },
  {
    "id": "wc_uzb_6",
    "name": "Akmal Mozgovoy",
    "position": "MF",
    "rating": 70,
    "club": "Pakhtakor Tashkent FK (UZB)",
    "nationality": "Uzbekistan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Akmal%20Mozgovoy&nat=Uzbekistan&club=Pakhtakor%20Tashkent%20FK%20(UZB)&pos=MF"
  },
  {
    "id": "wc_uzb_7",
    "name": "Otabek Shukurov",
    "position": "MF",
    "rating": 70,
    "club": "Baniyas Club (UAE)",
    "nationality": "Uzbekistan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Otabek%20Shukurov&nat=Uzbekistan&club=Baniyas%20Club%20(UAE)&pos=MF"
  },
  {
    "id": "wc_uzb_8",
    "name": "Jamshid Iskanderov",
    "position": "MF",
    "rating": 70,
    "club": "FK Neftchi Farg'ona (UZB)",
    "nationality": "Uzbekistan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Jamshid%20Iskanderov&nat=Uzbekistan&club=FK%20Neftchi%20Farg'ona%20(UZB)&pos=MF"
  },
  {
    "id": "wc_uzb_9",
    "name": "Odiljon Xamrobekov",
    "position": "MF",
    "rating": 75,
    "club": "Tractor Sazi Tabriz FC (IRN)",
    "nationality": "Uzbekistan",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Odiljon%20Xamrobekov&nat=Uzbekistan&club=Tractor%20Sazi%20Tabriz%20FC%20(IRN)&pos=MF"
  },
  {
    "id": "wc_uzb_10",
    "name": "Ruslanbek Jiyanov",
    "position": "MF",
    "rating": 75,
    "club": "PFC Navbahor Namangan (UZB)",
    "nationality": "Uzbekistan",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Ruslanbek%20Jiyanov&nat=Uzbekistan&club=PFC%20Navbahor%20Namangan%20(UZB)&pos=MF"
  },
  {
    "id": "wc_uzb_11",
    "name": "Oston Urunov",
    "position": "MF",
    "rating": 75,
    "club": "Persepolis FC (IRN)",
    "nationality": "Uzbekistan",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Oston%20Urunov&nat=Uzbekistan&club=Persepolis%20FC%20(IRN)&pos=MF"
  },
  {
    "id": "wc_uzb_12",
    "name": "Abduvohid Nematov",
    "position": "GK",
    "rating": 75,
    "club": "Nasaf Qarshi FC (UZB)",
    "nationality": "Uzbekistan",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Abduvohid%20Nematov&nat=Uzbekistan&club=Nasaf%20Qarshi%20FC%20(UZB)&pos=GK"
  },
  {
    "id": "wc_uzb_13",
    "name": "Sherzod Nasrullaev",
    "position": "DF",
    "rating": 70,
    "club": "Pakhtakor Tashkent FK (UZB)",
    "nationality": "Uzbekistan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Sherzod%20Nasrullaev&nat=Uzbekistan&club=Pakhtakor%20Tashkent%20FK%20(UZB)&pos=DF"
  },
  {
    "id": "wc_uzb_14",
    "name": "Eldor Shomurodov",
    "position": "FW",
    "rating": 74,
    "club": "Banaknehir FK (TUR)",
    "nationality": "Uzbekistan",
    "basePrice": 4,
    "photo": "/api/player-image?name=Eldor%20Shomurodov&nat=Uzbekistan&club=Banaknehir%20FK%20(TUR)&pos=FW"
  },
  {
    "id": "wc_uzb_15",
    "name": "Umar Eshmurodov",
    "position": "DF",
    "rating": 74,
    "club": "Nasaf Qarshi FC (UZB)",
    "nationality": "Uzbekistan",
    "basePrice": 4,
    "photo": "/api/player-image?name=Umar%20Eshmurodov&nat=Uzbekistan&club=Nasaf%20Qarshi%20FC%20(UZB)&pos=DF"
  },
  {
    "id": "wc_uzb_16",
    "name": "Botirali Ergashev",
    "position": "GK",
    "rating": 70,
    "club": "FK Neftchi Farg'ona (UZB)",
    "nationality": "Uzbekistan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Botirali%20Ergashev&nat=Uzbekistan&club=FK%20Neftchi%20Farg'ona%20(UZB)&pos=GK"
  },
  {
    "id": "wc_uzb_17",
    "name": "Dostonbek Khamdamov",
    "position": "MF",
    "rating": 70,
    "club": "Pakhtakor Tashkent FK (UZB)",
    "nationality": "Uzbekistan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Dostonbek%20Khamdamov&nat=Uzbekistan&club=Pakhtakor%20Tashkent%20FK%20(UZB)&pos=MF"
  },
  {
    "id": "wc_uzb_18",
    "name": "Abdulla Abdullaev",
    "position": "DF",
    "rating": 75,
    "club": "Dibba FC (UAE)",
    "nationality": "Uzbekistan",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Abdulla%20Abdullaev&nat=Uzbekistan&club=Dibba%20FC%20(UAE)&pos=DF"
  },
  {
    "id": "wc_uzb_19",
    "name": "Azizjon Ganiev",
    "position": "MF",
    "rating": 70,
    "club": "Al Bataeh Club (UAE)",
    "nationality": "Uzbekistan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Azizjon%20Ganiev&nat=Uzbekistan&club=Al%20Bataeh%20Club%20(UAE)&pos=MF"
  },
  {
    "id": "wc_uzb_20",
    "name": "Azizbek Amonov",
    "position": "FW",
    "rating": 70,
    "club": "FK Dinamo Samarkand (UZB)",
    "nationality": "Uzbekistan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Azizbek%20Amonov&nat=Uzbekistan&club=FK%20Dinamo%20Samarkand%20(UZB)&pos=FW"
  },
  {
    "id": "wc_uzb_21",
    "name": "Igor Sergeev",
    "position": "FW",
    "rating": 75,
    "club": "Persepolis FC (IRN)",
    "nationality": "Uzbekistan",
    "basePrice": 12.5,
    "photo": "/api/player-image?name=Igor%20Sergeev&nat=Uzbekistan&club=Persepolis%20FC%20(IRN)&pos=FW"
  },
  {
    "id": "wc_uzb_22",
    "name": "Abbosbek Fayzullaev",
    "position": "MF",
    "rating": 65,
    "club": "Banaknehir FK (TUR)",
    "nationality": "Uzbekistan",
    "basePrice": 2,
    "photo": "/api/player-image?name=Abbosbek%20Fayzullaev&nat=Uzbekistan&club=Banaknehir%20FK%20(TUR)&pos=MF"
  },
  {
    "id": "wc_uzb_23",
    "name": "Sherzod Esanov",
    "position": "MF",
    "rating": 70,
    "club": "FK Buxoro (UZB)",
    "nationality": "Uzbekistan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Sherzod%20Esanov&nat=Uzbekistan&club=FK%20Buxoro%20(UZB)&pos=MF"
  },
  {
    "id": "wc_uzb_24",
    "name": "Behruzjon Karimov",
    "position": "DF",
    "rating": 70,
    "club": "Surkhon FK (UZB)",
    "nationality": "Uzbekistan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Behruzjon%20Karimov&nat=Uzbekistan&club=Surkhon%20FK%20(UZB)&pos=DF"
  },
  {
    "id": "wc_uzb_25",
    "name": "Avazbek Ulmasaliyev",
    "position": "DF",
    "rating": 70,
    "club": "OKMK FK (UZB)",
    "nationality": "Uzbekistan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Avazbek%20Ulmasaliyev&nat=Uzbekistan&club=OKMK%20FK%20(UZB)&pos=DF"
  },
  {
    "id": "wc_uzb_26",
    "name": "Jakhongir Urozov",
    "position": "DF",
    "rating": 70,
    "club": "FK Dinamo Samarkand (UZB)",
    "nationality": "Uzbekistan",
    "basePrice": 5,
    "photo": "/api/player-image?name=Jakhongir%20Urozov&nat=Uzbekistan&club=FK%20Dinamo%20Samarkand%20(UZB)&pos=DF"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WC2026_PLAYERS };
}
