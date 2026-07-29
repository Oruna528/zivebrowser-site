import { NextRequest, NextResponse } from 'next/server'
import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ success: false, message: 'メールアドレスが必要です。' }, { status: 400 })
    }

    // Cloudflare環境からD1の接続インスタンスを取得
    const context = getRequestContext()
    const db = context.env?.DB

    if (!db) {
      return NextResponse.json({ success: false, message: 'データベースの接続設定が見つかりません。' }, { status: 500 })
    }

    // すでに同じメールアドレスが登録されているかチェック
    const existing = await db
      .prepare('SELECT id FROM registrations WHERE email = ?')
      .bind(email)
      .first()

    if (existing) {
      return NextResponse.json({ success: false, message: 'このメールアドレスは既に登録されています。' }, { status: 400 })
    }

    // D1データベースへメールアドレスと日時を挿入
    const now = new Date().toISOString()
    await db
      .prepare('INSERT INTO registrations (email, registered_at) VALUES (?, ?)')
      .bind(email, now)
      .run()

    return NextResponse.json({ success: true, message: '登録が完了しました。' }, { status: 200 })

  } catch (error) {
    console.error('D1 Error:', error)
    return NextResponse.json({ success: false, message: 'サーバーエラーが発生しました。' }, { status: 500 })
  }
}
