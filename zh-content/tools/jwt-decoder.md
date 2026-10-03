---
title: "JWT 解码器 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费在线 JWT 解码器：查看 JSON Web Token 的 Header 与 Payload 内容、签名及 exp/iat 时间。在浏览器中运行，无需上传。"
slug: jwt-decoder
canonicalURL: "https://portalaser.cn/zh/tools/jwt-decoder/"
showToc: false
---

JWT 解码器是一款免费的在线工具，让你无需把 JSON Web Token 发送给任何人即可查看其内容。粘贴 JWT，工具会把它拆成三部分——header、payload 和 signature——并把 header 与 payload 美化为可读的 JSON。如果令牌带有 exp 或 iat 声明，它还会把这些 epoch 秒转换为可读的 UTC 日期，让你立即知道令牌的签发和过期时间。

解码使用正确的 base64url 处理：`-` 和 `_` 会转换回 `+` 和 `/`，填充也会自动修正。格式错误的令牌——点分隔部分数量不对或数据无法解码——会给出明确错误，而不是显示乱码。

由于完全在你的浏览器中运行，这里粘贴的真实访问令牌不会被上传或记录——调试认证问题时正是如此。粘贴令牌并点击 Decode。
{{< ad-unit >}}

<div class="tool-app" id="app-jwt-decoder">
  <div class="tool-field">
    <label class="tool-label" for="jwt-decoder-input">JWT Token</label>
    <textarea id="jwt-decoder-input" class="tool-textarea" spellcheck="false" placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.…"></textarea>
  </div>
  <div class="tool-actions">
    <button type="button" id="jwt-decoder-btn-decode" class="tool-btn">Decode</button>
    <button type="button" id="jwt-decoder-btn-example" class="tool-btn tool-btn-secondary">Example</button>
    <button type="button" id="jwt-decoder-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="jwt-decoder-output">Decoded Token</label>
    <pre id="jwt-decoder-output" class="tool-output"></pre>
  </div>
  <p id="jwt-decoder-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/jwt-decoder.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "base64-encoder" "json-formatter" "sha256-hash-generator" "uuid-generator" >}}
