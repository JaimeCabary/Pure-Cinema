// 'use client'

// import {
//   Box,
//   Container,
//   Heading,
//   Text,
//   VStack,
//   HStack,
//   Button,
//   IconButton,
//   Separator,
//   Stack,
// } from '@chakra-ui/react'
// import { LuPlay, LuPlus, LuVolume2, LuSettings } from 'react-icons/lu'
// import { useState, useEffect, useRef } from 'react'
// import { useParams } from 'next/navigation'
// import { fetchMovieDetails } from '@/lib/tmdb'
// import { MotionBox } from '@/components/shared/Motion'

// interface MovieDetails {
//   id: number
//   title: string
//   overview: string
//   backdrop_path: string
//   poster_path: string
//   release_date: string
//   runtime: number
//   vote_average: number
//   genres: Array<{ id: number; name: string }>
//   credits: {
//     cast: Array<{
//       id: number
//       name: string
//       character: string
//       profile_path: string
//     }>
//     crew: Array<{
//       id: number
//       name: string
//       job: string
//     }>
//   }
//   videos: {
//     results: Array<{
//       id: string
//       key: string
//       name: string
//       site: string
//       type: string
//     }>
//   }
// }

// export default function WatchPage() {
//   const params = useParams()
//   const id = params?.id as string
//   const [movie, setMovie] = useState<MovieDetails | null>(null)
//   const [isLoading, setIsLoading] = useState(true)
//   const [isPlaying, setIsPlaying] = useState(false)
//   const [currentTime, setCurrentTime] = useState(0)
//   const [duration, setDuration] = useState(0)
//   const [showControls, setShowControls] = useState(true)
//   const [volume, setVolume] = useState(1)
//   const [isMuted, setIsMuted] = useState(false)
  
//   const videoRef = useRef<HTMLVideoElement>(null)
//   const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)

//   useEffect(() => {
//     const loadMovie = async () => {
//       try {
//         const data = await fetchMovieDetails(Number(id))
//         setMovie(data)
//       } catch (error) {
//         console.error('Failed to load movie:', error)
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     loadMovie()
//   }, [id])

//   useEffect(() => {
//     const video = videoRef.current
//     if (!video) return

//     const updateTime = () => setCurrentTime(video.currentTime)
//     const updateDuration = () => setDuration(video.duration)
//     const handlePlay = () => setIsPlaying(true)
//     const handlePause = () => setIsPlaying(false)

//     video.addEventListener('timeupdate', updateTime)
//     video.addEventListener('durationchange', updateDuration)
//     video.addEventListener('play', handlePlay)
//     video.addEventListener('pause', handlePause)

//     return () => {
//       video.removeEventListener('timeupdate', updateTime)
//       video.removeEventListener('durationchange', updateDuration)
//       video.removeEventListener('play', handlePlay)
//       video.removeEventListener('pause', handlePause)
//     }
//   }, [])

//   const handlePlayPause = () => {
//     if (!videoRef.current) return

//     if (isPlaying) {
//       videoRef.current.pause()
//     } else {
//       videoRef.current.play()
//     }
//     setIsPlaying(!isPlaying)
//   }

//   const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (!videoRef.current) return
//     const time = parseFloat(e.target.value)
//     videoRef.current.currentTime = time
//     setCurrentTime(time)
//   }

//   const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (!videoRef.current) return
//     const newVolume = parseFloat(e.target.value)
//     videoRef.current.volume = newVolume
//     setVolume(newVolume)
//     setIsMuted(newVolume === 0)
//   }

//   const handleMuteToggle = () => {
//     if (!videoRef.current) return
//     videoRef.current.muted = !isMuted
//     setIsMuted(!isMuted)
//   }

//   const handleFullscreen = () => {
//     if (!videoRef.current) return
//     if (document.fullscreenElement) {
//       document.exitFullscreen()
//     } else {
//       videoRef.current.requestFullscreen()
//     }
//   }

