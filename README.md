# JCH — Frontend Technical Test

Andreandhiki Riyanta Putra -
Technical test for IFI Program by Jogja Coding House.

## 🚀 Tech Stacks

- **Next.js 15 (App Router)**: `src/app`, SSR/SSG, dynamic routes
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** + **@tailwindcss/postcss**
- **AOS** (Animate On Scroll)
- **Motion** (framer-motion successor)
- **Radix UI** (Dialog/Sheet) + **class-variance-authority**, **tailwind-merge**
- **Lucide React**
- **Biome**
- **Deploy**: Vercel

## 🗺️ Pages

- **Homepage**: `/`
  - File: `src/app/page.tsx`
- **Service Detail**: `/service/[slug]`
  - File: `src/app/service/[slug]/page.tsx`
- **FAQ**: `/faq`
  - File: `src/app/faq/page.tsx`
- **Terms & Privacy**: `/termspolicy`
  - File: `src/app/termspolicy/page.tsx`
- **404 Not Found**:
  - File: `src/app/not-found.tsx`

## 🧩 Main Features

- **Responsive UI** based on Tailwind CSS v4
- **Smooth animations**: AOS + Motion
- **Dynamic Routing** for service page with `slug`
- **Reusable components**: Navbar, Mobile Nav (Sheet), Footer, Container, Button
- **SEO & PWA**: `manifest.json`, icons, metadata in layout
- **Data-driven sections**: content from `src/data/index.tsx`
- **Utilities**: helper `cn`, `utils.ts`, custom fonts in `src/utils/fonts`

## 🗂️ Project Structure

```
src/
  app/
    page.tsx                 # landing page
    layout.tsx               # root layout & metadata
    not-found.tsx            # 404
    faq/page.tsx             # halaman FAQ
    termspolicy/page.tsx     # Terms & Privacy
    service/[slug]/page.tsx  # halaman layanan dinamis
  components/
    navbar.tsx, mobile-nav.tsx, footer.tsx, container.tsx
    ui/button.tsx, ui/sheet.tsx
  features/
    home/ (hero, about-us, services, methodology, portfolio, team, contact)
    service/ (service-hero, service-advantages, service-cta, service-labs)
  data/
    index.tsx                # content data
  utils/
    cn.ts, animation-provider.tsx, fonts/, types/
  lib/
    utils.ts
public/
  home/, services/ (gambar hero/cta/labs), icons manifest
```

## 🧪 How to Run Locally (Node.js)

1. Install dependensi:
   ```bash
   pnpm install
   ```
2. Jalankan server development:
   ```bash
   pnpm dev
   ```
3. Buka `http://localhost:3000`.
