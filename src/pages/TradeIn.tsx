import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Repeat,
  HandCoins,
  TrendingUp,
  ShieldCheck,
  Truck,
  Banknote,
  Camera,
  Calculator,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';
import { SEO, SITE_URL } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { ContactCTA } from '../components/ContactCTA';

const TRADEIN_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: "Valutazione e ritiro auto usate",
  name: "Valuta la tua auto — Permuta o acquisto diretto",
  description:
    "Valutazione gratuita della tua auto usata in 24 ore. Puoi permutarla mentre acquisti la prossima auto con Diamanti Automobili, oppure vendercela direttamente con pagamento in 48 ore. Ritiro ovunque in Italia.",
  provider: {
    '@type': 'AutomotiveBusiness',
    '@id': `${SITE_URL}/#business`,
    name: 'Diamanti Automobili',
  },
  areaServed: { '@type': 'Country', name: 'Italia' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Permuta e acquisto auto usate',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Permuta auto integrata con acquisto nuova' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Acquisto diretto auto usata con pagamento in 48 ore' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Valutazione gratuita auto usata in 24 ore' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ritiro auto a domicilio in tutta Italia' } },
    ],
  },
};

const FAQS = [
  {
    q: 'La valutazione è davvero gratuita?',
    a: "Sì. Inviaci i dati e qualche foto della tua auto: ricevi la valutazione entro 24 ore, senza nessun impegno. Decidi tu se procedere o meno con la permuta o la vendita.",
  },
  {
    q: 'Qual è la differenza tra permuta e acquisto diretto?',
    a: "Permuta: la tua auto attuale entra in scambio mentre ne acquisti una nuova attraverso di noi. Il valore della permuta viene scalato direttamente dal prezzo della prossima auto. Acquisto diretto: te la compriamo e basta, con pagamento in 48 ore. Non serve che acquisti un'altra auto da noi.",
  },
  {
    q: 'Quanto offrite rispetto a un concessionario tradizionale?',
    a: "Lavoriamo sulle quotazioni reali di mercato, non sui valori 'lowball' di un concessionario che deve guadagnare due volte (sull'usato che ritira e sul nuovo che ti vende). Per questo riusciamo a offrire valutazioni mediamente più alte del 5-15%.",
  },
  {
    q: 'Ritirate auto in tutta Italia?',
    a: "Sì. Organizziamo il ritiro ovunque in Italia, isole comprese. Tu non devi spostarti: veniamo noi a casa tua o all'indirizzo che preferisci.",
  },
  {
    q: 'Che documenti servono?',
    a: "Per la valutazione iniziale bastano i dati base (marca, modello, anno, km, alimentazione, stato generale) e qualche foto. Per il ritiro effettivo serviranno libretto, certificato di proprietà, ultimo tagliando ed eventuale visura. Ti guidiamo noi passo passo.",
  },
  {
    q: 'Anche se ho un finanziamento in corso?',
    a: "Sì, gestiamo anche pratiche con finanziamento residuo o leasing in essere. Estinguiamo noi la posizione residua presso la finanziaria e riconosciamo a te la differenza, se positiva.",
  },
];

