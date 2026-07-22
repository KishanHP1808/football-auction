/* ============================================================
   app.js – Multiplayer Football Auction Simulator Client
   ============================================================ */

const socket = io();
let myId = null;
let isHost = false;
let globalState = null;
let soundEnabled = true;
let currentUser = null;
let currentEmail = null;
let currentRoomCode = null;
let lastSpokenPlayerId = null;

function escapeHTML(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}

function showCreateRoom(poolMode = 'special') {
  if (!currentUser) {
    showToast("Please sign in first.");
    return;
  }
  socket.emit('CREATE_ROOM', poolMode);
}

function showJoinRoom() {
  $('#lobby-choice-container').style.display = 'none';
  $('#lobby-join-panel').style.display = 'block';
  $('#join-room-error').style.display = 'none';
  $('#join-room-code-input').value = '';
  $('#join-room-code-input').focus();
}

function backToLobbyChoices() {
  $('#lobby-choice-container').style.display = 'flex';
  $('#lobby-join-panel').style.display = 'none';
}

function submitJoinRoom() {
  const code = $('#join-room-code-input').value.trim().toUpperCase();
  const errDiv = $('#join-room-error');

  if (!code || code.length !== 4) {
    errDiv.textContent = "Please enter a valid 4-letter room code.";
    errDiv.style.display = 'block';
    return;
  }

  if (!currentUser) {
    errDiv.textContent = "Please sign in first.";
    errDiv.style.display = 'block';
    return;
  }

  socket.emit('JOIN_ROOM', { name: currentUser, email: currentEmail, roomCode: code });
}

function copyRoomCode() {
  if (!globalState || !globalState.roomCode) return;
  navigator.clipboard.writeText(globalState.roomCode)
    .then(() => showToast(`Room code ${globalState.roomCode} copied to clipboard!`))
    .catch(() => showToast("Failed to copy code."));
}

async function handleLogin() {
  const username = $('#login-username').value.trim();
  const password = $('#login-password').value.trim();
  const errDiv = $('#login-error');

  if (!username || !password) {
    errDiv.textContent = "Please enter username and password.";
    errDiv.style.display = 'block';
    return;
  }

  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (res.ok && data.success) {
      currentUser = data.username;
      currentEmail = data.email || '';
      errDiv.style.display = 'none';
      $('#login-overlay').style.display = 'none';
      $('#user-profile').innerHTML = `👤 ${escapeHTML(currentUser)}`;
      if ($('#logout-btn')) $('#logout-btn').style.display = 'flex';
      $('#manager-name').value = currentUser;

      // Save credentials for auto login on same device
      localStorage.setItem('auction_username', currentUser);
      localStorage.setItem('auction_email', currentEmail);

      showToast(`Logged in as ${currentUser}`);
      loadDraftHistory();
    } else {
      errDiv.textContent = data.error || "Login failed.";
      errDiv.style.display = 'block';
    }
  } catch (err) {
    errDiv.textContent = "Server connection error.";
    errDiv.style.display = 'block';
  }
}

function handleLogout() {
  localStorage.removeItem('auction_username');
  localStorage.removeItem('auction_email');
  currentUser = null;
  currentEmail = null;
  showToast("Logged out successfully.");
  window.location.reload();
}

async function handleRegister() {
  const username = $('#login-username').value.trim();
  const password = $('#login-password').value.trim();
  const email = $('#login-email').value.trim();
  const errDiv = $('#login-error');

  if (!username || !password || !email) {
    errDiv.textContent = "Please enter username, password, and email.";
    errDiv.style.display = 'block';
    return;
  }

  try {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, email })
    });
    const data = await res.json();
    if (res.ok && data.success) {
      errDiv.style.display = 'none';
      showToast("Account created successfully! You can now Sign In.");
    } else {
      errDiv.textContent = data.error || "Registration failed.";
      errDiv.style.display = 'block';
    }
  } catch (err) {
    errDiv.textContent = "Server connection error.";
    errDiv.style.display = 'block';
  }
}

async function loadDraftHistory() {
  if (!currentUser) return;
  const list = $('#history-list');
  if (!list) return;

  try {
    const res = await fetch(`/api/history?username=${encodeURIComponent(currentUser)}`);
    const history = await res.json();

    if (history.length === 0) {
      list.innerHTML = `<p style="color:var(--text-muted); text-align:center; padding:3rem 0;">No past draft history found. Complete an auction to save your first squad!</p>`;
      return;
    }

    list.innerHTML = history.map(item => {
      const date = new Date(item.timestamp).toLocaleDateString() + ' ' + new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      return `
        <div class="panel" style="padding:1.5rem; background:rgba(255,255,255,0.01); border-color:var(--glass-border); margin-bottom:1rem; text-align:left;">
          <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:0.75rem; margin-bottom:1rem;">
            <div>
              <h3 style="color:var(--primary-neon); margin-bottom:0.25rem; font-size:1.1rem;">Draft on ${date}</h3>
              <span style="font-size:0.75rem; color:var(--text-secondary);">Avg Rating: <b>${item.avgRating}</b> &bull; Budget Left: <b>$${item.budgetLeft}M</b></span>
            </div>
            <div style="text-align:right;">
              <span style="font-size:0.65rem; color:var(--text-muted); display:block; text-transform:uppercase;">Score</span>
              <span style="font-size:1.5rem; font-weight:800; color:var(--success-neon); font-family:var(--font-display);">${item.score}</span>
            </div>
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(130px, 1fr)); gap:0.75rem;">
            ${item.squad.map(p => `
              <div style="padding:0.5rem; background:rgba(8,11,17,0.4); border:1px solid var(--glass-border); border-radius:6px; font-size:0.75rem; display:flex; flex-direction:column; align-items:center; text-align:center;">
                <span class="badge-position ${p.position}" style="font-size:0.6rem; padding:0.05rem 0.25rem; margin-bottom:0.25rem;">${p.position}</span>
                <span style="font-weight:bold; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; width:100%;">${p.name.split(' ').pop()}</span>
                <span style="color:var(--success-neon); font-size:0.65rem; margin-top:0.2rem;">$${p.boughtFor}M &bull; RTG: ${p.rating}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }).join('');
  } catch (err) {
    list.innerHTML = `<p style="color:var(--danger-neon); text-align:center; padding:3rem 0;">Failed to load draft history.</p>`;
  }
}

// Tactical positions coordinates for Pitch Layout
const FORMATIONS = {
  '4-3-3': [
    { id: 'gk', label: 'GK', pos: 'GK', top: 85, left: 50 },
    { id: 'lb', label: 'LB', pos: 'DF', top: 65, left: 15 },
    { id: 'lcb', label: 'LCB', pos: 'DF', top: 70, left: 36 },
    { id: 'rcb', label: 'RCB', pos: 'DF', top: 70, left: 64 },
    { id: 'rb', label: 'RB', pos: 'DF', top: 65, left: 85 },
    { id: 'lcm', label: 'LCM', pos: 'MF', top: 45, left: 25 },
    { id: 'cm', label: 'CM', pos: 'MF', top: 50, left: 50 },
    { id: 'rcm', label: 'RCM', pos: 'MF', top: 45, left: 75 },
    { id: 'lw', label: 'LW', pos: 'FW', top: 22, left: 20 },
    { id: 'st', label: 'ST', pos: 'FW', top: 15, left: 50 },
    { id: 'rw', label: 'RW', pos: 'FW', top: 22, left: 80 }
  ],
  '4-4-2': [
    { id: 'gk', label: 'GK', pos: 'GK', top: 85, left: 50 },
    { id: 'lb', label: 'LB', pos: 'DF', top: 68, left: 15 },
    { id: 'lcb', label: 'LCB', pos: 'DF', top: 72, left: 36 },
    { id: 'rcb', label: 'RCB', pos: 'DF', top: 72, left: 64 },
    { id: 'rb', label: 'RB', pos: 'DF', top: 68, left: 85 },
    { id: 'lm', label: 'LM', pos: 'MF', top: 45, left: 15 },
    { id: 'lcm', label: 'LCM', pos: 'MF', top: 48, left: 38 },
    { id: 'rcm', label: 'RCM', pos: 'MF', top: 48, left: 62 },
    { id: 'rm', label: 'RM', pos: 'MF', top: 45, left: 85 },
    { id: 'ls', label: 'LS', pos: 'FW', top: 18, left: 35 },
    { id: 'rs', label: 'RS', pos: 'FW', top: 18, left: 65 }
  ],
  '3-5-2': [
    { id: 'gk', label: 'GK', pos: 'GK', top: 85, left: 50 },
    { id: 'lcb', label: 'LCB', pos: 'DF', top: 70, left: 25 },
    { id: 'cb', label: 'CB', pos: 'DF', top: 74, left: 50 },
    { id: 'rcb', label: 'RCB', pos: 'DF', top: 70, left: 75 },
    { id: 'ldm', label: 'LDM', pos: 'MF', top: 52, left: 30 },
    { id: 'rdm', label: 'RDM', pos: 'MF', top: 52, left: 70 },
    { id: 'lm', label: 'LM', pos: 'MF', top: 40, left: 15 },
    { id: 'am', label: 'AM', pos: 'MF', top: 38, left: 50 },
    { id: 'rm', label: 'RM', pos: 'MF', top: 40, left: 85 },
    { id: 'ls', label: 'LS', pos: 'FW', top: 18, left: 35 },
    { id: 'rs', label: 'RS', pos: 'FW', top: 18, left: 65 }
  ]
};

