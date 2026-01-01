// 'use client'

// import {
//   Box,
//   Container,
//   Heading,
//   VStack,
//   HStack,
//   Text,
//   Badge,
//   Button,
//   IconButton,
//   Stack,
//   Progress,
// } from '@chakra-ui/react'
// import { LuDownload, LuCheck, LuX, LuPlay } from 'react-icons/lu'
// import { useState } from 'react'
// import { MotionBox } from '@/components/shared/Motion'

// interface DownloadItem {
//   id: string
//   title: string
//   posterPath: string
//   quality: string
//   fileSize: string
//   progress: number
//   status: 'downloading' | 'completed' | 'failed' | 'queued'
//   estimatedTime: string
// }

// export default function DownloadsPage() {
//   const [downloads, setDownloads] = useState<DownloadItem[]>([
//     {
//       id: '1',
//       title: 'Inception',
//       posterPath: '/inception.jpg',
//       quality: '4K HDR',
//       fileSize: '8.5 GB',
//       progress: 75,
//       status: 'downloading',
//       estimatedTime: '30 min',
//     },
//     {
//       id: '2',
//       title: 'The Dark Knight',
//       posterPath: '/dark-knight.jpg',
//       quality: '1080p',
//       fileSize: '4.2 GB',
//       progress: 100,
//       status: 'completed',
//       estimatedTime: 'Completed',
//     },
//     {
//       id: '3',
//       title: 'Interstellar',
//       posterPath: '/interstellar.jpg',
//       quality: '4K',
//       fileSize: '12.1 GB',
//       progress: 25,
//       status: 'downloading',
//       estimatedTime: '2 hours',
//     },
//     {
//       id: '4',
//       title: 'Dune: Part Two',
//       posterPath: '/dune2.jpg',
//       quality: '4K HDR',
//       fileSize: '10.8 GB',
//       progress: 0,
//       status: 'queued',
//       estimatedTime: 'Waiting',
//     },
//     {
//       id: '5',
//       title: 'Oppenheimer',
//       posterPath: '/oppenheimer.jpg',
//       quality: '1080p',
//       fileSize: '5.7 GB',
//       progress: 100,
//       status: 'completed',
//       estimatedTime: 'Completed',
//     },
//   ])

//   const getStatusColor = (status: DownloadItem['status']) => {
//     switch (status) {
//       case 'completed':
//         return 'green'
//       case 'downloading':
//         return 'blue'
//       case 'failed':
//         return 'red'
//       case 'queued':
//         return 'yellow'
//       default:
//         return 'gray'
//     }
//   }

//   const getStatusIcon = (status: DownloadItem['status']) => {
//     switch (status) {
//       case 'completed':
//         return <LuCheck color="var(--chakra-colors-green-400)" />
//       case 'downloading':
//         return <LuDownload color="var(--chakra-colors-blue-400)" />
//       case 'failed':
//         return <LuX color="var(--chakra-colors-red-400)" />
//       case 'queued':
//         return <Box className="w-3 h-3 rounded-full bg-yellow-400" />
//     }
//   }

//   const cancelDownload = (id: string) => {
//     setDownloads(
//       downloads.map((item) =>
//         item.id === id && item.status === 'downloading'
//           ? { ...item, status: 'queued', progress: 0 }
//           : item
//       )
//     )
//   }

//   const removeDownload = (id: string) => {
//     setDownloads(downloads.filter((item) => item.id !== id))
//   }

//   const storageUsed = '28.3 GB'
//   const storageTotal = '50 GB'
//   const storagePercentage = (28.3 / 50) * 100

//   return (
//     <Container maxW="container.xl" py={8}>
//       <MotionBox
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="space-y-8"
//       >
//         {/* Header */}
//         <Box>
//           <Heading size="lg" fontWeight="medium" mb={2}>
//             Downloads
//           </Heading>
//           <Text color="gray.400">Watch offline anytime, anywhere</Text>
//         </Box>

