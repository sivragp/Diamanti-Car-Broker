import { Search, Check, X, ShieldCheck, Star, MapPin, Settings, CheckCircle2, ArrowRight, Heart, Repeat, CreditCard, Truck, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export default function Home() {
  return (
    <div className="bg-white min-h-screen font-sans text-text pt-[74px]">
      <SEO
        title="Diamanti Automobili — Consulente acquisto auto a Roma e in tutta Italia"
        description="Consulente per l'acquisto di auto su misura: ricerca, verifica tecnica, negoziazione e consegna a domicilio. Auto nuove, usate, km 0 e di importazione. Sede a Roma, operiamo in tutta Italia."
        path="/"
      />
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[620px] flex flex-col justify-center items-center text-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bmw-road.png"
            alt="Consulente acquisto auto Diamanti Automobili — auto premium in viaggio"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="ds-container relative z-10 w-full mb-24 mt-0">
          <div className="max-w-2xl">
            <h1 className="text-[38px] md:text-[52px] lg:text-[58px] font-extrabold text-white mb-6 leading-[1.08] text-left [text-shadow:_0_3px_22px_rgb(0_0_0_/_0.55)]">
              Troviamo l'auto giusta. <br/>Ovunque tu sia in Italia.
            </h1>
            <p className="text-[16px] md:text-[18px] text-white mb-8 max-w-[610px] text-left leading-[1.65] font-sans font-medium [text-shadow:_0_2px_16px_rgb(0_0_0_/_0.55)]">
              Diamanti Automobili è il consulente che cerca per te l'auto giusta — nuova, usata, km 0 o di importazione — la verifica nel dettaglio e te la consegna a casa. Permuta, finanziamenti fino a 10 anni e primo tagliando incluso. Da Roma in tutta Italia.
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

        {/* SEARCH FORM OVERLAY */}
        <div className="relative md:absolute md:bottom-[-52px] left-0 right-0 z-20 px-4 mt-10 md:mt-0 mb-[-30px] md:mb-0">
          <div className="ds-container relative">
            <div className="bg-white rounded-lg shadow-[0_22px_48px_-26px_rgba(6,22,41,0.45)] p-4 md:p-5 border border-[#e6ebf2] relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_1.55fr] gap-3 items-end">
                <div className="flex flex-col text-left min-w-0">
                  <label className="text-[11px] font-semibold text-[#7b8794] mb-1">Tipologia</label>
                  <input type="text" placeholder="SUV, Berlina, City car..." className="w-full min-w-0 border-0 bg-white rounded-md h-[44px] px-3 text-[13px] font-semibold text-[#061629] truncate focus:outline-none focus:ring-2 focus:ring-[#d9e6f7]" />
                </div>
                <div className="flex flex-col text-left min-w-0">
                  <label className="text-[11px] font-semibold text-[#7b8794] mb-1">Marca</label>
                  <select className="w-full min-w-0 border-0 bg-white rounded-md h-[44px] px-3 text-[13px] text-[#5f6b7a] focus:outline-none focus:ring-2 focus:ring-[#d9e6f7] appearance-none">
                    <option>Seleziona marca</option>
                  </select>
                </div>
                <div className="flex flex-col text-left min-w-0">
                  <label className="text-[11px] font-semibold text-[#7b8794] mb-1">Modello</label>
                  <select className="w-full min-w-0 border-0 bg-white rounded-md h-[44px] px-3 text-[13px] text-[#5f6b7a] focus:outline-none focus:ring-2 focus:ring-[#d9e6f7] appearance-none">
                    <option>Seleziona modello</option>
                  </select>
                </div>
                <div className="flex flex-col text-left min-w-0">
                  <label className="text-[11px] font-semibold text-[#7b8794] mb-1">Alimentazione</label>
                  <select className="w-full min-w-0 border-0 bg-white rounded-md h-[44px] px-3 text-[13px] text-[#5f6b7a] focus:outline-none focus:ring-2 focus:ring-[#d9e6f7] appearance-none">
                    <option>Benzina, Diesel...</option>
                  </select>
                </div>
                <div className="flex flex-col text-left min-w-0">
                  <label className="text-[11px] font-semibold text-[#7b8794] mb-1">Prezzo</label>
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-2">
                    <input type="text" placeholder="Budget max" className="w-full min-w-0 border-0 bg-white rounded-md h-[44px] px-3 text-[13px] font-semibold text-[#061629] focus:outline-none focus:ring-2 focus:ring-[#d9e6f7]" />
                    <button className="bg-[#0b2b5b] hover:bg-[#0c438f] text-white h-[44px] px-5 rounded-md text-[13px] font-bold whitespace-nowrap transition-colors flex items-center justify-center gap-2">
                      <Search size={15} /> Cerca
                    </button>
                  </div>
                </div>
              </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Search, title: 'Ricerca auto su misura', text: "Cerchiamo l'auto giusta tra migliaia di opportunità in Italia e in Europa, anche tra quelle non pubblicate." },
              { icon: CheckCircle2, title: 'Indipendenti e trasparenti', text: 'Non siamo legati a un marchio o a una concessionaria. Lavoriamo solo nel tuo interesse.' },
              { icon: ShieldCheck, title: 'Verifica tecnica completa', text: 'Controlliamo storia, chilometraggio reale, condizioni e documenti prima di ogni acquisto.' },
              { icon: MapPin, title: 'Consegna a domicilio', text: "Ti consegniamo l'auto pronta all'uso direttamente a casa tua, in tutta Italia." }
            ].map((item, i) => (
              <div key={i} className="border border-[#e6ebf2] rounded-lg p-7 text-center flex flex-col items-center shadow-[0_12px_28px_-24px_rgba(6,22,41,0.32)] hover:shadow-[0_18px_42px_-26px_rgba(6,22,41,0.38)] transition-shadow bg-white">
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
                  <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
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

      {/* 4. PAIN → SOLUTION STORIES */}
      <section className="py-20 bg-[#f6f8fb] border-y border-[#e6ebf2]">
        <div className="ds-container max-w-[1100px]">
          <div className="text-center mb-14">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#0c438f] mb-3">Storie vere</p>
            <h2 className="text-[30px] md:text-[40px] font-extrabold text-[#061629] leading-[1.15] max-w-[820px] mx-auto">
              Quattro storie. <span className="text-[#0c438f]">Quattro motivi per non cercare da soli.</span>
            </h2>
            <p className="text-[15px] md:text-[16px] text-muted max-w-[640px] mx-auto leading-relaxed mt-5">
              Le frustrazioni reali di chi ha provato a fare da solo, e le risposte che diamo ogni giorno ai nostri clienti.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {[
              {
                pain: 'Ho perso tre settimane tra annunci scaduti, foto false e venditori che sparivano nel nulla.',
                solutionTitle: 'Filtriamo migliaia di proposte. Te ne presentiamo tre, e sono tutte reali.',
                solutionTag: 'Scouting selezionato',
                icon: Search,
              },
              {
                pain: "Avevo trovato l'auto perfetta. Peccato che il chilometraggio fosse stato truccato.",
                solutionTitle: 'Perizia 150 punti con diagnosi computerizzata e database km ufficiali. Niente sorprese.',
                solutionTag: 'Verifica tecnica completa',
                icon: ShieldCheck,
              },
              {
                pain: 'Volevo una rata leggera. In concessionaria mi hanno proposto solo finanziamenti cari e brevi.',
                solutionTitle: 'Finanziamenti su misura fino a 10 anni con i nostri partner bancari. Rata costruita sulle tue tasche.',
                solutionTag: 'Finanziamento dedicato',
                icon: CreditCard,
              },
              {
                pain: 'Vivo in Sicilia. Le occasioni migliori erano tutte al Nord, irraggiungibili per me.',
                solutionTitle: "Cerchiamo in tutta Europa e ti consegniamo l'auto sotto casa. Ovunque tu sia in Italia.",
                solutionTag: 'Consegna a domicilio',
                icon: Truck,
              }
            ].map((story, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden border border-[#e6ebf2] shadow-[0_14px_34px_-28px_rgba(6,22,41,0.4)] hover:shadow-[0_22px_48px_-26px_rgba(6,22,41,0.45)] transition-shadow">
                {/* Pain side */}
                <div className="p-8 md:p-10 bg-white relative border-b md:border-b-0 md:border-r border-[#e6ebf2]">
                  <span aria-hidden="true" className="absolute top-3 left-7 text-[68px] md:text-[88px] font-serif text-[#0c438f]/10 leading-none select-none pointer-events-none">“</span>
                  <p className="relative text-[15px] md:text-[16.5px] italic text-[#061629] leading-[1.65] pt-7 pr-2">
                    {story.pain}
                  </p>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#7b8794] mt-6 flex items-center gap-2">
                    <span className="inline-block w-6 h-px bg-[#cfd9e6]"></span>
                    Prima di Diamanti
                  </p>
                </div>

                {/* Solution side */}
                <div className="p-8 md:p-10 bg-[#061629] text-white relative flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <story.icon size={18} strokeWidth={1.8} />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-white/72">
                        {story.solutionTag}
                      </span>
                    </div>
                    <p className="text-[15px] md:text-[16.5px] text-white leading-[1.6] font-medium">
                      {story.solutionTitle}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#7ba6e4]">
                    <ArrowRight size={14} strokeWidth={2.4} />
                    La risposta Diamanti
                  </div>
                </div>
              </div>
            ))}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                title: 'Rate fino a 10 anni',
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

      {/* 5. COME FUNZIONA */}
      <section className="py-14 bg-white relative overflow-hidden">
        <div className="ds-container">
          <h2 className="text-center text-[24px] md:text-[28px] font-extrabold text-[#061629] mb-10">Come funziona</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 max-w-6xl mx-auto">
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

      {/* 6. BANNER TAYCAN */}
      <section className="py-10 bg-white">
        <div className="ds-container">
          <div className="bg-[#f6f8fb] rounded-lg overflow-hidden flex flex-col md:flex-row items-center border border-[#e6ebf2] max-h-[400px] shadow-[0_14px_34px_-28px_rgba(6,22,41,0.38)]">
            <div className="w-full md:w-1/2 h-[250px] md:h-[400px]">
              <img src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=1200" alt="Porsche Taycan" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col items-start bg-[#f6f8fb] justify-center h-full">
              <h2 className="text-[26px] md:text-[32px] font-extrabold text-[#061629] mb-4 leading-tight">
                Oltre 5.000 veicoli analizzati ogni mese.
              </h2>
              <p className="text-[15px] md:text-[16px] text-muted mb-6 leading-relaxed font-sans">
                Monitoriamo il mercato in tempo reale: auto nuove, km 0, aziendali e usato premium, in Italia e in Europa. Selezioniamo solo le proposte davvero adatte a te.
              </p>
              <Link to="/come-funziona" className="bg-[#0b2b5b] hover:bg-[#0c438f] text-white h-[44px] px-6 rounded-full text-[14px] font-bold flex items-center justify-center gap-2 transition-colors">
                Scopri come funziona <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PERCHÉ SCEGLIERE (5 cols) */}
      <section className="py-16 bg-white border-t border-[#e6ebf2] relative overflow-hidden">
        <div className="ds-container max-w-[1400px] relative z-10">
          <h2 className="text-center text-[30px] md:text-[34px] font-extrabold text-[#061629] mb-14">Perché scegliere Diamanti Automobili</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100 px-4">
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
              { initials: 'MR', text: "Servizio impeccabile. Thomas ha trovato l'auto perfetta in tempi record. Consigliatissimo!", name: 'Marco R.', car: 'BMW X5', city: 'Milano' },
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

      {/* 10. PRE-FOOTER CTA */}
      <section className="relative py-[74px] bg-[#061629] text-white overflow-hidden">
        {/* Background headlight image right aligned */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-40">
          <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200" alt="Headlights" className="w-full h-full object-cover object-left" />
        </div>
        {/* Dark gradient to blend the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061629] via-[#061629]/92 to-transparent"></div>
        
        <div className="ds-container relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-[34px] md:text-[42px] font-extrabold mb-4 leading-tight">
              Hai già in mente la tua <br/>prossima auto?
            </h2>
            <p className="text-[17px] text-white/90 mb-8 leading-relaxed font-sans">
              Parla con un consulente Diamanti Automobili.<br/>
              La cerchiamo noi: con permuta, finanziamento fino a 10 anni e consegna a domicilio.
            </p>
            <Link to="/contatti" className="inline-flex bg-white hover:bg-gray-100 text-[#061629] h-[46px] px-8 rounded-full text-[14px] font-bold items-center justify-center transition-colors">
              Richiedi una consulenza <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>



    </div>
  );
}
