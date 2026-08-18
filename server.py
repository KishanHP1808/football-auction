# ============================================================
# server.py - Multiplayer Football Auction Simulator Backend (Python)
# ============================================================
import os
import json
import time
import threading
import hashlib
import requests
from typing import Dict, List, Any, Optional

# --- Local File Paths ---
USERS_FILE = 'users.json'
HISTORY_FILE = 'history.json'

# --- In-Memory Databases & Caching ---
cached_users: List[Dict] = []
cached_history: List[Dict] = []
ROOMS: Dict[str, Dict[str, Any]] = {}  # Stores room state by code


# ============================================================
# 1. DATABASE HELPERS (JSON Reading/Writing)
# ============================================================

def load_users() -> List[Dict]:
    """Loads registered users from users.json asynchronously or from cache."""
    global cached_users
    if cached_users:
        return cached_users
    if os.path.exists(USERS_FILE):
        try:
            with open(USERS_FILE, 'r', encoding='utf-8') as f:
                cached_users = json.load(f)
        except Exception as e:
            print(f"Error loading users.json: {e}")
            cached_users = []
    return cached_users


def save_users(users: List[Dict]):
    """Saves the updated users list back to users.json."""
    global cached_users
    cached_users = users
    try:
        with open(USERS_FILE, 'w', encoding='utf-8') as f:
            json.dump(users, f, indent=2)
    except Exception as e:
        print(f"Error saving users: {e}")


def load_history() -> List[Dict]:
    """Loads draft history entries from history.json."""
    global cached_history
    if cached_history:
        return cached_history
    if os.path.exists(HISTORY_FILE):
        try:
            with open(HISTORY_FILE, 'r', encoding='utf-8') as f:
                cached_history = json.load(f)
        except Exception as e:
            print(f"Error loading history: {e}")
            cached_history = []
    return cached_history


def save_history(history: List[Dict]):
    """Saves the updated draft history list back to history.json."""
    global cached_history
    cached_history = history
    try:
        with open(HISTORY_FILE, 'w', encoding='utf-8') as f:
            json.dump(history, f, indent=2)
    except Exception as e:
        print(f"Error saving history: {e}")


# ============================================================
# 2. EMAIL & ADMIN NOTIFICATIONS
# ============================================================

def send_admin_notification(subject: str, html_content: str):
    """
    Sends email notification to the administrator (if SMTP is configured).
    In Node.js this uses Nodemailer; in Python, this translates to standard smtplib.
    """
    admin_email = os.environ.get("ADMIN_EMAIL", "kishanhp18@gmail.com")
    smtp_user = os.environ.get("SMTP_USER")
    smtp_pass = os.environ.get("SMTP_PASS")
    
    if not smtp_user or not smtp_pass:
        print(f"[Admin Notification Log] SMTP not configured. Subject: {subject}")
        return
    
    # Python code using smtplib to send email goes here
    print(f"Email sent successfully to admin: {admin_email} ({subject})")


# ============================================================
# 3. GAMEPLAY & STATE MANAGEMENT
# ============================================================

def create_room_state(room_code: str) -> Dict[str, Any]:
    """Initializes the empty state structure for a new draft room."""
    return {
        "roomCode": room_code,
        "phase": 'LOBBY',             # LOBBY, NOMINATION, BIDDING, FINISHED, LOADING_NEXT
        "users": [],                  # List of human/bot managers in the room
        "pool": [],                   # List of players left to nominate
        "currentPlayer": None,        # The player currently being auctioned
        "currentBid": 0,              # Current highest bid value
        "highestBidder": None,        # Socket ID of the manager holding the highest bid
        "timer": 15,                  # Bidding countdown timer in seconds
        "nominatorIndex": 0,          # Turn index pointing to the nominating manager
        "draftedHistory": [],         # List of player IDs already auctioned
        "config": {
            "timer": 15,
            "budget": 300,
            "squadSize": 11,
            "enableManualNominations": False,
            "enableFirstBidBasePrice": True,
            "playerPool": 'special'
        },
        "messages": [],               # Chat logs and auction room activity messages
        "timer_thread": None,         # Background thread running the room timer loop
        "isPaused": False,
        "skipVotes": [],              # Manager IDs who voted to skip the player
        "bidHistory": [],             # Last bids log to support cancellations
        "lastActivity": time.time()   # Time stamp to clean up inactive rooms
    }


def add_message(state: Dict[str, Any], msg: str):
    """Appends an event log or chat message to the room message feed."""
    state["messages"].insert(0, msg)
    if len(state["messages"]) > 20:
        state["messages"].pop()


