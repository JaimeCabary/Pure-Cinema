// // 'use client'

// // import {
// //   Box,
// //   Container,
// //   Heading,
// //   VStack,
// //   HStack,
// //   Text,
// //   Button,
// //   Input,
// //   Badge,
// //   Separator,
// //   Stack,
// //   Field,
// // } from '@chakra-ui/react'
// // import { Avatar } from '@chakra-ui/react'
// // import { Switch } from '@chakra-ui/react'
// // import { useState, ChangeEvent } from 'react'
// // import { MotionBox } from '@/components/shared/Motion'

// // export default function AccountPage() {
// //   const [isEditing, setIsEditing] = useState(false)
// //   const [name, setName] = useState('Alex Johnson')
// //   const [email, setEmail] = useState('alex@example.com')
// //   const [notifications, setNotifications] = useState(true)
// //   const [autoPlay, setAutoPlay] = useState(true)
// //   const [quality, setQuality] = useState('1080p')

// //   const subscriptionTier = 'Premium'
// //   const memberSince = 'January 2024'
// //   const devices = ['Chrome (Mac)', 'iOS App', 'Living Room TV']

// //   return (
// //     <Container maxW="container.xl" py={8}>
// //       <MotionBox
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         className="space-y-8"
// //       >
// //         {/* Header */}
// //         <Box>
// //           <Heading size="lg" fontWeight="medium" mb={2}>
// //             Account Settings
// //           </Heading>
// //           <Text color="gray.400">Manage your profile and preferences</Text>
// //         </Box>

// //         <div className="grid lg:grid-cols-3 gap-8">
// //           {/* Left Column - Profile */}
// //           <div className="lg:col-span-2 space-y-8">
// //             {/* Profile Card */}
// //             <Box className="border border-gray-800 p-6">
// //               <HStack justify="space-between" mb={6}>
// //                 <Heading size="md" fontWeight="medium">
// //                   Profile Information
// //                 </Heading>
// //                 <Button
// //                   size="sm"
// //                   variant="outline"
// //                   borderRadius="none"
// //                   borderColor="gray.600"
// //                   onClick={() => setIsEditing(!isEditing)}
// //                 >
// //                   {isEditing ? 'Save Changes' : 'Edit Profile'}
// //                 </Button>
// //               </HStack>

// //               <Stack direction="row" gap={6} mb={6}>
// //                 <Avatar.Root size="xl">
// //                   <Avatar.Fallback>{name.split(' ').map(n => n[0]).join('')}</Avatar.Fallback>
// //                 </Avatar.Root>
// //                 <Stack gap={1} align="start">
// //                   <Text fontSize="xl" fontWeight="medium">
// //                     {name}
// //                   </Text>
// //                   <Badge colorPalette="green" borderRadius="none">
// //                     {subscriptionTier}
// //                   </Badge>
// //                   <Text color="gray.400" fontSize="sm">
// //                     Member since {memberSince}
// //                   </Text>
// //                 </Stack>
// //               </Stack>

// //               <div className="grid md:grid-cols-2 gap-6">
// //                 <Field.Root>
// //                   <Field.Label color="gray.300" fontSize="sm">
// //                     Display Name
// //                   </Field.Label>
// //                   <Input
// //                     value={name}
// //                     onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
// //                     disabled={!isEditing}
// //                     borderRadius="none"
// //                     borderColor="gray.700"
// //                     _disabled={{ opacity: 0.7, cursor: 'not-allowed' }}
// //                   />
// //                 </Field.Root>

// //                 <Field.Root>
// //                   <Field.Label color="gray.300" fontSize="sm">
// //                     Email Address
// //                   </Field.Label>
// //                   <Input
// //                     type="email"
// //                     value={email}
// //                     onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
// //                     disabled={!isEditing}
// //                     borderRadius="none"
// //                     borderColor="gray.700"
// //                   />
// //                 </Field.Root>
// //               </div>
// //             </Box>

// //             {/* Preferences */}
// //             <Box className="border border-gray-800 p-6">
// //               <Heading size="md" fontWeight="medium" mb={6}>
// //                 Playback Preferences
// //               </Heading>

