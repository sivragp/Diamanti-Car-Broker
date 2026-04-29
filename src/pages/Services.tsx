import { Search, ShieldCheck, Settings, MapPin, CheckCircle2, X, Star, Target, Check, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-surface min-h-screen font-sans text-text pt-[80px]">

      {/* 1. HERO - Cosa possiamo fare per te */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative car silhouette */}
        <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[700px] h-[500px] opacity-[0.1] pointer-events-none">
          <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="ds-container text-center relative z-10">
          <h1 className="text-[40px] md:text-[50px] font-serif font-bold text-[#061629] mb-6">
            Cosa possiamo fare per te
          </h1>
          <p className="text-[16px] text-muted max-w-2xl mx-auto leading-relaxed mb-4">
            Un servizio personalizzato, non basato su auto già disponibili in salone.
          </p>
          <p className="text-[16px] text-muted max-w-2xl mx-auto leading-relaxed mb-16">
            Lavoriamo per trovare l'auto giusta per te, con competenza e totale trasparenza.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Search, title: 'Ricerca auto su misura', text: 'Troviamo l\'auto giusta su tutto il mercato, in base a esigenze, budget e preferenze.' },
              { icon: ShieldCheck, title: 'Consulenza all\'acquisto', text: 'Ti consigliamo nella scelta tra modelli, allestimenti e opportunità.' },
              { icon: CheckCircle2, title: 'Verifica e selezione', text: 'Effettuiamo controlli su storia, condizioni, documenti e qualità del veicolo.' },
              { icon: Settings, title: 'Gestione completa', text: 'Trattativa, pratiche, contrattualistica e consegna chiavi in mano.' }
            ].map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-8 text-center flex flex-col items-center hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-shadow bg-white">
                <div className="w-14 h-14 rounded-full bg-[#061629] text-white flex items-center justify-center mb-6">
                  <item.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[17px] font-bold text-[#061629] mb-3">{item.title}</h3>
                <p className="text-[13px] text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. I NOSTRI SERVIZI NEL DETTAGLIO */}
      <section className="py-20 bg-[#f6f8fb] border-t border-gray-100">
        <div className="ds-container">
          <h2 className="text-center text-[36px] font-serif font-bold text-[#061629] mb-16">
            I nostri servizi nel dettaglio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-14 gap-x-8">
            {[
              { num: 1, title: 'Briefing e analisi esigenze', text: 'Ascoltiamo le tue necessità, le priorità e il budget per definire il profilo dell\'auto perfetta per te, senza compromessi.' },
              { num: 2, title: 'Ricerca personalizzata sul mercato', text: 'Accediamo a una rete ampia e selezionata di fonti nazionali per individuare le migliori opportunità, anche non pubblicate.' },
              { num: 3, title: 'Selezione delle migliori opportunità', text: 'Ti presentiamo le auto selezionate, con la loro scheda tecnica, foto e una valutazione chiara e completa di ogni dettaglio.' },
              { num: 4, title: 'Verifica documentale e qualitativa', text: 'Controlliamo documenti, chilometraggio, storia e manutenzione e condizioni del veicolo, con rapporti accurati.' },
              { num: 5, title: 'Negoziazione e supporto all\'acquisto', text: 'Negoziamo per te il miglior prezzo e condizioni, tutelando i tuoi interessi in ogni fase della trattativa.' },
              { num: 6, title: 'Consegna a domicilio e assistenza finale', text: 'Gestiamo pratiche e passaggio di proprietà, e consegniamo l\'auto a casa tua, con assistenza anche post acquisto.' }
            ].map((step, i) => (
              <div key={i} className="relative flex flex-col">
                <div className="bg-white border border-gray-100 p-8 pt-10 h-full flex flex-col shadow-sm">
                  <div className="absolute -top-[20px] left-4 w-12 h-12 rounded-full bg-[#061629] text-white font-sans font-bold text-[18px] flex items-center justify-center border-[4px] border-[#f6f8fb]">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-[#061629] text-[16px] mb-3 leading-tight">{step.title}</h3>
                  <p className="text-[14px] text-muted leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VS SECTION */}
      <section className="py-20 bg-white">
        <div className="ds-container max-w-[1000px]">
          <h2 className="text-center text-[32px] md:text-[36px] font-serif font-bold mb-16 text-[#061629] leading-tight">
            Perché affidarti a noi invece di fare tutto da solo
          </h2>

          <div className="relative">
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-[#061629] rounded-full text-white font-serif font-bold text-[22px] items-center justify-center z-10 border-4 border-white">
              VS
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Left - Con Diamanti */}
              <div className="bg-white rounded-2xl p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100">
                <h3 className="font-bold text-[#061629] text-[18px] mb-8">Con Diamanti Car Broker</h3>
                <ul className="flex flex-col gap-5">
                  {[
                    'Risparmi tempo e riduci lo stress',
                    'Ricevi solo opportunità selezionate',
                    'Verifiche approfondite e documenti in regola',
                    'Trattativa esperta e condizioni migliori',
                    'Meno rischi e maggiore sicurezza',
                    'Processo chiaro, trasparente e seguito'
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

              {/* Right - Da solo */}
              <div className="bg-[#eff2f6] rounded-2xl p-10 border border-transparent">
                <h3 className="font-bold text-[#061629] text-[18px] mb-8">Cercando da solo</h3>
                <ul className="flex flex-col gap-5">
                  {[
                    'Tempo perso fra annunci e trattative',
                    'Offerte non verificate e non aggiornate',
                    'Rischio di auto con problemi nascosti',
                    'Trattativa con gli stessi e spesso più alti',
                    'Maggiore incertezza e rischi di errore',
                    'Gestione burocratica complessa'
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

      {/* 4. COME LAVORIAMO - 5 step orizzontali */}
      <section className="py-20 bg-[#f6f8fb] border-t border-gray-100">
        <div className="ds-container">
          <h2 className="text-center text-[36px] font-serif font-bold text-[#061629] mb-16">Come lavoriamo</h2>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] border-t-[2px] border-dotted border-gray-300 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { num: 1, icon: CheckCircle2, title: 'Ascolto', text: 'Analizziamo le tue esigenze, priorità e budget per una ricerca su misura.' },
                { num: 2, icon: Target, title: 'Profilazione auto', text: 'Definiamo insieme il modello da cercare, con tutti i dettagli.' },
                { num: 3, icon: Search, title: 'Ricerca e selezione', text: 'Valutiamo le migliori opportunità sul mercato, in modo preciso.' },
                { num: 4, icon: ShieldCheck, title: 'Verifica trattativa e consegna', text: 'Controlliamo la validazione del veicolo e seguiamo la trattativa.' },
                { num: 5, icon: MapPin, title: 'Consegna', text: 'Ti consegniamo l\'auto pronta, direttamente a domicilio.' }
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-[#061629] text-white font-sans font-bold text-[18px] flex items-center justify-center border-[6px] border-[#f6f8fb] mb-5">
                    {step.num}
                  </div>
                  <step.icon className="text-[#061629] mb-3 opacity-80" size={24} strokeWidth={1.5} />
                  <h3 className="font-bold text-[#061629] text-[14px] mb-2">{step.title}</h3>
                  <p className="text-[12px] text-muted leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. BANNER - Non vendiamo auto in stock */}
      <section className="bg-[#061629] relative overflow-hidden">
        <div className="ds-container">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 py-20 pr-10">
              <h2 className="text-[32px] md:text-[40px] font-serif font-bold text-white mb-6 leading-tight">
                Non vendiamo auto in stock:<br/>
                troviamo quella <span className="text-[#0c438f] italic">giusta per te</span>.
              </h2>
              <p className="text-white/70 text-[16px] mb-10 leading-relaxed max-w-md">
                Il nostro lavoro parte sempre da te, non da un magazzino o da un listino.<br/>
                Ogni ricerca è su misura, per offrirti solo ciò che risponde davvero.
              </p>
              <Link to="/contatti" className="inline-flex h-[48px] px-8 bg-white hover:bg-gray-100 text-[#061629] font-bold items-center justify-center rounded-md transition-colors text-[14px]">
                Parla con un consulente
              </Link>
            </div>
            <div className="w-full md:w-1/2 h-[400px] md:h-[480px] relative">
              <div className="rounded-xl overflow-hidden h-[320px] shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800"
                  alt="Cliente soddisfatto"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. UN SERVIZIO DAVVERO COMPLETO */}
      <section className="py-20 bg-white">
        <div className="ds-container">
          <h2 className="text-center text-[36px] font-serif font-bold text-[#061629] mb-16">
            Un servizio davvero completo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Star, title: 'Supporto dedicato', text: 'Un unico referente ti segue e organizza il tuo percorso.' },
              { icon: CheckCircle2, title: 'Rete selezionata', text: 'Collaboriamo con fonti affidabili e fonti selezionate su scala nazionale.' },
              { icon: ShieldCheck, title: 'Trasparenza totale', text: 'Ti raccontiamo tutto: processo, costi, tempi e condizioni reali.' },
              { icon: MapPin, title: 'Assistenza fino alla consegna', text: 'Dall\'avvio alla consegna, siamo al tuo fianco senza lasciare nulla al caso.' }
            ].map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-8 text-center flex flex-col items-center hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-shadow bg-white">
                <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center mb-6">
                  <item.icon className="text-[#061629]" size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-[#061629] text-[16px] mb-3">{item.title}</h3>
                <p className="text-[13px] text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Photo strip of car details */}
          <div className="mt-20 grid grid-cols-4 gap-4">
            <div className="h-[180px] rounded-xl overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600" alt="Porsche Detail" className="w-full h-full object-cover" />
            </div>
            <div className="h-[180px] rounded-xl overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600" alt="Headlights" className="w-full h-full object-cover" />
            </div>
            <div className="h-[180px] rounded-xl overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=600" alt="Luxury car" className="w-full h-full object-cover" />
            </div>
            <div className="h-[180px] rounded-xl overflow-hidden shadow-sm">
              <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=600" alt="Porsche Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. DOMANDE FREQUENTI */}
      <section className="py-20 bg-[#f6f8fb] border-t border-gray-100">
        <div className="ds-container max-w-3xl">
          <h2 className="text-center text-[36px] font-serif font-bold text-[#061629] mb-16">Domande frequenti</h2>

          <div className="space-y-4">
            {[
              { q: 'Come funziona il servizio di car broker?', a: 'Tu ci racconti cosa cerchi: modello, budget, utilizzo, preferenze, tempistiche. Noi attiviamo la ricerca e ti presentiamo le migliori opportunità e ti accompagniamo fino alla consegna dell\'auto.' },
              { q: 'Posso richiedere qualsiasi marca o modello?', a: 'Sì, lavoriamo su qualsiasi marca e modello. La nostra ricerca è personalizzata al 100% sulle tue esigenze specifiche.' },
              { q: 'Mi aiutate con la verifica dell\'auto?', a: 'Assolutamente. Ogni veicolo che proponiamo viene verificato in termini di storia, condizioni, documenti e chilometraggio reale.' },
              { q: 'Consegnate anche fuori città?', a: 'Sì, effettuiamo consegne a domicilio in tutta Italia. Organizziamo il trasporto in modo sicuro e puntuale.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-[#061629] text-[15px] pr-4">{faq.q}</span>
                  <ChevronDown className={`text-muted shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} size={20} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-[14px] text-muted leading-relaxed border-t border-gray-50 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA PRE-FOOTER */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="ds-container text-center max-w-2xl">
          <h2 className="text-[36px] md:text-[44px] font-serif font-bold text-[#061629] mb-6 leading-tight italic">
            Raccontaci quale <span className="not-italic">auto</span><br/>stai cercando.
          </h2>
          <p className="text-[16px] text-muted mb-10 leading-relaxed">
            Condividi le tue esigenze e ti proporremo le migliori<br/>
            opportunità, selezionate per te.
          </p>
          <Link to="/contatti" className="inline-flex h-[48px] px-8 bg-[#0c438f] hover:bg-[#0b2b5b] text-[#061629] font-bold items-center justify-center rounded-md transition-colors text-[14px]">
            Richiedi consulenza
          </Link>
        </div>
      </section>

    </div>
  );
}
