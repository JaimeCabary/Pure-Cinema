// const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
// const TMDB_BASE_URL = 'https://api.themoviedb.org/3'

// export async function fetchTrending(timeWindow: 'day' | 'week' = 'week') {
//   const res = await fetch(
//     `${TMDB_BASE_URL}/trending/movie/${timeWindow}?api_key=${TMDB_API_KEY}`,
//     {
//       next: {
//         revalidate: 3600, // Revalidate every hour
//         tags: ['trending'],
//       },
//     }
//   )
  
//   if (!res.ok) {
//     throw new Error('Failed to fetch trending movies')
//   }
  
//   const data = await res.json()
//   return data.results
// }

// export async function fetchPopularMovies(page: number = 1) {
//   const res = await fetch(
//     `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&page=${page}`,
//     {
//       next: {
//         revalidate: 7200, // Revalidate every 2 hours
//         tags: ['popular'],
//       },
//     }
//   )
  
//   if (!res.ok) {
//     throw new Error('Failed to fetch popular movies')
//   }
  
//   const data = await res.json()
//   return data.results
// }

// export async function fetchNowPlaying(page: number = 1) {
//   const res = await fetch(
//     `${TMDB_BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}&page=${page}`,
//     {
//       next: {
//         revalidate: 1800, // Revalidate every 30 minutes
//         tags: ['now_playing'],
//       },
//     }
//   )
  
//   if (!res.ok) {
//     throw new Error('Failed to fetch now playing movies')
//   }
  
//   const data = await res.json()
//   return data.results
// }

// export async function fetchTopRated(page: number = 1) {
//   const res = await fetch(
//     `${TMDB_BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&page=${page}`,
//     {
//       next: {
//         revalidate: 86400, // Revalidate every 24 hours
//         tags: ['top_rated'],
//       },
//     }
//   )
  
//   if (!res.ok) {
//     throw new Error('Failed to fetch top rated movies')
//   }
  
//   const data = await res.json()
//   return data.results
// }


// export async function fetchGenreMovies(genreId: string) {
//   const res = await fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&with_genres=${genreId}&language=en-US&sort_by=popularity.desc&include_adult=false`,
//     { next: { revalidate: 86400 } }
//   );
  
//   if (!res.ok) throw new Error('Failed to fetch genre movies');
//   return (await res.json()).results;
// }

// export async function fetchMovieDetails(id: number) {
//   const res = await fetch(
//     `${TMDB_BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}&append_to_response=credits,videos,similar`,
//     {
//       next: {
//         revalidate: 3600,
//         tags: [`movie-${id}`],
//       },
//     }
//   )
  
//   if (!res.ok) {
//     throw new Error('Failed to fetch movie details')
//   }
  
//   return res.json()
// }

// export async function searchMovies(query: string, page: number = 1) {
//   const res = await fetch(
//     `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&page=${page}`,
//     {
//       next: {
//         revalidate: 300, // Revalidate every 5 minutes for search
//       },
//     }
//   )
  
//   if (!res.ok) {
//     throw new Error('Failed to search movies')
//   }
  
//   const data = await res.json()
//   return data
// }



// ============================================
// ENHANCED TMDB API UTILITIES
// ============================================
// Complete movie data including cast, crew, videos, streaming providers, etc.

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
const TMDB_BASE_URL = 'https://api.themoviedb.org/3'
const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p'

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface Movie {
  id: number
  title: string
  original_title: string
  overview: string
  poster_path: string | null
  backdrop_path: string | null
  release_date: string
  vote_average: number
  vote_count: number
  popularity: number
  adult: boolean
  genre_ids?: number[]
  genres?: Genre[]
  runtime?: number
  tagline?: string
  status?: string
  budget?: number
  revenue?: number
  homepage?: string
  imdb_id?: string
  original_language: string
  production_companies?: ProductionCompany[]
  production_countries?: ProductionCountry[]
  spoken_languages?: SpokenLanguage[]
}

