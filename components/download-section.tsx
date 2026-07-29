import Link from 'next/link'
// import { Apple, Monitor } from 'lucide-react' // ← ダウンロード版で使用
import { Button } from '@/components/ui/button'

export function DownloadSection() {
  return (
    <section id="about" className="border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        {/* =====================================================================
            ▼▼▼ 事前登録フェーズ（現在有効な表示） ▼▼▼
            リリース前のため、ダウンロードボタンの代わりに事前登録へ誘導します。
        ===================================================================== */}
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          まもなくリリース。
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
          Zive Browser は現在開発中です。事前登録しておくと、配信開始時にいち早くダウンロードリンクをお届けします。
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" nativeButton={false} render={<Link href="#register" />}>
            事前登録する
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={
              <a
                href="https://github.com/Zive-Team/ZiveBrowser"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            GitHub で見る
          </Button>
        </div>
        {/* ▲▲▲ 事前登録フェーズ ▲▲▲ */}

        {/* =====================================================================
            ▼▼▼ ベータ版フェーズ（ベータ配信を始めたら有効化） ▼▼▼
            上の「事前登録フェーズ」を削除し、下記のコメントを外してください。

        <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          Beta 版 公開中
        </span>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          ベータ版を試す。
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
          開発中のベータ版をお試しいただけます。予期しない不具合が含まれる場合があります。
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            nativeButton={false}
            render={<a href="https://github.com/Zive-Team/ZiveBrowser/releases/tag/beta" />}
          >
            <Monitor className="h-4 w-4" aria-hidden="true" />
            Windows 版ベータをダウンロード
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<a href="https://github.com/Zive-Team/ZiveBrowser/releases/tag/beta" />}
          >
            <Apple className="h-4 w-4" aria-hidden="true" />
            macOS 版ベータをダウンロード
          </Button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          フィードバックは GitHub Issues までお寄せください。
        </p>

        ▲▲▲ ベータ版フェーズ ▲▲▲
        ===================================================================== */}

        {/* =====================================================================
            ▼▼▼ 本番リリースフェーズ（正式版を配信したら有効化） ▼▼▼
            上の各フェーズを削除し、下記のコメントを外してください。

        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          今すぐダウンロード。
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
          Zive Browser は無料でご利用いただけます。お使いのプラットフォームを選んでください。
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            nativeButton={false}
            render={<a href="https://github.com/Zive-Team/ZiveBrowser/releases/latest/download/ZiveBrowser-win.exe" />}
          >
            <Monitor className="h-4 w-4" aria-hidden="true" />
            Windows 版をダウンロード
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<a href="https://github.com/Zive-Team/ZiveBrowser/releases/latest/download/ZiveBrowser-mac.dmg" />}
          >
            <Apple className="h-4 w-4" aria-hidden="true" />
            macOS 版をダウンロード
          </Button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          最新版 · MIT License · すべてのリリースは GitHub からも入手できます。
        </p>

        ▲▲▲ 本番リリースフェーズ ▲▲▲
        ===================================================================== */}
      </div>
    </section>
  )
}
