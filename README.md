# العامة لمهمات المصانع — generalea.com

موقع شركة **العامة لمهمات المصانع** (General Factory Equipment Co.) — مبني بـ Astro 5، Tailwind CSS، ودعم كامل للعربية (RTL) والإنجليزية (LTR).
جاهز للنشر على **Cloudflare Pages** كموقع ثابت بالكامل.

> The supplier Egyptian factories rely on — built on Astro 5, Tailwind, fully bilingual (AR-RTL primary, EN-LTR secondary), static output, ready for Cloudflare Pages.

---

## بنية الموقع · Site map

| Route                          | Lang | Description                             |
| ------------------------------ | ---- | --------------------------------------- |
| `/`                            | EN   | Homepage                                |
| `/about/`                      | EN   | About                                   |
| `/services/`                   | EN   | Products index                          |
| `/services/[slug]/`            | EN   | Product page (9 products)               |
| `/projects/`                   | EN   | Projects index                          |
| `/contact/`                    | EN   | Contact                                 |
| `/ar/`                         | AR   | الرئيسية                                |
| `/ar/من-نحن/`                  | AR   | من نحن                                  |
| `/ar/services/`                | AR   | المنتجات                                |
| `/ar/services/[slug]/`         | AR   | صفحات المنتجات                          |
| `/ar/projects/`                | AR   | المشروعات                               |
| `/ar/تواصل-معانا/`            | AR   | تواصل معانا                             |

Product slugs (9): `flanges`, `pipes`, `plates`, `tees`, `hydraulic`, `valves`, `flex`, `gaskets`, `fasteners`.

---

## التشغيل المحلي · Local development

```bash
npm install
npm run dev          # http://localhost:4321
```

## النشر على Cloudflare Pages · Deploy to Cloudflare Pages

### Option A — Git-connected (recommended)

1. Push this folder to GitHub.
2. Cloudflare dashboard → Pages → **Create project** → Connect Git → pick repo.
3. Build settings:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (or `astro/` if nested)
   - **Node version**: `20`
4. Add custom domain `generalea.com` once the first build succeeds.

### Option B — Direct deploy via Wrangler

```bash
npm install
npm run build
npx wrangler pages deploy dist --project-name=generalea
```

The included `wrangler.toml` is already configured. First time, run `npx wrangler login` once.

---

## SEO checklist (already implemented)

- ✅ Static HTML output (`output: 'static'`) — no SSR needed for Cloudflare Pages.
- ✅ `hreflang` alternates on every page (AR ↔ EN + `x-default`).
- ✅ Canonical URLs on every page.
- ✅ JSON-LD `LocalBusiness` (sitewide) + `Product` (on product pages).
- ✅ `@astrojs/sitemap` configured with i18n locales — emits `/sitemap-index.xml`.
- ✅ `robots.txt` allowing all + pointing at sitemap.
- ✅ Open Graph + Twitter Card meta on every page.
- ✅ AR pages: `lang="ar" dir="rtl"`. EN pages: `lang="en" dir="ltr"`.
- ✅ AR slugs kept URL-encoded Arabic (`/ar/من-نحن/`, `/ar/تواصل-معانا/`) to preserve existing backlinks.
- ✅ Trailing slashes enforced (`trailingSlash: 'always'`) — matches WordPress permalinks.

---

## المحتوى · Content

Products and projects are managed as **Astro Content Collections** in MDX:

```
src/content/
├── products/
│   ├── en/flanges.mdx
│   └── ar/flanges.mdx
└── projects/
    ├── en/arish-cement.mdx
    └── ar/arish-cement.mdx
```

The collection schema (`src/content/config.ts`) is type-safe with Zod. Add more product and project entries by following the existing files — frontmatter validates automatically at build time.

To add a CMS later (Decap, Tina, Sanity), point it at `src/content/` — the schema is already there.

---

## نقاط الاتصال · Contact wiring

- **WhatsApp**: `+201016265762` (floating FAB on every page, flips side in RTL).
- **Phone**: `tel:+201016265762`.
- **Email**: `sales@generalea.com`.
- **GTM ID**: `GTM-57Q5JH8` (injected via `BaseLayout.astro` head).

To change any of these, edit `src/i18n/utils.ts` (`WHATSAPP_URL`, `PHONE_TEL`) and `src/i18n/ui.ts` (`footer.phone`, `footer.email`).

---

## الصور · Images

Placeholders are rendered with diagonal-stripe SVG patterns labeled with their slot (e.g. `IMG · 001 — REPLACE WITH WAREHOUSE PHOTO`). Replace with real photos:

```
public/images/
├── og-default.jpg        # Open Graph card image (1200×630)
├── warehouse-hero.jpg
├── flanges-detail.jpg
└── ... etc
```

For product/project frontmatter images, drop them next to the MDX file and reference relatively — Astro's `image()` helper handles optimization.

---

## ملفات Cloudflare Pages

- `public/_headers` — security headers + long-cache for `/_astro/*` and `/images/*`.
- `public/_redirects` — 301s for legacy WordPress URLs and old slug aliases.
- `public/robots.txt` — points crawlers at the sitemap.
- `wrangler.toml` — for direct CLI deploys.

---

## بنية الملفات الكاملة

```
.
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── wrangler.toml
├── package.json
├── public/
│   ├── _headers
│   ├── _redirects
│   ├── robots.txt
│   └── favicon.svg
└── src/
    ├── content/
    │   ├── config.ts
    │   ├── products/{en,ar}/
    │   └── projects/{en,ar}/
    ├── i18n/
    │   ├── ui.ts
    │   └── utils.ts
    ├── layouts/
    │   └── BaseLayout.astro
    ├── styles/
    │   └── global.css
    ├── components/
    │   ├── layout/
    │   │   ├── Header.astro
    │   │   └── Footer.astro
    │   ├── sections/
    │   │   ├── Hero.astro
    │   │   ├── ProductGrid.astro
    │   │   ├── WhyUs.astro
    │   │   ├── ProjectsTeaser.astro
    │   │   └── ContactCTA.astro
    │   └── ui/
    │       ├── Logo.astro
    │       ├── Button.astro
    │       ├── ProductCard.astro
    │       ├── ProductIcon.astro
    │       ├── ProjectCard.astro
    │       ├── PageHero.astro
    │       ├── SectionLabel.astro
    │       ├── CornerMarks.astro
    │       └── WhatsAppFab.astro
    └── pages/
        ├── index.astro
        ├── about.astro
        ├── projects.astro
        ├── contact.astro
        ├── services/
        │   ├── index.astro
        │   └── [slug].astro
        └── ar/
            ├── index.astro
            ├── من-نحن.astro
            ├── projects.astro
            ├── تواصل-معانا.astro
            └── services/
                ├── index.astro
                └── [slug].astro
```
