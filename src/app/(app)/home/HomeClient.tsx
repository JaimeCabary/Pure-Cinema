// // 'use client'

// // import { useState, useEffect, useRef } from 'react'
// // import { motion, AnimatePresence } from 'framer-motion'
// // import { 
// //   Play, 
// //   Plus, 
// //   Info, 
// //   X, 
// //   ChevronRight, 
// //   ChevronLeft, 
// //   ThumbsUp, 
// //   Volume2, 
// //   VolumeX,
// //   Check
// // } from 'lucide-react'

// // // --- TYPES ---
// // interface Movie {
// //   id: number
// //   title: string
// //   poster_path: string | null
// //   backdrop_path: string | null
// //   overview: string
// //   release_date: string
// //   vote_average?: number
// //   videos?: { results: { key: string; type: string; site: string }[] }
// // }

// // // --- CONFIG ---
// // const IMAGE_BASE = 'https://image.tmdb.org/t/p/original'
// // const POSTER_BASE = 'https://image.tmdb.org/t/p/w500'

// // // --- SUB-COMPONENTS ---

// // // 1. MOVIE INFO MODAL
// // const MovieModal = ({ movie, onClose }: { movie: Movie; onClose: () => void }) => {
// //   const [videoKey, setVideoKey] = useState<string | null>(null)
// //   const [isAdded, setIsAdded] = useState(false) 

// //   useEffect(() => {
// //     // Try to find a trailer key if passed in movie object, or we could fetch here if needed
// //     const trailer = movie.videos?.results?.find(v => v.type === "Trailer" && v.site === "YouTube") 
// //                   || movie.videos?.results?.[0]
    
// //     // In a real app, you might want to fetch details here if `movie` doesn't have videos yet
// //     // For now, we assume if it's the hero, it has them. If not, we fall back to image.
// //     if (trailer) setVideoKey(trailer.key)
    
// //     document.body.style.overflow = 'hidden'
// //     return () => { document.body.style.overflow = 'unset' }
// //   }, [movie])

// //   return (
// //     <motion.div 
// //       initial={{ opacity: 0 }} 
// //       animate={{ opacity: 1 }} 
// //       exit={{ opacity: 0 }}
// //       className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
// //     >
// //       <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      
// //       <motion.div 
// //         initial={{ scale: 0.95, y: 20 }}
// //         animate={{ scale: 1, y: 0 }}
// //         exit={{ scale: 0.95, y: 20 }}
// //         className="relative w-full max-w-5xl max-h-[90vh] bg-[#121212] rounded-xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row"
// //         onClick={(e) => e.stopPropagation()}
// //       >
// //         <button 
// //           onClick={onClose}
// //           className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-white text-white hover:text-black rounded-full transition-colors"
// //         >
// //           <X size={20} />
// //         </button>

// //         {/* Left: Media/Video Area */}
// //         <div className="w-full md:w-2/3 h-[40vh] md:h-auto relative bg-black group">
// //           {videoKey ? (
// //             <iframe
// //               className="w-full h-full object-cover"
// //               src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&controls=0&modestbranding=1&rel=0`}
// //               title={movie.title}
// //               allow="autoplay; encrypted-media"
// //               allowFullScreen
// //             />
// //           ) : (
// //              <img 
// //               src={movie.backdrop_path ? `${IMAGE_BASE}${movie.backdrop_path}` : '/placeholder.jpg'} 
// //               className="w-full h-full object-cover opacity-60"
// //             />
// //           )}
// //           <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent md:bg-gradient-to-r" />
// //         </div>

// //         {/* Right: Info Area */}
// //         <div className="w-full md:w-1/3 p-8 flex flex-col overflow-y-auto bg-[#121212]">
// //           <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 leading-tight">
// //             {movie.title}
// //           </h2>
          
// //           <div className="flex items-center gap-3 text-sm text-zinc-400 mb-6">
// //             <span className="text-green-500 font-bold">{Math.round((movie.vote_average || 0) * 10)}% Match</span>
// //             <span>{movie.release_date?.split('-')[0]}</span>
// //             <span className="border border-zinc-700 px-1 rounded text-[10px] uppercase">HD</span>
// //           </div>

// //           <p className="text-zinc-300 leading-relaxed mb-8 font-light text-sm md:text-base">
// //             {movie.overview || "No synopsis available for this title."}
// //           </p>

// //           <div className="mt-auto space-y-3">
// //             <button className="w-full py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 rounded">
// //               <Play size={18} fill="black" /> Play
// //             </button>
            
// //             <div className="flex gap-3">
// //                <button 
// //                  onClick={() => setIsAdded(!isAdded)}
// //                  className={`flex-1 py-3 border font-medium uppercase tracking-wide flex items-center justify-center gap-2 rounded transition-all ${isAdded ? 'bg-green-500/10 border-green-500 text-green-500' : 'border-zinc-700 hover:border-white text-white'}`}
// //                >
// //                  {isAdded ? <Check size={18} /> : <Plus size={18} />}
// //                  {isAdded ? 'In List' : 'My List'}
// //                </button>
// //                <button className="flex-1 py-3 border border-zinc-700 hover:border-white text-white font-medium uppercase tracking-wide flex items-center justify-center gap-2 rounded transition-colors">
// //                  <ThumbsUp size={18} /> Rate
// //                </button>
// //             </div>
// //           </div>
// //         </div>
// //       </motion.div>
// //     </motion.div>
// //   )
// // }

