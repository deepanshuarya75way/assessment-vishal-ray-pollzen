# PollZen Backend

Production-style backend for PollZen realtime polling platform.

Built with:
- Node.js
- Express.js
- MongoDB
- Socket.io

---

# Features

## Authentication

- JWT authentication
- Protected APIs
- User management

---

## Poll System

- Poll CRUD
- Dynamic question support
- Poll expiry system
- Publish/unpublish flow
- Poll closing system

---

## Response System

- Anonymous responses
- Authenticated responses
- Duplicate vote prevention
- Required validation
- Expiry validation

---

## Analytics

- Aggregation pipelines
- Realtime analytics
- Question summaries
- Option percentages
- Public results

---

## Realtime Communication

Implemented using Socket.io:

- room-based architecture
- realtime analytics notifications
- poll update events

---

# Backend Architecture

```bash
src/
│
├── config/
├── modules/
│   ├── auth/
│   ├── polls/
│   ├── responses/
│   └── analytics/
│
├── sockets/
├── middlewares/
├── utils/
├── constants/
├── app.js
└── server.js
````

---

# API Structure

Base URL:

```bash
/api/v1
```

---

# Auth APIs

```http
POST /auth/register
POST /auth/login
GET  /auth/me
```

---

# Poll APIs

```http
POST   /polls
GET    /polls/my
GET    /polls/:pollId
PATCH  /polls/:pollId
DELETE /polls/:pollId
PATCH  /polls/:pollId/publish
PATCH  /polls/:pollId/close
```

---

# Response APIs

```http
POST /responses/:pollId
GET  /responses/status/:pollId
```

---

# Analytics APIs

```http
GET /analytics/:pollId
GET /results/:pollId
```

---

# Environment Variables

```env
PORT=8000
MONGO_URI=
JWT_SECRET=
CLIENT_URL=http://localhost:5173
```

---

# Installation

```bash
npm install
```

---

# Development

```bash
npm run dev
```

---

# Production

```bash
npm start
```

---

# Socket.io Architecture

## Join Poll Room

```js
socket.emit("join-poll", pollId)
```

---

## Emit Updates

```js
io.to(`poll:${pollId}`).emit("poll-updated")
```

---

# Database

MongoDB + Mongoose

Collections:

* users
* polls
* responses

---

# Security Features

* JWT authentication
* protected routes
* duplicate response prevention
* validation layers
* ownership validation
* expiry checks

---

# Validation Strategy

## Request Validation

* Zod schemas
* middleware validation

---

## Business Validation

* service-layer validation
* poll checks
* option checks
* required question checks

---

# Realtime Flow

```text
Submit Response
      ↓
Save Response
      ↓
Emit Socket Event
      ↓
Frontend Refetch Analytics
```

---

# Deployment

Recommended:

* Railway
* Render
* MongoDB Atlas

---

# License

MIT License