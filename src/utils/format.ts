import { business } from '../config/business';

export function formatRM(price: number) {
  return `${business.currency} ${price.toFixed(2)}`;
}
