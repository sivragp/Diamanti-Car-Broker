import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header, Footer } from './components/Navigation';

/**
 * Riporta in cima a ogni cambio rotta; se l'URL ha un hash (es. #form) scrolla
 * all'ancora, riprovando perché la pagina potrebbe montarsi un attimo dopo.
 * Tutta la logica vive in useEffect → nessun accesso a window durante l'SSR.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      let tries = 0;
      let t: ReturnType<typeof setTimeout>;
      const tryScroll = () => {
        const el = document.querySelector(hash);
        if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; }
        if (++tries < 8) t = setTimeout(tryScroll, 200);
        else window.scrollTo(0, 0);
      };
      t = setTimeout(tryScroll, 200);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

/**
 * Layout radice condiviso da tutte le rotte (route element del path "/").
 * Header e Footer fissi, il contenuto di pagina arriva da <Outlet />.
 */
export function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-soft">
      <ScrollToTop />
      <Header />
      <main className="flex-grow overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
