---
title: "颜色对比度检测 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费在线颜色对比度检测工具：按 WCAG 2.1 AA/AAA 标准检测前景/背景色，支持普通文字与大字。在浏览器中运行。"
slug: color-contrast-checker
canonicalURL: "https://portalaser.cn/zh/tools/color-contrast-checker/"
showToc: false
---

颜色对比度检测是一款免费的在线无障碍工具，用于计算前景色与背景色之间的对比度比值，并判断它们是否满足 WCAG 2.1 标准。输入两个十六进制颜色（或使用取色器），即可得到对比度比值，以及针对普通文字（AA 需 4.5:1，AAA 需 7:1）和大字（AA 需 3:1，AAA 需 4.5:1）的清晰通过/失败判定。

比值采用官方的相对亮度公式计算，与专业无障碍审计人员使用的方法相同，因此结果与 Lighthouse 等检查工具报告的一致。这是发布设计前确认文字可读性的最快方式。

一切都在你的浏览器本地计算——不会有任何颜色值被发送到外部。输入或选取前景色与背景色，即可查看比值和 WCAG 判定结果。
{{< ad-unit >}}

<div class="tool-app" id="app-color-contrast-checker">
  <div class="tool-grid-2">
    <div class="tool-field">
      <label class="tool-label" for="color-contrast-checker-fg">Foreground color (hex)</label>
      <input type="text" id="color-contrast-checker-fg" class="tool-input" value="#000000">
      <input type="color" id="color-contrast-checker-fg-picker" value="#000000">
    </div>
    <div class="tool-field">
      <label class="tool-label" for="color-contrast-checker-bg">Background color (hex)</label>
      <input type="text" id="color-contrast-checker-bg" class="tool-input" value="#ffffff">
      <input type="color" id="color-contrast-checker-bg-picker" value="#ffffff">
    </div>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="color-contrast-checker-output">Result</label>
    <pre id="color-contrast-checker-output" class="tool-output"></pre>
  </div>
  <p id="color-contrast-checker-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/color-contrast-checker.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "hex-to-rgb-converter" "svg-previewer" "case-converter" "percentage-calculator" >}}
