# ADR 0001 — Strategia di rendering (prerender / SSG)

- **Stato:** ✅ ACCETTATA (2026-06-14) — Opzione A `vite-react-ssg`
- **Data:** 2026-06-14
- **Decisori:** Cliente / Responsabile tecnico
- **Contesto branch:** `backend-optimization`

## Contesto e problema

Il sito è una **SPA interamente client-side** (Vite 6 + React 19 + React Router 7).
L'HTML servito (`dist/index.html`) contiene solo `<div id="root"></div>`: tutto il
contenuto viene iniettato da JavaScript a runtime. Verificato:

```
$ grep -o '<div id="root">[^<]*</div>' dist/index.html
<div id="root"></div>
```

Conseguenze dirette (bloccanti per gli obiettivi del progetto):

1. **SEO:** i crawler che non eseguono JS (e molti che lo eseguono solo
   parzialmente/lentamente) vedono una pagina vuota. Niente H1, testo o link
   nell'HTML statico.
2. **GEO (AI search):** i bot di ChatGPT/Perplexity/Claude/Google-Extended
   **non eseguono JS**: senza HTML reale il sito non è né leggibile né citabile.
3. **Meta per-pagina:** `src/components/SEO.tsx` muta `document.head` in
   `useEffect` → funziona solo dopo l'esecuzione JS. `title`, `description`,
   `canonical`, OG e JSON-LD per-rotta **non esistono** nell'HTML statico
   (solo la home è "baked" in `index.html`).

Serve **generare HTML reale per ogni rotta al build**, con meta e JSON-LD già
presenti nel sorgente HTML, senza eseguire JS lato client e senza rompere la
produzione (Vercel).

## Requisiti della decisione

- HTML completo e indicizzabile per **ogni** rotta, incluse le 19 pagine
  dinamiche `/risorse/:slug`.
- `title` / `description` / `canonical` / OG / Twitter / JSON-LD **baked** e
  **unici per pagina**.
- **Minima invasività** sul codice applicativo e basso rischio di regressione.
- Deploy su Vercel, build deterministica e ripetibile (no step fragili in CI).
- Mantenibile nel tempo (no dipendenze abbandonate).
- `404` reale (status 404), niente soft-404.

## Opzioni valutate

### Opzione A — `vite-react-ssg` (SSG nativo Vite, **raccomandata**)

Plugin SSG per React su Vite con integrazione React Router. Al build esegue il
rendering server-side (`renderToString`) di ogni rotta in un HTML statico, poi
il client si limita a **idratare**. Nessun browser headless richiesto.

- **Pro**
  - True SSG deterministico: nessun Chrome headless al build (≠ Opzione B),
    build veloce e ripetibile su Vercel.
  - Supporta rotte dinamiche via `getStaticPaths` → genera un HTML per ciascuno
    dei 19 articoli leggendo `ARTICLES` da `src/content/articles.tsx`.
  - Gestione `<head>` SSR-safe tramite `@unhead/react` (incluso): meta e JSON-LD
    finiscono **nell'HTML statico** e continuano ad aggiornarsi durante la
    navigazione client.
  - Produce un `404.html` reale.
  - I **call-site delle pagine non cambiano**: si riscrive solo `SEO.tsx`
    (da mutazione `document.head` → `useHead(...)`) e l'entry/route list.
- **Contro / rischi**
  - Refactor contenuto ma reale: `src/main.tsx` (entry → `ViteReactSSG`),
    `src/App.tsx` (`<Routes>` JSX → array di route), `src/components/SEO.tsx`
    (→ `useHead`). Blast radius limitato a 3 file + verifica idratazione.
  - Va verificata la compatibilità fine con React 19 + React Router 7 (data
    router). Mitigazione: branch isolato, build di prova su una rotta prima di
    estendere; in caso di blocco si ripiega sull'Opzione B.
  - Codice che tocca `window`/`document` durante il render va reso SSR-safe
    (guardie `typeof window`). Già individuati: `useIsMobile`, `ScrollToTop`.

