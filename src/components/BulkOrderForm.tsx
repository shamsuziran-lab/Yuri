import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import { business } from '../config/business';
import { bulkOrderMessage, openWhatsApp, type BulkEnquiry } from '../utils/whatsapp';
import { cn } from '../utils/cn';

const eventTypes = [
  'Kenduri',
  'Majlis Perkahwinan',
  'Majlis Hari Jadi',
  'Jamuan Pejabat',
  'Majlis Keluarga',
  'Program Komuniti',
  'Majlis Rasmi',
  'Lain-lain',
];

const fulfilments = ['Penghantaran', 'Kutipan Sendiri', 'Belum Pasti'];

export function BulkOrderForm() {
  const [form, setForm] = useState<BulkEnquiry>({
    eventType: eventTypes[0],
    estimatedQuantity: '',
    eventDate: '',
    fulfilment: fulfilments[1],
    notes: '',
    name: '',
    phone: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (k: keyof BulkEnquiry) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Sila masukkan nama anda.';
    if (!form.phone.trim()) e.phone = 'Sila masukkan nombor WhatsApp anda.';
    if (!form.eventDate) e.eventDate = 'Sila pilih tarikh acara.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    openWhatsApp(bulkOrderMessage(form));
  };

  const inputCls = (hasError: boolean) =>
    cn(
      'w-full rounded-xl border bg-white px-4 py-3 text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal/40 focus:ring-2',
      hasError ? 'border-red-400 focus:ring-red-200' : 'border-brown/20 focus:border-gold focus:ring-gold/30',
    );

  const label = (text: string, required = false) => (
    <span className="mb-1.5 block text-sm font-medium text-brown">
      {text} {required && <span className="text-orange">*</span>}
    </span>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          {label('Jenis Acara')}
          <select value={form.eventType} onChange={set('eventType')} className={inputCls(false)}>
            {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          {label('Anggaran Kuantiti')}
          <input
            type="text"
            value={form.estimatedQuantity}
            onChange={set('estimatedQuantity')}
            placeholder="cth: 100 pax / 50 set"
            className={inputCls(false)}
          />
        </div>
        <div>
          {label('Tarikh Acara', true)}
          <input type="date" value={form.eventDate} onChange={set('eventDate')} className={inputCls(!!errors.eventDate)} />
          {errors.eventDate && <p className="mt-1 text-xs text-red-500">{errors.eventDate}</p>}
        </div>
        <div>
          {label('Keutamaan')}
          <select value={form.fulfilment} onChange={set('fulfilment')} className={inputCls(false)}>
            {fulfilments.map((f) => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>
      </div>

      <div>
        {label('Keperluan Tambahan')}
        <textarea
          rows={4}
          value={form.notes}
          onChange={set('notes')}
          placeholder="cth: kemasan khas, keperluan halal, masa penghantaran…"
          className={cn(inputCls(false), 'resize-y')}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          {label('Nama Pelanggan', true)}
          <input type="text" value={form.name} onChange={set('name')} placeholder="Nama anda" className={inputCls(!!errors.name)} />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          {label('Nombor WhatsApp', true)}
          <input type="tel" value={form.phone} onChange={set('phone')} placeholder="cth: 012-345 6789" className={inputCls(!!errors.phone)} />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#1fb857] sm:w-auto"
      >
        <Send className="h-4 w-4" />
        Hantar Pertanyaan Tempahan
      </button>
      <p className="text-xs text-charcoal/50">
        Semua tempahan akan disahkan secara manual oleh {business.name} melalui WhatsApp.
      </p>
    </form>
  );
}
