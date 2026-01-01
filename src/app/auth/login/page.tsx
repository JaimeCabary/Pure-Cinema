// // 'use client'

// // import { MotionDiv } from '@/components/shared/Motion'
// // import { useState } from 'react'
// // import { useRouter } from 'next/navigation'

// // export default function LoginPage() {
// //   const router = useRouter()
// //   const [email, setEmail] = useState('')
// //   const [password, setPassword] = useState('')

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()
// //     // Implement auth logic
// //     router.push('/home')
// //   }

// //   return (
// //     <div className="min-h-screen flex items-center justify-center px-4">
// //       <MotionDiv
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         className="w-full max-w-md"
// //       >
// //         <div className="border border-gray-800 p-8">
// //           <h1 className="text-3xl font-light mb-8 text-center">Sign In</h1>
          
// //           <form onSubmit={handleSubmit} className="space-y-6">
// //             <div>
// //               <label className="block text-sm font-medium text-gray-400 mb-2">
// //                 Email
// //               </label>
// //               <input
// //                 type="email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 className="w-full px-4 py-3 bg-black border border-gray-800 focus:outline-none focus:border-gray-600"
// //                 required
// //               />
// //             </div>
            
// //             <div>
// //               <label className="block text-sm font-medium text-gray-400 mb-2">
// //                 Password
// //               </label>
// //               <input
// //                 type="password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 className="w-full px-4 py-3 bg-black border border-gray-800 focus:outline-none focus:border-gray-600"
// //                 required
// //               />
// //             </div>
            
// //             <button
// //               type="submit"
// //               className="w-full py-3 bg-white text-black font-medium hover:bg-gray-100 transition-colors"
// //             >
// //               Sign In
// //             </button>
// //           </form>
          
// //           <div className="mt-6 text-center">
// //             <a href="/auth/signup" className="text-gray-400 hover:text-white text-sm">
// //               Don't have an account? Sign up
// //             </a>
// //           </div>
// //         </div>
// //       </MotionDiv>
// //     </div>
// //   )
// // }


// // 'use client'

// // import { useState } from 'react'
// // import { useRouter } from 'next/navigation'
// // import Link from 'next/link'
// // import { motion } from 'framer-motion'
// // import { ArrowRight, Loader2 } from 'lucide-react'

// // // Reusing MotionDiv
// // const MotionDiv = motion.div

// // export default function LoginPage() {
// //   const router = useRouter()
// //   const [email, setEmail] = useState('')
// //   const [password, setPassword] = useState('')
// //   const [isLoading, setIsLoading] = useState(false)

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()
// //     setIsLoading(true)
    
// //     // Simulate API delay
// //     await new Promise(resolve => setTimeout(resolve, 800))
    
// //     router.push('/home')
// //     setIsLoading(false)
// //   }

// //   return (
// //     <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 selection:bg-white selection:text-black">
      
// //       {/* Background Ambient Glow */}
// //       <div className="fixed inset-0 overflow-hidden pointer-events-none">
// //          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/[0.03] blur-[120px] rounded-full" />
// //       </div>

// //       <MotionDiv
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.6 }}
// //         className="w-full max-w-md relative z-10"
// //       >
// //         <div className="border border-zinc-800 bg-[#050505]/50 backdrop-blur-sm p-8 md:p-10 relative group">
          
// //           {/* Subtle Border Glow on Hover */}
// //           {/* <div className="absolute -inset-[1px] bg-gradient-to-b from-zinc-400/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" /> */}

// //           {/* Header */}
// //           <div className="mb-10">
// //             <h1 className="text-3xl font-medium tracking-tighter mb-2">Welcome Back</h1>
// //             <p className="text-zinc-500 font-light text-sm">
// //                 Enter your credentials to access the platform.
// //             </p>
// //           </div>
          
// //           <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
// //             <div className="space-y-2">
// //               <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email</label>
// //               <input
// //                 type="email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-white text-white px-4 py-3 outline-none transition-all duration-300 placeholder:text-zinc-700"
// //                 placeholder="name@example.com"
// //                 required
// //               />
// //             </div>
            
