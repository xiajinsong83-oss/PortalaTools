---
title: "Text Diff Checker - Free Online Tool"
date: 2026-10-02
lastmod: 2026-10-02
description: "Free online text diff checker. Compare two texts line by line to see added, removed and unchanged lines. Runs 100% in your browser, no upload."
slug: text-diff
canonicalURL: "https://portalaser.cn/tools/text-diff/"
showToc: false
---

**Text Diff Checker** is a free online tool that compares two blocks of text line by line and highlights exactly what changed. Paste your original version on the left and the revised version on the right, press *Compare*, and get a clear side-by-side style result where removed lines are marked with `-`, added lines with `+`, and unchanged lines are shown without a marker. A small summary tells you how many lines were added, removed and left untouched.

The comparison is built on the classic longest-common-subsequence (LCS) algorithm, the same foundation used by professional diff utilities, so the output is minimal and easy to read rather than noisy. It works for code, essays, config files, JSON dumps and any other line-oriented text.

Because the diff is computed locally in your browser, your text never leaves the device - nothing is uploaded or logged. Paste both versions, click **Compare**, and use **Example** to load a sample or **Clear** to reset.

{{< ad-unit >}}

<div class="tool-app" id="app-text-diff">
  <div class="tool-grid-2">
    <div class="tool-field">
      <label class="tool-label" for="text-diff-original">Original text</label>
      <textarea id="text-diff-original" class="tool-textarea" spellcheck="false" placeholder="Paste the original text here…"></textarea>
    </div>
    <div class="tool-field">
      <label class="tool-label" for="text-diff-changed">Changed text</label>
      <textarea id="text-diff-changed" class="tool-textarea" spellcheck="false" placeholder="Paste the changed text here…"></textarea>
    </div>
  </div>
  <div class="tool-actions">
    <button type="button" id="text-diff-btn-compare" class="tool-btn">Compare</button>
    <button type="button" id="text-diff-btn-example" class="tool-btn tool-btn-secondary">Example</button>
    <button type="button" id="text-diff-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="text-diff-output">Diff result</label>
    <pre id="text-diff-output" class="tool-output"></pre>
  </div>
  <p id="text-diff-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/text-diff.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "regex-tester" "case-converter" "word-counter" "markdown-previewer" >}}
