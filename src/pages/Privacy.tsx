import { Link } from 'react-router-dom';
import { SEO, breadcrumbLd } from '../components/SEO';

/**
 * Privacy Policy — dati del Titolare inseriti (EDILRENT ITALIA S.R.L., insegna
 * "Diamanti Automobili"). Restano alcune voci tra [parentesi] (es. tempi di
 * conservazione); il testo va validato da un legale prima del go-live definitivo.
 */
export default function Privacy() {
  return (
    <div className="bg-white min-h-screen font-sans text-text pt-[74px]">
      <SEO
        title="Privacy Policy | Diamanti Automobili"
        description="Informativa sul trattamento dei dati personali di Diamanti Automobili ai sensi del Regolamento UE 2016/679 (GDPR)."
        path="/privacy-policy"
        jsonLd={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy-policy' }])}
        jsonLdId="privacy"
      />

      <header className="bg-[#061629] text-white">
        <div className="ds-container max-w-[820px] py-12 md:py-16">
          <h1 className="text-[28px] md:text-[40px] font-extrabold leading-[1.12]">Privacy Policy</h1>
          <p className="text-white/60 text-[13px] mt-3">Ultimo aggiornamento: 14 giugno 2026 · Documento in revisione legale.</p>
        </div>
      </header>

      <article className="ds-container max-w-[820px] py-12 md:py-16 article-prose">
        <p>
          La presente informativa descrive le modalità di trattamento dei dati personali
          degli utenti che consultano il sito <strong>diamantiautomobili.com</strong>,
          ai sensi dell'art. 13 del Regolamento UE 2016/679 (“GDPR”).
        </p>

        <h2>Titolare del trattamento</h2>
        <p>
          Il Titolare del trattamento è <strong>EDILRENT ITALIA S.R.L.</strong> (che opera
          con l'insegna <strong>“Diamanti Automobili”</strong>), con sede legale in Via
          Alessandro Piola Caselli 179, 00122 Roma (RM), P.IVA e C.F. 17648381006,
          REA RM-1732240, PEC{' '}
          <a href="mailto:edilrentitalia@pecimprese.it">edilrentitalia@pecimprese.it</a>.
        </p>
        <p>
          Per l'esercizio dei tuoi diritti e per ogni richiesta relativa al trattamento dei
          dati personali puoi contattare il Titolare all'indirizzo{' '}
          <a href="mailto:info@diamantiautomobili.com">info@diamantiautomobili.com</a>.
        </p>

        <h2>Quali dati raccogliamo</h2>
        <ul>
          <li><strong>Dati forniti volontariamente</strong> tramite i moduli di contatto/valutazione (nome, email, telefono, città e informazioni sull'auto cercata o da valutare).</li>
          <li><strong>Dati di navigazione</strong> raccolti, previo consenso, da strumenti di analisi (Google Analytics 4, Contentsquare): pagine visitate, dispositivo, interazioni in forma aggregata/pseudonimizzata.</li>
        </ul>

        <h2>Finalità e base giuridica</h2>
        <ul>
          <li><strong>Rispondere alle richieste</strong> e fornire il servizio di consulenza (base giuridica: misure precontrattuali e consenso).</li>
          <li><strong>Statistiche e miglioramento del sito</strong> tramite cookie di analisi (base giuridica: consenso, revocabile in qualsiasi momento — vedi <Link to="/cookie-policy">Cookie Policy</Link>).</li>
        </ul>

        <h2>Modalità di invio dei moduli</h2>
        <p>
          Attualmente i moduli vengono inoltrati via email tramite il servizio terzo
          <strong> FormSubmit</strong>, che agisce come strumento di recapito. [In fase di
          attivazione un endpoint proprio per ridurre i passaggi presso terzi.]
        </p>

        <h2>Conservazione</h2>
        <p>
          I dati di contatto sono conservati per il tempo necessario a gestire la
          richiesta e gli adempimenti connessi [specificare durata]. I dati analitici
          seguono i tempi di conservazione degli strumenti utilizzati.
        </p>

        <h2>Diritti dell'interessato</h2>
        <p>
          Puoi esercitare in qualsiasi momento i diritti di accesso, rettifica,
          cancellazione, limitazione, portabilità e opposizione (artt. 15–22 GDPR),
          nonché revocare il consenso, scrivendo a{' '}
          <a href="mailto:info@diamantiautomobili.com">info@diamantiautomobili.com</a>.
          Hai inoltre diritto di proporre reclamo al Garante per la protezione dei dati
          personali.
        </p>

        <h2>Cookie</h2>
        <p>
          Per l'uso dei cookie e la gestione del consenso consulta la{' '}
          <Link to="/cookie-policy">Cookie Policy</Link>.
        </p>

        <p className="text-[13px] text-muted">
          <em>Documento in revisione legale: i dati del Titolare sono stati inseriti; le
          voci ancora tra parentesi quadre (es. tempi di conservazione) e l'intero testo
          restano soggetti alla validazione di un consulente legale prima della
          pubblicazione definitiva.</em>
        </p>
      </article>
    </div>
  );
}
