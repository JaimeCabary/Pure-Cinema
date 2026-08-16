'use client'

import { useState, useEffect, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Play, 
  Pause, 
  RotateCcw, 
  RotateCw, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize, 
  ArrowLeft, 
  Plus, 
  Check, 
  Settings, 
  MessageSquare, 
  Tv, 
  Sparkles,
  Loader2,
  Film,
  Sliders
} from 'lucide-react'
import { fetchMovieDetails, MovieDetails, getTrailerKey } from '@/lib/tmdb'

export default function NetflixWatchPage() {
  const params = useParams()
  const router = useRouter()
  const id = params?.id as string

  const [movie, setMovie] = useState<MovieDetails | null>(null)
  const [trailerKey, setTrailerKey] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(7200) // 2h default
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [isInWatchlist, setIsInWatchlist] = useState(false)
  const [quality, setQuality] = useState<'4K Ultra HD' | '1080p' | '720p'>('4K Ultra HD')
  const [showSettings, setShowSettings] = useState(false)
  const [playbackSpeed, setPlaybackSpeed] = useState(1)

  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!id) return
    const load = async () => {
      try {
        setIsLoading(true)
        const data = await fetchMovieDetails(Number(id))
        setMovie(data)
        const key = await getTrailerKey(Number(id))
        if (key) setTrailerKey(key)
      } catch (e) {
        console.error('Failed to load movie data', e)
      } finally {
        setIsLoading(false)
      }
    }
    load()

    const saved = localStorage.getItem('my_watchlist')
    if (saved) {
      const list = JSON.parse(saved)
      setIsInWatchlist(list.includes(Number(id)))
    }
  }, [id])

  // Mouse activity autohide
  const handleMouseMove = () => {
    setShowControls(true)
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current)
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false)
    }, 3500)
  }

  const [indicator, setIndicator] = useState<{ type: 'play' | 'pause' | 'rewind' | 'forward' | 'volume'; value?: string } | null>(null)
  const indicatorTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const triggerIndicator = (type: 'play' | 'pause' | 'rewind' | 'forward' | 'volume', value?: string) => {
    if (indicatorTimeoutRef.current) clearTimeout(indicatorTimeoutRef.current)
    setIndicator({ type, value })
    indicatorTimeoutRef.current = setTimeout(() => {
      setIndicator(null)
    }, 750)
  }

  // Keyboard navigation & controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return

      if (e.code === 'Space' || e.key === 'k') {
        e.preventDefault()
        togglePlay()
      } else if (e.code === 'ArrowLeft' || e.key === 'j') {
        e.preventDefault()
        skipTime(-10)
      } else if (e.code === 'ArrowRight' || e.key === 'l') {
        e.preventDefault()
        skipTime(10)
      } else if (e.code === 'ArrowUp') {
        e.preventDefault()
        adjustVolume(0.1)
      } else if (e.code === 'ArrowDown') {
        e.preventDefault()
        adjustVolume(-0.1)
      } else if (e.key === 'm') {
        e.preventDefault()
        toggleMute()
      } else if (e.key === 'f') {
        e.preventDefault()
        toggleFullscreen()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isPlaying, isMuted, volume, duration])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
        triggerIndicator('pause')
      } else {
        videoRef.current.play()
        setIsPlaying(true)
        triggerIndicator('play')
      }
    } else {
      const next = !isPlaying
      setIsPlaying(next)
      triggerIndicator(next ? 'play' : 'pause')
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value)
    setCurrentTime(val)
    if (videoRef.current) videoRef.current.currentTime = val
  }

  const skipTime = (seconds: number) => {
    if (videoRef.current) {
      const newTime = Math.max(0, Math.min(duration, videoRef.current.currentTime + seconds))
      videoRef.current.currentTime = newTime
      setCurrentTime(newTime)
    } else {
      setCurrentTime(prev => Math.max(0, Math.min(duration, prev + seconds)))
    }
    triggerIndicator(seconds > 0 ? 'forward' : 'rewind', `${Math.abs(seconds)}s`)
  }

  const adjustVolume = (delta: number) => {
    const newVol = Math.min(1, Math.max(0, volume + delta))
    setVolume(newVol)
    if (videoRef.current) {
      videoRef.current.volume = newVol
      videoRef.current.muted = newVol === 0
    }
    setIsMuted(newVol === 0)
    triggerIndicator('volume', `${Math.round(newVol * 100)}%`)
  }

  const toggleMute = () => {
    const nextMuted = !isMuted
    if (videoRef.current) {
      videoRef.current.muted = nextMuted
    }
    setIsMuted(nextMuted)
    triggerIndicator('volume', nextMuted ? 'Muted' : `${Math.round(volume * 100)}%`)
  }

  const toggleFullscreen = () => {
    if (!containerRef.current) return
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => console.error(err))
    } else {
      document.exitFullscreen()
    }
  }

  const toggleWatchlist = () => {
    const saved = localStorage.getItem('my_watchlist')
    const list = saved ? JSON.parse(saved) : []
    const numId = Number(id)
    const next = list.includes(numId) ? list.filter((x: number) => x !== numId) : [...list, numId]
    localStorage.setItem('my_watchlist', JSON.stringify(next))
    setIsInWatchlist(!isInWatchlist)
  }

  const formatTime = (secs: number) => {
    const h = Math.floor(secs / 3600)
    const m = Math.floor((secs % 3600) / 60)
    const s = Math.floor(secs % 60)
    if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
    return `${m}:${String(s).padStart(2, '0')}`
  }

  if (isLoading) {
    return (
      <div className="h-screen w-full bg-[#050505] flex flex-col items-center justify-center gap-4 text-white font-scoredream">
        <Loader2 className="animate-spin text-red-600" size={48} />
        <p className="text-zinc-400 text-sm font-medium tracking-widest uppercase">Initializing Cinema Stream...</p>
      </div>
    )
  }

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full bg-black overflow-hidden select-none cursor-default font-scoredream text-white"
    >
      {/* Background Player Layer */}
      <div className="absolute inset-0 w-full h-full bg-black flex items-center justify-center">
        {trailerKey ? (
          <iframe 
            className="w-full h-full object-cover scale-105 pointer-events-none"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&controls=0&mute=${isMuted ? 1 : 0}&loop=1&playlist=${trailerKey}&modestbranding=1&rel=0&playsinline=1`}
            allow="autoplay; encrypted-media"
            title={movie?.title || 'Pure Cinema Stream'}
          />
        ) : (
          <video 
            ref={videoRef}
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            className="w-full h-full object-cover"
            autoPlay
            playsInline
            muted={isMuted}
            onTimeUpdate={() => videoRef.current && setCurrentTime(videoRef.current.currentTime)}
            onLoadedMetadata={() => videoRef.current && setDuration(videoRef.current.duration)}
          />
        )}
      </div>

      {/* Ambient Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/80 pointer-events-none" />

      {/* Center Animated Indicator Badges */}
      <AnimatePresence>
        {indicator && (
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-0 pointer-events-none flex items-center justify-center z-40"
          >
            <div className="bg-black/80 backdrop-blur-md border border-white/20 px-8 py-5 rounded-3xl flex flex-col items-center gap-2 text-white shadow-2xl">
              {indicator.type === 'play' && <Play size={44} fill="white" className="ml-1" />}
              {indicator.type === 'pause' && <Pause size={44} fill="white" />}
              {indicator.type === 'rewind' && (
                <>
                  <RotateCcw size={44} className="text-white" />
                  <span className="text-base font-bold tracking-wider text-zinc-200">-{indicator.value}</span>
                </>
              )}
              {indicator.type === 'forward' && (
                <>
                  <RotateCw size={44} className="text-white" />
                  <span className="text-base font-bold tracking-wider text-zinc-200">+{indicator.value}</span>
                </>
              )}
              {indicator.type === 'volume' && (
                <>
                  {isMuted || volume === 0 ? <VolumeX size={44} /> : <Volume2 size={44} />}
                  <span className="text-base font-bold tracking-wider text-zinc-200">{indicator.value}</span>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* OVERLAY CONTROLS (Netflixified HUD) */}
      <AnimatePresence>
        {showControls && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col justify-between p-6 md:p-10 z-50 pointer-events-auto"
          >
            {/* TOP BAR */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => router.back()}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 transition active:scale-95 group"
                  title="Back to Browse"
                >
                  <ArrowLeft size={22} className="group-hover:-translate-x-1 transition-transform" />
                </button>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-red-500 font-extrabold text-[10px] uppercase tracking-widest">PURE CINEMA 4K</span>
                    <span className="text-zinc-500">•</span>
                    <span className="text-zinc-400 text-xs font-mono">{movie?.release_date ? movie.release_date.split('-')[0] : '2026'}</span>
                  </div>
                  <h1 className="text-xl md:text-3xl font-extrabold tracking-tight text-white drop-shadow-md">
                    {movie?.title || 'Streaming Title'}
                  </h1>
                </div>
              </div>

              {/* Top Right Badges & Options */}
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleWatchlist}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border transition flex items-center gap-2 ${
                    isInWatchlist 
                      ? 'bg-red-600/30 border-red-500 text-red-400' 
                      : 'bg-black/60 border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  {isInWatchlist ? <Check size={14} /> : <Plus size={14} />}
                  <span>{isInWatchlist ? 'In Watchlist' : 'Add to List'}</span>
                </button>

                <div className="hidden sm:flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs text-zinc-300 font-mono">
                  <Sparkles size={12} className="text-yellow-400" />
                  <span>{quality}</span>
                </div>
              </div>
            </div>

            {/* CENTER CONTROLS (Rewind, Play/Pause, Forward) */}
            <div className="flex items-center justify-center gap-8 md:gap-16">
              <button 
                onClick={() => skipTime(-10)}
                className="p-4 rounded-full bg-black/40 hover:bg-white/15 backdrop-blur-md border border-white/10 text-white transition active:scale-95 group"
                title="Rewind 10 seconds"
              >
                <RotateCcw size={28} className="group-hover:-rotate-45 transition-transform" />
              </button>

              <button 
                onClick={togglePlay}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white text-black hover:bg-zinc-200 transition-all flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.3)] active:scale-90"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause size={36} fill="black" />
                ) : (
                  <Play size={36} fill="black" className="ml-1.5" />
                )}
              </button>

              <button 
                onClick={() => skipTime(10)}
                className="p-4 rounded-full bg-black/40 hover:bg-white/15 backdrop-blur-md border border-white/10 text-white transition active:scale-95 group"
                title="Forward 10 seconds"
              >
                <RotateCw size={28} className="group-hover:rotate-45 transition-transform" />
              </button>
            </div>

            {/* BOTTOM BAR CONTROLS */}
            <div className="space-y-4 max-w-6xl mx-auto w-full">
              
              {/* Scrub Progress Bar */}
              <div className="space-y-1.5">
                <div className="relative group/scrub flex items-center">
                  <input 
                    type="range"
                    min="0"
                    max={duration || 100}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-red-600 focus:outline-none hover:h-2.5 transition-all"
                  />
                </div>
                
                <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span>{formatTime(currentTime)}</span>
                  <span>-{formatTime(Math.max(0, duration - currentTime))}</span>
                </div>
              </div>

              {/* Bottom Actions Row */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={togglePlay} 
                    className="p-2 text-white hover:text-red-500 transition"
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </button>

                  <button 
                    onClick={toggleMute} 
                    className="p-2 text-white hover:text-red-500 transition"
                  >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>

                  <div className="hidden sm:flex items-center gap-2">
                    <span className="text-xs text-zinc-400 font-medium">Auto Bitrate:</span>
                    <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-emerald-400">14.2 Mbps</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => router.push('/tv')}
                    className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold uppercase tracking-wider transition"
                  >
                    <Tv size={14} />
                    <span>Live Channels</span>
                  </button>

                  <button 
                    onClick={toggleFullscreen}
                    className="p-2 text-white hover:text-red-500 transition"
                    title="Fullscreen"
                  >
                    <Maximize size={20} />
                  </button>
                </div>
              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
