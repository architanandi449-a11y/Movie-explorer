// components/MovieCard.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { posterUrl, formatRating, releaseYear } from '../services/tmdb'

/**
 * Rating badge color logic
 */
function ratingColor(rating) {
  if (rating >= 8) return 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10'
  if (rating >= 6.5) return 'text-gold-400 border-gold-400/30 bg-gold-400/10'
  if (rating >= 5) return 'text-amber-500 border-amber-500/30 bg-amber-500/10'
  return 'text-red-400 border-red-400/30 bg-red-400/10'
}

export default function MovieCard({ movie, index }) {
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)

  const poster = posterUrl(movie.poster_path, 'w500')
  const rating = movie.vote_average || 0
  const year = releaseYear(movie.release_date)

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.5,
        delay: (index % 4) * 0.08, // Stagger based on column position
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative cursor-pointer"
      style={{ transformOrigin: 'center bottom' }}
    >
      <div
        className="card-glass rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300
          group-hover:border-gold-500/20 group-hover:shadow-2xl"
        style={{
          boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
          transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
        }}
      >
        {/* Poster */}
        <div className="relative overflow-hidden bg-cinema-850 aspect-[2/3]">
          {/* Placeholder while loading */}
          {!imgLoaded && !imgError && (
            <div className="absolute inset-0 skeleton" />
          )}

          {/* Fallback when no poster */}
          {(!poster || imgError) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-cinema-850">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-cinema-600">
                <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M2 8h20M8 2v6" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span className="text-cinema-600 text-xs font-body text-center px-2">{movie.title}</span>
            </div>
          )}

          {poster && !imgError && (
            <img
              src={poster}
              alt={`${movie.title} poster`}
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
              className={`w-full h-full object-cover transition-all duration-500
                group-hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
          )}

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(to top, rgba(8,8,8,0.85) 0%, transparent 60%)',
            }}
          />

          {/* Rating badge — top right */}
          <div className={`absolute top-2.5 right-2.5 flex items-center gap-1
            border rounded-full px-2 py-0.5 text-xs font-mono font-medium ${ratingColor(rating)}`}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {formatRating(rating)}
          </div>

          {/* Year badge — top left */}
          <div className="absolute top-2.5 left-2.5 bg-cinema-950/80 border border-cinema-700/50
            rounded-full px-2 py-0.5 text-xs font-mono text-cinema-400">
            {year}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4 gap-2">
          <h3
            className="font-display font-semibold text-cinema-200 text-sm leading-snug line-clamp-2
              group-hover:text-gold-300 transition-colors duration-200"
          >
            {movie.title}
          </h3>

          {movie.overview && (
            <p className="text-cinema-500 text-xs leading-relaxed line-clamp-3 font-body flex-1">
              {movie.overview}
            </p>
          )}

          {/* Footer meta */}
          <div className="flex items-center justify-between mt-auto pt-2 border-t border-cinema-800/60">
            <span className="text-xs text-cinema-600 font-mono">
              {movie.vote_count > 1000
                ? `${(movie.vote_count / 1000).toFixed(1)}k votes`
                : `${movie.vote_count || 0} votes`}
            </span>
            <motion.div
              className="text-cinema-600 group-hover:text-gold-500 transition-colors duration-200"
              whileHover={{ x: 3 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
