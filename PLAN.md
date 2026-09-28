# Beauty salon prototype — design 4 — reuse guide

An Xbuilt Studio template for pitching a hair-salon (or similar local
beauty business) website redesign. This copy ships with clearly
fictional content — no real business, no real reviews, no scraped
photos — so it's safe to show as a standalone design sample or to fork
into a real client pitch.

## What's in this fork

- Sepia-toned editorial system: ink/paper/steel/taupe tokens, Source
  Serif 4 + Public Sans, asymmetric layout, almost no chrome.
- A full-bleed hero video with a transparent header overlaid on top.
- A homepage trust strip, a searchable price list, a live "open now"
  schedule widget, a Google Maps embed, a rotating reviews panel, a
  scrolling photo gallery, and a `/concept` page explaining the studio's
  approach — all wired to one content file.
- A full motion pass (scroll reveals, staggered entrances, sliding nav
  indicators, hover details) that respects `prefers-reduced-motion`
  throughout.

## How to fork this for a real client (or a new design sample)

1. **Content** — edit `src/lib/salon.ts`. This is the single source of
   truth: name, address, phone, owner, credential, hours, prices,
   review stats and featured quotes. The wordmark and hero headline
   split the salon name on the first space automatically, so a
   two-word name (e.g. "Kapsalon Noord") keeps the two-line treatment;
   a one-word name will need a small tweak in `wordmark.tsx` and
   `app/page.tsx`.
2. **Photos** — replace `public/storefront.jpg` and the files in
   `public/werk/` (used by the scrolling gallery on the homepage).
   For a real client, source these from the client's own site, Google
   Business listing, or portfolio — never stock photos passed off as
   the client's real work. For a design sample like this one, use
   properly licensed stock photography (Pexels or similar) with no
   real business's signage or a real, identifiable person tied to any
   actual company in frame.
3. **Real vs. illustrative content** — if this becomes a real client
   pitch: replace the "Voorbeeld review" quotes in `salon.ts` with real
   review excerpts (see the sourcing discipline below), update the
   footer disclaimer in `site-footer.tsx` and the `/concept` page's
   "echt, of niet" section to stop saying the content is illustrative,
   and reconsider whether `robots.ts` / `metadata.robots` (currently
   `noindex, nofollow` everywhere) should change once it's a real,
   published site rather than a private pitch.
4. **Contact channels** — `salon.ts` only wires up what's actually
   confirmed working. Don't add a WhatsApp link without first checking
   the number is mobile (a landline can never be registered on
   WhatsApp), and don't add an email address unless the client actually
   publishes one.
5. **Video** — `public/hero.mp4` is licensed stock footage, not tied to
   any specific business. Swap it for something else licensed, or for
   real footage once you have it.

## Content sourcing discipline (for real client work)

- Prefer the client's own official site or portfolio page for photos —
  that's the clearest evidence they're authorized to use them.
- A Google Business listing is useful for a storefront photo and real
  review stats, but treat individual customer photos found there more
  cautiously than official-site content — and never use photos
  attached to unrelated reviews.
- Never use a photo showing an identifiable customer's face without
  the business confirming they hold the rights to it.
- Real review quotes: keep excerpts short and attributed, don't
  reproduce more than a sentence or two per review, and never invent a
  quote.
- Verify every contact channel actually works (see WhatsApp note
  above) before wiring it into a CTA.

## Design tokens

| Token | Value | Use |
| --- | --- | --- |
| Ink | `#2B2019` | Text, dark chapters |
| Paper | `#FBF7F2` | Page ground |
| Steel | `#E7DDD2` | Hairlines, table rules, placeholder fills |
| Taupe | `#C9A57C` | Button fills and large type on Ink only |

Contrast: Ink on Paper ≈14.9:1, Taupe on Ink ≈6.9:1. Taupe is not used
as small type on Paper (≈2.1:1, fails AA there). Label text on taupe
fills is Ink.

Type: Source Serif 4 for display and the wordmark's second word.
Public Sans for UI and body.

## 2026 design bar

- Type does the layout. Asymmetric editorial pages. Almost no chrome.
- Motion is deliberate: every animated piece has a purpose and a
  `prefers-reduced-motion` fallback.
