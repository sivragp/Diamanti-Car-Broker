import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router';
import { UnheadProvider, createHead, renderSSRHead } from '@unhead/react/server';
import { routes } from './routes';
import { ARTICLES } from './content/articles';

/** Rotte statiche prerenderizzate (escluso `*`, gestito come 404.html). */
const STATIC_ROUTES = [
  '/',
  '/servizi',
  '/valuta-la-tua-auto',
  '/chi-siamo',
  '/storie',
  '/faq',
  '/contatti',
  '/risorse',
];

/** Tutte le URL da generare al build: rotte statiche + 1 per ogni articolo. */
export const PRERENDER_ROUTES: string[] = [
  ...STATIC_ROUTES,
  ...ARTICLES.map((a) => `/risorse/${a.slug}`),
];

export interface RenderResult {
  appHtml: string;
  headTags: string;
  htmlAttrs: string;
  bodyAttrs: string;
  bodyTags: string;
  statusCode: number;
}

/** Renderizza una rotta a HTML statico con i tag <head> baked da @unhead. */
export async function render(url: string): Promise<RenderResult> {
  const { query, dataRoutes } = createStaticHandler(routes);
  const context = await query(new Request(`http://localhost${url}`));

  if (context instanceof Response) {
    throw new Error(`Risposta inattesa dallo static handler per ${url}: ${context.status}`);
  }

  const head = createHead();
  const router = createStaticRouter(dataRoutes, context);

  const appHtml = renderToString(
    <StrictMode>
      <UnheadProvider value={head}>
        {/* hydrate={false}: l'app non ha loader/route-data, quindi niente script
            di hydration-data (che il client RouterProvider non renderizzerebbe →
            evita il mismatch di idratazione). */}
        <StaticRouterProvider router={router} context={context} hydrate={false} />
      </UnheadProvider>
    </StrictMode>,
  );

  const payload = await renderSSRHead(head);

  return {
    appHtml,
    headTags: payload.headTags,
    htmlAttrs: payload.htmlAttrs,
    bodyAttrs: payload.bodyAttrs,
    bodyTags: payload.bodyTags,
    statusCode: context.statusCode,
  };
}
