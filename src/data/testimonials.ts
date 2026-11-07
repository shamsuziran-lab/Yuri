import type { Testimonial } from '../types';

/**
 * SAMPLE DATA — placeholder testimonials for development only.
 * Replace with genuine customer feedback (with permission) before launch.
 */
export const sampleTestimonials: Testimonial[] = [
  {
    id: 't-1',
    customerName: 'Pelanggan Contoh 1',
    review:
      'Contoh ulasan pelanggan — Roti Jala Dila di sini akan memaparkan testimoni sebenar daripada pelanggan yang berpuas hati.',
    rating: 5,
    isSample: true,
  },
  {
    id: 't-2',
    customerName: 'Pelanggan Contoh 2',
    review:
      'Contoh ulasan pelanggan — maklum balas sebenar akan dipaparkan di bahagian ini setelah dikumpulkan dengan kebenaran pelanggan.',
    rating: 5,
    isSample: true,
  },
  {
    id: 't-3',
    customerName: 'Pelanggan Contoh 3',
    review:
      'Contoh ulasan pelanggan — tempah awal untuk memastikan ketersediaan untuk majlis atau acara anda.',
    rating: 4,
    isSample: true,
  },
];
