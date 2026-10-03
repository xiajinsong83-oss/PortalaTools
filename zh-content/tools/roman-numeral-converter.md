---
title: "罗马数字转换 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费罗马数字转换器：数字 1-3999 与罗马数字互转。100% 在浏览器本地运行，无需上传、无需注册。"
slug: roman-numeral-converter
canonicalURL: "https://portalaser.cn/zh/tools/roman-numeral-converter/"
showToc: false
---

罗马数字转换是一款免费的在线工具，在阿拉伯数字与罗马数字之间双向转换。输入 1 到 3999 之间的任意整数，即可得到经典罗马形式（例如 1999 变为 MCMXCIX）；或粘贴 MMXXVI 这样的罗马数字，解码回阿拉伯数字。它会校验范围和格式，因此超范围值和格式错误的数字会以明确消息被拒绝，而不是静默给出错误答案。

适合阅读钟面、电影续集、书籍章节、奠基石以及偶尔用罗马数字书写的年份。

所有转换都在你的浏览器本地运行，不上传、不存储。

使用方法：在左侧输入数字点击 To Roman Numeral，或在右侧输入罗马数字点击 To Number。Example 加载 1999，Clear 重置两个输入框。
{{< ad-unit >}}

<div class="tool-app" id="app-roman-numeral-converter">
  <div class="tool-grid-2">
    <div class="tool-field">
      <label class="tool-label" for="roman-numeral-converter-number">Number (1-3999)</label>
      <input type="number" id="roman-numeral-converter-number" class="tool-input" min="1" max="3999" placeholder="e.g. 1999">
    </div>
    <div class="tool-field">
      <label class="tool-label" for="roman-numeral-converter-roman">Roman numeral</label>
      <input type="text" id="roman-numeral-converter-roman" class="tool-input" spellcheck="false" placeholder="e.g. MCMXCIX">
    </div>
  </div>
  <div class="tool-actions">
    <button type="button" id="roman-numeral-converter-btn-to" class="tool-btn">To Roman Numeral</button>
    <button type="button" id="roman-numeral-converter-btn-from" class="tool-btn tool-btn-secondary">To Number</button>
    <button type="button" id="roman-numeral-converter-btn-example" class="tool-btn tool-btn-secondary">Example</button>
    <button type="button" id="roman-numeral-converter-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="roman-numeral-converter-output">Result</label>
    <pre id="roman-numeral-converter-output" class="tool-output"></pre>
  </div>
  <p id="roman-numeral-converter-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/roman-numeral-converter.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "binary-converter" "date-difference-calculator" "percentage-calculator" "random-number-generator" >}}
