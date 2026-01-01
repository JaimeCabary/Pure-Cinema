'use client'

import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'

const MotionButton = motion(ChakraButton)

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'

interface ButtonProps extends Omit<ChakraButtonProps, 'variant'> {
  variant?: ButtonVariant
  loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', loading, ...props }, ref) => {
    const baseStyles = {
      borderRadius: 'none',
      fontWeight: 'medium',
      letterSpacing: '0.025em',
      _focus: {
        boxShadow: 'none',
        outline: '1px solid',
        outlineColor: 'whiteAlpha.500',
      },
      _disabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    }

    const variants: Record<ButtonVariant, any> = {
      primary: {
        bg: 'white',
        color: 'black',
        _hover: {
          bg: 'gray.100',
          transform: 'scale(1.02)',
        },
        _active: {
          bg: 'gray.200',
        },
      },
      secondary: {
        bg: 'gray.800',
        color: 'white',
        border: '1px solid',
        borderColor: 'gray.700',
        _hover: {
          bg: 'gray.700',
          borderColor: 'gray.600',
          transform: 'scale(1.02)',
        },
        _active: {
          bg: 'gray.600',
        },
      },
      outline: {
        bg: 'transparent',
        color: 'white',
        border: '1px solid',
        borderColor: 'gray.600',
        _hover: {
          bg: 'whiteAlpha.50',
          borderColor: 'gray.500',
          transform: 'scale(1.02)',
        },
        _active: {
          bg: 'whiteAlpha.100',
        },
      },
      ghost: {
        bg: 'transparent',
        color: 'white',
        _hover: {
          bg: 'whiteAlpha.100',
          transform: 'scale(1.02)',
        },
        _active: {
          bg: 'whiteAlpha.200',
        },
      },
    }

    const selectedVariant = variants[variant]

    return (
      <MotionButton
        ref={ref}
        {...baseStyles}
        {...selectedVariant}
        {...props}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        loading={loading}
        loadingText={props.loadingText || 'Loading...'}
      >
        {children}
      </MotionButton>
    )
  }
)

Button.displayName = 'Button'

// Icon button variant
export const IconButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="ghost"
        p={2}
        minW="auto"
        h="auto"
        aspectRatio="1/1"
        {...props}
      >
        {children}
      </Button>
    )
  }
)

IconButton.displayName = 'IconButton'