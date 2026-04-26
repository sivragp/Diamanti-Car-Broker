import { Search, Check, X, ShieldCheck, Euro, Headset, Target, Clock, Star, MapPin, Building2, Mail, Phone, Instagram, Facebook, Linkedin, Settings, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-surface min-h-screen font-sans text-text pt-[80px]">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[550px] flex flex-col justify-center items-center text-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-[#0A1526]">
          <img 
            src="https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&q=80&w=2000" 
            alt="Auto in movimento" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>

        <div className="ds-container relative z-10 w-full mb-16 mt-0">
          <div className="max-w-3xl">
            <h1 className="text-[44px] md:text-[56px] lg:text-[64px] font-serif font-bold text-white mb-6 leading-[1.05] text-left">
              Troviamo l'auto giusta <br/>per te, senza farti <br/>perdere tempo.
            </h1>
            <p className="text-[17px] md:text-[19px] text-white/90 mb-10 max-w-[600px] text-left leading-[1.6] font-sans">
              Cerchi un'auto nuova o usata? La cerchiamo noi su tutto il mercato, verifichiamo ogni dettaglio e te la consegniamo a casa, pronta all'uso.
            </p>
          </div>
        </div>

        {/* SEARCH FORM OVERLAY */}
        <div className="absolute bottom-[-50px] md:bottom-[-60px] left-0 right-0 z-20 px-4">
          <div className="ds-container">
            <div className="bg-white rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] p-8 border border-gray-100">
              <h3 className="font-serif text-[22px] font-bold text-[#0A1526] mb-6 text-left">Richiedi la tua auto, la cerchiamo noi per te.</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-5 items-end">
                <div className="flex flex-col text-left">
                  <label className="text-[12px] font-bold text-[#0A1526] mb-2">Tipologia</label>
                  <input type="text" placeholder="SUV, Berlina, City car..." className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] focus:outline-none focus:border-[#0A1526]" />
                </div>
                <div className="flex flex-col text-left">
                  <label className="text-[12px] font-bold text-[#0A1526] mb-2">Marca</label>
                  <select className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] text-gray-500 focus:outline-none focus:border-[#0A1526] bg-white appearance-none">
                    <option>Seleziona marca</option>
                  </select>
                </div>
                <div className="flex flex-col text-left">
                  <label className="text-[12px] font-bold text-[#0A1526] mb-2">Modello</label>
                  <select className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] text-gray-500 focus:outline-none focus:border-[#0A1526] bg-white appearance-none">
                    <option>Seleziona modello</option>
                  </select>
                </div>
                <div className="flex flex-col text-left">
                  <label className="text-[12px] font-bold text-[#0A1526] mb-2">Alimentazione</label>
                  <select className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] text-gray-500 focus:outline-none focus:border-[#0A1526] bg-white appearance-none">
                    <option>Benzina, Diesel...</option>
                  </select>
                </div>
                <div className="flex flex-col text-left">
                  <label className="text-[12px] font-bold text-[#0A1526] mb-2">Prezzo</label>
                  <div className="flex gap-3">
                    <input type="text" placeholder="Budget massimo" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] focus:outline-none focus:border-[#0A1526]" />
                    <button className="bg-[#0A1526] hover:bg-gray-800 text-white h-[46px] px-6 rounded-md text-[13px] font-bold whitespace-nowrap transition-colors flex items-center justify-center gap-2">
                      Invia richiesta <span className="ml-1">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRANDS */}
      <section className="bg-[#0A1526] pt-[120px] pb-14 text-center text-white">
        <div className="ds-container">
          <p className="text-[14px] text-white/60 mb-10 font-sans">Lavoriamo con i marchi dei leader auto</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60">
            {/* SVG Logos Placeholders for mockup matching */}
            <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center"><span className="text-[10px]">MB</span></div>
            <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center"><span className="text-[10px]">BMW</span></div>
            <div className="w-12 h-6 flex items-center justify-center"><span className="text-[12px] font-bold">Audi</span></div>
            <div className="w-12 h-6 flex items-center justify-center"><span className="text-[12px] font-serif">Porsche</span></div>
            <div className="w-12 h-8 flex items-center justify-center"><span className="text-[10px] text-center leading-tight">LAND<br/>ROVER</span></div>
            <div className="w-8 h-10 flex items-center justify-center"><span className="text-[16px] font-serif">T</span></div>
            <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center"><span className="text-[10px]">VW</span></div>
            <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center"><span className="text-[10px]">L</span></div>
            <div className="w-8 h-2 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 3. DIAMANTI CAR BROKER 4 CARDS */}
      <section className="py-24 bg-white">
        <div className="ds-container">
          <h2 className="text-center text-[36px] font-serif mb-16 font-bold text-[#0A1526]">Diamanti Car Broker</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Search, title: 'Ricerca su misura', text: 'Troviamo l\'auto perfetta per te tra migliaia di opportunità, anche introvabili.' },
              { icon: Euro, title: 'Nessun costo aggiuntivo', text: 'Il nostro servizio è gratuito per te: siamo remunerati dalla concessionaria.' },
              { icon: ShieldCheck, title: 'Verifica e trasparenza', text: 'Controlli approfonditi, cronologia e documenti verificati per la massima sicurezza.' },
              { icon: MapPin, title: 'Consegna a domicilio', text: 'Ovunque tu sia, te la consegniamo a casa tua con la massima cura.' }
            ].map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-[12px] p-8 text-center flex flex-col items-center hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-shadow bg-white">
                <div className="w-14 h-14 rounded-full bg-[#0A1526] text-white flex items-center justify-center mb-6">
                  <item.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[18px] font-bold text-[#0A1526] mb-3">{item.title}</h3>
                <p className="text-[14px] text-muted leading-[1.6]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VS SECTION */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="ds-container max-w-[1000px]">
          <h2 className="text-center text-[36px] font-serif font-bold mb-16 max-w-[800px] mx-auto leading-tight text-[#0A1526]">
            Perché contattare un car broker prima di cercare l'auto da solo
          </h2>
          
          <div className="relative">
            {/* VS Badge */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-[#0A1526] rounded-full text-white font-serif font-bold text-[22px] items-center justify-center z-10 border-4 border-[#f8fafc]">
              VS
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Left Column (Positive) */}
              <div className="bg-white rounded-3xl p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100">
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
                        <Check size={12} className="text-[#0A1526]" strokeWidth={3} />
                      </div>
                      <span className="text-[15px] text-[#0A1526] font-sans">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column (Negative) */}
              <div className="bg-[#eff2f6] rounded-3xl p-10 border border-transparent">
                <ul className="flex flex-col gap-6">
                  <li className="flex items-center gap-4 mb-2">
                    <div className="w-[22px] h-[22px] rounded-full border border-gray-400 flex items-center justify-center shrink-0">
                      <X size={12} className="text-[#0A1526]" strokeWidth={3} />
                    </div>
                    <span className="text-[16px] text-[#0A1526] font-bold">Cercare da solo è più rischioso</span>
                  </li>
                  {[
                    'Offerte limitate ai canali pubblici',
                    'Rischio di costi nascosti e sorprese',
                    'Trattative senza leva e senza comparabilità',
                    'Perdita di tempo tra annunci e venditori privati',
                    'Nessun supporto burocratico né post-vendita'
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-[22px] h-[22px] rounded-full bg-[#0A1526] flex items-center justify-center shrink-0">
                        <X size={12} className="text-white" strokeWidth={3} />
                      </div>
                      <span className="text-[15px] text-[#0A1526] font-sans">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COME FUNZIONA */}
      <section className="py-24 bg-white">
        <div className="ds-container">
          <h2 className="text-center text-[36px] font-serif font-bold text-[#0A1526] mb-20">Come funziona</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 max-w-5xl mx-auto relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] border-t-[2px] border-dotted border-gray-200 z-0"></div>
            <div className="hidden md:block absolute top-[260px] left-[15%] right-[15%] border-t-[2px] border-dotted border-gray-200 z-0"></div>
            
            {[
              { num: 1, icon: Phone, title: 'Primo contatto', text: 'Breve call per capire esigenze, budget e tempistiche.' },
              { num: 2, icon: Target, title: 'Profilazione auto', text: 'Definiamo tipologia, marca, modello e priorità.' },
              { num: 3, icon: Search, title: 'Ricerca mirata', text: 'Selezioniamo le migliori opportunità sul mercato.' },
              { num: 4, icon: ShieldCheck, title: 'Verifica e proposta', text: 'Controlli, analisi e presentazione delle opzioni adatte.' },
              { num: 5, icon: Settings, title: 'Gestione acquisto', text: 'Supporto nella trattativa, pratiche e coordinamento.' },
              { num: 6, icon: MapPin, title: 'Consegna a domicilio', text: 'L\'auto arriva a casa tua pronta all\'uso.' }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="absolute -top-[28px] w-14 h-14 rounded-full bg-[#0A1526] text-white font-sans font-bold text-[18px] flex items-center justify-center border-[6px] border-white">
                  {step.num}
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl pt-12 pb-8 px-6 w-full h-full flex flex-col items-center">
                  <step.icon className="text-[#0A1526] mb-4 opacity-90" size={28} strokeWidth={1.5} />
                  <h3 className="font-serif text-[18px] font-bold text-[#0A1526] mb-3">{step.title}</h3>
                  <p className="text-[14px] text-muted leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BANNER TAYCAN */}
      <section className="py-12 bg-white">
        <div className="ds-container">
          <div className="bg-[#f8fafc] rounded-[24px] overflow-hidden flex flex-col md:flex-row items-center border border-gray-100">
            <div className="w-full md:w-1/2 h-[350px] md:h-auto self-stretch">
              <img src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=1200" alt="Porsche Taycan" className="w-full h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col items-start bg-[#f8fafc]">
              <h2 className="text-[32px] md:text-[36px] font-serif font-bold text-[#0A1526] mb-6 leading-tight">
                Non abbiamo l'auto in showroom.
              </h2>
              <p className="text-[16px] md:text-[18px] text-muted mb-8 leading-relaxed font-sans">
                Perché ogni ricerca è unica. Troviamo l'auto giusta per te, non quella che abbiamo in pronta consegna.
              </p>
              <Link to="/come-funziona" className="bg-[#0A1526] hover:bg-gray-800 text-white h-[48px] px-8 rounded-md text-[14px] font-bold flex items-center justify-center gap-2 transition-colors">
                Scopri come funziona <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PERCHÉ SCEGLIERE (5 cols) */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="ds-container max-w-[1400px]">
          <h2 className="text-center text-[36px] font-serif font-bold text-[#0A1526] mb-16">Perché scegliere Diamanti Car Broker</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100 px-4">
            {[
              { icon: buildingIcon, title: 'Indipendenza totale', text: 'Non siamo legati a marchi o concessionarie, lavoriamo solo per te.' },
              { icon: diamondIcon, title: 'Esperienza e rete', text: 'Accesso a una rete selezionata di partner e canali esclusivi in Italia ed Europa.' },
              { icon: clockIcon, title: 'Competenza e passione', text: 'Anni di esperienza nel settore auto al servizio delle tue esigenze.' },
              { icon: shieldIcon, title: 'Verifica garantita', text: 'Ogni veicolo viene sottoposto a rigorosi controlli prima della consegna.' },
              { icon: headsetIcon, title: 'Supporto end-to-end', text: 'Ti seguiamo in ogni fase, anche dopo la consegna dell\'auto.' }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col items-center pt-8 md:pt-0 ${i !== 0 ? 'md:pl-6 lg:pl-10' : ''} ${i !== 4 ? 'md:pr-6 lg:pr-10' : ''}`}>
                <div className="mb-5 h-12 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center text-[#0A1526]">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-[15px] font-bold text-[#0A1526] mb-3 leading-tight">{item.title}</h3>
                <p className="text-[13px] text-muted leading-[1.6]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FOUNDER */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="ds-container">
          <div className="bg-white rounded-none md:rounded-[24px] overflow-hidden flex flex-col md:flex-row items-center border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
            <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col items-start">
              <h2 className="text-[36px] font-serif font-bold text-[#0A1526] mb-6 leading-[1.1]">
                Ciao, sono Thomas di<br/>Diamanti Car Broker
              </h2>
              <p className="text-[16px] text-[#0A1526] mb-6 leading-relaxed">
                La mia missione è trovarti l'auto perfetta, senza stress e senza rischi. Mi occupo di ogni dettaglio, dalla ricerca alla consegna, con trasparenza e competenza.
              </p>
              <p className="text-[16px] text-[#0A1526] mb-10 leading-relaxed font-sans">
                Tu raccontami cosa cerchi, al resto pensiamo noi.
              </p>
              <Link to="/chi-siamo" className="bg-[#0A1526] hover:bg-gray-800 text-white h-[46px] px-8 rounded-md text-[14px] font-bold flex items-center justify-center transition-colors">
                Scopri di più
              </Link>
            </div>
            <div className="w-full md:w-1/2 h-[450px] md:h-auto self-stretch">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" alt="Thomas - Founder" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="ds-container">
          <h2 className="text-center text-[36px] font-serif font-bold text-[#0A1526] mb-16">Cosa dicono i clienti</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&q=80&w=800", text: "Servizio impeccabile. Thomas ha trovato l'auto perfetta in tempi record. Consigliatissimo!", name: "Marco R. – BMW X5" },
              { img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=800", text: "Professionale, trasparente e sempre disponibile. Consegna a domicilio puntuale e senza pensieri.", name: "Luca B. – Audi Q5 Sportback" },
              { img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800", text: "Non avrei mai trovato questa auto a queste condizioni. TOP service!", name: "Alessandro T. – Mercedes GLC" }
            ].map((review, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-shadow flex flex-col">
                <div className="h-[220px] w-full">
                  <img src={review.img} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex gap-[2px] mb-5">
                    {[1,2,3,4,5].map(star => <Star key={star} size={14} fill="#F59E0B" color="#F59E0B" />)}
                  </div>
                  <p className="text-[15px] text-[#0A1526] mb-6 flex-1 font-serif italic leading-[1.6]">"{review.text}"</p>
                  <p className="text-[13px] font-sans font-bold text-[#0A1526] uppercase tracking-wide">{review.name}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination dots mock */}
          <div className="flex justify-center gap-3 mt-12">
            <div className="w-2.5 h-2.5 rounded-full bg-[#0A1526]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
          </div>
        </div>
      </section>

      {/* 10. PRE-FOOTER CTA */}
      <section className="relative py-[100px] bg-[#0A1526] text-white overflow-hidden">
        {/* Background headlight image right aligned */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-40">
          <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1200" alt="Headlights" className="w-full h-full object-cover object-left" />
        </div>
        {/* Dark gradient to blend the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent"></div>
        
        <div className="ds-container relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-[38px] md:text-[46px] font-serif font-bold mb-4 leading-tight">
              Hai già in mente la tua <br/>prossima auto?
            </h2>
            <p className="text-[17px] text-white/90 mb-8 leading-relaxed font-sans">
              Parlane con Thomas di Diamanti Car Broker.<br/>
              La cerchiamo noi, per te.
            </p>
            <Link to="/consulenza" className="inline-flex bg-white hover:bg-gray-100 text-[#0A1526] h-[46px] px-8 rounded-md text-[14px] font-bold items-center justify-center transition-colors">
              Richiedi ora la tua ricerca <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 11. FOOTER INCLUDED IN HOME PER MOCKUP */}
      <footer className="bg-[#0a0f18] text-white/70 pt-20 pb-8 border-t border-white/10">
        <div className="ds-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
            
            {/* Logo Col */}
            <div className="lg:col-span-1 flex flex-col">
              <Link to="/" className="flex items-center gap-3 mb-6">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M20 2L2 12L20 38L38 12L20 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M2 12H38" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 12L20 38L28 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M20 2L12 12" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M20 2L28 12" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <div className="flex flex-col">
                  <span className="text-[16px] text-white font-serif tracking-widest leading-none">DIAMANTI</span>
                  <span className="text-[8px] text-white/80 font-sans tracking-[0.3em] font-light mt-1">CAR BROKER</span>
                </div>
              </Link>
              <p className="text-[13px] leading-relaxed mb-6">
                Troviamo l'auto giusta per te, senza farti perdere tempo.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-colors"><Facebook size={14} /></a>
                <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-colors"><Instagram size={14} /></a>
                <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-colors"><Linkedin size={14} /></a>
              </div>
            </div>

            {/* Links Cols */}
            <div>
              <h4 className="text-white font-bold text-[14px] mb-6">Servizi</h4>
              <ul className="flex flex-col gap-3 text-[13px]">
                <li><Link to="#" className="hover:text-white transition-colors">Ricerca auto su misura</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Auto nuove</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Auto usate e km 0</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Verifica e controllo</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Consegna a domicilio</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Supporto pratiche</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-[14px] mb-6">Come funziona</h4>
              <ul className="flex flex-col gap-3 text-[13px]">
                <li><Link to="#" className="hover:text-white transition-colors">Il nostro metodo</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Le fasi del servizio</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Domande frequenti</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Condizioni di servizio</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-[14px] mb-6">Informazioni</h4>
              <ul className="flex flex-col gap-3 text-[13px]">
                <li><Link to="#" className="hover:text-white transition-colors">Chi siamo</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Perché sceglierci</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Dicono di noi</Link></li>
                <li><Link to="#" className="hover:text-white transition-colors">Privacy e cookie</Link></li>
              </ul>
            </div>

            {/* Contacts Col */}
            <div className="lg:col-span-1">
              <h4 className="text-white font-bold text-[14px] mb-6">Contatti</h4>
              <ul className="flex flex-col gap-4 text-[13px]">
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-white/50" />
                  <span>+39 123 456 7890</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-white/50" />
                  <span>info@diamanticarbroker.it</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-white/50 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">Operiamo in tutta Italia<br/>e in Europa</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[11px] text-white/50">
            <p>© 2024 Diamanti Car Broker - Tutti i diritti riservati.</p>
            <p className="mt-2 md:mt-0">P.IVA 12345678901</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

// Icon helpers for 5-col section
const buildingIcon = <Building2 size={24} strokeWidth={1.5} />;
const diamondIcon = <svg width="24" height="24" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M20 2L2 12L20 38L38 12L20 2Z"/><path d="M2 12H38"/><path d="M12 12L20 38L28 12"/><path d="M20 2L12 12"/><path d="M20 2L28 12"/></svg>;
const clockIcon = <Check size={24} strokeWidth={1.5} />;
const shieldIcon = <CheckCircle2 size={24} strokeWidth={1.5} />;
const headsetIcon = <Headset size={24} strokeWidth={1.5} />;
