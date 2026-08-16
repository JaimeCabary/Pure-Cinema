// // 'use client'

// // import Link from 'next/link'
// // import { usePathname } from 'next/navigation'

// // const navItems = [
// //   { href: '/home', label: 'Home' },
// //   { href: '/search', label: 'Search' },
// //   { href: '/watchlist', label: 'Watchlist' },
// //   { href: '/downloads', label: 'Downloads' },
// //   { href: '/account', label: 'Account' },
// // ]

// // export function AppNav() {
// //   const pathname = usePathname()

// //   return (
// //     <nav className="fixed top-0 left-0 right-0 z-50 bg-black-900/95 backdrop-blur-sm border-b border-gray-800">
// //       <div className="max-w-7xl mx-auto px-8">
// //         <div className="flex items-center h-16">
// //           {/* Logo */}
// //           <Link href="/home" className="text-xl font-light mr-12">
// //             AW
// //           </Link>

// //           {/* Navigation */}
// //           <div className="flex space-x-6">
// //             {navItems.map((item) => (
// //               <Link
// //                 key={item.href}
// //                 href={item.href}
// //                 className={`px-3 py-2 text-sm font-medium transition-colors ${
// //                   pathname === item.href
// //                     ? 'text-white border-b-2 border-white'
// //                     : 'text-gray-400 hover:text-white'
// //                 }`}
// //               >
// //                 {item.label}
// //               </Link>
// //             ))}
// //           </div>

// //           {/* User */}
// //           <div className="ml-auto">
// //             <button className="text-sm text-gray-400 hover:text-white">
// //               Profile
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   )
// // }


// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { motion, AnimatePresence } from 'framer-motion'
// import { 
//   Menu, 
//   X, 
//   Search, 
//   User, 
//   PlayCircle, 
//   Download, 
//   Library,
//   Sparkles
// } from 'lucide-react'

// const navItems = [
//   { href: '/home', label: 'Home', icon: PlayCircle },
//   { href: '/search', label: 'Search', icon: Search },
//   { href: '/watchlist', label: 'Watchlist', icon: Library },
//   { href: '/downloads', label: 'Downloads', icon: Download },
// ]

// export function AppNav() {
//   const pathname = usePathname()
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)

//   // Detect scroll to trigger the "Solid Black Glass" effect
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <>
//       <motion.nav
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//         className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b ${
//           scrolled 
//             ? 'bg-[#030303]/80 backdrop-blur-xl border-white/5 py-3' 
//             : 'bg-transparent border-transparent py-6'
//         }`}
//       >
//         <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
//           <div className="flex items-center justify-between">
            
//             {/* 1. BRAND: Minimalist & Typographic */}
//             <Link href="/home" className="group flex items-center gap-3 z-50 relative">
//               <div className="relative w-8 h-8 flex items-center justify-center">
//                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                  <Sparkles strokeWidth={1.5} className="w-6 h-6 text-white relative z-10" />
//               </div>
//               <span className="font-light tracking-[0.2em] text-sm text-white uppercase group-hover:tracking-[0.25em] transition-all duration-500 hidden sm:block">
//                 Pure Cinema
//               </span>
//             </Link>

//             {/* 2. CENTER NAV: The "Island" Style */}
//             <div className="hidden md:flex items-center p-1.5 rounded-full border border-white/5 bg-black/20 backdrop-blur-md shadow-2xl">
//               {navItems.map((item) => {
//                 const isActive = pathname === item.href
//                 return (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     className={`relative px-5 py-2 text-xs font-medium tracking-wide transition-all duration-300 ${
//                       isActive ? 'text-black' : 'text-zinc-400 hover:text-white'
//                     }`}
//                   >
//                     {isActive && (
//                       <motion.div
//                         layoutId="nav-pill"
//                         className="absolute inset-0 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)]"
//                         transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                       />
//                     )}
//                     <span className="relative z-10 flex items-center gap-2">
//                       {/* Only show icon on hover for extra minimalism, or always if you prefer */}
//                       {item.label}
//                     </span>
//                   </Link>
//                 )
//               })}
//             </div>

//             {/* 3. RIGHT: Profile & Actions */}
//             <div className="hidden md:flex items-center gap-4">
//               <button className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300">
//                  <Search strokeWidth={1.5} size={20} />
//               </button>
              
//               <Link 
//                 href="/account" 
//                 className="w-9 h-9 rounded-full bg-gradient-to-b from-zinc-700 to-zinc-900 p-[1px] group overflow-hidden"
//               >
//                 <div className="w-full h-full rounded-full bg-black flex items-center justify-center group-hover:bg-zinc-900 transition-colors">
//                   <User size={16} className="text-zinc-300 group-hover:text-white" />
//                 </div>
//               </Link>
//             </div>

//             {/* MOBILE TOGGLE */}
//             <button 
//               onClick={() => setIsOpen(!isOpen)}
//               className="md:hidden z-50 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
//             >
//               {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
//             </button>
//           </div>
//         </div>
//       </motion.nav>

