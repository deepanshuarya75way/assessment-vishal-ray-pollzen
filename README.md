# PollZen

> Realtime polling and feedback SaaS platform with live analytics, public sharing, anonymous/authenticated responses, and realtime updates using Socket.io.

## 🌐 Live Project

### Frontend
https://pollzen.rayvishal.dev

### Backend API
https://pollzen.onrender.com

---

## Overview

PollZen is a full-stack realtime polling platform built for modern feedback collection and analytics.

Users can:
- Create polls
- Add multiple questions
- Configure anonymous or authenticated responses
- Share public poll links
- Collect responses in realtime
- View live analytics dashboards
- Publish final results publicly

The project is designed with:
- scalable architecture
- realtime communication
- modern SaaS UI/UX
- modular backend structure
- production-style frontend architecture

---

# Repository Structure

```bash
pollzen/
│
├── pollzen-frontend/   # Frontend (React + Vite)
├── server/             # Backend (Node.js + Express)
│
├── README.md
````

# Tech Stack

## Frontend

* React + Vite
* Tailwind CSS v4
* shadcn/ui
* Zustand
* React Hook Form
* Zod
* Recharts
* Socket.io Client
* Framer Motion
* Sonner
* Axios

---

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.io
* JWT Authentication
* Zod Validation

---

# Core Features

## Authentication

* JWT authentication
* Register/Login system
* Protected routes
* Authenticated user sessions

---

## Poll System

* Dynamic poll creation
* Multiple questions support
* Single-choice options
* Required/Optional questions
* Poll expiry system
* Poll publishing system

---

## Response System

* Anonymous responses
* Authenticated responses
* Duplicate vote prevention
* Required question validation
* Expiry validation

---

## Analytics

* Live response count
* Question-wise summaries
* Option-based analytics
* Percentage calculations
* Realtime dashboard updates
* Published public results

---

## Realtime Features

Implemented using Socket.io:

* Live analytics updates
* Live response counters
* Poll room subscriptions
* Instant dashboard refresh

---

# Architecture

## Frontend Architecture

* Feature-based structure
* Reusable components
* Isolated socket logic
* Centralized API layer
* Zustand state management

---

## Backend Architecture

* Modular backend structure
* Service/controller separation
* Validation layers
* Socket emitter abstraction
* REST + Realtime architecture

---

# Environment Variables

## Frontend (.env)

```env
VITE_API_URL=http://localhost:8000/api/v1
VITE_SOCKET_URL=http://localhost:8000
```

---

## Backend (.env)

```env
PORT=8000
MONGO_URI=
JWT_SECRET=
CLIENT_URL=http://localhost:5173
```

---

# Installation

## Clone Repository

```bash
git clone <your-repo-url>
cd pollzen
```

---

# Frontend Setup

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Backend Setup

```bash
cd server
npm install
npm run dev
```

Backend runs on:

```bash
http://localhost:8000
```

---

# API Documentation

## Auth Routes

```http
POST /auth/register
POST /auth/login
GET  /auth/me
```

---

## Poll Routes

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

## Response Routes

```http
POST /responses/:pollId
GET  /responses/status/:pollId
```

---

## Analytics Routes

```http
GET /analytics/:pollId
GET /results/:pollId
```

---

# Realtime Architecture

## Socket Events

### Join Poll Room

```js
socket.emit("join-poll", pollId)
```

---

### Listen For Updates

```js
socket.on("poll-updated")
```

---

# Deployment

## Frontend

Recommended:

* Vercel

---

## Backend

Recommended:

* Render

---

## Database

Recommended:

* MongoDB Atlas

---

# Future Improvements

* AI-powered poll summaries
* Team collaboration
* Poll templates
* Advanced analytics
* Export reports
* Email notifications
* Scheduled polls

---

# Contributors

Built with passion during hackathon development.

---

# License

MIT License

