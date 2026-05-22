import { Search, ShieldCheck, Settings, MapPin, CheckCircle2, X, Star, Target, Check, ChevronDown, Repeat, CreditCard, Truck, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SEO, SITE_URL } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { ContactCTA } from '../components/ContactCTA';

const SERVICES_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Consulenza per l\'acquisto di auto',
  name: 'Ricerca, verifica e acquisto auto su misura',
  description: 'Servizio di consulenza per l\'acquisto di auto: briefing esigenze, ricerca personalizzata sul mercato italiano ed europeo, perizia tecnica, negoziazione, gestione pratiche e consegna a domicilio.',
  provider: {
    '@type': 'AutomotiveBusiness',
    '@id': `${SITE_URL}/#business`,
    name: 'Diamanti Automobili'
  },
  areaServed: { '@type': 'Country', name: 'Italia' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servizi di consulenza acquisto auto',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ricerca auto su misura' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Verifica tecnica e perizia auto usata' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Importazione auto dalla Germania' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Negoziazione e gestione pratiche' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Consegna auto a domicilio in tutta Italia' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Permuta e valutazione auto usata' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Finanziamento auto fino a 120 mesi' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Primo tagliando incluso dopo 5.000 km' } }
    ]
  }
};

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-surface min-h-screen font-sans text-text pt-[74px]">
      <SEO
        title="Servizi — Ricerca auto, permuta, finanziamenti e consegna | Diamanti Automobili"
        description="Ricerca auto su misura, perizia tecnica, importazione, permuta, finanziamenti fino a 120 mesi, consegna a domicilio e primo tagliando incluso. I servizi del nostro consulente acquisto auto a Roma e in tutta Italia."
        path="/servizi"
        jsonLd={SERVICES_JSONLD}
        jsonLdId="services"
      />

      {/* 1. HERO unificato */}
      <PageHero
        image="/images/audi-a5-viale.png"
        eyebrow="I nostri servizi"
        title="I servizi di Diamanti Automobili"
        subtitle="Una consulenza personalizzata, non vincolata a un singolo marchio o al magazzino di una concessionaria: cerchiamo l'auto giusta per te, la verifichiamo e te la consegniamo. In tutta Italia."
      />

      {/* 2. COSA FACCIAMO */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="ds-container text-center relative z-10">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Search, title: 'Ricerca auto su misura', text: "Troviamo l'auto giusta su tutto il mercato — nuova, usata, km 0 o di importazione — in base a esigenze, budget e preferenze." },
              { icon: ShieldCheck, title: "Consulenza all'acquisto", text: 'Ti orientiamo nella scelta tra modelli, allestimenti, motorizzazioni e migliori opportunità di mercato.' },
              { icon: CheckCircle2, title: 'Verifica e perizia', text: 'Controlliamo storia, chilometraggio reale, documenti, condizioni meccaniche ed estetiche di ogni veicolo proposto.' },
              { icon: Settings, title: 'Gestione completa', text: "Negoziazione, pratiche burocratiche, contratto e consegna a domicilio: chiavi in mano." }
            ].map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-8 text-center flex flex-col items-center hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-shadow bg-white">
                <div className="w-14 h-14 rounded-full bg-[#061629] text-white flex items-center justify-center mb-6">
                  <item.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-[17px] font-bold text-[#061629] mb-3">{item.title}</h3>
                <p className="text-[13px] text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. I NOSTRI SERVIZI NEL DETTAGLIO */}
      <section className="py-20 bg-[#f6f8fb] border-t border-gray-100">
        <div className="ds-container">
          <h2 className="text-center text-[36px] font-extrabold text-[#061629] mb-16">
            I nostri servizi nel dettaglio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-14 gap-x-8">
            {[
              { num: 1, title: 'Briefing e analisi esigenze', text: "Ascoltiamo necessità, priorità, utilizzo e budget per definire il profilo dell'auto giusta per te, senza compromessi." },
              { num: 2, title: 'Ricerca personalizzata sul mercato', text: 'Attiviamo una rete selezionata di canali in Italia e in Europa, anche fuori dai portali pubblici, per individuare le migliori opportunità.' },
              { num: 3, title: 'Selezione delle proposte', text: 'Ti presentiamo le auto candidate con scheda tecnica, foto e una valutazione chiara di ogni dettaglio rilevante.' },
              { num: 4, title: 'Verifica documentale e qualitativa', text: 'Controlliamo documenti, chilometraggio reale, storia, manutenzione e condizioni del veicolo con rapporti dettagliati.' },
              { num: 5, title: "Negoziazione e supporto all'acquisto", text: 'Trattiamo per te prezzo e condizioni, tutelando i tuoi interessi in ogni fase della trattativa.' },
              { num: 6, title: 'Consegna a domicilio e assistenza', text: "Gestiamo pratiche e passaggio di proprietà e ti consegniamo l'auto a casa tua. L'assistenza continua anche dopo." }
            ].map((step, i) => (
              <div key={i} className="relative flex flex-col">
                <div className="bg-white border border-gray-100 p-8 pt-10 h-full flex flex-col shadow-sm">
                  <div className="absolute -top-[20px] left-4 w-12 h-12 rounded-full bg-[#061629] text-white font-sans font-bold text-[18px] flex items-center justify-center border-[4px] border-[#f6f8fb]">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-[#061629] text-[16px] mb-3 leading-tight">{step.title}</h3>
                  <p className="text-[14px] text-muted leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 VANTAGGI INCLUSI — 4 leve commerciali in dettaglio */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="ds-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#0c438f] mb-4">Vantaggi inclusi</p>
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#061629] mb-5 leading-tight">
              Più di una consulenza: <span className="text-[#0c438f]">una soluzione completa</span>
            </h2>
            <p className="text-[16px] text-muted leading-relaxed">
              Con Diamanti Automobili non compri solo un'auto: ricevi un pacchetto di servizi pensati per renderti la vita più semplice, prima e dopo la consegna.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Repeat,
                tag: 'Permuta e valutazione',
                title: 'Ritiriamo la tua auto attuale',
                text: "Valutiamo la tua auto ai valori reali di mercato e te la ritiriamo senza che tu debba mettere annunci o gestire trattative con privati. Il valore di permuta viene scalato direttamente dal prezzo della nuova: meno burocrazia, meno tempo perso.",
                bullets: ['Valutazione tecnica gratuita', 'Ritiro ovunque in Italia', 'Pagamento scalato dal prezzo finale']
              },
              {
                icon: CreditCard,
                tag: 'Finanziamenti su misura',
                title: 'Rate fino a 120 mesi con i migliori partner',
                text: "Lavoriamo con i principali istituti finanziari per offrirti soluzioni di credito personalizzate fino a 120 mesi. Rata leggera e accesso a un'auto di livello superiore senza sforare il budget mensile.",
                bullets: ['Piani fino a 120 mesi', 'Tasso competitivo dedicato', 'Risposta in 24-48 ore']
              },
              {
                icon: Truck,
                tag: 'Consegna a domicilio',
                title: "Ti consegniamo l'auto ovunque in Italia",
                text: "Dalla Sicilia al Trentino: organizziamo trasporto sicuro e assicurato fino al tuo indirizzo. L'auto arriva immatricolata, lavata, pieno fatto e pronta a partire. Tu firmi le chiavi e la guidi.",
                bullets: ['Trasporto assicurato', 'Targa italiana inclusa', 'Auto pronta alla guida']
              },
              {
                icon: Wrench,
                tag: 'Tagliando incluso',
                title: 'Il primo tagliando dopo 5.000 km lo paghiamo noi',
                text: "Per dimostrarti che siamo presenti anche dopo la consegna, ti offriamo il primo tagliando della tua nuova auto presso officine selezionate. Filtri, olio, controlli: tutto incluso nel servizio.",
                bullets: ['Officine convenzionate', 'Controlli completi inclusi', 'Assistenza dopo la vendita']
              }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10 shadow-[0_12px_28px_-24px_rgba(6,22,41,0.32)] hover:shadow-[0_18px_42px_-26px_rgba(6,22,41,0.38)] transition-shadow flex flex-col">
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-14 h-14 rounded-full bg-[#0b2b5b] text-white flex items-center justify-center shrink-0">
                    <item.icon size={24} strokeWidth={1.6} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="inline-flex rounded-full bg-[#0c438f]/8 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#0c438f] mb-2">
                      {item.tag}
                    </span>
                    <h3 className="text-[18px] font-extrabold text-[#061629] leading-tight">{item.title}</h3>
                  </div>
                </div>
                <p className="text-[14px] text-muted leading-[1.7] mb-6">{item.text}</p>
                <ul className="flex flex-col gap-3 mt-auto pt-5 border-t border-gray-50">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="flex items-center gap-3 text-[13px] text-[#061629] font-semibold">
                      <Check size={14} className="text-[#0c438f] shrink-0" strokeWidth={3} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-[#061629] rounded-2xl mt-14 p-10 md:p-14 text-center text-white shadow-[0_16px_34px_-26px_rgba(6,22,41,0.35)]">
            <h3 className="text-[24px] md:text-[30px] font-extrabold mb-4 leading-tight">
              Hai un'auto da permutare o ti serve una rata su misura?
            </h3>
            <p className="text-[15px] text-white/72 mb-8 max-w-xl mx-auto leading-relaxed">
              Raccontaci la tua situazione: ti faremo una valutazione gratuita della tua auto attuale e una simulazione di finanziamento, senza impegno.
            </p>
            <Link to="/contatti" className="inline-flex h-[48px] px-7 items-center justify-center rounded-full bg-white hover:bg-[#eef3f8] text-[#061629] font-bold transition-colors text-[14px]">
              Richiedi valutazione gratuita
            </Link>
          </div>
        </div>
      </section>

      {/* 3. VS SECTION */}
      <section className="py-20 bg-white">
        <div className="ds-container max-w-[1000px]">
          <h2 className="text-center text-[32px] md:text-[36px] font-extrabold mb-16 text-[#061629] leading-tight">
            Perché affidarsi a Diamanti Automobili invece di fare tutto da soli
          </h2>

          <div className="relative">
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-[#061629] rounded-full text-white font-extrabold text-[22px] items-center justify-center z-10 border-4 border-white">
              VS
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Left - Con Diamanti */}
              <div className="bg-white rounded-2xl p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100">
                <h3 className="font-bold text-[#061629] text-[18px] mb-8">Con Diamanti Automobili</h3>
                <ul className="flex flex-col gap-5">
                  {[
                    'Risparmi tempo e riduci lo stress',
                    'Ricevi solo opportunità selezionate',
                    'Verifiche approfondite e documenti in regola',
                    'Trattativa esperta e condizioni migliori',
                    'Meno rischi e maggiore sicurezza',
                    'Processo chiaro, trasparente e seguito'
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-[22px] h-[22px] rounded-full border border-gray-200 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-[#061629]" strokeWidth={3} />
                      </div>
                      <span className="text-[15px] text-[#061629] font-sans">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right - Da solo */}
              <div className="bg-[#eff2f6] rounded-2xl p-10 border border-transparent">
                <h3 className="font-bold text-[#061629] text-[18px] mb-8">Cercando da soli</h3>
                <ul className="flex flex-col gap-5">
                  {[
                    'Ore perse tra annunci, telefonate e visite',
                    'Offerte non verificate e spesso scadute',
                    'Rischio di auto con problemi nascosti',
                    'Trattativa singola, senza leva contrattuale',
                    'Maggiore incertezza e margine di errore',
                    'Burocrazia e pratiche da gestire da soli'
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-[22px] h-[22px] rounded-full bg-[#061629] flex items-center justify-center shrink-0">
                        <X size={12} className="text-white" strokeWidth={3} />
                      </div>
                      <span className="text-[15px] text-[#061629] font-sans">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COME LAVORIAMO - 5 step orizzontali */}
      <section className="py-20 bg-[#f6f8fb] border-t border-gray-100">
        <div className="ds-container">
          <h2 className="text-center text-[36px] font-extrabold text-[#061629] mb-16">Come lavoriamo</h2>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] border-t-[2px] border-dotted border-gray-300 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { num: 1, icon: CheckCircle2, title: 'Ascolto', text: 'Analizziamo esigenze, priorità e budget per impostare una ricerca su misura.' },
                { num: 2, icon: Target, title: 'Profilo auto', text: "Definiamo insieme il modello da cercare: allestimento, motorizzazione, dettagli." },
                { num: 3, icon: Search, title: 'Ricerca e selezione', text: 'Valutiamo le migliori opportunità sul mercato italiano ed europeo.' },
                { num: 4, icon: ShieldCheck, title: 'Verifica e trattativa', text: "Verifichiamo le condizioni del veicolo e trattiamo prezzo e termini per te." },
                { num: 5, icon: MapPin, title: 'Consegna', text: "Ti consegniamo l'auto pronta all'uso, direttamente a domicilio." }
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-[#061629] text-white font-sans font-bold text-[18px] flex items-center justify-center border-[6px] border-[#f6f8fb] mb-5">
                    {step.num}
                  </div>
                  <step.icon className="text-[#061629] mb-3 opacity-80" size={24} strokeWidth={1.5} />
                  <h3 className="font-bold text-[#061629] text-[14px] mb-2">{step.title}</h3>
                  <p className="text-[12px] text-muted leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. BANNER - Ampia scelta veicoli */}
      <section className="bg-[#061629] relative overflow-hidden">
        <div className="ds-container">
          <div className="py-20">
            <div className="max-w-2xl">
              <h2 className="text-[32px] md:text-[40px] font-extrabold text-white mb-6 leading-tight">
                Oltre 5.000 veicoli al mese:<br/>
                troviamo quello <span className="text-[#0c438f] italic">giusto per te</span>.
              </h2>
              <p className="text-white/70 text-[16px] mb-10 leading-relaxed max-w-md">
                Analizziamo ogni giorno il mercato italiano ed europeo: nuove, km 0, aziendali e usato premium.<br/>
                Raccontaci cosa cerchi, selezioniamo solo le proposte davvero adatte a te.
              </p>
              <Link to="/contatti" className="inline-flex h-[48px] px-8 bg-white hover:bg-gray-100 text-[#061629] font-bold items-center justify-center rounded-md transition-colors text-[14px]">
                Parla con un consulente
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. UN SERVIZIO DAVVERO COMPLETO */}
      <section className="py-20 bg-white">
        <div className="ds-container">
          <h2 className="text-center text-[36px] font-extrabold text-[#061629] mb-16">
            Un servizio davvero completo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Star, title: 'Consulente dedicato', text: 'Un unico referente ti segue dal primo contatto alla consegna.' },
              { icon: CheckCircle2, title: 'Rete selezionata', text: 'Collaboriamo con concessionari e fonti affidabili in tutta Italia e in Europa.' },
              { icon: ShieldCheck, title: 'Trasparenza totale', text: 'Ti raccontiamo tutto: processo, costi, tempi e condizioni reali.' },
              { icon: MapPin, title: 'Assistenza completa', text: 'Dal briefing alla consegna a domicilio, ci occupiamo noi di ogni passaggio.' }
            ].map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-8 text-center flex flex-col items-center hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-shadow bg-white">
                <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center mb-6">
                  <item.icon className="text-[#061629]" size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-[#061629] text-[16px] mb-3">{item.title}</h3>
                <p className="text-[13px] text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DOMANDE FREQUENTI */}
      <section className="py-20 bg-[#f6f8fb] border-t border-gray-100">
        <div className="ds-container max-w-3xl">
          <h2 className="text-center text-[36px] font-extrabold text-[#061629] mb-16">Domande frequenti</h2>

          <div className="space-y-4">
            {[
              { q: 'Come funziona il servizio di consulente auto?', a: 'Tu ci racconti cosa cerchi: modello, budget, utilizzo, preferenze, tempistiche. Noi attiviamo la ricerca e ti presentiamo le migliori opportunità e ti accompagniamo fino alla consegna dell\'auto.' },
              { q: 'Posso richiedere qualsiasi marca o modello?', a: 'Sì, lavoriamo su qualsiasi marca e modello. La nostra ricerca è personalizzata al 100% sulle tue esigenze specifiche.' },
              { q: 'Accettate la mia auto in permuta?', a: 'Sì. Valutiamo la tua auto attuale ai valori reali di mercato e la ritiriamo: il valore di permuta viene scalato direttamente dal prezzo della nuova. Nessun annuncio da gestire, nessuna trattativa con privati.' },
              { q: 'Posso finanziare l\'auto fino a 120 mesi?', a: 'Sì. Lavoriamo con i principali istituti finanziari per offrirti piani fino a 120 mesi, con risposta in 24-48 ore. Studiamo la rata che si adatta al tuo budget mensile, anche con anticipo zero in alcuni casi.' },
              { q: 'Il primo tagliando è davvero incluso?', a: 'Sì. Dopo i primi 5.000 km percorsi con la tua nuova auto, il primo tagliando è offerto da noi presso officine selezionate: filtri, olio e controlli completi. È il nostro modo di restare al tuo fianco anche dopo la consegna.' },
              { q: 'Mi aiutate con la verifica dell\'auto?', a: 'Assolutamente. Ogni veicolo che proponiamo viene verificato in termini di storia, condizioni, documenti e chilometraggio reale.' },
              { q: 'Consegnate anche fuori città?', a: 'Sì, effettuiamo consegne a domicilio in tutta Italia, da Bolzano a Trapani. Organizziamo il trasporto in modo sicuro, assicurato e puntuale: l\'auto arriva immatricolata, lavata e pronta a partire.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-[#061629] text-[15px] pr-4">{faq.q}</span>
                  <ChevronDown className={`text-muted shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} size={20} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-[14px] text-muted leading-relaxed border-t border-gray-50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA PRE-FOOTER */}
      <ContactCTA image="/images/mini-cooper-showroom.png" />

    </div>
  );
}
