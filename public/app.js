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

function updateAuthUI(username, email, shouldCloseModal = true) {
  currentUser = username;
  currentEmail = email || '';

  if (shouldCloseModal && $('#login-overlay')) {
    $('#login-overlay').style.display = 'none';
  }

  if ($('#user-profile')) {
    $('#user-profile').innerHTML = `👤 ${escapeHTML(currentUser)}`;
    $('#user-profile').title = `Signed in as ${escapeHTML(currentUser)} (Click to switch account or reset password)`;
    $('#user-profile').style.cursor = 'pointer';
    $('#user-profile').onclick = () => {
      if (confirm(`Currently signed in as ${currentUser}.\n\nWould you like to open the account screen to switch account or change/recover password?`)) {
        if ($('#login-overlay')) {
          $('#login-overlay').style.display = 'flex';
          closeForgotPasswordView();
        }
      }
    };
  }
  if ($('#logout-btn')) $('#logout-btn').style.display = 'inline-flex';
  if ($('#mobile-logout-btn')) $('#mobile-logout-btn').style.display = 'inline-flex';
  if ($('#manager-name')) $('#manager-name').value = currentUser;
}

function switchAuthTab(tab, prefill = '') {
  const loginTabBtn = document.getElementById('auth-tab-login');
  const regTabBtn = document.getElementById('auth-tab-register');
  const loginView = document.getElementById('login-main-view');
  const regView = document.getElementById('register-main-view');
  const fpView = document.getElementById('forgot-password-view');
  const tabsBar = document.getElementById('auth-tabs-bar');
  const loginErr = document.getElementById('login-error');
  const regErr = document.getElementById('reg-error');
  const regSuccess = document.getElementById('reg-success');

  if (loginErr) loginErr.style.display = 'none';
  if (regErr) regErr.style.display = 'none';
  if (regSuccess) regSuccess.style.display = 'none';
  if (fpView) fpView.style.display = 'none';
  if (tabsBar) tabsBar.style.display = 'flex';

  if (tab === 'login') {
    if (loginTabBtn) loginTabBtn.classList.add('active');
    if (regTabBtn) regTabBtn.classList.remove('active');
    if (loginView) {
      loginView.style.display = 'block';
      loginView.classList.remove('auth-view-content');
      void loginView.offsetWidth;
      loginView.classList.add('auth-view-content');
    }
    if (regView) regView.style.display = 'none';
    const input = document.getElementById('login-username');
    if (input) {
      if (prefill) input.value = prefill;
      setTimeout(() => input.focus(), 60);
    }
  } else {
    if (regTabBtn) regTabBtn.classList.add('active');
    if (loginTabBtn) loginTabBtn.classList.remove('active');
    if (regView) {
      regView.style.display = 'block';
      regView.classList.remove('auth-view-content');
      void regView.offsetWidth;
      regView.classList.add('auth-view-content');
    }
    if (loginView) loginView.style.display = 'none';
    const userInput = document.getElementById('reg-username');
    const emailInput = document.getElementById('reg-email');
    if (prefill) {
      if (prefill.includes('@') && emailInput) {
        emailInput.value = prefill;
      } else if (userInput) {
        userInput.value = prefill;
      }
    }
    if (userInput && !userInput.value) {
      setTimeout(() => userInput.focus(), 60);
    } else if (emailInput && !emailInput.value) {
      setTimeout(() => emailInput.focus(), 60);
    }
  }
}

function updatePasswordStrength(password) {
  const bar = document.getElementById('reg-strength-bar');
  const label = document.getElementById('reg-strength-label');
  if (!bar || !label) return;

  if (!password) {
    bar.style.width = '0%';
    label.textContent = '';
    return;
  }

  let score = 0;
  if (password.length >= 4) score += 1;
  if (password.length >= 8) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[A-Z]/.test(password) || /[^A-Za-z0-9]/.test(password)) score += 1;

  if (score <= 1) {
    bar.style.width = '25%';
    bar.style.background = '#ff007f';
    label.textContent = 'Weak';
    label.style.color = '#ff007f';
  } else if (score === 2) {
    bar.style.width = '55%';
    bar.style.background = '#f1c40f';
    label.textContent = 'Fair';
    label.style.color = '#f1c40f';
  } else if (score === 3) {
    bar.style.width = '80%';
    bar.style.background = '#00f2fe';
    label.textContent = 'Good';
    label.style.color = '#00f2fe';
  } else {
    bar.style.width = '100%';
    bar.style.background = '#00ff87';
    label.textContent = 'Strong 🔥';
    label.style.color = '#00ff87';
  }
}

function triggerCelebrationConfetti() {
  const colors = ['#00f2fe', '#00ff87', '#ffd700', '#ff007f', '#ffffff'];
  const symbols = ['⚽', '🌟', '✨', '🏆', '🎉', '🟩', '🟦', '🟨'];
  const count = 45;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-particle';
    const isSymbol = Math.random() > 0.45;
    if (isSymbol) {
      p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      p.style.fontSize = `${Math.floor(14 + Math.random() * 16)}px`;
    } else {
      const color = colors[Math.floor(Math.random() * colors.length)];
      p.style.width = `${Math.floor(8 + Math.random() * 10)}px`;
      p.style.height = `${Math.floor(8 + Math.random() * 10)}px`;
      p.style.backgroundColor = color;
      p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      p.style.boxShadow = `0 0 10px ${color}`;
    }

    const startX = window.innerWidth / 2;
    const startY = window.innerHeight * 0.42;
    p.style.left = `${startX}px`;
    p.style.top = `${startY}px`;

    document.body.appendChild(p);

    const angle = Math.random() * Math.PI * 2;
    const velocity = 140 + Math.random() * 300;
    const destX = Math.cos(angle) * velocity;
    const destY = Math.sin(angle) * velocity + (80 + Math.random() * 120);
    const rotation = (Math.random() - 0.5) * 720;
    const duration = 1200 + Math.random() * 800;

    const anim = p.animate([
      { transform: 'translate(0, 0) scale(0.6) rotate(0deg)', opacity: 1 },
      { transform: `translate(${destX * 0.6}px, ${destY * 0.4 - 40}px) scale(1.2) rotate(${rotation * 0.5}deg)`, opacity: 1, offset: 0.4 },
      { transform: `translate(${destX}px, ${destY + 100}px) scale(0.8) rotate(${rotation}deg)`, opacity: 0 }
    ], {
      duration: duration,
      easing: 'cubic-bezier(0.2, 0.8, 0.3, 1)',
      fill: 'forwards'
    });

    anim.onfinish = () => p.remove();
  }
}

async function handleLogin() {
  const username = ($('#login-username')?.value || '').trim();
  const password = ($('#login-password')?.value || '').trim();
  const errDiv = $('#login-error');
  const submitBtn = $('#login-submit-btn');
  const panelCard = $('#auth-panel-card');

  function triggerShake(el) {
    if (!el) return;
    el.classList.remove('auth-shake');
    void el.offsetWidth;
    el.classList.add('auth-shake');
  }

  if (!username || !password) {
    if (errDiv) {
      errDiv.textContent = "Please enter your username (or email) and password.";
      errDiv.style.display = 'block';
      triggerShake(errDiv);
    }
    return;
  }

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>⏳ Signing In...</span>';
  }

  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if (res.ok && data.success) {
      if (errDiv) errDiv.style.display = 'none';
      if (submitBtn) submitBtn.innerHTML = '<span>✅ Signed In!</span>';

      updateAuthUI(data.username, data.email || '', false);

      // Save credentials for auto login on same device
      localStorage.setItem('auction_username', data.username);
      localStorage.setItem('auction_email', data.email || '');

      showToast(`Logged in as ${data.username}`);
      loadDraftHistory();

      // Smooth exit animation
      setTimeout(() => {
        if (panelCard) {
          panelCard.classList.add('auth-panel-closing');
          setTimeout(() => {
            if ($('#login-overlay')) $('#login-overlay').style.display = 'none';
            panelCard.classList.remove('auth-panel-closing');
          }, 300);
        } else {
          if ($('#login-overlay')) $('#login-overlay').style.display = 'none';
        }
      }, 350);

    } else {
      const errorMsg = data.error || "Login failed.";
      if (errDiv) {
        if (errorMsg.toLowerCase().includes('password') || errorMsg.toLowerCase().includes('invalid')) {
          errDiv.innerHTML = `${escapeHTML(errorMsg)} <a href="javascript:void(0)" onclick="openForgotPasswordView()" style="color:var(--primary-neon); text-decoration:underline; font-weight:700; margin-left:4px;">Forgot password?</a>`;
        } else {
          errDiv.textContent = errorMsg;
        }
        errDiv.style.display = 'block';
        triggerShake(errDiv);
      }
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Sign In 🚀</span>';
      }
    }
  } catch (err) {
    if (errDiv) {
      errDiv.textContent = "Server connection error. Please try again.";
      errDiv.style.display = 'block';
      triggerShake(errDiv);
    }
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span>Sign In 🚀</span>';
    }
  }
}

