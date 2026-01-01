// 'use client'

// import {
//   Box,
//   Grid,
//   Text,
//   Image,
//   VStack,
//   HStack,
//   Badge,
//   Button,
// } from '@chakra-ui/react'
// import { MotionBox } from '@/components/shared/Motion'
// import { LuPlay, LuPlus } from 'react-icons/lu'

// interface SearchResult {
//   id: number
//   title: string
//   poster_path: string | null
//   backdrop_path: string | null
//   overview: string
//   release_date: string
//   vote_average: number
// }

// interface SearchResultsProps {
//   results: SearchResult[]
// }

// export function SearchResults({ results }: SearchResultsProps) {
//   if (!results.length) {
//     return null
//   }

//   return (
//     <Grid
//       templateColumns={{
//         base: '1fr',
//         md: 'repeat(2, 1fr)',
//         lg: 'repeat(3, 1fr)',
//         xl: 'repeat(4, 1fr)',
//       }}
//       gap={6}
//     >
//       {results.map((movie) => (
//         <MotionBox
//           key={movie.id}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 } as any}
//           whileHover={{ y: -4 }}
//         >
//           <Box className="group border border-gray-800 hover:border-gray-700 transition-colors overflow-hidden">
//             {/* Image */}
//             <Box className="relative aspect-video overflow-hidden">
//               {movie.backdrop_path ? (
//                 <Image
//                   src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
//                   alt={movie.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//               ) : (
//                 <Box className="w-full h-full bg-gray-900 flex items-center justify-center">
//                   <Text color="gray.500">No image</Text>
//                 </Box>
//               )}
              
//               {/* Overlay */}
//               <Box className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
//               {/* Actions */}
//               <HStack className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <Button
//                   size="sm"
//                   className="flex-1"
//                   onClick={() => console.log('Play', movie.id)}
//                 >
//                   <LuPlay className="mr-2" />
//                   Play
//                 </Button>
//                 <Button
//                   size="sm"
//                   variant="outline"
//                   onClick={() => console.log('Add to watchlist', movie.id)}
//                 >
//                   <LuPlus className="mr-2" />
//                   Add
//                 </Button>
//               </HStack>
//             </Box>

//             {/* Content */}
//             <VStack align="start" gap={2} p={4}>
//               <HStack justify="space-between" width="full">
//                 <Text fontWeight="medium" className="line-clamp-1">
//                   {movie.title}
//                 </Text>
//                 {movie.vote_average > 0 && (
//                   <Badge colorPalette="green" fontSize="xs">
//                     {movie.vote_average.toFixed(1)}
//                   </Badge>
//                 )}
//               </HStack>
              
//               <Text color="gray.400" fontSize="sm">
//                 {movie.release_date?.split('-')[0]}
//               </Text>
              
//               <Text color="gray.300" fontSize="sm" className="line-clamp-2">
//                 {movie.overview}
//               </Text>
//             </VStack>
//           </Box>
//         </MotionBox>
//       ))}
//     </Grid>
//   )
// }


// 'use client'

// import { motion } from 'framer-motion'
// import { Play, Plus, Star, Calendar } from 'lucide-react'

// interface SearchResult {
//   id: number
//   title: string
//   poster_path: string | null
//   backdrop_path: string | null
//   overview: string
//   release_date: string
//   vote_average: number
// }

// interface SearchResultsProps {
//   results: SearchResult[]
// }

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.05
//     }
//   }
// }

// const item = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0 }
// }

// export function SearchResults({ results }: SearchResultsProps) {
//   if (!results.length) return null

//   return (
//     <motion.div 
//       variants={container}
//       initial="hidden"
//       animate="show"
//       className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
//     >
//       {results.map((movie) => (
//         <motion.div
//           key={movie.id}
//           variants={item}
//           className="group relative bg-zinc-900/40 border border-white/5 hover:border-white/20 transition-colors duration-500 overflow-hidden cursor-pointer rounded-lg"
//           onClick={() => console.log('Navigate to', movie.id)}
//         >
//           {/* Cinematic Aspect Ratio (16:9) */}
//           <div className="aspect-video relative overflow-hidden bg-zinc-900">
//             {movie.backdrop_path || movie.poster_path ? (
//               <img
//                 src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path || movie.poster_path}`}
//                 alt={movie.title}
//                 className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
//               />
//             ) : (
//               <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900/80 gap-2">
//                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
//                     <span className="text-zinc-700 font-serif italic text-xl">?</span>
//                  </div>
//               </div>
//             )}
            
//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
            
//             {/* Hover Actions */}
//             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-3 backdrop-blur-[1px]">
//                  <button 
//                     onClick={(e) => { e.stopPropagation(); console.log('Play', movie.id); }}
//                     className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform"
//                  >
//                     <Play size={20} fill="currentColor" className="ml-0.5" />
//                  </button>
//                  <button 
//                     onClick={(e) => { e.stopPropagation(); console.log('Add', movie.id); }}
//                     className="w-12 h-12 bg-black/50 border border-white/30 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black hover:border-transparent transition-all"
//                  >
//                     <Plus size={20} />
//                  </button>
//             </div>
//           </div>

