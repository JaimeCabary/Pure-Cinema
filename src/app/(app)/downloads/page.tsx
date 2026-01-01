'use client'

import {
  Box,
  Container,
  Heading,
  VStack,
  HStack,
  Text,
  Badge,
  Button,
  IconButton,
  Stack,
  Progress,
} from '@chakra-ui/react'
import { LuDownload, LuCheck, LuX, LuPlay } from 'react-icons/lu'
import { useState } from 'react'
import { MotionBox } from '@/components/shared/Motion'

interface DownloadItem {
  id: string
  title: string
  posterPath: string
  quality: string
  fileSize: string
  progress: number
  status: 'downloading' | 'completed' | 'failed' | 'queued'
  estimatedTime: string
}

export default function DownloadsPage() {
  const [downloads, setDownloads] = useState<DownloadItem[]>([
    {
      id: '1',
      title: 'Inception',
      posterPath: '/inception.jpg',
      quality: '4K HDR',
      fileSize: '8.5 GB',
      progress: 75,
      status: 'downloading',
      estimatedTime: '30 min',
    },
    {
      id: '2',
      title: 'The Dark Knight',
      posterPath: '/dark-knight.jpg',
      quality: '1080p',
      fileSize: '4.2 GB',
      progress: 100,
      status: 'completed',
      estimatedTime: 'Completed',
    },
    {
      id: '3',
      title: 'Interstellar',
      posterPath: '/interstellar.jpg',
      quality: '4K',
      fileSize: '12.1 GB',
      progress: 25,
      status: 'downloading',
      estimatedTime: '2 hours',
    },
    {
      id: '4',
      title: 'Dune: Part Two',
      posterPath: '/dune2.jpg',
      quality: '4K HDR',
      fileSize: '10.8 GB',
      progress: 0,
      status: 'queued',
      estimatedTime: 'Waiting',
    },
    {
      id: '5',
      title: 'Oppenheimer',
      posterPath: '/oppenheimer.jpg',
      quality: '1080p',
      fileSize: '5.7 GB',
      progress: 100,
      status: 'completed',
      estimatedTime: 'Completed',
    },
  ])

  const getStatusColor = (status: DownloadItem['status']) => {
    switch (status) {
      case 'completed':
        return 'green'
      case 'downloading':
        return 'blue'
      case 'failed':
        return 'red'
      case 'queued':
        return 'yellow'
      default:
        return 'gray'
    }
  }

  const getStatusIcon = (status: DownloadItem['status']) => {
    switch (status) {
      case 'completed':
        return <LuCheck color="var(--chakra-colors-green-400)" />
      case 'downloading':
        return <LuDownload color="var(--chakra-colors-blue-400)" />
      case 'failed':
        return <LuX color="var(--chakra-colors-red-400)" />
      case 'queued':
        return <Box className="w-3 h-3 rounded-full bg-yellow-400" />
    }
  }

  const cancelDownload = (id: string) => {
    setDownloads(
      downloads.map((item) =>
        item.id === id && item.status === 'downloading'
          ? { ...item, status: 'queued', progress: 0 }
          : item
      )
    )
  }

  const removeDownload = (id: string) => {
    setDownloads(downloads.filter((item) => item.id !== id))
  }

  const storageUsed = '28.3 GB'
  const storageTotal = '50 GB'
  const storagePercentage = (28.3 / 50) * 100

  return (
    <Container maxW="container.xl" py={8}>
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {/* Header */}
        <Box>
          <Heading size="lg" fontWeight="medium" mb={2}>
            Downloads
          </Heading>
          <Text color="gray.400">Watch offline anytime, anywhere</Text>
        </Box>

        {/* Storage Overview */}
        <Box className="border border-gray-800 p-6">
          <HStack justify="space-between" mb={4}>
            <Box>
              <Text fontWeight="medium">Storage</Text>
              <Text color="gray.400" fontSize="sm">
                {storageUsed} of {storageTotal} used
              </Text>
            </Box>
            <Badge colorPalette={storagePercentage > 80 ? 'red' : 'green'}>
              {storagePercentage.toFixed(1)}% used
            </Badge>
          </HStack>
          <Progress.Root value={storagePercentage} colorPalette={storagePercentage > 80 ? 'red' : 'green'}>
            <Progress.Track height="2px">
              <Progress.Range />
            </Progress.Track>
          </Progress.Root>
          <HStack justify="space-between" mt={2}>
            <Text color="gray.400" fontSize="sm">
              Available: {(50 - 28.3).toFixed(1)} GB
            </Text>
            <Button size="sm" variant="outline" borderRadius="none">
              Manage Storage
            </Button>
          </HStack>
        </Box>

        {/* Active Downloads */}
        <Box>
          <Heading size="md" fontWeight="medium" mb={6}>
            Active Downloads ({downloads.filter(d => d.status === 'downloading').length})
          </Heading>
          <Stack gap={4} align="stretch">
            {downloads
              .filter((item) => item.status === 'downloading')
              .map((item) => (
                <Box
                  key={item.id}
                  className="border border-gray-800 p-4 hover:border-gray-700 transition-colors"
                >
                  <div className="grid md:grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-6 flex items-center space-x-4">
                      <Box className="w-16 h-24 bg-gray-800 flex items-center justify-center">
                        {getStatusIcon(item.status)}
                      </Box>
                      <Box>
                        <Text fontWeight="medium">{item.title}</Text>
                        <Text color="gray.400" fontSize="sm">
                          {item.quality} • {item.fileSize}
                        </Text>
                      </Box>
                    </div>

                    <div className="md:col-span-4">
                      <HStack justify="space-between" mb={2}>
                        <Text fontSize="sm">{item.progress}%</Text>
                        <Text fontSize="sm" color="gray.400">
                          {item.estimatedTime}
                        </Text>
                      </HStack>
                      <Progress.Root value={item.progress} colorPalette="blue">
                        <Progress.Track height="2px">
                          <Progress.Range />
                        </Progress.Track>
                      </Progress.Root>
                    </div>

                    <div className="md:col-span-2 flex justify-end space-x-2">
                      <IconButton
                        aria-label="Cancel download"
                        size="sm"
                        variant="ghost"
                        onClick={() => cancelDownload(item.id)}
                      >
                        <LuX />
                      </IconButton>
                    </div>
                  </div>
                </Box>
              ))}

            {downloads.filter((d) => d.status === 'downloading').length === 0 && (
              <Box className="border border-gray-800 p-8 text-center">
                <LuDownload size={32} color="var(--chakra-colors-gray-500)" className="mx-auto mb-4" />
                <Text color="gray.500">No active downloads</Text>
                <Text color="gray.400" fontSize="sm" mt={2}>
                  Add movies to your downloads to watch offline
                </Text>
              </Box>
            )}
          </Stack>
        </Box>

        {/* Completed Downloads */}
        <Box>
          <HStack justify="space-between" mb={6}>
            <Heading size="md" fontWeight="medium">
              Available Offline ({downloads.filter(d => d.status === 'completed').length})
            </Heading>
            <Button
              size="sm"
              variant="outline"
              borderRadius="none"
              disabled={downloads.filter(d => d.status === 'completed').length === 0}
            >
              Play All
            </Button>
          </HStack>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {downloads
              .filter((item) => item.status === 'completed')
              .map((item) => (
                <MotionBox
                  key={item.id}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <Box className="relative aspect-[2/3] bg-gray-900 border border-gray-800 overflow-hidden">
                    <Box className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Play overlay */}
                    <Box className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <IconButton
                        aria-label="Play"
                        borderRadius="full"
                        colorPalette="whiteAlpha"
                        size="lg"
                      >
                        <LuPlay />
                      </IconButton>
                    </Box>

                    {/* Bottom info */}
                    <Box className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                      <Text fontSize="sm" fontWeight="medium" className="line-clamp-1">
                        {item.title}
                      </Text>
                      <HStack justify="space-between" mt={1}>
                        <Text fontSize="xs" color="gray.400">
                          {item.quality}
                        </Text>
                        <IconButton
                          aria-label="Remove"
                          size="xs"
                          variant="ghost"
                          onClick={() => removeDownload(item.id)}
                        >
                          <LuX size={12} />
                        </IconButton>
                      </HStack>
                    </Box>
                  </Box>
                </MotionBox>
              ))}
          </div>

          {downloads.filter((d) => d.status === 'completed').length === 0 && (
            <Box className="border border-gray-800 p-12 text-center">
              <Text color="gray.500">No completed downloads</Text>
              <Text color="gray.400" fontSize="sm" mt={2}>
                Your downloaded movies will appear here
              </Text>
            </Box>
          )}
        </Box>

        {/* Download Settings */}
        <Box className="border border-gray-800 p-6">
          <Heading size="md" fontWeight="medium" mb={6}>
            Download Settings
          </Heading>
          <div className="grid md:grid-cols-2 gap-8">
            <Box>
              <Text fontWeight="medium" mb={4}>
                Default Quality
              </Text>
              <select className="w-full bg-black border border-gray-700 px-3 py-2">
                <option>1080p (Recommended)</option>
                <option>720p</option>
                <option>4K</option>
                <option>Best Available</option>
              </select>
              <Text color="gray.400" fontSize="sm" mt={2}>
                Higher quality uses more storage
              </Text>
            </Box>
            <Box>
              <Text fontWeight="medium" mb={4}>
                Download Over
              </Text>
              <select className="w-full bg-black border border-gray-700 px-3 py-2">
                <option>Wi-Fi Only</option>
                <option>Wi-Fi & Cellular</option>
              </select>
              <Text color="gray.400" fontSize="sm" mt={2}>
                Cellular downloads may incur data charges
              </Text>
            </Box>
          </div>
        </Box>
      </MotionBox>
    </Container>
  )
}