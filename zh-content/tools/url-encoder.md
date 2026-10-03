---
title: "URL 编码/解码 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费在线 URL 编码解码工具：对 URL 进行百分号编码与解码，完整支持 UTF-8。100% 在浏览器本地运行，无需上传、隐私安全。"
slug: url-encoder
canonicalURL: "https://portalaser.cn/zh/tools/url-encoder/"
showToc: false
---

URL 编码/解码是一款免费的在线工具，用于把文本转换为 URL 安全的百分号编码形式，或反向还原。URL 只能包含有限的 ASCII 字符集，因此空格、重音、表情符号以及 &、=、? 和 # 等符号必须先转义为 %XX 序列，才能在查询串或路径中安全传输。本工具使用标准 encodeURIComponent 规则处理转义，并按需还原。

这是检查或构建查询参数、调试编码后的重定向、或为 API 调用准备字符串的快捷方式，无需猜测哪些字符需要转义。解码会捕获格式错误的百分号序列并报告，而不是产生乱码。

所有处理都在你的浏览器中完成——不会向服务器发送任何内容。粘贴文本，点击 Encode 使其 URL 安全或 Decode 读取编码字符串，然后 Copy Result 使用输出。Example 加载示例，Clear 重置输入框。
{{< ad-unit >}}

<div class="tool-app" id="app-url-encoder">
  <div class="tool-field">
    <label class="tool-label" for="url-encoder-input">Text or URL Input</label>
    <textarea id="url-encoder-input" class="tool-textarea" spellcheck="false" placeholder="Type text or a percent-encoded URL here…"></textarea>
  </div>
  <div class="tool-actions">
    <button type="button" id="url-encoder-btn-encode" class="tool-btn">Encode (encodeURIComponent)</button>
    <button type="button" id="url-encoder-btn-decode" class="tool-btn tool-btn-secondary">Decode (decodeURIComponent)</button>
    <button type="button" id="url-encoder-btn-copy" class="tool-btn tool-btn-secondary">Copy Result</button>
    <button type="button" id="url-encoder-btn-example" class="tool-btn tool-btn-secondary">Example</button>
    <button type="button" id="url-encoder-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="url-encoder-output">Output</label>
    <pre id="url-encoder-output" class="tool-output"></pre>
  </div>
  <p id="url-encoder-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/url-encoder.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "base64-encoder" "html-entity-encoder" "slug-generator" "json-string-escape" >}}
