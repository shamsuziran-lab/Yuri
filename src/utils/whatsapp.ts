import { business, isWhatsAppConfigured } from '../config/business';

const BASE = `https://wa.me/${business.whatsappNumber}`;

function buildUrl(message: string) {
  return `${BASE}?text=${encodeURIComponent(message)}`;
}

/**
 * Returns the wa.me URL for a message, or '#' when no WhatsApp number
 * has been configured (graceful fallback — callers should also show
 * WhatsAppConfigNotice which explains the situation to visitors).
 */
export function waLink(message = '') {
  if (!isWhatsAppConfigured) return '#';
  return message ? buildUrl(message) : BASE;
}

/** Open a WhatsApp chat in a new tab. No-op with a notice when unconfigured. */
export function openWhatsApp(message: string) {
  if (!isWhatsAppConfigured) {
    window.alert(
      'Nombor WhatsApp perniagaan belum dikonfigurasi. Sila hubungi pemilik perniagaan secara langsung.',
    );
    return;
  }
  window.open(buildUrl(message), '_blank', 'noopener,noreferrer');
}

/** Pre-filled message for ordering a specific product. */
export function productOrderMessage(p: {
  name: string;
  packageSize: string;
  quantity: number;
}) {
  const now = new Date();
  return `Assalamualaikum ${business.name}.

Saya berminat untuk membuat tempahan.

Nama Produk: ${p.name}
Saiz Pakej: ${p.packageSize}
Kuantiti: ${p.quantity}
Tarikh Tempahan: ${now.toLocaleDateString('ms-MY')}
Masa: ${now.toLocaleTimeString('ms-MY', { hour: '2-digit', minute: '2-digit' })}
Nama Pelanggan: 

Catatan Tambahan:

Mohon maklumkan harga dan pengesahan tempahan.

Terima kasih.`;
}

/** General enquiry message. */
export function enquiryMessage(subject = 'Pertanyaan Am') {
  return `Assalamualaikum ${business.name}.

Saya ingin bertanya tentang: ${subject}

Nama: 
Nombor WhatsApp: 

Terima kasih.`;
}

/** Bulk / event order enquiry message. */
export interface BulkEnquiry {
  eventType: string;
  estimatedQuantity: string;
  eventDate: string;
  fulfilment: string;
  notes: string;
  name: string;
  phone: string;
}

export function bulkOrderMessage(b: BulkEnquiry) {
  return `Assalamualaikum ${business.name}.

Saya ingin membuat tempahan pukal untuk acara/majlis.

Jenis Acara: ${b.eventType}
Anggaran Kuantiti: ${b.estimatedQuantity}
Tarikh Acara: ${b.eventDate}
Keutamaan: ${b.fulfilment}

Nama Pelanggan: ${b.name}
Nombor WhatsApp: ${b.phone}

Keperluan Tambahan:
${b.notes || '-'}

Mohon maklumkan harga, ketersediaan dan pengesahan tempahan.

Terima kasih.`;
}

/** Contact form message. */
export interface ContactMessage {
  name: string;
  phone: string;
  enquiryType: string;
  message: string;
}

export function contactMessage(c: ContactMessage) {
  return `Assalamualaikum ${business.name}.

Jenis Pertanyaan: ${c.enquiryType}
Nama: ${c.name}
Nombor WhatsApp: ${c.phone}

Mesej:
${c.message}

Terima kasih.`;
}