// Tactical assignments per manager: managerId -> { nodeId: player }
let tacticalAssignments = {};
// Live points tracking
let liveSquadPoints = {};
let livePlayerPoints = {};
let trackingSimulationActive = false;

// ──────────────── AUDIO HELPERS ────────────────
function playBlip(freq, duration, type = 'sine') {
  if (!soundEnabled) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // blocked or not supported
  }
}

function playBidSound() { playBlip(580, 0.12, 'triangle'); }
function playSoldSound() { playBlip(880, 0.35, 'sine'); setTimeout(() => playBlip(1100, 0.25, 'sine'), 100); }
function playUnsoldSound() { playBlip(220, 0.45, 'sawtooth'); }
function playTickSound() { playBlip(440, 0.04, 'sine'); }
function playCheerSound() {
  playBlip(523.25, 0.15);
  setTimeout(() => playBlip(659.25, 0.15), 100);
  setTimeout(() => playBlip(783.99, 0.3), 200);
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  const btn = $('#sound-btn');
  if (btn) btn.textContent = soundEnabled ? '🔊' : '🔇';
}

// Mobile hamburger nav toggle
function toggleMobileNav() {
  const nav = document.getElementById('main-nav');
  const btn = document.getElementById('hamburger-btn');
  if (nav && btn) {
    nav.classList.toggle('open');
    btn.classList.toggle('active');
  }
}

function closeMobileNav() {
  const nav = document.getElementById('main-nav');
  const btn = document.getElementById('hamburger-btn');
  if (nav && btn) {
    nav.classList.remove('open');
    btn.classList.remove('active');
  }
}

// ──────────────── UTILITY HELPERS ────────────────
function $(sel) { return document.querySelector(sel); }
function $$(sel) { return document.querySelectorAll(sel); }

function showToast(msg) {
  const old = document.querySelector('.toast');
  if (old) old.remove();
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 4000);
}

