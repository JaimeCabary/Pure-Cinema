// // 'use client'

// // import {
// //   Box,
// //   Container,
// //   Heading,
// //   Text,
// //   VStack,
// //   HStack,
// //   Separator,
// //   Stack,
// // } from '@chakra-ui/react'
// // import { MotionBox } from '@/components/shared/Motion'

// // // export default function AboutPage() {
// // //   return (
// // //     <Container maxW="container.xl" py={16} px={4}>
// // //       <MotionBox
// // //         initial={{ opacity: 0, y: 20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ duration: 0.6 }}
// // //       >
// // //         {/* Hero */}
// // //         <Stack gap={6} align="center" textAlign="center" mb={16}>
// // //           <Heading size="3xl" fontWeight="light" letterSpacing="tight">
// // //             About Pure Cinema
// // //           </Heading>
// // //           <Text fontSize="xl" color="gray.300" maxW="2xl">
// // //             Redefining cinematic streaming through minimal design and maximum performance.
// // //           </Text>
// // //         </Stack>

// // //         {/* Mission */}
// // //         <Box className="border border-gray-800 p-8 mb-12">
// // //           <Heading size="xl" fontWeight="light" mb={6}>
// // //             Our Mission
// // //           </Heading>
// // //           <Text fontSize="lg" color="gray.300" lineHeight="tall">
// // //             In a world of endless content and distracting interfaces, Pure Cinema exists to bring 
// // //             focus back to what matters: the story. We believe streaming should feel intentional, 
// // //             immersive, and effortless—not overwhelming.
// // //           </Text>
// // //         </Box>

// // //         {/* Principles */}
// // //         <div className="grid md:grid-cols-3 gap-8 mb-12">
// // //           <Box className="border border-gray-800 p-6">
// // //             <Text fontSize="4xl" mb={4}>🎬</Text>
// // //             <Heading size="md" fontWeight="medium" mb={4}>
// // //               Content First
// // //             </Heading>
// // //             <Text color="gray.400">
// // //               No auto-play trailers, no flashing banners. Just your content, presented with the 
// // //               reverence it deserves.
// // //             </Text>
// // //           </Box>

// // //           <Box className="border border-gray-800 p-6">
// // //             <Text fontSize="4xl" mb={4}>⚡</Text>
// // //             <Heading size="md" fontWeight="medium" mb={4}>
// // //               Zero Latency
// // //             </Heading>
// // //             <Text color="gray.400">
// // //               From click to playback in under 500ms. Performance isn't a feature—it's the foundation.
// // //             </Text>
// // //           </Box>

// // //           <Box className="border border-gray-800 p-6">
// // //             <Text fontSize="4xl" mb={4}>⌨️</Text>
// // //             <Heading size="md" fontWeight="medium" mb={4}>
// // //               Keyboard Driven
// // //             </Heading>
// // //             <Text color="gray.400">
// // //               Navigate entirely without a mouse. Precision controls for power users who value 
// // //               efficiency.
// // //             </Text>
// // //           </Box>
// // //         </div>

// // //         {/* Team */}
// // //         <Box mb={12}>
// // //           <Heading size="xl" fontWeight="light" mb={8}>
// // //             The Team
// // //           </Heading>
// // //           <div className="grid md:grid-cols-4 gap-6">
// // //             {[
// // //               { name: 'Alex Chen', role: 'Founder & CEO', desc: 'Former Netflix, 10+ years streaming tech' },
// // //               { name: 'Maya Rodriguez', role: 'Design Director', desc: 'Ex-Apple, human-centered design' },
// // //               { name: 'James Wilson', role: 'Head of Engineering', desc: 'Built infrastructure for 10M+ users' },
// // //               { name: 'Sarah Kim', role: 'Content Curator', desc: 'Film critic & preservationist' },
// // //             ].map((person, index) => (
// // //               <Box key={index} className="border border-gray-800 p-4">
// // //                 <Box className="w-16 h-16 bg-gray-800 mb-4" />
// // //                 <Text fontWeight="medium">{person.name}</Text>
// // //                 <Text color="gray.400" fontSize="sm" mb={2}>{person.role}</Text>
// // //                 <Text color="gray.500" fontSize="xs">{person.desc}</Text>
// // //               </Box>
// // //             ))}
// // //           </div>
// // //         </Box>