// ── Forgot Password & Password Recovery System ──
function togglePasswordVisibility(inputId, btnEl) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    if (btnEl) btnEl.textContent = '🙈';
  } else {
    input.type = 'password';
    if (btnEl) btnEl.textContent = '👁️';
  }
}

function openForgotPasswordView(prefill = '') {
  const tabsBar = document.getElementById('auth-tabs-bar');
  const mainView = document.getElementById('login-main-view');
  const regView = document.getElementById('register-main-view');
  const fpView = document.getElementById('forgot-password-view');
  const fpStep1 = document.getElementById('fp-step-1');
  const fpStep2 = document.getElementById('fp-step-2');
  const err1 = document.getElementById('fp-step1-error');
  const err2 = document.getElementById('fp-step2-error');
  const success2 = document.getElementById('fp-step2-success');

  if (tabsBar) tabsBar.style.display = 'none';
  if (mainView) mainView.style.display = 'none';
  if (regView) regView.style.display = 'none';
  if (fpView) fpView.style.display = 'block';
  if (fpStep1) fpStep1.style.display = 'block';
  if (fpStep2) fpStep2.style.display = 'none';
  if (err1) err1.style.display = 'none';
  if (err2) err2.style.display = 'none';
  if (success2) success2.style.display = 'none';

  // Pre-fill identifier if provided or typed
  const fpInput = document.getElementById('fp-identifier');
  if (fpInput) {
    if (prefill) {
      fpInput.value = prefill;
    } else {
      const loginUser = document.getElementById('login-username')?.value.trim() || document.getElementById('reg-username')?.value.trim() || '';
      const loginEmail = document.getElementById('reg-email')?.value.trim() || '';
      if (loginEmail) {
        fpInput.value = loginEmail;
      } else if (loginUser) {
        fpInput.value = loginUser;
      }
    }
    setTimeout(() => fpInput.focus(), 60);
  }
}

function closeForgotPasswordView() {
  const tabsBar = document.getElementById('auth-tabs-bar');
  const mainView = document.getElementById('login-main-view');
  const fpView = document.getElementById('forgot-password-view');
  if (fpView) fpView.style.display = 'none';
  if (tabsBar) tabsBar.style.display = 'flex';
  if (mainView) mainView.style.display = 'block';
  switchAuthTab('login');
}

let fpResendInterval = null;

async function handleForgotPasswordRequest(isResend = false) {
  const errDiv = isResend ? document.getElementById('fp-step2-error') : document.getElementById('fp-step1-error');
  const reqBtn = isResend ? document.getElementById('fp-resend-link') : document.getElementById('fp-request-btn');
  
  let identifier = '';
  if (isResend && window._fpTargetUsername) {
    identifier = window._fpTargetUsername;
  } else {
    identifier = document.getElementById('fp-identifier')?.value.trim() || '';
  }

  if (!identifier) {
    if (errDiv) {
      errDiv.textContent = 'Please enter your username or registered email address.';
      errDiv.style.display = 'block';
    }
    return;
  }

  if (errDiv) errDiv.style.display = 'none';
  
  if (!isResend && reqBtn) {
    reqBtn.disabled = true;
    reqBtn.textContent = 'Verifying Account...';
  }

  try {
    const res = await fetch('/api/forgot-password/request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier })
    });
    const data = await res.json();

    if (res.ok && data.success) {
      window._fpTargetUsername = data.username;
      
      const step1 = document.getElementById('fp-step-1');
      const step2 = document.getElementById('fp-step-2');
      const descBox = document.getElementById('fp-account-desc');
      const helperBanner = document.getElementById('fp-code-helper-banner');
      const helperVal = document.getElementById('fp-code-helper-val');
      const codeInput = document.getElementById('fp-code');

      if (descBox) {
        descBox.innerHTML = `Security code generated for manager <strong style="color:#00ff87;">${escapeHTML(data.username)}</strong> (linked to <strong style="color:#00f2fe;">${escapeHTML(data.maskedEmail)}</strong>).`;
      }

      if (data.codePreview) {
        if (helperBanner) helperBanner.style.display = 'block';
        if (helperVal) helperVal.textContent = data.codePreview;
        if (codeInput && !codeInput.value) {
          codeInput.value = data.codePreview;
        }
      } else {
        if (helperBanner) helperBanner.style.display = 'none';
      }

      if (step1) step1.style.display = 'none';
      if (step2) step2.style.display = 'block';

      showToast(data.message || 'Verification code generated!');
      if (codeInput) setTimeout(() => codeInput.focus(), 100);

      startResendCountdown();
    } else {
      if (errDiv) {
        errDiv.textContent = data.error || 'No matching account found.';
        errDiv.style.display = 'block';
      }
    }
  } catch (err) {
    if (errDiv) {
      errDiv.textContent = 'Server connection error. Please try again.';
      errDiv.style.display = 'block';
    }
  } finally {
    if (!isResend && reqBtn) {
      reqBtn.disabled = false;
      reqBtn.textContent = 'Find Account & Send Code 📨';
    }
  }
}

function startResendCountdown() {
  const resendLink = document.getElementById('fp-resend-link');
  if (!resendLink) return;
  if (fpResendInterval) clearInterval(fpResendInterval);

  let secondsLeft = 60;
  resendLink.style.pointerEvents = 'none';
  resendLink.style.opacity = '0.6';
  resendLink.textContent = `Resend in ${secondsLeft}s`;

  fpResendInterval = setInterval(() => {
    secondsLeft--;
    if (secondsLeft <= 0) {
      clearInterval(fpResendInterval);
      fpResendInterval = null;
      resendLink.style.pointerEvents = 'auto';
      resendLink.style.opacity = '1';
      resendLink.textContent = 'Resend Code';
    } else {
      resendLink.textContent = `Resend in ${secondsLeft}s`;
    }
  }, 1000);
}

function copyHelperCode() {
  const code = document.getElementById('fp-code-helper-val')?.textContent.trim();
  const codeInput = document.getElementById('fp-code');
  if (code && codeInput) {
    codeInput.value = code;
    showToast(`Verification code ${code} auto-filled!`);
    const newPassInput = document.getElementById('fp-new-password');
    if (newPassInput) newPassInput.focus();
  }
}

function generateAndFillPassword() {
  const words = ['Striker', 'Playmaker', 'Champion', 'BallonDor', 'GoalMachine', 'TopScorer', 'TrophyHunter', 'PremierLegend'];
  const symbols = ['!', '#', '$', '@'];
  const randomWord = words[Math.floor(Math.random() * words.length)];
  const randomNum = Math.floor(100 + Math.random() * 900);
  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  const generated = `${randomWord}${randomNum}${randomSymbol}`;

  const pass1 = document.getElementById('fp-new-password');
  const pass2 = document.getElementById('fp-confirm-password');

  if (pass1 && pass2) {
    pass1.value = generated;
    pass2.value = generated;
    pass1.type = 'text';
    pass2.type = 'text';

    document.querySelectorAll('#fp-step-2 button[aria-label="Toggle password visibility"]').forEach(btn => {
      btn.textContent = '🙈';
    });

    showToast(`Generated password: ${generated}`);
  }
}

async function handleForgotPasswordReset() {
  const username = window._fpTargetUsername;
  const code = document.getElementById('fp-code')?.value.trim();
  const newPassword = document.getElementById('fp-new-password')?.value.trim();
  const confirmPassword = document.getElementById('fp-confirm-password')?.value.trim();
  const errDiv = document.getElementById('fp-step2-error');
  const successDiv = document.getElementById('fp-step2-success');
  const submitBtn = document.getElementById('fp-submit-btn');

  if (errDiv) errDiv.style.display = 'none';
  if (successDiv) successDiv.style.display = 'none';

  if (!username) {
    if (errDiv) {
      errDiv.textContent = 'Session lost. Please return to Step 1 and re-enter your username.';
      errDiv.style.display = 'block';
    }
    return;
  }

  if (!code || code.length < 6) {
    if (errDiv) {
      errDiv.textContent = 'Please enter the 6-digit security code.';
      errDiv.style.display = 'block';
    }
    return;
  }

  if (!newPassword || newPassword.length < 4) {
    if (errDiv) {
      errDiv.textContent = 'New password must be at least 4 characters long.';
      errDiv.style.display = 'block';
    }
    return;
  }

  if (newPassword !== confirmPassword) {
    if (errDiv) {
      errDiv.textContent = 'Passwords do not match. Please re-enter carefully.';
      errDiv.style.display = 'block';
    }
    return;
  }

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Updating Password...';
  }

  try {
    const res = await fetch('/api/forgot-password/reset', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, code, newPassword })
    });
    const data = await res.json();

    if (res.ok && data.success) {
      if (successDiv) {
        successDiv.textContent = 'Password reset successfully! Signing you in...';
        successDiv.style.display = 'block';
      }

      // Automatically sign the user in with their updated credentials!
      updateAuthUI(data.username, data.email || '');
      localStorage.setItem('auction_username', data.username);
      localStorage.setItem('auction_email', data.email || '');

      showToast(`🎉 Password reset successful! Welcome, ${data.username}!`);
      loadDraftHistory();

      setTimeout(() => {
        closeForgotPasswordView();
        if ($('#login-overlay')) $('#login-overlay').style.display = 'none';
      }, 700);
    } else {
      if (errDiv) {
        errDiv.textContent = data.error || 'Password reset failed.';
        errDiv.style.display = 'block';
      }
    }
  } catch (err) {
    if (errDiv) {
      errDiv.textContent = 'Server connection error during password reset.';
      errDiv.style.display = 'block';
    }
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Set New Password & Sign In 🚀';
    }
  }
}

