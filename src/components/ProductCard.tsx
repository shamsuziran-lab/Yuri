import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Minus, Plus, Package } from 'lucide-react';
import type { Product } from '../types';
import { formatRM } from '../utils/format';
import { productOrderMessage, openWhatsApp, waLink } from '../utils/whatsapp';
import { isWhatsAppConfigured } from '../config/business';
import { categories } from '../data/categories';
import { cn } from '../utils/cn';

export function ProductCard({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const category = categories.find((c) => c.slug === product.category);
  const message = productOrderMessage({
    name: product.name,
    packageSize: product.packageSize,
    quantity: qty,
  });

  return (
    <article className="product-card group flex flex-col overflow-hidden rounded-3xl border border-brown/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          width={900}
          height={700}
        />
        <span className="absolute top-3 left-3 rounded-full bg-cream/95 px-3 py-1 text-[11px] font-semibold text-brown shadow">
          {category?.name ?? product.category}
        </span>
        {!product.isAvailable && (
          <span className="absolute inset-0 flex items-center justify-center bg-charcoal/60 text-sm font-semibold text-cream">
            Tidak Tersedia Buat Masa Ini
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-semibold text-brown">{product.name}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-charcoal/50">
          <Package className="h-3.5 w-3.5" />
          {product.packageSize}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/65">
          {product.description}
        </p>

        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            {product.price > 0 ? (
              <p className="font-display text-2xl font-bold text-brown">
                {formatRM(product.price)}
              </p>
            ) : (
              <p className="font-display text-lg font-semibold text-brown">Harga atas permintaan</p>
            )}
            {product.isSamplePrice && (
              <p className="text-[11px] text-orange">*Harga contoh — akan dikemas kini</p>
            )}
          </div>

          {product.isAvailable && (
            <div className="flex items-center gap-2">
              <div className="flex items-center rounded-full border border-brown/20">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Kurangkan kuantiti"
                  className="flex h-9 w-9 items-center justify-center rounded-full text-brown hover:bg-brown-soft"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center text-sm font-semibold">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.min(99, q + 1))}
                  aria-label="Tambah kuantiti"
                  className="flex h-9 w-9 items-center justify-center rounded-full text-brown hover:bg-brown-soft"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <a
                href={waLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (!isWhatsAppConfigured) {
                    e.preventDefault();
                    openWhatsApp(message);
                  }
                }}
                className={cn(
                  'inline-flex h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold text-white shadow transition-transform hover:scale-[1.04]',
                  'bg-[#25D366] hover:bg-[#1fb857]',
                )}
              >
                <MessageCircle className="h-4 w-4" />
                Tempah
              </a>
            </div>
          )}
        </div>

        {!product.isAvailable && (
          <Link
            to="/tempahan"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-brown/30 px-5 py-2.5 text-sm font-semibold text-brown hover:bg-brown-soft"
          >
            Tanya Ketersediaan
          </Link>
        )}
      </div>
    </article>
  );
}
