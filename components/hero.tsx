import Image from 'next/image'
import { PreRegisterForm } from '@/components/pre-register-form'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* 背景のさりげないグリッド */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pt-28">
        <div className="mx-auto max-w-2xl text-center">
          <span
            id="register"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            事前登録 受付中
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            必要なものだけ。
            <br />
            <span className="text-primary">速い</span>ブラウザ。
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            世界レベルのオープンソースをベースにした、巨大テックに依存しないカスタムブラウザ。
            不要な機能を極限まで削ぎ落とし、コンテンツをありのまま、高速に表示します。
          </p>

          <div className="mx-auto mt-8 max-w-md">
            <PreRegisterForm />
            <p className="mt-3 text-xs text-muted-foreground">
              リリース時にいち早くお知らせします。いつでも解除できます。
            </p>
          </div>
        </div>

        {/* プロダクトのモックアップ */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative rounded-xl border border-border/70 bg-card p-2 shadow-2xl shadow-primary/5">
            <Image
              src="/zive-browser-dark.png"
              alt="Zive Browser のダークモードのインターフェース。タブ、アドレスバー、カスタム新規タブページを表示。"
              width={1600}
              height={1000}
              priority
              className="hidden rounded-lg dark:block"
            />
            <Image
              src="/zive-browser-light.png"
              alt="Zive Browser のライトモードのインターフェース。タブ、アドレスバー、カスタム新規タブページを表示。"
              width={1600}
              height={1000}
              priority
              className="block rounded-lg dark:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