// // // 2. MOVIE CARD
// // const MovieCard = ({ movie, onOpen }: { movie: Movie; onOpen: (m: Movie) => void }) => {
// //   return (
// //     <div 
// //       className="relative w-[150px] md:w-[220px] aspect-[2/3] flex-shrink-0 rounded-md overflow-hidden bg-zinc-900 cursor-pointer group transition-all duration-300 hover:scale-105 hover:z-20 hover:shadow-2xl border border-transparent hover:border-zinc-500"
// //       onClick={() => onOpen(movie)}
// //     >
// //       <img
// //         src={movie.poster_path ? `${POSTER_BASE}${movie.poster_path}` : '/placeholder.jpg'}
// //         alt={movie.title}
// //         className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-40"
// //         loading="lazy"
// //       />
      
// //       {/* Hover Details Overlay */}
// //       <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //         <div className="flex gap-2 mb-3">
// //            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg text-black">
// //               <Play size={12} fill="currentColor" className="ml-0.5" />
// //            </div>
// //            <div className="w-8 h-8 rounded-full border-2 border-zinc-500 flex items-center justify-center hover:border-white transition-colors">
// //               <Plus size={14} className="text-white" />
// //            </div>
// //         </div>
        
// //         <h3 className="text-sm font-bold text-white leading-tight mb-1">{movie.title}</h3>
// //         <div className="flex items-center gap-2 text-[10px] text-zinc-300 font-medium">
// //           <span className="text-green-400">{Math.round((movie.vote_average || 0) * 10)}% Match</span>
// //           <span className="w-1 h-1 bg-zinc-500 rounded-full" />
// //           <span>{movie.release_date?.split('-')[0]}</span>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // // 3. CONTENT ROW (Carousel)
// // const ContentRow = ({ title, movies, onOpen }: { title: string, movies: Movie[], onOpen: (m: Movie) => void }) => {
// //   const rowRef = useRef<HTMLDivElement>(null)

// //   const scroll = (direction: 'left' | 'right') => {
// //     if (rowRef.current) {
// //       const { scrollLeft, clientWidth } = rowRef.current
// //       const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
// //       rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
// //     }
// //   }

// //   return (
// //     <div className="mb-12 group/row relative">
// //       <div className="px-6 md:px-12 mb-4 flex items-end justify-between group/title cursor-pointer">
// //         <h2 className="text-xl md:text-2xl font-medium tracking-tight text-white group-hover/title:text-zinc-300 transition-colors">
// //             {title}
// //         </h2>
// //         <div className="text-xs font-bold uppercase tracking-widest text-zinc-600 opacity-0 group-hover/title:opacity-100 transition-opacity flex items-center gap-1">
// //             Explore All <ChevronRight size={12} />
// //         </div>
// //       </div>

// //       <div className="relative">
// //         <button 
// //           onClick={() => scroll('left')}
// //           className="absolute left-0 top-0 bottom-0 w-12 bg-black/50 z-10 flex items-center justify-center opacity-0 group-hover/row:opacity-100 hover:bg-black/80 transition-all text-white"
// //         >
// //           <ChevronLeft size={32} />
// //         </button>

// //         <div 
// //           ref={rowRef}
// //           className="flex gap-4 overflow-x-auto px-6 md:px-12 no-scrollbar scroll-smooth pb-4"
// //         >
// //           {movies.map((movie) => (
// //             <MovieCard key={movie.id} movie={movie} onOpen={onOpen} />
// //           ))}
// //         </div>

// //         <button 
// //           onClick={() => scroll('right')}
// //           className="absolute right-0 top-0 bottom-0 w-12 bg-black/50 z-10 flex items-center justify-center opacity-0 group-hover/row:opacity-100 hover:bg-black/80 transition-all text-white"
// //         >
// //           <ChevronRight size={32} />
// //         </button>
// //       </div>
// //     </div>
// //   )
// // }

// // // --- MAIN CLIENT COMPONENT ---
// // export function HomeClient({ 
// //   initialHero, 
// //   categories 
// // }: { 
// //   initialHero: Movie, 
// //   categories: Record<string, Movie[]> 
// // }) {
// //   const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
// //   const [heroMovie] = useState<Movie>(initialHero)
// //   const [isMuted, setIsMuted] = useState(true)
// //   const [showVideo, setShowVideo] = useState(false)
  
// //   // Logic to find trailer for Hero
// //   const heroTrailer = heroMovie.videos?.results?.find(v => v.type === "Trailer")?.key

// //   // Autoplay handler
// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //         setShowVideo(true)
// //     }, 2000) // Delay video start for cinematic feel
// //     return () => clearTimeout(timer)
// //   }, [])

// //   return (
// //     <div className="pb-20">
      
// //       {/* 1. HERO SECTION */}
// //       <div className="relative h-[85vh] w-full overflow-hidden">
        
// //         {/* Background Image (Immediate Load) */}
// //         <div className={`absolute inset-0 transition-opacity duration-1000 ${showVideo ? 'opacity-0' : 'opacity-100'}`}>
// //              <img 
// //                src={`${IMAGE_BASE}${heroMovie.backdrop_path}`} 
// //                alt={heroMovie.title}
// //                className="w-full h-full object-cover"
// //              />
// //         </div>

// //         {/* Background Video (Delayed Load) */}
// //         {showVideo && heroTrailer && (
// //            <div className="absolute inset-0 pointer-events-none scale-[1.35]">
// //              <iframe
// //                 className="w-full h-full object-cover opacity-60"
// //                 src={`https://www.youtube.com/embed/${heroTrailer}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&loop=1&playlist=${heroTrailer}&modestbranding=1&showinfo=0&rel=0`}
// //                 allow="autoplay; encrypted-media"
// //               />
// //            </div>
// //         )}

// //         {/* Hero Gradients */}
// //         <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent" />
// //         <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

