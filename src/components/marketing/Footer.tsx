// // // 'use client'

// // // import Link from 'next/link'
// // // import { motion } from 'framer-motion'
// // // import { 
// // //   Instagram, 
// // //   Twitter, 
// // //   Github, 
// // //   Linkedin, 
// // //   ArrowRight,
// // //   Mail
// // // } from 'lucide-react'
// // // import { CinemaLogo } from '../shared/CinemaLogo' // Adjust path as needed

// // // const footerLinks = {
// // //   product: [
// // //     { label: 'Features', href: '/#features' },
// // //     { label: 'Mobile App', href: '/mobile' },
// // //     { label: 'Pricing', href: '/pricing' },
// // //     { label: 'Changelog', href: '/changelog' },
// // //   ],
// // //   company: [
// // //     { label: 'About Us', href: '/about' },
// // //     { label: 'Careers', href: '/careers' },
// // //     { label: 'Blog', href: '/blog' },
// // //     { label: 'Contact', href: '/contact' },
// // //   ],
// // //   legal: [
// // //     { label: 'Privacy Policy', href: '/privacy' },
// // //     { label: 'Terms of Service', href: '/terms' },
// // //     { label: 'Cookie Policy', href: '/cookies' },
// // //   ],
// // //   social: [
// // //     { icon: Twitter, href: 'https://twitter.com' },
// // //     { icon: Instagram, href: 'https://instagram.com' },
// // //     { icon: Github, href: 'https://github.com' },
// // //     { icon: Linkedin, href: 'https://linkedin.com' },
// // //   ]
// // // }

// // // export function Footer() {
// // //   return (
// // //     <footer className="relative bg-[#050505] text-white pt-24 pb-12 overflow-hidden">
      
// // //       {/* 1. BACKGROUND DECORATION */}
// // //       {/* Subtle top gradient line */}
// // //       <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
// // //       {/* Ambient glow at the bottom */}
// // //       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-zinc-900/10 blur-[120px] rounded-full pointer-events-none" />

// // //       <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
// // //         {/* 2. TOP SECTION: CTA & BRANDING */}
// // //         <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
          
// // //           {/* Brand Column */}
// // //           <div className="max-w-sm">
// // //             <Link href="/" className="flex items-center gap-3 mb-6 group">
// // //               <div className="relative w-10 h-10 flex items-center justify-center">
// // //                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
// // //                  <div className="relative z-10 text-white">
// // //                    <CinemaLogo />
// // //                  </div>
// // //               </div>
// // //               <span className="text-xl font-medium tracking-tight">Pure Cinema</span>
// // //             </Link>
// // //             <p className="text-zinc-500 leading-relaxed mb-8">
// // //               Crafting the future of film consumption. Experience cinema the way it was meant to be seen, right from your device.
// // //             </p>
            
// // //             {/* Newsletter Input */}
// // //             <div className="relative max-w-xs">
// // //               <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
// // //               <input 
// // //                 type="email" 
// // //                 placeholder="Subscribe to updates" 
// // //                 className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all"
// // //               />
// // //               <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-1 rounded-full transition-colors">
// // //                 <ArrowRight size={14} />
// // //               </button>
// // //             </div>
// // //           </div>

// // //           {/* Links Grid */}
// // //           <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
            
// // //             {/* Column 1 */}
// // //             <div className="flex flex-col gap-4">
// // //               <h4 className="font-medium text-white mb-2">Product</h4>
// // //               {footerLinks.product.map((link) => (
// // //                 <Link 
// // //                   key={link.href} 
// // //                   href={link.href}
// // //                   className="text-sm text-zinc-500 hover:text-white transition-colors"
// // //                 >
// // //                   {link.label}
// // //                 </Link>
// // //               ))}
// // //             </div>

// // //             {/* Column 2 */}
// // //             <div className="flex flex-col gap-4">
// // //               <h4 className="font-medium text-white mb-2">Company</h4>
// // //               {footerLinks.company.map((link) => (
// // //                 <Link 
// // //                   key={link.href} 
// // //                   href={link.href}
// // //                   className="text-sm text-zinc-500 hover:text-white transition-colors"
// // //                 >
// // //                   {link.label}
// // //                 </Link>
// // //               ))}
// // //             </div>

