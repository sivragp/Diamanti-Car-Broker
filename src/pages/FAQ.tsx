import { useState } from 'react';
import { ChevronDown, MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';

const FAQS = [
  {
    q: 'Quanto costa il vostro servizio?',
    a: 'Il costo è flat o a percentuale a seconda della tipologia di ricerca e parte da 499€. Questo costo viene spesso ammortizzato grazie alla negoziazione che facciamo con il venditore, riuscendo a farti ottenere sconti che da privato difficilmente otterresti.',
  },
  {
    q: 'Accettate la mia auto in permuta?',
    a: "Sì. Valutiamo gratuitamente la tua auto attuale ai valori reali di mercato e ce ne occupiamo noi: il valore di permuta viene scalato direttamente dal prezzo della nuova. Niente annunci, niente telefonate da privati, niente perditempo: tu ci consegni le chiavi della vecchia e ricevi quelle della nuova.",
  },
  {
    q: 'Posso finanziare l\'auto? Fino a quanti mesi?',
    a: 'Sì, offriamo soluzioni di finanziamento fino a 120 mesi attraverso i nostri partner bancari selezionati. La rata viene costruita su misura sul tuo budget mensile, con risposta in 24-48 ore. Possiamo lavorare anche su pratiche con anticipo zero o con maxi-rata finale.',
  },
  {
    q: "Chi paga l'auto, io o voi?",
    a: "L'auto viene pagata sempre da te direttamente al venditore (o tramite noi in caso di importazione delegata o di finanziamento gestito). Noi gestiamo la sicurezza del pagamento e verifichiamo che l'auto sia effettivamente esistente e libera da gravami prima che tu faccia il bonifico.",
  },
  {
    q: "Cosa succede se l'auto ha un problema dopo l'acquisto?",
    a: "Tutte le auto selezionate tramite concessionari hanno 12-24 mesi di garanzia legale. Se l'acquisto è tramite privato, verifichiamo la possibilità di sottoscrivere polizze guasti accessorie per darti la massima tranquillità. In più, il primo tagliando dopo 5.000 km è incluso nel nostro servizio.",
  },
  {
    q: 'Il primo tagliando è davvero gratuito?',
    a: "Sì, te lo offriamo noi. Dopo i primi 5.000 km percorsi con la tua nuova auto, il primo tagliando completo viene eseguito presso officine convenzionate selezionate da noi: cambio olio, sostituzione filtri e controlli previsti dal libretto. È un segnale concreto che il nostro rapporto non finisce alla consegna.",
  },
  {
    q: 'In quali zone d\'Italia consegnate?',
    a: "Consegniamo in tutta Italia, isole comprese: da Bolzano a Trapani, da Cagliari a Trieste. Organizziamo trasporto sicuro e assicurato fino al tuo indirizzo. L'auto arriva immatricolata, lavata, con pieno fatto e pronta a partire: tu firmi le carte e la guidi.",
  },
  {
    q: 'Cercate auto anche in Germania?',
    a: 'Assolutamente sì. Siamo esperti di importazione tedesca (mercato più vasto e trasparente). Gestiamo noi tutto il processo: perizia in loco, trasporto con bisarca e immatricolazione con targhe italiane.',
  },
  {
    q: 'Perché dovrei pagare un consulente invece di cercare da solo?',
    a: 'Per lo stesso motivo per cui ti affidi a un tecnico per ristrutturare casa. Noi abbiamo accesso a periti, strumenti di diagnosi e database km. Ti salviamo da fregature che potrebbero costarti migliaia di euro in riparazioni impreviste.',
  },
  {
    q: 'Qual è il budget minimo per una ricerca?',
    a: 'Generalmente lavoriamo su ricerche per auto con budget superiore ai 15.000€. Sotto questa soglia, i margini di risparmio e le garanzie qualitative sono più difficili da blindare.',
  },
];

const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a }
  }))
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-surface min-h-screen font-sans text-text pt-[74px]">
      <SEO
        title="Domande frequenti — Consulente acquisto auto | Diamanti Automobili"
        description="Quanto costa il servizio? Come funziona la ricerca auto? Importate dalla Germania? Tutte le risposte sul nostro servizio di consulenza per l'acquisto di auto."
        path="/faq"
        jsonLd={FAQ_JSONLD}
        jsonLdId="faq"
      />

      {/* 1. HERO unificato */}
      <PageHero
        eyebrow="Supporto"
        title="Domande frequenti"
        subtitle="Tutte le risposte sul servizio Diamanti Automobili: come funziona, quanto costa, come gestiamo verifica, importazione e consegna. Trasparenza totale, prima di iniziare."
      />

      {/* 2. FAQ ACCORDION */}
      <section className="py-20 bg-[#f6f8fb] border-t border-[#e6ebf2]">
        <div className="ds-container max-w-3xl">
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white border border-[#e6ebf2] rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#f6f8fb] transition-colors"
                >
                  <span className="font-bold text-[#061629] text-[15px] pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`text-muted shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                    size={20}
                  />
                </button>
                {openIndex === idx && (
                  <div className="px-6 pb-6 text-[14px] text-muted leading-relaxed border-t border-[#f0f3f7] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CARD "Non hai trovato la risposta?" */}
      <section className="py-20 bg-white">
        <div className="ds-container max-w-2xl">
          <div className="bg-[#061629] rounded-lg p-10 md:p-14 text-center text-white shadow-[0_16px_34px_-26px_rgba(6,22,41,0.35)]">
            <div className="w-14 h-14 rounded-full bg-white/10 text-white flex items-center justify-center mx-auto mb-6">
              <MessageSquare size={24} strokeWidth={1.6} />
            </div>
            <h3 className="text-[24px] md:text-[28px] font-extrabold mb-3 leading-tight">
              Non hai trovato la risposta?
            </h3>
            <p className="text-[15px] text-white/72 mb-8 leading-relaxed">
              Siamo pronti a risolvere ogni tuo dubbio specifico. Scrivici e ti rispondiamo entro 24 ore.
            </p>
            <Link to="/contatti" className="inline-flex h-[48px] px-7 items-center justify-center rounded-full bg-white hover:bg-[#eef3f8] text-[#061629] font-bold transition-colors text-[14px] gap-2">
              Contattaci
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
