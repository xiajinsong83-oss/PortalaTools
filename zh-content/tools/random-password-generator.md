---
title: "随机密码生成器 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费随机密码生成器：用混合字符集生成任意长度的强密码，实时显示强度。100% 在浏览器本地运行，无需上传、无需注册。"
slug: random-password-generator
canonicalURL: "https://portalaser.cn/zh/tools/random-password-generator/"
showToc: false
---

随机密码生成器是一款免费的在线工具，使用与浏览器 TLS 和银行会话相同的加密安全随机数生成器创建强而不可预测的密码。与弱 Math.random() 生成器不同，它使用 `crypto.getRandomValues`，因此输出真正难以猜测。设置长度，选择要包含的字符组，可选排除易混淆的相似字符，每次按 Generate 都能得到全新密码。内置强度标签对结果评分，让你一眼知道它是否足以保护敏感账户。

一切都在你的浏览器本地运行。生成的任何密码都不会被发送到服务器、记录或存储，即使为真实账户创建凭据也很安全。

使用方法：拖动长度滑块（4 到 128 字符），勾选所需字符组，点击 Generate。用 Copy 把密码复制到剪贴板，Clear 重新开始。
{{< ad-unit >}}

<div class="tool-app" id="app-random-password-generator">
  <div class="tool-field">
    <label class="tool-label" for="random-password-generator-length">Password length: <span id="random-password-generator-length-value">16</span></label>
    <input type="range" id="random-password-generator-length" class="tool-input" min="4" max="128" value="16">
  </div>
  <div class="tool-field">
    <label class="tool-label">Character sets</label>
    <label class="tool-hint"><input type="checkbox" id="random-password-generator-upper" checked> Uppercase (A-Z)</label>
    <label class="tool-hint"><input type="checkbox" id="random-password-generator-lower" checked> Lowercase (a-z)</label>
    <label class="tool-hint"><input type="checkbox" id="random-password-generator-digits" checked> Digits (0-9)</label>
    <label class="tool-hint"><input type="checkbox" id="random-password-generator-symbols" checked> Symbols (!@#$…)</label>
    <label class="tool-hint"><input type="checkbox" id="random-password-generator-ambiguous"> Exclude ambiguous characters (I, l, 1, O, 0)</label>
  </div>
  <div class="tool-actions">
    <button type="button" id="random-password-generator-btn-generate" class="tool-btn">Generate</button>
    <button type="button" id="random-password-generator-btn-copy" class="tool-btn tool-btn-secondary">Copy</button>
    <button type="button" id="random-password-generator-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="random-password-generator-output">Generated password</label>
    <pre id="random-password-generator-output" class="tool-output"></pre>
  </div>
  <p id="random-password-generator-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/random-password-generator.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "uuid-generator" "sha256-hash-generator" "random-number-generator" "md5-hash-generator" "base64-encoder" >}}
