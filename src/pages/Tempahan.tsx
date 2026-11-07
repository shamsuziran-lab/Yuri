import { Link } from 'react-router-dom';
import {
  CalendarDays, Truck, CreditCard, ClipboardList, CheckCircle2, MapPin,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { BulkOrderForm } from '../components/BulkOrderForm';
import { Seo } from '../components/Seo';
import { business } from '../config/business';
import { img, PHOTOS } from '../utils/images';

const steps = [
  {
    icon: ClipboardList,
    title: 'Borang Pertanyaan',
    desc: 'Isi butiran acara, anggaran kuantiti dan keperluan anda.',
  },
  {
    icon: CheckCircle2,
    title: 'Pengesahan Manual',
    desc: 'Pasukan kami akan menghubungi anda melalui WhatsApp untuk sahkan tempahan.',
  },
  {
    icon: CalendarDays,
    title: 'Persediaan & Penyampaian',
    desc: 'Hidangan disediakan segar dan dihantar atau disediakan untuk kutipan.',
  },
];

export function Tempahan() {
  return (
    <>
      <Seo
        title="Tempahan – Roti Jala untuk Majlis & Acara"
        description="Tempah Roti Jala untuk kenduri, majlis perkahwinan, hari jadi dan acara korporat. Borang pertanyaan pukal tersedia — pengesahan melalui WhatsApp."
        path="/tempahan"
      />

      <section className="bg-gradient-to-br from-cream via-ivory to-gold/10 pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gold/50 bg-gold/10 px-4 py-1 text-xs font-semibold tracking-widest text-brown uppercase">
            Tempahan
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-charcoal sm:text-5xl">
            Tempahan Roti Jala Dila
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-charcoal/65">
            Sama ada untuk santapan keluarga atau acara besar — kami sedia membantu.
            Semua tempahan disahkan secara manual melalui WhatsApp.
          </p>
        </div>
      </section>

      {/* Catering banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem]">
          <img
            src={img(PHOTOS.party, 1600, 600)}
            alt="Suasana majlis dan acara — foto contoh"
            loading="lazy"
            className="h-64 w-full object-cover sm:h-80"
            width={1600}
            height={600}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown/85 via-brown/60 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-xl px-6 sm:px-12">
              <h2 className="font-display text-3xl font-bold text-cream sm:text-4xl">
                Roti Jala Dila Untuk Setiap Keraian
              </h2>
              <p className="mt-3 text-cream/85">
                Kenduri, majlis perkahwinan, hari jadi, jamuan pejabat, majlis
                keluarga, program komuniti dan majlis rasmi — kami sediakan
                mengikut keperluan anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading title="Cara Tempahan Berfungsi" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-3xl border border-brown/10 bg-white p-7 text-center shadow-sm">
              <span className="absolute -top-3 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-gold font-display text-sm font-bold text-brown">
                {i + 1}
              </span>
              <span className="mx-auto mt-2 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/20 text-brown">
                <s.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-brown">{s.title}</h3>
              <p className="mt-2 text-sm text-charcoal/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Order form */}
      <section className="bg-cream/60 py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <SectionHeading
              align="left"
              eyebrow="Borang Tempahan Pukal"
              title="Beritahu Kami Keperluan Acara Anda"
              subtitle="Isi borang di sebelah dan hantar terus melalui WhatsApp. Tim kami akan menghubungi anda untuk pengesahan."
            />
            <div className="mt-8 space-y-4">
              {[
                { icon: Truck, title: 'Penghantaran / Kutipan', desc: business.deliveryInfo },
                { icon: CreditCard, title: 'Pembayaran', desc: 'Pembayaran diatur secara langsung dengan pemilik perniagaan melalui WhatsApp.' },
                { icon: MapPin, title: 'Lokasi', desc: business.address || 'Kawasan perniagaan akan dimaklumkan — liputan perkhidmatan boleh disahkan melalui WhatsApp.' },
              ].map((i) => (
                <div key={i.title} className="flex items-start gap-3 rounded-2xl border border-brown/10 bg-white p-4">
                  <i.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="text-sm font-semibold text-brown">{i.title}</p>
                    <p className="mt-0.5 text-xs text-charcoal/60">{i.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-brown/10 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
            <h3 className="font-display text-2xl font-semibold text-brown">Borang Pertanyaan Tempahan</h3>
            <p className="mt-1 text-sm text-charcoal/60">
              Medan bertanda <span className="text-orange">*</span> diperlukan.
            </p>
            <div className="mt-6">
              <BulkOrderForm />
            </div>
          </div>
        </div>
      </section>

      {/* Cross-link to menu */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-brown/10 bg-white p-8 shadow-sm sm:flex-row sm:p-10">
          <div>
            <h3 className="font-display text-2xl font-semibold text-brown">
              Perlukan hidangan individu?
            </h3>
            <p className="mt-2 text-sm text-charcoal/60">
              Lihat menu penuh dan tempah terus melalui WhatsApp.
            </p>
          </div>
          <Link
            to="/menu"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brown px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-[#4d3222]"
          >
            Lihat Menu
          </Link>
        </div>
      </section>
    </>
  );
}
