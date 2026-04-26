import { Search, MapPin, Calendar, Fuel, Settings, CheckCircle2, Star, ArrowRight, Play } from 'lucide-react';
import { BRANDS, AVAILABLE_CARS } from '../constants';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="relative h-[600px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Cars" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 w-full mt-16">
          <div className="max-w-5xl mx-auto text-center">
            <span className="text-white text-sm font-medium tracking-wider uppercase mb-4 block">
              Concessionaria di Auto di Importazione
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10">
              Trova la tua prossima auto
            </h1>

            {/* Form Box */}
            <div className="bg-white p-2 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-2 max-w-4xl mx-auto">
              <div className="flex-1 w-full border-b md:border-b-0 md:border-r border-gray-200 px-4 py-2">
                <select className="w-full bg-transparent text-gray-700 text-sm font-medium focus:outline-none appearance-none cursor-pointer">
                  <option value="">Seleziona Marca</option>
                  {BRANDS.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                </select>
              </div>
              <div className="flex-1 w-full border-b md:border-b-0 md:border-r border-gray-200 px-4 py-2">
                <select className="w-full bg-transparent text-gray-700 text-sm font-medium focus:outline-none appearance-none cursor-pointer">
                  <option value="">Tutti i Modelli</option>
                </select>
              </div>
              <div className="flex-1 w-full border-b md:border-b-0 md:border-r border-gray-200 px-4 py-2">
                <select className="w-full bg-transparent text-gray-700 text-sm font-medium focus:outline-none appearance-none cursor-pointer">
                  <option value="">Tutti i Prezzi</option>
                  <option value="20k">Fino a 20.000€</option>
                  <option value="40k">Fino a 40.000€</option>
                  <option value="60k">Fino a 60.000€</option>
                </select>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded transition-colors flex items-center justify-center gap-2 w-full md:w-auto">
                <Search size={18} />
                Cerca auto
              </button>
            </div>

            {/* Quick Links */}
            <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm">
              <span className="text-white/80 py-1">Ricerche frequenti:</span>
              {['Audi', 'BMW', 'Mercedes', 'Porsche', 'Volkswagen'].map(brand => (
                <button key={brand} className="px-4 py-1 rounded-full border border-white/30 bg-transparent text-white hover:bg-white/10 transition-colors">
                  {brand}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRANDS SECTION */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Le nostre Marche</h2>
            <Link to="/brands" className="text-sm font-medium text-gray-500 hover:text-blue-600 flex items-center gap-1">
              Mostra tutte <ArrowRight size={16} />
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {BRANDS.slice(0, 8).map(brand => (
              <div key={brand.id} className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LATEST ARRIVALS */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Ultimi Arrivi</h2>
            <div className="flex gap-2 mt-4 md:mt-0">
              <button className="px-4 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-full">Tutte</button>
              <button className="px-4 py-1.5 border border-gray-300 text-gray-600 bg-white hover:bg-gray-50 text-sm font-medium rounded-full">Nuove</button>
              <button className="px-4 py-1.5 border border-gray-300 text-gray-600 bg-white hover:bg-gray-50 text-sm font-medium rounded-full">Usate</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AVAILABLE_CARS.map(car => (
              <div key={car.id} className="bg-white rounded border border-gray-200 overflow-hidden group">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <div className="absolute top-2 left-2 flex gap-1 z-10">
                    {car.tags.map(tag => (
                      <span key={tag} className="bg-green-600 text-white text-[10px] font-bold px-2 py-1 uppercase rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <img src={car.imageUrl} alt={car.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="text-xs text-gray-500 mb-1">{car.name.split(' ')[0]}</div>
                  <h3 className="font-bold text-gray-900 text-base mb-4 truncate">{car.name} {car.model}</h3>
                  
                  <div className="grid grid-cols-2 gap-y-2 gap-x-2 text-xs text-gray-600 mb-4 border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-1.5"><Calendar size={14} className="text-gray-400" /> {car.year}</div>
                    <div className="flex items-center gap-1.5"><Settings size={14} className="text-gray-400" /> {car.gearbox}</div>
                    <div className="flex items-center gap-1.5"><Fuel size={14} className="text-gray-400" /> {car.fuel}</div>
                    <div className="flex items-center gap-1.5"><MapPin size={14} className="text-gray-400" /> {car.km} km</div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="font-bold text-lg">€ {car.price}</div>
                    <Link to={`/auto/${car.id}`} className="text-gray-400 hover:text-blue-600 transition-colors">
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded transition-colors inline-flex items-center gap-2">
              Scopri tutte le auto
            </button>
          </div>
        </div>
      </section>

      {/* 4. VALUATION SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 relative h-[400px]">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Simulated video/images overlapping */}
                <div className="w-2/3 h-5/6 bg-gray-200 rounded overflow-hidden shadow-lg absolute left-0 top-0">
                  <img src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800" alt="Car presentation" className="w-full h-full object-cover" />
                </div>
                <div className="w-1/2 h-2/3 bg-gray-300 rounded overflow-hidden shadow-xl absolute right-0 bottom-0 border-4 border-white">
                  <img src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800" alt="Car detail" className="w-full h-full object-cover" />
                </div>
                
                {/* Play Button */}
                <div className="absolute z-10 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-white text-blue-600 transition-colors">
                  <Play size={24} className="ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-10">
              <h2 className="text-3xl font-bold mb-6">Ottieni la giusta valutazione per la tua auto</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Il nostro team di esperti analizzerà il mercato per offrirti la valutazione più accurata, tutelandoti in ogni fase della vendita o permuta. Compila il modulo e ottieni una stima gratuita in pochissimo tempo.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Dati basati sul mercato reale e aggiornati',
                  'Miglior valutazione per l\'acquisto di una nuova auto',
                  'Pagamento immediato e pratiche gestite'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-sm">
                    <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded transition-colors">
                Vendi Subito
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Perché sceglierci</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '💰', title: 'Soluzioni Finanziate su misura', desc: 'Con le nostre soluzioni di finanziamento ti garantiamo il tasso d\'interesse più basso.' },
              { icon: '🤝', title: 'Consulenza Auto all\'Avanguardia', desc: 'I nostri esperti ti guideranno nella scelta del modello migliore per le tue esigenze.' },
              { icon: '🏷️', title: 'Prezzi Trasparenti', desc: 'Nessun costo o sorpresa nascosta per permetterti di acquistare in sicurezza.' },
              { icon: '🔧', title: 'Car Service & Assistenza', desc: 'Offriamo un servizio di assistenza post-vendita per accompagnarti nel tempo.' }
            ].map((item, idx) => (
              <div key={idx} className="text-center px-4">
                <div className="w-16 h-16 bg-white border border-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section className="bg-slate-900">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 h-64 lg:h-auto relative hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1600" 
              alt="Contattaci" 
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          <div className="w-full lg:w-1/2 p-8 lg:p-16 xl:p-24 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-8">Contattaci</h2>
            <form className="space-y-4 w-full max-w-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input type="text" placeholder="Nome" className="w-full bg-white text-gray-900 p-3 border border-transparent focus:border-blue-500 outline-none rounded" />
                </div>
                <div>
                  <input type="text" placeholder="Cognome" className="w-full bg-white text-gray-900 p-3 border border-transparent focus:border-blue-500 outline-none rounded" />
                </div>
              </div>
              <div>
                <input type="email" placeholder="Email" className="w-full bg-white text-gray-900 p-3 border border-transparent focus:border-blue-500 outline-none rounded" />
              </div>
              <div>
                <input type="tel" placeholder="Numero di Telefono" className="w-full bg-white text-gray-900 p-3 border border-transparent focus:border-blue-500 outline-none rounded" />
              </div>
              <div>
                <textarea placeholder="Messaggio" rows={4} className="w-full bg-white text-gray-900 p-3 border border-transparent focus:border-blue-500 outline-none resize-none rounded"></textarea>
              </div>
              <button type="button" className="border border-white hover:bg-white hover:text-slate-900 text-white font-medium py-3 px-8 rounded transition-colors inline-block mt-2">
                Invia richiesta
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 7. REVIEWS SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold">Cosa dicono di noi</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Luigi Ferrari', title: 'Ottima esperienza e disponibilità', text: 'Ho acquistato la mia vettura in tempi record, super disponibili e affidabili. Consigliatissimo.' },
              { name: 'Barbara Rossi', title: 'Primo acquisto in Germania', text: 'Stato fantastico, procedure semplici e chiare sin dall\'inizio. Sicuramente mi rivolgerò a loro per il prossimo acquisto.' },
              { name: 'Francesco Di Matteo', title: 'Servizio impeccabile', text: 'Esperienza positiva. Una garanzia per affidabilità e per la trasparenza. La mia auto importata è fantastica.' }
            ].map((review, i) => (
              <div key={i} className="p-6 bg-white border border-gray-200 rounded">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <h4 className="font-bold text-base mb-2">{review.title}</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">"{review.text}"</p>
                <div className="text-sm font-bold">{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. NEWS SECTION */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold">Ultime News</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=800', tag: 'Trend', date: '5 Mar 2024', title: 'Le Nuove Audi Q5 2024: un perfetto equilibrio tra lusso e innovazione' },
              { img: 'https://images.unsplash.com/photo-1620882814836-88a2c88ec6e7?auto=format&fit=crop&q=80&w=800', tag: 'Elettrico', date: '28 Feb 2024', title: 'Tesla Model Y 2024: Il futuro dell\'elettrico a prestazioni eccezionali' },
              { img: 'https://images.unsplash.com/photo-1503376713356-1a7071eb26a3?auto=format&fit=crop&q=80&w=800', tag: 'News', date: '15 Feb 2024', title: 'Porsche Macan 2024: consumi e potenza per ogni terreno' }
            ].map((news, i) => (
              <div key={i} className="bg-white rounded border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden relative">
                  <span className="absolute top-2 left-2 bg-white text-gray-900 text-[10px] font-bold px-2 py-1 uppercase rounded-sm z-10">{news.tag}</span>
                  <img src={news.img} alt={news.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="text-xs text-gray-500 mb-2">{news.date}</div>
                  <h3 className="font-bold text-sm leading-snug hover:text-blue-600 transition-colors">{news.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Scopri tutte le novità</h2>
          <p className="text-gray-400 text-sm mb-6">Non perderti i nuovi arrivi e le nostre promozioni esclusive.</p>
          <div className="flex max-w-md mx-auto">
            <input type="email" placeholder="La tua email" className="bg-slate-800 text-white px-4 py-3 w-full outline-none text-sm rounded-l focus:bg-slate-700 transition-colors" />
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-3 px-6 rounded-r transition-colors">
              Iscriviti
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

