'use client'

import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const customConfig = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'var(--font-satoshi), sans-serif' },
        body: { value: 'var(--font-geist), sans-serif' },
      },
      colors: {
        black: {
          50: { value: '#f7f7f7' },
          100: { value: '#e3e3e3' },
          200: { value: '#c8c8c8' },
          300: { value: '#a4a4a4' },
          400: { value: '#818181' },
          500: { value: '#666666' },
          600: { value: '#515151' },
          700: { value: '#434343' },
          800: { value: '#383838' },
          900: { value: '#000000' },
        },
      },
    },
  },
  globalCss: {
    body: {
      bg: 'black.900',
      color: 'white',
      overflowX: 'hidden',
    },
    '::-webkit-scrollbar': {
      width: '8px',
    },
    '::-webkit-scrollbar-track': {
      bg: 'black.800',
    },
    '::-webkit-scrollbar-thumb': {
      bg: 'black.600',
      borderRadius: 'none',
    },
  },
})

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isAppRoute, setIsAppRoute] = useState(false)

  useEffect(() => {
    setIsAppRoute(pathname.startsWith('/home') || 
                 pathname.startsWith('/search') ||
                 pathname.startsWith('/watchlist') ||
                 pathname.startsWith('/downloads') ||
                 pathname.startsWith('/account') ||
                 pathname.startsWith('/watch/'))
  }, [pathname])

  return (
    <ChakraProvider value={customConfig}>
      <AnimatePresence mode="wait">
        <div className={`min-h-screen ${isAppRoute ? 'bg-black-900' : 'bg-black-950'}`}>
          {children}
        </div>
      </AnimatePresence>
    </ChakraProvider>
  )
}