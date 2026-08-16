// 'use client'

// import { MotionDiv } from '@/components/shared/Motion'
// import { useRouter } from 'next/navigation'
// import { useState } from 'react'

// export default function MarketingPage() {
//   const router = useRouter()
//   const [isEntering, setIsEntering] = useState(false)

//   const handleEnterApp = () => {
//     setIsEntering(true)
//     setTimeout(() => {
//       router.push('/home')
//     }, 400)
//   }

//   return (
//     <>
//       {isEntering && (
//         <MotionDiv
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="fixed inset-0 bg-black z-50"
//         />
//       )}
      
//       <div className="relative min-h-screen overflow-hidden">
//         {/* Hero Section */}
//         <section className="relative h-screen flex items-center justify-center">
//           <div className="absolute inset-0 z-0">
//             <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
//             <video
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="w-full h-full object-cover opacity-40"
//               poster="/images/hero-poster.jpg"
//             >
//               <source src="/videos/hero-cinematic.mp4" type="video/mp4" />
//             </video>
//           </div>

//           <MotionDiv
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7 }}
//             className="relative z-10 text-center px-4"
//           >
//             <h1 className="text-7xl lg:text-9xl font-light tracking-tight mb-6 font-satoshi">
//               Pure Cinema
//             </h1>
//             <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-geist">
//               Cinematic streaming redefined. Zero distraction, maximum immersion.
//             </p>
            
//             <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <button
//                 onClick={handleEnterApp}
//                 className="px-12 py-4 bg-white text-black text-lg font-medium tracking-wide border border-white hover:bg-transparent hover:text-white transition-all duration-300"
//               >
//                 Enter Platform
//               </button>
//             </MotionDiv>
//           </MotionDiv>
//         </section>

//         {/* Features */}
//         <section className="py-32 px-4">
//           <div className="max-w-6xl mx-auto">
//             <div className="grid md:grid-cols-3 gap-8">
//               <div className="text-center space-y-4">
//                 <div className="text-4xl mb-4">🎬</div>
//                 <h3 className="text-2xl font-light">Cinematic Quality</h3>
//                 <p className="text-gray-400">4K HDR with intelligent streaming</p>
//               </div>
//               <div className="text-center space-y-4">
//                 <div className="text-4xl mb-4">⌨️</div>
//                 <h3 className="text-2xl font-light">Keyboard First</h3>
//                 <p className="text-gray-400">Navigate entirely without mouse</p>
//               </div>
//               <div className="text-center space-y-4">
//                 <div className="text-4xl mb-4">⚡</div>
//                 <h3 className="text-2xl font-light">Zero Latency</h3>
//                 <p className="text-gray-400">Instant playback, no buffers</p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   )
// }



// import { CinematicGrid } from '@/components/marketing/CinematicGrid'
// import { fetchTrending } from '@/lib/tmdb'
// import { MotionDiv } from '@/components/shared/Motion'
// import Link from 'next/link'
// import { ArrowRight, PlayCircle } from 'lucide-react'

// export default async function MarketingPage() {
//   const movies = await fetchTrending()

//   return (
//     <div className="bg-black min-h-screen selection:bg-white selection:text-black">
      
//       {/* SECTION 1: HERO (Video Background) */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//            {/* Gradient Overlay for "Cinematic" Darkening */}
//           <div className="absolute inset-0 bg-[#050505]/60 z-10" />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
          
//           <video
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="w-full h-full object-cover scale-105 opacity-50"
//             poster="/images/hero-poster.jpg"
//           >
//             <source src="/videos/hero-cinematic.mp4" type="video/mp4" />
//           </video>
//         </div>

//         <div className="relative z-20 text-center max-w-4xl px-6">
//           <MotionDiv 
//             initial={{ opacity: 0, y: 40 }} 
//             animate={{ opacity: 1, y: 0 }} 
//             transition={{ duration: 1, delay: 0.2 }}
//           >
//             <h1 className="text-6xl md:text-9xl font-medium tracking-tighter text-white mb-6">
//               Pure <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Cinema.</span>
//             </h1>
//           </MotionDiv>
          
