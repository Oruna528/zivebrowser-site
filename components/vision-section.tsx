import { Globe, GitBranch, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

const pillars = [
  {
    icon: Globe,
    title: '巨大テックに依存しない',
    description:
      '特定の企業やプラットフォームに縛られず、ユーザー自身が主導権を握れるWeB体験を目指します。',
  },
  {
    icon: GitBranch,
    title: '世界レベルのOSSをベースに',
    description:
      'Chromium / Electron という世界最高水準のオープンソースを土台に、独自の思想で磨き上げます。',
  },
  {
    icon: Users,
    title: 'ユーザーと一緒につくる',
    description:
      '開発の進捗はnoteやGitHubで公開。フィードバックを取り入れながら、オープンに開発を進めます。',
  },
]

export function VisionSection() {
  return (
    <section id="about" className="border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium text-primary">Ziveとは</span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            巨大テックに依存しない、第一歩。
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Zive Browser は、単なる高速ブラウザではありません。世界レベルのオープンソースを土台に、
            誰かに委ねるのではなく自分たちの手でWeBの未来をつくる——その最初の一歩です。
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-border/70 bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <pillar.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-medium">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* note 発信への導線 */}
        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border/70 bg-card p-8 text-center">
          <h3 className="text-xl font-medium">開発の進捗を note で発信中</h3>
          <p className="mx-auto mt-3 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground">
            Zive Browser の再設計や開発の裏側、構想の背景を note で公開しています。
            最新の進捗レポートはこちらからご覧ください。
          </p>
          <div className="mt-6 flex justify-center">
            <Button
              variant="outline"
              nativeButton={false}
              render={
                <a
                  href="https://note.com/zive"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              note で記事を読む
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
