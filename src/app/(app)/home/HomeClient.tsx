'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { 
  Play, Plus, X, ChevronRight, ChevronLeft, Volume2, VolumeX,
  Check, Download, Loader2, Info, Star, Calendar
} from 'lucide-react'
import { fetchMovieDetails, getImageUrl, formatRuntime, type MovieDetails } from '@/lib/tmdb'

const IMAGE_BASE = 'https://image.tmdb.org/t/p/original'
const POSTER_BASE = 'https://image.tmdb.org/t/p/w500'

interface Movie {
  id: number
  title: string
  poster_path: string | null
  backdrop_path: string | null
  overview: string
  release_date: string
  vote_average?: number
}

const trailerCache = new Map<number, string | null>()

const getTrailerKey = async (movieId: number) => {
  if (trailerCache.has(movieId)) return trailerCache.get(movieId) || null
  try {
    const key = process.env.NEXT_PUBLIC_TMDB_API_KEY || '119f057993052814896eff7bb55e03db'
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}`, {
      signal: AbortSignal.timeout(2000)
    });
    if (!res.ok) {
      trailerCache.set(movieId, null)
      return null
    }
    const data = await res.json();
    const trailer = data.results?.find((v: any) => (v.type === "Trailer" || v.type === "Teaser") && v.site === "YouTube");
    const result = trailer ? trailer.key : null
    trailerCache.set(movieId, result)
    return result;
  } catch (e) {
    trailerCache.set(movieId, null)
    return null;
  }
}

// Skeleton loader components
const ModalSkeleton = () => (
  <div className="relative w-full max-w-7xl my-8 md:my-0 bg-[#0a0a0a] md:rounded-xl overflow-hidden border-0 md:border md:border-white/10 shadow-2xl">
    <div className="relative w-full h-[50vh] md:h-[80vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 animate-pulse" />
    <div className="p-6 md:p-12 space-y-6">
      <div className="space-y-4">
        <div className="h-12 md:h-16 bg-white/5 rounded-lg w-3/4 animate-pulse" />
        <div className="flex flex-wrap gap-4">
          <div className="h-8 w-24 bg-white/5 rounded-full animate-pulse" />
          <div className="h-8 w-20 bg-white/5 rounded-full animate-pulse" />
          <div className="h-8 w-28 bg-white/5 rounded-full animate-pulse" />
        </div>
        <div className="flex gap-3">
          <div className="h-12 w-32 bg-white/10 rounded animate-pulse" />
          <div className="h-12 w-32 bg-white/10 rounded animate-pulse" />
          <div className="h-12 w-32 bg-white/10 rounded animate-pulse" />
        </div>
      </div>
      <div className="space-y-3">
        <div className="h-4 bg-white/5 rounded w-full animate-pulse" />
        <div className="h-4 bg-white/5 rounded w-5/6 animate-pulse" />
        <div className="h-4 bg-white/5 rounded w-4/6 animate-pulse" />
      </div>
      <div className="grid md:grid-cols-3 gap-6 pt-6">
        <div className="h-16 bg-white/5 rounded animate-pulse" />
        <div className="h-16 bg-white/5 rounded animate-pulse" />
        <div className="h-16 bg-white/5 rounded animate-pulse" />
      </div>
    </div>
  </div>
)

const MovieModal = ({ movie, onClose }: { movie: Movie; onClose: () => void }) => {
  const router = useRouter()
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isAdded, setIsAdded] = useState(false)
  const [activeTab, setActiveTab] = useState<'overview' | 'cast' | 'scenes'>('overview')
  const [watchlist, setWatchlist] = useState<number[]>([])
  
  useEffect(() => {
    const saved = localStorage.getItem('my_watchlist')
    if (saved) {
      const list = JSON.parse(saved)
      setWatchlist(list)
      setIsAdded(list.includes(movie.id))
    }
  }, [movie.id])

  useEffect(() => {
    const loadDetails = async () => {
      setIsLoading(true)
      try {
        const details = await fetchMovieDetails(movie.id)
        setMovieDetails(details)
      } catch (error) {
        console.error('Failed to load movie details:', error)
      } finally {
        setIsLoading(false)
      }
    }
    
    loadDetails()
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  }, [movie.id])

  const toggleWatchlist = () => {
    const newList = watchlist.includes(movie.id) 
      ? watchlist.filter(x => x !== movie.id) 
      : [...watchlist, movie.id]
    setWatchlist(newList)
    setIsAdded(!isAdded)
    localStorage.setItem('my_watchlist', JSON.stringify(newList))
  }

  const handlePlayClick = () => {
    router.push(`/watch/${movie.id}`)
  }

  const trailer = movieDetails?.videos.results.find(v => v.site === 'YouTube' && v.type === 'Trailer')
  const clips = movieDetails?.videos.results.filter(v => v.site === 'YouTube' && v.type === 'Clip').slice(0, 6) || []
  const director = movieDetails?.credits.crew.find(c => c.job === 'Director')
  const topCast = movieDetails?.credits.cast.slice(0, 8) || []
  const backdrops = movieDetails?.images?.backdrops.slice(0, 12) || []

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8"
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/85 backdrop-blur-xl" onClick={onClose} />
      
      {/* Modal Dialog */}
      <motion.div 
        initial={{ scale: 0.95, y: 15 }} 
        animate={{ scale: 1, y: 0 }} 
        exit={{ scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-4xl max-h-[88vh] bg-[#0c0c0e] rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button 
          onClick={onClose} 
          aria-label="Close preview"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/80 hover:bg-black text-white/80 hover:text-white flex items-center justify-center transition-all border border-white/20 shadow-lg"
        >
          <X size={18} strokeWidth={2} />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto overscroll-contain flex-1">
          {isLoading ? (
            <ModalSkeleton />
          ) : (
            <>
              {/* Header Media Banner */}
              <div className="relative w-full aspect-video max-h-[300px] sm:max-h-[380px] md:max-h-[420px] bg-black overflow-hidden flex-shrink-0">
                {trailer ? (
                  <iframe 
                    className="absolute inset-0 w-full h-full" 
                    src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0`} 
                    allow="autoplay; encrypted-media" 
                    allowFullScreen 
                  />
                ) : (
                  <img 
                    src={`${IMAGE_BASE}${movie.backdrop_path}`} 
                    className="absolute inset-0 w-full h-full object-cover" 
                    alt={movie.title} 
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/30 to-transparent pointer-events-none" />
              </div>
              
              {/* Modal Body */}
              <div className="p-5 sm:p-7 md:p-8 space-y-6">
                <div className="space-y-4">
                  <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                    {movieDetails?.title || movie.title}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/20 border border-emerald-500/40 rounded-full">
                      <Star size={13} className="text-emerald-400" fill="currentColor" />
                      <span className="text-emerald-400 font-bold">
                        {Math.round((movieDetails?.vote_average || movie.vote_average || 0) * 10)}% Match
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-300">
                      <Calendar size={13} />
                      <span>{movieDetails?.release_date?.split('-')[0] || movie.release_date?.split('-')[0]}</span>
                    </div>
                    {movieDetails?.runtime ? (
                      <span className="text-zinc-300">{formatRuntime(movieDetails.runtime)}</span>
                    ) : null}
                    <div className="px-2.5 py-0.5 border border-white/20 rounded-full text-zinc-300 text-[10px] uppercase font-bold tracking-wider">
                      4K Ultra HD
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    <button 
                      onClick={handlePlayClick}
                      className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-black font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2 hover:bg-zinc-200 transition-colors rounded-lg shadow-md"
                    >
                      <Play size={16} fill="currentColor" />
                      Play Now
                    </button>
                    <button 
                      onClick={toggleWatchlist}
                      className={`px-5 sm:px-6 py-2.5 sm:py-3 border font-semibold uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2 rounded-lg transition-all ${
                        isAdded 
                          ? 'bg-white/10 border-white text-white' 
                          : 'border-white/20 text-zinc-300 hover:border-white hover:text-white'
                      }`}
                    >
                      {isAdded ? <Check size={16} /> : <Plus size={16} />}
                      {isAdded ? 'In Watchlist' : 'Add to List'}
                    </button>
                    <button className="px-5 sm:px-6 py-2.5 sm:py-3 border border-white/20 text-zinc-300 hover:border-white hover:text-white font-semibold uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2 rounded-lg transition-all">
                      <Download size={16} />
                      Download
                    </button>
                  </div>
                </div>
                
                <div className="flex gap-6 border-b border-white/10">
                  {(['overview', 'cast', 'scenes'] as const).map((tab) => (
                    <button 
                      key={tab} 
                      onClick={() => setActiveTab(tab)} 
                      className={`pb-3 text-sm uppercase tracking-wider font-medium transition-colors relative ${
                        activeTab === tab ? 'text-white' : 'text-white/40 hover:text-white/70'
                      }`}
                    >
                      {tab}
                      {activeTab === tab && (
                        <motion.div 
                          layoutId="activeTab" 
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" 
                        />
                      )}
                    </button>
                  ))}
                </div>
                
                <AnimatePresence mode="wait">
                  {activeTab === 'overview' && (
                    <motion.div 
                      key="overview" 
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: -10 }} 
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-xl font-bold tracking-tight mb-3">Overview</h3>
                        <p className="text-gray-300 text-lg leading-relaxed">{movieDetails?.overview}</p>
                      </div>
                      <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                        {movieDetails?.genres && movieDetails.genres.length > 0 && (
                          <div>
                            <h4 className="text-xs uppercase tracking-wider text-white/50 mb-2">Genres</h4>
                            <p className="text-base font-medium">{movieDetails.genres.map(g => g.name).join(', ')}</p>
                          </div>
                        )}
                        {director && (
                          <div>
                            <h4 className="text-xs uppercase tracking-wider text-white/50 mb-2">Director</h4>
                            <p className="text-base font-medium">{director.name}</p>
                          </div>
                        )}
                        {movieDetails?.runtime && (
                          <div>
                            <h4 className="text-xs uppercase tracking-wider text-white/50 mb-2">Runtime</h4>
                            <p className="text-base font-medium">{formatRuntime(movieDetails.runtime)}</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                  
                  {activeTab === 'cast' && (
                    <motion.div 
                      key="cast" 
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <h3 className="text-xl font-bold tracking-tight mb-6">Cast</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {topCast.map((member) => (
                          <div key={member.id} className="group">
                            <div className="aspect-[2/3] rounded-lg overflow-hidden bg-white/5 mb-3">
                              {member.profile_path ? (
                                <img 
                                  src={getImageUrl.profile(member.profile_path, 'w185')!} 
                                  alt={member.name} 
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-white/30 text-xs">
                                  No Photo
                                </div>
                              )}
                            </div>
                            <p className="font-medium text-sm">{member.name}</p>
                            <p className="text-xs text-white/50">{member.character}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  
                  {activeTab === 'scenes' && (
                    <motion.div 
                      key="scenes" 
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: -10 }} 
                      className="space-y-8"
                    >
                      {clips.length > 0 && (
                        <div>
                          <h3 className="text-xl font-bold tracking-tight mb-4">Clips & Scenes</h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {clips.map((clip) => (
                              <div key={clip.id} className="group cursor-pointer">
                                <div className="relative aspect-video rounded-lg overflow-hidden bg-black border border-white/10">
                                  <img 
                                    src={`https://img.youtube.com/vi/${clip.key}/hqdefault.jpg`} 
                                    alt={clip.name} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                                  />
                                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Play size={32} fill="white" className="text-white" />
                                  </div>
                                </div>
                                <p className="text-xs mt-2 line-clamp-2">{clip.name}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {backdrops.length > 0 && (
                        <div>
                          <h3 className="text-xl font-bold tracking-tight mb-4">Scenes & Images</h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {backdrops.map((image, idx) => (
                              <div key={idx} className="aspect-video rounded-lg overflow-hidden bg-white/5">
                                <img 
                                  src={getImageUrl.backdrop(image.file_path, 'w780')!} 
                                  alt={`Scene ${idx + 1}`} 
                                  className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer" 
                                  loading="lazy" 
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {movieDetails?.similar.results && movieDetails.similar.results.length > 0 && (
                  <div className="pt-6 border-t border-white/10">
                    <h3 className="text-xl font-bold tracking-tight mb-4">More Like This</h3>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                      {movieDetails.similar.results.slice(0, 6).map((similar) => (
                        <div key={similar.id} className="group cursor-pointer">
                          <div className="aspect-[2/3] rounded-lg overflow-hidden bg-white/5 mb-2">
                            {similar.poster_path && (
                              <img 
                                src={getImageUrl.poster(similar.poster_path, 'w342')!} 
                                alt={similar.title} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                              />
                            )}
                          </div>
                          <p className="text-xs font-medium line-clamp-2">{similar.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

const MovieCard = ({ movie, onOpen }: { movie: Movie; onOpen: (m: Movie) => void }) => {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)
  const [watchlist, setWatchlist] = useState<number[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('my_watchlist')
    if (saved) setWatchlist(JSON.parse(saved))
  }, [])

  const toggleWatchlist = (e: React.MouseEvent) => {
    e.stopPropagation()
    const newList = watchlist.includes(movie.id) 
      ? watchlist.filter(x => x !== movie.id) 
      : [...watchlist, movie.id]
    setWatchlist(newList)
    localStorage.setItem('my_watchlist', JSON.stringify(newList))
  }

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    router.push(`/watch/${movie.id}`)
  }

  return (
    <motion.div 
      whileHover={{ y: -4, scale: 1.02 }} 
      transition={{ duration: 0.2 }} 
      className="relative w-[150px] sm:w-[180px] md:w-[220px] aspect-[2/3] flex-shrink-0 rounded-md overflow-hidden bg-zinc-900 cursor-pointer group snap-start border border-zinc-800/80 hover:border-zinc-500 shadow-md" 
      onClick={() => onOpen(movie)} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={movie.poster_path ? `${POSTER_BASE}${movie.poster_path}` : '/placeholder.jpg'} 
        alt={movie.title} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
        loading="lazy" 
      />
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-200 flex flex-col justify-end p-4 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex items-center gap-2 mb-3">
          <button 
            onClick={handlePlayClick}
            className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-transform active:scale-95 shadow-md"
            title="Play Movie"
          >
            <Play size={15} fill="black" className="ml-0.5" />
          </button>
          <button 
            onClick={toggleWatchlist}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
              watchlist.includes(movie.id) 
                ? 'bg-white/20 border-white text-white' 
                : 'border-zinc-500 hover:border-white text-zinc-300 hover:text-white bg-black/40'
            }`}
            title="Watchlist"
          >
            {watchlist.includes(movie.id) ? (
              <Check size={15} className="text-white" />
            ) : (
              <Plus size={15} />
            )}
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onOpen(movie); }} 
            className="w-9 h-9 rounded-full border border-zinc-500 hover:border-white text-zinc-300 hover:text-white flex items-center justify-center bg-black/40 transition-all ml-auto"
            title="More Info"
          >
            <Info size={15} />
          </button>
        </div>
        <h3 className="text-white text-sm font-bold line-clamp-1 mb-1">{movie.title}</h3>
        <div className="flex items-center gap-2 text-[11px] text-zinc-400">
          <span className="text-emerald-400 font-bold flex items-center gap-1">
            <Star size={10} fill="currentColor" />
            {Math.round((movie.vote_average || 0) * 10)}%
          </span>
          <span>•</span>
          <span>{movie.release_date?.split('-')[0] || '2026'}</span>
        </div>
      </div>
    </motion.div>
  )
}

const ContentRow = ({ title, movies, onOpen }: { title: string, movies: Movie[], onOpen: (m: Movie) => void }) => {
  const rowRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  
  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const scrollAmount = direction === 'left' ? -600 : 600;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(() => {
        if (rowRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = rowRef.current
          setCanScrollLeft(scrollLeft > 10)
          setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10)
        }
      }, 300)
    }
  }
  
  return (
    <div className="mb-8 md:mb-12 relative group/row">
      <div className="flex items-center justify-between mb-3 px-6 md:px-14">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">{title}</h2>
      </div>
      <div className="relative group">
        <button 
          onClick={() => scroll('left')} 
          disabled={!canScrollLeft} 
          className={`hidden md:flex absolute left-4 top-0 bottom-0 w-12 z-20 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ${
            !canScrollLeft && 'opacity-0 cursor-not-allowed'
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-black/80 border border-zinc-700 text-white flex items-center justify-center hover:bg-black transition-all shadow-xl">
            <ChevronLeft size={20} strokeWidth={2} />
          </div>
        </button>
        <div 
          ref={rowRef} 
          className="flex gap-4 overflow-x-auto px-6 md:px-14 scrollbar-hide snap-x scroll-smooth pb-4"
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onOpen={onOpen} />
          ))}
        </div>
        <button 
          onClick={() => scroll('right')} 
          disabled={!canScrollRight} 
          className={`hidden md:flex absolute right-4 top-0 bottom-0 w-12 z-20 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ${
            !canScrollRight && 'opacity-0 cursor-not-allowed'
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-black/80 border border-zinc-700 text-white flex items-center justify-center hover:bg-black transition-all shadow-xl">
            <ChevronRight size={20} strokeWidth={2} />
          </div>
        </button>
      </div>
    </div>
  )
}

export function HomeClient({ initialHeroSet, categories }: { initialHeroSet: Movie[], categories: Record<string, Movie[]> }) {
  const router = useRouter()
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  const [heroIndex, setHeroIndex] = useState(0)
  const [heroKey, setHeroKey] = useState<string | null>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [showVideo, setShowVideo] = useState(false)
  const [watchlist, setWatchlist] = useState<number[]>([])
  const [downloads, setDownloads] = useState<number[]>([])
  const [loadingDownload, setLoadingDownload] = useState<number | null>(null)
  const currentHero = initialHeroSet[heroIndex];

  useEffect(() => {
    const saved = localStorage.getItem('my_watchlist')
    if (saved) setWatchlist(JSON.parse(saved))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % initialHeroSet.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [initialHeroSet.length]);

  useEffect(() => {
    setHeroKey(null);
    setShowVideo(false);
    if (currentHero) {
      getTrailerKey(currentHero.id).then(key => {
        if (key) setHeroKey(key)
      })
      const timer = setTimeout(() => {
        setShowVideo(true)
      }, 6000)
      return () => clearTimeout(timer)
    }
  }, [heroIndex, currentHero]);

  const toggleWatchlist = (id: number) => {
    const newList = watchlist.includes(id) ? watchlist.filter(x => x !== id) : [...watchlist, id];
    setWatchlist(newList);
    localStorage.setItem('my_watchlist', JSON.stringify(newList));
  }

  const handleDownload = (id: number) => {
    if (downloads.includes(id)) return;
    setLoadingDownload(id);
    setTimeout(() => {
      setDownloads(prev => [...prev, id]);
      setLoadingDownload(null);
    }, 2000);
  }

  const handleHeroPlayClick = () => {
    router.push(`/watch/${currentHero.id}`)
  }

  return (
    <div className="pb-24 overflow-x-hidden bg-[#050505] font-scoredream">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] sm:min-h-[88vh] md:min-h-[94vh] w-full overflow-hidden bg-black flex flex-col justify-end">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentHero.id} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.8 }} 
            className="absolute inset-0"
          >
            <motion.img 
              src={`${IMAGE_BASE}${currentHero.backdrop_path}`} 
              className="absolute inset-0 w-full h-full object-cover object-center" 
              alt="Hero background" 
              animate={{ opacity: showVideo && heroKey ? 0 : 1 }} 
              transition={{ duration: 0.8 }} 
            />
            {heroKey && (
              <motion.div 
                className="absolute inset-0" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: showVideo ? 1 : 0 }} 
                transition={{ duration: 0.8 }}
              >
                <div className="absolute inset-0 w-full h-full">
                  <iframe 
                    className="absolute inset-0 w-full h-full pointer-events-none scale-105" 
                    style={{width: '100%', height: '100%', objectFit: 'cover'}} 
                    src={`https://www.youtube.com/embed/${heroKey}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&loop=1&playlist=${heroKey}&modestbranding=1&rel=0&playsinline=1`} 
                    allow="autoplay; encrypted-media" 
                    title="Hero video" 
                  />
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Ambient Top Shadow Mask for Navbar Readability */}
        <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-black/95 via-black/50 to-transparent pointer-events-none z-10" />

        {/* Bottom & Left Gradient Masks */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent pointer-events-none z-10" />
        
        {/* Hero Content Container with guaranteed top spacing under navbar */}
        <div className="relative z-20 w-full max-w-4xl px-6 md:px-14 pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 md:pb-28 space-y-4 md:space-y-5">
          <motion.h1 
            key={currentHero.title} 
            initial={{ y: 15, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.3 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white drop-shadow-2xl leading-[1.05]"
          >
            {currentHero.title}
          </motion.h1>

          <div className="flex items-center gap-3 text-xs md:text-sm font-semibold text-zinc-300">
            <span className="text-emerald-400 font-bold">
              {Math.round((currentHero.vote_average || 0) * 10)}% Match
            </span>
            <span>{currentHero.release_date ? currentHero.release_date.split('-')[0] : '2026'}</span>
            <span className="border border-zinc-700 bg-zinc-900/60 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider text-zinc-300">
              4K ULTRA HD
            </span>
            <span className="border border-zinc-700 bg-zinc-900/60 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider text-zinc-300">
              5.1 AUDIO
            </span>
          </div>

          <p className="text-zinc-300 text-xs sm:text-sm md:text-base line-clamp-3 max-w-xl font-light leading-relaxed">
            {currentHero.overview}
          </p>

          <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-2">
            <button 
              onClick={handleHeroPlayClick}
              className="bg-white text-black px-7 py-3 md:px-9 md:py-3.5 rounded-md font-extrabold flex items-center gap-2 hover:bg-zinc-200 transition active:scale-95 uppercase tracking-wider text-xs md:text-sm shadow-2xl"
            >
              <Play fill="black" size={16} /> PLAY
            </button>
            
            <button 
              onClick={() => toggleWatchlist(currentHero.id)} 
              className={`px-6 py-3 md:px-7 md:py-3.5 rounded-md font-bold flex items-center gap-2 transition border uppercase tracking-wider text-xs md:text-sm ${
                watchlist.includes(currentHero.id) 
                  ? 'bg-white/20 border-white text-white' 
                  : 'bg-zinc-900/80 border-zinc-700 text-white hover:border-white'
              }`}
            >
              {watchlist.includes(currentHero.id) ? <Check size={16} /> : <Plus size={16} />}
              <span>MY LIST</span>
            </button>

            <button 
              onClick={() => handleDownload(currentHero.id)} 
              className="bg-zinc-900/80 text-white p-3 md:p-3.5 rounded-md hover:bg-zinc-800 transition border border-zinc-700 hover:border-white" 
              disabled={loadingDownload === currentHero.id || downloads.includes(currentHero.id)}
              title="Download for offline"
            >
              {loadingDownload === currentHero.id ? (
                <Loader2 className="animate-spin" size={16} />
              ) : downloads.includes(currentHero.id) ? (
                <Check size={16} className="text-emerald-400" />
              ) : (
                <Download size={16} />
              )}
            </button>

            <button 
              onClick={() => setIsMuted(!isMuted)} 
              className="bg-zinc-900/80 text-white p-3 md:p-3.5 rounded-md border border-zinc-700 hover:border-white transition ml-auto md:ml-0"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex-col gap-3 hidden md:flex z-30">
          {initialHeroSet.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setHeroIndex(idx)} 
              className={`w-1 rounded-full transition-all duration-300 ${
                idx === heroIndex ? 'h-8 bg-white' : 'h-2 bg-zinc-700 hover:bg-zinc-500'
              }`} 
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Categories / Content Rows */}
      <div className="relative z-20 -mt-16 md:-mt-24 space-y-6 md:space-y-10">
        {Object.entries(categories).map(([title, movies]) => (
          <ContentRow key={title} title={title} movies={movies} onOpen={setSelectedMovie} />
        ))}
      </div>

      {/* Movie Modal */}
      <AnimatePresence>
        {selectedMovie && <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
      </AnimatePresence>
    </div>
  )
}