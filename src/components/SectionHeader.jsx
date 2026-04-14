// components/SectionHeader.jsx
import { motion, AnimatePresence } from 'framer-motion'

export default function SectionHeader({ mode, query, count }) {
  return (
    <div className="flex items-end justify-between mb-8">
      <div>
        <AnimatePresence mode="wait">
          {mode === 'search' ? (
            <motion.div
              key="search"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-xs text-cinema-600 font-mono uppercase tracking-widest mb-1">Results</p>
              <h2 className="font-display text-2xl sm:text-3xl text-cinema-100 font-semibold">
                "{query}"
              </h2>
            </motion.div>
          ) : (
            <motion.div
              key="trending"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-xs text-cinema-600 font-mono uppercase tracking-widest mb-1">This Week</p>
              <h2 className="font-display text-2xl sm:text-3xl text-cinema-100 font-semibold">
                Trending Films
              </h2>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Count pill */}
      <AnimatePresence>
        {count > 0 && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-xs font-mono text-cinema-500 border border-cinema-700 rounded-full px-3 py-1"
          >
            {count.toLocaleString()} titles
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}
