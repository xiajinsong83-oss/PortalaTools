---
title: "Weight Converter - Free Online Tool"
date: 2026-10-02
lastmod: 2026-10-02
description: "Free online weight converter between mg, g, kg, tonnes, ounces and pounds. Instant, accurate results. Runs 100% in your browser - no upload, no signup."
slug: weight-converter
canonicalURL: "https://portalaser.cn/tools/weight-converter/"
showToc: false
---

**Weight Converter** is a free online tool that converts between metric and imperial weight units. It handles milligrams, grams, kilograms and tonnes, as well as ounces and pounds, so you can switch between systems for cooking, shipping, science or everyday shopping. Enter a number, choose the unit you are converting from and the unit you need, and the result updates right away.

The calculation runs entirely in your browser. No weight is uploaded, sent to a server or saved, which makes it safe and quick for any amount you want to convert.

How to use it: type a value, select the source unit and the target unit, and read the converted weight. The result recalculates as you change the number or either dropdown.

{{< ad-unit >}}

<div class="tool-app" id="app-weight-converter">
  <div class="tool-grid-2">
    <div class="tool-field">
      <label class="tool-label" for="weight-converter-value">Value</label>
      <input type="number" id="weight-converter-value" class="tool-input" value="1" step="any" />
    </div>
    <div class="tool-field">
      <label class="tool-label" for="weight-converter-from">From</label>
      <select id="weight-converter-from" class="tool-input">
        <option value="mg">Milligram (mg)</option>
        <option value="g">Gram (g)</option>
        <option value="kg" selected>Kilogram (kg)</option>
        <option value="t">Tonne (t)</option>
        <option value="oz">Ounce (oz)</option>
        <option value="lb">Pound (lb)</option>
      </select>
    </div>
    <div class="tool-field">
      <label class="tool-label" for="weight-converter-to">To</label>
      <select id="weight-converter-to" class="tool-input">
        <option value="g">Gram (g)</option>
        <option value="mg">Milligram (mg)</option>
        <option value="kg">Kilogram (kg)</option>
        <option value="t">Tonne (t)</option>
        <option value="oz">Ounce (oz)</option>
        <option value="lb">Pound (lb)</option>
      </select>
    </div>
  </div>
  <div class="tool-field">
    <label class="tool-label">Result</label>
    <pre id="weight-converter-output" class="tool-output">1000 g</pre>
  </div>
  <p id="weight-converter-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/weight-converter.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "length-converter" "temperature-converter" "bmi-calculator" "data-size-converter" >}}
