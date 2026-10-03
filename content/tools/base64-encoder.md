---
title: "Base64 Encode & Decode - Free Online Tool"
date: 2026-10-02
lastmod: 2026-10-02
description: "Free online Base64 encoder and decoder with full UTF-8 support. Convert text to Base64 and back instantly in your browser - no upload."
slug: base64-encoder
canonicalURL: "https://portalaser.cn/tools/base64-encoder/"
showToc: false
---

**Base64 Encode & Decode** is a free online tool for converting plain text to Base64 and back. Base64 is the standard encoding used everywhere — API authentication headers, JWT payloads, email attachments, data URIs and many configuration formats. With this tool you can encode a message into Base64 in one click, or decode an existing Base64 string into readable text, with correct Unicode and UTF-8 handling for characters like emoji and non-Latin scripts.

Privacy is built in: the conversion runs entirely in your browser using the Web Encoding API. Your input is never sent over the network, never touches a server, and never gets stored — so it is safe to use with tokens, keys and any sensitive string you want to inspect locally.

How to use it: paste text or a Base64 string into the input area, then click **Encode** to convert text to Base64 or **Decode** to convert Base64 back to text. **Copy Result** puts the output on your clipboard, and **Example** loads a sample so you can try both directions instantly.

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
