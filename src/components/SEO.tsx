import { useHead } from '@unhead/react';

export const SITE_URL = 'https://www.diamantiautomobili.com';
const DEFAULT_IMAGE = '/images/og-cover.jpg';

/**
 * Genera un JSON-LD `BreadcrumbList` da una lista ordinata di voci.
 * Da combinare con il JSON-LD di pagina nell'array passato a `<SEO jsonLd>`.
 */
export function breadcrumbLd(items: { name: string; path: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  jsonLdId?: string;
}

/**
 * Metadati per-pagina via @unhead/react: title, description, canonical, Open
 * Graph, Twitter, robots e JSON-LD vengono "baked" nell'HTML statico durante la
 * build SSG e aggiornati durante la navigazione client. Stessa firma di prima:
 * i call-site delle pagine non cambiano.
 */
export function SEO({ title, description, path, image = DEFAULT_IMAGE, noIndex = false, jsonLd, jsonLdId }: SEOProps) {
  const fullUrl = `${SITE_URL}${path}`;
  const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  const robots = noIndex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  const ldArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  const idBase = jsonLdId ?? path;

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'robots', content: robots },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: fullUrl },
      { property: 'og:image', content: fullImage },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: fullImage },
    ],
    link: [{ rel: 'canonical', href: fullUrl, key: 'canonical' }],
    script: ldArray.map((obj, i) => ({
      type: 'application/ld+json',
      innerHTML: JSON.stringify(obj),
      key: `jsonld-${idBase}-${i}`,
    })),
  });

  return null;
}