//       {/* ==============================================
//           MOBILE MENU: Cinematic Overlay
//       =============================================== */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl md:hidden flex flex-col justify-center px-8"
//           >
//             {/* Background ambient glow */}
//             <div className="absolute top-1/4 -left-20 w-60 h-60 bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none" />
//             <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />

//             <div className="flex flex-col gap-6 relative z-10">
//               {navItems.map((item, i) => (
//                 <motion.div
//                   key={item.href}
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
//                 >
//                   <Link
//                     href={item.href}
//                     onClick={() => setIsOpen(false)}
//                     className={`group flex items-center gap-6 text-3xl font-light tracking-tight transition-all ${
//                       pathname === item.href ? 'text-white' : 'text-zinc-600 hover:text-zinc-300'
//                     }`}
//                   >
//                     <span className={`text-sm opacity-50 font-mono`}>0{i + 1}</span>
//                     <span className="group-hover:translate-x-4 transition-transform duration-300">
//                       {item.label}
//                     </span>
//                   </Link>
//                 </motion.div>
//               ))}
              
//               <motion.div 
//                  initial={{ opacity: 0 }}
//                  animate={{ opacity: 1 }}
//                  transition={{ delay: 0.5 }}
//                  className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between"
//               >
//                  <Link href="/account" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-zinc-400">
//                     <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
//                       <User size={16} />
//                     </div>
//                     <span className="text-sm">My Account</span>
//                  </Link>
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }



// 'use client'

// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { motion } from 'framer-motion'
// import { 
//   Search, 
//   User, 
//   PlayCircle, 
//   Download, 
//   Library,
//   Home
// } from 'lucide-react'
// import { CinemaLogo } from '../shared/CinemaLogo'

// // Define nav items for the app
// const navItems = [
//   { href: '/home', label: 'Home', icon: Home },
//   { href: '/search', label: 'Search', icon: Search },
//   { href: '/watchlist', label: 'Watchlist', icon: Library },
//   { href: '/downloads', label: 'Downloads', icon: Download },
// ]

// export function AppNav() {
//   const pathname = usePathname()
//   const [scrolled, setScrolled] = useState(false)

//   // Handle scroll effect for top bar transparency
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <>
//       {/* ==============================================
//           TOP NAVIGATION (Desktop & Mobile Header)
//       =============================================== */}
//       <motion.nav
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//         className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b ${
//           scrolled 
//             ? 'bg-[#030303]/80 backdrop-blur-xl border-white/5 py-3' 
//             : 'bg-transparent border-transparent py-4 md:py-6'
//         }`}
//       >
//         <div className="max-w-screen-2xl mx-auto px-4 md:px-12">
//           <div className="flex items-center justify-between">
            
//             {/* 1. BRAND LOGO (Uses CinemaLogo now) */}
//             <Link href="/home" className="group flex items-center gap-3 z-50 relative">
//               <div className="relative w-8 h-8 flex items-center justify-center">
//                  {/* Glow effect behind logo */}
//                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                  <div className="relative z-10 text-white">
//                     <CinemaLogo />
//                  </div>
//               </div>
//               <span className="font-light tracking-[0.2em] text-sm text-white uppercase group-hover:tracking-[0.25em] transition-all duration-500 hidden sm:block">
//                 Pure Cinema
//               </span>
//             </Link>

//             {/* 2. DESKTOP CENTER NAV: The "Island" Style (Hidden on Mobile) */}
//             <div className="hidden md:flex items-center p-1.5 rounded-full border border-white/5 bg-black/20 backdrop-blur-md shadow-2xl">
//               {navItems.map((item) => {
//                 const isActive = pathname === item.href
//                 return (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     className={`relative px-5 py-2 text-xs font-medium tracking-wide transition-all duration-300 ${
//                       isActive ? 'text-black' : 'text-zinc-400 hover:text-white'
//                     }`}
//                   >
//                     {isActive && (
//                       <motion.div
//                         layoutId="nav-pill-desktop"
//                         className="absolute inset-0 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)]"
//                         transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                       />
//                     )}
//                     <span className="relative z-10 flex items-center gap-2">
//                       {item.label}
//                     </span>
//                   </Link>
//                 )
//               })}
//             </div>

//             {/* 3. RIGHT: Profile (Visible on both Mobile & Desktop) */}
//             <div className="flex items-center gap-4">
//                {/* Search Icon - Desktop only (Mobile has it in bottom bar) */}
//               <button className="hidden md:flex w-10 h-10 rounded-full items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300">
//                  <Search strokeWidth={1.5} size={20} />
//               </button>
              
//               <Link 
//                 href="/account" 
//                 className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-b from-zinc-700 to-zinc-900 p-[1px] group overflow-hidden"
//               >
//                 <div className="w-full h-full rounded-full bg-black flex items-center justify-center group-hover:bg-zinc-900 transition-colors">
//                   <User size={16} className="text-zinc-300 group-hover:text-white" />
//                 </div>
//               </Link>
//             </div>

//           </div>
//         </div>
//       </motion.nav>

