# Sole Sacraty — SEO & Structure Upgrade

Static HTML site for Sole Sacraty, a mobile foot reflexology business in Rustenburg & Gauteng, South Africa. Original single-page design preserved; upgraded with new SEO pages, a blog, and a booking/payments flow.

## Tech

Plain HTML5, CSS (single shared `styles.css`), vanilla JS (`site.js`) — no build step, no framework. Fonts: Google Fonts (Fraunces + Outfit). Icons: Font Awesome via CDN.

## Structure

- `index.html` — homepage (unchanged look and feel from the original design)
- `couples-foot-ritual/` — dedicated local-SEO service page for the Couples Foot Ritual
- `booking/` — booking & payments page (EFT/Capitec, Yoco, SnapScan)
- `thank-you/` — post-payment confirmation page with a placeholder for ad conversion tracking
- `blog/` — blog hub plus 4 individual articles
- `styles.css`, `site.js` — shared stylesheet and behaviour (mobile nav, dropdown, scroll reveal)
- `images/` — image assets referenced by the pages (same filenames as the original site)
- `netlify.toml`, `robots.txt`, `sitemap.xml` — deployment config and technical SEO

## Running locally

Any static file server works, e.g.:

```
npx serve .
```

or with the Netlify CLI:

```
netlify dev --port 8889
```