// //         {/* Hero Content */}
// //         <div className="absolute inset-0 flex items-center px-6 md:px-12 pointer-events-none">
// //            <div className="max-w-2xl pt-20 pointer-events-auto">
// //               <motion.div
// //                 initial={{ opacity: 0, y: 30 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.8, delay: 0.2 }}
// //               >
// //                   <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 leading-[0.9]">
// //                     {heroMovie.title}
// //                   </h1>
                  
// //                   <div className="flex items-center gap-4 text-sm text-zinc-300 mb-6 font-medium">
// //                       <span className="text-green-500 font-bold">98% Match</span>
// //                       <span>{heroMovie.release_date?.split('-')[0]}</span>
// //                       <span className="bg-zinc-800 px-2 py-0.5 rounded text-xs uppercase text-zinc-400 border border-zinc-700">4K Ultra HD</span>
// //                       <span className="border border-zinc-600 px-1 rounded text-xs">5.1</span>
// //                   </div>

// //                   <p className="text-lg text-zinc-300 line-clamp-3 mb-8 font-light max-w-xl leading-relaxed">
// //                     {heroMovie.overview}
// //                   </p>

// //                   <div className="flex items-center gap-4">
// //                       <button className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-sm rounded hover:bg-zinc-200 transition-colors flex items-center gap-2">
// //                          <Play size={18} fill="black" /> Play
// //                       </button>
// //                       <button 
// //                         onClick={() => setSelectedMovie(heroMovie)}
// //                         className="px-8 py-3 bg-zinc-600/50 backdrop-blur-md text-white font-bold uppercase tracking-widest text-sm rounded hover:bg-zinc-600 transition-colors flex items-center gap-2"
// //                       >
// //                          <Info size={18} /> More Info
// //                       </button>
                      
// //                       {/* Volume Toggle */}
// //                       {showVideo && (
// //                           <button 
// //                             onClick={() => setIsMuted(!isMuted)}
// //                             className="ml-4 p-3 rounded-full border border-white/20 hover:border-white text-white/50 hover:text-white transition-all"
// //                           >
// //                              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
// //                           </button>
// //                       )}
// //                   </div>
// //               </motion.div>
// //            </div>
// //         </div>
// //       </div>

// //       {/* 2. CONTENT STACK */}
// //       <div className="relative z-10 -mt-32 space-y-4">
// //         {Object.entries(categories).map(([title, movies]) => (
// //            <ContentRow 
// //              key={title} 
// //              title={title} 
// //              movies={movies} 
// //              onOpen={setSelectedMovie} 
// //             />
// //         ))}
// //       </div>

// //       {/* 3. INFO MODAL OVERLAY */}
// //       <AnimatePresence>
// //         {selectedMovie && (
// //           <MovieModal 
// //             movie={selectedMovie} 
// //             onClose={() => setSelectedMovie(null)} 
// //           />
// //         )}
// //       </AnimatePresence>

// //     </div>
// //   )
// // }


// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { 
//   Play, Plus, X, ChevronRight, ChevronLeft, Volume2, VolumeX,
//   Check, Download, Loader2, Info, Star, Calendar
// } from 'lucide-react'
// import { fetchMovieDetails, getImageUrl, formatRuntime, type MovieDetails } from '@/lib/tmdb'

// const IMAGE_BASE = 'https://image.tmdb.org/t/p/original'
// const POSTER_BASE = 'https://image.tmdb.org/t/p/w500'

// interface Movie {
//   id: number
//   title: string
//   poster_path: string | null
//   backdrop_path: string | null
//   overview: string
//   release_date: string
//   vote_average?: number
// }

// const getTrailerKey = async (movieId: number) => {
//   try {
//     const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);
//     const data = await res.json();
//     const trailer = data.results?.find((v: any) => v.type === "Trailer" && v.site === "YouTube");
//     return trailer ? trailer.key : null;
//   } catch (e) {
//     return null;
//   }
// }

// const MovieModal = ({ movie, onClose }: { movie: Movie; onClose: () => void }) => {
//   const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null)
//   const [isLoading, setIsLoading] = useState(true)
//   const [isAdded, setIsAdded] = useState(false)
//   const [activeTab, setActiveTab] = useState<'overview' | 'cast' | 'scenes'>('overview')
  
//   useEffect(() => {
//     const loadDetails = async () => {
//       setIsLoading(true)
//       try {
//         const details = await fetchMovieDetails(movie.id)
//         setMovieDetails(details)
//       } catch (error) {
//         console.error('Failed to load movie details:', error)
//       } finally {
//         setIsLoading(false)
//       }
//     }
    
//     loadDetails()
//     document.body.style.overflow = 'hidden'
//     return () => { document.body.style.overflow = 'unset' }
//   }, [movie.id])

//   const trailer = movieDetails?.videos.results.find(v => v.site === 'YouTube' && v.type === 'Trailer')
//   const clips = movieDetails?.videos.results.filter(v => v.site === 'YouTube' && v.type === 'Clip').slice(0, 6) || []
//   const director = movieDetails?.credits.crew.find(c => c.job === 'Director')
//   const topCast = movieDetails?.credits.cast.slice(0, 8) || []
//   const backdrops = movieDetails?.images?.backdrops.slice(0, 12) || []

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//       className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4 overflow-y-auto"
//     >
//       <div className="fixed inset-0 bg-black/95 backdrop-blur-2xl" onClick={onClose} />
      
//       <motion.div 
//         initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
//         transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
//         className="relative w-full max-w-7xl my-8 md:my-0 bg-[#0a0a0a] md:rounded-xl overflow-hidden border-0 md:border md:border-white/10 shadow-2xl"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button onClick={onClose} className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-black/90 transition-all border border-white/10">
//           <X size={20} strokeWidth={1.5} />
//         </button>

