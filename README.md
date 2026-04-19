# ✨ SayHi - Real-Time Chat Application

A modern, full-stack real-time chat application built with the MERN stack, featuring instant messaging, user authentication, and a beautiful responsive UI.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Data Flow](#data-flow)
- [API Endpoints](#api-endpoints)
- [Socket Events](#socket-events)
- [State Management](#state-management)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Overview

SayHi is a comprehensive real-time chat application that enables users to communicate instantly with a modern, intuitive interface. The application demonstrates best practices in full-stack development with real-time capabilities, secure authentication, and efficient state management.

## Architecture

### High-Level Architecture

```
Frontend (React)     Backend (Node.js)      Database (MongoDB)     External Services
     |                      |                      |                        |
     | HTTP/WebSocket       | HTTP/WebSocket       |                        |
     |<-------------------->|--------------------->|                        |
     |                      |                      |                        |
     |                      |                      |                        |
     |                      |                      |                        |
```

### Component Architecture

#### Frontend Architecture
- **Pages**: Route-level components (Home, Login, SignUp, Profile)
- **Components**: Reusable UI components (Sidebar, ChatContainer, Navbar)
- **Store**: Zustand state management for auth and chat states
- **Services**: API layer with Axios for HTTP requests
- **Socket**: Real-time communication with Socket.io-client

#### Backend Architecture
- **Controllers**: Business logic for auth and messages
- **Models**: Mongoose schemas for User and Message
- **Routes**: Express route definitions
- **Middleware**: Authentication and request processing
- **Services**: Database connection, Socket.io, Cloudinary integration

## Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **Vite** - Fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **DaisyUI** - Component library built on TailwindCSS
- **Zustand** - Lightweight state management
- **Socket.io-client** - Real-time client-side communication
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **React Hot Toast** - Beautiful toast notifications
- **Lucide React** - Modern icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Socket.io** - Real-time server-side communication
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Cloudinary** - Cloud image storage
- **Cookie-parser** - Cookie parsing middleware
- **CORS** - Cross-origin resource sharing

### Development Tools
- **ESLint** - Code linting
- **Nodemon** - Development auto-restart
- **PostCSS** - CSS processing

## Features

### Core Features
- **Real-time Messaging** - Instant message delivery with Socket.io
- **User Authentication** - Secure signup, login, and logout with JWT
- **Online Status** - Real-time online user indicators
- **Profile Management** - Update profile pictures and information
- **Image Sharing** - Send and receive images in chat
- **Responsive Design** - Mobile-first responsive UI

### Technical Features
- **Real-time Updates** - Live typing indicators and message delivery
- **Secure Authentication** - JWT-based auth with protected routes
- **Error Handling** - Comprehensive error handling on client and server
- **Loading States** - Skeleton loaders and smooth transitions
- **Toast Notifications** - User-friendly feedback system
- **State Persistence** - Efficient state management with Zustand

## Project Structure

```
chatttapp/
  README.md
  package.json
  vercel.json
  .gitignore
  backend/
    package.json
    .env
    src/
      index.js                 # Server entry point
      controllers/
        auth.controller.js     # Authentication logic
        message.controller.js  # Message handling
      models/
        user.model.js          # User schema
        message.model.js       # Message schema
      routes/
        auth.route.js          # Auth endpoints
        message.route.js       # Message endpoints
      middleware/
        auth.middleware.js     # JWT verification
      lib/
        db.js                  # Database connection
        socket.js              # Socket.io setup
        cloudinary.js          # Image upload
        utils.js               # Utility functions
  frontend/
    package.json
    vite.config.js
    index.html
    src/
      main.jsx                # App entry point
      App.jsx                 # Main app component
      index.css
      pages/
        HomePage.jsx           # Chat interface
        LoginPage.jsx          # Login page
        SignUpPage.jsx         # Registration
        ProfilePage.jsx        # User profile
      components/
        Navbar.jsx             # Navigation bar
        Sidebar.jsx            # User list sidebar
        ChatContainer.jsx      # Main chat area
        MessageInput.jsx       # Message composer
        ChatHeader.jsx         # Chat header
        NoChatSelected.jsx     # Empty state
        AuthImagePattern.jsx   # Auth page decoration
        skeletons/             # Loading components
      store/
        useAuthStore.js        # Authentication state
        useChatStore.js        # Chat state
      lib/
        axios.js               # HTTP client setup
```

## Data Flow

### Authentication Flow
1. User submits login/signup form
2. Frontend sends request to backend API
3. Backend validates credentials and creates JWT
4. JWT stored in HTTP-only cookie
5. User state updated in Zustand store
6. Socket connection established with user ID

### Message Flow
1. User types and sends message
2. Message saved to MongoDB via API
3. Socket.io emits message to recipient
4. Recipient's Socket listener updates UI
5. Both users' message history updated

### Real-time Features
- **Online Users**: Socket tracks connected users
- **Message Delivery**: Instant delivery via WebSocket
- **Status Updates**: Real-time online/offline status

## API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /signup` - Register new user
- `POST /login` - Authenticate user
- `POST /logout` - Logout user
- `GET /check` - Verify authentication status
- `PUT /update-profile` - Update user profile

### Message Routes (`/api/messages`)
- `GET /users` - Get all users for sidebar
- `GET /:id` - Get messages with specific user
- `POST /send/:id` - Send message to user

### Response Formats

#### User Response
```json
{
  "_id": "user_id",
  "fullName": "John Doe",
  "email": "john@example.com",
  "profilePic": "image_url",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

#### Message Response
```json
{
  "_id": "message_id",
  "senderId": "sender_id",
  "receiverId": "receiver_id",
  "text": "Hello!",
  "image": "image_url",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

## Socket Events

### Client to Server
- `connection` - Establish socket connection
- `disconnect` - Handle disconnection

### Server to Client
- `getOnlineUsers` - Broadcast online user list
- `newMessage` - Deliver new message to recipient

### Socket Connection Setup
```javascript
// Client-side
const socket = io(BASE_URL, {
  query: { userId: authUser._id }
});

// Server-side
io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  userSocketMap[userId] = socket.id;
});
```

## State Management

### Auth Store (useAuthStore)
```javascript
{
  authUser: User | null,
  isSigningUp: boolean,
  isLoggingIn: boolean,
  isCheckingAuth: boolean,
  onlineUsers: string[],
  socket: Socket | null
}
```

### Chat Store (useChatStore)
```javascript
{
  messages: Message[],
  users: User[],
  selectedUser: User | null,
  isUsersLoading: boolean,
  isMessagesLoading: boolean
}
```

### State Flow
1. **Authentication State** - Managed in useAuthStore
2. **Chat State** - Managed in useChatStore
3. **Real-time Updates** - Socket events update stores
4. **UI Updates** - Components react to store changes

## Installation

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud)
- Cloudinary account (for image uploads)

### Setup Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd chatttapp
```

2. **Install dependencies**
```bash
npm run build
```

3. **Set up environment variables**
```bash
# Create backend/.env file
cp backend/.env.example backend/.env
```

4. **Start development servers**
```bash
# Start backend (port 5001)
npm run start

# Start frontend (port 5173) - in separate terminal
cd frontend
npm run dev
```

## Environment Variables

### Backend Environment Variables (.env)
```env
PORT=5001
MONGODB_URI=mongodb://localhost:27017/chat-app
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NODE_ENV=development
```

### Frontend Environment Variables
The frontend uses Vite's environment variables:
- `import.meta.env.MODE` - Development/production mode
- `import.meta.env.VITE_` - Custom environment variables

## Deployment

### Vercel Deployment
The application is configured for Vercel deployment with `vercel.json`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "frontend/package.json",
      "use": "@vercel/static-build"
    },
    {
      "src": "backend/src/index.js",
      "use": "@vercel/node"
    }
  ],
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/backend/src/index.js" },
    { "source": "/(.*)", "destination": "/frontend/index.html" }
  ]
}
```

### Environment Setup for Production
1. Set all environment variables in Vercel dashboard
2. Configure MongoDB connection string
3. Set up Cloudinary credentials
4. Deploy with automatic build and deployment

## Database Schema

### User Model
```javascript
{
  email: String (required, unique),
  fullName: String (required),
  password: String (required, min: 6),
  profilePic: String (default: ""),
  timestamps: true
}
```

### Message Model
```javascript
{
  senderId: ObjectId (ref: 'User'),
  receiverId: ObjectId (ref: 'User'),
  text: String,
  image: String,
  timestamps: true
}
```

## Security Features

### Authentication Security
- JWT tokens with expiration
- HTTP-only cookies for token storage
- Password hashing with bcryptjs
- Protected routes with middleware

### Input Validation
- Email format validation
- Password length requirements
- Required field validation
- XSS protection through React

### CORS Configuration
```javascript
cors({
  origin: "http://localhost:5173",
  credentials: true
})
```

## Performance Optimizations

### Frontend Optimizations
- Lazy loading with React.lazy
- Efficient state updates with Zustand
- Optimized re-renders with proper dependencies
- Image optimization with Cloudinary

### Backend Optimizations
- Database indexing on user fields
- Efficient Socket.io connection handling
- Proper error handling to prevent memory leaks
- Static file serving in production

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Development Guidelines
- Follow existing code style
- Use meaningful variable names
- Add comments for complex logic
- Test thoroughly before submitting

## License

This project is licensed under the ISC License.

## Acknowledgments

- Built with modern web technologies
- Inspired by real-world chat applications
- Demonstrates full-stack development best practices
