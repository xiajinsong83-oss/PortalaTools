---
title: "Length Converter - Free Online Tool"
date: 2026-10-02
lastmod: 2026-10-02
description: "Free online length converter between mm, cm, m, km, inches, feet, yards and miles. Instant, full-precision results. Runs 100% in your browser - no upload."
slug: length-converter
canonicalURL: "https://portalaser.cn/tools/length-converter/"
showToc: false
---

**Length Converter** is a free online tool that converts between common distance and length units. It supports millimetres, centimetres, metres and kilometres on the metric side, and inches, feet, yards and miles on the imperial side. Type a number, choose the unit you have and the unit you want, and the converted length appears immediately.

All conversions are computed locally in your browser. Nothing is uploaded or stored, so you can switch between metric and imperial for plans, recipes, travel or school work without sending your numbers anywhere.

How to use it: enter a value, pick the source unit from the first dropdown and the target unit from the second, and read the result. It updates as you type or change either unit.

{{< ad-unit >}}

<div class="tool-app" id="app-length-converter">
  <div class="tool-grid-2">
    <div class="tool-field">
      <label class="tool-label" for="length-converter-value">Value</label>
      <input type="number" id="length-converter-value" class="tool-input" value="1" step="any" />
    </div>
    <div class="tool-field">
      <label class="tool-label" for="length-converter-from">From</label>
      <select id="length-converter-from" class="tool-input">
        <option value="mm">Millimetre (mm)</option>
        <option value="cm">Centimetre (cm)</option>
        <option value="m" selected>Metre (m)</option>
        <option value="km">Kilometre (km)</option>
        <option value="in">Inch (in)</option>
        <option value="ft">Foot (ft)</option>
        <option value="yd">Yard (yd)</option>
        <option value="mi">Mile (mi)</option>
      </select>
    </div>
    <div class="tool-field">
      <label class="tool-label" for="length-converter-to">To</label>
      <select id="length-converter-to" class="tool-input">
        <option value="cm">Centimetre (cm)</option>
        <option value="mm">Millimetre (mm)</option>
        <option value="m">Metre (m)</option>
        <option value="km">Kilometre (km)</option>
        <option value="in">Inch (in)</option>
        <option value="ft">Foot (ft)</option>
        <option value="yd">Yard (yd)</option>
        <option value="mi">Mile (mi)</option>
      </select>
    </div>
  </div>
  <div class="tool-field">
    <label class="tool-label">Result</label>
    <pre id="length-converter-output" class="tool-output">100 cm</pre>
  </div>
  <p id="length-converter-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/length-converter.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "weight-converter" "temperature-converter" "data-size-converter" "bmi-calculator" >}}
