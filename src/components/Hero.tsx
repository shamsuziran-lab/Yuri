import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Heart, Users } from 'lucide-react';
import { business } from '../config/business';
import { img, PHOTOS } from '../utils/images';

const highlights = [
  { icon: Leaf, title: 'Dibuat Segar', desc: 'Disediakan dengan penuh teliti pada setiap hidangan.' },
  { icon: Heart, title: 'Rasa Tradisional', desc: 'Resepi warisan dengan cita rasa yang tulen.' },
  { icon: Users, title: 'Sesuai Pelbagai Majlis', desc: 'Daripada santapan keluarga hingga majlis besar.' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory pt-12 sm:pt-16">
      {/* Soft decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-orange/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24">
        {/* Copy */}
        <div className="animate-fade-up text-center lg:text-left">
          <span className="inline-flex items-center rounded-full border border-gold/40 bg-cream px-4 py-1.5 text-xs font-semibold tracking-wide text-brown uppercase">
            Homemade • Premium • Malaysia
          </span>
          <h1 className="mt-5 font-display text-4xl leading-tight font-bold text-charcoal sm:text-5xl lg:text-6xl">
            {business.name} —{' '}
            <span className="text-brown italic">Kelembutan Tradisi,</span>
            <br />
            Keenakan Tiada Tandingan.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-charcoal/70 sm:text-lg lg:mx-0">
            Nikmati keenakan Roti Jala homemade yang disediakan dengan penuh
            teliti, menggunakan bahan pilihan untuk memberikan pengalaman rasa
            yang istimewa.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              to="/tempahan"
              className="inline-flex items-center gap-2 rounded-full bg-brown px-7 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-brown/25 transition-all hover:bg-[#4d3222] hover:shadow-xl"
            >
              Tempah Sekarang
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brown/30 bg-cream px-7 py-3.5 text-sm font-semibold text-brown transition-all hover:border-brown hover:bg-brown-soft"
            >
              Lihat Menu Kami
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="animate-fade-up animate-delay-2 relative">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold/30 to-orange/20 blur-xl" />
          <img
            src={img(PHOTOS.hero, 1100, 800)}
            alt="Hidangan makanan Malaysia yang disediakan segar — foto contoh"
            className="relative w-full rounded-[2rem] object-cover shadow-2xl"
            loading="eager"
            width={1100}
            height={800}
          />
          <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white/95 px-5 py-4 shadow-xl backdrop-blur sm:-left-6">
            <p className="font-display text-lg font-semibold text-brown">{business.tagline}</p>
            <p className="text-xs text-charcoal/60">Setiap hidangan, penuh perhatian.</p>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="relative border-t border-brown/10 bg-cream/60">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6 lg:px-8">
          {highlights.map((h) => (
            <div key={h.title} className="flex items-start gap-4 text-center sm:text-left">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold/20 text-brown">
                <h.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-brown">{h.title}</h3>
                <p className="mt-1 text-sm text-charcoal/60">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
