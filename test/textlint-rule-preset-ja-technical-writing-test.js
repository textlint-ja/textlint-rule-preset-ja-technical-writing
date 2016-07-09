// LICENSE : MIT
"use strict";
const assert = require("power-assert");
const rules = require("../lib/textlint-rule-preset-ja-technical-writing").rules;
const rulesConfig = require("../lib/textlint-rule-preset-ja-technical-writing").rulesConfig;
describe("textlint-rule-preset-ja-technical-writing", function() {
    it("not missing key", function() {
        const ruleKeys = Object.keys(rules).sort();
        const ruleConfigKeys = Object.keys(rulesConfig).sort();
        assert.deepEqual(ruleKeys, ruleConfigKeys);
    });
});