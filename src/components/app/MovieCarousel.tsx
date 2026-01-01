'use client'

import {
  Box,
  Heading,
  HStack,
  IconButton,
  Text,
} from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useRef, useState } from 'react'
import { MotionBox, MotionHStack } from '@/components/shared/Motion'
import { Card } from '@/components/ui/Card'

interface MovieCarouselProps {
  title: string
  movies: any[]
  type?: 'poster' | 'backdrop'
}

export function MovieCarousel({ title, movies, type = 'poster' }: MovieCarouselProps) {
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

  if (!movies || movies.length === 0) {
    return null
  }

  return (
    <Box>
      <HStack justify="space-between" mb={4}>
        <Heading size="lg" fontWeight="medium">
          {title}
        </Heading>
        <HStack gap={1}>
          <IconButton
            aria-label="Scroll left"
            size="sm"
            variant="ghost"
            borderRadius="none"
            disabled={!canScrollLeft}
            onClick={() => scroll('left')}
            _hover={{ bg: 'gray.800' }}
            _disabled={{ opacity: 0.3, cursor: 'not-allowed' }}
          >
            <ChevronLeftIcon />
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
          >
            <ChevronRightIcon />
          </IconButton>
        </HStack>
      </HStack>

      <Box
        ref={scrollRef}
        onScroll={handleScroll}
        className="overflow-x-auto scrollbar-hide"
      >
        <MotionHStack
          className="flex gap-4 pb-4"
          style={{ minHeight: type === 'poster' ? '300px' : '200px' }}
        >
          {movies.map((movie) => (
            <Box key={movie.id} className="flex-shrink-0">
              <Card
                title={movie.title}
                description={movie.release_date?.split('-')[0]}
                imageSrc={
                  type === 'poster'
                    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                    : `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
                }
                aspectRatio={type === 'poster' ? 'poster' : 'backdrop'}
                className={type === 'poster' ? 'w-48' : 'w-80'}
              />
            </Box>
          ))}
        </MotionHStack>
      </Box>
    </Box>
  )
}