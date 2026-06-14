# Piano di lavoro — Diamanti Automobili

Branch: `backend-optimization` · Obiettivo: sito veloce, indicizzabile, citabile
dalle AI, sicuro, che converte i lead — **senza rompere la produzione**.

Regole inviolabili: mai toccare `main`; nessun segreto nel codice/commit; build
sempre verde (`npm run build` + `tsc --noEmit`); voce automotive (non SIVRA);
commit atomici per fase; a fine lavoro PR senza merge.

## Stato fasi

| Fase | Tema | Stato | Note |
|---|---|---|---|
| 1 | Baseline & audit | ✅ Fatto | `docs/01-audit-baseline.md` |
| 2 | Rendering / SSG | ✅ Fatto | C-bis SSG custom RR7 + @unhead; 28 pagine prerenderizzate |
| 3 | Metadati per-pagina + structured data | 🟡 Avviato | base baked in Fase 2; manca JSON-LD globale Organization/WebSite + Home/Contatti/Chi-siamo |
| 4 | GEO (AI search) | 🟡 Parziale | `llms.txt` ✅; robots AI (blocco training) = **decisione cliente**; contenuti answer-first |
| 5 | Performance / CWV | 🟡 Parziale | font ✅, motion −120 KB ✅; manca immagini width/height (CLS), manualChunks, drop console |
| 6 | Sicurezza / header / pulizia deps | ✅ Fatto | 6a (dead-deps/GEMINI/constants) + 6b (header+CSP Report-Only) |
| 7 | Lead backend & conversioni | 🟡 7a fatto · 7b pending | 7a: hardening form (FormSubmit). **7b — Resend (pending)**: endpoint proprio quando ci saranno dominio verificato + `RESEND_API_KEY` |
| 8 | Privacy / consent (GDPR) | ⏳ **decisione** | Consent Mode v2 + banner; bozze legali |
| 9 | Accessibilità (WCAG 2.1 AA) | 🟢 Pronto | label form `htmlFor`, `aria-live`, accordion ARIA, skip-link |
| 10 | Sitemap/robots automatici, canonical, 404 | 🟡 Parziale | sitemap auto ✅ + 404 reale ✅; manca canonical host (www, HTTPS) |
| 11 | Qualità codice / DX / CI | 🟢 Pronto | ESLint+Prettier, `.env.example`, README |

Legenda: ✅ fatto · ⏳ in attesa · 🟢 pronto · 🟡 parziale · ⛔ bloccato.

## Sequenza consigliata (impatto/rischio)

1. **Fase 2 (gate)** — rendering SSG. È la priorità massima e condiziona 3, 4, 10.
   Si attende la conferma dell'ADR prima del refactor.
2. **In parallelo, lavori indipendenti dal rendering** (riducono rischio e bundle
   senza toccare la pipeline di render):
   - Fase 6: rimozione `define` GEMINI, rimozione dead-deps
     (`@google/genai`, `express`, `dotenv`, `@types/express`), security header in
     `vercel.json` (CSP prima in *Report-Only*).
   - Fase 5 (sottoinsieme): self-host font (eliminare `@import` render-blocking),
     localizzare asset Unsplash/Wikimedia, alleggerire `motion` (chunk Reveal da
     ~124 KB), `manualChunks`, drop `console` in prod.
3. **Post-Fase 2:** Fase 3 (meta+JSON-LD baked), Fase 4 (GEO), Fase 10
   (404 reale, sitemap al build, canonical host).
4. **Conversioni e compliance:** Fase 7 (lead endpoint + eventi), Fase 8 (consent).
5. **Chiusura:** Fase 9 (a11y finale), Fase 11 (DX/CI), PR.

## Definizione di "fatto" (su preview di produzione)

- `curl`/`view-source` di **ogni** rotta → HTML completo (H1, testo, link) senza JS,
  con `title`/`description`/`canonical`/OG/JSON-LD unici e corretti.
- PSI mobile ≥ 90 su Home/Servizi/Articolo; CLS < 0.1; LCP < 2.5s; INP < 200ms.
- securityheaders.com → grado A.
- Rich Results Test valido: AutomotiveBusiness/Organization, FAQPage, Service,
  BreadcrumbList, Article.
- Nessun segreto nel bundle; `define` GEMINI rimosso; dead-deps eliminate.
- 404 reale (status 404); un solo host canonico; HTTPS forzato.
- robots.txt + sitemap.xml coerenti e generati al build; policy crawler AI;
  `llms.txt` presente.
- Lead tracciati (GA4) + scaffold endpoint proprio con fallback FormSubmit.
- Consent GDPR: tracking bloccato prima del consenso (Consent Mode v2) + banner.
- `tsc --noEmit` pulito; Lighthouse a11y ≥ 95.

## Decisioni che richiedono il cliente (non tecniche)

- **Crawler AI di puro training** (`CCBot`, `anthropic-ai`, `Bytespider`):
  consentire o bloccare? (gli answer/search bot vanno comunque consentiti).
- **Provider email** per l'endpoint lead (default proposto: Resend) e dominio
  mittente da verificare.
- **Testi legali** (privacy/cookie policy): bozza a nostro carico, revisione
  legale a carico del cliente.
