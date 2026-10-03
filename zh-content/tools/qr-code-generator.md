---
title: "二维码生成器 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费在线二维码生成器：把文本或网址生成可扫描的二维码，并下载为 PNG。100% 在浏览器本地运行，无需上传。"
slug: qr-code-generator
canonicalURL: "https://portalaser.cn/zh/tools/qr-code-generator/"
showToc: false
---

二维码生成器是一款免费的在线工具，把任意文本或 URL 变成可扫描的二维码，直接在浏览器画布上绘制。输入链接、Wi-Fi 凭据、纯文本或任何短载荷，选择纠错级别，即可得到任意手机摄像头都能扫出的清晰二维码。满意后用 Download PNG 保存图片。

纠错级别控制二维码损坏多大面积仍可扫描：L 最小，H 最抗损。纠错越高码越密集，因此请选择与打印场景匹配的级别。

关键在于二维码在你自己的设备上本地生成，无网络调用——载荷不会被上传到二维码服务器。私有链接和凭据保持私有。输入文本，选择级别，点击 Generate，然后下载结果。
{{< ad-unit >}}

<div class="tool-app" id="app-qr-code-generator">
  <div class="tool-field">
    <label class="tool-label" for="qr-code-generator-input">Text or URL</label>
    <input type="text" id="qr-code-generator-input" class="tool-input" spellcheck="false" placeholder="https://portalaser.cn">
  </div>
  <div class="tool-field">
    <label class="tool-label" for="qr-code-generator-level">Error Correction Level</label>
    <select id="qr-code-generator-level" class="tool-input">
      <option value="L">L - Low (7%)</option>
      <option value="M" selected>M - Medium (15%)</option>
      <option value="Q">Q - Quartile (25%)</option>
      <option value="H">H - High (30%)</option>
    </select>
  </div>
  <div class="tool-actions">
    <button type="button" id="qr-code-generator-btn-generate" class="tool-btn">Generate</button>
    <button type="button" id="qr-code-generator-btn-example" class="tool-btn tool-btn-secondary">Example</button>
    <button type="button" id="qr-code-generator-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field" style="text-align:center;">
    <canvas id="qr-code-generator-canvas" width="320" height="320" style="max-width:100%;background:#fff;"></canvas>
    <div style="margin-top:8px;">
      <a id="qr-code-generator-download" class="tool-btn tool-btn-secondary" download="qr-code.png" style="display:none;text-decoration:none;">Download PNG</a>
    </div>
  </div>
  <p id="qr-code-generator-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/vendor/qrcode.js" defer></script>
<script src="/js/qr-code-generator.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "base64-encoder" "url-encoder" "json-formatter" "uuid-generator" >}}