//   const handleMouseMove = () => {
//     setShowControls(true)
//     if (controlsTimeoutRef.current) {
//       clearTimeout(controlsTimeoutRef.current)
//     }
//     controlsTimeoutRef.current = setTimeout(() => {
//       if (isPlaying) {
//         setShowControls(false)
//       }
//     }, 3000)
//   }

//   if (isLoading) {
//     return (
//       <Container maxW="container.2xl" py={8}>
//         <Box className="animate-pulse space-y-4">
//           <Box h="80vh" bg="gray.800" />
//           <Box h="40px" w="300px" bg="gray.800" />
//           <Box h="20px" w="200px" bg="gray.800" />
//         </Box>
//       </Container>
//     )
//   }

//   if (!movie) {
//     return (
//       <Container maxW="container.xl" py={16} textAlign="center">
//         <Heading size="xl">Movie not found</Heading>
//         <Text color="gray.400" mt={4}>
//           The movie you're looking for doesn't exist or has been removed.
//         </Text>
//       </Container>
//     )
//   }

//   const formatTime = (seconds: number) => {
//     const hrs = Math.floor(seconds / 3600)
//     const mins = Math.floor((seconds % 3600) / 60)
//     const secs = Math.floor(seconds % 60)
    
//     if (hrs > 0) {
//       return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
//     }
//     return `${mins}:${secs.toString().padStart(2, '0')}`
//   }

//   const trailer = movie.videos.results.find(
//     (video) => video.site === 'YouTube' && video.type === 'Trailer'
//   )

//   return (
//     <Box className="min-h-screen bg-black">
//       {/* Video Player */}
//       <Box
//         className="relative h-screen bg-black"
//         onMouseMove={handleMouseMove}
//         onClick={handlePlayPause}
//       >
//         {/* Video */}
//         <video
//           ref={videoRef}
//           className="w-full h-full object-contain"
//           poster={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
//           src={
//             trailer
//               ? `https://www.youtube.com/watch?v=${trailer.key}`
//               : '/sample-video.mp4'
//           }
//           controls={false}
//           onClick={(e) => e.stopPropagation()}
//         />

//         {/* Controls Overlay */}
//         <MotionBox
//           initial={false}
//           animate={{ opacity: showControls ? 1 : 0 }}
//           className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none ${
//             showControls ? 'pointer-events-auto' : ''
//           }`}
//         >
//           {/* Top Controls */}
//           <Box className="absolute top-0 left-0 right-0 p-6">
//             <Stack direction="row" justify="space-between" className="pointer-events-auto">
//               <Button
//                 variant="ghost"
//                 onClick={() => window.history.back()}
//               >
//                 ← Back
//               </Button>
//               <Stack direction="row" gap={4}>
//                 <IconButton
//                   aria-label="Settings"
//                   variant="ghost"
//                 >
//                   <LuSettings />
//                 </IconButton>
//                 <Button
//                   variant="outline"
//                   borderColor="white"
//                   className="hover:bg-white hover:text-black"
//                 >
//                   + Watchlist
//                 </Button>
//               </Stack>
//             </Stack>
//           </Box>

//           {/* Center Play Button */}
//           <Box className="absolute inset-0 flex items-center justify-center">
//             <IconButton
//               aria-label={isPlaying ? 'Pause' : 'Play'}
//               variant="ghost"
//               size="lg"
//               className="pointer-events-auto opacity-80 hover:opacity-100"
//               onClick={handlePlayPause}
//             >
//               <LuPlay size={32} />
//             </IconButton>
//           </Box>

//           {/* Bottom Controls */}
//           <Box className="absolute bottom-0 left-0 right-0 p-6">
//             <Stack gap={4} align="stretch">
//               {/* Progress Bar */}
//               <Box className="pointer-events-auto">
//                 <input
//                   type="range"
//                   min="0"
//                   max={duration || 100}
//                   value={currentTime}
//                   onChange={handleSeek}
//                   className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
//                 />
//                 <HStack justify="space-between" mt={2}>
//                   <Text fontSize="sm" color="gray.300">
//                     {formatTime(currentTime)}
//                   </Text>
//                   <Text fontSize="sm" color="gray.300">
//                     {formatTime(duration)}
//                   </Text>
//                 </HStack>
//               </Box>

