---
title: "JSON 转 CSV - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费在线 JSON 转 CSV 转换器：把扁平对象数组转换为带表头的表格 CSV。100% 在浏览器本地运行，无需上传。"
slug: json-to-csv
canonicalURL: "https://portalaser.cn/zh/tools/json-to-csv/"
showToc: false
---

JSON 转 CSV 转换器是一款免费的在线工具，把扁平对象数组转换为可直接在 Excel、Google Sheets 或任意电子表格中打开的 CSV。粘贴你的 JSON，点击 Convert，即可得到由所有对象键的并集组成的表头行，后面每对象一行。包含逗号、引号或换行符的字段会自动加引号并转义，保证文件有效。

这是把 API 响应、配置导出或日志转储的数据快速转换为表格格式进行分析的最快捷方式。Copy 复制 CSV 文本，Example 加载两对象示例，让你直观看到输出结构。

转换完全在你的浏览器中完成，因此 JSON 不会被上传、记录或存储。粘贴对象数组即可转换。
{{< ad-unit >}}

<div class="tool-app" id="app-json-to-csv">
  <div class="tool-field">
    <label class="tool-label" for="json-to-csv-input">JSON Input (array of objects)</label>
    <textarea id="json-to-csv-input" class="tool-textarea" spellcheck="false" placeholder='[{"name":"Alice","age":30}]'></textarea>
  </div>
  <div class="tool-actions">
    <button type="button" id="json-to-csv-btn-convert" class="tool-btn">Convert</button>
    <button type="button" id="json-to-csv-btn-copy" class="tool-btn tool-btn-secondary">Copy Result</button>
    <button type="button" id="json-to-csv-btn-example" class="tool-btn tool-btn-secondary">Example</button>
    <button type="button" id="json-to-csv-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="json-to-csv-output">CSV Output</label>
    <pre id="json-to-csv-output" class="tool-output"></pre>
  </div>
  <p id="json-to-csv-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/json-to-csv.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "csv-to-json" "csv-viewer" "json-formatter" "json-minifier" >}}
