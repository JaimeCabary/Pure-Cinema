// 'use client'

// import {
//   Box,
//   Container,
//   Heading,
//   Text,
//   VStack,
//   HStack,
//   Button,
//   Badge,
//   Stack,
//   List,
// } from '@chakra-ui/react'
// import { LuCheck } from 'react-icons/lu'
// import { MotionBox } from '@/components/shared/Motion'
// import { useState } from 'react'

// const plans = [
//   {
//     name: 'Basic',
//     price: '$9.99',
//     period: '/month',
//     description: 'Essential streaming for individuals',
//     features: [
//       'HD streaming (720p)',
//       'Watch on 1 device at a time',
//       'Limited offline downloads',
//       'Basic audio (Stereo)',
//       'Standard library access',
//     ],
//     cta: 'Get Started',
//     popular: false,
//   },
//   {
//     name: 'Premium',
//     price: '$14.99',
//     period: '/month',
//     description: 'Our most popular plan',
//     features: [
//       '4K UHD streaming',
//       'Watch on 4 devices simultaneously',
//       'Unlimited offline downloads',
//       'Dolby Atmos & Vision',
//       'Full library access',
//       'Early access to new releases',
//       'Priority support',
//     ],
//     cta: 'Start Free Trial',
//     popular: true,
//   },
//   {
//     name: 'Family',
//     price: '$19.99',
//     period: '/month',
//     description: 'For households',
//     features: [
//       'Everything in Premium',
//       'Watch on 6 devices at once',
//       '6 individual profiles',
//       'Parental controls',
//       'Kids section',
//       'Annual billing discount',
//       'Family content sharing',
//     ],
//     cta: 'Get Started',
//     popular: false,
//   },
// ]

// export default function PricingPage() {
//   const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')
//   const [selectedPlan, setSelectedPlan] = useState('Premium')

//   const annualDiscount = 20 // 20% discount for annual billing

//   return (
//     <Container maxW="container.xl" py={16} px={4}>
//       <MotionBox
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         {/* Header */}
//         <Stack gap={4} align="center" textAlign="center" mb={12}>
//           <Heading size="3xl" fontWeight="light" letterSpacing="tight">
//             Choose Your Plan
//           </Heading>
//           <Text fontSize="xl" color="gray.300" maxW="2xl">
//             No contracts, no hidden fees. Cancel anytime.
//           </Text>
//         </Stack>

//         {/* Billing Toggle */}
//         <Box className="flex justify-center mb-12">
//           <Box className="inline-flex items-center bg-black border border-gray-800 p-1">
//             <button
//               className={`px-6 py-2 text-sm font-medium transition-colors ${
//                 billingCycle === 'monthly'
//                   ? 'bg-white text-black'
//                   : 'text-gray-400 hover:text-white'
//               }`}
//               onClick={() => setBillingCycle('monthly')}
//             >
//               Monthly
//             </button>
//             <button
//               className={`px-6 py-2 text-sm font-medium transition-colors ${
//                 billingCycle === 'annual'
//                   ? 'bg-white text-black'
//                   : 'text-gray-400 hover:text-white'
//               }`}
//               onClick={() => setBillingCycle('annual')}
//             >
//               Annual
//               <Badge ml={2} colorPalette="green" fontSize="xs">
//                 Save {annualDiscount}%
//               </Badge>
//             </button>
//           </Box>
//         </Box>

//         {/* Plans */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {plans.map((plan) => (
//             <MotionBox
//               key={plan.name}
//               whileHover={{ y: -8 }}
//               className={`relative border p-8 ${
//                 plan.popular
//                   ? 'border-white bg-gray-900/20'
//                   : 'border-gray-800'
//               }`}
//             >
//               {plan.popular && (
//                 <Box className="absolute -top-3 left-1/2 transform -translate-x-1/2">
//                   <Badge
//                     colorPalette="white"
//                     bg="white"
//                     color="black"
//                     px={4}
//                     py={1}
//                     borderRadius="none"
//                   >
//                     Most Popular
//                   </Badge>
//                 </Box>
//               )}

//               <Stack gap={6} align="stretch">
//                 {/* Plan Header */}
//                 <Box>
//                   <Heading size="xl" fontWeight="medium">
//                     {plan.name}
//                   </Heading>
//                   <HStack align="baseline" mt={2}>
//                     <Text fontSize="4xl" fontWeight="light">
//                       {billingCycle === 'annual' 
//                         ? `$${(parseFloat(plan.price.slice(1)) * 0.8).toFixed(2)}`
//                         : plan.price}
//                     </Text>
//                     <Text color="gray.400">{plan.period}</Text>
//                   </HStack>
//                   <Text color="gray.400" mt={2}>
//                     {plan.description}
//                   </Text>
//                 </Box>

