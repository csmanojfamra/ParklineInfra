# Parkline Infra Private Limited — Website

Corporate website for **Parkline Infra Private Limited** (CIN: U45201RJ2015PTC048868), an AA Class PWD Contractor based in Chomu, Jaipur, Rajasthan.

## Tech Stack

- **Framework:** Next.js 16+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 with custom design tokens
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Anton (display) + Plus Jakarta Sans (body) + JetBrains Mono (data) — self-hosted via `next/font/google`

## Getting Started

```bash
npm install
npm run dev   # http://localhost:3000
npm run build # production build
npm start     # production server
```

## Environment Variables

Create `.env.local` for email delivery (optional):

```
EMAIL_ENDPOINT=https://api.resend.com/emails
EMAIL_API_KEY=re_your_key
```

Without these, enquiry submissions are logged to console. The form UX still shows success.

## Content Editing

| File | What to edit |
|------|-------------|
| `app/lib/site.ts` | Company info, contact, NAP, stats |
| `app/data/services.ts` | Service pages (7) |
| `app/data/projects.ts` | Project case studies (9) |
| `app/data/industries.ts` | Industries served |
| `app/data/states.ts` | India map presence data |
| `app/data/faqs.ts` | FAQ page |
| `app/data/blog.ts` | Blog posts |

## Coolify Deployment

Build: `npm run build` | Start: `npm start` | Port: `3000`

Set env vars in Coolify's environment section. Update `SITE.url` in `app/lib/site.ts` to match the live domain.

## Assets Needed

- `public/og-default.jpg` — 1200x630px OG image
- `public/favicon.ico`
- `public/apple-touch-icon.png`
- `public/images/clients/` — add client logos (adani.png, lt.png, gmr.png, kec.png, dilip-buildcon.png, rays-power.png)
