---
title: "进制转换器 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费的数字进制转换器：在二进制、八进制、十进制与十六进制之间互转，BigInt 高精度。100% 在浏览器本地运行，无需上传。"
slug: binary-converter
canonicalURL: "https://portalaser.cn/zh/tools/binary-converter/"
showToc: false
---

进制转换器是一款免费的在线工具，可一步完成数字在四种最常见进制之间的转换。输入任意数值，选择它是二进制（基 2）、八进制（基 8）、十进制（基 10）还是十六进制（基 16），页面会立即同时显示四种进制的结果。二进制输出按 4 位分组，长位串也能保持可读。

由于使用 JavaScript 的 BigInt，本转换器可以处理远超安全整数上限的大数值，非常适合内存地址、文件大小、位掩码和低级调试等四舍五入会给出错误答案的场景。

转换完全在本地进行。你输入的任何内容都不会被上传或记录。

使用方法：输入数字，从下拉框选择它的进制，点击 Convert，用 Example 加载经典的 255 → FF / 11111111 示例，或用 Clear 尝试其他数值。
{{< ad-unit >}}

<div class="tool-app" id="app-binary-converter">
  <div class="tool-field">
    <label class="tool-label" for="binary-converter-input">Value</label>
    <input type="text" id="binary-converter-input" class="tool-input" placeholder="e.g. 255 or FF or 11111111" spellcheck="false">
  </div>
  <div class="tool-field">
    <label class="tool-label" for="binary-converter-base">Value base</label>
    <select id="binary-converter-base" class="tool-input">
      <option value="10">Decimal (base 10)</option>
      <option value="2">Binary (base 2)</option>
      <option value="8">Octal (base 8)</option>
      <option value="16">Hexadecimal (base 16)</option>
    </select>
  </div>
  <div class="tool-actions">
    <button type="button" id="binary-converter-btn-convert" class="tool-btn">Convert</button>
    <button type="button" id="binary-converter-btn-example" class="tool-btn tool-btn-secondary">Example</button>
    <button type="button" id="binary-converter-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="binary-converter-output">All bases</label>
    <pre id="binary-converter-output" class="tool-output"></pre>
  </div>
  <p id="binary-converter-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/binary-converter.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "hex-to-rgb-converter" "data-size-converter" "base64-encoder" "temperature-converter" >}}
