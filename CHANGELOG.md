# textlint-rule-preset-ja-technical-writing

## 10.0.2

### Patch Changes

- 1e7958b: Node.js 16 のサポートを終了しました
- a00b809: ⬆️ @textlint-rule/textlint-rule-no-invalid-control-character@v3

  - Node.js 18+が必要になります。

## 10.0.1

### Patch Changes

- ac442b6: CI: merge snapshot release

## 10.0.0

### Major Changes

- 3e3b2d5: fix(deps): update dependency textlint-rule-no-mix-dearu-desumasu to v6

  文体が統一されていても preferIn 設定に違反する場合は、エラーとなるように変更
  以前は、prefer とは異なる文体に統一されていた時にエラーになっていませんでした。
  https://github.com/textlint-ja/textlint-rule-no-mix-dearu-desumasu/releases/tag/v6.0.0

## 9.0.0

### Major Changes

- c270fed: [sentence-splitter v5.0.0](https://github.com/textlint-rule/sentence-splitter/releases/tag/v5.0.0)へのアップデートに対応する変更が含まれています。

  > [!WARNING]
  > Node.js 18+が必要になります。

  次のルールをアップデートしています。

  - [textlint-rule/textlint-rule-no-unmatched-pair](https://github.com/textlint-rule/textlint-rule-no-unmatched-pair)
    - [Release v2.0.2 · textlint-rule/textlint-rule-no-unmatched-pair](https://github.com/textlint-rule/textlint-rule-no-unmatched-pair/releases/tag/v2.0.2)
  - [textlint-ja/textlint-rule-max-ten: textlint rule that limit maxinum ten(、) count of sentence.](https://github.com/textlint-ja/textlint-rule-max-ten)
    - [Release v5.0.0 · textlint-ja/textlint-rule-max-ten](https://github.com/textlint-ja/textlint-rule-max-ten/releases/tag/v5.0.0)
  - [textlint-ja/textlint-rule-no-doubled-conjunction: textlint plugin to check duplicated same conjunctions.](https://github.com/textlint-ja/textlint-rule-no-doubled-conjunction)
    - [Release v3.0.0 · textlint-ja/textlint-rule-no-doubled-conjunction](https://github.com/textlint-ja/textlint-rule-no-doubled-conjunction/releases/tag/v3.0.0)
  - [textlint-ja/textlint-rule-no-doubled-conjunctive-particle-ga: textlint rule plugin to check duplicated conjunctive particle `ga` in a sentence.](https://github.com/textlint-ja/textlint-rule-no-doubled-conjunctive-particle-ga)
    - [Release v3.0.0 · textlint-ja/textlint-rule-no-doubled-conjunctive-particle-ga](https://github.com/textlint-ja/textlint-rule-no-doubled-conjunctive-particle-ga/releases/tag/v3.0.0)
  - [textlint-ja/textlint-rule-no-doubled-joshi: 文中に同じ助詞が複数出てくるのをチェックする textlint ルール](https://github.com/textlint-ja/textlint-rule-no-doubled-joshi)
    - [Release v5.0.0 · textlint-ja/textlint-rule-no-doubled-joshi](https://github.com/textlint-ja/textlint-rule-no-doubled-joshi/releases/tag/v5.0.0)
  - [textlint-rule/textlint-rule-sentence-length: textlint rule that limit maximum length of sentence.](https://github.com/textlint-rule/textlint-rule-sentence-length)
    - [Release v5.0.0 · textlint-rule/textlint-rule-sentence-length](https://github.com/textlint-rule/textlint-rule-sentence-length/releases/tag/v5.0.0)
  - [textlint-rule/textlint-rule-max-comma: textlint rule is that limit maximum comma(,) count of sentence.](https://github.com/textlint-rule/textlint-rule-max-comma)
    - [Release v4.0.0 · textlint-rule/textlint-rule-max-comma](https://github.com/textlint-rule/textlint-rule-max-comma/releases/tag/v4.0.0)
  - [textlint-ja/textlint-rule-max-ten: textlint rule that limit maxinum ten(、) count of sentence.](https://github.com/textlint-ja/textlint-rule-max-ten)
    - [Release v5.0.0 · textlint-ja/textlint-rule-max-ten](https://github.com/textlint-ja/textlint-rule-max-ten/releases/tag/v5.0.0)

  **Note**

  [GitHub に追加](https://github.com/orgs/community/discussions/16925)された次の構文で、一部ルールに影響が出ていました。

  ```
  > [!NOTE]
  > some content
  ```

  この構文が sentence-splitter v3 だと正しく解析できないため、sentence-splitter v5 へアップデートしています。

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