//           {/* Minimal Meta Data */}
//           <div className="p-5">
//             <div className="flex items-start justify-between mb-2">
//                 <h3 className="text-white font-medium text-lg leading-tight line-clamp-1 group-hover:text-zinc-300 transition-colors">
//                   {movie.title}
//                 </h3>
//                 {movie.vote_average > 0 && (
//                   <span className="flex items-center gap-1 text-[10px] font-bold text-green-400 bg-green-900/20 px-1.5 py-0.5 rounded border border-green-900/50">
//                      <Star size={8} fill="currentColor" />
//                      {movie.vote_average.toFixed(1)}
//                   </span>
//                 )}
//             </div>
            
//             <div className="flex items-center gap-3 text-xs text-zinc-500 mb-3">
//                 <span className="flex items-center gap-1">
//                     <Calendar size={12} />
//                     {movie.release_date?.split('-')[0] || 'TBA'}
//                 </span>
//                 <span className="w-1 h-1 rounded-full bg-zinc-700" />
//                 <span className="uppercase tracking-wide">Movie</span>
//             </div>

//             <p className="text-zinc-400 text-sm line-clamp-2 font-light leading-relaxed h-10">
//                {movie.overview || "No synopsis available for this title."}
//             </p>
//           </div>
          
//           {/* Bottom active border on hover */}
//           <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
//         </motion.div>
//       ))}
//     </motion.div>
//   )
// }



'use client'

import { motion } from 'framer-motion'
import { Play, Plus, Star, Info, Check } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

interface SearchResult {
  id: number
  title: string
  poster_path: string | null
  backdrop_path: string | null
  overview: string
  release_date: string
  vote_average: number
}

interface SearchResultsProps {
  results: SearchResult[]
}

const POSTER_BASE = 'https://image.tmdb.org/t/p/w500'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
}

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 }
}

export function SearchResults({ results }: SearchResultsProps) {
  const router = useRouter()
  // Local state to track watchlist just for the visual toggle
  const [watchlist, setWatchlist] = useState<number[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('my_watchlist')
    if (saved) setWatchlist(JSON.parse(saved))
  }, [])

  const toggleWatchlist = (e: React.MouseEvent, id: number) => {
    e.stopPropagation()
    const newList = watchlist.includes(id) 
      ? watchlist.filter(x => x !== id) 
      : [...watchlist, id]
    setWatchlist(newList)
    localStorage.setItem('my_watchlist', JSON.stringify(newList))
  }

  const handleNavigation = (id: number) => {
    router.push(`/watch/${id}`)
  }

  if (!results.length) return null

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
    >
      {results.map((movie) => (
        <motion.div
          key={movie.id}
          variants={item}
          className="group relative aspect-[2/3] w-full rounded-lg overflow-hidden bg-[#0a0a0a] cursor-pointer border border-white/5 hover:border-zinc-500 transition-colors"
          onClick={() => handleNavigation(movie.id)}
        >
          {/* Poster Image */}
          {movie.poster_path ? (
            <img
              src={`${POSTER_BASE}${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 text-zinc-700 gap-2">
               <span className="text-4xl font-serif italic opacity-20">?</span>
               <span className="text-[10px] uppercase tracking-widest opacity-40">No Poster</span>
            </div>
          )}
          
          {/* Hover Overlay (Identical to Home Card) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            
            {/* Actions Row */}
            <div className="flex gap-2 mb-3">
              <button 
                onClick={(e) => { e.stopPropagation(); handleNavigation(movie.id); }}
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              >
                <Play size={14} fill="black" className="text-black ml-0.5" />
              </button>
              
              <button 
                onClick={(e) => toggleWatchlist(e, movie.id)}
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
                className="w-8 h-8 rounded-full border-2 border-white/70 flex items-center justify-center hover:bg-white/20 transition-colors ml-auto"
              >
                <Info size={14} className="text-white" />
              </button>
            </div>
            
            {/* Meta Data */}
            <h3 className="text-white text-sm font-bold line-clamp-2 mb-2 leading-tight">
                {movie.title}
            </h3>
            
            <div className="flex items-center gap-2 text-[11px] text-zinc-300 mb-2 font-medium">
              <span className="text-green-400 font-bold flex items-center gap-1">
                 <Star size={10} fill="currentColor" />
                 {movie.vote_average > 0 ? Math.round(movie.vote_average * 10) + '%' : 'NR'}
              </span>
              <span className="w-0.5 h-0.5 bg-zinc-500 rounded-full" />
              <span>{movie.release_date?.split('-')[0] || 'TBA'}</span>
            </div>
            
            <p className="text-[10px] text-zinc-400 line-clamp-2 leading-relaxed font-light">
                {movie.overview}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}