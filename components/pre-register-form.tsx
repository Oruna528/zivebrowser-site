'use client'

import { useState, type FormEvent } from 'react'
import { Check, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function PreRegisterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email) return
    setStatus('loading')

    // =========================================================================
    // ▼▼▼ 事前登録（現在有効なコード） ▼▼▼
    // 今はバックエンドを繋いでいないため、フロント側でダミー送信しています。
    // 実際にメールを保存する場合は、下記の本番用コードに差し替えてください。
    try {
      await new Promise((resolve) => setTimeout(resolve, 900))
      setStatus('done')
      setEmail('')
    } catch {
      setStatus('error')
    }
    // ▲▲▲ 事前登録（現在有効なコード） ▲▲▲
    // =========================================================================

    /*
    // =========================================================================
    // ▼▼▼ 本番用コード（リリース後に有効化） ▼▼▼
    // DB（Neon / Supabase など）に接続した API ルートへメールを送信します。
    // /app/api/register/route.ts 側で保存処理を実装してください。
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error('登録に失敗しました')
      setStatus('done')
      setEmail('')
    } catch {
      setStatus('error')
    }
    // ▲▲▲ 本番用コード ▲▲▲
    // =========================================================================
    */
  }

  if (status === 'done') {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-primary/40 bg-primary/10 px-4 py-4 text-sm">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
        <p className="text-pretty">
          ご登録ありがとうございます。リリース時にメールでお知らせします。
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor="email" className="sr-only">
        メールアドレス
      </label>
      <input
        id="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="h-11 flex-1 rounded-lg border border-input bg-card px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
      />
      <Button type="submit" size="lg" disabled={status === 'loading'} className="h-11">
        {status === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            送信中…
          </>
        ) : (
          '事前登録する'
        )}
      </Button>
      {status === 'error' && (
        <p className="text-sm text-destructive sm:sr-only" role="alert">
          送信に失敗しました。時間をおいて再度お試しください。
        </p>
      )}
    </form>
  )
}