export interface MovieDetails extends Movie {
  belongs_to_collection?: Collection
  credits: Credits
  videos: Videos
  similar: { results: Movie[] }
  recommendations: { results: Movie[] }
  'watch/providers'?: WatchProviders
  keywords?: { keywords: Keyword[] }
  reviews?: { results: Review[] }
  images?: Images
  external_ids?: ExternalIds
}

export interface Genre {
  id: number
  name: string
}

export interface ProductionCompany {
  id: number
  name: string
  logo_path: string | null
  origin_country: string
}

export interface ProductionCountry {
  iso_3166_1: string
  name: string
}

export interface SpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}

export interface Collection {
  id: number
  name: string
  poster_path: string | null
  backdrop_path: string | null
}

export interface Credits {
  cast: CastMember[]
  crew: CrewMember[]
}

export interface CastMember {
  id: number
  name: string
  character: string
  profile_path: string | null
  order: number
  gender: number
  known_for_department: string
}

export interface CrewMember {
  id: number
  name: string
  job: string
  department: string
  profile_path: string | null
  gender: number
}

export interface Videos {
  results: Video[]
}

export interface Video {
  id: string
  iso_639_1: string
  iso_3166_1: string
  key: string
  name: string
  site: string
  size: number
  type: string // "Trailer" | "Teaser" | "Clip" | "Featurette" | "Behind the Scenes"
  official: boolean
  published_at: string
}

export interface WatchProviders {
  results: {
    [countryCode: string]: CountryProviders
  }
}

export interface CountryProviders {
  link: string
  flatrate?: Provider[]
  rent?: Provider[]
  buy?: Provider[]
}

export interface Provider {
  logo_path: string
  provider_id: number
  provider_name: string
  display_priority: number
}

export interface Keyword {
  id: number
  name: string
}

export interface Review {
  id: string
  author: string
  author_details: {
    name: string
    username: string
    avatar_path: string | null
    rating: number | null
  }
  content: string
  created_at: string
  updated_at: string
  url: string
}

export interface Images {
  backdrops: ImageData[]
  posters: ImageData[]
  logos: ImageData[]
}

export interface ImageData {
  aspect_ratio: number
  height: number
  width: number
  iso_639_1: string | null
  file_path: string
  vote_average: number
  vote_count: number
}

export interface ExternalIds {
  imdb_id: string | null
  facebook_id: string | null
  instagram_id: string | null
  twitter_id: string | null
}

export interface Person {
  id: number
  name: string
  biography: string
  birthday: string | null
  deathday: string | null
  place_of_birth: string | null
  profile_path: string | null
  known_for_department: string
  gender: number
  popularity: number
}

// ============================================
// IMAGE URL HELPERS
// ============================================

