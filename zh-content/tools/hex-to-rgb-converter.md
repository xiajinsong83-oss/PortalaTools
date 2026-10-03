---
title: "HEX 转 RGB 颜色转换 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费在线 HEX 转 RGB 转换器：把 #RGB 或 #RRGGBB 转换为 r/g/b 分量和 rgb() 字符串，带色块预览。在浏览器中运行，无需上传。"
slug: hex-to-rgb-converter
canonicalURL: "https://portalaser.cn/zh/tools/hex-to-rgb-converter/"
showToc: false
---

HEX 转 RGB 颜色转换是一款免费的在线工具，在网页上最常见的两种颜色写法之间互转。输入 #RGB 或 #RRGGBB 十六进制值，即可立即得到红、绿、蓝分量、可直接使用的 rgb(...) CSS 字符串，以及实时色块预览。使用右侧的 RGB 输入还可以反向转换得到十六进制值。

三位的简写十六进制（#f80）和六位的完整十六进制（#ff8000）都支持。如果输入不是可识别的颜色，工具会给出明确错误并保持输出为空，而不是猜测。

所有转换都在你的浏览器本地完成——颜色数据永远不会离开你的设备。在左侧输入十六进制码读取 RGB 值，或在右侧输入 r/g/b 数值生成十六进制码。
{{< ad-unit >}}

<div class="tool-app" id="app-hex-to-rgb-converter">
  <div class="tool-grid-2">
    <div class="tool-field">
      <label class="tool-label" for="hex-to-rgb-converter-hex">HEX Color</label>
      <input type="text" id="hex-to-rgb-converter-hex" class="tool-input" spellcheck="false" placeholder="#ff8000">
      <div style="margin-top:8px;">
        <span id="hex-to-rgb-converter-swatch" style="display:inline-block;width:48px;height:48px;border:1px solid #ccc;border-radius:4px;vertical-align:middle;background:#fff;"></span>
      </div>
      <div class="tool-actions" style="margin-top:8px;">
        <button type="button" id="hex-to-rgb-converter-btn-h2r" class="tool-btn">HEX &rarr; RGB</button>
      </div>
    </div>
    <div class="tool-field">
      <label class="tool-label">RGB Values (0-255)</label>
      <div style="display:flex;gap:8px;">
        <input type="number" id="hex-to-rgb-converter-r" class="tool-input" min="0" max="255" placeholder="R" style="width:33%;">
        <input type="number" id="hex-to-rgb-converter-g" class="tool-input" min="0" max="255" placeholder="G" style="width:33%;">
        <input type="number" id="hex-to-rgb-converter-b" class="tool-input" min="0" max="255" placeholder="B" style="width:33%;">
      </div>
      <div class="tool-actions" style="margin-top:8px;">
        <button type="button" id="hex-to-rgb-converter-btn-r2h" class="tool-btn">RGB &rarr; HEX</button>
      </div>
    </div>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="hex-to-rgb-converter-output">Result</label>
    <pre id="hex-to-rgb-converter-output" class="tool-output"></pre>
  </div>
  <p id="hex-to-rgb-converter-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/hex-to-rgb-converter.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "color-contrast-checker" "slug-generator" "case-converter" "percentage-calculator" >}}
