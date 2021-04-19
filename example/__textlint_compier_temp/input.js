// Generated webworker code by textlint-script-compiler
import { TextlintKernel } from "@textlint/kernel";
import { moduleInterop } from "@textlint/module-interop";
import { presetToKernelRules } from "@textlint/runtime-helper"
import { parseOptionsFromConfig } from "@textlint/config-partial-parser"
const kernel = new TextlintKernel();
const presetRules = [
    presetToKernelRules(moduleInterop(require('textlint-rule-preset-ja-technical-writing')), 'preset-ja-technical-writing')
].flat();
const rules = [];
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
const allRules = rules.concat(presetRules);
const config = {
    rules: allRules,
    filterRules: filterRules,
    plugins: plugins
};
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
