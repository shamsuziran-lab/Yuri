-- ============================================================
-- ROTI JALA DILA — Supabase schema
-- Run this in the Supabase SQL Editor to create tables + RLS.
-- ============================================================

create extension if not exists "pgcrypto";

-- ---------- categories ----------
create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  created_at timestamptz not null default now()
);

-- ---------- products ----------
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  category text references public.categories(slug),
  image_url text,
  package_size text,
  price numeric(10,2) check (price >= 0),
  is_available boolean not null default true,
  is_sample_price boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists products_category_idx on public.products(category);
create index if not exists products_available_idx on public.products(is_available);

-- ---------- gallery ----------
create table if not exists public.gallery (
  id uuid primary key default gen_random_uuid(),
  image_url text not null,
  caption text,
  category text,
  display_order int not null default 0,
  created_at timestamptz not null default now()
);

-- ---------- testimonials ----------
create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  review text not null,
  rating int not null check (rating between 1 and 5),
  is_approved boolean not null default false,
  created_at timestamptz not null default now()
);

-- ---------- business_settings (single row, id = 1) ----------
create table if not exists public.business_settings (
  id int primary key default 1 check (id = 1),
  business_name text,
  tagline text,
  logo_url text,
  whatsapp_number text,
  business_address text,
  service_areas text[],
  operating_hours text,
  social_links jsonb,
  updated_at timestamptz not null default now()
);

-- ---------- updated_at trigger ----------
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists products_updated_at on public.products;
create trigger products_updated_at
  before update on public.products
  for each row execute function public.set_updated_at();

drop trigger if exists business_settings_updated_at on public.business_settings;
create trigger business_settings_updated_at
  before update on public.business_settings
  for each row execute function public.set_updated_at();

-- ---------- Row Level Security ----------
alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.gallery enable row level security;
alter table public.testimonials enable row level security;
alter table public.business_settings enable row level security;

-- Public read access
create policy "public read categories" on public.categories for select using (true);
create policy "public read products" on public.products for select using (true);
create policy "public read gallery" on public.gallery for select using (true);
create policy "public read approved testimonials" on public.testimonials
  for select using (is_approved = true);
create policy "public read settings" on public.business_settings for select using (true);

-- Admin-only write access (role determined by Supabase Auth user metadata)
-- Create an admin user via Supabase Auth, then set app_metadata.role = 'admin'.
create policy "admin write categories" on public.categories for all
  using (auth.jwt() -> 'app_metadata' ->> 'role' = 'admin')
  with check (auth.jwt() -> 'app_metadata' ->> 'role' = 'admin');

create policy "admin write products" on public.products for all
  using (auth.jwt() -> 'app_metadata' ->> 'role' = 'admin')
  with check (auth.jwt() -> 'app_metadata' ->> 'role' = 'admin');

create policy "admin write gallery" on public.gallery for all
  using (auth.jwt() -> 'app_metadata' ->> 'role' = 'admin')
  with check (auth.jwt() -> 'app_metadata' ->> 'role' = 'admin');

create policy "admin write testimonials" on public.testimonials for all
  using (auth.jwt() -> 'app_metadata' ->> 'role' = 'admin')
  with check (auth.jwt() -> 'app_metadata' ->> 'role' = 'admin');

create policy "admin write settings" on public.business_settings for all
  using (auth.jwt() -> 'app_metadata' ->> 'role' = 'admin')
  with check (auth.jwt() -> 'app_metadata' ->> 'role' = 'admin');

-- ---------- Seed sample data ----------
insert into public.categories (name, slug, description) values
  ('Roti Jala Original', 'roti-jala-original', 'Roti Jala tradisional homemade.'),
  ('Roti Jala Set Keluarga', 'set-keluarga', 'Pakej keluarga untuk dinikmati bersama.'),
  ('Roti Jala Bersama Kuah Kari', 'bersama-kuah', 'Roti Jala dengan kuah kari sedap.'),
  ('Roti Jala Mini', 'roti-jala-mini', 'Hidangan mini untuk acara santai.'),
  ('Tempahan Roti Jala Majlis', 'tempahan-majlis', 'Tempahan pukal untuk majlis.')
on conflict (slug) do nothing;

insert into public.business_settings (id, business_name, tagline, whatsapp_number)
values (1, 'Roti Jala Dila', 'Tradisi Rasa, Istimewa Selera', '60123456789')
on conflict (id) do nothing;
