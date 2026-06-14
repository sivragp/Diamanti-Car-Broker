# 04 — Piano di polish (design-polish)

Branch: `design-polish` (da `backend-optimization`). **Polish leggero**, non
restyling: solo icone, micro-animazioni soft, accoppiamento colori dentro la
palette esistente. Niente layout/struttura/copy/tipografia. Niente librerie nuove
(solo `lucide-react` + CSS/Tailwind). Build verde, `tsc` pulito, reduced-motion
sempre rispettato. Revisione **visiva sul preview** a ogni area.

## Stato icone/colori rilevato (audit)

- Icone: **già tutte `lucide-react`** (nessuna emoji da sostituire).
- **Size incoerenti**: 11 valori diversi in uso (12,13,14,15,16,18,20,22,24,26,28).
- **stroke-width incoerenti**: 1.5 (dominante), 1.6, 1.8, 1.9, 2, 2.2, 3.
- Footer: 3 link social a `#` (placeholder).
- Decorative icons spesso senza `aria-hidden`.
- Pairing a basso contrasto da verificare: `text-muted #5f6b7a` su bianco a
  12–14px; `white/72` su `#061629`.

## Area A — Icone (prima, meno rischiosa)

Convenzione adottata (scala coerente, cambiamenti sub-percettibili):
- **stroke-width** uniforme a **1.5** (dominante): porto a 1.5 i valori 1.6/1.8/1.9;
  i 2.2 → 2; mantengo i **3** dove sono check/emphasis deliberati.
- **size**: snap dei soli one-off invisibili → `13→14`, `15→16`. Mantengo
  14/16/18/20/22/24/26/28 dove sono scelte deliberate (nessun resize percepibile).
- **`aria-hidden="true"`** sulle icone decorative (accanto a testo) nei componenti
  condivisi (Navigation, PageHero, HeroLeadForm); il toggle menu mobile riceve
  `aria-label`/`aria-expanded`/`aria-controls`. _(Il pass a11y completo sulle icone
  di pagina prosegue in Fase 9 del backend.)_
- **Footer social**: i 3 link a `#` vengono **nascosti** (nessun URL reale
  disponibile) — fix richiesto.

## Area B — Micro-animazioni soft (dopo A, su preview)

- Transizioni hover/focus coerenti su `.card-premium`, bottoni, link, icone:
  `translateY(-2px)` + ombra + colore, durate 150–350ms, `ease-out`. Solo
  `transform`/`opacity` (GPU, no CLS).
- **Nudge freccia**: i link "Scopri →"/CTA con `ArrowRight` spostano la freccia di
  ~3px all'hover (`group-hover:translate-x-0.5`).
- **Stagger** leggero nelle griglie (servizi/vantaggi/step) riusando `Reveal`
  (`delay = index * 0.06`).
- **`focus-visible`** sobrio e visibile (ring accent) su link/bottoni/campi.
- Estendo il blocco `@media (prefers-reduced-motion: reduce)` già in `index.css`
  a tutte le nuove transizioni.

## Area C — Accoppiamento colori (dopo B, su preview)

- **Audit contrasto** pairing testo/sfondo e UI/sfondo → AA (≥4.5:1 testo, ≥3:1
  grande/UI). Candidati: `text-muted` leggermente più scuro dove a 12–14px su
  bianco; `white/72` → `white/80` su sfondi scuri dove sotto soglia.
- **Accent coerente** (`#0c438f`) per CTA primarie/link/stati attivi;
  `brand-primary`/`secondary` per gerarchia e hover.
- **Ritmo sezioni**: alternanza pulita `#ffffff` ↔ `#f6f8fb` dove già previsto.
- **Loghi brand bianchi** sempre su sezione a sfondo scuro (verifica).
- Bordi/ombre coerenti con le variabili shadow già definite.
- **Nessun colore nuovo** senza ok. _Valutazione:_ al momento **non** propongo
  accenti nuovi; se durante l'area C emergesse l'utilità di UN accento premium per
  micro-evidenziazioni, mi fermo e chiedo qui prima di applicarlo.

## Processo

1. `docs/04` (questo) → `docs/05-polish-changelog.md` (before/after).
2. Commit atomici per area; **push per ogni area** → review visiva sul preview.
3. PR `design-polish` separata, **senza merge**.
