# SEO / GEO Audit — Diamanti Automobili

**Sito:** www.diamantiautomobili.com — consulente/broker per l'acquisto auto (Roma → tutta Italia)
**Stack:** Vite 6 + React 19 + React Router 7, `@unhead/react`, build **SSG** (`src/entry-server.tsx` + `scripts/prerender.mjs`)
**Data audit:** 2026-07-01 · branch `feat/seo-geo-improvements`
**Dominio canonico:** `https://www.diamantiautomobili.com` (apex → www via redirect 308 in `vercel.json`)

## Esito in una riga
L'infrastruttura SEO/GEO è **matura e sostanzialmente completa**. Non esistono gap
critici. Implementati solo **micro-miglioramenti additivi e a rischio zero** (consolidamento
del grafo entità JSON-LD). Il resto è documentato come **raccomandazione** perché dipende da
**dati reali non ancora disponibili** (vincolo: non inventare dati).

---

## 1. Copertura meta per route

Ogni pagina usa il componente `SEO` (`src/components/SEO.tsx`) che inietta via `@unhead`
title, description, `robots`, canonical, Open Graph e Twitter — **baked** nell'HTML statico
al build (verificato negli output `dist/`).

| Route | title/description unici | canonical www | OG/Twitter | robots |
|---|---|---|---|---|
| `/` (Home) | ✅ | ✅ | ✅ | index |
| `/servizi` | ✅ | ✅ | ✅ | index |
| `/valuta-la-tua-auto` | ✅ | ✅ | ✅ | index |
| `/chi-siamo` | ✅ | ✅ | ✅ | index |
| `/faq` | ✅ | ✅ | ✅ | index |
| `/contatti` | ✅ | ✅ | ✅ | index |
| `/risorse` | ✅ | ✅ | ✅ | index |
| `/risorse/:slug` (19 articoli) | ✅ | ✅ | ✅ | index |
| `/privacy-policy`, `/cookie-policy` | ✅ | ✅ | ✅ | index |
| `/storie` | ✅ | ✅ | ✅ | **noindex** (placeholder — corretto) |
| `*` / 404 | ✅ | — | — | **noindex** (`404.html` con status reale) |

Meta globali (in `index.html`): `lang="it"`, `theme-color`, geo (`geo.region IT-RM`,
`ICBM`), `og:type/locale/site_name`, `twitter:card`, favicon completo, preload font LCP.
**Nessun gap.**

## 2. Structured data (JSON-LD)

**Presenti e corretti:**

| Tipo | Dove | Note |
|---|---|---|
| `WebSite` (`#website`) | `index.html` (globale) | no `SearchAction` (nessuna ricerca interna — scelta corretta) |
| `AutomotiveBusiness` (`#business`) | `index.html` (globale) | contatti, geo, `areaServed`, `knowsAbout`, `openingHours` |
| `BreadcrumbList` | tutte le pagine (helper `breadcrumbLd`) | ✅ |
| `Service` + `OfferCatalog` | `/servizi`, `/valuta-la-tua-auto` | ✅ |
| `FAQPage` | `/faq` (10 Q) + ogni articolo | ✅ |
| `BlogPosting` | ogni articolo + `hasPart` in `/risorse` | ✅ |
| `CollectionPage` | `/risorse` | ✅ |
| `AboutPage` / `ContactPage` | `/chi-siamo`, `/contatti` | ✅ |

**Nota su `AutoDealer`/`CarDealer`:** *non* applicabile. Il cliente è un consulente
indipendente/broker («indipendenti da marchi e concessionarie»), non un concessionario:
`AutomotiveBusiness` è il tipo semanticamente corretto. **Nessun cambio consigliato.**

**Gap noti — NON implementati (dipendono da dati reali):** vedi §8.

## 3. robots.txt + llms.txt

- `robots.txt`: ✅ `Allow: /`, blocco mirato bot di puro training (CCBot, anthropic-ai,
  Bytespider), answer-engine consentiti, `Sitemap:` referenziata. Corretto.
