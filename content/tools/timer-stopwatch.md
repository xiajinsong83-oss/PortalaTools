---
title: "Online Timer & Stopwatch - Free Online Tool"
date: 2026-10-02
lastmod: 2026-10-02
description: "Free online countdown timer and stopwatch with laps. Set minutes and seconds, track splits, no audio. Runs 100% in your browser - no upload, no signup."
slug: timer-stopwatch
canonicalURL: "https://portalaser.cn/tools/timer-stopwatch/"
showToc: false
---

**Online Timer & Stopwatch** is a free timing page that combines two tools in one. On the left, a countdown timer lets you set minutes and seconds and count down to zero, showing a clear "Time's up!" message when it finishes. On the right, a stopwatch counts up and records lap splits so you can measure intervals like workouts, cooking or tasks.

Both clocks run entirely in your browser, using your device clock and no audio. There is nothing to download, no account and no data sent anywhere - open the page and start timing.

How to use it: type minutes and seconds for the countdown, then press Start, Pause or Reset. For the stopwatch, press Start, use Lap to record splits and Reset to clear the list.

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
