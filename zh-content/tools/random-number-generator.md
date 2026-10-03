---
title: "随机数生成器 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费随机数生成器：在任意范围内生成随机整数，支持负数，加密级安全随机。100% 在浏览器本地运行，无需上传、无需注册。"
slug: random-number-generator
canonicalURL: "https://portalaser.cn/zh/tools/random-number-generator/"
showToc: false
---

随机数生成器是一款免费的在线工具，在你选择的任意范围内生成随机整数。输入最小值和最大值（完全支持负数），选择要生成的个数（最多 100），按 Generate。每个结果都保证落在你设定的闭区间内，因此适合抽奖、掷骰子、选获奖者、抽样等任何边界重要的场景。

数字来自 `crypto.getRandomValues` 而非弱伪随机循环，比典型的 JavaScript `Math.random()` 页面具有统计上更好的随机性。结果每行一个，方便复制。

隐私内置：整个过程在你的浏览器本地运行，范围、个数和结果永远不会离开你的设备。

使用方法：输入最小值和最大值，设置个数，点击 Generate，然后 Copy 复制列表或 Clear 重新生成。
{{< ad-unit >}}

<div class="tool-app" id="app-random-number-generator">
  <div class="tool-grid-2">
    <div class="tool-field">
      <label class="tool-label" for="random-number-generator-min">Minimum</label>
      <input type="number" id="random-number-generator-min" class="tool-input" value="1">
    </div>
    <div class="tool-field">
      <label class="tool-label" for="random-number-generator-max">Maximum</label>
      <input type="number" id="random-number-generator-max" class="tool-input" value="100">
    </div>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="random-number-generator-count">How many (1-100)</label>
    <input type="number" id="random-number-generator-count" class="tool-input" min="1" max="100" value="1">
  </div>
  <div class="tool-actions">
    <button type="button" id="random-number-generator-btn-generate" class="tool-btn">Generate</button>
    <button type="button" id="random-number-generator-btn-copy" class="tool-btn tool-btn-secondary">Copy</button>
    <button type="button" id="random-number-generator-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="random-number-generator-output">Results</label>
    <pre id="random-number-generator-output" class="tool-output"></pre>
  </div>
  <p id="random-number-generator-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/random-number-generator.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "random-password-generator" "percentage-calculator" "date-difference-calculator" "tip-calculator" >}}
