const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { searchPlayers, searchDuckDuckGoImage } = require('./api.js');
const { getPlayerCareerFantasyPoints } = require('./players.js');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const server = http.createServer(app);

// Strengthen Socket.IO configuration for high concurrency & low lag
const io = new Server(server, {
  cors: { origin: "*" },
  pingInterval: 10000, // Faster ping interval to clean up dead links
  pingTimeout: 5000,
  cookie: false
});

app.use(express.json());
app.use(express.static(__dirname));

const USERS_FILE = path.join(__dirname, 'users.json');
const HISTORY_FILE = path.join(__dirname, 'history.json');

// --- Optimized In-Memory Database Cache ---
let cachedUsers = null;
let cachedHistory = null;

function loadJSON(file) {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, '[]', 'utf8');
    return [];
  }
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    return [];
  }
}

function loadUsers() {
  if (cachedUsers !== null) return cachedUsers;
  cachedUsers = loadJSON(USERS_FILE);
  return cachedUsers;
}

function saveUsers(users) {
  cachedUsers = users;
  fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), 'utf8', (err) => {
    if (err) console.error("Error saving users asynchronously:", err.message);
  });
}

function loadHistory() {
  if (cachedHistory !== null) return cachedHistory;
  cachedHistory = loadJSON(HISTORY_FILE);
  return cachedHistory;
}

function saveHistory(history) {
  cachedHistory = history;
  fs.writeFile(HISTORY_FILE, JSON.stringify(history, null, 2), 'utf8', (err) => {
    if (err) console.error("Error saving history asynchronously:", err.message);
  });
}

// Nodemailer dynamic email sender
async function sendSquadEmail(managerName, managerEmail, squad, budgetLeft) {
  if (!managerEmail) return null;
  try {
    let transporter;
    
    // Check for SMTP environment variables, otherwise skip sending email
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });
    } else {
      console.log(`[Email] SMTP not configured. Skipped sending squad email to ${managerName} (${managerEmail})`);
      return { success: true, previewUrl: null };
    }

    const squadHtml = squad.map(p => {
      const pts = getPlayerCareerFantasyPoints(p);
      return `
      <tr style="border-bottom: 1px solid #ddd;">
        <td style="padding: 10px; text-align: center;">
          <img src="${p.photo || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(p.name)}" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;" alt="${p.name}">
        </td>
        <td style="padding: 10px; font-weight: bold;">${p.name}</td>
        <td style="padding: 10px; color: #555;">${p.position}</td>
        <td style="padding: 10px; color: #555;">${p.club}</td>
        <td style="padding: 10px; font-weight: bold; color: #3498db;">${pts}/1000</td>
        <td style="padding: 10px; font-weight: bold; color: #e67e22;">${p.rating}</td>
        <td style="padding: 10px; font-weight: bold; color: #2ecc71;">$${p.boughtFor}M</td>
      </tr>
      `;
    }).join('');

    const avgRating = squad.length > 0 ? (squad.reduce((a,b)=>a+b.rating, 0) / squad.length).toFixed(1) : 0;
    const totalCareerPoints = squad.reduce((sum, p) => sum + getPlayerCareerFantasyPoints(p), 0);

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; background-color: #fcfcfc;">
        <div style="text-align: center; border-bottom: 2px solid #2ecc71; padding-bottom: 15px;">
          <h1 style="color: #2c3e50; margin: 0;">⚽ Football Auction Report</h1>
          <p style="color: #7f8c8d; margin: 5px 0 0 0;">Your Official Squad Roster</p>
        </div>
        
        <div style="margin: 20px 0;">
          <p style="font-size: 1.1rem; color: #34495e;">Hello <strong>${managerName}</strong>,</p>
          <p style="color: #7f8c8d;">Congratulations on completing your live football draft! Here is a summary of the squad you built:</p>
          
          <div style="display: flex; gap: 15px; margin: 20px 0; background-color: #f5f6fa; padding: 15px; border-radius: 8px; justify-content: space-around; text-align: center;">
            <div>
              <span style="font-size: 0.85rem; color: #7f8c8d; text-transform: uppercase;">Players</span>
              <strong style="display: block; font-size: 1.35rem; color: #2c3e50;">${squad.length}</strong>
            </div>
            <div>
              <span style="font-size: 0.85rem; color: #7f8c8d; text-transform: uppercase;">Career Score</span>
              <strong style="display: block; font-size: 1.35rem; color: #3498db;">${totalCareerPoints}</strong>
            </div>
            <div>
              <span style="font-size: 0.85rem; color: #7f8c8d; text-transform: uppercase;">Avg Rating</span>
              <strong style="display: block; font-size: 1.35rem; color: #e67e22;">${avgRating}</strong>
            </div>
            <div>
              <span style="font-size: 0.85rem; color: #7f8c8d; text-transform: uppercase;">Budget Left</span>
              <strong style="display: block; font-size: 1.35rem; color: #2ecc71;">$${budgetLeft}M</strong>
            </div>
          </div>
        </div>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <thead>
            <tr style="background-color: #f5f6fa; border-bottom: 2px solid #ddd; text-align: left;">
              <th style="padding: 10px; color: #7f8c8d;">Photo</th>
              <th style="padding: 10px; color: #7f8c8d;">Name</th>
              <th style="padding: 10px; color: #7f8c8d;">Pos</th>
              <th style="padding: 10px; color: #7f8c8d;">Club</th>
              <th style="padding: 10px; color: #7f8c8d;">Career Pts</th>
              <th style="padding: 10px; color: #7f8c8d;">Rtg</th>
              <th style="padding: 10px; color: #7f8c8d;">Price</th>
            </tr>
          </thead>
          <tbody>
            ${squadHtml}
          </tbody>
        </table>
        
        <div style="margin-top: 30px; text-align: center; border-top: 1px solid #eee; padding-top: 15px; color: #bdc3c7; font-size: 0.8rem;">
          <p>Thank you for playing Football Auction Simulator! Good luck in the upcoming matches.</p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: '"Football Auction Simulator" <no-reply@footballauction.com>',
      to: managerEmail,
      subject: `🏆 Your Official Draft Squad - ${managerName}`,
      html: htmlContent
    };

    const info = await transporter.sendMail(mailOptions);
    const previewUrl = nodemailer.getTestMessageUrl(info);
    if (previewUrl) {
      return { success: true, previewUrl };
    }
    return { success: true };
  } catch (err) {
    console.error(`Failed to send email to ${managerEmail}:`, err.message);
    return { success: false, error: err.message };
  }
}

