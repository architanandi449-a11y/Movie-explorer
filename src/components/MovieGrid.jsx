// components/MovieGrid.jsx
import { motion, AnimatePresence } from 'framer-motion'
import MovieCard from './MovieCard'
import SkeletonLoader from './SkeletonLoader'
import ErrorMessage from './ErrorMessage'

function EmptyState({ query }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-24 px-8 text-center col-span-full"
    >
      <div className="w-16 h-16 rounded-full border border-cinema-700 flex items-center justify-center mb-6">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-cinema-600">
          <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <h3 className="font-display text-xl text-cinema-400 mb-2">No films found</h3>
      <p className="text-cinema-600 text-sm font-body max-w-xs">
        We couldn't find anything for <span className="text-cinema-300 italic">"{query}"</span>.
        Try a different title or keyword.
      </p>
    </motion.div>
  )
}

/**
 * MovieGrid — renders the movie card grid with states:
 * loading (skeleton) | error | empty | populated
 */
export default function MovieGrid({ movies, loading, error, query, onRetry, hasMore, onLoadMore }) {
  // Initial load
  if (loading && movies.length === 0) {
    return <SkeletonLoader count={12} />
  }

  if (error && movies.length === 0) {
    return <ErrorMessage message={error} onRetry={onRetry} />
  }

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        <AnimatePresence mode="popLayout">
          {movies.length === 0 && !loading ? (
            <EmptyState query={query} key="empty" />
          ) : (
            movies.map((movie, index) => (
              <MovieCard key={movie.id} movie={movie} index={index} />
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Inline skeleton for pagination loading */}
      {loading && movies.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 mt-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="card-glass rounded-xl overflow-hidden">
              <div className="aspect-[2/3] skeleton" />
              <div className="p-4 space-y-2">
                <div className="skeleton h-4 rounded w-4/5" />
                <div className="skeleton h-3 rounded w-full" />
                <div className="skeleton h-3 rounded w-3/4" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Load More button */}
      {hasMore && !loading && movies.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <motion.button
            onClick={onLoadMore}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 px-8 py-3 rounded-xl
              border border-gold-500/25 text-gold-400 text-sm font-body
              hover:bg-gold-500/8 hover:border-gold-500/50 transition-all duration-200"
          >
            Load more films
            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </motion.span>
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}
