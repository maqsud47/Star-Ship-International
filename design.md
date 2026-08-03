# Star Ship International — Design Specification

> This file defines **how** the website looks and feels.
> Content/scope lives in `project-details.md`. Read both together.
> Direction: **MVP Logistics' clarity & warmth + Flexport's polish**, anchored on Star Ship's existing **navy-blue** brand.

---

## 1. Design Direction (the thesis)

Build a site that feels like a **trusted, established Bangladeshi logistics operator that has quietly gone modern.** Not a flashy startup, not a dusty corporate brochure — a company that's moved cargo since 1997 and now presents itself with the confidence and clarity of a global 3PL.

Blend, concretely:
- **From MVP Logistics:** clear section rhythm, generous white space, full-width photographic hero, service cards with photo + short human copy, a testimonial slider, an FAQ accordion, and a strong closing "Connect With Us" band. A warm, plain-spoken voice ("Solutions Made Simple" energy).
- **From Flexport:** tighter, more refined typography; disciplined spacing; restrained, high-quality components; subtle motion; a calm, confident, tech-credible feel.
- **Anchored on Star Ship's brand:** navy blue leads (NOT MVP's red). The brand already reads trustworthy — we sharpen it, not replace it.

**Overall adjective set:** trustworthy · clear · established · quietly modern. Avoid: loud, gimmicky, overly playful, generic-template.

---

## 2. Color Palette

Derived from the existing logo/profile (navy + blues), extended into a usable system.

| Role | Name | Hex | Use |
|------|------|-----|-----|
| Primary | Deep Navy | `#0A2A5E` | Headers, primary buttons, footer, key text |
| Primary-dark | Ink Navy | `#06193A` | Footer base, hero overlay, high-contrast text |
| Accent | Signal Blue | `#1E73BE` | Links, hover, active states, accent lines |
| Accent-light | Sky | `#3FA9F5` | Highlights, icon accents, subtle gradients |
| Surface | Cloud | `#F5F8FC` | Section backgrounds, cards on white |
| Base | White | `#FFFFFF` | Page background |
| Text | Slate | `#1C2A3A` | Body text on light |
| Muted | Steel | `#5B6B7E` | Secondary text, captions |
| Success | (forms) | `#2E9E5B` | Form success state |
| Error | (forms) | `#D64545` | Form error state |

**Rules:**
- Navy is dominant; Signal Blue is the single accent. Do not introduce a third hue (no red/orange/green except form states).
- Large navy blocks (hero, closing band, footer) frame the page; white/Cloud carry the content in between.
- Maintain WCAG AA contrast: never Steel text on Cloud for body copy; use Slate.

**Signature accent motif:** a thin **Signal Blue "heading rule"** — a short (48px) horizontal bar or a small ship-star glyph sits above each section eyebrow. This is Star Ship's equivalent of MVP's red dots, but derived from the brand (the star in the logo). Use it consistently; don't over-scatter it.

---

## 3. Typography

Two-role system (plus Bangla support).