//                 {/* Features */}
//                 <List.Root gap={3}>
//                   {plan.features.map((feature, index) => (
//                     <List.Item key={index}>
//                       <List.Indicator asChild color="green.400">
//                         <LuCheck />
//                       </List.Indicator>
//                       {feature}
//                     </List.Item>
//                   ))}
//                 </List.Root>

//                 {/* CTA */}
//                 <Button
//                   className={`w-full py-4 text-sm font-medium tracking-wide ${
//                     plan.popular
//                       ? 'bg-white text-black hover:bg-gray-100'
//                       : 'bg-transparent border border-gray-600 text-white hover:border-white'
//                   }`}
//                   onClick={() => setSelectedPlan(plan.name)}
//                 >
//                   {plan.cta}
//                 </Button>

//                 {/* Annual Note */}
//                 {billingCycle === 'annual' && (
//                   <Text color="gray.400" fontSize="sm" textAlign="center">
//                     Billed annually as ${(parseFloat(plan.price.slice(1)) * 12 * 0.8).toFixed(2)}
//                   </Text>
//                 )}
//               </Stack>
//             </MotionBox>
//           ))}
//         </div>

//         {/* FAQ */}
//         <Box className="mt-16 pt-12 border-t border-gray-800">
//           <Heading size="xl" fontWeight="light" mb={8} textAlign="center">
//             Frequently Asked Questions
//           </Heading>
//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               {
//                 q: 'Can I change plans anytime?',
//                 a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.',
//               },
//               {
//                 q: 'Is there a free trial?',
//                 a: 'Yes, all new users get a 7-day free trial of Premium. No credit card required to start.',
//               },
//               {
//                 q: 'How many devices can I use?',
//                 a: 'It depends on your plan. Basic: 1 device, Premium: 4 devices, Family: 6 devices simultaneously.',
//               },
//               {
//                 q: 'What payment methods do you accept?',
//                 a: 'We accept all major credit cards, PayPal, Apple Pay, and Google Pay.',
//               },
//               {
//                 q: 'Is 4K streaming available on all devices?',
//                 a: '4K streaming requires compatible devices and sufficient internet speed (25 Mbps minimum).',
//               },
//               {
//                 q: 'Can I share my account?',
//                 a: 'Family plans support 6 individual profiles. Sharing outside your household violates our terms.',
//               },
//             ].map((item, index) => (
//               <Box key={index} className="border border-gray-800 p-6">
//                 <Text fontWeight="medium" mb={3}>
//                   {item.q}
//                 </Text>
//                 <Text color="gray.400">{item.a}</Text>
//               </Box>
//             ))}
//           </div>
//         </Box>

//         {/* Final CTA */}
//         <Box className="mt-16 text-center">
//           <Text color="gray.400" mb={6}>
//             Need help choosing? Contact our team for personalized recommendations.
//           </Text>
//           <Button
//             size="lg"
//             variant="outline"
//             borderRadius="none"
//             borderColor="white"
//             _hover={{ bg: 'white', color: 'black' }}
//           >
//             Contact Sales
//           </Button>
//         </Box>
//       </MotionBox>
//     </Container>
//   )
// }


// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { Check, Sparkles } from 'lucide-react'

// const plans = [
//   {
//     name: 'Basic',
//     price: '9',
//     description: 'For the casual viewer.',
//     features: ['720p Streaming', '1 Device', 'Limited Downloads', 'Stereo Audio'],
//   },
//   {
//     name: 'Pro',
//     price: '14',
//     popular: true,
//     description: 'The cinematic standard.',
//     features: ['4K HDR + Dolby Vision', '4 Devices', 'Unlimited Downloads', 'Dolby Atmos', 'Early Access'],
//   },
//   {
//     name: 'Family',
//     price: '19',
//     description: 'Entertainment for all.',
//     features: ['8K Ready', '6 Devices', 'Parental Controls', 'Shared Watchlists', 'Priority Support'],
//   },
// ]

// export default function PricingPage() {
//   const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')

//   return (
//     <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header */}
//         <div className="text-center mb-24 space-y-4">
//           <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter">
//             Unlock the <span className="text-zinc-500">Universe.</span>
//           </h1>
//           <p className="text-zinc-400 text-lg max-w-lg mx-auto font-light">
//             Simple, transparent pricing. Cancel anytime.
//           </p>
          