//         <div className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden bg-black">
//           {trailer && !isLoading ? (
//             <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0`} allow="autoplay; encrypted-media" allowFullScreen />
//           ) : (
//             <img src={`${IMAGE_BASE}${movie.backdrop_path}`} className="absolute inset-0 w-full h-full object-cover" alt={movie.title} />
//           )}
//           <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none" />
//         </div>
        
//         <div className="relative bg-[#0a0a0a]">
//           {isLoading ? (
//             <div className="p-12 flex items-center justify-center"><Loader2 className="animate-spin text-white" size={40} /></div>
//           ) : (
//             <>
//               <div className="p-6 md:p-12 space-y-6">
//                 <div className="space-y-4">
//                   <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white leading-none">{movieDetails?.title}</h1>
                  
//                   <div className="flex flex-wrap items-center gap-4 text-sm">
//                     <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/20 border border-green-500/50 rounded-full">
//                       <Star size={14} className="text-green-400" fill="currentColor" />
//                       <span className="text-green-400 font-bold">{Math.round((movieDetails?.vote_average || 0) * 10)}% Match</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-gray-300">
//                       <Calendar size={14} />
//                       <span>{movieDetails?.release_date?.split('-')[0]}</span>
//                     </div>
//                     {movieDetails?.runtime && <span className="text-gray-300">{formatRuntime(movieDetails.runtime)}</span>}
//                     <div className="px-3 py-1 border border-white/20 rounded-full text-white/70 text-xs uppercase tracking-wider">4K Ultra HD</div>
//                   </div>
                  
//                   <div className="flex flex-wrap gap-3">
//                     <button className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:bg-gray-200 transition-colors rounded">
//                       <Play size={18} fill="currentColor" />Play Now
//                     </button>
//                     <button onClick={() => setIsAdded(!isAdded)} className={`px-6 py-3 border font-medium uppercase tracking-wide text-sm flex items-center gap-2 rounded transition-all ${isAdded ? 'bg-white/10 border-white text-white' : 'border-white/30 text-white/70 hover:border-white hover:text-white'}`}>
//                       {isAdded ? <Check size={18} /> : <Plus size={18} />}{isAdded ? 'In Watchlist' : 'Add to List'}
//                     </button>
//                     <button className="px-6 py-3 border border-white/30 text-white/70 hover:border-white hover:text-white font-medium uppercase tracking-wide text-sm flex items-center gap-2 rounded transition-all">
//                       <Download size={18} />Download
//                     </button>
//                   </div>
//                 </div>
                
//                 <div className="flex gap-6 border-b border-white/10">
//                   {(['overview', 'cast', 'scenes'] as const).map((tab) => (
//                     <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-3 text-sm uppercase tracking-wider font-medium transition-colors relative ${activeTab === tab ? 'text-white' : 'text-white/40 hover:text-white/70'}`}>
//                       {tab}{activeTab === tab && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />}
//                     </button>
//                   ))}
//                 </div>
                
//                 <AnimatePresence mode="wait">
//                   {activeTab === 'overview' && (
//                     <motion.div key="overview" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
//                       <div>
//                         <h3 className="text-xl font-bold tracking-tight mb-3">Overview</h3>
//                         <p className="text-gray-300 text-lg leading-relaxed">{movieDetails?.overview}</p>
//                       </div>
//                       <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
//                         {movieDetails?.genres && movieDetails.genres.length > 0 && <div><h4 className="text-xs uppercase tracking-wider text-white/50 mb-2">Genres</h4><p className="text-base font-medium">{movieDetails.genres.map(g => g.name).join(', ')}</p></div>}
//                         {director && <div><h4 className="text-xs uppercase tracking-wider text-white/50 mb-2">Director</h4><p className="text-base font-medium">{director.name}</p></div>}
//                         {movieDetails?.runtime && <div><h4 className="text-xs uppercase tracking-wider text-white/50 mb-2">Runtime</h4><p className="text-base font-medium">{formatRuntime(movieDetails.runtime)}</p></div>}
//                       </div>
//                     </motion.div>
//                   )}
                  
//                   {activeTab === 'cast' && (
//                     <motion.div key="cast" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
//                       <h3 className="text-xl font-bold tracking-tight mb-6">Cast</h3>
//                       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                         {topCast.map((member) => (
//                           <div key={member.id} className="group">
//                             <div className="aspect-[2/3] rounded-lg overflow-hidden bg-white/5 mb-3">
//                               {member.profile_path ? <img src={getImageUrl.profile(member.profile_path, 'w185')!} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /> : <div className="w-full h-full flex items-center justify-center text-white/30 text-xs">No Photo</div>}
//                             </div>
//                             <p className="font-medium text-sm">{member.name}</p>
//                             <p className="text-xs text-white/50">{member.character}</p>
//                           </div>
//                         ))}
//                       </div>
//                     </motion.div>
//                   )}
                  
//                   {activeTab === 'scenes' && (
//                     <motion.div key="scenes" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-8">
//                       {clips.length > 0 && (
//                         <div>
//                           <h3 className="text-xl font-bold tracking-tight mb-4">Clips & Scenes</h3>
//                           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                             {clips.map((clip) => (
//                               <div key={clip.id} className="group cursor-pointer">
//                                 <div className="relative aspect-video rounded-lg overflow-hidden bg-black border border-white/10">
//                                   <img src={`https://img.youtube.com/vi/${clip.key}/hqdefault.jpg`} alt={clip.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
//                                   <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
//                                     <Play size={32} fill="white" className="text-white" />
//                                   </div>
//                                 </div>
//                                 <p className="text-xs mt-2 line-clamp-2">{clip.name}</p>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       )}
//                       {backdrops.length > 0 && (
//                         <div>
//                           <h3 className="text-xl font-bold tracking-tight mb-4">Scenes & Images</h3>
//                           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                             {backdrops.map((image, idx) => (
//                               <div key={idx} className="aspect-video rounded-lg overflow-hidden bg-white/5">
//                                 <img src={getImageUrl.backdrop(image.file_path, 'w780')!} alt={`Scene ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer" loading="lazy" />
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       )}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
                
