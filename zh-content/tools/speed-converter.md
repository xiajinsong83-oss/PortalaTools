---
title: "速度换算 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费在线速度换算器：米/秒、千米/时、英里/时、节与英尺/秒互转，旅行与跑步常用。在浏览器中运行，无需注册。"
slug: speed-converter
canonicalURL: "https://portalaser.cn/zh/tools/speed-converter/"
showToc: false
---

速度换算是一款免费的在线工具，在日常接触的速度单位之间转换。输入数值，选择起始单位和目标单位，几秒内即可得到准确结果。它覆盖米/秒、千米/时、英里/时、节和英尺/秒——道路、跑步应用、航空和航海使用的单位。

换算基于精确的参考系数，因此 60 mph 会得到熟悉的高速公路巡航千米时速，节也会按航海场景期望的精度换算。一键互换来源与目标单位，结果随输入实时更新。

每次换算都在你的浏览器本地计算——没有网络请求，不存储任何数值。输入速度，选择来源与目标单位，读取换算结果。
{{< ad-unit >}}

<div class="tool-app" id="app-speed-converter">
  <div class="tool-grid-2">
    <div class="tool-field">
      <label class="tool-label" for="speed-converter-value">Value</label>
      <input type="number" id="speed-converter-value" class="tool-input" step="any" placeholder="e.g. 60">
    </div>
    <div class="tool-field">
      <label class="tool-label" for="speed-converter-from">From</label>
      <select id="speed-converter-from" class="tool-input">
        <option value="m/s">m/s</option>
        <option value="km/h">km/h</option>
        <option value="mph" selected>mph</option>
        <option value="knot">knot</option>
        <option value="ft/s">ft/s</option>
      </select>
    </div>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="speed-converter-to">To</label>
    <select id="speed-converter-to" class="tool-input">
      <option value="m/s">m/s</option>
      <option value="km/h" selected>km/h</option>
      <option value="mph">mph</option>
      <option value="knot">knot</option>
      <option value="ft/s">ft/s</option>
    </select>
  </div>
  <div class="tool-actions">
    <button type="button" id="speed-converter-btn-convert" class="tool-btn">Convert</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="speed-converter-output">Result</label>
    <pre id="speed-converter-output" class="tool-output"></pre>
  </div>
  <p id="speed-converter-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/speed-converter.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "temperature-converter" "data-size-converter" "length-converter" "weight-converter" >}}
