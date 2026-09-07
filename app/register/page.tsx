import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: '事前登録 | Zive Browser',
  description: 'Zive Browserの事前登録受付開始に向けた準備状況。',
}

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex flex-1 items-center px-4 py-20 sm:px-6">
        <section className="mx-auto w-full max-w-xl rounded-3xl border border-border/70 bg-card p-8 text-center sm:p-12" aria-labelledby="preparation-title">
          <span className="text-sm font-medium text-primary">準備中</span>
          <h1 id="preparation-title" className="mt-4 text-balance text-4xl font-semibold tracking-tight">
            事前登録は準備中です。
          </h1>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            受付開始まで、もうしばらくお待ちください。準備が整い次第、このページでお知らせします。
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

 