// //               <Stack gap={6} align="stretch">
// //                 <HStack justify="space-between">
// //                   <Box>
// //                     <Text fontWeight="medium">Auto-play next episode</Text>
// //                     <Text color="gray.400" fontSize="sm">
// //                       Automatically play next episode in a series
// //                     </Text>
// //                   </Box>
// //                   <Switch.Root
// //                     checked={autoPlay}
// //                     onCheckedChange={(e: { checked: boolean }) => setAutoPlay(e.checked)}
// //                     colorPalette="green"
// //                   >
// //                     <Switch.Thumb />
// //                   </Switch.Root>
// //                 </HStack>

// //                 <HStack justify="space-between">
// //                   <Box>
// //                     <Text fontWeight="medium">Streaming Quality</Text>
// //                     <Text color="gray.400" fontSize="sm">
// //                       Maximum video resolution
// //                     </Text>
// //                   </Box>
// //                   <select
// //                     value={quality}
// //                     onChange={(e) => setQuality(e.target.value)}
// //                     className="bg-black border border-gray-700 px-3 py-2 text-sm"
// //                   >
// //                     <option value="720p">720p</option>
// //                     <option value="1080p">1080p</option>
// //                     <option value="4k">4K</option>
// //                   </select>
// //                 </HStack>

// //                 <HStack justify="space-between">
// //                   <Box>
// //                     <Text fontWeight="medium">Notifications</Text>
// //                     <Text color="gray.400" fontSize="sm">
// //                       Email and push notifications
// //                     </Text>
// //                   </Box>
// //                   <Switch.Root
// //                     checked={notifications}
// //                     onCheckedChange={(e: { checked: boolean }) => setNotifications(e.checked)}
// //                     colorPalette="green"
// //                   >
// //                     <Switch.Thumb />
// //                   </Switch.Root>
// //                 </HStack>
// //               </Stack>
// //             </Box>
// //           </div>

// //           {/* Right Column - Subscription & Devices */}
// //           <div className="space-y-8">
// //             {/* Subscription */}
// //             <Box className="border border-gray-800 p-6">
// //               <Heading size="md" fontWeight="medium" mb={4}>
// //                 Subscription
// //               </Heading>
// //               <Stack gap={4} align="stretch">
// //                 <Box>
// //                   <Text color="gray.400" fontSize="sm">
// //                     Current Plan
// //                   </Text>
// //                   <Text fontSize="xl">{subscriptionTier}</Text>
// //                 </Box>
// //                 <Box>
// //                   <Text color="gray.400" fontSize="sm">
// //                     Billing Cycle
// //                   </Text>
// //                   <Text>Monthly</Text>
// //                 </Box>
// //                 <Box>
// //                   <Text color="gray.400" fontSize="sm">
// //                     Next Billing Date
// //                   </Text>
// //                   <Text>January 15, 2024</Text>
// //                 </Box>
// //                 <Button
// //                   variant="outline"
// //                   borderRadius="none"
// //                   borderColor="gray.600"
// //                   size="sm"
// //                 >
// //                   Manage Subscription
// //                 </Button>
// //               </Stack>
// //             </Box>

// //             {/* Connected Devices */}
// //             <Box className="border border-gray-800 p-6">
// //               <Heading size="md" fontWeight="medium" mb={4}>
// //                 Connected Devices
// //               </Heading>
// //               <Stack gap={3} align="stretch">
// //                 {devices.map((device, index) => (
// //                   <HStack key={index} justify="space-between">
// //                     <Text fontSize="sm">{device}</Text>
// //                     <Badge colorPalette="green" fontSize="xs" borderRadius="none">
// //                       Active
// //                     </Badge>
// //                   </HStack>
// //                 ))}
// //                 <Text color="gray.400" fontSize="sm" mt={2}>
// //                   {devices.length}/5 devices used
// //                 </Text>
// //               </Stack>
// //             </Box>

