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

## Area B — Micro-animazioni soft — 2026-06-14

Solo `transform`/`opacity` (GPU), durate 150–350ms ease-out, zero impatto su
CLS/INP. Tutto si disattiva con `prefers-reduced-motion: reduce`.

- **Card lift su hover** (`src/index.css`): introdotta utility `.hover-lift`
  (transizione `transform`+`box-shadow`, `translateY(-4px)` all'hover). Applicata
  alle 10 card reali del sito (Services ×3, About ×3, Home ×2, Article, TradeIn)
  sostituendo `transition-shadow`. L'ombra hover esistente di ogni card resta
  invariata; si aggiunge solo il sollevamento. Aggiornata anche `.card-premium`
  (lift + ombra `--shadow-premium-hover`) per coerenza/uso futuro.
- **Bottoni** (`.btn-primary/.btn-outline/.btn-secondary`): aggiunti
  `hover:-translate-y-0.5` + ombra hover + `ease-out`, con `active:translate-y-0`
  per il feedback di pressione (resta `active:scale-95`).
- **Nudge frecce**: la freccia lucide (`.lucide-arrow-right`) avanza di `3px`
  all'hover del link/bottone che la contiene (`a:hover`/`button:hover` → scoped
  alle sole CTA interattive, le frecce decorative non si muovono). Zero modifiche
  ai componenti: regola CSS sulla classe che lucide assegna all'icona.
- **Stagger griglia "Servizi"** (`Services.tsx`): il wrapper di ogni card è ora
  `<Reveal delay={i*0.06}>` (stesso pattern già usato in Home/About/TradeIn).
  DOM desktop identico (Reveal rende un `<div>` con le stesse classi); l'entrata
  in dissolvenza+risalita è solo mobile.
- **focus-visible**: invariato (già sobrio: outline `2px` accent + offset `2px`).
- **prefers-reduced-motion**: il blocco in `index.css` ora azzera anche lo
  *spostamento* (non solo la durata) di card-lift, bottoni e nudge frecce
  (`transform: none !important`).
- Verifica: `tsc` ✅ · build ✅ (30 pagine). Layout/struttura/copy/tipografia invariati.

## Area C (fix mirato) — Box form hero — 2026-06-14

- **`HeroLeadForm` box desktop**: `md:bg-[#1156bf]/60` (blu medio slavato sull'hero)
  → **`md:bg-[#061629]/85`** (brand-dark ~85%): più premium e leggibile.
  - Variante **mobile (`bg-white`) NON toccata** (solo `md:`).
  - Contrasto: label/sottotitolo/consenso bianchi (`white/80–90`) e input bianchi
    su sfondo ~`#061629` → contrasto molto alto, AA ampiamente rispettato.
  - Bottone invariato `bg-[#0b2b5b] hover:bg-[#0c438f]` (più chiaro del box → distinto).
  - _Fallback se in preview resta troppo trasparente:_ salire a `/90` o aggiungere
    `backdrop-blur-sm`.
- **grep `#1156bf`**: altre 2 occorrenze in `Home.tsx` **lasciate** perché
  link/accenti (CTA hero "Richiedi consulenza" + badge "tag"), non pannelli-sfondo.

## Area C (resto) — Accoppiamento colori / contrasti — 2026-06-14

Solo colori/contrasti, dentro la palette esistente. Nessun accento nuovo
introdotto. Layout/struttura/copy/tipografia invariati.

- **Contrasto testo → AA**: il grigio chiaro `#7b8794` (≈ **3.7:1** su bianco,
  sotto la soglia 4.5:1 per testo normale) sostituito ovunque con il token muted
  esistente `#5f6b7a` (≈ **5.4:1**). 12 occorrenze: label/helper del form hero
  (`HeroLeadForm`), step-indicator e eyebrow di `TradeIn`/`Contact`/`Home`, meta
  di `Risorse`. Sul desktop le label del form restano bianche (`md:text-white/90`).
- **Verificati e lasciati invariati** (già ≥ soglia): `text-white/60` su `#061629`
  ≈ 7.1:1, `text-white/50` ≈ 5.2:1; accent `#0c438f` su bianco ≈ 9.5:1 (CTA/link/
  eyebrow → uso già coerente); icone bianche solo decorative (`aria-hidden`).
- **Bordi coerenti**: `border-gray-100` (#f3f4f6, fuori scala) unificato al token
  di sistema `border-[#e6ebf2]` (`--color-border`) — 11 occorrenze in
  `Services`/`Contact`/`About`. Card e divisori-sezione ora usano lo stesso bordo.
- **Ritmo sezioni**: la sezione **Testimonianze** della home era la terza bianca
  consecutiva (475→495→553). Portata a `bg-[#f6f8fb]` + `border-t`: alternanza
  pulita bianco↔#f6f8fb e, in più, le card bianche `border-[#e6ebf2]` ora si
  staccano dallo sfondo (prima bianco-su-bianco, separazione debole).
- **Loghi brand bianchi** (`/brands/*-white.svg`): già su sezione a sfondo scuro
  `#061629` (marquee "I brand con cui lavoriamo") → nessun intervento necessario.
- **Box blu hero**: NON toccato (fix già chiuso nella sezione precedente).
- Verifica: `tsc` ✅ · build ✅ (30 pagine).