//         {/* Storage Overview */}
//         <Box className="border border-gray-800 p-6">
//           <HStack justify="space-between" mb={4}>
//             <Box>
//               <Text fontWeight="medium">Storage</Text>
//               <Text color="gray.400" fontSize="sm">
//                 {storageUsed} of {storageTotal} used
//               </Text>
//             </Box>
//             <Badge colorPalette={storagePercentage > 80 ? 'red' : 'green'}>
//               {storagePercentage.toFixed(1)}% used
//             </Badge>
//           </HStack>
//           <Progress.Root value={storagePercentage} colorPalette={storagePercentage > 80 ? 'red' : 'green'}>
//             <Progress.Track height="2px">
//               <Progress.Range />
//             </Progress.Track>
//           </Progress.Root>
//           <HStack justify="space-between" mt={2}>
//             <Text color="gray.400" fontSize="sm">
//               Available: {(50 - 28.3).toFixed(1)} GB
//             </Text>
//             <Button size="sm" variant="outline" borderRadius="none">
//               Manage Storage
//             </Button>
//           </HStack>
//         </Box>

//         {/* Active Downloads */}
//         <Box>
//           <Heading size="md" fontWeight="medium" mb={6}>
//             Active Downloads ({downloads.filter(d => d.status === 'downloading').length})
//           </Heading>
//           <Stack gap={4} align="stretch">
//             {downloads
//               .filter((item) => item.status === 'downloading')
//               .map((item) => (
//                 <Box
//                   key={item.id}
//                   className="border border-gray-800 p-4 hover:border-gray-700 transition-colors"
//                 >
//                   <div className="grid md:grid-cols-12 gap-4 items-center">
//                     <div className="md:col-span-6 flex items-center space-x-4">
//                       <Box className="w-16 h-24 bg-gray-800 flex items-center justify-center">
//                         {getStatusIcon(item.status)}
//                       </Box>
//                       <Box>
//                         <Text fontWeight="medium">{item.title}</Text>
//                         <Text color="gray.400" fontSize="sm">
//                           {item.quality} • {item.fileSize}
//                         </Text>
//                       </Box>
//                     </div>

//                     <div className="md:col-span-4">
//                       <HStack justify="space-between" mb={2}>
//                         <Text fontSize="sm">{item.progress}%</Text>
//                         <Text fontSize="sm" color="gray.400">
//                           {item.estimatedTime}
//                         </Text>
//                       </HStack>
//                       <Progress.Root value={item.progress} colorPalette="blue">
//                         <Progress.Track height="2px">
//                           <Progress.Range />
//                         </Progress.Track>
//                       </Progress.Root>
//                     </div>

//                     <div className="md:col-span-2 flex justify-end space-x-2">
//                       <IconButton
//                         aria-label="Cancel download"
//                         size="sm"
//                         variant="ghost"
//                         onClick={() => cancelDownload(item.id)}
//                       >
//                         <LuX />
//                       </IconButton>
//                     </div>
//                   </div>
//                 </Box>
//               ))}

//             {downloads.filter((d) => d.status === 'downloading').length === 0 && (
//               <Box className="border border-gray-800 p-8 text-center">
//                 <LuDownload size={32} color="var(--chakra-colors-gray-500)" className="mx-auto mb-4" />
//                 <Text color="gray.500">No active downloads</Text>
//                 <Text color="gray.400" fontSize="sm" mt={2}>
//                   Add movies to your downloads to watch offline
//                 </Text>
//               </Box>
//             )}
//           </Stack>
//         </Box>

//         {/* Completed Downloads */}
//         <Box>
//           <HStack justify="space-between" mb={6}>
//             <Heading size="md" fontWeight="medium">
//               Available Offline ({downloads.filter(d => d.status === 'completed').length})
//             </Heading>
//             <Button
//               size="sm"
//               variant="outline"
//               borderRadius="none"
//               disabled={downloads.filter(d => d.status === 'completed').length === 0}
//             >
//               Play All
//             </Button>
//           </HStack>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
//             {downloads
//               .filter((item) => item.status === 'completed')
//               .map((item) => (
//                 <MotionBox
//                   key={item.id}
//                   whileHover={{ y: -4 }}
//                   className="group"
//                 >
//                   <Box className="relative aspect-[2/3] bg-gray-900 border border-gray-800 overflow-hidden">
//                     <Box className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
//                     {/* Play overlay */}
//                     <Box className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <IconButton
//                         aria-label="Play"
//                         borderRadius="full"
//                         colorPalette="whiteAlpha"
//                         size="lg"
//                       >
//                         <LuPlay />
//                       </IconButton>
//                     </Box>

