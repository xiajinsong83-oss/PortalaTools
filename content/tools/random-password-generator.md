---
title: "Random Password Generator - Free Online Tool"
date: 2026-10-02
lastmod: 2026-10-02
description: "Free random password generator: create strong, secure passwords of any length with mixed character sets. Runs 100% in your browser - no upload, no signup."
slug: random-password-generator
canonicalURL: "https://portalaser.cn/tools/random-password-generator/"
showToc: false
---

**Random Password Generator** is a free online tool that creates strong, unpredictable passwords using the same cryptographically secure random number generator your browser uses for TLS and banking sessions. Unlike weak Math.random() generators, it uses `crypto.getRandomValues`, so the output is genuinely hard to guess. Set the length, choose which character groups to include, optionally exclude ambiguous look-alike characters, and get a fresh password every time you press Generate. A built-in strength label scores the result so you know at a glance whether it is good enough for a sensitive account.

Everything runs locally in your browser. No password you generate is ever sent to a server, logged or stored, which makes this safe even when creating credentials for real accounts.

How to use it: drag the length slider (4 to 128 characters), tick the character groups you want, and click **Generate**. Use **Copy** to put the password on your clipboard and **Clear** to start over.

{{< ad-unit >}}

<div class="tool-app" id="app-random-password-generator">
  <div class="tool-field">
    <label class="tool-label" for="random-password-generator-length">Password length: <span id="random-password-generator-length-value">16</span></label>
    <input type="range" id="random-password-generator-length" class="tool-input" min="4" max="128" value="16">
  </div>
  <div class="tool-field">
    <label class="tool-label">Character sets</label>
    <label class="tool-hint"><input type="checkbox" id="random-password-generator-upper" checked> Uppercase (A-Z)</label>
    <label class="tool-hint"><input type="checkbox" id="random-password-generator-lower" checked> Lowercase (a-z)</label>
    <label class="tool-hint"><input type="checkbox" id="random-password-generator-digits" checked> Digits (0-9)</label>
    <label class="tool-hint"><input type="checkbox" id="random-password-generator-symbols" checked> Symbols (!@#$…)</label>
    <label class="tool-hint"><input type="checkbox" id="random-password-generator-ambiguous"> Exclude ambiguous characters (I, l, 1, O, 0)</label>
  </div>
  <div class="tool-actions">
    <button type="button" id="random-password-generator-btn-generate" class="tool-btn">Generate</button>
    <button type="button" id="random-password-generator-btn-copy" class="tool-btn tool-btn-secondary">Copy</button>
    <button type="button" id="random-password-generator-btn-clear" class="tool-btn tool-btn-secondary">Clear</button>
  </div>
  <div class="tool-field">
    <label class="tool-label" for="random-password-generator-output">Generated password</label>
    <pre id="random-password-generator-output" class="tool-output"></pre>
  </div>
  <p id="random-password-generator-status" class="tool-status"></p>
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/random-password-generator.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "uuid-generator" "sha256-hash-generator" "random-number-generator" "md5-hash-generator" "base64-encoder" >}}
