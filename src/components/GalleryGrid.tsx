import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { cn } from '../utils/cn';
import type { GalleryImage } from '../types';

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(false);

  const close = useCallback(() => {
    setActive(null);
    setZoomed(false);
  }, []);

  const step = useCallback(
    (dir: 1 | -1) => {
      setActive((a) => (a === null ? a : (a + dir + images.length) % images.length));
      setZoomed(false);
    },
    [images.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, step]);

  const current = active !== null ? images[active] : null;

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
        {images.map((img, i) => (
          <button
            key={img.id}
            type="button"
            onClick={() => setActive(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm transition-all hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label={`Lihat gambar: ${img.caption}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              width={800}
              height={600}
            />
            <span className="absolute inset-0 flex items-center justify-center bg-charcoal/0 opacity-0 transition-all group-hover:bg-charcoal/30 group-hover:opacity-100">
              <ZoomIn className="h-7 w-7 text-cream" />
            </span>
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/70 to-transparent px-3 pt-8 pb-2 text-left text-xs text-cream opacity-0 transition-opacity group-hover:opacity-100">
              {img.caption}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal/90 p-4 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Tutup galeri"
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Gambar sebelumnya"
            className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Gambar seterusnya"
            className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <figure
            className="max-h-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.src}
              alt={current.alt}
              className={cn(
                'max-h-[78vh] w-auto rounded-xl object-contain transition-transform duration-300',
                zoomed && 'scale-150 cursor-zoom-out',
              )}
              onClick={() => setZoomed((z) => !z)}
            />
            <figcaption className="mt-3 text-center text-sm text-cream/80">
              {current.caption}
              <span className="ml-2 text-cream/50">({(active ?? 0) + 1} / {images.length})</span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
