'use client'

import {
  Box,
  Heading,
  HStack,
  IconButton,
  Text,
  VStack,
  Link,
  Stack,
} from '@chakra-ui/react'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'
import { MotionBox, MotionHStack } from '@/components/shared/Motion'
import { useRef, useState } from 'react'

interface ContentRowProps {
  title: string
  items: any[]
  contentType: 'movie' | 'tv'
  seeAllLink?: string
}

export default function ContentRow({
  title,
  items,
  contentType,
  seeAllLink,
}: ContentRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return

    const scrollAmount = scrollRef.current.clientWidth * 0.8
    const newScrollLeft =
      scrollRef.current.scrollLeft +
      (direction === 'left' ? -scrollAmount : scrollAmount)

    scrollRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    })
  }

  const handleScroll = () => {
    if (!scrollRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10)
  }

  if (!items || items.length === 0) {
    return null
  }

  return (
    <Box>
      <HStack justify="space-between" mb={4}>
        <Heading size="lg" fontWeight="medium" letterSpacing="tight">
          {title}
        </Heading>
        <Stack direction="row" gap={4}>
          {seeAllLink && (
            <Link
              href={seeAllLink}
              color="gray.400"
              fontSize="sm"
              _hover={{ color: 'white', textDecoration: 'underline' }}
              className="cursor-pointer"
            >
              View All
            </Link>
          )}
          <Stack direction="row" gap={1}>
            <IconButton
              aria-label="Scroll left"
              size="sm"
              variant="ghost"
              borderRadius="none"
              disabled={!canScrollLeft}
              onClick={() => scroll('left')}
              _hover={{ bg: 'gray.800' }}
              _disabled={{ opacity: 0.3, cursor: 'not-allowed' }}
              className="focus-visible-ring"
            >
              <LuChevronLeft />
            </IconButton>
            <IconButton
              aria-label="Scroll right"
              size="sm"
              variant="ghost"
              borderRadius="none"
              disabled={!canScrollRight}
              onClick={() => scroll('right')}
              _hover={{ bg: 'gray.800' }}
              _disabled={{ opacity: 0.3, cursor: 'not-allowed' }}
              className="focus-visible-ring"
            >
              <LuChevronRight />
            </IconButton>
          </Stack>
        </Stack>
      </HStack>

      <Box
        ref={scrollRef}
        onScroll={handleScroll}
        className="relative overflow-x-auto scrollbar-hide"
      >
        <MotionHStack
          initial={false}
          className="flex gap-4 pb-4"
          style={{ minHeight: '300px' }}
        >
          {items.map((item) => (
            <MotionBox
              key={item.id}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group flex-shrink-0 w-[200px] cursor-pointer"
            >
              <Box
                className="relative aspect-[2/3] overflow-hidden bg-gray.900"
                role="button"
                tabIndex={0}
                aria-label={`${contentType === 'movie' ? 'Watch' : 'View'} ${item.title || item.name}`}
              >
                {item.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w342${item.poster_path}`}
                    alt={item.title || item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                ) : (
                  <Box className="w-full h-full flex items-center justify-center bg-gray.800">
                    <Text color="gray.500" fontSize="xs">
                      No Image
                    </Text>
                  </Box>
                )}
                
                {/* Rating Badge */}
                {item.vote_average && (
                  <Box className="absolute top-2 right-2 bg-black/80 px-2 py-1 rounded">
                    <Text fontSize="xs" fontWeight="bold">
                      {item.vote_average.toFixed(1)}
                    </Text>
                  </Box>
                )}
                
                {/* Hover Overlay */}
                <Box className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <Text fontSize="sm" fontWeight="medium" mb={2} lineClamp={2}>
                    {item.title || item.name}
                  </Text>
                  <Text fontSize="xs" color="gray.300" lineClamp={2}>
                    {item.overview}
                  </Text>
                  <Stack direction="row" mt={3} gap={2}>
                    <button className="px-3 py-1.5 bg-white text-black text-xs font-medium hover:bg-gray-100 transition-colors">
                      ▶ Play
                    </button>
                    <button className="px-3 py-1.5 bg-gray-800 text-white text-xs font-medium hover:bg-gray-700 transition-colors border border-gray-700">
                      + Add
                    </button>
                  </Stack>
                </Box>
              </Box>
            </MotionBox>
          ))}
        </MotionHStack>
      </Box>
    </Box>
  )
}