// // //             {/* Column 3 */}
// // //             <div className="flex flex-col gap-4">
// // //               <h4 className="font-medium text-white mb-2">Legal</h4>
// // //               {footerLinks.legal.map((link) => (
// // //                 <Link 
// // //                   key={link.href} 
// // //                   href={link.href}
// // //                   className="text-sm text-zinc-500 hover:text-white transition-colors"
// // //                 >
// // //                   {link.label}
// // //                 </Link>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* 3. BIG TYPOGRAPHY FOOTER (Like the Chronicle/Ace examples) */}
// // //         <div className="border-t border-white/5 pt-12 mt-12">
// // //           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
// // //             <p className="text-zinc-600 text-sm order-2 md:order-1">
// // //               &copy; {new Date().getFullYear()} Pure Cinema Inc. All rights reserved.
// // //             </p>

// // //             {/* Social Icons */}
// // //             <div className="flex items-center gap-6 order-1 md:order-2">
// // //               {footerLinks.social.map((social, i) => {
// // //                 const Icon = social.icon
// // //                 return (
// // //                   <a 
// // //                     key={i} 
// // //                     href={social.href} 
// // //                     target="_blank" 
// // //                     rel="noreferrer"
// // //                     className="text-zinc-500 hover:text-white transition-colors transform hover:scale-110 duration-300"
// // //                   >
// // //                     <Icon size={20} strokeWidth={1.5} />
// // //                   </a>
// // //                 )
// // //               })}
// // //             </div>
// // //           </div>

// // //           {/* GIANT TEXT EFFECT (Optional stylistic choice) */}
// // //           <div className="mt-20 select-none pointer-events-none">
// // //             <h1 
// // //             className="relative z-10 text-[18vw] leading-[0.75] font-medium tracking-tight text-transparent select-none pointer-events-none"
// // //             style={{ 
// // //               WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)',
// // //             }}
// // //           >
// // //             Pure Cinema
// // //           </h1>
          
// // //           {/* Fade out at the very bottom of the text to blend with page end */}
// // //           <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#030303] to-transparent z-20" />
// // //         </div>
// // //           </div>
          
// // //         </div>

// // //       </div>
// // //     </footer>
// // //   )
// // // }


// // 'use client'

// // import Link from 'next/link'
// // import { motion } from 'framer-motion'
// // import { 
// //   Instagram, 
// //   Twitter, 
// //   Github, 
// //   Linkedin, 
// //   ArrowRight,
// //   Mail
// // } from 'lucide-react'
// // import { CinemaLogo } from '../shared/CinemaLogo' // Adjust path as needed

// // const footerLinks = {
// //   product: [
// //     { label: 'Features', href: '/#features' },
// //     { label: 'Mobile App', href: '/mobile' },
// //     { label: 'Pricing', href: '/pricing' },
// //     { label: 'Changelog', href: '/changelog' },
// //   ],
// //   company: [
// //     { label: 'About Us', href: '/about' },
// //     { label: 'Careers', href: '/careers' },
// //     { label: 'Blog', href: '/blog' },
// //     { label: 'Contact', href: '/contact' },
// //   ],
// //   legal: [
// //     { label: 'Privacy Policy', href: '/privacy' },
// //     { label: 'Terms of Service', href: '/terms' },
// //     { label: 'Cookie Policy', href: '/cookies' },
// //   ],
// //   social: [
// //     { icon: Twitter, href: 'https://twitter.com' },
// //     { icon: Instagram, href: 'https://instagram.com' },
// //     { icon: Github, href: 'https://github.com' },
// //     { icon: Linkedin, href: 'https://linkedin.com' },
// //   ]
// // }

// // export function Footer() {
// //   return (
// //     <footer className="relative bg-[#050505] text-white pt-24 pb-0 overflow-hidden">
      
// //       {/* 1. BACKGROUND DECORATION */}
// //       {/* Subtle top gradient line */}
// //       <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
// //       {/* Ambient glow at the bottom */}
// //       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-zinc-900/10 blur-[120px] rounded-full pointer-events-none" />

