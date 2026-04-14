// pages/HomePage.jsx
import { useMovies } from '../hooks/useMovies'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import MovieGrid from '../components/MovieGrid'
import Footer from '../components/Footer'

export default function HomePage() {
  const {
    query, setQuery,
    movies, loading, error,
    mode, totalPages, page,
    loadMore, hasMore,
  } = useMovies()

  const handleRetry = () => {
    // Re-trigger by toggling query or re-mounting — simplest: reset query
    setQuery(q => q + ' ')
    setTimeout(() => setQuery(q => q.trim()), 50)
  }

  return (
    <main>
      {/* Hero + Search */}
      <Hero
        query={query}
        onChange={setQuery}
        resultCount={movies.length}
        mode={mode}
        loading={loading}
      />

      {/* Movies section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <SectionHeader
          mode={mode}
          query={query}
          count={movies.length}
        />
        <MovieGrid
          movies={movies}
          loading={loading}
          error={error}
          query={query}
          onRetry={handleRetry}
          hasMore={hasMore}
          onLoadMore={loadMore}
        />
      </section>

      <Footer />
    </main>
  )
}
