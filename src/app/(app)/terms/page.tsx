'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Shield, FileText, Scale, Mail } from 'lucide-react'

export default function TermsPage() {
  const router = useRouter()

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using AstroWatch, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this websites particular services, you shall be subject to any posted guidelines or rules applicable to such services."
    },
    {
      title: "2. User Accounts",
      content: "To access certain features of the platform, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and for all activities that occur under your account."
    },
    {
      title: "3. Intellectual Property",
      content: "The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary (including but not limited to intellectual property) rights. The copying, redistribution, use or publication by you of any such matters or any part of the Site is strictly prohibited."
    },
    {
      title: "4. User Content",
      content: "You retain all rights in, and are solely responsible for, the User Content you post to AstroWatch. However, you grant AstroWatch a non-exclusive, royalty-free, transferable, sublicensable, worldwide license to use, store, display, reproduce, modify, create derivative works, perform, and distribute your User Content on AstroWatch."
    },
    {
      title: "5. Termination",
      content: "We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability."
    },
    {
      title: "6. Limitation of Liability",
      content: "In no event shall AstroWatch, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service."
    }
  ]

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white selection:text-black relative">
      
      
      {/* Ambient Glow
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/[0.03] blur-[120px] rounded-full" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/[0.03] blur-[120px] rounded-full" />
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
            <Scale size={20} />
            <span className="text-xs font-bold uppercase tracking-widest">Legal Information</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">Terms of Service</h1>
          <p className="text-zinc-400 max-w-2xl text-lg font-light">
            Please read these terms carefully before using our service.
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
              <h2 className="text-2xl font-bold mb-4 text-zinc-200 group-hover:text-white transition-colors">
                {section.title}
              </h2>
              <p className="text-zinc-400 leading-relaxed font-light text-justify">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer / Contact */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 pt-10 border-t border-zinc-800"
        >
          <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Questions?</h3>
              <p className="text-zinc-500 text-sm">If you have any questions about these Terms, please contact us.</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-colors">
              <Mail size={16} /> Contact Support
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  )
}