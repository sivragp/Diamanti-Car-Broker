import { Link } from 'react-router-dom';
import { SEO, breadcrumbLd } from '../components/SEO';
import { OPEN_CONSENT_EVENT } from '../components/ConsentBanner';

/**
 * Cookie Policy — BOZZA. Da validare legalmente; i dati societari sono nella
 * Privacy Policy. Il pulsante "Gestisci preferenze" riapre il banner di consenso.
 */
export default function CookiePolicy() {
  const openConsent = () => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));

  return (
    <div className="bg-white min-h-screen font-sans text-text pt-[74px]">
      <SEO
        title="Cookie Policy | Diamanti Automobili"
        description="Informativa sui cookie del sito Diamanti Automobili: cookie tecnici e cookie di analisi attivati solo previo consenso (Google Consent Mode v2)."
        path="/cookie-policy"
        jsonLd={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Cookie Policy', path: '/cookie-policy' }])}
        jsonLdId="cookie"
      />

      <header className="bg-[#061629] text-white">
        <div className="ds-container max-w-[820px] py-12 md:py-16">
          <h1 className="text-[28px] md:text-[40px] font-extrabold leading-[1.12]">Cookie Policy</h1>
          <p className="text-white/60 text-[13px] mt-3">Ultimo aggiornamento: 14 giugno 2026 · Documento in revisione legale.</p>
        </div>
      </header>

      <article className="ds-container max-w-[820px] py-12 md:py-16 article-prose">
        <p>
          Questo sito utilizza i cookie per garantire il corretto funzionamento e, previo
          consenso, per finalità di analisi. Di seguito le categorie utilizzate.
        </p>

        <h2>Cookie tecnici (necessari)</h2>
        <p>
          Indispensabili al funzionamento del sito e alla memorizzazione delle tue
          preferenze sul consenso. Non richiedono consenso e non possono essere disattivati.
        </p>

        <h2>Cookie di analisi (previo consenso)</h2>
        <p>
          Attivati <strong>solo dopo</strong> il tuo consenso tramite il banner:
        </p>
        <ul>
          <li><strong>Google Analytics 4</strong> — statistiche di utilizzo in forma aggregata, con IP anonimizzato.</li>
          <li><strong>Contentsquare</strong> — analisi delle interazioni per migliorare l'esperienza d'uso.</li>
        </ul>
        <p>
          Adottiamo <strong>Google Consent Mode v2</strong>: in assenza di consenso questi
          strumenti restano disattivati (stato predefinito “negato”) e non vengono caricati.
        </p>

        <h2>Gestione del consenso</h2>
        <p>
          Puoi modificare o revocare in qualsiasi momento la tua scelta:
        </p>
        <p>
          <button
            type="button"
            onClick={openConsent}
            className="inline-flex h-[44px] px-6 items-center justify-center rounded-full bg-[#0c438f] text-white font-bold text-[14px] hover:bg-[#0b2b5b] transition-colors no-underline"
          >
            Gestisci preferenze cookie
          </button>
        </p>
        <p>
          In alternativa puoi gestire o eliminare i cookie dalle impostazioni del tuo
          browser.
        </p>

        <h2>Maggiori informazioni</h2>
        <p>
          Per il trattamento dei dati personali consulta la{' '}
          <Link to="/privacy-policy">Privacy Policy</Link>.
        </p>

        <p className="text-[13px] text-muted">
          <em>Documento in revisione legale: durate ed elenco completo dei cookie restano
          da completare e validare con un consulente legale prima della pubblicazione. I
          dati del Titolare sono riportati nella <Link to="/privacy-policy">Privacy Policy</Link>.</em>
        </p>
      </article>
    </div>
  );
}
