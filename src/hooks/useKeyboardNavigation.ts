'use client'

import { useEffect, useCallback } from 'react'

interface KeyboardShortcut {
  key: string
  ctrlKey?: boolean
  shiftKey?: boolean
  altKey?: boolean
  metaKey?: boolean
  action: (e: KeyboardEvent) => void
  preventDefault?: boolean
}

export function useKeyboardNavigation(shortcuts: KeyboardShortcut[]) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      for (const shortcut of shortcuts) {
        const {
          key,
          ctrlKey = false,
          shiftKey = false,
          altKey = false,
          metaKey = false,
          action,
          preventDefault = true,
        } = shortcut

        if (
          e.key.toLowerCase() === key.toLowerCase() &&
          e.ctrlKey === ctrlKey &&
          e.shiftKey === shiftKey &&
          e.altKey === altKey &&
          e.metaKey === metaKey
        ) {
          if (preventDefault) {
            e.preventDefault()
          }
          action(e)
          break
        }
      }
    },
    [shortcuts]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])
}

// App-wide keyboard shortcuts
export const useAppKeyboardShortcuts = () => {
  useKeyboardNavigation([
    {
      key: 'k',
      ctrlKey: true,
      action: () => {
        document.querySelector<HTMLInputElement>('input[type="search"]')?.focus()
      },
    },
    {
      key: 'ArrowLeft',
      action: (e) => {
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
          return // Skip when typing in inputs
        }
        window.history.back()
      },
    },
    {
      key: 'ArrowRight',
      action: (e) => {
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
          return
        }
        window.history.forward()
      },
    },
    {
      key: '/',
      action: () => {
        document.querySelector<HTMLInputElement>('input[type="search"]')?.focus()
      },
    },
    {
      key: 'Escape',
      action: () => {
        const modals = document.querySelectorAll('[role="dialog"]')
        const lastModal = modals[modals.length - 1]
        if (lastModal) {
          ;(lastModal as HTMLElement).style.display = 'none'
        } else {
          ;(document.activeElement as HTMLElement)?.blur()
        }
      },
    },
  ])
}

// Carousel navigation shortcuts
export const useCarouselNavigation = (
  scrollRef: React.RefObject<HTMLElement>,
  itemWidth: number
) => {
  useKeyboardNavigation([
    {
      key: 'ArrowLeft',
      action: () => {
        if (scrollRef.current) {
          scrollRef.current.scrollBy({ left: -itemWidth, behavior: 'smooth' })
        }
      },
    },
    {
      key: 'ArrowRight',
      action: () => {
        if (scrollRef.current) {
          scrollRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' })
        }
      },
    },
  ])
}

// Player controls shortcuts
export const usePlayerShortcuts = (
  playerRef: React.RefObject<HTMLVideoElement | HTMLAudioElement>
) => {
  useKeyboardNavigation([
    {
      key: ' ',
      action: () => {
        if (playerRef.current) {
          if (playerRef.current.paused) {
            playerRef.current.play()
          } else {
            playerRef.current.pause()
          }
        }
      },
    },
    {
      key: 'ArrowLeft',
      action: () => {
        if (playerRef.current) {
          playerRef.current.currentTime -= 10
        }
      },
    },
    {
      key: 'ArrowRight',
      action: () => {
        if (playerRef.current) {
          playerRef.current.currentTime += 10
        }
      },
    },
    {
      key: 'm',
      action: () => {
        if (playerRef.current) {
          playerRef.current.muted = !playerRef.current.muted
        }
      },
    },
    {
      key: 'f',
      action: () => {
        if (playerRef.current) {
          if (document.fullscreenElement) {
            document.exitFullscreen()
          } else {
            playerRef.current.requestFullscreen()
          }
        }
      },
    },
  ])
}