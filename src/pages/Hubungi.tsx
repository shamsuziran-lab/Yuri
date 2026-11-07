import { MapPin, Clock, Phone, Mail, Facebook, Instagram, Music2, MessageCircle } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ContactForm } from '../components/ContactForm';
import { Seo } from '../components/Seo';
import { business } from '../config/business';
import { waLink, enquiryMessage } from '../utils/whatsapp';

export function Hubungi() {
  const hasAddress = business.address.trim().length > 0;

  const cards = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      desc: `+${business.whatsappNumber}`,
      href: waLink(enquiryMessage('Pertanyaan Am')),
      external: true,
      cta: 'Hantar Mesej',
    },
    {
      icon: MapPin,
      title: 'Lokasi Perniagaan',
      desc: hasAddress ? business.address : 'Kawasan akan dimaklumkan',
      href: undefined,
      external: false,
      cta: undefined,
    },
    {
      icon: Clock,
      title: 'Waktu Operasi',
      desc: business.operatingHours,
      href: undefined,
      external: false,
      cta: undefined,
    },
    ...(business.email
      ? [{
          icon: Mail,
          title: 'E-mel',
          desc: business.email,
          href: `mailto:${business.email}`,
          external: false,
          cta: 'Hantar E-mel',
        }]
      : []),
  ];

  return (
    <>
      <Seo
        title="Hubungi Kami – Tempahan Roti Jala Dila"
        description="Hubungi Roti Jala Dila melalui WhatsApp untuk tempahan, pertanyaan menu dan tempahan majlis."
        path="/hubungi"
      />

      <section className="bg-gradient-to-br from-cream via-ivory to-gold/10 pt-32 pb-14">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gold/50 bg-gold/10 px-4 py-1 text-xs font-semibold tracking-widest text-brown uppercase">
            Hubungi Kami
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-charcoal sm:text-5xl">
            Mari Berhubung
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-charcoal/65">
            Ada soalan tentang menu, tempahan atau liputan perkhidmatan? Kami sedia membantu.
          </p>
        </div>
      </section>

      {/* Info cards */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => {
            const inner = (
              <>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/20 text-brown">
                  <c.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-brown">{c.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-charcoal/60">{c.desc}</p>
                {c.cta && (
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a9e4b]">
                    {c.cta} <MessageCircle className="h-4 w-4" />
                  </span>
                )}
              </>
            );
            const cls =
              'rounded-3xl border border-brown/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md';
            return c.href ? (
              <a
                key={c.title}
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={cls}
              >
                {inner}
              </a>
            ) : (
              <div key={c.title} className={cls}>{inner}</div>
            );
          })}
        </div>

        {/* Service areas */}
        <div className="mt-6 rounded-3xl border border-brown/10 bg-white p-6 shadow-sm">
          <h3 className="font-display text-lg font-semibold text-brown">Kawasan Perkhidmatan</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {business.serviceAreas.map((a) => (
              <span key={a} className="rounded-full bg-brown-soft px-4 py-1.5 text-sm text-brown">
                {a}
              </span>
            ))}
          </div>
          <p className="mt-3 text-sm text-charcoal/60">
            {business.deliveryInfo} Sila hubungi kami melalui WhatsApp untuk kepastian
            mengikut lokasi anda.
          </p>
        </div>

        {/* Map placeholder */}
        <div className="mt-6 overflow-hidden rounded-3xl border border-brown/10 bg-brown-soft">
          <div className="flex min-h-[280px] flex-col items-center justify-center p-10 text-center">
            <MapPin className="h-10 w-10 text-brown/50" />
            <p className="mt-4 font-display text-xl font-semibold text-brown">
              Lokasi di Peta
            </p>
            <p className="mt-2 max-w-md text-sm text-charcoal/60">
              Peta Google akan dipaparkan di sini setelah lokasi perniagaan disahkan.
              Buat masa ini, sila hubungi kami melalui WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Contact form + socials */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <SectionHeading align="left" title="Hantar Pertanyaan" />
            <div className="mt-8 rounded-[2rem] border border-brown/10 bg-white p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>
          </div>
          <div className="lg:col-span-2">
            <SectionHeading align="left" title="Media Sosial" />
            <div className="mt-8 space-y-4">
              {[
                { icon: Facebook, label: 'Facebook', href: business.social.facebook },
                { icon: Instagram, label: 'Instagram', href: business.social.instagram },
                { icon: Music2, label: 'TikTok', href: business.social.tiktok },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between rounded-2xl border border-brown/10 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-brown">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <span className="font-medium text-brown">{s.label}</span>
                  </div>
                  {s.href ? (
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#1a9e4b] hover:underline"
                    >
                      Lawati
                    </a>
                  ) : (
                    <span className="text-xs text-charcoal/40">Akan dikemas kini</span>
                  )}
                </div>
              ))}
              <div className="rounded-2xl border border-dashed border-brown/20 bg-cream/60 p-5 text-sm text-charcoal/60">
                <Phone className="mb-2 h-5 w-5 text-brown/50" />
                Untuk respons terpantas, hubungi terus melalui WhatsApp di
                atas — itulah saluran utama kami.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