### Opzione B — Prerender post-build headless (puppeteer / `@prerenderer` / react-snap)

Si builda la SPA così com'è, poi un Chrome headless **crawla** ogni rotta e
serializza il DOM risultante in file HTML statici.

- **Pro**
  - Quasi zero modifiche al codice app: la mutazione `document.head` di `SEO.tsx`
    gira nel browser headless e viene serializzata "gratis".
  - Routing invariato (`BrowserRouter`).
- **Contro / rischi**
  - **Dipendenza da Chrome headless al build**: sul container **non è presente**
    (`which chromium/google-chrome` → niente); puppeteer scaricherebbe ~150 MB di
    Chromium, allungando e irrobustendo poco il build.
  - `react-snap` è di fatto **non mantenuto** (incompatibilità con Node/puppeteer
    recenti); le alternative richiedono comunque tuning anti-flakiness (attese,
    hydration mismatch).
  - Step di build fragile/non deterministico — sconsigliato per uno standard
    "professionale". Resta come **piano B** se A si rivela troppo costoso.

### Opzione C — Migrazione a meta-framework (React Router 7 framework mode / Next / Astro)

- **Pro:** SSR/SSG di prima classe, futureproof.
- **Contro:** migrazione ampia (convenzioni di routing, loader, config), alto
  rischio/costo ora. **Esplicitamente fuori scope** in questa fase.

## Decisione proposta

**Opzione A — `vite-react-ssg` + `@unhead/react`**, con **Opzione B (puppeteer)
come fallback documentato** qualora l'integrazione React 19 / RR7 risultasse
bloccante.

Motivo: è la soluzione **meno invasiva tra quelle robuste**. Produce HTML
per-rotta con meta/JSON-LD baked senza introdurre un browser headless fragile nel
build, sblocca contemporaneamente SEO e GEO, e mantiene intatti i call-site delle
pagine (si riscrive solo `SEO.tsx`, l'entry e la route list).

## Piano di implementazione (a valle della conferma)

1. `npm i vite-react-ssg` (porta con sé `@unhead/react`).
2. `src/main.tsx`: sostituire `createRoot().render()` con
   `export const createRoot = ViteReactSSG({ routes }, setup)`.
3. `src/App.tsx`: estrarre l'array `routes` (10 rotte) consumabile sia dall'entry
   SSG sia dal layout; mantenere `Header`/`Footer`/`ScrollToTop`.
4. `getStaticPaths` per `/risorse/:slug` da `ARTICLES` (19 URL).
5. Riscrivere `SEO.tsx`: da mutazione `document.head` a `useHead({ title, meta,
   link, script[ld+json] })` — **stessa firma**, call-site invariati.
6. Rendere SSR-safe: `useIsMobile`, `ScrollToTop`, ogni accesso a `window`.
7. `script build` → `vite-react-ssg build`. Verifica:
   `curl`/`view-source` di `/`, `/servizi`, `/faq`, un articolo → H1, testo,
   meta e JSON-LD presenti **senza JS**.
8. `404` reale (Fase 10, in combinazione con `vercel.json`).

## Conseguenze

- **Positive:** HTML indicizzabile e citabile dalle AI; meta/structured data per
  pagina nel sorgente; base per PSI ≥ 90 e Rich Results validi; build senza
  dipendenze fragili.
- **Da presidiare:** correttezza dell'idratazione (no mismatch), guardie SSR sul
  codice browser-only, retest visivo per assenza di regressioni.

## Decisione del cliente

**Approccio scelto: A — `vite-react-ssg` + `@unhead/react`** (conferma del
2026-06-14). Fallback puppeteer mantenuto in caso di incompatibilità bloccante
React 19 / React Router 7. In parallelo, approvati i lavori indipendenti dal
rendering (Fase 6 pulizia + header sicurezza, Fase 5 font/bundle).