function handleGuestLogin() {
  const guestName = 'Manager_' + Math.floor(1000 + Math.random() * 9000);
  const guestEmail = `${guestName.toLowerCase()}@auction.local`;
  const panelCard = $('#auth-panel-card');

  if (panelCard) {
    panelCard.classList.add('auth-panel-closing');
    setTimeout(() => {
      updateAuthUI(guestName, guestEmail);
      localStorage.setItem('auction_username', currentUser);
      localStorage.setItem('auction_email', currentEmail);
      panelCard.classList.remove('auth-panel-closing');
      showToast(`Welcome, ${currentUser}! Joined as guest.`);
      loadDraftHistory();
    }, 280);
  } else {
    updateAuthUI(guestName, guestEmail);
    localStorage.setItem('auction_username', currentUser);
    localStorage.setItem('auction_email', currentEmail);
    showToast(`Welcome, ${currentUser}! Joined as guest.`);
    loadDraftHistory();
  }
}

function handleLogout() {
  if (currentRoomCode) {
    if (!confirm("You are currently in an active draft room. Do you want to sign out and leave the room?")) {
      return;
    }
    try {
      socket.emit('LEAVE_ROOM');
    } catch (e) {}
  }
  localStorage.removeItem('auction_username');
  localStorage.removeItem('auction_email');
  currentUser = null;
  currentEmail = null;
  showToast("Logged out successfully.");
  window.location.reload();
}

async function handleRegister() {
  // Support fields from dedicated register tab or fallback to login fields
  const username = ($('#reg-username')?.value || $('#login-username')?.value || '').trim();
  const email = ($('#reg-email')?.value || $('#login-email')?.value || '').trim();
  const password = ($('#reg-password')?.value || $('#login-password')?.value || '').trim();
  const confirmPassword = ($('#reg-confirm-password')?.value || password).trim();
  
  const errDiv = $('#reg-error') || $('#login-error');
  const successDiv = $('#reg-success');
  const submitBtn = $('#reg-submit-btn') || $('#reg-btn');
  const panelCard = $('#auth-panel-card');

  function triggerShake(el) {
    if (!el) return;
    el.classList.remove('auth-shake');
    void el.offsetWidth;
    el.classList.add('auth-shake');
  }

  if (errDiv) errDiv.style.display = 'none';
  if (successDiv) successDiv.style.display = 'none';

  if (!username) {
    if (errDiv) {
      errDiv.textContent = "Please choose a manager username.";
      errDiv.style.display = 'block';
      triggerShake(errDiv);
    }
    $('#reg-username')?.focus();
    return;
  }

  if (username.length < 2) {
    if (errDiv) {
      errDiv.textContent = "Username must be at least 2 characters.";
      errDiv.style.display = 'block';
      triggerShake(errDiv);
    }
    $('#reg-username')?.focus();
    return;
  }

  if (username.length > 25) {
    if (errDiv) {
      errDiv.textContent = "Username must be 25 characters or fewer.";
      errDiv.style.display = 'block';
      triggerShake(errDiv);
    }
    $('#reg-username')?.focus();
    return;
  }

  if (!email) {
    if (errDiv) {
      errDiv.textContent = "Please enter an email address for squad reports and recovery.";
      errDiv.style.display = 'block';
      triggerShake(errDiv);
    }
    $('#reg-email')?.focus();
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    if (errDiv) {
      errDiv.textContent = "Please enter a valid email address (e.g. manager@example.com).";
      errDiv.style.display = 'block';
      triggerShake(errDiv);
    }
    $('#reg-email')?.focus();
    return;
  }

  if (!password) {
    if (errDiv) {
      errDiv.textContent = "Please choose a password.";
      errDiv.style.display = 'block';
      triggerShake(errDiv);
    }
    $('#reg-password')?.focus();
    return;
  }

  if (password.length < 4) {
    if (errDiv) {
      errDiv.textContent = "Password must be at least 4 characters long.";
      errDiv.style.display = 'block';
      triggerShake(errDiv);
    }
    $('#reg-password')?.focus();
    return;
  }

  if (password !== confirmPassword) {
    if (errDiv) {
      errDiv.textContent = "Passwords do not match. Please re-enter carefully.";
      errDiv.style.display = 'block';
      triggerShake(errDiv);
    }
    $('#reg-confirm-password')?.focus();
    return;
  }

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>⏳ Creating Account...</span>';
  }

  try {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    });
    const data = await res.json();

    if (res.ok && data.success) {
      if (errDiv) errDiv.style.display = 'none';
      
      // Launch celebratory particle explosion!
      triggerCelebrationConfetti();

      if (successDiv) {
        successDiv.innerHTML = `🎉 <strong>Account Created!</strong> Welcome to Football Auction, <span style="color:#00f2fe;">${escapeHTML(data.username || username)}</span>! Entering arena...`;
        successDiv.style.display = 'block';
      }

      if (submitBtn) {
        submitBtn.innerHTML = '<span>✅ Ready! Entering Arena...</span>';
      }

      const activeUser = data.username || username;
      const activeEmail = data.email || email;

      // Auto sign in user immediately and store in localStorage
      updateAuthUI(activeUser, activeEmail, false);
      localStorage.setItem('auction_username', activeUser);
      localStorage.setItem('auction_email', activeEmail);

      showToast(`Welcome to the Arena, ${activeUser}!`);
      loadDraftHistory();

      // Smoothly dismiss modal with animation
      setTimeout(() => {
        if (panelCard) {
          panelCard.classList.add('auth-panel-closing');
          setTimeout(() => {
            if ($('#login-overlay')) $('#login-overlay').style.display = 'none';
            panelCard.classList.remove('auth-panel-closing');
          }, 300);
        } else {
          if ($('#login-overlay')) $('#login-overlay').style.display = 'none';
        }
      }, 750);

    } else {
      const errorMsg = data.error || "Registration failed. Please try again.";
      if (errDiv) {
        if (data.code === 'EMAIL_EXISTS') {
          errDiv.innerHTML = `
            <div style="font-weight:600; margin-bottom:0.4rem;">An account with this email already exists.</div>
            <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-top:0.5rem;">
              <button type="button" class="btn-secondary auth-action-pill" onclick="switchAuthTab('login', '${escapeHTML(email)}')">🔑 Sign In with this email</button>
              <button type="button" class="btn-secondary auth-action-pill" onclick="openForgotPasswordView('${escapeHTML(email)}')">🔐 Reset Password</button>
            </div>
          `;
        } else if (data.code === 'USERNAME_TAKEN') {
          errDiv.innerHTML = `
            <div style="font-weight:600; margin-bottom:0.4rem;">The username <strong>${escapeHTML(username)}</strong> is already taken.</div>
            <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-top:0.5rem;">
              <button type="button" class="btn-secondary auth-action-pill" onclick="switchAuthTab('login', '${escapeHTML(username)}')">🔑 Sign In as ${escapeHTML(username)}</button>
            </div>
          `;
        } else {
          errDiv.textContent = errorMsg;
        }
        errDiv.style.display = 'block';
        triggerShake(errDiv);
      }
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Create Account & Sign In 🌟</span>';
      }
    }
  } catch (err) {
    if (errDiv) {
      errDiv.textContent = "Server connection error during account creation. Please try again.";
      errDiv.style.display = 'block';
      triggerShake(errDiv);
    }
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span>Create Account & Sign In 🌟</span>';
    }
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

function playWhistleSound() {
  if (!soundEnabled) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    [2600, 2820].forEach(f => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, ctx.currentTime);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    });
    setTimeout(() => {
      [2650, 2870].forEach(f => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, ctx.currentTime);
        gain.gain.setValueAtTime(0.07, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.38);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.38);
      });
    }, 150);
  } catch (e) {}
}

function playGavelThumpSound() {
  if (!soundEnabled) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(130, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(35, ctx.currentTime + 0.22);
    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.22);
  } catch (e) {}
}

