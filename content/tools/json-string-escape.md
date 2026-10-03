---
title: "JSON String Escape / Unescape - Free Online Tool"
date: 2026-10-02
lastmod: 2026-10-02
description: "Free online JSON string escaper and unescaper. Escape quotes, backslashes and newlines, or decode them back. Runs in your browser - no upload."
slug: json-string-escape
canonicalURL: "https://portalaser.cn/tools/json-string-escape/"
showToc: false
---

**JSON String Escape / Unescape** is a free online helper for turning raw text into a safe JSON string value and back. When you put text inside JSON, characters like quotes, backslashes and newlines must be escaped - and doing that by hand is error-prone. This tool does it for you: paste a sentence to escape it into a `\"`, `\\` and `\n` safe form, or paste an escaped value to read the original text back.

The conversion runs entirely in your browser using the built-in JSON engine. Your strings are never uploaded or stored, so you can process API payload fragments and configuration snippets with confidence.

How to use it: paste text into the box, then click **Escape** to make it JSON-safe or **Unescape** to decode it. Use **Copy Result** to grab the output.

{{< ad-unit >}}

<div class="tool-app" id="app-json-string-escape">
  <div class="tool-field">
    <label class="tool-label" for="json-string-escape-input">Input string</label>
    <textarea id="json-string-escape-input" class="tool-textarea" spellcheck="false" placeholder='She said: "Hello" and pressed \'save\'.'></textarea>
  </div>
  <div class="tool-actions">
    <button type="button" id="json-string-escape-btn-escape" class="tool-btn">Escape</button>
    <button type="button" id="json-string-escape-btn-unescape" class="tool-btn tool-btn-secondary">Unescape</button>
    <button type="button" id="json-string-escape-btn-copy" class="tool-btn tool-btn-secondary">Copy Result</button>
    <button type="button" id="json-string-escape-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="json-string-escape-output">Output</label>
    <pre id="json-string-escape-output" class="tool-output"></pre>
  </div>
  <p id="json-string-escape-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/json-string-escape.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "json-formatter" "json-minifier" "html-entity-encoder" "base64-encoder" >}}
