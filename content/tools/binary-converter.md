---
title: "Binary Hex Decimal Converter - Free Online Tool"
date: 2026-10-02
lastmod: 2026-10-02
description: "Free number base converter: translate values between binary, octal, decimal and hexadecimal with BigInt precision. Runs 100% in your browser - no upload."
slug: binary-converter
canonicalURL: "https://portalaser.cn/tools/binary-converter/"
showToc: false
---

**Binary Hex Decimal Converter** is a free online tool that translates a number between the four most common bases in one step. Enter any value, pick whether it is binary (base 2), octal (base 8), decimal (base 10) or hexadecimal (base 16), and the page instantly shows the equivalent in all four bases. The binary output is grouped into tidy 4-digit chunks so long bit strings stay readable.

Because it uses JavaScript `BigInt`, this converter handles very large values far beyond the safe integer limit, which makes it useful for memory addresses, file sizes, bit masks and low-level debugging where rounding would give the wrong answer.

The conversion is entirely local. Nothing you type is uploaded or logged.

How to use it: type your number, select its base from the dropdown, click **Convert**, then use **Example** to load the classic 255 → FF / 11111111 case, or **Clear** to try another value.

{{< ad-unit >}}

<div class="tool-app" id="app-binary-converter">
  <div class="tool-field">
    <label class="tool-label" for="binary-converter-input">Value</label>
    <input type="text" id="binary-converter-input" class="tool-input" placeholder="e.g. 255 or FF or 11111111" spellcheck="false">
  </div>
  <div class="tool-field">
    <label class="tool-label" for="binary-converter-base">Value base</label>
    <select id="binary-converter-base" class="tool-input">
      <option value="10">Decimal (base 10)</option>
      <option value="2">Binary (base 2)</option>
      <option value="8">Octal (base 8)</option>
      <option value="16">Hexadecimal (base 16)</option>
    </select>
  </div>
  <div class="tool-actions">
    <button type="button" id="binary-converter-btn-convert" class="tool-btn">Convert</button>
    <button type="button" id="binary-converter-btn-example" class="tool-btn tool-btn-secondary">Example</button>
    <button type="button" id="binary-converter-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="binary-converter-output">All bases</label>
    <pre id="binary-converter-output" class="tool-output"></pre>
  </div>
  <p id="binary-converter-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/binary-converter.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "hex-to-rgb-converter" "data-size-converter" "base64-encoder" "temperature-converter" >}}
