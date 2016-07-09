// LICENSE : MIT
"use strict";
var jtfRules = require("textlint-rule-preset-jtf-style").rules;
module.exports = {
    rules: {
        "sentence-length": require("textlint-rule-sentence-length"),
        "max-comma": require("textlint-rule-max-comma"),
        "max-ten": require("textlint-rule-max-ten"),
        "max-kanji-continuous-len": require("textlint-rule-max-kanji-continuous-len"),
        "no-mix-dearu-desumasu": require("textlint-rule-no-mix-dearu-desumasu"),
        "ja-no-mixed-period": require("textlint-rule-ja-no-mixed-period"),
        "arabic-kanji-numbers": jtfRules["2.2.2.算用数字と漢数字の使い分け"],
        "no-start-duplicated-conjunction": require("textlint-rule-no-start-duplicated-conjunction"),
        "no-doubled-conjunction": require("textlint-rule-no-doubled-conjunction"),
        "no-double-negative-ja": require("textlint-rule-no-double-negative-ja"),
        "no-doubled-joshi": require("textlint-rule-no-doubled-joshi"),
        "no-dropping-the-ra": require("textlint-rule-no-dropping-the-ra"),
        "no-exclamation-question-mark": require("textlint-rule-no-exclamation-question-mark"),
        "no-hankaku-kana": require("textlint-rule-no-hankaku-kana"),
        "ja-no-weak-phrase": require("textlint-rule-ja-no-weak-phrase"),
        "ja-no-successive-word": require("textlint-rule-ja-no-successive-word"),
        "ja-no-abusage": require("textlint-rule-ja-no-abusage")
    },
    rulesConfig: {
        // 1文の長さは90文字以下とする
        // https://github.com/azu/textlint-rule-sentence-length
        "sentence-length": {
            max: 90
        },
        // コンマは1文中に3つまで
        // https://github.com/azu/textlint-rule-max-comma
        "max-comma": {
            max: 3
        },
        // 読点は1文中に3つまで
        // https://github.com/azu/textlint-rule-max-ten
        "max-ten": {
            max: 3
        },
        // 連続できる最大の漢字長は5文字まで
        // 6文字以上の漢字は使用しない
        // https://github.com/azu/textlint-rule-max-kanji-continuous-len
        "max-kanji-continuous-len": {
            max: 5
        },
        // 数量を表現し、数を数えられるものは算用数字を使用します。
        // 任意の数に置き換えても通用する語句がこれに該当します。序数詞（「第～回」「～番目」「～回目」）も算用数字を使います。
        // 慣用的表現、熟語、概数、固有名詞、副詞など、漢数字を使用することが一般的な語句では漢数字を使います。
        // https://github.com/azu/textlint-rule-preset-JTF-style
        // https://www.jtf.jp/jp/style_guide/styleguide_top.html
        "arabic-kanji-numbers": true,
        // 「ですます調」、「である調」を統一します
        // 見出しは自動
        // 本文はですます調
        // 箇条書きはである調
        // https://github.com/azu/textlint-rule-no-mix-dearu-desumasu
        "no-mix-dearu-desumasu": {
            "preferInHeader": "",
            "preferInBody": "ですます",
            "preferInList": "である",
            "strict": true
        },
        // 文末には句点記号として。を使います
        // https://github.com/textlint-ja/textlint-rule-ja-no-mixed-period
        "ja-no-mixed-period": {
            "periodMark": "。"
        },
        // 二重否定は使用しない
        // https://github.com/azu/textlint-rule-no-double-negative-ja
        "no-double-negative-ja": true,
        // ら抜き言葉を使用しない
        // https://github.com/azu/textlint-rule-no-dropping-the-ra
        "no-dropping-the-ra": true,
        // 同じ表現から文を開始しすぎない
        // https://github.com/azu/textlint-rule-no-start-duplicated-conjunction
        "no-start-duplicated-conjunction": {
            "interval": 2
        },
        // 同じ接続詞を連続して使用しない
        // https://github.com/takahashim/textlint-rule-no-doubled-conjunction
        "no-doubled-conjunction": true,
        // 同じ助詞を連続して使用しない
        "no-doubled-joshi": {
            "min_interval": 1
        },
        // 感嘆符!！、疑問符?？を使用しない
        // https://github.com/azu/textlint-rule-no-exclamation-question-mark
        "no-exclamation-question-mark": true,
        // 半角カナを使用しない
        // https://github.com/azu/textlint-rule-no-hankaku-kana
        "no-hankaku-kana": true,
        // 〜かもしれない 等の弱い日本語表現の利用を使用しない
        // https://github.com/textlint-ja/textlint-rule-ja-no-weak-phrase
        "ja-no-weak-phrase": true,
        // 同一の単語を間違えて連続しているのをチェックする
        // https://github.com/textlint-ja/textlint-rule-ja-no-successive-word
        "ja-no-successive-word": true,
        // よくある日本語の誤用をチェックする
        // https://github.com/textlint-ja/textlint-rule-ja-no-abusage
        "ja-no-abusage": true
    }
};