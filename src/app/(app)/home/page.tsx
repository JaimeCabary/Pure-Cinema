import { 
  fetchTrending, 
  fetchPopularMovies, 
  fetchNowPlaying, 
  fetchTopRated,
  fetchGenreMovies,
  FALLBACK_MOVIES
} from '@/lib/tmdb'
import { HomeClient } from './HomeClient'

export const revalidate = 300

export default async function HomePage() {
  // Parallel fetch with resilient instant fallbacks
  const [trending, popular, nowPlaying, topRated, kidsFamily] = await Promise.all([
    fetchTrending('day').catch(() => FALLBACK_MOVIES),
    fetchPopularMovies().catch(() => FALLBACK_MOVIES),
    fetchNowPlaying().catch(() => FALLBACK_MOVIES),
    fetchTopRated().catch(() => FALLBACK_MOVIES),
    fetchGenreMovies('16').catch(() => FALLBACK_MOVIES) 
  ])

  const trendingList = Array.isArray(trending) && trending.length > 0 ? trending : FALLBACK_MOVIES
  const popularList = Array.isArray(popular) && popular.length > 0 ? popular : FALLBACK_MOVIES
  const nowPlayingList = Array.isArray(nowPlaying) && nowPlaying.length > 0 ? nowPlaying : FALLBACK_MOVIES
  const topRatedList = Array.isArray(topRated) && topRated.length > 0 ? topRated : FALLBACK_MOVIES
  const kidsFamilyList = Array.isArray(kidsFamily) && kidsFamily.length > 0 ? kidsFamily : FALLBACK_MOVIES

  const heroMovies = trendingList.slice(0, 5)

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black font-sans">
      <HomeClient 
        initialHeroSet={heroMovies}
        categories={{
          "Trending Now": trendingList,
          "Recommended For You": [...popularList].reverse(),
          "New Releases": nowPlayingList,
          "Kids & Family": kidsFamilyList,
          "Top Rated Classics": topRatedList,
        }}
      />
    </div>
  )
}