// ── Football Auction Visual Animations ──
function triggerFootballKickAnimation(bidderName, bidAmount, isFirstBid) {
  const overlay = document.getElementById('auction-fx-overlay') || document.querySelector('.arena-center');
  if (!overlay) return;

  const ball = document.createElement('div');
  ball.className = 'football-shot-anim';
  ball.textContent = '⚽';

  const startX = (Math.random() - 0.5) * 140;
  ball.style.setProperty('--start-x', `${startX}px`);
  ball.style.setProperty('--start-y', '250px');
  ball.style.setProperty('--target-x', '0px');
  ball.style.setProperty('--target-y', '15px');
  overlay.appendChild(ball);

  setTimeout(() => {
    ball.remove();

    const shockwave = document.createElement('div');
    shockwave.className = 'turf-shockwave';
    shockwave.style.left = '50%';
    shockwave.style.top = '40%';
    overlay.appendChild(shockwave);
    setTimeout(() => shockwave.remove(), 600);

    const highestPanel = document.querySelector('.current-highest-panel');
    if (highestPanel) {
      highestPanel.classList.remove('bid-net-recoil');
      void highestPanel.offsetWidth;
      highestPanel.classList.add('bid-net-recoil');
    }
  }, 500);

  const paddle = document.createElement('div');
  paddle.className = 'bid-paddle-flyout';
  paddle.innerHTML = `
    <span class="bid-paddle-avatar">🏷️</span>
    <div class="bid-paddle-info">
      <span class="bid-paddle-name">${bidderName || 'Manager'}</span>
      <span class="bid-paddle-price">$${bidAmount}M</span>
    </div>
  `;
  overlay.appendChild(paddle);
  setTimeout(() => paddle.remove(), 2100);
}

function triggerFirstBidKickoffAnimation(bidderName, basePrice) {
  const overlay = document.getElementById('auction-fx-overlay') || document.querySelector('.arena-center');
  if (!overlay) return;

  const whistleModal = document.createElement('div');
  whistleModal.className = 'referee-whistle-modal';
  whistleModal.innerHTML = `
    <div class="whistle-icon-badge">
      <span>🟡</span>
      <div class="sonic-wave-pulse"></div>
      <div class="sonic-wave-pulse" style="animation-delay: 0.35s;"></div>
    </div>
    <div class="kickoff-banner-label">
      ⚽ AUCTION KICKED OFF: $${basePrice}M (${bidderName})
    </div>
  `;
  overlay.appendChild(whistleModal);
  setTimeout(() => whistleModal.remove(), 2300);
}

function triggerGavelAndSoldStamp(winnerName, price, isUnsold, isBuyNow) {
  const overlay = document.getElementById('auction-fx-overlay') || document.querySelector('.arena-center');
  const arenaCenter = document.getElementById('auction-arena-center') || document.querySelector('.arena-center');

  if (arenaCenter) {
    arenaCenter.classList.remove('screen-micro-shake');
    void arenaCenter.offsetWidth;
    arenaCenter.classList.add('screen-micro-shake');
    setTimeout(() => arenaCenter.classList.remove('screen-micro-shake'), 350);
  }

  if (overlay) {
    const gavel = document.createElement('div');
    gavel.className = 'gavel-slam-overlay';
    gavel.textContent = '🔨';
    overlay.appendChild(gavel);
    setTimeout(() => gavel.remove(), 650);
  }

  const card = document.querySelector('.player-card');
  if (card) {
    const oldStamp = card.querySelector('.sold-rubber-stamp, .unsold-rubber-stamp');
    if (oldStamp) oldStamp.remove();

    const stamp = document.createElement('div');
    if (isUnsold) {
      stamp.className = 'unsold-rubber-stamp';
      stamp.innerHTML = `
        <div class="stamp-title">WENT UNSOLD</div>
        <div class="stamp-sub">NO QUALIFYING BID</div>
      `;
    } else {
      stamp.className = 'sold-rubber-stamp';
      stamp.innerHTML = `
        <div class="stamp-title">${isBuyNow ? '⚡ BOUGHT INSTANT' : 'TRANSFER OFFICIAL'}</div>
        <div class="stamp-sub">SOLD &bull; $${price}M &bull; ${winnerName}</div>
      `;
    }
    card.appendChild(stamp);
  }
}

function triggerCardRevealAnimation() {
  const card = document.querySelector('.player-card');
  if (card) {
    card.classList.remove('card-pack-reveal');
    void card.offsetWidth;
    card.classList.add('card-pack-reveal');
  }
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
    if ($('#room-code-display')) $('#room-code-display').textContent = `ROOM CODE: ${state.roomCode}`;
    if ($('#lobby-choice-container')) $('#lobby-choice-container').style.display = 'none';
    if ($('#lobby-join-panel')) $('#lobby-join-panel').style.display = 'none';
    if ($('#leave-room-btn')) $('#leave-room-btn').style.display = 'block';
    if ($('#lobby-room-details')) $('#lobby-room-details').style.display = 'block';

    const me = state.users.find(u => u.id === myId);
    const host = state.users.find(u => u.isHost);
    const isHostUser = me && me.isHost;

    if ($('#budget-input')) $('#budget-input').disabled = !isHostUser;
    if ($('#squad-size-input')) $('#squad-size-input').disabled = !isHostUser;
    if ($('#timer-input')) $('#timer-input').disabled = !isHostUser;
    if ($('#manual-nomination-input')) $('#manual-nomination-input').disabled = !isHostUser;
    if ($('#first-bid-base-price-input')) $('#first-bid-base-price-input').disabled = !isHostUser;
    if ($('#player-pool-select')) $('#player-pool-select').disabled = !isHostUser;
    if ($('#start-btn')) $('#start-btn').style.display = isHostUser ? 'block' : 'none';
    if ($('#lobby-setup-panel h2')) {
      $('#lobby-setup-panel h2').textContent = isHostUser 
        ? `⚙️ Room Setup (You are Host)` 
        : `⚙️ Room Settings (Host: ${host?.name || 'Manager'})`;
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
      if ($('#nav-tracker')) $('#nav-tracker').disabled = false;
      if ($('#nav-summary')) $('#nav-summary').disabled = false;
      playCheerSound();
      loadDraftHistory();
      setTimeout(() => renderSummary(), 500);
    }
  } else {
    // Fallback if event wasn't sent
    if (state.phase === 'BIDDING' && prevPhase === 'BIDDING' && !window._lastAnimationHandled) {
      playBidSound();
    }
    window._lastAnimationHandled = false;
  }
});

