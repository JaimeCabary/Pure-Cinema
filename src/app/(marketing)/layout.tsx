import { Footer } from '@/components/marketing/Footer'
import { MarketingNav } from '@/components/marketing/Nav'
import { MotionDiv } from '@/components/shared/Motion'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-black">
      <MarketingNav />
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        {children}
      </MotionDiv>
      <Footer />
    </div>
  )
}