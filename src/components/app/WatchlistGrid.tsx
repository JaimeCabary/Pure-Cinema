// 'use client'

// import { Grid, Text, Box } from '@chakra-ui/react'
// import { Card } from '@/components/ui/Card'

// interface WatchlistItem {
//   id: string
//   movieId: string
//   movieTitle: string
//   posterPath?: string
//   addedAt: Date
// }

// interface WatchlistGridProps {
//   items: WatchlistItem[]
// }

// export function WatchlistGrid({ items }: WatchlistGridProps) {
//   if (!items.length) {
//     return (
//       <Box className="text-center py-12">
//         <Text color="gray.500">Your watchlist is empty</Text>
//       </Box>
//     )
//   }

//   return (
//     <Grid
//       templateColumns={{
//         base: 'repeat(2, 1fr)',
//         md: 'repeat(3, 1fr)',
//         lg: 'repeat(4, 1fr)',
//         xl: 'repeat(5, 1fr)',
//       }}
//       gap={6}
//     >
//       {items.map((item) => (
//         <Card
//           key={item.id}
//           title={item.movieTitle}
//           description={`Added ${new Date(item.addedAt).toLocaleDateString()}`}
//           imageSrc={item.posterPath ? `https://image.tmdb.org/t/p/w342${item.posterPath}` : undefined}
//         />
//       ))}
//     </Grid>
//   )
// }



'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Play, Trash2, Info, Star } from 'lucide-react'

const POSTER_BASE = 'https://image.tmdb.org/t/p/w500'

interface WatchlistItem {
  id: number
  title: string
  poster_path: string | null
  backdrop_path: string | null
  overview: string
  release_date: string
  vote_average?: number
}

const WatchlistCardSkeleton = () => (
  <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 animate-pulse">
    <div className="absolute inset-0 bg-white/5" />
  </div>
)

interface WatchlistGridProps {
  items: WatchlistItem[]
}

export function WatchlistGrid({ items: initialItems }: WatchlistGridProps) {
  const router = useRouter()
  const [items, setItems] = useState(initialItems)
  const [removingId, setRemovingId] = useState<number | null>(null)

  const handleRemove = (id: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setRemovingId(id)
    
    // Update localStorage
    const saved = localStorage.getItem('my_watchlist')
    if (saved) {
      const watchlist = JSON.parse(saved)
      const newList = watchlist.filter((movieId: number) => movieId !== id)
      localStorage.setItem('my_watchlist', JSON.stringify(newList))
    }
    
    // Animate out then remove
    setTimeout(() => {
      setItems(prev => prev.filter(item => item.id !== id))
      setRemovingId(null)
    }, 300)
  }

  const handlePlayClick = (id: number, e: React.MouseEvent) => {
    e.stopPropagation()
    router.push(`/watch/${id}`)
  }

  const handleInfoClick = (id: number) => {
    // This could open a modal or navigate to details
    router.push(`/?movie=${id}`)
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-20 border border-gray-800 rounded-lg">
        <p className="text-gray-400 mb-4 text-lg">Your watchlist is empty</p>
        <button 
          onClick={() => router.push('/')}
          className="px-6 py-3 border border-gray-600 hover:border-gray-400 transition-colors rounded"
        >
          Browse Movies
        </button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
      {items.map((item) => (
        <motion.div
          key={item.id}
          layout
          initial={{ opacity: 1, scale: 1 }}
          animate={{ 
            opacity: removingId === item.id ? 0 : 1,
            scale: removingId === item.id ? 0.8 : 1 
          }}
          transition={{ duration: 0.3 }}
          className="group relative cursor-pointer"
          onClick={() => handleInfoClick(item.id)}
        >
          <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-[#0a0a0a] border border-white/5">
            {item.poster_path ? (
              <img 
                src={`${POSTER_BASE}${item.poster_path}`} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/30 text-sm">
                No Poster
              </div>
            )}
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <div className="flex gap-2 mb-3">
                <button 
                  onClick={(e) => handlePlayClick(item.id, e)}
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform"
                  title="Play"
                >
                  <Play size={14} fill="black" className="text-black ml-0.5" />
                </button>
                <button 
                  onClick={(e) => handleRemove(item.id, e)}
                  className="w-8 h-8 rounded-full border-2 border-red-500/70 flex items-center justify-center hover:bg-red-500/20 transition-colors"
                  title="Remove from watchlist"
                >
                  <Trash2 size={14} className="text-red-400" />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); handleInfoClick(item.id); }}
                  className="w-8 h-8 rounded-full border-2 border-white/70 flex items-center justify-center hover:bg-white/20 transition-colors ml-auto"
                  title="More info"
                >
                  <Info size={14} className="text-white" />
                </button>
              </div>
              <h3 className="text-white text-sm font-bold line-clamp-2 mb-2">
                {item.title}
              </h3>
              <div className="flex items-center gap-2 text-[11px] text-gray-300">
                <span className="text-green-400 font-bold flex items-center gap-1">
                  <Star size={10} fill="currentColor" />
                  {Math.round((item.vote_average || 0) * 10)}%
                </span>
                <span>•</span>
                <span>{item.release_date?.split('-')[0]}</span>
              </div>
            </div>
          </div>
          
          {/* Title below (visible on mobile) */}
          <div className="mt-2 md:hidden">
            <h3 className="text-white text-sm font-medium line-clamp-2">{item.title}</h3>
            <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
              <span className="text-green-400 font-bold">
                {Math.round((item.vote_average || 0) * 10)}%
              </span>
              <span>•</span>
              <span>{item.release_date?.split('-')[0]}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Loading skeleton for the grid
export function WatchlistGridSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
      {Array.from({ length: 10 }).map((_, i) => (
        <WatchlistCardSkeleton key={i} />
      ))}
    </div>
  )
}