- **Display / headings:** `Sora` or `Space Grotesk` — geometric, modern, confident without being trendy. Used at large sizes with tight tracking for hero and section titles. Weight 600–700.
- **Body / UI:** `Inter` — highly legible, neutral, professional. Weight 400–500.
- **Bangla:** `Noto Sans Bengali` — used automatically when locale = bn, for both headings and body (keeps Bangla legible; don't force the Latin display face onto Bangla text).

**Type scale (desktop, rem):**
- Hero H1: 3.5 / line-height 1.05
- Section H2: 2.25 / 1.15
- Card H3: 1.25 / 1.3
- Body: 1.0625 / 1.6
- Small/caption: 0.875 / 1.5
- Eyebrow label: 0.8125, uppercase, letter-spacing 0.12em, Signal Blue

Scale down proportionally on mobile (H1 ~2.25rem). Set a sensible fluid clamp() if convenient.

---

## 4. Layout & Spacing

- **Container:** max-width ~1200px, centered, 24px side padding (16px on mobile).
- **Section vertical rhythm:** generous — ~96px top/bottom on desktop, ~56px on mobile. This spacing is a big part of the "polished" feel; don't crowd.
- **Grid:** 12-col mentally; service cards in 2-col (mobile) → 3 or 4-col (desktop) depending on count.
- **Corners:** soft, restrained — 8–12px radius on cards/buttons. Not pill-shaped, not sharp.
- **Shadows:** subtle only — a soft, low-opacity navy-tinted shadow on cards on hover. No heavy drop shadows.
- **Borders:** 1px hairline in a very light navy/steel for dividers where needed.

---

## 5. Page-by-Page Structure

### Home
1. **Hero** — full-width photographic background (container yard / cargo ship / port), Ink Navy overlay for legibility. Left-aligned: eyebrow ("Customs Clearing · Logistics · Trade Consultancy"), big H1 (a clear value statement, not a slogan), one-line subhead, two CTAs ("Get a Quote" primary, "Our Services" secondary). Subtle scroll-reveal on load.
2. **Trust strip** — "Since 1997 · Bangladesh Customs authorized · Chittagong · Dhaka Airport · Benapole · ICD Komolapur" as a quiet horizontal bar.
3. **Services** — 4 cards (photo + title + one-line + "Learn more"), MVP-style but with Flexport restraint.
4. **Gateways We Serve** — cards for the 4 gateways, each with a short capability line.
5. **Stats counter** — Years since 1997, clients served, cargo categories, gateways. `[real numbers pending]`
6. **Why Partner With Us** — 4–5 differentiators with small icons.
7. **Valued Clients** — logo strip (grayscale → color on hover). `[approved logos pending]`
8. **Testimonials** — slider. `[real testimonials pending; hide section if none]`
9. **FAQ** — accordion, 5–6 Q&A.
10. **Closing CTA band** — full-width navy band: "Ready to move your cargo? Get a quote." + button.

### Services
Intro + each service as an alternating photo/text row (image left/right), with the detail from project-details.md §5. Optional per-service anchor links.

### About
Company story (since 1997, proprietor), vision, mission, the transportation wing (BdSHIP), and optionally the management/org structure. Photo of operations.

### Clients
Client logos + industries served + a **project gallery** (heavy-lift photos from the brochure). `[image rights pending]`

### Contact
Three office cards (Dhaka / Chittagong / Benapole) with address, phone, email. Contact form + quote form. Embedded map for the Dhaka HQ. Business hours.

---

## 6. Components (shadcn/ui)

Use shadcn primitives, restyled to the tokens above — do NOT ship default shadcn look:
- **Button:** navy solid (primary), navy outline (secondary), Signal Blue text-link. Clear hover (slightly darker) + visible focus ring.
- **Card:** white on Cloud sections, Cloud on white sections; hairline border; soft hover lift.
- **Accordion:** for FAQ.
- **Dialog/Sheet:** for the Quote modal (if quote is a modal rather than a page).
- **Input/Textarea/Select:** for forms, with clear labels above fields, success/error states per the palette.
- **Navigation:** sticky header, transparent over hero → solid navy on scroll. Mobile: slide-in sheet.

**Language switcher:** compact `EN | বাং` toggle in the header, always visible.

---

## 7. Imagery

- **Hero & sections:** real port/cargo/truck photography. Use the brochure's own heavy-lift and truck photos where rights allow `[CONFIRM]`; otherwise clearly-labeled placeholders with `TODO` comments.
- **Treatment:** slight Ink Navy overlay on hero images for text contrast; consistent aspect ratios across cards.
- **Logo:** the ship-and-star mark. `[provide vector/high-res]` — until then a placeholder marked TODO. Do NOT fabricate a final logo.
- **Icons:** lucide-react, thin stroke, Signal Blue or navy.
- Optimize everything via `next/image`.

---

## 8. Motion

Restrained, purposeful (Flexport-like, not busy):
- Hero: gentle fade/rise of headline + CTA on load.
- Sections: subtle fade-up on scroll into view (small offset).
- Cards/buttons: quick, smooth hover (lift + slight color shift).
- **Respect `prefers-reduced-motion`** — disable non-essential animation.
- No parallax, no auto-playing video, no bouncing.

---

## 9. Voice & Copy Tone

- Plain, confident, human — MVP-style. Short sentences. Active voice.
- Speak to the client's outcome ("Clear customs faster," "Move heavy cargo safely"), not internal jargon.
- Buttons say what happens: "Get a Quote," "Send Message," "View Services."
- Bengali copy provided by client later; keep English copy in a translation file so it's swappable.

---

## 10. Quality Floor (non-negotiable)

- Fully responsive, mobile-first.
- WCAG AA contrast; visible keyboard focus; alt text on all images.
- `prefers-reduced-motion` respected.
- Lighthouse: aim 90+ performance/SEO/accessibility.
- No default-template look — every color/type/spacing decision derives from this file.

---

*Design status: DRAFT direction locked (MVP × Flexport on navy brand). Palette/type are proposed starting values — adjust after first localhost preview.*