socket.on('AUCTION_ANIMATION_EVENT', (data) => {
  window._lastAnimationHandled = true;
  if (!data) return;

  if (data.type === 'FIRST_BID') {
    playWhistleSound();
    triggerFirstBidKickoffAnimation(data.bidderName, data.bid);
    triggerFootballKickAnimation(data.bidderName, data.bid, true);
  } else if (data.type === 'BID_RAISE') {
    playBidSound();
    triggerFootballKickAnimation(data.bidderName, data.bid, false);
  } else if (data.type === 'BUY_NOW') {
    playCheerSound();
    triggerGavelAndSoldStamp(data.bidderName, data.bid, false, true);
  } else if (data.type === 'PLAYER_SOLD') {
    if (data.isUnsold) {
      playUnsoldSound();
      triggerGavelAndSoldStamp(data.winnerName, data.finalPrice, true, false);
    } else {
      playGavelThumpSound();
      playSoldSound();
      triggerGavelAndSoldStamp(data.winnerName, data.finalPrice, false, false);
    }
  } else if (data.type === 'PLAYER_REVEAL') {
    triggerCardRevealAnimation();
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

  // Deadline Day tension effect on active player card
  const activeCard = document.querySelector('.player-card');
  if (activeCard) {
    if (time <= 5) {
      activeCard.classList.add('deadline-day-tension');
    } else {
      activeCard.classList.remove('deadline-day-tension');
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
  const poolSize = getPlayersDatabase(poolMode).length;
  if ($('#summary-pool')) $('#summary-pool').textContent = poolSize;
  if ($('#connected-count')) $('#connected-count').textContent = globalState.users.length;

  const me = globalState.users.find(u => u.id === myId);
  if (me && me.isHost !== isHost) {
    isHost = me.isHost;
    if (isHost && $('#start-btn')) $('#start-btn').style.display = 'block';
  }

  const botButtons = $('#bot-control-buttons');
  if (botButtons) {
    botButtons.style.display = isHost ? 'flex' : 'none';
  }

  const list = $('#connected-players-list');
  if (list) {
    list.innerHTML = globalState.users.map(u => {
      const badge = u.isHost ? '👑 ' : (u.isBot ? '🤖 ' : '👤 ');
      const isMeTag = u.id === myId ? '<span style="color:var(--primary-neon)">(You)</span>' : '';
      const botTag = u.isBot ? '<span style="color:var(--text-secondary); font-size:0.75rem; background:rgba(0,242,254,0.1); padding:1px 6px; border-radius:4px; border:1px solid rgba(0,242,254,0.2);">AI Opponent</span>' : '';
      return `<li style="display:flex; align-items:center; gap:0.4rem; padding:0.2rem 0;">${badge}<b>${escapeHTML(u.name)}</b> ${isMeTag} ${botTag}</li>`;
    }).join('');
  }
}

function addAIBot() {
  if (!isHost) return;
  socket.emit('ADD_AI_BOT');
}

function fillAIBots() {
  if (!isHost) return;
  socket.emit('FILL_AI_BOTS');
}

function removeAIBot() {
  if (!isHost) return;
  socket.emit('REMOVE_AI_BOT');
}

function startAuction() {
  if (!isHost) return;
  const budget = parseInt($('#budget-input').value) || 300;
  const timer = parseInt($('#timer-input').value) || 15;
  const squadSize = parseInt($('#squad-size-input').value) || 11;
  const enableManualNominations = $('#manual-nomination-input').checked;
  const enableFirstBidBasePrice = $('#first-bid-base-price-input') ? $('#first-bid-base-price-input').checked : true;

  // Determine player pool based on selection
  const poolSelect = document.getElementById('player-pool-select');
  const poolMode = poolSelect ? poolSelect.value : 'special';
  const pool = getPlayersDatabase(poolMode);

  socket.emit('START_AUCTION', {
    pool: pool,
    playerPool: poolMode,
    budget: budget,
    timer: timer,
    squadSize: squadSize,
    enableManualNominations: enableManualNominations,
    enableFirstBidBasePrice: enableFirstBidBasePrice
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
          <div class="card-rating-badge"><span class="num">${p.rating || '?'}</span><span class="pos">${p.position || '?'}</span></div>
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
      
      // Determine tier for styling
      let tierClass = 'bronze-tier';
      if (p.rating >= 85) tierClass = 'gold-tier';
      else if (p.rating >= 78) tierClass = 'silver-tier';

      let timerAlertClass = '';
      let timerAlertText = '';
      if (globalState.timer <= 3 && globalState.phase === 'BIDDING') {
        timerAlertClass = 'timer-urgency-high';
        timerAlertText = '<div style="color:var(--danger-neon); font-weight:800; font-size:1.1rem; text-shadow:0 0 10px rgba(255,0,127,0.5); text-transform:uppercase; margin-top:0.5rem; animation:pulse 0.4s infinite alternate;">🔥 Going Twice!</div>';
      } else if (globalState.timer <= 6 && globalState.phase === 'BIDDING') {
        timerAlertClass = 'timer-urgency-med';
        timerAlertText = '<div style="color:var(--warning-neon); font-weight:800; font-size:1rem; text-shadow:0 0 10px rgba(255,234,0,0.4); text-transform:uppercase; margin-top:0.5rem; animation:pulse 0.8s infinite alternate;">⚠️ Going Once!</div>';
      }

      const fallbackAvatar = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(p.name) + '&background=002b49&color=00f2fe&size=200&bold=true';
      const photoUrl = p.photo || (`/api/player-image?name=${encodeURIComponent(p.name)}&nat=${encodeURIComponent(p.nationality || '')}&club=${encodeURIComponent(p.club || '')}`);
      const formBadge = p.formStatus || '➖ Steady';

      const buyNowPrice = p.buyNowPrice || Math.round(p.basePrice * 2.5);
      const reservePrice = p.reservePrice || Math.round(p.basePrice * 1.1);

      const isNewPlayerReveal = window._lastActivePlayerId !== p.id;
      if (isNewPlayerReveal) {
        window._lastActivePlayerId = p.id;
      }
      const revealClass = isNewPlayerReveal ? 'card-pack-reveal' : '';

      let stampHtml = '';
      if (globalState.phase === 'SOLD') {
        if (globalState.highestBidder) {
          const winnerName = globalState.users.find(u => u.id === globalState.highestBidder)?.name || 'Nobody';
          stampHtml = `
            <div class="sold-rubber-stamp">
              <div class="stamp-title">TRANSFER OFFICIAL</div>
              <div class="stamp-sub">SOLD &bull; $${globalState.currentBid}M &bull; ${winnerName}</div>
            </div>
          `;
        } else {
          stampHtml = `
            <div class="unsold-rubber-stamp">
              <div class="stamp-title">WENT UNSOLD</div>
              <div class="stamp-sub">NO QUALIFYING BID</div>
            </div>
          `;
        }
      }

      cardArea.innerHTML = `
        <div class="player-card active-card ${tierClass} ${timerAlertClass} ${revealClass}" style="margin: 0 auto;">
          ${stampHtml}
          <div class="card-rating-badge">
            <span class="num">${p.rating}</span>
            <span class="pos">${p.position}</span>
          </div>
          <div class="club-logo">${p.club}</div>
          <img src="${photoUrl}" class="player-photo-main" alt="${escapeHTML(p.name)}" onerror="this.onerror=null; this.src='${fallbackAvatar}';">
          <div class="player-card-info">
            <div class="name">${p.name}</div>
            <div class="meta" style="display:flex; align-items:center; justify-content:center; gap:0.5rem; margin-bottom:0.4rem;">
              <span>${p.nationality}</span>
              <span style="background:rgba(0,242,254,0.1); padding:2px 8px; border-radius:10px; font-size:0.75rem; color:var(--primary-neon); border:1px solid rgba(0,242,254,0.25);">${formBadge}</span>
            </div>
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
        const isFirstBid = globalState.highestBidder === null;

        // Dedicated First Bid Hero Option
        let firstBidHeroHtml = '';
        if (isFirstBid) {
          let disableFirstBid = false;
          let firstBidBtnTitle = `First Bid: Match Base Price ($${p.basePrice}M)`;

          if (me) {
            const clubCount = me.squad.filter(s => s.club === p.club).length;
            const slotsLeft = globalState.config.squadSize - me.squad.length;
            const remainingSlotsNeeded = slotsLeft - 1;
            const minReserve = remainingSlotsNeeded * 1;
            const hasGK = me.squad.some(s => s.position === 'GK');

            if (me.squad.length >= globalState.config.squadSize) {
              disableFirstBid = true;
              firstBidBtnTitle = 'Squad Full';
            } else if (clubCount >= 3) {
              disableFirstBid = true;
              firstBidBtnTitle = 'Club Limit (Max 3)';
            } else if (me.budget < p.basePrice) {
              disableFirstBid = true;
              firstBidBtnTitle = 'Cannot Afford Base Price';
            } else if (me.budget - p.basePrice < minReserve) {
              disableFirstBid = true;
              firstBidBtnTitle = 'Reserve Warning';
            } else if (slotsLeft === 1 && !hasGK && p.position !== 'GK') {
              disableFirstBid = true;
              firstBidBtnTitle = 'Must Buy Goalkeeper';
            }
          } else {
            disableFirstBid = true;
          }

          firstBidHeroHtml = `
            <div class="first-bid-hero-card">
              <div class="first-bid-header">
                <span class="first-bid-pill">🏷️ FIRST BID (BASE PRICE)</span>
                <span class="first-bid-sub">No higher bid required &bull; Open at face value</span>
              </div>
              <button class="first-bid-action-btn" onclick="placeBid(0)" ${disableFirstBid ? 'disabled' : ''}>
                <span class="first-bid-icon">⚽</span>
                <div class="first-bid-details">
                  <span class="first-bid-title">${firstBidBtnTitle}</span>
                  <span class="first-bid-desc">Bid exact base price to kick off the auction</span>
                </div>
                <span class="first-bid-price-tag">$${p.basePrice}M</span>
              </button>
            </div>
            <div class="bid-raise-separator">Or jump ahead with an opening raise</div>
          `;
        }

        const increments = [5, 15, 25];
        const buttonsHtml = increments.map(inc => {
          const nextBid = isFirstBid ? (p.basePrice + inc) : (globalState.currentBid + inc);

          let disableBid = false;
          let bidButtonText = isFirstBid ? `+$${inc}M (Bid $${nextBid}M)` : `+$${inc}M (Bid $${nextBid}M)`;

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
            ${firstBidHeroHtml}
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
            <div style="text-align:center; margin-top:1.25rem;">
              <div class="sold-rubber-stamp" style="position:relative; display:inline-block; transform:rotate(-3deg); margin-bottom:0.75rem;">
                <div class="stamp-title">TRANSFER OFFICIAL</div>
                <div class="stamp-sub">SOLD &bull; $${globalState.currentBid}M &bull; ${winnerName}</div>
              </div>
              <p style="color:var(--text-secondary); font-size:0.85rem; margin-top:0.5rem;">Preparing next player nomination...</p>
            </div>
          `;
        } else {
          controls.innerHTML = `
            <div style="text-align:center; margin-top:1.25rem;">
              <div class="unsold-rubber-stamp" style="position:relative; display:inline-block; transform:rotate(-3deg); margin-bottom:0.75rem;">
                <div class="stamp-title">WENT UNSOLD</div>
                <div class="stamp-sub">NO BIDS RECEIVED</div>
              </div>
              <p style="color:var(--text-secondary); font-size:0.85rem; margin-top:0.5rem;">Next player up shortly...</p>
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
    const fallbackAvatar = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(p.name) + '&background=002b49&color=00f2fe&size=60&bold=true';
    const photoUrl = p.photo || (`/api/player-image?name=${encodeURIComponent(p.name)}&nat=${encodeURIComponent(p.nationality || '')}&club=${encodeURIComponent(p.club || '')}`);
    return `
      <div class="squad-list-item" style="margin-bottom:0.4rem;">
        <div style="display:flex; align-items:center; gap: 0.6rem;">
          <img src="${photoUrl}" style="width:34px; height:34px; border-radius:50%; object-fit:cover; border:1px solid rgba(0,242,254,0.3); flex-shrink:0;" alt="${escapeHTML(p.name)}" onerror="this.onerror=null; this.src='${fallbackAvatar}';">
          <span class="badge-position ${p.position}" style="font-size:0.7rem; padding:0.1rem 0.3rem">${p.position}</span>
          <div>
            <div class="name" style="font-size:0.85rem; font-weight:700;">${escapeHTML(p.name)}</div>
            <div style="font-size:0.7rem; color:var(--text-secondary);">${escapeHTML(p.club)} &bull; ${escapeHTML(p.nationality)} &bull; RTG: ${p.rating}</div>
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
      const fallbackAvatar = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(p.name) + '&background=002b49&color=00f2fe&size=80&bold=true';
      const photoUrl = p.photo || (`/api/player-image?name=${encodeURIComponent(p.name)}&nat=${encodeURIComponent(p.nationality || '')}&club=${encodeURIComponent(p.club || '')}`);
      return `
        <div class="squad-list-item" style="flex-direction:column; padding:0.4rem; align-items:center; text-align:center;">
          <img src="${photoUrl}" class="player-photo-db" style="width:34px; height:34px; border-radius:50%; object-fit:cover; margin-bottom:0.25rem; border:1px solid rgba(0,242,254,0.3);" alt="${escapeHTML(p.name)}" onerror="this.onerror=null; this.src='${fallbackAvatar}';">
          <div style="font-weight:bold; font-size:0.75rem; overflow:hidden; text-overflow:ellipsis; width:100%; white-space:nowrap;">${escapeHTML(p.name.split(' ').pop())}</div>
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
      listContainer.innerHTML = user.squad.map(p => {
        const fallbackAvatar = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(p.name) + '&background=002b49&color=00f2fe&size=60&bold=true';
        const photoUrl = p.photo || (`/api/player-image?name=${encodeURIComponent(p.name)}&nat=${encodeURIComponent(p.nationality || '')}&club=${encodeURIComponent(p.club || '')}`);
        return `
        <div class="squad-list-item" style="display:flex; align-items:center; justify-content:space-between; padding:0.4rem 0.6rem;">
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <img src="${photoUrl}" style="width:30px; height:30px; border-radius:50%; object-fit:cover; border:1px solid rgba(0,242,254,0.3); flex-shrink:0;" alt="${escapeHTML(p.name)}" onerror="this.onerror=null; this.src='${fallbackAvatar}';">
            <span class="badge-position ${p.position}">${p.position}</span>
            <div>
              <span class="name" style="font-size:0.85rem; font-weight:700;">${escapeHTML(p.name)}</span>
              <span style="font-size:0.7rem; color:var(--text-muted); display:block;">${escapeHTML(p.club)} &bull; Rating: ${p.rating}</span>
            </div>
          </div>
          <span class="price" style="font-weight:800; color:var(--success-neon);">$${p.boughtFor}M</span>
        </div>
      `;
      }).join('');
    }
  }
}

/**
 * Shares the active squad lineup to social platforms or messaging apps using the Web Share API.
 * Provides rich textual formation summaries and automatic fallback to clipboard copying.
 */
async function shareMySquad() {
  if (!globalState) {
    showToast("⚠️ Join or start an auction room to view your squad.");
    return;
  }

  const select = $('#squad-manager-select');
  const formationSelect = $('#formation-select');
  const targetId = select ? select.value : myId;
  const user = globalState.users.find(u => u.id === targetId);

  if (!user) {
    showToast("⚠️ Squad not found.");
    return;
  }

  if (!user.squad || user.squad.length === 0) {
    showToast("⚠️ No players drafted in this squad yet!");
    return;
  }

  const formation = formationSelect ? formationSelect.value : '4-3-3';
  const avgRating = (user.squad.reduce((a, b) => a + (b.rating || 0), 0) / user.squad.length).toFixed(1);
  const totalSpent = globalState.config.budget - user.budget;

  // Group players by position
  const gks = user.squad.filter(p => p.position === 'GK').map(p => `${p.name} (${p.rating})`);
  const dfs = user.squad.filter(p => p.position === 'DF').map(p => `${p.name} (${p.rating})`);
  const mfs = user.squad.filter(p => p.position === 'MF').map(p => `${p.name} (${p.rating})`);
  const fws = user.squad.filter(p => p.position === 'FW').map(p => `${p.name} (${p.rating})`);

  let textSummary = `⚽🏆 Check out my ${user.name}'s Dream Lineup on Football Auction!\n\n`;
  textSummary += `📋 Formation: ${formation} | ⭐ Avg Rating: ${avgRating} | 💰 Spent: $${totalSpent}M ($${user.budget}M left)\n\n`;
  
  if (fws.length > 0) textSummary += `🔥 Forwards: ${fws.join(', ')}\n`;
  if (mfs.length > 0) textSummary += `🎯 Midfielders: ${mfs.join(', ')}\n`;
  if (dfs.length > 0) textSummary += `🛡️ Defenders: ${dfs.join(', ')}\n`;
  if (gks.length > 0) textSummary += `🧤 Goalkeeper: ${gks.join(', ')}\n`;
  
  textSummary += `\n🎮 Drafted in Room #${globalState.roomCode || 'LIVE'}. Build your ultimate squad now!`;

  const shareData = {
    title: `${user.name}'s Football Auction Lineup (${formation})`,
    text: textSummary,
    url: window.location.href
  };

  playBlip(720, 0.15, 'triangle');

  if (navigator.share && typeof navigator.share === 'function') {
    try {
      await navigator.share(shareData);
      showToast("🚀 Squad lineup shared successfully!");
    } catch (err) {
      // If user aborted or canceled share picker, don't show an error
      if (err.name === 'AbortError') return;
      console.warn('Web Share failed, attempting clipboard copy:', err);
      fallbackCopySquadText(textSummary);
    }
  } else {
    // Fallback: Copy to clipboard and notify user
    fallbackCopySquadText(textSummary);
  }
}

function fallbackCopySquadText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast("📋 Squad lineup copied to clipboard! Share it on WhatsApp, Twitter, or Discord.");
    }).catch(() => {
      promptCopySquadText(text);
    });
  } else {
    promptCopySquadText(text);
  }
}

function promptCopySquadText(text) {
  const dummy = document.createElement('textarea');
  dummy.value = text;
  dummy.style.position = 'fixed';
  dummy.style.opacity = '0';
  document.body.appendChild(dummy);
  dummy.select();
  try {
    document.execCommand('copy');
    showToast("📋 Squad lineup copied to clipboard! Paste it anywhere to share.");
  } catch (e) {
    showToast("⚠️ Could not auto-copy. Please manually copy your lineup text.");
  }
  document.body.removeChild(dummy);
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

let dbSortColumn = null; // 'name' | 'rating' | 'price'
let dbSortDirection = 'asc'; // 'asc' | 'desc'

function setDbSort(column) {
  if (dbSortColumn === column) {
    // Toggle direction
    dbSortDirection = dbSortDirection === 'asc' ? 'desc' : 'asc';
  } else {
    dbSortColumn = column;
    // Default direction: rating and price highest first (desc), name alphabetical (asc)
    dbSortDirection = (column === 'rating' || column === 'price') ? 'desc' : 'asc';
  }
  renderDatabase();
}

function updateSortHeadersUI() {
  const columns = ['name', 'rating', 'price'];
  columns.forEach(col => {
    const th = $(`#th-sort-${col}`);
    const icon = $(`#sort-icon-${col}`);
    if (!th || !icon) return;

    if (dbSortColumn === col) {
      th.classList.add('active-sort');
      icon.textContent = dbSortDirection === 'asc' ? '▲' : '▼';
      th.setAttribute('aria-sort', dbSortDirection === 'asc' ? 'ascending' : 'descending');
    } else {
      th.classList.remove('active-sort');
      icon.textContent = '↕';
      th.removeAttribute('aria-sort');
    }
  });
}

function onDbPoolChange() {
  const poolSelect = document.getElementById('db-filter-pool');
  const val = poolSelect ? poolSelect.value : 'all';
  if (val === 'india') {
    currentDB = getPlayersDatabase('india');
  } else if (val === 'special') {
    currentDB = getPlayersDatabase('special');
  } else if (val === 'wc2026_elite') {
    currentDB = getPlayersDatabase('wc2026_elite');
  } else {
    currentDB = getPlayersDatabase('wc2026');
  }
  renderDatabase();
}
window.onDbPoolChange = onDbPoolChange;

function initDatabase() {
  initDbSearchControls();
  const poolSelect = document.getElementById('db-filter-pool');
  if (poolSelect && poolSelect.value === 'india') {
    currentDB = getPlayersDatabase('india');
  } else if (poolSelect && poolSelect.value === 'special') {
    currentDB = getPlayersDatabase('special');
  } else if (poolSelect && poolSelect.value === 'wc2026_elite') {
    currentDB = getPlayersDatabase('wc2026_elite');
  } else {
    currentDB = getPlayersDatabase('wc2026');
  }
  renderDatabase();
}

function clearDbSearch() {
  const searchInput = $('#db-search');
  const clearBtn = $('#db-search-clear');
  if (searchInput) {
    searchInput.value = '';
    searchInput.focus();
  }
  if (clearBtn) {
    clearBtn.style.display = 'none';
  }
  renderDatabase();
}

function initDbSearchControls() {
  const searchInput = $('#db-search');
  const clearBtn = $('#db-search-clear');
  const posFilter = $('#db-filter-pos');

  if (searchInput && !searchInput.dataset.searchInit) {
    searchInput.dataset.searchInit = 'true';

    // Real-time filtering as the user types
    searchInput.addEventListener('input', () => {
      if (clearBtn) {
        clearBtn.style.display = searchInput.value.trim().length > 0 ? 'flex' : 'none';
      }
      renderDatabase();
    });

    // Pressing Escape clears the search instantly
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        clearDbSearch();
      }
    });

    // Native search event / paste / cut support
    searchInput.addEventListener('search', () => {
      if (clearBtn) {
        clearBtn.style.display = searchInput.value.trim().length > 0 ? 'flex' : 'none';
      }
      renderDatabase();
    });
  }

  if (clearBtn && !clearBtn.dataset.searchInit) {
    clearBtn.dataset.searchInit = 'true';
    clearBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      clearDbSearch();
    });
  }

  if (posFilter && !posFilter.dataset.filterInit) {
    posFilter.dataset.filterInit = 'true';
    posFilter.addEventListener('change', renderDatabase);
  }
}

