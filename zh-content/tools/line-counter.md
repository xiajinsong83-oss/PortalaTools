---
title: "行数统计 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费在线行数统计工具：即时统计总行数、非空行数与字符数，适合代码与清单。在浏览器中运行，无需上传。"
slug: line-counter
canonicalURL: "https://portalaser.cn/zh/tools/line-counter/"
showToc: false
---

行数统计是一款免费的在线工具，在你输入时统计文本中的行数。它一眼显示总行数、实际包含内容的行数（忽略空行）和总字符数。适合检查日志文件、源代码、单词列表、CSV 行以及任何空行有意义的、不应重复计数的数据。

一切都在你的浏览器本地运行。粘贴或编辑文本后，数字就在你的机器上实时更新——内容不会被上传、发送到服务器或保存到任何地方，处理代码片段和私人笔记都很安全。

使用方法：把文本粘贴到输入框，读取上方统计。空行计入总行数，但不计入非空行数。按 Clear 重新开始。
{{< ad-unit >}}

<div class="tool-app" id="app-line-counter">
  <div class="tool-field">
    <label class="tool-label" for="line-counter-input">Type or paste your text</label>
    <textarea id="line-counter-input" class="tool-textarea" spellcheck="false" placeholder="line one&#10;line two&#10;&#10;line four"></textarea>
  </div>
  <div class="tool-actions">
    <button type="button" id="line-counter-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-grid-2">
    <p>Total lines: <strong id="line-counter-lines">0</strong></p>
    <p>Non-empty lines: <strong id="line-counter-nonempty">0</strong></p>
    <p>Characters: <strong id="line-counter-chars">0</strong></p>
  </div>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/line-counter.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "word-counter" "text-line-sorter" "remove-duplicate-lines" "whitespace-remover" >}}
