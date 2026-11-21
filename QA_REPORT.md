# QA Report — `frontierfamilydental_dentist_14`

**QA target:** `/mnt/d/scripts-e-codigos/freelances/tobuild/build/frontierfamilydental_dentist_14`  
**Oracle:** `frontierfamilydental_dentist_14/content-manifest.json` (read-only)  
**Harness:** `bash .agents/qa/run-qa.sh frontierfamilydental_dentist_14` (run from `build/`)  
**Final harness run:** 2026-11-21T08:55Z — exit 0, **6/6 Playwright tests passed** (`expected: 6, unexpected: 0, flaky: 0`; artifacts `.agents/qa/artifacts/results.json`)  
**Iterations:** 2 fix → re-run cycles (limit 3). No blockers remain.

## Gate results

| Gate | Status | Evidence |
| --- | --- | --- |
| **L0** contract — typecheck, lint, production build | **PASS** | Harness run 2: `npx tsc --noEmit` exit 0; `npx eslint .` exit 0; `next build` succeeded and served the production bundle (`.next/BUILD_ID` written 2026-11-21T08:56:08Z; Playwright webServer `npm run build && npx next start -p 3111`). Non-blocking tooling note: Next 16 removed `next lint`, so the harness prints `Invalid project directory provided, no such directory: …/lint` and falls back to `eslint .`, which is clean. |
| **L1** smoke — routes, links, console, images, h1, overflow | **PASS** | Harness run 2: `smoke /` and `all internal links resolve` passed. Manual audit of all 14 routes at 360/768/1440: all HTTP 200, one visible `h1` per route, no console errors, no failed requests, no broken images, no placeholder text, horizontal overflow 0 (`documentElement.scrollWidth === clientWidth`). Cross-route link crawl (desktop dropdowns + mobile menu) found 15 internal targets, all < 400; hash targets `/#services` and `/contact#contact-form` exist. |
| **L2** parity — manifest facts/headings | **PASS** | Harness run 2: both parity tests passed (`no fact from content-manifest.json is missing`, `every manifest route renders content`). Manual check: 0 missing facts; 0 missing headings once the accessibility panel is opened (its heading is intentionally absent in the closed state). Phone `307.754.4554`, address `303 N Division St` / `Powell, WY 82435`, `Serving Powell, WY and the rest of the Big Horn Basin`, `Dr. Williams`, services, `White Cap Institute`, `over 40 years of combined dental care experience`, and the copyright all render. |
| **L3** a11y — axe WCAG 2.1 A/AA | **PASS** | Harness run 2: `a11y /` passed with 0 critical/serious violations. Post-fix manual axe sweep of all 14 routes × 3 viewports = 42 renders: 0 critical/serious findings. The one serious defect found in manual audit 1 — color contrast on the restorative page quote attribution — is fixed at `components/shared/quote-card.tsx:34` (`text-clay-600` on `bg-clay-100`, 5.13:1). Related low-contrast indices/placeholders/footer microcopy were fixed at `components/shared/service-card.tsx:67`, `app/services/page.tsx:163`, `components/sections/home/implants-section.tsx:65,90`, `components/sections/news/resource-hub.tsx:78`, `components/ui/input.tsx:11`, `components/ui/textarea.tsx:10`, `components/shared/site-footer.tsx:112`, `components/sections/home/committed-band.tsx:57`. |
| **L4** visual — 360/768/1440 captures | **PASS** | Harness run 2: `visual /` passed; 0 failed webfonts; 0 horizontal overflow. Evidence: `.agents/qa/artifacts/screens/home-mobile.png` (360×11053, 08:56:45Z), `home-tablet.png` (768×9327, 08:56:49Z), `home-desktop.png` (1440×6444, 08:56:53Z). Manual layout audit found no empty sections (all 14 routes) and no text clipped by layout (the header’s mobile service-area line intentionally truncates within a single-line utility strip; the full sentence also renders in the hero and footer). |
| **L5** rubric review | **PASS — 9/10** (report-only) | Screenshot evidence above plus computed-style/DOM audit. Breakdown: Typography **1/2** — consistent Fraunces display + Manrope text scale (H1 40–48px mobile / 73.6–92.8px desktop, body 16px), but a third script family (Courgette) is used for accents and some tracked micro-labels render at 9.9–10.9px; Layout **2/2** — no overlap/overflow/empty sections, consistent section rhythm; Color **2/2** — token-only palette, axe clean, verified ratios 5.13:1–10.49:1; Motion **2/2** — `prefers-reduced-motion: reduce` disables CSS animations and Framer reveal animations, and the toolbar “Disable Animations” toggle works; Consistency **2/2** — header and footer text identical across all 14 routes and shared components render consistently. |