function renderDatabase() {
  const tbody = $('#db-tbody');
  const count = $('#db-count');
  if (!tbody || !count) return;

  // Update header indicators
  updateSortHeadersUI();

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

  const posFilter = $('#db-filter-pos') ? $('#db-filter-pos').value : 'ALL';
  const searchInput = $('#db-search');
  const clearBtn = $('#db-search-clear');
  const rawSearch = searchInput ? searchInput.value.trim() : '';
  const searchStr = rawSearch.toLowerCase();

  // Ensure clear button visibility matches current input text
  if (clearBtn) {
    clearBtn.style.display = rawSearch.length > 0 ? 'flex' : 'none';
  }

  const searchTokens = searchStr.split(/\s+/).filter(Boolean);

  let filtered = currentDB.filter(p => {
    if (posFilter !== 'ALL' && p.position !== posFilter) return false;
    if (searchTokens.length > 0) {
      const pName = (p.name || '').toLowerCase();
      const pClub = (p.club || '').toLowerCase();
      const pNat = (p.nationality || '').toLowerCase();
      const pPos = (p.position || '').toLowerCase();
      const matchesAllTokens = searchTokens.every(tok =>
        pName.includes(tok) || pClub.includes(tok) || pNat.includes(tok) || pPos === tok
      );
      if (!matchesAllTokens) return false;
    }
    return true;
  });

  // Apply sorting if a sort column is selected
  if (dbSortColumn) {
    filtered.sort((a, b) => {
      let comparison = 0;
      if (dbSortColumn === 'name') {
        comparison = (a.name || '').localeCompare(b.name || '', undefined, { sensitivity: 'base' });
      } else if (dbSortColumn === 'rating') {
        const ratingA = Number(a.rating) || 0;
        const ratingB = Number(b.rating) || 0;
        comparison = ratingA - ratingB;
      } else if (dbSortColumn === 'price') {
        const priceA = Number(a.basePrice) || 0;
        const priceB = Number(b.basePrice) || 0;
        comparison = priceA - priceB;
      }
      return dbSortDirection === 'asc' ? comparison : -comparison;
    });
  }

  count.textContent = (searchTokens.length > 0 || posFilter !== 'ALL')
    ? `${filtered.length} of ${currentDB.length} players`
    : `${filtered.length} players`;

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
          <div style="font-size: 1.6rem; margin-bottom: 0.5rem;">🔍</div>
          <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem; font-size: 1rem;">No players found</div>
          <div style="font-size: 0.85rem; margin-bottom: 0.85rem; color: var(--text-secondary);">
            No players match &ldquo;<span style="color:var(--primary-neon); font-weight:600;">${escapeHTML(rawSearch)}</span>&rdquo;${posFilter !== 'ALL' ? ` in position <strong>${posFilter}</strong>` : ''}.
          </div>
          <button type="button" class="btn-secondary" onclick="clearDbSearch()" style="width: auto; padding: 0.4rem 1rem; font-size: 0.8rem; display: inline-flex; align-items: center; gap: 0.4rem; margin: 0 auto; cursor: pointer;">
            ✕ Clear Search
          </button>
        </td>
      </tr>
    `;
  } else {
    tbody.innerHTML = filtered.map(p => {
      const fallbackAvatar = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(p.name) + '&background=002b49&color=00f2fe&size=100&bold=true';
      const photoUrl = p.photo || (`/api/player-image?name=${encodeURIComponent(p.name)}&nat=${encodeURIComponent(p.nationality || '')}&club=${encodeURIComponent(p.club || '')}`);
      const careerPts = getPlayerCareerFantasyPoints(p);
      const rowId = 'db-row-' + String(p.id || p.name).replace(/[^a-zA-Z0-9_-]/g, '_');
      return `
      <tr id="${rowId}" class="db-player-row">
        <td style="width: 50px; text-align: center;">
          <img src="${photoUrl}" class="player-photo-db" alt="${escapeHTML(p.name)}" onerror="this.onerror=null; this.src='${fallbackAvatar}';">
        </td>
        <td><span class="badge-position ${p.position}">${p.position}</span></td>
        <td style="font-weight:bold">${escapeHTML(p.name)}</td>
        <td>${escapeHTML(p.club)}</td>
        <td>${escapeHTML(p.nationality)}</td>
        <td><strong style="color:var(--primary-neon); font-size: 0.95rem;">${p.rating}</strong></td>
        <td style="color:var(--secondary-neon); font-weight:bold;">${careerPts}/1000</td>
        <td style="color:var(--success-neon); font-weight:bold">$${p.basePrice}M</td>
      </tr>
      `;
    }).join('');
  }
}

// Ensure controls are bound immediately if DOM is already parsed
initDbSearchControls();

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
    <div style="text-align:center; padding:1.25rem 1rem; background:linear-gradient(135deg, rgba(0,255,135,0.08) 0%, rgba(0,242,254,0.08) 100%); border:1px solid var(--success-neon); border-radius:12px; margin-bottom:1.5rem; box-shadow:0 0 25px rgba(0,255,135,0.2);">
      <h3 style="color:var(--success-neon); margin-bottom:0.35rem; font-size:1.35rem; letter-spacing:0.5px;">🏆 Cup Champion: ${escapeHTML(winner.name)}! 🏆</h3>
      <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:0.75rem;">Crowned tournament champion with <strong>${winner.pts} points</strong> in the simulated bracket tournament.</p>
      <button class="btn-primary" onclick="launchTournamentVictoryConfetti()" style="font-size:0.78rem; padding:0.4rem 0.9rem;">
        🎉 Replay Victory Celebration
      </button>
    </div>
    <h4 style="margin-bottom:0.75rem; color:var(--primary-neon);">Match Reports</h4>
    ${matchesHtml}
    ${tableHtml}
  `;

  // Trigger grand victory celebration animation with canvas-confetti library
  launchTournamentVictoryConfetti();
}

