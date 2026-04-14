# 🎬 CineVault — Movie Explorer

A production-ready movie explorer built with **React + Vite + Tailwind CSS + Framer Motion**.

## ✨ Features

- **Real-time debounced search** (400ms) via TMDB API
- **Skeleton loading UI** — no spinners, proper shimmer cards
- **Framer Motion animations** — stagger, fade-slide-up, scroll-triggered viewport animations
- **Lazy-loaded images** with fallback states
- **Responsive grid** — 2 / 3 / 4 / 5 columns across breakpoints
- **Pagination** — "Load more" with inline skeleton
- **Error handling** — graceful UI with retry
- **No results state** — friendly empty state
- Cinematic dark-luxury aesthetic (Playfair Display + DM Sans)

---

## 🚀 Quick Start

### 1. Get a free TMDB API key

Sign up at [themoviedb.org](https://www.themoviedb.org/signup) and go to  
**Settings → API → Create → Developer** to get your `v3 auth` key (takes ~1 minute).

### 2. Configure environment

```bash
cp .env.example .env
# Then edit .env and paste your key:
# VITE_TMDB_API_KEY=your_actual_key_here
```

### 3. Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### 4. Build for production

```bash
npm run build
npm run preview
```

---

## 🚢 Deploy to Vercel / Netlify

**Vercel:**
```bash
npx vercel
# Add VITE_TMDB_API_KEY in Project → Settings → Environment Variables
```

**Netlify:**
```bash
npx netlify deploy --prod --dir=dist
# Add env var in Site Settings → Environment Variables
```

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Fixed top nav with logo
│   ├── Hero.jsx            # Headline + search area
│   ├── SearchBar.jsx       # Controlled input with clear/loading state
│   ├── SectionHeader.jsx   # Dynamic section title
│   ├── MovieGrid.jsx       # Grid container, handles all states
│   ├── MovieCard.jsx       # Individual card with animations
│   ├── SkeletonLoader.jsx  # Shimmer skeleton grid
│   ├── ErrorMessage.jsx    # Error state with retry
│   ├── ApiKeyBanner.jsx    # Warning when key not configured
│   └── Footer.jsx
├── hooks/
│   ├── useMovies.js        # All data-fetching logic
│   └── useDebounce.js      # Generic debounce hook
├── services/
│   └── tmdb.js             # TMDB API calls + helpers
├── pages/
│   └── HomePage.jsx        # Main page composition
├── App.jsx
├── main.jsx
└── index.css
```

---

## Tech Stack

- Frontend: React (Vite)
- Styling: Tailwind CSS
- Animations: Framer Motion
- API: TMDB (The Movie Database)
- Version Control: Git & GitHub

## 🎨 Design System

| Token | Value |
|---|---|
| Primary font | Playfair Display (display) |
| Body font | DM Sans |
| Mono font | JetBrains Mono |
| Background | `#080808` (cinema-950) |
| Gold accent | `#d4a017` (gold-500) |
| Card bg | `rgba(20,20,20,0.95)` |

---

## Setup & Installation
**1. Clone the repository**
- git clone https://github.com/architanandi449-a11y/movie-explorer.git
cd movie-explorer
**2. Install dependencies**
- npm install

**3. Add environment variables**
- Create a .env file in the root directory:

VITE_TMDB_API_KEY=your_api_key_here

**4. Run the application**
- npm run dev

## Live Demo
 - movie-explorer-omega-neon.vercel.app

## Demo Video

Add your demo video link here (Google Drive / YouTube)

---

## 📝 Notes

- TMDB free tier: ~40 req/s, plenty for development
- Images use `loading="lazy"` natively for performance
- Pagination capped at page 10 to avoid API abuse
- All animations respect `prefers-reduced-motion` via Framer Motion defaults
