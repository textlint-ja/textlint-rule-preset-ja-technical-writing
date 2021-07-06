# textlint-rule-preset-ja-technical-writing

## 7.0.0
### Major Changes

- ac46d78: :sparkles: [textlint-rule/textlint-rule-sentence-length v3.0.0](https://github.com/textlint-rule/textlint-rule-sentence-length/releases/v3.0.0)へアップデート
  
  3.0.0では、デフォルトでは次のようなURLそのものがリンクとなっているケースをカウントしないようになっています。
  
  > Very long <https://example.com?longlonglong> URL.
- 6c1d348: :new: [textlint-rule-no-zero-width-spaces](https://github.com/textlint-rule/textlint-rule-no-zero-width-spaces)を追加
  
  ゼロ幅スペース（`\u200b`）が文章に入るのを防止するルールです。
- 55f945a: :sparkles: [textlint-rule/textlint-rule-no-invalid-control-character v2.0.0](https://github.com/textlint-rule/textlint-rule-no-invalid-control-character/releases/tag/v2.0.0)へ更新
  
  デフォルトでimgのalt内に制御文字列が含まれているかをチェックするようになります。
