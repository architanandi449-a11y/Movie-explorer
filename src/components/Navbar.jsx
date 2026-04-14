// components/Navbar.jsx
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'linear-gradient(180deg, rgba(8,8,8,0.98) 0%, rgba(8,8,8,0.85) 100%)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(212,160,23,0.06)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* Film reel icon */}
            <div className="w-8 h-8 rounded-full border border-gold-500/40 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gold-400">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3" fill="currentColor" />
                <circle cx="12" cy="5" r="1.5" fill="currentColor" opacity="0.6" />
                <circle cx="12" cy="19" r="1.5" fill="currentColor" opacity="0.6" />
                <circle cx="5" cy="12" r="1.5" fill="currentColor" opacity="0.6" />
                <circle cx="19" cy="12" r="1.5" fill="currentColor" opacity="0.6" />
              </svg>
            </div>
            <span
              className="font-display font-bold text-xl tracking-tight text-gold-gradient"
            >
              CineVault
            </span>
          </div>

          {/* Right nav items */}
          <nav className="hidden sm:flex items-center gap-6">
            <span className="text-xs font-mono text-cinema-400 tracking-widest uppercase">
              Discover
            </span>
            <div className="w-px h-4 bg-cinema-600" />
            <a
              href="https://www.themoviedb.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cinema-400 hover:text-gold-400 transition-colors duration-200 font-body"
            >
              Powered by TMDB
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}
