---
title: "JWT Decoder - Free Online Tool"
date: 2026-10-02
lastmod: 2026-10-02
description: "Free online JWT decoder. Inspect a JSON Web Token: pretty-print header and payload, read the signature and exp/iat dates. Runs in your browser - no upload."
slug: jwt-decoder
canonicalURL: "https://portalaser.cn/tools/jwt-decoder/"
showToc: false
---

**JWT Decoder** is a free online tool that lets you inspect a JSON Web Token without sending it to anyone. Paste a JWT and the tool splits it into its three parts — header, payload and signature — and pretty-prints the header and payload as readable JSON. If the token carries `exp` or `iat` claims, it also translates those epoch seconds into human-readable UTC dates so you can instantly tell when the token was issued and when it expires.

The decoding uses correct base64url handling: `-` and `_` are converted back to `+` and `/`, and the padding is fixed automatically. Malformed tokens — the wrong number of dot-separated parts, or undecodable data — are reported with a clear error rather than shown as garbage.

Because it runs entirely in your browser, a real access token you paste here is never uploaded or logged, which is exactly what you want when debugging auth. Paste the token and click **Decode**.

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
