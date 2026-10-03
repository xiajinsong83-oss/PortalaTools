---
title: "长度换算 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费在线长度换算器：毫米、厘米、米、千米、英寸、英尺、码与英里互转，即时全精度结果。100% 在浏览器本地运行，无需上传。"
slug: length-converter
canonicalURL: "https://portalaser.cn/zh/tools/length-converter/"
showToc: false
---

长度换算是一款免费的在线工具，在常见距离与长度单位之间转换。公制侧支持毫米、厘米、米和千米，英制侧支持英寸、英尺、码和英里。输入数字，选择你拥有的单位和想要的单位，转换后的长度立即出现。

所有转换都在你的浏览器本地计算。不上传、不存储，因此无论是图纸、食谱、旅行还是作业，都可以在公制和英制之间自由切换，而无需把数字发送到任何地方。

使用方法：输入数值，从第一个下拉框选择来源单位，从第二个选择目标单位，即可读取结果。输入或切换任一单位时结果实时更新。
{{< ad-unit >}}

<div class="tool-app" id="app-length-converter">
  <div class="tool-grid-2">
    <div class="tool-field">
      <label class="tool-label" for="length-converter-value">Value</label>
      <input type="number" id="length-converter-value" class="tool-input" value="1" step="any" />
    </div>
    <div class="tool-field">
      <label class="tool-label" for="length-converter-from">From</label>
      <select id="length-converter-from" class="tool-input">
        <option value="mm">Millimetre (mm)</option>
        <option value="cm">Centimetre (cm)</option>
        <option value="m" selected>Metre (m)</option>
        <option value="km">Kilometre (km)</option>
        <option value="in">Inch (in)</option>
        <option value="ft">Foot (ft)</option>
        <option value="yd">Yard (yd)</option>
        <option value="mi">Mile (mi)</option>
      </select>
    </div>
    <div class="tool-field">
      <label class="tool-label" for="length-converter-to">To</label>
      <select id="length-converter-to" class="tool-input">
        <option value="cm">Centimetre (cm)</option>
        <option value="mm">Millimetre (mm)</option>
        <option value="m">Metre (m)</option>
        <option value="km">Kilometre (km)</option>
        <option value="in">Inch (in)</option>
        <option value="ft">Foot (ft)</option>
        <option value="yd">Yard (yd)</option>
        <option value="mi">Mile (mi)</option>
      </select>
    </div>
  </div>
  <div class="tool-field">
    <label class="tool-label">Result</label>
    <pre id="length-converter-output" class="tool-output">100 cm</pre>
  </div>
  <p id="length-converter-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/length-converter.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "weight-converter" "temperature-converter" "data-size-converter" "bmi-calculator" >}}
