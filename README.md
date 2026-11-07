# Roti Jala Dila — Premium Food Brand Website

Laman web premium untuk **Roti Jala Dila**, perniagaan makanan tradisional homemade Malaysia. Bahasa Melayu, mata wang RM, tempahan melalui WhatsApp sahaja — tiada troli beli-belah atau gerbang pembayaran dalam talian.

**Slogan:** *Tradisi Rasa, Istimewa Selera* — *Keaslian Rasa, Sentuhan Istimewa*

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite 6, Tailwind CSS v4, React Router 6, Lucide React
- **Backend (pilihan):** Supabase (PostgreSQL + Auth + Storage) — skema disediakan dalam `supabase/schema.sql`
- **Tempahan:** WhatsApp Click-to-Chat (`wa.me`) — tiada backend diperlukan

## Ciri-ciri

- Laman utama premium: hero, highlight jenama, produk pilihan, kisah jenama, pengalaman pelanggan, CTA akhir
- Menu penuh dengan penapis kategori
- Galeri dengan lightbox, navigasi keyboard, lazy loading
- Borang tempahan pukal (majlis/kenduri) → mesej WhatsApp berformat
- Borang hubungi → mesej WhatsApp berformat
- Butang WhatsApp terapung + notis kuki + butang kembali ke atas
- Halaman admin **demo** (stor an setempat) untuk pratonton pengurusan produk
- SEO: meta tags, Open Graph, Twitter Card, canonical, sitemap.xml, robots.txt, Schema.org JSON-LD
- Responsive sepenuhnya (mudah alih → desktop)

## Memulakan Secara Tempatan

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # bina produksi ke dist/
npm run preview  # pratonton binaan
```

## Konfigurasi Penting

Semua butiran perniagaan disunting dalam **`src/config/business.ts`**:

| Medan | Penerangan |
|---|---|
| `whatsappNumber` | Nombor WhatsApp format antarabangsa tanpa `+` (cth: `60123456789`). **Masih placeholder.** |
| `address`, `area` | Lokasi — kosong sehingga disahkan; paparan mesra dan bukti palsu elak |
| `serviceAreas` | Senarai kawasan liputan perkhidmatan |
| `operatingHours` | Waktu operasi |
| `social` | Pautan Facebook / Instagram / TikTok |
| `announcement` | Bar pengumuman di atas laman (kosong = sembunyi) |

Produk contoh disunting dalam **`src/data/products.ts`** — harga dan saiz pakej adalah **data contoh** sehingga pemilik membekalkan harga sebenar.

## Struktur Projek

```
src/
  components/   Navbar, Footer, Hero, ProductCard, GalleryGrid, Testimonials,
                ContactForm, BulkOrderForm, FloatingButtons, Logo, Seo, dll.
  pages/        Home, About, Menu, GalleryPage, Tempahan, Hubungi, Admin, NotFound
  layouts/      MainLayout
  config/       business.ts, site.ts
  data/         products.ts, categories.ts, gallery.ts, testimonials.ts
  hooks/        useProducts.ts (stor an setempat untuk demo admin)
  utils/        whatsapp.ts, images.ts, format.ts, cn.ts
public/
  logo/         logo-horizontal.svg, logo-square.svg
  favicon.svg, robots.txt, sitemap.xml
supabase/
  schema.sql    jadual + RLS untuk backend produksi
```

## Deploy ke Vercel

1. Push repo ke GitHub/GitLab.
2. Import ke [Vercel](https://vercel.com) — framework **Vite** dikesan automatik.
3. Build command: `npm run build` · Output: `dist` · Tiada env vars diperlukan untuk demo.
4. Update `site.url` dalam `src/config/site.ts` dan URL dalam `index.html` + `sitemap.xml` kepada domain sebenar.

## Backend Supabase (pilihan, untuk admin sebenar)

Frontend kini berfungsi sepenuhnya tanpa backend (data contoh + stor an setempat untuk demo admin). Untuk pengurusan produksi:

1. Cipta projek di [supabase.com](https://supabase.com).
2. Jalankan `supabase/schema.sql` dalam SQL Editor.
3. Cipta admin user melalui Supabase Auth → set `app_metadata.role = 'admin'`.
4. Salin `VITE_SUPABASE_URL` dan `VITE_SUPABASE_ANON_KEY` ke `.env` (lihat `.env.example`).
5. Gantikan `src/hooks/useProducts.ts` dengan panggilan `@supabase/supabase-js` (RLS sudah didayakan dalam skema).

## Nota

- **Gambar**: semua imej adalah foto placeholder berlesen (Unsplash) untuk pembangunan — gantikan dengan foto sebenar perniagaan sebelum launch.
- **Testimoni**: data contoh sahaja — tambah ulasan sebenar dengan kebenaran pelanggan.
- **WhatsApp**: nombor masih placeholder — kemas kini `business.ts`.
- Tiada maklumat perniagaan rekaan (alamat, harga, ulasan) dipaparkan sebagai data sebenar.
