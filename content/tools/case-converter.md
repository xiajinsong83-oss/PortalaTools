---
title: "Case Converter - Free Online Tool"
date: 2026-10-02
lastmod: 2026-10-02
description: "Free case converter: switch text to UPPERCASE, lowercase, camelCase, snake_case and more instantly. Runs 100% in your browser - no upload, no signup."
slug: case-converter
canonicalURL: "https://portalaser.cn/tools/case-converter/"
showToc: false
---

**Case Converter** is a free online tool that rewrites your text into any naming convention with one click. Paste a sentence, variable name, heading or slug draft, then choose from UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case or kebab-case. It is the fastest way to turn "hello world from portala" into `helloWorldFromPortala`, `HelloWorldFromPortala`, `hello_world_from_portala` or `hello-world-from-portala` without hand-editing every word.

This is especially handy for developers renaming variables, writers polishing headings, and anyone preparing URL slugs or config keys.

All transformations run locally in your browser, so the text you paste is never uploaded or stored.

How to use it: paste your text, click the button for the target style you want, then **Copy Result** to grab it. **Example** loads a sample phrase and **Clear** empties the boxes.

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
