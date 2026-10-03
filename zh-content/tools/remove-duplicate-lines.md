---
title: "去除重复行 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费去除重复行工具：保留首次出现的行，支持忽略大小写与去除首尾空白。在浏览器中运行，无需上传、无需注册。"
slug: remove-duplicate-lines
canonicalURL: "https://portalaser.cn/zh/tools/remove-duplicate-lines/"
showToc: false
---

去除重复行是一款免费的在线清理工具，从列表、日志、导出和复制的数据中去除重复行。它保留每行第一次出现的位置，并准确告诉你移除了多少重复行。你可以选择匹配是否区分大小写，以及是否先忽略行首行尾的额外空白，因此需要时 `Paris` 和 `paris ` 会被视为同一条目。

整个过程在你的浏览器中运行。不上传文件，不向服务器发送文本，因此清理客户名单、URL 或私有导出数据时无需担心数据去向。

使用方法：把行粘贴到输入框，勾选需要的选项，点击 Remove Duplicates。清理后的列表显示在下方并附带移除数量，可 Copy Result 或完成后 Clear。
{{< ad-unit >}}

<div class="tool-app" id="app-remove-duplicate-lines">
  <div class="tool-field">
    <label class="tool-label" for="remove-duplicate-lines-input">Lines to clean (one per line)</label>
    <textarea id="remove-duplicate-lines-input" class="tool-textarea" spellcheck="false" placeholder="apple&#10;banana&#10;apple&#10;cherry"></textarea>
  </div>
  <div class="tool-field">
    <label><input type="checkbox" id="remove-duplicate-lines-case" /> Case-sensitive matching</label>
    <label><input type="checkbox" id="remove-duplicate-lines-trim" /> Trim whitespace before comparing</label>
  </div>
  <div class="tool-actions">
    <button type="button" id="remove-duplicate-lines-btn-run" class="tool-btn">Remove Duplicates</button>
    <button type="button" id="remove-duplicate-lines-btn-copy" class="tool-btn tool-btn-secondary">Copy Result</button>
    <button type="button" id="remove-duplicate-lines-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="remove-duplicate-lines-output">Cleaned output</label>
    <pre id="remove-duplicate-lines-output" class="tool-output"></pre>
  </div>
  <p id="remove-duplicate-lines-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/remove-duplicate-lines.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "text-line-sorter" "line-counter" "word-counter" "csv-viewer" >}}