export const getImageUrl = {
  poster: (path: string | null, size: 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original' = 'w500') => 
    path ? `${TMDB_IMAGE_BASE}/${size}${path}` : null,
  
  backdrop: (path: string | null, size: 'w300' | 'w780' | 'w1280' | 'original' = 'w1280') => 
    path ? `${TMDB_IMAGE_BASE}/${size}${path}` : null,
  
  profile: (path: string | null, size: 'w45' | 'w185' | 'h632' | 'original' = 'w185') => 
    path ? `${TMDB_IMAGE_BASE}/${size}${path}` : null,
  
  logo: (path: string | null, size: 'w45' | 'w92' | 'w154' | 'w185' | 'w300' | 'w500' | 'original' = 'w185') => 
    path ? `${TMDB_IMAGE_BASE}/${size}${path}` : null,
}

// ============================================
// API FETCHING FUNCTIONS
// ============================================

// Fast In-Memory SWR Cache for sub-millisecond page rendering
const memoryCache = new Map<string, { data: any; timestamp: number }>()

async function fetchTMDB<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
  const cacheKey = `${endpoint}:${JSON.stringify(params)}`
  const cached = memoryCache.get(cacheKey)
  const now = Date.now()
  const TTL = 1000 * 60 * 30 // 30 minutes cache

  // If cached and fresh, return immediately (< 1ms)
  if (cached && (now - cached.timestamp < TTL)) {
    return cached.data as T
  }

  const effectiveKey = TMDB_API_KEY || '119f057993052814896eff7bb55e03db'
  const url = new URL(`${TMDB_BASE_URL}${endpoint}`)
  url.searchParams.append('api_key', effectiveKey)
  
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value)
  })

  // If we have stale cache, return it immediately and revalidate in the background
  if (cached) {
    fetch(url.toString(), { signal: AbortSignal.timeout(3000) })
      .then(res => res.ok ? res.json() : null)
      .then(freshData => {
        if (freshData) memoryCache.set(cacheKey, { data: freshData, timestamp: Date.now() })
      })
      .catch(() => {})
    return cached.data as T
  }

  // First request: fast fetch with short 1.5s timeout
  try {
    const res = await fetch(url.toString(), {
      signal: AbortSignal.timeout(1500),
      next: { revalidate: 3600 }
    })
    
    if (!res.ok) {
      throw new Error(`TMDB API error: ${res.statusText}`)
    }
    
    const data = await res.json()
    memoryCache.set(cacheKey, { data, timestamp: Date.now() })
    return data
  } catch (err) {
    // If request timed out or failed, return fallback immediately
    return { results: FALLBACK_MOVIES } as unknown as T
  }
}

// ============================================
// MOVIE LISTS
// ============================================

export async function fetchTrending(timeWindow: 'day' | 'week' = 'week') {
  try {
    const data = await fetchTMDB<{ results: Movie[] }>(`/trending/movie/${timeWindow}`)
    return data.results
  } catch {
    return FALLBACK_MOVIES
  }
}

export async function fetchPopularMovies(page: number = 1) {
  try {
    const data = await fetchTMDB<{ results: Movie[] }>('/movie/popular', { page: String(page) })
    return data.results
  } catch {
    return FALLBACK_MOVIES
  }
}

export async function fetchNowPlaying(page: number = 1) {
  try {
    const data = await fetchTMDB<{ results: Movie[] }>('/movie/now_playing', { page: String(page) })
    return data.results
  } catch {
    return FALLBACK_MOVIES
  }
}

export async function fetchTopRated(page: number = 1) {
  try {
    const data = await fetchTMDB<{ results: Movie[] }>('/movie/top_rated', { page: String(page) })
    return data.results
  } catch {
    return FALLBACK_MOVIES
  }
}

export async function fetchUpcoming(page: number = 1) {
  try {
    const data = await fetchTMDB<{ results: Movie[] }>('/movie/upcoming', { page: String(page) })
    return data.results
  } catch {
    return FALLBACK_MOVIES
  }
}

export async function fetchGenreMovies(genreId: string, page: number = 1) {
  try {
    const data = await fetchTMDB<{ results: Movie[] }>('/discover/movie', {
      with_genres: genreId,
      sort_by: 'popularity.desc',
      page: String(page),
    })
    return data.results
  } catch {
    return FALLBACK_MOVIES
  }
}

