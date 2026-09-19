# ============================================================
# players.py - Player Database & Performance Form Service (Python)
# ============================================================
import re
import json
import os
from typing import List, Dict, Any, Optional

def load_initial_players(file_path: str = "public/players.js") -> List[Dict[str, Any]]:
    """Loads the main initial players list from players.js by parsing the JSON array."""
    if not os.path.exists(file_path):
        return []
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        # Find the content between const INITIAL_PLAYERS = [ and ];
        match = re.search(r"const\s+INITIAL_PLAYERS\s*=\s*(\[.*?\]);", content, re.DOTALL)
        if match:
            return json.loads(match.group(1))
    except Exception as e:
        print(f"Error loading players.js: {e}")
    return []


def load_wc2026_players(file_path: str = "public/wc2026_players.js") -> List[Dict[str, Any]]:
    """Loads the World Cup players list from wc2026_players.js."""
    if not os.path.exists(file_path):
        return []
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        # Find the content between const WC2026_PLAYERS = [ and ];
        match = re.search(r"const\s+WC2026_PLAYERS\s*=\s*(\[.*?\]);", content, re.DOTALL)
        if match:
            return json.loads(match.group(1))
    except Exception as e:
        print(f"Error loading wc2026_players.js: {e}")
    return []


def get_js_bitwise_hash(name: str) -> int:
    """
    Simulates the JavaScript string hashing algorithm used in players.js:
    for (let i = 0; i < nameLower.length; i++) {
        hash = (hash << 5) - hash + nameLower.charCodeAt(i);
        hash |= 0;
    }
    This ensures identical deterministic seed generation and form statuses.
    """
    name_lower = name.lower()
    hash_val = 0
    for char in name_lower:
        # (hash_val << 5) - hash_val + ord(char)
        hash_val = (hash_val << 5) - hash_val + ord(char)
        # Emulate 32-bit bitwise operations in JavaScript
        hash_val = int(hash_val) & 0xFFFFFFFF
        if hash_val >= 0x80000000:
            hash_val -= 0x100000000
    
    return abs(hash_val) % 100


def apply_present_performance(p: Dict[str, Any]) -> Dict[str, Any]:
    """
    Calculates form boosts, rating shifts, and updates player base prices dynamically
    exactly like the JavaScript applyPresentPerformance(p) function.
    """
    if not p:
        return p
    if p.get("_performanceApplied"):
        return p

    base_rating = p.get("rating", 75)
    name = p.get("name", "")
    name_lower = name.lower()

    form_boost = 0
    form_status = '➖ Steady'
    form_class = 'steady'

    seed = get_js_bitwise_hash(name)

    # Check key fire-players
    fire_names = ['mbappé', 'mbappe', 'bellingham', 'haaland', 'vinícius', 'yamal', 'rodri', 'kane']
    if any(fn in name_lower for fn in fire_names):
        form_boost = 3
        form_status = '🔥 On Fire'
        form_class = 'on-fire'
    elif seed > 75:
        form_boost = 3
        form_status = '🔥 On Fire'
        form_class = 'on-fire'
    elif seed > 45:
        form_boost = 2
        form_status = '📈 Peak Form'
        form_class = 'peak-form'
    elif seed > 20:
        form_boost = 1
        form_status = '⚡ Good Form'
        form_class = 'good-form'
    else:
        form_boost = 0
        form_status = '➖ Steady'
        form_class = 'steady'

    effective_rating = min(99, max(60, base_rating + form_boost))

    # Base price calculation helper
    def calc_price(r: int) -> int:
        if r >= 90:
            return 50 + (r - 90) * 15
        if r >= 80:
            return 20 + (r - 80) * 3
        if r >= 70:
            return 5 + (r - 70) * 1.5
        return max(1, round(r / 15))

    effective_base_price = calc_price(effective_rating)

    # Modify copy or direct reference attributes
    p["baseRating"] = base_rating
    p["rating"] = effective_rating
    p["formBoost"] = form_boost
    p["formStatus"] = form_status
    p["formClass"] = form_class
    p["basePrice"] = effective_base_price
    p["_performanceApplied"] = True
    return p


def get_players_database(mode: str = 'special') -> List[Dict[str, Any]]:
    """Returns the requested player pool with form boosts applied."""
    raw_list = []
    if mode == 'wc2026_elite':
        wc_players = load_wc2026_players()
        raw_list = [p for p in wc_players if p.get("rating", 0) >= 80]
    elif mode in ('wc2026', 'wc2026_all'):
        raw_list = load_wc2026_players()
    else:
        raw_list = load_initial_players()
        
    return [apply_present_performance(dict(p)) for p in raw_list]


def get_player_career_fantasy_points(p: Dict[str, Any]) -> int:
    """Calculates career points based on player ratings, club tiers, and nationalities."""
    name_lower = p.get("name", "").lower().strip()
    
    # Specific legendary point overrides
    if "messi" in name_lower: return 990
    if "ronaldo" in name_lower: return 980
    if "mbappé" in name_lower or "mbappe" in name_lower: return 920
    if "haaland" in name_lower: return 895
    if "kane" in name_lower: return 830
    if "bellingham" in name_lower: return 880
    if "chhetri" in name_lower: return 760
    if "de bruyne" in name_lower: return 910
    if "neymar" in name_lower: return 890
    if "salah" in name_lower: return 880
    if "modric" in name_lower: return 940
    if "kroos" in name_lower: return 950
    if "lewandowski" in name_lower: return 900
    if "courtois" in name_lower: return 880
    if "van dijk" in name_lower: return 870

    base = round((p.get("rating", 80) / 99) * 700)

    club_points = 30
    club_lower = p.get("club", "").lower()
    elite_clubs = ["real madrid", "manchester city", "bayern", "barcelona", "liverpool"]
    tier2_clubs = ["inter", "milan", "psg", "juventus", "arsenal", "atlético", "atletico", "dormund"]
    tier3_clubs = ["tottenham", "chelsea", "manchester united", "bayer leverkusen", "aston villa", "newcastle", "bengaluru", "mohun bagan", "east bengal", "goa"]
    
    if any(ec in club_lower for ec in elite_clubs):
        club_points = 150
    elif any(t2 in club_lower for t2 in tier2_clubs):
        club_points = 110
    elif any(t3 in club_lower for t3 in tier3_clubs):
        club_points = 70

    nation_points = 40
    nation_lower = p.get("nationality", "").lower()
    elite_nations = ["argentina", "france", "spain", "brazil", "germany", "italy"]
    tier2_nations = ["portugal", "uruguay", "england", "belgium", "netherlands", "croatia", "colombia"]
    
    if any(en in nation_lower for en in elite_nations):
        nation_points = 150
    elif any(t2n in nation_lower for t2n in tier2_nations):
        nation_points = 100
    elif "india" in nation_lower:
        nation_points = 65

    return min(1000, base + club_points + nation_points)


# Preload database
INITIAL_PLAYERS = load_initial_players()
WC2026_PLAYERS = load_wc2026_players()
