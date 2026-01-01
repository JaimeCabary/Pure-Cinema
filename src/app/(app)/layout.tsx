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
  const isWatchPage = pathname?.startsWith('/watch/')

  return (
    <div className="min-h-screen bg-black">
      {!isWatchPage && <AppNav />}
      <MotionDiv
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className={isWatchPage ? '' : 'px-4 lg:px-8 pt-20'}
      >
        {isWatchPage ? (
          children
        ) : (
          <main className="max-w-7xl mx-auto">
            {children}
          </main>
        )}
      </MotionDiv>
    </div>
  )
}