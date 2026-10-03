---
title: "Lorem Ipsum 生成器 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费在线 Lorem Ipsum 生成器：选择段落数与每段词数，生成经典占位文本。在浏览器中运行，无需上传。"
slug: lorem-ipsum-generator
canonicalURL: "https://portalaser.cn/zh/tools/lorem-ipsum-generator/"
showToc: false
---

Lorem Ipsum 生成器是一款免费的在线工具，为原型、线框图和版式演示生成经典占位文本。选择需要的段落数以及每段大致词数，点击生成，即可得到一段标准的西塞罗风格假文。在正式文案准备好之前，这是快速填充设计、又不必手写填充文字的方式。

文本在你的浏览器本地生成，不上传、不追踪——你可以自由尝试各种长度，而不会把任何内容发送到任何地方。

使用方法：设置段落数（1 到 10）和每段词数（10 到 100），点击 Generate。用 Copy 把结果直接复制到剪贴板。
{{< ad-unit >}}

<div class="tool-app" id="app-lorem-ipsum-generator">
  <div class="tool-grid-2">
    <div class="tool-field">
      <label class="tool-label" for="lorem-ipsum-generator-paragraphs">Paragraphs (1-10)</label>
      <input type="number" id="lorem-ipsum-generator-paragraphs" class="tool-input" min="1" max="10" value="3" />
    </div>
    <div class="tool-field">
      <label class="tool-label" for="lorem-ipsum-generator-words">Words per paragraph (10-100)</label>
      <input type="number" id="lorem-ipsum-generator-words" class="tool-input" min="10" max="100" value="40" />
    </div>
  </div>
  <div class="tool-actions">
    <button type="button" id="lorem-ipsum-generator-btn-generate" class="tool-btn">Generate</button>
    <button type="button" id="lorem-ipsum-generator-btn-copy" class="tool-btn tool-btn-secondary">Copy</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="lorem-ipsum-generator-output">Generated text</label>
    <pre id="lorem-ipsum-generator-output" class="tool-output"></pre>
  </div>
  <p id="lorem-ipsum-generator-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/lorem-ipsum-generator.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "word-counter" "case-converter" "markdown-previewer" "text-diff" >}}
