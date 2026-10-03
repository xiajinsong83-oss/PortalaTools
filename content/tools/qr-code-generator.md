---
title: "QR Code Generator - Free Online Tool"
date: 2026-10-02
lastmod: 2026-10-02
description: "Free online QR code generator. Turn text or a URL into a scannable QR code and download it as PNG. Runs 100% in your browser - no upload."
slug: qr-code-generator
canonicalURL: "https://portalaser.cn/tools/qr-code-generator/"
showToc: false
---

**QR Code Generator** is a free online tool that turns any text or URL into a scannable QR code, drawn right on a canvas in your browser. Type a link, a Wi-Fi credential, plain text or any short payload, choose an error-correction level, and a crisp QR code appears that you can point any phone camera at. When you are happy with it, use **Download PNG** to save the image.

Error-correction levels control how much of the code can be damaged and still scan: *L* is smallest, *H* is most resilient. Higher correction makes a denser code, so pick the level that matches where the code will be printed.

Crucially, the QR code is generated locally on your own device with no network call — your payload is never uploaded to a QR server. That keeps private links and credentials private. Enter your text, choose a level, click **Generate**, then download the result.

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
