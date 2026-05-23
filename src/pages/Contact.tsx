import { Phone, Mail, MapPin, Clock, CheckCircle2, Search, ShieldCheck, ChevronDown, Target, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { ContactCTA } from '../components/ContactCTA';
import { submitLead } from '../lib/forms';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  return (
    <div className="bg-surface min-h-screen font-sans text-text pt-[74px]">
      <SEO
        title="Contatti — Richiedi una consulenza | Diamanti Automobili Roma"
        description="Parla con un consulente per l'acquisto auto. Sede a Roma, operiamo in tutta Italia. Prima consulenza gratuita, risposta entro 24 ore. Telefono, email, WhatsApp o call."
        path="/contatti"
      />

      {/* 1. HERO unificato */}
      <PageHero
        image="/images/auto-lungofiume.webp"
        eyebrow="Contatti"
        title="Come preferisci contattarci?"
        subtitle="Scegli il canale che preferisci: ti rispondiamo entro 24 ore lavorative."
      />

      {/* 2. CANALI DI CONTATTO */}
      <section className="relative py-16 bg-[#061629] overflow-hidden">
        <div className="ds-container relative z-10 text-center">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Phone, title: 'Telefono', line1: '+39 345 678 9012', line2: 'Lun-Ven 9:00-19:00', line3: 'Sab 9:00-13:00' },
              { icon: Mail, title: 'Email', line1: 'info@diamantiautomobili.it', line2: 'Scrivici e ti', line3: 'risponderemo presto' },
              { icon: Star, title: 'WhatsApp', line1: 'Scrivici per una', line2: 'risposta veloce', line3: 'Rapido e diretto' },
              { icon: Clock, title: 'Prenota una call', line1: 'Scegli il momento giusto', line2: 'per parlare con noi', line3: 'Consultazione gratuita' }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 text-center flex flex-col items-center hover:bg-white/15 transition-colors">
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
              <h2 className="text-[30px] md:text-[34px] font-extrabold text-[#061629] mb-4 leading-tight">
                Raccontaci quale auto<br/>stai cercando
              </h2>
              <p className="text-[15px] text-muted mb-10 leading-relaxed">
                Più dettagli ci dai, più precisa e mirata sarà la nostra ricerca. Ti ricontattiamo entro 24 ore lavorative.
              </p>

              <form
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  setStatus('submitting');
                  try {
                    await submitLead(form);
                    setStatus('success');
                    form.reset();
                  } catch {
                    setStatus('error');
                  }
                }}
              >
                {/* Config FormSubmit + honeypot anti-spam */}
                <input type="hidden" name="_subject" value="Nuova richiesta consulenza — sito Diamanti Automobili" />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col text-left">
                    <label className="text-[12px] font-bold text-[#061629] mb-2">Nome e cognome *</label>
                    <input type="text" name="Nome" placeholder="" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] focus:outline-none focus:border-[#061629]" required />
                  </div>
                  <div className="flex flex-col text-left">
                    <label className="text-[12px] font-bold text-[#061629] mb-2">Email *</label>
                    <input type="email" name="Email" placeholder="" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] focus:outline-none focus:border-[#061629]" required />
                  </div>
                </div>

                <div className="flex flex-col text-left">
                  <label className="text-[12px] font-bold text-[#061629] mb-2">Telefono</label>
                  <input type="tel" name="Telefono" placeholder="Es. 345 678 9010" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] focus:outline-none focus:border-[#061629]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col text-left">
                    <label className="text-[12px] font-bold text-[#061629] mb-2">Tipologia auto *</label>
                    <select name="Tipologia" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] text-gray-500 focus:outline-none focus:border-[#061629] bg-white appearance-none" required>
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
                    <select name="Marca" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] text-gray-500 focus:outline-none focus:border-[#061629] bg-white appearance-none">
                      <option>Seleziona...</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col text-left">
                    <label className="text-[12px] font-bold text-[#061629] mb-2">Modello</label>
                    <select name="Modello" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] text-gray-500 focus:outline-none focus:border-[#061629] bg-white appearance-none">
                      <option>Seleziona...</option>
                    </select>
                  </div>
                  <div className="flex flex-col text-left">
                    <label className="text-[12px] font-bold text-[#061629] mb-2">Alimentazione</label>
                    <select name="Alimentazione" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] text-gray-500 focus:outline-none focus:border-[#061629] bg-white appearance-none">
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
                    <select name="Budget" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] text-gray-500 focus:outline-none focus:border-[#061629] bg-white appearance-none">
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
                    <select name="Tempistica" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] text-gray-500 focus:outline-none focus:border-[#061629] bg-white appearance-none">
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
                    name="Messaggio"
                    placeholder="Raccontaci le tue esigenze, preferenze, optional indispensabili..."
                    className="w-full border border-gray-200 rounded-md p-4 text-[14px] focus:outline-none focus:border-[#061629] min-h-[120px] resize-none"
                  />
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input type="checkbox" id="privacy" name="Privacy" value="Accettata" className="w-4 h-4 accent-[#061629] mt-1 shrink-0" required />
                  <label htmlFor="privacy" className="text-[12px] text-muted leading-relaxed">
                    Acconsento al trattamento dei dati personali. Le tue informazioni saranno gestite con la massima riservatezza e usate solo per ricontattarti.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-[#061629] hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed text-white h-[50px] rounded-md text-[14px] font-bold transition-colors mt-2"
                >
                  {status === 'submitting' ? 'Invio in corso…' : 'Invia richiesta'}
                </button>

                {status === 'success' && (
                  <p className="text-center text-[14px] font-semibold text-[#0c438f] bg-[#0c438f]/8 border border-[#0c438f]/20 rounded-md py-3 px-4">
                    Richiesta inviata! Ti ricontattiamo entro 24 ore lavorative.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-center text-[14px] font-semibold text-[#b42318] bg-[#b42318]/8 border border-[#b42318]/20 rounded-md py-3 px-4">
                    Invio non riuscito. Riprova tra poco oppure scrivici via email.
                  </p>
                )}
              </form>
            </div>

            {/* Right - Sidebar */}
            <div className="w-full lg:w-2/5 flex flex-col gap-6">
              <div className="bg-[#f6f8fb] border border-gray-100 rounded-lg p-8">
                <h3 className="text-[24px] font-bold text-[#061629] mb-8 leading-tight">
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

              <div className="bg-[#061629] rounded-lg p-10 text-white shadow-lg flex flex-col justify-center">
                <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#7ba6e4] mb-4">Il nostro team</p>
                <h3 className="text-[22px] font-extrabold mb-4 leading-tight">
                  Siamo qui per rispondere a tutte le tue domande.
                </h3>
                <p className="text-white/72 text-[14px] leading-relaxed">
                  Il team di Diamanti Automobili è disponibile per consulenze su misura, valutazioni di permuta e simulazioni di finanziamento. Ti rispondiamo entro 24 ore lavorative.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PARLI DIRETTAMENTE CON NOI */}
      <section className="bg-[#061629] py-20">
        <div className="ds-container">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#7ba6e4] mb-4">Il nostro team</p>
              <h2 className="text-[30px] md:text-[34px] font-extrabold text-white mb-6 leading-tight">
                Parli direttamente con noi
              </h2>
              <p className="text-white/80 text-[15px] leading-relaxed mb-6 max-w-md">
                Il team di Diamanti Automobili segue ogni richiesta con attenzione e riservatezza. Ti accompagniamo dal primo contatto alla consegna dell'auto, con professionalità e passione.
              </p>
              <p className="text-white/72 text-[14px] leading-relaxed mb-8 max-w-md">
                Riceverai un singolo referente dedicato, che ti seguirà in tutte le fasi: briefing, ricerca, perizia, trattativa, consegna a domicilio e supporto post-vendita.
              </p>
              <Link to="/chi-siamo" className="inline-flex h-[44px] items-center justify-center rounded-full bg-white hover:bg-[#eef3f8] text-[#061629] px-6 text-[13px] font-bold transition-colors">
                Scopri chi siamo
              </Link>
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              {[
                { icon: Star, title: 'Consulenza dedicata', text: 'Un consulente esperto ti segue durante tutto il percorso.' },
                { icon: ShieldCheck, title: 'Massima riservatezza', text: 'I tuoi dati e le tue esigenze sono trattati con la massima discrezione.' },
                { icon: CheckCircle2, title: 'Assistenza continua', text: 'Siamo disponibili per qualsiasi domanda o necessità, sempre.' },
                { icon: MapPin, title: 'Consegna a domicilio', text: 'Ti consegniamo l\'auto pronta all\'uso direttamente a casa tua.' }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-6 flex gap-5 items-start hover:bg-white/10 transition-colors">
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
          <h2 className="text-center text-[30px] md:text-[34px] font-extrabold text-[#061629] mb-16">Informazioni utili</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: 'Orari', lines: ['Lun-Ven 9:00-19:00', 'Sab 9:00-13:00', 'Domenica chiuso'] },
              { icon: MapPin, title: 'Area operativa', lines: ['Operiamo in tutta Italia', 'e su richiesta anche', 'in Europa.'] },
              { icon: Star, title: 'Sede', lines: ['Roma (RM)', 'Su appuntamento', 'Italia'] },
              { icon: Mail, title: 'Tempi di risposta', lines: ['Ti ricontattiamo entro', '24 ore lavorative.'] }
            ].map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-lg p-8 text-center flex flex-col items-center">
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
          <h2 className="text-center text-[30px] md:text-[34px] font-extrabold text-[#061629] mb-16">Domande frequenti</h2>

          <div className="space-y-4">
            {[
              { q: 'Quanto costa la consulenza?', a: 'La prima consulenza è gratuita e senza impegno. Ti ascoltiamo, valutiamo le tue esigenze e ti proponiamo un percorso su misura.' },
              { q: 'Posso richiedere qualsiasi marca o modello?', a: 'Sì, lavoriamo su qualsiasi marca e modello. La nostra ricerca è personalizzata al 100% sulle tue esigenze.' },
              { q: 'Consegnate anche fuori regione?', a: 'Assolutamente sì. Effettuiamo consegne a domicilio in tutta Italia e gestiamo anche importazioni dall\'estero.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-lg overflow-hidden">
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
      <ContactCTA image="/images/ford-mustang-tramonto.webp" />

    </div>
  );
}
