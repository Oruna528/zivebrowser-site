import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ZiveLogo } from '@/components/zive-logo'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Zive Browser ホーム">
          <ZiveLogo className="h-7 w-7 text-primary" />
          <span className="text-lg font-semibold tracking-tight">Zive Browser</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="メインナビゲーション">
          <Link
            href="#features"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            特徴
          </Link>
          <Link
            href="#about"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Ziveとは
          </Link>
          <a
            href="https://github.com/Zive-Team/ZiveBrowser"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </nav>

        <Button size="sm" nativeButton={false} render={<Link href="#register" />}>
          事前登録
        </Button>
      </div>
    </header>
  )
}
