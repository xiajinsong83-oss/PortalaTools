---
title: "文本对比 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费在线文本对比工具：逐行对比两份文本，查看新增、删除与未变更行。100% 在浏览器本地运行，无需上传。"
slug: text-diff
canonicalURL: "https://portalaser.cn/zh/tools/text-diff/"
showToc: false
---

文本对比是一款免费的在线工具，逐行比较两段文本并高亮显示具体变化。在左侧粘贴原版本、右侧粘贴修订版本，按 Compare，即可得到清晰的逐行结果：删除的行标记为 -，新增的行标记为 +，未变更的行不显示标记。还有一个小结告诉你新增、删除和未动多少行。

对比基于经典的最长公共子序列（LCS）算法，与专业 diff 工具相同的基础，因此输出最小化、易读而不嘈杂。适用于代码、文章、配置文件、JSON 转储和任何面向行的文本。

由于 diff 在你的浏览器本地计算，文本不会离开设备——不上传、不记录。粘贴两个版本，点击 Compare，用 Example 加载示例或用 Clear 重置。
{{< ad-unit >}}

<div class="tool-app" id="app-text-diff">
  <div class="tool-grid-2">
    <div class="tool-field">
      <label class="tool-label" for="text-diff-original">Original text</label>
      <textarea id="text-diff-original" class="tool-textarea" spellcheck="false" placeholder="Paste the original text here…"></textarea>
    </div>
    <div class="tool-field">
      <label class="tool-label" for="text-diff-changed">Changed text</label>
      <textarea id="text-diff-changed" class="tool-textarea" spellcheck="false" placeholder="Paste the changed text here…"></textarea>
    </div>
  </div>
  <div class="tool-actions">
    <button type="button" id="text-diff-btn-compare" class="tool-btn">Compare</button>
    <button type="button" id="text-diff-btn-example" class="tool-btn tool-btn-secondary">Example</button>
    <button type="button" id="text-diff-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="text-diff-output">Diff result</label>
    <pre id="text-diff-output" class="tool-output"></pre>
  </div>
  <p id="text-diff-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/text-diff.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "regex-tester" "case-converter" "word-counter" "markdown-previewer" >}}
