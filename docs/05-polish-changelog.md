# 05 — Changelog polish (design-polish)

Registro delle modifiche di polish (icone, animazioni, colori), con prima/dopo.
Piano in `docs/04-polish-plan.md`.

---

## Area A — Icone — 2026-06-14

- **stroke-width uniformato** (prima: 1.5/1.6/1.8/1.9/2/2.2/3 → dopo: **1.5/2/3**).
  1.6/1.8/1.9 → 1.5 (dominante); 2.2 → 2; mantenuti i 3 (check/emphasis deliberati).
- **size: snap dei one-off invisibili** (`13→14`, `15→16`); mantenute le misure
  deliberate (14/16/18/20/22/24/26/28). Nessun resize percepibile.
- **Footer social**: rimossi i 3 link placeholder a `#` (Facebook/Instagram/LinkedIn)
  e i relativi import lucide. _(Reintrodurre con URL reali quando disponibili.)_
- **Menu mobile accessibile**: il toggle ha `aria-label` dinamico ("Apri/Chiudi
  menu"), `aria-expanded`, `aria-controls="mobile-menu"`; il pannello `<nav>` ha
  `id="mobile-menu"`; le icone Menu/X sono `aria-hidden`.
- **Icone contatti footer** (Phone/Mail/MapPin) marcate `aria-hidden` (decorative).
- Verifica: `tsc` ✅ · build ✅ · 28 pagine · 0 `href="#"` residui.
- _Pass a11y completo sulle icone di pagina (aria-hidden diffuso): in Area B/Fase 9._
