# Portala Tools

**Portala Tools** (https://portalaser.cn) is a free, privacy-first collection of online utilities — formatters, encoders, hash generators, calculators, converters and more. It is built as a fast static site and serves a growing set of **50 local-only browser tools**. The defining feature is that **every tool runs 100% inside the visitor's browser**: nothing is uploaded, nothing is stored, and no signup is ever required.

- **Stack:** Hugo (static site generator) + PaperMod theme, deployed to **GitHub Pages** and fronted by the **Cloudflare** CDN.
- **Monetization:** **Google AdSense** ads placed automatically around each tool.
- **Compliance:** built-in cookie consent banner (GDPR/CCPA friendly), plus dedicated **Privacy Policy**, **Terms of Service** and **DMCA** pages.
- **Audience:** all-English SEO aimed at developers and everyday users.

---

## Project structure

```
.
├── hugo.toml                      # Site config: baseURL, menus, params, AdSense/GA keys
├── SPEC.md                        # Tool-page specification — the single source of truth for adding tools
├── README.md                      # This file
├── .gitignore                      # Ignores /public, resources/_gen, Hugo lock file, scratch
├── content/
│   ├── privacy.md                 # Privacy Policy page (top-level page)
│   ├── terms.md                   # Terms of Service page (top-level page)
│   ├── dmca.md                    # DMCA copyright policy page (top-level page)
│   └── tools/
│       ├── _index.md             # "All Tools" listing page
│       ├── json-formatter.md      # Seed tool page 1 (copy this pattern)
│       └── base64-encoder.md      # Seed tool page 2
├── layouts/
│   ├── partials/
│   │   ├── extend_head.html       # Extra <head> injections (e.g. verification tags)
│   │   ├── extend_footer.html     # Cookie banner markup + CSS/JS includes
│   │   └── templates/             # Vendored PaperMod overrides (opengraph, twitter, schema, images)
│   └── shortcodes/
│       ├── ad-unit.html           # Renders a Google AdSense unit (or a placeholder)
│       ├── privacy-note.html      # Local-processing assurance note under each tool
│       └── related-tools.html     # "Related tools" link grid
├── static/
│   ├── favicon.svg               # Site icon (also used as apple-touch icon)
│   ├── css/
│   │   ├── custom.css            # Tool UI classes (.tool-app, .tool-input, .tool-btn, ...)
│   │   └── cookie-banner.css     # Cookie banner styling
│   └── js/
│       ├── toolkit.js            # Shared helpers: onReady, setStatus, copyText
│       ├── cookie-banner.js      # localStorage consent logic (key: portalaser_cookie_consent)
│       ├── json-formatter.js      # Tool implementation (vanilla JS, IIFE, Node-exported pure fns)
│       ├── base64-encoder.js
│       └── vendor/               # MIT-only third-party libs (md5.min.js, qrcode.js, marked.min.js)
├── tests/
│   └── seed.test.js              # Node smoke tests for the seed tools
├── themes/
│   └── PaperMod/                  # PaperMod v8 theme (vendored, MIT license)
└── .github/
    └── workflows/
        └── deploy.yml            # Builds with Hugo and deploys to GitHub Pages on push to main
```

> Note: `public/` is the generated output directory and is **gitignored** — it is produced at build time and never committed.

---

## Tech stack & versions

| Component | Version | Notes |
|-----------|---------|-------|
| Hugo (extended) | **≥ 0.146** (developed & built with **0.167.0**) | Required for Goldmark `unsafe` rendering; CI pins 0.167.0 |
| PaperMod theme | **v8.0** | Vendored under `themes/PaperMod/`, **MIT** license |
| Third-party JS libs | blueimp-md5, qrcode-generator, marked | MIT/UMD, in `static/js/vendor/`, used only by their assigned tools |
| Hosting | GitHub Pages | Built by GitHub Actions |
| CDN / DNS | Cloudflare | Free tier, proxy (orange cloud) in front of Pages |

---

## Build & preview locally

You need the **extended** Hugo binary installed.

```bash
# Live-reload dev server with drafts enabled
hugo server -D

# Production build (minified) into ./public
hugo --minify
```

The dev server prints a local URL (usually http://localhost:1313/). Do **not** rely on the committed `public/` folder — regenerate it.

---

## Before you go live

The config in `hugo.toml` is almost production-ready. Before launch:

1. **Google AdSense client ID (the only required placeholder):** set `params.googleAdsenseClient` to your publisher ID, e.g. `"ca-pub-1234567890123456"`. While it is empty, `layouts/shortcodes/ad-unit.html` renders a lightweight "Advertisement" placeholder instead of real units.
2. **(Optional) Google Analytics 4:** uncomment and fill the `[params.analytics.google]` block —
   ```toml
   [params.analytics.google]
     id = "G-XXXXXXXXXX"
     SiteVerificationTag = ""
   ```
3. Confirm `baseURL = "https://portalaser.cn/"`.

No other placeholders exist — the site name ("Portala Tools") and domain are already hard-coded correctly throughout.

---

## How to add a new tool

Follow **`SPEC.md`** exactly; the seed files (`json-formatter` + `base64-encoder`) are the pattern.

1. Copy a seed page to `content/tools/<slug>.md` and fill in the front matter (unique title, 120–155 char `description`, `slug`, `canonicalURL: "https://portalaser.cn/tools/<slug>/"`, `showToc: false`).
2. Add the tool logic as vanilla JS in `static/js/<slug>.js` — an IIFE, pure functions first, DOM wiring last, Node-exported pure functions, no `fetch`/XHR and no `localStorage` for user data.
3. Add a smoke test in `tests/batchN.test.js` (Node `assert` only) with at least two known-vector cases per tool.
4. Run the tests:
   ```bash
   node tests/batchN.test.js
   ```
   Each tool must print a `PASS` line and the file must exit 0.
5. Reference the tool in the related-tools link map (SPEC §8) and push. The CI build will run automatically.

Hard constraints: no file uploads, no external API calls, no GPL code, no third-party copy-pasted content.

---

## Deployment: GitHub Pages

1. In the GitHub repo, go to **Settings → Pages**.
2. Set **Source** to **"GitHub Actions"** (not a branch folder).
3. Push to `main`.

The included workflow `.github/workflows/deploy.yml` then:
- checks out the repo (full history),
- sets up **Hugo 0.167.0 extended** (`peaceiris/actions-hugo`),
- runs `hugo --minify`,
- uploads `./public` as a Pages artifact,
- deploys it via `actions/deploy-pages`.

Manual runs are also supported through the **workflow_dispatch** (Run workflow) button.

---

## Connecting Cloudflare to portalaser.cn

1. In Cloudflare, **Add site** → choose the **Free** plan.
2. Replace your domain's nameservers with the ones Cloudflare gives you.
3. In the DNS tab, point the domain (and `www`) to GitHub Pages, and enable the **proxy (orange cloud)** so traffic flows through Cloudflare.
4. Set **SSL/TLS mode to Full (strict)** (required when Pages provides its own certificate).
5. Use sensible caching: static assets (`/js/`, `/css/`, fonts) cache well; HTML can be cached briefly or bypassed so new deploys appear quickly.

### CRITICAL — do not block Googlebot

Because the entire SEO strategy depends on being indexed, make sure Cloudflare never challenges or blocks Googlebot:

- Keep **Bot Fight Mode OFF**, or configure it (Super Bot Fight Mode / WAF) to **allow verified bots**, specifically Googlebot.
- Keep **"Under Attack Mode" OFF** in normal operation — a managed challenge will block crawlers.
- Set the **Security Level** low enough that Googlebot is never presented with a challenge page.
- Do **not** firewall or block known Google IP ranges.
- After deploying, verify crawling in **Google Search Console → URL Inspection → Test Live URL Fetch**; if fetch fails, inspect Cloudflare logs for a challenge/wall.

---

## Google AdSense

Once your publisher ID is filled in (`params.googleAdsenseClient`), ad units appear **above and below every tool page automatically** — the `{{< ad-unit >}}` shortcode is already wired into each tool template. No per-page changes are needed.

Compliance notes:

- Do not click your own ads or encourage others to do so; AdSense prohibits click manipulation.
- Serve advertising cookies only after consent (the cookie banner handles this; essential site behavior does not depend on ads).
- Keep ad content legal and non-deceptive; do not place ads that mislead users into clicking.

---

## Google Search Console & sitemap

- **Verify ownership** in Search Console — easiest via a **DNS TXT record added in Cloudflare**, or paste the HTML tag into `layouts/partials/extend_head.html`.
- **Submit the sitemap:** `https://portalaser.cn/sitemap.xml`.
- `robots.txt` is **auto-generated** because `enableRobotsTXT = true` in `hugo.toml`; do not commit a static one.

---

## DMCA handling

The site publishes its copyright policy at **https://portalaser.cn/dmca/**. Because Portala Tools hosts **no user uploads** (all processing is client-side), infringement claims are limited to our own page content. Takedown notices and counter-notifications are handled per the process described on that page, responding to the statutory requirements of 17 U.S.C. § 512.

---

## Cookie consent banner

The built-in banner (see `layouts/partials/extend_footer.html` + `static/js/cookie-banner.js`) stores a single consent flag in `localStorage` (`portalaser_cookie_consent`), links to `/privacy/`, and sets no tracking cookies of our own. It is intentionally simple and GDPR/CCPA-friendly: essential functionality is always on, advertising cookies are gated behind consent.

---

## Repo size & bandwidth

- The generated `public/` folder is **gitignored**, so the repository stays small — only source content, templates and static assets are committed.
- Hosting on **GitHub Pages** is within the free tier for a static text/JS site.
- If traffic grows and Pages' bandwidth limits become a concern, the site can be migrated to **Cloudflare Pages** (same Hugo build, no content changes) behind the same domain.
