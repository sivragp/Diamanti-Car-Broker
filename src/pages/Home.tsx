import { Search, MapPin, Calendar, Fuel, Settings, CheckCircle2, Star, ArrowRight, Play, MessageCircle, FileText, ShieldCheck, Car, Banknote, Clock, Award } from 'lucide-react';
import { BRANDS, AVAILABLE_CARS } from '../constants';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-brand-light min-h-screen font-sans text-brand-primary">
      {/* 1. HERO SECTION */}
      <section className="bg-dark text-white pt-[124px] pb-[56px] lg:pt-[172px] lg:pb-[88px] relative overflow-hidden">
        {/* Subtle background glow or pattern */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="ds-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
            
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="text-accent text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] mb-4 md:mb-6">
                Car broker · Auto premium · Importazione
              </span>
              
              <h1 className="text-[36px] lg:text-[clamp(40px,4.5vw,64px)] leading-[1.1] lg:leading-[1.05] font-bold text-white mb-6">
                Trova l’auto giusta, <br className="hidden xl:block" />senza rischiare <br className="hidden xl:block" />brutte sorprese.
              </h1>
              
              <p className="text-[16px] lg:text-[18px] leading-[1.6] lg:leading-[1.7] text-gray-300 mb-8 max-w-[620px]">
                Diamanti Broker ti affianca nella ricerca, verifica e acquisto della tua prossima auto in Italia e in Europa, gestendo controlli, trattativa, pratiche e consegna.
              </p>

              <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-4 mb-6">
                <Link to="/consulenza" className="w-full sm:w-auto flex items-center justify-center h-[52px] px-[24px] rounded-xl bg-accent hover:opacity-90 text-white font-semibold text-[15px] transition-opacity">
                  Richiedi consulenza
                </Link>
                <Link to="/veicoli" className="w-full sm:w-auto flex items-center justify-center h-[52px] px-[24px] rounded-xl border border-gray-600 hover:border-white hover:bg-white/5 text-white font-semibold text-[15px] transition-all">
                  Vedi auto disponibili
                </Link>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <a href="TODO_WHATSAPP" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[15px] font-semibold hover:text-green-400 transition-colors">
                  <MessageCircle size={20} className="text-green-500" strokeWidth={2} />
                  Parla con noi su WhatsApp
                </a>
              </div>
              <p className="text-[13px] text-gray-400">
                Analizziamo modello, budget e tempi prima di proporti qualsiasi auto.
              </p>
            </div>

            {/* Right Column: Visual */}
            <div className="lg:col-span-6 mt-6 lg:mt-0 relative">
              <div className="relative aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent z-10 mix-blend-multiply"></div>
                
                <img 
                  src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=1200" 
                  alt="Auto premium selezionata dal broker" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-2 md:-left-6 lg:-bottom-10 lg:-left-12 bg-white rounded-[18px] p-[20px] shadow-soft z-20 w-[240px] border border-gray-100">
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-primary shrink-0">
                      <ShieldCheck size={16} strokeWidth={2} />
                    </div>
                    <span className="text-[14px] font-semibold text-text leading-tight">Storico verificato</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-primary shrink-0">
                      <FileText size={16} strokeWidth={2} />
                    </div>
                    <span className="text-[14px] font-semibold text-text leading-tight">Pratiche gestite</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-primary shrink-0">
                      <CheckCircle2 size={16} strokeWidth={2} />
                    </div>
                    <span className="text-[14px] font-semibold text-text leading-tight">Consegna e supporto</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="relative z-30 -mt-10 mb-12">
        <div className="ds-container">
          <div className="bg-white rounded-[20px] p-[24px] md:p-[28px] border border-border shadow-soft">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] lg:gap-[24px]">
              {[
                { icon: Search, title: 'Ricerca su misura', desc: 'In base a modello, budget e priorità reali.' },
                { icon: ShieldCheck, title: 'Verifiche prima della proposta', desc: 'Storico, chilometri, documenti e provenienza.' },
                { icon: FileText, title: 'Pratiche gestite', desc: 'Trattativa, trasporto, immatricolazione e consegna.' },
                { icon: Award, title: 'Supporto completo', desc: 'Finanziamento, permuta e assistenza post-vendita.' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-start text-left p-4 hover:bg-surface rounded-xl transition-colors">
                  <item.icon className="text-accent mb-4" size={24} strokeWidth={1.5} />
                  <h3 className="text-[15px] lg:text-[16px] font-semibold text-text mb-1 leading-tight">{item.title}</h3>
                  <p className="text-[14px] text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEARCH BAR */}
      <section className="py-12 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="bg-white p-4 rounded shadow-md border border-gray-100 flex flex-col md:flex-row items-center gap-3 max-w-5xl mx-auto">
            <div className="flex-1 w-full border-b md:border-b-0 md:border-r border-gray-200 px-4 py-2">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Marca</label>
              <select className="w-full bg-transparent text-brand-primary text-sm font-semibold focus:outline-none appearance-none cursor-pointer">
                <option value="">Tutte le marche</option>
                {BRANDS.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
              </select>
            </div>
            <div className="flex-1 w-full border-b md:border-b-0 md:border-r border-gray-200 px-4 py-2">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Modello</label>
              <select className="w-full bg-transparent text-brand-primary text-sm font-semibold focus:outline-none appearance-none cursor-pointer">
                <option value="">Tutti i Modelli</option>
              </select>
            </div>
            <div className="flex-1 w-full border-b md:border-b-0 md:border-r border-gray-200 px-4 py-2">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Budget</label>
              <select className="w-full bg-transparent text-brand-primary text-sm font-semibold focus:outline-none appearance-none cursor-pointer">
                <option value="">Tutti i Prezzi</option>
                <option value="20k">Fino a 20.000€</option>
                <option value="40k">Fino a 40.000€</option>
                <option value="60k">Fino a 60.000€</option>
              </select>
            </div>
            <div className="flex-1 w-full border-b md:border-b-0 md:border-r border-gray-200 px-4 py-2">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Alimentazione</label>
              <select className="w-full bg-transparent text-brand-primary text-sm font-semibold focus:outline-none appearance-none cursor-pointer">
                <option value="">Qualsiasi</option>
                <option value="Benzina">Benzina</option>
                <option value="Diesel">Diesel</option>
                <option value="Elettrica">Elettrica</option>
                <option value="Ibrida">Ibrida</option>
              </select>
            </div>
            <button className="bg-brand-primary hover:bg-brand-dark text-white font-bold py-4 px-8 rounded transition-colors flex items-center justify-center gap-2 w-full md:w-auto uppercase text-sm tracking-wider">
              <Search size={18} />
              Trova la mia auto
            </button>
          </div>
        </div>
      </section>

      {/* 4. VEHICLE CARDS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-gray-200 pb-4">
            <div>
              <h2 className="text-3xl font-extrabold text-brand-primary mb-2">Veicoli Disponibili</h2>
              <p className="text-brand-secondary font-medium">Auto selezionate, verificate e pronte per te.</p>
            </div>
            <Link to="/veicoli" className="text-sm font-bold text-brand-accent hover:underline flex items-center gap-1 mt-4 md:mt-0 uppercase tracking-wider">
              Vedi tutto <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {AVAILABLE_CARS.map(car => (
              <div key={car.id} className="bg-white rounded border border-gray-200 overflow-hidden group hover:shadow-xl transition-all flex flex-col">
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                    <span className="bg-white/90 text-brand-primary border border-gray-200 text-[10px] font-bold px-2 py-1 uppercase rounded-sm backdrop-blur-sm shadow-sm flex items-center gap-1">
                      <CheckCircle2 size={10} className="text-green-600" /> Storico verificato
                    </span>
                    <span className="bg-brand-primary text-white text-[10px] font-bold px-2 py-1 uppercase rounded-sm shadow-sm">
                      Garanzia Inclusa
                    </span>
                  </div>
                  <img src={car.imageUrl} alt={car.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="text-xs text-brand-secondary font-bold uppercase tracking-wider mb-1">{car.name.split(' ')[0]}</div>
                  <h3 className="font-extrabold text-brand-primary text-lg mb-4 leading-tight">{car.name} {car.model}</h3>
                  
                  <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs text-brand-secondary font-medium mb-6">
                    <div className="flex items-center gap-1.5"><Calendar size={14} className="text-gray-400" /> {car.year}</div>
                    <div className="flex items-center gap-1.5"><Settings size={14} className="text-gray-400" /> {car.gearbox}</div>
                    <div className="flex items-center gap-1.5"><Fuel size={14} className="text-gray-400" /> {car.fuel}</div>
                    <div className="flex items-center gap-1.5"><MapPin size={14} className="text-gray-400" /> {car.km} km</div>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex flex-col mb-4">
                      <span className="font-black text-xl text-brand-primary">€ {car.price}</span>
                      <span className="text-xs text-gray-500 font-medium">Rata indicativa da € 350/mese</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link to={`/auto/${car.id}`} className="flex-1 bg-brand-light border border-gray-200 hover:border-brand-primary text-brand-primary font-bold py-2.5 rounded text-center transition-colors text-xs uppercase tracking-wider flex items-center justify-center">
                        Vedi scheda
                      </Link>
                      <a href={`https://wa.me/393331234567?text=Info su ${car.name}`} target="_blank" rel="noreferrer" className="w-12 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded transition-colors">
                        <MessageCircle size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COME FUNZIONA (5 STEP) */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold mb-4">Come funziona il servizio di Car Brokerage</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-medium">Un processo collaudato in 5 step per farti avere l'auto dei tuoi sogni, senza alcuno stress o preoccupazione.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-8 left-10 right-10 h-0.5 bg-brand-secondary z-0"></div>

            {[
              { step: '01', icon: Car, title: 'Raccontaci l’auto che cerchi', desc: 'Definiamo insieme marca, modello, budget e caratteristiche irrinunciabili.' },
              { step: '02', icon: Search, title: 'Analizziamo il mercato', desc: 'Cerchiamo la migliore offerta tra rete ufficiale e canali B2B in Europa.' },
              { step: '03', icon: ShieldCheck, title: 'Verifichiamo il veicolo', desc: 'Controlliamo lo storico tagliandi, sinistri e chilometri effettivi.' },
              { step: '04', icon: FileText, title: 'Gestiamo trattativa e pratiche', desc: 'Negoziamo il prezzo migliore e gestiamo l\'immatricolazione o i passaggi.' },
              { step: '05', icon: Award, title: 'Consegna e assistenza', desc: 'Ti consegniamo l\'auto chiavi in mano, con garanzia valida in tutta Europa.' }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-primary border-4 border-brand-dark flex items-center justify-center text-brand-accent mb-6 shadow-xl relative">
                  <item.icon size={28} />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-accent text-white text-xs font-bold flex items-center justify-center border-2 border-brand-dark">{item.step}</div>
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ACQUISTO SICURO */}
      <section className="py-20 bg-brand-light border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-brand-primary mb-4">Acquisto Sicuro Garantito</h2>
            <p className="text-brand-secondary max-w-2xl mx-auto font-medium">Perché affidarsi a noi invece di acquistare da un privato o da un concessionario generico.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: 'Controllo Storico', desc: 'Verifica incidenti pregressi e integrità del telaio tramite database internazionali.' },
              { icon: Clock, title: 'Verifica Chilometri', desc: 'Accertamento del reale chilometraggio certificato dai centri assistenza ufficiali.' },
              { icon: ShieldCheck, title: 'Controllo Documenti', desc: 'Verifica pendenze, fermi amministrativi e regolarità dei documenti di circolazione.' },
              { icon: MapPin, title: 'Provenienza Certificata', desc: 'Selezioniamo solo auto provenienti da reti ufficiali o parchi auto aziendali certificati.' },
              { icon: Award, title: 'Garanzia Inclusa', desc: 'Garanzia guasti estendibile valida in tutta Europa per viaggiare senza pensieri.' },
              { icon: Banknote, title: 'Prezzo Chiavi in Mano', desc: 'Nessun costo nascosto. Nel preventivo è già incluso trasporto, collaudo e immatricolazione.' },
              { icon: CheckCircle2, title: 'Supporto Post-Vendita', desc: 'Rimaniamo a tua disposizione anche dopo la consegna per qualsiasi necessità o tagliando.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded border border-gray-200 flex flex-col hover:shadow-md transition-shadow">
                <item.icon className="text-brand-accent mb-4" size={32} strokeWidth={1.5} />
                <h3 className="text-base font-bold text-brand-primary mb-2 uppercase tracking-wide">{item.title}</h3>
                <p className="text-brand-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. VENDI O PERMUTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-stretch border border-gray-200 rounded overflow-hidden shadow-lg">
            <div className="w-full lg:w-1/2 relative bg-brand-primary">
              <img 
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200" 
                alt="Vendi la tua auto" 
                className="w-full h-full object-cover opacity-60 mix-blend-overlay"
              />
              <div className="absolute inset-0 p-10 flex flex-col justify-center text-white">
                <h2 className="text-3xl font-extrabold mb-6">Vendi o dai in permuta la tua auto</h2>
                <p className="text-white/80 mb-8 leading-relaxed font-light text-lg">
                  Massimizza il valore del tuo usato. Lo acquistiamo direttamente o lo scaliamo dal prezzo della tua nuova auto. Valutazione rapida, sicura e senza impegno basata sui reali valori di mercato.
                </p>
                <ul className="space-y-4 font-medium">
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-white" size={20} /> Valutazione immediata e gratuita</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-white" size={20} /> Pagamento sicuro e tracciabile</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-white" size={20} /> Nessuna perdita di tempo con privati</li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-10 bg-white flex flex-col justify-center">
              <h3 className="text-xl font-bold text-brand-primary mb-6">Inserisci i dati della tua auto</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Marca</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 text-brand-primary p-3 outline-none rounded focus:border-brand-accent focus:bg-white transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Modello</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 text-brand-primary p-3 outline-none rounded focus:border-brand-accent focus:bg-white transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Anno</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 text-brand-primary p-3 outline-none rounded focus:border-brand-accent focus:bg-white transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Chilometri</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 text-brand-primary p-3 outline-none rounded focus:border-brand-accent focus:bg-white transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Il tuo Telefono</label>
                  <input type="tel" className="w-full bg-gray-50 border border-gray-200 text-brand-primary p-3 outline-none rounded focus:border-brand-accent focus:bg-white transition-colors" />
                </div>
                <button type="button" className="w-full bg-brand-primary hover:bg-brand-dark text-white font-bold py-4 rounded transition-colors uppercase tracking-wider mt-4">
                  Richiedi valutazione gratuita
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 8. RECENSIONI */}
      <section className="py-20 bg-brand-light border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-brand-primary mb-2">Cosa dicono di noi</h2>
            <p className="text-brand-secondary font-medium">Recensioni verificate da clienti reali.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Luigi Ferrari', source: 'Recensione Google', title: 'Serietà e competenza', text: 'Ho affidato a loro la ricerca della mia nuova Audi dalla Germania. Servizio impeccabile, auto arrivata perfetta e pratiche sbrigate in tempi record. Assolutamente consigliato per chi vuole un servizio premium.' },
              { name: 'Barbara Rossi', source: 'Recensione AutoScout24', title: 'Acquisto sicuro e trasparente', text: 'Primo acquisto tramite broker e non potevo scegliere di meglio. Mi hanno inviato tutta la documentazione, certificato i km e gestito tutto l\'iter. L\'auto è esattamente come promessa.' },
              { name: 'Francesco Di Matteo', source: 'Recensione Google', title: 'Professionisti del settore', text: 'Esperienza super positiva. Non solo mi hanno trovato il modello esatto che cercavo (introvabile in Italia), ma mi hanno anche fatto risparmiare e ritirato il mio usato. Bravi.' }
            ].map((review, i) => (
              <div key={i} className="p-8 bg-white border border-gray-200 rounded flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{review.source}</span>
                </div>
                <h4 className="font-extrabold text-brand-primary text-lg mb-3">{review.title}</h4>
                <p className="text-brand-secondary text-sm mb-6 leading-relaxed flex-1">"{review.text}"</p>
                <div className="text-sm font-bold text-brand-primary pt-4 border-t border-gray-100">{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. GUIDE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-brand-primary mb-2">Guide per acquistare senza rischi</h2>
            <p className="text-brand-secondary font-medium">Informazioni utili scritte dai nostri esperti.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=800', title: 'Come funziona l’importazione auto dalla Germania' },
              { img: 'https://images.unsplash.com/photo-1620882814836-88a2c88ec6e7?auto=format&fit=crop&q=80&w=800', title: 'Cosa controllare prima di comprare un’auto usata' },
              { img: 'https://images.unsplash.com/photo-1503376713356-1a7071eb26a3?auto=format&fit=crop&q=80&w=800', title: 'Garanzia auto usata: tutto quello che c\'è da sapere' },
              { img: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800', title: 'Finanziamento auto usata: come scegliere il migliore' }
            ].map((news, i) => (
              <div key={i} className="bg-white rounded border border-gray-200 overflow-hidden cursor-pointer group flex flex-col">
                <div className="h-40 overflow-hidden relative">
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-center">
                  <h3 className="font-bold text-sm leading-snug group-hover:text-brand-accent transition-colors text-brand-primary">{news.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
