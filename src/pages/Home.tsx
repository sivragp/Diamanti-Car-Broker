import { Search, Check, X, ShieldCheck, Target, Star, MapPin, Settings, CheckCircle2, ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-white min-h-screen font-sans text-text pt-[74px]">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[620px] flex flex-col justify-center items-center text-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&q=80&w=2000" 
            alt="Auto in movimento" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="ds-container relative z-10 w-full mb-24 mt-0">
          <div className="max-w-2xl">
            <h1 className="text-[38px] md:text-[52px] lg:text-[58px] font-extrabold text-white mb-6 leading-[1.08] text-left [text-shadow:_0_3px_22px_rgb(0_0_0_/_0.55)]">
              Troviamo l'auto giusta <br/>con il supporto di Thomas.
            </h1>
            <p className="text-[16px] md:text-[18px] text-white mb-8 max-w-[610px] text-left leading-[1.65] font-sans font-medium [text-shadow:_0_2px_16px_rgb(0_0_0_/_0.55)]">
              Cerchi un'auto nuova o usata? La cerchiamo noi su tutto il mercato, verifichiamo ogni dettaglio e te la consegniamo a casa, pronta all'uso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/consulenza" className="inline-flex h-[48px] items-center justify-center rounded-full bg-[#1156bf] px-7 text-[14px] font-bold text-white shadow-[0_14px_28px_-18px_rgba(17,86,191,0.9)] transition-colors hover:bg-[#0c438f]">
                Richiedi consulenza <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link to="/servizi" className="inline-flex h-[48px] items-center justify-center rounded-full bg-white px-7 text-[14px] font-bold text-[#0b2b5b] shadow-[0_14px_28px_-18px_rgba(255,255,255,0.8)] transition-colors hover:bg-[#f6f8fb]">
                Scopri il servizio
              </Link>
            </div>
          </div>
        </div>

        {/* SEARCH FORM OVERLAY */}
        <div className="absolute bottom-[-42px] md:bottom-[-52px] left-0 right-0 z-20 px-4">
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

      {/* 2. BRANDS - Infinite scrolling carousel */}
      <section className="bg-[#061629] pt-[112px] pb-12 text-center text-white overflow-hidden">
        <div className="ds-container">
          <p className="text-[13px] text-white/72 mb-8 font-semibold">I brand con cui lavoriamo</p>
        </div>
        
        <div className="relative w-full">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#061629] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#061629] to-transparent z-10"></div>
          
          {/* Scrolling track */}
          <div className="flex animate-scroll-brands">
            {/* First set */}
            {[
              { name: 'Mercedes-Benz', slug: 'mercedes-benz' },
              { name: 'BMW', slug: 'bmw' },
              { name: 'Audi', slug: 'audi' },
              { name: 'Porsche', slug: 'porsche' },
              { name: 'Volkswagen', slug: 'volkswagen' },
              { name: 'Toyota', slug: 'toyota' },
              { name: 'Ferrari', slug: 'ferrari' },
              { name: 'Lamborghini', slug: 'lamborghini' },
              { name: 'Maserati', slug: 'maserati' },
              { name: 'Alfa Romeo', slug: 'alfa-romeo' },
              { name: 'Land Rover', slug: 'land-rover' },
              { name: 'Jaguar', slug: 'jaguar' },
              { name: 'Volvo', slug: 'volvo' },
              { name: 'Tesla', slug: 'tesla' },
              { name: 'Ford', slug: 'ford' },
              { name: 'Hyundai', slug: 'hyundai' },
              { name: 'Kia', slug: 'kia' },
              { name: 'Nissan', slug: 'nissan' },
              { name: 'Honda', slug: 'honda' },
              { name: 'Mazda', slug: 'mazda' },
              { name: 'Peugeot', slug: 'peugeot' },
              { name: 'Renault', slug: 'renault' },
              { name: 'FIAT', slug: 'fiat' },
              { name: 'MINI', slug: 'mini' }
            ].map((brand, i) => (
              <div key={`a-${i}`} className="flex-shrink-0 w-[140px] h-[60px] mx-6 flex items-center justify-center opacity-50 hover:opacity-90 transition-opacity">
                <img 
                  src={`https://cdn.simpleicons.org/${brand.slug.replace(/-/g, '')}/ffffff`} 
                  alt={brand.name} 
                  className="h-[32px] w-auto max-w-[100px] object-contain"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `<span class="text-[13px] font-bold tracking-wider text-white/70 uppercase">${brand.name}</span>`;
                    }
                  }}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[
              { name: 'Mercedes-Benz', slug: 'mercedes-benz' },
              { name: 'BMW', slug: 'bmw' },
              { name: 'Audi', slug: 'audi' },
              { name: 'Porsche', slug: 'porsche' },
              { name: 'Volkswagen', slug: 'volkswagen' },
              { name: 'Toyota', slug: 'toyota' },
              { name: 'Ferrari', slug: 'ferrari' },
              { name: 'Lamborghini', slug: 'lamborghini' },
              { name: 'Maserati', slug: 'maserati' },
              { name: 'Alfa Romeo', slug: 'alfa-romeo' },
              { name: 'Land Rover', slug: 'land-rover' },
              { name: 'Jaguar', slug: 'jaguar' },
              { name: 'Volvo', slug: 'volvo' },
              { name: 'Tesla', slug: 'tesla' },
              { name: 'Ford', slug: 'ford' },
              { name: 'Hyundai', slug: 'hyundai' },
              { name: 'Kia', slug: 'kia' },
              { name: 'Nissan', slug: 'nissan' },
              { name: 'Honda', slug: 'honda' },
              { name: 'Mazda', slug: 'mazda' },
              { name: 'Peugeot', slug: 'peugeot' },
              { name: 'Renault', slug: 'renault' },
              { name: 'FIAT', slug: 'fiat' },
              { name: 'MINI', slug: 'mini' }
            ].map((brand, i) => (
              <div key={`b-${i}`} className="flex-shrink-0 w-[140px] h-[60px] mx-6 flex items-center justify-center opacity-50 hover:opacity-90 transition-opacity">
                <img 
                  src={`https://cdn.simpleicons.org/${brand.slug.replace(/-/g, '')}/ffffff`} 
                  alt={brand.name} 
                  className="h-[32px] w-auto max-w-[100px] object-contain"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `<span class="text-[13px] font-bold tracking-wider text-white/70 uppercase">${brand.name}</span>`;
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DIAMANTI AUTOMOBILI 4 CARDS */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="ds-container relative z-10">
          <h2 className="text-center text-[30px] md:text-[34px] mb-12 font-extrabold text-[#061629]">Diamanti Automobili</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Search, title: 'Ricerca su misura', text: 'Troviamo l\'auto perfetta per te tra migliaia di opportunità, anche introvabili.' },
              { icon: CheckCircle2, title: 'Nessun costo aggiuntivo', text: 'Il nostro servizio è gratuito per te: siamo remunerati dalla concessionaria.' },
              { icon: ShieldCheck, title: 'Verifica e trasparenza', text: 'Controlli approfonditi, cronologia e documenti verificati per la massima sicurezza.' },
              { icon: MapPin, title: 'Consegna a domicilio', text: 'Ovunque tu sia, te la consegniamo a casa tua con la massima cura.' }
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
              <article key={i} className="snap-start shrink-0 w-[280px] md:w-[300px] bg-white rounded-lg border border-[#e6ebf2] overflow-hidden shadow-[0_14px_34px_-28px_rgba(6,22,41,0.38)]">
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

      {/* 4. VS SECTION */}
      <section className="py-16 bg-[#f6f8fb]">
        <div className="ds-container max-w-[1000px]">
          <h2 className="text-center text-[28px] md:text-[34px] font-extrabold mb-12 max-w-[800px] mx-auto leading-tight text-[#061629]">
            Perché contattare un consulente auto prima di cercare l'auto da solo
          </h2>
          
          <div className="relative">
            {/* VS Badge */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[54px] h-[54px] bg-[#0b2b5b] rounded-full text-white font-bold text-[18px] items-center justify-center z-10 border-4 border-[#f6f8fb]">
              VS
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Left Column (Positive) */}
              <div className="bg-white rounded-lg p-8 shadow-[0_16px_34px_-26px_rgba(6,22,41,0.35)] border border-[#e6ebf2]">
                <ul className="flex flex-col gap-6">
                  {[
                    'Risparmi tempo, soldi e stress',
                    'Accesso a offerte esclusive e introvabili',
                    'Nessun vincolo con brand o rivenditori',
                    'Trattativa esperta al tuo servizio',
                    'Verifiche tecniche e storiche sempre incluse',
                    'Supporto dedicato dall\'inizio alla fine'
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

              {/* Right Column (Negative) */}
              <div className="bg-[#eef3f8] rounded-lg p-8 border border-[#dfe7f0]">
                <ul className="flex flex-col gap-6">
                  <li className="flex items-center gap-4 mb-2">
                    <div className="w-[22px] h-[22px] rounded-full border border-gray-400 flex items-center justify-center shrink-0">
                      <X size={12} className="text-[#061629]" strokeWidth={3} />
                    </div>
                    <span className="text-[16px] text-[#061629] font-bold">Cercare da solo è più rischioso</span>
                  </li>
                  {[
                    'Offerte limitate ai canali pubblici',
                    'Rischio di costi nascosti e sorprese',
                    'Trattative senza leva e senza comparabilità',
                    'Perdita di tempo tra annunci e venditori privati',
                    'Nessun supporto burocratico né post-vendita'
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

      {/* 5. COME FUNZIONA */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="ds-container">
          <h2 className="text-center text-[30px] md:text-[34px] font-extrabold text-[#061629] mb-16">Come funziona</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 max-w-5xl mx-auto relative">
            {[
              { num: 1, icon: CheckCircle2, title: 'Primo contatto', text: 'Breve call per capire esigenze, budget e tempistiche.' },
              { num: 2, icon: Target, title: 'Profilazione auto', text: 'Definiamo tipologia, marca, modello e priorità.' },
              { num: 3, icon: Search, title: 'Ricerca mirata', text: 'Selezioniamo le migliori opportunità sul mercato.' },
              { num: 4, icon: ShieldCheck, title: 'Verifica e proposta', text: 'Controlli, analisi e presentazione delle opzioni adatte.' },
              { num: 5, icon: Settings, title: 'Gestione acquisto', text: 'Supporto nella trattativa, pratiche e coordinamento.' },
              { num: 6, icon: MapPin, title: 'Consegna a domicilio', text: 'L\'auto arriva a casa tua pronta all\'uso.' }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                {i % 3 !== 2 && (
                  <div className="hidden md:block absolute top-[24px] left-1/2 w-[calc(100%+3rem)] border-t-[2px] border-dotted border-[#dfe7f0] z-0"></div>
                )}
                <div className="absolute -top-[26px] w-12 h-12 rounded-full bg-[#0b2b5b] text-white font-sans font-bold text-[16px] flex items-center justify-center border-[5px] border-white">
                  {step.num}
                </div>
                <div className="bg-white border border-[#e6ebf2] rounded-lg pt-12 pb-8 px-6 w-full h-full flex flex-col items-center shadow-[0_12px_28px_-25px_rgba(6,22,41,0.32)]">
                  <step.icon className="text-[#061629] mb-4 opacity-90" size={28} strokeWidth={1.5} />
                  <h3 className="text-[16px] font-extrabold text-[#061629] mb-3">{step.title}</h3>
                  <p className="text-[14px] text-muted leading-relaxed">{step.text}</p>
                </div>
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
                Ampia scelta 5000+ veicoli.
              </h2>
              <p className="text-[15px] md:text-[16px] text-muted mb-6 leading-relaxed font-sans">
                Selezioniamo ogni giorno opportunità disponibili, km 0, aziendali e usato premium in Italia ed Europa.
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
              { icon: <ShieldCheck size={24} strokeWidth={1.5} />, title: 'Indipendenza totale', text: 'Non siamo legati a marchi o concessionarie, lavoriamo solo per te.' },
              { icon: <Star size={24} strokeWidth={1.5} />, title: 'Esperienza e rete', text: 'Accesso a una rete selezionata di partner e canali esclusivi in Italia ed Europa.' },
              { icon: <CheckCircle2 size={24} strokeWidth={1.5} />, title: 'Competenza e passione', text: 'Anni di esperienza nel settore auto al servizio delle tue esigenze.' },
              { icon: <Search size={24} strokeWidth={1.5} />, title: 'Verifica garantita', text: 'Ogni veicolo viene sottoposto a rigorosi controlli prima della consegna.' },
              { icon: <Settings size={24} strokeWidth={1.5} />, title: 'Supporto end-to-end', text: 'Ti seguiamo in ogni fase, anche dopo la consegna dell\'auto.' }
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

      {/* 8. FOUNDER */}
      <section className="bg-[#f6f8fb]">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <div className="bg-white px-5 py-14 md:py-20 lg:pl-[max(2rem,calc((100vw-1260px)/2+2rem))] lg:pr-16 flex flex-col items-start justify-center">
            <div className="max-w-[620px]">
              <h2 className="text-[28px] md:text-[34px] font-extrabold text-[#061629] mb-4 leading-[1.15]">
                Ciao, sono Thomas di<br/>Diamanti Automobili
              </h2>
              <p className="text-[15px] text-[#061629] mb-4 leading-relaxed">
                La mia missione è trovarti l'auto perfetta, senza stress e senza rischi. Mi occupo di ogni dettaglio, dalla ricerca alla consegna, con trasparenza e competenza.
              </p>
              <p className="text-[15px] text-[#061629] mb-8 leading-relaxed font-sans font-medium">
                Tu raccontami cosa cerchi, al resto pensiamo noi.
              </p>
              <Link to="/chi-siamo" className="bg-[#0b2b5b] hover:bg-[#0c438f] text-white h-[44px] px-6 rounded-full text-[14px] font-bold flex items-center justify-center transition-colors">
                Scopri di più
              </Link>
            </div>
          </div>
          <div className="w-full h-[360px] md:h-[560px]">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000" alt="Thomas - Founder" className="w-full h-full object-cover object-[center_20%]" />
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="py-16 bg-white">
        <div className="ds-container">
          <h2 className="text-center text-[30px] md:text-[34px] font-extrabold text-[#061629] mb-12">Cosa dicono i clienti</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&q=80&w=800", text: "Servizio impeccabile. Thomas ha trovato l'auto perfetta in tempi record. Consigliatissimo!", name: "Marco R. – BMW X5" },
              { img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=800", text: "Professionale, trasparente e sempre disponibile. Consegna a domicilio puntuale e senza pensieri.", name: "Luca B. – Audi Q5 Sportback" },
              { img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800", text: "Non avrei mai trovato questa auto a queste condizioni. TOP service!", name: "Alessandro T. – Mercedes GLC" }
            ].map((review, i) => (
              <div key={i} className="bg-white border border-[#e6ebf2] rounded-lg overflow-hidden hover:shadow-[0_18px_42px_-26px_rgba(6,22,41,0.38)] transition-shadow flex flex-col">
                <div className="h-[220px] w-full">
                  <img src={review.img} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex gap-[2px] mb-5">
                    {[1,2,3,4,5].map(star => <Star key={star} size={14} fill="#F59E0B" color="#F59E0B" />)}
                  </div>
                  <p className="text-[15px] text-[#061629] mb-6 flex-1 italic leading-[1.6]">"{review.text}"</p>
                  <p className="text-[13px] font-sans font-bold text-[#061629] uppercase tracking-wide">{review.name}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination dots mock */}
          <div className="flex justify-center gap-3 mt-12">
            <div className="w-2.5 h-2.5 rounded-full bg-[#061629]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
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
              Parlane con Thomas di Diamanti Automobili.<br/>
              La cerchiamo noi, per te.
            </p>
            <Link to="/consulenza" className="inline-flex bg-white hover:bg-gray-100 text-[#061629] h-[46px] px-8 rounded-full text-[14px] font-bold items-center justify-center transition-colors">
              Richiedi ora la tua ricerca <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>



    </div>
  );
}
