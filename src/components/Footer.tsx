import { Link } from 'react-router-dom';
import { MapPin, Clock, Mail, Facebook, Instagram, Music2 } from 'lucide-react';
import { Logo } from './Logo';
import { business } from '../config/business';

export function Footer() {
  const year = new Date().getFullYear();
  const hasAddress = business.address.trim().length > 0;

  return (
    <footer className="bg-brown text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div>
          <Logo variant="square" className="h-24 w-24" />
          <p className="mt-4 font-display text-xl font-semibold">{business.name}</p>
          <p className="mt-1 text-sm text-gold-light">{business.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-cream/70">
            Roti Jala homemade premium — keaslian rasa, sentuhan istimewa untuk setiap
            hidangan anda.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="font-display text-lg font-semibold text-gold">Pautan Pantas</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ['/', 'Utama'],
              ['/tentang', 'Tentang Kami'],
              ['/menu', 'Menu'],
              ['/galeri', 'Galeri'],
              ['/tempahan', 'Tempahan'],
              ['/hubungi', 'Hubungi Kami'],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-cream/80 transition-colors hover:text-gold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-lg font-semibold text-gold">Hubungi Kami</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            {hasAddress ? (
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{business.address}{business.area ? `, ${business.area}` : ''}</span>
              </li>
            ) : (
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>Kawasan perniagaan akan dimaklumkan — sila hubungi melalui WhatsApp.</span>
              </li>
            )}
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{business.operatingHours}</span>
            </li>
            {business.email && (
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${business.email}`} className="hover:text-gold">{business.email}</a>
              </li>
            )}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-display text-lg font-semibold text-gold">Media Sosial</h3>
          <div className="mt-4 flex gap-3">
            {business.social.facebook && (
              <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-gold hover:text-brown">
                <Facebook className="h-5 w-5" />
              </a>
            )}
            {business.social.instagram && (
              <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-gold hover:text-brown">
                <Instagram className="h-5 w-5" />
              </a>
            )}
            {business.social.tiktok && (
              <a href={business.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 transition-colors hover:bg-gold hover:text-brown">
                <Music2 className="h-5 w-5" />
              </a>
            )}
            {!business.social.facebook && !business.social.instagram && !business.social.tiktok && (
              <p className="text-sm text-cream/60">Akan dikemas kini tidak lama lagi.</p>
            )}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-cream/50">
            Penghantaran & kutipan diatur melalui WhatsApp. Pembayaran diuruskan
            terus dengan pemilik perniagaan.
          </p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-cream/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} {business.name}. Hak cipta terpelihara.</p>
          <p>{business.positioning}</p>
        </div>
      </div>
    </footer>
  );
}
