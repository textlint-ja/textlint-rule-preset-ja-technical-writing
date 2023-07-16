# textlint-rule-preset-ja-technical-writing

## 8.0.0

### Major Changes

- 8d685f3: Update dependency textlint-rule-max-comma to v3

  Node.js 16+が必要になります。

- 33b2a7f: - update dependency textlint-rule-ja-no-mixed-period to v3

  Node.js 16+が必要になっています。

- d393923: chore(deps): update textlint-rule-sentence-length@4

  - Node.js 16+が必要となりました
  - `exclusionPatterns`オプションが廃止されたため、 `skipPatterns`オプションを利用してください
  - https://github.com/textlint-rule/textlint-rule-sentence-length/releases/tag/v4.0.0

- ad91c7a: fix(deps): update dependency textlint-rule-no-hankaku-kana to v2

  - https://github.com/textlint-ja/textlint-rule-no-hankaku-kana/releases/tag/v2.0.0
  - Node.js 14+が必要になりました
  - textlint v12.3.0 が必要になりました

- cd3d790: fix(deps): update dependency textlint-rule-no-nfd to v2

  textlint v12.2.0+が必要になります。

### Patch Changes

- ae7c716: docs: オプションを完全なものに変更。ルールの説明を書き直し

  README のオプション表記やルールの説明を書き直しました。

## 7.0.0

### Major Changes

- ac46d78: :sparkles: [textlint-rule/textlint-rule-sentence-length v3.0.0](https://github.com/textlint-rule/textlint-rule-sentence-length/releases/v3.0.0)へアップデート

  3.0.0 では、デフォルトでは次のような URL そのものがリンクとなっているケースをカウントしないようになっています。

  > Very long <https://example.com?longlonglong> URL.

- 6c1d348: :new: [textlint-rule-no-zero-width-spaces](https://github.com/textlint-rule/textlint-rule-no-zero-width-spaces)を追加

  ゼロ幅スペース（`\u200b`）が文章に入るのを防止するルールです。

- 55f945a: :sparkles: [textlint-rule/textlint-rule-no-invalid-control-character v2.0.0](https://github.com/textlint-rule/textlint-rule-no-invalid-control-character/releases/tag/v2.0.0)へ更新

  デフォルトで img の alt 内に制御文字列が含まれているかをチェックするようになります。
