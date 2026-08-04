# Star Ship International — Website

Bilingual (English / Bangla) marketing site for **Star Ship International**, a
Bangladesh-based customs clearing & forwarding (C&F), logistics, and trade
consultancy company operating since 1997.

Goal: inform visitors and convert them into leads via contact / quote forms.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** (base-nova / Base UI)
- **next-intl** — locale-prefixed routes (`/en`, `/bn`)
- **react-hook-form** + **zod** for forms
- **Web3Forms** for contact/quote email delivery (no backend/database)
- Deploys to **Vercel** (zero-config)

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values (see below)
npm run dev                  # http://localhost:3000  -> redirects to /en
```

Scripts:

| Command | Description |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Production build (also type-checks all pages) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `node scripts/compress-images.mjs` | Shrink any oversized images in `public/photos` |

## Environment variables

Set these in `.env.local` (local) and in the Vercel dashboard (production).
Never commit real values — `.env.local` is git-ignored; `.env.example` is the template.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Web3Forms access key. Create a free key at [web3forms.com](https://web3forms.com) using `starshipdhaka@gmail.com`. **Until this is set, the forms show "not configured" and do not send.** |
| `NEXT_PUBLIC_SITE_URL` | Public site origin, used for canonical URLs, sitemap, and Open Graph. Use the Vercel URL for staging; switch to `https://starshipintlbd.com` once the domain is live. |

## Internationalisation

- All copy lives in `messages/en.json` and `messages/bn.json` — the two files
  have identical key structures.
- Adding/removing a client, team member, service, etc. means editing **both**
  files (localizable data such as client names, office addresses, team members,
  stat values and fleet capacities lives in the message files, not in code).
- `lib/site-data.ts` holds only structure (keys, icons, image paths, phone/email).

## Project structure

```
app/[locale]/        Localized routes (home, services, about, clients,
                     road-transportation, gallery, contact, quote, 404)
app/sitemap.ts       Sitemap + hreflang alternates
app/robots.ts        robots.txt
app/manifest.ts      PWA manifest
components/layout/    Top bar, header, footer, mobile nav, language switcher
components/sections/  Home-page sections
components/forms/      Contact + quote forms, quote modal
components/common/     Container, reveal (scroll animation), back-to-top, page hero
lib/                  site-data, seo, forms, utils
messages/             en.json, bn.json
proxy.ts              next-intl locale routing (Next 16 renamed middleware->proxy)
scripts/              One-off maintenance scripts (image compression)
```

Raw source assets (`Photos/`, `Logo/`, `Company brochure/`) are **not** tracked
in git — keep them backed up separately.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it in Vercel (framework auto-detected as Next.js).
3. Add the two environment variables above under **Settings -> Environment Variables**.
4. Deploy. Attach the custom domain and set `NEXT_PUBLIC_SITE_URL` to it when ready.

## Placeholders still to finalise before launch

- Real client logos (currently rendered as text)
- Native-speaker review of the Bangla copy
- Live domain (`starshipintlbd.com`)
- Heavy-lift / project-cargo photos for the Clients gallery
