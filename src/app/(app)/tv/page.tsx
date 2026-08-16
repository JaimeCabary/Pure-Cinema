import { LiveTVPlayer } from '@/components/app/LiveTVPlayer'
import { DEFAULT_CHANNELS, fetchM3UPlaylist } from '@/lib/iptv'

export const revalidate = 600

export default async function LiveTVPage() {
  const channels = await fetchM3UPlaylist()

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto font-sans selection:bg-white selection:text-black">
      
      {/* Page Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-900 pb-5">
        <div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Live Channels
          </h1>
          <p className="text-zinc-500 text-xs sm:text-sm font-light mt-1">
            Global satellite broadcasts with adaptive real-time playback
          </p>
        </div>
        <div className="text-zinc-500 text-xs font-mono">
          {channels.length} Channels Online
        </div>
      </div>

      {/* Clean Live TV Player Component */}
      <LiveTVPlayer initialChannels={channels} />
    </div>
  )
}
