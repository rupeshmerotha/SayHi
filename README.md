<div align="center">

<br/>

```
 ███████╗ █████╗ ██╗   ██╗██╗  ██╗██╗
 ██╔════╝██╔══██╗╚██╗ ██╔╝██║  ██║██║
 ███████╗███████║ ╚████╔╝ ███████║██║
 ╚════██║██╔══██║  ╚██╔╝  ██╔══██║██║
 ███████║██║  ██║   ██║   ██║  ██║██║
 ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝
```

### ✨ Real-Time Chat. Beautifully Crafted.

<br/>

[![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Socket.io](https://img.shields.io/badge/Socket.io-Realtime-010101?style=for-the-badge&logo=socketdotio&logoColor=white)](https://socket.io)
[![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)](LICENSE)

<br/>

> **SayHi** is a full-stack, real-time messaging application built on the MERN stack —  
> featuring instant delivery, JWT authentication, image sharing, and a sleek responsive UI.

<br/>

---

</div>

<br/>

## 📋 Table of Contents

- [Overview](#-overview)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Data Flow](#-data-flow)
- [API Reference](#-api-reference)
- [Socket Events](#-socket-events)
- [State Management](#-state-management)
- [Database Schema](#-database-schema)
- [Security](#-security)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

<br/>

---

## 🌟 Overview

**SayHi** is a production-grade real-time chat application that lets users connect and communicate instantly. It showcases modern full-stack development patterns — combining a reactive frontend, a robust REST + WebSocket backend, secure auth, and cloud-based media storage.

<br/>

```
┌─────────────────────────────────────────────────────────────────┐
│                      🌐  SayHi Platform                         │
│                                                                  │
│   💬 Instant Messaging    👤 Auth & Profiles    🖼️ Image Sharing  │
│   🟢 Online Presence      🔒 Secure Sessions    📱 Responsive UI  │
└─────────────────────────────────────────────────────────────────┘
```

<br/>

---

## 🏗️ Architecture

### High-Level System Diagram

```
┌─────────────────┐         HTTP / WebSocket         ┌──────────────────┐
│                 │◄────────────────────────────────►│                  │
│  React Frontend │                                  │  Node.js Backend  │
│  (Vite + Zustand│                                  │  (Express + WS)  │
│                 │                                  │                  │
└─────────────────┘                                  └────────┬─────────┘
                                                              │
                                          ┌───────────────────┼───────────────────┐
                                          │                   │                   │
                                   ┌──────▼──────┐   ┌───────▼──────┐   ┌────────▼──────┐
                                   │  MongoDB     │   │  Socket.io   │   │  Cloudinary   │
                                   │  (Database)  │   │  (Real-time) │   │  (Media CDN)  │
                                   └─────────────┘   └──────────────┘   └───────────────┘
```

<br/>

### Frontend Architecture

| Layer | Technology | Responsibility |
|---|---|---|
| **Pages** | React Router | Route-level views (Home, Login, SignUp, Profile) |
| **Components** | React 18 | Reusable UI (Sidebar, ChatContainer, Navbar) |
| **State** | Zustand | Auth + Chat state stores |
| **API Layer** | Axios | HTTP communication with backend |
| **Real-time** | Socket.io-client | Live WebSocket connection |

### Backend Architecture

| Layer | Technology | Responsibility |
|---|---|---|
| **Controllers** | Express.js | Auth & message business logic |
| **Models** | Mongoose | User & Message data schemas |
| **Routes** | Express Router | REST endpoint definitions |
| **Middleware** | Custom JWT | Request authentication |
| **Services** | Socket.io | Real-time event broadcasting |

<br/>

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| ⚛️ **React** | 18 | UI framework with hooks & concurrent features |
| ⚡ **Vite** | Latest | Lightning-fast build tool & dev server |
| 🎨 **TailwindCSS** | Latest | Utility-first styling |
| 🌼 **DaisyUI** | Latest | Component library on top of Tailwind |
| 🐻 **Zustand** | Latest | Lightweight global state management |
| 🔌 **Socket.io-client** | Latest | Real-time client-side communication |
| 🛣️ **React Router DOM** | Latest | Client-side routing |
| 📡 **Axios** | Latest | HTTP requests & interceptors |
| 🔔 **React Hot Toast** | Latest | Non-blocking toast notifications |
| 🖼️ **Lucide React** | Latest | Clean, modern icon set |

### Backend

| Technology | Version | Purpose |
|---|---|---|
| 🟢 **Node.js** | v18+ | JavaScript server runtime |
| 🚂 **Express.js** | Latest | HTTP server & routing |
| 🍃 **MongoDB** | Latest | NoSQL document database |
| 🐦 **Mongoose** | Latest | Schema modeling & ODM |
| 🔌 **Socket.io** | Latest | Real-time WebSocket server |
| 🔑 **JWT** | Latest | Stateless auth tokens |
| 🔐 **bcryptjs** | Latest | Secure password hashing |
| ☁️ **Cloudinary** | Latest | Cloud image storage & delivery |
| 🍪 **Cookie-parser** | Latest | HTTP cookie middleware |
| 🌐 **CORS** | Latest | Cross-origin request handling |

<br/>

---

## ✨ Features

### 💬 Core Messaging
- **Real-time delivery** — Messages appear instantly via WebSocket
- **Image sharing** — Send photos and media in any conversation
- **Message history** — Full conversation history persisted in MongoDB

### 👤 User System
- **Secure signup & login** — JWT-based auth with HTTP-only cookies
- **Profile management** — Update avatar and personal info
- **Online presence** — See who's currently active in real-time

### 🎨 UI/UX
- **Responsive design** — Mobile-first layout that works everywhere
- **Skeleton loaders** — Smooth loading states for all async operations
- **Toast notifications** — Clean, unobtrusive feedback system
- **Empty states** — Polished placeholders for zero-content views

### 🔒 Security
- **HTTP-only cookies** — Tokens never exposed to JavaScript
- **Protected routes** — Middleware-guarded endpoints
- **Password hashing** — bcryptjs with salt rounds
- **XSS protection** — React's built-in output escaping

<br/>

---

## 📁 Project Structure

```
chatttapp/
│
├── 📄 package.json              # Root scripts & workspace config
├── 📄 vercel.json               # Vercel deployment config
│
├── 🖥️ backend/
│   ├── package.json
│   └── src/
│       ├── index.js                 # 🚀 Server entry point
│       │
│       ├── controllers/
│       │   ├── auth.controller.js   # 🔐 Signup, login, logout, profile
│       │   └── message.controller.js# 💬 Send & fetch messages
│       │
│       ├── models/
│       │   ├── user.model.js        # 👤 User schema
│       │   └── message.model.js     # 📨 Message schema
│       │
│       ├── routes/
│       │   ├── auth.route.js        # /api/auth endpoints
│       │   └── message.route.js     # /api/messages endpoints
│       │
│       ├── middleware/
│       │   └── auth.middleware.js   # 🛡️ JWT verification
│       │
│       └── lib/
│           ├── db.js                # 🍃 MongoDB connection
│           ├── socket.js            # 🔌 Socket.io server setup
│           ├── cloudinary.js        # ☁️ Image upload config
│           └── utils.js             # 🔧 Helper functions
│
└── 🌐 frontend/
    ├── package.json
    ├── vite.config.js
    ├── index.html
    └── src/
        ├── main.jsx                 # App bootstrap
        ├── App.jsx                  # Root component & routes
        │
        ├── pages/
        │   ├── HomePage.jsx         # 🏠 Main chat interface
        │   ├── LoginPage.jsx        # 🔑 Login screen
        │   ├── SignUpPage.jsx       # 📝 Registration screen
        │   └── ProfilePage.jsx      # 👤 User profile editor
        │
        ├── components/
        │   ├── Navbar.jsx           # Top navigation bar
        │   ├── Sidebar.jsx          # Users list panel
        │   ├── ChatContainer.jsx    # Message thread view
        │   ├── MessageInput.jsx     # Text & image composer
        │   ├── ChatHeader.jsx       # Active chat header
        │   ├── NoChatSelected.jsx   # Empty state placeholder
        │   ├── AuthImagePattern.jsx # Auth page decoration
        │   └── skeletons/           # Loading placeholders
        │
        ├── store/
        │   ├── useAuthStore.js      # 🔐 Auth global state
        │   └── useChatStore.js      # 💬 Chat global state
        │
        └── lib/
            └── axios.js             # HTTP client config & interceptors
```

<br/>

---

## 🔄 Data Flow

### 🔐 Authentication Flow

```
User fills form
      │
      ▼
Frontend sends POST /api/auth/login
      │
      ▼
Backend validates credentials → bcrypt.compare()
      │
      ├──✗─→ 401 Unauthorized (wrong credentials)
      │
      ▼ ✓
JWT signed → stored in HTTP-only cookie
      │
      ▼
Zustand useAuthStore updated with user data
      │
      ▼
Socket.io connection established (userId in query)
      │
      ▼
Online user list broadcast to all clients
```

<br/>

### 💬 Message Flow

```
User types & hits Send
      │
      ▼
POST /api/messages/send/:recipientId
      │
      ▼
Message saved to MongoDB
      │
      ▼
Socket.io emits "newMessage" to recipient's socket
      │
      ├─────────────────────────────────────┐
      ▼                                     ▼
Sender's UI updated                 Recipient's UI updated
(message appended)                  (real-time delivery)
```

<br/>

### 🟢 Online Presence Flow

```
User connects → Socket registers userId → socket.id
      │
      ▼
userSocketMap updated: { userId: socketId }
      │
      ▼
io.emit("getOnlineUsers", [...userIds])  ← broadcast to ALL
      │
      ▼
All clients update their onlineUsers[] in Zustand
      │
      ▼
UI shows green indicators on active users
```

<br/>

---

## 📡 API Reference

### Auth Routes — `/api/auth`

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/signup` | Register a new user | ❌ |
| `POST` | `/login` | Authenticate & get token | ❌ |
| `POST` | `/logout` | Clear session cookie | ✅ |
| `GET` | `/check` | Verify current session | ✅ |
| `PUT` | `/update-profile` | Update profile picture | ✅ |

### Message Routes — `/api/messages`

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `GET` | `/users` | Fetch all users for sidebar | ✅ |
| `GET` | `/:id` | Get message history with user | ✅ |
| `POST` | `/send/:id` | Send a message to user | ✅ |

<br/>

### Response Schemas

<details>
<summary><strong>👤 User Object</strong></summary>

```json
{
  "_id": "64f1a2b3c4d5e6f7a8b9c0d1",
  "fullName": "Jane Doe",
  "email": "jane@example.com",
  "profilePic": "https://res.cloudinary.com/demo/image/upload/avatar.jpg",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}
```

</details>

<details>
<summary><strong>💬 Message Object</strong></summary>

```json
{
  "_id": "64f1a2b3c4d5e6f7a8b9c0d2",
  "senderId": "64f1a2b3c4d5e6f7a8b9c0d1",
  "receiverId": "64f1a2b3c4d5e6f7a8b9c0d3",
  "text": "Hey! How's it going? 👋",
  "image": "https://res.cloudinary.com/demo/image/upload/photo.jpg",
  "createdAt": "2024-01-15T10:35:00.000Z"
}
```

</details>

<br/>

---

## 🔌 Socket Events

### Connection Setup

```javascript
// ─── Client Side ───────────────────────────────────────────────
const socket = io(BASE_URL, {
  query: { userId: authUser._id }
});

socket.on("getOnlineUsers", (userIds) => {
  set({ onlineUsers: userIds }); // update Zustand store
});

socket.on("newMessage", (message) => {
  set({ messages: [...get().messages, message] }); // append to chat
});

// ─── Server Side ───────────────────────────────────────────────
io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  userSocketMap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});
```

### Event Reference

| Direction | Event | Payload | Description |
|---|---|---|---|
| Client → Server | `connection` | `{ userId }` in query | Open WebSocket session |
| Client → Server | `disconnect` | — | Close WebSocket session |
| Server → Client | `getOnlineUsers` | `string[]` (user IDs) | Broadcast active users |
| Server → Client | `newMessage` | Message object | Deliver incoming message |

<br/>

---

## 🐻 State Management

SayHi uses **Zustand** for lightweight, boilerplate-free global state.

### `useAuthStore`

```typescript
interface AuthStore {
  authUser:        User | null        // Currently logged-in user
  isSigningUp:     boolean            // Signup request in-flight
  isLoggingIn:     boolean            // Login request in-flight
  isCheckingAuth:  boolean            // Session check on mount
  onlineUsers:     string[]           // IDs of connected users
  socket:          Socket | null      // Active socket connection

  // Actions
  signup(data):    Promise<void>
  login(data):     Promise<void>
  logout():        Promise<void>
  checkAuth():     Promise<void>
  updateProfile(): Promise<void>
  connectSocket(): void
  disconnectSocket(): void
}
```

### `useChatStore`

```typescript
interface ChatStore {
  messages:          Message[]        // Active conversation thread
  users:             User[]           // Sidebar user list
  selectedUser:      User | null      // Currently open chat
  isUsersLoading:    boolean          // Fetching user list
  isMessagesLoading: boolean          // Fetching messages

  // Actions
  getUsers():                 Promise<void>
  getMessages(userId):        Promise<void>
  sendMessage(data):          Promise<void>
  subscribeToMessages():      void
  unsubscribeFromMessages():  void
}
```

### State Flow Diagram

```
User Action
    │
    ▼
Store Action (async)
    │
    ├──► API Call (Axios) ──► Backend
    │                              │
    │◄─────────── Response ────────┘
    │
    ├──► Socket Event  ──► Emit / Listen
    │
    ▼
Store State Updated
    │
    ▼
React Components Re-render
```

<br/>

---

## 🗄️ Database Schema

### User Model

```javascript
const UserSchema = new mongoose.Schema({
  email:      { type: String, required: true, unique: true },
  fullName:   { type: String, required: true },
  password:   { type: String, required: true, minlength: 6 },
  profilePic: { type: String, default: "" }
}, { timestamps: true });
```

### Message Model

```javascript
const MessageSchema = new mongoose.Schema({
  senderId:   { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  receiverId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  text:       { type: String },
  image:      { type: String }
}, { timestamps: true });
```

<br/>

---

## 🔒 Security

| Feature | Implementation |
|---|---|
| **Token Storage** | HTTP-only cookies — inaccessible to JS |
| **Password Hashing** | `bcryptjs` with configurable salt rounds |
| **Route Protection** | JWT middleware on all private endpoints |
| **XSS Prevention** | React's built-in output escaping |
| **CORS Policy** | Strict origin allowlist in Express |
| **Token Expiry** | JWT `expiresIn` for automatic session expiry |

```javascript
// CORS Config
cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true   // Required for cookie-based auth
})
```

<br/>

---

## 🚀 Installation

### Prerequisites

```
✅ Node.js  v18 or higher
✅ MongoDB  local instance or Atlas URI
✅ Cloudinary account (free tier works)
```

### Quick Start

```bash
# 1️⃣  Clone the repository
git clone https://github.com/your-username/sayhi.git
cd sayhi

# 2️⃣  Install all dependencies (root + frontend + backend)
npm run build

# 3️⃣  Configure environment variables
cp backend/.env.example backend/.env
# → Edit backend/.env with your credentials

# 4️⃣  Start the backend server  (port 5001)
npm run start

# 5️⃣  Start the frontend dev server  (port 5173) — new terminal
cd frontend && npm run dev
```

> 🎉 Open [http://localhost:5173](http://localhost:5173) in your browser!

<br/>

---

## 🔧 Environment Variables

Create `backend/.env` with the following:

```env
# ─── Server ──────────────────────────────────────────
PORT=5001
NODE_ENV=development

# ─── Database ────────────────────────────────────────
MONGODB_URI=mongodb://localhost:27017/sayhi
# or for Atlas:
# MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/sayhi

# ─── Authentication ───────────────────────────────────
JWT_SECRET=your_super_secret_key_here_min_32_chars

# ─── Cloudinary ───────────────────────────────────────
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

> **Tip:** Generate a strong JWT secret with:
> ```bash
> node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
> ```

<br/>

---

## 🌍 Deployment

### Vercel (Recommended)

The project ships with a `vercel.json` configured for full-stack deployment:

```json
{
  "version": 2,
  "builds": [
    { "src": "frontend/package.json", "use": "@vercel/static-build" },
    { "src": "backend/src/index.js",  "use": "@vercel/node" }
  ],
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/backend/src/index.js" },
    { "source": "/(.*)",     "destination": "/frontend/index.html" }
  ]
}
```

### Deployment Checklist

```
☐ Push code to GitHub
☐ Connect repo to Vercel
☐ Add all environment variables in Vercel Dashboard
☐ Set MONGODB_URI to your Atlas connection string
☐ Set NODE_ENV=production
☐ Deploy!
```

<br/>

---

## 🤝 Contributing

Contributions are warmly welcome! Here's how to get started:

```bash
# 1. Fork the repo on GitHub
# 2. Clone your fork
git clone https://github.com/your-username/sayhi.git

# 3. Create a feature branch
git checkout -b feature/your-awesome-feature

# 4. Make your changes & commit
git commit -m "feat: add your awesome feature"

# 5. Push & open a Pull Request
git push origin feature/your-awesome-feature
```

### Guidelines

- Follow the existing code style
- Use meaningful commit messages (`feat:`, `fix:`, `chore:`, etc.)
- Add comments for non-obvious logic
- Test your changes before submitting

<br/>

---

<div align="center">

### Built with ❤️ using the MERN Stack

[![MongoDB](https://img.shields.io/badge/M-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Express](https://img.shields.io/badge/E-Express-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com)
[![React](https://img.shields.io/badge/R-React-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Node.js](https://img.shields.io/badge/N-Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org)

<br/>

*Licensed under the [ISC License](LICENSE)*

<br/>

⭐ **If you found this project helpful, please consider giving it a star!** ⭐

</div>
