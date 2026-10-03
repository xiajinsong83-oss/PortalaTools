# Tool Page Specification — portalaser.cn

This document is the **single source of truth** for producing tool pages.
Follow it exactly. Read the two seed files before writing anything:

- `content/tools/json-formatter.md` + `static/js/json-formatter.js` (seed 1)
- `content/tools/base64-encoder.md` + `static/js/base64-encoder.js` (seed 2)
- `tests/seed.test.js` (seed test file)

The seeds ARE the pattern. When in doubt, match the seeds.

---

## 1. File layout for one tool

- `content/tools/<slug>.md` — page content (front matter + intro + UI + scripts)
- `static/js/<slug>.js` — vanilla JS implementation
- Tests live in `tests/batchN.test.js` (one shared test file per batch)

## 2. Front matter (exact schema)

```yaml
---
title: "<Unique SEO title — see section 7>"
date: 2026-10-02
lastmod: 2026-10-02
description: "<Unique meta description, 120–155 characters>"
slug: <slug>
canonicalURL: "https://portalaser.cn/tools/<slug>/"
showToc: false
---
```

`slug` must equal the filename slug. `canonicalURL` MUST use `https://portalaser.cn/tools/<slug>/` — the domain is confirmed.

## 3. Body structure (order is mandatory)

```markdown
<Intro: 2–3 paragraphs, original English, 80–150 words — see section 7>

{{< ad-unit >}}

<div class="tool-app" id="app-<slug>">
  ... UI (section 4) ...
</div>

<script src="/js/toolkit.js" defer></script>
<script src="/js/<slug>.js" defer></script>

{{< ad-unit >}}

{{< privacy-note >}}

{{< related-tools "related-a" "related-b" "related-c" "related-d" >}}
```

The `related-tools` shortcode renders only existing pages, so use 4–6 slugs
from the official link map in section 8 (order does not matter).

**Shared toolkit:** `static/js/toolkit.js` (included first on every page)
provides `PortalaTools.onReady(fn)`, `PortalaTools.setStatus(id, text, isError)`
and `PortalaTools.copyText(text, okCb, failCb)`. Use them instead of writing
your own clipboard/status code.

## 4. UI conventions

- IDs: `<slug>-input`, `<slug>-output`, `<slug>-status`, buttons `<slug>-btn-<action>`.
- Classes (defined in `static/css/custom.css`):
  - `.tool-app` — card shell (always on the wrapper div)
  - `.tool-field` / `.tool-label` — labeled field
  - `.tool-input` (input/select), `.tool-textarea` (textarea)
  - `.tool-actions` — button row; `.tool-btn` primary, `.tool-btn-secondary` others
  - `.tool-output` (pre) — output area; use `textContent`, never innerHTML for data
  - `.tool-status` — status line; add `.tool-status-ok` or `.tool-status-error` class
  - `.tool-hint` — small helper text
  - `.tool-grid-2` — two-column responsive grid for converter-style pairs
  - `.tool-table` — for rendered tables (CSV viewer)
  - `.tool-time-display` — timer/stopwatch big digits
- Buttons to include where sensible: `Copy Result` (primary action), `Clear`,
  `Example` (prefilled sample input). Keep the tool usable without any of them.
- NO `<input type="file">` anywhere. NO file uploads. Paste text only.
- A `Copy` button uses `navigator.clipboard.writeText` with a
  `document.execCommand('copy')` fallback and shows "Copied!" in the status line.

## 5. JS conventions (strict)

1. **Vanilla JS only.** No frameworks, no jQuery. Only the three MIT vendor
   libs in `static/js/vendor/` may be used, and only by these tools:
   - `md5-hash-generator` → `md5.min.js` (blueimp-md5, MIT)
   - `qr-code-generator` → `qrcode.js` (qrcode-generator, MIT)
   - `markdown-previewer` → `marked.min.js` (marked, MIT)
   All three are UMD: usable in the browser as globals (`md5`, `qrcode`,
   `marked`) and `require()`-able in Node for tests.
2. Whole file wrapped in an IIFE: `(function () { 'use strict'; ... })();`
3. **Pure functions first, DOM wiring last.** All computation lives in named
   pure functions that never touch `document`, `window`, `navigator`.