// // //         {/* Stats */}
// // //         <Box className="border border-gray-800 p-8 mb-12">
// // //           <div className="grid md:grid-cols-4 gap-8 text-center">
// // //             <Box>
// // //               <Text fontSize="4xl" fontWeight="light">4K</Text>
// // //               <Text color="gray.400">Streaming Quality</Text>
// // //             </Box>
// // //             <Box>
// // //               <Text fontSize="4xl" fontWeight="light">&lt;500ms</Text>
// // //               <Text color="gray.400">Playback Start</Text>
// // //             </Box>
// // //             <Box>
// // //               <Text fontSize="4xl" fontWeight="light">99.9%</Text>
// // //               <Text color="gray.400">Uptime</Text>
// // //             </Box>
// // //             <Box>
// // //               <Text fontSize="4xl" fontWeight="light">50+</Text>
// // //               <Text color="gray.400">Countries</Text>
// // //             </Box>
// // //           </div>
// // //         </Box>

// // //         {/* Contact */}
// // //         <Box>
// // //           <Heading size="xl" fontWeight="light" mb={6}>
// // //             Get in Touch
// // //           </Heading>
// // //           <div className="grid md:grid-cols-2 gap-8">
// // //             <Box>
// // //               <Text color="gray.400" mb={4}>
// // //                 For press inquiries, partnerships, or general questions:
// // //               </Text>
// // //               <Text fontWeight="medium">contact@Pure Cinema.com</Text>
// // //             </Box>
// // //             <Box>
// // //               <Text color="gray.400" mb={4}>
// // //                 Join our curated newsletter for film recommendations and updates:
// // //               </Text>
// // //               <div className="flex">
// // //                 <input
// // //                   type="email"
// // //                   placeholder="Your email"
// // //                   className="flex-1 bg-black border border-gray-700 px-4 py-2 focus:outline-none focus:border-gray-500"
// // //                 />
// // //                 <button className="px-6 py-2 bg-white text-black font-medium hover:bg-gray-100 transition-colors">
// // //                   Subscribe
// // //                 </button>
// // //               </div>
// // //             </Box>
// // //           </div>
// // //         </Box>
// // //       </MotionBox>
// // //     </Container>
// // //   )
// // // }



// // 'use client'

// // import { motion } from 'framer-motion'

// // const team = [
// //   { name: 'Alex Chen', role: 'CEO', prev: 'Ex-Netflix' },
// //   { name: 'Maya R.', role: 'Design', prev: 'Ex-Apple' },
// //   { name: 'James W.', role: 'Eng', prev: 'Ex-SpaceX' },
// //   { name: 'Sarah K.', role: 'Content', prev: 'Ex-A24' },
// // ]

// // const stats = [
// //   { label: 'Latency', val: '<500ms' },
// //   { label: 'Quality', val: '4K HDR' },
// //   { label: 'Uptime', val: '99.9%' },
// // ]

// // export default function AboutPage() {
// //   return (
// //     <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6 font-sans">
// //       <div className="max-w-5xl mx-auto">
        
// //         {/* Mission Statement */}
// //         <section className="mb-40">
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //           >
// //             <h1 className="text-4xl md:text-7xl font-medium tracking-tighter leading-[1.1] mb-12">
// //               We believe streaming has become <span className="text-zinc-500">too noisy.</span> <br/>
// //               Pure Cinema is our answer.
// //             </h1>
            
// //             <div className="grid md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
// //               <p className="text-zinc-400 text-lg font-light leading-relaxed">
// //                 In a world of auto-playing trailers and cluttered interfaces, we built a sanctuary for cinema. 
// //                 We stripped away the algorithms to focus on one thing: <span className="text-white">The Story.</span>
// //               </p>
// //               <p className="text-zinc-400 text-lg font-light leading-relaxed">
// //                 Built by a small team of engineers and film buffs, Pure Cinema combines OS-level performance 
// //                 with gallery-grade aesthetics.
// //               </p>
// //             </div>
// //           </motion.div>
// //         </section>

// //         {/* The Stats (Big Typography) */}
// //         <section className="mb-40 grid md:grid-cols-3 gap-8">
// //           {stats.map((stat, i) => (
// //             <motion.div 
// //               key={stat.label}
// //               initial={{ opacity: 0, scale: 0.9 }}
// //               whileInView={{ opacity: 1, scale: 1 }}
// //               transition={{ delay: i * 0.1 }}
// //               className="border border-white/10 p-12 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors duration-500"
// //             >
// //               <span className="text-6xl font-bold tracking-tighter mb-2">{stat.val}</span>
// //               <span className="text-zinc-500 uppercase tracking-widest text-xs">{stat.label}</span>
// //             </motion.div>
// //           ))}
// //         </section>

