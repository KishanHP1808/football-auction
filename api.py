# ============================================================
# api.py - Player Search & Image Scraping Service (Python version)
# ============================================================
import urllib.parse
import requests
import random
from typing import List, Dict, Optional

from players import INITIAL_PLAYERS, WC2026_PLAYERS

# Combine local database and remove duplicates by name and ID
LOCAL_DATABASE: List[Dict] = []
seen_names = set()
seen_ids = set()

# Combine INITIAL_PLAYERS
for p in INITIAL_PLAYERS:
    norm_name = p["name"].lower().strip()
    if p["id"] not in seen_ids and norm_name not in seen_names:
        LOCAL_DATABASE.append(p)
        seen_ids.add(p["id"])
        seen_names.add(norm_name)

# Combine WC2026_PLAYERS
for p in WC2026_PLAYERS:
    norm_name = p["name"].lower().strip()
    if p["id"] not in seen_ids and norm_name not in seen_names:
        LOCAL_DATABASE.append(p)
        seen_ids.add(p["id"])
        seen_names.add(norm_name)


def normalize_position(api_pos: Optional[str]) -> str:
    """
    Normalizes positions from API-Football format (e.g., 'Goalkeeper', 'Defender')
    to our internal squad formats: GK, DF, MF, or FW.
    """
    if not api_pos:
        return 'MF'
    
    pos = api_pos.lower()
    if 'goalkeeper' in pos or pos == 'gk':
        return 'GK'
    if 'defender' in pos or pos == 'df':
        return 'DF'
    if 'midfielder' in pos or pos == 'mf':
        return 'MF'
    if 'attacker' in pos or 'forward' in pos or pos == 'fw':
        return 'FW'
    
    return 'MF'


def calculate_base_price(rating: int) -> int:
    """
    Calculates a suggested draft base price ($M) based on player rating.
    High-rated players get exponentially higher valuations.
    """
    if rating >= 90:
        return 50 + (rating - 90) * 15
    if rating >= 80:
        return 20 + (rating - 80) * 3
    if rating >= 70:
        return 5 + (rating - 70) * 1.5
    return max(1, round(rating / 15))


# Memory cache to prevent repetitive network requests
PLAYER_CACHE: Dict[str, List[Dict]] = {}


def search_players(query: str, api_key: Optional[str] = None, api_host: str = 'v3.football.api-sports.io') -> List[Dict]:
    """
    Searches for players using either:
    1. The API-Football external endpoint (if an API key is provided).
    2. Falling back to search the local database (case-insensitive substring match).
    """
    norm_query = (query or '').lower().strip()
    cache_key = f"{norm_query}_{api_key or ''}_{api_host}"
    
    # Check cache first
    if cache_key in PLAYER_CACHE:
        return PLAYER_CACHE[cache_key]

    results = []
    
    # Attempt to fetch from API-Football if key is available
    if api_key and len(api_key.strip()) > 3:
        try:
            url = f"https://{api_host}/players?search={urllib.parse.quote(norm_query)}&season=2024"
            print(f"Querying API-Football: {url}")
            
            headers = {
                'x-apisports-key': api_key,
                'x-rapidapi-key': api_key,
                'x-rapidapi-host': api_host
            }
            
            response = requests.get(url, headers=headers, timeout=10)
            if response.status_code == 200:
                data = response.json()
                api_response = data.get("response", [])
                
                for item in api_response:
                    p = item.get("player", {})
                    statistics = item.get("statistics", [])
                    stats = statistics[0] if statistics else {}
                    
                    # Compute player rating (convert 10-scale float to FIFA/EAFC-like rating)
                    api_rating = 75
                    game_stats = stats.get("games", {})
                    raw_rating_str = game_stats.get("rating")
                    
                    if raw_rating_str:
                        try:
                            raw_rating = float(raw_rating_str)
                            api_rating = round(60 + (raw_rating * 4))
                        except ValueError:
                            pass
                    else:
                        # Randomize a reasonable rating if not provided
                        api_rating = random.randint(72, 85)
                    
                    api_rating = min(99, max(50, api_rating))
                    
                    pos = normalize_position(game_stats.get("position"))
                    club = stats.get("team", {}).get("name") or 'Free Agent'
                    base_price = calculate_base_price(api_rating)
                    
                    results.append({
                        "id": f"api_{p.get('id')}",
                        "name": p.get("name"),
                        "position": pos,
                        "rating": api_rating,
                        "club": club,
                        "nationality": p.get("nationality") or 'Unknown',
                        "basePrice": base_price,
                        "photo": p.get("photo") or f"https://ui-avatars.com/api/?name={urllib.parse.quote(p.get('name', ''))}&background=random&size=150"
                    })
        except Exception as err:
            print(f"Error fetching from API-Football, falling back to local DB: {err}")

    # Fallback to Local Database if external API is disabled or returned empty
    if not results:
        if not norm_query:
            # If query is empty, return 50 random players from database
            results = random.sample(LOCAL_DATABASE, min(50, len(LOCAL_DATABASE)))
        else:
            # Perform case-insensitive match on name, club, or nationality
            results = [
                p for p in LOCAL_DATABASE
                if (
                    norm_query in p.get("name", "").lower() or
                    norm_query in p.get("club", "").lower() or
                    norm_query in p.get("nationality", "").lower()
                )
            ]
            results = results[:50]  # Limit to 50 results

    # Save to cache
    PLAYER_CACHE[cache_key] = results
    return results
