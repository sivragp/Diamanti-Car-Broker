import { Search, ShieldCheck, MapPin, BadgeCheck, FileCheck, Truck, ChevronRight, User, CheckCircle2, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const STEPS = [
  {
    num: '01',
    title: 'Analisi strategica del mercato',
    text: "Non ci limitiamo a guardare gli annunci. Analizziamo l'andamento dei prezzi, la svalutazione futura del modello e la disponibilità reale in tutta Europa, con focus su Germania e Italia.",
    details: ['Definizione budget', 'Analisi costo/beneficio', "Individuazione canali d'acquisto"],
    icon: Search,
  },
  {
    num: '02',
    title: 'Scouting e pre-selezione',
    text: 'Filtriamo centinaia di proposte per trovarne 3 che rispettino i nostri parametri di sicurezza. Ogni auto scartata è un rischio che ti abbiamo evitato.',
    details: ['Verifica cronologia tagliandi', 'Database sinistri', 'Visura ipoteche'],
    icon: MapPin,
  },
  {
    num: '03',
    title: 'Check tecnico e perizia 150 punti',
    text: 'Un nostro perito certificato esegue un test drive e una diagnosi computerizzata approfondita. Riceverai un report fotografico e video completo prima di procedere.',
    details: ['Diagnosi centralina', 'Controllo spessori vernice', 'Test drive su strada'],
    icon: FileCheck,
  },
  {
    num: '04',
    title: 'Negoziazione, permuta e finanziamento',
    text: 'Siamo consulenti, non venditori. Trattiamo prezzo e condizioni per ottenere lo sconto massimo. Valutiamo la tua auto in permuta e costruiamo, se vuoi, il finanziamento giusto fino a 120 mesi con i nostri partner bancari.',
    details: ['Massimizzazione sconto', 'Valutazione auto in permuta', 'Finanziamento fino a 120 mesi', 'Revisione legale contratti'],
    icon: BadgeCheck,
  },
  {
    num: '05',
    title: 'Import, pratiche e consegna a domicilio',
    text: "Se l'auto è all'estero, gestiamo trasporto bisarca e nazionalizzazione. Riceverai l'auto pronta per circolare, immatricolata e lavata, direttamente sotto casa tua — ovunque tu sia in Italia.",
    details: ['Trasporto assicurato', 'Immatricolazione rapida', 'Consegna door-to-door in tutta Italia'],
    icon: Truck,
  },
  {
    num: '06',
    title: 'Post-vendita e primo tagliando incluso',
    text: "Il nostro rapporto non finisce alla consegna. Restiamo a tua disposizione per assistenza, dubbi e burocrazia. Dopo i primi 5.000 km, il primo tagliando lo offriamo noi presso officine selezionate.",
    details: ['Assistenza post-vendita', 'Officine convenzionate', 'Primo tagliando gratuito'],
    icon: Wrench,
  },
];

const CLIENT_TASKS = [
  'Definire budget e preferenze (modello, allestimento, gusto)',
  "Raccontarci come userai l'auto (km/anno, famiglia, viaggi)",
  'Scegliere la proposta che preferisci tra quelle selezionate',
  "Ritirare le chiavi della tua nuova auto",
];

const CONSULTANT_TASKS = [
  'Filtrare migliaia di annunci falsi o truffaldini',
  'Parlare con decine di venditori (anche in tedesco)',
  'Verificare km e storico meccanico in database ufficiali',
  "Gestire contratti, documenti e burocrazia d'import",
  'Valutare e ritirare la tua auto in permuta',
  'Costruire un finanziamento su misura fino a 120 mesi',
  'Organizzare trasporto bisarca assicurato in tutta Italia',
  'Gestire la nazionalizzazione e le targhe italiane',
  'Offrirti il primo tagliando dopo 5.000 km',
];

export default function HowItWorks() {
  return (
    <div className="bg-surface min-h-screen font-sans text-text pt-[74px]">
      <SEO
        title="Come funziona — Il metodo per la ricerca auto | Diamanti Automobili"
        description="Le 6 fasi del nostro servizio di consulenza: analisi mercato, scouting, perizia 150 punti, negoziazione con permuta e finanziamento fino a 120 mesi, consegna a domicilio e primo tagliando incluso."
        path="/come-funziona"
      />

      {/* 1. HERO */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="ds-container text-center relative z-10">
          <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#0c438f] mb-4">Il nostro metodo</p>
          <h1 className="text-[40px] md:text-[50px] font-extrabold text-[#061629] mb-6 leading-tight">
            Guida il tuo sogno.<br/>Al resto pensiamo noi.
          </h1>
          <p className="text-[16px] text-muted max-w-2xl mx-auto leading-relaxed">
            Il nostro non è un processo meccanico, ma un percorso condiviso. Dal primo contatto alla consegna delle chiavi, sei sempre al centro di ogni decisione.
          </p>
        </div>
      </section>

      {/* 2. STEPS */}
      <section className="py-20 bg-[#f6f8fb] border-t border-[#e6ebf2]">
        <div className="ds-container">
          <h2 className="text-center text-[30px] md:text-[34px] font-extrabold text-[#061629] mb-16">
            Le sei fasi del nostro lavoro
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-8">
            {STEPS.map((step, i) => (
              <div key={i} className="relative flex flex-col">
                <div className="bg-white border border-[#e6ebf2] rounded-lg p-8 pt-10 h-full flex flex-col shadow-[0_12px_28px_-24px_rgba(6,22,41,0.32)] hover:shadow-[0_18px_42px_-26px_rgba(6,22,41,0.38)] transition-shadow">
                  <div className="absolute -top-[20px] left-4 w-12 h-12 rounded-full bg-[#0b2b5b] text-white font-bold text-[16px] flex items-center justify-center border-[4px] border-[#f6f8fb]">
                    {step.num}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#0b2b5b]/5 text-[#0b2b5b] flex items-center justify-center mb-5 mt-2">
                    <step.icon size={22} strokeWidth={1.6} />
                  </div>
                  <h3 className="text-[16px] font-extrabold text-[#061629] mb-3 leading-tight">{step.title}</h3>
                  <p className="text-[14px] text-muted leading-relaxed mb-6">{step.text}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {step.details.map((d, j) => (
                      <span key={j} className="text-[11px] font-semibold py-1.5 px-3 rounded-full bg-[#f6f8fb] border border-[#e6ebf2] text-[#0b2b5b]">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CHI FA COSA */}
      <section className="py-20 bg-white">
        <div className="ds-container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-[30px] md:text-[34px] font-extrabold text-[#061629] mb-4 leading-tight">
              Chi fa cosa?
            </h2>
            <p className="text-[15px] text-muted leading-relaxed">
              La nostra missione è semplificare il processo e farti risparmiare tempo, energie e preoccupazioni. Ecco come ci dividiamo i compiti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Cliente */}
            <div className="bg-white border border-[#e6ebf2] rounded-lg p-10 shadow-[0_16px_34px_-26px_rgba(6,22,41,0.35)]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#0b2b5b]/5 text-[#0b2b5b] flex items-center justify-center">
                  <User size={22} strokeWidth={1.6} />
                </div>
                <h3 className="text-[18px] font-extrabold text-[#061629]">I tuoi unici compiti</h3>
              </div>
              <ul className="flex flex-col gap-5">
                {CLIENT_TASKS.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-[22px] h-[22px] rounded-full border border-[#e6ebf2] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={14} className="text-[#0c438f]" strokeWidth={2.2} />
                    </div>
                    <span className="text-[15px] text-[#061629]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Consulente */}
            <div className="bg-[#061629] rounded-lg p-10 text-white shadow-[0_16px_34px_-26px_rgba(6,22,41,0.35)]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center">
                  <ShieldCheck size={22} strokeWidth={1.6} />
                </div>
                <h3 className="text-[18px] font-extrabold text-white">I compiti del consulente</h3>
              </div>
              <ul className="flex flex-col gap-5">
                {CONSULTANT_TASKS.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-[22px] h-[22px] rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={14} className="text-white" strokeWidth={2.2} />
                    </div>
                    <span className="text-[15px] text-white/90 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA PRE-FOOTER */}
      <section className="py-20 bg-[#f6f8fb] border-t border-[#e6ebf2]">
        <div className="ds-container text-center max-w-2xl">
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-[#061629] mb-6 leading-tight">
            Qual è il tuo punto di partenza?
          </h2>
          <p className="text-[16px] text-muted mb-10 leading-relaxed">
            Che tu abbia già un'auto in mente o stia ancora valutando, ti accompagniamo nella scelta giusta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contatti" className="inline-flex h-[48px] px-7 items-center justify-center rounded-full bg-[#0b2b5b] hover:bg-[#0c438f] text-white font-bold transition-colors text-[14px] gap-2">
              Ho già un'auto in mente
              <ChevronRight size={18} />
            </Link>
            <Link to="/servizi" className="inline-flex h-[48px] px-7 items-center justify-center rounded-full bg-white hover:bg-[#eef3f8] text-[#0b2b5b] border border-[#d7e2ef] font-bold transition-colors text-[14px]">
              Voglio solo informarmi
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
