# ============================================================
# client_logic.py - Frontend Client State & Event Machine (Python Version)
# ============================================================
import urllib.parse
from typing import Dict, List, Any, Optional

class FootballAuctionClient:
    """
    Simulates the client-side state machine and WebSocket interaction
    normally running inside public/app.js.
    """
    def __init__(self):
        # --- Client State ---
        self.socket_connected = False
        self.my_id: Optional[str] = None
        self.is_host = False
        self.current_user: Optional[str] = None
        self.current_email: Optional[str] = None
        self.current_room_code: Optional[str] = None
        self.sound_enabled = True
        
        # State snapshot received from the server
        self.global_state: Optional[Dict[str, Any]] = None
        
        # UI Simulation Routing State
        self.current_view = "lobby-view"  # e.g., lobby-view, auction-view, squad-view, database-view

    # ============================================================
    # 1. VIEW ROUTING & STATE SYNC
    # ============================================================

    def switch_view(self, view_name: str):
        """Changes the active view and pulls fresh logs if required (switchView in JS)."""
        self.current_view = view_name
        print(f"UI Router: Switched view to #{view_name}")
        
        if view_name == 'squad-view':
            self.render_squads_grid()
        elif view_name == 'database-view':
            self.render_players_db()
        elif view_name == 'tracker-view':
            self.update_leaderboard()
        elif view_name == 'history-view':
            self.load_draft_history()
        elif view_name == 'summary-view':
            self.render_tournament_summary()

    def sync_state(self, server_state: Dict[str, Any]):
        """
        Processes major state synchronization payloads from the server (socket.on('STATE_UPDATE')).
        Triggers corresponding UI rendering components.
        """
        self.global_state = server_state
        self.current_room_code = server_state.get("roomCode")
        
        # Find self user attributes
        me = next((u for u in server_state.get("users", []) if u["id"] == self.my_id), None)
        if me:
            self.is_host = me.get("isHost", False)

        phase = server_state.get("phase")
        print(f"State Synced: Phase is {phase} in Room {self.current_room_code}")

        # Dispatch updates based on the current phase
        if phase == 'LOBBY':
            self.switch_view("lobby-view")
            self.render_lobby_users()
        elif phase in ('BIDDING', 'LOADING_NEXT'):
            self.switch_view("auction-view")
            self.render_auction_arena()
        elif phase == 'FINISHED':
            self.switch_view("summary-view")

    # ============================================================
    # 2. USER INITIATED INTERACTIVE ACTIONS (onclick events)
    # ============================================================

    def create_room(self, pool_mode: str = 'special'):
        """Emits room creation event to server."""
        if not self.current_user:
            self.show_toast("Please sign in first.")
            return
        
        print(f"Socket Emit: CREATE_ROOM (Pool: {pool_mode})")
        # In JS: socket.emit('CREATE_ROOM', poolMode);

    def join_room(self, code: str):
        """Emits join request with user identity."""
        if not self.current_user:
            self.show_toast("Please sign in first.")
            return
        
        clean_code = code.strip().upper()
        print(f"Socket Emit: JOIN_ROOM (Room: {clean_code}, Name: {self.current_user})")
        # In JS: socket.emit('JOIN_ROOM', { name: currentUser, email: currentEmail, roomCode: code });

    def place_bid(self, increment: int = 5):
        """Sends bid increment request to server."""
        if not self.global_state or self.global_state.get("phase") != 'BIDDING':
            return
        
        print(f"Socket Emit: PLACE_BID (Increment: +${increment}M)")
        # In JS: socket.emit('PLACE_BID', increment);

    def buy_now(self):
        """Instantly drafts the player at the buy-now price threshold."""
        print("Socket Emit: BUY_NOW")
        # In JS: socket.emit('BUY_NOW');

    def cancel_last_bid(self):
        """Reverts the last bid. Only valid for the highest bidder."""
        print("Socket Emit: CANCEL_LAST_BID")
        # In JS: socket.emit('CANCEL_LAST_BID');

    def set_auto_bid(self, max_limit: int):
        """Activates auto-bidding up to a maximum budget limit."""
        print(f"Socket Emit: SET_AUTO_BID (Max Limit: ${max_limit}M)")
        # In JS: socket.emit('SET_AUTO_BID', limit);

    def logout(self):
        """Clears local storage values, triggers logged out status, and resets."""
        self.current_user = None
        self.current_email = None
        # In JS:
        # localStorage.removeItem('auction_username');
        # localStorage.removeItem('auction_email');
        # localStorage.setItem('auction_logged_out', 'true');
        print("Cleared session data. Reloading page...")

    # ============================================================
    # 3. MOCK UI RENDER PLACEHOLDERS
    # ============================================================

    def render_lobby_users(self):
        """Updates the room lobby list in the HTML DOM."""
        if not self.global_state:
            return
        users = self.global_state.get("users", [])
        print(f"UI Render: Listing {len(users)} connected managers in the lobby.")

    def render_auction_arena(self):
        """
        Updates the bidding cards, nominator details, player ratings, photos,
        and dynamically determines the bid button increments layout (+Base vs. +$5M).
        """
        if not self.global_state:
            return
        
        p = self.global_state.get("currentPlayer")
        is_first_bid = self.global_state.get("highestBidder") is None
        allow_base = is_first_bid and self.global_state["config"].get("enableFirstBidBasePrice") != False
        
        # Calculate Bidding options UI layout
        increments = [0, 5, 15] if allow_base else [5, 15, 25]
        print(f"UI Render: Auctioning {p['name']} (Base: ${p['basePrice']}M). Bids options: {increments}")

    def render_squads_grid(self):
        """Populates manager squad arrays in the squads tab."""
        pass

    def render_players_db(self):
        """Displays database filter listings."""
        pass

    def update_leaderboard(self):
        """Renders leaderboard progress during live drafting."""
        pass

    def load_draft_history(self):
        """Fetches past user squads from /api/history database."""
        pass

    def render_tournament_summary(self):
        """Displays final career achievements and fantasy points standings."""
        pass

    def show_toast(self, message: str):
        """Displays a temporary float popup toast."""
        print(f"[Toast Alert]: {message}")
