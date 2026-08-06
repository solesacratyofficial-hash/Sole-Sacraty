# AGENTS.md

## What this is

A static marketing site for Sole Sacraty (mobile foot reflexology, Rustenburg & Gauteng). No backend, no build step — plain HTML/CSS/JS served directly by Netlify.

## Layout conventions

- Every page is its own directory with an `index.html` (e.g. `/booking/index.html` serves at `/booking/`), giving clean URLs without needing redirect rules for the main routes.
- All pages share `/styles.css` and `/site.js` — there is no per-page `<style>` block. Add new component styles to `styles.css` rather than inlining them.
- Header/nav/footer markup is duplicated across each page (no templating engine). When changing the nav (e.g. adding a new service or blog post), update it in every page's `<nav>` block.
- Each page carries its own `<title>`, meta description, canonical URL, and Open Graph tags — keep these page-specific and don't copy the homepage's verbatim.

## Content notes

- The homepage's visual design (colors, fonts, layout, copy) is intentionally preserved from the original site — this project's brief was an SEO/structure upgrade, not a redesign.
- Blog posts and the thank-you page use `noindex`/attribution conventions as instructed by the business; the `author` on blog posts is intentionally "Sole Sanctuary" per the content brief even though the brand name elsewhere is "Sole Sacraty" — flagged as worth confirming with the business owner.
- `images/` contains only filename references carried over from the original site (`logo.webp`, `hero-ritual.webp`, etc.) — the actual binary image assets were not provided and need to be added before this goes live.
- The Capitec branch code shown on the booking page (470010) is Capitec's public universal branch code, since the account screenshot provided didn't show a numeric branch code — verify before publishing.
- The booking page's "I've Paid" flow is a manual confirmation link to `/thank-you/`, not a real payment gateway callback — there's no backend to verify an actual transaction. If a real Yoco/Paystack integration is added later, its success webhook/redirect should point to `/thank-you/`.

## SEO

- `sitemap.xml` and `robots.txt` are hand-maintained — add new URLs to `sitemap.xml` when adding pages.
- LocalBusiness JSON-LD lives in `index.html`; page-specific schema (Service, BlogPosting) lives in the relevant page.