//           {/* Toggle */}
//           <div className="flex items-center justify-center gap-4 mt-8">
//             <span className={`text-sm ${billing === 'monthly' ? 'text-white' : 'text-zinc-500'}`}>Monthly</span>
//             <button 
//               onClick={() => setBilling(b => b === 'monthly' ? 'annual' : 'monthly')}
//               className="w-14 h-8 rounded-full bg-zinc-800 p-1 relative transition-colors hover:bg-zinc-700"
//             >
//               <motion.div 
//                 className="w-6 h-6 bg-white rounded-full shadow-lg"
//                 animate={{ x: billing === 'monthly' ? 0 : 24 }}
//               />
//             </button>
//             <span className={`text-sm ${billing === 'annual' ? 'text-white' : 'text-zinc-500'}`}>Annual (-20%)</span>
//           </div>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid md:grid-cols-3 gap-8 items-start">
//           {plans.map((plan, i) => (
//             <div key={plan.name} className="relative group">
//               {/* Glowing Border for Popular Plan */}
//               {plan.popular && (
//                 <div className="absolute -inset-[1px] bg-gradient-to-b from-zinc-500 via-zinc-600 to-zinc-600 rounded-3xl opacity-75 blur-sm group-hover:opacity-0 transition-opacity duration-500" />
//               )}
              
//               <div className={`
//                 relative h-full p-8 rounded-3xl border transition-all duration-300
//                 ${plan.popular 
//                   ? 'bg-zinc-900/90 border-transparent' 
//                   : 'bg-black border-zinc-800 hover:border-zinc-600'
//                 }
//               `}>
//                 {plan.popular && (
//                   <div className="absolute top-0 right-0 p-4">
//                     <Sparkles className="text-indigo-400" size={20} />
//                   </div>
//                 )}

//                 <div className="mb-8">
//                   <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
//                   <div className="flex items-baseline gap-1">
//                     <span className="text-4xl font-bold tracking-tight">
//                       ${billing === 'annual' ? (parseInt(plan.price) * 0.8).toFixed(0) : plan.price}
//                     </span>
//                     <span className="text-zinc-500">/mo</span>
//                   </div>
//                   <p className="text-zinc-400 text-sm mt-4">{plan.description}</p>
//                 </div>

//                 <ul className="space-y-4 mb-8">
//                   {plan.features.map(feat => (
//                     <li key={feat} className="flex items-center gap-3 text-sm text-zinc-300">
//                       <Check size={16} className="text-white" />
//                       {feat}
//                     </li>
//                   ))}
//                 </ul>

//                 <button className={`
//                   w-full py-4 text-sm font-bold tracking-wide uppercase transition-all duration-300
//                   ${plan.popular 
//                     ? 'bg-white text-black hover:bg-indigo-50' 
//                     : 'bg-zinc-800 text-white hover:bg-zinc-700'
//                   }
//                 `}>
//                   Choose {plan.name}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   )
// }



'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Check, Sparkles, Play, Loader2 } from 'lucide-react'
// Importing from your existing lib
import { fetchNowPlaying, fetchMovieDetails } from '@/lib/tmdb'

