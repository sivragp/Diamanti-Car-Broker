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
];

export const getArticle = (slug: string): Article | undefined =>
  ARTICLES.find((a) => a.slug === slug);
