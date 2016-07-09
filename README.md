# textlint-rule-preset-ja-technical-writing [![Build Status](https://travis-ci.org/textlint-ja/textlint-rule-preset-ja-technical-writing.svg?branch=master)](https://travis-ci.org/textlint-ja/textlint-rule-preset-ja-technical-writing) [![Gitter](https://badges.gitter.im/textlint-ja/textlint-ja.svg)](https://gitter.im/textlint-ja/textlint-ja)

技術文書向けの[textlint](https://textlint.github.io/)ルールプリセットです。

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

### 1文の長さは90文字以下とする
https://github.com/azu/textlint-rule-sentence-length

        "sentence-length": {
            max: 90
        },
        
### コンマは1文中に3つまで
https://github.com/azu/textlint-rule-max-comma

        "max-comma": {
            max: 3
        },
        
### 読点は1文中に3つまで
https://github.com/azu/textlint-rule-max-ten

        "max-ten": {
            max: 3
        },
        
### 連続できる最大の漢字長は5文字まで
6文字以上の漢字は使用しない
https://github.com/azu/textlint-rule-max-kanji-continuous-len

        "max-kanji-continuous-len": {
            max: 5
        },
        
### 漢数字と算用数字を使い分けます
- 数量を表現し、数を数えられるものは算用数字を使用します。
- 任意の数に置き換えても通用する語句がこれに該当します。序数詞（「第～回」「～番目」「～回目」）も算用数字を使います。
- 慣用的表現、熟語、概数、固有名詞、副詞など、漢数字を使用することが一般的な語句では漢数字を使います。
https://github.com/azu/textlint-rule-preset-JTF-style
https://www.jtf.jp/jp/style_guide/styleguide_top.html

        "arabic-kanji-numbers": true,
        
### 「ですます調」、「である調」を統一します
- 見出しは自動
- 本文はですます調
- 箇条書きはである調
https://github.com/azu/textlint-rule-no-mix-dearu-desumasu

        "no-mix-dearu-desumasu": {
            "preferInHeader": "",
            "preferInBody": "ですます",
            "preferInList": "である",
            "strict": true
        },
        
### 文末の句点記号として「。」を使います
https://github.com/textlint-ja/textlint-rule-ja-no-mixed-period

        "ja-no-mixed-period": {
            "periodMark": "。"
        },
        
### 二重否定は使用しない
https://github.com/azu/textlint-rule-no-double-negative-ja

        "no-double-negative-ja": true,
        
### ら抜き言葉を使用しない
https://github.com/azu/textlint-rule-no-dropping-the-ra

        "no-dropping-the-ra": true,
        
### 同じ表現から文を開始しすぎない
https://github.com/azu/textlint-rule-no-start-duplicated-conjunction

        "no-start-duplicated-conjunction": {
            "interval": 2
        },
        
### 同じ接続詞を連続して使用しない
https://github.com/takahashim/textlint-rule-no-doubled-conjunction

        "no-doubled-conjunction": true,
        
### 同じ助詞を連続して使用しない

        "no-doubled-joshi": {
            "min_interval": 1
        },
        
### 感嘆符!！、疑問符?？を使用しない
https://github.com/azu/textlint-rule-no-exclamation-question-mark

        "no-exclamation-question-mark": true,
        
### 半角カナを使用しない
https://github.com/azu/textlint-rule-no-hankaku-kana

        "no-hankaku-kana": true,
        
### 弱い日本語表現の利用を使用しない
〜かもしれない 等の弱い表現を使用しない
https://github.com/textlint-ja/textlint-rule-ja-no-weak-phrase

        "ja-no-weak-phrase": true,
        
### 同一の単語を間違えて連続しているのをチェックする
https://github.com/textlint-ja/textlint-rule-ja-no-successive-word

        "ja-no-successive-word": true,
        
### よくある日本語の誤用をチェックする
https://github.com/textlint-ja/textlint-rule-ja-no-abusage

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
