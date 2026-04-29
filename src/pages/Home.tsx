import { Search, Check, X, ShieldCheck, Target, Star, MapPin, Settings, CheckCircle2, ArrowRight } from 'lucide-react';
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#061629]/92 via-[#061629]/48 to-[#061629]/8"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#061629] to-transparent"></div>
        </div>

        <div className="ds-container relative z-10 w-full mb-24 mt-0">
          <div className="max-w-2xl">
            <h1 className="text-[38px] md:text-[52px] lg:text-[58px] font-extrabold text-white mb-6 leading-[1.08] text-left">
              Troviamo l'auto giusta <br/>con il supporto di Thomas.
            </h1>
            <p className="text-[16px] md:text-[18px] text-white/92 mb-8 max-w-[610px] text-left leading-[1.65] font-sans font-medium">
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
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-end">
                <div className="flex flex-col text-left">
                  <label className="text-[11px] font-semibold text-[#7b8794] mb-1">Tipologia</label>
                  <input type="text" placeholder="SUV, Berlina, City car..." className="w-full border-0 bg-white rounded-md h-[44px] px-2 text-[13px] font-semibold text-[#061629] focus:outline-none focus:ring-2 focus:ring-[#d9e6f7]" />
                </div>
                <div className="flex flex-col text-left">
                  <label className="text-[11px] font-semibold text-[#7b8794] mb-1">Marca</label>
                  <select className="w-full border-0 bg-white rounded-md h-[44px] px-2 text-[13px] text-[#5f6b7a] focus:outline-none focus:ring-2 focus:ring-[#d9e6f7] appearance-none">
                    <option>Seleziona marca</option>
                  </select>
                </div>
                <div className="flex flex-col text-left">
                  <label className="text-[11px] font-semibold text-[#7b8794] mb-1">Modello</label>
                  <select className="w-full border-0 bg-white rounded-md h-[44px] px-2 text-[13px] text-[#5f6b7a] focus:outline-none focus:ring-2 focus:ring-[#d9e6f7] appearance-none">
                    <option>Seleziona modello</option>
                  </select>
                </div>
                <div className="flex flex-col text-left">
                  <label className="text-[11px] font-semibold text-[#7b8794] mb-1">Alimentazione</label>
                  <select className="w-full border-0 bg-white rounded-md h-[44px] px-2 text-[13px] text-[#5f6b7a] focus:outline-none focus:ring-2 focus:ring-[#d9e6f7] appearance-none">
                    <option>Benzina, Diesel...</option>
                  </select>
                </div>
                <div className="flex flex-col text-left">
                  <label className="text-[11px] font-semibold text-[#7b8794] mb-1">Prezzo</label>
                  <div className="flex gap-2">
                    <input type="text" placeholder="Budget massimo" className="w-full border-0 bg-white rounded-md h-[44px] px-2 text-[13px] font-semibold text-[#061629] focus:outline-none focus:ring-2 focus:ring-[#d9e6f7]" />
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

      {/* 3. DIAMANTI CAR BROKER 4 CARDS */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Decorative car silhouette - faded right */}
        <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-[0.15] pointer-events-none">
          <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="ds-container relative z-10">
          <h2 className="text-center text-[30px] md:text-[34px] mb-12 font-extrabold text-[#061629]">Diamanti Car Broker</h2>
          
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

      {/* 4. VS SECTION */}
      <section className="py-16 bg-[#f6f8fb]">
        <div className="ds-container max-w-[1000px]">
          <h2 className="text-center text-[28px] md:text-[34px] font-extrabold mb-12 max-w-[800px] mx-auto leading-tight text-[#061629]">
            Perché contattare un car broker prima di cercare l'auto da solo
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

          {/* Happy customer lifestyle strip */}
          <div className="mt-16 grid grid-cols-3 gap-8">
            <div className="h-[300px] rounded-lg overflow-hidden shadow-[0_18px_42px_-25px_rgba(6,22,41,0.48)] transition-all duration-500 hover:scale-[1.02]">
              <img src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800" alt="Cliente felice alla guida" className="w-full h-full object-cover" />
            </div>
            <div className="h-[300px] rounded-lg overflow-hidden shadow-[0_18px_42px_-25px_rgba(6,22,41,0.48)] transition-all duration-500 hover:scale-[1.02]">
              <img src="https://images.unsplash.com/photo-1517524285303-d6fc683dddf8?auto=format&fit=crop&q=80&w=800" alt="Consegna auto premium" className="w-full h-full object-cover" />
            </div>
            <div className="h-[300px] rounded-lg overflow-hidden shadow-[0_18px_42px_-25px_rgba(6,22,41,0.48)] transition-all duration-500 hover:scale-[1.02]">
              <img src="https://images.unsplash.com/photo-1562515009-519284ca627b?auto=format&fit=crop&q=80&w=800" alt="Soddisfazione post acquisto" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. COME FUNZIONA */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Decorative car images framing the section */}
        <div className="absolute left-[-50px] top-[10%] w-[400px] h-[300px] opacity-[0.1] pointer-events-none rotate-[-15deg]">
          <img src="https://images.unsplash.com/photo-1494976388531-d1058494ceb8?auto=format&fit=crop&q=80&w=800" alt="" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="absolute right-[-50px] bottom-[10%] w-[400px] h-[300px] opacity-[0.1] pointer-events-none rotate-[15deg]">
          <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800" alt="" className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="ds-container">
          <h2 className="text-center text-[30px] md:text-[34px] font-extrabold text-[#061629] mb-16">Come funziona</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 max-w-5xl mx-auto relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] border-t-[2px] border-dotted border-gray-200 z-0"></div>
            <div className="hidden md:block absolute top-[260px] left-[15%] right-[15%] border-t-[2px] border-dotted border-gray-200 z-0"></div>
            
            {[
              { num: 1, icon: CheckCircle2, title: 'Primo contatto', text: 'Breve call per capire esigenze, budget e tempistiche.' },
              { num: 2, icon: Target, title: 'Profilazione auto', text: 'Definiamo tipologia, marca, modello e priorità.' },
              { num: 3, icon: Search, title: 'Ricerca mirata', text: 'Selezioniamo le migliori opportunità sul mercato.' },
              { num: 4, icon: ShieldCheck, title: 'Verifica e proposta', text: 'Controlli, analisi e presentazione delle opzioni adatte.' },
              { num: 5, icon: Settings, title: 'Gestione acquisto', text: 'Supporto nella trattativa, pratiche e coordinamento.' },
              { num: 6, icon: MapPin, title: 'Consegna a domicilio', text: 'L\'auto arriva a casa tua pronta all\'uso.' }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
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
                Non abbiamo l'auto in showroom.
              </h2>
              <p className="text-[15px] md:text-[16px] text-muted mb-6 leading-relaxed font-sans">
                Perché ogni ricerca è unica. Troviamo l'auto giusta per te, non quella che abbiamo in pronta consegna.
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
        {/* Decorative fleet image top-right */}
        <div className="absolute right-[-100px] top-[-50px] w-[700px] h-[400px] opacity-[0.08] pointer-events-none rotate-[-5deg]">
          <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="ds-container max-w-[1400px] relative z-10">
          <h2 className="text-center text-[30px] md:text-[34px] font-extrabold text-[#061629] mb-14">Perché scegliere Diamanti Car Broker</h2>
          
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
      <section className="py-14 md:py-16 bg-[#f6f8fb] relative overflow-hidden">
        {/* More prominent car background for founder section */}
        <div className="absolute left-[-50px] top-[-50px] w-[700px] h-[500px] opacity-[0.12] pointer-events-none rotate-[5deg]">
          <img src="https://images.unsplash.com/photo-1493238507154-203aa98ed081?auto=format&fit=crop&q=80&w=1200" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="ds-container relative z-10">
          <div className="bg-white rounded-none md:rounded-lg overflow-hidden flex flex-col md:flex-row items-center border border-[#e6ebf2] shadow-[0_16px_36px_-28px_rgba(6,22,41,0.36)] max-h-auto md:max-h-[460px]">
            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center h-full">
              <h2 className="text-[28px] md:text-[34px] font-extrabold text-[#061629] mb-4 leading-[1.15]">
                Ciao, sono Thomas di<br/>Diamanti Car Broker
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
            <div className="w-full md:w-1/2 h-[350px] md:h-[460px]">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" alt="Thomas - Founder" className="w-full h-full object-cover object-[center_20%]" />
            </div>
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
              Parlane con Thomas di Diamanti Car Broker.<br/>
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
