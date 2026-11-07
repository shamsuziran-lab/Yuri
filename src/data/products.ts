import type { Product } from '../types';
import { img, PHOTOS } from '../utils/images';

/**
 * SAMPLE DATA — all prices and package sizes are placeholders.
 * Edit this file (or use the Admin demo page) to update products.
 */
export const sampleProducts: Product[] = [
  {
    id: 'p-001',
    name: 'Roti Jala Original',
    slug: 'roti-jala-original',
    description:
      'Roti Jala tradisional yang diolah dengan teliti, lembut dan beraroma wangi. Sesuai dinikmati bersama kuah atau lauk kegemaran anda.',
    category: 'roti-jala-original',
    image: img(PHOTOS.rotiJalaPlate, 900, 700),
    packageSize: '5 keping',
    price: 8.0,
    isAvailable: true,
    isSamplePrice: true,
    alt: 'Roti Jala original di atas pinggan, foto contoh',
  },
  {
    id: 'p-002',
    name: 'Roti Jala Set Keluarga',
    slug: 'roti-jala-set-keluarga',
    description:
      'Pakej istimewa untuk keluarga — lebih banyak Roti Jala berkualiti dengan penyajian yang kemas untuk santapan bersama.',
    category: 'set-keluarga',
    image: img(PHOTOS.meal, 900, 700),
    packageSize: '15 keping',
    price: 22.0,
    isAvailable: true,
    isSamplePrice: true,
    alt: 'Set hidangan keluarga, foto contoh',
  },
  {
    id: 'p-003',
    name: 'Roti Jala Bersama Kuah Kari',
    slug: 'roti-jala-bersama-kuah-kari',
    description:
      'Roti Jala dihidangkan bersama kuah kari yang kaya rasa — pengalaman makan yang lengkap dan memuaskan.',
    category: 'bersama-kuah',
    image: img(PHOTOS.curry, 900, 700),
    packageSize: '5 keping + kuah kari',
    price: 15.0,
    isAvailable: true,
    isSamplePrice: true,
    alt: 'Roti Jala dengan kuah kari, foto contoh',
  },
  {
    id: 'p-004',
    name: 'Roti Jala Mini',
    slug: 'roti-jala-mini',
    description:
      'Saiz kecil yang praktikal — sesuai untuk majlis santai, jamuan kecil atau hidangan pembuka.',
    category: 'roti-jala-mini',
    image: img(PHOTOS.pancake, 900, 700),
    packageSize: '10 keping mini',
    price: 12.0,
    isAvailable: true,
    isSamplePrice: true,
    alt: 'Roti Jala mini saiz kecil, foto contoh',
  },
  {
    id: 'p-005',
    name: 'Tempahan Roti Jala Majlis',
    slug: 'tempahan-roti-jala-majlis',
    description:
      'Tempahan pukal untuk majlis perkahwinan, kenduri, hari jadi dan acara korporat. Kuantiti dan keperluan diatur bersama.',
    category: 'tempahan-majlis',
    image: img(PHOTOS.foodSpread, 900, 700),
    packageSize: 'Mengikut keperluan majlis',
    price: 0,
    isAvailable: true,
    isSamplePrice: true,
    alt: 'Hidangan untuk majlis, foto contoh',
  },
];

/** Featured products shown on the homepage (subset). */
export const featuredProductIds = ['p-001', 'p-002', 'p-003'];