function switchView(viewId) {
  $$('.view').forEach(v => v.classList.remove('active-view'));
  const target = $(`#${viewId}`);
  if (target) target.classList.add('active-view');

  $$('.nav-btn').forEach(b => b.classList.remove('active'));
  const navBtn = $(`.nav-btn[data-view="${viewId}"]`);
  if (navBtn) navBtn.classList.add('active');

  // Close mobile nav when switching views
  closeMobileNav();

  // Scroll to top on view change for mobile
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ──────────────── SOCKET LISTENERS ────────────────

socket.on('connect', () => {
  if (currentUser && currentRoomCode) {
    socket.emit('JOIN_ROOM', { name: currentUser, email: currentEmail, roomCode: currentRoomCode });
  }
});

socket.on('JOINED', (user) => {
  myId = user.id;
  isHost = user.isHost;
  if (isHost) {
    showToast("You are the Host! Set up the rules and start the auction.");
    if ($('#start-btn')) $('#start-btn').style.display = 'block';
  } else {
    if ($('#start-btn')) $('#start-btn').style.display = 'none';
  }
});

socket.on('ERROR', (msg) => {
  showToast("⚠️ " + msg);
  playBlip(180, 0.35, 'sawtooth');
  const errDiv = $('#join-room-error');
  if (errDiv && $('#lobby-join-panel').style.display === 'block') {
    errDiv.textContent = msg;
    errDiv.style.display = 'block';
  }
});

socket.on('AUTO_BID_RESPONSE', (res) => {
  if (res.success) {
    if (res.limit) {
      showToast(`🤖 Auto-Bid limit updated to $${res.limit}M!`);
    } else {
      showToast(`🤖 Auto-Bid limit disabled.`);
    }
  }
});

socket.on('ROOM_CREATED', (roomCode) => {
  currentRoomCode = roomCode;
  socket.emit('JOIN_ROOM', { name: currentUser, email: currentEmail, roomCode: roomCode });
});

socket.on('STATE_UPDATE', (state) => {
  const prevPhase = globalState ? globalState.phase : null;
  globalState = state;

  if (state.currentPlayer) {
    if (state.currentPlayer.id !== lastSpokenPlayerId) {
      lastSpokenPlayerId = state.currentPlayer.id;
      const readToggle = document.getElementById('read-aloud-toggle');
      if (readToggle && readToggle.checked) {
        if ('speechSynthesis' in window) {
          const msg = new SpeechSynthesisUtterance(`Up next: ${state.currentPlayer.name}`);
          window.speechSynthesis.speak(msg);
        }
      }
    }
  } else {
    lastSpokenPlayerId = null;
  }

  if (state.roomCode) {
    currentRoomCode = state.roomCode;
    $('#room-code-display').textContent = `ROOM CODE: ${state.roomCode}`;
    $('#lobby-choice-container').style.display = 'none';
    $('#lobby-join-panel').style.display = 'none';
    if ($('#leave-room-btn')) $('#leave-room-btn').style.display = 'block';
    $('#lobby-room-details').style.display = 'block';

    const me = state.users.find(u => u.id === myId);
    const host = state.users.find(u => u.isHost);
    if (me && !me.isHost) {
      $('#budget-input').disabled = true;
      $('#squad-size-input').disabled = true;
      $('#timer-input').disabled = true;
      $('#manual-nomination-input').disabled = true;
      if ($('#player-pool-select')) $('#player-pool-select').disabled = true;
      $('#start-btn').style.display = 'none';
      $('#lobby-setup-panel h2').textContent = `⚙️ Room Settings (Host: ${host?.name || 'Manager'})`;
    } else {
      $('#budget-input').disabled = false;
      $('#squad-size-input').disabled = false;
      $('#timer-input').disabled = false;
      $('#manual-nomination-input').disabled = false;
      if ($('#player-pool-select')) $('#player-pool-select').disabled = false;
      $('#start-btn').style.display = 'block';
      $('#lobby-setup-panel h2').textContent = `⚙️ Room Setup (You are Host)`;
    }
  }

  renderLobby();
  renderAuction();
  renderSquadSelect();

  // Transition alerts and sounds
  if (state.phase !== prevPhase) {
    if (state.phase === 'BIDDING') {
      switchView('auction-view');
      $$('.nav-btn').forEach(b => b.disabled = false);
      playBlip(480, 0.15, 'sine');
    } else if (state.phase === 'NOMINATION') {
      switchView('auction-view');
      $$('.nav-btn').forEach(b => b.disabled = false);
      const activeNominator = state.users[state.nominatorIndex];
      if (activeNominator && activeNominator.id === myId) {
        showToast("📢 It's your turn to nominate a player!");
        playCheerSound();
      } else {
        showToast(`Waiting for ${activeNominator?.name || 'nominator'} to nominate a player...`);
      }
    } else if (state.phase === 'SOLD') {
      if (state.highestBidder) {
        playSoldSound();
        if (state.highestBidder === myId && prevPhase !== 'SOLD') {
          showToast("🏆 Congratulations! You won the draft bid!");
          if (typeof confetti === 'function') {
            confetti({
              particleCount: 150,
              spread: 80,
              origin: { y: 0.6 }
            });
          }
        }
      } else {
        playUnsoldSound();
      }
    } else if (state.phase === 'FINISHED') {
      showToast("🏆 The auction is finished! Head over to the Live Tracker or Summary tab.");
      $('#nav-tracker').disabled = false;
      $('#nav-summary').disabled = false;
      playCheerSound();
      loadDraftHistory();
      setTimeout(() => renderSummary(), 500);
    }
  } else {
    // If a new bid came in
    if (state.phase === 'BIDDING' && prevPhase === 'BIDDING') {
      playBidSound();
    }
  }
});

socket.on('TIMER_UPDATE', (time) => {
  const timerCircle = $('#timer-circle');
  const timerVal = $('#timer-value');

  if (timerVal) timerVal.textContent = time + 's';

  if (timerCircle) {
    timerCircle.classList.remove('warning', 'danger');
    if (time <= 3) {
      timerCircle.classList.add('danger');
      playTickSound();
    } else if (time <= 6) {
      timerCircle.classList.add('warning');
    }
  }
});

socket.on('SEARCH_RESULTS', (results) => {
  renderNominationResults(results);
});

socket.on('TOURNAMENT_RESULTS', (results) => {
  renderTournamentResults(results);
});

// ──────────────── LOBBY LOGIC ────────────────

function renderLobby() {
  if (!globalState) return;

  // Update pool size preview based on selected mode
  const poolSelect = document.getElementById('player-pool-select');
  if (poolSelect && globalState.config && globalState.config.playerPool) {
    poolSelect.value = globalState.config.playerPool;
  }
  const poolMode = poolSelect ? poolSelect.value : 'special';
  const poolSize = poolMode === 'wc2026' ? (typeof WC2026_PLAYERS !== 'undefined' ? WC2026_PLAYERS.length : 0) : INITIAL_PLAYERS.length;
  if ($('#summary-pool')) $('#summary-pool').textContent = poolSize;
  if ($('#connected-count')) $('#connected-count').textContent = globalState.users.length;

  const list = $('#connected-players-list');
  if (list) {
    list.innerHTML = globalState.users.map(u =>
      `<li>${u.isHost ? '👑 ' : '👤 '} <b>${escapeHTML(u.name)}</b> ${u.id === myId ? '(You)' : ''}</li>`
    ).join('');
  }

  const me = globalState.users.find(u => u.id === myId);
  if (me && me.isHost !== isHost) {
    isHost = me.isHost;
    if (isHost && $('#start-btn')) $('#start-btn').style.display = 'block';
  }
}

function startAuction() {
  if (!isHost) return;
  const budget = parseInt($('#budget-input').value) || 300;
  const timer = parseInt($('#timer-input').value) || 15;
  const squadSize = parseInt($('#squad-size-input').value) || 11;
  const enableManualNominations = $('#manual-nomination-input').checked;

  // Determine player pool based on selection
  const poolSelect = document.getElementById('player-pool-select');
  const poolMode = poolSelect ? poolSelect.value : 'special';
  const pool = poolMode === 'wc2026' ? (typeof WC2026_PLAYERS !== 'undefined' ? WC2026_PLAYERS : []) : INITIAL_PLAYERS;

  socket.emit('START_AUCTION', {
    pool: pool,
    playerPool: poolMode,
    budget: budget,
    timer: timer,
    squadSize: squadSize,
    enableManualNominations: enableManualNominations
  });
}

// ──────────────── LIVE AUCTION LOGIC ────────────────

function renderAuction() {
  if (!globalState) return;

  // Render Messages
  const logContainer = $('#log-container');
  if (logContainer) {
    logContainer.innerHTML = globalState.messages.map((m, i) => {
      let color = '#ccc';
      if (i === 0) color = 'var(--primary-neon)';
      if (m.includes('Sold!')) color = 'var(--success-neon)';
      if (m.includes('Unsold')) color = 'var(--danger-neon)';
      return `<div style="padding:6px 0; border-bottom:1px solid rgba(255,255,255,0.05); color:${color}">${escapeHTML(m)}</div>`;
    }).join('');
  }

  const cardArea = $('#nominated-card-area');
  const controls = $('#bidding-controls-area');
  const timerContainer = $('#timer-container');
  const nominationPanel = $('#nomination-panel');

  // ── Handle LOADING_NEXT: show skeleton card while server fetches photo ──
  if (globalState.phase === 'LOADING_NEXT') {
    timerContainer.style.display = 'none';
    nominationPanel.style.display = 'none';
    cardArea.style.display = 'block';
    controls.innerHTML = '';

    const p = globalState.currentPlayer;
    if (p) {
      cardArea.innerHTML = `
        <div class="player-card active-card" style="margin:0 auto; animation: pulse 1.2s infinite;">
          <div class="card-rating-badge"><span class="num">?</span><span class="pos">${p.position || '?'}</span></div>
          <div class="club-logo">${p.club || ''}</div>
          <div style="width:100px;height:100px;border-radius:50%;background:linear-gradient(135deg,rgba(0,242,254,0.15),rgba(0,255,135,0.08));margin:0 auto 1rem;display:flex;align-items:center;justify-content:center;font-size:2.5rem;animation:pulse 1.2s infinite;">&#9917;</div>
          <div class="player-card-info">
            <div class="name">${p.name}</div>
            <div class="meta" style="color:var(--text-secondary);">${p.nationality || ''}</div>
            <div style="margin-top:0.75rem;font-size:0.78rem;color:var(--primary-neon);animation:pulse 1.2s infinite;">Loading next player…</div>
          </div>
        </div>
      `;
    } else {
      cardArea.innerHTML = `<div class="empty-card-placeholder"><h3 style="color:var(--primary-neon);">Loading next player…</h3></div>`;
    }
    return;
  }

  // Switch between Nomination and Bidding view modes
  if (globalState.phase === 'NOMINATION') {
    timerContainer.style.display = 'none';
    cardArea.style.display = 'none';
    controls.innerHTML = '';

    // Show nomination controls
    nominationPanel.style.display = 'block';

    const activeNominator = globalState.users[globalState.nominatorIndex];
    const isMyTurn = activeNominator && activeNominator.id === myId;
    const searchInput = $('#nomination-search');

    if (isMyTurn) {
      searchInput.disabled = false;
      $('#nomination-panel h3').textContent = '🗳️ Your Turn to Nominate!';
      $('#nomination-panel h3').style.color = 'var(--success-neon)';
    } else {
      searchInput.disabled = true;
      $('#nomination-panel h3').textContent = `🗳️ Waiting for Nomination`;
      $('#nomination-panel h3').style.color = 'var(--text-secondary)';
      $('#nomination-panel p').textContent = `Please wait while ${activeNominator?.name || 'nominator'} selects a player...`;
    }
  } else if (globalState.phase === 'BIDDING' || globalState.phase === 'SOLD') {
    nominationPanel.style.display = 'none';
    timerContainer.style.display = 'flex';
    cardArea.style.display = 'block';

    if (globalState.currentPlayer) {
      const p = globalState.currentPlayer;
      const photoUrl = p.photo || ('https://ui-avatars.com/api/?name=' + encodeURIComponent(p.name) + '&background=random&size=150');

      let tierClass = 'bronze-tier';
      if (p.rating >= 85) tierClass = 'gold-tier';
      else if (p.rating >= 78) tierClass = 'silver-tier';

      let timerAlertClass = '';
      let timerAlertText = '';
      if (globalState.timer <= 3 && globalState.highestBidder !== null) {
        timerAlertClass = 'going-twice';
        timerAlertText = '<div style="color:var(--danger-neon); font-weight:800; font-size:1.1rem; text-shadow:0 0 10px rgba(255,0,127,0.5); text-transform:uppercase; margin-top:0.5rem; animation:pulse 0.4s infinite alternate;">🔥 Going Twice!</div>';
      } else if (globalState.timer <= 6 && globalState.highestBidder !== null) {
        timerAlertClass = 'going-once';
        timerAlertText = '<div style="color:var(--warning-neon); font-weight:800; font-size:1rem; text-shadow:0 0 10px rgba(255,234,0,0.4); text-transform:uppercase; margin-top:0.5rem; animation:pulse 0.8s infinite alternate;">⚠️ Going Once!</div>';
      }

      const buyNowPrice = p.buyNowPrice || Math.round(p.basePrice * 2.5);
      const reservePrice = p.reservePrice || Math.round(p.basePrice * 1.1);

      cardArea.innerHTML = `
        <div class="player-card active-card ${tierClass} ${timerAlertClass}" style="margin: 0 auto;">
          <div class="card-rating-badge">
            <span class="num">${p.rating}</span>
            <span class="pos">${p.position}</span>
          </div>
          <div class="club-logo">${p.club}</div>
          <img src="${photoUrl}" class="player-photo-main" alt="${p.name}">
          <div class="player-card-info">
            <div class="name">${p.name}</div>
            <div class="meta">${p.nationality}</div>
            <div class="stats-grid" style="grid-template-columns: repeat(4, 1fr);">
              <div class="stat-item"><span class="val">${p.rating >= 85 ? 'Gold' : (p.rating >= 78 ? 'Silver' : 'Bronze')}</span><span class="lbl">TIER</span></div>
              <div class="stat-item"><span class="val">$${reservePrice}M</span><span class="lbl">RESERVE</span></div>
              <div class="stat-item"><span class="val">$${buyNowPrice}M</span><span class="lbl">BUY NOW</span></div>
              <div class="stat-item"><span class="val">$${p.basePrice}M</span><span class="lbl">BASE</span></div>
            </div>
            ${timerAlertText}
          </div>
        </div>
      `;

      const me = globalState.users.find(u => u.id === myId);
      const amIHighest = globalState.highestBidder === myId;

      if (globalState.phase === 'BIDDING') {
        const increments = globalState.highestBidder === null ? [5] : [5, 15, 25];

        const buttonsHtml = increments.map(inc => {
          let extra = 0;
          if (globalState.highestBidder === null) {
            extra = 0; // First bid is always the base price
          } else {
            extra = inc;
          }
          const nextBid = globalState.currentBid + extra;

          let disableBid = false;
          let bidButtonText = globalState.highestBidder === null ? `Bid Base Price ($${nextBid}M)` : `+$${inc}M (Bid $${nextBid}M)`;

          if (me) {
            const clubCount = me.squad.filter(s => s.club === p.club).length;
            const slotsLeft = globalState.config.squadSize - me.squad.length;
            const remainingSlotsNeeded = slotsLeft - 1;
            const minReserve = remainingSlotsNeeded * 1;
            const hasGK = me.squad.some(s => s.position === 'GK');

            if (amIHighest) {
              disableBid = true;
              bidButtonText = 'You Are Highest';
            } else if (me.squad.length >= globalState.config.squadSize) {
              disableBid = true;
              bidButtonText = 'Squad Full';
            } else if (clubCount >= 3) {
              disableBid = true;
              bidButtonText = 'Club Limit';
            } else if (me.budget < nextBid) {
              disableBid = true;
              bidButtonText = 'Cannot Afford';
            } else if (me.budget - nextBid < minReserve) {
              disableBid = true;
              bidButtonText = 'Reserve Warning';
            } else if (slotsLeft === 1 && !hasGK && p.position !== 'GK') {
              disableBid = true;
              bidButtonText = 'Must Buy GK';
            }
          } else {
            disableBid = true;
          }

          return `
            <button class="btn-primary" onclick="placeBid(${inc})" ${disableBid ? 'disabled' : ''} style="flex:1; font-size:0.85rem; padding: 0.6rem 0.4rem; white-space: nowrap; min-width: 100px;">
              ${bidButtonText}
            </button>
          `;
        }).join('');

        const buyNowPrice = p.buyNowPrice || Math.round(p.basePrice * 2.5);
        let disableBuyNow = false;
        let buyNowText = `⚡ Buy Now ($${buyNowPrice}M)`;
        if (me) {
          const slotsLeft = globalState.config.squadSize - me.squad.length;
          const minReserve = (slotsLeft - 1) * 1;
          if (me.squad.length >= globalState.config.squadSize) {
            disableBuyNow = true;
            buyNowText = 'Squad Full';
          } else if (me.budget < buyNowPrice || (me.budget - buyNowPrice < minReserve)) {
            disableBuyNow = true;
            buyNowText = 'Cannot Afford Buy Now';
          }
        } else {
          disableBuyNow = true;
        }

        const buyNowHtml = `
          <button class="btn-primary" onclick="buyNow()" ${disableBuyNow ? 'disabled' : ''} style="width:100%; margin-top:0.5rem; background:linear-gradient(135deg, #ff007f, #ff0055); border-color:#ff007f; color:#fff; font-weight:800; font-size:0.9rem; padding:0.6rem;">
            ${buyNowText}
          </button>
        `;

        let cancelBidHtml = '';
        if (amIHighest) {
          cancelBidHtml = `
            <button class="btn-secondary" onclick="cancelBid()" style="width:100%; margin-top:0.5rem; border-color:var(--danger-neon); color:var(--danger-neon); font-weight:bold; font-size:0.85rem; padding:0.6rem;">
              🔄 Cancel Last Bid
            </button>
          `;
        }

        const myAutoBid = me?.autoBidLimit;
        const autoBidHtml = `
          <div style="display:flex; gap:0.5rem; align-items:center; margin-top:0.75rem; width:100%; border:1px dashed var(--glass-border); padding:0.5rem; border-radius:8px; background:rgba(255,255,255,0.02);">
            <span style="font-size:0.78rem; color:var(--text-secondary); white-space:nowrap;">🤖 Auto-Bid:</span>
            <input type="number" id="auto-bid-limit" placeholder="Max Limit ($M)" value="${myAutoBid || ''}" style="flex:1; background:rgba(255,255,255,0.05); border:1px solid var(--glass-border); border-radius:6px; color:#fff; padding:0.3rem 0.5rem; font-size:0.8rem; text-align:center;">
            <button class="btn-primary" onclick="setAutoBid()" style="font-size:0.8rem; padding:0.35rem 0.75rem; margin:0; width:auto; border-radius:6px;">
              ${myAutoBid ? 'Update' : 'Enable'}
            </button>
          </div>
        `;

        const mySkipVote = globalState.skipVotes && globalState.skipVotes.includes(myId);
        const hasBidBeenRaised = globalState.highestBidder !== null;
        const skipVotesCount = globalState.skipVotes ? globalState.skipVotes.length : 0;
        const totalUsers = globalState.users.length;

        let skipBtnText = `Skip Player (${skipVotesCount}/${totalUsers})`;
        let isHostInstantSkip = false;

        if (isHost && !hasBidBeenRaised) {
          skipBtnText = `⏩ Skip Player (Host Instant)`;
          isHostInstantSkip = true;
        } else if (mySkipVote) {
          skipBtnText = `✓ Skip Voted (${skipVotesCount}/${totalUsers})`;
        }

        const skipBtnHtml = `
          <button class="btn-secondary" onclick="voteSkipPlayer()" ${mySkipVote && !isHostInstantSkip ? 'disabled' : ''} style="margin-top: 1rem; width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.5rem; border-color: var(--danger-neon); color: var(--danger-neon); font-weight: bold; background: rgba(255, 0, 127, 0.05); padding: 0.85rem;">
            ${skipBtnText}
          </button>
        `;

        let hostControlsHtml = '';
        if (isHost) {
          hostControlsHtml = `
            <div style="display:flex; gap:0.5rem; justify-content:center; margin-bottom:1rem; width:100%;">
              <button class="btn-secondary" onclick="togglePauseAuction()" style="flex:1; border-color:var(--warning-neon); color:var(--warning-neon); font-size:0.8rem; padding: 0.5rem; font-weight:bold;">
                ${globalState.isPaused ? '▶️ Resume' : '⏸️ Pause'}
              </button>
              <button class="btn-secondary" onclick="endAuctionInstantly()" style="flex:1; border-color:var(--danger-neon); color:var(--danger-neon); font-size:0.8rem; padding: 0.5rem; font-weight:bold;">
                🛑 End Auction
              </button>
            </div>
          `;
        }

        controls.innerHTML = `
          <div style="text-align:center; margin-top:1rem; width:100%; max-width:520px;">
            ${hostControlsHtml}
            <div class="current-highest-panel" style="margin-bottom:0.75rem; background: ${amIHighest ? 'rgba(0, 255, 135, 0.08)' : 'rgba(255,255,255,0.03)'}; border-color: ${amIHighest ? 'var(--success-neon)' : 'var(--glass-border)'}; color: ${amIHighest ? 'var(--success-neon)' : 'var(--text-secondary)'};">
              Current Bid: $${globalState.currentBid}M &bull; Winner: ${globalState.highestBidder ? globalState.users.find(u => u.id === globalState.highestBidder)?.name : 'None'}
            </div>
            <div style="display:flex; gap:0.5rem; justify-content:space-between; flex-wrap:wrap;">
              ${buttonsHtml}
            </div>
            ${buyNowHtml}
            ${cancelBidHtml}
            ${autoBidHtml}
            ${skipBtnHtml}
          </div>
        `;
      } else if (globalState.phase === 'SOLD') {
        if (globalState.highestBidder) {
          const winnerName = globalState.users.find(u => u.id === globalState.highestBidder)?.name || 'Nobody';
          controls.innerHTML = `
            <div style="text-align:center; margin-top:1rem;">
              <h2 style="color:var(--success-neon)">SOLD for $${globalState.currentBid}M</h2>
              <p>To: ${winnerName}</p>
            </div>
          `;
        } else {
          controls.innerHTML = `
            <div style="text-align:center; margin-top:1rem;">
              <h2 style="color:var(--danger-neon)">WENT UNSOLD</h2>
              <p style="color:var(--text-secondary)">No bids were placed</p>
            </div>
          `;
        }
      }
    }
  } else if (globalState.phase === 'FINISHED') {
    timerContainer.style.display = 'none';
    nominationPanel.style.display = 'none';
    cardArea.style.display = 'block';

    // Build manager rankings by career fantasy points
    const managerRankings = globalState.users.map(u => {
      const totalCareerPoints = u.squad.reduce((sum, p) => sum + getPlayerCareerFantasyPoints(p), 0);
      const avgRating = u.squad.length > 0 ? (u.squad.reduce((s, p) => s + p.rating, 0) / u.squad.length).toFixed(1) : '0.0';
      return { ...u, totalCareerPoints, avgRating };
    }).sort((a, b) => b.totalCareerPoints - a.totalCareerPoints);

    const medalIcons = ['🥇', '🥈', '🥉'];
    const podiumColors = ['linear-gradient(135deg, #FFD700 0%, #FFA500 100%)', 'linear-gradient(135deg, #C0C0C0 0%, #A0A0A0 100%)', 'linear-gradient(135deg, #CD7F32 0%, #8B5A2B 100%)'];
    const podiumGlow = ['rgba(255,215,0,0.25)', 'rgba(192,192,192,0.2)', 'rgba(205,127,50,0.15)'];

    const podiumHtml = managerRankings.slice(0, 3).map((m, idx) => `
      <div style="flex:1; min-width:140px; text-align:center; padding:1.25rem 0.75rem; border-radius:14px; border:1px solid ${idx === 0 ? 'rgba(255,215,0,0.4)' : (idx === 1 ? 'rgba(192,192,192,0.3)' : 'rgba(205,127,50,0.3)')}; background:${podiumGlow[idx]}; box-shadow:0 0 20px ${podiumGlow[idx]}; position:relative; ${idx === 0 ? 'transform:scale(1.05);' : ''}">
        <div style="font-size:2rem; margin-bottom:0.25rem;">${medalIcons[idx]}</div>
        <div style="font-size:1.1rem; font-weight:800; color:var(--text-primary); font-family:var(--font-display);">${m.name}</div>
        <div style="font-size:0.75rem; color:var(--text-secondary); margin:0.25rem 0;">Avg Rating: ${m.avgRating}</div>
        <div style="font-size:1.5rem; font-weight:900; background:${podiumColors[idx]}; -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; font-family:var(--font-display);">${m.totalCareerPoints}</div>
        <div style="font-size:0.65rem; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px;">Career Points</div>
      </div>
    `).join('');

    const fullListHtml = managerRankings.map((m, idx) => `
      <div style="display:flex; align-items:center; gap:0.75rem; padding:0.6rem 0.75rem; border-radius:8px; border:1px solid ${idx < 3 ? 'rgba(0,242,254,0.15)' : 'var(--glass-border)'}; background:${idx < 3 ? 'rgba(0,242,254,0.03)' : 'rgba(255,255,255,0.01)'}; ${m.id === myId ? 'box-shadow:inset 0 0 0 1px var(--primary-neon);' : ''}">
        <div style="font-weight:800; font-size:1.1rem; min-width:28px; color:${idx === 0 ? '#FFD700' : (idx === 1 ? '#C0C0C0' : (idx === 2 ? '#CD7F32' : 'var(--text-muted)'))};">${idx < 3 ? medalIcons[idx] : '#' + (idx + 1)}</div>
        <div style="flex:1;">
          <div style="font-weight:bold; font-size:0.85rem;">${m.name}${m.id === myId ? ' (You)' : ''}</div>
          <div style="font-size:0.7rem; color:var(--text-secondary);">Squad: ${m.squad.length} players • Avg: ${m.avgRating} • Budget: $${m.budget}M</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:1.1rem; font-weight:800; color:var(--success-neon); font-family:var(--font-display);">${m.totalCareerPoints}</div>
          <div style="font-size:0.6rem; color:var(--text-muted);">CAREER PTS</div>
        </div>
      </div>
    `).join('');

    cardArea.innerHTML = `
      <div style="text-align:center; max-width:700px; margin:0 auto;">
        <div style="font-size:2.5rem; margin-bottom:0.25rem;">🏆</div>
        <h2 style="color:var(--primary-neon); font-family:var(--font-display); margin-bottom:0.25rem;">Auction Complete!</h2>
        <p style="color:var(--text-secondary); font-size:0.85rem; margin-bottom:1.5rem;">Final rankings based on player career achievements (leagues, world cups, continental trophies)</p>
        
        <div style="display:flex; gap:0.75rem; justify-content:center; margin-bottom:1.5rem; flex-wrap:wrap;">
          ${podiumHtml}
        </div>

        <div style="display:flex; flex-direction:column; gap:0.4rem; text-align:left; margin-bottom:1.5rem;">
          ${fullListHtml}
        </div>

        <div style="display:flex; gap:0.5rem; justify-content:center; flex-wrap:wrap;">
          <button class="btn-primary" onclick="switchView('summary-view'); renderSummary();" style="width:auto; padding:0.6rem 1.5rem; font-size:0.85rem;">📊 View Full Summary</button>
          <button class="btn-secondary" onclick="switchView('tracker-view');" style="width:auto; padding:0.6rem 1.5rem; font-size:0.85rem;">⚡ Live Tracker</button>
          <button class="btn-secondary" onclick="switchView('squad-view'); renderSquadGrid();" style="width:auto; padding:0.6rem 1.5rem; font-size:0.85rem;">👥 View Squads</button>
        </div>
      </div>
    `;
    controls.innerHTML = '';
  }

  // Render Managers
  const managersArea = $('#manager-cards-area');
  if (managersArea) {
    managersArea.innerHTML = globalState.users.map(u => `
      <div class="manager-card ${u.id === globalState.highestBidder ? 'highest-bidder' : ''}" style="${u.id === myId ? 'border-color:var(--primary-neon)' : ''}">
        <div class="manager-card-header">
          <span class="manager-card-name">${u.name} ${u.id === myId ? '(You)' : ''}</span>
          <span class="manager-card-badge ${u.id === myId ? 'player' : 'bot'}">${u.id === myId ? 'Player' : 'Bot'}</span>
        </div>
        <div class="manager-stats">
          <span>Budget: <strong style="color:var(--success-neon)">$${u.budget}M</strong></span>
          <span>Squad: <strong>${u.squad.length}/${globalState.config.squadSize}</strong></span>
        </div>
      </div>
    `).join('');
  }
}

function placeBid(increment = 5) {
  socket.emit('PLACE_BID', increment);
}

function buyNow() {
  socket.emit('BUY_NOW');
}

function setAutoBid() {
  const limitInput = document.getElementById('auto-bid-limit');
  if (limitInput) {
    const limit = parseInt(limitInput.value);
    socket.emit('SET_AUTO_BID', isNaN(limit) ? null : limit);
  }
}

function cancelBid() {
  socket.emit('CANCEL_LAST_BID');
}

function sendChatMessage() {
  const chatInput = document.getElementById('chat-input');
  if (chatInput && chatInput.value.trim() !== '') {
    socket.emit('SEND_CHAT_MESSAGE', chatInput.value);
    chatInput.value = '';
  }
}

function voteSkipPlayer() {
  socket.emit('SKIP_PLAYER');
}

function togglePauseAuction() {
  socket.emit('PAUSE_AUCTION');
}

function endAuctionInstantly() {
  if (confirm("Are you sure you want to end the auction and finalize the squads now?")) {
    socket.emit('END_AUCTION');
  }
}

function leaveRoom() {
  if (confirm("Are you sure you want to exit the current draft room?")) {
    socket.emit('LEAVE_ROOM');
    currentRoomCode = null;
    isHost = false;
    globalState = null;

    // Reset navigation states
    $('#nav-auction').disabled = true;
    $('#nav-squad').disabled = true;
    $('#nav-tracker').disabled = true;
    $('#nav-summary').disabled = true;

    if ($('#leave-room-btn')) $('#leave-room-btn').style.display = 'none';
    $('#lobby-room-details').style.display = 'none';
    $('#lobby-choice-container').style.display = 'flex';
    switchView('lobby-view');
    showToast("Exited active room.");
  }
}

// ──────────────── NOMINATION LOGIC ────────────────

function searchNomination() {
  const query = $('#nomination-search').value.trim();
  socket.emit('SEARCH_PLAYERS', { query });
}

function renderNominationResults(results) {
  const list = $('#nomination-results');
  if (!list) return;

  const activeNominator = globalState?.users[globalState?.nominatorIndex];
  const isMyTurn = activeNominator && activeNominator.id === myId;

  if (results.length === 0) {
    list.innerHTML = `<p style="text-align:center; color:var(--text-muted); padding-top: 50px;">No matching players found.</p>`;
    return;
  }

  list.innerHTML = results.map(p => {
    return `
      <div class="squad-list-item" style="margin-bottom:0.4rem;">
        <div style="display:flex; align-items:center; gap: 0.5rem;">
          <span class="badge-position ${p.position}" style="font-size:0.7rem; padding:0.1rem 0.3rem">${p.position}</span>
          <div>
            <div class="name" style="font-size:0.85rem;">${p.name}</div>
            <div style="font-size:0.7rem; color:var(--text-secondary);">${p.club} &bull; ${p.nationality} &bull; RTG: ${p.rating}</div>
          </div>
        </div>
        <button class="btn-primary" onclick="nominatePlayer(${JSON.stringify(p).replace(/"/g, '&quot;')})" ${!isMyTurn ? 'disabled' : ''} style="width:auto; padding: 0.25rem 0.75rem; font-size:0.75rem;">
          Nominate ($${p.basePrice}M)
        </button>
      </div>
    `;
  }).join('');
}

function nominatePlayer(player) {
  socket.emit('NOMINATE_PLAYER', player);
}

// ──────────────── SQUAD VIEW LOGIC ────────────────

function renderSquadSelect() {
  if (!globalState) return;
  const select = $('#squad-manager-select');
  if (!select) return;

  const currentVal = select.value;
  select.innerHTML = globalState.users.map(u =>
    `<option value="${u.id}">${u.name}'s Squad</option>`
  ).join('');

  if (currentVal && globalState.users.find(u => u.id === currentVal)) {
    select.value = currentVal;
  } else {
    select.value = myId;
  }

  renderSquadGrid();
}

$('#squad-manager-select')?.addEventListener('change', renderSquadGrid);
$('#formation-select')?.addEventListener('change', renderSquadGrid);

function renderSquadGrid() {
  if (!globalState) return;
  const select = $('#squad-manager-select');
  const grid = $('#squad-grid');
  const formationSelect = $('#formation-select');
  const nodesContainer = $('#pitch-nodes');

  if (!select || !grid || !formationSelect || !nodesContainer) return;

  const user = globalState.users.find(u => u.id === select.value);
  if (!user) return;

  // Update stats dashboard
  if ($('#squad-stat-players')) $('#squad-stat-players').textContent = `${user.squad.length}/${globalState.config.squadSize}`;
  if ($('#squad-stat-budget')) $('#squad-stat-budget').textContent = '$' + user.budget + 'M';

  const avg = user.squad.length > 0 ? (user.squad.reduce((a, b) => a + b.rating, 0) / user.squad.length).toFixed(1) : 0;
  if ($('#squad-stat-rating')) $('#squad-stat-rating').textContent = avg || '—';

  const spent = globalState.config.budget - user.budget;
  if ($('#squad-stat-spent')) $('#squad-stat-spent').textContent = '$' + spent + 'M';

  // Perform AUTO-ASSIGNMENT to Pitch Nodes based on chosen formation
  const formationKey = formationSelect.value;
  const nodes = FORMATIONS[formationKey] || FORMATIONS['4-3-3'];

  // Clean squad lists
  const availablePlayers = [...user.squad].sort((a, b) => b.rating - a.rating); // Sort by rating
  const assignedPlayerIds = new Set();
  const assignments = {};

  // First pass: Assign Exact position matches (e.g. GK, DF, MF, FW)
  nodes.forEach(node => {
    const match = availablePlayers.find(p => p.position === node.pos && !assignedPlayerIds.has(p.id));
    if (match) {
      assignments[node.id] = match;
      assignedPlayerIds.add(match.id);
    }
  });

  // Second pass: Assign any position in remaining slots
  nodes.forEach(node => {
    if (!assignments[node.id]) {
      const match = availablePlayers.find(p => !assignedPlayerIds.has(p.id));
      if (match) {
        assignments[node.id] = match;
        assignedPlayerIds.add(match.id);
      }
    }
  });

  // Save assignments for points multiplier calculations
  tacticalAssignments[user.id] = assignments;

  // Render Pitch Nodes
  nodesContainer.innerHTML = nodes.map(node => {
    const player = assignments[node.id];
    const isFilled = !!player;

    if (isFilled) {
      return `
        <div class="pitch-node filled" style="top: ${node.top}%; left: ${node.left}%;" onclick="showNodeDetails('${player.name}', '${player.position}', ${player.rating}, '${player.club}', ${player.boughtFor})">
          <div class="pitch-node-badge">${player.rating}</div>
          <div class="pitch-node-name">${player.name.split(' ').pop()}</div>
        </div>
      `;
    } else {
      return `
        <div class="pitch-node" style="top: ${node.top}%; left: ${node.left}%;">
          <div class="pitch-node-badge" style="border-style:dashed; color:var(--text-muted);">${node.label}</div>
          <div class="pitch-node-name" style="background:transparent; color:var(--text-muted);">${node.label}</div>
        </div>
      `;
    }
  }).join('');

  // Render remaining / Bench players in the bottom grid
  const unassigned = user.squad.filter(p => !assignedPlayerIds.has(p.id));
  if (unassigned.length === 0) {
    grid.innerHTML = `<p style="color:var(--text-muted); font-size:0.75rem; text-align:center; padding:1.5rem 0; grid-column: 1/-1;">No reserve players (all assigned to pitch)</p>`;
  } else {
    grid.innerHTML = unassigned.map(p => {
      const photoUrl = p.photo || ('https://ui-avatars.com/api/?name=' + encodeURIComponent(p.name) + '&background=random&size=80');
      return `
        <div class="squad-list-item" style="flex-direction:column; padding:0.4rem; align-items:center; text-align:center;">
          <img src="${photoUrl}" class="player-photo-db" style="width:30px; height:30px; margin-bottom:0.25rem;" alt="${p.name}">
          <div style="font-weight:bold; font-size:0.75rem; overflow:hidden; text-overflow:ellipsis; width:100%; white-space:nowrap;">${p.name.split(' ').pop()}</div>
          <div style="font-size:0.65rem; color:var(--success-neon);">$${p.boughtFor}M &bull; ${p.position}</div>
        </div>
      `;
    }).join('');
  }

  // Render Full Squad Text List in sidebar
  const listContainer = $('#squad-list');
  if (listContainer) {
    if (user.squad.length === 0) {
      listContainer.innerHTML = `<p style="color:var(--text-muted);padding:1rem;text-align:center">No players drafted yet.</p>`;
    } else {
      listContainer.innerHTML = user.squad.map(p => `
        <div class="squad-list-item">
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <span class="badge-position ${p.position}">${p.position}</span>
            <div>
              <span class="name">${p.name}</span>
              <span style="font-size:0.7rem; color:var(--text-muted); display:block;">${p.club} &bull; Rating: ${p.rating}</span>
            </div>
          </div>
          <span class="price">$${p.boughtFor}M</span>
        </div>
      `).join('');
    }
  }
}

function showNodeDetails(name, pos, rating, club, price) {
  showToast(`🎯 Node Player: ${name} (${pos}) - Club: ${club} - Bought for $${price}M`);
}

// ──────────────── LIVE TRACKER / MATCHDAY SIMULATION ────────────────

function startMatchdaySimulation() {
  if (!globalState || globalState.phase !== 'FINISHED') {
    showToast("⚠️ Bidding is not finished yet!");
    return;
  }

  if (trackingSimulationActive) {
    showToast("Simulation is already running.");
    return;
  }

  trackingSimulationActive = true;
  $('#start-tracker-sim').disabled = true;
  $('#start-tracker-sim').textContent = '⏳ Simulating Matchday...';

  const feed = $('#tracker-feed');
  feed.innerHTML = '<div style="color:var(--primary-neon); text-align:center; padding:1rem 0;">📡 Connecting Live Matchday feed...</div>';

  // Initialize live scores
  liveSquadPoints = {};
  livePlayerPoints = {};
  globalState.users.forEach(u => {
    liveSquadPoints[u.id] = 0;
    u.squad.forEach(p => {
      livePlayerPoints[p.id] = 0;
    });
  });

  updateTrackerLeaderboard();

  // Create matches and simulation timeline events
  simulationEvents = [];
  const draftedPlayers = globalState.users.flatMap(u => u.squad);

  if (draftedPlayers.length === 0) {
    feed.innerHTML = '<p style="color:var(--danger-neon); text-align:center;">No players drafted to simulate!</p>';
    trackingSimulationActive = false;
    $('#start-tracker-sim').disabled = false;
    $('#start-tracker-sim').textContent = '⚡ Simulate Matchday Weekend';
    return;
  }

  const matches = [
    "Manchester United vs Arsenal",
    "Real Madrid vs Barcelona",
    "Chelsea vs Manchester City",
    "Bayern Munich vs Borussia Dortmund",
    "AC Milan vs Juventus",
    "Liverpool vs Everton"
  ];

  // Generate 15 timeline events
  for (let step = 1; step <= 15; step++) {
    const minute = Math.floor(Math.random() * 90) + 1;
    const match = matches[Math.floor(Math.random() * matches.length)];
    const player = draftedPlayers[Math.floor(Math.random() * draftedPlayers.length)];

    // Find manager of the player
    const owner = globalState.users.find(u => u.squad.some(s => s.id === player.id));

    // Choose event type: GOAL, ASSIST, CARD, CLEAN_SHEET
    const r = Math.random();
    let type = 'GOAL';
    if (r > 0.85) type = 'CARD';
    else if (r > 0.5) type = 'ASSIST';
    else if (r > 0.35) type = 'CLEAN_SHEET';

    simulationEvents.push({ step, minute, match, player, owner, type });
  }

  // Sort by step/minute
  simulationEvents.sort((a, b) => a.step - b.step);

  let currentStep = 0;

  clearInterval(liveTickerInterval);
  liveTickerInterval = setInterval(() => {
    if (currentStep < simulationEvents.length) {
      const ev = simulationEvents[currentStep];
      processLiveEvent(ev);
      currentStep++;
    } else {
      clearInterval(liveTickerInterval);
      feed.innerHTML += `<div style="color:var(--success-neon); font-weight:bold; margin-top:1rem; text-align:center; border-top:1px dashed var(--glass-border); padding-top:0.5rem;">🏁 Matchday Weekend Completed!</div>`;
      feed.scrollTop = feed.scrollHeight;
      trackingSimulationActive = false;
      $('#start-tracker-sim').disabled = false;
      $('#start-tracker-sim').textContent = '⚡ Simulate Another Matchday';
      showToast("Matchday completed! head to the summary page.");
      playCheerSound();
    }
  }, 1500);
}

function processLiveEvent(ev) {
  const feed = $('#tracker-feed');
  if (currentStepEqualsZero(feed)) feed.innerHTML = ''; // Clear initial loader

  let pts = 0;
  let logText = '';
  const player = ev.player;
  const ownerName = ev.owner?.name || 'Unknown';

  if (ev.type === 'GOAL') {
    // Goals multipliers: GK/DF = 6, MF = 5, FW = 4
    if (player.position === 'GK' || player.position === 'DF') pts = 6;
    else if (player.position === 'MF') pts = 5;
    else pts = 4;
    logText = `⚽ <strong>${ev.minute}' Goal!</strong> ${player.name} (${player.club}) scores in ${ev.match}! (+${pts} pts to ${ownerName})`;
    playBlip(750, 0.2, 'sine');
  } else if (ev.type === 'ASSIST') {
    pts = 3;
    logText = `🎯 <strong>${ev.minute}' Assist!</strong> ${player.name} sets up a goal in ${ev.match}! (+${pts} pts to ${ownerName})`;
    playBlip(620, 0.15, 'sine');
  } else if (ev.type === 'CLEAN_SHEET') {
    // Clean sheet multipliers: GK/DF = 4, MF = 1
    if (player.position === 'GK' || player.position === 'DF') pts = 4;
    else if (player.position === 'MF') pts = 1;
    else pts = 0;
    logText = `🛡️ <strong>Clean Sheet!</strong> ${player.name} maintains a shut-out! (+${pts} pts to ${ownerName})`;
    playBlip(550, 0.25, 'triangle');
  } else if (ev.type === 'CARD') {
    const cardColor = Math.random() > 0.8 ? 'Red' : 'Yellow';
    pts = cardColor === 'Red' ? -3 : -1;
    logText = `🟨 <strong>${ev.minute}' Card!</strong> ${player.name} receives a ${cardColor} card! (${pts} pts to ${ownerName})`;
    playBlip(180, 0.35, 'sawtooth');
  }

  // Update scores
  if (ev.owner) {
    liveSquadPoints[ev.owner.id] = (liveSquadPoints[ev.owner.id] || 0) + pts;
    livePlayerPoints[player.id] = (livePlayerPoints[player.id] || 0) + pts;
  }

  // Append log item
  const item = document.createElement('div');
  item.style.padding = '0.4rem 0';
  item.style.borderBottom = '1px solid rgba(255,255,255,0.03)';
  item.style.fontSize = '0.8rem';
  item.innerHTML = logText;
  feed.appendChild(item);
  feed.scrollTop = feed.scrollHeight;

  updateTrackerLeaderboard();
}

function currentStepEqualsZero(feed) {
  return feed.children.length === 1 && feed.children[0].textContent.includes('Simulate');
}

function updateTrackerLeaderboard() {
  const container = $('#tracker-leaderboard');
  if (!container || !globalState) return;

  const ranks = globalState.users.map(u => {
    const points = liveSquadPoints[u.id] || 0;
    const avgRating = u.squad.length > 0 ? (u.squad.reduce((a, b) => a + b.rating, 0) / u.squad.length) : 0;
    return {
      name: u.name,
      id: u.id,
      points: points,
      avgRating: avgRating.toFixed(1),
      squadSize: u.squad.length
    };
  });

  ranks.sort((a, b) => b.points - a.points);

  container.innerHTML = ranks.map((r, index) => `
    <div class="ranking-card" style="padding:0.75rem 1rem; border-color:${r.id === myId ? 'var(--primary-neon)' : 'var(--glass-border)'}">
      <div class="ranking-rank">${index + 1}</div>
      <div class="ranking-details">
        <div class="name">${r.name} ${r.id === myId ? '(You)' : ''}</div>
        <div class="sub">Squad: ${r.squadSize} players &bull; Avg Rating: ${r.avgRating}</div>
      </div>
      <div class="ranking-stats">
        <div class="score">${r.points} pts</div>
      </div>
    </div>
  `).join('');
}

// ──────────────── DATABASE VIEW LOGIC ────────────────
let currentDB = [];

function getActivePoolMode() {
  if (globalState && globalState.config && globalState.config.playerPool) {
    return globalState.config.playerPool;
  }
  const select = document.getElementById('player-pool-select');
  return select ? select.value : 'special';
}

function initDatabase() {
  const mode = getActivePoolMode();
  currentDB = getPlayersDatabase(mode);
  renderDatabase();
}

function renderDatabase() {
  const tbody = $('#db-tbody');
  const count = $('#db-count');
  if (!tbody || !count) return;

  // Toggle database modification panel based on admin privileges
  const addPanel = $('#db-add-panel');
  const dbLayout = $('.db-layout');
  const isAdmin = currentUser && (currentUser.toLowerCase() === 'kishanhp1808' || currentEmail.toLowerCase() === 'kishanhp18@gmail.com');
  
  if (addPanel) {
    addPanel.style.display = isAdmin ? 'block' : 'none';
  }
  if (dbLayout) {
    if (isAdmin) {
      dbLayout.classList.remove('no-admin');
    } else {
      dbLayout.classList.add('no-admin');
    }
  }

  const posFilter = $('#db-filter-pos').value;
  const searchStr = $('#db-search').value.toLowerCase();

  let filtered = currentDB.filter(p => {
    if (posFilter !== 'ALL' && p.position !== posFilter) return false;
    if (searchStr && !p.name.toLowerCase().includes(searchStr) &&
      !p.club.toLowerCase().includes(searchStr) &&
      !p.nationality.toLowerCase().includes(searchStr)) {
      return false;
    }
    return true;
  });

  count.textContent = `${filtered.length} players`;

  tbody.innerHTML = filtered.map(p => {
    const photoUrl = p.photo || ('https://ui-avatars.com/api/?name=' + encodeURIComponent(p.name) + '&background=random&size=50');
    const careerPts = getPlayerCareerFantasyPoints(p);
    return `
    <tr>
      <td style="width: 50px; text-align: center;">
        <img src="${photoUrl}" class="player-photo-db" alt="${p.name}">
      </td>
      <td><span class="badge-position ${p.position}">${p.position}</span></td>
      <td style="font-weight:bold">${p.name}</td>
      <td>${p.club}</td>
      <td>${p.nationality}</td>
      <td>${p.rating}</td>
      <td style="color:var(--secondary-neon); font-weight:bold;">${careerPts}/1000</td>
      <td style="color:var(--success-neon); font-weight:bold">$${p.basePrice}M</td>
    </tr>
    `;
  }).join('');
}

$('#db-filter-pos')?.addEventListener('change', renderDatabase);
$('#db-search')?.addEventListener('input', renderDatabase);

function addCustomPlayer() {
  const isAdmin = currentUser && (currentUser.toLowerCase() === 'kishanhp1808' || currentEmail.toLowerCase() === 'kishanhp18@gmail.com');
  if (!isAdmin) {
    showToast("⚠️ Only the administrator can add players.");
    return;
  }

  const name = $('#add-name').value.trim();
  const position = $('#add-position').value;
  const club = $('#add-club').value.trim();
  const nationality = $('#add-nationality').value.trim();
  const rating = parseInt($('#add-rating').value);
  const basePrice = parseInt($('#add-price').value);

  if (!name || !club || !nationality || !rating || !basePrice) {
    showToast("Please fill all fields.");
    return;
  }

  const newPlayer = {
    id: 'custom_' + Date.now(),
    name, position, club, nationality, rating, basePrice
  };

  INITIAL_PLAYERS.push(newPlayer);
  currentDB = getPlayersDatabase();
  renderDatabase();
  showToast(`${name} added to Database!`);

  $('#add-name').value = '';
  $('#add-club').value = '';
  $('#add-nationality').value = '';
  $('#add-rating').value = '';
  $('#add-price').value = '';
}

function resetDatabase() {
  const isAdmin = currentUser && (currentUser.toLowerCase() === 'kishanhp1808' || currentEmail.toLowerCase() === 'kishanhp18@gmail.com');
  if (!isAdmin) {
    showToast("⚠️ Only the administrator can reset the database.");
    return;
  }
  showToast("Resetting to default data...");
  location.reload();
}

// ──────────────── SUMMARY VIEW LOGIC ────────────────

function renderSummary() {
  if (!globalState || globalState.phase !== 'FINISHED') return;
  const list = $('#rankings-list');
  const breakdown = $('#summary-breakdown');
  if (!list || !breakdown) return;

  const users = [...globalState.users];
  users.forEach(u => {
    const careerPoints = u.squad.reduce((sum, p) => sum + getPlayerCareerFantasyPoints(p), 0);
    const avgRating = u.squad.length > 0 ? (u.squad.reduce((a, b) => a + b.rating, 0) / u.squad.length) : 0;
    const matchdayPoints = liveSquadPoints[u.id] || 0;

    u.score = careerPoints;
    u.avgRating = avgRating.toFixed(1);
    u.pts = matchdayPoints;
  });

  users.sort((a, b) => b.score - a.score);

  list.innerHTML = users.map((u, i) => {
    const medals = ['🥇 1st Place', '🥈 2nd Place', '🥉 3rd Place'];
    const rankingMedal = i < 3 ? medals[i] : `${i + 1}th Place`;

    return `
      <div class="ranking-card" style="padding:1rem; border-color:${i < 3 ? 'var(--primary-neon)' : 'var(--glass-border)'}; background:${i < 3 ? 'rgba(0, 242, 254, 0.03)' : ''}">
        <div class="ranking-rank" style="font-size: 0.9rem; min-width: 90px; color:${i === 0 ? 'var(--primary-neon)' : (i === 1 ? 'var(--secondary-neon)' : 'var(--text-primary)')};">${rankingMedal}</div>
        <div class="ranking-details">
          <div class="name" style="font-weight:bold;">${u.name} ${u.id === myId ? '(You)' : ''}</div>
          <div class="sub">Career Achievements: <b>${u.score} pts</b> &bull; Avg Rating: <b>${u.avgRating}</b> &bull; Matchday: <b>${u.pts} pts</b></div>
        </div>
        <div class="ranking-stats">
          <div class="score" style="color:var(--success-neon); font-size:1.5rem; font-weight:800; font-family:var(--font-display);">${u.score}</div>
        </div>
      </div>
    `;
  }).join('');

  const allPlayers = users.flatMap(u => u.squad).sort((a, b) => b.boughtFor - a.boughtFor);

  breakdown.innerHTML = `
    <h3 style="margin-bottom:1rem;border-left:4px solid var(--primary-neon);padding-left:0.75rem">Most Expensive Draft Signings</h3>
    <div class="db-table-container">
      <table class="db-table">
        <thead>
          <tr>
            <th>Pos</th>
            <th>Name</th>
            <th>Nationality</th>
            <th>Club</th>
            <th>Price Paid</th>
          </tr>
        </thead>
        <tbody>
          ${allPlayers.slice(0, 5).map(p => `
            <tr>
              <td><span class="badge-position ${p.position}">${p.position}</span></td>
              <td style="font-weight:bold;">${p.name}</td>
              <td>${p.nationality}</td>
              <td>${p.club}</td>
              <td style="color:var(--success-neon); font-weight:bold;">$${p.boughtFor}M</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function simulateTournament() {
  const res = $('#sim-results');
  if (!res) return;
  if (!globalState || globalState.phase !== 'FINISHED') {
    res.innerHTML = `<p style="color:var(--danger-neon); text-align:center; padding:1.5rem 0;">Auction is not finished yet!</p>`;
    return;
  }

  res.innerHTML = `<div style="text-align:center; padding:2rem 0;"><p>Simulating tournament matches... ⏳</p></div>`;
  playBlip(600, 0.5, 'triangle');

  socket.emit('SIMULATE_TOURNAMENT');
}

function renderTournamentResults(results) {
  const res = $('#sim-results');
  if (!res) return;

  const matchesHtml = results.matches.map(m => `
    <div class="sim-match" style="margin-bottom:1rem; border-bottom: 1px dashed var(--glass-border); padding-bottom: 0.75rem;">
      <div style="display:flex; justify-content:space-between; font-weight:bold; font-size:0.9rem; margin-bottom:0.25rem;">
        <span class="${m.homeScore > m.awayScore ? 'winner' : ''}">${m.home} (${m.homeScore})</span>
        <span>vs</span>
        <span class="${m.awayScore > m.homeScore ? 'winner' : ''}">${m.away} (${m.awayScore})</span>
      </div>
      <div style="font-size:0.75rem; color:var(--text-secondary); display:flex; flex-direction:column; gap:0.2rem; margin-left:0.5rem;">
        ${m.events.map(ev => `<div>${ev}</div>`).join('')}
      </div>
    </div>
  `).join('');

  const tableHtml = `
    <h4 style="margin:1rem 0 0.5rem 0; color:var(--primary-neon);">Final Tournament Standing</h4>
    <div class="db-table-container">
      <table class="db-table" style="font-size:0.8rem;">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Team</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GD</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          ${results.table.map((r, i) => `
            <tr style="${i === 0 ? 'background:rgba(0,255,135,0.05);' : ''}">
              <td><b>#${i + 1}</b></td>
              <td style="font-weight:bold;">${r.name}</td>
              <td>${r.played}</td>
              <td>${r.won}</td>
              <td>${r.drawn}</td>
              <td>${r.lost}</td>
              <td>${r.gf - r.ga}</td>
              <td style="color:var(--success-neon); font-weight:bold;">${r.pts}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  const winner = results.table[0];
  res.innerHTML = `
    <div style="text-align:center; padding:1rem; background:rgba(0,255,135,0.06); border:1px solid var(--success-neon); border-radius:12px; margin-bottom:1.5rem;">
      <h3 style="color:var(--success-neon); margin-bottom:0.25rem;">🏆 Cup Champion: ${winner.name}! 🏆</h3>
      <p style="font-size:0.85rem; color:var(--text-secondary);">With ${winner.pts} points in the simulated bracket tournament.</p>
    </div>
    <h4 style="margin-bottom:0.75rem; color:var(--primary-neon);">Match Reports</h4>
    ${matchesHtml}
    ${tableHtml}
  `;
}

// ──────────────── EVENT LISTENERS ────────────────
$$('.nav-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const view = btn.getAttribute('data-view');
    switchView(view);
    if (view === 'squad-view') renderSquadGrid();
    if (view === 'database-view') renderDatabase();
    if (view === 'tracker-view') updateTrackerLeaderboard();
    if (view === 'history-view') loadDraftHistory();
    if (view === 'summary-view') renderSummary();
  });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initDatabase();

  // Auto Sign In from device history
  const savedUser = localStorage.getItem('auction_username');
  const savedEmail = localStorage.getItem('auction_email');
  if (savedUser) {
    currentUser = savedUser;
    currentEmail = savedEmail || '';
    if ($('#login-overlay')) $('#login-overlay').style.display = 'none';
    if ($('#user-profile')) $('#user-profile').innerHTML = `👤 ${escapeHTML(currentUser)}`;
    if ($('#manager-name')) $('#manager-name').value = currentUser;
    showToast(`Welcome back, ${currentUser}!`);
    loadDraftHistory();
  }

  // Player Pool dropdown visual select and highlight
  const poolSelect = document.getElementById('player-pool-select');
  if (poolSelect) {
    poolSelect.addEventListener('change', () => {
      initDatabase();
      renderLobby();
    });
  }
});

