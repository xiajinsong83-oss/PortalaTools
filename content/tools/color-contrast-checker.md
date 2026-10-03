---
title: "Color Contrast Checker - Free Online Tool"
date: 2026-10-02
lastmod: 2026-10-02
description: "Free online color contrast checker. Test foreground/background hex colors against WCAG 2.1 AA and AAA for normal and large text. Runs in your browser."
slug: color-contrast-checker
canonicalURL: "https://portalaser.cn/tools/color-contrast-checker/"
showToc: false
---

**Color Contrast Checker** is a free online accessibility tool that measures the contrast ratio between a foreground and a background color and tells you whether they meet the WCAG 2.1 standards. Enter two hex colors (or use the color pickers) and get the ratio alongside clear pass/fail verdicts for normal text (AA needs 4.5:1, AAA needs 7:1) and large text (AA needs 3:1, AAA needs 4.5:1).

The ratio follows the official relative-luminance formula, the same method used by professional accessibility auditors, so the result matches what Lighthouse and similar checkers report. It is the fastest way to confirm your text remains readable before shipping a design.

Everything is computed locally in your browser - no color values are sent anywhere. Type or pick your foreground and background and read the ratio and WCAG verdicts.

{{< ad-unit >}}

<div class="tool-app" id="app-color-contrast-checker">
  <div class="tool-grid-2">
    <div class="tool-field">
      <label class="tool-label" for="color-contrast-checker-fg">Foreground color (hex)</label>
      <input type="text" id="color-contrast-checker-fg" class="tool-input" value="#000000">
      <input type="color" id="color-contrast-checker-fg-picker" value="#000000">
    </div>
    <div class="tool-field">
      <label class="tool-label" for="color-contrast-checker-bg">Background color (hex)</label>
      <input type="text" id="color-contrast-checker-bg" class="tool-input" value="#ffffff">
      <input type="color" id="color-contrast-checker-bg-picker" value="#ffffff">
    </div>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="color-contrast-checker-output">Result</label>
    <pre id="color-contrast-checker-output" class="tool-output"></pre>
  </div>
  <p id="color-contrast-checker-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/color-contrast-checker.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "hex-to-rgb-converter" "svg-previewer" "case-converter" "percentage-calculator" >}}
