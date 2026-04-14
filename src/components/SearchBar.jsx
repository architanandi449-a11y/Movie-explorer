// components/SearchBar.jsx
import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * SearchBar — controlled input, passes raw value up.
 * Debouncing happens in useMovies hook via useDebounce.
 */
export default function SearchBar({ value, onChange, resultCount, mode, loading }) {
  const inputRef = useRef(null)
  const [focused, setFocused] = useState(false)

  const handleClear = () => {
    onChange('')
    inputRef.current?.focus()
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Input wrapper */}
      <motion.div
        animate={{
          boxShadow: focused
            ? '0 0 0 1px rgba(212,160,23,0.35), 0 8px 32px rgba(212,160,23,0.06)'
            : '0 0 0 1px rgba(212,160,23,0.08)',
        }}
        transition={{ duration: 0.2 }}
        className="relative rounded-xl overflow-hidden"
        style={{ background: 'rgba(20,20,20,0.9)' }}
      >
        {/* Search icon */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-cinema-400 pointer-events-none">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>

        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Search for a film, director, or genre…"
          className="w-full bg-transparent pl-12 pr-12 py-4 text-cinema-200 placeholder-cinema-600
            font-body text-sm outline-none search-glow transition-all duration-200"
          aria-label="Search movies"
        />

        {/* Loading indicator / Clear button */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <AnimatePresence mode="wait">
            {loading && value ? (
              <motion.div
                key="spinner"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="w-4 h-4 border-2 border-gold-500/30 border-t-gold-500 rounded-full animate-spin"
              />
            ) : value ? (
              <motion.button
                key="clear"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={handleClear}
                className="text-cinema-500 hover:text-cinema-200 transition-colors duration-150"
                aria-label="Clear search"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </motion.button>
            ) : null}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Results meta */}
      <AnimatePresence>
        {!loading && value && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-3 text-center text-xs text-cinema-500 font-mono"
          >
            {resultCount > 0
              ? `${resultCount.toLocaleString()} result${resultCount !== 1 ? 's' : ''} for "${value}"`
              : `No results for "${value}"`}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
