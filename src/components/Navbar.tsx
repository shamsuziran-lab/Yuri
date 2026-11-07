import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import { cn } from '../utils/cn';
import { waLink } from '../utils/whatsapp';

const links = [
  { to: '/', label: 'Utama' },
  { to: '/tentang', label: 'Tentang Kami' },
  { to: '/menu', label: 'Menu' },
  { to: '/galeri', label: 'Galeri' },
  { to: '/tempahan', label: 'Tempahan' },
  { to: '/hubungi', label: 'Hubungi Kami' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-[0_2px_20px_rgba(96,65,46,0.08)]'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" aria-label="Roti Jala Dila - Utama" className="shrink-0">
          <Logo className="h-12 w-auto sm:h-14" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-brown text-cream'
                      : 'text-charcoal/80 hover:bg-brown-soft hover:text-brown',
                  )
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Tempah WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brown/20 text-brown lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden bg-cream/98 backdrop-blur-md transition-all duration-300 lg:hidden',
          open ? 'max-h-[420px] border-t border-brown/10' : 'max-h-0',
        )}
      >
        <ul className="space-y-1 px-4 py-4">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'block rounded-xl px-4 py-3 text-base font-medium',
                    isActive ? 'bg-brown text-cream' : 'text-charcoal hover:bg-brown-soft',
                  )
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white"
            >
              <MessageCircle className="h-5 w-5" />
              Tempah melalui WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
