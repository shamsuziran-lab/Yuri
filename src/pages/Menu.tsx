import { useMemo, useState } from 'react';
import { Printer } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { Seo } from '../components/Seo';
import { useProducts } from '../hooks/useProducts';
import { categories } from '../data/categories';
import { cn } from '../utils/cn';

export function Menu() {
  const { products } = useProducts();
  const [active, setActive] = useState<string>('semua');

  const filtered = useMemo(
    () =>
      active === 'semua'
        ? products
        : products.filter((p) => p.category === active),
    [products, active],
  );

  return (
    <>
      <Seo
        title="Menu – Tempahan Roti Jala Homemade"
        description="Lihat menu Roti Jala Dila: Roti Jala Original, Set Keluarga, Bersama Kuah Kari, Roti Jala Mini dan tempahan majlis. Tempah melalui WhatsApp."
        path="/menu"
      />

      <section className="bg-gradient-to-br from-cream via-ivory to-gold/10 pt-32 pb-14">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gold/50 bg-gold/10 px-4 py-1 text-xs font-semibold tracking-widest text-brown uppercase">
            Menu Kami
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-charcoal sm:text-5xl">
            Pilihan Roti Jala Dila
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-charcoal/65">
            Semua produk di bawah adalah data contoh — harga sebenar akan dikemas kini
            oleh pemilik perniagaan. Tempah terus melalui WhatsApp.
          </p>
          <button
            type="button"
            onClick={() => window.print()}
            className="no-print mt-6 inline-flex items-center gap-2 rounded-full border-2 border-brown/30 px-6 py-2.5 text-sm font-semibold text-brown transition-colors hover:border-brown hover:bg-brown-soft"
          >
            <Printer className="h-4 w-4" />
            Cetak Menu
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Category filters */}
        <div className="no-print flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => setActive('semua')}
            className={cn(
              'rounded-full px-5 py-2 text-sm font-medium transition-colors',
              active === 'semua'
                ? 'bg-brown text-cream'
                : 'border border-brown/20 bg-white text-brown hover:bg-brown-soft',
            )}
          >
            Semua
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setActive(c.slug)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-colors',
                active === c.slug
                  ? 'bg-brown text-cream'
                  : 'border border-brown/20 bg-white text-brown hover:bg-brown-soft',
              )}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Active category description */}
        {active !== 'semua' && (
          <p className="mt-6 text-center text-sm text-charcoal/60">
            {categories.find((c) => c.slug === active)?.description}
          </p>
        )}

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="mt-16 rounded-3xl border border-dashed border-brown/20 bg-white/60 p-12 text-center">
            <p className="font-display text-xl text-brown">Tiada produk dalam kategori ini.</p>
            <p className="mt-2 text-sm text-charcoal/60">
              Sila hubungi kami melalui WhatsApp untuk maklumat lanjut.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
