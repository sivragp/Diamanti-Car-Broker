# 01 — Audit baseline (Fase 1)

- **Data:** 2026-06-14
- **Branch:** `backend-optimization`
- **Commit di riferimento:** `18fe8ed` (HEAD all'avvio)
- **Ambiente:** Node v24.15.0 · npm 11.15.0 · Vite 6.4.2 · React 19 · React Router 7

Questo documento fotografa lo stato di partenza **prima** di ogni intervento.
Tutte le misure sono riproducibili con i comandi indicati.

---

## 1. Numeri di partenza

### Build & type-check

| Metrica | Valore | Comando |
|---|---|---|
| `npm run build` | ✅ verde, **~3,6 s** (2105 moduli) | `npm run build` |
| `tsc --noEmit` | ✅ **pulito** (0 errori) | `npx tsc --noEmit` |
| Dimensione totale `dist/` | **4,5 MB** | `du -sh dist` |
| JS totale (raw) | **559,2 KB** | `find dist/assets -name '*.js'` |
| CSS | **61,5 KB** (10,3 KB gzip) | output build |
| `dist/index.html` | 5,59 KB (1,81 KB gzip) | output build |
| Immagini `dist/images` | **3,6 MB** | `du -sh dist/images` |
| Loghi `dist/brands` | 152 KB (SVG) | `du -sh dist/brands` |

### Chunk principali (raw / gzip)

| Chunk | Raw | Gzip | Note |
|---|---|---|---|
| `index-*.js` | 248,0 KB | 78,8 KB | bundle base (React + Router + runtime) |
| `Reveal-*.js` | **124,5 KB** | **40,7 KB** | = libreria **`motion`** intera, per una sola animazione mobile |
| `articles-*.js` | 66,0 KB | 17,0 KB | contenuto dei 19 articoli |
| `Home-*.js` | 29,7 KB | 7,7 KB | |
| `TradeIn-*.js` | 26,7 KB | 7,0 KB | |
| `Contact-*.js` | 18,7 KB | 4,9 KB | |
| `Services-*.js` | 16,8 KB | 5,5 KB | |
| `About-*.js` | 14,0 KB | 4,3 KB | |

> **Hotspot bundle:** il chunk `Reveal` (124,5 KB) è di fatto l'intera libreria
> `motion`, importata solo da `src/components/Reveal.tsx` per un fade-in attivo
> **solo su mobile**. Su desktop/`prefers-reduced-motion` rende un `<div>` semplice.
> Candidato n.1 a riduzione (LazyMotion/`m` + feature subset, o CSS puro).

### Origini di terze parti (richieste esterne)

| Origine | Da dove | Scopo | Problema |
|---|---|---|---|
| `www.googletagmanager.com` | `index.html` | GA4 (`G-RYV2J7P6D5`) | senza consenso (GDPR) |
| `t.contentsquare.net` | `index.html` | Contentsquare UXA (ex Hotjar) | senza consenso (GDPR) |
| `fonts.googleapis.com` / `fonts.gstatic.com` | `index.html` (preconnect) + `src/index.css` (`@import`) | Font **Inter** | `@import` render-blocking |
| `images.unsplash.com` | `src/constants.ts` (**12** ref) | foto auto/case study | **codice morto** — non importato, tree-shaken, **non nel bundle/prod** |
| `upload.wikimedia.org` | `src/constants.ts` (**10** ref) | loghi brand | **codice morto** — non importato; in prod si usano `public/brands/*.svg` |
| `formsubmit.co` | `src/lib/forms.ts` | relay email dei lead | dati via terzi, no allegati |
| `wa.me` | contatti | WhatsApp | ok (link) |

### Misure rimandate alla preview Vercel

**Lighthouse / PageSpeed Insights non sono misurabili in modo attendibile in
locale**: sul container non è presente Chrome/Chromium e `lighthouse` non è
installato (`which chromium/google-chrome` → assente). Inoltre, su una SPA
client-side i numeri "lab" da `localhost` sarebbero fuorvianti. I target della
*definizione di fatto* (PSI mobile ≥ 90, CLS < 0.1, LCP < 2.5s, INP < 200ms)
vanno misurati sulla **preview di produzione** dopo la Fase 2. → registrare i
numeri before/after nella PR.

---

## 2. Problemi confermati (ground truth)

Elenco verificato leggendo il repo (priorità decrescente).

1. **🔴 SPA 100% client-side — HTML vuoto (blocco #1 per SEO e GEO).**
   `dist/index.html` = `<div id="root"></div>`. Nessun contenuto reale senza JS.
   `src/main.tsx` monta l'app; tutte le pagine sono `lazy()` in `src/App.tsx`.
   → I crawler senza esecuzione JS e i bot AI vedono pagina vuota.

2. **🔴 Meta per-pagina solo a runtime.** `src/components/SEO.tsx` muta
   `document.head` in `useEffect`. `title`/`description`/`canonical`/OG/JSON-LD
   per-rotta **non esistono** nell'HTML statico (solo la home in `index.html`).

3. **🟠 `vercel.json` minimale.** Solo `rewrites` SPA
   (`/((?!.*\.).*) → /index.html`). **Nessun** security header, **nessun**
   caching, e ogni URL inesistente restituisce `index.html` con **200**
   (soft-404).

4. **🟠 `define` GEMINI residuo (leak potenziale, non attuale).** `vite.config.ts`
   fa `define: { 'process.env.GEMINI_API_KEY': JSON.stringify(...) }`. Verificato:
   `process.env.GEMINI_API_KEY` **non è mai letto** in `src/`, **0 occorrenze in
   `dist/`** (tree-shaken) e **nessun `.env`** presente → **nessun leak nel build
   attuale**. Resta però codice rischioso da rimuovere: il leak si materializza se
   in futuro qualcuno valorizza l'env e referenzia la variabile.

5. **🟠 Dipendenze morte.** `@google/genai`, `express`, `dotenv`,
   `@types/express` risultano **non importate** in `src/` (grep a zero). Residui
   scaffold: aumentano superficie e tempo d'install. Da rimuovere.

6. **🟠 Lead via FormSubmit.co.** `src/lib/forms.ts` invia i lead a un relay email
   terzo: dati che transitano da terzi, **niente allegati** (foto permuta perse).
   Il file stesso indica come target un endpoint proprio (Vercel Function +
   Resend). Recapiti in `src/lib/contact.ts`.

7. **🟢 `src/constants.ts` = codice morto (correzione vs brief).** Contiene
   immagini **Unsplash** (12) e loghi **Wikimedia** (10), MA il file **non è
   importato da nessun modulo** (`BRANDS`/`AVAILABLE_CARS`/`CASE_STUDIES` mai
   usati): è tree-shaken e **0 occorrenze in `dist/`**. Gli URL remoti **non
   arrivano in produzione**. In prod si usano già asset locali
   (`public/brands/*.svg`, `public/images/*.webp`). → Azione = **eliminare il
   file**, non "migrare asset" (già locali).

8. **🟡 Font render-blocking.** `src/index.css` riga 1:
   `@import url('https://fonts.googleapis.com/css2?family=Inter...')`. Un `@import`
   CSS è **render-blocking** e in catena (peggio di un `<link>`); il preconnect
   aiuta poco.

9. **🟡 Tracking senza consenso (GDPR).** GA4 + Contentsquare inline nell'`<head>`,
   **senza cookie consent / Consent Mode v2** → rischio GDPR in IT/EU.

10. **🟡 Sitemap/robots manuali.** `public/sitemap.xml` statico e curato a mano;
    `public/robots.txt` allow-all senza policy crawler AI. Rischio drift e nessun
    `llms.txt`.

11. **🟡 `motion` sovradimensionato** (vedi §1): 124,5 KB per un fade-in mobile.

12. **🟡 Accessibilità / fluidità da verificare:** fallback `<Suspense>` vuoto
    (`min-h-[60vh]`), skip-link, focus, landmark, `alt`, label form, gestione
    `aria` del menu mobile → dettaglio nell'inventario per-rotta (§4).

---

## 3. Scostamenti rispetto alla ground truth del brief

Differenze reali riscontrate rispetto alla sezione 2 del brief (5 punti):

1. **Articoli: 19, non ~21.** `src/content/articles.tsx` contiene **19** oggetti
   `Article` (non ~21). La `sitemap.xml` elenca **esattamente gli stessi 19**
   slug + 7 pagine = **26 URL** (non ~28): **nessun drift attuale**, ma resta
   manuale → va comunque generata al build (Fase 10).

2. **Font: solo Inter, non "Inter + Fraunces".** È caricato **solo Inter**, e via
   `@import` render-blocking dentro `src/index.css` (non solo via `<link>`).
   **Fraunces NON è caricato** da nessuna parte: resta solo una menzione in un
   commento di `index.html`, e `--font-serif` punta a "Inter". La tipografia
   "serif" promessa di fatto non esiste.

3. **"Hotjar" = Contentsquare UXA.** Non c'è uno snippet Hotjar separato: è un
   **unico** tag Contentsquare (`t.contentsquare.net/uxa/…`), stesso vendor.

4. **Il `define` GEMINI è inerte ma va comunque rimosso.** Oltre a non essere
   valorizzato, `process.env.GEMINI_API_KEY` **non è mai letto** nel sorgente: è
   un leak solo *potenziale*, ma il `define` resta da togliere (igiene + il rischio
   si materializza se qualcuno in futuro valorizza l'env).

5. **`motion` è il vero peso del bundle**, non genericamente "il bundle":
   l'import in `Reveal.tsx` trascina 124,5 KB raw / 40,7 KB gzip in un chunk
   condiviso, per un effetto attivo solo su mobile. Conferma e quantifica la nota
   del brief "verifica che motion importi solo il necessario".

6. **Gli asset remoti NON arrivano in produzione.** Il brief li indica come
   problema di "performance e privacy" attivo: in realtà `src/constants.ts` è
   **codice morto** (vedi §2.7), quindi Unsplash/Wikimedia non vengono mai
   caricati dal sito reale. Resta solo bloat di sorgente da eliminare. Minore
   anche: `package.json` ha `name: "react-example"`, `version: "0.0.0"` (metadati
   template non personalizzati).

> Tutto il resto della sezione 2 del brief è **confermato** così com'è descritto.

---

## 4. Inventario per-rotta

> Inventario tecnico per pagina (stato SEO, H1, immagini, form, accessibilità),
> prodotto da un audit fan-out su tutte le rotte + cross-check di verifica.

### 4.1 Tabella per-rotta

| Rotta | H1 | Meta `<SEO>` | JSON-LD per-rotta | Form | Problemi principali |
|---|---|---|---|---|---|
| `/` (Home) | ✓ (nel file) | ✓ | **assente** (solo `AutomotiveBusiness` statico in `index.html`, non per-rotta) | via `HeroLeadForm` | img senza width/height (hero LCP + 46 loghi → CLS); animazioni continue (ken-burns, marquee, scroll loghi) senza guardia reduced-motion nel markup; rating stelle senza testo equivalente |
| `/servizi` | ✓ (da `PageHero`) | ✓ | ✓ ricco: `Service` ×N, `OfferCatalog`, `AutomotiveBusiness` | — | accordion FAQ senza `aria-expanded`/`aria-controls`; icone lucide senza `aria-hidden`; img senza dimensioni |
| `/valuta-la-tua-auto` | ✓ (da `PageHero`) | ✓ | ✓ `Service`/`OfferCatalog` | ✓ completo (honeypot ✓, upload foto) | toggle Permuta/Vendita senza `aria-pressed`; step indicator senza `role=progressbar`; nessun `aria-live` sull'esito; accordion senza ARIA |
| `/chi-siamo` | ✓ (da `PageHero`) | ✓ | **assente** (manca `AboutPage`/`Organization`) | — | salti gerarchia `h2→h4`; marquee recensioni senza reduced-motion; rating stelle non esposto; img senza dimensioni |
| `/faq` | ✓ (da `PageHero`) | ✓ | ✓ `FAQPage` | — | accordion senza `aria-expanded`/`aria-controls`; focus default; contrasti `text-muted`/`white/72` da verificare |
| `/contatti` | ✓ (da `PageHero`) | ✓ | **assente** (manca `ContactPage`/`LocalBusiness`) | ✓ ricco (honeypot ✓) | **label non associate** (`htmlFor`/`id`); radio "permuta" senza `fieldset`/`legend`; step senza `aria-live`; salti `h2→h4` |
| `/risorse` | ✓ (nel file) | ✓ | ✓ `CollectionPage` + `BlogPosting` | — | titoli card resi come `H2` di card-link; "Leggi" ripetuto senza `aria-label`; `<section>` lista senza nome accessibile |
| `/risorse/:slug` | ✓ (nel file) | ✓ | ✓ ricco: `BlogPosting` + `FAQPage` + `BreadcrumbList` | — | il più curato lato SEO; `image` JSON-LD generica (`og-cover`), nessun `Organization` globale referenziato per `@id` |
| `*` (404) | ✓ + `noIndex` | ✓ | — | — | **servito con 200** (soft-404); "404" decorativo in `<p>` più prominente dell'`<h1>` |
| Header/Footer (`Navigation`) | n/a | n/a | n/a | — | **nessuno skip-link**; menu mobile senza `aria-expanded`/`aria-controls`/focus-trap; **link social `href="#"`** (segnaposto); logo img senza dimensioni |
| `HeroLeadForm` (riusabile) | n/a | n/a | n/a | ✓ (honeypot ✓) | **label non associate**; nessun `aria-live` su success/error; manca `aria-required`/`aria-invalid` |

> **H1:** confermato che `PageHero` (`src/components/PageHero.tsx:54`) emette **un
> solo `<h1>`** con la prop `title`. Quindi **ogni rotta ha esattamente un H1**;
> su Servizi/FAQ/Contatti/Chi-siamo/Valuta proviene dal componente, non dal file
> pagina. Nessuna rotta è priva di H1.

### 4.2 Temi di accessibilità trasversali (priorità Fase 9)

1. **Label dei form non associate** (`htmlFor`/`id`) in Contatti, Valuta e
   `HeroLeadForm` → click sulla label non focalizza il campo; AT non associa
   label↔input. **Fix più impattante.**
2. **Nessun `aria-live`** sugli esiti success/error dei form → l'invio non viene
   annunciato dagli screen reader.
3. **Accordion senza ARIA** (FAQ, Servizi, Contatti, Valuta): mancano
   `aria-expanded`, `aria-controls`, `id`/`region` sul pannello.
4. **Nessuno skip-link**; menu mobile senza `aria-expanded`/`aria-controls`/
   gestione focus.
5. **Immagini senza `width`/`height` ovunque** (`PageHero`, `ContactCTA`, hero
   Home, loghi) → CLS, in particolare sull'elemento LCP.
6. **`prefers-reduced-motion` non rispettato nel markup** per ken-burns, marquee
   e scroll loghi (il componente `Reveal` invece lo rispetta correttamente).
7. **Link social `href="#"`** nel footer: segnaposto non funzionanti (impatto
   anche su `sameAs` per structured data — Fase 3).
8. **Rating a stelle senza equivalente testuale** (Home, Chi-siamo).

### 4.3 Punti già fatti bene

- Componente `<SEO>` presente e con `title`/`description`/`path` corretti **su
  tutte le rotte**; `noIndex` correttamente impostato su 404 e articolo mancante.
- JSON-LD ricco e corretto dove presente: **Servizi** (`Service`/`OfferCatalog`),
  **FAQ** (`FAQPage`), **Risorse** (`CollectionPage`), **Articoli**
  (`BlogPosting`+`FAQPage`+`BreadcrumbList`). Manca un `Organization`/`WebSite`
  globale e i JSON-LD su Home/Chi-siamo/Contatti (Fase 3).
- Immagini in formato **`.webp`/`.svg`**; hero con `fetchPriority="high"` +
  `decoding="async"`; below-the-fold con `loading="lazy"`.
- **Honeypot anti-spam** presente su tutti i form; campi `required` lato browser;
  `_honey` con `tabIndex=-1`/`aria-hidden`.
- Interazioni con `<button>`/`<Link>` reali (nessun "div cliccabile"); markup
  semantico (`section`/`article`/`ul`/`li`).

---

## 5. Riproducibilità (comandi baseline)

```bash
# build + timing
rm -rf dist && npm run build

# type-check
npx tsc --noEmit

# bundle
find dist/assets -name '*.js' -printf '%s\n' | awk '{s+=$1} END {printf "%.1f KB\n", s/1024}'
du -sh dist dist/images dist/brands

# shell CSR vuota
grep -o '<div id="root">[^<]*</div>' dist/index.html

# deadcode / leak / asset remoti
grep -rn "genai\|GEMINI\|express\|dotenv" src/
grep -rc "images.unsplash.com" src/constants.ts
grep -rc "upload.wikimedia.org" src/constants.ts

# drift sitemap ↔ articoli
grep -oE "slug: '[^']+'" src/content/articles.tsx | sed "s/slug: '//;s/'//" | sort
grep -oE "/risorse/[a-z0-9-]+" public/sitemap.xml | sed 's|/risorse/||' | sort
```
