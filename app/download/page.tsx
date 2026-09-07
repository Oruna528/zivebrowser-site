import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { DownloadSection } from '@/components/download-section'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'ダウンロード | Zive Browser',
  description: 'Zive Browserの配信状況とダウンロード情報。現在は準備中です。',
}

export default function DownloadPage() {
  return <div className="flex min-h-screen flex-col"><SiteHeader /><main className="flex-1 pt-8"><DownloadSection /></main><SiteFooter /></div>
}

 
