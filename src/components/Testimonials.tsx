import { Star, BadgeCheck } from 'lucide-react';
import type { Testimonial } from '../types';
import { cn } from '../utils/cn';

export function Testimonials({ items }: { items: Testimonial[] }) {
  if (items.length === 0) return null;
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((t) => (
        <figure
          key={t.id}
          className="flex flex-col rounded-3xl border border-brown/10 bg-white p-6 shadow-sm"
        >
          <div className="flex items-center gap-1" aria-label={`Penilaian ${t.rating} daripada 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'h-4 w-4',
                  i < t.rating ? 'fill-gold text-gold' : 'text-brown/20',
                )}
              />
            ))}
          </div>
          <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-charcoal/70">
            “{t.review}”
          </blockquote>
          <figcaption className="mt-5 flex items-center gap-3 border-t border-brown/10 pt-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 font-display text-sm font-bold text-brown">
              {t.customerName.charAt(0)}
            </span>
            <div>
              <p className="text-sm font-semibold text-brown">{t.customerName}</p>
              {t.isSample ? (
                <p className="flex items-center gap-1 text-[11px] text-orange">
                  <BadgeCheck className="h-3 w-3" /> Contoh — bukan ulasan sebenar
                </p>
              ) : (
                <p className="text-[11px] text-charcoal/50">Pelanggan disahkan</p>
              )}
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
