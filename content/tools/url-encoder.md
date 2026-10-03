---
title: "URL Encoder / Decoder - Free Online Tool"
date: 2026-10-02
lastmod: 2026-10-02
description: "Free online URL encoder and decoder. Percent-encode text for query strings or decode percent-encoded URLs. Runs 100% in your browser - no upload, private."
slug: url-encoder
canonicalURL: "https://portalaser.cn/tools/url-encoder/"
showToc: false
---

**URL Encoder / Decoder** is a free online tool for converting text into a URL-safe percent-encoded form and back. URLs can only contain a limited set of ASCII characters, so spaces, accents, emoji and symbols like `&`, `=`, `?` and `#` must be escaped as `%XX` sequences before they travel safely in a query string or path. This tool handles that escaping with the standard `encodeURIComponent` rules and reverses it on demand.

It is the quick way to inspect or build query parameters, debug encoded redirects, or prepare a string for an API call without guessing which characters need escaping. Decoding catches malformed percent sequences and reports them instead of producing garbage.

All processing happens in your browser — nothing is sent to a server. Paste text, click **Encode** to make it URL-safe or **Decode** to read an encoded string, then **Copy Result** to use the output. **Example** loads a sample and **Clear** resets the field.

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
