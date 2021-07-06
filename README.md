# textlint-rule-preset-ja-technical-writing [![Actions Status](https://github.com/textlint-ja/textlint-rule-preset-ja-technical-writing/workflows/test/badge.svg)](https://github.com/textlint-ja/textlint-rule-preset-ja-technical-writing/actions?query=workflow%3A"test") [![Gitter](https://badges.gitter.im/textlint-ja/textlint-ja.svg)](https://gitter.im/textlint-ja/textlint-ja)

技術文書向けの[textlint](https://textlint.github.io/)ルールプリセットです。
全体的に少し厳しめの設定がデフォルト値となっているため、文章に合わせて設定値を変更する必要があります。

また、[連続できる最大の漢字長は6文字まで](#%E9%80%A3%E7%B6%9A%E3%81%A7%E3%81%8D%E3%82%8B%E6%9C%80%E5%A4%A7%E3%81%AE%E6%BC%A2%E5%AD%97%E9%95%B7%E3%81%AF6%E6%96%87%E5%AD%97%E3%81%BE%E3%81%A7)
のように文章全体として例外が必ず出てくるルールもデフォルトで入っています。 ルールによっては`allow`オプションで例外を規定できるようになっているため、例外を明示しつつ利用することを想定しています。

合わせて利用することを想定しているfilterルール(例外を明示できる)も参照してください。

- [textlint/textlint-filter-rule-comments](https://github.com/textlint/textlint-filter-rule-comments)
- [textlint-filter-rule-allowlist](https://github.com/textlint/textlint-filter-rule-allowlist)

<!-- textlint-disable preset-ja-technical-writing/no-mix-dearu-desumasu,
preset-ja-technical-writing/no-exclamation-question-mark -->

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-preset-ja-technical-writing

## Usage

Via `.textlintrc`(Recommended)

```json
{
  "rules": {
    "preset-ja-technical-writing": true
  }
}
```

Via CLI

```
textlint --preset ja-technical-writing README.md
```

## ルールの設定方法

次のように `"preset-ja-technical-writing"` 以下にそれぞれのオプション値を指定することで、設定を変更できます。
各ルールの設定できるオプションは、各ルールのREADMEを参照してください。

```json
{
  "rules": {
    "preset-ja-technical-writing": {
      "max": 120,
      "no-mix-dearu-desumasu": false
    }
  }
}
```

また、ルールの設定方法については[textlintのドキュメント](https://textlint.github.io/docs/configuring.html#rule-preset)も参照してください。

## ルール一覧

<!-- toc -->

  * [1文の長さは100文字以下とする](#1%E6%96%87%E3%81%AE%E9%95%B7%E3%81%95%E3%81%AF100%E6%96%87%E5%AD%97%E4%BB%A5%E4%B8%8B%E3%81%A8%E3%81%99%E3%82%8B)
  * [カンマは1文中に3つまで](#%E3%82%AB%E3%83%B3%E3%83%9E%E3%81%AF1%E6%96%87%E4%B8%AD%E3%81%AB3%E3%81%A4%E3%81%BE%E3%81%A7)
  * [読点は1文中に3つまで](#%E8%AA%AD%E7%82%B9%E3%81%AF1%E6%96%87%E4%B8%AD%E3%81%AB3%E3%81%A4%E3%81%BE%E3%81%A7)
  * [連続できる最大の漢字長は6文字まで](#%E9%80%A3%E7%B6%9A%E3%81%A7%E3%81%8D%E3%82%8B%E6%9C%80%E5%A4%A7%E3%81%AE%E6%BC%A2%E5%AD%97%E9%95%B7%E3%81%AF6%E6%96%87%E5%AD%97%E3%81%BE%E3%81%A7)
  * [漢数字と算用数字を使い分けます](#%E6%BC%A2%E6%95%B0%E5%AD%97%E3%81%A8%E7%AE%97%E7%94%A8%E6%95%B0%E5%AD%97%E3%82%92%E4%BD%BF%E3%81%84%E5%88%86%E3%81%91%E3%81%BE%E3%81%99)
  * [「ですます調」、「である調」を統一します](#%E3%81%A7%E3%81%99%E3%81%BE%E3%81%99%E8%AA%BF%E3%81%A7%E3%81%82%E3%82%8B%E8%AA%BF%E3%82%92%E7%B5%B1%E4%B8%80%E3%81%97%E3%81%BE%E3%81%99)
  * [文末の句点記号として「。」を使います](#%E6%96%87%E6%9C%AB%E3%81%AE%E5%8F%A5%E7%82%B9%E8%A8%98%E5%8F%B7%E3%81%A8%E3%81%97%E3%81%A6%E3%82%92%E4%BD%BF%E3%81%84%E3%81%BE%E3%81%99)
  * [二重否定は使用しない](#%E4%BA%8C%E9%87%8D%E5%90%A6%E5%AE%9A%E3%81%AF%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%AA%E3%81%84)
  * [ら抜き言葉を使用しない](#%E3%82%89%E6%8A%9C%E3%81%8D%E8%A8%80%E8%91%89%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%AA%E3%81%84)
  * [逆接の接続助詞「が」を連続して使用しない](#%E9%80%86%E6%8E%A5%E3%81%AE%E6%8E%A5%E7%B6%9A%E5%8A%A9%E8%A9%9E%E3%81%8C%E3%82%92%E9%80%A3%E7%B6%9A%E3%81%97%E3%81%A6%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%AA%E3%81%84)
  * [同じ接続詞を連続して使用しない](#%E5%90%8C%E3%81%98%E6%8E%A5%E7%B6%9A%E8%A9%9E%E3%82%92%E9%80%A3%E7%B6%9A%E3%81%97%E3%81%A6%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%AA%E3%81%84)
  * [同じ助詞を連続して使用しない](#%E5%90%8C%E3%81%98%E5%8A%A9%E8%A9%9E%E3%82%92%E9%80%A3%E7%B6%9A%E3%81%97%E3%81%A6%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%AA%E3%81%84)
  * [UTF8-MAC 濁点を使用しない](#utf8-mac-%E6%BF%81%E7%82%B9%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%AA%E3%81%84)
  * [不必要な制御文字を使用しない](#%E4%B8%8D%E5%BF%85%E8%A6%81%E3%81%AA%E5%88%B6%E5%BE%A1%E6%96%87%E5%AD%97%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%AA%E3%81%84)
  * [不必要なゼロ幅スペースを使用しない](#%E4%B8%8D%E5%BF%85%E8%A6%81%E3%81%AA%E3%82%BC%E3%83%AD%E5%B9%85%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%AA%E3%81%84)
  * [感嘆符!！、感嘆符?？を使用しない](#%E6%84%9F%E5%98%86%E7%AC%A6%E6%84%9F%E5%98%86%E7%AC%A6%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%AA%E3%81%84)
  * [半角カナを使用しない](#%E5%8D%8A%E8%A7%92%E3%82%AB%E3%83%8A%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%AA%E3%81%84)
  * [弱い日本語表現の利用を使用しない](#%E5%BC%B1%E3%81%84%E6%97%A5%E6%9C%AC%E8%AA%9E%E8%A1%A8%E7%8F%BE%E3%81%AE%E5%88%A9%E7%94%A8%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%AA%E3%81%84)
  * [同一の単語を間違えて連続しているのをチェックする](#%E5%90%8C%E4%B8%80%E3%81%AE%E5%8D%98%E8%AA%9E%E3%82%92%E9%96%93%E9%81%95%E3%81%88%E3%81%A6%E9%80%A3%E7%B6%9A%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E3%81%AE%E3%82%92%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%81%99%E3%82%8B)
  * [よくある日本語の誤用をチェックする](#%E3%82%88%E3%81%8F%E3%81%82%E3%82%8B%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%81%AE%E8%AA%A4%E7%94%A8%E3%82%92%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%81%99%E3%82%8B)
  * [冗長な表現をチェックする](#%E5%86%97%E9%95%B7%E3%81%AA%E8%A1%A8%E7%8F%BE%E3%82%92%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%81%99%E3%82%8B)
  * [入力ミスで発生する不自然なアルファベットをチェックする](#%E5%85%A5%E5%8A%9B%E3%83%9F%E3%82%B9%E3%81%A7%E7%99%BA%E7%94%9F%E3%81%99%E3%82%8B%E4%B8%8D%E8%87%AA%E7%84%B6%E3%81%AA%E3%82%A2%E3%83%AB%E3%83%95%E3%82%A1%E3%83%99%E3%83%83%E3%83%88%E3%82%92%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%81%99%E3%82%8B)
  * [対になっていない括弧をチェックする](#%E5%AF%BE%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84%E6%8B%AC%E5%BC%A7%E3%82%92%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%81%99%E3%82%8B)
- [Changelog](#changelog)
- [Semantic Versioning Policy](#semantic-versioning-policy)
  * [Release Flow](#release-flow)
- [ルールの利用者](#%E3%83%AB%E3%83%BC%E3%83%AB%E3%81%AE%E5%88%A9%E7%94%A8%E8%80%85)
- [Community](#community)
- [その他のルール](#%E3%81%9D%E3%81%AE%E4%BB%96%E3%81%AE%E3%83%AB%E3%83%BC%E3%83%AB)
- [Running tests](#running-tests)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

<!-- tocstop -->

### 1文の長さは100文字以下とする

> https://github.com/azu/textlint-rule-sentence-length

長過ぎる文は読みにくさに繋がるため、適切な単位で文を区切ってください。 厳しめの設定にしたい場合は`90`文字を推奨しています。

        "sentence-length": {
            max: 100
        },

過去の設定の履歴は以下のようになっています。

- バージョン3.0.0+: 100文字以下
- バージョン2.0.0以下: 90文字以下

### カンマは1文中に3つまで

> https://github.com/azu/textlint-rule-max-comma

カンマ（,）の多用は、文が長くなっている可能性があります。

        "max-comma": {
            max: 3
        },

### 読点は1文中に3つまで

> https://github.com/azu/textlint-rule-max-ten

読点（、）の多用は、文が長くなっている可能性があります。

        "max-ten": {
            max: 3
        },

### 連続できる最大の漢字長は6文字まで

> https://github.com/azu/textlint-rule-max-kanji-continuous-len

漢字同士が連続していると読みにくさにつながります。 固有名詞は `allow` オプションに記述して回避します。

        "max-kanji-continuous-len": {
            max: 6
        },

### 漢数字と算用数字を使い分けます

> https://github.com/azu/textlint-rule-preset-JTF-style

数量を表現し、数を数えられるものは算用数字を使用します。任意の数に置き換えても通用する語句がこれに該当します。

慣用的表現、熟語、概数、固有名詞、副詞など、漢数字を使用することが一般的な語句では漢数字を使います。

        "arabic-kanji-numbers": true,

### 「ですます調」、「である調」を統一します

> https://github.com/azu/textlint-rule-no-mix-dearu-desumasu

- 見出しは自動
- 本文はですます調
- 箇条書きはである調

文体は見出し、本文、箇条書きの中では統一した表記にします。

        "no-mix-dearu-desumasu": {
            "preferInHeader": "",
            "preferInBody": "ですます",
            "preferInList": "である",
            "strict": true
        },

### 文末の句点記号として「。」を使います

> https://github.com/textlint-ja/textlint-rule-ja-no-mixed-period

文末には「。」を使い文を区切ります。

「。」のつけ忘れのチェックや「:」で文を区切らないようにします。

        "ja-no-mixed-period": {
            "periodMark": "。"
        },

### 二重否定は使用しない

> https://github.com/azu/textlint-rule-no-double-negative-ja

        "no-double-negative-ja": true,

### ら抜き言葉を使用しない

> https://github.com/azu/textlint-rule-no-dropping-the-ra

        "no-dropping-the-ra": true,

### 逆接の接続助詞「が」を連続して使用しない

> https://github.com/takahashim/textlint-rule-no-doubled-conjunctive-particle-ga

逆接の接続助詞「が」は、特に否定の意味ではなくても安易に使われてしまいがちです。

同一文中に複数回出現していないかをチェックします。

        "no-doubled-conjunctive-particle-ga": true,

### 同じ接続詞を連続して使用しない

> https://github.com/takahashim/textlint-rule-no-doubled-conjunction

        "no-doubled-conjunction": true,

### 同じ助詞を連続して使用しない

> https://github.com/azu/textlint-rule-no-doubled-joshi

        "no-doubled-joshi": {
            "min_interval": 1
        },

### UTF8-MAC 濁点を使用しない

> https://github.com/azu/textlint-rule-no-nfd

文章中にUTF8-MAC 濁点は不要です。 ファイルからコピー＆ペーストした文字である場合があります。

        "no-nfd": true,

### 不必要な制御文字を使用しない

> https://github.com/textlint-rule/textlint-rule-no-invalid-control-character

改行(`\n`)やタブ(`\t`)以外の制御文字が文章に入るのを防止します。

        "no-invalid-control-character": true,

### 不必要なゼロ幅スペースを使用しない

> https://github.com/textlint-rule/textlint-rule-no-zero-width-spaces

ゼロ幅スペース（`\u200b`）が文章に入るのを防止します。

        "no-zero-width-spaces": true,

### 感嘆符!！、感嘆符?？を使用しない

> https://github.com/azu/textlint-rule-no-exclamation-question-mark

特定の感嘆符または感嘆符を使用する場合は、オプションで許可して利用してください。

        "no-exclamation-question-mark": true,

### 半角カナを使用しない

> https://github.com/azu/textlint-rule-no-hankaku-kana

全角カタカナを使用してください。

        "no-hankaku-kana": true,

### 弱い日本語表現の利用を使用しない

> https://github.com/textlint-ja/textlint-rule-ja-no-weak-phrase

`〜かもしれない` 等の弱い表現を使用しない。

        "ja-no-weak-phrase": true,

### 同一の単語を間違えて連続しているのをチェックする

> https://github.com/textlint-ja/textlint-rule-ja-no-successive-word

同一の単語(形態素解析したtoken)が連続している場合は誤字の可能性があります。

誤字でない場合は、[Issue報告](https://github.com/textlint-ja/textlint-rule-ja-no-successive-word/issues/new)してください。

        "ja-no-successive-word": true,

### よくある日本語の誤用をチェックする

> https://github.com/textlint-ja/textlint-rule-ja-no-abusage

日本語や技術表現における漢字の誤用などをチェックするルールです。

        "ja-no-abusage": true

### 冗長な表現をチェックする

> https://github.com/textlint-ja/textlint-rule-ja-no-redundant-expression

冗長な表現とは、その文から省いても意味が通じるような表現を示しています。
`"することができる"`という冗長な表現を`"できる"`にするといったルールです。

        "ja-no-redundant-expression": true

### 入力ミスで発生する不自然なアルファベットをチェックする

> https://github.com/textlint-ja/textlint-rule-ja-unnatural-alphabet

`リイr−ス` などIMEの入力ミスが日本語中に混じった不自然なアルファベットをチェックします。

        "ja-unnatural-alphabet": true

### 対になっていない括弧をチェックする

> https://github.com/textlint-rule/textlint-rule-no-unmatched-pair

1文中で`(`に対応する`)`がない場合などの括弧の対応関係をチェックします。

        "no-unmatched-pair": true

## Changelog

See [Releases page](https://github.com/textlint-ja/textlint-rule-preset-ja-technical-writing/releases).

## Semantic Versioning Policy

次のルールでバージョンが更新されます。

- Patch リリース
    - 各ルールのバグ修正 (警告を減らす方向への修正)
    - ドキュメントの改善
    - 内部的な変更 (リファクタリングやテストの改善など)
    - リリース失敗時の再リリース
- Minor リリース
    - 各ルールのバグ修正 (警告を増やす方向への修正)
    - 新オプションの追加
    - 既存ルールの非推奨化
- Major リリース
    - プリセットへのルールの追加
    - プリセットからルールの削除
    - 既存のオプション値の変更

更新内容は[Releases page](https://github.com/textlint-ja/textlint-rule-preset-ja-technical-writing/releases)を参照してください。

### Release Flow

- 次のMajorバージョンのIssueを作り、IssueにCHANGELOGを書いていく
- Pull Requestはrenovatebotから出るのでマージする
- 半年ごとに`@shipjs prepare`が実行されて、メジャーアップデートのPRがでる
- リリースされたらIssueをクローズする

## ルールの利用者

このプリセットを利用しているユーザーです。

- [asciidwango/js-primer](https://github.com/asciidwango/js-primer)
- [Maven3のはじめかた](https://github.com/KengoTODA/what-is-maven)

ユーザーリストへのPRも募集しています。

## Community

質問は以下のGitterでお願いします。

[![Gitter](https://badges.gitter.im/textlint-ja/textlint-ja.svg)](https://gitter.im/textlint-ja/textlint-ja)

## その他のルール

- [Collection of textlint rule · textlint/textlint Wiki](https://github.com/textlint/textlint/wiki/Collection-of-textlint-rule)

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature
requests, [please create an issue](https://github.com/textlint-ja/textlint-rule-preset-ja-technical-writing/issues).

1. Fork it
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
