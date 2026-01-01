// 'use client'

// import { useEffect, useState } from 'react'
// import {
//   Box,
//   Heading,
//   VStack,
//   HStack,
//   Text,
//   IconButton,
//   Container,
//   Skeleton,
//   SkeletonText,
//   Stack,
//   Link,
// } from '@chakra-ui/react'
// import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'
// import ContentRow from '@/components/app/ContentRow'
// import { fetchTrending, fetchPopularMovies, fetchNowPlaying } from '@/lib/tmdb'
// import { MotionBox } from '@/components/shared/Motion'

// interface Movie {
//   id: number
//   title: string
//   poster_path: string | null
//   backdrop_path: string | null
//   overview: string
//   release_date: string
//   vote_average?: number
// }

// export default function HomePage() {
//   const [trending, setTrending] = useState<Movie[]>([])
//   const [popularMovies, setPopularMovies] = useState<Movie[]>([])
//   const [nowPlaying, setNowPlaying] = useState<Movie[]>([])
//   const [isLoading, setIsLoading] = useState(true)
//   const [heroIndex, setHeroIndex] = useState(0)
  
//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const [trendingData, popularData, nowPlayingData] = await Promise.all([
//           fetchTrending('week'),
//           fetchPopularMovies(),
//           fetchNowPlaying(),
//         ])
//         setTrending(trendingData)
//         setPopularMovies(popularData)
//         setNowPlaying(nowPlayingData)
//       } catch (error) {
//         console.error('Failed to fetch data:', error)
//       } finally {
//         setIsLoading(false)
//       }
//     }
    
//     loadData()
//   }, [])
  
//   // Cycle through hero images
//   useEffect(() => {
//     if (trending.length === 0) return
    
//     const interval = setInterval(() => {
//       setHeroIndex((prev) => (prev + 1) % Math.min(trending.length, 5))
//     }, 10000)
    
//     return () => clearInterval(interval)
//   }, [trending.length])
  
//   if (isLoading) {
//     return (
//       <Container maxW="container.2xl" px={8} py={6}>
//         <Box className="space-y-12">
//           {/* Hero Skeleton */}
//           <Box className="relative h-[70vh] overflow-hidden bg-gray.900">
//             <Box className="absolute bottom-12 max-w-2xl space-y-4">
//               <Skeleton height="48px" width="400px" />
//               <SkeletonText noOfLines={3} gap="3" />
//               <Skeleton height="48px" width="150px" />
//             </Box>
//           </Box>
          
//           {/* Content Row Skeletons */}
//           {[1, 2, 3].map((i) => (
//             <Box key={i}>
//               <Skeleton height="24px" width="200px" mb={4} />
//               <Box className="flex gap-4 overflow-hidden">
//                 {[1, 2, 3, 4, 5, 6].map((j) => (
//                   <Skeleton key={j} height="300px" minWidth="200px" />
//                 ))}
//               </Box>
//             </Box>
//           ))}
//         </Box>
//       </Container>
//     )
//   }
  
//   const heroMovie = trending[heroIndex] || trending[0]
  
//   return (
//     <Stack gap={12} align="stretch" className="pb-12">
//       {/* Hero section */}
//       {heroMovie && (
//         <MotionBox
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           key={heroIndex}
//           className="relative h-[70vh] overflow-hidden"
//         >
//           <Box
//             className="absolute inset-0 bg-cover bg-center"
//             style={{
//               backgroundImage: `url(https://image.tmdb.org/t/p/original${heroMovie.backdrop_path})`,
//             }}
//           />
//           <Box
//             className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"
//           />
//           <Box
//             className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"
//           />
          
