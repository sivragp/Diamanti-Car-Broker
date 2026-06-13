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

_(Le fasi successive verranno annotate qui sotto man mano.)_
