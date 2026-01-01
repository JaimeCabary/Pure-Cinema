'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Lock, Eye, Mail, Database } from 'lucide-react'

export default function PrivacyPage() {
  const router = useRouter()

  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect several different types of information for various purposes to provide and improve our Service to you. This includes Personal Data (such as your email address, name, and profile information) and Usage Data (information on how the Service is accessed and used, including your device's Internet Protocol address, browser type, and version)."
    },
    {
      title: "2. Use of Data",
      content: "AstroWatch uses the collected data for various purposes: to provide and maintain the Service, to notify you about changes to our Service, to allow you to participate in interactive features when you choose to do so, to provide customer care and support, and to monitor the usage of the Service."
    },
    {
      title: "3. Tracking & Cookies",
      content: "We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service."
    },
    {
      title: "4. Data Security",
      content: "The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security."
    },
    {
      title: "5. Service Providers",
      content: "We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose."
    },
    {
      title: "6. Children's Privacy",
      content: "Our Service does not address anyone under the age of 18 ('Children'). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us."
    }
  ]

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white selection:text-black relative">
      
      
      {/* Ambient Glow
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/[0.03] blur-[120px] rounded-full" />
         <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/[0.03] blur-[120px] rounded-full" />
      </div> */}

      <div className="relative z-10 pt-32 pb-20 px-6 max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b border-zinc-800 pb-8"
        >
          <div className="flex items-center gap-3 mb-4 text-zinc-500">
            <Shield size={20} />
            <span className="text-xs font-bold uppercase tracking-widest">Data Protection</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">Privacy Policy</h1>
          <p className="text-zinc-400 max-w-2xl text-lg font-light">
            Your privacy is critically important to us.
            <br />
            <span className="text-sm text-zinc-600 mt-2 block">Last updated: January 1, 2026</span>
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid gap-12">
          {sections.map((section, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <h2 className="text-2xl font-bold mb-4 text-zinc-200 group-hover:text-white transition-colors flex items-center gap-3">
                {section.title}
              </h2>
              <p className="text-zinc-400 leading-relaxed font-light text-justify">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer / Data Request */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 pt-10 border-t border-zinc-800"
        >
          <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><Lock size={18}/> Data Rights</h3>
              <p className="text-zinc-500 text-sm">You have the right to request a copy of your data or request deletion.</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-colors">
              <Database size={16} /> Request Data
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  )
}