//                 {movieDetails?.similar.results && movieDetails.similar.results.length > 0 && (
//                   <div className="pt-6 border-t border-white/10">
//                     <h3 className="text-xl font-bold tracking-tight mb-4">More Like This</h3>
//                     <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
//                       {movieDetails.similar.results.slice(0, 6).map((similar) => (
//                         <div key={similar.id} className="group cursor-pointer">
//                           <div className="aspect-[2/3] rounded-lg overflow-hidden bg-white/5 mb-2">{similar.poster_path && <img src={getImageUrl.poster(similar.poster_path, 'w342')!} alt={similar.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />}</div>
//                           <p className="text-xs font-medium line-clamp-2">{similar.title}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </>
//           )}
//         </div>
//       </motion.div>
//     </motion.div>
//   )
// }

// const MovieCard = ({ movie, onOpen }: { movie: Movie; onOpen: (m: Movie) => void }) => {
//   const [isHovered, setIsHovered] = useState(false)
//   return (
//     <motion.div whileHover={{ scale: 1.05, zIndex: 10 }} transition={{ duration: 0.2 }} className="relative w-[140px] md:w-[200px] aspect-[2/3] flex-shrink-0 rounded-lg overflow-hidden bg-[#0a0a0a] cursor-pointer group snap-start border border-white/5" onClick={() => onOpen(movie)} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
//       <img src={movie.poster_path ? `${POSTER_BASE}${movie.poster_path}` : '/placeholder.jpg'} alt={movie.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
//       <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-300 flex flex-col justify-end p-4 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
//         <div className="flex gap-2 mb-3">
//           <button onClick={(e) => { e.stopPropagation(); }} className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"><Play size={14} fill="black" className="text-black ml-0.5" /></button>
//           <button onClick={(e) => { e.stopPropagation(); }} className="w-8 h-8 rounded-full border-2 border-white/70 flex items-center justify-center hover:bg-white/20 transition-colors"><Plus size={14} className="text-white" /></button>
//           <button onClick={(e) => { e.stopPropagation(); }} className="w-8 h-8 rounded-full border-2 border-white/70 flex items-center justify-center hover:bg-white/20 transition-colors ml-auto"><Info size={14} className="text-white" /></button>
//         </div>
//         <h3 className="text-white text-sm font-bold line-clamp-2 mb-2">{movie.title}</h3>
//         <div className="flex items-center gap-2 text-[11px] text-gray-300 mb-2">
//           <span className="text-green-400 font-bold flex items-center gap-1"><Star size={10} fill="currentColor" />{Math.round((movie.vote_average || 0) * 10)}%</span><span>•</span><span>{movie.release_date?.split('-')[0]}</span>
//         </div>
//         <p className="text-[10px] text-gray-400 line-clamp-2 leading-relaxed">{movie.overview}</p>
//       </div>
//     </motion.div>
//   )
// }

// const ContentRow = ({ title, movies, onOpen }: { title: string, movies: Movie[], onOpen: (m: Movie) => void }) => {
//   const rowRef = useRef<HTMLDivElement>(null)
//   const [canScrollLeft, setCanScrollLeft] = useState(false)
//   const [canScrollRight, setCanScrollRight] = useState(true)
//   const scroll = (direction: 'left' | 'right') => {
//     if (rowRef.current) {
//       const scrollAmount = direction === 'left' ? -600 : 600;
//       rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//       setTimeout(() => {
//         if (rowRef.current) {
//           const { scrollLeft, scrollWidth, clientWidth } = rowRef.current
//           setCanScrollLeft(scrollLeft > 10)
//           setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10)
//         }
//       }, 300)
//     }
//   }
//   return (
//     <div className="mb-8 md:mb-12 relative group/row">
//       <div className="flex items-center justify-between mb-4 px-4 md:px-12"><h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">{title}</h2></div>
//       <div className="relative group">
//         <button onClick={() => scroll('left')} disabled={!canScrollLeft} className={`hidden md:flex absolute left-2 top-0 bottom-0 w-12 bg-gradient-to-r from-[#050505] to-transparent z-20 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ${!canScrollLeft && 'opacity-0 cursor-not-allowed'}`}>
//           <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-black/80 transition-all"><ChevronLeft size={20} strokeWidth={1.5} /></div>
//         </button>
//         <div ref={rowRef} className="flex gap-3 md:gap-4 overflow-x-auto px-4 md:px-12 scrollbar-hide snap-x scroll-smooth pb-4">{movies.map((movie) => <MovieCard key={movie.id} movie={movie} onOpen={onOpen} />)}</div>
//         <button onClick={() => scroll('right')} disabled={!canScrollRight} className={`hidden md:flex absolute right-2 top-0 bottom-0 w-12 bg-gradient-to-l from-[#050505] to-transparent z-20 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ${!canScrollRight && 'opacity-0 cursor-not-allowed'}`}>
//           <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-black/80 transition-all"><ChevronRight size={20} strokeWidth={1.5} /></div>
//         </button>
//       </div>
//     </div>
//   )
// }

