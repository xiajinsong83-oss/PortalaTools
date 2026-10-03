---
title: "在线计时器与秒表 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费在线倒计时器与秒表（支持计次）。设置分秒、记录分段，无音频。100% 在浏览器本地运行，无需上传、无需注册。"
slug: timer-stopwatch
canonicalURL: "https://portalaser.cn/zh/tools/timer-stopwatch/"
showToc: false
---

在线计时器与秒表是一个二合一的免费计时页面。左侧是倒计时器，可设置分钟和秒数倒计时到零，结束时显示清晰的 “Time's up!” 消息。右侧是秒表，正向计时并记录分段，用于测量锻炼、烹饪或任务间隔。

两个时钟都完全在你的浏览器中运行，使用你的设备时钟，无音频。无需下载、无需账户、不发送任何数据——打开页面即可计时。

使用方法：为倒计时输入分钟和秒数，然后按 Start、Pause 或 Reset。秒表按 Start，用 Lap 记录分段，Reset 清空列表。
{{< ad-unit >}}

<div class="tool-app" id="app-timer-stopwatch">
  <div class="tool-grid-2">
    <div>
      <h3 style="margin-top:0">Countdown Timer</h3>
      <div class="tool-field">
        <label class="tool-label" for="timer-stopwatch-t-min">Minutes</label>
        <input type="number" id="timer-stopwatch-t-min" class="tool-input" min="0" value="0" />
      </div>
      <div class="tool-field">
        <label class="tool-label" for="timer-stopwatch-t-sec">Seconds</label>
        <input type="number" id="timer-stopwatch-t-sec" class="tool-input" min="0" max="59" value="30" />
      </div>
      <div class="tool-time-display" id="timer-stopwatch-t-display">00:00:00</div>
      <div class="tool-actions">
        <button type="button" id="timer-stopwatch-t-start" class="tool-btn">Start</button>
        <button type="button" id="timer-stopwatch-t-pause" class="tool-btn tool-btn-secondary">Pause</button>
        <button type="button" id="timer-stopwatch-t-reset" class="tool-btn tool-btn-secondary">Reset</button>
      </div>
      <p id="timer-stopwatch-t-status" class="tool-status"></p>
    </div>
    <div>
      <h3 style="margin-top:0">Stopwatch</h3>
      <div class="tool-time-display" id="timer-stopwatch-s-display">00:00:00</div>
      <div class="tool-actions">
        <button type="button" id="timer-stopwatch-s-start" class="tool-btn">Start</button>
        <button type="button" id="timer-stopwatch-s-pause" class="tool-btn tool-btn-secondary">Pause</button>
        <button type="button" id="timer-stopwatch-s-lap" class="tool-btn tool-btn-secondary">Lap</button>
        <button type="button" id="timer-stopwatch-s-reset" class="tool-btn tool-btn-secondary">Reset</button>
      </div>
      <p id="timer-stopwatch-s-status" class="tool-status"></p>
      <ol id="timer-stopwatch-laps"></ol>
    </div>
  </div>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/timer-stopwatch.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "timestamp-converter" "cron-parser" "date-difference-calculator" "random-number-generator" >}}
