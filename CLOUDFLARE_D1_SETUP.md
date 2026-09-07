# Cloudflare Pages + D1 運用手順

Zive Browser の事前登録フォームは、Cloudflare Pages の D1 バインディング `DB` にメールアドレスを保存します。

## 1. D1 データベースを作成

Cloudflare ダッシュボードで D1 データベースを作成し、データベース名を `zive-registrations` にします。

作成後に表示される Database ID を `wrangler.toml` の `database_id` に設定してください。

```toml
[[d1_databases]]
binding = "DB"
database_name = "zive-registrations"
database_id = "実際のDatabase ID"
```

Database ID は公開しても接続権限にはなりませんが、秘密情報は `wrangler.toml` に書かないでください。

## 2. テーブルを作成

Cloudflare の D1 Console で `schema.sql` の内容を実行します。

```sql
CREATE TABLE IF NOT EXISTS registrations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
```

## 3. Pages に D1 をバインド

Cloudflare Pages の対象プロジェクトで次を開きます。

`Settings` → `Functions` → `D1 database bindings`

以下のように設定します。

- Variable name: `DB`
- D1 database: `zive-registrations`

Preview と Production の両方で利用する場合は、それぞれの環境に設定し、設定後に再デプロイしてください。

## 4. フォームの動作

フォームは `/api/register` に `POST` します。サーバー側で次を行います。

- 前後の空白を削除し、小文字に正規化
- メールアドレス形式を検証
- D1 のパラメータバインドで安全に INSERT
- UNIQUE 制約による重複登録は成功扱い
- D1 未設定時は成功表示せずエラーを返す

## 5. 保存データの確認

Cloudflare D1 Console で次のSQLを実行します。

```sql
SELECT id, email, created_at
FROM registrations
ORDER BY created_at DESC;
```

登録件数を確認する場合:

```sql
SELECT COUNT(*) AS total
FROM registrations;
```

## 6. 公開後に有効化するコード

現在は事前登録フェーズの表示が有効です。正式版を配信するまでは、`components/download-section.tsx` 内の以下のコードを変更しないでください。

- ベータ版フェーズ: コメントアウト済み
- 本番リリースフェーズ: コメントアウト済み

正式版を公開するときは、事前登録フェーズのブロックを無効化し、本番リリースフェーズのコメントを外します。ダウンロードURLは、実際に GitHub Releases に存在するファイル名へ更新してください。

## 注意事項

- `database_id` は実際のIDに置き換えてからデプロイしてください。
- 管理画面やCSV出力を追加する場合は、必ず管理者認証を実装してください。
- D1のデータをブラウザへ直接公開するAPIは作成しないでください。
- 実運用ではCloudflareのバックアップ、アクセスログ、プライバシーポリシーも確認してください。
- メールアドレスを収集する前に、サイト上で利用目的と保存期間を明示してください。

## 現在のファイル構成

- `schema.sql`: D1テーブル定義
- `wrangler.toml`: D1バインディング設定
- `app/api/register/route.ts`: 登録API
- `components/pre-register-form.tsx`: 事前登録フォーム
- `components/download-section.tsx`: 事前登録・ベータ・本番表示の切替箇所

本番用の管理者確認ページは、認証方式を決めてから別途追加します。
