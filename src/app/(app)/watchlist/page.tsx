// import { getWatchlist } from '@/lib/db'
// import { WatchlistGrid } from '@/components/app/WatchlistGrid'
// import { auth } from '@/lib/auth'

// export default async function WatchlistPage() {
//   const session = await auth()
//   if (!session) {
//     return <div>Please sign in to view your watchlist</div>
//   }

//   const watchlist = await getWatchlist(session.user.id)

//   return (
//     <div>
//       <h1 className="text-3xl font-light mb-8">Your Watchlist</h1>
//       {watchlist.length > 0 ? (
//         <WatchlistGrid items={watchlist} />
//       ) : (
//         <div className="text-center py-12 border border-gray-800">
//           <p className="text-gray-400 mb-4">Your watchlist is empty</p>
//           <button className="px-6 py-2 border border-gray-600 hover:border-gray-400 transition-colors">
//             Browse Movies
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }


import { getWatchlist } from '@/lib/db'
import { WatchlistGrid, WatchlistGridSkeleton } from '@/components/app/WatchlistGrid'
import { auth } from '@/lib/auth'
import { Suspense } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'My Watchlist',
  description: 'View and manage your movie watchlist'
}

async function WatchlistContent() {
  const session = await auth()
  
  if (!session) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Sign In Required</h2>
          <p className="text-gray-400 mb-6">Please sign in to view your watchlist</p>
          <Link 
            href="/auth/login"
            className="inline-block px-6 py-3 bg-white text-black font-bold uppercase tracking-wide text-sm hover:bg-gray-200 transition-colors rounded"
          >
            Sign In
          </Link>
        </div>
      </div>
    )
  }

  const watchlist = await getWatchlist(session.user.id)

  return (
    <div className="min-h-screen bg-[#050505] pt-24 pb-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center gap-4">
          <Link 
            href="/"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <ArrowLeft size={20} className="text-white" />
          </Link>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Your Watchlist</h1>
            <p className="text-gray-400 mt-1">{watchlist.length} {watchlist.length === 1 ? 'movie' : 'movies'}</p>
          </div>
        </div>
        
        {watchlist.length > 0 ? (
          <WatchlistGrid items={watchlist} />
        ) : (
          <div className="text-center py-20 border border-gray-800 rounded-lg">
            <p className="text-gray-400 mb-4 text-lg">Your watchlist is empty</p>
            <p className="text-gray-500 mb-6 text-sm">Start adding movies to build your collection</p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-white text-black font-bold uppercase tracking-wide text-sm hover:bg-gray-200 transition-colors rounded"
            >
              Browse Movies
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default function WatchlistPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#050505] pt-24 pb-20 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 animate-pulse" />
            <div>
              <div className="h-10 w-64 bg-white/5 rounded animate-pulse mb-2" />
              <div className="h-4 w-32 bg-white/5 rounded animate-pulse" />
            </div>
          </div>
          <WatchlistGridSkeleton />
        </div>
      </div>
    }>
      <WatchlistContent />
    </Suspense>
  )
}