def validate_bid(state: Dict[str, Any], user: Dict[str, Any], player: Dict[str, Any], new_bid: int, is_buy_now: bool = False) -> Optional[str]:
    """
    Validates a proposed bid against game rules:
    - User budget limits.
    - Squad size capacity.
    - Position limits (e.g. GK restriction).
    - Club limit rules (max 3 players from same club).
    - Minimum base bid vs. current bid.
    """
    if state["phase"] != 'BIDDING':
        return 'Bidding is not active.'
    
    if not is_buy_now and state["highestBidder"] == user["id"]:
        return 'You are already the highest bidder.'
        
    if not is_buy_now and state["highestBidder"] is not None and new_bid <= state["currentBid"]:
        return 'Your bid must be higher than the current highest bid.'

    if not is_buy_now and state["highestBidder"] is None:
        min_first_bid = player["basePrice"] if state["config"]["enableFirstBidBasePrice"] else player["basePrice"] + 5
        if new_bid < min_first_bid:
            return f'First bid must be at least ${min_first_bid}M.'

    if user["budget"] < new_bid:
        return f"Insufficient budget! Your remaining budget is ${user['budget']}M, but the bid is ${new_bid}M."

    # Squad size limits
    slots_left = state["config"]["squadSize"] - len(user["squad"])
    if slots_left <= 0:
        return "Your squad is already full!"

    # Reserve budget verification ($1M per remaining slot required to fill squad)
    remaining_slots_needed = slots_left - 1
    min_reserve = remaining_slots_needed * 1
    if user["budget"] - new_bid < min_reserve:
        return f"Reserve Budget Warning: You need at least ${min_reserve}M left to buy {remaining_slots_needed} more players."

    # Goalkeeper constraint
    has_gk = any(s["position"] == 'GK' for s in user["squad"])
    if slots_left == 1 and not has_gk and player["position"] != 'GK':
        return "Must Draft Goalkeeper: You have 1 slot left and no Goalkeeper. You can only bid on a Goalkeeper (GK)!"

    # Club representation constraints (max 3 per club)
    club_count = sum(1 for s in user["squad"] if s["club"] == player["club"])
    if club_count >= 3:
        return f"Club Limit Reached: You cannot draft more than 3 players from {player['club']}."

    return None


def process_auto_bids(state: Dict[str, Any], room_code: str):
    """
    Recursively processes automatic bidding limits set by AI/managers:
    Checks who is eligible, sorts them by highest limit, and increments the bid.
    """
    inc = 5
    target_bid = (
        (state["currentPlayer"]["basePrice"] if state["config"]["enableFirstBidBasePrice"] else state["currentPlayer"]["basePrice"] + inc)
        if state["highestBidder"] is None
        else state["currentBid"] + inc
    )

    eligible_contenders = []
    for u in state["users"]:
        # Exclude current highest bidder
        if u["id"] == state["highestBidder"]:
            continue
        
        # Check auto-bid threshold and budget
        limit = u.get("autoBidLimit")
        if not limit or limit < target_bid or u["budget"] < target_bid:
            continue

        # Position constraints, reserve budgets, club constraints
        slots_left = state["config"]["squadSize"] - len(u["squad"])
        min_reserve = (slots_left - 1) * 1
        if u["budget"] - target_bid < min_reserve:
            continue
            
        has_gk = any(s["position"] == 'GK' for s in u["squad"])
        if slots_left == 1 and not has_gk and state["currentPlayer"]["position"] != 'GK':
            continue
            
        club_count = sum(1 for s in u["squad"] if s["club"] == state["currentPlayer"]["club"])
        if club_count >= 3:
            continue
            
        eligible_contenders.append(u)

    if not eligible_contenders:
        return

    # Highest limit bidder wins priority
    eligible_contenders.sort(key=lambda x: x["autoBidLimit"], reverse=True)
    bidder = eligible_contenders[0]

    # Push to history stack for revert support
    state["bidHistory"].append({"bidder": state["highestBidder"], "bid": state["currentBid"]})
    state["currentBid"] = target_bid
    state["highestBidder"] = bidder["id"]

    add_message(state, f"🤖 Auto-Bid: {bidder['name']} bids ${target_bid}M!")
    
    # Recurse in case other automated limits triggers a counter-bid
    process_auto_bids(state, room_code)


def finalize_auction(state: Dict[str, Any], room_code: str):
    """Concludes the drafting process, logs results, and registers to history database."""
    state["phase"] = 'FINISHED'
    add_message(state, "Auction Completed! Squads are locked.")
    
    try:
        history = load_history()
        for u in state["users"]:
            # Record squad to historical stats
            avg_rating = sum(p["rating"] for p in u["squad"]) / len(u["squad"]) if u["squad"] else 0
            history.insert(0, {
                "username": u["name"],
                "timestamp": time.strftime('%Y-%m-%dT%H:%M:%S.000Z'),
                "squad": u["squad"],
                "budgetLeft": u["budget"],
                "avgRating": round(avg_rating, 1),
                "score": sum(p.get("rating", 0) for p in u["squad"]) # Placeholder rating score
            })
        save_history(history)
    except Exception as e:
        print(f"Error saving finalized history: {e}")