// //             <div className="space-y-2">
// //               <div className="flex justify-between items-center">
// //                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Password</label>
// //                  <Link href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">Forgot?</Link>
// //               </div>
// //               <input
// //                 type="password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-white text-white px-4 py-3 outline-none transition-all duration-300 placeholder:text-zinc-700"
// //                 placeholder="••••••••"
// //                 required
// //               />
// //             </div>
            
// //             <button
// //               type="submit"
// //               disabled={isLoading}
// //               className="w-full bg-white text-black font-bold uppercase tracking-widest py-3.5 hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group/btn"
// //             >
// //               {isLoading ? (
// //                 <Loader2 className="animate-spin" size={16} />
// //               ) : (
// //                 <>
// //                   Sign In <ArrowRight size={16} className="-rotate-45 group-hover/btn:rotate-0 transition-transform duration-300"/>
// //                 </>
// //               )}
// //             </button>
// //           </form>
          
// //           <div className="mt-8 pt-8 border-t border-zinc-800 text-center relative z-10">
// //             <p className="text-zinc-500 text-sm">
// //               Don't have an account?{' '}
// //               <Link href="/auth/signup" className="text-white hover:underline underline-offset-4 decoration-zinc-700">
// //                 Sign up
// //               </Link>
// //             </p>
// //           </div>

// //         </div>
// //       </MotionDiv>
// //     </div>
// //   )
// // }


// 'use client'

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'
// import { motion } from 'framer-motion'
// import { ArrowRight, ArrowLeft, Loader2 } from 'lucide-react'

// // Reusing MotionDiv
// const MotionDiv = motion.div

// export default function LoginPage() {
//   const router = useRouter()
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [isLoading, setIsLoading] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsLoading(true)
    
//     // Simulate API delay
//     await new Promise(resolve => setTimeout(resolve, 800))
    
//     router.push('/home')
//     setIsLoading(false)
//   }

//   return (
//     <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 selection:bg-white selection:text-black relative">
      
//       {/* Back Button - Uses router.back() */}
//       <button 
//         onClick={() => router.back()}
//         type="button"
//         className="absolute top-8 left-8 flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group z-20"
//       >
//         <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
//         <span className="text-sm font-medium tracking-wide">Back</span>
//       </button>

//       {/* Background Ambient Glow */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/[0.03] blur-[120px] rounded-full" />
//       </div>

//       <MotionDiv
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="w-full max-w-md relative z-10"
//       >
//         <div className="border border-zinc-800 bg-[#050505]/50 backdrop-blur-sm p-8 md:p-10 relative group">
          
//           {/* Header */}
//           <div className="mb-10">
//             <h1 className="text-3xl font-medium tracking-tighter mb-2">Welcome Back</h1>
//             <p className="text-zinc-500 font-light text-sm">
//                 Enter your credentials to access the platform.
//             </p>
//           </div>
          
//           <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
//             <div className="space-y-2">
//               <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-white text-white px-4 py-3 outline-none transition-all duration-300 placeholder:text-zinc-700"
//                 placeholder="name@example.com"
//                 required
//               />
//             </div>
            
//             <div className="space-y-2">
//               <div className="flex justify-between items-center">
//                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Password</label>
//                  <Link href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">Forgot?</Link>
//               </div>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-white text-white px-4 py-3 outline-none transition-all duration-300 placeholder:text-zinc-700"
//                 placeholder="••••••••"
//                 required
//               />
//             </div>
            
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full bg-white text-black font-bold uppercase tracking-widest py-3.5 hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group/btn"
//             >
//               {isLoading ? (
//                 <Loader2 className="animate-spin" size={16} />
//               ) : (
//                 <>
//                   Sign In <ArrowRight size={16} className="-rotate-45 group-hover/btn:rotate-0 transition-transform duration-300"/>
//                 </>
//               )}
//             </button>
//           </form>
          
//           <div className="mt-8 pt-8 border-t border-zinc-800 text-center relative z-10">
//             <p className="text-zinc-500 text-sm">
//               Don't have an account?{' '}
//               <Link href="/auth/signup" className="text-white hover:underline underline-offset-4 decoration-zinc-700">
//                 Sign up
//               </Link>
//             </p>
//           </div>

//         </div>
//       </MotionDiv>
//     </div>
//   )
// }