// //             {/* Account Actions */}
// //             <Box className="border border-gray-800 p-6">
// //               <Heading size="md" fontWeight="medium" mb={4}>
// //                 Account Actions
// //               </Heading>
// //               <Stack gap={3} align="stretch">
// //                 <Button
// //                   variant="outline"
// //                   borderRadius="none"
// //                   borderColor="gray.600"
// //                   size="sm"
// //                 >
// //                   Download Data
// //                 </Button>
// //                 <Button
// //                   variant="outline"
// //                   borderRadius="none"
// //                   borderColor="red.600"
// //                   color="red.400"
// //                   size="sm"
// //                   _hover={{ bg: 'red.900/20' }}
// //                 >
// //                   Delete Account
// //                 </Button>
// //               </Stack>
// //             </Box>
// //           </div>
// //         </div>

// //         {/* Recent Activity */}
// //         <Box className="border border-gray-800 p-6">
// //           <Heading size="md" fontWeight="medium" mb={6}>
// //             Recent Activity
// //           </Heading>
// //           <Stack gap={4} align="stretch">
// //             <HStack justify="space-between">
// //               <Text fontSize="sm">Added "Inception" to watchlist</Text>
// //               <Text color="gray.400" fontSize="xs">
// //                 2 hours ago
// //               </Text>
// //             </HStack>
// //             <Separator borderColor="gray.800" />
// //             <HStack justify="space-between">
// //               <Text fontSize="sm">Watched "The Dark Knight"</Text>
// //               <Text color="gray.400" fontSize="xs">
// //                 Yesterday
// //               </Text>
// //             </HStack>
// //             <Separator borderColor="gray.800" />
// //             <HStack justify="space-between">
// //               <Text fontSize="sm">Updated streaming quality to 4K</Text>
// //               <Text color="gray.400" fontSize="xs">
// //                 3 days ago
// //               </Text>
// //             </HStack>
// //           </Stack>
// //         </Box>
// //       </MotionBox>
// //     </Container>
// //   )
// // }


// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { 
//   LogOut, Camera, Shield, CreditCard, 
//   Smartphone, Monitor, ChevronRight, Check, X,
//   Settings, Download, Trash2, History
// } from 'lucide-react'
// import { CinematicGrid } from '@/components/marketing/CinematicGrid' // Importing your existing component

// // --- MOCK DATA FOR GRID BACKGROUND ---
// // Just enough to populate the visual background
// const MOCK_MOVIES = Array(20).fill({
//   poster_path: '/8CdXdeqbkL1ba4K8msTTVNbX8iH.jpg' // Using a generic placeholder path logic or real TMDB paths if available
// }).map((m, i) => ({ ...m, id: i }))

// const WATCH_HISTORY = [
//   { title: "Oppenheimer", date: "Paused at 1h 24m", progress: 65 },
//   { title: "Dune: Part Two", date: "Watched yesterday", progress: 100 },
//   { title: "Civil War", date: "Watched 3 days ago", progress: 10 },
// ]

// const DEVICES = [
//   { name: "MacBook Pro M3", location: "Lagos, NG", status: "Active Now", icon: <Monitor size={16} /> },
//   { name: "iPhone 15 Pro Max", location: "Lagos, NG", status: "2h ago", icon: <Smartphone size={16} /> },
// ]

// export default function AccountPage() {
//   const [isEditing, setIsEditing] = useState(false)
//   const [profile, setProfile] = useState({
//     name: 'Alex Johnson',
//     email: 'alex.j@cinema.com',
//     handle: '@director_aj',
//     bio: 'Filmmaker and Archivist.'
//   })
  
//   const [editForm, setEditForm] = useState(profile)

//   const handleSave = () => {
//     setProfile(editForm)
//     setIsEditing(false)
//   }

//   return (
//     <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      
//       {/* --- 1. THE CINEMATIC GRID BACKGROUND --- */}
//       <div className="absolute top-0 inset-x-0 h-[60vh] overflow-hidden pointer-events-none opacity-40 mix-blend-screen z-0">
//          {/* Passing generic mock data to your component */}
//          <CinematicGrid movies={MOCK_MOVIES} />
         
