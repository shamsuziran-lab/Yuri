import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Leaf, ShieldCheck, ChefHat } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Seo } from '../components/Seo';
import { img, PHOTOS } from '../utils/images';
import { business } from '../config/business';

const values = [
  {
    icon: Heart,
    title: 'Ketulusan',
    desc: 'Setiap hidangan disediakan dengan kasih sayang seperti memasak untuk keluarga sendiri.',
  },
  {
    icon: Leaf,
    title: 'Kehadaman',
    desc: 'Kami percaya rasa terbaik datang daripada kesederhanaan dan bahan yang dipilih dengan teliti.',
  },
  {
    icon: ShieldCheck,
    title: 'Kepercayaan',
    desc: 'Komitmen kami adalah untuk konsistensi — setiap tempahan menerima kualiti yang sama.',
  },
  {
    icon: ChefHat,
    title: 'Kepakaran Tradisi',
    desc: 'Resepi dan teknik turun-temurun yang dikembangkan untuk cita rasa masa kini.',
  },
];

export function About() {
  return (
    <>
      <Seo
        title="Tentang Kami – Kisah Roti Jala Dila"
        description="Ketahui kisah, falsafah dan komitmen Roti Jala Dila — Roti Jala homemade premium yang disediakan dengan penuh perhatian."
        path="/tentang"
      />

      {/* Page header */}
      <section className="bg-gradient-to-br from-cream via-ivory to-gold/10 pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gold/50 bg-gold/10 px-4 py-1 text-xs font-semibold tracking-widest text-brown uppercase">
            Tentang Kami
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-charcoal sm:text-5xl">
            Kisah di Sebalik {business.name}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-charcoal/65">
            Homemade. Premium. Dengan sepenuh hati.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Pengenalan"
              title="Roti Jala Dila Membawa Keunikan Hidangan Tradisional"
            />
            <div className="mt-6 space-y-4 text-charcoal/70 leading-relaxed">
              <p>
                {business.name} membawa keunikan hidangan tradisional ke meja anda.
                Setiap hidangan disediakan dengan penuh perhatian bagi memastikan
                kelembutan, rasa dan kualiti yang memuaskan.
              </p>
              <p>
                Kami ingin berkongsi keenakan Roti Jala yang sesuai dinikmati bersama
                keluarga, sahabat dan insan tersayang — sama ada untuk santapan harian,
                majlis keluarga mahupun acara istimewa.
              </p>
              <p>
                Dengan pendekatan homemade yang jujur, kami percaya hidangan terbaik
                lahir daripada ketelitian, bahan yang dipilih dan kasih sayang yang
                dicurahkan dalam setiap proses penyediaan.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ['Falsafah Kami', 'Tradisi rasa, sentuhan istimewa'],
                ['Komitmen', 'Kualiti konsisten dalam setiap hidangan'],
                ['Pendekatan', 'Homemade — disediakan dengan penuh teliti'],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl border border-brown/10 bg-white p-4">
                  <p className="text-xs font-semibold tracking-wide text-orange uppercase">{k}</p>
                  <p className="mt-1 font-display text-base font-semibold text-brown">{v}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-orange/15 blur-xl" />
            <img
              src={img(PHOTOS.meal2, 1000, 800)}
              alt="Hidangan Roti Jala Dila — foto contoh"
              loading="lazy"
              className="relative w-full rounded-[2rem] object-cover shadow-xl"
              width={1000}
              height={800}
            />
            <div className="absolute -bottom-5 right-4 rounded-2xl bg-brown px-5 py-4 text-cream shadow-xl">
              <p className="font-display text-lg font-semibold">{business.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nilai Kami"
            title="Apa Yang Kami Pegang Teguh"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl border border-brown/10 bg-white p-6 text-center shadow-sm"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/20 text-brown">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-brown">{v.title}</h3>
                <p className="mt-2 text-sm text-charcoal/60">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation approach */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-3 rounded-[2rem] bg-gold/20 blur-xl" />
            <img
              src={img(PHOTOS.kitchen2, 1000, 800)}
              alt="Persediaan hidangan di dapur — foto contoh"
              loading="lazy"
              className="relative w-full rounded-[2rem] object-cover shadow-xl"
              width={1000}
              height={800}
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Cara Kami Memasak"
              title="Daripada Dapur Kami, Dengan Penuh Perhatian"
            />
            <ul className="mt-6 space-y-4">
              {[
                'Bahan dipilih dengan teliti untuk setiap hidangan.',
                'Setiap hidangan disediakan secara handmade — tiada jalan pintas.',
                'Kelembutan dan tekstur Roti Jala diutamakan dalam setiap adunan.',
                'Penyajian kemas dan teratur untuk pengalaman dinikmati sepenuhnya.',
                'Tempahan diterima melalui WhatsApp dan disahkan secara manual.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-charcoal/70">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/menu"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brown px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-[#4d3222]"
            >
              Lihat Menu Kami
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
