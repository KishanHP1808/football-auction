⚽ Football Auction

 Real-Time Multiplayer Football Auction Platform

A real-time football auction platform where multiple teams can join an auction, compete for players through live bidding, manage their budgets, and build their squads.

🔗 **Live Demo:** https://football-auction-uak7.onrender.com/

🔗 **GitHub:** https://github.com/KishanHP1808/football-auction


## ✨ Key Features

* ⚡ **Real-Time Bidding** — Instant bid updates using Socket.IO
* 👥 **Multiplayer Auction** — Multiple teams can participate simultaneously
* 💰 **Budget Management** — Automatically tracks team budgets
* ⚽ **Player Management** — Select, auction, and assign players
* 🏆 **Squad Building** — Teams build their squads through bidding
* 📊 **Auction History** — Keeps track of completed auctions
* 📄 **Player Data Processing** — Extracts player information from data sources
* 📱 **Responsive UI** — Simple and interactive interface


## 🔄 How The Auction Works

```text
                 ┌──────────────────┐
                 │  Create / Join   │
                 │      Auction     │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │  Select / Show   │
                 │      Player      │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │   Teams Place    │
                 │      Bids        │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │   Highest Bid    │
                 │      Wins        │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │ Update Team &    │
                 │ Remaining Budget │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │    Next Player   │
                 └──────────────────┘
```

---

## 🏗️ Project Architecture

```text
football-auction/
│
├── 📁 public/
│   ├── HTML / CSS / JavaScript
│   └── Frontend assets
│
├── 📄 server.js
│   └── Main Node.js + Socket.IO server
│
├── 📄 api.js
│   └── API functionality
│
├── 📄 server.py
│   └── Python server utilities
│
├── 📄 api.py
│   └── Python API utilities
│
├── 📄 client_logic.py
│   └── Supporting client-side logic
│
├── 📄 players.py
│   └── Player processing
│
├── 📄 parse_players.js
│   └── Player data parsing
│
├── 📄 wc2026_players.js
│   └── World Cup player data
│
├── 📄 history.json
│   └── Auction history
│
├── 📄 users.json
│   └── User data
│
├── 📄 render.yaml
│   └── Render deployment configuration
│
├── 📄 Procfile
│   └── Deployment configuration
│
├── 📄 package.json
│   └── Project dependencies
│
└── 📄 .gitignore
```

---

## 🛠️ Tech Stack

| Technology     | Purpose                   |
| -------------- | ------------------------- |
| **HTML / CSS** | User Interface            |
| **JavaScript** | Frontend functionality    |
| **Node.js**    | Backend runtime           |
| **Express.js** | Server & APIs             |
| **Socket.IO**  | Real-time communication   |
| **Python**     | Data processing utilities |
| **JSON**       | Data storage              |
| **Nodemailer** | Email functionality       |


## 🔥 Real-Time Communication

The core of the application is **Socket.IO**, which keeps all connected players synchronized during the auction.

```text
         TEAM A                 SERVER                 TEAM B
            │                      │                      │
            │─────── BID ─────────►│                      │
            │                      │───── UPDATE ────────►│
            │◄──── UPDATE ─────────│                      │
            │                      │◄────── BID ──────────│
            │◄──── UPDATE ─────────│───── UPDATE ────────►│
            │                      │                      │
```

This allows every participant to see auction changes **without refreshing the page**.

---

## 💡 What This Project Demonstrates

This project focuses on practical software development rather than just a static website.

### Key Engineering Concepts

* Real-time client-server communication
* Event-driven programming
* Multiplayer state synchronization
* Backend API development
* Dynamic UI updates
* Data processing
* Budget and auction logic
* Deployment configuration


## 🚀 Run Locally

### Clone

```bash
git clone https://github.com/KishanHP1808/football-auction.git
cd football-auction
```

### Install Dependencies

```bash
npm install
```

### Start Server

```bash
npm start
```

### Open

```text
http://localhost:3000
```

---

📈 Future Improvements

* 🔐 User authentication & authorization
* 🗄️ Database integration
* 📊 Advanced player statistics
* ⏱️ Live bidding countdown
* 📱 Improved mobile/tablet experience
* 🏆 Tournament management
* 📋 Advanced team analytics
* 📄 Export squads and auction results
* 👨‍💼 Dedicated admin dashboard


  DEVELOPER

### KISHAN H.P

**Frontend & Web Developer**

I built this project to explore **real-time web applications, multiplayer interactions, backend development, and event-driven systems**.

🔗 **GitHub:** https://github.com/KishanHP1808

 ⭐ If you find the project interesting, consider giving it a STAR ⭐/JOB🏢
