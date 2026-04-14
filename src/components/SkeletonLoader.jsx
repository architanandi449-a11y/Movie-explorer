// components/SkeletonLoader.jsx
import { motion } from 'framer-motion'

function SkeletonCard({ delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.3 }}
      className="card-glass rounded-xl overflow-hidden"
    >
      {/* Poster placeholder — 2:3 aspect ratio */}
      <div className="aspect-[2/3] skeleton" />

      {/* Content placeholder */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <div className="skeleton h-4 rounded-md w-4/5" />
        <div className="skeleton h-4 rounded-md w-2/3" />

        {/* Overview */}
        <div className="space-y-2 pt-1">
          <div className="skeleton h-3 rounded w-full" />
          <div className="skeleton h-3 rounded w-full" />
          <div className="skeleton h-3 rounded w-3/4" />
        </div>

        {/* Footer */}
        <div className="flex justify-between pt-2 border-t border-cinema-800/40">
          <div className="skeleton h-3 rounded w-16" />
          <div className="skeleton h-3 rounded w-8" />
        </div>
      </div>
    </motion.div>
  )
}

/**
 * Renders a grid of skeleton cards while movies are loading
 */
export default function SkeletonLoader({ count = 12 }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} delay={i * 0.04} />
      ))}
    </div>
  )
}