async function sendAdminNotification(subject, htmlContent) {
  const adminEmail = 'kishanhp18@gmail.com';
  try {
    let transporter;
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });
    } else {
      console.log(`[Admin Notification] SMTP not configured. Log: ${subject}`);
      return;
    }

    const mailOptions = {
      from: '"Football Auction Admin" <no-reply@footballauction.com>',
      to: adminEmail,
      subject: subject,
      html: htmlContent
    };

    const info = await transporter.sendMail(mailOptions);
    const previewUrl = nodemailer.getTestMessageUrl(info);
    if (previewUrl) {
      console.log(`[Admin Notification] ${subject} -> Email preview: ${previewUrl}`);
    } else {
      console.log(`[Admin Notification] ${subject} -> Email sent to ${adminEmail}`);
    }
  } catch (err) {
    console.error(`[Admin Notification Error] Failed to send admin notification for: ${subject}:`, err.message);
  }
}

app.post('/api/register', (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) return res.status(400).json({ error: 'Username, password and email required' });
  const users = loadUsers();
  if (users.some(u => u.username.toLowerCase() === username.toLowerCase())) {
    return res.status(400).json({ error: 'Username already exists' });
  }
  users.push({ username, password, email });
  saveUsers(users);

  sendAdminNotification('📝 New User Registered', `
    <h3>New User Registration</h3>
    <p><strong>Username:</strong> ${username}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
  `);

  res.json({ success: true });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'Username and password required' });
  const users = loadUsers();
  const user = users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.password === password);
  if (!user) return res.status(400).json({ error: 'Invalid username or password' });

  sendAdminNotification('🔑 User Logged In', `
    <h3>User Logged In</h3>
    <p><strong>Username:</strong> ${user.username}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
  `);

  res.json({ success: true, username: user.username, email: user.email });
});

app.get('/api/history', (req, res) => {
  const username = req.query.username;
  if (!username) return res.status(400).json({ error: 'Username required' });
  const history = loadHistory();
  const userHistory = history.filter(h => h.username && h.username.toLowerCase() === username.toLowerCase());
  res.json(userHistory);
});

const ROOMS = new Map();

function createRoomState(roomCode) {
  return {
    roomCode: roomCode,
    phase: 'LOBBY',
    users: [],
    pool: [],
    currentPlayer: null,
    currentBid: 0,
    highestBidder: null,
    timer: 15,
    nominatorIndex: 0,
    draftedHistory: [],
    config: {
      timer: 15,
      budget: 300,
      squadSize: 11,
      apiKey: '',
      apiHost: 'v3.football.api-sports.io',
      enableManualNominations: false
    },
    messages: [],
    timerInterval: null,
    lastActivity: Date.now(), // Track room activity
    skipVotes: [], // Track users voting to skip the current player
    isPaused: false // Host pause status
  };
}

