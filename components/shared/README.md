# Shared components

These components are owned by `@developer`. Workers may import them but must not edit them.

## Layout & shell

| Component | Import | Notes |
| --- | --- | --- |
| `SiteHeader` | `@/components/shared/site-header` | Rendered by `app/layout.tsx`; includes desktop dropdown nav + mobile sheet |
| `SiteFooter` | `@/components/shared/site-footer` | Rendered by `app/layout.tsx`; all footer destinations |
| `AccessibilityToolbar` | `@/components/shared/accessibility-toolbar` | Floating 8-control toolbar from the source site |
| `BrandMark`, `ToothMark` | `@/components/shared/brand-mark` | Logo link + custom tooth SVG |

## Sections & content

| Component | Import | Notes |
| --- | --- | --- |
| `PageHero` | `@/components/shared/page-hero` | Support-page h1 hero; pass breadcrumbs + actions |
| `SectionHeading` | `@/components/shared/section-heading` | Eyebrow + h2 + description; `tone="dark"` for dark bands |
| `ServiceCard` | `@/components/shared/service-card` | Four service cards; `tone="dark"` for the home services band |
| `CtaBand` | `@/components/shared/cta-band` | Dark closing CTA + phone |
| `QuoteCard` | `@/components/shared/quote-card` | Extract-only quotes; optional attribution |
| `LocationCard` | `@/components/shared/location-card` | Address, phone, service area, socials |
| `SocialLinks` | `@/components/shared/social-links` | Google/Facebook/Instagram URLs from the extracted navigation |
| `FaqAccordion` | `@/components/shared/faq-accordion` | Radix single-open accordion; pass `{question, answer}` |
| `Breadcrumbs` | `@/components/shared/breadcrumbs` | Accessible breadcrumb trail |
| `IconTile` | `@/components/shared/icon-tile` | 48px icon container; pass a Lucide icon as child |
| `Stat`, `CountUp` | `@/components/shared/stat` | Fact chips / animated number (reduce-motion safe) |
| `AmbientBackground`, `SmileArch` | `@/components/shared/ambient-background` | Decorative gradient/grid/arch layers |
| `Reveal`, `Stagger`, `StaggerItem` | `@/components/shared/reveal` | Framer Motion scroll reveals; respects reduced motion |
| `ContactForm` | `@/components/shared/contact-form` | RHF + Zod, posts to `/api/contact`, honeypot, success/error states |

## UI primitives

Import from `@/components/ui/...`: `button`, `badge`, `input`, `textarea`, `label`, `accordion`, `sheet`, `dropdown-menu`, `separator`.

## Rules

- Never edit `components/shared/**`, `components/ui/**`, `lib/**`, `app/layout.tsx`, `app/globals.css`, navigation, `sitemap.ts`, or `robots.ts`.
- Use `Button`/`Input`/`Textarea`/`Label` primitives instead of raw interactive HTML.
- Use `next/link` for internal links; every href must resolve to a route in the tracker.
- Use only tokens (`bg-brand-900`, `text-ink-700`, etc.); no hex values in route code.
- Use exact extracted content. UI labels are the only new copy.
