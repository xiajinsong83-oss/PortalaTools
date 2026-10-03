#!/usr/bin/env python3
"""Post-build verification for Portala Tools (Hugo static output).

Run AFTER `hugo --minify`:
    python3 tests/verify_build.py public

Checks every tool page in public/tools/<slug>/index.html for:
  - title, meta description, canonical, H1
  - fixed privacy sentence
  - two ad-slot placeholders (above + below the tool UI)
  - related-tools aside with >= 3 links
  - toolkit.js + <slug>.js + cookie-banner.js includes
  - sitemap.xml contains the page
  - robots.txt exists and points to sitemap
Also checks compliance pages exist and cookie banner present on them.
Exit code 0 = all good.
"""
import os
import re
import sys

ROOT = sys.argv[1] if len(sys.argv) > 1 else "public"
SENTENCE = "All processing happens locally inside your browser. No data is uploaded to our server, nothing is stored."

EXPECTED_SLUGS = [
    "json-formatter", "json-minifier", "base64-encoder", "url-encoder",
    "timestamp-converter", "md5-hash-generator", "sha256-hash-generator",
    "sha512-hash-generator", "regex-tester", "qr-code-generator",
    "hex-to-rgb-converter", "markdown-previewer", "jwt-decoder",
    "random-password-generator", "random-number-generator", "binary-converter",
    "xml-formatter", "csv-viewer", "case-converter", "percentage-calculator",
    "age-calculator", "bmi-calculator", "cron-parser", "html-entity-encoder",
    "roman-numeral-converter", "word-counter", "line-counter",
    "remove-duplicate-lines", "text-line-sorter", "whitespace-remover",
    "lorem-ipsum-generator", "svg-previewer", "json-string-escape",
    "timer-stopwatch", "temperature-converter", "length-converter",
    "weight-converter", "uuid-generator", "text-diff", "discount-calculator",
    "tip-calculator", "loan-calculator", "date-difference-calculator",
    "data-size-converter", "speed-converter", "csv-to-json", "json-to-csv",
    "slug-generator", "color-contrast-checker", "morse-code-translator",
]

errors = []
warnings = []


def page_path(slug):
    return os.path.join(ROOT, "tools", slug, "index.html")


def check_tool(slug):
    p = page_path(slug)
    if not os.path.exists(p):
        errors.append(f"[{slug}] page file missing: {p}")
        return
    html = open(p, encoding="utf-8").read()
    checks = {
        "title": r"<title>[^<]+</title>",
        "meta description": r'name=description[^>]*',
        "canonical": r'rel=canonical[^>]*',
        "H1": r"<h1[^>]*>[^<]+</h1>",
        "privacy sentence": re.escape(SENTENCE[:40]),
        "ad placeholder": r"ad-slot-placeholder",
        "related tools": r"class=related-tools",
        "toolkit js": r"js/toolkit\.js",
        "cookie banner js": r"js/cookie-banner\.js",
    }
    for name, pat in checks.items():
        if not re.search(pat, html):
            errors.append(f"[{slug}] missing: {name}")
    if html.count("ad-slot-placeholder") < 2:
        errors.append(f"[{slug}] expected >=2 ad placeholders, got {html.count('ad-slot-placeholder')}")
    related_links = len(re.findall(r"class=related-tools", html))
    if related_links == 0:
        errors.append(f"[{slug}] related-tools aside missing")
    if re.search(r"related-tools", html):
        n = html.count("/tools/")
        if n < 4:  # at least 3 related + self-ish links
            warnings.append(f"[{slug}] few internal tool links: {n}")
    if re.search(r"js/toolkit\.js", html) and not re.search(r"js/%s\.js" % re.escape(slug), html):
        errors.append(f"[{slug}] tool js include missing: js/{slug}.js")
    if not re.search(r"https://portalaser\.cn/tools/%s/" % re.escape(slug), html):
        errors.append(f"[{slug}] canonical/URL does not contain portalaser.cn/tools/{slug}/")
    desc = re.search(r'name=description content="([^"]*)"', html)
    if desc:
        d = desc.group(1)
        if not (110 <= len(d) <= 170):
            warnings.append(f"[{slug}] description length {len(d)} (120-155 ideal)")
    else:
        errors.append(f"[{slug}] meta description content missing")


def main():
    # sitemap — root is a multilingual sitemapindex; EN URLs live in /en/sitemap.xml
    sm = os.path.join(ROOT, "sitemap.xml")
    if not os.path.exists(sm):
        errors.append("sitemap.xml missing")
    en_sm = os.path.join(ROOT, "en", "sitemap.xml")
    if os.path.exists(en_sm):
        smt = open(en_sm, encoding="utf-8").read()
        for slug in EXPECTED_SLUGS:
            if f"portalaser.cn/tools/{slug}/" not in smt:
                warnings.append(f"[sitemap] missing {slug}")
    else:
        errors.append("en/sitemap.xml missing (EN sitemap)")
    rb = os.path.join(ROOT, "robots.txt")
    if not os.path.exists(rb):
        errors.append("robots.txt missing")
    else:
        rb_t = open(rb, encoding="utf-8").read()
        if "sitemap" not in rb_t.lower():
            errors.append("robots.txt does not reference sitemap")

    # tool pages
    for slug in EXPECTED_SLUGS:
        check_tool(slug)

    # compliance pages
    for slug in ("privacy", "terms", "dmca"):
        p = os.path.join(ROOT, slug, "index.html")
        if not os.path.exists(p):
            errors.append(f"[{slug}] compliance page missing")
            continue
        html = open(p, encoding="utf-8").read()
        for name, pat in {
            "title": r"<title>[^<]+</title>",
            "canonical": r"rel=canonical",
            "cookie banner": r"cookie-banner",
            "email": r"39918849@qq\.com",
        }.items():
            if not re.search(pat, html):
                errors.append(f"[{slug}] missing: {name}")

    # tools index + home
    for p, name in ((os.path.join(ROOT, "tools", "index.html"), "tools index"),
                    (os.path.join(ROOT, "index.html"), "home")):
        if not os.path.exists(p):
            errors.append(f"{name} missing")

    print(f"checked {len(EXPECTED_SLUGS)} tool pages + 3 compliance pages + sitemap/robots")
    if warnings:
        print("WARNINGS:")
        for w in warnings:
            print("  -", w)
    if errors:
        print("ERRORS:")
        for e in errors:
            print("  -", e)
        sys.exit(1)
    print("VERIFY OK: all pages pass")


if __name__ == "__main__":
    main()
