---
title: "Unix Timestamp Converter - Free Online Tool"
date: 2026-10-02
lastmod: 2026-10-02
description: "Free online Unix timestamp converter. Turn epoch seconds or milliseconds into UTC and local date-time, and back. Runs in your browser - no upload, private."
slug: timestamp-converter
canonicalURL: "https://portalaser.cn/tools/timestamp-converter/"
showToc: false
---

**Unix Timestamp Converter** is a free online tool that translates between epoch timestamps and human-readable date-time values. A Unix timestamp is the number of seconds that have elapsed since 1970-01-01 00:00:00 UTC, and it is the format APIs, logs and databases use constantly. This converter turns that number into a clear UTC and local date-time, and reverses the process by converting a date-time picker value back into seconds.

It accepts both seconds and milliseconds — tick the *milliseconds* box for values like `1700000000000` — and includes a **Now** button that drops in the current time so you can see the live epoch value in one click.

Everything is computed locally in your browser, so no time data ever leaves your device. Enter a timestamp on the left to read it as a date, or pick a date-time on the right to get the epoch seconds back.

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
