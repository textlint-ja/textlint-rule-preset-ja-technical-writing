---
"textlint-rule-preset-ja-technical-writing": major
---

[sentence-splitter v5.0.0](https://github.com/textlint-rule/sentence-splitter/releases/tag/v5.0.0)へのアップデートに対応する変更が含まれています。

> [!WARNING]
> Node.js 18+が必要になります。

次のルールをアップデートしています。

- [textlint-rule/textlint-rule-no-unmatched-pair](https://github.com/textlint-rule/textlint-rule-no-unmatched-pair)
  - [Release v2.0.2 · textlint-rule/textlint-rule-no-unmatched-pair](https://github.com/textlint-rule/textlint-rule-no-unmatched-pair/releases/tag/v2.0.2)
-   [textlint-ja/textlint-rule-max-ten: textlint rule that limit maxinum ten(、) count of sentence.](https://github.com/textlint-ja/textlint-rule-max-ten)
    -   [Release v5.0.0 · textlint-ja/textlint-rule-max-ten](https://github.com/textlint-ja/textlint-rule-max-ten/releases/tag/v5.0.0)
-   [textlint-ja/textlint-rule-no-doubled-conjunction: textlint plugin to check duplicated same conjunctions.](https://github.com/textlint-ja/textlint-rule-no-doubled-conjunction)
    -   [Release v3.0.0 · textlint-ja/textlint-rule-no-doubled-conjunction](https://github.com/textlint-ja/textlint-rule-no-doubled-conjunction/releases/tag/v3.0.0)
-   [textlint-ja/textlint-rule-no-doubled-conjunctive-particle-ga: textlint rule plugin to check duplicated conjunctive particle `ga` in a sentence.](https://github.com/textlint-ja/textlint-rule-no-doubled-conjunctive-particle-ga)
    -   [Release v3.0.0 · textlint-ja/textlint-rule-no-doubled-conjunctive-particle-ga](https://github.com/textlint-ja/textlint-rule-no-doubled-conjunctive-particle-ga/releases/tag/v3.0.0)
-   [textlint-ja/textlint-rule-no-doubled-joshi: 文中に同じ助詞が複数出てくるのをチェックする textlint ルール](https://github.com/textlint-ja/textlint-rule-no-doubled-joshi)
    -   [Release v5.0.0 · textlint-ja/textlint-rule-no-doubled-joshi](https://github.com/textlint-ja/textlint-rule-no-doubled-joshi/releases/tag/v5.0.0)
-   [textlint-rule/textlint-rule-sentence-length: textlint rule that limit maximum length of sentence.](https://github.com/textlint-rule/textlint-rule-sentence-length)
    -   [Release v5.0.0 · textlint-rule/textlint-rule-sentence-length](https://github.com/textlint-rule/textlint-rule-sentence-length/releases/tag/v5.0.0)
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
