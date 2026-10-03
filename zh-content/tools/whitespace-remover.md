---
title: "去除空白字符 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费去除空白工具：一键删除文本中的多余空格、制表符与空行。100% 在浏览器本地运行，无需上传、无需注册。"
slug: whitespace-remover
canonicalURL: "https://portalaser.cn/zh/tools/whitespace-remover/"
showToc: false
---

去除空白是一款免费的在线清理工具，修复复制文本中的怪异空格。它可以去除整块文本中的每个空格、制表符和换行，把连续多个空格折叠为单个空格，修剪每一行的首尾，或只清理整段文本的外缘。从 PDF、电子表格或网站粘贴后出现双空格、多余缩进和尾部空隙时非常有用。

清理完全在你的浏览器中完成，因此你修复的文本不会触及服务器，也不会被存储或传输。

使用方法：把文本粘贴到输入框，点击与你需求匹配的按钮——Remove All Whitespace、Collapse Spaces、Trim Each Line 或 Trim Edges。结果显示在下方，可直接 Copy 复制。
{{< ad-unit >}}

<div class="tool-app" id="app-whitespace-remover">
  <div class="tool-field">
    <label class="tool-label" for="whitespace-remover-input">Text to clean</label>
    <textarea id="whitespace-remover-input" class="tool-textarea" spellcheck="false" placeholder="  messy   text   with    extra spaces  "></textarea>
  </div>
  <div class="tool-actions">
    <button type="button" id="whitespace-remover-btn-all" class="tool-btn">Remove All Whitespace</button>
    <button type="button" id="whitespace-remover-btn-collapse" class="tool-btn tool-btn-secondary">Collapse Spaces</button>
    <button type="button" id="whitespace-remover-btn-trimlines" class="tool-btn tool-btn-secondary">Trim Each Line</button>
    <button type="button" id="whitespace-remover-btn-trim" class="tool-btn tool-btn-secondary">Trim Edges</button>
    <button type="button" id="whitespace-remover-btn-copy" class="tool-btn tool-btn-secondary">Copy Result</button>
    <button type="button" id="whitespace-remover-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="whitespace-remover-output">Cleaned output</label>
    <pre id="whitespace-remover-output" class="tool-output"></pre>
  </div>
  <p id="whitespace-remover-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/whitespace-remover.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "text-line-sorter" "case-converter" "word-counter" "html-entity-encoder" >}}