// export function HomeClient({ initialHeroSet, categories }: { initialHeroSet: Movie[], categories: Record<string, Movie[]> }) {
//   const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
//   const [heroIndex, setHeroIndex] = useState(0)
//   const [heroKey, setHeroKey] = useState<string | null>(null)
//   const [isMuted, setIsMuted] = useState(true)
//   const [showVideo, setShowVideo] = useState(false)
//   const [watchlist, setWatchlist] = useState<number[]>([])
//   const [downloads, setDownloads] = useState<number[]>([])
//   const [loadingDownload, setLoadingDownload] = useState<number | null>(null)
//   const currentHero = initialHeroSet[heroIndex];

//   useEffect(() => {
//     const saved = localStorage.getItem('my_watchlist')
//     if (saved) setWatchlist(JSON.parse(saved))
//   }, [])

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setHeroIndex((prev) => (prev + 1) % initialHeroSet.length);
//     }, 15000);
//     return () => clearInterval(interval);
//   }, [initialHeroSet.length]);

//   useEffect(() => {
//     setHeroKey(null);
//     setShowVideo(false);
//     if (currentHero) {
//       getTrailerKey(currentHero.id).then(key => {
//         if (key) setHeroKey(key)
//       })
//       const timer = setTimeout(() => {
//         setShowVideo(true)
//       }, 6000)
//       return () => clearTimeout(timer)
//     }
//   }, [heroIndex, currentHero]);

//   const toggleWatchlist = (id: number) => {
//     const newList = watchlist.includes(id) ? watchlist.filter(x => x !== id) : [...watchlist, id];
//     setWatchlist(newList);
//     localStorage.setItem('my_watchlist', JSON.stringify(newList));
//   }

//   const handleDownload = (id: number) => {
//     if (downloads.includes(id)) return;
//     setLoadingDownload(id);
//     setTimeout(() => {
//       setDownloads(prev => [...prev, id]);
//       setLoadingDownload(null);
//     }, 2000);
//   }

//   return (
//     <div className="pb-20 overflow-x-hidden bg-[#050505]">
//       <div className="relative h-screen w-full overflow-hidden">
//         <AnimatePresence mode='wait'>
//           <motion.div key={currentHero.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="absolute inset-0">
//             <motion.img src={`${IMAGE_BASE}${currentHero.backdrop_path}`} className="absolute inset-0 w-full h-full object-cover" alt="Hero background" animate={{ opacity: showVideo && heroKey ? 0 : 1 }} transition={{ duration: 1 }} />
//             {heroKey && (
//               <motion.div className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: showVideo ? 1 : 0 }} transition={{ duration: 1 }}>
//                 <div className="absolute inset-0 w-full h-full">
//                   <iframe className="absolute inset-0 w-full h-full pointer-events-none" style={{width: '100%', height: '100%', objectFit: 'cover'}} src={`https://www.youtube.com/embed/${heroKey}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&loop=1&playlist=${heroKey}&modestbranding=1&rel=0&playsinline=1`} allow="autoplay; encrypted-media" title="Hero video" />
//                 </div>
//               </motion.div>
//             )}
//           </motion.div>
//         </AnimatePresence>
//         <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none" />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent pointer-events-none" />
//         <div className="absolute inset-0 flex items-end justify-start px-4 md:px-12 pb-32 md:pb-48 pointer-events-none">
//           <div className="max-w-3xl pointer-events-auto space-y-4 md:space-y-6">
//             <motion.h1 key={currentHero.title} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-7xl font-extrabold tracking-tighter text-white drop-shadow-2xl leading-none">{currentHero.title}</motion.h1>
//             <div className="flex items-center gap-3 text-xs md:text-base font-medium text-gray-200">
//               <span className="text-green-400 font-bold text-sm md:text-lg">{Math.round((currentHero.vote_average || 0) * 10)}% Match</span>
//               <span>{currentHero.release_date.split('-')[0]}</span>
//               <span className="bg-white/10 backdrop-blur-md px-2 py-0.5 rounded text-[10px] uppercase border border-white/20">4K Ultra HD</span>
//             </div>
//             <p className="text-gray-300 text-sm md:text-lg line-clamp-3 max-w-xl drop-shadow-md font-light">{currentHero.overview}</p>
//             <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-2">
//               <button onClick={() => setSelectedMovie(currentHero)} className="bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded font-bold flex items-center gap-2 hover:bg-gray-200 transition active:scale-95 uppercase tracking-widest text-sm">
//                 <Play fill="black" size={20} /> Play
//               </button>
//               <button onClick={() => toggleWatchlist(currentHero.id)} className={`px-5 py-3 md:px-6 md:py-4 rounded font-semibold flex items-center gap-2 transition border uppercase tracking-wide text-sm ${watchlist.includes(currentHero.id) ? 'bg-white/10 border-white text-white' : 'bg-white/5 backdrop-blur-md border-white/20 text-white/70 hover:border-white hover:text-white'}`}>
//                 {watchlist.includes(currentHero.id) ? <Check size={20} /> : <Plus size={20} />}<span className="hidden md:inline">My List</span>
//               </button>
//               <button onClick={() => handleDownload(currentHero.id)} className="bg-white/5 backdrop-blur-md text-white p-3 md:p-4 rounded-full hover:bg-white/10 transition border border-white/10 hover:border-white/20" disabled={loadingDownload === currentHero.id || downloads.includes(currentHero.id)}>
//                 {loadingDownload === currentHero.id ? <Loader2 className="animate-spin" size={20} /> : downloads.includes(currentHero.id) ? <Check size={20} className="text-green-400" /> : <Download size={20} />}
//               </button>
//               <button onClick={() => setIsMuted(!isMuted)} className="bg-transparent text-white/70 p-3 md:p-4 rounded-full border border-white/20 hover:bg-white/5 hover:border-white/30 transition ml-auto md:ml-0">
//                 {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex-col gap-3 hidden md:flex z-50">
//           {initialHeroSet.map((_, idx) => (
//             <button key={idx} onClick={() => setHeroIndex(idx)} className={`w-1.5 rounded-full transition-all duration-500 ${idx === heroIndex ? 'h-8 bg-white' : 'h-1.5 bg-white/30 hover:bg-white/50'}`} />
//           ))}
//         </div>
//       </div>
//       <div className="relative z-20 -mt-24 md:-mt-32 space-y-4 md:space-y-8">
//         {Object.entries(categories).map(([title, movies]) => <ContentRow key={title} title={title} movies={movies} onOpen={setSelectedMovie} />)}
//       </div>
//       <AnimatePresence>{selectedMovie && <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}</AnimatePresence>
//     </div>
//   )
// }


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

