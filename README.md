# textlint-rule-preset-ja-technical-writing [![Build Status](https://travis-ci.org/textlint-ja/textlint-rule-preset-ja-technical-writing.svg?branch=master)](https://travis-ci.org/textlint-ja/textlint-rule-preset-ja-technical-writing) [![Gitter](https://badges.gitter.im/textlint-ja/textlint-ja.svg)](https://gitter.im/textlint-ja/textlint-ja)

技術文書向けの[textlint](https://textlint.github.io/)ルールプリセットです。

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

## ルール一覧

<!-- toc -->

* [1文の長さは90文字以下とする](#1文の長さは90文字以下とする)
* [カンマは1文中に3つまで](#カンマは1文中に3つまで)
* [読点は1文中に3つまで](#読点は1文中に3つまで)
* [連続できる最大の漢字長は5文字まで](#連続できる最大の漢字長は5文字まで)
* [漢数字と算用数字を使い分けます](#漢数字と算用数字を使い分けます)
* [「ですます調」、「である調」を統一します](#「ですます調」、「である調」を統一します)
* [文末の句点記号として「。」を使います](#文末の句点記号として「。」を使います)
* [二重否定は使用しない](#二重否定は使用しない)
* [ら抜き言葉を使用しない](#ら抜き言葉を使用しない)
* [同じ表現から文を開始しすぎない](#同じ表現から文を開始しすぎない)
* [逆接の接続助詞「が」を連続して使用しない](#逆接の接続助詞「が」を連続して使用しない)
* [同じ接続詞を連続して使用しない](#同じ接続詞を連続して使用しない)
* [同じ助詞を連続して使用しない](#同じ助詞を連続して使用しない)
* [UTF8-MAC 濁点を使用しない](#utf8-mac-濁点を使用しない)
* [感嘆符!！、感嘆符?？を使用しない](#感嘆符！、感嘆符？を使用しない)
* [半角カナを使用しない](#半角カナを使用しない)
* [弱い日本語表現の利用を使用しない](#弱い日本語表現の利用を使用しない)
* [同一の単語を間違えて連続しているのをチェックする](#同一の単語を間違えて連続しているのをチェックする)
* [よくある日本語の誤用をチェックする](#よくある日本語の誤用をチェックする)

<!-- tocstop -->

### 1文の長さは90文字以下とする
> https://github.com/azu/textlint-rule-sentence-length

長過ぎる文は読みにくさに繋がるため、適切な単位で文を区切ってください。


        "sentence-length": {
            max: 90
        },
        
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
        
### 連続できる最大の漢字長は5文字まで
> https://github.com/azu/textlint-rule-max-kanji-continuous-len

漢字同士が連続していると読みにくさにつながります。
固有名詞は `allow` オプションに記述して回避します。

        "max-kanji-continuous-len": {
            max: 5
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
        
### 同じ表現から文を開始しすぎない
> https://github.com/azu/textlint-rule-no-start-duplicated-conjunction

同じ表現から文を開始している場合、同じことを繰り返し説明している場合があります。

箇条書きなどで同じ表現から開始したいは[textlint-filter-rule-comments](https://github.com/textlint/textlint-filter-rule-comments "textlint-filter-rule-comments")を使い回避してください。

        "no-start-duplicated-conjunction": {
            "interval": 2
        },
 
        
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

文章中にUTF8-MAC 濁点は不要です。
ファイルからコピー＆ペーストした文字である場合があります。

        "no-nfd": true,
        
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

更新内容は[Releases page](https://github.com/textlint-ja/textlint-rule-preset-ja-technical-writing/releases)を参照してください。

## Community

質問は以下のGitterでお願いします。

[![Gitter](https://badges.gitter.im/textlint-ja/textlint-ja.svg)](https://gitter.im/textlint-ja/textlint-ja)

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/textlint-ja/textlint-rule-preset-ja-technical-writing/issues).

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
