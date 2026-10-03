---
title: "HTML 实体编码/解码 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费 HTML 实体编码解码工具：一键转义与反转义 &、尖括号、引号。100% 在浏览器本地运行，无需上传、无需注册。"
slug: html-entity-encoder
canonicalURL: "https://portalaser.cn/zh/tools/html-entity-encoder/"
showToc: false
---

HTML 实体编码/解码是一款免费的在线工具，可在原始文本与 HTML 实体之间双向转换。按 Encode 可转义会破坏标记的字符——`&`、`<`、`>`、`"` 和 `'`——为 &amp;、&lt;、&gt; 等安全实体形式。按 Decode 可反向转换，把命名实体（&nbsp;、&quot;、&lt;）和数字实体（&#123;、&#x7B;）还原为它们代表的字符。

写博客代码示例、为模板转义文本，或调试被双重转义的标记时非常有用。

转换完全在本地进行。你的文本不会被上传或存储。

使用方法：粘贴或输入文本，点击 Encode 或 Decode，然后 Copy Result 获取输出。Example 加载包含全部五个特殊字符的示例，Clear 重置输入框。
{{< ad-unit >}}

<div class="tool-app" id="app-html-entity-encoder">
  <div class="tool-field">
    <label class="tool-label" for="html-entity-encoder-input">Text Input</label>
    <textarea id="html-entity-encoder-input" class="tool-textarea" spellcheck="false" placeholder="Type or paste text here…"></textarea>
  </div>
  <div class="tool-actions">
    <button type="button" id="html-entity-encoder-btn-encode" class="tool-btn">Encode to Entities</button>
    <button type="button" id="html-entity-encoder-btn-decode" class="tool-btn tool-btn-secondary">Decode Entities</button>
    <button type="button" id="html-entity-encoder-btn-copy" class="tool-btn tool-btn-secondary">Copy Result</button>
    <button type="button" id="html-entity-encoder-btn-example" class="tool-btn tool-btn-secondary">Example</button>
    <button type="button" id="html-entity-encoder-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="html-entity-encoder-output">Output</label>
    <pre id="html-entity-encoder-output" class="tool-output"></pre>
  </div>
  <p id="html-entity-encoder-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/html-entity-encoder.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "url-encoder" "base64-encoder" "json-string-escape" "markdown-previewer" >}}
