/*
 * Analytics consent-gated — Diamanti Automobili.
 *
 * Esternalizzato (niente snippet inline) così la CSP può togliere 'unsafe-inline'
 * da script-src. Google Consent Mode v2 con default DENIED.
 *
 * Setup consigliato da Google: il Google tag (gtag.js → GA4 + Google Ads) viene
 * caricato SEMPRE, ma con consenso negato di default invia solo ping cookieless
 * (nessun cookie finché l'utente non accetta). Così la "Verifica installazione"
 * di Google Ads passa e si abilita la modellazione delle conversioni, restando
 * conformi GDPR (IT). Contentsquare invece parte SOLO dopo consenso esplicito.
 */
(function () {
  var GA_ID = 'G-RYV2J7P6D5';
  var AW_ID = 'AW-18210464219'; // Google Ads (conversion tracking)
  var CS_SRC = 'https://t.contentsquare.net/uxa/6a1581bcc044a.js';
  var KEY = 'da_consent'; // 'granted' | 'denied'

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  // Consent Mode v2 — tutto negato per default finché non c'è consenso.
  gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    security_storage: 'granted',
    wait_for_update: 500,
  });
  gtag('js', new Date());

  // Google tag (GA4 + Google Ads) caricato SUBITO. Con consenso negato non scrive
  // cookie: invia solo ping cookieless (Consent Mode v2). Un solo gtag.js serve
  // entrambi i tag.
  var gt = document.createElement('script');
  gt.async = true;
  gt.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(gt);
  gtag('config', GA_ID, { anonymize_ip: true });
  gtag('config', AW_ID);

  // Contentsquare: NON è un tag Google, resta gated → solo dopo "Accetta".
  var csLoaded = false;
  function loadContentsquare() {
    if (csLoaded) return;
    csLoaded = true;
    var cs = document.createElement('script');
    cs.async = true;
    cs.src = CS_SRC;
    document.head.appendChild(cs);
  }

  function readState() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  window.daConsentState = readState;

  window.daGrantConsent = function () {
    try { localStorage.setItem(KEY, 'granted'); } catch (e) {}
    gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      functionality_storage: 'granted',
      personalization_storage: 'granted',
    });
    loadContentsquare();
  };

  window.daDenyConsent = function () {
    try { localStorage.setItem(KEY, 'denied'); } catch (e) {}
  };

  // Consenso già dato in una visita precedente → aggiorna stato e carica Contentsquare.
  if (readState() === 'granted') { window.daGrantConsent(); }
})();
