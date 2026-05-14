import { useEffect } from 'react';

export const SITE_URL = 'https://diamanti-car-broker.vercel.app';
const DEFAULT_IMAGE = '/images/hero-bmw-road.png';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  jsonLdId?: string;
}

function setMeta(selector: string, value: string) {
  const el = document.head.querySelector(selector);
  if (!el) return;
  if (el.tagName === 'LINK') el.setAttribute('href', value);
  else el.setAttribute('content', value);
}

export function SEO({ title, description, path, image = DEFAULT_IMAGE, noIndex = false, jsonLd, jsonLdId }: SEOProps) {
  useEffect(() => {
    const fullUrl = `${SITE_URL}${path}`;
    const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

    document.title = title;
    setMeta('meta[name="description"]', description);
    setMeta('link[rel="canonical"]', fullUrl);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', fullUrl);
    setMeta('meta[property="og:image"]', fullImage);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', fullImage);

    const robots = document.head.querySelector('meta[name="robots"]');
    if (robots) {
      robots.setAttribute(
        'content',
        noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
      );
    }
  }, [title, description, path, image, noIndex]);

  useEffect(() => {
    if (!jsonLd || !jsonLdId) return;
    const scriptId = `jsonld-${jsonLdId}`;
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = scriptId;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
    return () => {
      const s = document.getElementById(scriptId);
      if (s) s.remove();
    };
  }, [jsonLd, jsonLdId]);

  return null;
}