- `llms.txt`: ✅ presente e ben strutturato (descrizione, servizi, area, contatti, pagine
  chiave, selezione guide). Ottimo per GEO. Nessun gap.

## 4. sitemap.xml

✅ **Esiste ed è generata a build** da `scripts/prerender.mjs` a partire da
`SITEMAP_ENTRIES` (`entry-server.tsx`) → nessun file manuale soggetto a drift. 28 URL
(9 statiche indicizzabili + 19 articoli; `/storie` escluso perché noindex). `lastmod` sugli
articoli da `dateModified`. Referenziata in `robots.txt`. **Nessun gap.**

## 5. Canonical

✅ Tutti puntano a `https://www.diamantiautomobili.com` (verificato negli HTML generati).
Apex → www gestito via redirect permanente in `vercel.json`. Preview `*.vercel.app` in
`noindex` via header. **Nessun gap.**

## 6. hreflang

Sito **monolingua IT** → hreflang **non necessario**. Nessuna azione.

## 7. Alt text / heading / lang

- `lang="it"` sull'`<html>` ✅
- Immagini con `alt` descrittivi + `width`/`height` + `fetchpriority`/`decoding` sull'LCP ✅
- Gerarchia heading coerente (un `h1` per pagina, `h2`/`h3` a seguire) ✅
- Vincolo «sito visivamente invariato» rispettato: nessuna modifica a layout/UI/testi.

---

## 8. Interventi implementati (sicuri, additivi, dati già nel repo)

**Consolidamento del grafo entità JSON-LD** — estende il pattern già presente
(`WebSite` referenzia `#business` via `@id`) agli articoli. Nessun dato inventato,
nessun impatto visivo.

- `src/pages/Article.tsx` (BlogPosting, ×19):
  - `author`/`publisher` ora referenziano l'entità globale via `@id` (`#business`) invece
    di creare `Organization` anonime → grafo unico, migliore attribuzione per Google/AI.
  - aggiunti `isPartOf` → `#website`, `articleSection` (da `article.category`),
    `keywords` (da `article.keyword`). Tutti campi già esistenti nei dati.
- `src/pages/Risorse.tsx` (CollectionPage):
  - aggiunti `isPartOf` → `#website`, `publisher` → `#business`, e `dateModified` sulle voci
    `hasPart`.

Build verificata: `npm run build` OK (30 pagine + sitemap, 28 URL), JSON-LD baked corretto.

## 9. Raccomandazioni NON implementate (decisione umana / dati mancanti)

1. **`Vehicle`/`Car` + `Offer` per le auto consegnate** — la fonte `src/content/soldCars.ts`
   è dichiarata **SEGNAPOSTO/INVENTATA** (anno/km/prezzo/recensioni). Marcare dati inventati
   con markup strutturato viola le linee guida (rischio penalizzazione). **Implementare solo
   quando arrivano i dati reali** delle auto vendute.
2. **`Review`/`AggregateRating`** — idem: le recensioni in `soldCars.ts` sono dimostrative.
   Markup di review inventate = violazione policy. Attivare con recensioni reali verificabili.
3. **`lastmod` sulle pagine statiche in sitemap** — oggi assente (solo gli articoli lo hanno).
   Richiederebbe una fonte data affidabile per pagina; non inventarla. Opzionale.
4. **`PostalAddress.streetAddress` / P.IVA nel nodo business** — mancano indirizzo civico e
   partita IVA (non presenti nel repo). Aggiungerli quando disponibili rafforza il LocalBusiness.
5. **Immagini OG dedicate per articolo** — oggi tutti gli articoli usano `og-cover.jpg`
   (fallback corretto). Immagini specifiche migliorerebbero CTR social; è lavoro editoriale/asset.
6. **Estendere il consolidamento `@id`** anche a `Service`/`ContactPage`/`AboutPage`
   (referenziare `#business` dove citano `AutomotiveBusiness` inline). Basso rischio ma
   basso valore incrementale: lasciato come opzione, non necessario.
