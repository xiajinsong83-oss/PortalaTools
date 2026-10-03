---
title: "JSON 字符串转义/反转义 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费在线 JSON 字符串转义工具：一键转义或还原引号、反斜杠与换行符。在浏览器中运行，无需上传。"
slug: json-string-escape
canonicalURL: "https://portalaser.cn/zh/tools/json-string-escape/"
showToc: false
---

JSON 字符串转义/反转义是一款免费的在线辅助工具，用于把原始文本转换为安全的 JSON 字符串值，或反向还原。把文本放进 JSON 时，引号、反斜杠和换行符等字符必须转义——手动操作很容易出错。本工具帮你完成：粘贴一句话即可转义为带 `"`、`\` 和 `
` 的安全形式，或粘贴已转义的值还原原始文本。

转换完全在你的浏览器中通过内置 JSON 引擎完成。你的字符串不会被上传或存储，因此可以放心处理 API 载荷片段和配置片段。

使用方法：把文本粘贴到输入框，点击 Escape 使其 JSON 安全，或点击 Unescape 解码。用 Copy Result 复制输出。
{{< ad-unit >}}

<div class="tool-app" id="app-json-string-escape">
  <div class="tool-field">
    <label class="tool-label" for="json-string-escape-input">Input string</label>
    <textarea id="json-string-escape-input" class="tool-textarea" spellcheck="false" placeholder='She said: "Hello" and pressed \'save\'.'></textarea>
  </div>
  <div class="tool-actions">
    <button type="button" id="json-string-escape-btn-escape" class="tool-btn">Escape</button>
    <button type="button" id="json-string-escape-btn-unescape" class="tool-btn tool-btn-secondary">Unescape</button>
    <button type="button" id="json-string-escape-btn-copy" class="tool-btn tool-btn-secondary">Copy Result</button>
    <button type="button" id="json-string-escape-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="json-string-escape-output">Output</label>
    <pre id="json-string-escape-output" class="tool-output"></pre>
  </div>
  <p id="json-string-escape-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/json-string-escape.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "json-formatter" "json-minifier" "html-entity-encoder" "base64-encoder" >}}