//           <MotionDiv 
//             initial={{ opacity: 0 }} 
//             animate={{ opacity: 1 }} 
//             transition={{ duration: 1, delay: 0.6 }}
//           >
//             <p className="text-xl text-gray-400 font-light tracking-wide mb-10 max-w-xl mx-auto">
//               No distractions. No buffering. Just the movies you love in 
//               absolute <span className="text-white">4K fidelity.</span>
//             </p>
            
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//               <Link 
//                 href="/home" 
//                 className="group relative px-8 py-4 bg-white text-black text-sm font-bold tracking-widest uppercase overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
//                 <span className="relative flex items-center gap-2">
//                   Enter Platform <ArrowRight size={16} />
//                 </span>
//               </Link>
              
//               <button className="flex items-center gap-3 text-sm font-medium text-white/70 hover:text-white transition-colors uppercase tracking-widest px-8 py-4">
//                 <PlayCircle size={18} /> Watch Showreel
//               </button>
//             </div>
//           </MotionDiv>
//         </div>
//       </section>

//       {/* SECTION 2: THE WALL (3D Grid) */}
//       <section className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <CinematicGrid movies={movies} />
//         </div>
        
//         <div className="relative z-10 max-w-2xl px-6 text-center pointer-events-none">
//           <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-8">
//             Unlimited <br/> Depth.
//           </h2>
//           <p className="text-lg text-gray-300 font-light leading-relaxed">
//             Explore a curated library that feels alive. Our interface adapts to your 
//             taste, presenting cinema in a dimension you've never experienced.
//           </p>
//         </div>
//       </section>

//     </div>
//   )
// }


import { CinematicGrid } from '@/components/marketing/CinematicGrid'
import { fetchTrending } from '@/lib/tmdb'
import { MotionDiv } from '@/components/shared/Motion'
import Link from 'next/link'
import { ArrowRight, PlayCircle } from 'lucide-react'
import { HeroVideoCarousel } from '@/components/marketing/HeroVideoCarousel'
import { ShalomKeyShortcut } from '@/components/marketing/ShalomKeyShortcut'

export default async function MarketingPage() {
  const movies = await fetchTrending()

  return (
    <div className="bg-black min-h-screen selection:bg-white selection:text-black">
      <ShalomKeyShortcut />
      
      {/* SECTION 1: HERO (Grid Background Replaces Video) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           {/* Gradient Overlay for "Cinematic" Darkening */}
          <div className="absolute inset-0 bg-[#050505]/20 z-20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05050581] via-transparent to-transparent z-20 pointer-events-none" />
          
          {/* Replaced Video with CinematicGrid */}
          <div className="w-full h-full opacity-50 scale-105">
            <HeroVideoCarousel movies={movies} />
          </div>
        </div>

        <div className="relative z-30 text-center max-w-4xl px-6">
          <MotionDiv 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-9xl font-medium tracking-tighter text-white mb-6">
              Pure <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Cinema.</span>
            </h1>
          </MotionDiv>
          
          <MotionDiv 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p className="text-xl text-gray-400 font-light tracking-wide mb-10 max-w-xl mx-auto">
              No distractions. No buffering. Just the movies you love in 
              absolute <span className="text-white">4K fidelity.</span>
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4">
              {/* Mobile-only Enter Platform button */}
              <div className="flex md:hidden items-center justify-center">
                <Link 
                  href="/home" 
                  prefetch={true}
                  className="group relative px-8 py-4 bg-white text-black text-sm font-bold tracking-widest uppercase overflow-hidden"
                >
                  <div className="absolute inset-0 bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center gap-2">
                    Enter Platform <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* SECTION 2: THE WALL (3D Grid) */}
      <section className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <CinematicGrid movies={movies} />
        </div>
        
        <div className="relative z-10 max-w-2xl px-6 text-center pointer-events-none">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-8">
            Unlimited <br/> Depth.
          </h2>
          <p className="text-lg text-gray-300 font-light leading-relaxed">
            Explore a curated library that feels alive. Our interface adapts to your 
            taste, presenting cinema in a dimension you've never experienced.
          </p>
        </div>
      </section>

    </div>
  )
}
