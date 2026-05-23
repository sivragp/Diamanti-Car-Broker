import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export interface ArticleFaq {
  q: string;
  a: string;
}

export interface Article {
  slug: string;
  title: string;        // <title> SEO
  description: string;  // meta description
  h1: string;
  keyword: string;      // query principale target
  category: string;
  excerpt: string;      // hub + anteprima
  datePublished: string;
  dateModified: string;
  readingMinutes: number;
  body: ReactNode;
  faqs: ArticleFaq[];
  related: string[];    // slug correlati
}

export const ARTICLES: Article[] = [
  // 1 ─────────────────────────────────────────────────────────────────────
  {
    slug: 'consulente-acquisto-auto-come-funziona',
    title: 'Consulente per l’acquisto auto (auto broker): come funziona e quanto costa',
    description:
      'Cos’è un consulente per l’acquisto auto (auto broker), come funziona il servizio, quanto costa e quando conviene davvero rispetto a cercare l’auto da soli.',
    h1: 'Consulente per l’acquisto auto: come funziona, quanto costa e quando conviene',
    keyword: 'consulente acquisto auto',
    category: 'Guida',
    excerpt:
      'Cos’è un auto broker, come lavora passo per passo, quanto costa il servizio e in quali casi ti fa risparmiare tempo e denaro.',
    datePublished: '2026-05-23',
    dateModified: '2026-05-23',
    readingMinutes: 6,
    body: (
      <>
        <p>
          Un <strong>consulente per l’acquisto auto</strong> (in inglese <em>auto broker</em>) è un professionista
          indipendente che cerca, verifica e tratta l’auto al posto tuo. Non è legato a un marchio o al magazzino di una
          concessionaria: lavora solo nel tuo interesse e viene pagato da te, non dal venditore. In breve, fa per l’auto
          quello che un agente fa per la casa.
        </p>
        <h2>Come funziona, passo per passo</h2>
        <p>
          Il percorso è quasi sempre lo stesso, indipendentemente dal budget:
        </p>
        <ol>
          <li><strong>Briefing.</strong> RaccontI esigenze, utilizzo reale (km/anno, famiglia, viaggi), budget e preferenze.</li>
          <li><strong>Ricerca.</strong> Il consulente analizza il mercato italiano ed europeo, anche fuori dai portali pubblici, e scarta le proposte a rischio.</li>
          <li><strong>Verifica.</strong> Su ogni auto candidata si controllano storia, chilometraggio reale, documenti e condizioni; dove serve, perizia tecnica in loco.</li>
          <li><strong>Trattativa.</strong> Il consulente negozia prezzo e condizioni con la leva di chi tratta auto ogni giorno.</li>
          <li><strong>Consegna.</strong> Pratiche, passaggio di proprietà e consegna a domicilio. Spesso inclusi permuta e finanziamento.</li>
        </ol>
        <h2>Quanto costa un consulente per l’acquisto auto?</h2>
        <p>
          Il costo è in genere una <strong>cifra fissa</strong> oppure una <strong>percentuale</strong> sul valore dell’auto, e
          parte tipicamente da poche centinaia di euro per le ricerche più semplici. La parcella va valutata insieme al
          risparmio ottenuto: un professionista che tratta quotidianamente spunta sconti e individua occasioni che un privato
          difficilmente raggiunge, oltre a evitarti acquisti sbagliati che costerebbero molto di più in riparazioni.
        </p>
        <h2>Quando conviene (e quando no)</h2>
        <p>Conviene quando:</p>
        <ul>
          <li>hai poco tempo e non vuoi gestire annunci, telefonate e visite;</li>
          <li>cerchi un modello specifico o un’occasione difficile da trovare;</li>
          <li>temi fregature sull’usato (km, sinistri, gravami);</li>
          <li>vuoi importare dall’estero senza rischiare sulla burocrazia.</li>
        </ul>
        <p>
          Conviene meno se hai già individuato l’auto, conosci il venditore e te la senti di gestire verifica e pratiche
          in autonomia. In quel caso può bastare una <Link to="/servizi">consulenza puntuale</Link> solo sulla verifica.
        </p>
        <p>
          Diamanti Automobili lavora esattamente così: ricerca su misura, verifica tecnica, trattativa e consegna a
          domicilio in tutta Italia, con permuta e finanziamento fino a 120 mesi.{' '}
          <Link to="/come-funziona">Scopri il metodo in dettaglio</Link> oppure{' '}
          <Link to="/contatti">richiedi una consulenza</Link>.
        </p>
      </>
    ),
    faqs: [
      {
        q: 'Che differenza c’è tra un consulente auto e una concessionaria?',
        a: 'La concessionaria vende le auto che ha in magazzino e guadagna sulla vendita. Il consulente è indipendente, non possiede le auto, cerca su tutto il mercato e viene pagato dal cliente: il suo unico interesse è farti comprare bene.',
      },
      {
        q: 'Il consulente compra l’auto al posto mio?',
        a: 'No. L’auto la paghi tu, direttamente al venditore (o tramite il consulente in caso di importazione o finanziamento gestito). Il consulente tutela il pagamento e verifica che l’auto sia reale e libera da gravami prima del bonifico.',
      },
      {
        q: 'Posso chiedere qualsiasi marca o modello?',
        a: 'Sì. La ricerca è personalizzata: nuovo, usato, km 0 o di importazione, su qualsiasi marca e segmento.',
      },
    ],
    related: ['auto-usata-privato-o-concessionario', 'controlli-prima-di-comprare-auto-usata', 'importare-auto-dalla-germania'],
  },

  // 2 ─────────────────────────────────────────────────────────────────────
  {
    slug: 'importare-auto-dalla-germania',
    title: 'Importare un’auto dalla Germania: guida completa (procedura, costi, IVA)',
    description:
      'Come importare un’auto dalla Germania nel 2026: procedura passo per passo, documenti, costi di trasporto e immatricolazione, regole IVA e rischi da evitare.',
    h1: 'Importare un’auto dalla Germania: procedura, costi e cosa controllare',
    keyword: 'importare auto dalla germania',
    category: 'Importazione',
    excerpt:
      'Procedura, documenti, IVA e nazionalizzazione per portare in Italia un’auto tedesca senza brutte sorprese.',
    datePublished: '2026-05-23',
    dateModified: '2026-05-23',
    readingMinutes: 8,
    body: (
      <>
        <p>
          La Germania è il mercato dell’usato più grande d’Europa: più scelta, auto spesso ben tenute e, su alcuni
          modelli, prezzi più convenienti. Ma <strong>importare un’auto dalla Germania</strong> conviene davvero solo se la
          procedura è gestita correttamente. Ecco come funziona.
        </p>
        <h2>La procedura passo per passo</h2>
        <ol>
          <li><strong>Ricerca e verifica.</strong> Si individua l’auto e si controlla storia, chilometraggio e documenti. Diffida dagli annunci troppo convenienti.</li>
          <li><strong>Pagamento sicuro.</strong> Mai anticipi a sconosciuti: il pagamento va protetto e contestuale al ritiro dei documenti.</li>
          <li><strong>Documenti tedeschi.</strong> Servono la <em>Zulassungsbescheinigung Teil I e II</em> (libretto e foglio di proprietà) e il <strong>certificato di conformità (COC)</strong>, indispensabile per l’immatricolazione in Italia.</li>
          <li><strong>Trasporto.</strong> Con bisarca assicurata (consigliato) oppure su strada con targhe di esportazione e assicurazione temporanea.</li>
          <li><strong>Nazionalizzazione.</strong> In Italia si fa la reimmatricolazione: pagamento dell’IPT, eventuale collaudo, nuove targhe italiane e aggiornamento al PRA.</li>
        </ol>
        <h2>I costi da mettere in conto</h2>
        <ul>
          <li><strong>Prezzo dell’auto</strong> (in euro: la Germania è in area euro, nessun cambio valuta).</li>
          <li><strong>Trasporto</strong> dalla Germania all’Italia.</li>
          <li><strong>Nazionalizzazione</strong>: imposta provinciale di trascrizione, pratiche e targhe.</li>
          <li><strong>IVA</strong>, solo in alcuni casi: vedi sotto.</li>
        </ul>
        <h2>L’IVA: quando si paga</h2>
        <p>
          È il punto più frainteso. Per un’auto considerata <strong>usata</strong> e venduta in <em>regime del margine</em>,
          di norma non si versa altra IVA in Italia. Per i cosiddetti <strong>“mezzi di trasporto nuovi”</strong> &mdash; in
          ambito UE un’auto con <strong>meno di 6 mesi</strong> oppure <strong>meno di 6.000 km</strong> &mdash; l’IVA è
          invece dovuta nel Paese di destinazione, cioè in <strong>Italia</strong>. È una distinzione che cambia molto il
          conto finale: vale la pena chiarirla <em>prima</em> di acquistare.
        </p>
        <h2>I rischi più comuni</h2>
        <ul>
          <li>COC mancante o difficile da ottenere (blocca l’immatricolazione);</li>
          <li>chilometraggio non veritiero;</li>
          <li>auto con finanziamento o gravami non estinti all’estero;</li>
          <li>errata valutazione del regime IVA, con costi a sorpresa.</li>
        </ul>
        <p>
          È qui che un consulente fa la differenza: gestisce verifica, pagamento sicuro, trasporto e nazionalizzazione
          chiavi in mano.{' '}
          <Link to="/servizi">Vedi come gestiamo l’importazione</Link> o{' '}
          <Link to="/contatti">parla con un consulente</Link>.
        </p>
      </>
    ),
    faqs: [
      {
        q: 'Conviene davvero importare un’auto dalla Germania?',
        a: 'Conviene quando il risparmio sul prezzo supera i costi di trasporto e nazionalizzazione, e quando si trova un modello/allestimento difficile da reperire in Italia. Va sempre fatto un conto completo prima di acquistare, IVA inclusa.',
      },
      {
        q: 'Quali documenti servono per immatricolare in Italia un’auto tedesca?',
        a: 'Servono la Zulassungsbescheinigung Teil I e II, il certificato di conformità (COC), il documento di acquisto e i dati dell’intestatario. Con questi si procede a IPT, eventuale collaudo, targhe italiane e iscrizione al PRA.',
      },
      {
        q: 'Quanto tempo serve per importare e immatricolare?',
        a: 'In genere da una a poche settimane, a seconda di trasporto, disponibilità dei documenti (soprattutto il COC) e tempi della pratica di nazionalizzazione.',
      },
      {
        q: 'Devo pagare l’IVA su un’auto usata tedesca?',
        a: 'Di norma no, se l’auto è usata e venduta in regime del margine. L’IVA in Italia è dovuta per i “mezzi nuovi” UE, cioè con meno di 6 mesi o meno di 6.000 km.',
      },
    ],
    related: ['verificare-chilometri-auto-usata', 'consulente-acquisto-auto-come-funziona', 'controlli-prima-di-comprare-auto-usata'],
  },

  // 3 ─────────────────────────────────────────────────────────────────────
  {
    slug: 'verificare-chilometri-auto-usata',
    title: 'Come verificare i chilometri reali di un’auto usata (km truccati)',
    description:
      'Come scoprire se i chilometri di un’auto usata sono reali o truccati: storico tagliandi, banche dati, revisioni, segni d’usura e diagnosi centralina.',
    h1: 'Come verificare i chilometri reali di un’auto usata',
    keyword: 'come verificare chilometri auto usata',
    category: 'Verifica',
    excerpt:
      'I metodi concreti per smascherare un contachilometri truccato: documenti, banche dati, usura e diagnosi elettronica.',
    datePublished: '2026-05-23',
    dateModified: '2026-05-23',
    readingMinutes: 6,
    body: (
      <>
        <p>
          Il <strong>contachilometri truccato</strong> è una delle frodi più diffuse sull’usato: bastano pochi minuti per
          “scalare” decine di migliaia di chilometri e alzare il prezzo. Ecco come <strong>verificare i chilometri reali di
          un’auto usata</strong> prima di firmare.
        </p>
        <h2>1. Lo storico dei tagliandi</h2>
        <p>
          Libretto di manutenzione, fatture dell’officina e timbri riportano i km a ogni intervento. Una progressione coerente
          è un buon segno; salti o pagine mancanti sono un campanello d’allarme. Chiedi sempre la cronologia completa.
        </p>
        <h2>2. Le banche dati e le revisioni</h2>
        <p>
          In Italia lo storico delle <strong>revisioni</strong> registra il chilometraggio rilevato a ogni controllo: confrontare
          quei valori con quello attuale smaschera molte manomissioni. Esistono inoltre banche dati e report che ricostruiscono
          la storia chilometrica del veicolo a livello europeo.
        </p>
        <h2>3. I segni d’usura</h2>
        <p>I km dichiarati devono essere coerenti con lo stato dell’auto. Controlla:</p>
        <ul>
          <li>pedaliera e poggiapiedi (gomma consumata = molti km);</li>
          <li>volante, pomello del cambio e bracciolo;</li>
          <li>sedile di guida e tasti più usati;</li>
          <li>usura dei freni e stato generale del vano motore.</li>
        </ul>
        <h2>4. La diagnosi della centralina</h2>
        <p>
          Una lettura elettronica (diagnosi OBD) può rivelare incongruenze tra le centraline e l’odometro, oltre a errori
          memorizzati. È il controllo più tecnico e spesso il più rivelatore: meglio affidarlo a un perito.
        </p>
        <p>
          Diamanti Automobili verifica chilometraggio, storia e documenti su <strong>ogni</strong> auto proposta, con perizia
          tecnica dove serve.{' '}
          <Link to="/come-funziona">Vedi come verifichiamo le auto</Link> o leggi la{' '}
          <Link to="/risorse/controlli-prima-di-comprare-auto-usata">checklist completa prima dell’acquisto</Link>.
        </p>
      </>
    ),
    faqs: [
      {
        q: 'Si può scoprire se i chilometri sono truccati?',
        a: 'Sì, incrociando più fonti: storico tagliandi, chilometraggio registrato alle revisioni, banche dati, segni d’usura e diagnosi della centralina. Una sola fonte non basta, ma insieme rendono molto difficile nascondere una manomissione.',
      },
      {
        q: 'La revisione mostra i chilometri precedenti?',
        a: 'Sì: a ogni revisione viene registrato il chilometraggio. Confrontare quei valori storici con quello attuale è uno dei modi più semplici per individuare un odometro manomesso.',
      },
      {
        q: 'Il contachilometri truccato è reato?',
        a: 'Alterare il chilometraggio per vendere a un prezzo più alto configura una frode. Acquistare con verifiche documentali e tecniche è il modo migliore per tutelarsi.',
      },
    ],
    related: ['controlli-prima-di-comprare-auto-usata', 'auto-usata-privato-o-concessionario', 'importare-auto-dalla-germania'],
  },

  // 4 ─────────────────────────────────────────────────────────────────────
  {
    slug: 'auto-usata-privato-o-concessionario',
    title: 'Comprare auto usata da privato o concessionario: cosa conviene',
    description:
      'Comprare un’auto usata da privato o da concessionario? Differenze su prezzo, garanzia, rischi e tutele, e come scegliere in base al tuo caso.',
    h1: 'Auto usata da privato o da concessionario: cosa conviene davvero',
    keyword: 'comprare auto usata privato o concessionario',
    category: 'Acquisto',
    excerpt:
      'Prezzo, garanzia, rischi e tutele a confronto: quando conviene il privato, quando il concessionario e come ridurre i rischi.',
    datePublished: '2026-05-23',
    dateModified: '2026-05-23',
    readingMinutes: 5,
    body: (
      <>
        <p>
          È la prima domanda di chi cerca un’auto di seconda mano: <strong>meglio comprare da privato o da
          concessionario?</strong> Non esiste una risposta unica, ma capire le differenze ti evita errori costosi.
        </p>
        <h2>Il confronto in sintesi</h2>
        <table>
          <thead>
            <tr><th>Aspetto</th><th>Privato</th><th>Concessionario</th></tr>
          </thead>
          <tbody>
            <tr><td>Prezzo</td><td>Spesso più basso</td><td>Più alto (margine + servizi)</td></tr>
            <tr><td>Garanzia</td><td>Limitata o assente</td><td>Garanzia legale 12&ndash;24 mesi</td></tr>
            <tr><td>Verifiche</td><td>A tuo carico</td><td>In parte già fatte</td></tr>
            <tr><td>Pratiche</td><td>Da gestire</td><td>In genere incluse</td></tr>
            <tr><td>Rischio</td><td>Più alto</td><td>Più contenuto</td></tr>
          </tbody>
        </table>
        <h2>Quando conviene il privato</h2>
        <p>
          Se il prezzo è davvero più basso, l’auto è documentata e te la senti di gestire verifica e passaggio di
          proprietà. Il rovescio della medaglia è l’assenza di garanzia: un guasto importante dopo l’acquisto è a tuo
          carico. Per questo le <Link to="/risorse/verificare-chilometri-auto-usata">verifiche su km e storia</Link> diventano
          essenziali.
        </p>
        <h2>Quando conviene il concessionario</h2>
        <p>
          Quando vuoi più tutele: garanzia legale, auto in genere già controllata, pratiche incluse. Paghi qualcosa in più,
          ma compri tranquillità.
        </p>
        <h2>La terza via: il consulente</h2>
        <p>
          Un <Link to="/risorse/consulente-acquisto-auto-come-funziona">consulente per l’acquisto</Link> unisce i vantaggi di
          entrambi: accede sia al mercato dei privati sia a quello dei professionisti, verifica l’auto come farebbe un
          concessionario serio e tratta il prezzo come faresti tu se ne avessi il tempo e l’esperienza.{' '}
          <Link to="/contatti">Raccontaci cosa cerchi</Link>.
        </p>
      </>
    ),
    faqs: [
      {
        q: 'Comprando da privato ho una garanzia?',
        a: 'Tra privati la garanzia legale del venditore professionista non si applica. Si può concordare una garanzia convenzionale o sottoscrivere polizze guasti, ma di norma il rischio post-vendita è a carico dell’acquirente.',
      },
      {
        q: 'Da concessionario quanto dura la garanzia su un’auto usata?',
        a: 'Di norma 12 mesi, estendibili fino a 24 mesi a seconda dell’accordo. È una tutela prevista per la vendita da venditore professionista.',
      },
      {
        q: 'Come riduco i rischi comprando da privato?',
        a: 'Verifica documenti e gravami, controlla i chilometri reali, fai valutare l’auto da un tecnico e formalizza tutto per iscritto. Oppure affidati a un consulente che esegue questi controlli per te.',
      },
    ],
    related: ['controlli-prima-di-comprare-auto-usata', 'verificare-chilometri-auto-usata', 'consulente-acquisto-auto-come-funziona'],
  },

  // 5 ─────────────────────────────────────────────────────────────────────
  {
    slug: 'permuta-auto-come-funziona',
    title: 'Permuta auto o vendita diretta: come funziona e cosa conviene',
    description:
      'Come funziona la permuta auto, in cosa differisce dalla vendita diretta e quale conviene di più in base al tuo caso. Valutazione, tempi e tutele.',
    h1: 'Permuta auto o vendita diretta: come funziona e cosa conviene',
    keyword: 'permuta auto come funziona',
    category: 'Vendita & Permuta',
    excerpt:
      'Differenze, vantaggi e tempi tra permutare l’auto usata e venderla direttamente, per scegliere la soluzione giusta.',
    datePublished: '2026-05-23',
    dateModified: '2026-05-23',
    readingMinutes: 5,
    body: (
      <>
        <p>
          Quando cambi auto hai due strade per la tua attuale: la <strong>permuta</strong> oppure la <strong>vendita
          diretta</strong>. Capire come funzionano ti aiuta a scegliere quella che ti fa guadagnare di più con meno
          stress.
        </p>
        <h2>Come funziona la permuta</h2>
        <p>
          Nella permuta la tua auto usata entra in scambio mentre ne acquisti un’altra: il suo valore viene{' '}
          <strong>scalato direttamente dal prezzo della nuova</strong>. Un solo interlocutore, una sola pratica, nessun annuncio
          da gestire. È la via più comoda quando stai già comprando un’altra auto.
        </p>
        <h2>Come funziona la vendita diretta</h2>
        <p>
          Qui vendi e basta: ricevi un pagamento per la tua auto, senza obbligo di acquistarne un’altra. È la scelta giusta
          se vuoi liquidità o se non hai ancora deciso cosa comprare.
        </p>
        <h2>Cosa conviene di più?</h2>
        <ul>
          <li><strong>Permuta</strong>: massima comodità, una sola pratica, utile anche fiscalmente perché abbassa l’importo su cui si calcola il passaggio.</li>
          <li><strong>Vendita diretta</strong>: potenzialmente più ricavo se vendi a un privato, ma con più tempo, contatti e gestione a tuo carico.</li>
        </ul>
        <p>
          Attenzione alle valutazioni “lowball”: un operatore che deve guadagnare due volte (sull’usato che ritira e sul
          nuovo che ti vende) tende a sottovalutare la permuta. Per questo conta partire da una <strong>quotazione reale di
          mercato</strong>.
        </p>
        <p>
          Diamanti Automobili valuta gratis la tua auto e ti lascia scegliere: permuta integrata o acquisto diretto con
          pagamento rapido.{' '}
          <Link to="/valuta-la-tua-auto">Richiedi la valutazione gratuita</Link>.
        </p>
      </>
    ),
    faqs: [
      {
        q: 'Conviene di più permutare o vendere l’auto?',
        a: 'La permuta è più comoda e ha un piccolo vantaggio fiscale sul passaggio; la vendita diretta a un privato può dare un ricavo maggiore ma richiede tempo e gestione. Dipende da quanto vale il tuo tempo e dalla differenza di prezzo reale.',
      },
      {
        q: 'Come viene calcolato il valore di permuta?',
        a: 'Sul valore reale di mercato dell’auto, considerando modello, anno, chilometri, stato e domanda. Una valutazione seria parte dalle quotazioni effettive, non da stime al ribasso.',
      },
      {
        q: 'Posso permutare un’auto con finanziamento in corso?',
        a: 'Sì. Si può estinguere la posizione residua presso la finanziaria e riconoscere l’eventuale differenza positiva. È una pratica gestibile insieme alla permuta o alla vendita.',
      },
    ],
    related: ['consulente-acquisto-auto-come-funziona', 'auto-usata-privato-o-concessionario', 'controlli-prima-di-comprare-auto-usata'],
  },

  // 6 ─────────────────────────────────────────────────────────────────────
  {
    slug: 'controlli-prima-di-comprare-auto-usata',
    title: 'Controlli prima di comprare un’auto usata: la checklist completa',
    description:
      'La checklist dei controlli prima di comprare un’auto usata: documenti, gravami e fermi, chilometri, meccanica, carrozzeria e test drive.',
    h1: 'Controlli prima di comprare un’auto usata: la checklist completa',
    keyword: 'controlli prima di comprare auto usata',
    category: 'Verifica',
    excerpt:
      'Documenti, gravami, chilometri, meccanica, carrozzeria e test drive: tutto ciò che va verificato prima di firmare.',
    datePublished: '2026-05-23',
    dateModified: '2026-05-23',
    readingMinutes: 7,
    body: (
      <>
        <p>
          Prima di firmare un’auto usata servono pochi controlli mirati per evitare brutte sorprese. Ecco la{' '}
          <strong>checklist completa</strong>, divisa per aree.
        </p>
        <h2>1. Documenti</h2>
        <ul>
          <li>Carta di circolazione (libretto) intestata e coerente con il veicolo;</li>
          <li>Certificato di Proprietà (anche in formato digitale);</li>
          <li>Corrispondenza tra numero di telaio sul libretto e quello sull’auto;</li>
          <li>Documento d’identità del venditore uguale all’intestatario.</li>
        </ul>
        <h2>2. Gravami, fermi e ipoteche</h2>
        <p>
          Una <strong>visura PRA</strong> rivela fermi amministrativi, ipoteche o finanziamenti non estinti: comprare un’auto
          con un fermo significa non poterla immatricolare a tuo nome. È un controllo da non saltare mai.
        </p>
        <h2>3. Chilometri e storia</h2>
        <p>
          Verifica che i chilometri siano reali incrociando tagliandi, revisioni e usura. Approfondisci nella guida{' '}
          <Link to="/risorse/verificare-chilometri-auto-usata">come verificare i chilometri reali</Link>.
        </p>
        <h2>4. Meccanica ed elettronica</h2>
        <ul>
          <li>Avviamento a freddo e rumorosità del motore;</li>
          <li>Spie sul cruscotto e diagnosi della centralina;</li>
          <li>Stato di freni, gomme (usura uniforme) e sospensioni;</li>
          <li>Liquidi e perdite sotto il veicolo.</li>
        </ul>
        <h2>5. Carrozzeria e vernice</h2>
        <p>
          Un <strong>misuratore di spessore vernice</strong> rivela riverniciature e riparazioni dopo incidenti. Controlla
          allineamento delle parti, fughe regolari e tracce di ruggine.
        </p>
        <h2>6. Test drive</h2>
        <p>
          Guida su tratti diversi: tenuta in frenata, sterzo dritto, cambio fluido, niente vibrazioni anomale. Il test drive
          fa emergere problemi che da fermi non si notano.
        </p>
        <p>
          Sono molti controlli e alcuni richiedono strumenti e occhio esperto: per questo Diamanti Automobili li esegue su ogni
          auto proposta.{' '}
          <Link to="/contatti">Richiedi una verifica o una consulenza</Link>.
        </p>
      </>
    ),
    faqs: [
      {
        q: 'Quali documenti controllare prima di comprare un’auto usata?',
        a: 'Carta di circolazione e Certificato di Proprietà intestati al venditore, corrispondenza del numero di telaio e una visura PRA per escludere fermi, ipoteche e finanziamenti non estinti.',
      },
      {
        q: 'Cos’è la visura PRA e perché è importante?',
        a: 'È il documento che certifica intestazione e situazione giuridica del veicolo: rivela fermi amministrativi, ipoteche e gravami. Senza, rischi di comprare un’auto che non potrai immatricolare a tuo nome.',
      },
      {
        q: 'Vale la pena far controllare l’auto da un tecnico?',
        a: 'Sì, soprattutto tra privati: una perizia tecnica e una diagnosi della centralina costano poco rispetto al rischio di un guasto importante non dichiarato.',
      },
    ],
    related: ['verificare-chilometri-auto-usata', 'auto-usata-privato-o-concessionario', 'consulente-acquisto-auto-come-funziona'],
  },

  // 7 ─────────────────────────────────────────────────────────────────────
  {
    slug: 'consulente-auto-quanto-si-risparmia',
    title: 'Vale la pena un consulente auto? Quanto si risparmia davvero',
    description:
      'Quanto si risparmia con un consulente per l’acquisto auto (auto broker): da dove arriva il risparmio, quando conviene la parcella e quando no.',
    h1: 'Vale la pena un consulente auto? Ecco quanto si risparmia davvero',
    keyword: 'vale la pena consulente auto',
    category: 'Guida',
    excerpt:
      'Da dove arriva il risparmio reale con un auto broker, come si confronta con la parcella e in quali casi conviene.',
    datePublished: '2026-05-23',
    dateModified: '2026-05-23',
    readingMinutes: 5,
    body: (
      <>
        <p>
          La domanda è legittima: se pago un <strong>consulente per l’acquisto auto</strong>, ci guadagno davvero? La
          risposta dipende da quattro voci di risparmio che spesso, sommate, superano la parcella.
        </p>
        <h2>Da dove arriva il risparmio</h2>
        <ul>
          <li><strong>Trattativa.</strong> Chi tratta auto ogni giorno spunta sconti che un privato raramente ottiene.</li>
          <li><strong>Errori evitati.</strong> Un’auto con km truccati, sinistri non dichiarati o gravami può costare migliaia di euro: la verifica li intercetta prima.</li>
          <li><strong>Tempo.</strong> Settimane tra annunci, telefonate, visite e pratiche hanno un valore concreto.</li>
          <li><strong>Accesso al mercato.</strong> Occasioni fuori dai portali pubblici, in Italia e in Europa, e la possibilità di importare dove conviene.</li>
        </ul>
        <h2>Quanto costa, in proporzione</h2>
        <p>
          La parcella è in genere una cifra fissa o una piccola percentuale sul valore dell’auto. Su un acquisto di
          medio-alto valore, lo sconto in trattativa da solo può coprirla; il resto (verifica, tempo, tranquillità) è
          margine netto a tuo favore.
        </p>
        <h2>Quando conviene davvero</h2>
        <p>
          Conviene soprattutto sopra una certa soglia di spesa (indicativamente dai 15.000&euro; in su), quando cerchi un
          modello specifico, quando importi dall’estero o quando semplicemente non hai tempo da perdere. Sotto quella soglia
          i margini di risparmio si riducono ed è più una questione di comodità.
        </p>
        <p>
          Diamanti Automobili lavora sulla <Link to="/risorse/permuta-auto-come-funziona">valutazione reale della permuta</Link> e
          su una trattativa professionale.{' '}
          <Link to="/contatti">Raccontaci cosa cerchi</Link> e capiamo insieme se conviene.
        </p>
      </>
    ),
    faqs: [
      {
        q: 'Quanto si risparmia mediamente con un consulente auto?',
        a: 'Dipende dall’auto e dal caso: il risparmio nasce da trattativa, errori evitati, tempo e accesso a occasioni migliori. Su acquisti di valore medio-alto, lo sconto in trattativa spesso copre già la parcella.',
      },
      {
        q: 'Il consulente conviene anche per auto economiche?',
        a: 'Sotto i 15.000€ circa i margini di risparmio si riducono: il valore diventa soprattutto la comodità e la sicurezza della verifica, più che il risparmio puro.',
      },
    ],
    related: ['consulente-acquisto-auto-come-funziona', 'auto-usata-privato-o-concessionario', 'km-0-aziendale-usato-nuovo-differenze'],
  },

  // 8 ─────────────────────────────────────────────────────────────────────
  {
    slug: 'km-0-aziendale-usato-nuovo-differenze',
    title: 'Km 0, aziendale, usato o nuovo: differenze e cosa conviene',
    description:
      'Differenze tra auto nuova, km 0, aziendale e usata: prezzo, garanzia, svalutazione e disponibilità a confronto, per scegliere cosa conviene.',
    h1: 'Km 0, aziendale, usato o nuovo: le differenze e cosa conviene',
    keyword: 'differenza km 0 aziendale usato',
    category: 'Acquisto',
    excerpt:
      'Prezzo, garanzia, svalutazione e disponibilità di nuovo, km 0, aziendale e usato messi a confronto.',
    datePublished: '2026-05-23',
    dateModified: '2026-05-23',
    readingMinutes: 5,
    body: (
      <>
        <p>
          “Nuovo, km 0, aziendale o usato?” è la scelta che più incide su prezzo e tranquillità. Ecco cosa cambia davvero
          tra le quattro formule.
        </p>
        <h2>Le quattro formule a confronto</h2>
        <table>
          <thead>
            <tr><th>Tipologia</th><th>Prezzo</th><th>Garanzia</th><th>Km</th></tr>
          </thead>
          <tbody>
            <tr><td>Nuovo</td><td>Più alto</td><td>Piena (24+ mesi)</td><td>0</td></tr>
            <tr><td>Km 0</td><td>Sconto sul listino</td><td>Piena di fabbrica</td><td>Pochissimi</td></tr>
            <tr><td>Aziendale</td><td>Conveniente</td><td>Spesso residua</td><td>Medio-alti, ma tagliandati</td></tr>
            <tr><td>Usato</td><td>Variabile</td><td>Legale (se da rivenditore)</td><td>Variabili</td></tr>
          </tbody>
        </table>
        <h2>Km 0: nuovo travestito</h2>
        <p>
          È un’auto immatricolata dal concessionario ma di fatto mai usata: la prendi con uno <strong>sconto</strong> rispetto
          al listino, garanzia di fabbrica piena e percorrenza minima. Lo svantaggio è la scelta limitata su colori e
          allestimenti.
        </p>
        <h2>Aziendale: il miglior rapporto valore/prezzo</h2>
        <p>
          Ex auto di flotte o società: più chilometri, ma manutenzione regolare e prezzo interessante. Da verificare con
          attenzione storia e usura, perché l’utilizzo può essere stato intenso.
        </p>
        <h2>La svalutazione, la voce nascosta</h2>
        <p>
          Il nuovo perde valore più in fretta nei primi due anni. Km 0 e aziendali “assorbono” parte di quella svalutazione:
          spesso è lì che si trova il vero affare. Per non sbagliare, conta verificare bene il singolo veicolo &mdash; vedi la{' '}
          <Link to="/risorse/controlli-prima-di-comprare-auto-usata">checklist prima dell’acquisto</Link>.
        </p>
        <p><Link to="/servizi">Diamanti cerca su tutte e quattro le formule</Link> per trovare quella giusta per te.</p>
      </>
    ),
    faqs: [
      {
        q: 'Cosa significa auto km 0?',
        a: 'È un’auto immatricolata dal concessionario ma sostanzialmente non utilizzata, con pochissimi chilometri. Si acquista con uno sconto sul listino mantenendo la garanzia di fabbrica.',
      },
      {
        q: 'Conviene di più km 0 o aziendale?',
        a: 'La km 0 è quasi un nuovo scontato con pochissimi km; l’aziendale ha più chilometri ma prezzo più basso e manutenzione regolare. Dipende da budget e percorrenza prevista.',
      },
      {
        q: 'L’auto aziendale ha la garanzia?',
        a: 'Spesso conserva la garanzia di fabbrica residua; se acquistata da un rivenditore professionista si aggiunge la garanzia legale. Va sempre verificato caso per caso.',
      },
    ],
    related: ['auto-usata-privato-o-concessionario', 'consulente-acquisto-auto-come-funziona', 'finanziamento-auto-120-mesi'],
  },

  // 9 ─────────────────────────────────────────────────────────────────────
  {
    slug: 'finanziamento-auto-120-mesi',
    title: 'Finanziamento auto fino a 120 mesi: come funziona e quando conviene',
    description:
      'Come funziona il finanziamento auto fino a 120 mesi: rata, anticipo, TAN e TAEG, maxirata finale e quando conviene davvero rateizzare l’acquisto.',
    h1: 'Finanziamento auto fino a 120 mesi: come funziona e quando conviene',
    keyword: 'finanziamento auto 120 mesi',
    category: 'Acquisto',
    excerpt:
      'Rata, anticipo, TAN/TAEG e maxirata: come leggere un finanziamento auto lungo e capire se conviene.',
    datePublished: '2026-05-23',
    dateModified: '2026-05-23',
    readingMinutes: 5,
    body: (
      <>
        <p>
          Diluire l’acquisto su molti mesi rende accessibile un’auto migliore con una rata leggera. Ma un{' '}
          <strong>finanziamento auto fino a 120 mesi</strong> va letto bene: ecco le voci che contano.
        </p>
        <h2>Le voci da guardare</h2>
        <ul>
          <li><strong>Anticipo</strong>: quanto versi subito (a volte anche zero).</li>
          <li><strong>Durata</strong>: fino a 120 mesi (10 anni); più è lunga, più la rata scende ma cresce il costo totale.</li>
          <li><strong>TAN</strong>: il tasso d’interesse puro.</li>
          <li><strong>TAEG</strong>: il costo totale reale (interessi + spese): è <strong>questo</strong> il numero da confrontare tra offerte.</li>
          <li><strong>Maxirata finale</strong>: una rata grande a fine piano che alleggerisce le mensili (tipica delle formule “balloon”).</li>
        </ul>
        <h2>Quando conviene la durata lunga</h2>
        <p>
          Conviene quando ti serve una <strong>rata sostenibile</strong> per accedere a un’auto di livello superiore senza
          pesare sul bilancio mensile. Lo svantaggio è il costo complessivo più alto: se puoi, un anticipo o una durata più
          breve riducono gli interessi.
        </p>
        <h2>Cosa serve per ottenerlo</h2>
        <p>
          Documento, codice fiscale e una dimostrazione di reddito; la finanziaria valuta il merito creditizio. La risposta
          arriva di norma in 24&ndash;48 ore.
        </p>
        <p>
          Diamanti lavora con più istituti per costruire la rata su misura, anche in abbinata alla{' '}
          <Link to="/risorse/permuta-auto-come-funziona">permuta della tua auto attuale</Link>.{' '}
          <Link to="/contatti">Chiedi una simulazione</Link>.
        </p>
      </>
    ),
    faqs: [
      {
        q: 'Conviene un finanziamento auto a 120 mesi?',
        a: 'Conviene se ti serve una rata bassa per accedere a un’auto migliore. In cambio paghi più interessi nel tempo: con un anticipo o una durata più breve il costo totale si riduce. Confronta sempre il TAEG.',
      },
      {
        q: 'Qual è la differenza tra TAN e TAEG?',
        a: 'Il TAN è il tasso d’interesse puro; il TAEG include anche spese e oneri ed esprime il costo totale reale del finanziamento. Per confrontare le offerte si guarda il TAEG.',
      },
      {
        q: 'Posso finanziare e permutare insieme?',
        a: 'Sì: la permuta abbassa l’importo da finanziare e quindi la rata. Le due cose si gestiscono nella stessa pratica.',
      },
    ],
    related: ['permuta-auto-come-funziona', 'km-0-aziendale-usato-nuovo-differenze', 'consulente-acquisto-auto-come-funziona'],
  },

  // 10 ────────────────────────────────────────────────────────────────────
  {
    slug: 'passaggio-di-proprieta-auto-usata',
    title: 'Passaggio di proprietà auto: documenti, costi e come funziona',
    description:
      'Come fare il passaggio di proprietà di un’auto usata: documenti necessari, dove farlo, costi (IPT, emolumenti, bolli) e tempistiche.',
    h1: 'Passaggio di proprietà auto usata: documenti, costi e procedura',
    keyword: 'passaggio di proprietà auto',
    category: 'Acquisto',
    excerpt:
      'Documenti, dove farlo, costi e tempi del passaggio di proprietà di un’auto usata, spiegati in modo semplice.',
    datePublished: '2026-05-23',
    dateModified: '2026-05-23',
    readingMinutes: 5,
    body: (
      <>
        <p>
          Il <strong>passaggio di proprietà</strong> trasferisce ufficialmente l’auto dal venditore a te. È obbligatorio e
          va fatto entro 60 giorni dalla firma. Ecco come funziona.
        </p>
        <h2>I documenti necessari</h2>
        <ul>
          <li>Atto di vendita con <strong>autentica della firma</strong> del venditore;</li>
          <li>Carta di circolazione (libretto);</li>
          <li>Certificato di Proprietà (cartaceo o digitale &ndash; CDPD);</li>
          <li>Documento d’identità e codice fiscale di venditore e acquirente.</li>
        </ul>
        <h2>Dove si fa</h2>
        <p>
          Allo <strong>Sportello Telematico dell’Automobilista (STA)</strong>: ACI/PRA, Motorizzazione, agenzie di pratiche
          auto o delegazioni abilitate. L’agenzia gestisce autentica e registrazione in un unico passaggio.
        </p>
        <h2>Quanto costa</h2>
        <p>
          Il costo varia in base a <strong>provincia</strong> e <strong>potenza</strong> del veicolo e si compone di:
        </p>
        <ul>
          <li><strong>IPT</strong> (Imposta Provinciale di Trascrizione), la voce principale e variabile;</li>
          <li>emolumenti ACI e diritti della Motorizzazione;</li>
          <li>imposte di bollo;</li>
          <li>eventuale costo dell’agenzia.</li>
        </ul>
        <h2>Tempi</h2>
        <p>
          Con un’agenzia la pratica si chiude in genere in giornata; ricevi il <strong>tagliando di aggiornamento</strong> da
          conservare con il libretto. Prima del passaggio, ricordati di <Link to="/risorse/controlli-prima-di-comprare-auto-usata">verificare gravami e fermi con la visura</Link>.
        </p>
        <p>
          Acquistando con Diamanti, <Link to="/servizi">pratiche e passaggio sono gestiti da noi</Link>: tu firmi e ricevi
          l’auto pronta all’uso.
        </p>
      </>
    ),
    faqs: [
      {
        q: 'Quanto costa il passaggio di proprietà di un’auto?',
        a: 'Dipende da provincia e potenza del veicolo: la voce principale è l’IPT, a cui si aggiungono emolumenti ACI, diritti Motorizzazione, imposte di bollo ed eventuale costo dell’agenzia.',
      },
      {
        q: 'Quali documenti servono per il passaggio di proprietà?',
        a: 'Atto di vendita con firma autenticata, carta di circolazione, Certificato di Proprietà (anche digitale) e documenti d’identità di venditore e acquirente.',
      },
      {
        q: 'Entro quanto va fatto il passaggio di proprietà?',
        a: 'Entro 60 giorni dalla data dell’atto di vendita con firma autenticata.',
      },
    ],
    related: ['controlli-prima-di-comprare-auto-usata', 'garanzia-auto-usata-come-funziona', 'auto-usata-privato-o-concessionario'],
  },

  // 11 ────────────────────────────────────────────────────────────────────
  {
    slug: 'garanzia-auto-usata-come-funziona',
    title: 'Garanzia auto usata: come funziona (legale e convenzionale)',
    description:
      'Come funziona la garanzia su un’auto usata: garanzia legale dal rivenditore, durata, cosa copre, differenze con l’acquisto tra privati e polizze.',
    h1: 'Garanzia auto usata: come funziona e cosa copre',
    keyword: 'garanzia auto usata',
    category: 'Acquisto',
    excerpt:
      'Garanzia legale, durata, cosa copre e cosa cambia tra acquisto da concessionario e tra privati.',
    datePublished: '2026-05-23',
    dateModified: '2026-05-23',
    readingMinutes: 5,
    body: (
      <>
        <p>
          La <strong>garanzia su un’auto usata</strong> cambia molto a seconda di <em>chi</em> te la vende. Capirlo prima di
          firmare ti evita brutte sorprese.
        </p>
        <h2>Acquisto da rivenditore professionista</h2>
        <p>
          Quando compri da un concessionario o rivenditore, vale la <strong>garanzia legale di conformità</strong>: copre i
          difetti non dichiarati presenti al momento della consegna, per una durata che per l’usato va in genere da{' '}
          <strong>12 a 24 mesi</strong> a seconda dell’accordo. Il venditore deve riparare o sostituire le parti difettose
          coperte.
        </p>
        <h2>Acquisto tra privati</h2>
        <p>
          Tra privati la garanzia legale di conformità <strong>non si applica</strong>. Resta la garanzia per vizi del Codice
          Civile, ma è limitata nel tempo e spesso esclusa per accordo. In pratica, comprando da privato il rischio
          post-vendita è quasi tutto a tuo carico: per questo le{' '}
          <Link to="/risorse/controlli-prima-di-comprare-auto-usata">verifiche pre-acquisto</Link> sono decisive.
        </p>
        <h2>Le polizze guasti</h2>
        <p>
          Esistono coperture facoltative (estensioni di garanzia, polizze guasti) che tutelano da rotture meccaniche ed
          elettroniche per un periodo definito. Utili soprattutto sull’usato meno recente o con molti km.
        </p>
        <h2>Cosa copre (e cosa no)</h2>
        <p>
          La garanzia copre i difetti, non l’usura normale (pastiglie, gomme, tagliandi). Leggi sempre cosa è incluso ed
          escluso e conserva la documentazione.
        </p>
        <p>
          Con Diamanti, ogni auto è verificata prima dell’acquisto e ti aiutiamo a inquadrare la garanzia più adatta.{' '}
          <Link to="/contatti">Parlane con un consulente</Link>.
        </p>
      </>
    ),
    faqs: [
      {
        q: 'Quanto dura la garanzia su un’auto usata?',
        a: 'Acquistando da un rivenditore professionista, la garanzia legale per l’usato dura in genere da 12 a 24 mesi a seconda dell’accordo. Tra privati non si applica la garanzia legale di conformità.',
      },
      {
        q: 'Comprando da privato ho qualche garanzia?',
        a: 'Solo la garanzia per vizi del Codice Civile, limitata nel tempo e spesso esclusa contrattualmente. Conviene verificare bene l’auto prima e valutare una polizza guasti.',
      },
      {
        q: 'La garanzia copre i tagliandi e l’usura?',
        a: 'No: copre i difetti non dichiarati, non la manutenzione ordinaria e le parti soggette a usura come pastiglie, gomme e filtri.',
      },
    ],
    related: ['auto-usata-privato-o-concessionario', 'passaggio-di-proprieta-auto-usata', 'controlli-prima-di-comprare-auto-usata'],
  },
];

export const getArticle = (slug: string): Article | undefined =>
  ARTICLES.find((a) => a.slug === slug);