//               {/* Control Buttons */}
//               <HStack justify="space-between" className="pointer-events-auto">
//                 <Stack direction="row" gap={4}>
//                   <IconButton
//                     aria-label={isPlaying ? 'Pause' : 'Play'}
//                     onClick={handlePlayPause}
//                   >
//                     <LuPlay />
//                   </IconButton>
//                   <Stack direction="row" gap={2}>
//                     <IconButton
//                       aria-label={isMuted ? 'Unmute' : 'Mute'}
//                       onClick={handleMuteToggle}
//                     >
//                       <LuVolume2 />
//                     </IconButton>
//                     <input
//                       type="range"
//                       min="0"
//                       max="1"
//                       step="0.1"
//                       value={isMuted ? 0 : volume}
//                       onChange={handleVolumeChange}
//                       className="w-20 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
//                     />
//                   </Stack>
//                 </Stack>

//                 <Stack direction="row" gap={4}>
//                   <Button
//                     variant="ghost"
//                     size="sm"
//                     onClick={handleFullscreen}
//                   >
//                     Fullscreen
//                   </Button>
//                 </Stack>
//               </HStack>
//             </Stack>
//           </Box>
//         </MotionBox>
//       </Box>

//       {/* Movie Info */}
//       <Container maxW="container.xl" py={8}>
//         <MotionBox
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           <div className="grid lg:grid-cols-3 gap-8">
//             {/* Left Column - Info */}
//             <div className="lg:col-span-2">
//               <Heading size="2xl" fontWeight="light" mb={4}>
//                 {movie.title}
//               </Heading>
              
//               <Stack direction="row" gap={6} mb={6}>
//                 <Text color="green.400">⭐ {movie.vote_average.toFixed(1)}</Text>
//                 <Text color="gray.400">{movie.release_date.split('-')[0]}</Text>
//                 <Text color="gray.400">{movie.runtime} min</Text>
//                 <Stack direction="row" gap={2}>
//                   {movie.genres.slice(0, 3).map((genre) => (
//                     <Box
//                       key={genre.id}
//                       className="px-2 py-1 border border-gray-700 text-xs"
//                     >
//                       {genre.name}
//                     </Box>
//                   ))}
//                 </Stack>
//               </Stack>

//               <Text color="gray.300" fontSize="lg" lineHeight="tall" mb={8}>
//                 {movie.overview}
//               </Text>

//               {/* Cast */}
//               <Box mb={8}>
//                 <Heading size="md" fontWeight="medium" mb={4}>
//                   Cast
//                 </Heading>
//                 <div className="flex overflow-x-auto gap-4 pb-4">
//                   {movie.credits.cast.slice(0, 10).map((person) => (
//                     <Box key={person.id} className="min-w-32 text-center">
//                       <Box className="w-32 h-32 rounded-full bg-gray-800 mb-2 overflow-hidden">
//                         {person.profile_path && (
//                           <img
//                             src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
//                             alt={person.name}
//                             className="w-full h-full object-cover"
//                           />
//                         )}
//                       </Box>
//                       <Text fontSize="sm" fontWeight="medium">
//                         {person.name}
//                       </Text>
//                       <Text fontSize="xs" color="gray.400">
//                         {person.character}
//                       </Text>
//                     </Box>
//                   ))}
//                 </div>
//               </Box>
//             </div>

//             {/* Right Column - Actions */}
//             <div className="space-y-6">
//               <Stack gap={4} align="stretch">
//                 <Button
//                   className="w-full py-4"
//                   onClick={handlePlayPause}
//                 >
//                   <LuPlay className="mr-2" />
//                   {isPlaying ? 'Pause' : 'Play'}
//                 </Button>
//                 <Button
//                   variant="outline"
//                   className="w-full"
//                 >
//                   <LuPlus className="mr-2" />
//                   Add to Watchlist
//                 </Button>
//                 <Button variant="ghost" className="w-full">
//                   Download
//                 </Button>
//               </Stack>