// Curated 4K Fallback Catalog with real TMDB IDs and valid posters
export const FALLBACK_MOVIES: Movie[] = [
  {
    id: 157336,
    title: 'Interstellar',
    original_title: 'Interstellar',
    overview: 'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel.',
    poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    backdrop_path: '/xJHokMbljvjADYdit5fK5VQsXEG.jpg',
    release_date: '2014-11-05',
    vote_average: 8.4,
    vote_count: 34000,
    popularity: 140.2,
    adult: false,
    original_language: 'en',
  },
  {
    id: 27205,
    title: 'Inception',
    original_title: 'Inception',
    overview: 'Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets, is offered a chance to regain his old life.',
    poster_path: '/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
    backdrop_path: '/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg',
    release_date: '2010-07-15',
    vote_average: 8.4,
    vote_count: 36000,
    popularity: 110.8,
    adult: false,
    original_language: 'en',
  },
  {
    id: 550,
    title: 'Fight Club',
    original_title: 'Fight Club',
    overview: 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy.',
    poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    backdrop_path: '/hZkgoQYus5vegHoetLkCJzb17zJ.jpg',
    release_date: '1999-10-15',
    vote_average: 8.4,
    vote_count: 27000,
    popularity: 95.5,
    adult: false,
    original_language: 'en',
  },
  {
    id: 299534,
    title: 'Avengers: Endgame',
    original_title: 'Avengers: Endgame',
    overview: 'After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more.',
    poster_path: '/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    backdrop_path: '/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
    release_date: '2019-04-24',
    vote_average: 8.3,
    vote_count: 25000,
    popularity: 105.4,
    adult: false,
    original_language: 'en',
  },
  {
    id: 603,
    title: 'The Matrix',
    original_title: 'The Matrix',
    overview: 'Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.',
    poster_path: '/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    backdrop_path: '/easkWjhK5d7E871vE3q2J6oZf6U.jpg',
    release_date: '1999-03-30',
    vote_average: 8.2,
    vote_count: 24000,
    popularity: 90.1,
    adult: false,
    original_language: 'en',
  },
  {
    id: 155,
    title: 'The Dark Knight',
    original_title: 'The Dark Knight',
    overview: 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets.',
    poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    backdrop_path: '/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg',
    release_date: '2008-07-16',
    vote_average: 8.5,
    vote_count: 31000,
    popularity: 120.5,
    adult: false,
    original_language: 'en',
  },
  {
    id: 680,
    title: 'Pulp Fiction',
    original_title: 'Pulp Fiction',
    overview: 'A burger-loving hit man, his philosophical partner, a drug-addled gangster\'s moll and a washed-up boxer converge in this sprawling, comedic crime caper.',
    poster_path: '/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    backdrop_path: '/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg',
    release_date: '1994-09-10',
    vote_average: 8.5,
    vote_count: 26000,
    popularity: 95.0,
    adult: false,
    original_language: 'en',
  },
  {
    id: 122,
    title: 'The Lord of the Rings: The Return of the King',
    original_title: 'The Lord of the Rings: The Return of the King',
    overview: 'As armies mass for a final battle that will decide the fate of the world--and powerful, ancient forces of Light and Dark compete to determine the outcome.',
    poster_path: '/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
    backdrop_path: '/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg',
    release_date: '2003-12-01',
    vote_average: 8.5,
    vote_count: 23000,
    popularity: 98.4,
    adult: false,
    original_language: 'en',
  }
]

// ============================================
// DETAILED MOVIE DATA
// ============================================

export async function fetchMovieDetails(id: number): Promise<MovieDetails> {
  // Fetch movie with all available append_to_response options
  const movie = await fetchTMDB<MovieDetails>(`/movie/${id}`, {
    append_to_response: 'credits,videos,similar,recommendations,keywords,reviews,images,external_ids',
  })
  
  // Fetch watch providers separately as it's not included in append_to_response
  try {
    const providers = await fetchWatchProviders(id)
    return { ...movie, 'watch/providers': providers }
  } catch (error) {
    console.warn('Failed to fetch watch providers:', error)
    return movie
  }
}

export async function fetchWatchProviders(movieId: number): Promise<WatchProviders> {
  return fetchTMDB<WatchProviders>(`/movie/${movieId}/watch/providers`)
}

// ============================================
// TRAILERS & VIDEOS
// ============================================

