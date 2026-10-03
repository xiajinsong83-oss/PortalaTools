---
title: "年龄计算器 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费的年龄计算器：精确计算岁数、月数和天数，并显示总天数、周数与月数。100% 在浏览器本地运行，无需上传、无需注册。"
slug: age-calculator
canonicalURL: "https://portalaser.cn/zh/tools/age-calculator/"
showToc: false
---

年龄计算器是一款免费的在线工具，可以精确算出一个人有多大了。选择出生日期，可选的参考日期（默认为今天），工具会返回按年、月、日精确计算的年龄，而不是一个粗略的数字。它还会显示累计存活的总天数、周数和月数，适合用于里程碑规划、退休问题、参赛资格或仅仅是想结束一场关于年龄的争论。

由于它按日历月和闰日正确计数，而不是按固定平均值相除，所以即使在生日和跨月边界时，按天计算的结果依然准确。

所有日期计算都在你的浏览器本地运行。输入的出生日期不会被发送到任何地方。

使用方法：选择出生日期，如果需要计算“截至”过去或未来某天的年龄，可调整参考日期，然后点击 Calculate。Clear 可重置表单。
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
