// App.jsx — Root application shell
import Navbar from './components/Navbar'
import ApiKeyBanner from './components/ApiKeyBanner'
import HomePage from './pages/HomePage'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const isMissingKey = !API_KEY || API_KEY === 'your_tmdb_api_key_here'

export default function App() {
  return (
    <div className="min-h-screen bg-cinema-950">
      <Navbar />
      {isMissingKey && <ApiKeyBanner />}
      <HomePage />
    </div>
  )
}
