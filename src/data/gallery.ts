import type { GalleryImage } from '../types';
import { img, PHOTOS } from '../utils/images';

/**
 * SAMPLE DATA — placeholder photography for development.
 * Replace with genuine business photographs before launch.
 */
export const galleryCategories = [
  'Semua',
  'Roti Jala',
  'Dengan Kuah',
  'Hidangan Keluarga',
  'Majlis & Acara',
  'Persediaan',
] as const;

export const galleryImages: GalleryImage[] = [
  {
    id: 'g-1',
    src: img(PHOTOS.rotiJalaPlate, 1000, 750),
    caption: 'Roti Jala di atas pinggan — foto contoh',
    category: 'Roti Jala',
    alt: 'Gambar contoh Roti Jala di atas pinggan',
  },
  {
    id: 'g-2',
    src: img(PHOTOS.pancake, 1000, 750),
    caption: 'Susunan hidangan — foto contoh',
    category: 'Roti Jala',
    alt: 'Gambar contoh susunan hidangan',
  },
  {
    id: 'g-3',
    src: img(PHOTOS.curry, 1000, 750),
    caption: 'Roti Jala bersama kuah — foto contoh',
    category: 'Dengan Kuah',
    alt: 'Gambar contoh hidangan dengan kuah',
  },
  {
    id: 'g-4',
    src: img(PHOTOS.rice, 1000, 750),
    caption: 'Hidangan keluarga — foto contoh',
    category: 'Hidangan Keluarga',
    alt: 'Gambar contoh hidangan keluarga',
  },
  {
    id: 'g-5',
    src: img(PHOTOS.meal, 1000, 750),
    caption: 'Set hidangan — foto contoh',
    category: 'Hidangan Keluarga',
    alt: 'Gambar contoh set hidangan',
  },
  {
    id: 'g-6',
    src: img(PHOTOS.foodSpread, 1000, 750),
    caption: 'Hidangan majlis — foto contoh',
    category: 'Majlis & Acara',
    alt: 'Gambar contoh hidangan untuk majlis',
  },
  {
    id: 'g-7',
    src: img(PHOTOS.party, 1000, 750),
    caption: 'Acara & keraian — foto contoh',
    category: 'Majlis & Acara',
    alt: 'Gambar contoh suasana acara',
  },
  {
    id: 'g-8',
    src: img(PHOTOS.table, 1000, 750),
    caption: 'Meja hidangan — foto contoh',
    category: 'Majlis & Acara',
    alt: 'Gambar contoh meja hidangan',
  },
  {
    id: 'g-9',
    src: img(PHOTOS.cooking, 1000, 750),
    caption: 'Proses penyediaan — foto contoh',
    category: 'Persediaan',
    alt: 'Gambar contoh proses penyediaan makanan',
  },
  {
    id: 'g-10',
    src: img(PHOTOS.ingredients, 1000, 750),
    caption: 'Bahan pilihan — foto contoh',
    category: 'Persediaan',
    alt: 'Gambar contoh bahan makanan segar',
  },
  {
    id: 'g-11',
    src: img(PHOTOS.kitchen2, 1000, 750),
    caption: 'Dapur persiapan — foto contoh',
    category: 'Persediaan',
    alt: 'Gambar contoh persiapan di dapur',
  },
  {
    id: 'g-12',
    src: img(PHOTOS.brunch, 1000, 750),
    caption: 'Hidangan siap — foto contoh',
    category: 'Roti Jala',
    alt: 'Gambar contoh hidangan siap dihidangkan',
  },
];
