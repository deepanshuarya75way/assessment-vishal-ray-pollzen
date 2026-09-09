# PollZen Frontend

Modern realtime polling frontend built using React, Vite, Tailwind CSS v4, and Socket.io.

---

# Tech Stack

- React + Vite
- Tailwind CSS v4
- shadcn/ui
- Zustand
- React Hook Form
- Zod
- Recharts
- Socket.io Client
- Framer Motion
- Sonner
- Axios
- next-themes
- lucide-react

---

# Features

## Authentication

- Login/Register pages
- Protected routes
- JWT session management
- Zustand auth store

---

## Dashboard

- Poll overview
- Response statistics
- Quick actions
- Active polls

---

## Poll Builder

- Dynamic question creation
- Dynamic option creation
- Required/Optional toggles
- Expiry configuration
- Anonymous/Auth mode

---

## Public Poll System

- Public poll pages
- Smooth response submission
- Validation handling
- Anonymous response handling

---

## Analytics Dashboard

- Realtime updates
- Pie charts
- Bar charts
- Statistics cards
- Animated counters

---

# Project Structure

```bash
src/
│
├── app/
├── pages/
├── components/
├── features/
├── services/
├── sockets/
├── hooks/
├── validations/
├── store/
├── utils/
├── constants/
└── assets/
````

---

# Installation

```bash
pnpm install
```

---

# Development

```bash
pnpm run dev
```

---

# Build

```bash
pnpm run build
```

---

# Environment Variables

Create `.env` file:

```env
VITE_API_URL=http://localhost:8000/api/v1
VITE_SOCKET_URL=http://localhost:8000
```

---

# Routing

## Public Routes

* /
* /login
* /register
* /vote/:pollId
* /results/:pollId

---

## Protected (app) Routes

* /app/dashboard
* /app/polls
* /app/polls/create
* /app/polls/:pollId
* /app/analytics
* /app/analytics/:pollId

---

# State Management

Zustand is used for:

* auth state
* user state
* UI state
* global app state

---

# Forms

Implemented using:

* React Hook Form
* Zod validation

---

# Realtime Updates

Socket.io is used for:

* live analytics refresh
* realtime response counts
* dashboard updates

---

# UI System

Built with:

* Tailwind CSS v4
* shadcn/ui
* Framer Motion

Design philosophy:

* modern SaaS
* minimal dark theme
* responsive UI
* consistent spacing

---

# Charts

Implemented using Recharts:

* PieChart
* BarChart
* Progress analytics

---

# Production Deployment

* Vercel

---

# Performance Considerations

* lazy loading
* reusable hooks
* isolated business logic
* optimized component structure
* centralized API layer

---

# License

MIT License
