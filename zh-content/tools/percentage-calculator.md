---
title: "百分比计算器 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费百分比计算器：一键求解百分比、占比与百分比变化问题。100% 在浏览器本地运行，无需上传、无需注册。"
slug: percentage-calculator
canonicalURL: "https://portalaser.cn/zh/tools/percentage-calculator/"
showToc: false
---

百分比计算器是一款免费的在线工具，解答人们每天都会遇到的三个百分比问题。选择模式：*X 的 Y% 是多少？* 用于小费、折扣和税费；*X 是 Y 的百分之几？* 用于份额和比率；或 *从 X 到 Y 的百分比变化* 用于增长图表、涨价和差异。输入数字，结果立即出现，保留两位小数。

它避免了 “百分比占比” 与 “百分比变化” 之间的常见混淆，你无需记住该用哪个公式。

每次计算都在你的浏览器本地运行，输入的数字不会被上传或记录。

使用方法：从下拉框选择模式，填入两个数值，点击 Calculate，读取结果。用 Clear 重新开始。
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
