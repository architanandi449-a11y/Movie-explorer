// hooks/useMovies.js — Encapsulates all movie data-fetching logic
import { useState, useEffect, useCallback } from 'react'
import { fetchTrending, searchMovies } from '../services/tmdb'
import { useDebounce } from './useDebounce'

/**
 * Central hook for movie data.
 * Handles: trending fetch, debounced search, loading, error, pagination.
 */
export function useMovies() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [mode, setMode] = useState('trending') // 'trending' | 'search'

  const debouncedQuery = useDebounce(query, 400)

  // Main fetch logic
  const loadMovies = useCallback(async (searchQuery, pageNum) => {
    setLoading(true)
    setError(null)
    try {
      const data = searchQuery
        ? await searchMovies(searchQuery, pageNum)
        : await fetchTrending(pageNum)

      setMovies(pageNum === 1 ? data.results : prev => [...prev, ...data.results])
      setTotalPages(Math.min(data.total_pages, 10)) // Cap at 10 pages
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
      if (pageNum === 1) setMovies([])
    } finally {
      setLoading(false)
    }
  }, [])

  // Trigger on debounced query change
  useEffect(() => {
    setPage(1)
    setMode(debouncedQuery ? 'search' : 'trending')
    loadMovies(debouncedQuery, 1)
  }, [debouncedQuery, loadMovies])

  // Load more (pagination)
  const loadMore = useCallback(() => {
    if (page < totalPages && !loading) {
      const nextPage = page + 1
      setPage(nextPage)
      loadMovies(debouncedQuery, nextPage)
    }
  }, [page, totalPages, loading, debouncedQuery, loadMovies])

  return {
    query,
    setQuery,
    movies,
    loading,
    error,
    mode,
    page,
    totalPages,
    loadMore,
    hasMore: page < totalPages,
  }
}
