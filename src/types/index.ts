export type CategorySlug =
  | 'roti-jala-original'
  | 'set-keluarga'
  | 'bersama-kuah'
  | 'roti-jala-mini'
  | 'tempahan-majlis';

export interface Category {
  id: string;
  name: string;
  slug: CategorySlug;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: CategorySlug;
  image: string;
  packageSize: string;
  /** Price in RM. Sample data until owner supplies real prices. */
  price: number;
  isAvailable: boolean;
  /** Marks prices as sample/placeholder data. */
  isSamplePrice: boolean;
  alt: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  caption: string;
  category: string;
  alt: string;
}

export interface Testimonial {
  id: string;
  customerName: string;
  review: string;
  rating: number;
  isSample: boolean;
}
