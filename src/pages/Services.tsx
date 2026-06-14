import { Search, ShieldCheck, MapPin, CheckCircle2, Star, Check, ChevronDown, Repeat, CreditCard, Truck, Wrench, FileCheck, BadgeCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SEO, SITE_URL, breadcrumbLd } from '../components/SEO';
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
        jsonLd={[SERVICES_JSONLD, breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Servizi', path: '/servizi' }])]}
        jsonLdId="services"
      />

      {/* 1. HERO unificato */}
      <PageHero
        image="/images/audi-a5-viale.webp"
        imageMobile="/images/hero-lineup-day.webp"
        eyebrow="I nostri servizi"
        title="I servizi di Diamanti Automobili"
        subtitle="Una consulenza personalizzata, non vincolata a un singolo marchio o al magazzino di una concessionaria: cerchiamo l'auto giusta per te, la verifichiamo e te la consegniamo. In tutta Italia."
      />

      {/* 2. COME LAVORIAMO — le sei fasi (spostata da "Come funziona") */}
      <section className="py-16 bg-[#f6f8fb] border-t border-gray-100 relative overflow-hidden">
        <div className="ds-container relative z-10">
          <div className="max-w-2xl mb-14">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#0c438f] mb-3">Il nostro metodo</p>
            <h2 className="text-[30px] md:text-[34px] font-extrabold text-[#061629] leading-tight">
              Come lavoriamo: dalla ricerca alla consegna
            </h2>
            <p className="text-[15px] md:text-[16px] text-muted leading-relaxed mt-4">
              Un percorso chiaro in sei fasi: ci occupiamo noi di ogni passaggio, dall'analisi del mercato fino al primo tagliando dopo la consegna.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-y-14 gap-x-4 sm:gap-x-8">
            {[
              { num: '01', icon: Search, title: 'Analisi strategica del mercato', text: "Non ci limitiamo agli annunci: analizziamo prezzi, svalutazione futura del modello e disponibilità reale in Italia e in Europa.", details: ['Definizione budget', 'Analisi costo/beneficio', "Canali d'acquisto"] },
              { num: '02', icon: MapPin, title: 'Scouting e pre-selezione', text: 'Filtriamo centinaia di proposte per trovarne poche davvero sicure. Ogni auto scartata è un rischio che ti abbiamo evitato.', details: ['Cronologia tagliandi', 'Database sinistri', 'Visura ipoteche'] },
              { num: '03', icon: FileCheck, title: 'Check tecnico e perizia 150 punti', text: 'Un perito certificato esegue test drive e diagnosi computerizzata. Ricevi un report fotografico e video prima di procedere.', details: ['Diagnosi centralina', 'Spessori vernice', 'Test drive su strada'] },
              { num: '04', icon: BadgeCheck, title: 'Negoziazione, permuta e finanziamento', text: 'Siamo consulenti, non venditori: trattiamo per lo sconto massimo, valutiamo la permuta e costruiamo il finanziamento fino a 120 mesi.', details: ['Massimo sconto', 'Permuta', 'Finanziamento 120 mesi'] },
              { num: '05', icon: Truck, title: 'Import, pratiche e consegna a domicilio', text: "Se l'auto è all'estero gestiamo trasporto e nazionalizzazione. La ricevi immatricolata e pronta, ovunque tu sia in Italia.", details: ['Trasporto assicurato', 'Immatricolazione', 'Consegna door-to-door'] },
              { num: '06', icon: Wrench, title: 'Post-vendita e primo tagliando incluso', text: "Il rapporto non finisce alla consegna: restiamo a disposizione e dopo i primi 5.000 km il primo tagliando lo offriamo noi.", details: ['Assistenza post-vendita', 'Officine convenzionate', 'Tagliando incluso'] },
            ].map((step, i) => (
              <div key={i} className="flex flex-col">
                <div className="bg-white border border-gray-100 rounded-lg p-6 sm:p-8 h-full flex flex-col shadow-[0_12px_28px_-24px_rgba(6,22,41,0.32)] hover:shadow-[0_18px_42px_-26px_rgba(6,22,41,0.38)] transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-[#0b2b5b]/8 text-[#0b2b5b] flex items-center justify-center mb-5">
                    <step.icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[16px] font-extrabold text-[#061629] mb-3 leading-tight">{step.title}</h3>
                  <p className="text-[14px] text-muted leading-relaxed mb-6">{step.text}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {step.details.map((d, j) => (
                      <span key={j} className="text-[11px] font-semibold py-1.5 px-3 rounded-full bg-[#f6f8fb] border border-[#e6ebf2] text-[#0b2b5b]">
                        {d}
                      </span>
                    ))}
                  </div>
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
            <h2 className="text-[30px] md:text-[34px] font-extrabold text-[#061629] mb-5 leading-tight">
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
              <div key={i} className="bg-white border border-gray-100 rounded-lg p-6 sm:p-8 md:p-10 shadow-[0_12px_28px_-24px_rgba(6,22,41,0.32)] hover:shadow-[0_18px_42px_-26px_rgba(6,22,41,0.38)] transition-shadow flex flex-col">
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-14 h-14 rounded-full bg-[#0b2b5b] text-white flex items-center justify-center shrink-0">
                    <item.icon size={24} strokeWidth={1.5} />
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
        </div>
      </section>

      {/* 5. BANNER - Permuta / vendita auto (come la home, immagine e testo invertiti) */}
      <section className="bg-[#061629] relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
          {/* Testo (sinistra su desktop) */}
          <div className="px-6 py-14 md:px-12 lg:px-16 md:py-20 flex flex-col items-start justify-center text-white order-1">
            <div className="max-w-[540px]">
              <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15">
                <Repeat size={14} strokeWidth={2} />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/90">Valuta la tua auto</span>
              </div>
              <h2 className="text-[30px] md:text-[42px] font-extrabold leading-[1.1] mb-5 text-white">
                Hai un'auto da permutare?<br />
                <span className="text-[#7ba6e4]">La valutiamo gratis h24.</span>
              </h2>
              <p className="text-[15px] md:text-[16px] text-white/75 leading-[1.65] mb-3">
                <strong className="text-white">Permuta integrata</strong> — la scali dal prezzo della prossima auto.
              </p>
              <p className="text-[15px] md:text-[16px] text-white/75 leading-[1.65] mb-8">
                <strong className="text-white">Acquisto diretto</strong> — te la compriamo e basta.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/valuta-la-tua-auto" className="inline-flex h-[48px] items-center justify-center rounded-full bg-white px-7 text-[13px] font-bold text-[#061629] hover:bg-[#eef3f8] transition-colors gap-2">
                  Richiedi valutazione gratuita <ArrowRight size={16} />
                </Link>
                <Link to="/valuta-la-tua-auto" className="inline-flex h-[48px] items-center justify-center rounded-full bg-transparent border border-white/30 px-7 text-[13px] font-bold text-white hover:bg-white/10 transition-colors">
                  Come funziona la permuta
                </Link>
              </div>
            </div>
          </div>

          {/* Immagine (destra su desktop) */}
          <div className="relative h-[280px] md:h-auto md:min-h-[460px] order-2">
            <img
              src="/images/fleet-overview.webp"
              alt="Parcheggio di auto premium pronto per la valutazione e il ritiro Diamanti Automobili"
              width={1536}
              height={1024}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#061629] via-[#061629]/30 to-transparent md:bg-gradient-to-l md:from-[#061629]/0 md:via-[#061629]/0 md:to-[#061629]/40"></div>
          </div>
        </div>
      </section>

      {/* 6. UN SERVIZIO DAVVERO COMPLETO */}
      <section className="py-20 bg-white">
        <div className="ds-container">
          <h2 className="text-center text-[30px] md:text-[34px] font-extrabold text-[#061629] mb-16">
            Un servizio davvero completo
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Star, title: 'Consulente dedicato', text: 'Un unico referente ti segue dal primo contatto alla consegna.' },
              { icon: CheckCircle2, title: 'Rete selezionata', text: 'Collaboriamo con concessionari e fonti affidabili in tutta Italia e in Europa.' },
              { icon: ShieldCheck, title: 'Trasparenza totale', text: 'Ti raccontiamo tutto: processo, costi, tempi e condizioni reali.' },
              { icon: MapPin, title: 'Assistenza completa', text: 'Dal briefing alla consegna a domicilio, ci occupiamo noi di ogni passaggio.' }
            ].map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-lg p-5 sm:p-8 text-center flex flex-col items-center hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-shadow bg-white">
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
          <h2 className="text-center text-[30px] md:text-[34px] font-extrabold text-[#061629] mb-16">Domande frequenti</h2>

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
              <div key={i} className="bg-white border border-gray-100 rounded-lg overflow-hidden">
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
      <ContactCTA image="/images/mini-cooper-showroom.webp" imageMobile="/images/cta-opel-corsa.webp" />

    </div>
  );
}
