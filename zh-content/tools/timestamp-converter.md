---
title: "Unix 时间戳转换 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费在线 Unix 时间戳转换器：秒/毫秒时间戳与 UTC/本地日期时间互转。在浏览器中运行，无需上传、隐私安全。"
slug: timestamp-converter
canonicalURL: "https://portalaser.cn/zh/tools/timestamp-converter/"
showToc: false
---

Unix 时间戳转换是一款免费的在线工具，在 epoch 时间戳与可读日期时间之间互转。Unix 时间戳是自 1970-01-01 00:00:00 UTC 以来经过的秒数，是 API、日志和数据库持续使用的格式。本转换器把该数字转换为清晰的 UTC 和本地日期时间，并反向把日期时间选择器的值转换为秒数。

它同时接受秒和毫秒——勾选 milliseconds 复选框可处理 `1700000000000` 这样的值——并带有 Now 按钮，一键插入当前时间查看实时 epoch 值。

一切都在你的浏览器本地计算，因此没有时间数据会离开你的设备。在左侧输入时间戳读取日期，或在右侧选择日期时间获取 epoch 秒数。
{{< ad-unit >}}

<div class="tool-app" id="app-timestamp-converter">
  <div class="tool-grid-2">
    <div class="tool-field">
      <label class="tool-label" for="timestamp-converter-input">Unix Timestamp</label>
      <input type="text" id="timestamp-converter-input" class="tool-input" spellcheck="false" placeholder="e.g. 1700000000">
      <label class="tool-hint" style="display:block;margin-top:6px;">
        <input type="checkbox" id="timestamp-converter-ms"> Treat input as milliseconds
      </label>
      <div class="tool-actions" style="margin-top:8px;">
        <button type="button" id="timestamp-converter-btn-convert" class="tool-btn">Convert to Date</button>
      </div>
    </div>
    <div class="tool-field">
      <label class="tool-label" for="timestamp-converter-datetime">Local Date &amp; Time</label>
      <input type="datetime-local" id="timestamp-converter-datetime" class="tool-input" step="1">
      <div class="tool-actions" style="margin-top:8px;">
        <button type="button" id="timestamp-converter-btn-convert2" class="tool-btn">Convert to Timestamp</button>
        <button type="button" id="timestamp-converter-btn-now" class="tool-btn tool-btn-secondary">Now</button>
      </div>
    </div>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="timestamp-converter-output">Timestamp &rarr; Date</label>
    <pre id="timestamp-converter-output" class="tool-output"></pre>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="timestamp-converter-output2">Date &rarr; Timestamp</label>
    <pre id="timestamp-converter-output2" class="tool-output"></pre>
  </div>
  <p id="timestamp-converter-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/timestamp-converter.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "date-difference-calculator" "age-calculator" "random-number-generator" "timer-stopwatch" >}}
