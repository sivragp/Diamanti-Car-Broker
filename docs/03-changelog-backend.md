# Changelog tecnico — Diamanti Automobili (`backend-optimization`)

Registro cronologico delle modifiche per fase. Ogni voce: cosa, perché, file,
verifica (build/tsc/preview).

---

## Fase 1 — Baseline & audit (non distruttiva) — 2026-06-14

- Verificata la *ground truth* del repo rispetto al brief (vedi
  `docs/01-audit-baseline.md`, sezione "Scostamenti").
- Misurata la baseline: build `npm run build` verde in ~3,6 s; `tsc --noEmit`
  pulito; bundle JS 559 KB raw; chunk principali documentati; asset e origini
  terze enumerati.
- Confermato il blocco #1: HTML servito = shell CSR vuota (`<div id="root">`).
- Creati: `docs/01-audit-baseline.md`, `docs/02-piano.md`,
  `docs/03-changelog-backend.md`, `docs/adr/0001-rendering-strategy.md`.
- Nessuna modifica al codice di produzione. Branch già `backend-optimization`.

---

## Fase 2 (gate) — ADR rendering ACCETTATO — 2026-06-14

- Scelta confermata: **Opzione A `vite-react-ssg` + `@unhead/react`** (fallback
  puppeteer). Approvati in parallelo i lavori indipendenti dal rendering.
- `docs/adr/0001-rendering-strategy.md` aggiornato a stato ACCETTATA.

## Fase 6a — Pulizia dipendenze e leak latente — 2026-06-14

- **Rimosso il `define` GEMINI** da `vite.config.ts` (eliminato il leak potenziale;
  semplificato il config, niente più `loadEnv`/`mode` inutilizzati).
- **Rimosse dead-deps** da `package.json`: `@google/genai`, `express`, `dotenv`,
  `@types/express` (nessun import in `src/`, verificato). `npm install` → lock
  aggiornato; albero dipendenze senza i 4 pacchetti.
- **Eliminato `src/constants.ts`** (codice morto: non importato, già tree-shaken;
  conteneva gli unici URL Unsplash/Wikimedia, che non arrivavano in produzione).
- **Metadati `package.json`**: `name` `react-example`→`diamanti-automobili`,
  `version` `0.0.0`→`1.0.0`.
- Verifica: `npm run build` ✅ · `tsc --noEmit` ✅ · `grep genai/GEMINI dist/` → 0.
  Bundle invariato (559 KB) — atteso: era già dead code; il guadagno è superficie
  dipendenze + leak rimosso. La riduzione bundle arriverà dall'intervento `motion`.

## Fase 5a — Self-host font + reduced-motion — 2026-06-14

- **Font self-hostati.** Rimosso `@import url(fonts.googleapis.com…)` render-blocking
  da `src/index.css` e i 2 `preconnect` da `index.html`. Inter ora è servito da
  `public/fonts/` come **Inter Variable** (subset `latin` 48 KB + `latin-ext` 85 KB,
  da `@fontsource-variable/inter` v5; dipendenza npm rimossa dopo la copia).
  `font-display: swap`; `unicode-range` → latin-ext scaricato solo se serve (es.
  "Škoda"). Token `--font-sans`/`--font-serif` → `"Inter Variable"`.
- **Preload** del peso critico (`/fonts/inter-latin-wght-normal.woff2`) in
  `index.html` (path stabile, non hashed → preload affidabile).
- **`prefers-reduced-motion`** ora rispettato nel markup CSS: disattiva ken-burns,
  marquee e scroll loghi + azzera transizioni (a11y WCAG 2.3.3). Risolve il tema
  trasversale n.6 dell'audit.
- Effetto: −1 catena render-blocking, −2 origini esterne (googleapis, gstatic).
  Verifica: build ✅ · tsc ✅ · 0 riferimenti Google Fonts in `dist/` · woff2 in
  `dist/fonts/` · preload presente.

## Fase 5b — Rimozione libreria `motion` (−120 KB) — 2026-06-14

- Riscritto `src/components/Reveal.tsx` **senza `motion`**: stesso comportamento
  (fade+rise solo mobile, `<div>` semplice su desktop/reduced-motion, API
  invariata) ma con **IntersectionObserver + transizione CSS** su transform/opacity.
- Rimossa la dipendenza `motion` (era importata solo da Reveal).
- **Impatto bundle:** chunk `Reveal` **124,5 KB → 0,93 KB** (gzip 40,7 → 0,55 KB);
  **JS totale 559,2 KB → 438,6 KB raw** (−120,6 KB, ~−40 KB gzip). Build ✅ · tsc ✅
  · `motion` assente dal bundle.
- Nota: l'animazione resta SSR-safe (parità col comportamento CSR attuale); la
  hydration-safety di `useIsMobile` verrà gestita in Fase 2 (SSG).

## Fase 6b — Security header HTTP + caching (`vercel.json`) — 2026-06-14

- Aggiunto blocco `headers` su tutte le rotte:
  `Strict-Transport-Security` (2 anni, includeSubDomains, preload),
  `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`,
  `Referrer-Policy: strict-origin-when-cross-origin`,
  `Permissions-Policy` (camera/microfono/geo/payment/usb/topics disattivati).
- **CSP in `Content-Security-Policy-Report-Only`** (non blocca): consente `self`,
  GA (`googletagmanager`, `*.google-analytics.com`), Contentsquare
  (`*.contentsquare.net`), FormSubmit (`form-action`/`connect`), font `self`
  (self-hostati), `object-src 'none'`, `frame-ancestors 'self'`,
  `upgrade-insecure-requests`.
- **Caching**: `/assets/*` e `/fonts/*` → `max-age=31536000, immutable`;
  immagini (`webp/avif/jpg/png/svg/…`) → `max-age=2592000`. HTML lasciato ai
  default Vercel (revalidate).
