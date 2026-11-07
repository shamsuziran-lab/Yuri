import { Link } from 'react-router-dom';
import { ArrowRight, Award, PackageCheck, MessageCircle, CalendarDays, UtensilsCrossed } from 'lucide-react';
import { Hero } from '../components/Hero';
import { SectionHeading } from '../components/SectionHeading';
import { ProductCard } from '../components/ProductCard';
import { Testimonials } from '../components/Testimonials';
import { Seo } from '../components/Seo';
import { useProducts } from '../hooks/useProducts';
import { featuredProductIds } from '../data/products';
import { sampleTestimonials } from '../data/testimonials';
import { img, PHOTOS } from '../utils/images';
import { business } from '../config/business';
import { waLink } from '../utils/whatsapp';

const occasions = [
  'Kenduri', 'Majlis Perkahwinan', 'Hari Jadi', 'Jamuan Pejabat',
  'Majlis Keluarga', 'Program Komuniti', 'Majlis Rasmi',
];

const experience = [
  {
    icon: Award,
    title: 'Kualiti Terjaga',
    desc: 'Setiap hidangan disediakan dengan penuh perhatian terhadap kelembutan, rasa dan kualiti.',
  },
  {
    icon: PackageCheck,
    title: 'Pembungkusan Kemas',
    desc: 'Dihidangkan dan dibungkus dengan kemas — sedia untuk dinikmati di majlis atau di rumah.',
  },
  {
    icon: MessageCircle,
    title: 'Tempahan Mudah',
    desc: 'Tempah terus melalui WhatsApp — pantas, mudah dan tanpa kerumitan.',
  },
];

export function Home() {
  const { products } = useProducts();
  const featured = featuredProductIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <Seo title="Roti Jala Dila – Kelembutan Tradisi, Keenakan Tiada Tandingan" path="/" />
      <Hero />

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Menu Pilihan"
          title="Hidangan Kegemaran Pelanggan"
          subtitle="Antara produk paling popular Roti Jala Dila — semuanya boleh ditempah melalui WhatsApp."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 rounded-full border-2 border-brown/30 px-7 py-3 text-sm font-semibold text-brown transition-all hover:border-brown hover:bg-brown-soft"
          >
            Lihat Kesemua Menu
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Brand story preview */}
      <section className="bg-cream/60 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-3 rounded-[2rem] bg-gold/20 blur-xl" />
            <img
              src={img(PHOTOS.ingredients, 1000, 800)}
              alt="Bahan-bahan segar untuk penyediaan Roti Jala — foto contoh"
              loading="lazy"
              className="relative w-full rounded-[2rem] object-cover shadow-xl"
              width={1000}
              height={800}
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Kisah Kami"
              title="Rasa Tradisi, Disempurnakan dengan Cita Rasa Istimewa"
              subtitle="Roti Jala Dila membawa keunikan hidangan tradisional ke meja anda. Setiap hidangan disediakan dengan penuh perhatian bagi memastikan kelembutan, rasa dan kualiti yang memuaskan."
            />
            <p className="mt-4 text-charcoal/65 leading-relaxed">
              Kami ingin berkongsi keenakan Roti Jala yang sesuai dinikmati bersama
              keluarga, sahabat dan insan tersayang.
            </p>
            <Link
              to="/tentang"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brown px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-[#4d3222]"
            >
              Ketahui Lebih Lanjut
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Customer experience */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pengalaman Pelanggan"
          title="Kenapa Pelanggan Memilih Roti Jala Dila"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {experience.map((e) => (
            <div
              key={e.title}
              className="rounded-3xl border border-brown/10 bg-white p-7 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/30 to-orange/20 text-brown">
                <e.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-brown">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Catering promo */}
      <section className="bg-gradient-to-br from-brown to-[#4d3222] py-20 text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-4 py-1.5 text-xs font-semibold tracking-widest text-gold uppercase">
                <CalendarDays className="h-4 w-4" />
                Tempahan Khas
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                Roti Jala Dila untuk Setiap Keraian
              </h2>
              <p className="mt-4 text-cream/75 leading-relaxed">
                Daripada kenduri kecil hingga majlis perkahwinan yang meriah — kami
                sediakan Roti Jala berkualiti dalam kuantiti yang anda perlukan.
                Tempahan disahkan secara manual untuk memastikan yang terbaik.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {occasions.map((o) => (
                  <span key={o} className="rounded-full bg-cream/10 px-3.5 py-1.5 text-xs font-medium text-gold-light">
                    {o}
                  </span>
                ))}
              </div>
              <Link
                to="/tempahan"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-brown shadow-lg transition-all hover:bg-gold-light"
              >
                <UtensilsCrossed className="h-4 w-4" />
                Tempah untuk Majlis
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gold/20 blur-xl" />
              <img
                src={img(PHOTOS.foodSpread, 1000, 750)}
                alt="Hidangan makanan untuk majlis — foto contoh"
                loading="lazy"
                className="relative w-full rounded-[2rem] object-cover shadow-2xl"
                width={1000}
                height={750}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kata Pelanggan"
          title="Apa Kata Mereka"
          subtitle="Ulasan contoh untuk paparan — testimoni sebenar akan dipaparkan setelah dikumpulkan."
        />
        <div className="mt-12">
          <Testimonials items={sampleTestimonials} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-ivory pb-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-gold/25 via-cream to-orange/15 px-6 py-16 sm:px-16">
            <h2 className="font-display text-3xl font-bold text-brown sm:text-4xl">
              Jom Nikmati Keenakan {business.name}!
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-charcoal/65">
              Tempahan mudah melalui WhatsApp. Beritahu kami apa yang anda perlukan,
              kami akan sahkan pesanan anda.
            </p>
            <a
              href={waLink(`Assalamualaikum ${business.name}. Saya ingin membuat tempahan.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.03] hover:bg-[#1fb857]"
            >
              <MessageCircle className="h-5 w-5" />
              Tempah Melalui WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