// //         {/* Team Grid */}
// //         <section>
// //           <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-4">
// //             <h2 className="text-2xl font-light">The Architects</h2>
// //             <span className="text-zinc-500">04</span>
// //           </div>
          
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //             {team.map((member) => (
// //               <div key={member.name} className="group cursor-default">
// //                 <div className="aspect-square bg-zinc-900 mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden">
// //                   {/* Placeholder for team image - adds a nice hover zoom effect */}
// //                   <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-black group-hover:scale-110 transition-transform duration-700" />
// //                 </div>
// //                 <h3 className="font-medium text-lg">{member.name}</h3>
// //                 <p className="text-zinc-500 text-sm">{member.role} • {member.prev}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </section>

// //       </div>
// //     </div>
// //   )
// // }

// 'use client'

// import { useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Plus, Minus } from 'lucide-react'

// // --- DATA ---

// const team = [
//   { 
//     name: 'Shalom Ebere Chidi-Azuwike', 
//     role: 'Founder & Head Engineer', 
//     prev: '21 • Software Engineering Student',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80'
//   },
//   { 
//     name: 'Rain Kaludgan', 
//     role: 'CFO', 
//     prev: 'Ex-Logistics',
//     image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80'
//   },
//   { 
//     name: 'James W.', 
//     role: 'Lead Architect', 
//     prev: 'Ex-SpaceX',
//     image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80'
//   },
//   { 
//     name: 'Sarah K.', 
//     role: 'Content', 
//     prev: 'Ex-A24',
//     image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&q=80'
//   },
// ]

// const stats = [
//   { label: 'Latency', val: '<500ms' },
//   { label: 'Quality', val: '4K HDR' },
//   { label: 'Uptime', val: '99.9%' },
// ]

// const faqs = [
//   { q: "What defines 'Pure Cinema'?", a: "It is an uncompromising approach to streaming. We remove algorithmic suggestions, auto-playing trailers, and interface clutter. It is just you and the film." },
//   { q: "How do you achieve <500ms latency?", a: "We utilize a custom edge-network architecture. Unlike traditional CDNs, our 'Fetch Elements' pre-cache the first 60 seconds of likely-to-watch content." },
//   { q: "Is the platform really offline-first?", a: "Yes. Our PWA architecture allows you to download entire collections. The interface remains fully navigable without an internet connection." },
// ]

// // --- COMPONENTS ---

// const AccordionItem = ({ q, a }: { q: string, a: string }) => {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <div className="border-b border-white/10">
//       <button 
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full py-6 flex items-center justify-between text-left group"
//       >
//         <span className="text-lg md:text-xl font-light text-zinc-300 group-hover:text-white transition-colors">
//           {q}
//         </span>
//         <span className="text-white/50 group-hover:text-white transition-colors">
//           {isOpen ? <Minus size={18} /> : <Plus size={18} />}
//         </span>
//       </button>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             className="overflow-hidden"
//           >
//             <p className="pb-6 text-zinc-500 leading-relaxed max-w-2xl font-light">
//               {a}
//             </p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }

// const AvatarCarousel = () => {
//   const avatars = [...team, ...team, ...team] // Duplicate for infinite loop
//   return (
//     <div className="w-full overflow-hidden py-10 border-y border-white/5 bg-white/[0.02] mb-32">
//       <motion.div 
//         className="flex gap-8 w-max"
//         animate={{ x: [0, -1000] }}
//         transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//       >
//         {avatars.map((member, i) => (
//           <div key={i} className="flex items-center gap-3 min-w-[250px] opacity-40 hover:opacity-100 transition-opacity duration-300">
//             <div className="w-10 h-10 rounded-full overflow-hidden grayscale">
//               <img src={member.image} alt="" className="w-full h-full object-cover" />
//             </div>
//             <div>
//               <p className="text-sm font-medium text-white">{member.name.split(' ')[0]}</p>
//               <p className="text-xs text-zinc-500">Active Contributor</p>
//             </div>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   )
// }

// // --- MAIN PAGE ---

// export default function AboutPage() {
//   return (
//     <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6 font-sans">
//       <div className="max-w-5xl mx-auto">
        
//         {/* Mission Statement */}
//         <section className="mb-40">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-4xl md:text-7xl font-medium tracking-tighter leading-[1.1] mb-12">
//               We believe streaming has become <span className="text-zinc-500">too noisy.</span> <br/>
//               Pure Cinema is our answer.
//             </h1>
            
