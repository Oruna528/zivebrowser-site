import { ZiveLogo } from '@/components/zive-logo'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2">
          <ZiveLogo className="h-6 w-6 text-primary" />
          <span className="text-sm font-medium">Zive Browser</span>
        </div>

        <nav className="flex items-center gap-6" aria-label="フッターナビゲーション">
          <a
            href="https://note.com/zive"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            note
          </a>
          <a
            href="https://github.com/Zive-Team/ZiveBrowser"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://github.com/Zive-Team/ZiveBrowser/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            MIT License
          </a>
        </nav>

        <p className="text-xs text-muted-foreground">
          {`© ${new Date().getFullYear()} Zive Team`}
        </p>
      </div>
    </footer>
  )
}