'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Loader2, MoreHorizontal } from 'lucide-react'

// Reusing MotionDiv
const MotionDiv = motion.div

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showSocials, setShowSocials] = useState(false) // State to toggle socials

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800))
    
    router.push('/home')
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6 selection:bg-white selection:text-black relative">
      
      {/* Back Button */}
      <button 
        onClick={() => router.back()}
        type="button"
        className="absolute top-8 left-8 flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group z-20"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span className="text-sm font-medium tracking-wide">Back</span>
      </button>

      {/* Background Ambient Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/[0.03] blur-[120px] rounded-full" />
      </div>

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="border border-zinc-800 bg-[#050505]/50 backdrop-blur-sm p-8 md:p-10 relative group">
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-medium tracking-tighter mb-2">Welcome Back</h1>
            <p className="text-zinc-500 font-light text-sm">
                Enter your credentials to access the platform.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-white text-white px-4 py-3 outline-none transition-all duration-300 placeholder:text-zinc-700"
                placeholder="name@example.com"
                required
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                 <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Password</label>
                 <Link href="#" className="text-xs text-zinc-500 hover:text-white transition-colors">Forgot?</Link>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-zinc-900/50 border border-zinc-800 focus:border-white text-white px-4 py-3 outline-none transition-all duration-300 placeholder:text-zinc-700"
                placeholder="••••••••"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white text-black font-bold uppercase tracking-widest py-3.5 hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group/btn"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" size={16} />
              ) : (
                <>
                  Sign In <ArrowRight size={16} className="-rotate-45 group-hover/btn:rotate-0 transition-transform duration-300"/>
                </>
              )}
            </button>
          </form>

          {/* Dynamic Social Login Section */}
          <div className="mt-8 relative z-10">
            <AnimatePresence mode="wait">
              {!showSocials ? (
                /* The "Reveal" Trigger */
                <motion.div
                  key="trigger"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex justify-center"
                >
                  <button
                    onClick={() => setShowSocials(true)}
                    type="button"
                    className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors py-2 px-4 hover:bg-zinc-900/50 rounded-full border border-transparent hover:border-zinc-800"
                  >
                    <MoreHorizontal size={14} />
                    Other Options
                  </button>
                </motion.div>
              ) : (
                /* The Revealed Buttons */
                <motion.div
                  key="socials"
                  initial={{ opacity: 0, height: 0, scale: 0.95 }}
                  animate={{ opacity: 1, height: 'auto', scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-px bg-zinc-800 flex-1" />
                    <span className="text-[10px] text-zinc-600 font-bold tracking-widest uppercase">Or Continue With</span>
                    <div className="h-px bg-zinc-800 flex-1" />
                  </div>

                  {/* INSERTED CODE BLOCK STARTS HERE */}
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    {/* GOOGLE */}
                    <button className="flex items-center justify-center gap-2 py-2.5 px-4 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/50 text-sm text-zinc-400 hover:text-white transition-all group">
                      <span className="w-4 h-4 flex items-center justify-center">
                        <svg
                          className="w-full h-full fill-current transition-colors group-hover:text-white"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                      </span>
                      Google
                    </button>

                    {/* APPLE */}
                    <button className="flex items-center justify-center gap-2 py-2.5 px-4 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/50 text-sm text-zinc-400 hover:text-white transition-all group">
                      <span className="w-4 h-4 flex items-center justify-center">
                        <svg
                          className="w-full h-full fill-current scale-90 transition-colors group-hover:text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 22.773 22.773"
                        >
                          <path d="M15.769 0c.053 0 .106 0 .162 0 .13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0z" />
                          <path d="M20.67 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.166 2.072 1.434 3.348 3.018 4.104z" />
                        </svg>
                      </span>
                      Apple
                    </button>
                  </div>
                  {/* INSERTED CODE BLOCK ENDS HERE */}

                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="mt-8 pt-6 border-t border-zinc-800 text-center relative z-10">
            <p className="text-zinc-500 text-sm">
              Don't have an account?{' '}
              <Link href="/auth/signup" className="text-white hover:underline underline-offset-4 decoration-zinc-700">
                Sign up
              </Link>
            </p>
          </div>

        </div>
      </MotionDiv>
    </div>
  )
}