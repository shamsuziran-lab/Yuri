import { useState } from 'react';
import { RotateCcw, AlertTriangle, Check, Pencil } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';
import { categories } from '../data/categories';
import { formatRM } from '../utils/format';
import { Seo } from '../components/Seo';
import { cn } from '../utils/cn';
import type { Product } from '../types';

/**
 * DEMO ADMIN — frontend-only demonstration.
 *
 * Product edits are persisted to localStorage so the owner can preview the
 * management workflow. Production deployment requires Supabase (see
 * supabase/schema.sql) with admin authentication — see README.md.
 */
export function Admin() {
  const { products, updateProduct, resetProducts } = useProducts();
  const [editing, setEditing] = useState<string | null>(null);
  const [draft, setDraft] = useState<Partial<Product>>({});
  const [saved, setSaved] = useState(false);

  const startEdit = (p: Product) => {
    setEditing(p.id);
    setDraft({ name: p.name, price: p.price, packageSize: p.packageSize, isAvailable: p.isAvailable, image: p.image });
    setSaved(false);
  };

  const save = () => {
    if (!editing) return;
    updateProduct(editing, draft);
    setEditing(null);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const inputCls =
    'w-full rounded-lg border border-brown/20 bg-white px-3 py-2 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30';

  return (
    <>
      <Seo title="Admin Demo – Roti Jala Dila" path="/admin" />
      <section className="bg-gradient-to-br from-cream via-ivory to-gold/10 pt-32 pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="font-display text-3xl font-bold text-charcoal sm:text-4xl">Admin Demo</h1>
              <p className="mt-2 max-w-2xl text-sm text-charcoal/60">
                Panel demonstrasi pengurusan produk. Data disimpan dalam storan
                setempat pelayar anda sahaja — bukan pangkalan data sebenar.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                if (confirm('Set semula semua produk kepada data contoh?')) resetProducts();
              }}
              className="inline-flex items-center gap-2 rounded-full border border-brown/30 px-5 py-2.5 text-sm font-semibold text-brown hover:bg-brown-soft"
            >
              <RotateCcw className="h-4 w-4" />
              Set Semula Data Contoh
            </button>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-orange/40 bg-orange/10 p-4 text-sm text-charcoal/80">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
            <p>
              <strong>DEMO SAHAJA.</strong> Pengurusan sebenar memerlukan backend Supabase
              dengan pengesahan admin (lihat <code>supabase/schema.sql</code> dan README).
              Harga yang dipaparkan di sini masih data contoh.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-x-auto rounded-[2rem] border border-brown/10 bg-white shadow-sm">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead>
              <tr className="border-b border-brown/10 bg-cream/60">
                <th className="px-5 py-4 font-semibold text-brown">Produk</th>
                <th className="px-5 py-4 font-semibold text-brown">Kategori</th>
                <th className="px-5 py-4 font-semibold text-brown">Saiz Pakej</th>
                <th className="px-5 py-4 font-semibold text-brown">Harga (RM)</th>
                <th className="px-5 py-4 font-semibold text-brown">Status</th>
                <th className="px-5 py-4 text-right font-semibold text-brown">Tindakan</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => {
                const isEditing = editing === p.id;
                return (
                  <tr key={p.id} className="border-b border-brown/5 align-top last:border-0">
                    <td className="px-5 py-4">
                      {isEditing ? (
                        <input
                          className={inputCls}
                          value={draft.name ?? ''}
                          onChange={(e) => setDraft((x) => ({ ...x, name: e.target.value }))}
                        />
                      ) : (
                        <p className="font-medium text-charcoal">{p.name}</p>
                      )}
                      <p className="mt-1 text-xs text-charcoal/50">ID: {p.id}</p>
                    </td>
                    <td className="px-5 py-4 text-charcoal/70">
                      {categories.find((c) => c.slug === p.category)?.name ?? p.category}
                    </td>
                    <td className="px-5 py-4">
                      {isEditing ? (
                        <input
                          className={inputCls}
                          value={draft.packageSize ?? ''}
                          onChange={(e) => setDraft((x) => ({ ...x, packageSize: e.target.value }))}
                        />
                      ) : (
                        <span className="text-charcoal/70">{p.packageSize}</span>
                      )}
                    </td>
                    <td className="px-5 py-4">
                      {isEditing ? (
                        <input
                          type="number"
                          min="0"
                          step="0.5"
                          className={inputCls}
                          value={draft.price ?? 0}
                          onChange={(e) => setDraft((x) => ({ ...x, price: Number(e.target.value) }))}
                        />
                      ) : (
                        <span className="font-semibold text-brown">
                          {p.price > 0 ? formatRM(p.price) : 'Atas permintaan'}
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4">
                      {isEditing ? (
                        <label className="inline-flex cursor-pointer items-center gap-2">
                          <input
                            type="checkbox"
                            checked={draft.isAvailable ?? p.isAvailable}
                            onChange={(e) => setDraft((x) => ({ ...x, isAvailable: e.target.checked }))}
                            className="h-4 w-4 accent-[#60412E]"
                          />
                          <span className={cn('text-xs font-medium', (draft.isAvailable ?? p.isAvailable) ? 'text-green-700' : 'text-red-600')}>
                            {(draft.isAvailable ?? p.isAvailable) ? 'Tersedia' : 'Tidak tersedia'}
                          </span>
                        </label>
                      ) : (
                        <span className={cn('inline-flex rounded-full px-3 py-1 text-xs font-semibold', p.isAvailable ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600')}>
                          {p.isAvailable ? 'Tersedia' : 'Tidak tersedia'}
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        {isEditing ? (
                          <>
                            <button
                              type="button"
                              onClick={save}
                              className="inline-flex items-center gap-1.5 rounded-full bg-brown px-4 py-2 text-xs font-semibold text-cream hover:bg-[#4d3222]"
                            >
                              <Check className="h-3.5 w-3.5" /> Simpan
                            </button>
                            <button
                              type="button"
                              onClick={() => setEditing(null)}
                              className="rounded-full border border-brown/20 px-4 py-2 text-xs font-semibold text-brown hover:bg-brown-soft"
                            >
                              Batal
                            </button>
                          </>
                        ) : (
                          <button
                            type="button"
                            onClick={() => startEdit(p)}
                            className="inline-flex items-center gap-1.5 rounded-full border border-brown/20 px-4 py-2 text-xs font-semibold text-brown hover:bg-brown-soft"
                          >
                            <Pencil className="h-3.5 w-3.5" /> Edit
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {saved && (
          <p className="mt-4 text-sm font-medium text-green-700">
            Perubahan disimpan (stor an setempat demo).
          </p>
        )}

        <div className="mt-8 rounded-[2rem] border border-brown/10 bg-white p-6 text-sm text-charcoal/70 shadow-sm">
          <h2 className="font-display text-xl font-semibold text-brown">Seterusnya untuk Produksi</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>Konfigurasikan Supabase (URL + anon key dalam <code>.env</code>).</li>
            <li>Laksanakan <code>supabase/schema.sql</code> untuk mencipta jadual.</li>
            <li>Dayakan Supabase Auth untuk log masuk admin yang selamat.</li>
            <li>Ganti storan setempat dengan panggilan API Supabase (RLS didayakan).</li>
          </ul>
        </div>
      </section>
    </>
  );
}
