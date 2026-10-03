---
title: "BMI Calculator - Free Online Tool"
date: 2026-10-02
lastmod: 2026-10-02
description: "Free BMI calculator: compute BMI, WHO category and healthy weight range in metric or imperial units. Runs 100% in your browser - no upload, no signup."
slug: bmi-calculator
canonicalURL: "https://portalaser.cn/tools/bmi-calculator/"
showToc: false
---

**BMI Calculator** is a free online tool that computes your Body Mass Index using the standard formula and the WHO classification bands. Enter your height and weight in metric units (centimeters and kilograms) or switch to imperial units (feet, inches and pounds), and it returns your BMI rounded to two decimals, your category (underweight, normal weight, overweight or obese), and the healthy weight range for your height.

BMI is a quick population-level screening measure rather than a diagnosis, and this tool makes the math instant so you can compare it against clinical bands without a spreadsheet.

All calculations run locally in your browser, and no personal data is uploaded or stored.

How to use it: pick Metric or Imperial, enter your height and weight, click **Calculate**, and read the result. **Clear** resets the form.

{{< ad-unit >}}

<div class="tool-app" id="app-bmi-calculator">
  <div class="tool-field">
    <label class="tool-label" for="bmi-calculator-system">Units</label>
    <select id="bmi-calculator-system" class="tool-input">
      <option value="metric">Metric (cm / kg)</option>
      <option value="imperial">Imperial (ft / in / lb)</option>
    </select>
  </div>
  <div class="tool-grid-2">
    <div class="tool-field">
      <label class="tool-label" for="bmi-calculator-cm">Height (cm)</label>
      <input type="number" id="bmi-calculator-cm" class="tool-input" step="0.1" value="170">
    </div>
    <div class="tool-field">
      <label class="tool-label" for="bmi-calculator-kg">Weight (kg)</label>
      <input type="number" id="bmi-calculator-kg" class="tool-input" step="0.1" value="70">
    </div>
    <div class="tool-field">
      <label class="tool-label" for="bmi-calculator-ft">Height (ft)</label>
      <input type="number" id="bmi-calculator-ft" class="tool-input" value="5">
    </div>
    <div class="tool-field">
      <label class="tool-label" for="bmi-calculator-in">Height (in)</label>
      <input type="number" id="bmi-calculator-in" class="tool-input" value="7">
    </div>
    <div class="tool-field">
      <label class="tool-label" for="bmi-calculator-lb">Weight (lb)</label>
      <input type="number" id="bmi-calculator-lb" class="tool-input" value="154">
    </div>
  </div>
  <div class="tool-actions">
    <button type="button" id="bmi-calculator-btn-calculate" class="tool-btn">Calculate BMI</button>
    <button type="button" id="bmi-calculator-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="bmi-calculator-output">Result</label>
    <pre id="bmi-calculator-output" class="tool-output"></pre>
  </div>
  <p id="bmi-calculator-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/bmi-calculator.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "age-calculator" "percentage-calculator" "weight-converter" "length-converter" >}}
