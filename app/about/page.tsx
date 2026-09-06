import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { VisionSection } from '@/components/vision-section'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Ziveとは | Zive Browser',
  description: '巨大テックに依存しない第一歩。Zive Browserの思想と開発方針。',
}

export default function AboutPage() {
  return <div className="flex min-h-screen flex-col"><SiteHeader /><main className="flex-1 pt-8"><VisionSection /></main><SiteFooter /></div>
}

 