//           <Container maxW="container.2xl" className="relative h-full">
//             <MotionBox
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.2 }}
//               className="absolute bottom-12 max-w-2xl"
//             >
//               <Heading size="2xl" fontWeight="light" mb={4} lineHeight="1.2">
//                 {heroMovie.title}
//               </Heading>
//               <Text color="gray.300" fontSize="lg" mb={6} lineClamp={3}>
//                 {heroMovie.overview}
//               </Text>
//               <Stack direction="row" gap={4}>
//                 <button className="px-8 py-3 bg-white text-black font-medium hover:bg-gray-100 transition-colors text-sm tracking-wide">
//                   ▶ Play Now
//                 </button>
//                 <button className="px-6 py-3 bg-gray-800/70 text-white font-medium hover:bg-gray-800 transition-colors text-sm tracking-wide border border-gray-700">
//                   + Add to Watchlist
//                 </button>
//               </Stack>
//             </MotionBox>
            
//             {/* Hero Indicators */}
//             <Box className="absolute bottom-6 right-8">
//               <Stack direction="row" gap={2}>
//                 {trending.slice(0, 5).map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setHeroIndex(index)}
//                     className={`w-2 h-2 rounded-full transition-all ${
//                       index === heroIndex 
//                         ? 'bg-white w-4' 
//                         : 'bg-gray-500 hover:bg-gray-300'
//                     }`}
//                     aria-label={`Go to slide ${index + 1}`}
//                   />
//                 ))}
//               </Stack>
//             </Box>
//           </Container>
//         </MotionBox>
//       )}
      
//       {/* Content rows */}
//       <Container maxW="container.2xl" px={8}>
//         <Stack gap={10} align="stretch">
//           <ContentRow
//             title="Trending This Week"
//             items={trending}
//             contentType="movie"
//             seeAllLink="/search?filter=trending"
//           />
          
//           <ContentRow
//             title="Now Playing"
//             items={nowPlaying}
//             contentType="movie"
//             seeAllLink="/search?filter=now_playing"
//           />
          
//           <ContentRow
//             title="Popular Movies"
//             items={popularMovies}
//             contentType="movie"
//             seeAllLink="/search?filter=popular"
//           />
          
//           {/* Continue Watching - This would come from your database */}
//           <Box>
//             <HStack justify="space-between" mb={4}>
//               <Heading size="lg" fontWeight="medium">
//                 Continue Watching
//               </Heading>
//               <Stack direction="row" gap={0}>
//                 <IconButton
//                   aria-label="Previous"
//                   size="sm"
//                   variant="ghost"
//                   borderRadius="none"
//                   _hover={{ bg: 'gray.800' }}
//                   className="focus-visible-ring"
//                 >
//                   <LuChevronLeft />
//                 </IconButton>
//                 <IconButton
//                   aria-label="Next"
//                   size="sm"
//                   variant="ghost"
//                   borderRadius="none"
//                   _hover={{ bg: 'gray.800' }}
//                   className="focus-visible-ring"
//                 >
//                   <LuChevronRight />
//                 </IconButton>
//               </Stack>
//             </HStack>
//             <Box className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 min-h-[200px] items-center justify-center border border-gray.800 p-8">
//               <Text color="gray.500" fontSize="sm" textAlign="center" width="full">
//                 No content in progress. Start watching something!
//               </Text>
//             </Box>
//           </Box>
          
//           {/* Recommended for You */}
//           <Box>
//             <HStack justify="space-between" mb={4}>
//               <Heading size="lg" fontWeight="medium">
//                 Recommended for You
//               </Heading>
//               <Link 
//                 href="/search" 
//                 color="gray.400" 
//                 fontSize="sm"
//                 _hover={{ color: 'white', textDecoration: 'underline' }}
//                 className="cursor-pointer"
//               >
//                 View All
//               </Link>
//             </HStack>
//             <Box className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
//               {trending.slice(0, 6).map((movie) => (
//                 <MotionBox
//                   key={movie.id}
//                   whileHover={{ y: -8, transition: { duration: 0.2 } }}
//                   className="group cursor-pointer"
//                 >
//                   <Box
//                     className="relative aspect-[2/3] overflow-hidden bg-gray.900"
//                     role="button"
//                     tabIndex={0}
//                     aria-label={`Watch ${movie.title}`}
//                   >
//                     {movie.poster_path ? (
//                       <img
//                         src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
//                         alt={movie.title}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                         loading="lazy"
//                       />
//                     ) : (
//                       <Box className="w-full h-full flex items-center justify-center bg-gray.800">
//                         <Text color="gray.500" fontSize="xs">
//                           No Image
//                         </Text>
//                       </Box>
//                     )}
//                     <Box className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     <Box className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black to-transparent">
//                       <Text fontSize="sm" fontWeight="medium" lineClamp={1}>
//                         {movie.title}
//                       </Text>
//                       <Text fontSize="xs" color="gray.400" mt={1}>
//                         {movie.release_date?.split('-')[0]}
//                       </Text>
//                     </Box>
//                   </Box>
//                 </MotionBox>
//               ))}
//             </Box>
//           </Box>
//         </Stack>
//       </Container>
//     </Stack>
//   )
// }


