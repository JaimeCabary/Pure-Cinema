import Link from 'next/link'
import { ArrowLeft, Layers, Cpu, Database, Play, Lock, Network, Share2, Server, Zap, Shield, HardDrive, BarChart3, Activity } from 'lucide-react'

export default function ArchitectureDiagramsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-24 px-4 sm:px-6 md:px-10 font-sans selection:bg-red-600 selection:text-white">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="space-y-4 border-b border-white/10 pb-8">
          <Link href="/home" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition">
            <ArrowLeft size={14} /> Back to Pure Cinema
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-red-600/20 text-red-500 border border-red-500/30 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
              <Zap size={12} /> High Concurrency System Specification (500 - 1,000 QPS)
            </span>
            <span className="text-zinc-500 text-xs font-mono">Group 3 Technical Architecture</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Pure Cinema System Engineering Blueprint
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-3xl leading-relaxed font-light">
            Comprehensive system requirements, capacity estimations, database and ORM schemas, horizontal autoscaling pipelines, low-latency streaming topologies, and class architectures.
          </p>
        </div>

        {/* 1. Requirements & Scope */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-red-600/20 text-red-400 font-bold flex items-center justify-center text-sm border border-red-500/30">01</span>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">System Requirements & Performance Goals</h2>
            </div>
            <span className="text-xs text-emerald-400 font-mono">Specs</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Shield size={16} className="text-red-500" /> Functional Requirements
              </h3>
              <ul className="text-xs text-zinc-300 space-y-2 list-disc list-inside">
                <li><strong>4K VOD & Video Player:</strong> Adaptive bitrate streaming with Netflix-style HUD.</li>
                <li><strong>Live IPTV Ingestion:</strong> Satellite stream feed integration with channel switcher.</li>
                <li><strong>Passwordless Shalom Admin:</strong> Zero-friction instant auth bypass for project head.</li>
                <li><strong>Watchlist & History:</strong> Sub-second sync across user devices.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Zap size={16} className="text-yellow-400" /> Non-Functional Requirements
              </h3>
              <ul className="text-xs text-zinc-300 space-y-2 list-disc list-inside">
                <li><strong>High Throughput:</strong> Sustained 500 to 1,000+ QPS without latency spikes.</li>
                <li><strong>Ultra-Low Latency:</strong> Time-to-First-Byte (TTFB) &lt; 150ms via Edge CDN.</li>
                <li><strong>High Availability:</strong> 99.99% uptime with multi-region failover.</li>
                <li><strong>Horizontal Scalability:</strong> Auto-scaling stateless compute nodes.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 2. Storage Estimation & Capacity Planning */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 font-bold flex items-center justify-center text-sm border border-blue-500/30">02</span>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">Storage Estimation & Capacity Planning</h2>
            </div>
            <span className="text-xs text-blue-400 font-mono">1,000 QPS Scaling</span>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-[11px] text-zinc-500 uppercase font-bold">Peak QPS</p>
                <h4 className="text-2xl font-extrabold text-white mt-1">1,000</h4>
                <p className="text-[10px] text-zinc-400 mt-0.5">Req / Second</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-[11px] text-zinc-500 uppercase font-bold">Daily Requests</p>
                <h4 className="text-2xl font-extrabold text-white mt-1">34.5M</h4>
                <p className="text-[10px] text-zinc-400 mt-0.5">Requests / Day</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-[11px] text-zinc-500 uppercase font-bold">Cache Hit Rate</p>
                <h4 className="text-2xl font-extrabold text-emerald-400 mt-1">94%</h4>
                <p className="text-[10px] text-zinc-400 mt-0.5">Edge CDN Absorbed</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-[11px] text-zinc-500 uppercase font-bold">5-Year DB Storage</p>
                <h4 className="text-2xl font-extrabold text-white mt-1">~613 GB</h4>
                <p className="text-[10px] text-zinc-400 mt-0.5">PostgreSQL Supabase</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-zinc-400">
                    <th className="py-2.5 px-3">Data Component</th>
                    <th className="py-2.5 px-3">Daily Growth</th>
                    <th className="py-2.5 px-3">1-Year Storage</th>
                    <th className="py-2.5 px-3">Caching Strategy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-zinc-300 font-mono">
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-white">User Profiles & Accounts</td>
                    <td className="py-2.5 px-3">~5 MB / day</td>
                    <td className="py-2.5 px-3">~1.8 GB</td>
                    <td className="py-2.5 px-3 text-yellow-400">Redis JWT Token Cache (TTL: 30d)</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-white">Watch History & Progress</td>
                    <td className="py-2.5 px-3">~187.5 MB / day</td>
                    <td className="py-2.5 px-3">~68.4 GB</td>
                    <td className="py-2.5 px-3 text-yellow-400">Write-back buffer + Debounce 5s</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-white">Watchlists & Downloads</td>
                    <td className="py-2.5 px-3">~45 MB / day</td>
                    <td className="py-2.5 px-3">~16.4 GB</td>
                    <td className="py-2.5 px-3 text-yellow-400">Composite Indexed B-Tree</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-white">Live M3U & 4K Metadata</td>
                    <td className="py-2.5 px-3">Daily Refresh</td>
                    <td className="py-2.5 px-3">~36.5 GB</td>
                    <td className="py-2.5 px-3 text-yellow-400">Edge S-MaxAge Cache (TTL: 1h)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 3. High-Level Scaled Architecture */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-600/20 text-purple-400 font-bold flex items-center justify-center text-sm border border-purple-500/30">03</span>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">Scaled Multi-Tier Architecture Blueprint</h2>
            </div>
            <span className="text-xs text-purple-400 font-mono">Horizontal Scaling</span>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 space-y-4 font-mono text-xs">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30">
                <p className="text-[10px] text-purple-400 uppercase font-bold">Layer 1: Global Edge</p>
                <h4 className="font-bold text-white mt-1">Cloudflare / Vercel Edge</h4>
                <p className="text-zinc-400 text-[11px] mt-1">Anycast DNS, WAF, Edge Caching for 94% offload</p>
              </div>
              <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/30">
                <p className="text-[10px] text-blue-400 uppercase font-bold">Layer 2: Compute Pool</p>
                <h4 className="font-bold text-white mt-1">Next.js Autoscaling Cluster</h4>
                <p className="text-zinc-400 text-[11px] mt-1">Elastic Node Pool (1..N instances) behind ALB</p>
              </div>
              <div className="p-4 rounded-xl bg-yellow-950/20 border border-yellow-500/30">
                <p className="text-[10px] text-yellow-400 uppercase font-bold">Layer 3: Cache Grid</p>
                <h4 className="font-bold text-white mt-1">Redis Cluster 7.x</h4>
                <p className="text-zinc-400 text-[11px] mt-1">Sub-millisecond token store & M3U channels map</p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
                <p className="text-[10px] text-emerald-400 uppercase font-bold">Layer 4: Data Cluster</p>
                <h4 className="font-bold text-white mt-1">PostgreSQL & PgBouncer</h4>
                <p className="text-zinc-400 text-[11px] mt-1">Primary write node + 2x read replicas</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. DB Schema & ORM Model Breakdown */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 font-bold flex items-center justify-center text-sm border border-emerald-500/30">04</span>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">Database & ORM Schema Breakdown (Prisma 7)</h2>
            </div>
            <span className="text-xs text-emerald-400 font-mono">PostgreSQL Indexing</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-5 rounded-xl bg-zinc-950 border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white">User Model</h4>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Indexed</span>
              </div>
              <p className="text-zinc-400 text-[11px]">Primary authentication and authorization state.</p>
              <ul className="text-zinc-500 text-[11px] space-y-1 pt-1">
                <li>• <strong className="text-zinc-300">id:</strong> String (CUID PK)</li>
                <li>• <strong className="text-zinc-300">email:</strong> String (Unique B-Tree)</li>
                <li>• <strong className="text-zinc-300">role:</strong> 'ADMIN' | 'USER'</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-zinc-950 border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white">WatchHistory Model</h4>
                <span className="text-[10px] text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded">Composite Index</span>
              </div>
              <p className="text-zinc-400 text-[11px]">Real-time video progress tracking across devices.</p>
              <ul className="text-zinc-500 text-[11px] space-y-1 pt-1">
                <li>• <strong className="text-zinc-300">userId, movieId:</strong> Unique pair</li>
                <li>• <strong className="text-zinc-300">progress:</strong> Float (seconds)</li>
                <li>• <strong className="text-zinc-300">Index:</strong> (userId, lastWatched DESC)</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-zinc-950 border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white">Watchlist Model</h4>
                <span className="text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">High Concurrency</span>
              </div>
              <p className="text-zinc-400 text-[11px]">User curated personal cinema collections.</p>
              <ul className="text-zinc-500 text-[11px] space-y-1 pt-1">
                <li>• <strong className="text-zinc-300">userId, movieId:</strong> Unique</li>
                <li>• <strong className="text-zinc-300">addedAt:</strong> DateTime (Sorted)</li>
                <li>• <strong className="text-zinc-300">Index:</strong> (userId, addedAt DESC)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Team Section */}
        <section className="space-y-6 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-red-600/20 text-red-400 font-bold flex items-center justify-center text-sm border border-red-500/30">05</span>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">Engineering Leadership (Group 3)</h2>
            </div>
            <span className="text-xs text-red-400 font-mono">Pure Cinema Core</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30">
              <p className="text-[10px] font-bold text-red-400 uppercase">Head / Project Lead</p>
              <h4 className="font-bold text-white text-sm mt-1">Shalom Ebere Chidi-Azuwike</h4>
              <p className="text-xs text-zinc-400">PM & Frontend Lead</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-[10px] font-bold text-zinc-500 uppercase">Core Engineering</p>
              <h4 className="font-bold text-white text-sm mt-1">Ikenna</h4>
              <p className="text-xs text-zinc-400">Systems & Infrastructure</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-[10px] font-bold text-zinc-500 uppercase">Core Engineering</p>
              <h4 className="font-bold text-white text-sm mt-1">Joshua</h4>
              <p className="text-xs text-zinc-400">Cloud Pipeline & DB</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-[10px] font-bold text-zinc-500 uppercase">Core Engineering</p>
              <h4 className="font-bold text-white text-sm mt-1">Izuchukwu</h4>
              <p className="text-xs text-zinc-400">Network Edge Performance</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-[10px] font-bold text-zinc-500 uppercase">Core Engineering</p>
              <h4 className="font-bold text-white text-sm mt-1">Golden</h4>
              <p className="text-xs text-zinc-400">Interactive UI & Motion</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-[10px] font-bold text-zinc-500 uppercase">Core Engineering</p>
              <h4 className="font-bold text-white text-sm mt-1">Emmanuel</h4>
              <p className="text-xs text-zinc-400">Video Decoding & HLS</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-[10px] font-bold text-zinc-500 uppercase">Core Engineering</p>
              <h4 className="font-bold text-white text-sm mt-1">Kenneth (31 Savage)</h4>
              <p className="text-xs text-zinc-400">Auth & Platform Security</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-[10px] font-bold text-zinc-500 uppercase">Core Engineering</p>
              <h4 className="font-bold text-white text-sm mt-1">Onyedikachukwu</h4>
              <p className="text-xs text-zinc-400">QA & Diagnostics</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