//          {/* THE HARD FADE: Makes the content below readable */}
//          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black" />
//          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
//       </div>

//       {/* --- 2. MAIN CONTENT LAYER --- */}
//       <div className="relative z-10 pt-40 pb-20 px-6 max-w-6xl mx-auto">
        
//         {/* Header Row */}
//         <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
//           <div>
//             <h1 className="text-5xl font-bold tracking-tighter mb-1">Settings</h1>
//             <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest">
//               ID: 8824-ALPHA-9
//             </p>
//           </div>
//           <button className="text-zinc-500 hover:text-white flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors">
//             <LogOut size={14} /> Sign Out
//           </button>
//         </div>

//         <div className="grid lg:grid-cols-12 gap-12">
          
//           {/* --- LEFT COL: PROFILE (Width 4/12) --- */}
//           <div className="lg:col-span-4 space-y-8">
//             <div className="bg-black border border-white/10 p-1 rounded-lg">
//               <div className="relative aspect-square bg-zinc-900 overflow-hidden mb-1 group">
//                  {/* Avatar Placeholder */}
//                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-zinc-700">
//                     {profile.name[0]}
//                  </div>
//                  <button className="absolute bottom-4 right-4 bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
//                     <Camera size={16} />
//                  </button>
//               </div>
              
//               <div className="p-6">
//                  {isEditing ? (
//                     <div className="space-y-4">
//                        <div className="space-y-1">
//                           <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Display Name</label>
//                           <input 
//                             value={editForm.name}
//                             onChange={e => setEditForm({...editForm, name: e.target.value})}
//                             className="w-full bg-zinc-900 border-b border-zinc-700 text-white p-2 text-sm focus:border-white focus:outline-none rounded-none"
//                           />
//                        </div>
//                        <div className="space-y-1">
//                           <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Bio</label>
//                           <input 
//                             value={editForm.bio}
//                             onChange={e => setEditForm({...editForm, bio: e.target.value})}
//                             className="w-full bg-zinc-900 border-b border-zinc-700 text-white p-2 text-sm focus:border-white focus:outline-none rounded-none"
//                           />
//                        </div>
//                        <div className="flex gap-2 pt-2">
//                           <button onClick={handleSave} className="flex-1 bg-white text-black h-8 text-xs font-bold uppercase tracking-widest hover:bg-zinc-200">Save</button>
//                           <button onClick={() => setIsEditing(false)} className="flex-1 border border-white/20 text-white h-8 text-xs font-bold uppercase tracking-widest hover:bg-white/10">Cancel</button>
//                        </div>
//                     </div>
//                  ) : (
//                     <>
//                        <div className="flex justify-between items-start mb-4">
//                           <div>
//                              <h2 className="text-xl font-bold">{profile.name}</h2>
//                              <p className="text-zinc-500 text-xs mt-1">{profile.handle}</p>
//                           </div>
//                           <button 
//                             onClick={() => setIsEditing(true)}
//                             className="text-[10px] font-bold uppercase tracking-widest border border-zinc-800 px-3 py-1 hover:border-white transition-colors"
//                           >
//                             Edit
//                           </button>
//                        </div>
//                        <p className="text-zinc-400 text-sm leading-relaxed border-l-2 border-zinc-800 pl-4">
//                           {profile.bio}
//                        </p>
//                     </>
//                  )}
//               </div>
//             </div>

//             {/* MEMBERSHIP BADGE */}
//             <div className="border border-white/10 p-6 flex items-center justify-between bg-zinc-900/20">
//                <div>
//                   <div className="flex items-center gap-2 mb-1">
//                      <Shield size={14} className="text-white" />
//                      <span className="text-xs font-bold uppercase tracking-widest">Plan</span>
//                   </div>
//                   <div className="text-xl font-bold text-white">Founder's Club</div>
//                </div>
//                <div className="text-right">
//                   <div className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1">Status</div>
//                   <div className="text-green-500 text-xs font-bold uppercase tracking-widest flex items-center gap-1 justify-end">
//                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Active
//                   </div>
//                </div>
//             </div>
//           </div>

