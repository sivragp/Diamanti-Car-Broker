# Diamanti Automobili

Sito del consulente per l'acquisto auto **Diamanti Automobili** (Roma → tutta Italia).
Modello lead-generation: ogni pagina punta a far compilare un form o contattare.

## Stack

- **Vite 6** + **React 19** + **React Router 7** + **Tailwind 4** + **TypeScript**
- **SSG custom**: ogni rotta è prerenderizzata in HTML statico al build (meta e
  JSON-LD "baked" via `@unhead/react`), poi idratata sul client. Vedi
  `docs/adr/0001-rendering-strategy.md`.
- Deploy su **Vercel** (config in `vercel.json`).

## Sviluppo

```bash
npm install
npm run dev -- --port=5173    # NB: la 3000 di default è occupata da Forgejo sul container
```

> Lo script `dev` forza `--port=3000 --host=0.0.0.0`; sul container quella porta è
> occupata: avvia il dev su un'altra porta (es. `--port=5173`).

## Build (SSG)

```bash
npm run build       # = build:client && build:server && prerender
```

Pipeline:
1. `build:client` — bundle client (`vite build`) → `dist/`
2. `build:server` — bundle SSR dell'entry (`vite build --ssr src/entry-server.tsx`) → `dist-server/`
3. `prerender` — `scripts/prerender.mjs`: scrive un `index.html` per ogni rotta
   (incl. i 19 articoli), `404.html` e `sitemap.xml`.

Anteprima locale del build: `npm run preview`.

## Qualità

```bash
npm run typecheck     # tsc --noEmit
npm run lint          # eslint .
npm run format        # prettier --write .
```

## Variabili d'ambiente

Vedi [`.env.example`](.env.example). Nessuna chiave è hardcoded nel codice; le
variabili sensibili vanno configurate come **Environment Variables su Vercel**
(o in `.env.local` in locale, non committato).

- `RESEND_API_KEY` — **non ancora in uso** (Fase 7b): l'invio lead oggi passa da
  **FormSubmit**; l'endpoint proprio `api/lead.ts` + Resend è rimandato a quando ci
  saranno dominio email verificato + chiave.
- L'ID GA4 (`G-RYV2J7P6D5`) è un identificativo pubblico lato client (in
  `public/analytics.js`), non un segreto. GA4/Contentsquare partono **solo dopo
  consenso** (Consent Mode v2).

## Deploy

Push su un branch → Vercel costruisce un **preview deployment**. Il merge su `main`
(dopo review) aggiorna la **produzione** (`www.diamantiautomobili.com`).
I preview `*.vercel.app` sono `noindex` (header), la produzione è indicizzabile.

## Documentazione

- `docs/01-audit-baseline.md` — audit di partenza
- `docs/02-piano.md` — piano a fasi e stato
- `docs/03-changelog-backend.md` — changelog tecnico per fase
- `docs/04-polish-plan.md` / `docs/05-polish-changelog.md` — polish UI (branch `design-polish`)
- `docs/adr/` — Architecture Decision Records
