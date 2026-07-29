import { Gauge, Home, ShieldCheck, Box } from 'lucide-react'

const features = [
  {
    icon: Gauge,
    title: '広告ブロックなしで高速表示',
    description:
      '通信フィルターを排除し、コンテンツをそのまま、ありのままに高速表示。余計な処理を挟まないから軽快です。',
  },
  {
    icon: Home,
    title: '自作ホームページ',
    description:
      '起動時や新規タブを開いたときに、内蔵の独自ホームページを表示。ライト / ダークモードの両方に対応しています。',
  },
  {
    icon: ShieldCheck,
    title: '最新のChromiumベース',
    description:
      'Electron のアップデートにより、最新の Web セキュリティと規格に追従。安心して最新のサイトを閲覧できます。',
  },
  {
    icon: Box,
    title: '独自ブランドの軽量設計',
    description:
      'コード内のすべての表記を刷新した、完全スタンドアロンなブラウザ。不要な機能を削ぎ落として軽量化しました。',
  },
]

export function Features() {
  return (
    <section id="features" className="border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            ミニマルだから、速い。
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Zive Browser は「使うものだけ」を丁寧に磨き込んだブラウザです。
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border/70 bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <feature.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-medium">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
