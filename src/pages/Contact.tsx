import { Phone, Mail, MapPin, Clock, CheckCircle2, Search, ShieldCheck, ChevronDown, Target, Star, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useRef, useId } from 'react';
import { SEO, SITE_URL, breadcrumbLd } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { ContactCTA } from '../components/ContactCTA';
import { Reveal } from '../components/Reveal';
import { useIsMobile } from '../lib/useIsMobile';
import { submitLead } from '../lib/forms';
import { CAR_BRANDS } from '../lib/brands';
import { PHONE_DISPLAY, PHONE_HREF, EMAIL, EMAIL_HREF, WHATSAPP_HREF } from '../lib/contact';

const CONTACT_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contatti — Diamanti Automobili',
  description: "Contatta Diamanti Automobili, consulente per l'acquisto auto a Roma e in tutta Italia.",
  url: `${SITE_URL}/contatti`,
  mainEntity: { '@id': `${SITE_URL}/#business` },
};

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Modulo a 2 step SOLO su mobile (1: dettagli auto, 2: anagrafica).
  const isMobile = useIsMobile();
  const [step, setStep] = useState(1);
  const step1Ref = useRef<HTMLDivElement>(null);
  const uid = useId();
  const fid = (f: string) => `${uid}-${f}`;
  const showStep1 = !isMobile || step === 1;
  const showStep2 = !isMobile || step === 2;
  const goNext = () => {
    const fields = step1Ref.current
      ? (Array.from(step1Ref.current.querySelectorAll('input, select, textarea')) as Array<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>)
      : [];
    for (const el of fields) {
      if (!el.checkValidity()) { el.reportValidity(); return; }
    }
    setStep(2);
    document.getElementById('form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-surface min-h-screen font-sans text-text pt-[74px]">
      <SEO
        title="Contatti — Richiedi una consulenza | Diamanti Automobili Roma"
        description="Parla con un consulente per l'acquisto auto. Sede a Roma, operiamo in tutta Italia. Prima consulenza gratuita, risposta entro 24 ore. Telefono, email, WhatsApp o call."
        path="/contatti"
        jsonLd={[CONTACT_JSONLD, breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Contatti', path: '/contatti' }])]}
        jsonLdId="contatti"
      />

      {/* 1. HERO unificato */}
      <PageHero
        image="/images/auto-lungofiume.webp"
        imageMobile="/images/hero-showroom-interior.webp"
        eyebrow="Contatti"
        title="Come preferisci contattarci?"
        subtitle="Scegli il canale che preferisci: ti rispondiamo entro 24 ore lavorative."
      />

      {/* 2. FORM + SIDEBAR */}
      <section id="form" className="py-20 bg-white scroll-mt-[74px]">
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
                className="flex flex-col gap-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (status === 'submitting') return; // guardia anti doppio invio
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
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

                {/* Indicatore di step — solo mobile */}
                {isMobile && (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#0c438f]">Passo {step} di 2</span>
                      <span className="text-[11px] font-semibold text-[#7b8794]">{step === 1 ? 'Dettagli auto' : 'Anagrafica'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 flex-1 rounded-full bg-[#0b2b5b]"></div>
                      <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-[#0b2b5b]' : 'bg-[#e6ebf2]'}`}></div>
                    </div>
                  </div>
                )}

                {/* STEP 2 (parte A) — anagrafica: resta in cima nel DOM, così l'ordine desktop non cambia */}
                <div className={showStep2 ? 'flex flex-col gap-6' : 'hidden'}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col text-left">
                    <label htmlFor={fid('nome')} className="text-[12px] font-bold text-[#061629] mb-2">Nome e cognome *</label>
                    <input id={fid('nome')} type="text" name="Nome" placeholder="" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] focus:outline-none focus:border-[#061629]" required />
                  </div>
                  <div className="flex flex-col text-left">
                    <label htmlFor={fid('email')} className="text-[12px] font-bold text-[#061629] mb-2">Email *</label>
                    <input id={fid('email')} type="email" name="Email" placeholder="" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] focus:outline-none focus:border-[#061629]" required />
                  </div>
                </div>

                <div className="flex flex-col text-left">
                  <label htmlFor={fid('telefono')} className="text-[12px] font-bold text-[#061629] mb-2">Telefono</label>
                  <input id={fid('telefono')} type="tel" name="Telefono" placeholder="Es. 345 678 9010" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] focus:outline-none focus:border-[#061629]" />
                </div>
                </div>
                {/* /STEP 2 parte A */}

                {/* STEP 1 — dettagli auto */}
                <div ref={step1Ref} className={showStep1 ? 'flex flex-col gap-6' : 'hidden'}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col text-left">
                    <label htmlFor={fid('tipologia')} className="text-[12px] font-bold text-[#061629] mb-2">Tipologia auto *</label>
                    <select id={fid('tipologia')} name="Tipologia" defaultValue="" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] text-gray-500 focus:outline-none focus:border-[#061629] bg-white appearance-none" required>
                      <option value="">Seleziona...</option>
                      <option>SUV</option>
                      <option>Berlina</option>
                      <option>Station Wagon</option>
                      <option>City Car</option>
                      <option>Sportiva</option>
                      <option>Monovolume</option>
                      <option>Coupé / Cabrio</option>
                      <option>Furgone / Van</option>
                    </select>
                  </div>
                  <div className="flex flex-col text-left">
                    <label htmlFor={fid('marca')} className="text-[12px] font-bold text-[#061629] mb-2">Marca</label>
                    <select id={fid('marca')} name="Marca" defaultValue="" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] text-gray-500 focus:outline-none focus:border-[#061629] bg-white appearance-none">
                      <option value="">Seleziona...</option>
                      {CAR_BRANDS.map((brand) => (
                        <option key={brand} value={brand}>{brand}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col text-left">
                    <label htmlFor={fid('modello')} className="text-[12px] font-bold text-[#061629] mb-2">Modello</label>
                    <input id={fid('modello')} type="text" name="Modello" placeholder="Es. Serie 3, Giulia, Tucson..." className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] focus:outline-none focus:border-[#061629]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <label htmlFor={fid('alimentazione')} className="text-[12px] font-bold text-[#061629] mb-2">Alimentazione</label>
                    <select id={fid('alimentazione')} name="Alimentazione" defaultValue="" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] text-gray-500 focus:outline-none focus:border-[#061629] bg-white appearance-none">
                      <option value="">Seleziona...</option>
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
                    <label htmlFor={fid('budget')} className="text-[12px] font-bold text-[#061629] mb-2">Budget</label>
                    <select id={fid('budget')} name="Budget" defaultValue="" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] text-gray-500 focus:outline-none focus:border-[#061629] bg-white appearance-none">
                      <option value="">Seleziona...</option>
                      <option>Fino a 15.000€</option>
                      <option>15.000€ - 25.000€</option>
                      <option>25.000€ - 40.000€</option>
                      <option>40.000€ - 60.000€</option>
                      <option>Oltre 60.000€</option>
                    </select>
                  </div>
                  <div className="flex flex-col text-left">
                    <label htmlFor={fid('tempistica')} className="text-[12px] font-bold text-[#061629] mb-2">Tempistica</label>
                    <select id={fid('tempistica')} name="Tempistica" defaultValue="" className="w-full border border-gray-200 rounded-md h-[46px] px-4 text-[14px] text-gray-500 focus:outline-none focus:border-[#061629] bg-white appearance-none">
                      <option value="">Seleziona...</option>
                      <option>Entro 1 mese</option>
                      <option>1-3 mesi</option>
                      <option>Senza fretta</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col text-left">
                  <fieldset className="contents">
                  <legend className="text-[12px] font-bold text-[#061629] mb-3">Permuta? *</legend>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 text-[14px] text-[#061629] cursor-pointer">
                      <input type="radio" name="permuta" value="si" className="w-4 h-4 accent-[#061629]" /> Sì
                    </label>
                    <label className="flex items-center gap-2 text-[14px] text-[#061629] cursor-pointer">
                      <input type="radio" name="permuta" value="no" className="w-4 h-4 accent-[#061629]" defaultChecked /> No
                    </label>
                  </div>
                  </fieldset>
                </div>

                <div className="flex flex-col text-left">
                  <label htmlFor={fid('messaggio')} className="text-[12px] font-bold text-[#061629] mb-2">Messaggio / Esigenze specifiche</label>
                  <textarea
                    id={fid('messaggio')}
                    name="Messaggio"
                    placeholder="Raccontaci le tue esigenze, preferenze, optional indispensabili..."
                    className="w-full border border-gray-200 rounded-md p-4 text-[14px] focus:outline-none focus:border-[#061629] min-h-[120px] resize-none"
                  />
                </div>
                </div>
                {/* /STEP 1 */}

                {/* STEP 2 (parte B) — consenso privacy */}
                <div className={showStep2 ? '' : 'hidden'}>
                <div className="flex items-start gap-3 pt-2">
                  <input type="checkbox" id="privacy" name="Privacy" value="Accettata" className="w-4 h-4 accent-[#061629] mt-1 shrink-0" required />
                  <label htmlFor="privacy" className="text-[12px] text-muted leading-relaxed">
                    Acconsento al trattamento dei dati personali. Le tue informazioni saranno gestite con la massima riservatezza e usate solo per ricontattarti.
                  </label>
                </div>
                </div>

                {/* Navigazione — mobile: Continua/Indietro · desktop: Invia */}
                <div className="flex flex-col gap-3 mt-2">
                  {(!isMobile || step === 2) && (
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-[#0b2b5b] hover:bg-[#0c438f] disabled:opacity-60 disabled:cursor-not-allowed text-white h-[50px] rounded-md text-[14px] font-bold transition-colors"
                    >
                      {status === 'submitting' ? 'Invio in corso…' : 'Invia richiesta'}
                    </button>
                  )}
                  {isMobile && step === 1 && (
                    <button
                      type="button"
                      onClick={goNext}
                      className="w-full bg-[#0b2b5b] hover:bg-[#0c438f] text-white h-[50px] rounded-md text-[14px] font-bold transition-colors flex items-center justify-center gap-2"
                    >
                      Continua <ArrowRight size={16} />
                    </button>
                  )}
                  {isMobile && step === 2 && (
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-full h-[46px] rounded-md text-[13px] font-bold text-[#061629] border border-[#d7e2ef] hover:bg-[#f6f8fb] transition-colors"
                    >
                      ← Indietro
                    </button>
                  )}
                </div>

                {status === 'success' && (
                  <p role="status" aria-live="polite" className="text-center text-[14px] font-semibold text-[#0c438f] bg-[#0c438f]/8 border border-[#0c438f]/20 rounded-md py-3 px-4">
                    Richiesta inviata! Ti ricontattiamo entro 24 ore lavorative.
                  </p>
                )}
                {status === 'error' && (
                  <p role="alert" aria-live="assertive" className="text-center text-[14px] font-semibold text-[#b42318] bg-[#b42318]/8 border border-[#b42318]/20 rounded-md py-3 px-4">
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
                      <div className="w-12 h-12 rounded-full bg-[#0b2b5b] text-white flex items-center justify-center shrink-0">
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

              <div className="order-first md:order-none bg-[#061629] rounded-lg p-8 text-white shadow-lg">
                <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#7ba6e4] mb-6">I nostri recapiti</p>
                <ul className="flex flex-col gap-5 text-[14px]">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0b2b5b] flex items-center justify-center shrink-0"><MapPin size={18} /></div>
                    <div><p className="font-bold text-white">Sede</p><p className="text-white/70">Roma (RM) · su appuntamento</p></div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0b2b5b] flex items-center justify-center shrink-0"><Phone size={18} /></div>
                    <div><p className="font-bold text-white">Telefono</p><a href={PHONE_HREF} className="text-white/70 hover:text-white transition-colors">{PHONE_DISPLAY}</a></div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0b2b5b] flex items-center justify-center shrink-0"><Mail size={18} /></div>
                    <div><p className="font-bold text-white">Email</p><a href={EMAIL_HREF} className="text-white/70 hover:text-white transition-colors break-all">{EMAIL}</a></div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0b2b5b] flex items-center justify-center shrink-0"><MessageCircle size={18} /></div>
                    <div><p className="font-bold text-white">WhatsApp</p><a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Scrivici su WhatsApp</a></div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0b2b5b] flex items-center justify-center shrink-0"><Clock size={18} /></div>
                    <div><p className="font-bold text-white">Orari</p><p className="text-white/70">Lun-Ven 9:00-19:00 · Sab 9:00-13:00</p></div>
                  </li>
                </ul>
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
              <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#7ba6e4] mb-4">Perché sceglierci</p>
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
                <Reveal key={i} delay={i * 0.06} className="bg-white/5 border border-white/10 rounded-lg p-6 flex gap-5 items-start hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#0b2b5b] flex items-center justify-center shrink-0">
                    <item.icon className="text-white" size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-[16px] mb-1">{item.title}</h4>
                    <p className="text-white/60 text-[13px] leading-relaxed">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. DOMANDE FREQUENTI */}
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
      <ContactCTA image="/images/ford-mustang-tramonto.webp" imageMobile="/images/cta-peugeot-208.webp" />

    </div>
  );
}