/**
 * Spawns a high-impact particle explosion in the viewport.
 * Uses floating emojis (⚽, 🌟, 🏆, ✨, 💥) and glowing geometric embers.
 */
function spawnVictoryExplosion(originX, originY, intensity = 1.0) {
  const colors = ['#00ff87', '#00f2fe', '#ffd700', '#ff007f', '#ffffff', '#ff9900'];
  const symbols = ['⚽', '🌟', '✨', '🏆', '🎉', '💥', '🥇', '👑'];
  const count = Math.floor((36 + Math.random() * 20) * intensity);

  // Spawn expanding energy shockwave ring
  const shockwave = document.createElement('div');
  shockwave.className = 'victory-shockwave';
  shockwave.style.left = `${originX}px`;
  shockwave.style.top = `${originY}px`;
  document.body.appendChild(shockwave);
  setTimeout(() => shockwave.remove(), 900);

  // Ambient victory flash
  const flash = document.createElement('div');
  flash.className = 'victory-flash';
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 800);

  // High-velocity explosion particles
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-particle';
    const isSymbol = Math.random() > 0.4;

    if (isSymbol) {
      p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      p.style.fontSize = `${Math.floor(16 + Math.random() * 20 * intensity)}px`;
    } else {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.floor(10 + Math.random() * 14 * intensity);
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.backgroundColor = color;
      p.style.borderRadius = Math.random() > 0.4 ? '50%' : '3px';
      p.style.boxShadow = `0 0 16px ${color}`;
    }

    p.style.left = `${originX}px`;
    p.style.top = `${originY}px`;
    document.body.appendChild(p);

    const angle = Math.random() * Math.PI * 2;
    const velocity = (180 + Math.random() * 380) * intensity;
    const destX = Math.cos(angle) * velocity;
    const destY = Math.sin(angle) * velocity + (70 + Math.random() * 140);
    const rotation = (Math.random() - 0.5) * 1080;
    const duration = 1200 + Math.random() * 1000;

    const anim = p.animate([
      { transform: 'translate(-50%, -50%) scale(0.4) rotate(0deg)', opacity: 1 },
      { transform: `translate(calc(-50% + ${destX * 0.65}px), calc(-50% + ${destY * 0.45 - 50}px)) scale(1.35) rotate(${rotation * 0.6}deg)`, opacity: 1, offset: 0.35 },
      { transform: `translate(calc(-50% + ${destX}px), calc(-50% + ${destY + 120}px)) scale(0.7) rotate(${rotation}deg)`, opacity: 0 }
    ], {
      duration: duration,
      easing: 'cubic-bezier(0.12, 0.9, 0.28, 1)',
      fill: 'forwards'
    });

    anim.onfinish = () => p.remove();
  }
}

