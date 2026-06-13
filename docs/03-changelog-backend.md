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

_(Le fasi successive verranno annotate qui sotto man mano.)_