4. **Node-test guard:** DOM wiring must be skipped in Node, and pure functions
   exported. End every file with:

   ```js
   if (typeof module !== 'undefined' && module.exports) {
     module.exports = { pureFn1: pureFn1, pureFn2: pureFn2 /*, ... */ };
   }
   ```

   Wrap the DOM wiring inside `if (typeof document !== 'undefined') { ... }`.
5. Async pure functions (e.g. `crypto.subtle` SHA-256/512) are fine; export
   them and let tests `await` them.
6. Errors: `try/catch`, show a human-readable message in the status element
   with class `.tool-status-error`. Never fail silently, never `alert()`.
7. No `fetch`/XHR/WebSocket. No `localStorage`/`sessionStorage` for user data.
8. UTF-8: use `TextEncoder`/`TextDecoder` (never raw `btoa` on non-Latin1).
9. Large numbers: use `BigInt` where values can exceed 2^53 (binary
   converter, timestamp millisecond values).
10. Use `crypto.getRandomValues` (or `crypto.randomUUID`) for randomness.
11. Comments: brief, English. No copied code from GPL projects.

## 6. Smoke tests (required, per batch)

Write `tests/batchN.test.js` (Node, `assert` only) that requires **every**
tool JS in your batch via `require('../../static/js/<slug>.js')` and asserts
**at least two meaningful cases per tool** using known test vectors, e.g.:

- `base64-encoder`: `encodeBase64('hello') === 'aGVsbG8='`, decode round-trip
- `md5-hash-generator`: `generateMd5('abc') === '900150983cd24fb0d6963f7d28e17f72'`
- `sha256-hash-generator`: SHA-256 of "abc" === `ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad`
- converters: `1 km to m === 1000`, `0 °C === 32 °F`, etc.
- `json-formatter`: format/minify/validate known inputs

For vendor-lib tools, `require('../../static/js/vendor/md5.min.js')` etc. in
the test file as needed. Run with `node tests/batchN.test.js` — must print a
`PASS` line per tool and exit 0. Report the full output in your final message.

**Do NOT run `hugo build` / `hugo server`** — the parent orchestrates builds.

## 7. SEO copy rules

- Every intro is **original** English — never reuse another page's wording,
  never copy from any third-party site, never translate other sites' content.
- Title: `"<Primary Keyword> — Free Online Tool"` style, unique, ≤ 60 chars,
  naturally includes the target keyword (e.g. "JSON Formatter & Validator").
- Meta description: unique, 120–155 chars, includes the keyword and a privacy
  angle ("runs 100% in your browser", "no upload", "free").
- Intro must cover: what the tool does, how to use it (one short paragraph),
  and the browser-local privacy assurance. Vary the phrasing per page.
- One H1 only — the page title renders as the H1; do not add `#` headings
  above it, use `**bold**` lead-ins for intro emphasis instead.
- Do not invent testimonials, fake stats, or fake user data.

## 8. Official related-tools link map (use exactly these)

