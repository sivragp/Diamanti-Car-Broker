import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { createBrowserRouter, matchRoutes, RouterProvider } from 'react-router';
import { UnheadProvider, createHead } from '@unhead/react/client';
import { routes } from './routes';
import './index.css';

/**
 * Entry client: idrata l'HTML prerenderizzato. Prima di idratare pre-carica i
 * moduli `lazy` delle rotte che combaciano con l'URL iniziale, così React trova
 * i componenti già pronti e l'idratazione non produce mismatch/flash.
 */
async function hydrate() {
  const lazyMatches = matchRoutes(routes, window.location)?.filter((m) => m.route.lazy);

  if (lazyMatches && lazyMatches.length > 0) {
    await Promise.all(
      lazyMatches.map(async (m) => {
        // In questo progetto `lazy` è sempre una funzione (vedi routes.tsx);
        // il cast soddisfa il tipo RR7 che ammette anche la forma a oggetto.
        const loader = m.route.lazy as () => Promise<Record<string, unknown>>;
        const routeModule = await loader();
        Object.assign(m.route, { ...routeModule, lazy: undefined });
      }),
    );
  }

  const router = createBrowserRouter(routes);
  const head = createHead();
  const rootEl = document.getElementById('root')!;

  const app = (
    <StrictMode>
      <UnheadProvider head={head}>
        <RouterProvider router={router} />
      </UnheadProvider>
    </StrictMode>
  );

  // In produzione il markup è prerenderizzato (SSG) → idratazione.
  // In `vite dev` il #root è vuoto → render normale.
  if (rootEl.hasChildNodes()) {
    hydrateRoot(rootEl, app);
  } else {
    createRoot(rootEl).render(app);
  }
}

hydrate();
