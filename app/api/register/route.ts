import { getCloudflareContext } from '@opennextjs/cloudflare'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: unknown }
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''

    if (!email || email.length > 254 || !emailPattern.test(email)) {
      return NextResponse.json({ error: '有効なメールアドレスを入力してください。' }, { status: 400 })
    }

    const { env } = await getCloudflareContext({ async: true })
    const database = (env as { DB?: D1Database }).DB

    if (!database) {
      return NextResponse.json({ error: '登録サービスが設定されていません。' }, { status: 503 })
    }

    await database
      .prepare('INSERT INTO registrations (email) VALUES (?)')
      .bind(email)
      .run()

    return NextResponse.json({ ok: true }, { status: 201 })
  } catch (error) {
    if (error instanceof Error && /UNIQUE constraint failed/i.test(error.message)) {
      return NextResponse.json({ ok: true, alreadyRegistered: true }, { status: 200 })
    }

    return NextResponse.json({ error: '登録に失敗しました。時間をおいて再度お試しください。' }, { status: 500 })
  }
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204 })
}

interface D1Database {
  prepare(query: string): {
    bind(...values: unknown[]): { run(): Promise<unknown> }
  }
}

interface CloudflareEnv {
  DB?: D1Database
}

declare global {
  // Cloudflare's runtime augments the environment; this declaration keeps local TypeScript independent.
  namespace Cloudflare {
    interface Env extends CloudflareEnv {}
  }
}
