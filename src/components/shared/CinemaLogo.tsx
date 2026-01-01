'use client'
import { motion, Variants, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export function CinemaLogo() {
  const leftControls = useAnimation()
  const rightControls = useAnimation()
  const centerControls = useAnimation()
  const playControls = useAnimation()

  // 1. Continuous Folding Animation (The Breathing Mechanism)
  useEffect(() => {
    const animateSides = async () => {
      while (true) {
        // Fold In (Breathing in)
        await Promise.all([
          leftControls.start({
            rotateY: -25,
            x: -1, // Subtle tuck
            transition: { duration: 1.5, ease: "easeInOut" }
          }),
          rightControls.start({
            rotateY: 25,
            x: 1, // Subtle tuck
            transition: { duration: 1.5, ease: "easeInOut" }
          })
        ])
        
        // Fold Out (Breathing out / Flat)
        await Promise.all([
          leftControls.start({
            rotateY: 0,
            x: 0,
            transition: { duration: 1.5, ease: "easeInOut" }
          }),
          rightControls.start({
            rotateY: 0,
            x: 0,
            transition: { duration: 1.5, ease: "easeInOut" }
          })
        ])
      }
    }
    animateSides()
  }, [leftControls, rightControls])

  // 2. Play Button Pulse
  useEffect(() => {
    const animatePlay = async () => {
      while (true) {
        await playControls.start({
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8],
          transition: { duration: 3, ease: "easeInOut" }
        })
      }
    }
    animatePlay()
  }, [playControls])

  // --- Visual Configuration ---
  const strokeColor = "#E4E4E7" // Zinc 200 (Bright White/Gray)
  const fillColor = "#09090B"   // Zinc 950 (Almost Black - to hide lines behind)
  const dimColor = "#52525B"    // Zinc 600 (Mechanical gray details)

  return (
    <div className="relative flex items-center justify-center w-10 h-10 [perspective:800px]">
      
      <motion.svg 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10"
        style={{ overflow: 'visible' }} // Allow 3D elements to not clip
      >
        {/* =======================
            LEFT FILM STRIP
        ======================== */}
        <motion.g
          animate={leftControls}
          initial={{ rotateY: 0, x: 0 }}
          style={{ originX: 0.29, originY: 0.5, transformStyle: 'preserve-3d' }}
        >
          {/* Main Panel Background (Darkness) */}
          <path d="M3 4H7V20H3V4Z" fill={fillColor} />
          
          {/* Main Border Lines */}
          <path d="M7 4V20" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M3 4V20" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
          
          {/* The Perforations (Cinema Grid Stuff) */}
          {[6, 9, 12, 15, 18].map((y, i) => (
            <rect 
              key={`l-perf-${i}`} 
              x="4" y={y - 0.5} width="2" height="1" 
              rx="0.2" fill={strokeColor} 
            />
          ))}

          {/* Horizontal Frame Dividers (Gray) */}
          <path d="M3 4H7" stroke={dimColor} strokeWidth="1" />
          <path d="M3 20H7" stroke={dimColor} strokeWidth="1" />
        </motion.g>


        {/* =======================
            RIGHT FILM STRIP
        ======================== */}
        <motion.g
          animate={rightControls}
          initial={{ rotateY: 0, x: 0 }}
          style={{ originX: 0.71, originY: 0.5, transformStyle: 'preserve-3d' }}
        >
          {/* Main Panel Background */}
          <path d="M17 4H21V20H17V4Z" fill={fillColor} />
          
          {/* Main Border Lines */}
          <path d="M17 4V20" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M21 4V20" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />

          {/* The Perforations */}
          {[6, 9, 12, 15, 18].map((y, i) => (
            <rect 
              key={`r-perf-${i}`} 
              x="18" y={y - 0.5} width="2" height="1" 
              rx="0.2" fill={strokeColor} 
            />
          ))}

          {/* Horizontal Frame Dividers */}
          <path d="M17 4H21" stroke={dimColor} strokeWidth="1" />
          <path d="M17 20H21" stroke={dimColor} strokeWidth="1" />
        </motion.g>


        {/* =======================
            CENTER FRAME (Screen)
        ======================== */}
        <motion.g animate={centerControls}>
          {/* Screen Background */}
          <rect x="8" y="5" width="8" height="14" rx="1" fill={fillColor} stroke={strokeColor} strokeWidth="1.5" />
          
          {/* Internal Grid Lines (Subtle Gray) */}
          <path d="M8 9H16" stroke={dimColor} strokeWidth="0.5" strokeDasharray="2 2" />
          <path d="M8 15H16" stroke={dimColor} strokeWidth="0.5" strokeDasharray="2 2" />
          
          {/* Play Icon (Solid White) */}
          <motion.g animate={playControls} style={{ originX: 0.5, originY: 0.5 }}>
            <path 
              d="M10.5 9.5L14.5 12L10.5 14.5V9.5Z" 
              fill={strokeColor} 
              stroke={strokeColor} 
              strokeWidth="1" 
              strokeLinejoin="round" 
            />
          </motion.g>
        </motion.g>

      </motion.svg>
    </div>
  )
}