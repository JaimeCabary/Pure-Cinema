'use client'

import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverProps {
  threshold?: number
  root?: Element | null
  rootMargin?: string
  freezeOnceVisible?: boolean
}

export function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = '0px',
  freezeOnceVisible = false,
}: UseIntersectionObserverProps = {}) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>()
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<Element | null>(null)

  const updateEntry = ([newEntry]: IntersectionObserverEntry[]) => {
    setEntry(newEntry)
    setIsVisible(newEntry.isIntersecting)

    if (freezeOnceVisible && newEntry.isIntersecting) {
      observer.current?.disconnect()
    }
  }

  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const node = elementRef.current
    if (!node) return

    observer.current = new IntersectionObserver(updateEntry, {
      threshold,
      root,
      rootMargin,
    })

    observer.current.observe(node)

    return () => {
      observer.current?.disconnect()
    }
  }, [elementRef.current, threshold, root, rootMargin, freezeOnceVisible])

  const setRef = (node: Element | null) => {
    elementRef.current = node
  }

  return { setRef, entry, isVisible }
}

// Lazy load images with intersection observer
export function useLazyImage(
  src: string,
  options?: UseIntersectionObserverProps
) {
  const [imageSrc, setImageSrc] = useState<string>('')
  const { setRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    ...options,
  })

  useEffect(() => {
    if (isVisible) {
      setImageSrc(src)
    }
  }, [isVisible, src])

  return { ref: setRef, src: imageSrc, isLoaded: !!imageSrc }
}

// Infinite scroll hook
export function useInfiniteScroll<T>(
  fetchMore: () => Promise<T[]>,
  options?: {
    threshold?: number
    enabled?: boolean
    initialData?: T[]
  }
) {
  const [data, setData] = useState<T[]>(options?.initialData || [])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const { setRef } = useIntersectionObserver({
    threshold: options?.threshold || 0.1,
    freezeOnceVisible: false,
  })

  const loadMore = useCallback(async () => {
    if (!hasMore || isLoading || !options?.enabled) return

    setIsLoading(true)
    try {
      const newData = await fetchMore()
      if (newData.length === 0) {
        setHasMore(false)
      } else {
        setData((prev) => [...prev, ...newData])
        setPage((prev) => prev + 1)
      }
    } catch (error) {
      console.error('Failed to load more data:', error)
    } finally {
      setIsLoading(false)
    }
  }, [fetchMore, hasMore, isLoading, options?.enabled])

  useEffect(() => {
    if (options?.enabled && hasMore && !isLoading) {
      loadMore()
    }
  }, [loadMore, options?.enabled, hasMore, isLoading])

  const sentinelRef = useCallback(
    (node: Element | null) => {
      if (node) {
        setRef(node)
      }
    },
    [setRef]
  )

  return {
    data,
    sentinelRef,
    isLoading,
    hasMore,
    loadMore,
    reset: () => {
      setData(options?.initialData || [])
      setPage(1)
      setHasMore(true)
      setIsLoading(false)
    },
  }
}

import { useCallback } from 'react'