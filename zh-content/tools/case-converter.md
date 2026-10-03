---
title: "大小写转换器 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费大小写转换工具：一键切换 UPPERCASE、lowercase、camelCase、snake_case 等。100% 在浏览器本地运行，无需上传、无需注册。"
slug: case-converter
canonicalURL: "https://portalaser.cn/zh/tools/case-converter/"
showToc: false
---

大小写转换器是一款免费的在线工具，一键即可把文本重写为任意命名规范。粘贴一句话、变量名、标题或 slug 草稿，然后从 UPPERCASE、lowercase、Title Case、Sentence case、camelCase、PascalCase、snake_case 或 kebab-case 中选择。这是把 “hello world from portala” 变成 helloWorldFromPortala、HelloWorldFromPortala、hello_world_from_portala 或 hello-world-from-portala 的最快方式，无需逐个单词手动修改。

对于重命名变量的开发者、润色标题的写作者，以及任何需要准备 URL slug 或配置键的人来说尤其方便。

所有转换都在你的浏览器本地运行，因此粘贴的文本不会被上传或存储。

使用方法：粘贴文本，点击目标样式的按钮，然后 Copy Result 复制结果。Example 加载示例短语，Clear 清空输入框。
{{< ad-unit >}}

<div class="tool-app" id="app-case-converter">
  <div class="tool-field">
    <label class="tool-label" for="case-converter-input">Text Input</label>
    <textarea id="case-converter-input" class="tool-textarea" spellcheck="false" placeholder="Type or paste your text here…"></textarea>
  </div>
  <div class="tool-actions">
    <button type="button" id="case-converter-btn-upper" class="tool-btn tool-btn-secondary">UPPERCASE</button>
    <button type="button" id="case-converter-btn-lower" class="tool-btn tool-btn-secondary">lowercase</button>
    <button type="button" id="case-converter-btn-title" class="tool-btn tool-btn-secondary">Title Case</button>
    <button type="button" id="case-converter-btn-sentence" class="tool-btn tool-btn-secondary">Sentence case</button>
    <button type="button" id="case-converter-btn-camel" class="tool-btn tool-btn-secondary">camelCase</button>
    <button type="button" id="case-converter-btn-pascal" class="tool-btn tool-btn-secondary">PascalCase</button>
    <button type="button" id="case-converter-btn-snake" class="tool-btn tool-btn-secondary">snake_case</button>
    <button type="button" id="case-converter-btn-kebab" class="tool-btn tool-btn-secondary">kebab-case</button>
    <button type="button" id="case-converter-btn-copy" class="tool-btn">Copy Result</button>
    <button type="button" id="case-converter-btn-example" class="tool-btn tool-btn-secondary">Example</button>
    <button type="button" id="case-converter-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="case-converter-output">Output</label>
    <pre id="case-converter-output" class="tool-output"></pre>
  </div>
  <p id="case-converter-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/case-converter.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "slug-generator" "whitespace-remover" "word-counter" "text-line-sorter" >}}