function generateRoomCode() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let code = '';
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  if (ROOMS.has(code)) {
    return generateRoomCode();
  }
  return code;
}

function addMessage(state, msg) {
  state.messages.unshift(msg);
  if (state.messages.length > 20) state.messages.pop();
}

function broadcastState(roomCode) {
  const state = ROOMS.get(roomCode);
  if (state) {
    state.lastActivity = Date.now(); // Keep room alive on update
    const broadcastPayload = { ...state };
    delete broadcastPayload.timerInterval;
    io.to(roomCode).emit('STATE_UPDATE', broadcastPayload);
  }
}

function startTimer(roomCode) {
  const state = ROOMS.get(roomCode);
  if (!state) return;

  clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    if (state.isPaused) return; // Do not decrement or tick if paused

    if (state.timer > 0) {
      state.timer--;
      io.to(roomCode).emit('TIMER_UPDATE', state.timer);
    } else {
      clearInterval(state.timerInterval);
      handleSold(roomCode);
    }
  }, 1000);
}

function handleSold(roomCode) {
  const state = ROOMS.get(roomCode);
  if (!state) return;

  state.phase = 'SOLD';
  if (state.highestBidder) {
    const winner = state.users.find(u => u.id === state.highestBidder);
    if (winner) {
      winner.budget -= state.currentBid;
      winner.squad.push({ ...state.currentPlayer, boughtFor: state.currentBid });
      addMessage(state, `Sold! ${state.currentPlayer.name} goes to ${winner.name} for $${state.currentBid}M`);
    }
  } else {
    addMessage(state, `Unsold! ${state.currentPlayer.name} received no bids.`);
  }
  broadcastState(roomCode);

  setTimeout(() => {
    nextPlayer(roomCode);
  }, 1000); // Snappy transitions: 3000ms -> 1000ms
}

function handleSkip(roomCode, reason = "skipped") {
  const state = ROOMS.get(roomCode);
  if (!state) return;

  clearInterval(state.timerInterval);
  state.phase = 'SOLD'; // briefly show status transition
  state.highestBidder = null;
  addMessage(state, `Skipped! ${state.currentPlayer.name} was ${reason}.`);
  broadcastState(roomCode);

  setTimeout(() => {
    nextPlayer(roomCode);
  }, 1000); // Snappy transitions: 3000ms -> 1000ms
}

function setNextNominator(state) {
  let checkedCount = 0;
  while (checkedCount < state.users.length) {
    const user = state.users[state.nominatorIndex];
    if (user && user.squad.length < state.config.squadSize) {
      return user;
    }
    state.nominatorIndex = (state.nominatorIndex + 1) % state.users.length;
    checkedCount++;
  }
  return null;
}

