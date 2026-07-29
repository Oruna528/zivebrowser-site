-- Zive Browser 事前登録テーブル (Cloudflare D1)
-- 作成: wrangler d1 execute zive-registrations --file=./schema.sql
--   ローカル: 上記に --local を付ける
--   本番:     上記に --remote を付ける

CREATE TABLE IF NOT EXISTS registrations (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  email      TEXT NOT NULL UNIQUE,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_registrations_created_at
  ON registrations (created_at);
