---
title: "Discount Calculator - Free Online Tool"
date: 2026-10-02
lastmod: 2026-10-02
description: "Free online discount calculator. Instantly find the final price and savings after a percentage markdown on any original price. Runs in your browser."
slug: discount-calculator
canonicalURL: "https://portalaser.cn/tools/discount-calculator/"
showToc: false
---

**Discount Calculator** is a free online tool that instantly works out the real price after a percentage markdown. Enter the original price and the discount percentage, and the tool shows you exactly how much money you save and what you actually pay at checkout. It is handy for sales, coupons, promo codes and comparing two discounted products at a glance.

The math is straightforward: the discount amount is the original price multiplied by the percentage, and the final price is the original price minus that amount. The result updates as you type, so you can experiment with different percentages to see where a sale becomes a good deal.

Everything runs locally in your browser - no values are sent anywhere and nothing is stored, so it is safe for checking prices on sensitive purchases. Type the original price and the discount, and read off the discount amount, final price and total savings.

{{< ad-unit >}}

<div class="tool-app" id="app-discount-calculator">
  <div class="tool-grid-2">
    <div class="tool-field">
      <label class="tool-label" for="discount-calculator-input">Original price ($)</label>
      <input type="number" id="discount-calculator-input" class="tool-input" min="0" step="0.01" placeholder="e.g. 100">
    </div>
    <div class="tool-field">
      <label class="tool-label" for="discount-calculator-pct">Discount (%)</label>
      <input type="number" id="discount-calculator-pct" class="tool-input" min="0" max="100" step="0.1" placeholder="e.g. 25">
    </div>
  </div>
  <div class="tool-actions">
    <button type="button" id="discount-calculator-btn-calc" class="tool-btn">Calculate</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="discount-calculator-output">Result</label>
    <pre id="discount-calculator-output" class="tool-output"></pre>
  </div>
  <p id="discount-calculator-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/discount-calculator.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "percentage-calculator" "tip-calculator" "loan-calculator" "bmi-calculator" >}}
