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

_(Le fasi successive verranno annotate qui sotto man mano.)_