//       {/* ==============================================
//           MOBILE BOTTOM NAVIGATION (Fixed Footer)
//       =============================================== */}
//       <div className="md:hidden fixed bottom-0 inset-x-0 z-50 pb-safe">
//         {/* Gradient fade to integrate with content */}
//         <div className="absolute -top-10 inset-x-0 h-10 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
        
//         <div className="bg-[#030303]/90 backdrop-blur-xl border-t border-white/5 px-6 pb-6 pt-3">
//           <div className="flex items-center justify-between">
//             {navItems.map((item) => {
//               const isActive = pathname === item.href
//               const Icon = item.icon
              
//               return (
//                 <Link 
//                   key={item.href} 
//                   href={item.href}
//                   className="group relative flex flex-col items-center justify-center gap-1 w-16"
//                 >
//                   {/* Active Indicator Glow */}
//                   {isActive && (
//                     <motion.div 
//                       layoutId="mobile-nav-glow"
//                       className="absolute -top-3 w-8 h-1 bg-white rounded-full shadow-[0_4px_12px_rgba(255,255,255,0.5)]"
//                     />
//                   )}
                  
//                   <div className={`transition-all duration-300 p-1 ${
//                     isActive ? 'text-white translate-y-1' : 'text-zinc-500 group-hover:text-zinc-300'
//                   }`}>
//                     <Icon 
//                       size={24} 
//                       strokeWidth={isActive ? 2 : 1.5} 
//                       fill={isActive ? "currentColor" : "none"} // Optional: Fill icon when active
//                       className="transition-all duration-300"
//                     />
//                   </div>
                  
//                   <span className={`text-[10px] font-medium tracking-wide transition-all duration-300 ${
//                     isActive ? 'text-white opacity-100' : 'text-zinc-500 opacity-0 -translate-y-2'
//                   }`}>
//                     {item.label}
//                   </span>
//                 </Link>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }


'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  Search, 
  User, 
  Download, 
  Library,
  Home,
  Tv
} from 'lucide-react'
import { CinemaLogo } from '../shared/CinemaLogo'

const navItems = [
  { href: '/home', label: 'Home', icon: Home },
  { href: '/tv', label: 'Live TV', icon: Tv, isLive: true },
  { href: '/search', label: 'Search', icon: Search },
  { href: '/watchlist', label: 'Watchlist', icon: Library },
  { href: '/downloads', label: 'Downloads', icon: Download },
]

export function AppNav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#030303]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl' 
            : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-4 md:py-5'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
          <div className="flex items-center justify-between">
            
            {/* BRAND */}
            <Link href="/home" className="group flex items-center gap-3 z-50 relative">
              <div className="relative w-8 h-8 flex items-center justify-center">
                 <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 <div className="relative z-10 text-white scale-90">
                    <CinemaLogo /> 
                 </div>
              </div>
              <span className="font-bold tracking-[0.2em] text-xs text-white uppercase group-hover:tracking-[0.25em] transition-all duration-500 hidden sm:block">
                Pure Cinema
              </span>
            </Link>

            {/* CENTER NAV - Crisp & Minimalist */}
            <div className="hidden md:flex items-center p-1 rounded-full border border-white/10 bg-zinc-950/90 shadow-lg">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/home' && pathname?.startsWith(item.href))
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-200 flex items-center gap-1.5 ${
                      isActive ? 'text-black font-bold' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill-desktop"
                        className="absolute inset-0 bg-white rounded-full"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      {item.label}
                    </span>
                  </Link>
                )
              })}
            </div>

            {/* RIGHT PROFILE */}
            <div className="flex items-center gap-3">
              <button className="hidden md:flex w-8 h-8 rounded-full items-center justify-center text-zinc-400 hover:text-white hover:bg-white/5 transition-all">
                 <Search strokeWidth={1.5} size={18} />
              </button>
              
              <Link 
                href="/account" 
                className="w-8 h-8 rounded-full bg-gradient-to-b from-zinc-700 to-zinc-900 p-[1px] group overflow-hidden"
              >
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center group-hover:bg-zinc-900 transition-colors">
                  <User size={14} className="text-zinc-300 group-hover:text-white" />
                </div>
              </Link>
            </div>

          </div>
        </div>
      </motion.nav>

      {/* MOBILE BOTTOM NAV */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 pb-safe">
        <div className="absolute -top-10 inset-x-0 h-10 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
        <div className="bg-[#030303]/95 backdrop-blur-xl border-t border-white/5 px-6 pb-6 pt-2">
          <div className="flex items-center justify-between">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon
              return (
                <Link key={item.href} href={item.href} className="group relative flex flex-col items-center justify-center gap-1 w-14">
                  {isActive && (
                    <motion.div layoutId="mobile-nav-glow" className="absolute -top-2 w-8 h-0.5 bg-white rounded-full shadow-[0_2px_10px_rgba(255,255,255,0.5)]" />
                  )}
                  <div className={`transition-all duration-300 p-1 ${isActive ? 'text-white' : 'text-zinc-600 group-hover:text-zinc-300'}`}>
                    <Icon size={22} strokeWidth={isActive ? 2 : 1.5} />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}