"use strict";
const { moduleInterop } = require("@textlint/module-interop");
const jtfRules = moduleInterop(require("textlint-rule-preset-jtf-style")).rules;
module.exports = {
    rules: {
        "sentence-length": moduleInterop(require("textlint-rule-sentence-length")),
        "max-comma": moduleInterop(require("textlint-rule-max-comma")),
        "max-ten": moduleInterop(require("textlint-rule-max-ten")),
        "max-kanji-continuous-len": moduleInterop(require("textlint-rule-max-kanji-continuous-len")),
        "no-mix-dearu-desumasu": moduleInterop(require("textlint-rule-no-mix-dearu-desumasu")),
        "ja-no-mixed-period": moduleInterop(require("textlint-rule-ja-no-mixed-period")),
        "arabic-kanji-numbers": jtfRules["2.2.2.算用数字と漢数字の使い分け"],
        "no-doubled-conjunction": moduleInterop(require("textlint-rule-no-doubled-conjunction")),
        "no-doubled-conjunctive-particle-ga": moduleInterop(require("textlint-rule-no-doubled-conjunctive-particle-ga")),
        "no-double-negative-ja": moduleInterop(require("textlint-rule-no-double-negative-ja")),
        "no-doubled-joshi": moduleInterop(require("textlint-rule-no-doubled-joshi")),
        "no-dropping-the-ra": moduleInterop(require("textlint-rule-no-dropping-the-ra")),
        "no-nfd": moduleInterop(require("textlint-rule-no-nfd")),
        "no-exclamation-question-mark": moduleInterop(require("textlint-rule-no-exclamation-question-mark")),
        "no-hankaku-kana": moduleInterop(require("textlint-rule-no-hankaku-kana")),
        "no-invalid-control-character": moduleInterop(require("@textlint-rule/textlint-rule-no-invalid-control-character")),
        "ja-no-weak-phrase": moduleInterop(require("textlint-rule-ja-no-weak-phrase")),
        "ja-no-successive-word": moduleInterop(require("textlint-rule-ja-no-successive-word")),
        "ja-no-abusage": moduleInterop(require("textlint-rule-ja-no-abusage")),
        "ja-no-redundant-expression": moduleInterop(require("textlint-rule-ja-no-redundant-expression")),
        "ja-unnatural-alphabet": moduleInterop(require("textlint-rule-ja-unnatural-alphabet")),
        "no-unmatched-pair": moduleInterop(require("@textlint-rule/textlint-rule-no-unmatched-pair")),
        "no-zero-width-spaces": moduleInterop(require("textlint-rule-no-zero-width-spaces"))
    },
    rulesConfig: {
        // # 1文の長さは100文字以下とする
        // https://github.com/azu/textlint-rule-sentence-length
        "sentence-length": {
            max: 100
        },
        // # コンマは1文中に3つまで
        // https://github.com/azu/textlint-rule-max-comma
        "max-comma": {
            max: 3
        },
        // # 読点は1文中に3つまで
        // https://github.com/azu/textlint-rule-max-ten
        "max-ten": {
            max: 3
        },
        // # 連続できる最大の漢字長は6文字まで
        // 漢字が連続していると読みにくさにつながります。
        // https://github.com/azu/textlint-rule-max-kanji-continuous-len
        "max-kanji-continuous-len": {
            max: 6
        },
        // # 漢数字と算用数字を使い分けます
        // 数量を表現し、数を数えられるものは算用数字を使用します。
        // 任意の数に置き換えても通用する語句がこれに該当します。
        // 序数詞（「第～回」「～番目」「～回目」）も算用数字を使います。
        // 慣用的表現、熟語、概数、固有名詞、副詞など、漢数字を使用することが一般的な語句では漢数字を使います。
        // https://github.com/azu/textlint-rule-preset-JTF-style
        // https://www.jtf.jp/jp/style_guide/styleguide_top.html
        "arabic-kanji-numbers": true,
        // # 「ですます調」、「である調」を統一します
        // 見出しは自動
        // 本文はですます調
        // 箇条書きはである調
        // https://github.com/azu/textlint-rule-no-mix-dearu-desumasu
        "no-mix-dearu-desumasu": {
            "preferInHeader": "",
            "preferInBody": "ですます",
            "preferInList": "である",
            "strict": false
        },
        // # 文末の句点記号として「。」を使います
        // https://github.com/textlint-ja/textlint-rule-ja-no-mixed-period
        "ja-no-mixed-period": {
            "periodMark": "。"
        },
        // # 二重否定は使用しない
        // https://github.com/azu/textlint-rule-no-double-negative-ja
        "no-double-negative-ja": true,
        // # ら抜き言葉を使用しない
        // https://github.com/azu/textlint-rule-no-dropping-the-ra
        "no-dropping-the-ra": true,
        // # 逆接の接続助詞「が」を連続して使用しない
        // 逆接の接続助詞「が」は、特に否定の意味ではなくても安易に使われてしまいがちです。
        // 同一文中に複数回出現していないかどうかをチェックします。
        // https://github.com/takahashim/textlint-rule-no-doubled-conjunctive-particle-ga
        "no-doubled-conjunctive-particle-ga": true,
        // # 同じ接続詞を連続して使用しない
        // https://github.com/takahashim/textlint-rule-no-doubled-conjunction
        "no-doubled-conjunction": true,
        // # 同じ助詞を連続して使用しない
        "no-doubled-joshi": {
            "min_interval": 1
        },
        // # UTF8-MAC 濁点を使用しない
        // 文章中にUTF8-MAC 濁点は不要です。
        // https://github.com/azu/textlint-rule-no-nfd
        "no-nfd": true,
        // # 不必要な制御文字を使用しない
        // 改行やタブ以外の一般的な文章にはでてこない不自然な制御文字が入るのを防止します。
        // https://github.com/textlint-rule/textlint-rule-no-invalid-control-character
        "no-invalid-control-character": true,
        // # ゼロ幅スペースの検出
        // https://github.com/textlint-rule/textlint-rule-no-zero-width-spaces
        "no-zero-width-spaces": true,
        // # 感嘆符!！、疑問符?？を使用しない
        // https://github.com/azu/textlint-rule-no-exclamation-question-mark
        "no-exclamation-question-mark": true,
        // # 半角カナを使用しない
        // https://github.com/azu/textlint-rule-no-hankaku-kana
        "no-hankaku-kana": true,
        // # 弱い日本語表現の利用を使用しない
        // 〜かもしれない 等の弱い表現を使用しない
        // https://github.com/textlint-ja/textlint-rule-ja-no-weak-phrase
        "ja-no-weak-phrase": true,
        // # 同一の単語を間違えて連続しているのをチェックする
        // https://github.com/textlint-ja/textlint-rule-ja-no-successive-word
        "ja-no-successive-word": true,
        // # よくある日本語の誤用をチェックする
        // https://github.com/textlint-ja/textlint-rule-ja-no-abusage
        "ja-no-abusage": true,
        // # 冗長な表現をチェックする
        // https://github.com/textlint-ja/textlint-rule-ja-no-redundant-expression
        "ja-no-redundant-expression": true,
        // # 入力ミスで発生する不自然なアルファベットをチェックする
        // https://github.com/textlint-ja/textlint-rule-ja-unnatural-alphabet
        "ja-unnatural-alphabet": true,
        // # 対になっていない括弧をチェックする
        // https://github.com/textlint-rule/textlint-rule-no-unmatched-pair
        "no-unmatched-pair": true
    }
};
