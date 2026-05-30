import { useState } from 'react';
import { Search, Check, X, ShieldCheck, Star, MapPin, Settings, CheckCircle2, ArrowRight, Heart, Repeat, CreditCard, Truck, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ContactCTA } from '../components/ContactCTA';
import { submitLead } from '../lib/forms';

export default function Home() {
  const [heroStatus, setHeroStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  return (
    <div className="bg-white min-h-screen font-sans text-text pt-[74px]">
      <SEO
        title="Diamanti Automobili — Consulente acquisto auto a Roma e in tutta Italia"
        description="Consulente per l'acquisto di auto su misura: ricerca, verifica tecnica, negoziazione e consegna a domicilio. Auto nuove, usate, km 0 e di importazione. Sede a Roma, operiamo in tutta Italia."
        path="/"
      />
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[620px] md:min-h-[700px] flex flex-col justify-center items-center text-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bmw-road.webp"
            alt="Consulente acquisto auto Diamanti Automobili — auto premium in viaggio"
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        <div className="ds-container relative z-10 w-full mb-8 md:mb-40 mt-0">
          <div className="max-w-2xl">
            <h1 className="text-[30px] sm:text-[38px] md:text-[52px] lg:text-[58px] font-extrabold text-white mb-5 md:mb-6 leading-[1.1] md:leading-[1.08] text-left [text-shadow:_0_3px_22px_rgb(0_0_0_/_0.55)]">
              Troviamo l'auto giusta. <br/>Ovunque tu sia in Italia.
            </h1>
            <p className="text-[16px] md:text-[18px] text-white mb-8 max-w-[610px] text-left leading-[1.65] font-sans font-medium [text-shadow:_0_2px_16px_rgb(0_0_0_/_0.55)]">
              Diamanti Automobili è il consulente che cerca per te l'auto giusta — nuova, usata, km 0 o di importazione — la verifica nel dettaglio e te la consegna a casa. Permuta, finanziamenti fino a 120 mesi e primo tagliando incluso. Da Roma in tutta Italia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contatti" className="inline-flex h-[48px] items-center justify-center rounded-full bg-[#1156bf] px-7 text-[14px] font-bold text-white shadow-[0_14px_28px_-18px_rgba(17,86,191,0.9)] transition-colors hover:bg-[#0c438f]">
                Richiedi consulenza <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link to="/servizi" className="inline-flex h-[48px] items-center justify-center rounded-full bg-white px-7 text-[14px] font-bold text-[#0b2b5b] shadow-[0_14px_28px_-18px_rgba(6,22,41,0.45)] transition-colors hover:bg-[#f6f8fb]">
                Scopri il servizio
              </Link>
            </div>
          </div>
        </div>

        {/* CONTACT FORM OVERLAY — modulo contatti orizzontale (niente ricerca: si viene ricontattati) */}
        <div className="relative md:absolute md:bottom-[-72px] left-0 right-0 z-20 px-4 mt-10 md:mt-0 mb-[-30px] md:mb-0">
          <div className="ds-container relative">
            <div className="bg-white rounded-lg shadow-[0_22px_48px_-26px_rgba(6,22,41,0.45)] p-4 md:p-6 border border-[#e6ebf2] relative z-10">
              <div className="flex items-baseline gap-2 mb-4 text-left">
                <span className="text-[14px] md:text-[15px] font-extrabold text-[#061629]">Raccontaci che auto cerchi</span>
                <span className="hidden sm:inline text-[12px] text-[#7b8794]">— ti ricontattiamo noi, gratis e senza impegno.</span>
              </div>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  setHeroStatus('submitting');
                  try {
                    await submitLead(form);
                    setHeroStatus('success');
                    form.reset();
                  } catch {
                    setHeroStatus('error');
                  }
                }}
              >
                {/* Config FormSubmit + honeypot anti-spam */}
                <input type="hidden" name="_subject" value="Nuova richiesta dall'hero — sito Diamanti Automobili" />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                <input type="hidden" name="Provenienza" value="Form hero homepage" />

                {/* Riga 1 — contatti */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                  <div className="flex flex-col text-left min-w-0">
                    <label className="text-[11px] font-semibold text-[#7b8794] mb-1">Nome e cognome *</label>
                    <input type="text" name="Nome" required placeholder="Mario Rossi" className="w-full min-w-0 border border-[#dbe3ec] bg-white rounded-md h-[44px] px-3 text-[13px] text-[#061629] focus:outline-none focus:border-[#0b2b5b] focus:ring-2 focus:ring-[#d9e6f7]" />
                  </div>
                  <div className="flex flex-col text-left min-w-0">
                    <label className="text-[11px] font-semibold text-[#7b8794] mb-1">Email *</label>
                    <input type="email" name="Email" required placeholder="mario@email.it" className="w-full min-w-0 border border-[#dbe3ec] bg-white rounded-md h-[44px] px-3 text-[13px] text-[#061629] focus:outline-none focus:border-[#0b2b5b] focus:ring-2 focus:ring-[#d9e6f7]" />
                  </div>
                  <div className="flex flex-col text-left min-w-0">
                    <label className="text-[11px] font-semibold text-[#7b8794] mb-1">Telefono *</label>
                    <input type="tel" name="Telefono" required placeholder="345 678 9010" className="w-full min-w-0 border border-[#dbe3ec] bg-white rounded-md h-[44px] px-3 text-[13px] text-[#061629] focus:outline-none focus:border-[#0b2b5b] focus:ring-2 focus:ring-[#d9e6f7]" />
                  </div>
                </div>

                {/* Riga 2 — cosa cerca + invio */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-end">
                  <div className="flex flex-col text-left min-w-0">
                    <label className="text-[11px] font-semibold text-[#7b8794] mb-1">Tipologia auto</label>
                    <select name="Tipologia" defaultValue="" className="w-full min-w-0 border border-[#dbe3ec] bg-white rounded-md h-[44px] px-3 text-[13px] text-[#5f6b7a] focus:outline-none focus:border-[#0b2b5b] focus:ring-2 focus:ring-[#d9e6f7] appearance-none">
                      <option value="">Seleziona...</option>
                      <option>SUV</option>
                      <option>Berlina</option>
                      <option>Station Wagon</option>
                      <option>City Car</option>
                      <option>Sportiva</option>
                    </select>
                  </div>
                  <div className="flex flex-col text-left min-w-0">
                    <label className="text-[11px] font-semibold text-[#7b8794] mb-1">Budget</label>
                    <select name="Budget" defaultValue="" className="w-full min-w-0 border border-[#dbe3ec] bg-white rounded-md h-[44px] px-3 text-[13px] text-[#5f6b7a] focus:outline-none focus:border-[#0b2b5b] focus:ring-2 focus:ring-[#d9e6f7] appearance-none">
                      <option value="">Seleziona...</option>
                      <option>Fino a 15.000€</option>
                      <option>15.000€ - 25.000€</option>
                      <option>25.000€ - 40.000€</option>
                      <option>40.000€ - 60.000€</option>
                      <option>Oltre 60.000€</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={heroStatus === 'submitting'}
                    className="bg-[#0b2b5b] hover:bg-[#0c438f] disabled:opacity-60 disabled:cursor-not-allowed text-white h-[44px] px-5 rounded-md text-[13px] font-bold whitespace-nowrap transition-colors flex items-center justify-center gap-2"
                  >
                    {heroStatus === 'submitting' ? 'Invio…' : (<>Richiedi consulenza <ArrowRight size={15} /></>)}
                  </button>
                </div>

                {/* Privacy */}
                <div className="flex items-start gap-2 mt-3">
                  <input type="checkbox" id="privacy-hero" name="Privacy" value="Accettata" required className="w-3.5 h-3.5 accent-[#061629] mt-[3px] shrink-0" />
                  <label htmlFor="privacy-hero" className="text-[11px] text-[#7b8794] leading-snug text-left">
                    Acconsento al trattamento dei dati personali per essere ricontattato.
                  </label>
                </div>

                {heroStatus === 'success' && (
                  <p className="mt-3 text-[12.5px] font-semibold text-[#0c438f] bg-[#0c438f]/8 border border-[#0c438f]/20 rounded-md py-2.5 px-4 text-left">
                    Richiesta inviata! Ti ricontattiamo entro 24 ore lavorative.
                  </p>
                )}
                {heroStatus === 'error' && (
                  <p className="mt-3 text-[12.5px] font-semibold text-[#b42318] bg-[#b42318]/8 border border-[#b42318]/20 rounded-md py-2.5 px-4 text-left">
                    Invio non riuscito. Riprova tra poco oppure scrivici via email.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRANDS - Infinite scrolling carousel with real logos */}
      <section className="bg-[#061629] pt-16 md:pt-[112px] pb-14 text-center text-white overflow-hidden">
        <div className="ds-container">
          <p className="text-[12px] uppercase tracking-[0.22em] text-white/60 mb-10 font-bold">I brand con cui lavoriamo</p>
        </div>

        <div className="relative w-full">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#061629] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#061629] to-transparent z-10"></div>

          {/* Scrolling track */}
          <div className="flex animate-scroll-brands items-center">
            {[...Array(2)].map((_, dupIdx) => (
              [
                { name: 'Mercedes-Benz', slug: 'mercedes-benz' },
                { name: 'BMW',           slug: 'bmw' },
                { name: 'Audi',          slug: 'audi' },
                { name: 'Porsche',       slug: 'porsche' },
                { name: 'Volkswagen',    slug: 'volkswagen' },
                { name: 'Ferrari',       slug: 'ferrari' },
                { name: 'Lamborghini',   slug: 'lamborghini' },
                { name: 'Maserati',      slug: 'maserati' },
                { name: 'Alfa Romeo',    slug: 'alfa-romeo' },
                { name: 'Land Rover',    slug: 'land-rover' },
                { name: 'Jaguar',        slug: 'jaguar' },
                { name: 'Volvo',         slug: 'volvo' },
                { name: 'Tesla',         slug: 'tesla' },
                { name: 'Mini',          slug: 'mini' },
                { name: 'Toyota',        slug: 'toyota' },
                { name: 'Ford',          slug: 'ford' },
                { name: 'Fiat',          slug: 'fiat' },
                { name: 'Jeep',          slug: 'jeep' },
                { name: 'Peugeot',       slug: 'peugeot' },
                { name: 'Renault',       slug: 'renault' }
              ].map((brand, i) => (
                <div
                  key={`${dupIdx}-${i}`}
                  className="flex-shrink-0 w-[180px] h-[90px] mx-4 flex items-center justify-center group"
                >
                  <img
                    src={`/brands/${brand.slug}-white.svg`}
                    alt={`Logo ${brand.name}`}
                    className="max-h-[56px] max-w-[150px] w-auto h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </div>
              ))
            ))}
          </div>
        </div>
      </section>

      {/* 3. DIAMANTI AUTOMOBILI 4 CARDS */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="ds-container relative z-10">
          <p className="text-center text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#0c438f] mb-3">Il nostro servizio</p>
          <h2 className="text-center text-[30px] md:text-[34px] mb-12 font-extrabold text-[#061629]">Cosa facciamo per te</h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Search, title: 'Ricerca auto su misura', text: "Cerchiamo l'auto giusta tra migliaia di opportunità in Italia e in Europa, anche tra quelle non pubblicate." },
              { icon: CheckCircle2, title: 'Indipendenti e trasparenti', text: 'Non siamo legati a un marchio o a una concessionaria. Lavoriamo solo nel tuo interesse.' },
              { icon: ShieldCheck, title: 'Verifica tecnica completa', text: 'Controlliamo storia, chilometraggio reale, condizioni e documenti prima di ogni acquisto.' },
              { icon: MapPin, title: 'Consegna a domicilio', text: "Ti consegniamo l'auto pronta all'uso direttamente a casa tua, in tutta Italia." }
            ].map((item, i) => (
              <div key={i} className="border border-[#e6ebf2] rounded-lg p-5 sm:p-7 text-center flex flex-col items-center shadow-[0_12px_28px_-24px_rgba(6,22,41,0.32)] hover:shadow-[0_18px_42px_-26px_rgba(6,22,41,0.38)] transition-shadow bg-white">
                <div className="w-12 h-12 rounded-full bg-[#0b2b5b] text-white flex items-center justify-center mb-6">
                  <item.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-[16px] font-extrabold text-[#061629] mb-3">{item.title}</h3>
                <p className="text-[14px] text-muted leading-[1.6]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRONTA CONSEGNA */}
      <section className="py-16 bg-[#f6f8fb] border-y border-[#e6ebf2] overflow-hidden">
        <div className="ds-container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#0c438f] mb-3">Pronta consegna</p>
              <h2 className="text-[30px] md:text-[34px] font-extrabold text-[#061629] leading-tight">Auto disponibili ora</h2>
            </div>
            <Link to="/contatti" className="inline-flex h-[42px] items-center justify-center rounded-full bg-white px-5 text-[13px] font-bold text-[#0b2b5b] border border-[#d7e2ef] hover:bg-[#eef3f8] transition-colors">
              Richiedi disponibilità <ArrowRight size={15} className="ml-2" />
            </Link>
          </div>

          <div className="flex gap-5 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 -mx-5 px-5 lg:mx-0 lg:px-0">
            {[
              {
                name: 'Audi Q5 40 TDI quattro',
                tag: 'Nuova',
                meta: '2024 · Diesel · Automatica',
                km: '20.500 km',
                price: '€ 52.900',
                image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=900'
              },
              {
                name: 'BMW 320d Touring M Sport',
                tag: 'Aziendale',
                meta: '2023 · Diesel · Automatica',
                km: '18.900 km',
                price: '€ 41.900',
                image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&q=80&w=900'
              },
              {
                name: 'Mercedes GLC 220 d 4Matic',
                tag: 'Km0',
                meta: '2024 · Diesel · Automatica',
                km: '5.000 km',
                price: '€ 58.900',
                image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=900'
              },
              {
                name: 'Lexus NX 350h Executive',
                tag: 'Ibrida',
                meta: '2024 · Hybrid · Automatica',
                km: '7.500 km',
                price: '€ 49.900',
                image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=900'
              },
              {
                name: 'Porsche Macan Electric',
                tag: 'Nuova',
                meta: '2024 · Elettrica · Automatica',
                km: '0 km',
                price: '€ 79.900',
                image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=900'
              },
              {
                name: 'Tesla Model Y Long Range',
                tag: 'Km0',
                meta: '2024 · Elettrica · Automatica',
                km: '2.000 km',
                price: '€ 54.900',
                image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=900'
              }
            ].map((car, i) => (
              <article key={i} className="snap-start shrink-0 w-[240px] md:w-[300px] bg-white rounded-lg border border-[#e6ebf2] overflow-hidden shadow-[0_14px_34px_-28px_rgba(6,22,41,0.38)]">
                <div className="relative h-[176px]">
                  <img src={car.image} alt={car.name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  <span className="absolute top-3 left-3 rounded-full bg-[#1156bf] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-white">{car.tag}</span>
                  <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/88 text-[#061629] flex items-center justify-center backdrop-blur-sm" aria-label="Salva auto">
                    <Heart size={16} strokeWidth={1.8} />
                  </button>
                </div>
                <div className="p-5">
                  <h3 className="text-[15px] font-extrabold text-[#061629] leading-tight mb-2">{car.name}</h3>
                  <p className="text-[12px] text-[#5f6b7a] mb-1">{car.meta}</p>
                  <p className="text-[12px] text-[#5f6b7a] mb-4">{car.km}</p>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[18px] font-extrabold text-[#061629]">{car.price}</p>
                    <Link to="/contatti" className="inline-flex h-9 items-center justify-center rounded-full bg-[#0b2b5b] px-4 text-[12px] font-bold text-white hover:bg-[#0c438f] transition-colors">
                      Info
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VS SECTION — Premium reload */}
      <section className="py-20 bg-[#f6f8fb] border-y border-[#e6ebf2]">
        <div className="ds-container max-w-[1100px]">
          <div className="text-center mb-14">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#0c438f] mb-3">Cercare un'auto</p>
            <h2 className="text-[30px] md:text-[42px] font-extrabold text-[#061629] leading-[1.1] max-w-[780px] mx-auto">
              Stesso obiettivo. <br className="hidden md:block" />
              <span className="text-[#0c438f]">Due strade molto diverse.</span>
            </h2>
          </div>

          <div className="relative">
            {/* Elegant "vs" badge */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
              <div className="w-[64px] h-[64px] rounded-full bg-white shadow-[0_14px_28px_-10px_rgba(6,22,41,0.4)] border border-[#e6ebf2] flex items-center justify-center">
                <span className="text-[20px] font-extrabold italic text-[#0c438f] font-serif leading-none">vs</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {/* CON DIAMANTI — dominant */}
              <div className="bg-[#061629] rounded-lg p-8 md:p-10 text-white shadow-[0_22px_48px_-26px_rgba(6,22,41,0.55)] relative md:pr-14 flex flex-col justify-center">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#7ba6e4] mb-3">Con Diamanti</p>
                <ul className="flex flex-col gap-5">
                  {[
                    '5.000+ veicoli filtrati ogni mese: te ne arrivano 3, tutte reali',
                    'Perizia tecnica completa prima di mettere una firma',
                    'Trattativa quotidiana e leva contrattuale vera',
                    'Pratiche, consegna a domicilio e tagliando inclusi',
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3.5">
                      <div className="w-[22px] h-[22px] rounded-full bg-white/12 border border-white/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-white" strokeWidth={3} />
                      </div>
                      <span className="text-[14.5px] text-white/95 leading-[1.55] font-medium">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* DA SOLO — whispered */}
              <div className="bg-white rounded-lg p-8 md:p-10 border border-[#e6ebf2] md:pl-14 flex flex-col justify-center">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#7b8794] mb-3">Cercando da solo</p>
                <ul className="flex flex-col gap-5">
                  {[
                    'Centinaia di annunci pubblici, tutti già visti dagli altri',
                    'Una verifica visiva e qualche foto sgranata',
                    "Una trattativa contro chi tratta auto da vent'anni",
                    'Bolli, trasporto e post-vendita sulle tue spalle',
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3.5">
                      <div className="w-[22px] h-[22px] rounded-full border border-[#d7e2ef] flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-[9px] h-[1.5px] bg-[#a3adbb] block"></span>
                      </div>
                      <span className="text-[14.5px] text-[#6b7689] leading-[1.55] italic">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/contatti" className="inline-flex h-[46px] items-center justify-center rounded-full bg-[#0b2b5b] px-7 text-[13px] font-bold text-white hover:bg-[#0c438f] transition-colors gap-2">
              Inizia con un consulente <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4.5 TUTTO INCLUSO — 4 leve commerciali */}
      <section className="py-20 bg-white relative overflow-hidden border-t border-[#e6ebf2]">
        <div className="ds-container">
          <div className="text-center mb-12">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#0c438f] mb-3">Tutto compreso</p>
            <h2 className="text-[30px] md:text-[34px] font-extrabold text-[#061629] leading-tight max-w-[760px] mx-auto">
              Non solo l'auto giusta. <span className="text-[#0c438f]">Tutto quello che ti serve.</span>
            </h2>
            <p className="text-[15px] md:text-[16px] text-muted max-w-[680px] mx-auto leading-relaxed mt-5">
              Quattro vantaggi inclusi nel servizio Diamanti Automobili, pensati per togliere ogni ostacolo tra te e la tua prossima auto.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: Repeat,
                tag: 'Permuta',
                title: 'Valutiamo la tua auto attuale',
                text: "Ci pensiamo noi a stimare il valore di mercato del tuo veicolo e a ritirarlo: niente annunci, niente perditempo. La permuta scala direttamente dal prezzo della nuova."
              },
              {
                icon: CreditCard,
                tag: 'Finanziamenti',
                title: 'Rate fino a 120 mesi',
                text: 'Soluzioni di finanziamento personalizzate fino a 120 mesi, con i migliori partner bancari. Rata leggera, accesso a un’auto di livello superiore.'
              },
              {
                icon: Truck,
                tag: 'Consegna',
                title: 'A casa tua, in tutta Italia',
                text: 'Ti consegniamo l\'auto immatricolata, lavata e pronta a partire direttamente sotto casa. Da Bolzano a Trapani, senza mai prendere un treno.'
              },
              {
                icon: Wrench,
                tag: 'Tagliando incluso',
                title: 'Primo tagliando gratis dopo 5.000 km',
                text: 'Dopo i primi 5.000 km percorsi, il primo tagliando è offerto da noi presso officine selezionate. Perché ci siamo anche dopo la consegna.'
              }
            ].map((item, i) => (
              <div key={i} className="relative bg-white border border-[#e6ebf2] rounded-lg p-7 flex flex-col shadow-[0_12px_28px_-24px_rgba(6,22,41,0.32)] hover:shadow-[0_22px_48px_-26px_rgba(6,22,41,0.42)] hover:-translate-y-1 transition-all duration-300">
                <span className="inline-flex self-start mb-5 rounded-full bg-[#0c438f]/8 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#0c438f]">
                  {item.tag}
                </span>
                <div className="w-12 h-12 rounded-full bg-[#0b2b5b] text-white flex items-center justify-center mb-5">
                  <item.icon size={22} strokeWidth={1.6} />
                </div>
                <h3 className="text-[16px] font-extrabold text-[#061629] mb-3 leading-tight">{item.title}</h3>
                <p className="text-[13px] text-muted leading-[1.65]">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/servizi" className="inline-flex h-[46px] items-center justify-center rounded-full bg-[#0b2b5b] px-7 text-[13px] font-bold text-white hover:bg-[#0c438f] transition-colors gap-2">
              Scopri tutti i vantaggi inclusi <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4.6 PERMUTA / VENDITA BANNER */}
      <section className="bg-[#061629] relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
          <div className="relative h-[280px] md:h-auto md:min-h-[460px] order-2 md:order-1">
            <img
              src="/images/fleet-overview.webp"
              alt="Parcheggio di auto premium pronto per la valutazione e il ritiro Diamanti Automobili"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061629] via-[#061629]/30 to-transparent md:bg-gradient-to-r md:from-[#061629]/0 md:via-[#061629]/0 md:to-[#061629]/40"></div>
          </div>

          <div className="px-6 py-14 md:px-12 lg:px-16 md:py-20 flex flex-col items-start justify-center text-white order-1 md:order-2">
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
                <Link
                  to="/valuta-la-tua-auto"
                  className="inline-flex h-[48px] items-center justify-center rounded-full bg-white px-7 text-[13px] font-bold text-[#061629] hover:bg-[#eef3f8] transition-colors gap-2"
                >
                  Richiedi valutazione gratuita <ArrowRight size={15} />
                </Link>
                <Link
                  to="/valuta-la-tua-auto"
                  className="inline-flex h-[48px] items-center justify-center rounded-full bg-transparent border border-white/30 px-7 text-[13px] font-bold text-white hover:bg-white/10 transition-colors"
                >
                  Come funziona la permuta
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PERCHÉ SCEGLIERE (5 cols) */}
      <section className="py-16 bg-white border-t border-[#e6ebf2] relative overflow-hidden">
        <div className="ds-container max-w-[1400px] relative z-10">
          <h2 className="text-center text-[30px] md:text-[34px] font-extrabold text-[#061629] mb-14">Perché scegliere Diamanti Automobili</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 lg:gap-6 text-center lg:divide-x divide-gray-100 px-4">
            {[
              { icon: <ShieldCheck size={24} strokeWidth={1.5} />, title: 'Indipendenza totale', text: 'Non siamo legati a marchi o concessionarie. Lavoriamo solo nel tuo interesse.' },
              { icon: <Star size={24} strokeWidth={1.5} />, title: 'Rete consolidata', text: 'Accesso a partner e canali selezionati in Italia e in Europa, anche fuori dai portali pubblici.' },
              { icon: <CheckCircle2 size={24} strokeWidth={1.5} />, title: 'Competenza specialistica', text: 'Anni di esperienza nel settore auto al servizio della tua scelta.' },
              { icon: <Search size={24} strokeWidth={1.5} />, title: 'Perizia approfondita', text: 'Ogni veicolo è verificato nei dettagli prima di arrivare a te: tecnica, documenti, storia.' },
              { icon: <Settings size={24} strokeWidth={1.5} />, title: 'Supporto end-to-end', text: 'Ti seguiamo dalla ricerca alla consegna, e anche dopo.' }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col items-center pt-8 md:pt-0 ${i !== 0 ? 'md:pl-6 lg:pl-10' : ''} ${i !== 4 ? 'md:pr-6 lg:pr-10' : ''}`}>
                <div className="mb-5 h-12 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border border-[#d7e2ef] flex items-center justify-center text-[#0b2b5b]">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-[15px] font-bold text-[#061629] mb-3 leading-tight">{item.title}</h3>
                <p className="text-[13px] text-muted leading-[1.6]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="py-16 bg-white">
        <div className="ds-container">
          <h2 className="text-center text-[30px] md:text-[34px] font-extrabold text-[#061629] mb-12">Cosa dicono i clienti</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { initials: 'MR', text: "Servizio impeccabile. Il team Diamanti ha trovato l'auto perfetta in tempi record. Consigliatissimo!", name: 'Marco R.', car: 'BMW X5', city: 'Milano' },
              { initials: 'LB', text: 'Professionale, trasparente e sempre disponibile. Consegna a domicilio puntuale e senza pensieri.', name: 'Luca B.', car: 'Audi Q5 Sportback', city: 'Roma' },
              { initials: 'AT', text: 'Non avrei mai trovato questa auto a queste condizioni. Servizio top.', name: 'Alessandro T.', car: 'Mercedes GLC', city: 'Torino' }
            ].map((review, i) => (
              <div key={i} className="bg-white border border-[#e6ebf2] rounded-lg p-8 hover:shadow-[0_18px_42px_-26px_rgba(6,22,41,0.38)] transition-shadow flex flex-col">
                <div className="flex gap-[2px] mb-5">
                  {[1,2,3,4,5].map(star => <Star key={star} size={14} fill="#F59E0B" color="#F59E0B" />)}
                </div>
                <p className="italic text-[18px] text-[#061629] mb-8 flex-1 leading-[1.5]">"{review.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-[#f0f3f7]">
                  <div className="w-11 h-11 rounded-full bg-[#0b2b5b] text-white flex items-center justify-center font-bold text-[13px] tracking-wide shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[#061629] leading-tight">{review.name}</p>
                    <p className="text-[12px] text-muted mt-0.5">{review.car} · {review.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COME FUNZIONA — spostata sotto le testimonianze */}
      <section className="py-14 bg-white relative overflow-hidden border-t border-[#e6ebf2]">
        <div className="ds-container">
          <h2 className="text-center text-[24px] md:text-[28px] font-extrabold text-[#061629] mb-10">Come funziona</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 max-w-6xl mx-auto">
            {[
              { icon: CheckCircle2, title: 'Briefing iniziale', text: 'Raccogliamo esigenze, budget, utilizzo e preferenze.' },
              { icon: Search, title: 'Ricerca selezionata', text: 'Analizziamo il mercato italiano ed europeo per individuare le migliori opportunità.' },
              { icon: ShieldCheck, title: 'Proposta personalizzata', text: 'Ti presentiamo le opzioni migliori, con analisi tecnica e consigli dedicati.' },
              { icon: MapPin, title: 'Consegna e supporto', text: "Gestiamo trattativa, pratiche e consegna a domicilio. E ci sentiamo anche dopo." }
            ].map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center px-4">
                {i !== 3 && (
                  <div className="hidden md:flex absolute top-[19px] left-[calc(50%+38px)] right-[calc(-50%+38px)] items-center z-0">
                    <div className="h-px flex-1 border-t border-dotted border-[#cfd9e6]"></div>
                    <ArrowRight size={14} className="mx-2 text-[#0b2b5b]" strokeWidth={2.2} />
                    <div className="h-px flex-1 border-t border-dotted border-[#cfd9e6]"></div>
                  </div>
                )}
                <div className="relative z-10 w-10 h-10 rounded-full bg-[#0b2b5b] text-white flex items-center justify-center mb-4 shadow-[0_10px_24px_-16px_rgba(6,22,41,0.5)]">
                  <step.icon size={18} strokeWidth={1.9} />
                </div>
                <h3 className="text-[14px] font-extrabold text-[#061629] mb-2 leading-tight">{step.title}</h3>
                <p className="text-[12px] text-muted leading-relaxed max-w-[210px]">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. PRE-FOOTER CTA */}
      <ContactCTA />

    </div>
  );
}
