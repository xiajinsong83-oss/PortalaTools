---
title: "重量换算 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费在线重量换算器：毫克、克、千克、吨、盎司与磅互转，即时精确结果。100% 在浏览器本地运行，无需上传、无需注册。"
slug: weight-converter
canonicalURL: "https://portalaser.cn/zh/tools/weight-converter/"
showToc: false
---

重量换算是一款免费的在线工具，在公制与英制重量单位之间转换。它支持毫克、克、千克和吨，以及盎司和磅，因此烹饪、运输、科学或日常购物都能在不同体系间切换。输入数字，选择转换来源单位和所需单位，结果立即更新。

计算完全在你的浏览器中运行。不会上传、发送到服务器或保存任何重量值，转换任意数值都安全快捷。

使用方法：输入数值，选择来源单位和目标单位，读取换算后的重量。更改数字或任一下拉框时结果会重新计算。
{{< ad-unit >}}

<div class="tool-app" id="app-weight-converter">
  <div class="tool-grid-2">
    <div class="tool-field">
      <label class="tool-label" for="weight-converter-value">Value</label>
      <input type="number" id="weight-converter-value" class="tool-input" value="1" step="any" />
    </div>
    <div class="tool-field">
      <label class="tool-label" for="weight-converter-from">From</label>
      <select id="weight-converter-from" class="tool-input">
        <option value="mg">Milligram (mg)</option>
        <option value="g">Gram (g)</option>
        <option value="kg" selected>Kilogram (kg)</option>
        <option value="t">Tonne (t)</option>
        <option value="oz">Ounce (oz)</option>
        <option value="lb">Pound (lb)</option>
      </select>
    </div>
    <div class="tool-field">
      <label class="tool-label" for="weight-converter-to">To</label>
      <select id="weight-converter-to" class="tool-input">
        <option value="g">Gram (g)</option>
        <option value="mg">Milligram (mg)</option>
        <option value="kg">Kilogram (kg)</option>
        <option value="t">Tonne (t)</option>
        <option value="oz">Ounce (oz)</option>
        <option value="lb">Pound (lb)</option>
      </select>
    </div>
  </div>
  <div class="tool-field">
    <label class="tool-label">Result</label>
    <pre id="weight-converter-output" class="tool-output">1000 g</pre>
  </div>
  <p id="weight-converter-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/weight-converter.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "length-converter" "temperature-converter" "bmi-calculator" "data-size-converter" >}}
