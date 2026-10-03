---
title: "折扣计算器 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费在线折扣计算器：一键得出折扣后的最终价格与节省金额。在浏览器中运行。"
slug: discount-calculator
canonicalURL: "https://portalaser.cn/zh/tools/discount-calculator/"
showToc: false
---

折扣计算器是一款免费的在线工具，可立即算出百分比折扣后的真实价格。输入原价和折扣百分比，工具会显示你实际节省的金额以及结账时需支付的金额。适合促销、优惠券、优惠码，以及快速对比两件打折商品。

计算很简单：折扣金额等于原价乘以百分比，最终价格等于原价减去折扣金额。结果随输入实时更新，因此你可以尝试不同折扣，看看什么样的折扣才算划算。

一切都在你的浏览器本地运行——不会发送任何数值、不存储任何内容，用于检查敏感购买的定价也很安全。输入原价与折扣，即可读取折扣金额、最终价格和总节省额。
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
