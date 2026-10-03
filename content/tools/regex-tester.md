---
title: "Regex Tester - Free Online Tool"
date: 2026-10-02
lastmod: 2026-10-02
description: "Free online regex tester. Test a pattern with g i m s u flags against a string and see every match with its index. Runs in your browser - no upload."
slug: regex-tester
canonicalURL: "https://portalaser.cn/tools/regex-tester/"
showToc: false
---

**Regex Tester** is a free online tool that lets you write a regular expression and instantly see how it behaves against a sample string. Enter a pattern, pick your flags, paste the text you want to search, and the tool lists every matched substring together with its starting position in the string, plus a total match count. Iterating on a pattern this way is far faster than editing code and running it repeatedly.

The flags *g*, *i*, *m*, *s* and *u* are available as simple checkboxes so you can toggle them without memorizing flag syntax. If your pattern is invalid — an unclosed group or a bad quantifier, for example — the tool clears the results and shows a precise syntax error instead of failing silently.

Everything happens locally in your browser. Your test string is never sent anywhere, so you can safely try patterns against real private data.

{{< ad-unit >}}

<div class="tool-app" id="app-regex-tester">
  <div class="tool-field">
    <label class="tool-label" for="regex-tester-pattern">Regular Expression</label>
    <input type="text" id="regex-tester-pattern" class="tool-input" spellcheck="false" placeholder="e.g. \b\w+@\w+\.\w+\b">
    <div class="tool-actions" style="margin-top:6px;">
      <label class="tool-hint" style="margin-right:10px;"><input type="checkbox" id="regex-tester-flag-g" checked> g (global)</label>
      <label class="tool-hint" style="margin-right:10px;"><input type="checkbox" id="regex-tester-flag-i"> i (ignore case)</label>
      <label class="tool-hint" style="margin-right:10px;"><input type="checkbox" id="regex-tester-flag-m"> m (multiline)</label>
      <label class="tool-hint" style="margin-right:10px;"><input type="checkbox" id="regex-tester-flag-s"> s (dotAll)</label>
      <label class="tool-hint"><input type="checkbox" id="regex-tester-flag-u"> u (unicode)</label>
    </div>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="regex-tester-input">Test String</label>
    <textarea id="regex-tester-input" class="tool-textarea" spellcheck="false" placeholder="Paste the text to search here…"></textarea>
  </div>
  <div class="tool-actions">
    <button type="button" id="regex-tester-btn-test" class="tool-btn">Run Test</button>
    <button type="button" id="regex-tester-btn-example" class="tool-btn tool-btn-secondary">Example</button>
    <button type="button" id="regex-tester-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="regex-tester-output">Matches</label>
    <pre id="regex-tester-output" class="tool-output"></pre>
  </div>
  <p id="regex-tester-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/regex-tester.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "text-diff" "case-converter" "whitespace-remover" "text-line-sorter" >}}
