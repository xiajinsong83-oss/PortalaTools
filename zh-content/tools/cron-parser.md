---
title: "Cron 表达式解析器 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费 cron 表达式解析器：把 cron 字符串翻译成通俗英文，并查看接下来 5 次运行时间。100% 在浏览器本地运行，无需上传、无需注册。"
slug: cron-parser
canonicalURL: "https://portalaser.cn/zh/tools/cron-parser/"
showToc: false
---

Cron 表达式解析器是一款免费的在线工具，把晦涩的 cron 字符串翻译成通俗易懂的说明。粘贴标准的 5 字段（或 6 字段）cron 表达式，点击 Parse，它会逐字段用文字描述——分钟、小时、日、月份和星期——然后列出本地时区的接下来五次执行时间。它支持通配符（*）、区间（1-5）、列表（0,30）、步进（*/5）和混合写法，因此 `0 12 * * 1-5` 会变成“12 点，工作日”而不是猜谜游戏。

非常适合调试定时任务、CI 流水线和服务器 crontab 条目，且不会误触发任何任务。

解析在你的浏览器本地运行，表达式不会被发送到服务器。

使用方法：输入或粘贴 cron 表达式，按 Parse 查看分解说明和即将到来的运行时间，Example 加载工作日正午示例，Clear 重置输入框。
{{< ad-unit >}}

<div class="tool-app" id="app-cron-parser">
  <div class="tool-field">
    <label class="tool-label" for="cron-parser-input">Cron expression</label>
    <input type="text" id="cron-parser-input" class="tool-input" spellcheck="false" placeholder="e.g. */5 12 * * 1-5">
    <p class="tool-hint">5 fields: minute hour day-of-month month day-of-week (0 = Sunday).</p>
  </div>
  <div class="tool-actions">
    <button type="button" id="cron-parser-btn-parse" class="tool-btn">Parse</button>
    <button type="button" id="cron-parser-btn-example" class="tool-btn tool-btn-secondary">Example</button>
    <button type="button" id="cron-parser-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="cron-parser-output">Breakdown &amp; next runs</label>
    <pre id="cron-parser-output" class="tool-output"></pre>
  </div>
  <p id="cron-parser-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/cron-parser.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "timestamp-converter" "date-difference-calculator" "timer-stopwatch" >}}
