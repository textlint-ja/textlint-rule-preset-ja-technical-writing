const assert = require("assert");
const rules = require("../lib/textlint-rule-preset-ja-technical-writing").rules;
const rulesConfig = require("../lib/textlint-rule-preset-ja-technical-writing").rulesConfig;
describe("textlint-rule-preset-ja-technical-writing", () => {
  it("not missing key", () => {
    const ruleKeys = Object.keys(rules).sort();
    const ruleConfigKeys = Object.keys(rulesConfig).sort();
    assert.deepEqual(ruleKeys, ruleConfigKeys);
  });
});
