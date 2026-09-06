import type { Metadata } from 'next'
import { ArrowUpRight, BookOpen, Rss } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: '開発記録 | Zive Browser',
  description: 'Zive Browserの開発進捗や設計思想をnoteで発信しています。',
}

export default function NotesPage() {
  return <div className="flex min-h-screen flex-col"><SiteHeader /><main className="flex-1"><section className="border-b border-border/60 px-4 py-24 sm:px-6 sm:py-32"><div className="mx-auto max-w-4xl"><span className="text-sm font-medium text-primary">開発記録</span><h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">つくっている途中も、<br />オープンに届ける。</h1><p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">再設計の背景、技術選定、開発の進捗をnoteで発信しています。Zive Browserが生まれるまでの過程も、ぜひ一緒に見届けてください。</p></div></section><section className="px-4 py-20 sm:px-6 sm:py-28"><div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2"><article className="rounded-2xl border border-border/70 bg-card p-8"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><BookOpen className="h-5 w-5" aria-hidden="true" /></div><h2 className="mt-6 text-2xl font-medium">Zive Browserの進捗報告</h2><p className="mt-3 leading-relaxed text-muted-foreground">巨大テックに依存しない第一歩として、カスタムブラウザを再設計しています。詳しい背景と現在地をnoteで公開中です。</p><Button className="mt-8" nativeButton={false} render={<a href="https://note.com/zive/n/n49264b507c61" target="_blank" rel="noopener noreferrer" />}>記事を読む <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Button></article><article className="rounded-2xl border border-border/70 bg-card p-8"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><Rss className="h-5 w-5" aria-hidden="true" /></div><h2 className="mt-6 text-2xl font-medium">すべての記事を見る</h2><p className="mt-3 leading-relaxed text-muted-foreground">開発の最新情報やZiveの考え方は、noteのプロフィールからまとめてご覧いただけます。</p><Button className="mt-8" variant="outline" nativeButton={false} render={<a href="https://note.com/zive" target="_blank" rel="noopener noreferrer" />}>noteを開く <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Button></article></div></section></main><SiteFooter /></div>
}

 
