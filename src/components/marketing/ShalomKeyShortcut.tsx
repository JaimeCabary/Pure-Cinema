'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

export function ShalomKeyShortcut() {
  const router = useRouter()
  const bufferRef = useRef<string>('')
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is inside an input/textarea
      const target = e.target as HTMLElement | null
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        return
      }

      // Only track single alphabet characters
      if (e.key && e.key.length === 1 && /[a-zA-Z]/.test(e.key)) {
        bufferRef.current += e.key.toLowerCase()

        // Keep buffer to maximum 10 chars
        if (bufferRef.current.length > 10) {
          bufferRef.current = bufferRef.current.slice(-10)
        }

        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
          bufferRef.current = ''
        }, 3000)

        // Check if buffer contains "shalom"
        if (bufferRef.current.includes('shalom')) {
          bufferRef.current = ''
          try {
            localStorage.setItem('pure_admin_user', JSON.stringify({ name: 'Shalom', role: 'Head & PM / Frontend Lead' }))
          } catch {}
          router.push('/home')
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [router])

  return null
}
