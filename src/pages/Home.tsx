import { motion } from 'motion/react';
import { ShieldCheck, Search, Truck, UserCheck, ChevronRight, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MultiStepForm, BrandGrid } from '../components/InteractiveModule';
import { useRef, useState } from 'react';

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState<string | undefined>(undefined);
  const formRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    { n: "Alessandro R.", m: "BMW X5", t: "Servizio impeccabile. Mi hanno fatto risparmiare tempo e mi hanno garantito un'auto perfetta, introvabile in Italia." },
    { n: "Martina V.", m: "Porsche Macan", t: "Hanno gestito tutto, dalla ricerca in Germania fino alla consegna sotto casa. Una vera esperienza premium." },
    { n: "Giorgio B.", m: "Mercedes G63", t: "Trasparenza totale sui costi e perizie meccaniche rigorose. Non acquisterò mai più un'auto da solo." },
  ];

  const handleSelectBrand = (id: string) => {
    setSelectedBrand(id);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="pt-20 bg-neutral-soft font-sans">
      {/* Hero Section */}
      <section ref={formRef} id="trova-auto" className="relative min-h-[90vh] flex items-center overflow-hidden bg-neutral-warm py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full flex flex-col justify-center"
            >
              <div className="flex items-center gap-3 mb-6 text-sm font-semibold tracking-widest text-accent uppercase">
                 <div className="w-10 h-[1px] bg-accent"></div>
                 Car Brokerage Professionale
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary leading-[1.1] mb-6">
                Troviamo l'auto perfetta. <br/>
                <span className="italic text-accent">Senza compromessi.</span>
              </h1>
              <p className="text-lg text-text-muted mb-10 max-w-lg leading-relaxed">
                Affida la ricerca della tua prossima auto a consulenti esperti. Accediamo ai migliori mercati europei per garantirti qualità, sicurezza e il miglior prezzo.
              </p>
              
              <div className="w-full relative z-20">
                <MultiStepForm initialBrand={selectedBrand} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative hidden xl:flex items-center justify-center h-full min-h-[600px] w-full"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/40 rounded-full blur-3xl z-0"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1200" 
                alt="Premium Car" 
                className="w-full h-auto object-contain mix-blend-multiply z-10 scale-[1.1] translate-x-8"
                style={{ filter: "drop-shadow(0 30px 40px rgba(10, 25, 47, 0.1))" }}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-16 bg-white border-y border-neutral-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-neutral-border">
            {[
              { label: "Indipendenza", val: "100%" },
              { label: "Mercati Europei", val: "12+" },
              { label: "Controlli Tecnici", val: "150" },
              { label: "Clienti Soddisfatti", val: "500+" },
            ].map((p, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-4xl font-serif text-primary mb-2">{p.val}</div>
                <div className="text-xs uppercase tracking-widest font-semibold text-text-muted">{p.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Il Nostro Metodo */}
      <section className="py-24 bg-neutral-soft">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Un processo trasparente, <span className="italic text-accent">chiavi in mano.</span></h2>
            <p className="text-text-muted leading-relaxed">
              Dall'analisi delle tue esigenze fino alla consegna dell'auto sotto casa tua. Gestiamo ogni aspetto burocratico e tecnico per garantirti un acquisto sereno.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Search size={24} />, title: "1. Ricerca Globale", text: "Scansioniamo il mercato europeo e canali B2B riservati per trovare le migliori occasioni." },
              { icon: <ShieldCheck size={24} />, title: "2. Perizia Tecnica", text: "Ogni auto viene ispezionata meccanicamente ed elettronicamente prima di qualsiasi proposta." },
              { icon: <UserCheck size={24} />, title: "3. Negoziazione", text: "Trattiamo il prezzo per te, assicurandoci le migliori condizioni di acquisto senza sorprese." },
              { icon: <Truck size={24} />, title: "4. Import & Consegna", text: "Gestiamo immatricolazione, pratiche doganali e trasporto, consegnandoti l'auto pronta all'uso." },
            ].map((s, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-neutral-border hover:border-accent/30 hover:shadow-premium transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-neutral-warm text-accent flex items-center justify-center mb-6">
                  {s.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3 text-primary">{s.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Selection */}
      <BrandGrid onSelectBrand={handleSelectBrand} />

      {/* Testimonials */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600705602058-29a3998b5849?auto=format&fit=crop&w=2000&q=80')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">La fiducia dei nostri clienti.</h2>
            <p className="text-gray-400">Non accontentarti delle promesse. Leggi l'esperienza di chi ha già scelto il nostro servizio di brokeraggio.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-primary-light p-10 rounded-2xl border border-white/10 relative">
                <Quote size={40} className="absolute top-6 right-6 text-white/5" />
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(j => <Star key={j} size={16} className="text-accent fill-accent" />)}
                </div>
                <p className="text-lg text-gray-200 mb-8 leading-relaxed font-light">"{t.t}"</p>
                <div>
                  <h5 className="font-semibold text-white">{t.n}</h5>
                  <p className="text-accent text-sm">{t.m}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8">Pronto a trovare la tua prossima auto?</h2>
          <p className="text-lg text-text-muted mb-10">
            Prenota una consulenza gratuita. Analizzeremo le tue esigenze e ti spiegheremo esattamente come possiamo aiutarti.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary-light text-white font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              Inizia la Ricerca
            </button>
            <Link to="/contatti" className="border border-neutral-border hover:border-primary text-primary font-semibold py-4 px-8 rounded-lg transition-colors">
              Contattaci Direttamente
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
