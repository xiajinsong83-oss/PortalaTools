---
title: "字数统计 - 免费在线工具"
date: 2026-10-02
lastmod: 2026-10-02
description: "免费在线字数统计工具：边输入边实时统计字数、字符、句子与阅读时长。在浏览器中运行，无需上传、无需注册。"
slug: word-counter
canonicalURL: "https://portalaser.cn/zh/tools/word-counter/"
showToc: false
---

字数统计是一款免费的在线工具，实时统计你的文本。粘贴或输入到输入框，即可立即看到字数、总字符、不含空格字符、句子数、段落数，以及按舒适阅读速度 200 字/分钟估算的阅读时长。它是为需要在作文、广告、meta 描述或社媒帖子中保持字数上限的写作者、学生、博主和营销人员打造的。

无需安装、无需提交。输入的同时统计就在你的浏览器内完成，草稿和敏感笔记永远不会离开设备——不上传、不追踪、不存储。

使用方法：直接在左侧输入或粘贴草稿，实时查看数字变化。用 Example 加载示例段落，或用 Clear 在完成后重置输入框。
{{< ad-unit >}}

<div class="tool-app" id="app-word-counter">
  <div class="tool-field">
    <label class="tool-label" for="word-counter-input">Type or paste your text</label>
    <textarea id="word-counter-input" class="tool-textarea" spellcheck="true" placeholder="Start typing here… the counts update as you go."></textarea>
  </div>
  <div class="tool-actions">
    <button type="button" id="word-counter-btn-example" class="tool-btn tool-btn-secondary">Example</button>
    <button type="button" id="word-counter-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-grid-2">
    <p>Words: <strong id="word-counter-words">0</strong></p>
    <p>Characters: <strong id="word-counter-chars">0</strong></p>
    <p>Characters (no spaces): <strong id="word-counter-chars-no-spaces">0</strong></p>
    <p>Sentences: <strong id="word-counter-sentences">0</strong></p>
    <p>Paragraphs: <strong id="word-counter-paragraphs">0</strong></p>
    <p>Reading time: <strong id="word-counter-reading">0 min</strong></p>
  </div>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/word-counter.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "line-counter" "case-converter" "text-diff" "remove-duplicate-lines" >}}
