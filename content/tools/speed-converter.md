---
title: "Speed Converter - Free Online Tool"
date: 2026-10-02
lastmod: 2026-10-02
description: "Free online speed converter. Convert between m/s, km/h, mph, knots and feet per second instantly for travel and running. Runs in your browser, no signup."
slug: speed-converter
canonicalURL: "https://portalaser.cn/tools/speed-converter/"
showToc: false
---

**Speed Converter** is a free online tool that converts speed between the units you actually encounter in daily life. Enter a value, pick the unit you are starting from and the target unit, and get an accurate result in seconds. It covers metres per second, kilometres per hour, miles per hour, knots and feet per second - the units used on roads, in running apps, aviation and sailing.

The conversions are built on exact reference factors, so 60 mph comes out at the familiar highway cruising speed in km/h, and knots convert to the precision expected in nautical contexts. Swap the from and to units with one click of the selects and the result updates as you type.

Every conversion is computed locally in your browser - there are no network requests and no values are stored. Type your speed, choose the source and target units, and read the converted result.

{{< ad-unit >}}

<div class="tool-app" id="app-speed-converter">
  <div class="tool-grid-2">
    <div class="tool-field">
      <label class="tool-label" for="speed-converter-value">Value</label>
      <input type="number" id="speed-converter-value" class="tool-input" step="any" placeholder="e.g. 60">
    </div>
    <div class="tool-field">
      <label class="tool-label" for="speed-converter-from">From</label>
      <select id="speed-converter-from" class="tool-input">
        <option value="m/s">m/s</option>
        <option value="km/h">km/h</option>
        <option value="mph" selected>mph</option>
        <option value="knot">knot</option>
        <option value="ft/s">ft/s</option>
      </select>
    </div>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="speed-converter-to">To</label>
    <select id="speed-converter-to" class="tool-input">
      <option value="m/s">m/s</option>
      <option value="km/h" selected>km/h</option>
      <option value="mph">mph</option>
      <option value="knot">knot</option>
      <option value="ft/s">ft/s</option>
    </select>
  </div>
  <div class="tool-actions">
    <button type="button" id="speed-converter-btn-convert" class="tool-btn">Convert</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="speed-converter-output">Result</label>
    <pre id="speed-converter-output" class="tool-output"></pre>
  </div>
  <p id="speed-converter-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/speed-converter.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "temperature-converter" "data-size-converter" "length-converter" "weight-converter" >}}
