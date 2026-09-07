'use client'

import { FormEvent, useState } from 'react'
import { Button } from '@/components/ui/button'

export function PreRegisterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setMessage('')

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const result = (await response.json()) as { error?: string }

      if (!response.ok) throw new Error(result.error)
      setStatus('success')
      setMessage('登録ありがとうございます。リリース時にお知らせします。')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : '登録に失敗しました。')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row" noValidate>
      <div className="flex-1">
        <label htmlFor="pre-register-email" className="sr-only">メールアドレス</label>
        <input
          id="pre-register-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="メールアドレス"
          autoComplete="email"
          disabled={status === 'submitting'}
          className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-60"
        />
      </div>
      <Button type="submit" size="lg" className="h-11 w-full sm:w-auto" disabled={status === 'submitting'}>
        {status === 'submitting' ? '登録中…' : '事前登録する'}
      </Button>
      {message && (
        <p role={status === 'error' ? 'alert' : 'status'} className="text-sm text-muted-foreground sm:absolute sm:mt-14">
          {message}
        </p>
      )}
    </form>
  )
}
