'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

function MarqueeColumn({ 
  images, 
  duration = 20, 
  reverse = false 
}: { 
  images: string[]
  duration?: number
  reverse?: boolean 
}) {
  return (
    <div className="relative flex flex-col gap-4 overflow-hidden h-[150vh]">
      <motion.div
        initial={{ y: reverse ? -1000 : 0 }}
        animate={{ y: reverse ? 0 : -1000 }}
        transition={{
          repeat: Infinity,
          duration: duration,
          ease: "linear",
        }}
        className="flex flex-col gap-4"
      >
        {/* Triple the list to ensure seamless looping */}
        {[...images, ...images, ...images].map((src, i) => (
          <div key={i} className="relative w-48 h-72 flex-shrink-0 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src={`https://image.tmdb.org/t/p/w500${src}`}
              alt="Movie Poster"
              fill
              className="object-cover opacity-60 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function CinematicGrid({ movies }: { movies: any[] }) {
  // Split movies into 3 columns
  const col1 = movies.slice(0, 6).map(m => m.poster_path)
  const col2 = movies.slice(6, 12).map(m => m.poster_path)
  const col3 = movies.slice(12, 18).map(m => m.poster_path)

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* The 3D Angled Container */}
      <div className="absolute inset-0 flex items-center justify-center gap-6 transform -rotate-12 scale-125 opacity-40 blur-[1px] hover:blur-0 hover:opacity-100 transition-all duration-700">
        <MarqueeColumn images={col1} duration={45} />
        <MarqueeColumn images={col2} duration={35} reverse />
        <MarqueeColumn images={col3} duration={40} />
      </div>

      {/* Overlay Gradient for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black pointer-events-none" />
    </div>
  )
}