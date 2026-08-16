'use client'

import { useState, useEffect, useRef } from 'react'
import Hls from 'hls.js'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Tv, 
  Volume2, 
  VolumeX, 
  Volume1,
  Maximize, 
  Search,
  Play,
  Pause,
  RefreshCw,
  RotateCcw,
  RotateCw,
  Radio
} from 'lucide-react'
import { LiveChannel, DEFAULT_CHANNELS, LIVE_CATEGORIES } from '@/lib/iptv'

interface LiveTVPlayerProps {
  initialChannels?: LiveChannel[]
  selectedChannelId?: string
}

export function LiveTVPlayer({ initialChannels = DEFAULT_CHANNELS, selectedChannelId }: LiveTVPlayerProps) {
  const [channels, setChannels] = useState<LiveChannel[]>(initialChannels)
  const [activeChannel, setActiveChannel] = useState<LiveChannel>(() => {
    if (selectedChannelId) {
      const found = initialChannels.find(c => c.id === selectedChannelId)
      if (found) return found
    }
    return initialChannels[0] || DEFAULT_CHANNELS[0]
  })
  
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.85)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isHoveredControls, setIsHoveredControls] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All Channels')
  const [searchQuery, setSearchQuery] = useState('')
  const [streamStatus, setStreamStatus] = useState<'loading' | 'live' | 'error'>('loading')
  const [playbackRate, setPlaybackRate] = useState(1)
  
  // On-screen indicator state
  const [indicator, setIndicator] = useState<{ type: 'play' | 'pause' | 'rewind' | 'forward' | 'volume'; value?: string } | null>(null)
  const indicatorTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const hlsRef = useRef<Hls | null>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)

  const triggerIndicator = (type: 'play' | 'pause' | 'rewind' | 'forward' | 'volume', value?: string) => {
    if (indicatorTimeoutRef.current) clearTimeout(indicatorTimeoutRef.current)
    setIndicator({ type, value })
    indicatorTimeoutRef.current = setTimeout(() => {
      setIndicator(null)
    }, 750)
  }

  // Filter channels cleanly
  const filteredChannels = channels.filter(channel => {
    const matchesCategory = selectedCategory === 'All Channels' || channel.group === selectedCategory
    const matchesSearch = channel.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Initialize and load HLS stream when active channel changes
  useEffect(() => {
    if (!videoRef.current || !activeChannel) return
    const video = videoRef.current
    setStreamStatus('loading')
    setCurrentTime(0)
    setDuration(0)

    if (hlsRef.current) {
      hlsRef.current.destroy()
      hlsRef.current = null
    }

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        backBufferLength: 120,
      })
      hlsRef.current = hls
      hls.loadSource(activeChannel.streamUrl)
      hls.attachMedia(video)

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.volume = volume
        video.muted = isMuted
        video.play().then(() => {
          setIsPlaying(true)
          setStreamStatus('live')
        }).catch(() => {
          setIsPlaying(false)
          setStreamStatus('live')
        })
      })

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hls.startLoad()
              break
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls.recoverMediaError()
              break
            default:
              setStreamStatus('error')
              hls.destroy()
              break
          }
        }
      })
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = activeChannel.streamUrl
      video.addEventListener('loadedmetadata', () => {
        video.volume = volume
        video.muted = isMuted
        video.play().catch(() => setIsPlaying(false))
        setStreamStatus('live')
      })
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy()
        hlsRef.current = null
      }
    }
  }, [activeChannel])

  // Track video time updates
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime)
      if (video.duration && isFinite(video.duration)) {
        setDuration(video.duration)
      }
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('loadedmetadata', handleTimeUpdate)
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('loadedmetadata', handleTimeUpdate)
    }
  }, [])

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
        seekRelative(-10)
      } else if (e.code === 'ArrowRight' || e.key === 'l') {
        e.preventDefault()
        seekRelative(10)
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
  }, [isPlaying, isMuted, volume])

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
      triggerIndicator('pause')
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true)
        triggerIndicator('play')
      })
    }
  }

  const seekRelative = (seconds: number) => {
    if (!videoRef.current) return
    const newTime = Math.max(0, videoRef.current.currentTime + seconds)
    videoRef.current.currentTime = newTime
    setCurrentTime(newTime)
    triggerIndicator(seconds > 0 ? 'forward' : 'rewind', `${Math.abs(seconds)}s`)
  }

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !videoRef.current) return
    const rect = progressBarRef.current.getBoundingClientRect()
    const pos = (e.clientX - rect.left) / rect.width
    const seekTime = pos * (duration || 100)
    videoRef.current.currentTime = seekTime
    setCurrentTime(seekTime)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value)
    setVolume(val)
    if (videoRef.current) {
      videoRef.current.volume = val
      videoRef.current.muted = val === 0
      setIsMuted(val === 0)
    }
    triggerIndicator('volume', `${Math.round(val * 100)}%`)
  }

  const adjustVolume = (delta: number) => {
    const newVol = Math.min(1, Math.max(0, volume + delta))
    setVolume(newVol)
    if (videoRef.current) {
      videoRef.current.volume = newVol
      videoRef.current.muted = newVol === 0
      setIsMuted(newVol === 0)
    }
    triggerIndicator('volume', `${Math.round(newVol * 100)}%`)
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    const nextMuted = !isMuted
    videoRef.current.muted = nextMuted
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

  const cyclePlaybackRate = () => {
    const rates = [1, 1.25, 1.5, 2, 0.75]
    const next = rates[(rates.indexOf(playbackRate) + 1) % rates.length]
    setPlaybackRate(next)
    if (videoRef.current) {
      videoRef.current.playbackRate = next
    }
  }

  const formatTime = (secs: number) => {
    if (!secs || isNaN(secs)) return '00:00'
    const m = Math.floor(secs / 60)
    const s = Math.floor(secs % 60)
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  }

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : (currentTime % 60) * 1.66

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      
      {/* LEFT: Channel Switcher (4 cols) */}
      <div className="lg:col-span-4 bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden flex flex-col h-[600px]">
        {/* Search */}
        <div className="p-3 border-b border-zinc-900">
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search channels..."
              className="w-full bg-zinc-900 border border-zinc-800 focus:border-white text-white text-xs pl-8 pr-3 py-2 outline-none rounded transition-colors placeholder:text-zinc-600"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="p-2 border-b border-zinc-900 flex gap-1.5 overflow-x-auto scrollbar-hide text-xs">
          {LIVE_CATEGORIES.slice(0, 4).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded text-[11px] font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat 
                  ? 'bg-white text-black font-semibold' 
                  : 'text-zinc-400 hover:text-white bg-zinc-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Channel List */}
        <div className="overflow-y-auto flex-1 divide-y divide-zinc-900">
          {filteredChannels.map((channel, index) => {
            const isActive = activeChannel.id === channel.id
            return (
              <button
                key={channel.id}
                onClick={() => setActiveChannel(channel)}
                className={`w-full text-left p-3 flex items-center gap-3 transition-colors ${
                  isActive ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-900/50 text-zinc-400'
                }`}
              >
                <span className="text-[10px] font-mono text-zinc-600 w-4">
                  {String(index + 1).padStart(2, '0')}
                </span>
                
                <div className="flex-1 min-w-0">
                  <p className={`text-xs truncate font-medium ${isActive ? 'text-white font-bold' : 'text-zinc-300'}`}>
                    {channel.name}
                  </p>
                  <p className="text-[10px] text-zinc-500 truncate">
                    {channel.group || 'Live Broadcast'}
                  </p>
                </div>

                {isActive && (
                  <span className="text-[9px] bg-red-600 text-white px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                    LIVE
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* RIGHT: Video Screen with Full Controls & Indicators (8 cols) */}
      <div 
        ref={containerRef}
        onMouseEnter={() => setIsHoveredControls(true)}
        onMouseLeave={() => setIsHoveredControls(false)}
        className="lg:col-span-8 bg-black rounded-xl overflow-hidden border border-zinc-900 relative group flex flex-col justify-between h-[600px] select-none"
      >
        {/* Video element */}
        <video
          ref={videoRef}
          className="w-full h-full object-contain bg-black cursor-pointer"
          playsInline
          autoPlay
          muted={isMuted}
          onClick={togglePlay}
        />

        {/* Center Animated Indicator Badges */}
        <AnimatePresence>
          {indicator && (
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="absolute inset-0 pointer-events-none flex items-center justify-center z-30"
            >
              <div className="bg-black/80 backdrop-blur-md border border-white/20 px-6 py-4 rounded-2xl flex flex-col items-center gap-2 text-white shadow-2xl">
                {indicator.type === 'play' && <Play size={36} fill="white" className="ml-1" />}
                {indicator.type === 'pause' && <Pause size={36} fill="white" />}
                {indicator.type === 'rewind' && (
                  <>
                    <RotateCcw size={36} className="text-white" />
                    <span className="text-sm font-bold tracking-wider text-zinc-200">-{indicator.value}</span>
                  </>
                )}
                {indicator.type === 'forward' && (
                  <>
                    <RotateCw size={36} className="text-white" />
                    <span className="text-sm font-bold tracking-wider text-zinc-200">+{indicator.value}</span>
                  </>
                )}
                {indicator.type === 'volume' && (
                  <>
                    {isMuted || volume === 0 ? <VolumeX size={36} /> : <Volume2 size={36} />}
                    <span className="text-sm font-bold tracking-wider text-zinc-200">{indicator.value}</span>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Top Channel Overlay */}
        <div className="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/90 via-black/40 to-transparent flex items-center justify-between pointer-events-none z-20">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-red-600 text-white text-[10px] font-bold rounded uppercase">
              LIVE
            </span>
            <h2 className="text-sm font-bold text-white tracking-tight">
              {activeChannel.name}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-zinc-400">
              60 FPS · 1080p HD
            </span>
          </div>
        </div>

        {/* Bottom Video Controls & Seek Bar */}
        <div className="absolute bottom-0 inset-x-0 pt-10 pb-4 px-4 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col gap-2 z-20">
          
          {/* Interactive Seek Bar */}
          <div 
            ref={progressBarRef}
            onClick={handleSeek}
            className="w-full h-3 flex items-center cursor-pointer group/seek relative"
          >
            {/* Background Track */}
            <div className="w-full h-1 bg-zinc-800 rounded-full group-hover/seek:h-2 transition-all relative overflow-hidden">
              {/* Progress */}
              <div 
                className="h-full bg-red-600 transition-all rounded-full relative"
                style={{ width: `${Math.min(100, Math.max(0, progressPercent))}%` }}
              />
            </div>
            {/* Scrubber Knob */}
            <div 
              className="absolute w-3 h-3 bg-white rounded-full shadow-md scale-0 group-hover/seek:scale-100 transition-transform -translate-x-1/2 pointer-events-none"
              style={{ left: `${Math.min(100, Math.max(0, progressPercent))}%` }}
            />
          </div>

          {/* Controls Bar */}
          <div className="flex items-center justify-between gap-3 pt-1">
            
            {/* Left Controls: Play/Pause, Rewind 10s, FastForward 10s, Volume, Time */}
            <div className="flex items-center gap-2">
              
              {/* Play / Pause */}
              <button 
                onClick={togglePlay}
                className="w-8 h-8 rounded bg-white text-black hover:bg-zinc-200 transition flex items-center justify-center"
                title={isPlaying ? 'Pause (Space)' : 'Play (Space)'}
              >
                {isPlaying ? <Pause size={14} fill="black" /> : <Play size={14} fill="black" className="ml-0.5" />}
              </button>

              {/* Rewind 10s */}
              <button 
                onClick={() => seekRelative(-10)}
                className="w-8 h-8 rounded bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white transition flex items-center justify-center border border-zinc-800"
                title="Rewind 10s (Left Arrow)"
              >
                <RotateCcw size={14} />
              </button>

              {/* Fast Forward 10s */}
              <button 
                onClick={() => seekRelative(10)}
                className="w-8 h-8 rounded bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white transition flex items-center justify-center border border-zinc-800"
                title="Fast Forward 10s (Right Arrow)"
              >
                <RotateCw size={14} />
              </button>

              {/* Volume Controls & Slider */}
              <div className="flex items-center gap-1.5 group/vol pl-1">
                <button 
                  onClick={toggleMute}
                  className="w-8 h-8 rounded bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white transition flex items-center justify-center border border-zinc-800"
                  title={isMuted ? 'Unmute (m)' : 'Mute (m)'}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX size={14} />
                  ) : volume < 0.5 ? (
                    <Volume1 size={14} />
                  ) : (
                    <Volume2 size={14} />
                  )}
                </button>
                <input 
                  type="range" 
                  min="0" 
                  max="1" 
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-16 md:w-20 accent-red-600 h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer"
                  title={`Volume: ${Math.round(volume * 100)}%`}
                />
              </div>

              {/* Time Display */}
              <span className="text-[11px] font-mono text-zinc-400 pl-2 hidden sm:inline">
                {formatTime(currentTime)} {duration > 0 ? `/ ${formatTime(duration)}` : '(LIVE DVR)'}
              </span>
            </div>

            {/* Right Controls: Speed, Reload, Fullscreen */}
            <div className="flex items-center gap-2">
              
              {/* Playback Speed */}
              <button
                onClick={cyclePlaybackRate}
                className="px-2 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-[11px] font-mono font-semibold border border-zinc-800 transition"
                title="Playback Speed"
              >
                {playbackRate}x
              </button>

              {/* Reload Stream */}
              <button 
                onClick={() => setActiveChannel({ ...activeChannel })}
                className="w-8 h-8 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition flex items-center justify-center border border-zinc-800"
                title="Reload Stream"
              >
                <RefreshCw size={14} />
              </button>

              {/* Fullscreen */}
              <button 
                onClick={toggleFullscreen}
                className="w-8 h-8 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition flex items-center justify-center border border-zinc-800"
                title="Fullscreen (f)"
              >
                <Maximize size={14} />
              </button>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}
