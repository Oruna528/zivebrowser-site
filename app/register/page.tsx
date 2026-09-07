import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { PreRegisterForm } from '@/components/pre-register-form'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: '事前登録 | Zive Browser',
  description: 'Zive Browserのリリース通知を受け取るための事前登録。',
}

export default function RegisterPage() {
  return <div className="flex min-h-screen flex-col"><SiteHeader /><main className="flex flex-1 items-center px-4 py-20 sm:px-6"><div className="mx-auto w-full max-w-xl rounded-3xl border border-border/70 bg-card p-8 text-center sm:p-12"><span className="text-sm font-medium text-primary">事前登録受付中</span><h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight">リリースのお知らせを<br />いち早く受け取る。</h1><p className="mt-5 leading-relaxed text-muted-foreground">メールアドレスを登録すると、ベータ版や正式版の配信開始をお知らせします。</p><div className="mt-8 text-left"><PreRegisterForm /></div></div></main><SiteFooter /></div>
}

 
