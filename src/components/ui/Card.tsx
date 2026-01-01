'use client'

import {
  Box,
  BoxProps,
  Heading,
  Text,
  VStack,
  HStack,
  Stack,
} from '@chakra-ui/react'
import { MotionBox } from '@/components/shared/Motion'
import { forwardRef } from 'react'

interface CardProps extends BoxProps {
  title?: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  hoverable?: boolean
  aspectRatio?: 'poster' | 'backdrop' | 'square'
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      title,
      description,
      imageSrc,
      imageAlt,
      hoverable = true,
      aspectRatio = 'poster',
      children,
      ...props
    },
    ref
  ) => {
    const aspectRatioClass = {
      poster: 'aspect-poster',
      backdrop: 'aspect-backdrop',
      square: 'aspect-square',
    }[aspectRatio]

    // Extract Chakra-specific props to avoid conflicts
    const { className, ...otherProps } = props

    return (
      <MotionBox
        ref={ref}
        className={`relative bg-gray-900 border border-gray-800 overflow-hidden ${
          hoverable ? 'group cursor-pointer' : ''
        } ${aspectRatioClass} ${className || ''}`}
        whileHover={hoverable ? { y: -8 } : {}}
        transition={hoverable ? ({ duration: 0.2 } as any) : undefined}
        {...(otherProps as any)}
      >
        {/* Image */}
        {imageSrc && (
          <Box className="absolute inset-0">
            <img
              src={imageSrc}
              alt={imageAlt || title || 'Card image'}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <Box className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Box>
        )}

        {/* Content */}
        <Box className="relative h-full p-4 flex flex-col justify-end">
          {title && (
            <Heading size="sm" fontWeight="medium" mb={2}>
              {title}
            </Heading>
          )}
          {description && (
            <Text fontSize="xs" color="gray.300" className="line-clamp-2">
              {description}
            </Text>
          )}
          {children}
        </Box>

        {/* Hover overlay */}
        {hoverable && (
          <Box className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </MotionBox>
    )
  }
)

Card.displayName = 'Card'

// Card with action buttons
interface ActionCardProps extends CardProps {
  actions?: React.ReactNode
}

export const ActionCard = forwardRef<HTMLDivElement, ActionCardProps>(
  ({ actions, children, ...props }, ref) => {
    return (
      <Card ref={ref} {...props}>
        <Box className="relative z-10">
          {children}
          {actions && (
            <Stack
              direction="row"
              className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              gap={2}
            >
              {actions}
            </Stack>
          )}
        </Box>
      </Card>
    )
  }
)

ActionCard.displayName = 'ActionCard'

// Info card (no image)
interface InfoCardProps extends Omit<BoxProps, 'title'> {
  title?: string
  description?: string
}

export const InfoCard = forwardRef<HTMLDivElement, InfoCardProps>(
  ({ title, description, children, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className="border border-gray-800 p-6 hover:border-gray-700 transition-colors"
        {...props}
      >
        <Stack gap={4} align="start">
          {title && (
            <Heading size="md" fontWeight="medium">
              {title}
            </Heading>
          )}
          {description && (
            <Text color="gray.400">{description}</Text>
          )}
          {children}
        </Stack>
      </Box>
    )
  }
)

InfoCard.displayName = 'InfoCard'