// //       <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
// //         {/* 2. TOP SECTION: CTA & BRANDING */}
// //         <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
          
// //           {/* Brand Column */}
// //           <div className="max-w-sm">
// //             <Link href="/" className="flex items-center gap-3 mb-6 group">
// //               <div className="relative w-10 h-10 flex items-center justify-center">
// //                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
// //                  <div className="relative z-10 text-white">
// //                    <CinemaLogo />
// //                  </div>
// //               </div>
// //               <span className="text-xl font-medium tracking-tight">Pure Cinema</span>
// //             </Link>
// //             <p className="text-zinc-500 leading-relaxed mb-8">
// //               Crafting the future of film consumption. Experience cinema the way it was meant to be seen, right from your device.
// //             </p>
            
// //             {/* Newsletter Input */}
// //             <div className="relative max-w-xs">
// //               <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
// //               <input 
// //                 type="email" 
// //                 placeholder="Subscribe to updates" 
// //                 className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all"
// //               />
// //               <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-1 rounded-full transition-colors">
// //                 <ArrowRight size={14} />
// //               </button>
// //             </div>
// //           </div>

// //           {/* Links Grid */}
// //           <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
            
// //             {/* Column 1 */}
// //             <div className="flex flex-col gap-4">
// //               <h4 className="font-medium text-white mb-2">Product</h4>
// //               {footerLinks.product.map((link) => (
// //                 <Link 
// //                   key={link.href} 
// //                   href={link.href}
// //                   className="text-sm text-zinc-500 hover:text-white transition-colors"
// //                 >
// //                   {link.label}
// //                 </Link>
// //               ))}
// //             </div>

// //             {/* Column 2 */}
// //             <div className="flex flex-col gap-4">
// //               <h4 className="font-medium text-white mb-2">Company</h4>
// //               {footerLinks.company.map((link) => (
// //                 <Link 
// //                   key={link.href} 
// //                   href={link.href}
// //                   className="text-sm text-zinc-500 hover:text-white transition-colors"
// //                 >
// //                   {link.label}
// //                 </Link>
// //               ))}
// //             </div>

// //             {/* Column 3 */}
// //             <div className="flex flex-col gap-4">
// //               <h4 className="font-medium text-white mb-2">Legal</h4>
// //               {footerLinks.legal.map((link) => (
// //                 <Link 
// //                   key={link.href} 
// //                   href={link.href}
// //                   className="text-sm text-zinc-500 hover:text-white transition-colors"
// //                 >
// //                   {link.label}
// //                 </Link>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* 3. FOOTER META & SOCIALS */}
// //         <div className="border-t border-white/5 pt-12 mt-12 mb-20">
// //           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
// //             <p className="text-zinc-600 text-sm order-2 md:order-1">
// //               &copy; {new Date().getFullYear()} Pure Cinema Inc. All rights reserved.
// //             </p>

// //             {/* Social Icons */}
// //             <div className="flex items-center gap-6 order-1 md:order-2">
// //               {footerLinks.social.map((social, i) => {
// //                 const Icon = social.icon
// //                 return (
// //                   <a 
// //                     key={i} 
// //                     href={social.href} 
// //                     target="_blank" 
// //                     rel="noreferrer"
// //                     className="text-zinc-500 hover:text-white transition-colors transform hover:scale-110 duration-300"
// //                   >
// //                     <Icon size={20} strokeWidth={1.5} />
// //                   </a>
// //                 )
// //               })}
// //             </div>
// //           </div>
// //         </div>

// //       </div>

// //       {/* 4. GIANT "PURE CINEMA" TEXT EFFECT (Chronicle Vibe) */}
// //       <div className="relative w-full overflow-hidden flex justify-center items-end select-none pointer-events-none">
          
// //           {/* The Ambient "Metal" Glow Behind the Text */}
// //           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[400px] bg-white/[0.03] blur-[150px] rounded-full z-0" />
          