- Dated tells to avoid: centered hero with two pills, three equal icon
  cards, drop-shadow cards, glassmorphism, gradient mesh, Inter or
  Geist as the voice, marquees used decoratively, fake testimonials,
  emoji icons, stock photos passed off as real client work, hamburger
  on desktop, dark-mode flip, cookie or chat widgets, and any blue
  (this series deliberately avoids the generic "web agency blue").
- The homepage reviews panel and the scrolling photo gallery are
  intentional exceptions to "no carousels/marquees" — both rotate real
  or clearly-labeled-illustrative content on a slow, pausable timer
  with manual controls, not decorative motion for its own sake.

## Route structure

Shared chrome in `src/app/layout.tsx` (`lang="nl"`, skip link, header,
footer).

- `/` — Hero video, transparent header, trust strip, intro, two
  highlight cards, a photo gallery, a reviews panel.
- `/prijslijst` — Dames and heren price tables with a live search
  filter, a scroll-spy jump nav, a print stylesheet, and a sticky call
  bar.
- `/over-ons` — Owner bio and credential.
- `/community` — A two-beat community story with share links.
- `/contact` — Address, phone, hours, a storefront photo, a live
  Google Maps embed.
- `/concept` — Xbuilt Studio's own process page: what the studio
  changes by default (template colors, palette discipline, content
  sourcing, purposeful motion), and a disclosure that this particular
  fork's content is illustrative.

## Component breakdown

- `src/components/wordmark.tsx` — scissors mark plus the two-line
  name, derived from `salon.name.split(" ")`.
- `src/components/site-header.tsx` — masthead; transparent and
  overlaid on the hero on `/`, solid with a hairline border elsewhere.
  Links to `/concept`.
- `src/components/site-nav.tsx` — desktop links with a sliding active
  indicator; mobile `<details>` menu.
- `src/components/site-footer.tsx` — NAP, hours, studio disclaimer.
- `src/components/hero-video.tsx` — muted, looping background video
  with a slow zoom, darkened with an ink gradient scrim, pauses under
  `prefers-reduced-motion`.
- `src/components/price-table.tsx` / `price-list.tsx` — semantic
  table with a live filter, scroll-spy jump nav, and staggered
  row-reveal on first view.
- `src/components/hours.tsx` — stated hours, a live "open/closes in
  …" status line, and a small per-day hours bar chart that grows in on
  mount.
- `src/components/site-map.tsx` — a grayscale-filtered Google Maps
  embed (no API key, no blue) with a "Route plannen" link.
- `src/components/reveal.tsx` — a small IntersectionObserver
  fade-in-on-scroll wrapper with an optional stagger delay.
- `src/components/werk-gallery.tsx` — auto-scrolling photo marquee,
  grayscale-to-color on hover, a static manually-scrollable fallback
  under `prefers-reduced-motion`.
- `src/components/reviews-carousel.tsx` — auto-advancing panel mixing
  aggregate stats and short quotes, with a progress bar and manual dot
  controls.
- `src/components/sticky-contact-bar.tsx` — a call CTA that slides in
  after scrolling past the fold on `/prijslijst`.
- `src/components/share-buttons.tsx` — generic share links (opens the
  visitor's own WhatsApp/Facebook/LinkedIn; never messages the salon).
- `src/components/scroll-progress.tsx` — a thin top-of-viewport scroll
  progress hairline.
- `src/lib/salon.ts` — the only copy and price source, plus JSON-LD.
- `src/app/robots.ts` — disallows all crawlers (this is a pitch
  sample, not meant to be indexed).
- `src/app/opengraph-image.tsx`, `src/app/icon.tsx` — branded OG card
  and favicon generated with `next/og`, driven by `salon.ts`.
- `src/app/manifest.ts` — minimal web app manifest.

Server components throughout, except the nav, header, hours, and
anything else that needs the client for the current pathname, the
current time, or scroll position.

## Build notes

Mobile-first. Semantic landmarks, one h1 per page, visible
`:focus-visible`, keyboard-reachable nav. No client data fetching
beyond the live Google Maps iframe. No dark-mode media query. Paper
stays the page ground; Ink sections are designed.