// import { Suspense } from 'react'
// import { 
//   fetchTrending, 
//   fetchPopularMovies, 
//   fetchNowPlaying, 
//   fetchTopRated, 
//   fetchMovieDetails 
// } from '@/lib/tmdb'
// import { HomeClient } from './HomeClient'
// import { Loader2 } from 'lucide-react'

// // --- SERVER COMPONENT ---
// export default async function HomePage() {
//   // 1. Parallel Data Fetching for maximum speed
//   const [trending, popular, nowPlaying, topRated] = await Promise.all([
//     fetchTrending('day'),
//     fetchPopularMovies(),
//     fetchNowPlaying(),
//     fetchTopRated()
//   ])

//   // 2. Enhance Hero Movie (First Trending Item) with Details + Videos
//   // We do this server-side so the hero trailer key is ready immediately
//   let heroMovie = trending[0]
//   try {
//     const heroDetails = await fetchMovieDetails(heroMovie.id)
//     heroMovie = { ...heroMovie, ...heroDetails }
//   } catch (e) {
//     console.warn("Failed to fetch hero details", e)
//   }

//   return (
//     <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black font-sans">
//       <Suspense fallback={
//         <div className="h-screen w-full flex items-center justify-center bg-[#050505]">
//            <Loader2 className="animate-spin text-zinc-600" size={40} />
//         </div>
//       }>
//         <HomeClient 
//           initialHero={heroMovie}
//           categories={{
//             "Trending Now": trending,
//             "New Releases": nowPlaying,
//             "Top Rated Classics": topRated,
//             "Popular Worldwide": popular,
//           }}
//         />
//       </Suspense>
//     </div>
//   )
// }

import { Suspense } from 'react'
import { 
  fetchTrending, 
  fetchPopularMovies, 
  fetchNowPlaying, 
  fetchTopRated,
  fetchGenreMovies
} from '@/lib/tmdb'
import { HomeClient } from './HomeClient'
import { Loader2 } from 'lucide-react'

export default async function HomePage() {
  // 1. Fetch all data in parallel
  // Genre 16 = Animation/Kids
  const [trending, popular, nowPlaying, topRated, kidsFamily] = await Promise.all([
    fetchTrending('day'),
    fetchPopularMovies(),
    fetchNowPlaying(),
    fetchTopRated(),
    fetchGenreMovies('16') 
  ])

  // 2. Prepare Carousel Data (Top 5 Trending)
  const heroMovies = trending.slice(0, 5);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-red-600 selection:text-white font-sans">
      <Suspense fallback={
        <div className="h-screen w-full flex items-center justify-center bg-[#050505]">
           <Loader2 className="animate-spin text-red-600" size={40} />
        </div>
      }>
        <HomeClient 
          initialHeroSet={heroMovies}
          categories={{
            "Trending Now": trending,
            "Recommended For You": popular.reverse(), // Simple algo: Reverse popular
            "New Releases": nowPlaying,
            "Kids & Family": kidsFamily,
            "Top Rated Classics": topRated,
          }}
        />
      </Suspense>
    </div>
  )
}