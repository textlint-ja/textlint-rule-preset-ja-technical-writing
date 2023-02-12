// Generated webworker code by textlint-script-compiler
import { TextlintKernel } from "@textlint/kernel";
import { moduleInterop } from "@textlint/module-interop";
import { parseOptionsFromConfig } from "@textlint/config-partial-parser"
const kernel = new TextlintKernel();
const rules = [
    {
        "ruleId": "ja-technical-writing/sentence-length",
        "rule": moduleInterop(require('textlint-rule-preset-ja-technical-writing').rules['sentence-length']),
        "options": {
            "max": 100
        }
    },
    {
        "ruleId": "ja-technical-writing/max-comma",
        "rule": moduleInterop(require('textlint-rule-preset-ja-technical-writing').rules['max-comma']),
        "options": {
            "max": 3
        }
    },
    {
        "ruleId": "ja-technical-writing/max-ten",
        "rule": moduleInterop(require('textlint-rule-preset-ja-technical-writing').rules['max-ten']),
        "options": {
            "max": 3
        }
    },
    {
        "ruleId": "ja-technical-writing/max-kanji-continuous-len",
        "rule": moduleInterop(require('textlint-rule-preset-ja-technical-writing').rules['max-kanji-continuous-len']),
        "options": {
            "max": 6
        }
    },
    {
        "ruleId": "ja-technical-writing/no-mix-dearu-desumasu",
        "rule": moduleInterop(require('textlint-rule-preset-ja-technical-writing').rules['no-mix-dearu-desumasu']),
        "options": {
            "preferInHeader": "",
            "preferInBody": "ですます",
            "preferInList": "である",
            "strict": false
        }
    },
    {
        "ruleId": "ja-technical-writing/ja-no-mixed-period",
        "rule": moduleInterop(require('textlint-rule-preset-ja-technical-writing').rules['ja-no-mixed-period']),
        "options": {
            "periodMark": "。"
        }
    },
    {
        "ruleId": "ja-technical-writing/arabic-kanji-numbers",
        "rule": moduleInterop(require('textlint-rule-preset-ja-technical-writing').rules['arabic-kanji-numbers']),
        "options": true
    },
    {
        "ruleId": "ja-technical-writing/no-doubled-conjunction",
        "rule": moduleInterop(require('textlint-rule-preset-ja-technical-writing').rules['no-doubled-conjunction']),
        "options": true
    },
    {
        "ruleId": "ja-technical-writing/no-doubled-conjunctive-particle-ga",
        "rule": moduleInterop(require('textlint-rule-preset-ja-technical-writing').rules['no-doubled-conjunctive-particle-ga']),
        "options": true
    },
    {
        "ruleId": "ja-technical-writing/no-double-negative-ja",
        "rule": moduleInterop(require('textlint-rule-preset-ja-technical-writing').rules['no-double-negative-ja']),
        "options": true
    },
    {
        "ruleId": "ja-technical-writing/no-doubled-joshi",
        "rule": moduleInterop(require('textlint-rule-preset-ja-technical-writing').rules['no-doubled-joshi']),
        "options": {
            "min_interval": 1
        }
    },
    {
        "ruleId": "ja-technical-writing/no-dropping-the-ra",
        "rule": moduleInterop(require('textlint-rule-preset-ja-technical-writing').rules['no-dropping-the-ra']),
        "options": true
    },
    {
        "ruleId": "ja-technical-writing/no-nfd",
        "rule": moduleInterop(require('textlint-rule-preset-ja-technical-writing').rules['no-nfd']),
        "options": true
    },
    {
        "ruleId": "ja-technical-writing/no-exclamation-question-mark",
        "rule": moduleInterop(require('textlint-rule-preset-ja-technical-writing').rules['no-exclamation-question-mark']),
        "options": true
    },
    {
        "ruleId": "ja-technical-writing/no-hankaku-kana",
        "rule": moduleInterop(require('textlint-rule-preset-ja-technical-writing').rules['no-hankaku-kana']),
        "options": true
    },
    {
        "ruleId": "ja-technical-writing/no-invalid-control-character",
        "rule": moduleInterop(require('textlint-rule-preset-ja-technical-writing').rules['no-invalid-control-character']),
        "options": true
    },
    {
        "ruleId": "ja-technical-writing/ja-no-weak-phrase",
        "rule": moduleInterop(require('textlint-rule-preset-ja-technical-writing').rules['ja-no-weak-phrase']),
        "options": true
    },
    {
        "ruleId": "ja-technical-writing/ja-no-successive-word",
        "rule": moduleInterop(require('textlint-rule-preset-ja-technical-writing').rules['ja-no-successive-word']),
        "options": true
    },
    {
        "ruleId": "ja-technical-writing/ja-no-abusage",
        "rule": moduleInterop(require('textlint-rule-preset-ja-technical-writing').rules['ja-no-abusage']),
        "options": true
    },
    {
        "ruleId": "ja-technical-writing/ja-no-redundant-expression",
        "rule": moduleInterop(require('textlint-rule-preset-ja-technical-writing').rules['ja-no-redundant-expression']),
        "options": true
    },
    {
        "ruleId": "ja-technical-writing/ja-unnatural-alphabet",
        "rule": moduleInterop(require('textlint-rule-preset-ja-technical-writing').rules['ja-unnatural-alphabet']),
        "options": true
    },
    {
        "ruleId": "ja-technical-writing/no-unmatched-pair",
        "rule": moduleInterop(require('textlint-rule-preset-ja-technical-writing').rules['no-unmatched-pair']),
        "options": true
    },
    {
        "ruleId": "ja-technical-writing/no-zero-width-spaces",
        "rule": moduleInterop(require('textlint-rule-preset-ja-technical-writing').rules['no-zero-width-spaces']),
        "options": true
    }
];
const filterRules = [
    {
        "ruleId": "comments",
        "rule": moduleInterop(require('textlint-filter-rule-comments')),
        "options": true
    }
];
const plugins = [
    {
        "pluginId": "@textlint/text",
        "plugin": moduleInterop(require('@textlint/textlint-plugin-text')),
        "options": true
    },
    {
        "pluginId": "@textlint/markdown",
        "plugin": moduleInterop(require('@textlint/textlint-plugin-markdown')),
        "options": true
    }
];
const config = {
    rules: rules,
    filterRules: filterRules,
    plugins: plugins
};
// merge config
const assignConfig = (textlintrc) => {
    const userDefinedConfig = parseOptionsFromConfig(textlintrc);
    if (userDefinedConfig.rules) {
        config.rules = config.rules.map(rule => {
            const override = userDefinedConfig.rules.find(o => o.ruleId === rule.ruleId);
            return { ...rule, ...override };
        });
    }
    if (userDefinedConfig.filterRules) {
        config.filterRules = config.filterRules.map(rule => {
            const override = userDefinedConfig.filterRules.find(o => o.ruleId === rule.ruleId);
            return { ...rule, ...override };
        });
    }
    if (userDefinedConfig.plugins) {
        config.plugins = config.plugins.map(rule => {
            const override = userDefinedConfig.plugins.find(o => o.pluginId === rule.pluginId);
            return { ...rule, ...override };
        });
    }
};
self.addEventListener('message', (event) => {
    const data = event.data;
    const rules = data.ruleId === undefined
        ? config.rules
        : config.rules.filter(rule => rule.ruleId === data.ruleId);
    switch (data.command) {
        case "merge-config":
            return assignConfig(data.textlintrc);
        case "lint":
            return kernel.lintText(data.text, {
                rules: rules,
                filterRules: config.filterRules,
                plugins: config.plugins,
                filePath: "/path/to/README" + data.ext,
                ext: data.ext,
            }).then(result => {
                return self.postMessage({
                    command: "lint:result",
                    result
                });
            });
        case "fix":
            return kernel.fixText(data.text, {
                rules: rules,
                filterRules: config.filterRules,
                plugins: config.plugins,
                filePath: "/path/to/README" + data.ext,
                ext: data.ext,
            }).then(result => {
                return self.postMessage({
                    command: "fix:result",
                    result
                });
            });
        default:
            console.log("Unknown command: " + data.command);
    }
});
// ====
self.postMessage({
    command: "init",
    metadata: process.env.TEXTLINT_SCRIPT_METADATA
});
