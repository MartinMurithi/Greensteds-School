# Greensteds International School — Website Redesign

A production-grade Next.js website for Greensteds International School, Nakuru, Kenya.

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 16 (App Router) | Framework — static generation + server components |
| TypeScript | Type safety throughout |
| Tailwind CSS v4 | Styling — custom design system |
| Resend | Email delivery for contact form |
| Vercel | Deployment & CDN |
| pnpm | Package manager |

## Getting Started

### 1. Prerequisites
- Node.js 18+
- pnpm (`npm install -g pnpm`)

### 2. Install dependencies
```bash
pnpm install
```

### 3. Set up environment variables
```bash
cp .env.example .env.local
```
Edit `.env.local` and fill in:
- `RESEND_API_KEY` — get from [resend.com](https://resend.com)
- `CONTACT_TO_EMAIL` — email address to receive form submissions
- `NEXT_PUBLIC_BASE_URL` — your production URL

### 4. Run locally
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000)

### 5. Build for production
```bash
pnpm build
pnpm start
```

## Deployment (Vercel)

1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Add environment variables in Vercel dashboard
4. Deploy — Vercel auto-deploys on every push to main

## Project Structure

```
src/
├── app/                    # All pages (Next.js App Router)
│   ├── page.tsx            # Homepage
│   ├── about/              # About section (5 pages)
│   ├── academics/          # Academics section (6 pages)
│   ├── school-life/        # School Life section (5 pages)
│   ├── admissions/         # Admissions section (4 pages)
│   ├── community/          # Community section (7 pages)
│   ├── contact/            # Contact page
│   └── api/contact/        # Contact form API route
├── components/
│   ├── layout/             # Navigation, Footer
│   ├── shared/             # PageHeader, HoldingSection, AdmissionsCTA, ContactForm
│   └── home/               # Homepage section components
└── lib/
    ├── content.ts          # ALL site text — edit here to change copy
    ├── navigation.ts       # Navigation structure — all links
    ├── metadata.ts         # SEO metadata helpers
    ├── tokens.ts           # Design tokens
    └── types.ts            # TypeScript types
```

## How to Update Content

**All site text lives in one file: `src/lib/content.ts`**

- Change the headmaster message → edit `homepage.headmaster.paragraphs`
- Change the hero headline → edit `homepage.hero.headline`
- Change contact details → edit the `school` object at the top
- Add a news item → add to `homepage.news` array
- Update stats → edit `homepage.stats` array

**To add a new page:**
1. Create `src/app/[section]/[page]/page.tsx`
2. Add the route to `src/lib/navigation.ts`
3. The nav and footer update automatically

## Design System

Colors, fonts, and spacing are defined in:
- `tailwind.config.ts` — Tailwind tokens
- `src/lib/tokens.ts` — TypeScript constants
- `src/app/globals.css` — CSS custom properties

**Never use arbitrary Tailwind values** like `text-[#006633]`.
Always use the named tokens: `text-[var(--green-primary)]` or `bg-green-primary`.

## Performance Targets

| Metric | Target | How |
|--------|--------|-----|
| Performance | 95+ | next/image, static generation, no JS bloat |
| SEO | 95+ | Metadata, Schema.org, sitemap, semantic HTML |
| Accessibility | 95+ | ARIA, keyboard nav, contrast, skip link |
| Best Practices | 95+ | HTTPS, security headers, no console errors |

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_BASE_URL` | Yes | Production site URL |
| `RESEND_API_KEY` | Yes | Resend API key for email |
| `CONTACT_TO_EMAIL` | Yes | Email to receive contact form submissions |