function finalizeAuction(state, roomCode) {
  state.phase = 'FINISHED';
  addMessage(state, "Auction Completed! Squads are locked.");
  
  try {
    const history = loadHistory();
    
    // Compute total career points for each connected manager
    const managerRankings = state.users.map(u => {
      const totalCareerPoints = u.squad.reduce((sum, p) => sum + getPlayerCareerFantasyPoints(p), 0);
      const avgRating = u.squad.length > 0 ? (u.squad.reduce((sum, p) => sum + p.rating, 0) / u.squad.length) : 0;
      return {
        id: u.id,
        name: u.name,
        email: u.email,
        squad: u.squad,
        budget: u.budget,
        totalCareerPoints: totalCareerPoints,
        avgRating: parseFloat(avgRating.toFixed(1))
      };
    });

    // Sort managers by career fantasy points descending
    managerRankings.sort((a, b) => b.totalCareerPoints - a.totalCareerPoints);

    // Generate rank table HTML for Admin Notification
    const rankHtml = managerRankings.map((m, idx) => `
      <tr style="border-bottom:1px solid #eee;">
        <td style="padding:8px;text-align:center;">${idx + 1}</td>
        <td style="padding:8px;font-weight:bold;">${m.name}</td>
        <td style="padding:8px;color:#3498db;font-weight:bold;">${m.totalCareerPoints} pts</td>
        <td style="padding:8px;">${m.avgRating}</td>
        <td style="padding:8px;color:#2ecc71;">$${m.budget}M</td>
      </tr>
    `).join('');

    sendAdminNotification(`🏆 Auction Finalized - Room ${roomCode}`, `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #ddd;border-radius:10px;padding:20px;background:#fcfcfc;">
        <h2 style="color:#2c3e50;text-align:center;border-bottom:2px solid #3498db;padding-bottom:10px;margin-top:0;">🏆 Room ${roomCode} Draft Completed</h2>
        <table style="width:100%;border-collapse:collapse;margin-top:15px;">
          <thead>
            <tr style="background:#f5f6fa;border-bottom:2px solid #ddd;text-align:left;">
              <th style="padding:8px;text-align:center;">Rank</th>
              <th style="padding:8px;">Manager</th>
              <th style="padding:8px;">Career Score</th>
              <th style="padding:8px;">Avg Rating</th>
              <th style="padding:8px;">Leftover</th>
            </tr>
          </thead>
          <tbody>
            ${rankHtml}
          </tbody>
        </table>
        <p style="margin-top:20px;font-size:0.8rem;color:#95a5a6;text-align:center;">Football Auction Simulator Admin Notification</p>
      </div>
    `);

    // Announce top three in the room logs!
    addMessage(state, `🏆 FINAL RANKINGS (By Player Career Achievements):`);
    managerRankings.slice(0, 3).forEach((m, idx) => {
      const medals = ['🥇 1st Place', '🥈 2nd Place', '🥉 3rd Place'];
      addMessage(state, `${medals[idx]}: ${m.name} with ${m.totalCareerPoints} points!`);
    });

    // Save and email reports
    state.users.forEach(async (u) => {
      const stats = managerRankings.find(mr => mr.id === u.id);
      
      // Save entry to history
      history.unshift({
        username: u.name,
        timestamp: new Date().toISOString(),
        squad: u.squad,
        budgetLeft: u.budget,
        avgRating: stats.avgRating,
        careerPoints: stats.totalCareerPoints,
        score: stats.totalCareerPoints // Use career points as the official score
      });

      // Send email
      if (u.email) {
        console.log(`Sending squad email to ${u.name} at ${u.email}...`);
        const mailRes = await sendSquadEmail(u.name, u.email, u.squad, u.budget);
        if (mailRes && mailRes.previewUrl) {
          addMessage(state, `📧 Squad report email generated for ${u.name}! Click preview: ${mailRes.previewUrl}`);
          broadcastState(roomCode);
        } else if (mailRes && mailRes.success) {
          addMessage(state, `📧 Squad report email sent to ${u.name} (${u.email})`);
          broadcastState(roomCode);
        }
      }
    });

    saveHistory(history);
  } catch (e) {
    console.error("Failed to finalize auction:", e.message);
  }

  broadcastState(roomCode);
}

async function nextPlayer(roomCode) {
  const state = ROOMS.get(roomCode);
  if (!state) return;

  const activeManager = setNextNominator(state);
  if (!activeManager) {
    finalizeAuction(state, roomCode);
    return;
  }

  if (state.config.enableManualNominations) {
    state.phase = 'NOMINATION';
    state.currentPlayer = null;
    state.highestBidder = null;
    addMessage(state, `Waiting for ${activeManager.name} to nominate a player...`);
    broadcastState(roomCode);
  } else {
    // Auto-nominate
    let next = null;
    while (state.pool.length > 0) {
      const candidate = state.pool.pop();
      if (!state.draftedHistory.includes(candidate.id)) {
        next = candidate;
        break;
      }
    }
    
    if (next) {
      try {
        if (!next.photo) {
          const photos = await searchDuckDuckGoImage(next.name + ' ' + next.club + ' football headshot');
          if (photos && photos.length > 0) {
            next.photo = photos[0].image;
          }
        }
      } catch (e) {
        console.log("Failed to fetch photo for auto-nominated player:", e.message);
      }

      state.currentPlayer = next;
      state.draftedHistory.push(next.id);
      state.currentBid = next.basePrice || 5;
      state.highestBidder = null;
      state.skipVotes = []; // Reset skip votes
      state.timer = state.config.timer;
      state.phase = 'BIDDING';
      addMessage(state, `Up next: ${next.name} (Base Price: $${state.currentBid}M)`);
      startTimer(roomCode);
      broadcastState(roomCode);
    } else {
      finalizeAuction(state, roomCode);
    }
  }
}

