---
title: "正则测试器 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费在线正则测试器：用 g/i/m/s/u 标志测试正则与字符串，查看每个匹配及索引。在浏览器中运行，无需上传。"
slug: regex-tester
canonicalURL: "https://portalaser.cn/zh/tools/regex-tester/"
showToc: false
---

正则测试器是一款免费的在线工具，让你编写正则表达式并立即查看它在示例字符串上的表现。输入模式，选择标志，粘贴要搜索的文本，工具会列出每个匹配的子串及其在字符串中的起始位置，并给出总匹配数。用这种方式迭代模式比反复编辑代码运行快得多。

标志 g、i、m、s 和 u 以简单复选框形式提供，无需记忆标志语法即可切换。如果模式无效——例如未闭合的括号组或错误的量词——工具会清空结果并显示精确的语法错误，而不是静默失败。

一切都发生在你的浏览器本地。测试字符串不会被发送到任何地方，因此你可以放心地针对真实私有数据尝试模式。
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
