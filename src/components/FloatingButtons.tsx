import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { enquiryMessage, openWhatsApp, waLink } from '../utils/whatsapp';
import { isWhatsAppConfigured } from '../config/business';
import { cn } from '../utils/cn';

/** Floating WhatsApp button (bottom-right) + back-to-top button (bottom-left). */
export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a
        href={waLink(enquiryMessage('Pertanyaan Am'))}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          if (!isWhatsAppConfigured) {
            e.preventDefault();
            openWhatsApp(enquiryMessage('Pertanyaan Am'));
          }
        }}
        aria-label="Hubungi kami melalui WhatsApp"
        className="group fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-transform hover:scale-110"
      >
        <MessageCircle className="h-7 w-7 transition-transform group-hover:rotate-12" />
        <span className="pointer-events-none absolute right-full mr-3 hidden rounded-lg bg-charcoal px-3 py-1.5 text-xs whitespace-nowrap text-cream opacity-0 transition-opacity group-hover:opacity-100 sm:block">
          Chat WhatsApp
        </span>
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-60" />
          <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-ivory bg-[#25D366]" />
        </span>
      </a>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Kembali ke atas"
        className={cn(
          'fixed bottom-5 left-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-brown text-cream shadow-lg transition-all hover:bg-[#4d3222]',
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
}

/** Cookie/privacy notice. */
export function CookieNotice() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem('rjd_cookie_ok')) {
      const t = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);
  if (!visible) return null;
  return (
    <div className="fixed inset-x-4 bottom-24 z-40 mx-auto max-w-2xl rounded-2xl border border-brown/10 bg-white/95 p-4 shadow-2xl backdrop-blur animate-fade-up sm:bottom-6 sm:left-auto sm:right-6 sm:mx-0 sm:w-[420px]">
      <p className="text-sm text-charcoal/80">
        <strong className="text-brown">Notis Privasi:</strong> Laman web ini hanya menggunakan
        storan setempat untuk keperluan asas (seperti tetapan demo admin). Tiada data peribadi
        dikumpulkan. Dengan meneruskan pelayaran, anda bersetuju dengan penggunaan ini.
      </p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => {
            localStorage.setItem('rjd_cookie_ok', '1');
            setVisible(false);
          }}
          className="rounded-full bg-brown px-4 py-1.5 text-xs font-semibold text-cream"
        >
          Faham
        </button>
        <Link
          to="/hubungi"
          onClick={() => setVisible(false)}
          className="rounded-full border border-brown/20 px-4 py-1.5 text-xs font-semibold text-brown"
        >
          Hubungi Kami
        </Link>
      </div>
    </div>
  );
}
