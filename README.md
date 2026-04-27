# TechFix Komputer - Landing Page

  Landing page React + Vite untuk TechFix Komputer (Baki, Sukoharjo).

  ## Cara menjalankan

  Pastikan Node.js versi 18+ sudah terpasang.

  ```bash
  # 1. Install dependencies
  npm install

  # 2. Jalankan dev server
  npm run dev

  # 3. Build untuk produksi (output di folder dist/)
  npm run build

  # 4. Preview hasil build
  npm run preview
  ```

  ## Stack

  - React 19 + Vite 7
  - TypeScript
  - Tailwind CSS 4
  - shadcn/ui (Radix UI)
  - Framer Motion
  - Wouter (routing)
  - Lucide React (icons)

  ## Struktur Folder

  - `src/pages/` — halaman utama (Home, NotFound)
  - `src/components/ui/` — komponen UI dari shadcn
  - `src/index.css` — tema warna (palet hijau) & tailwind config
  - `public/images/` — gambar foto teknisi & meja servis

  ## Deploy

  Hasil build di folder `dist/` adalah static site — bisa di-upload ke
  Netlify, Vercel, Cloudflare Pages, GitHub Pages, atau hosting biasa
  (cPanel/Hostinger). Cukup upload seluruh isi `dist/` ke folder `public_html`.
  