| slug | related slugs |
| ---- | ------------- |
| json-formatter | json-minifier, json-string-escape, base64-encoder, csv-to-json, jwt-decoder |
| json-minifier | json-formatter, json-string-escape, base64-encoder, xml-formatter |
| base64-encoder | url-encoder, md5-hash-generator, json-string-escape, html-entity-encoder, uuid-generator |
| url-encoder | base64-encoder, html-entity-encoder, slug-generator, json-string-escape |
| timestamp-converter | date-difference-calculator, age-calculator, random-number-generator, timer-stopwatch |
| md5-hash-generator | sha256-hash-generator, sha512-hash-generator, base64-encoder, uuid-generator |
| sha256-hash-generator | sha512-hash-generator, md5-hash-generator, uuid-generator, random-password-generator |
| sha512-hash-generator | sha256-hash-generator, md5-hash-generator, uuid-generator, random-password-generator |
| regex-tester | text-diff, case-converter, whitespace-remover, text-line-sorter |
| qr-code-generator | base64-encoder, url-encoder, json-formatter, uuid-generator |
| hex-to-rgb-converter | color-contrast-checker, slug-generator, case-converter, percentage-calculator |
| markdown-previewer | html-entity-encoder, case-converter, text-diff, word-counter |
| jwt-decoder | base64-encoder, json-formatter, sha256-hash-generator, uuid-generator |
| random-password-generator | uuid-generator, sha256-hash-generator, random-number-generator, md5-hash-generator, base64-encoder |
| random-number-generator | random-password-generator, percentage-calculator, date-difference-calculator, tip-calculator |
| binary-converter | hex-to-rgb-converter, data-size-converter, base64-encoder, temperature-converter |
| xml-formatter | json-formatter, json-minifier, html-entity-encoder, csv-to-json |
| csv-viewer | csv-to-json, json-to-csv, xml-formatter, text-line-sorter |
| case-converter | slug-generator, whitespace-remover, word-counter, text-line-sorter |
| percentage-calculator | discount-calculator, tip-calculator, age-calculator, bmi-calculator |
| age-calculator | date-difference-calculator, bmi-calculator, percentage-calculator, timestamp-converter |
| bmi-calculator | age-calculator, percentage-calculator, weight-converter, length-converter |
| cron-parser | timestamp-converter, date-difference-calculator, timer-stopwatch |
| html-entity-encoder | url-encoder, base64-encoder, json-string-escape, markdown-previewer |
| roman-numeral-converter | binary-converter, date-difference-calculator, percentage-calculator, random-number-generator |
| word-counter | line-counter, case-converter, text-diff, remove-duplicate-lines |
| line-counter | word-counter, text-line-sorter, remove-duplicate-lines, whitespace-remover |
| remove-duplicate-lines | text-line-sorter, line-counter, word-counter, csv-viewer |
| text-line-sorter | remove-duplicate-lines, line-counter, whitespace-remover, case-converter |
| whitespace-remover | text-line-sorter, case-converter, word-counter, html-entity-encoder |
| lorem-ipsum-generator | word-counter, case-converter, markdown-previewer, text-diff |
| svg-previewer | markdown-previewer, json-formatter, html-entity-encoder, color-contrast-checker |
| json-string-escape | json-formatter, json-minifier, html-entity-encoder, base64-encoder |
| timer-stopwatch | timestamp-converter, cron-parser, date-difference-calculator, random-number-generator |
| temperature-converter | length-converter, weight-converter, data-size-converter, speed-converter |
| length-converter | weight-converter, temperature-converter, data-size-converter, bmi-calculator |
| weight-converter | length-converter, temperature-converter, bmi-calculator, data-size-converter |
| uuid-generator | md5-hash-generator, random-password-generator, sha256-hash-generator, base64-encoder |
| text-diff | regex-tester, case-converter, word-counter, markdown-previewer |
| discount-calculator | percentage-calculator, tip-calculator, loan-calculator, bmi-calculator |
| tip-calculator | percentage-calculator, discount-calculator, loan-calculator, random-number-generator |
| loan-calculator | percentage-calculator, discount-calculator, date-difference-calculator, tip-calculator |
| date-difference-calculator | age-calculator, timestamp-converter, percentage-calculator, timer-stopwatch |
| data-size-converter | binary-converter, speed-converter, length-converter, weight-converter |
| speed-converter | temperature-converter, data-size-converter, length-converter, weight-converter |
| csv-to-json | csv-viewer, json-to-csv, json-formatter, xml-formatter |
| json-to-csv | csv-to-json, csv-viewer, json-formatter, json-minifier |
| slug-generator | url-encoder, case-converter, html-entity-encoder, whitespace-remover |
| color-contrast-checker | hex-to-rgb-converter, svg-previewer, case-converter, percentage-calculator |
| morse-code-translator | base64-encoder, html-entity-encoder, md5-hash-generator, case-converter |

## 9. Prohibited (hard constraints)

- No file upload / storage / video-download / scraping / UGC features.
- No external API calls (IP lookup, port probe, etc.) — zero network requests.
- No GPL code or libraries; MIT/BSD/CC0 only.
- No third-party copy-pasted content.
- Do not touch files outside your assigned batch (other batches' content/,
  `static/js/` files, config, layouts, README).
- Do not run hugo build/server.
