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

## フォーマット

これまでの CHANGELOG.md と GitHub Release の書き方に合わせます。当てはまらない見出しは省きます。

```markdown
### Summary

- 一番伝えたい変更を 1〜3 行で書く

> [!WARNING]
> Node.js 22+ が必要になります。

### ルールの更新

- ⬆️ [textlint-rule-example](https://github.com/textlint-ja/textlint-rule-example) を v2.1.0 に更新
  - lint 結果の変化を書く(例: 「〜」を報告しなくなりました、エラーの列番号が正しい位置になりました)
  - https://github.com/textlint-ja/textlint-rule-example/releases/tag/v2.1.0

### ルールの追加

- 🆕 [textlint-rule-example](https://github.com/textlint-ja/textlint-rule-example) を追加
  - ルールが何をチェックするかを書く

### ルールの削除

- 🗑️ [textlint-rule-example](https://github.com/textlint-ja/textlint-rule-example) を削除
  - 削除した理由と代わりの方法を書く
```

- `[!WARNING]` は Node.js や textlint の必要バージョンが上がるなど、破壊的変更があるときだけ書く
- ルールのリンクはリポジトリ、続けてそのバージョンのリリースノートの URL を書く。URL は `gh api repos/OWNER/REPO/releases/tags/vX.Y.Z` で存在を確かめる
- 間接依存(kuromojin、sentence-splitter など)の更新で lint 結果が変わるときは、Summary か該当ルールの下に書く
- 自動生成された PR の一覧は、この下にそのまま残す

## 書かないこと

- CI や開発用の依存（devDependencies）だけの変更。PR 一覧に残っていれば十分です
