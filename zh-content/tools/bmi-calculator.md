---
title: "BMI 计算器 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费 BMI 计算器：计算 BMI 值、WHO 分类与健康体重范围，支持公制与英制。100% 在浏览器本地运行，无需上传、无需注册。"
slug: bmi-calculator
canonicalURL: "https://portalaser.cn/zh/tools/bmi-calculator/"
showToc: false
---

BMI 计算器是一款免费的在线工具，使用标准公式和 WHO 分级区间计算你的身体质量指数。输入身高和体重（公制：厘米与千克；或切换英制：英尺、英寸与磅），它会返回保留两位小数的 BMI、你的分类（体重不足、正常、超重或肥胖）以及对应身高的健康体重范围。

BMI 是一种快速的群体筛查指标而非诊断，本工具让计算即时完成，无需电子表格即可与临床分级对照。

所有计算都在你的浏览器本地运行，不会上传或存储任何个人数据。

使用方法：选择 Metric 或 Imperial，输入身高和体重，点击 Calculate 查看结果。Clear 重置表单。
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