- Rewrite SPA invariato. Verifica deploy (preview): securityheaders.com grado A,
  e controllo violazioni CSP in console prima di passare la CSP da Report-Only a
  enforced. _(non testabile in locale: gli header li applica Vercel, non `vite preview`.)_
- TODO Fase 8: esternalizzare lo snippet GA inline per togliere `'unsafe-inline'`
  da `script-src`; aggiungere consent-gate (Consent Mode v2) prima di enforce.

## Fase 2 — Spike di compatibilità rendering — 2026-06-14

- Verifica pre-refactor: **`vite-react-ssg` non è adatto a RR7** (peer
  `react-router-dom ^6.14.1`, `latest` = beta, e il suo stesso README rimanda alla
  SSG ufficiale di RR7; usa `react-helmet-async`, React-19-incerto).
- Verificato che lo stack supporta una SSG custom robusta: RR7 espone
  `createStaticHandler`/`createStaticRouter`; `@unhead/react@3` combacia coi peer
  (React ≥19.2.4, Vite ≥6.4.2).
- ADR 0001 aggiornato (sezione "Revisione"): nuova raccomandazione **C-bis — SSG
  custom RR7 + @unhead/react**; alternativa B = RR7 framework mode (ufficiale, più
  invasiva). In attesa di conferma cliente prima del refactor.

## Fase 2 — SSG custom RR7 + @unhead (IL BLOCCO #1 RISOLTO) — 2026-06-14

Il sito ora genera **HTML reale per ogni rotta** al build. Implementazione C-bis:

- **Routing data-router condiviso** (`src/routes.tsx`): `RouteObject[]` con `Layout`
  radice e `lazy` di RR7 (code-splitting mantenuto; lo static handler li risolve a
  build-time). Estratto `src/Layout.tsx` (Header/Footer/Outlet + `ScrollToTop`) e
  `src/pages/Storie.tsx` (placeholder, `noindex`). Rimosso `src/App.tsx`.
- **Entry client** (`src/main.tsx`): pre-carica i moduli `lazy` della rotta iniziale,
  poi `hydrateRoot` (prod, markup prerenderizzato) o `createRoot` (dev, `#root` vuoto).
- **Entry server** (`src/entry-server.tsx`): `createStaticHandler`/`createStaticRouter`/
  `StaticRouterProvider` (`hydrate={false}`) + `renderToString`; `<head>` baked con
  `@unhead/react` (`renderSSRHead`). Espone `PRERENDER_ROUTES` (8 statiche + 19 articoli).
- **`SEO.tsx` riscritto** su `useHead` (stessa firma, call-site invariati): title,
  description, canonical, OG, Twitter, robots e JSON-LD ora **nell'HTML statico**.
- **`index.html`**: template ripulito dai tag per-pagina (ora gestiti da @unhead),
  conserva solo i meta globali, analytics e il JSON-LD Organization.
- **`scripts/prerender.mjs`**: per ogni rotta scrive `dist/<rotta>/index.html`;
  genera `dist/404.html` (NotFound `noindex`) per il 404 reale via Vercel.
- **Build**: `build:client` + `build:server` + `prerender`. **`vercel.json`**: rimosso
  il rewrite SPA (ora ci sono file statici per-rotta + 404.html); `cleanUrls: true`,
  `trailingSlash: false`.
- **SSR-safety**: `useIsMobile` reso false-first (niente hydration mismatch; l'HTML
  statico contiene la variante desktop = form completo, ottimo per SEO/no-JS).

**Accettazione (verificata sui file statici, senza JS):**
- 28 pagine generate; ogni rotta ha **1 `<title>` unico, 1 `<h1>`, 1 canonical, 1
  description**, OG/Twitter e **JSON-LD baked** (Service/OfferCatalog su Servizi;
  FAQPage su FAQ; BlogPosting+FAQPage+BreadcrumbList su articoli).
- `#root` pieno di HTML reale (home 128 KB, servizi 45 KB, articolo 18 KB); link
  interni come `<a href>` crawlabili; `dist/404.html` con `noindex`.
- `tsc` ✅ · build ✅ · `npm run dev` ✅ su porta ≠ 3000 (createRoot).
- _Nota bundle:_ chunk `index` 248→314 KB raw (78,8→100,8 KB gzip) per data-router
  + @unhead; compensato dal −120 KB di `motion` e dal first-paint immediato (HTML
  prerenderizzato). Hydration runtime da riverificare sulla preview (no browser in locale).

## Fase 10 (parziale) + Fase 4 (parziale) — sitemap auto + llms.txt — 2026-06-14

- **`sitemap.xml` generato al build** (in `scripts/prerender.mjs` da `SITEMAP_ENTRIES`
  in `entry-server.tsx`): 26 URL (7 pagine + 19 articoli con `lastmod` reale da
  `dateModified`), `/storie` escluso (noindex). **Rimosso `public/sitemap.xml`
  manuale** → niente più drift. (Il 404 reale era già stato risolto in Fase 2.)
- **`public/llms.txt`** aggiunto (convenzione AI): sintesi attività, servizi, area
  servita, contatti e link a pagine/risorse chiave, in markdown e voce automotive.
- Verifica: build ✅ · `dist/sitemap.xml` 26 `<loc>`, articoli con `lastmod` ·
  `dist/llms.txt` presente · tsc ✅.
- _Rimandato (decisione cliente):_ in `robots.txt` il blocco esplicito dei crawler
  di puro training (CCBot/anthropic-ai/Bytespider). Gli answer/search bot sono già
  consentiti dal wildcard attuale.

_(Le fasi successive verranno annotate qui sotto man mano.)_
