// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="mt-24 border-t border-cinema-800/50 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display text-sm text-gold-gradient font-bold">CineVault</span>
          <span className="text-cinema-700 text-sm">—</span>
          <span className="text-cinema-600 text-xs font-body">Discover remarkable cinema</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-cinema-700 font-mono">
          <span>Data from</span>
          <a
            href="https://www.themoviedb.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-500/60 hover:text-gold-400 transition-colors"
          >
            TMDB
          </a>
          <span>· Not affiliated with TMDB</span>
        </div>
      </div>
    </footer>
  )
}