export async function getTrailerKey(movieId: number): Promise<string | null> {
  try {
    const data = await fetchTMDB<Videos>(`/movie/${movieId}/videos`)
    
    // Priority order: Official Trailer > Trailer > Teaser
    const officialTrailer = data.results.find(
      v => v.site === 'YouTube' && v.type === 'Trailer' && v.official
    )
    if (officialTrailer) return officialTrailer.key
    
    const trailer = data.results.find(
      v => v.site === 'YouTube' && v.type === 'Trailer'
    )
    if (trailer) return trailer.key
    
    const teaser = data.results.find(
      v => v.site === 'YouTube' && v.type === 'Teaser'
    )
    return teaser?.key || null
  } catch (error) {
    console.error('Failed to fetch trailer:', error)
    return null
  }
}

// ============================================
// SEARCH
// ============================================

export async function searchMovies(query: string, page: number = 1) {
  return fetchTMDB<{ results: Movie[]; total_results: number; total_pages: number }>(
    '/search/movie',
    { query, page: String(page) }
  )
}

export async function searchMulti(query: string, page: number = 1) {
  return fetchTMDB<{ results: any[] }>(
    '/search/multi',
    { query, page: String(page) }
  )
}

// ============================================
// PEOPLE
// ============================================

export async function fetchPersonDetails(personId: number): Promise<Person> {
  return fetchTMDB<Person>(`/person/${personId}`, {
    append_to_response: 'movie_credits,tv_credits,external_ids,images',
  })
}

export async function fetchPersonMovieCredits(personId: number) {
  return fetchTMDB<{ cast: Movie[]; crew: Movie[] }>(`/person/${personId}/movie_credits`)
}

// ============================================
// GENRES
// ============================================

export async function fetchGenres() {
  const data = await fetchTMDB<{ genres: Genre[] }>('/genre/movie/list')
  return data.genres
}

// ============================================
// COLLECTIONS
// ============================================

export async function fetchCollection(collectionId: number) {
  return fetchTMDB<{
    id: number
    name: string
    overview: string
    poster_path: string
    backdrop_path: string
    parts: Movie[]
  }>(`/collection/${collectionId}`)
}

// ============================================
// RECOMMENDATIONS
// ============================================

export async function fetchSimilarMovies(movieId: number, page: number = 1) {
  const data = await fetchTMDB<{ results: Movie[] }>(`/movie/${movieId}/similar`, { page: String(page) })
  return data.results
}

export async function fetchRecommendations(movieId: number, page: number = 1) {
  const data = await fetchTMDB<{ results: Movie[] }>(`/movie/${movieId}/recommendations`, { page: String(page) })
  return data.results
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

export function formatRuntime(minutes: number): string {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function getYouTubeEmbedUrl(key: string, autoplay: boolean = false, muted: boolean = true): string {
  return `https://www.youtube.com/embed/${key}?autoplay=${autoplay ? 1 : 0}&mute=${muted ? 1 : 0}&controls=0&modestbranding=1&rel=0&loop=1&playlist=${key}`
}

export function getRating(voteAverage: number): string {
  return `${Math.round(voteAverage * 10)}%`
}

export function getCertification(releaseDate: string): string {
  // This is a simplified version - you'd need to fetch actual certification from release_dates endpoint
  const year = new Date(releaseDate).getFullYear()
  const currentYear = new Date().getFullYear()
  return currentYear - year < 1 ? 'New' : String(year)
}

// ============================================
// BATCH OPERATIONS
// ============================================

export async function fetchMultipleMovieDetails(movieIds: number[]): Promise<MovieDetails[]> {
  return Promise.all(movieIds.map(id => fetchMovieDetails(id)))
}

export async function fetchCategorizedContent() {
  const [trending, popular, nowPlaying, topRated, upcoming] = await Promise.all([
    fetchTrending('day'),
    fetchPopularMovies(),
    fetchNowPlaying(),
    fetchTopRated(),
    fetchUpcoming(),
  ])
  
  return {
    trending,
    popular,
    nowPlaying,
    topRated,
    upcoming,
  }
}