function validateBid(state, user, player, newBid) {
  if (state.phase !== 'BIDDING') return 'Bidding is not active.';
  if (state.highestBidder === user.id) return 'You are already the highest bidder.';
  
  if (user.budget < newBid) {
    return `Insufficient budget! Your remaining budget is $${user.budget}M, but the bid is $${newBid}M.`;
  }
  
  if (user.squad.length >= state.config.squadSize) {
    return `Your squad is already full (Max ${state.config.squadSize} players).`;
  }
  
  const clubCount = user.squad.filter(p => p.club === player.club).length;
  if (clubCount >= 3) {
    return `Club Limit: You cannot have more than 3 players from ${player.club}.`;
  }
  
  const slotsLeft = state.config.squadSize - user.squad.length;
  const remainingSlotsNeeded = slotsLeft - 1;
  const minReserve = remainingSlotsNeeded * 1;
  if (user.budget - newBid < minReserve) {
    return `Insufficient Budget Reserve: You need to keep at least $${minReserve}M to buy your remaining ${remainingSlotsNeeded} players at minimum price ($1M each).`;
  }
  
  const hasGK = user.squad.some(p => p.position === 'GK');
  if (slotsLeft === 1 && !hasGK && player.position !== 'GK') {
    return `Must Draft Goalkeeper: You have 1 slot left and no Goalkeeper. You can only bid on a Goalkeeper (GK)!`;
  }
  
  return null;
}

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('CREATE_ROOM', () => {
    const roomCode = generateRoomCode();
    const state = createRoomState(roomCode);
    ROOMS.set(roomCode, state);

    socket.roomCode = roomCode;
    socket.join(roomCode);
    socket.emit('ROOM_CREATED', roomCode);
    console.log(`Room created: ${roomCode}`);

    sendAdminNotification(`🏠 Room Created: ${roomCode}`, `
      <h3>New Room Created</h3>
      <p><strong>Room Code:</strong> ${roomCode}</p>
      <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
    `);
  });
  socket.on('JOIN_ROOM', (userData) => {
    const code = (userData.roomCode || '').toUpperCase();
    const state = ROOMS.get(code);

    if (!state) {
      socket.emit('ERROR', 'Invalid Room Code.');
      return;
    }

    // Check if manager is reconnecting to an active session
    const existingUser = state.users.find(u => u.name.toLowerCase() === (userData.name || '').toLowerCase());
    if (existingUser) {
      existingUser.id = socket.id;
      existingUser.connected = true;
      socket.roomCode = code;
      socket.join(code);
      socket.emit('JOINED', existingUser);
      
      addMessage(state, `⚡ Manager ${existingUser.name} reconnected.`);
      broadcastState(code);
      return;
    }

    if (state.phase !== 'LOBBY') {
      socket.emit('ERROR', 'Auction has already started in this room.');
      return;
    }

    if (state.users.length >= 21) {
      socket.emit('ERROR', 'Room is full.');
      return;
    }

    const isSpecialHost = userData.email && userData.email.toLowerCase() === 'kishanhp18@gmail.com';
    const isHost = state.users.length === 0 || isSpecialHost;
    
    if (isSpecialHost) {
      state.users.forEach(u => u.isHost = false);
    }

    const user = {
      id: socket.id,
      name: userData.name || 'Manager',
      email: userData.email || '',
      budget: 0,
      squad: [],
      isHost: isHost,
      connected: true // track active connection status
    };

    socket.roomCode = code;
    socket.join(code);
    state.users.push(user);
    socket.emit('JOINED', user);
    broadcastState(code);

    if (isSpecialHost) {
      state.users.forEach(u => {
        if (u.id !== socket.id) {
          io.to(u.id).emit('STATE_UPDATE', state);
        }
      });
    }

    sendAdminNotification(`👤 User Joined Room: ${code}`, `
      <h3>Manager Joined Room</h3>
      <p><strong>Room Code:</strong> ${code}</p>
      <p><strong>Manager Name:</strong> ${user.name}</p>
      <p><strong>Manager Email:</strong> ${user.email}</p>
      <p><strong>Is Host:</strong> ${user.isHost}</p>
      <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
    `);
  });

  socket.on('START_AUCTION', (data) => {
    const code = socket.roomCode;
    const state = ROOMS.get(code);
    if (!state) return;

    const user = state.users.find(u => u.id === socket.id);
    if (user && user.isHost && state.phase === 'LOBBY') {
      if (state.users.length < 1) {
        socket.emit('ERROR', 'Need at least 1 player to start.');
        return;
      }
      
      state.config.timer = data.timer || 15;
      state.config.budget = data.budget || 300;
      state.config.squadSize = data.squadSize || 11;
      state.config.apiKey = data.apiKey || '';
      state.config.apiHost = data.apiHost || 'v3.football.api-sports.io';
      state.config.enableManualNominations = !!data.enableManualNominations;
      
      state.pool = data.pool.sort(() => Math.random() - 0.5);
      state.users.forEach(u => u.budget = state.config.budget);
      state.messages = [];
      state.draftedHistory = [];
      state.nominatorIndex = 0;
      
      addMessage(state, "Auction Started!");
      nextPlayer(code);

      sendAdminNotification(`🎬 Auction Started - Room ${code}`, `
        <h3>Draft Auction Started</h3>
        <p><strong>Room Code:</strong> ${code}</p>
        <p><strong>Initiated By:</strong> ${user.name}</p>
        <p><strong>Managers Drafted:</strong> ${state.users.length}</p>
        <p><strong>Settings:</strong> Budget $${state.config.budget}M, Squad Size ${state.config.squadSize}, Timer ${state.config.timer}s</p>
        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
      `);
    }
  });

  socket.on('SEARCH_PLAYERS', async ({ query }) => {
    const code = socket.roomCode;
    const state = ROOMS.get(code);
    if (!state) return;

    try {
      const results = await searchPlayers(query, state.config.apiKey, state.config.apiHost);
      const available = results.filter(p => !state.draftedHistory.includes(p.id));
      socket.emit('SEARCH_RESULTS', available);
    } catch (err) {
      socket.emit('ERROR', 'Error searching players.');
    }
  });

  socket.on('NOMINATE_PLAYER', async (player) => {
    const code = socket.roomCode;
    const state = ROOMS.get(code);
    if (!state) return;

    const user = state.users.find(u => u.id === socket.id);
    if (!user) return;
    
    const activeNominator = state.users[state.nominatorIndex];
    if (!activeNominator || activeNominator.id !== socket.id) {
      socket.emit('ERROR', "It is not your turn to nominate!");
      return;
    }
    
    if (state.phase !== 'NOMINATION') {
      socket.emit('ERROR', "Not in nomination phase.");
      return;
    }
    
    if (state.draftedHistory.includes(player.id)) {
      socket.emit('ERROR', "This player has already been nominated.");
      return;
    }
    
    try {
      if (!player.photo) {
        const photos = await searchDuckDuckGoImage(player.name + ' ' + player.club + ' football headshot');
        if (photos && photos.length > 0) {
          player.photo = photos[0].image;
        }
      }
    } catch (e) {
      console.log("Failed to fetch photo for nominated player:", e.message);
    }

    state.currentPlayer = player;
    state.draftedHistory.push(player.id);
    state.currentBid = player.basePrice || 5;
    state.highestBidder = null;
    state.skipVotes = []; // Reset skip votes
    state.timer = state.config.timer;
    state.phase = 'BIDDING';
    
    state.nominatorIndex = (state.nominatorIndex + 1) % state.users.length;
    
    addMessage(state, `${user.name} nominates ${player.name} (Base Price: $${state.currentBid}M)`);
    broadcastState(code);
    startTimer(code);
  });

  socket.on('PLACE_BID', (incrementAmount) => {
    const code = socket.roomCode;
    const state = ROOMS.get(code);
    if (!state) return;

    if (state.phase !== 'BIDDING') return;
    const user = state.users.find(u => u.id === socket.id);
    if (!user) return;

    const allowedIncs = [5, 15, 25];
    let inc = parseInt(incrementAmount);
    if (!allowedIncs.includes(inc)) {
      inc = 5;
    }

    let extra = 0;
    if (state.highestBidder === null) {
      extra = inc === 5 ? 0 : (inc === 15 ? 10 : 20);
    } else {
      extra = inc;
    }

    const newBid = state.currentBid + extra;

    const errorMsg = validateBid(state, user, state.currentPlayer, newBid);
    if (errorMsg) {
      socket.emit('ERROR', errorMsg);
      return;
    }

    state.currentBid = newBid;
    state.highestBidder = socket.id;
    
    if (state.timer < 10) {
      state.timer = 10;
      io.to(code).emit('TIMER_UPDATE', state.timer);
    }
    
    addMessage(state, `${user.name} bids $${state.currentBid}M! (+ $${inc}M)`);
    broadcastState(code);
  });

  socket.on('SIMULATE_TOURNAMENT', () => {
    const code = socket.roomCode;
    const state = ROOMS.get(code);
    if (!state) return;

    if (state.phase !== 'FINISHED') {
      socket.emit('ERROR', 'Auction must be finished to run the tournament.');
      return;
    }
    const results = runTournamentSimulation(state.users);
    io.to(code).emit('TOURNAMENT_RESULTS', results);
  });

  socket.on('SKIP_PLAYER', () => {
    const code = socket.roomCode;
    const state = ROOMS.get(code);
    if (!state) return;

    if (state.phase !== 'BIDDING' || !state.currentPlayer) return;

    const user = state.users.find(u => u.id === socket.id);
    if (!user) return;

    // Host instant skip before a bid is raised:
    if (user.isHost && state.highestBidder === null) {
      handleSkip(code, "skipped by host");
      return;
    }

    // Normal user skip vote:
    if (!state.skipVotes.includes(socket.id)) {
      state.skipVotes.push(socket.id);
      addMessage(state, `${user.name} voted to skip (${state.skipVotes.length}/${state.users.length})`);
      
      if (state.skipVotes.length >= state.users.length) {
        handleSkip(code, "unanimously skipped");
      } else {
        broadcastState(code);
      }
    }
  });

  socket.on('PAUSE_AUCTION', () => {
    const code = socket.roomCode;
    const state = ROOMS.get(code);
    if (!state) return;

    const user = state.users.find(u => u.id === socket.id);
    if (user && user.isHost && state.phase === 'BIDDING') {
      state.isPaused = !state.isPaused;
      addMessage(state, state.isPaused ? "⏸️ Auction PAUSED by Host." : "▶️ Auction RESUMED by Host.");
      broadcastState(code);
    }
  });

  socket.on('END_AUCTION', () => {
    const code = socket.roomCode;
    const state = ROOMS.get(code);
    if (!state) return;

    const user = state.users.find(u => u.id === socket.id);
    if (user && user.isHost) {
      clearInterval(state.timerInterval);
      finalizeAuction(state, code);
    }
  });

  socket.on('LEAVE_ROOM', () => {
    const code = socket.roomCode;
    if (!code) return;

    const state = ROOMS.get(code);
    if (!state) return;

    const user = state.users.find(u => u.id === socket.id);
    
    // Explicitly delete user from the list
    state.users = state.users.filter(u => u.id !== socket.id);
    socket.leave(code);
    socket.roomCode = null;

    if (user) {
      addMessage(state, `🚪 Manager ${user.name} left the room.`);
    }

    if (state.users.length > 0 && !state.users.some(u => u.isHost && u.connected)) {
      const firstActive = state.users.find(u => u.connected);
      if (firstActive) {
        state.users.forEach(u => u.isHost = false);
        firstActive.isHost = true;
      }
    }

    const anyConnected = state.users.some(u => u.connected);
    if (!anyConnected || state.users.length === 0) {
      if (state.timerInterval) clearInterval(state.timerInterval);
      ROOMS.delete(code);
      console.log(`Room cleaned up: ${code}`);
    } else {
      broadcastState(code);
    }
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
    const code = socket.roomCode;
    if (!code) return;

    const state = ROOMS.get(code);
    if (!state) return;

    const user = state.users.find(u => u.id === socket.id);
    if (user) {
      user.connected = false;
    }

    if (state.phase === 'LOBBY') {
      // In lobby, clean up the slot immediately
      state.users = state.users.filter(u => u.id !== socket.id);
    } else if (user) {
      addMessage(state, `🔌 Manager ${user.name} disconnected.`);
    }

    // Re-assign host role if the current host disconnected
    if (state.users.length > 0 && !state.users.some(u => u.isHost && u.connected)) {
      const firstActive = state.users.find(u => u.connected);
      if (firstActive) {
        state.users.forEach(u => u.isHost = false);
        firstActive.isHost = true;
      }
    }

    // Only clean up the room if ALL users have disconnected
    const anyConnected = state.users.some(u => u.connected);
    if (!anyConnected) {
      if (state.timerInterval) clearInterval(state.timerInterval);
      ROOMS.delete(code);
      console.log(`Room cleaned up: ${code}`);
    } else {
      broadcastState(code);
    }
  });
});

