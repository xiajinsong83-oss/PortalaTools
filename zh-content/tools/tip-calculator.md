---
title: "小费计算器 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费在线小费计算器：预设小费比例计算小费、总账单与人均分摊，支持多人分摊。在浏览器中运行，无需注册。"
slug: tip-calculator
canonicalURL: "https://portalaser.cn/zh/tools/tip-calculator/"
showToc: false
---

小费计算器是一款免费的在线工具，让分摊餐厅账单变得快速轻松。输入账单金额，用预设按钮（10%、15%、18% 或 20%）选择小费比例或输入自定义值，并设置分摊人数。工具立即显示小费金额、总金额和每人应付金额，保留两位小数。

它为真实场景而生：无论是给一杯咖啡付小费还是分摊团队晚餐，分摊计算都能精确到分。你可以随时调整小费比例或用餐人数，实时查看人均金额变化。

所有计算都在你的浏览器本地完成，零网络请求——账单金额不会离开你的设备。输入账单，点击预设小费，设置人数，读取结果。
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
