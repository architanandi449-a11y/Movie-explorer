// components/ErrorMessage.jsx
import { motion } from 'framer-motion'

export default function ErrorMessage({ message, onRetry }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center justify-center py-24 px-8 text-center"
    >
      {/* Icon */}
      <div className="w-16 h-16 rounded-full border border-red-500/20 bg-red-500/5
        flex items-center justify-center mb-6">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-red-400">
          <path
            d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
      </div>

      <h3 className="font-display text-xl text-cinema-200 mb-2">Something went wrong</h3>
      <p className="text-cinema-500 text-sm max-w-xs font-body mb-8 leading-relaxed">
        {message || 'Unable to load movies. Please check your connection and API key.'}
      </p>

      {onRetry && (
        <motion.button
          onClick={onRetry}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="px-6 py-2.5 rounded-lg border border-gold-500/30 text-gold-400
            text-sm font-body hover:bg-gold-500/10 transition-colors duration-200"
        >
          Try again
        </motion.button>
      )}
    </motion.div>
  )
}
