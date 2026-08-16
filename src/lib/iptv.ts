export interface LiveChannel {
  id: string
  name: string
  logo: string
  group: string
  streamUrl: string
  country?: string
  language?: string
  currentProgram?: string
  badge?: string
}

export const LIVE_CATEGORIES = [
  'All Channels',
  'Movies & Cinema',
  'News & Tech',
  'Sports & Action',
  'Documentary & World',
  'Entertainment',
  'Music & Vibes',
]

// Comprehensive Curated High-Reliability IPTV Stream Catalog
export const DEFAULT_CHANNELS: LiveChannel[] = [
  // ── Movies & Cinema ──
  {
    id: 'pure-cinema-4k',
    name: 'Pure Cinema TV 4K',
    logo: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=100&h=100&fit=crop&q=80',
    group: 'Movies & Cinema',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    currentProgram: 'Cinema Showcase 4K: Interstellar Horizons',
    badge: '4K LIVE',
  },
  {
    id: '00s-replay',
    name: '00s Replay Cinema',
    logo: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=100&h=100&fit=crop&q=80',
    group: 'Movies & Cinema',
    streamUrl: 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
    currentProgram: '2000s Iconic Hollywood Blockbusters',
    badge: 'HD',
  },
  {
    id: 'filmrise-movies',
    name: 'FilmRise Free Movies',
    logo: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=100&h=100&fit=crop&q=80',
    group: 'Movies & Cinema',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    currentProgram: 'Action & Thriller Double Feature',
    badge: 'MOVIE',
  },
  {
    id: 'scifi-central',
    name: 'Sci-Fi Central TV',
    logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop&q=80',
    group: 'Movies & Cinema',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    currentProgram: 'Cyberpunk Odyssey: Beyond The Grid',
    badge: 'SCI-FI',
  },

  // ── News & Tech ──
  {
    id: 'bloomberg-tv',
    name: 'Bloomberg TV News',
    logo: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=100&h=100&fit=crop&q=80',
    group: 'News & Tech',
    streamUrl: 'https://live-bloomberg-us.akamaized.net/hls/live/2042784/bloomberg_us/master.m3u8',
    currentProgram: 'Global Markets & Technology Live',
    badge: 'LIVE NEWS',
  },
  {
    id: 'france-24',
    name: 'France 24 English',
    logo: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=100&h=100&fit=crop&q=80',
    group: 'News & Tech',
    streamUrl: 'https://f24hls-i.akamaihd.net/hls/live/221193/F24_EN_LO_HLS/master_500.m3u8',
    currentProgram: 'International Prime Broadcast',
    badge: 'LIVE',
  },
  {
    id: 'aljazeera-en',
    name: 'Al Jazeera English',
    logo: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=100&h=100&fit=crop&q=80',
    group: 'News & Tech',
    streamUrl: 'https://live-hls-web-aje.getaj.net/AJE/03.m3u8',
    currentProgram: 'Inside Story & World Affairs',
    badge: 'HD',
  },
  {
    id: 'dw-english',
    name: 'DW English Live',
    logo: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=100&h=100&fit=crop&q=80',
    group: 'News & Tech',
    streamUrl: 'https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8',
    currentProgram: 'Global 3000 & Future Tech',
    badge: 'HD',
  },
  {
    id: 'nhk-world',
    name: 'NHK World Japan',
    logo: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=100&h=100&fit=crop&q=80',
    group: 'News & Tech',
    streamUrl: 'https://nhkworld.webcdn.stream.ne.jp/www11/nhkworld-tv/global/2003458/live.m3u8',
    currentProgram: 'Newsline Asia 24/7',
    badge: 'GLOBAL',
  },
  {
    id: 'euronews-en',
    name: 'Euronews HD',
    logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop&q=80',
    group: 'News & Tech',
    streamUrl: 'https://euronews-euronews-world-1-us.plex.wurl.tv/playlist.m3u8',
    currentProgram: 'Europe In Motion: Today',
    badge: 'HD',
  },

  // ── Sports & Action ──
  {
    id: 'redbull-tv',
    name: 'Red Bull TV HD',
    logo: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?w=100&h=100&fit=crop&q=80',
    group: 'Sports & Action',
    streamUrl: 'https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8',
    currentProgram: 'Uncharted Worlds: Global Extreme Series',
    badge: 'FEATURED',
  },
  {
    id: 'world-poker',
    name: 'World Poker Tour TV',
    logo: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=100&h=100&fit=crop&q=80',
    group: 'Sports & Action',
    streamUrl: 'https://wpt-live.akamaized.net/hls/live/1014869/wpt/master.m3u8',
    currentProgram: 'WPT Championship High Rollers Live',
    badge: 'LIVE',
  },
  {
    id: 'outdoor-channel',
    name: 'Outdoor Sports & Action',
    logo: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=100&h=100&fit=crop&q=80',
    group: 'Sports & Action',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    currentProgram: 'Mountain Expeditions & Wild Waters',
    badge: 'SPORTS',
  },

  // ── Documentary & World ──
  {
    id: 'nasa-tv',
    name: 'NASA TV Space Cast',
    logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop&q=80',
    group: 'Documentary & World',
    streamUrl: 'https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-HLS/master.m3u8',
    currentProgram: 'Deep Space Observations: Artemis & Webb',
    badge: 'SPACE LIVE',
  },
  {
    id: 'wildearth-live',
    name: 'WildEarth Live Safari',
    logo: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=100&h=100&fit=crop&q=80',
    group: 'Documentary & World',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    currentProgram: 'Serengeti Dusk: Live Wildlife Patrol',
    badge: 'SAFARI',
  },
  {
    id: 'docu-plus',
    name: 'Documentary+ Global',
    logo: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=100&h=100&fit=crop&q=80',
    group: 'Documentary & World',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    currentProgram: 'Untold Chronicles of Human Innovation',
    badge: 'DOCU',
  },

  // ── Entertainment ──
  {
    id: '1plus1-intl',
    name: '1+1 International HD',
    logo: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=100&h=100&fit=crop&q=80',
    group: 'Entertainment',
    streamUrl: 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
    currentProgram: 'Global Entertainment Tonight',
    badge: '1080p',
  },
  {
    id: 'fashion-tv',
    name: 'Fashion TV Paris 4K',
    logo: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=100&h=100&fit=crop&q=80',
    group: 'Entertainment',
    streamUrl: 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
    currentProgram: 'Haute Couture Runway Week',
    badge: '4K',
  },
  {
    id: 'tastemade-tv',
    name: 'Tastemade Food & Travel',
    logo: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=100&h=100&fit=crop&q=80',
    group: 'Entertainment',
    streamUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
    currentProgram: 'Street Food Masters: Asia & Europe',
    badge: 'HD',
  },

  // ── Music & Vibes ──
  {
    id: 'lofi-tv',
    name: 'Pure Cinema Chillout Lounge',
    logo: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=100&h=100&fit=crop&q=80',
    group: 'Music & Vibes',
    streamUrl: 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
    currentProgram: 'Midnight Noir & Ambient Visuals',
    badge: '24/7 MUSIC',
  },
  {
    id: 'retro-synth-wave',
    name: 'Synthwave & Cyber Radio',
    logo: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=100&h=100&fit=crop&q=80',
    group: 'Music & Vibes',
    streamUrl: 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
    currentProgram: '80s Retrowave Neon Dreams',
    badge: 'VIBES',
  },
]

let memoryCachedChannels: LiveChannel[] = DEFAULT_CHANNELS

export async function fetchM3UPlaylist(): Promise<LiveChannel[]> {
  return memoryCachedChannels
}
