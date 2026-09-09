# PollZen

Realtime polling platform for collecting feedback, running interactive polls, and viewing live analytics.

This repository contains the frontend and backend source code for a production-style realtime polling application built with a modular architecture and real-time features.

Live demo
- Frontend: https://pollzen.rayvishal.dev
- Backend API: https://pollzen.onrender.com

Contents
- `frontend/` — React + Vite frontend application
- `backend/` — Node.js + Express backend API
- `README.md` — this file

Key features
- Create, publish, and close polls
- Support for anonymous and authenticated responses
- Duplicate-vote prevention (per-poll unique respondent enforcement)
- Realtime analytics and dashboard updates via Socket.io
- Public share links and QR sharing for polls
- Validation (Zod) and structured service/controller layering on the backend

Tech stack
- Frontend: React, Vite, Tailwind CSS, shadcn/ui, Zustand, React Hook Form, Zod, Recharts, Socket.io-client, Sonner, Axios
- Backend: Node.js, Express, MongoDB, Mongoose, Socket.io, Zod, JWT-based auth

Repository layout
```
pollzen/
├── frontend/           # Frontend application (React + Vite)
├── backend/            # Backend API (Node.js + Express)
└── README.md
```

Getting started (development)

Prerequisites
- Node.js 18+ and a package manager (pnpm recommended) installed
- A running MongoDB instance (local or Atlas)

1) Backend

```bash
cd backend
pnpm install
cp .env.example .env          # update with MONGO_URI, JWT_SECRET, etc.
pnpm dev
```

The backend runs on `http://localhost:8000` by default (configurable via `.env`).

2) Frontend

```bash
cd frontend
pnpm install
cp .env.example .env         # set VITE_API_URL and VITE_SOCKET_URL if needed
pnpm dev
```

The frontend dev server runs on `http://localhost:5173` (Vite).

Environment variables

Backend (`backend/.env`)
- `PORT` — server port (default: 8000)
- `MONGO_URI` — MongoDB connection string
- `JWT_SECRET` — secret for signing JWTs
- `CLIENT_URL` — frontend origin for CORS (e.g., http://localhost:5173)

Frontend (`frontend/.env`)
- `VITE_API_URL` — e.g. `http://localhost:8000/api/v1`
- `VITE_SOCKET_URL` — e.g. `http://localhost:8000`

API overview

Auth
- POST `/api/v1/auth/register` — register a new user
- POST `/api/v1/auth/login` — login and receive a JWT
- GET `/api/v1/auth/me` — retrieve current user (requires JWT)

Polls
- POST   `/api/v1/polls` — create poll (authenticated)
- GET    `/api/v1/polls/my` — get polls for current user (authenticated)
- GET    `/api/v1/polls/:pollId` — get poll details
- PATCH  `/api/v1/polls/:pollId` — update poll (authenticated, owner)
- DELETE `/api/v1/polls/:pollId` — delete poll (authenticated, owner)
- PATCH  `/api/v1/polls/:pollId/publish` — publish poll
- PATCH  `/api/v1/polls/:pollId/close` — close poll

Responses
- POST `/api/v1/responses/:pollId` — submit response (anonymous or authenticated)
- GET  `/api/v1/responses/status/:pollId` — check whether the current user/anonymous ID has already voted

Analytics
- GET `/api/v1/analytics/:pollId` — analytics for a poll (authenticated for private dashboards)
- GET `/api/v1/results/:pollId` — public results for a published poll

Routing (frontend)

Public routes
- `/` — landing page
- `/login`, `/register` — auth pages
- `/vote/:pollId` — public voting page
- `/results/:pollId` — public results page

Protected (app) routes — under `/app`
- `/app/dashboard` — user dashboard
- `/app/polls` — my polls
- `/app/polls/create` — create poll
- `/app/polls/:pollId` — poll details
- `/app/analytics` — analytics overview
- `/app/analytics/:pollId` — per-poll analytics

Security & validation
- JWT-based authentication and route guards for protected routes
- Zod validation is used on the backend for request validation
- Duplicate submissions are prevented via unique indexes on respondent identifiers

Error handling and edge cases
- The backend returns structured API responses with appropriate HTTP status codes (4xx for client errors, 5xx for server errors)
- Public endpoints support anonymous submissions using a generated anonymous ID stored client-side
- Defensive checks are in place to avoid accidental token strings (e.g., `'null'`/`'undefined'`) causing authentication failures

Code quality & testing
- Project uses a modular service/controller pattern for clarity and testability
- Add unit and integration tests in future iterations (recommended for interview/production readiness)

Deployment recommendations
- Frontend: Vercel or Netlify
- Backend: Render, Heroku, or a container platform (Docker) behind a load balancer
- Database: MongoDB Atlas with proper backups and access rules

Contributing
- Open a PR with a clear description of your changes
- Include tests for new features or bug fixes when possible
- Follow the established code style and run linters before committing

Professional notes for interviews
- This repository is organized to demonstrate full-stack capability: frontend architecture, backend services, realtime features, validation, and deployment considerations
- Remove any sensitive keys before sharing; provide a short README describing how to run locally (this file)

License
- MIT
# Frontend Setup

```bash
cd frontend
pnpm install
pnpm dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Backend Setup

```bash
cd backend
pnpm install
pnpm run dev
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

* Team collaboration
* Poll templates
* Advanced analytics
* Export reports
* Email notifications
* Scheduled polls

---

# Contributors

Contributors: Open-source contributors and maintainers.

---

# License

MIT License

