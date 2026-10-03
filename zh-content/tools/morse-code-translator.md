---
title: "摩斯密码翻译器 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费在线摩斯密码翻译器：完整 ITU 字母表、数字与标点，文本与摩斯互转。在浏览器中运行，无需注册。"
slug: morse-code-translator
canonicalURL: "https://portalaser.cn/zh/tools/morse-code-translator/"
showToc: false
---

摩斯密码翻译器是一款免费的在线工具，在纯文本与摩斯密码之间互转。它使用标准 ITU 字母表，覆盖 A 到 Z 全部字母、0 到 9 数字和最常见的标点符号。在摩斯输出中，字母之间用空格分隔，单词之间用斜杠分隔，因此结果明确易读。

无论你是在学习摩斯电码、发送隐藏消息，还是好奇 “SOS” 长什么样，翻译器都支持双向转换。输入文本点击 Text to Morse，或粘贴点划点击 Morse to Text 解码。Copy 把输出复制到剪贴板。

翻译完全在你的浏览器中运行，没有任何网络请求，因此输入的内容不会被上传或存储。试试 “SOS”，看看经典求救信号渲染为 `... --- ...`。
{{< ad-unit >}}

<div class="tool-app" id="app-morse-code-translator">
  <div class="tool-field">
    <label class="tool-label" for="morse-code-translator-input">Text or Morse input</label>
    <textarea id="morse-code-translator-input" class="tool-textarea" spellcheck="false" placeholder="Type text (e.g. SOS) or Morse (e.g. ... --- ...) here…"></textarea>
  </div>
  <div class="tool-actions">
    <button type="button" id="morse-code-translator-btn-to-morse" class="tool-btn">Text to Morse</button>
    <button type="button" id="morse-code-translator-btn-to-text" class="tool-btn tool-btn-secondary">Morse to Text</button>
    <button type="button" id="morse-code-translator-btn-copy" class="tool-btn tool-btn-secondary">Copy Result</button>
    <button type="button" id="morse-code-translator-btn-example" class="tool-btn tool-btn-secondary">Example</button>
    <button type="button" id="morse-code-translator-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="morse-code-translator-output">Output</label>
    <pre id="morse-code-translator-output" class="tool-output"></pre>
  </div>
  <p id="morse-code-translator-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/morse-code-translator.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "base64-encoder" "html-entity-encoder" "md5-hash-generator" "case-converter" >}}
