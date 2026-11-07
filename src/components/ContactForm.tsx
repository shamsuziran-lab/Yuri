import { useState, type FormEvent } from 'react';
import { Send, MessageCircle } from 'lucide-react';
import { business } from '../config/business';
import { contactMessage, openWhatsApp } from '../utils/whatsapp';
import { cn } from '../utils/cn';

const enquiryTypes = [
  'Tempahan Produk',
  'Pertanyaan Menu',
  'Tempahan Majlis / Acara',
  'Penghantaran',
  'Lain-lain',
];

export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState(enquiryTypes[0]);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = 'Sila masukkan nama anda.';
    if (!phone.trim()) e.phone = 'Sila masukkan nombor WhatsApp anda.';
    if (!message.trim()) e.message = 'Sila masukkan mesej anda.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    openWhatsApp(contactMessage({ name, phone, enquiryType: type, message }));
  };

  const inputCls = (hasError: boolean) =>
    cn(
      'w-full rounded-xl border bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal/40 focus:ring-2',
      hasError ? 'border-red-400 focus:ring-red-200' : 'border-brown/20 focus:border-gold focus:ring-gold/30',
    );

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium text-brown">
            Nama <span className="text-orange">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama anda"
            className={inputCls(!!errors.name)}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-medium text-brown">
            Nombor WhatsApp <span className="text-orange">*</span>
          </label>
          <input
            id="cf-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="cth: 012-345 6789"
            className={inputCls(!!errors.phone)}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="cf-type" className="mb-1.5 block text-sm font-medium text-brown">
          Jenis Pertanyaan
        </label>
        <select
          id="cf-type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className={inputCls(false)}
        >
          {enquiryTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-msg" className="mb-1.5 block text-sm font-medium text-brown">
          Mesej <span className="text-orange">*</span>
        </label>
        <textarea
          id="cf-msg"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Sila nyatakan butiran tempahan atau pertanyaan anda…"
          className={cn(inputCls(!!errors.message), 'resize-y')}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#1fb857] hover:shadow-lg sm:w-auto"
      >
        <Send className="h-4 w-4" />
        Hantar melalui WhatsApp
      </button>
      <p className="flex items-center gap-1.5 text-xs text-charcoal/50">
        <MessageCircle className="h-3.5 w-3.5" />
        Borang ini akan membuka WhatsApp dengan mesej yang telah diisi. Nombor:
        {' '}+{business.whatsappNumber}
      </p>
    </form>
  );
}