//               <Separator borderColor="gray.800" />

//               {/* Crew */}
//               <Box>
//                 <Heading size="sm" fontWeight="medium" mb={4}>
//                   Crew
//                 </Heading>
//                 <Stack gap={2} align="stretch">
//                   {movie.credits.crew
//                     .filter(person => ['Director', 'Writer', 'Producer'].includes(person.job))
//                     .slice(0, 5)
//                     .map((person) => (
//                       <HStack key={person.id} justify="space-between">
//                         <Text fontSize="sm">{person.name}</Text>
//                         <Text fontSize="sm" color="gray.400">
//                           {person.job}
//                         </Text>
//                       </HStack>
//                     ))}
//                 </Stack>
//               </Box>
//             </div>
//           </div>
//         </MotionBox>
//       </Container>
//     </Box>
//   )
// }

'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  IconButton,
  Separator,
  Stack,
} from '@chakra-ui/react'
import { LuPlay, LuPlus, LuVolume2, LuSettings, LuCheck } from 'react-icons/lu'
import { useState, useEffect, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { fetchMovieDetails, type MovieDetails } from '@/lib/tmdb'
import { MotionBox } from '@/components/shared/Motion'

// Skeleton components
const VideoPlayerSkeleton = () => (
  <Box className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 animate-pulse" />
)

const MovieInfoSkeleton = () => (
  <Container maxW="container.xl" py={8}>
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <div className="h-12 bg-gray-800 rounded-lg w-3/4 animate-pulse" />
        <div className="flex gap-4">
          <div className="h-6 w-16 bg-gray-800 rounded animate-pulse" />
          <div className="h-6 w-20 bg-gray-800 rounded animate-pulse" />
          <div className="h-6 w-24 bg-gray-800 rounded animate-pulse" />
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-800 rounded w-full animate-pulse" />
          <div className="h-4 bg-gray-800 rounded w-5/6 animate-pulse" />
          <div className="h-4 bg-gray-800 rounded w-4/6 animate-pulse" />
        </div>
        <div className="flex gap-4 overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="min-w-32 space-y-2">
              <div className="w-32 h-32 rounded-full bg-gray-800 animate-pulse" />
              <div className="h-3 bg-gray-800 rounded w-24 animate-pulse mx-auto" />
              <div className="h-3 bg-gray-800 rounded w-20 animate-pulse mx-auto" />
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <div className="h-12 bg-gray-800 rounded animate-pulse" />
        <div className="h-12 bg-gray-800 rounded animate-pulse" />
        <div className="h-12 bg-gray-800 rounded animate-pulse" />
      </div>
    </div>
  </Container>
)

export default function WatchPage() {
  const params = useParams()
  const router = useRouter()
  const id = params?.id as string
  const [movie, setMovie] = useState<MovieDetails | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showControls, setShowControls] = useState(true)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [isInWatchlist, setIsInWatchlist] = useState(false)
  
  const videoRef = useRef<HTMLVideoElement>(null)
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const data = await fetchMovieDetails(Number(id))
        setMovie(data)
      } catch (error) {
        console.error('Failed to load movie:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadMovie()
    
    // Check watchlist status
    const saved = localStorage.getItem('my_watchlist')
    if (saved) {
      const watchlist = JSON.parse(saved)
      setIsInWatchlist(watchlist.includes(Number(id)))
    }
  }, [id])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateTime = () => setCurrentTime(video.currentTime)
    const updateDuration = () => setDuration(video.duration)
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener('timeupdate', updateTime)
    video.addEventListener('durationchange', updateDuration)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    return () => {
      video.removeEventListener('timeupdate', updateTime)
      video.removeEventListener('durationchange', updateDuration)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [])

  const handlePlayPause = () => {
    if (!videoRef.current) return

    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return
    const time = parseFloat(e.target.value)
    videoRef.current.currentTime = time
    setCurrentTime(time)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return
    const newVolume = parseFloat(e.target.value)
    videoRef.current.volume = newVolume
    setVolume(newVolume)
    setIsMuted(newVolume === 0)
  }

  const handleMuteToggle = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleFullscreen = () => {
    if (!videoRef.current) return
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      videoRef.current.requestFullscreen()
    }
  }

  const handleMouseMove = () => {
    setShowControls(true)
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false)
      }
    }, 3000)
  }

  const toggleWatchlist = () => {
    const saved = localStorage.getItem('my_watchlist')
    const watchlist = saved ? JSON.parse(saved) : []
    
    if (isInWatchlist) {
      const newList = watchlist.filter((movieId: number) => movieId !== Number(id))
      localStorage.setItem('my_watchlist', JSON.stringify(newList))
      setIsInWatchlist(false)
    } else {
      const newList = [...watchlist, Number(id)]
      localStorage.setItem('my_watchlist', JSON.stringify(newList))
      setIsInWatchlist(true)
    }
  }

  if (isLoading) {
    return (
      <Box className="min-h-screen bg-black">
        <VideoPlayerSkeleton />
        <MovieInfoSkeleton />
      </Box>
    )
  }

  if (!movie) {
    return (
      <Container maxW="container.xl" py={16} textAlign="center" className="min-h-screen flex items-center justify-center">
        <div>
          <Heading size="xl" mb={4}>Movie not found</Heading>
          <Text color="gray.400" mb={6}>
            The movie you're looking for doesn't exist or has been removed.
          </Text>
          <Button onClick={() => router.push('/')}>
            Browse Movies
          </Button>
        </div>
      </Container>
    )
  }

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = Math.floor(seconds % 60)
    
    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const trailer = movie.videos.results.find(
    (video) => video.site === 'YouTube' && video.type === 'Trailer'
  )

  return (
    <Box className="min-h-screen bg-black">
      {/* Video Player */}
      <Box
        className="relative h-screen bg-black"
        onMouseMove={handleMouseMove}
        onClick={handlePlayPause}
      >
        {/* Video */}
        <video
          ref={videoRef}
          className="w-full h-full object-contain"
          poster={movie.backdrop_path ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : undefined}
          src={
            trailer
              ? `https://www.youtube.com/watch?v=${trailer.key}`
              : '/sample-video.mp4'
          }
          controls={false}
          onClick={(e) => e.stopPropagation()}
        />

        {/* Controls Overlay */}
        <MotionBox
          initial={false}
          animate={{ opacity: showControls ? 1 : 0 }}
          className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none ${
            showControls ? 'pointer-events-auto' : ''
          }`}
        >
          {/* Top Controls */}
          <Box className="absolute top-0 left-0 right-0 p-6">
            <Stack direction="row" justify="space-between" className="pointer-events-auto">
              <Button
                variant="ghost"
                onClick={() => router.push('/')}
              >
                ← Back
              </Button>
              <Stack direction="row" gap={4}>
                <IconButton
                  aria-label="Settings"
                  variant="ghost"
                >
                  <LuSettings />
                </IconButton>
                <Button
                  variant="outline"
                  borderColor="white"
                  className="hover:bg-white hover:text-black"
                  onClick={toggleWatchlist}
                >
                  {isInWatchlist ? <LuCheck className="mr-2" /> : <LuPlus className="mr-2" />}
                  {isInWatchlist ? 'In Watchlist' : 'Watchlist'}
                </Button>
              </Stack>
            </Stack>
          </Box>

          {/* Center Play Button */}
          <Box className="absolute inset-0 flex items-center justify-center">
            <IconButton
              aria-label={isPlaying ? 'Pause' : 'Play'}
              variant="ghost"
              size="lg"
              className="pointer-events-auto opacity-80 hover:opacity-100"
              onClick={handlePlayPause}
            >
              <LuPlay size={32} />
            </IconButton>
          </Box>

          {/* Bottom Controls */}
          <Box className="absolute bottom-0 left-0 right-0 p-6">
            <Stack gap={4} align="stretch">
              {/* Progress Bar */}
              <Box className="pointer-events-auto">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <HStack justify="space-between" mt={2}>
                  <Text fontSize="sm" color="gray.300">
                    {formatTime(currentTime)}
                  </Text>
                  <Text fontSize="sm" color="gray.300">
                    {formatTime(duration)}
                  </Text>
                </HStack>
              </Box>

              {/* Control Buttons */}
              <HStack justify="space-between" className="pointer-events-auto">
                <Stack direction="row" gap={4}>
                  <IconButton
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                    onClick={handlePlayPause}
                  >
                    <LuPlay />
                  </IconButton>
                  <Stack direction="row" gap={2}>
                    <IconButton
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                      onClick={handleMuteToggle}
                    >
                      <LuVolume2 />
                    </IconButton>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-20 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                  </Stack>
                </Stack>

                <Stack direction="row" gap={4}>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleFullscreen}
                  >
                    Fullscreen
                  </Button>
                </Stack>
              </HStack>
            </Stack>
          </Box>
        </MotionBox>
      </Box>

      {/* Movie Info */}
      <Container maxW="container.xl" py={8}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Info */}
            <div className="lg:col-span-2">
              <Heading size="2xl" fontWeight="light" mb={4}>
                {movie.title}
              </Heading>
              
              <Stack direction="row" gap={6} mb={6} flexWrap="wrap">
                <Text color="green.400">⭐ {movie.vote_average.toFixed(1)}</Text>
                <Text color="gray.400">{movie.release_date.split('-')[0]}</Text>
                <Text color="gray.400">{movie.runtime} min</Text>
                <Stack direction="row" gap={2}>
                  {movie.genres?.slice(0, 3).map((genre) => (
                    <Box
                      key={genre.id}
                      className="px-2 py-1 border border-gray-700 text-xs"
                    >
                      {genre.name}
                    </Box>
                  ))}
                </Stack>
              </Stack>

              <Text color="gray.300" fontSize="lg" lineHeight="tall" mb={8}>
                {movie.overview}
              </Text>

              {/* Cast */}
              <Box mb={8}>
                <Heading size="md" fontWeight="medium" mb={4}>
                  Cast
                </Heading>
                <div className="flex overflow-x-auto gap-4 pb-4">
                  {movie.credits.cast.slice(0, 10).map((person) => (
                    <Box key={person.id} className="min-w-32 text-center">
                      <Box className="w-32 h-32 rounded-full bg-gray-800 mb-2 overflow-hidden">
                        {person.profile_path && (
                          <img
                            src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}
                            alt={person.name}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </Box>
                      <Text fontSize="sm" fontWeight="medium">
                        {person.name}
                      </Text>
                      <Text fontSize="xs" color="gray.400">
                        {person.character}
                      </Text>
                    </Box>
                  ))}
                </div>
              </Box>
            </div>

            {/* Right Column - Actions */}
            <div className="space-y-6">
              <Stack gap={4} align="stretch">
                <Button
                  className="w-full py-4"
                  onClick={handlePlayPause}
                >
                  <LuPlay className="mr-2" />
                  {isPlaying ? 'Pause' : 'Play'}
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={toggleWatchlist}
                >
                  {isInWatchlist ? <LuCheck className="mr-2" /> : <LuPlus className="mr-2" />}
                  {isInWatchlist ? 'In Watchlist' : 'Add to Watchlist'}
                </Button>
                <Button variant="ghost" className="w-full">
                  Download
                </Button>
              </Stack>

              <Separator borderColor="gray.800" />

              {/* Crew */}
              <Box>
                <Heading size="sm" fontWeight="medium" mb={4}>
                  Crew
                </Heading>
                <Stack gap={2} align="stretch">
                  {movie.credits.crew
                    .filter(person => ['Director', 'Writer', 'Producer'].includes(person.job))
                    .slice(0, 5)
                    .map((person) => (
                      <HStack key={person.id} justify="space-between">
                        <Text fontSize="sm">{person.name}</Text>
                        <Text fontSize="sm" color="gray.400">
                          {person.job}
                        </Text>
                      </HStack>
                    ))}
                </Stack>
              </Box>
            </div>
          </div>
        </MotionBox>
      </Container>
    </Box>
  )
}