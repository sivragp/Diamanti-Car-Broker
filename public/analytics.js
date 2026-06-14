/*
 * Analytics consent-gated — Diamanti Automobili.
 *
 * Esternalizzato (niente snippet inline) così la CSP può togliere 'unsafe-inline'
 * da script-src. Google Consent Mode v2 con default DENIED: GA4 e Contentsquare
 * NON partono finché l'utente non acconsente (banner). Conforme GDPR (IT).
 */
(function () {
  var GA_ID = 'G-RYV2J7P6D5';
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

  var loaded = false;
  function loadTrackers() {
    if (loaded) return;
    loaded = true;
    var ga = document.createElement('script');
    ga.async = true;
    ga.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(ga);
    gtag('config', GA_ID, { anonymize_ip: true });

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
    loadTrackers();
  };

  window.daDenyConsent = function () {
    try { localStorage.setItem(KEY, 'denied'); } catch (e) {}
  };

  // Consenso già dato in una visita precedente → carica subito i tracker.
  if (readState() === 'granted') { window.daGrantConsent(); }
})();
