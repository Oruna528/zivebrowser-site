import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { VisionSection } from '@/components/vision-section'
import { DownloadSection } from '@/components/download-section'
import { SiteFooter } from '@/components/site-footer'
import { PreRegisterForm } from '@/components/PreRegisterForm'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* 1. ナビゲーションヘッダー */}
      <SiteHeader />
      
      <main className="flex-1">
        {/* 2. メインのヒーロー視覚セクション */}
        <Hero />
        
        {/* ======================================================= */}
        {/* ▼▼▼ 追加：事前登録専用のコンテクストセクション ▼▼▼ */}
        <section id="register" className="border-t bg-muted/20 py-16 md:py-24">
          <div className="container max-w-xl mx-auto px-4 text-center space-y-6">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary border border-primary/20">
              事前登録 受付中
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              まもなくリリース。
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
              Zive Browserは現在開発中です。事前登録しておくと、配信開始時にいち早くダウンロードリンクをお届けします。
            </p>
            {/* D1と通信する本番用フォームパーツ */}
            <div className="max-w-md mx-auto pt-2">
              <PreRegisterForm />
            </div>
          </div>
        </section>
        {/* ▲▲▲ 追加：事前登録専用のコンテクストセクション ▲▲▲ */}
        {/* ======================================================= */}

        {/* 3. 特徴・機能セクション */}
        <Features />
        
        {/* 4. ビジョン・思想セクション */}
        <VisionSection />
        
        {/* 5. ダウンロード案内セクション */}
        <DownloadSection />
      </main>
      
      {/* 6. サイトフッター */}
      <SiteFooter />
    </div>
  )
}
