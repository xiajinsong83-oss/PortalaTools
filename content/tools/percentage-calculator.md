---
title: "Percentage Calculator - Free Online Tool"
date: 2026-10-02
lastmod: 2026-10-02
description: "Free percentage calculator: solve percent-of, what-percent and percentage-change problems instantly. Runs 100% in your browser - no upload, no signup."
slug: percentage-calculator
canonicalURL: "https://portalaser.cn/tools/percentage-calculator/"
showToc: false
---

**Percentage Calculator** is a free online tool that answers the three percentage questions people actually ask every day. Pick a mode: *What is X% of Y?* for tips, discounts and tax; *X is what percent of Y?* for shares and ratios; or *Percentage change from X to Y* for growth charts, price increases and differences. Enter the numbers and the result appears immediately, rounded to two decimals.

It avoids the common confusion between "percentage of" and "percentage change", so you do not have to remember which formula to reach for.

Every calculation runs locally in your browser, and none of the numbers you type is uploaded or logged.

How to use it: choose a mode from the dropdown, fill in the two values, click **Calculate**, and read the result. Use **Clear** to start over.

{{< ad-unit >}}

<div class="tool-app" id="app-percentage-calculator">
  <div class="tool-field">
    <label class="tool-label" for="percentage-calculator-mode">Calculation mode</label>
    <select id="percentage-calculator-mode" class="tool-input">
      <option value="of">What is X% of Y?</option>
      <option value="is">X is what percent of Y?</option>
      <option value="change">Percentage change from X to Y</option>
    </select>
  </div>
  <div class="tool-grid-2">
    <div class="tool-field">
      <label class="tool-label" for="percentage-calculator-x">X</label>
      <input type="number" id="percentage-calculator-x" class="tool-input" step="any" value="20">
    </div>
    <div class="tool-field">
      <label class="tool-label" for="percentage-calculator-y">Y</label>
      <input type="number" id="percentage-calculator-y" class="tool-input" step="any" value="150">
    </div>
  </div>
  <div class="tool-actions">
    <button type="button" id="percentage-calculator-btn-calculate" class="tool-btn">Calculate</button>
    <button type="button" id="percentage-calculator-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="percentage-calculator-output">Result</label>
    <pre id="percentage-calculator-output" class="tool-output"></pre>
  </div>
  <p id="percentage-calculator-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/percentage-calculator.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "discount-calculator" "tip-calculator" "age-calculator" "bmi-calculator" >}}
