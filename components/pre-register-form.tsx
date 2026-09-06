'use client'

import { useState, type FormEvent } from 'react'
import { Check, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function PreRegisterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrorMessage('')

    const form = event.currentTarget
    if (!form.reportValidity()) return

    setStatus('loading')

    // Cloudflare Pages Functions + D1 に接続する際は、このダミー処理をAPI送信に置き換えます。
    try {
      await new Promise((resolve) => setTimeout(resolve, 900))
      setStatus('done')
      setEmail('')
    } catch {
      setStatus('error')
      setErrorMessage('送信に失敗しました。時間をおいて再度お試しください。')
    }

    /* 本番用: /functions/api/register.ts のPages Functionへ送信
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!response.ok) throw new Error('登録に失敗しました')
      setStatus('done')
      setEmail('')
    } catch {
      setStatus('error')
      setErrorMessage('送信に失敗しました。時間をおいて再度お試しください。')
    }
    */
  }

  if (status === 'done') {
    return (
      <div className="flex items-start gap-3 rounded-xl border border-primary/40 bg-primary/10 px-4 py-4 text-sm" role="status">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
        <div>
          <p className="font-medium">登録を受け付けました</p>
          <p className="mt-1 leading-6 text-muted-foreground">リリース時にメールでお知らせします。</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate={false}>
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="register-email" className="sr-only">メールアドレス</label>
          <input
            id="register-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="h-11 w-full rounded-lg border border-input bg-card px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
          />
        </div>
        <Button type="submit" size="lg" disabled={status === 'loading'} className="h-11">
          {status === 'loading' ? (
            <><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />送信中…</>
          ) : '事前登録する'}
        </Button>
      </div>
      <p className="text-xs leading-5 text-muted-foreground">登録したメールアドレスは、Zive Browserのリリース案内にのみ使用します。</p>
      {status === 'error' && <p className="text-sm text-destructive" role="alert">{errorMessage}</p>}
    </form>
  )
}
