---
title: "文本行排序 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费在线文本行排序工具：按 A-Z、Z-A、自然顺序、反转或随机排序，即时完成。100% 在浏览器本地运行，无需上传、无需注册。"
slug: text-line-sorter
canonicalURL: "https://portalaser.cn/zh/tools/text-line-sorter/"
showToc: false
---

文本行排序是一款免费的在线工具，一键重新排列任意列表的行。从五种模式中选择：字母 A 到 Z、字母 Z 到 A、自然顺序（item2 排在 item10 之前）、当前顺序的简单反转，或随机打乱。适用于名字、单词、URL、标签以及你粘贴的任何换行分隔列表。

排序在你的浏览器本地完成——不上传、不记录，无论列表里是用户名、产品还是工作笔记，都保持私有。

使用方法：把列表粘贴到输入框，从下拉框选择模式，点击 Sort。结果出现在下方，可直接 Copy Result。用 Clear 开始新列表。
{{< ad-unit >}}

<div class="tool-app" id="app-text-line-sorter">
  <div class="tool-field">
    <label class="tool-label" for="text-line-sorter-input">Lines to sort (one per line)</label>
    <textarea id="text-line-sorter-input" class="tool-textarea" spellcheck="false" placeholder="banana&#10;apple&#10;cherry"></textarea>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="text-line-sorter-mode">Sort mode</label>
    <select id="text-line-sorter-mode" class="tool-input">
      <option value="az">A to Z (alphabetical)</option>
      <option value="za">Z to A (reverse alphabetical)</option>
      <option value="natural">Natural order (numbers-aware)</option>
      <option value="reverse">Reverse current order</option>
      <option value="shuffle">Shuffle randomly</option>
    </select>
  </div>
  <div class="tool-actions">
    <button type="button" id="text-line-sorter-btn-run" class="tool-btn">Sort Lines</button>
    <button type="button" id="text-line-sorter-btn-copy" class="tool-btn tool-btn-secondary">Copy Result</button>
    <button type="button" id="text-line-sorter-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="text-line-sorter-output">Sorted output</label>
    <pre id="text-line-sorter-output" class="tool-output"></pre>
  </div>
  <p id="text-line-sorter-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/text-line-sorter.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "remove-duplicate-lines" "line-counter" "whitespace-remover" "case-converter" >}}
