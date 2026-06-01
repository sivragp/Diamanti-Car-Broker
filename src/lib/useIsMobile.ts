import { useState } from 'react';

/**
 * True se il viewport è in fascia "mobile" (< 768px) al momento del mount.
 * Lettura una tantum (SPA interamente client-side): non reagisce al resize,
 * ma è sufficiente per scegliere il layout/comportamento mobile vs desktop.
 */
export function useIsMobile(query = '(max-width: 767px)'): boolean {
  const [isMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );
  return isMobile;
}
