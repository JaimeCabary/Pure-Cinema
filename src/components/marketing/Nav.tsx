// // 'use client'

// // import { MotionDiv } from '@/components/shared/Motion'
// // import Link from 'next/link'

// // export function MarketingNav() {
// //   return (
// //     <MotionDiv
// //       initial={{ y: -20, opacity: 0 }}
// //       animate={{ y: 0, opacity: 1 }}
// //       className="fixed top-0 left-0 right-0 z-50 px-8 py-6"
// //     >
// //       <div className="max-w-7xl mx-auto flex justify-between items-center">
// //         <Link href="/" className="text-2xl font-light tracking-tight">
// //           Pure Cinema
// //         </Link>
        
// //         <div className="flex items-center space-x-8">
// //           <Link href="/auth/login" className="text-gray-300 hover:text-white transition-colors">
// //             Sign In
// //           </Link>
// //           <Link
// //             href="/home"
// //             className="px-6 py-2 border border-gray-600 hover:border-white transition-colors"
// //           >
// //             Enter App
// //           </Link>
// //         </div>
// //       </div>
// //     </MotionDiv>
// //   )
// // }


// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Menu, X, ArrowRight, Sparkles } from 'lucide-react'

// // --- Internal Utility to fix the missing import error ---
// function cn(...classes: (string | undefined | null | false)[]) {
//   return classes.filter(Boolean).join(' ')
// }

// const navLinks = [
//   { href: '/', label: 'Home' },
//   { href: '/about', label: 'About' },
//   { href: '/pricing', label: 'Pricing' },
// ]

// export function MarketingNav() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [isMobileOpen, setIsMobileOpen] = useState(false)
//   const pathname = usePathname()

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <>
//       <motion.nav
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//         className={cn(
//           "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out border-b",
//           isScrolled
//             ? "bg-[#050505]/80 backdrop-blur-xl border-white/5 py-4"
//             : "bg-transparent border-transparent py-6"
//         )}
//       >
//         <div className="max-w-7xl mx-auto px-6 md:px-8">
//           <div className="flex items-center justify-between">
            
//             {/* 1. BRAND LOGO */}
//             <Link href="/" className="group flex items-center gap-2 relative z-50">
//               <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all duration-500">
//                 <Sparkles size={14} className="text-white group-hover:rotate-12 transition-transform duration-500" />
//               </div>
//               <span className="font-medium tracking-tight text-white text-lg">
//                 Pure Cinema
//               </span>
//             </Link>

//             {/* 2. DESKTOP LINKS (Centered) */}
//             <div className="hidden md:flex items-center gap-8">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className="relative group py-2"
//                 >
//                   <span className={cn(
//                     "text-sm font-medium transition-colors duration-300",
//                     pathname === link.href ? "text-white" : "text-zinc-400 group-hover:text-white"
//                   )}>
//                     {link.label}
//                   </span>
//                   {/* Hover Glow */}
//                   <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full opacity-50" />
//                 </Link>
//               ))}
//             </div>

//             {/* 3. ACTIONS (Right) */}
//             <div className="hidden md:flex items-center gap-6">
//               <Link 
//                 href="/auth/login" 
//                 className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
//               >
//                 Sign In
//               </Link>
              
//               <Link href="/home">
//                 <div className="group relative px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-full overflow-hidden transition-transform active:scale-95">
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
//                   <span className="relative flex items-center gap-2">
//                     Enter App <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
//                   </span>
//                 </div>
//               </Link>
//             </div>

//             {/* MOBILE MENU TOGGLE */}
//             <button 
//               onClick={() => setIsMobileOpen(!isMobileOpen)}
//               className="md:hidden z-50 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
//             >
//               {isMobileOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
//             </button>
//           </div>
//         </div>
//       </motion.nav>