//           {/* --- RIGHT COL: DATA & SETTINGS (Width 8/12) --- */}
//           <div className="lg:col-span-8 space-y-12">
            
//             {/* 1. WATCH HISTORY (Technical Look) */}
//             <section>
//                <h3 className="text-lg font-medium mb-6 flex items-center gap-2 text-white/50">
//                   <History size={16} /> Recent Activity
//                </h3>
//                <div className="border-t border-white/10">
//                   {WATCH_HISTORY.map((item, i) => (
//                      <div key={i} className="group py-4 border-b border-white/10 flex items-center gap-6 hover:bg-white/5 transition-colors px-4 -mx-4">
//                         <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center text-xs font-bold text-zinc-700 border border-white/5">
//                            {i + 1}
//                         </div>
//                         <div className="flex-1">
//                            <h4 className="font-bold text-lg">{item.title}</h4>
//                            <p className="text-xs text-zinc-500 uppercase tracking-wider">{item.date}</p>
//                         </div>
//                         <div className="w-32">
//                            <div className="h-1 bg-zinc-800 w-full overflow-hidden">
//                               <div className="h-full bg-white" style={{ width: `${item.progress}%` }} />
//                            </div>
//                         </div>
//                      </div>
//                   ))}
//                </div>
//             </section>

//             {/* 2. DEVICE MANAGER */}
//             <section>
//                <h3 className="text-lg font-medium mb-6 flex items-center gap-2 text-white/50">
//                   <Settings size={16} /> Authorized Devices
//                </h3>
//                <div className="grid md:grid-cols-2 gap-4">
//                   {DEVICES.map((device, i) => (
//                      <div key={i} className="border border-white/10 p-5 hover:border-white/30 transition-colors bg-black">
//                         <div className="flex justify-between items-start mb-4">
//                            <div className="p-2 bg-white/10 text-white rounded-sm">
//                               {device.icon}
//                            </div>
//                            <button className="text-[10px] uppercase font-bold text-zinc-600 hover:text-red-500 transition-colors">
//                               Revoke
//                            </button>
//                         </div>
//                         <div className="font-bold">{device.name}</div>
//                         <div className="text-xs text-zinc-500 mt-1 flex items-center gap-2">
//                            {device.location} <span className="w-1 h-1 bg-zinc-700 rounded-full" /> {device.status}
//                         </div>
//                      </div>
//                   ))}
//                </div>
//             </section>

//             {/* 3. DANGER ZONE (Minimalist) */}
//             <section className="pt-8 border-t border-white/10">
//                <div className="flex flex-col md:flex-row gap-4">
//                   <button className="flex-1 py-4 border border-zinc-800 text-zinc-400 text-xs font-bold uppercase tracking-widest hover:border-white hover:text-white transition-all flex items-center justify-center gap-3">
//                      <Download size={14} /> Download Personal Data
//                   </button>
//                   <button className="flex-1 py-4 border border-zinc-800 text-red-900 hover:text-red-500 hover:border-red-900 text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3">
//                      <Trash2 size={14} /> Delete Account
//                   </button>
//                </div>
//             </section>

//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { redirect } from 'next/navigation'
import { AccountView } from './AccountView'


export const metadata = {
  title: 'Account Settings',
}

export default async function AccountPage() {
  const session = await auth()
  
  if (!session?.user) {
    redirect('/auth/login')
  }

  // Fetch real user data from your schema
  const user = await db.user.findUnique({
    where: { id: session.user.id },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true, 
    }
  })

  // Fetch real watch history
  const watchHistory = await db.watchHistory.findMany({
    where: { userId: session.user.id },
    orderBy: { lastWatched: 'desc' },
    take: 5,
    select: {
      movieId: true,
      movieTitle: true,
      posterPath: true,
      progress: true,
      lastWatched: true,
    }
  })

  // Fetch session count for "Devices" logic
  const sessionCount = await db.session.count({
    where: { userId: session.user.id }
  })

  if (!user) return null

  return (
    <AccountView 
      user={user} 
      watchHistory={watchHistory} 
      sessionCount={sessionCount} 
    />
  )
}