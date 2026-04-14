// components/ApiKeyBanner.jsx
import { motion } from 'framer-motion'

export default function ApiKeyBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-4 mt-4 rounded-xl border border-amber-500/25 bg-amber-500/5 p-4
        flex flex-col sm:flex-row items-start sm:items-center gap-3"
    >
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20
        flex items-center justify-center">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-amber-400">
          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-amber-300 text-sm font-body font-medium">API Key Required</p>
        <p className="text-amber-400/60 text-xs font-body mt-0.5">
          Add your TMDB API key to <code className="font-mono bg-cinema-800 px-1 py-0.5 rounded text-amber-400/80">.env</code> as{' '}
          <code className="font-mono bg-cinema-800 px-1 py-0.5 rounded text-amber-400/80">VITE_TMDB_API_KEY</code>.{' '}
          <a
            href="https://www.themoviedb.org/settings/api"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-amber-300 transition-colors"
          >
            Get a free key →
          </a>
        </p>
      </div>
    </motion.div>
  )
}
