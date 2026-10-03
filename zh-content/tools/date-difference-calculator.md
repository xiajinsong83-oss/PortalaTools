---
title: "日期差计算器 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费在线日期差计算器：计算任意两个日期之间的年、月、天、总天数与周数。100% 在浏览器本地运行，无需上传。"
slug: date-difference-calculator
canonicalURL: "https://portalaser.cn/zh/tools/date-difference-calculator/"
showToc: false
---

日期差计算器是一款免费的在线工具，精确告诉你两个日期之间隔了多久。选择开始日期和结束日期，工具会返回按年、月、天拆分的日历感知时长，同时显示总天数和对应的周数。它会考虑闰年和各月天数，因此结果与人们自然的计时方式一致，而不是单纯相减原始时间戳。

它适合精确计算年龄、项目时长、距某事件还有多久，或两个日历日之间的停留时长。由于拆分是日历感知的，跨闰年时从 1 月 1 日到 12 月 31 日也能正确报告。

整个计算在你的浏览器本地完成——日期不会经过网络或被存储。从选择器中选择两个日期，即可读取年、月、天、总天数和总周数。
{{< ad-unit >}}

<div class="tool-app" id="app-date-difference-calculator">
  <div class="tool-grid-2">
    <div class="tool-field">
      <label class="tool-label" for="date-difference-calculator-start">Start date</label>
      <input type="date" id="date-difference-calculator-start" class="tool-input">
    </div>
    <div class="tool-field">
      <label class="tool-label" for="date-difference-calculator-end">End date</label>
      <input type="date" id="date-difference-calculator-end" class="tool-input">
    </div>
  </div>
  <div class="tool-actions">
    <button type="button" id="date-difference-calculator-btn-calc" class="tool-btn">Calculate</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="date-difference-calculator-output">Result</label>
    <pre id="date-difference-calculator-output" class="tool-output"></pre>
  </div>
  <p id="date-difference-calculator-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/date-difference-calculator.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "age-calculator" "timestamp-converter" "percentage-calculator" "timer-stopwatch" >}}
