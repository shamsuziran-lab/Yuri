import { Link } from 'react-router-dom';
import { Home, MessageCircle } from 'lucide-react';
import { Logo } from '../components/Logo';
import { Seo } from '../components/Seo';
import { waLink, enquiryMessage } from '../utils/whatsapp';

export function NotFound() {
  return (
    <>
      <Seo title="Halaman Tidak Dijumpai" path="/404" />
      <section className="flex min-h-[70vh] flex-col items-center justify-center bg-ivory px-4 pt-24 pb-16 text-center">
        <Logo className="h-16 w-auto" />
        <p className="mt-8 font-display text-7xl font-bold text-gold sm:text-8xl">404</p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-brown sm:text-3xl">
          Halaman Tidak Dijumpai
        </h1>
        <p className="mt-3 max-w-md text-charcoal/60">
          Maaf, halaman yang anda cari tidak wujud atau telah dialihkan.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-brown px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-[#4d3222]"
          >
            <Home className="h-4 w-4" />
            Kembali ke Utama
          </Link>
          <a
            href={waLink(enquiryMessage('Pertanyaan Halaman'))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#25D366] px-6 py-3 text-sm font-semibold text-[#1a9e4b] transition-colors hover:bg-[#25D366]/10"
          >
            <MessageCircle className="h-4 w-4" />
            Tanya melalui WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
