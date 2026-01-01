'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

function VideoRow({ 
  movies, 
  duration = 40, 
  reverse = false 
}: { 
  movies: any[]
  duration?: number
  reverse?: boolean 
}) {
  return (
    <div className="flex gap-6 overflow-hidden w-full relative">
      {/* The Mask Gradient to fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-20" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-20" />

      <motion.div
        initial={{ x: reverse ? -1000 : 0 }}
        animate={{ x: reverse ? 0 : -1000 }}
        transition={{
          repeat: Infinity,
          duration: duration,
          ease: "linear",
        }}
        className="flex gap-6 min-w-max"
      >
        {/* Quadruple the list for seamless infinite scroll */}
        {[...movies, ...movies, ...movies, ...movies].map((movie, i) => (
          <div 
            key={`${movie.id}-${i}`} 
            className="relative w-[400px] h-[225px] flex-shrink-0 rounded-xl overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl group"
          >
            {/* The Cinematic Backdrop */}
            <Image
              src={movie.backdrop_path 
                ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
                : '/images/hero-poster.jpg'} // Fallback image
              alt={movie.title || 'Cinematic'}
              fill
              className="object-cover opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            
            {/* "Play" Overlay Effect */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <div className="w-0 h-0 border-l-[10px] border-l-white border-y-[6px] border-y-transparent ml-1" />
               </div>
            </div>
            
            {/* Title Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black via-black/80 to-transparent opacity-60" />
            <span className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
               {movie.title}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function HeroVideoCarousel({ movies }: { movies: any[] }) {
  // Filter for valid backdrops
  const validMovies = movies.filter(m => m.backdrop_path)
  
  // Split into 3 rows
  const row1 = validMovies.slice(0, 5)
  const row2 = validMovies.slice(5, 10)
  const row3 = validMovies.slice(10, 15)

  return (
    <div className="absolute inset-0 overflow-hidden bg-black flex items-center justify-center pointer-events-none select-none">
      {/* The Angled Container */}
      <div className="flex flex-col gap-8 transform -rotate-[8deg] scale-125 origin-center opacity-60">
        <VideoRow movies={row1} duration={60} />
        <VideoRow movies={row2} duration={50} reverse />
        <VideoRow movies={row3} duration={70} />
      </div>

      {/* Vignette Overlay for Text Readability */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_80%)] z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-10" />
    </div>
  )
}