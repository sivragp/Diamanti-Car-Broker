import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

declare global {
  interface Window {
    daConsentState?: () => string | null;
    daGrantConsent?: () => void;
    daDenyConsent?: () => void;
  }
}

/** Evento per riaprire il banner (es. link "Gestisci cookie" nel footer). */
export const OPEN_CONSENT_EVENT = 'da:open-consent';

/**
 * Banner consenso cookie (GDPR / Garante IT). Lavora con `public/analytics.js`:
 * il tracking (GA4 + Contentsquare) parte SOLO dopo "Accetta". Default = negato.
 *
 * SSR-safe: renderizza null sul server e alla prima idratazione (stato iniziale
 * `false`), poi in `useEffect` mostra il banner se non c'è ancora una scelta.
 */
export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const state = window.daConsentState ? window.daConsentState() : null;
    if (!state) setVisible(true);
    const onOpen = () => setVisible(true);
    window.addEventListener(OPEN_CONSENT_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, onOpen);
  }, []);

  if (!visible) return null;

  const accept = () => {
    window.daGrantConsent?.();
    setVisible(false);
  };
  const reject = () => {
    window.daDenyConsent?.();
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Preferenze cookie"
      className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-4"
    >
      <div className="ds-container max-w-[920px] rounded-lg bg-[#061629] text-white shadow-[0_18px_48px_-18px_rgba(6,22,41,0.7)] border border-white/12 p-5 sm:p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-[13px] leading-relaxed text-white/85 max-w-2xl">
          Usiamo cookie tecnici e, previo consenso, cookie di analisi (Google
          Analytics, Contentsquare) per capire come migliorare il sito. Puoi
          accettare o rifiutare. Dettagli nella{' '}
          <Link to="/cookie-policy" className="underline font-semibold hover:text-white">
            Cookie Policy
          </Link>
          .
        </p>
        <div className="flex gap-2.5 shrink-0">
          <button
            type="button"
            onClick={reject}
            className="h-[42px] px-5 rounded-full border border-white/30 text-white text-[13px] font-bold hover:bg-white/10 transition-colors"
          >
            Rifiuta
          </button>
          <button
            type="button"
            onClick={accept}
            className="h-[42px] px-6 rounded-full bg-white text-[#061629] text-[13px] font-bold hover:bg-[#eef3f8] transition-colors"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
}