// //           <h1 
// //             className="relative z-10 text-[18vw] leading-[0.8] font-bold tracking-tighter whitespace-nowrap text-center"
// //             style={{ 
// //               color: 'transparent',
// //               // Increased opacity to 0.2 to give it that "Steel" look
// //               WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)',
// //             }}
// //           >
// //             Pure Cinema
// //           </h1>
          
// //           {/* Gradient Mask to fade text into the bottom of the page */}
// //           <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-20" />
// //       </div>

// //     </footer>
// //   )
// // }



// 'use client'

// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import { 
//   Instagram, 
//   Twitter, 
//   Github, 
//   Linkedin, 
//   ArrowRight,
//   Mail
// } from 'lucide-react'
// import { CinemaLogo } from '../shared/CinemaLogo' // Adjust path as needed

// const footerLinks = {
//   product: [
//     { label: 'Features', href: '/#features' },
//     { label: 'Mobile App', href: '/mobile' },
//     { label: 'Pricing', href: '/pricing' },
//     { label: 'Changelog', href: '/changelog' },
//   ],
//   company: [
//     { label: 'About Us', href: '/about' },
//     { label: 'Careers', href: '/careers' },
//     { label: 'Blog', href: '/blog' },
//     { label: 'Contact', href: '/contact' },
//   ],
//   legal: [
//     { label: 'Privacy Policy', href: '/privacy' },
//     { label: 'Terms of Service', href: '/terms' },
//     { label: 'Cookie Policy', href: '/cookies' },
//   ],
//   social: [
//     { icon: Twitter, href: 'https://twitter.com' },
//     { icon: Instagram, href: 'https://instagram.com' },
//     { icon: Github, href: 'https://github.com' },
//     { icon: Linkedin, href: 'https://linkedin.com' },
//   ]
// }

// export function Footer() {
//   return (
//     <footer className="relative bg-[#050505] text-white pt-24 pb-0 overflow-hidden">
      
//       {/* 1. BACKGROUND DECORATION */}
//       {/* Subtle top gradient line */}
//       <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//       {/* Ambient glow at the bottom */}
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-zinc-900/10 blur-[120px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
//         {/* 2. TOP SECTION: CTA & BRANDING */}
//         <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
          
//           {/* Brand Column */}
//           <div className="max-w-sm">
//             <Link href="/" className="flex items-center gap-3 mb-6 group">
//               <div className="relative w-10 h-10 flex items-center justify-center">
//                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                  <div className="relative z-10 text-white">
//                    <CinemaLogo />
//                  </div>
//               </div>
//               <span className="text-xl font-medium tracking-tight">Pure Cinema</span>
//             </Link>
//             <p className="text-zinc-500 leading-relaxed mb-8">
//               Crafting the future of film consumption. Experience cinema the way it was meant to be seen, right from your device.
//             </p>
            
//             {/* Newsletter Input */}
//             <div className="relative max-w-xs">
//               <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
//               <input 
//                 type="email" 
//                 placeholder="Subscribe to updates" 
//                 className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all"
//               />
//               <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-1 rounded-full transition-colors">
//                 <ArrowRight size={14} />
//               </button>
//             </div>
//           </div>

//           {/* Links Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
            
//             {/* Column 1 */}
//             <div className="flex flex-col gap-4">
//               <h4 className="font-medium text-white mb-2">Product</h4>
//               {footerLinks.product.map((link) => (
//                 <Link 
//                   key={link.href} 
//                   href={link.href}
//                   className="text-sm text-zinc-500 hover:text-white transition-colors"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>

//             {/* Column 2 */}
//             <div className="flex flex-col gap-4">
//               <h4 className="font-medium text-white mb-2">Company</h4>
//               {footerLinks.company.map((link) => (
//                 <Link 
//                   key={link.href} 
//                   href={link.href}
//                   className="text-sm text-zinc-500 hover:text-white transition-colors"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>

//             {/* Column 3 */}
//             <div className="flex flex-col gap-4">
//               <h4 className="font-medium text-white mb-2">Legal</h4>
//               {footerLinks.legal.map((link) => (
//                 <Link 
//                   key={link.href} 
//                   href={link.href}
//                   className="text-sm text-zinc-500 hover:text-white transition-colors"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* 3. FOOTER META & SOCIALS */}
//         <div className="border-t border-white/5 pt-12 mt-12 mb-20">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
//             <p className="text-zinc-600 text-sm order-2 md:order-1">
//               &copy; {new Date().getFullYear()} Pure Cinema Inc. All rights reserved.
//             </p>

//             {/* Social Icons */}
//             <div className="flex items-center gap-6 order-1 md:order-2">
//               {footerLinks.social.map((social, i) => {
//                 const Icon = social.icon
//                 return (
//                   <a 
//                     key={i} 
//                     href={social.href} 
//                     target="_blank" 
//                     rel="noreferrer"
//                     className="text-zinc-500 hover:text-white transition-colors transform hover:scale-110 duration-300"
//                   >
//                     <Icon size={20} strokeWidth={1.5} />
//                   </a>
//                 )
//               })}
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* 4. GIANT "PURE CINEMA" TEXT EFFECT (Chronicle Vibe) */}
//       <div className="relative w-full overflow-hidden flex justify-center items-end select-none pointer-events-none pb-4">
          
