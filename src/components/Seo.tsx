import { useEffect } from 'react';
import { site } from '../config/site';

interface SeoProps {
  title: string;
  description?: string;
  path?: string;
}

/** Lightweight per-page SEO: updates document title, description and canonical. */
export function Seo({ title, description, path = '/' }: SeoProps) {
  useEffect(() => {
    document.title = title.includes(site.name) ? title : `${title} | ${site.name}`;
    const desc = description ?? site.defaultDescription;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = desc;
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${site.url}${path === '/' ? '/' : path}`;
  }, [title, description, path]);
  return null;
}
