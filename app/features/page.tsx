import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { Features } from '@/components/features'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: '特徴 | Zive Browser',
  description: 'Zive Browserの特徴。軽量で高速、オープンソースをベースにしたカスタムブラウザ。',
}

export default function FeaturesPage() {
  return <div className="flex min-h-screen flex-col"><SiteHeader /><main className="flex-1 pt-8"><Features /></main><SiteFooter /></div>
}

 