## Defects fixed during QA (application code only)

| File:line | Fix |
| --- | --- |
| `components/shared/quote-card.tsx:34` | Quote attribution in the clay variant now uses `text-clay-600` (5.13:1) instead of failing contrast. |
| `components/shared/service-card.tsx:67` | Service-card indices now use `text-brand-300` on dark cards and `text-brand-600` on light cards. |
| `app/services/page.tsx:163` | Services-page card indices now use `text-brand-600`. |
| `components/sections/home/implants-section.tsx:65,90` | Implant paragraph indices now use `text-brand-600`. |
| `components/sections/news/resource-hub.tsx:78` | Resource-hub indices now use `text-brand-600`. |
| `components/ui/input.tsx:11`, `components/ui/textarea.tsx:10` | Placeholders now use `placeholder:text-ink-500` (5.15:1 on cream). |
| `components/shared/site-footer.tsx:112` | Footer “Powell, Wyoming” now uses `text-cream-100/60` (5.70:1 on brand-900). |
| `components/sections/home/committed-band.tsx:57` | Committed-band micro-label now uses `text-cream-100/75` (8.09:1). |

**Not changed (verified against the source site):** the home “Implant Dentistry” card keeps `href: "/services/restorative-dental-care"` (`lib/site.ts:130`) because the old site uses that same destination; the third social link keeps its extracted label/target. Both are source-faithful, not defects.

## Manual verification beyond the harness

- **Forms:** invalid submit sets `aria-invalid` on the required fields and renders error text linked via `aria-describedby`; valid submit on both the home and contact forms reaches the “Thank you!” success state; no console errors or page errors during submission. Field-level errors are associated with their inputs; there is no separate `role="alert"` summary (not required for WCAG 2.1 A/AA and not a gate failure).
- **Accessibility toolbar:** opens/closes on click and Escape; all toggles (`Disable Animations`, `Contrast`, `Readable Font`, `Mark Titles`, `Highlight Links & Buttons`, `Keyboard Navigation`) update `aria-pressed` and the matching `data-*` attributes; text-size controls work; no console errors.
- **Reduced motion:** with `prefers-reduced-motion: reduce`, computed animation count after a full scroll is 0 and no text remains at `opacity < 0.1`; reveal wrappers render plain divs.
- **Source hygiene:** 0 matches for `: any`, `<any>`, `as any`, `@ts-ignore`, `@ts-expect-error`, `eslint-disable` in `app/`, `components/`, `lib/`; 0 hardcoded hex colors outside `app/globals.css`; 0 arbitrary `text-[…px]` sizes.
- **Layout/consistency:** 14 routes × 3 viewports; header/footer text identical across routes; no empty `main section`; no horizontal overflow; all 14 route `h1`s visible; no broken links.

## Screenshot evidence

- `.agents/qa/artifacts/screens/home-mobile.png`
- `.agents/qa/artifacts/screens/home-tablet.png`
- `.agents/qa/artifacts/screens/home-desktop.png`

## Blockers

None. L5 is report-only and above the 8/10 threshold; all blocking gates (L0–L4) are green.
