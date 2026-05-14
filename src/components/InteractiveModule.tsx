import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ChevronRight, ChevronLeft, Send, Car, Cpu, MapPin, BadgeEuro, Calendar, Settings, Fuel } from 'lucide-react';
import { BRANDS } from '../constants';

interface FormData {
  vehicleType: string;
  usage: string;
  budget: string;
  fuel: string[];
  gearbox: string;
  maxKm: string;
  minYear: string;
  brands: string[];
  models: string;
  name: string;
  contact: string;
  timing: string;
  notes: string;
}

const INITIAL_DATA: FormData = {
  vehicleType: '',
  usage: '',
  budget: '',
  fuel: [],
  gearbox: 'automatico',
  maxKm: '',
  minYear: '',
  brands: [],
  models: '',
  name: '',
  contact: '',
  timing: '',
  notes: '',
};

export function MultiStepForm({ initialBrand }: { initialBrand?: string }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialBrand) {
      setData(prev => ({ ...prev, brands: [initialBrand] }));
      setStep(3);
    }
  }, [initialBrand]);

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const updateData = (fields: Partial<FormData>) => {
    setData(prev => ({ ...prev, ...fields }));
  };

  const toggleFuel = (f: string) => {
    setData(prev => ({
      ...prev,
      fuel: prev.fuel.includes(f) ? prev.fuel.filter(x => x !== f) : [...prev.fuel, f]
    }));
  };

  const toggleBrand = (brandId: string) => {
    setData(prev => ({
      ...prev,
      brands: prev.brands.includes(brandId) ? prev.brands.filter(x => x !== brandId) : [...prev.brands, brandId]
    }));
  };

  const progress = (step / 4) * 100;

  return (
    <div ref={scrollRef} className="max-w-4xl mx-auto bg-white rounded-2xl shadow-premium overflow-hidden border border-neutral-border">
      {/* Progress Bar */}
      <div className="h-1 bg-neutral-border w-full">
        <motion.div 
          className="h-full bg-accent"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>

      <div className="p-8 md:p-12">
        <header className="mb-10">
          <span className="text-accent font-semibold text-xs uppercase tracking-widest block mb-3">Fase {step} di 4</span>
          <h3 className="text-2xl md:text-4xl text-primary leading-none">
            {step === 1 && <>Qual è la tua vettura ideale?</>}
            {step === 2 && <>Definiamo i dettagli tecnici.</>}
            {step === 3 && <>Scegli i tuoi marchi preferiti.</>}
            {step === 4 && <>Come possiamo aiutarti?</>}
          </h3>
          <p className="text-text-muted mt-3 font-medium text-sm md:text-base">
            {step === 1 && "Raccontaci che tipo di auto immagini e il tuo budget ideale."}
            {step === 2 && "Pochi dettagli tecnici per restringere il campo alla perfezione."}
            {step === 3 && "Seleziona i marchi che ti fanno battere il cuore."}
            {step === 4 && "Compila i tuoi dati per ricevere una consulenza gratuita."}
          </p>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="min-h-[350px]"
          >
            {step === 1 && (
              <div className="space-y-10">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">Tipo di carrozzeria</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Citycar', 'SUV', 'Berlina', 'Station Wagon', 'Sportiva', 'Commerciale'].map(t => (
                      <button
                        key={t}
                        onClick={() => updateData({ vehicleType: t })}
                        className={`p-6 rounded-xl border transition-all text-sm font-semibold text-left flex justify-between items-center ${
                          data.vehicleType === t ? 'border-accent bg-accent/5 text-accent shadow-sm' : 'border-neutral-border hover:border-primary/20 bg-neutral-soft text-primary'
                        }`}
                      >
                        {t}
                        {data.vehicleType === t && <Check size={16} />}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">Budget massimo</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['< 15k €', '15k-30k €', '30k-50k €', '> 50k €'].map(b => (
                      <button
                        key={b}
                        onClick={() => updateData({ budget: b })}
                        className={`p-4 rounded-xl border transition-all text-sm font-semibold text-center ${
                          data.budget === b ? 'border-accent bg-accent/5 text-accent shadow-sm' : 'border-neutral-border hover:border-primary/20 bg-neutral-soft text-primary'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-10">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">Alimentazione</label>
                  <div className="flex flex-wrap gap-3">
                    {['Benzina', 'Diesel', 'Ibrida', 'Elettrica'].map(f => (
                      <button
                        key={f}
                        onClick={() => toggleFuel(f)}
                        className={`py-4 px-8 rounded-xl border transition-all text-sm font-semibold ${
                          data.fuel.includes(f) ? 'border-accent bg-accent/5 text-accent shadow-sm' : 'border-neutral-border hover:border-primary/20 bg-neutral-soft text-primary'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">Chilometraggio massimo</label>
                    <input 
                      type="text" 
                      placeholder="es. 50.000 km"
                      value={data.maxKm}
                      onChange={(e) => updateData({ maxKm: e.target.value })}
                      className="w-full p-4 rounded-xl border border-neutral-border focus:border-accent outline-none bg-neutral-soft text-primary font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">Anno minimo</label>
                    <input 
                      type="text" 
                      placeholder="es. 2022"
                      value={data.minYear}
                      onChange={(e) => updateData({ minYear: e.target.value })}
                      className="w-full p-4 rounded-xl border border-neutral-border focus:border-accent outline-none bg-neutral-soft text-primary font-medium"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">Trasmissione</label>
                  <div className="flex gap-4">
                    {['Automatico', 'Manuale', 'Indifferente'].map(g => (
                      <button
                        key={g}
                        onClick={() => updateData({ gearbox: g })}
                        className={`flex-1 p-4 rounded-xl border transition-all text-sm font-semibold ${
                          data.gearbox === g ? 'border-accent bg-accent/5 text-accent shadow-sm' : 'border-neutral-border hover:border-primary/20 bg-neutral-soft text-primary'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-10">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">Marchi preferiti</label>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    {BRANDS.map(brand => (
                      <button
                        key={brand.id}
                        onClick={() => toggleBrand(brand.id)}
                        className={`p-5 rounded-xl border transition-all flex flex-col items-center gap-3 group/brand relative ${
                          data.brands.includes(brand.id) ? 'border-accent bg-accent/5 shadow-inner' : 'border-neutral-border hover:border-primary/20 bg-neutral-soft'
                        }`}
                      >
                        <img src={brand.logo} alt={brand.name} className={`h-8 md:h-10 object-contain transition-all duration-300 ${data.brands.includes(brand.id) ? 'grayscale-0' : 'grayscale brightness-0 opacity-40 group-hover/brand:opacity-100'}`} referrerPolicy="no-referrer" />
                        <span className={`text-[10px] font-semibold tracking-widest uppercase text-center leading-tight transition-colors ${data.brands.includes(brand.id) ? 'text-accent' : 'text-text-muted'}`}>{brand.name}</span>
                        {data.brands.includes(brand.id) && (
                          <div className="absolute -top-1 -right-1 bg-accent text-white p-1 rounded-full border-2 border-white">
                            <Check size={8} strokeWidth={4} />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">Modelli specifici o optional</label>
                  <textarea 
                    placeholder="Esempio: Audi A4 Avant S-Line, tetto panoramico, fari LED Matrix..."
                    value={data.models}
                    onChange={(e) => updateData({ models: e.target.value })}
                    className="w-full p-4 rounded-xl border border-neutral-border focus:border-accent outline-none bg-neutral-soft text-primary min-h-[120px] font-medium"
                  />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-8 max-w-xl">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">Il tuo nome</label>
                  <input 
                    type="text" 
                    placeholder="Mario Rossi"
                    value={data.name}
                    onChange={(e) => updateData({ name: e.target.value })}
                    className="w-full p-4 rounded-xl border border-neutral-border focus:border-accent outline-none bg-neutral-soft text-primary font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">Canale di contatto preferito</label>
                  <input 
                    type="text" 
                    placeholder="Telefono o Email"
                    value={data.contact}
                    onChange={(e) => updateData({ contact: e.target.value })}
                    className="w-full p-4 rounded-xl border border-neutral-border focus:border-accent outline-none bg-neutral-soft text-primary font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">Urgenza acquisto</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Subito', '1-2 Mesi', 'Più avanti'].map(t => (
                      <button
                        key={t}
                        onClick={() => updateData({ timing: t })}
                        className={`p-4 rounded-xl border transition-all text-xs font-semibold ${
                          data.timing === t ? 'border-accent bg-accent/5 text-accent shadow-sm' : 'border-neutral-border hover:border-primary/20 bg-neutral-soft text-primary'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex justify-between items-center pt-8 border-t border-neutral-border">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-all ${
              step === 1 ? 'text-gray-300 pointer-events-none' : 'text-primary hover:text-accent'
            }`}
          >
            <ChevronLeft size={16} />
            Indietro
          </button>

          {step < 4 ? (
            <button
              onClick={nextStep}
              className="btn-primary"
            >
              Prosegui
              <ChevronRight size={18} />
            </button>
          ) : (
            <button
              onClick={() => alert('Analisi inviata con successo. Verrai ricontattato a breve.')}
              className="btn-primary"
            >
              Invia Richiesta
              <Send size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export function BrandGrid({ onSelectBrand }: { onSelectBrand: (id: string) => void }) {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl text-primary mb-6">I Marchi Trattati</h2>
           <p className="text-text-muted mt-6 max-w-xl mx-auto leading-relaxed">
             Operiamo principalmente con i migliori marchi premium tedeschi, garantendo standard qualitativi elevati su ogni singola vettura.
           </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {BRANDS.map(brand => (
            <button
              key={brand.id}
              onClick={() => onSelectBrand(brand.id)}
              className="group bg-neutral-soft p-10 rounded-2xl border border-neutral-border hover:border-accent hover:shadow-lg transition-all duration-300 text-center relative overflow-hidden"
            >
              <div className="h-14 mb-6 flex items-center justify-center">
                <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full grayscale brightness-0 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 transform group-hover:scale-105" referrerPolicy="no-referrer" />
              </div>
              <h4 className="font-semibold text-primary mb-1 text-sm">{brand.name}</h4>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-[10px] text-accent font-semibold uppercase tracking-widest">
                  Scopri i modelli
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
