---
title: "HTML Entity Encoder / Decoder - Free Online Tool"
date: 2026-10-02
lastmod: 2026-10-02
description: "Free HTML entity encoder and decoder: escape and decode ampersands, brackets and quotes instantly. Runs 100% in your browser - no upload, no signup."
slug: html-entity-encoder
canonicalURL: "https://portalaser.cn/tools/html-entity-encoder/"
showToc: false
---

**HTML Entity Encoder / Decoder** is a free online tool that converts between raw text and HTML entities in both directions. Press **Encode** to escape the characters that break markup — `&`, `<`, `>`, `"` and `'` — into their safe entity forms such as `&amp;`, `&lt;` and `&gt;`. Press **Decode** to reverse it, turning named entities (`&nbsp;`, `&quot;`, `&lt;`) and numeric entities (`&#123;`, `&#x7B;`) back into the characters they represent.

This is useful when writing code samples for a blog, escaping text for templates, or debugging markup that has been double-escaped.

The conversion is entirely local. Your text is never uploaded or stored.

How to use it: paste or type your text, click **Encode** or **Decode**, then **Copy Result** to take the output. **Example** loads a sample with all five special characters, and **Clear** resets the boxes.

{{< ad-unit >}}

<div class="tool-app" id="app-html-entity-encoder">
  <div class="tool-field">
    <label class="tool-label" for="html-entity-encoder-input">Text Input</label>
    <textarea id="html-entity-encoder-input" class="tool-textarea" spellcheck="false" placeholder="Type or paste text here…"></textarea>
  </div>
  <div class="tool-actions">
    <button type="button" id="html-entity-encoder-btn-encode" class="tool-btn">Encode to Entities</button>
    <button type="button" id="html-entity-encoder-btn-decode" class="tool-btn tool-btn-secondary">Decode Entities</button>
    <button type="button" id="html-entity-encoder-btn-copy" class="tool-btn tool-btn-secondary">Copy Result</button>
    <button type="button" id="html-entity-encoder-btn-example" class="tool-btn tool-btn-secondary">Example</button>
    <button type="button" id="html-entity-encoder-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="html-entity-encoder-output">Output</label>
    <pre id="html-entity-encoder-output" class="tool-output"></pre>
  </div>
  <p id="html-entity-encoder-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/html-entity-encoder.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "url-encoder" "base64-encoder" "json-string-escape" "markdown-previewer" >}}
