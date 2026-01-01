'use client'

import { useState } from 'react'
import { signOut } from 'next-auth/react'
import { 
  LogOut, Camera, Shield, Settings, Download, 
  Trash2, History, Smartphone, Monitor 
} from 'lucide-react'
import { CinematicGrid } from '@/components/marketing/CinematicGrid'

interface AccountViewProps {
  user: {
    id: string
    name: string | null
    email: string | null
    createdAt: Date
  }
  watchHistory: Array<{
    movieId: string
    movieTitle: string
    progress: number
    lastWatched: Date
    posterPath: string | null
  }>
  sessionCount: number
}

// Mock background movies (visual only)
const MOCK_BG_MOVIES = Array(20).fill({
  poster_path: '/8CdXdeqbkL1ba4K8msTTVNbX8iH.jpg'
}).map((m, i) => ({ ...m, id: i }))

export function AccountView({ user, watchHistory, sessionCount }: AccountViewProps) {
  const [isEditing, setIsEditing] = useState(false)
  
  // Local state for the form
  const [formData, setFormData] = useState({
    name: user.name || '',
    handle: user.email ? `@${user.email.split('@')[0]}` : '@user',
  })

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black relative">
      
      {/* --- BACKGROUND --- */}
      <div className="absolute top-0 inset-x-0 h-[60vh] overflow-hidden pointer-events-none opacity-40 mix-blend-screen z-0">
         <CinematicGrid movies={MOCK_BG_MOVIES} />
         <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black" />
         <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 pt-40 pb-20 px-6 max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
          <div>
            <h1 className="text-5xl font-bold tracking-tighter mb-1">Settings</h1>
            <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest">
              ID: {user.id.slice(-8).toUpperCase()}
            </p>
          </div>
          <button 
            onClick={() => signOut({ callbackUrl: '/auth/login' })}
            className="text-zinc-500 hover:text-white flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors"
          >
            <LogOut size={14} /> Sign Out
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* --- LEFT COL: PROFILE --- */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-black border border-white/10 p-1 rounded-lg">
              <div className="relative aspect-square bg-zinc-900 overflow-hidden mb-1 group flex items-center justify-center">
                 {/* Initials Avatar */}
                 <div className="text-6xl font-bold text-zinc-700 select-none">
                    {(formData.name?.[0] || user.email?.[0] || '?').toUpperCase()}
                 </div>
                 <button className="absolute bottom-4 right-4 bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera size={16} />
                 </button>
              </div>
              
              <div className="p-6">
                 {isEditing ? (
                    <div className="space-y-4">
                       <div className="space-y-1">
                          <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Display Name</label>
                          <input 
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                            className="w-full bg-zinc-900 border-b border-zinc-700 text-white p-2 text-sm focus:border-white focus:outline-none"
                          />
                       </div>
                       <div className="flex gap-2 pt-2">
                          <button onClick={() => setIsEditing(false)} className="flex-1 bg-white text-black h-8 text-xs font-bold uppercase tracking-widest hover:bg-zinc-200">Done</button>
                          <button onClick={() => setIsEditing(false)} className="flex-1 border border-white/20 text-white h-8 text-xs font-bold uppercase tracking-widest hover:bg-white/10">Cancel</button>
                       </div>
                    </div>
                 ) : (
                    <>
                       <div className="flex justify-between items-start mb-4">
                          <div>
                             <h2 className="text-xl font-bold">{formData.name || 'Anonymous'}</h2>
                             <p className="text-zinc-500 text-xs mt-1">{user.email}</p>
                          </div>
                          <button 
                            onClick={() => setIsEditing(true)}
                            className="text-[10px] font-bold uppercase tracking-widest border border-zinc-800 px-3 py-1 hover:border-white transition-colors"
                          >
                            Edit
                          </button>
                       </div>
                       <p className="text-zinc-400 text-sm leading-relaxed border-l-2 border-zinc-800 pl-4">
                          Member since {new Date(user.createdAt).getFullYear()}
                       </p>
                    </>
                 )}
              </div>
            </div>

            {/* MEMBERSHIP BADGE */}
            <div className="border border-white/10 p-6 flex items-center justify-between bg-zinc-900/20">
               <div>
                  <div className="flex items-center gap-2 mb-1">
                     <Shield size={14} className="text-white" />
                     <span className="text-xs font-bold uppercase tracking-widest">Plan</span>
                  </div>
                  <div className="text-xl font-bold text-white">Standard</div>
               </div>
               <div className="text-right">
                  <div className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1">Status</div>
                  <div className="text-green-500 text-xs font-bold uppercase tracking-widest flex items-center gap-1 justify-end">
                     <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Active
                  </div>
               </div>
            </div>
          </div>

          {/* --- RIGHT COL: DATA --- */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1. WATCH HISTORY (Real Data) */}
            <section>
               <h3 className="text-lg font-medium mb-6 flex items-center gap-2 text-white/50">
                  <History size={16} /> Recent Activity
               </h3>
               <div className="border-t border-white/10">
                  {watchHistory.length > 0 ? (
                    watchHistory.map((item) => (
                      <div key={item.movieId} className="group py-4 border-b border-white/10 flex items-center gap-6 hover:bg-white/5 transition-colors px-4 -mx-4">
                         <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center text-xs font-bold text-zinc-700 border border-white/5 overflow-hidden">
                            {item.posterPath ? (
                              <img src={`https://image.tmdb.org/t/p/w92${item.posterPath}`} alt={item.movieTitle} className="w-full h-full object-cover opacity-60" />
                            ) : (
                              item.movieTitle[0]
                            )}
                         </div>
                         <div className="flex-1">
                            <h4 className="font-bold text-lg">{item.movieTitle}</h4>
                            <p className="text-xs text-zinc-500 uppercase tracking-wider">
                              Watched {new Date(item.lastWatched).toLocaleDateString()}
                            </p>
                         </div>
                         <div className="w-32">
                            <div className="h-1 bg-zinc-800 w-full overflow-hidden">
                               <div className="h-full bg-white" style={{ width: `${item.progress}%` }} />
                            </div>
                         </div>
                      </div>
                    ))
                  ) : (
                    <div className="py-8 text-zinc-500 text-sm italic">No recent watch history found.</div>
                  )}
               </div>
            </section>

            {/* 2. DEVICE MANAGER */}
            <section>
               <h3 className="text-lg font-medium mb-6 flex items-center gap-2 text-white/50">
                  <Settings size={16} /> Active Sessions
               </h3>
               <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-white/10 p-5 bg-black">
                     <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-white/10 text-white rounded-sm">
                           <Monitor size={16} />
                        </div>
                        <span className="text-[10px] uppercase font-bold text-green-500">Current</span>
                     </div>
                     <div className="font-bold">Web Browser</div>
                     <div className="text-xs text-zinc-500 mt-1 flex items-center gap-2">
                        Online Now
                     </div>
                  </div>
                  
                  {sessionCount > 1 && (
                    <div className="border border-white/10 p-5 bg-black opacity-50">
                       <div className="flex justify-between items-start mb-4">
                          <div className="p-2 bg-zinc-800 text-zinc-400 rounded-sm">
                             <Smartphone size={16} />
                          </div>
                          <button className="text-[10px] uppercase font-bold text-zinc-600 hover:text-red-500 transition-colors">
                             Revoke All
                          </button>
                       </div>
                       <div className="font-bold">{sessionCount - 1} Other Session(s)</div>
                       <div className="text-xs text-zinc-500 mt-1">
                          Based on active logins
                       </div>
                    </div>
                  )}
               </div>
            </section>

            {/* 3. DANGER ZONE */}
            <section className="pt-8 border-t border-white/10">
               <div className="flex flex-col md:flex-row gap-4">
                  <button className="flex-1 py-4 border border-zinc-800 text-zinc-400 text-xs font-bold uppercase tracking-widest hover:border-white hover:text-white transition-all flex items-center justify-center gap-3">
                     <Download size={14} /> Download Data
                  </button>
                  <button className="flex-1 py-4 border border-zinc-800 text-red-900 hover:text-red-500 hover:border-red-900 text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3">
                     <Trash2 size={14} /> Delete Account
                  </button>
               </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}