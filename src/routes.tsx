import type { RouteObject } from 'react-router';
import { Layout } from './Layout';

/**
 * Definizione rotte condivisa tra client (createBrowserRouter) e build statica
 * (createStaticHandler). Si usa `lazy` di React Router (non React.lazy): lo
 * static handler lo risolve a build-time (HTML reale, niente fallback), mentre
 * sul client il chunk di rotta resta caricato on-demand (code-splitting).
 */
export const routes: RouteObject[] = [
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, lazy: async () => ({ Component: (await import('./pages/Home')).default }) },
      { path: 'servizi', lazy: async () => ({ Component: (await import('./pages/Services')).default }) },
      { path: 'valuta-la-tua-auto', lazy: async () => ({ Component: (await import('./pages/TradeIn')).default }) },
      { path: 'chi-siamo', lazy: async () => ({ Component: (await import('./pages/About')).default }) },
      { path: 'storie', lazy: async () => ({ Component: (await import('./pages/Storie')).default }) },
      { path: 'faq', lazy: async () => ({ Component: (await import('./pages/FAQ')).default }) },
      { path: 'contatti', lazy: async () => ({ Component: (await import('./pages/Contact')).default }) },
      { path: 'risorse', lazy: async () => ({ Component: (await import('./pages/Risorse')).default }) },
      { path: 'risorse/:slug', lazy: async () => ({ Component: (await import('./pages/Article')).default }) },
      { path: '*', lazy: async () => ({ Component: (await import('./pages/NotFound')).default }) },
    ],
  },
];
