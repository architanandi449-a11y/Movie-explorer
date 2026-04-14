// components/Hero.jsx
import { motion } from 'framer-motion'
import SearchBar from './SearchBar'

export default function Hero({ query, onChange, resultCount, mode, loading }) {
  return (
    <section className="relative pt-32 pb-16 px-4 overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(212,160,23,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Decorative film strip lines */}
      <div className="absolute top-16 left-0 right-0 flex justify-between px-8 pointer-events-none opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="w-px h-8 bg-gold-500" />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full
            border border-gold-500/15 bg-gold-500/5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-xs text-gold-400/80 font-mono tracking-widest uppercase">
            {mode === 'search' ? 'Search Results' : 'Trending This Week'}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
        >
          <span className="text-cinema-100">Discover</span>{' '}
          <em className="text-gold-gradient not-italic">remarkable</em>
          <br />
          <span className="text-cinema-100">cinema.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-cinema-500 text-base sm:text-lg font-body mb-10 max-w-lg mx-auto leading-relaxed"
        >
          Explore trending films and search millions of titles from the world's largest movie database.
        </motion.p>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <SearchBar
            value={query}
            onChange={onChange}
            resultCount={resultCount}
            mode={mode}
            loading={loading}
          />
        </motion.div>
      </div>
    </section>
  )
}