//       {/* ==============================================
//           MOBILE MENU OVERLAY
//       =============================================== */}
//       <AnimatePresence>
//         {isMobileOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 z-40 bg-[#050505] pt-24 px-6 md:hidden flex flex-col"
//           >
//             <div className="flex flex-col gap-6">
//               {[...navLinks, { href: '/auth/login', label: 'Sign In' }].map((link, i) => (
//                 <motion.div
//                   key={link.href}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: i * 0.1 }}
//                 >
//                   <Link
//                     href={link.href}
//                     onClick={() => setIsMobileOpen(false)}
//                     className="block text-3xl font-light tracking-tight text-zinc-300 hover:text-white py-4 border-b border-white/5"
//                   >
//                     {link.label}
//                   </Link>
//                 </motion.div>
//               ))}

//               <motion.div 
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="mt-8"
//               >
//                 <Link 
//                   href="/home" 
//                   onClick={() => setIsMobileOpen(false)}
//                   className="flex items-center justify-center w-full py-4 bg-white text-black font-medium text-lg rounded-full"
//                 >
//                   Enter App
//                 </Link>
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }


'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { CinemaLogo } from '../shared/CinemaLogo'

// --- Internal Utility ---
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
]

export function MarketingNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out border-b",
          isScrolled
            ? "bg-[#050505]/80 backdrop-blur-xl border-white/5 py-4"
            : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* LAYOUT: 3-Column Flex to ensure center alignment */}
          <div className="flex items-center w-full">
            
            {/* 1. BRAND LOGO (Left - flex-1) */}
            <div className="flex-1 flex justify-start items-center">
              <Link href="/" className="group flex items-center gap-3 relative z-50">
                {/* New "Pure Cinema" SVG Logo (Background-less aperture/shutter) */}
                <div className="relative flex items-center justify-center w-8 h-8">
                  {/* <svg 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM4 6.5H6.5V9H4V6.5ZM4 11.5H6.5V14H4V11.5ZM4 16.5H6.5V19H4V16.5ZM9 19V6H15V19H9ZM20 19H17.5V16.5H20V19ZM20 14H17.5V11.5H20V14ZM20 9H17.5V6.5H20V9Z"/>
                  </svg> */}
                  <CinemaLogo />
                </div>
                <span className="font-medium tracking-tight text-white text-lg hidden sm:block">
                  Pure Cinema
                </span>
              </Link>
            </div>

            {/* 2. DESKTOP LINKS (Center - No flex grow) */}
            <div className="hidden md:flex items-center justify-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group py-2"
                >
                  <span className={cn(
                    "text-sm font-medium transition-colors duration-300",
                    pathname === link.href ? "text-white" : "text-zinc-400 group-hover:text-white"
                  )}>
                    {link.label}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full opacity-50" />
                </Link>
              ))}
            </div>

            {/* 3. ACTIONS & MOBILE TOGGLE (Right - flex-1) */}
            <div className="flex-1 flex justify-end items-center gap-6">
              <div className="hidden md:flex items-center gap-6">
                <Link 
                  href="/auth/login" 
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  Sign In
                </Link>
                
                <Link href="/home">
                  <div className="group relative px-5 py-2 bg-white text-black text-sm font-semibold rounded-full overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <span className="relative flex items-center gap-2">
                      Enter App <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
              </div>

              {/* Mobile Toggle */}
              <button 
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="md:hidden z-50 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                {isMobileOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
              </button>
            </div>
            
          </div>
        </div>
      </motion.nav>

      {/* ==============================================
          MOBILE MENU OVERLAY
      =============================================== */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050505] pt-24 px-6 md:hidden flex flex-col"
          >
            <div className="flex flex-col gap-6">
              {[...navLinks, { href: '/auth/login', label: 'Sign In' }].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="block text-3xl font-light tracking-tight text-zinc-300 hover:text-white py-4 border-b border-white/5"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <Link 
                  href="/home" 
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-center w-full py-4 bg-white text-black font-medium text-lg rounded-full"
                >
                  Enter App
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}