// --- VIDEO PREVIEW COMPONENT ---
const CinemaPreviewSection = () => {
  const [movies, setMovies] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPreviews = async () => {
      try {
        // 1. Get Now Playing using your existing function
        const nowPlaying = await fetchNowPlaying()
        
        // 2. Get Video Details for top 5 (to find YouTube keys)
        const detailedMovies = await Promise.all(
          nowPlaying.slice(0, 5).map(async (movie: any) => {
            try {
              // Using your existing detail fetcher which appends videos
              const details = await fetchMovieDetails(movie.id)
              const trailer = details.videos?.results?.find(
                (v: any) => v.type === 'Trailer' && v.site === 'YouTube'
              ) || details.videos?.results?.[0]

              return {
                id: movie.id,
                title: movie.title,
                backdrop: movie.backdrop_path 
                  ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` 
                  : null,
                key: trailer?.key
              }
            } catch (e) {
              return null
            }
          })
        )

        // Filter valid results
        setMovies(detailedMovies.filter(m => m && m.backdrop && m.key))
      } catch (error) {
        console.error("Failed to load cinema previews:", error)
      } finally {
        setLoading(false)
      }
    }

    loadPreviews()
  }, [])

  if (loading) return (
    <div className="h-40 flex items-center justify-center text-zinc-600 gap-2 mb-10">
        <Loader2 className="animate-spin" size={20} /> <span className="text-xs uppercase tracking-widest">Loading Cinema...</span>
    </div>
  )

  if (movies.length === 0) return null

  return (
    <div className="mb-24 fade-in">
      <div className="flex items-center gap-2 mb-6 px-1">
         <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-pulse" />
         <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Trending</span>
      </div>

      <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar snap-x snap-mandatory">
         {movies.map((movie) => (
           <div 
             key={movie.id} 
             className="relative min-w-[300px] md:min-w-[400px] aspect-video bg-zinc-900 rounded-xl overflow-hidden group cursor-pointer border border-zinc-800 hover:border-zinc-500 transition-colors snap-center shrink-0"
           >
             <img 
               src={movie.backdrop} 
               alt={movie.title}
               className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
             />
             
             {/* Play Overlay */}
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:scale-110 transition-transform">
                    <Play size={20} fill="white" className="text-white ml-1" />
                </div>
             </div>

             <div className="absolute inset-0 p-4 flex flex-col justify-end pointer-events-none bg-gradient-to-t from-black/90 via-transparent to-transparent">
                <h3 className="text-white font-medium text-sm tracking-tight translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {movie.title}
                </h3>
             </div>
           </div>
         ))}
      </div>
    </div>
  )
}

// --- PRICING DATA ---
const plans = [
  {
    name: 'Basic',
    price: '9',
    description: 'For the casual viewer.',
    features: ['720p Streaming', '1 Device', 'Limited Downloads', 'Stereo Audio'],
  },
  {
    name: 'Pro',
    price: '14',
    popular: true,
    description: 'The cinematic standard.',
    features: ['4K HDR + Dolby Vision', '4 Devices', 'Unlimited Downloads', 'Dolby Atmos', 'Early Access'],
  },
  {
    name: 'Family',
    price: '19',
    description: 'Entertainment for all.',
    features: ['8K Ready', '6 Devices', 'Parental Controls', 'Shared Watchlists', 'Priority Support'],
  },
]

export default function PricingPage() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter">
            Unlock the <span className="text-zinc-500">Universe.</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-lg mx-auto font-light">
            Simple, transparent pricing. Cancel anytime.
          </p>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm ${billing === 'monthly' ? 'text-white' : 'text-zinc-500'}`}>Monthly</span>
            <button 
              onClick={() => setBilling(b => b === 'monthly' ? 'annual' : 'monthly')}
              className="w-14 h-8 rounded-full bg-zinc-800 p-1 relative transition-colors hover:bg-zinc-700"
            >
              <motion.div 
                className="w-6 h-6 bg-white rounded-full shadow-lg"
                animate={{ x: billing === 'monthly' ? 0 : 24 }}
              />
            </button>
            <span className={`text-sm ${billing === 'annual' ? 'text-white' : 'text-zinc-500'}`}>Annual (-20%)</span>
          </div>
        </div>

        {/* Video Fetch Section */}
        <CinemaPreviewSection />

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <div key={plan.name} className="relative group">
              {/* Glowing Border for Popular Plan */}
              {plan.popular && (
                <div className="absolute -inset-[1px] bg-gradient-to-b from-zinc-500 via-zinc-600 to-zinc-600 rounded-3xl opacity-75 blur-sm group-hover:opacity-80 transition-opacity duration-500" />
              )}
              
              <div className={`
                relative h-full p-8 rounded-3xl border transition-all duration-300
                ${plan.popular 
                  ? 'bg-zinc-900/90 border-transparent' 
                  : 'bg-black border-zinc-800 hover:border-zinc-600'
                }
              `}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 p-4">
                    <Sparkles className="text-indigo-400" size={20} />
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-medium mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight">
                      ${billing === 'annual' ? (parseInt(plan.price) * 0.8).toFixed(0) : plan.price}
                    </span>
                    <span className="text-zinc-500">/mo</span>
                  </div>
                  <p className="text-zinc-400 text-sm mt-4">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map(feat => (
                    <li key={feat} className="flex items-center gap-3 text-sm text-zinc-300">
                      <Check size={16} className="text-white" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <button className={`
                  w-full py-4 text-sm font-bold tracking-wide uppercase transition-all duration-300
                  ${plan.popular 
                    ? 'bg-white text-black hover:bg-indigo-50' 
                    : 'bg-zinc-800 text-white hover:bg-zinc-700'
                  }
                `}>
                  Choose {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}