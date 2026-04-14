// services/tmdb.js — All TMDB API calls live here
const API_KEY = import.meta.env.VITE_TMDB_API_KEY
console.log("API KEY:", API_KEY)

const BASE_URL = 'https://api.themoviedb.org/3'
export const IMG_BASE = 'https://image.tmdb.org/t/p'

/**
 * Generic fetch wrapper with error handling
 */
async function tmdbFetch(endpoint, params = {}) {
  const url = new URL(`${BASE_URL}${endpoint}`)
  url.searchParams.set('api_key', API_KEY)
  url.searchParams.set('language', 'en-US')
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v))

  const res = await fetch(url.toString())
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.status_message || `HTTP ${res.status}`)
  }
  return res.json()
}

/**
 * Fetch trending/popular movies for the default view
 */
export async function fetchTrending(page = 1) {
  return tmdbFetch('/trending/movie/week', { page })
}

/**
 * Search movies by query string
 */
export async function searchMovies(query, page = 1) {
  return tmdbFetch('/search/movie', { query, page, include_adult: false })
}

/**
 * Build a poster URL with a given size
 * Sizes: w92 | w154 | w185 | w342 | w500 | w780 | original
 */
export function posterUrl(path, size = 'w500') {
  if (!path) return null
  return `${IMG_BASE}/${size}${path}`
}

/**
 * Format vote average to one decimal
 */
export function formatRating(vote) {
  return vote ? vote.toFixed(1) : 'N/A'
}

/**
 * Extract year from release_date string
 */
export function releaseYear(dateStr) {
  return dateStr ? dateStr.slice(0, 4) : '—'
}
