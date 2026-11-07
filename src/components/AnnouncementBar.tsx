import { useEffect, useState } from 'react';
import { Sparkles, AlertTriangle, X } from 'lucide-react';
import { business, isWhatsAppConfigured, isPlaceholderWhatsApp } from '../config/business';

export function AnnouncementBar() {
  if (!business.announcement) return null;
  return (
    <div className="bg-gradient-to-r from-brown via-[#7a5238] to-brown text-cream">
      <p className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-xs font-medium sm:text-sm">
        <Sparkles className="h-4 w-4 shrink-0 text-gold" />
        <span>{business.announcement}</span>
      </p>
    </div>
  );
}

/**
 * Shows a helpful notice while the WhatsApp number is still a placeholder
 * (or missing entirely). Hidden once a real number is configured in
 * src/config/business.ts. Dismissible per visitor.
 */
export function WhatsAppConfigNotice() {
  const needsSetup = !isWhatsAppConfigured || isPlaceholderWhatsApp;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (needsSetup && !sessionStorage.getItem('rjd_wa_notice_ok')) {
      setVisible(true);
    }
  }, [needsSetup]);

  if (!visible) return null;

  return (
    <div className="border-b border-orange/30 bg-orange/10">
      <div className="mx-auto flex max-w-7xl items-start gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
        <p className="flex-1 text-xs text-charcoal/80 sm:text-sm">
          <strong className="text-brown">Demo:</strong> Nombor WhatsApp masih
          placeholder. Butang tempahan akan berfungsi selepas pemilik
          mengemas kini <code>src/config/business.ts</code> dengan nombor
          sebenar.
        </p>
        <button
          type="button"
          aria-label="Tutup notis"
          onClick={() => {
            sessionStorage.setItem('rjd_wa_notice_ok', '1');
            setVisible(false);
          }}
          className="rounded-full p-1 text-charcoal/50 transition-colors hover:bg-brown-soft hover:text-brown"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