const getTrailerKey = async (movieId: number) => {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);
    const data = await res.json();
    const trailer = data.results?.find((v: any) => v.type === "Trailer" && v.site === "YouTube");
    return trailer ? trailer.key : null;
  } catch (e) {
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
      className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4 overflow-y-auto"
    >
      <div className="fixed inset-0 bg-black/95 backdrop-blur-2xl" onClick={onClose} />
      
      <motion.div 
        initial={{ scale: 0.95, y: 20 }} 
        animate={{ scale: 1, y: 0 }} 
        exit={{ scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-7xl my-8 md:my-0 bg-[#0a0a0a] md:rounded-xl overflow-hidden border-0 md:border md:border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-black/90 transition-all border border-white/10"
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        {isLoading ? (
          <ModalSkeleton />
        ) : (
          <>
            <div className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden bg-black">
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none" />
            </div>
            
            <div className="relative bg-[#0a0a0a]">
              <div className="p-6 md:p-12 space-y-6">
                <div className="space-y-4">
                  <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white leading-none">
                    {movieDetails?.title}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/20 border border-green-500/50 rounded-full">
                      <Star size={14} className="text-green-400" fill="currentColor" />
                      <span className="text-green-400 font-bold">
                        {Math.round((movieDetails?.vote_average || 0) * 10)}% Match
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar size={14} />
                      <span>{movieDetails?.release_date?.split('-')[0]}</span>
                    </div>
                    {movieDetails?.runtime && (
                      <span className="text-gray-300">{formatRuntime(movieDetails.runtime)}</span>
                    )}
                    <div className="px-3 py-1 border border-white/20 rounded-full text-white/70 text-xs uppercase tracking-wider">
                      4K Ultra HD
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <button 
                      onClick={handlePlayClick}
                      className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:bg-gray-200 transition-colors rounded"
                    >
                      <Play size={18} fill="currentColor" />
                      Play Now
                    </button>
                    <button 
                      onClick={toggleWatchlist}
                      className={`px-6 py-3 border font-medium uppercase tracking-wide text-sm flex items-center gap-2 rounded transition-all ${
                        isAdded 
                          ? 'bg-white/10 border-white text-white' 
                          : 'border-white/30 text-white/70 hover:border-white hover:text-white'
                      }`}
                    >
                      {isAdded ? <Check size={18} /> : <Plus size={18} />}
                      {isAdded ? 'In Watchlist' : 'Add to List'}
                    </button>
                    <button className="px-6 py-3 border border-white/30 text-white/70 hover:border-white hover:text-white font-medium uppercase tracking-wide text-sm flex items-center gap-2 rounded transition-all">
                      <Download size={18} />
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
            </div>
          </>
        )}
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
      whileHover={{ scale: 1.05, zIndex: 10 }} 
      transition={{ duration: 0.2 }} 
      className="relative w-[140px] md:w-[200px] aspect-[2/3] flex-shrink-0 rounded-lg overflow-hidden bg-[#0a0a0a] cursor-pointer group snap-start border border-white/5" 
      onClick={() => onOpen(movie)} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={movie.poster_path ? `${POSTER_BASE}${movie.poster_path}` : '/placeholder.jpg'} 
        alt={movie.title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        loading="lazy" 
      />
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-300 flex flex-col justify-end p-4 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex gap-2 mb-3">
          <button 
            onClick={handlePlayClick}
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Play size={14} fill="black" className="text-black ml-0.5" />
          </button>
          <button 
            onClick={toggleWatchlist}
            className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
              watchlist.includes(movie.id) 
                ? 'bg-white/20 border-white' 
                : 'border-white/70 hover:bg-white/20'
            }`}
          >
            {watchlist.includes(movie.id) ? (
              <Check size={14} className="text-white" />
            ) : (
              <Plus size={14} className="text-white" />
            )}
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); onOpen(movie); }} 
            className="w-8 h-8 rounded-full border-2 border-white/70 flex items-center justify-center hover:bg-white/20 transition-colors ml-auto"
          >
            <Info size={14} className="text-white" />
          </button>
        </div>
        <h3 className="text-white text-sm font-bold line-clamp-2 mb-2">{movie.title}</h3>
        <div className="flex items-center gap-2 text-[11px] text-gray-300 mb-2">
          <span className="text-green-400 font-bold flex items-center gap-1">
            <Star size={10} fill="currentColor" />
            {Math.round((movie.vote_average || 0) * 10)}%
          </span>
          <span>•</span>
          <span>{movie.release_date?.split('-')[0]}</span>
        </div>
        <p className="text-[10px] text-gray-400 line-clamp-2 leading-relaxed">{movie.overview}</p>
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
      <div className="flex items-center justify-between mb-4 px-4 md:px-12">
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">{title}</h2>
      </div>
      <div className="relative group">
        <button 
          onClick={() => scroll('left')} 
          disabled={!canScrollLeft} 
          className={`hidden md:flex absolute left-2 top-0 bottom-0 w-12 bg-gradient-to-r from-[#050505] to-transparent z-20 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ${
            !canScrollLeft && 'opacity-0 cursor-not-allowed'
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-black/80 transition-all">
            <ChevronLeft size={20} strokeWidth={1.5} />
          </div>
        </button>
        <div 
          ref={rowRef} 
          className="flex gap-3 md:gap-4 overflow-x-auto px-4 md:px-12 scrollbar-hide snap-x scroll-smooth pb-4"
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onOpen={onOpen} />
          ))}
        </div>
        <button 
          onClick={() => scroll('right')} 
          disabled={!canScrollRight} 
          className={`hidden md:flex absolute right-2 top-0 bottom-0 w-12 bg-gradient-to-l from-[#050505] to-transparent z-20 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ${
            !canScrollRight && 'opacity-0 cursor-not-allowed'
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-black/80 transition-all">
            <ChevronRight size={20} strokeWidth={1.5} />
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
    <div className="pb-20 overflow-x-hidden bg-[#050505]">
      <div className="relative h-screen w-full overflow-hidden">
        <AnimatePresence mode='wait'>
          <motion.div 
            key={currentHero.id} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 1 }} 
            className="absolute inset-0"
          >
            <motion.img 
              src={`${IMAGE_BASE}${currentHero.backdrop_path}`} 
              className="absolute inset-0 w-full h-full object-cover" 
              alt="Hero background" 
              animate={{ opacity: showVideo && heroKey ? 0 : 1 }} 
              transition={{ duration: 1 }} 
            />
            {heroKey && (
              <motion.div 
                className="absolute inset-0" 
                initial={{ opacity: 0 }} 
                animate={{ opacity: showVideo ? 1 : 0 }} 
                transition={{ duration: 1 }}
              >
                <div className="absolute inset-0 w-full h-full">
                  <iframe 
                    className="absolute inset-0 w-full h-full pointer-events-none" 
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 flex items-end justify-start px-4 md:px-12 pb-32 md:pb-48 pointer-events-none">
          <div className="max-w-3xl pointer-events-auto space-y-4 md:space-y-6">
            <motion.h1 
              key={currentHero.title} 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              className="text-4xl md:text-7xl font-extrabold tracking-tighter text-white drop-shadow-2xl leading-none"
            >
              {currentHero.title}
            </motion.h1>
            <div className="flex items-center gap-3 text-xs md:text-base font-medium text-gray-200">
              <span className="text-green-400 font-bold text-sm md:text-lg">
                {Math.round((currentHero.vote_average || 0) * 10)}% Match
              </span>
              <span>{currentHero.release_date.split('-')[0]}</span>
              <span className="bg-white/10 backdrop-blur-md px-2 py-0.5 rounded text-[10px] uppercase border border-white/20">
                4K Ultra HD
              </span>
            </div>
            <p className="text-gray-300 text-sm md:text-lg line-clamp-3 max-w-xl drop-shadow-md font-light">
              {currentHero.overview}
            </p>
            <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-2">
              <button 
                onClick={handleHeroPlayClick}
                className="bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded font-bold flex items-center gap-2 hover:bg-gray-200 transition active:scale-95 uppercase tracking-widest text-sm"
              >
                <Play fill="black" size={20} /> Play
              </button>
              <button 
                onClick={() => toggleWatchlist(currentHero.id)} 
                className={`px-5 py-3 md:px-6 md:py-4 rounded font-semibold flex items-center gap-2 transition border uppercase tracking-wide text-sm ${
                  watchlist.includes(currentHero.id) 
                    ? 'bg-white/10 border-white text-white' 
                    : 'bg-white/5 backdrop-blur-md border-white/20 text-white/70 hover:border-white hover:text-white'
                }`}
              >
                {watchlist.includes(currentHero.id) ? <Check size={20} /> : <Plus size={20} />}
                <span className="hidden md:inline">My List</span>
              </button>
              <button 
                onClick={() => handleDownload(currentHero.id)} 
                className="bg-white/5 backdrop-blur-md text-white p-3 md:p-4 rounded-full hover:bg-white/10 transition border border-white/10 hover:border-white/20" 
                disabled={loadingDownload === currentHero.id || downloads.includes(currentHero.id)}
              >
                {loadingDownload === currentHero.id ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : downloads.includes(currentHero.id) ? (
                  <Check size={20} className="text-green-400" />
                ) : (
                  <Download size={20} />
                )}
              </button>
              <button 
                onClick={() => setIsMuted(!isMuted)} 
                className="bg-transparent text-white/70 p-3 md:p-4 rounded-full border border-white/20 hover:bg-white/5 hover:border-white/30 transition ml-auto md:ml-0"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex-col gap-3 hidden md:flex z-50">
          {initialHeroSet.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setHeroIndex(idx)} 
              className={`w-1.5 rounded-full transition-all duration-500 ${
                idx === heroIndex ? 'h-8 bg-white' : 'h-1.5 bg-white/30 hover:bg-white/50'
              }`} 
            />
          ))}
        </div>
      </div>
      <div className="relative z-20 -mt-24 md:-mt-32 space-y-4 md:space-y-8">
        {Object.entries(categories).map(([title, movies]) => (
          <ContentRow key={title} title={title} movies={movies} onOpen={setSelectedMovie} />
        ))}
      </div>
      <AnimatePresence>
        {selectedMovie && <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
      </AnimatePresence>
    </div>
  )
}