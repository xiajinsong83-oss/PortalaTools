---
title: "温度换算 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费在线温度换算器：摄氏、华氏、开尔文互转，即时结果与全刻度对照。在浏览器中运行，无需上传。"
slug: temperature-converter
canonicalURL: "https://portalaser.cn/zh/tools/temperature-converter/"
showToc: false
---

温度换算是一款免费的在线工具，在摄氏、华氏和开尔文之间实时转换。输入数值，选择它所在的刻度和目标刻度，结果立即更新。作为附加功能，它还会并排显示全部三种刻度，让你一眼看到数字在各单位间的映射。

计算在你的浏览器本地完成。不上传、不存储任何数值，因此无论是换算烹饪温度、天气读数还是物理题，都不会向服务器发送任何内容。

使用方法：输入数字，选择来源刻度和目标刻度，读取换算结果。“all scales” 一行会随每次变化更新。
{{< ad-unit >}}

<div class="tool-app" id="app-temperature-converter">
  <div class="tool-grid-2">
    <div class="tool-field">
      <label class="tool-label" for="temperature-converter-value">Value</label>
      <input type="number" id="temperature-converter-value" class="tool-input" value="0" step="any" />
    </div>
    <div class="tool-field">
      <label class="tool-label" for="temperature-converter-from">From</label>
      <select id="temperature-converter-from" class="tool-input">
        <option value="C">Celsius (°C)</option>
        <option value="F">Fahrenheit (°F)</option>
        <option value="K">Kelvin (K)</option>
      </select>
    </div>
    <div class="tool-field">
      <label class="tool-label" for="temperature-converter-to">To</label>
      <select id="temperature-converter-to" class="tool-input">
        <option value="F">Fahrenheit (°F)</option>
        <option value="C">Celsius (°C)</option>
        <option value="K">Kelvin (K)</option>
      </select>
    </div>
  </div>
  <div class="tool-field">
    <label class="tool-label">Result</label>
    <pre id="temperature-converter-output" class="tool-output">32 °F</pre>
    <p class="tool-hint" id="temperature-converter-all">0 °C  =  32 °F  =  273.15 K</p>
  </div>
  <p id="temperature-converter-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/temperature-converter.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "length-converter" "weight-converter" "data-size-converter" "speed-converter" >}}
