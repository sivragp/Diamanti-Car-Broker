import { useEffect, useState } from 'react';

/**
 * True se il viewport è in fascia "mobile" (< 768px).
 *
 * SSR-safe: al primo render (server + prima idratazione client) ritorna SEMPRE
 * `false`, così l'HTML statico e la prima resa client coincidono (niente hydration
 * mismatch). Dopo il mount aggiorna al valore reale via `useEffect`. In pratica
 * l'HTML prerenderizzato contiene la variante desktop (contenuto completo, ottimo
 * per SEO/no-JS) e su mobile l'UI si adatta dopo l'idratazione.
 */
export function useIsMobile(query = '(max-width: 767px)'): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(query);
    setIsMobile(mq.matches);
  }, [query]);

  return isMobile;
}