//                     {/* Bottom info */}
//                     <Box className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
//                       <Text fontSize="sm" fontWeight="medium" className="line-clamp-1">
//                         {item.title}
//                       </Text>
//                       <HStack justify="space-between" mt={1}>
//                         <Text fontSize="xs" color="gray.400">
//                           {item.quality}
//                         </Text>
//                         <IconButton
//                           aria-label="Remove"
//                           size="xs"
//                           variant="ghost"
//                           onClick={() => removeDownload(item.id)}
//                         >
//                           <LuX size={12} />
//                         </IconButton>
//                       </HStack>
//                     </Box>
//                   </Box>
//                 </MotionBox>
//               ))}
//           </div>

//           {downloads.filter((d) => d.status === 'completed').length === 0 && (
//             <Box className="border border-gray-800 p-12 text-center">
//               <Text color="gray.500">No completed downloads</Text>
//               <Text color="gray.400" fontSize="sm" mt={2}>
//                 Your downloaded movies will appear here
//               </Text>
//             </Box>
//           )}
//         </Box>

//         {/* Download Settings */}
//         <Box className="border border-gray-800 p-6">
//           <Heading size="md" fontWeight="medium" mb={6}>
//             Download Settings
//           </Heading>
//           <div className="grid md:grid-cols-2 gap-8">
//             <Box>
//               <Text fontWeight="medium" mb={4}>
//                 Default Quality
//               </Text>
//               <select className="w-full bg-black border border-gray-700 px-3 py-2">
//                 <option>1080p (Recommended)</option>
//                 <option>720p</option>
//                 <option>4K</option>
//                 <option>Best Available</option>
//               </select>
//               <Text color="gray.400" fontSize="sm" mt={2}>
//                 Higher quality uses more storage
//               </Text>
//             </Box>
//             <Box>
//               <Text fontWeight="medium" mb={4}>
//                 Download Over
//               </Text>
//               <select className="w-full bg-black border border-gray-700 px-3 py-2">
//                 <option>Wi-Fi Only</option>
//                 <option>Wi-Fi & Cellular</option>
//               </select>
//               <Text color="gray.400" fontSize="sm" mt={2}>
//                 Cellular downloads may incur data charges
//               </Text>
//             </Box>
//           </div>
//         </Box>
//       </MotionBox>
//     </Container>
//   )
// }


'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HardDrive, Download, Play, X, Pause, 
  Wifi, Smartphone, Settings, Check, AlertCircle, Film
} from 'lucide-react'
import { fetchMovieDetails, getImageUrl, formatRuntime, type MovieDetails } from '@/lib/tmdb'
import { useRouter } from 'next/navigation'

// --- TYPES ---
type DownloadStatus = 'downloading' | 'completed' | 'paused' | 'error'

interface DownloadItem {
  tmdbId: number
  status: DownloadStatus
  progress: number
  sizeStr: string // "14.2 GB"
  quality: string
  addedAt: Date
}

// --- UTILS ---
const parseSizeToBytes = (sizeStr: string): number => {
  const match = sizeStr.match(/^([\d.]+)\s*(GB|MB|KB|TB)$/i)
  if (!match) return 0
  
  const val = parseFloat(match[1])
  const unit = match[2].toUpperCase()
  
  const multiplier: Record<string, number> = {
    'KB': 1024,
    'MB': 1024 * 1024,
    'GB': 1024 * 1024 * 1024,
    'TB': 1024 * 1024 * 1024 * 1024
  }
  
  return val * (multiplier[unit] || 1)
}

