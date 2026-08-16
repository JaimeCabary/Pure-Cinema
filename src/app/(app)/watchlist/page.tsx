'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function WatchlistPage() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(3)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          router.push('/auth/login')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 selection:bg-white selection:text-black">
      <div className="flex items-center gap-6 border-b border-zinc-800 pb-8 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">404</h1>
        <div className="h-8 w-[1px] bg-zinc-800" />
        <p className="text-sm md:text-base text-zinc-400 font-light">
          You probably didn't sign in
        </p>
      </div>

      <div className="text-center space-y-4">
        <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
          Redirecting to authentication in <span className="text-white font-bold">{countdown}s</span>...
        </p>
        <div>
          <Link
            href="/auth/login"
            className="inline-block px-6 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors"
          >
            Sign In Now
          </Link>
        </div>
      </div>
    </div>
  )
}