/**
 * Grand Victory Celebration animation using multi-wave particle explosions & canvas-confetti.
 * Triggers multiple cascading particle explosion waves across the screen for an impactful finale.
 */
function launchTournamentVictoryConfetti() {
  playCelebrationChime();

  const centerX = window.innerWidth / 2;
  const centerY = Math.min(window.innerHeight * 0.42, 380);

  // Wave 1: Immediate primary explosion at center
  spawnVictoryExplosion(centerX, centerY, 1.25);

  if (typeof confetti === 'function') {
    confetti({
      particleCount: 100,
      spread: 120,
      origin: { y: 0.48 },
      colors: ['#00ff87', '#00f2fe', '#ffd700', '#ffffff', '#ff007f']
    });
  }

  // Wave 2: Left flank explosion (+400ms)
  setTimeout(() => {
    playBlip(780, 0.25, 'sine');
    const leftX = Math.max(window.innerWidth * 0.22, 90);
    const leftY = centerY - 30;
    spawnVictoryExplosion(leftX, leftY, 1.0);

    if (typeof confetti === 'function') {
      confetti({
        particleCount: 70,
        angle: 60,
        spread: 70,
        origin: { x: 0.15, y: 0.65 },
        colors: ['#00ff87', '#00f2fe', '#ffd700']
      });
    }
  }, 400);

  // Wave 3: Right flank explosion (+850ms)
  setTimeout(() => {
    playBlip(880, 0.25, 'sine');
    const rightX = Math.min(window.innerWidth * 0.78, window.innerWidth - 90);
    const rightY = centerY - 30;
    spawnVictoryExplosion(rightX, rightY, 1.0);

    if (typeof confetti === 'function') {
      confetti({
        particleCount: 70,
        angle: 120,
        spread: 70,
        origin: { x: 0.85, y: 0.65 },
        colors: ['#00f2fe', '#ff007f', '#ffd700']
      });
    }
  }, 850);

  // Wave 4: Grand Finale Climax dual-explosion (+1400ms)
  setTimeout(() => {
    playCelebrationChime();
    spawnVictoryExplosion(centerX - 120, centerY - 60, 1.1);
    spawnVictoryExplosion(centerX + 120, centerY - 60, 1.1);

    if (typeof confetti === 'function') {
      confetti({
        particleCount: 140,
        spread: 160,
        origin: { y: 0.4 },
        colors: ['#00ff87', '#00f2fe', '#ffd700', '#ffffff', '#ff007f']
      });
    }
  }, 1400);

  // Wave 5: Sustained dual confetti cannons over 3.5 seconds
  if (typeof confetti === 'function') {
    const duration = 3500;
    const animationEnd = Date.now() + duration;
    const colors = ['#00ff87', '#00f2fe', '#ffd700', '#ffffff', '#ff007f'];

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 42 * (timeLeft / duration);

      confetti({
        particleCount: Math.floor(particleCount),
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.72 },
        colors: colors
      });

      confetti({
        particleCount: Math.floor(particleCount),
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.72 },
        colors: colors
      });
    }, 220);
  }
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
    updateAuthUI(savedUser, savedEmail);
    showToast(`Welcome back, ${savedUser}!`);
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

  // PWA & Connectivity initialization
  if (!isRunningStandalone()) {
    if (isIOS() || deferredPrompt) {
      showInstallPromotion();
    } else {
      setTimeout(() => {
        if (!isRunningStandalone()) {
          showInstallPromotion();
        }
      }, 1000);
    }
  } else {
    hideInstallPromotion();
  }
  updateOnlineStatus();
});

// ──────────────── PWA INSTALLATION & SERVICE WORKER ────────────────
let deferredPrompt = null;

function isRunningStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches ||
         (window.navigator && window.navigator.standalone === true) ||
         document.referrer.includes('android-app://');
}

function isIOS() {
  const ua = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(ua) && !window.MSStream;
}

function showInstallPromotion() {
  if (isRunningStandalone()) {
    hideInstallPromotion();
    return;
  }
  const pwaBtn = $('#pwa-install-btn');
  const mobileBtn = $('#mobile-install-btn');
  const lobbyBanner = $('#lobby-pwa-banner');
  if (pwaBtn) pwaBtn.style.display = 'inline-flex';
  if (mobileBtn) mobileBtn.style.display = 'inline-flex';
  if (lobbyBanner) lobbyBanner.style.display = 'flex';
}

function hideInstallPromotion() {
  const pwaBtn = $('#pwa-install-btn');
  const mobileBtn = $('#mobile-install-btn');
  const lobbyBanner = $('#lobby-pwa-banner');
  if (pwaBtn) pwaBtn.style.display = 'none';
  if (mobileBtn) mobileBtn.style.display = 'none';
  if (lobbyBanner) lobbyBanner.style.display = 'none';
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallPromotion();
});

window.addEventListener('appinstalled', () => {
  deferredPrompt = null;
  hideInstallPromotion();
  showToast('🎉 Football Auction installed successfully!');
});

async function triggerPWAInstall() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;
    if (choiceResult && choiceResult.outcome === 'accepted') {
      deferredPrompt = null;
      hideInstallPromotion();
    }
  } else if (isIOS()) {
    showIOSInstallModal();
  } else {
    showToast('To install, click "Install App" in your browser address bar or menu');
  }
}

function showIOSInstallModal() {
  const modal = $('#ios-install-modal');
  if (modal) modal.style.display = 'flex';
}

function closeIOSInstallModal() {
  const modal = $('#ios-install-modal');
  if (modal) modal.style.display = 'none';
}

function updateOnlineStatus() {
  const offlineBadge = $('#offline-indicator');
  if (!offlineBadge) return;
  if (navigator.onLine) {
    offlineBadge.style.display = 'none';
  } else {
    offlineBadge.style.display = 'inline-flex';
  }
}

window.addEventListener('online', () => {
  updateOnlineStatus();
  showToast('🌐 Connection restored. Online mode active.');
});

window.addEventListener('offline', () => {
  updateOnlineStatus();
  showToast('⚠️ Network connection lost. Offline cached mode active.');
});

// Explicit window bindings for inline HTML onclick handlers
window.triggerPWAInstall = triggerPWAInstall;
window.showIOSInstallModal = showIOSInstallModal;
window.closeIOSInstallModal = closeIOSInstallModal;
window.switchAuthTab = switchAuthTab;
window.updatePasswordStrength = updatePasswordStrength;
window.triggerCelebrationConfetti = triggerCelebrationConfetti;
window.handleRegister = handleRegister;
window.handleLogin = handleLogin;
window.handleGuestLogin = handleGuestLogin;
window.handleLogout = handleLogout;
window.togglePasswordVisibility = togglePasswordVisibility;
window.openForgotPasswordView = openForgotPasswordView;
window.closeForgotPasswordView = closeForgotPasswordView;
window.setDbSort = setDbSort;
window.launchTournamentVictoryConfetti = launchTournamentVictoryConfetti;
window.spawnVictoryExplosion = spawnVictoryExplosion;
window.shareMySquad = shareMySquad;

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((reg) => {
        console.log('[PWA] Service Worker registered with scope:', reg.scope);
      })
      .catch((err) => {
        console.warn('[PWA] Service Worker registration failed:', err);
      });
  });
}


