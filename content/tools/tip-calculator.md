---
title: "Tip Calculator - Free Online Tool"
date: 2026-10-02
lastmod: 2026-10-02
description: "Free online tip calculator. Work out the tip, total bill and cost per person with preset tips, split between people. Runs in your browser, no signup."
slug: tip-calculator
canonicalURL: "https://portalaser.cn/tools/tip-calculator/"
showToc: false
---

**Tip Calculator** is a free online tool that makes splitting a restaurant bill quick and painless. Enter the bill amount, pick a tip percentage with the preset buttons (10%, 15%, 18% or 20%) or type a custom value, and set how many people are sharing. The tool instantly shows the tip amount, the grand total and exactly what each person owes, rounded to two decimals.

It is built for real tables: whether you are tipping on a single coffee or dividing a group dinner, the split math stays accurate down to the cent. You can tweak the tip percentage or the number of diners on the fly and watch the per-person total update.

All calculations happen locally in your browser with zero network calls - your bill amount never leaves your device. Type the bill, tap a preset tip, set the number of people, and read off the result.

{{< ad-unit >}}

<div class="tool-app" id="app-tip-calculator">
  <div class="tool-field">
    <label class="tool-label" for="tip-calculator-bill">Bill amount ($)</label>
    <input type="number" id="tip-calculator-bill" class="tool-input" min="0" step="0.01" placeholder="e.g. 100">
  </div>
  <div class="tool-field">
    <label class="tool-label" for="tip-calculator-tip">Tip (%)</label>
    <input type="number" id="tip-calculator-tip" class="tool-input" min="0" step="0.1" value="15">
  </div>
  <div class="tool-actions">
    <button type="button" id="tip-calculator-btn-10" class="tool-btn tool-btn-secondary">10%</button>
    <button type="button" id="tip-calculator-btn-15" class="tool-btn tool-btn-secondary">15%</button>
    <button type="button" id="tip-calculator-btn-18" class="tool-btn tool-btn-secondary">18%</button>
    <button type="button" id="tip-calculator-btn-20" class="tool-btn tool-btn-secondary">20%</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="tip-calculator-split">Split between (people)</label>
    <input type="number" id="tip-calculator-split" class="tool-input" min="1" step="1" value="1">
  </div>
  <div class="tool-actions">
    <button type="button" id="tip-calculator-btn-calc" class="tool-btn">Calculate</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="tip-calculator-output">Result</label>
    <pre id="tip-calculator-output" class="tool-output"></pre>
  </div>
  <p id="tip-calculator-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/tip-calculator.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "percentage-calculator" "discount-calculator" "loan-calculator" "random-number-generator" >}}
