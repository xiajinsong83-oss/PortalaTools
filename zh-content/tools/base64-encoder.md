---
title: "Base64 编码/解码 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费在线 Base64 编码解码器，完整支持 UTF-8。文本与 Base64 互转，即时在浏览器中完成，无需上传。"
slug: base64-encoder
canonicalURL: "https://portalaser.cn/zh/tools/base64-encoder/"
showToc: false
---

Base64 编码/解码是一款免费的在线工具，用于在纯文本与 Base64 之间互相转换。Base64 是随处可见的标准编码——API 认证头、JWT 载荷、邮件附件、data URI 以及许多配置格式都在使用它。使用本工具可以一键把消息编码为 Base64，也可以把已有的 Base64 字符串解码为可读文本，并正确处理表情符号和非拉丁文字符的 Unicode / UTF-8 编码。

隐私内置：转换完全在你的浏览器中通过 Web Encoding API 完成。你的输入永远不会经过网络、不会触及服务器，也不会被存储——因此用它检查令牌、密钥和任何敏感字符串都很安全。

使用方法：在输入区粘贴文本或 Base64 字符串，点击 Encode 把文本转为 Base64，或点击 Decode 把 Base64 转回文本。Copy Result 把结果复制到剪贴板，Example 加载示例，让你立即体验双向转换。
{{< ad-unit >}}

<div class="tool-app" id="app-base64-encoder">
  <div class="tool-field">
    <label class="tool-label" for="base64-encoder-input">Text or Base64 Input</label>
    <textarea id="base64-encoder-input" class="tool-textarea" spellcheck="false" placeholder="Type or paste text here…"></textarea>
  </div>
  <div class="tool-actions">
    <button type="button" id="base64-encoder-btn-encode" class="tool-btn">Encode to Base64</button>
    <button type="button" id="base64-encoder-btn-decode" class="tool-btn tool-btn-secondary">Decode from Base64</button>
    <button type="button" id="base64-encoder-btn-copy" class="tool-btn tool-btn-secondary">Copy Result</button>
    <button type="button" id="base64-encoder-btn-example" class="tool-btn tool-btn-secondary">Example</button>
    <button type="button" id="base64-encoder-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="base64-encoder-output">Output</label>
    <pre id="base64-encoder-output" class="tool-output"></pre>
  </div>
  <p id="base64-encoder-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/base64-encoder.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "url-encoder" "md5-hash-generator" "json-string-escape" "html-entity-encoder" "uuid-generator" >}}