export default function TradeIn() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mode, setMode] = useState<'permuta' | 'vendita'>('permuta');

  return (
    <div className="bg-surface min-h-screen font-sans text-text pt-[74px]">
      <SEO
        title="Valuta la tua auto — Permuta o acquisto diretto | Diamanti Automobili"
        description="Valutazione gratuita della tua auto in 24 ore. Permuta integrata con l'acquisto della nuova o vendita diretta con pagamento in 48 ore. Ritiro a domicilio in tutta Italia."
        path="/valuta-la-tua-auto"
        jsonLd={TRADEIN_JSONLD}
        jsonLdId="tradein"
      />

      {/* 1. HERO unificato */}
      <PageHero
        image="/images/fiat-panda-showroom.png"
        eyebrow="Valuta la tua auto"
        title="Quanto vale davvero la tua auto?"
        subtitle={<>Ti diamo una valutazione gratuita in 24 ore. Poi scegli tu: la usi come <strong className="text-white">permuta</strong> sulla tua prossima auto, oppure te la <strong className="text-white">compriamo direttamente</strong> con pagamento in 48 ore.</>}
        cta={{ label: 'Richiedi valutazione gratuita', href: '#form-valutazione' }}
        stats={[
          { value: '24h', label: 'Valutazione gratuita' },
          { value: '48h', label: 'Pagamento se vendi' },
          { value: '+5-15%', label: 'In più vs concessionari' },
        ]}
      />

      {/* 2. DUE STRADE — Permuta vs Vendita */}
      <section className="py-20 bg-white">
        <div className="ds-container max-w-[1100px]">
          <div className="text-center mb-14">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#0c438f] mb-3">Due strade</p>
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#061629] leading-[1.1] max-w-[760px] mx-auto">
              Scegli tu cosa fare con la tua auto.
            </h2>
            <p className="text-[16px] text-muted leading-relaxed mt-5 max-w-[640px] mx-auto">
              Dopo la valutazione decidi: la permuti per scalarla dal prezzo della nuova, oppure ce la vendi direttamente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Permuta */}
            <div className="bg-[#061629] rounded-2xl p-8 md:p-10 text-white shadow-[0_22px_48px_-26px_rgba(6,22,41,0.5)] flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                  <Repeat size={26} strokeWidth={1.6} />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#7ba6e4]">Permuta integrata</span>
              </div>
              <h3 className="text-[24px] md:text-[26px] font-extrabold leading-tight mb-4">
                La scali dal prezzo della prossima auto
              </h3>
              <p className="text-white/72 text-[14.5px] leading-[1.65] mb-7">
                Mentre cerchiamo la tua prossima auto, ritiriamo quella attuale e scaliamo il valore della permuta direttamente dal nuovo acquisto. Una sola pratica, un solo interlocutore.
              </p>
              <ul className="flex flex-col gap-4 mt-auto">
                {[
                  'Valore scalato dal prezzo della nuova auto',
                  'Niente annunci, niente trattative con privati',
                  'Ritiro contestuale alla consegna',
                  'Una sola pratica burocratica',
                ].map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14px] text-white/95">
                    <CheckCircle2 size={16} className="text-[#7ba6e4] shrink-0" strokeWidth={2} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Vendita diretta */}
            <div className="bg-white border border-[#e6ebf2] rounded-2xl p-8 md:p-10 shadow-[0_22px_48px_-26px_rgba(6,22,41,0.25)] flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-[#f6f8fb] border border-[#e6ebf2] flex items-center justify-center">
                  <HandCoins size={26} strokeWidth={1.6} className="text-[#0c438f]" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#0c438f]">Acquisto diretto</span>
              </div>
              <h3 className="text-[24px] md:text-[26px] font-extrabold leading-tight mb-4 text-[#061629]">
                Te la compriamo. Anche se non compri da noi.
              </h3>
              <p className="text-muted text-[14.5px] leading-[1.65] mb-7">
                Vuoi solo vendere la tua auto in modo veloce e sicuro? La acquistiamo noi alle quotazioni reali di mercato, con pagamento garantito in 48 ore tramite bonifico. Non sei obbligato ad acquistare nulla in cambio.
              </p>
              <ul className="flex flex-col gap-4 mt-auto">
                {[
                  'Pagamento via bonifico in 48 ore',
                  'Nessun obbligo di acquistare altro',
                  'Ritiro a domicilio incluso',
                  'Pratica di passaggio gestita da noi',
                ].map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14px] text-[#061629]">
                    <CheckCircle2 size={16} className="text-[#0c438f] shrink-0" strokeWidth={2} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PERCHÉ NOI */}
      <section className="py-20 bg-[#f6f8fb] border-y border-[#e6ebf2]">
        <div className="ds-container">
          <div className="text-center mb-14">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#0c438f] mb-3">Perché venderla a noi</p>
            <h2 className="text-[30px] md:text-[38px] font-extrabold text-[#061629] leading-[1.15] max-w-[760px] mx-auto">
              Più valore, meno rotture di scatole.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                title: 'Valore reale di mercato',
                text: "Quotazioni costruite sui dati reali, non sui valori 'lowball' di un concessionario che deve guadagnare due volte.",
              },
              {
                icon: ShieldCheck,
                title: 'Pagamento garantito',
                text: 'Bonifico entro 48 ore dal ritiro. Niente assegni postdatati, niente promesse fumose.',
              },
              {
                icon: Truck,
                title: 'Ritiro ovunque in Italia',
                text: 'Veniamo noi a casa tua. Tu non devi caricare, spostare o trasportare nulla.',
              },
              {
                icon: Banknote,
                title: 'Anche con finanziamento attivo',
                text: 'Gestiamo noi le pratiche di estinzione anticipata presso la tua finanziaria.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#e6ebf2] rounded-lg p-7 flex flex-col shadow-[0_12px_28px_-24px_rgba(6,22,41,0.32)] hover:shadow-[0_22px_48px_-26px_rgba(6,22,41,0.4)] transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-[#0b2b5b] text-white flex items-center justify-center mb-5">
                  <item.icon size={22} strokeWidth={1.6} />
                </div>
                <h3 className="text-[16px] font-extrabold text-[#061629] mb-3 leading-tight">{item.title}</h3>
                <p className="text-[13.5px] text-muted leading-[1.65]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COME FUNZIONA — 3 step */}
      <section className="py-20 bg-white">
        <div className="ds-container max-w-[1100px]">
          <div className="text-center mb-14">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#0c438f] mb-3">Come funziona</p>
            <h2 className="text-[30px] md:text-[38px] font-extrabold text-[#061629] leading-[1.15]">
              Tre passi. Niente complicazioni.
            </h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-[30px] left-[16%] right-[16%] border-t-[2px] border-dotted border-[#cfd9e6] z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
              {[
                {
                  num: '01',
                  icon: Camera,
                  title: 'Mandaci dati e foto',
                  text: 'Compila il modulo qui sotto con marca, modello, anno, km e qualche foto. Bastano 3 minuti.',
                },
                {
                  num: '02',
                  icon: Calculator,
                  title: 'Ricevi la valutazione',
                  text: 'Entro 24 ore ti inviamo una valutazione gratuita basata sulle quotazioni reali di mercato.',
                },
                {
                  num: '03',
                  icon: Truck,
                  title: 'Decidi: permuta o vendita',
                  text: 'Se ti convince, organizziamo il ritiro a casa tua. Pagamento in 48 ore (vendita) o sconto sulla nuova (permuta).',
                },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-[60px] h-[60px] rounded-full bg-[#061629] text-white font-extrabold text-[16px] flex items-center justify-center mb-5 border-[6px] border-white">
                    {step.num}
                  </div>
                  <step.icon className="text-[#0c438f] mb-4" size={28} strokeWidth={1.6} />
                  <h3 className="text-[17px] font-extrabold text-[#061629] mb-3 leading-tight">{step.title}</h3>
                  <p className="text-[13.5px] text-muted leading-[1.65] max-w-[280px]">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FORM */}
      <section id="form-valutazione" className="py-20 bg-[#f6f8fb] border-y border-[#e6ebf2] scroll-mt-[74px]">
        <div className="ds-container max-w-[920px]">
          <div className="text-center mb-12">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#0c438f] mb-3">Richiedi valutazione</p>
            <h2 className="text-[30px] md:text-[40px] font-extrabold text-[#061629] leading-[1.1] mb-4">
              Quanto vale la tua auto?
            </h2>
            <p className="text-[15px] text-muted leading-relaxed max-w-[540px] mx-auto">
              Compila il modulo: ricevi la valutazione gratuita entro 24 ore lavorative, senza impegno.
            </p>
          </div>

          <div className="bg-white border border-[#e6ebf2] rounded-2xl p-8 md:p-10 shadow-[0_22px_48px_-26px_rgba(6,22,41,0.25)]">
            {/* Mode switch */}
            <div className="mb-8">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#7b8794] mb-3">Cosa vuoi fare?</p>
              <div className="grid grid-cols-2 gap-2 p-1 bg-[#f6f8fb] rounded-full border border-[#e6ebf2]">
                <button
                  type="button"
                  onClick={() => setMode('permuta')}
                  className={`h-[44px] rounded-full text-[13px] font-bold transition-colors ${
                    mode === 'permuta' ? 'bg-[#061629] text-white' : 'text-[#5f6b7a] hover:text-[#061629]'
                  }`}
                >
                  Permutarla con una nuova
                </button>
                <button
                  type="button"
                  onClick={() => setMode('vendita')}
                  className={`h-[44px] rounded-full text-[13px] font-bold transition-colors ${
                    mode === 'vendita' ? 'bg-[#061629] text-white' : 'text-[#5f6b7a] hover:text-[#061629]'
                  }`}
                >
                  Venderla direttamente
                </button>
              </div>
            </div>

            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Richiesta di valutazione inviata! Ti ricontattiamo entro 24 ore.');
              }}
            >
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#0c438f] mb-4">La tua auto</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col text-left">
                    <label className="text-[12px] font-bold text-[#061629] mb-2">Marca *</label>
                    <input type="text" placeholder="Es. BMW" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] focus:outline-none focus:border-[#061629]" required />
                  </div>
                  <div className="flex flex-col text-left">
                    <label className="text-[12px] font-bold text-[#061629] mb-2">Modello *</label>
                    <input type="text" placeholder="Es. Serie 3 320d Touring" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] focus:outline-none focus:border-[#061629]" required />
                  </div>
                  <div className="flex flex-col text-left">
                    <label className="text-[12px] font-bold text-[#061629] mb-2">Anno immatricolazione *</label>
                    <input type="number" min="1990" max="2026" placeholder="Es. 2020" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] focus:outline-none focus:border-[#061629]" required />
                  </div>
                  <div className="flex flex-col text-left">
                    <label className="text-[12px] font-bold text-[#061629] mb-2">Chilometri *</label>
                    <input type="number" min="0" placeholder="Es. 85000" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] focus:outline-none focus:border-[#061629]" required />
                  </div>
                  <div className="flex flex-col text-left">
                    <label className="text-[12px] font-bold text-[#061629] mb-2">Alimentazione *</label>
                    <select className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] focus:outline-none focus:border-[#061629] bg-white appearance-none" required>
                      <option value="">Seleziona...</option>
                      <option>Benzina</option>
                      <option>Diesel</option>
                      <option>Ibrida</option>
                      <option>Elettrica</option>
                      <option>GPL</option>
                      <option>Metano</option>
                    </select>
                  </div>
                  <div className="flex flex-col text-left">
                    <label className="text-[12px] font-bold text-[#061629] mb-2">Condizioni generali *</label>
                    <select className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] focus:outline-none focus:border-[#061629] bg-white appearance-none" required>
                      <option value="">Seleziona...</option>
                      <option>Ottime — come nuova</option>
                      <option>Buone — segni d'uso normali</option>
                      <option>Discrete — qualche difetto</option>
                      <option>Da rivedere — interventi necessari</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                  <div className="flex flex-col text-left">
                    <label className="text-[12px] font-bold text-[#061629] mb-2">Finanziamento attivo?</label>
                    <select className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] focus:outline-none focus:border-[#061629] bg-white appearance-none">
                      <option>No</option>
                      <option>Sì, da estinguere</option>
                      <option>Leasing in corso</option>
                    </select>
                  </div>
                  <div className="flex flex-col text-left">
                    <label className="text-[12px] font-bold text-[#061629] mb-2">Foto (opzionale)</label>
                    <input type="file" accept="image/*" multiple className="w-full border border-gray-200 rounded-md h-[46px] px-3 text-[13px] file:mr-3 file:py-2 file:px-3 file:rounded-md file:border-0 file:text-[12px] file:font-bold file:bg-[#f6f8fb] file:text-[#061629]" />
                  </div>
                </div>
              </div>

              {mode === 'permuta' && (
                <div className="border-t border-[#e6ebf2] pt-6">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#0c438f] mb-4">La prossima auto che cerchi</p>
                  <div className="flex flex-col text-left">
                    <label className="text-[12px] font-bold text-[#061629] mb-2">Cosa stai cercando?</label>
                    <textarea
                      placeholder="Es. SUV diesel automatico, 4x4, budget 35.000-45.000€, preferibilmente del 2022..."
                      className="w-full border border-gray-200 rounded-md p-4 text-[14px] focus:outline-none focus:border-[#061629] min-h-[100px] resize-none"
                    />
                  </div>
                </div>
              )}

              <div className="border-t border-[#e6ebf2] pt-6">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#0c438f] mb-4">I tuoi dati</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col text-left">
                    <label className="text-[12px] font-bold text-[#061629] mb-2">Nome e cognome *</label>
                    <input type="text" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] focus:outline-none focus:border-[#061629]" required />
                  </div>
                  <div className="flex flex-col text-left">
                    <label className="text-[12px] font-bold text-[#061629] mb-2">Email *</label>
                    <input type="email" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] focus:outline-none focus:border-[#061629]" required />
                  </div>
                  <div className="flex flex-col text-left">
                    <label className="text-[12px] font-bold text-[#061629] mb-2">Telefono *</label>
                    <input type="tel" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] focus:outline-none focus:border-[#061629]" required />
                  </div>
                  <div className="flex flex-col text-left">
                    <label className="text-[12px] font-bold text-[#061629] mb-2">Città</label>
                    <input type="text" placeholder="Es. Roma" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] focus:outline-none focus:border-[#061629]" />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3">
                <input type="checkbox" id="privacy-tradein" className="w-4 h-4 accent-[#061629] mt-1 shrink-0" required />
                <label htmlFor="privacy-tradein" className="text-[12px] text-muted leading-relaxed">
                  Acconsento al trattamento dei dati personali per ricevere la valutazione e essere ricontattato. I dati saranno trattati con la massima riservatezza.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#061629] hover:bg-[#0c438f] text-white h-[54px] rounded-full text-[14px] font-bold transition-colors mt-2 flex items-center justify-center gap-2"
              >
                Richiedi valutazione gratuita <ArrowRight size={16} />
              </button>

              <p className="text-center text-[12px] text-muted pt-2">
                Riceverai la valutazione entro 24 ore lavorative. Nessun impegno.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-20 bg-white">
        <div className="ds-container max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#0c438f] mb-3">Domande frequenti</p>
            <h2 className="text-[30px] md:text-[36px] font-extrabold text-[#061629] leading-tight">
              Le risposte ai dubbi più comuni
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white border border-[#e6ebf2] rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#f6f8fb] transition-colors"
                >
                  <span className="font-bold text-[#061629] text-[15px] pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`text-muted shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                    size={20}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-[14px] text-muted leading-relaxed border-t border-[#f0f3f7] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA PRE-FOOTER */}
      <ContactCTA />
    </div>
  );
}