const formatBytes = (bytes: number): string => {
  if (bytes === 0) return '0 GB'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`
}

// --- MOCK INITIAL DATA ---
const INITIAL_DOWNLOADS: DownloadItem[] = [
  { tmdbId: 693134, status: 'completed', progress: 100, sizeStr: '14.2 GB', quality: '4K HDR', addedAt: new Date() }, // Dune 2
  { tmdbId: 872585, status: 'completed', progress: 100, sizeStr: '11.5 GB', quality: '4K', addedAt: new Date() }, // Oppenheimer
  { tmdbId: 929590, status: 'downloading', progress: 45, sizeStr: '6.8 GB', quality: '1080p', addedAt: new Date() }, // Civil War
  { tmdbId: 786892, status: 'paused', progress: 12, sizeStr: '8.1 GB', quality: '4K', addedAt: new Date() }, // Furiosa
]

export default function DownloadsPage() {
  const router = useRouter()
  const [items, setItems] = useState<DownloadItem[]>(INITIAL_DOWNLOADS)
  const [movieCache, setMovieCache] = useState<Record<number, MovieDetails>>({})
  const [loading, setLoading] = useState(true)
  
  // Storage State
  const [quota, setQuota] = useState<number>(128 * 1024 * 1024 * 1024) // Default 128GB fallback
  const [systemUsed, setSystemUsed] = useState<number>(0) // Real browser usage if available

  // 1. Fetch Real Storage Quota
  useEffect(() => {
    if (navigator.storage && navigator.storage.estimate) {
      navigator.storage.estimate().then((estimate) => {
        if (estimate.quota) setQuota(estimate.quota)
        if (estimate.usage) setSystemUsed(estimate.usage)
      }).catch(err => console.error("Storage API Error:", err))
    }
  }, [])

  // 2. Fetch TMDB Metadata
  useEffect(() => {
    const loadMetadata = async () => {
      const cache: Record<number, MovieDetails> = {}
      await Promise.all(items.map(async (item) => {
        if (!movieCache[item.tmdbId]) {
          try {
            const data = await fetchMovieDetails(item.tmdbId)
            cache[item.tmdbId] = data
          } catch (e) {
            console.error(`Failed to fetch ${item.tmdbId}`, e)
          }
        }
      }))
      setMovieCache(prev => ({ ...prev, ...cache }))
      setLoading(false)
    }
    loadMetadata()
  }, [items.length])

  // 3. Simulate Download Progress
  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => prev.map(item => {
        if (item.status === 'downloading' && item.progress < 100) {
          const newProgress = item.progress + (Math.random() * 2)
          return { 
            ...item, 
            progress: newProgress >= 100 ? 100 : newProgress,
            status: newProgress >= 100 ? 'completed' : 'downloading'
          }
        }
        return item
      }))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // --- CALCULATIONS ---
  // Calculate total used by our "App" (Mock Downloads)
  const appUsedBytes = useMemo(() => {
    return items.reduce((acc, item) => acc + parseSizeToBytes(item.sizeStr), 0)
  }, [items])

  // Combined Usage (System Usage + Mock App Usage)
  // We add them because systemUsed usually doesn't include our mock files
  const totalUsedBytes = systemUsed + appUsedBytes
  const usedPercent = Math.min((totalUsedBytes / quota) * 100, 100)

  const activeDownloads = items.filter(i => i.status === 'downloading' || i.status === 'paused')
  const completedDownloads = items.filter(i => i.status === 'completed')

  const handleRemove = (id: number) => {
    setItems(prev => prev.filter(i => i.tmdbId !== id))
  }

  const togglePause = (id: number) => {
    setItems(prev => prev.map(i => {
      if (i.tmdbId === id) {
        return { ...i, status: i.status === 'downloading' ? 'paused' : 'downloading' }
      }
      return i
    }))
  }

  if (loading) return <div className="min-h-screen bg-[#050505]" />

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-2">
              Offline Library
            </h1>
            <p className="text-zinc-500 text-lg font-light flex items-center gap-2">
               <Wifi size={16} className="text-zinc-600" />
               {items.length} titles available without connection.
            </p>
          </div>
          
          <div className="w-full md:w-64">
            <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold mb-2 text-zinc-500">
               <span>Storage Used</span>
               <span>{formatBytes(totalUsedBytes)} / {formatBytes(quota)}</span>
            </div>
            
            {/* Storage Bar */}
            <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden flex">
               {/* System Usage (Darker) */}
               <motion.div 
                 initial={{ width: 0 }} 
                 animate={{ width: `${(systemUsed / quota) * 100}%` }} 
                 className="h-full bg-zinc-700"
               />
               {/* App Usage (Lighter/Brand) */}
               <motion.div 
                 initial={{ width: 0 }} 
                 animate={{ width: `${(appUsedBytes / quota) * 100}%` }} 
                 className="h-full bg-white"
               />
            </div>
            
            <div className="flex justify-between mt-2">
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <span className="text-[10px] text-zinc-500">Pure Cinema ({formatBytes(appUsedBytes)})</span>
               </div>
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-zinc-700" />
                  <span className="text-[10px] text-zinc-500">Other</span>
               </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
           
           {/* --- LEFT COL: CONTENT --- */}
           <div className="lg:col-span-2 space-y-12">
              
              {/* ACTIVE QUEUE */}
              <AnimatePresence>
              {activeDownloads.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                   <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-2">
                      <Download size={14} className="animate-pulse" /> Downloading
                   </h2>
                   <div className="space-y-4">
                      {activeDownloads.map((item) => {
                         const movie = movieCache[item.tmdbId]
                         if (!movie) return null
                         
                         return (
                           <motion.div 
                              key={item.tmdbId}
                              layout
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              className="bg-zinc-900/30 border border-white/10 p-4 rounded-lg flex gap-4 group hover:bg-zinc-900/50 transition-colors"
                           >
                              {/* Poster Thumbnail */}
                              <div className="w-16 h-24 bg-black flex-shrink-0 relative overflow-hidden rounded-sm">
                                 <img 
                                   src={getImageUrl.poster(movie.poster_path, 'w154') || ''} 
                                   alt={movie.title}
                                   className="w-full h-full object-cover opacity-60"
                                 />
                                 <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px]">
                                    <span className="text-xs font-bold">{Math.round(item.progress)}%</span>
                                 </div>
                              </div>

                              {/* Content */}
                              <div className="flex-1 flex flex-col justify-center min-w-0">
                                 <h3 className="font-bold text-lg truncate pr-4 text-white">{movie.title}</h3>
                                 <div className="flex items-center gap-3 text-xs text-zinc-500 mt-1">
                                    <span className="bg-white/10 text-zinc-300 px-1.5 py-0.5 rounded text-[10px] uppercase">{item.quality}</span>
                                    <span>{item.sizeStr}</span>
                                    <span className={item.status === 'paused' ? 'text-yellow-500' : 'text-blue-400'}>
                                      {item.status === 'paused' ? 'Paused' : 'Downloading...'}
                                    </span>
                                 </div>
                                 
                                 {/* Progress Bar */}
                                 <div className="h-0.5 bg-zinc-800 w-full mt-4 overflow-hidden rounded-full">
                                    <motion.div 
                                      className={`h-full ${item.status === 'paused' ? 'bg-yellow-500' : 'bg-white'}`}
                                      initial={{ width: 0 }}
                                      animate={{ width: `${item.progress}%` }}
                                      transition={{ duration: 0.5 }}
                                    />
                                 </div>
                              </div>

                              {/* Actions */}
                              <div className="flex flex-col justify-between items-end pl-4">
                                 <button 
                                   onClick={() => handleRemove(item.tmdbId)}
                                   className="text-zinc-600 hover:text-red-500 transition-colors p-1"
                                 >
                                    <X size={16} />
                                 </button>
                                 <button 
                                   onClick={() => togglePause(item.tmdbId)}
                                   className="text-white hover:text-zinc-300 transition-colors p-1"
                                 >
                                    {item.status === 'paused' ? <Play size={20} fill="currentColor" /> : <Pause size={20} fill="currentColor" />}
                                 </button>
                              </div>
                           </motion.div>
                         )
                      })}
                   </div>
                </motion.section>
              )}
              </AnimatePresence>

              {/* COMPLETED LIBRARY */}
              <section>
                 <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-2">
                    <HardDrive size={14} /> On Device
                 </h2>
                 
                 {completedDownloads.length === 0 ? (
                    <div className="text-zinc-600 italic text-sm py-12 border border-dashed border-white/10 rounded-lg flex flex-col items-center gap-4 select-none">
                       <Film size={24} className="opacity-50" />
                       Your library is empty.
                    </div>
                 ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                       <AnimatePresence>
                       {completedDownloads.map((item) => {
                          const movie = movieCache[item.tmdbId]
                          if (!movie) return null 
                          
                          return (
                             <motion.div 
                               key={item.tmdbId}
                               layout
                               initial={{ opacity: 0, scale: 0.9 }} 
                               animate={{ opacity: 1, scale: 1 }}
                               exit={{ opacity: 0, scale: 0.9 }}
                               className="group relative aspect-[2/3] bg-zinc-900 border border-white/5 hover:border-zinc-500 transition-colors cursor-pointer overflow-hidden rounded-sm"
                               onClick={() => router.push(`/watch/${movie.id}`)}
                             >
                                <img 
                                   src={getImageUrl.poster(movie.poster_path, 'w500') || ''} 
                                   alt={movie.title}
                                   className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500"
                                />
                                
                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] font-bold uppercase text-white border border-white/10">
                                   {item.quality}
                                </div>
                                
                                <button 
                                   onClick={(e) => { e.stopPropagation(); handleRemove(item.tmdbId); }}
                                   className="absolute top-2 left-2 bg-black/60 backdrop-blur-md p-1.5 rounded-full text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500/80 hover:border-red-500"
                                >
                                   <X size={10} />
                                </button>

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                   <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center mb-3 hover:scale-110 transition-transform shadow-lg">
                                      <Play size={18} fill="black" className="ml-0.5" />
                                   </div>
                                   <h4 className="font-bold text-sm leading-tight mb-1">{movie.title}</h4>
                                   <p className="text-[10px] text-zinc-400">{formatRuntime(movie.runtime || 0)} • {item.sizeStr}</p>
                                </div>
                             </motion.div>
                          )
                       })}
                       </AnimatePresence>
                    </div>
                 )}
              </section>
           </div>

           {/* --- RIGHT COL: SETTINGS --- */}
           <div className="space-y-8">
              <div className="bg-black border border-white/10 p-6 rounded-lg sticky top-32">
                 <h3 className="text-lg font-medium mb-6 flex items-center gap-2">
                    <Settings size={16} /> Preferences
                 </h3>
                 
                 <div className="space-y-6">
                    <div className="flex items-center justify-between group cursor-pointer">
                       <div>
                          <div className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">Smart Downloads</div>
                          <div className="text-xs text-zinc-500 mt-1">Delete watched episodes</div>
                       </div>
                       <div className="w-10 h-5 bg-zinc-800 rounded-full relative transition-colors group-hover:bg-zinc-700">
                          <div className="absolute right-1 top-1 w-3 h-3 bg-white/50 rounded-full" />
                       </div>
                    </div>

                    <div className="flex items-center justify-between group cursor-pointer">
                       <div>
                          <div className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">Video Quality</div>
                          <div className="text-xs text-zinc-500 mt-1">High (1080p)</div>
                       </div>
                       <ChevronRightSmall />
                    </div>

                    <div className="flex items-center justify-between group cursor-pointer">
                       <div>
                          <div className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">Download on</div>
                          <div className="text-xs text-zinc-500 mt-1">Wi-Fi Only</div>
                       </div>
                       <ChevronRightSmall />
                    </div>
                 </div>

                 <div className="mt-8 pt-6 border-t border-white/5">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4">Device Status</h3>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                           <span className="flex items-center gap-2 text-zinc-400"><Wifi size={14} /> Network</span>
                           <span className="text-green-500 font-bold text-xs uppercase tracking-wider">Excellent</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                           <span className="flex items-center gap-2 text-zinc-400"><Smartphone size={14} /> Battery</span>
                           <span className="text-zinc-200 font-bold text-xs">84%</span>
                        </div>
                    </div>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </div>
  )
}

function ChevronRightSmall() {
   return <div className="text-zinc-600 group-hover:text-white transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg></div>
}