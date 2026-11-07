import { useMemo, useState } from 'react';
import { GalleryGrid } from '../components/GalleryGrid';
import { SectionHeading } from '../components/SectionHeading';
import { Seo } from '../components/Seo';
import { galleryImages, galleryCategories } from '../data/gallery';
import { cn } from '../utils/cn';
import { img, PHOTOS } from '../utils/images';

export function GalleryPage() {
  const [cat, setCat] = useState<(typeof galleryCategories)[number]>('Semua');

  const filtered = useMemo(
    () =>
      cat === 'Semua'
        ? galleryImages
        : galleryImages.filter((g) => g.category === cat),
    [cat],
  );

  return (
    <>
      <Seo
        title="Galeri – Visual Roti Jala Dila"
        description="Lihat galeri hidangan Roti Jala Dila — Roti Jala, hidangan keluarga dan tempahan majlis."
        path="/galeri"
      />

      <section className="bg-gradient-to-br from-cream via-ivory to-gold/10 pt-32 pb-14">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gold/50 bg-gold/10 px-4 py-1 text-xs font-semibold tracking-widest text-brown uppercase">
            Galeri
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-charcoal sm:text-5xl">
            Visual Roti Jala Dila
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-charcoal/65">
            Gambar di bawah adalah foto contoh untuk pembangunan laman — gambar
            sebenar perniagaan akan menggantikannya tidak lama lagi.
          </p>
        </div>
      </section>

      {/* Featured banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem]">
          <img
            src={img(PHOTOS.table, 1600, 600)}
            alt="Suasana meja hidangan — foto contoh"
            loading="lazy"
            className="h-64 w-full object-cover sm:h-80"
            width={1600}
            height={600}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brown/70 to-transparent" />
          <p className="absolute bottom-6 left-6 font-display text-2xl font-semibold text-cream">
            Setiap hidangan, sebuah cerita.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading title="Terokai Galeri" />

        {/* Filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {galleryCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                cat === c
                  ? 'bg-brown text-cream'
                  : 'border border-brown/20 bg-white text-brown hover:bg-brown-soft',
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <GalleryGrid images={filtered} />
        </div>
      </section>
    </>
  );
}