function runTournamentSimulation(users) {
  let participants = [...users];
  
  if (participants.length === 1) {
    const aiTeams = [
      {
        name: "Real Madrid Legends",
        squad: [
          { name: "Cristiano Ronaldo", rating: 92, position: "FW", club: "Real Madrid" },
          { name: "Zinedine Zidane", rating: 91, position: "MF", club: "Real Madrid" },
          { name: "Luka Modric", rating: 89, position: "MF", club: "Real Madrid" },
          { name: "Sergio Ramos", rating: 88, position: "DF", club: "Real Madrid" },
          { name: "Iker Casillas", rating: 90, position: "GK", club: "Real Madrid" }
        ]
      },
      {
        name: "Premier League All-Stars",
        squad: [
          { name: "Thierry Henry", rating: 91, position: "FW", club: "Arsenal" },
          { name: "Kevin De Bruyne", rating: 90, position: "MF", club: "Man City" },
          { name: "Steven Gerrard", rating: 88, position: "MF", club: "Liverpool" },
          { name: "Virgil van Dijk", rating: 89, position: "DF", club: "Liverpool" },
          { name: "Alisson Becker", rating: 88, position: "GK", club: "Liverpool" }
        ]
      },
      {
        name: "Samba Boys (Brazil)",
        squad: [
          { name: "Ronaldo Nazario", rating: 93, position: "FW", club: "Brazil" },
          { name: "Ronaldinho", rating: 91, position: "MF", club: "Brazil" },
          { name: "Kaka", rating: 89, position: "MF", club: "Brazil" },
          { name: "Cafu", rating: 88, position: "DF", club: "Brazil" },
          { name: "Dida", rating: 85, position: "GK", club: "Brazil" }
        ]
      }
    ];
    participants = [...participants, ...aiTeams];
  }
  
  const table = participants.map(u => ({
    name: u.name,
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    gf: 0,
    ga: 0,
    pts: 0
  }));
  
  const matches = [];
  
  for (let i = 0; i < participants.length; i++) {
    for (let j = i + 1; j < participants.length; j++) {
      const teamA = participants[i];
      const teamB = participants[j];
      
      const getRating = (team) => {
        if (!team.squad || team.squad.length === 0) return 60;
        return team.squad.reduce((sum, p) => sum + p.rating, 0) / team.squad.length;
      };
      
      const ratingA = getRating(teamA);
      const ratingB = getRating(teamB);
      
      const diff = ratingA - ratingB;
      const lambdaA = Math.max(0.5, 1.8 + (diff / 10));
      const lambdaB = Math.max(0.5, 1.8 - (diff / 10));
      
      const poisson = (lambda) => {
        let L = Math.exp(-lambda), k = 0, p = 1;
        do { k++; p *= Math.random(); } while (p > L);
        return k - 1;
      };
      
      const goalsA = poisson(lambdaA);
      const goalsB = poisson(lambdaB);
      
      const events = [];
      const getGoalscorers = (team, count) => {
        const scorers = [];
        if (!team.squad || team.squad.length === 0) {
          for (let g = 0; g < count; g++) scorers.push("Unknown Player");
          return scorers;
        }
        
        const attackers = team.squad.filter(p => p.position === 'FW');
        const midfielders = team.squad.filter(p => p.position === 'MF');
        const defenders = team.squad.filter(p => p.position === 'DF');
        const pool = [...attackers, ...attackers, ...midfielders, ...defenders];
        
        if (pool.length === 0) {
          for (let g = 0; g < count; g++) scorers.push(team.squad[Math.floor(Math.random() * team.squad.length)].name);
          return scorers;
        }
        
        for (let g = 0; g < count; g++) {
          const selected = pool[Math.floor(Math.random() * pool.length)];
          scorers.push(selected.name);
        }
        return scorers;
      };
      
      const scorersA = getGoalscorers(teamA, goalsA);
      const scorersB = getGoalscorers(teamB, goalsB);
      
      scorersA.forEach(name => {
        const minute = Math.floor(Math.random() * 90) + 1;
        events.push({ team: teamA.name, type: 'GOAL', player: name, minute });
      });
      
      scorersB.forEach(name => {
        const minute = Math.floor(Math.random() * 90) + 1;
        events.push({ team: teamB.name, type: 'GOAL', player: name, minute });
      });
      
      events.sort((a,b) => a.minute - b.minute);
      
      const rowA = table.find(r => r.name === teamA.name);
      const rowB = table.find(r => r.name === teamB.name);
      
      rowA.played++;
      rowB.played++;
      rowA.gf += goalsA;
      rowA.ga += goalsB;
      rowB.gf += goalsB;
      rowB.ga += goalsA;
      
      if (goalsA > goalsB) {
        rowA.won++;
        rowA.pts += 3;
        rowB.lost++;
      } else if (goalsA < goalsB) {
        rowB.won++;
        rowB.pts += 3;
        rowA.lost++;
      } else {
        rowA.drawn++;
        rowA.pts += 1;
        rowB.drawn++;
        rowB.pts += 1;
      }
      
      matches.push({
        home: teamA.name,
        away: teamB.name,
        homeScore: goalsA,
        awayScore: goalsB,
        events: events.map(e => `${e.minute}' Goal! ${e.player} (${e.team})`)
      });
    }
  }
  
  table.sort((a,b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    const gdB = b.gf - b.ga;
    const gdA = a.gf - a.ga;
    if (gdB !== gdA) return gdB - gdA;
    return b.gf - a.gf;
  });
  
  return { matches, table };
}

// Clean up idle/inactive rooms every 10 minutes to prevent memory leaks and support high concurrency (10+ simultaneous auctions)
setInterval(() => {
  const now = Date.now();
  for (const [code, state] of ROOMS.entries()) {
    // If room has had no activity for more than 2 hours, clean it up
    if (now - state.lastActivity > 2 * 60 * 60 * 1000) {
      console.log(`[Cleaner] Room ${code} cleaned up due to inactivity.`);
      if (state.timerInterval) clearInterval(state.timerInterval);
      ROOMS.delete(code);
    }
  }
}, 10 * 60 * 1000);

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