//             <div className="grid md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
//               <p className="text-zinc-400 text-lg font-light leading-relaxed">
//                 In a world of auto-playing trailers and cluttered interfaces, we built a sanctuary for cinema. 
//                 We stripped away the algorithms to focus on one thing: <span className="text-white">The Story.</span>
//               </p>
//               <p className="text-zinc-400 text-lg font-light leading-relaxed">
//                 Built by a small team of engineers and film buffs, Pure Cinema combines OS-level performance 
//                 with gallery-grade aesthetics.
//               </p>
//             </div>
//           </motion.div>
//         </section>

//         {/* The Stats (Big Typography) */}
//         <section className="mb-32 grid md:grid-cols-3 gap-8">
//           {stats.map((stat, i) => (
//             <motion.div 
//               key={stat.label}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ delay: i * 0.1 }}
//               className="border border-white/10 p-12 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors duration-500"
//             >
//               <span className="text-6xl font-bold tracking-tighter mb-2">{stat.val}</span>
//               <span className="text-zinc-500 uppercase tracking-widest text-xs">{stat.label}</span>
//             </motion.div>
//           ))}
//         </section>
//       </div>

//       {/* Full Width Carousel */}
//       <AvatarCarousel />

//       <div className="max-w-5xl mx-auto">
//         {/* Team Grid */}
//         <section className="mb-40">
//           <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-4">
//             <h2 className="text-2xl font-light">The Architects</h2>
//             <span className="text-zinc-500">04</span>
//           </div>
          
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {team.map((member) => (
//               <div key={member.name} className="group cursor-default">
//                 {/* Updated to use Image instead of empty div */}
//                 <div className="aspect-[4/5] bg-zinc-900 mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden relative">
//                    <img 
//                     src={member.image} 
//                     alt={member.name}
//                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
//                    />
//                 </div>
//                 <h3 className="font-medium text-lg leading-tight mb-1">{member.name}</h3>
//                 <p className="text-zinc-500 text-sm leading-tight">{member.role}</p>
//                 <p className="text-zinc-600 text-xs mt-1">{member.prev}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Q&A Section */}
//         <section className="max-w-3xl">
//           <div className="mb-12">
//              <h2 className="text-3xl font-light tracking-tight mb-2">Philosophy</h2>
//              <p className="text-zinc-500">Common questions about our approach.</p>
//           </div>
//           <div className="space-y-2">
//             {faqs.map((faq, i) => (
//               <AccordionItem key={i} q={faq.q} a={faq.a} />
//             ))}
//           </div>
//         </section>

//       </div>
//     </div>
//   )
// }


'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, Star, Quote } from 'lucide-react'

// --- DATA ---

const team = [
  { 
    name: 'Shalom Ebere Chidi-Azuwike', 
    role: 'Founder & Head Engineer', 
    prev: '21 • Software Engineering Student',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80'
  },
  { 
    name: 'Rain Kaludgan', 
    role: 'CFO', 
    prev: 'Ex-Logistics',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80'
  },
  { 
    name: 'James W.', 
    role: 'Lead Architect', 
    prev: 'Ex-SpaceX',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80'
  },
  { 
    name: 'Sarah K.', 
    role: 'Content', 
    prev: 'Ex-A24',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&q=80'
  },
]

// Real user reviews/cards data
const users = [
  { name: "David O.", location: "Lagos, NG", review: "Finally, a platform that doesn't compress the life out of the picture. The blacks are actually black.", tier: "Pro Member", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop" },
  { name: "Elena R.", location: "Berlin, DE", review: "The offline architecture is genius. I downloaded a 4K collection for my flight and it worked seamlessly.", tier: "Founder's Club", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop" },
  { name: "Marcus J.", location: "New York, US", review: "Minimalist perfection. No distractions, just pure cinema. This is what streaming should have always been.", tier: "Pro Member", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
  { name: "Sarah L.", location: "London, UK", review: "Pure Cinema respects the film grain. As a colorist, this is the only platform I actually enjoy watching on.", tier: "Pro Member", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
  { name: "Kenji T.", location: "Tokyo, JP", review: "Fastest load times I have ever seen. The 'Fetch Elements' tech is not a gimmick.", tier: "Founder's Club", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
]

const stats = [
  { label: 'Latency', val: '<500ms' },
  { label: 'Quality', val: '4K HDR' },
  { label: 'Uptime', val: '99.9%' },
]

const faqs = [
  { q: "What defines 'Pure Cinema'?", a: "It is an uncompromising approach to streaming. We remove algorithmic suggestions, auto-playing trailers, and interface clutter. It is just you and the film." },
  { q: "How do you achieve <500ms latency?", a: "We utilize a custom edge-network architecture. Unlike traditional CDNs, our 'Fetch Elements' pre-cache the first 60 seconds of likely-to-watch content." },
  { q: "Is the platform really offline-first?", a: "Yes. Our PWA architecture allows you to download entire collections. The interface remains fully navigable without an internet connection." },
]

// --- COMPONENTS ---

const AccordionItem = ({ q, a }: { q: string, a: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg md:text-xl font-light text-zinc-300 group-hover:text-white transition-colors">
          {q}
        </span>
        <span className="text-white/50 group-hover:text-white transition-colors">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-zinc-500 leading-relaxed max-w-2xl font-light">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const UserCardCarousel = () => {
  const allUsers = [...users, ...users, ...users] // Triple for smooth loop

  return (
    <div className="w-full overflow-hidden py-20 border-y border-white/5 bg-white/[0.02] mb-32 relative">
      
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

      <motion.div 
        className="flex gap-6 w-max px-10"
        animate={{ x: [0, -1800] }} // Adjusted for card width
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        {allUsers.map((user, i) => (
          <div 
            key={i} 
            className="w-[350px] bg-zinc-900/40 backdrop-blur-md border border-white/10 p-8 flex flex-col justify-between hover:border-white/30 transition-colors group"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <Quote className="text-zinc-600 fill-zinc-600/20" size={24} />
                <div className="flex gap-1">
                   {[1,2,3,4,5].map(n => <Star key={n} size={10} className="fill-white text-white" />)}
                </div>
              </div>
              <p className="text-zinc-300 font-light leading-relaxed mb-8 min-h-[80px]">
                "{user.review}"
              </p>
            </div>

            <div className="flex items-center gap-4 border-t border-white/5 pt-6">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-zinc-800">
                <img src={user.img} alt={user.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white font-medium text-sm">{user.name}</p>
                <p className="text-zinc-500 text-xs">{user.location}</p>
              </div>
              <span className="ml-auto text-[10px] uppercase tracking-widest text-zinc-600 border border-zinc-800 px-2 py-1 rounded">
                {user.tier}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

// --- MAIN PAGE ---

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Mission Statement */}
        <section className="mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-medium tracking-tighter leading-[1.1] mb-12">
              We believe streaming has become <span className="text-zinc-500">too noisy.</span> <br/>
              Pure Cinema is our answer.
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                In a world of auto-playing trailers and cluttered interfaces, we built a sanctuary for cinema. 
                We stripped away the algorithms to focus on one thing: <span className="text-white">The Story.</span>
              </p>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Built by a small team of engineers and film buffs, Pure Cinema combines OS-level performance 
                with gallery-grade aesthetics.
              </p>
            </div>
          </motion.div>
        </section>

        {/* The Stats (Big Typography) */}
        <section className="mb-32 grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="border border-white/10 p-12 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors duration-500"
            >
              <span className="text-6xl font-bold tracking-tighter mb-2">{stat.val}</span>
              <span className="text-zinc-500 uppercase tracking-widest text-xs">{stat.label}</span>
            </motion.div>
          ))}
        </section>
      </div>

      {/* FULL WIDTH USER CARDS CAROUSEL */}
      <UserCardCarousel />

      <div className="max-w-5xl mx-auto">
        {/* Team Grid */}
        <section className="mb-40">
          <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-4">
            <h2 className="text-2xl font-light">The Architects</h2>
            <span className="text-zinc-500">04</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {team.map((member) => (
              <div key={member.name} className="group cursor-default">
                {/* Updated to use Image instead of empty div */}
                <div className="aspect-[4/5] bg-zinc-900 mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden relative">
                   <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                   />
                </div>
                <h3 className="font-medium text-lg leading-tight mb-1">{member.name}</h3>
                <p className="text-zinc-500 text-sm leading-tight">{member.role}</p>
                <p className="text-zinc-600 text-xs mt-1">{member.prev}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Q&A Section */}
        <section className="max-w-3xl">
          <div className="mb-12">
             <h2 className="text-3xl font-light tracking-tight mb-2">Philosophy</h2>
             <p className="text-zinc-500">Common questions about our approach.</p>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}