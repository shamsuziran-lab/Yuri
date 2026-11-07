import { useCallback, useEffect, useState } from 'react';
import type { Product } from '../types';
import { sampleProducts } from '../data/products';

const STORAGE_KEY = 'rjd_products_v1';

function load(): Product[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Product[];
      if (Array.isArray(parsed) && parsed.length) return parsed;
    }
  } catch {
    /* ignore corrupt storage */
  }
  return sampleProducts;
}

/**
 * Products are stored in localStorage so the admin demo can edit them
 * without a backend. In production this hook is replaced by Supabase queries.
 */
export function useProducts() {
  const [products, setProducts] = useState<Product[]>(load);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    } catch {
      /* storage full/blocked — non-fatal */
    }
  }, [products]);

  const updateProduct = useCallback((id: string, patch: Partial<Product>) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...patch } : p)),
    );
  }, []);

  const resetProducts = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setProducts(sampleProducts);
  }, []);

  return { products, updateProduct, resetProducts };
}
