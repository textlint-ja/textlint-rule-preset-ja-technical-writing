---
name: release-notes
description: Release PR（`Type: Release` ラベル）の本文に、このプリセットのリリースノートを書くときに使う
---

# リリースノートの書き方

Release PR の本文は、マージ時にそのまま GitHub Release のノートになります（`.github/workflows/release.yml` が `PR_BODY` を使います）。
自動生成された本文は PR タイトルの一覧なので、マージ前に利用者向けの説明を先頭に足します。

## 手順

1. 前回のタグとの差分を見る: `git diff "$(git describe --tags --abbrev=0)" HEAD -- package.json`
2. 本文の先頭に「変更点」を書き、自動生成された PR 一覧はその下に残す
3. 日本語で、短く書く

## 書くこと

- 破壊的変更があれば最初に書く（必要な Node.js や textlint のバージョン、外したルールなど）
- 追加・削除したルール
- 更新したルールと、その新しいバージョン（`ルール名 x.y.z` の形）
- lint 結果が変わる点: 新しく報告されるもの、報告されなくなるもの、メッセージや位置（行・列）の変化
- 速度など、利用者が気づく変化があれば一言

## 書かないこと

- CI や開発用の依存（devDependencies）だけの変更。PR 一覧に残っていれば十分です
