---
title: "Morse Code Translator - Free Online Tool"
date: 2026-10-02
lastmod: 2026-10-02
description: "Free online Morse code translator. Convert text to Morse and back with the full ITU alphabet, digits and punctuation. Runs in your browser, no signup."
slug: morse-code-translator
canonicalURL: "https://portalaser.cn/tools/morse-code-translator/"
showToc: false
---

**Morse Code Translator** is a free online tool that converts plain text to Morse code and Morse back into readable text. It uses the standard ITU alphabet covering all letters A to Z, digits 0 to 9 and the most common punctuation marks. In Morse output, letters are separated by a space and whole words by a slash, so the result is unambiguous and easy to read.

Whether you are learning the code, sending a hidden message, or just curious what "SOS" looks like, the translator handles both directions. Type text and hit *Text to Morse*, or paste dots and dashes and hit *Morse to Text* to decode it back. **Copy** puts the output on your clipboard.

Translation runs entirely in your browser with no network calls, so nothing you type is uploaded or stored. Try it with "SOS" to see the classic distress signal rendered as `... --- ...`.

{{< ad-unit >}}

<div class="tool-app" id="app-morse-code-translator">
  <div class="tool-field">
    <label class="tool-label" for="morse-code-translator-input">Text or Morse input</label>
    <textarea id="morse-code-translator-input" class="tool-textarea" spellcheck="false" placeholder="Type text (e.g. SOS) or Morse (e.g. ... --- ...) here…"></textarea>
  </div>
  <div class="tool-actions">
    <button type="button" id="morse-code-translator-btn-to-morse" class="tool-btn">Text to Morse</button>
    <button type="button" id="morse-code-translator-btn-to-text" class="tool-btn tool-btn-secondary">Morse to Text</button>
    <button type="button" id="morse-code-translator-btn-copy" class="tool-btn tool-btn-secondary">Copy Result</button>
    <button type="button" id="morse-code-translator-btn-example" class="tool-btn tool-btn-secondary">Example</button>
    <button type="button" id="morse-code-translator-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="morse-code-translator-output">Output</label>
    <pre id="morse-code-translator-output" class="tool-output"></pre>
  </div>
  <p id="morse-code-translator-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/morse-code-translator.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "base64-encoder" "html-entity-encoder" "md5-hash-generator" "case-converter" >}}
