import { Phone, Mail, MapPin, Clock, Check, X, CheckCircle2, Search, ShieldCheck, ChevronDown, Target, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-surface min-h-screen font-sans text-text pt-[80px]">

      {/* 1. HERO - Come preferisci contattarci? */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2000"
            alt="Auto premium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#061629]/70"></div>
        </div>

        <div className="ds-container relative z-10 text-center">
          <h1 className="text-[40px] md:text-[50px] font-serif font-bold text-white mb-14">
            Come preferisci contattarci?
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Phone, title: 'Telefono', line1: '+39 345 678 9012', line2: 'Lun-Ven 9:00-19:00', line3: 'Sab 9:00-13:00' },
              { icon: Mail, title: 'Email', line1: 'info@diamanticarbroker.it', line2: 'Scrivici e ti', line3: 'risponderemo presto' },
              { icon: Star, title: 'WhatsApp', line1: 'Scrivici per una', line2: 'risposta veloce', line3: 'Rapido e diretto' },
              { icon: Clock, title: 'Prenota una call', line1: 'Scegli il momento giusto', line2: 'per parlare con noi', line3: 'Consultazione gratuita' }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center flex flex-col items-center hover:bg-white/15 transition-colors">
                <div className="w-14 h-14 rounded-full border border-[#0c438f]/50 flex items-center justify-center mb-5">
                  <item.icon className="text-[#0c438f]" size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-white text-[16px] mb-3">{item.title}</h3>
                <p className="text-white/80 text-[13px] leading-relaxed">{item.line1}</p>
                <p className="text-white/60 text-[12px]">{item.line2}</p>
                <p className="text-white/60 text-[12px]">{item.line3}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FORM + SIDEBAR */}
      <section className="py-20 bg-white">
        <div className="ds-container">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Left - Form */}
            <div className="w-full lg:w-3/5">
              <h2 className="text-[32px] md:text-[38px] font-serif font-bold text-[#061629] mb-4 leading-tight">
                Raccontaci quale auto<br/>stai cercando
              </h2>
              <p className="text-[15px] text-muted mb-10 leading-relaxed">
                Più informazioni ci fornisci, più la ricerca sarà mirata e in linea con le tue esigenze.
              </p>

              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Richiesta inviata!'); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col text-left">
                    <label className="text-[12px] font-bold text-[#061629] mb-2">Nome e cognome *</label>
                    <input type="text" placeholder="" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] focus:outline-none focus:border-[#061629]" required />
                  </div>
                  <div className="flex flex-col text-left">
                    <label className="text-[12px] font-bold text-[#061629] mb-2">Email *</label>
                    <input type="email" placeholder="" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] focus:outline-none focus:border-[#061629]" required />
                  </div>
                </div>

                <div className="flex flex-col text-left">
                  <label className="text-[12px] font-bold text-[#061629] mb-2">Telefono</label>
                  <input type="tel" placeholder="Es. 345 678 9010" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] focus:outline-none focus:border-[#061629]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col text-left">
                    <label className="text-[12px] font-bold text-[#061629] mb-2">Tipologia auto *</label>
                    <select className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] text-gray-500 focus:outline-none focus:border-[#061629] bg-white appearance-none" required>
                      <option>Seleziona...</option>
                      <option>SUV</option>
                      <option>Berlina</option>
                      <option>Station Wagon</option>
                      <option>City Car</option>
                      <option>Sportiva</option>
                    </select>
                  </div>
                  <div className="flex flex-col text-left">
                    <label className="text-[12px] font-bold text-[#061629] mb-2">Marca</label>
                    <select className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] text-gray-500 focus:outline-none focus:border-[#061629] bg-white appearance-none">
                      <option>Seleziona...</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col text-left">
                    <label className="text-[12px] font-bold text-[#061629] mb-2">Modello</label>
                    <select className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] text-gray-500 focus:outline-none focus:border-[#061629] bg-white appearance-none">
                      <option>Seleziona...</option>
                    </select>
                  </div>
                  <div className="flex flex-col text-left">
                    <label className="text-[12px] font-bold text-[#061629] mb-2">Alimentazione</label>
                    <select className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] text-gray-500 focus:outline-none focus:border-[#061629] bg-white appearance-none">
                      <option>Seleziona...</option>
                      <option>Benzina</option>
                      <option>Diesel</option>
                      <option>Ibrida</option>
                      <option>Elettrica</option>
                      <option>GPL</option>
                      <option>Metano</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col text-left">
                    <label className="text-[12px] font-bold text-[#061629] mb-2">Budget</label>
                    <select className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] text-gray-500 focus:outline-none focus:border-[#061629] bg-white appearance-none">
                      <option>Seleziona...</option>
                      <option>Fino a 15.000€</option>
                      <option>15.000€ - 25.000€</option>
                      <option>25.000€ - 40.000€</option>
                      <option>40.000€ - 60.000€</option>
                      <option>Oltre 60.000€</option>
                    </select>
                  </div>
                  <div className="flex flex-col text-left">
                    <label className="text-[12px] font-bold text-[#061629] mb-2">Tempistica</label>
                    <select className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] text-gray-500 focus:outline-none focus:border-[#061629] bg-white appearance-none">
                      <option>Seleziona...</option>
                      <option>Entro 1 mese</option>
                      <option>1-3 mesi</option>
                      <option>Senza fretta</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col text-left">
                  <label className="text-[12px] font-bold text-[#061629] mb-3">Permuta? *</label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 text-[14px] text-[#061629] cursor-pointer">
                      <input type="radio" name="permuta" value="si" className="w-4 h-4 accent-[#061629]" /> Sì
                    </label>
                    <label className="flex items-center gap-2 text-[14px] text-[#061629] cursor-pointer">
                      <input type="radio" name="permuta" value="no" className="w-4 h-4 accent-[#061629]" defaultChecked /> No
                    </label>
                  </div>
                </div>

                <div className="flex flex-col text-left">
                  <label className="text-[12px] font-bold text-[#061629] mb-2">Messaggio / Esigenze specifiche</label>
                  <textarea
                    placeholder="Raccontaci le tue esigenze, preferenze, optional indispensabili..."
                    className="w-full border border-gray-200 rounded-md p-4 text-[14px] focus:outline-none focus:border-[#061629] min-h-[120px] resize-none"
                  />
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input type="checkbox" id="privacy" className="w-4 h-4 accent-[#061629] mt-1 shrink-0" required />
                  <label htmlFor="privacy" className="text-[12px] text-muted leading-relaxed">
                    Letti i dati sono di nostro servizio. Tratteremo le tue informazioni con la massima riservatezza.
                  </label>
                </div>

                <button type="submit" className="w-full bg-[#061629] hover:bg-gray-800 text-white h-[50px] rounded-md text-[14px] font-bold transition-colors mt-2">
                  Invia richiesta
                </button>
              </form>
            </div>

            {/* Right - Sidebar */}
            <div className="w-full lg:w-2/5 flex flex-col gap-6">
              <div className="bg-[#f6f8fb] border border-gray-100 rounded-xl p-8">
                <h3 className="font-serif text-[24px] font-bold text-[#061629] mb-8 leading-tight">
                  Ti ricontattiamo con una consulenza personalizzata
                </h3>

                <div className="space-y-8">
                  {[
                    { icon: Target, title: 'Analisi esigenze', text: 'Ascoltiamo le tue preferenze e individuiamo l\'auto ideale per te.' },
                    { icon: Search, title: 'Ricerca mirata', text: 'Accediamo a una rete selezionata per trovare le migliori opportunità.' },
                    { icon: ShieldCheck, title: 'Supporto fino alla consegna', text: 'Ti seguiamo in ogni fase, fino alla consegna a domicilio.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-5 items-start">
                      <div className="w-12 h-12 rounded-full bg-[#061629] text-white flex items-center justify-center shrink-0">
                        <item.icon size={20} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#061629] text-[15px] mb-1">{item.title}</h4>
                        <p className="text-[13px] text-muted leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl overflow-hidden h-[320px] shadow-lg relative group">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                  alt="Thomas - Consulente"
                  className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061629]/60 to-transparent"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. VS - Perché contattarci */}
      <section className="py-20 bg-[#f6f8fb] border-t border-gray-100">
        <div className="ds-container max-w-[1000px]">
          <h2 className="text-center text-[32px] md:text-[36px] font-serif font-bold mb-16 text-[#061629] leading-tight">
            Perché contattarci prima di cercare l'auto da solo
          </h2>

          <div className="relative">
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-[#061629] rounded-full text-white font-serif font-bold text-[22px] items-center justify-center z-10 border-4 border-[#f6f8fb]">
              VS
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white rounded-2xl p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100">
                <h3 className="font-bold text-[#061629] text-[16px] mb-8">Contattaci prima e ottieni vantaggi reali</h3>
                <ul className="flex flex-col gap-5">
                  {[
                    'Risparmi tempo',
                    'Ci occupiamo noi della ricerca, tu non devi fare niente di gravoso.',
                    'Eviti rischi e disguidi',
                    'Meno annunci inutili e offerte poco trasparenti.',
                    'Hai accesso a opportunità selezionate',
                    'Parti subito con un metodo chiaro'
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-[22px] h-[22px] rounded-full border border-gray-200 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-[#061629]" strokeWidth={3} />
                      </div>
                      <span className="text-[14px] text-[#061629] font-sans">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#eff2f6] rounded-2xl p-10 border border-transparent">
                <h3 className="font-bold text-[#061629] text-[16px] mb-8">Cercare da solo significa</h3>
                <ul className="flex flex-col gap-5">
                  {[
                    'Perdere ore tra annunci e trattative',
                    'Rischio auto non verificate e problemi nascosti',
                    'Affidarsi a venditori poco trasparenti',
                    'Pagare di più o fare scelte affrettate',
                    'Affrontare da solo burocrazia e passaggi'
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-[22px] h-[22px] rounded-full bg-[#061629] flex items-center justify-center shrink-0">
                        <X size={12} className="text-white" strokeWidth={3} />
                      </div>
                      <span className="text-[14px] text-[#061629] font-sans">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PARLI DIRETTAMENTE CON NOI */}
      <section className="bg-[#061629] py-20">
        <div className="ds-container">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <h2 className="text-[32px] md:text-[38px] font-serif font-bold text-white mb-6 leading-tight">
                Parli direttamente con noi
              </h2>
              <p className="text-white/80 text-[15px] leading-relaxed mb-8 max-w-md">
                Thomas e il suo team seguono ogni richiesta con attenzione e riservatezza. Ti accompagniamo dal primo contatto fino alla consegna dell'auto, con professionalità e passione.
              </p>
              <div className="mb-8">
                <div className="font-serif italic text-[38px] text-[#0c438f] mb-2 leading-none">Thomas Diamanti</div>
                <div className="text-white/60 text-[13px]">Fondatore, Diamanti Car Broker</div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500"
                alt="Thomas Diamanti"
                className="w-[300px] h-[350px] object-cover object-[center_20%] rounded-lg"
              />
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              {[
                { icon: Star, title: 'Consulenza dedicata', text: 'Un consulente esperto ti segue durante tutto il percorso.' },
                { icon: ShieldCheck, title: 'Massima riservatezza', text: 'I tuoi dati e le tue esigenze sono trattati con la massima discrezione.' },
                { icon: CheckCircle2, title: 'Assistenza continua', text: 'Siamo disponibili per qualsiasi domanda o necessità, sempre.' },
                { icon: MapPin, title: 'Consegna a domicilio', text: 'Ti consegniamo l\'auto pronta all\'uso direttamente a casa tua.' }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 flex gap-5 items-start hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full border border-[#0c438f]/40 flex items-center justify-center shrink-0">
                    <item.icon className="text-[#0c438f]" size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-[16px] mb-1">{item.title}</h4>
                    <p className="text-white/60 text-[13px] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. INFORMAZIONI UTILI */}
      <section className="py-20 bg-white">
        <div className="ds-container">
          <h2 className="text-center text-[36px] font-serif font-bold text-[#061629] mb-16">Informazioni utili</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: 'Orari', lines: ['Lun-Ven 9:00-19:00', 'Sab 9:00-13:00', 'Domenica chiuso'] },
              { icon: MapPin, title: 'Area operativa', lines: ['Operiamo in tutta Italia', 'e su richiesta anche', 'in Europa.'] },
              { icon: Star, title: 'Sede', lines: ['Via Roma 18', '20831 Seregno (MB)', 'Italia'] },
              { icon: Mail, title: 'Tempi di risposta', lines: ['Ti ricontattiamo entro', '24 ore lavorative.'] }
            ].map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-8 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center mb-5">
                  <item.icon className="text-[#061629]" size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-[#061629] text-[16px] mb-3">{item.title}</h3>
                {item.lines.map((line, j) => (
                  <p key={j} className="text-[13px] text-muted leading-relaxed">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DOMANDE FREQUENTI */}
      <section className="py-20 bg-[#f6f8fb] border-t border-gray-100">
        <div className="ds-container max-w-3xl">
          <h2 className="text-center text-[36px] font-serif font-bold text-[#061629] mb-16">Domande frequenti</h2>

          <div className="space-y-4">
            {[
              { q: 'Quanto costa la consulenza?', a: 'La prima consulenza è gratuita e senza impegno. Ti ascoltiamo, valutiamo le tue esigenze e ti proponiamo un percorso su misura.' },
              { q: 'Posso richiedere qualsiasi marca o modello?', a: 'Sì, lavoriamo su qualsiasi marca e modello. La nostra ricerca è personalizzata al 100% sulle tue esigenze.' },
              { q: 'Consegnate anche fuori regione?', a: 'Assolutamente sì. Effettuiamo consegne a domicilio in tutta Italia e gestiamo anche importazioni dall\'estero.' }
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

      {/* 7. CTA PRE-FOOTER */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="ds-container text-center max-w-2xl">
          <h2 className="text-[36px] md:text-[44px] font-serif font-bold text-[#061629] mb-6 leading-tight">
            Hai già in mente la tua prossima auto?
          </h2>
          <p className="text-[16px] text-muted mb-4 leading-relaxed">
            Contattaci oggi stesso: ti aiutiamo a trovarla con il metodo
          </p>
          <p className="text-[16px] text-muted mb-10 leading-relaxed">
            Diamanti Car Broker. Semplice, sicuro, su misura per te.
          </p>
          <Link to="/contatti" className="inline-flex h-[48px] px-8 bg-[#0c438f] hover:bg-[#0b2b5b] text-[#061629] font-bold items-center justify-center rounded-md transition-colors text-[14px]">
            Richiedi consulenza
          </Link>
        </div>
      </section>

    </div>
  );
}
