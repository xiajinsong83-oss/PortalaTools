---
title: "Age Calculator - Free Online Tool"
date: 2026-10-02
lastmod: 2026-10-02
description: "Free age calculator: get exact age in years, months and days plus total days, weeks and months. Runs 100% in your browser - no upload, no signup."
slug: age-calculator
canonicalURL: "https://portalaser.cn/tools/age-calculator/"
showToc: false
---

**Age Calculator** is a free online tool that works out exactly how old someone is. Pick a birth date, optionally set the reference date (it defaults to today), and the tool returns the precise age in years, months and days rather than a rough number. It also shows the total number of days, weeks and months lived, which is useful for milestone planning, retirement questions, contest eligibility or simply settling an argument about age.

Because it counts calendar months and leap days correctly instead of dividing by a fixed average, the day-level result stays accurate across birthdays and month boundaries.

All date math runs locally in your browser. The birth date you enter is never sent anywhere.

How to use it: choose the birth date, adjust the reference date if you need "as of" a past or future day, then click **Calculate**. **Clear** resets the form.

{{< ad-unit >}}

<div class="tool-app" id="app-age-calculator">
  <div class="tool-grid-2">
    <div class="tool-field">
      <label class="tool-label" for="age-calculator-birth">Date of birth</label>
      <input type="date" id="age-calculator-birth" class="tool-input">
    </div>
    <div class="tool-field">
      <label class="tool-label" for="age-calculator-today">As of (blank = today)</label>
      <input type="date" id="age-calculator-today" class="tool-input">
    </div>
  </div>
  <div class="tool-actions">
    <button type="button" id="age-calculator-btn-calculate" class="tool-btn">Calculate Age</button>
    <button type="button" id="age-calculator-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="age-calculator-output">Result</label>
    <pre id="age-calculator-output" class="tool-output"></pre>
  </div>
  <p id="age-calculator-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/age-calculator.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "date-difference-calculator" "bmi-calculator" "percentage-calculator" "timestamp-converter" >}}
