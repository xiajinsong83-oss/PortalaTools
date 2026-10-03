---
title: "HEX to RGB Color Converter - Free Online Tool"
date: 2026-10-02
lastmod: 2026-10-02
description: "Free online HEX to RGB converter. Convert #RGB or #RRGGBB to r/g/b and an rgb() string, with swatch preview. Runs in your browser - no upload."
slug: hex-to-rgb-converter
canonicalURL: "https://portalaser.cn/tools/hex-to-rgb-converter/"
showToc: false
---

**HEX to RGB Color Converter** is a free online tool that translates between the two most common ways to write a color on the web. Enter a `#RGB` or `#RRGGBB` hex value and you instantly get its red, green and blue components, a ready-to-use `rgb(...)` CSS string, and a live swatch so you can see the color at a glance. Reverse the conversion with the RGB inputs to get a hex value back.

Both shorthand three-digit hex (`#f80`) and full six-digit hex (`#ff8000`) are accepted. If the input is not a recognizable color, the tool shows a clear error and leaves the output blank rather than guessing.

All conversion is done locally in your browser — no color ever leaves your device. Type a hex code on the left to read its RGB values, or enter r/g/b numbers on the right to generate a hex code.

{{< ad-unit >}}

<div class="tool-app" id="app-hex-to-rgb-converter">
  <div class="tool-grid-2">
    <div class="tool-field">
      <label class="tool-label" for="hex-to-rgb-converter-hex">HEX Color</label>
      <input type="text" id="hex-to-rgb-converter-hex" class="tool-input" spellcheck="false" placeholder="#ff8000">
      <div style="margin-top:8px;">
        <span id="hex-to-rgb-converter-swatch" style="display:inline-block;width:48px;height:48px;border:1px solid #ccc;border-radius:4px;vertical-align:middle;background:#fff;"></span>
      </div>
      <div class="tool-actions" style="margin-top:8px;">
        <button type="button" id="hex-to-rgb-converter-btn-h2r" class="tool-btn">HEX &rarr; RGB</button>
      </div>
    </div>
    <div class="tool-field">
      <label class="tool-label">RGB Values (0-255)</label>
      <div style="display:flex;gap:8px;">
        <input type="number" id="hex-to-rgb-converter-r" class="tool-input" min="0" max="255" placeholder="R" style="width:33%;">
        <input type="number" id="hex-to-rgb-converter-g" class="tool-input" min="0" max="255" placeholder="G" style="width:33%;">
        <input type="number" id="hex-to-rgb-converter-b" class="tool-input" min="0" max="255" placeholder="B" style="width:33%;">
      </div>
      <div class="tool-actions" style="margin-top:8px;">
        <button type="button" id="hex-to-rgb-converter-btn-r2h" class="tool-btn">RGB &rarr; HEX</button>
      </div>
    </div>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="hex-to-rgb-converter-output">Result</label>
    <pre id="hex-to-rgb-converter-output" class="tool-output"></pre>
  </div>
  <p id="hex-to-rgb-converter-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/hex-to-rgb-converter.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "color-contrast-checker" "slug-generator" "case-converter" "percentage-calculator" >}}