//           {/* Subtle Ambient Glow behind text */}
//           <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[60%] h-[300px] bg-white/[0.02] blur-[150px] rounded-full z-0" />
          
//           <h1 
//             className="relative z-10 text-[24vw] leading-[0.75] font-bold tracking-tighter whitespace-nowrap text-center"
//             style={{ 
//               color: 'transparent',
//               // Thin, crisp stroke like the screenshot
//               WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)',
//             }}
//           >
//             Pure Cinema
//           </h1>
          
//           {/* The "Fade to Black" mask at the bottom to replicate the cut-off effect */}
//           <div className="absolute bottom-0 inset-x-0 h-[20vh] bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-20" />
//       </div>

//     </footer>
//   )
// }



'use client'



import Link from 'next/link'

import { motion } from 'framer-motion'

import { 

  Instagram, 

  Twitter, 

  Github, 

  Linkedin, 

  ArrowRight,

  Mail

} from 'lucide-react'

import { CinemaLogo } from '../shared/CinemaLogo' // Adjust path as needed



const footerLinks = {

  product: [

    { label: 'Features', href: '/#features' },

    { label: 'Mobile App', href: '/mobile' },

    { label: 'Pricing', href: '/pricing' },

    { label: 'Changelog', href: '/changelog' },

  ],

  company: [

    { label: 'About Us', href: '/about' },

    { label: 'Careers', href: '/careers' },

    { label: 'Blog', href: '/blog' },

    { label: 'Contact', href: '/contact' },

  ],

  legal: [

    { label: 'Privacy Policy', href: '/privacy' },

    { label: 'Terms of Service', href: '/terms' },

    { label: 'Cookie Policy', href: '/cookies' },

  ],

  social: [

    { icon: Twitter, href: 'https://twitter.com' },

    { icon: Instagram, href: 'https://instagram.com' },

    { icon: Github, href: 'https://github.com' },

    { icon: Linkedin, href: 'https://linkedin.com' },

  ]

}