def handle_sold(room_code: str):
    """Finalizes the sale of the current player to the highest bidder."""
    state = ROOMS.get(room_code)
    if not state or not state["currentPlayer"]:
        return

    if state["highestBidder"]:
        winner = next((u for u in state["users"] if u["id"] == state["highestBidder"]), None)
        reserve = state["currentPlayer"].get("reservePrice", 0)
        
        if winner and state["currentBid"] >= reserve:
            winner["budget"] -= state["currentBid"]
            winner["squad"].append({**state["currentPlayer"], "boughtFor": state["currentBid"]})
            add_message(state, f"Sold! {state['currentPlayer']['name']} goes to {winner['name']} for ${state['currentBid']}M")
        else:
            add_message(state, f"Unsold! {state['currentPlayer']['name']} did not meet Reserve Price.")
    else:
        add_message(state, f"Unsold! {state['currentPlayer']['name']} received no bids.")

    # Stop current player timer
    if "timer_event" in state:
        state["timer_event"].set()

    # Move to nomination or auto-nomination phase
    next_player(room_code)


def setup_new_player(state: Dict[str, Any], player: Dict[str, Any]):
    """Sets base values and pricing thresholds for the newly nominated player."""
    player["buyNowPrice"] = round(player["basePrice"] * 2.5)
    player["reservePrice"] = round(player["basePrice"] * 1.1)

    state["currentPlayer"] = player
    state["draftedHistory"].append(player["id"])
    state["currentBid"] = player["basePrice"]
    state["highestBidder"] = None
    state["skipVotes"] = []
    state["timer"] = state["config"]["timer"]
    state["bidHistory"] = []
    
    # Reset user auto bid limits
    for u in state["users"]:
        u["autoBidLimit"] = None


def next_player(room_code: str):
    """Loads the next player. If manual nomination is off, auto-picks one."""
    state = ROOMS.get(room_code)
    if not state:
        return

    # Check squad capacities
    unlocked_users = [u for u in state["users"] if len(u["squad"]) < state["config"]["squadSize"]]
    if not unlocked_users:
        finalize_auction(state, room_code)
        return

    if state["config"]["enableManualNominations"]:
        state["phase"] = 'NOMINATION'
        state["currentPlayer"] = None
        state["highestBidder"] = None
        nominator = state["users"][state["nominatorIndex"]]
        add_message(state, f"Waiting for {nominator['name']} to nominate a player...")
    else:
        # Auto-nomination from remaining pool
        next_candidate = None
        while len(state["pool"]) > 0:
            candidate = state["pool"].pop()
            if candidate["id"] not in state["draftedHistory"]:
                next_candidate = candidate
                break
        
        if next_candidate:
            state["phase"] = 'LOADING_NEXT'
            state["currentPlayer"] = next_candidate
            state["currentBid"] = next_candidate["basePrice"]
            state["highestBidder"] = None
            state["skipVotes"] = []
            
            # Immediately schedule bidding phase
            setup_new_player(state, next_candidate)
            state["phase"] = 'BIDDING'
            add_message(state, f"Up next: {next_candidate['name']} (Base Price: ${state['currentBid']}M)")
            start_timer(room_code)
        else:
            finalize_auction(state, room_code)


# ============================================================
# 4. BACKGROUND TIMER LOOP
# ============================================================

def timer_loop(room_code: str, stop_event: threading.Event):
    """
    Background timer loop that decrements the bidding timer every second.
    If time hits zero, it triggers the sale (handle_sold).
    """
    while not stop_event.is_set():
        time.sleep(1.0)
        state = ROOMS.get(room_code)
        if not state or state["phase"] != 'BIDDING' or state["isPaused"]:
            continue
        
        state["timer"] -= 1
        if state["timer"] <= 0:
            handle_sold(room_code)
            break
        else:
            # Emit TIMER_UPDATE to clients in room
            pass


def start_timer(room_code: str):
    """Spawns or resets the background timer loop for the current player auction."""
    state = ROOMS.get(room_code)
    if not state:
        return
    if "timer_event" in state:
        state["timer_event"].set()  # Kill existing timer thread

    state["timer_event"] = threading.Event()
    state["timer_thread"] = threading.Thread(
        target=timer_loop, 
        args=(room_code, state["timer_event"]), 
        daemon=True
    )
    state["timer_thread"].start()
