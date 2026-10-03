---
title: "URL Slug 生成器 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费在线 URL slug 生成器：把任意标题转换为干净、SEO 友好的小写连字符 slug，去除变音符号。在浏览器中运行，无需注册。"
slug: slug-generator
canonicalURL: "https://portalaser.cn/zh/tools/slug-generator/"
showToc: false
---

URL Slug 生成器是一款免费的在线工具，把任意标题转换为干净、SEO 友好的网页 slug。输入标题或短语，工具立即生成小写 slug：重音和变音符号会被去除（“Café” 变为 “cafe”），所有非字母数字字符折叠为单个连字符，行首行尾的连字符会被修剪。结果就是博客、文档和电商网站使用的那种简短可读的 URL 片段。

它能优雅处理混合标点、符号和非拉丁字符——无法音译的单词会被直接丢弃而不是产生乱码，因此 “Hello, World! 你好” 变为 “hello-world”。slug 随输入实时更新，Copy 直接复制到剪贴板。

转换在你的浏览器本地运行，文本不会被发送到服务器或存储。输入标题并复制生成的 slug。
{{< ad-unit >}}

<div class="tool-app" id="app-slug-generator">
  <div class="tool-field">
    <label class="tool-label" for="slug-generator-input">Title or text</label>
    <input type="text" id="slug-generator-input" class="tool-input" placeholder="Type a title to turn into a slug…">
  </div>
  <div class="tool-actions">
    <button type="button" id="slug-generator-btn-copy" class="tool-btn tool-btn-secondary">Copy Slug</button>
    <button type="button" id="slug-generator-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="slug-generator-output">Slug</label>
    <pre id="slug-generator-output" class="tool-output"></pre>
  </div>
  <p id="slug-generator-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/slug-generator.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "url-encoder" "case-converter" "html-entity-encoder" "whitespace-remover" >}}