export function Footer() {

  return (

    <footer className="relative bg-[#050505] text-white pt-24 pb-0 overflow-hidden">

      

      {/* 1. BACKGROUND DECORATION */}

      {/* Subtle top gradient line */}

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Ambient glow at the bottom */}
      

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-zinc-900/10 blur-[120px] rounded-full pointer-events-none" />



      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        

        {/* 2. TOP SECTION: CTA & BRANDING */}

        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">

          

          {/* Brand Column */}

          <div className="max-w-sm">

            <Link href="/" className="flex items-center gap-3 mb-6 group">

              <div className="relative w-10 h-10 flex items-center justify-center">

                 <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                 <div className="relative z-10 text-white">

                   <CinemaLogo />

                 </div>

              </div>

              <span className="text-xl font-medium tracking-tight">Pure Cinema</span>

            </Link>

            <p className="text-zinc-500 leading-relaxed mb-8">

              Crafting the future of film consumption. Experience cinema the way it was meant to be seen, right from your device.

            </p>

            

            {/* Newsletter Input */}

            <div className="relative max-w-xs">

              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />

              <input 

                type="email" 

                placeholder="Subscribe to updates" 

                className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:border-white/20 focus:bg-white/10 transition-all"

              />

              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-1 rounded-full transition-colors">

                <ArrowRight size={14} />

              </button>

            </div>

          </div>



          {/* Links Grid */}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">

            

            {/* Column 1 */}

            <div className="flex flex-col gap-4">

              <h4 className="font-medium text-white mb-2">Product</h4>

              {footerLinks.product.map((link) => (

                <Link 

                  key={link.href} 

                  href={link.href}

                  className="text-sm text-zinc-500 hover:text-white transition-colors"

                >

                  {link.label}

                </Link>

              ))}

            </div>



            {/* Column 2 */}

            <div className="flex flex-col gap-4">

              <h4 className="font-medium text-white mb-2">Company</h4>

              {footerLinks.company.map((link) => (

                <Link 

                  key={link.href} 

                  href={link.href}

                  className="text-sm text-zinc-500 hover:text-white transition-colors"

                >

                  {link.label}

                </Link>

              ))}

            </div>



            {/* Column 3 */}

            <div className="flex flex-col gap-4">

              <h4 className="font-medium text-white mb-2">Legal</h4>

              {footerLinks.legal.map((link) => (

                <Link 

                  key={link.href} 

                  href={link.href}

                  className="text-sm text-zinc-500 hover:text-white transition-colors"

                >

                  {link.label}

                </Link>

              ))}

            </div>

          </div>

        </div>



        {/* 3. FOOTER META & SOCIALS */}

        <div className="border-t border-white/5 pt-12 mt-12 mb-20">

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            

            <p className="text-zinc-600 text-sm order-2 md:order-1">

              &copy; {new Date().getFullYear()} Pure Cinema Inc. All rights reserved.

            </p>



            {/* Social Icons */}

            <div className="flex items-center gap-6 order-1 md:order-2">

              {footerLinks.social.map((social, i) => {

                const Icon = social.icon

                return (

                  <a 

                    key={i} 

                    href={social.href} 

                    target="_blank" 

                    rel="noreferrer"

                    className="text-zinc-500 hover:text-white transition-colors transform hover:scale-110 duration-300"

                  >

                    <Icon size={20} strokeWidth={1.5} />

                  </a>

                )

              })}

            </div>

          </div>

        </div>



      </div>

{/* 

      {/* 4. GIANT "PURE CINEMA" TEXT EFFECT (Chronicle Vibe) */}

      <div className="relative w-full overflow-hidden flex justify-center items-end select-none pointer-events-none pb-9 mt-8">
          

          {/* The Ambient "Metal" Glow Behind the Text

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[400px] bg-white/[0.03] blur-[150px] rounded-full z-0" />

          

          <h1 
            className="relative z-10 text-[16vw] leading-[0.8] font-bold tracking-tighter whitespace-nowrap text-center bg-clip-text text-transparent"
            style={{ 
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)',
                backgroundImage: `radial-gradient(
                ellipse at center,
                rgba(255,255,255,0.4) 0%,
                rgba(255,255,255,0.2) 20%,
                transparent 40%
                )`,
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            >
            Pure Cinema
            </h1>

            */}
            {/* 4. GIANT "PURE CINEMA" TEXT EFFECT (Chronicle Vibe) */}

          <h1 
            className="relative z-10 text-[14vw] leading-[0.8] font-bold tracking-tighter whitespace-nowrap text-center bg-clip-text text-transparent"
            style={{ 
                  // Enhanced stroke for that hollow "steel" look

                WebkitTextStroke: '1px rgba(255, 255, 255, 0.4)', 

                

                // Subtle linear gradient to give the hollow letters some vertical depth

                backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 80%)',

            }}

          >
            Pure Cinema
          </h1>


          {/* Gradient Mask to fade text into the bottom of the page */}

          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent z-20" />

      </div> 



    </footer>

  )

}
