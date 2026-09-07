import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: '公開準備中 | Zive Browser',
  description: 'Zive Browserは現在開発中です。完成次第、公開します。',
}

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex flex-1 items-center px-4 py-20 sm:px-6">
        <section className="mx-auto w-full max-w-xl rounded-3xl border border-border/70 bg-card p-8 text-center sm:p-12" aria-labelledby="preparation-title">
          <span className="text-sm font-medium text-primary">準備中</span>
          <h1 id="preparation-title" className="mt-4 text-balance text-4xl font-semibold tracking-tight">
            公開準備中です。
          </h1>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Zive Browserは現在開発中です。完成次第、このサイトで公開します。
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

 
