---
title: "CSV 转 JSON - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费在线 CSV 转 JSON 转换器：把逗号分隔的数据转换为整洁的 JSON 对象数组，支持带引号字段。在浏览器中运行，无需上传。"
slug: csv-to-json
canonicalURL: "https://portalaser.cn/zh/tools/csv-to-json/"
showToc: false
---

CSV 转 JSON 转换器是一款免费的在线工具，把逗号分隔的值转换为整洁的 JSON 对象数组。粘贴你的 CSV，决定第一行是否为表头，然后点击 Convert 得到缩进美观的 JSON，可直接放入代码或 API。如果第一行是列名，每个数据行会成为以这些列名作为键的对象；否则使用通用列键。

解析器能正确处理带引号的字段、转义双引号和引号内的逗号，因此电子表格导出的杂乱数据也能正确解析。Copy 把 JSON 复制到剪贴板，Example 加载小示例供你立即体验。

由于转换完全在你的浏览器中运行，数据永远不会离开设备——不上传文件，也不记录任何内容。粘贴 CSV，按需勾选表头选项，即可转换。
{{< ad-unit >}}

<div class="tool-app" id="app-csv-to-json">
  <div class="tool-field">
    <label class="tool-label" for="csv-to-json-input">CSV Input</label>
    <textarea id="csv-to-json-input" class="tool-textarea" spellcheck="false" placeholder="name,age&#10;Alice,30"></textarea>
  </div>
  <div class="tool-field">
    <label class="tool-label"><input type="checkbox" id="csv-to-json-header" checked> First row is header</label>
  </div>
  <div class="tool-actions">
    <button type="button" id="csv-to-json-btn-convert" class="tool-btn">Convert</button>
    <button type="button" id="csv-to-json-btn-copy" class="tool-btn tool-btn-secondary">Copy Result</button>
    <button type="button" id="csv-to-json-btn-example" class="tool-btn tool-btn-secondary">Example</button>
    <button type="button" id="csv-to-json-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="csv-to-json-output">JSON Output</label>
    <pre id="csv-to-json-output" class="tool-output"></pre>
  </div>
  <p id="csv-to-json-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/csv-to-json.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "csv-viewer" "json-to-csv" "json-formatter" "xml-formatter" >}}
