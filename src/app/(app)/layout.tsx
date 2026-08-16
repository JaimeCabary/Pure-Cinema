'use client'

import { AppNav } from '@/components/app/Nav'
import { MotionDiv } from '@/components/shared/Motion'
import { usePathname } from 'next/navigation'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  
  // Don't show nav on watch pages (fullscreen video)
  const isWatchPage = pathname?.startsWith('/watch')
  const isFullBleed = pathname === '/home' || pathname === '/tv' || isWatchPage

  return (
    <div className="min-h-screen bg-black font-scoredream selection:bg-red-600 selection:text-white">
      {!isWatchPage && <AppNav />}
      <MotionDiv
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
        className={isFullBleed ? '' : 'px-4 lg:px-12 pt-24 max-w-7xl mx-auto'}
      >
        <main>
          {children}
        </main>
      </MotionDiv>
    </div>
  )
}