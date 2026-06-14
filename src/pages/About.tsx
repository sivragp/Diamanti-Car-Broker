import { CheckCircle2, Target, Search, ShieldCheck, Star, Users, Globe, Settings, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO, SITE_URL, breadcrumbLd } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { ContactCTA } from '../components/ContactCTA';
import { Reveal } from '../components/Reveal';

const ABOUT_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Chi siamo — Diamanti Automobili',
  description: 'Team di consulenti indipendenti per la ricerca, verifica e acquisto di auto. Sede a Roma, attivi in tutta Italia.',
  url: `${SITE_URL}/chi-siamo`,
  mainEntity: { '@id': `${SITE_URL}/#business` },
};

export default function About() {
  const valori = [
    { icon: Star, title: 'Trasparenza', text: 'Informazioni chiare e comunicazione sempre onesta.' },
    { icon: Users, title: 'Ascolto', text: 'Ascoltiamo davvero le tue esigenze per proporre solo il giusto.' },
    { icon: ShieldCheck, title: 'Competenza', text: 'Conoscenza del mercato e analisi approfondite per scelte consapevoli.' },
    { icon: Search, title: 'Selezione accurata', text: 'Valutiamo ogni dettaglio per offrirti solo auto di qualità.' },
    { icon: CheckCircle2, title: 'Supporto completo', text: 'Ti seguiamo in ogni fase, fino alla consegna e oltre.' },
  ];

  const fiducia = [
    { initials: 'GM', name: 'Giorgio M.', car: 'BMW X3', city: 'Milano', text: "Servizio impeccabile. Il team di Diamanti Automobili ha trovato l'auto perfetta per me. Trasparenti, professionali e sempre disponibili. Consigliatissimi!" },
    { initials: 'EF', name: 'Elena F.', car: 'Audi Q5', city: 'Roma', text: "Mi hanno seguito in ogni fase, dalla ricerca alla consegna. Nessuno stress, massima competenza e un'auto che corrisponde esattamente alle mie aspettative." },
    { initials: 'FP', name: 'Francesca P.', car: 'Volvo XC60', city: 'Bologna', text: 'Cercavo un SUV ibrido senza brutte sorprese sui chilometri. Me lo hanno trovato, verificato e consegnato a casa: zero stress, zero pensieri.' },
  ];

  return (
    <div className="bg-surface min-h-screen font-sans text-text pt-[74px]">
      <SEO
        title="Chi siamo — Diamanti Automobili | Consulenti acquisto auto"
        description="Diamanti Automobili è un team di consulenti indipendenti specializzati nella ricerca, verifica e acquisto di auto premium. Sede a Roma, attivi in tutta Italia ed Europa."
        path="/chi-siamo"
        jsonLd={[ABOUT_JSONLD, breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Chi siamo', path: '/chi-siamo' }])]}
        jsonLdId="chi-siamo"
      />

      {/* 1. HERO unificato — Chi siamo */}
      <PageHero
        image="/images/fleet-rooftop-tramonto.webp"
        imageMobile="/images/hero-lineup-sunset-hills.webp"
        eyebrow="Chi siamo"
        title="Diamanti Automobili"
        subtitle={
          <>
            {/* Mobile: versione sintetica (niente muro di testo) */}
            <span className="md:hidden">
              Il consulente indipendente che ti accompagna nell'acquisto della tua prossima auto — nuova, usata, km 0 o di importazione — dall'ascolto iniziale alla consegna a domicilio.
            </span>
            {/* Desktop: versione completa */}
            <span className="hidden md:inline">
              Diamanti Automobili è il consulente indipendente che ti accompagna nell'acquisto della tua prossima auto: nuova, usata, km 0 o di importazione.
              <br />
              <br />
              Nata dall'esperienza maturata nel settore automobilistico, oggi è un team di consulenti che segue ogni cliente in tutte le fasi: dall'ascolto iniziale alla consegna, con un approccio su misura, trasparente e orientato al dettaglio.
              <br />
              <br />
              Il nostro obiettivo è semplice: trasformare ogni richiesta in una scelta concreta, sicura e in linea con le tue aspettative.
            </span>
          </>
        }
      />

      {/* 2. MISSION E VISION */}
      <section className="py-12 bg-white pb-20">
        <div className="ds-container">
          <div className="grid grid-cols-2 gap-3 md:gap-6">
            <Reveal className="bg-[#061629] rounded-lg p-5 md:p-14 flex flex-col items-center text-center shadow-[0_16px_34px_-26px_rgba(6,22,41,0.35)]">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 text-white flex items-center justify-center mb-4 md:mb-6">
                <Target size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-[18px] md:text-[28px] font-bold text-white mb-2 md:mb-4 leading-tight">La nostra missione</h3>
              <p className="text-white/80 leading-relaxed text-[12.5px] md:text-[15px]">
                Rendere l'acquisto di un'auto un'esperienza semplice, sicura ed efficiente, eliminando incertezze, sorprese e perdite di tempo.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="bg-[#061629] rounded-lg p-5 md:p-14 flex flex-col items-center text-center shadow-[0_16px_34px_-26px_rgba(6,22,41,0.35)]">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 text-white flex items-center justify-center mb-4 md:mb-6">
                <Search size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-[18px] md:text-[28px] font-bold text-white mb-2 md:mb-4 leading-tight">La nostra visione</h3>
              <p className="text-white/80 leading-relaxed text-[12.5px] md:text-[15px]">
                Ridefinire il modo di cercare e acquistare auto in Italia: consulenza dedicata, selezione accurata e supporto di fiducia in ogni fase.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. I VALORI */}
      <section className="py-16 bg-[#f6f8fb] border-t border-gray-100">
        <div className="ds-container max-w-[1400px]">
          <Reveal><h2 className="text-center text-[30px] md:text-[34px] font-extrabold text-[#061629] mb-10 md:mb-16">
            I valori che guidano ogni ricerca
          </h2></Reveal>

          {/* Mobile: lista impilata (icona + testo) — stesso stile di "Tutto incluso" in home */}
          <div className="md:hidden flex flex-col gap-3">
            {valori.map((val, i) => (
              <Reveal key={i} delay={i * 0.06} className="flex items-center gap-4 text-left p-4 bg-white border border-[#e6ebf2] rounded-xl shadow-[0_10px_24px_-22px_rgba(6,22,41,0.3)]">
                <div className="w-12 h-12 rounded-full border border-[#d7e2ef] flex items-center justify-center text-[#0b2b5b] shrink-0">
                  <val.icon size={22} strokeWidth={1.6} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[15px] font-bold text-[#061629] mb-1 leading-tight">{val.title}</h4>
                  <p className="text-[13px] text-muted leading-[1.55]">{val.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Desktop: griglia invariata */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {valori.map((val, i) => (
              <div key={i} className="border border-[#e6ebf2] rounded-lg p-5 sm:p-7 text-center flex flex-col items-center shadow-[0_12px_28px_-24px_rgba(6,22,41,0.32)] hover:shadow-[0_18px_42px_-26px_rgba(6,22,41,0.38)] transition-shadow bg-white">
                <div className="w-12 h-12 rounded-full bg-[#0b2b5b] text-white flex items-center justify-center mb-6">
                  <val.icon size={22} strokeWidth={1.5} />
                </div>
                <h4 className="text-[16px] font-extrabold text-[#061629] mb-3">{val.title}</h4>
                <p className="text-[14px] text-muted leading-[1.6]">{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PERCHÉ I CLIENTI SCELGONO... */}
      <section className="bg-[#f6f7f9] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-[#061629] py-20 px-8 md:pl-[max(2rem,calc((100vw-1280px)/2))] md:pr-16 flex flex-col justify-center">
          <div className="max-w-xl ml-auto w-full">
            <h2 className="text-[30px] md:text-[34px] font-extrabold text-white mb-10 leading-tight">
              Perché i clienti scelgono<br/>Diamanti Automobili
            </h2>
            <ul className="space-y-6">
              {[
                'Risparmio di tempo: ci occupiamo noi di tutto',
                'Ricerca mirata e personalizzata',
                'Riduzione dei rischi e delle sorprese',
                'Supporto nella trattativa e nel prezzo',
                'Verifica approfondita del veicolo',
                'Gestione pratiche e consegna senza pensieri'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white/90 text-[16px]">
                  <CheckCircle2 className="text-[#0c438f] shrink-0" size={24} strokeWidth={2} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 py-20 px-8 md:pr-[max(2rem,calc((100vw-1280px)/2))] md:pl-16 flex flex-col justify-center gap-6">
          <div className="max-w-xl w-full space-y-6">
            {[
              { icon: Settings, title: 'Approccio su misura', text: 'Ogni ricerca è unica come te. Nessuna proposta generica, solo soluzioni mirate.' },
              { icon: Globe, title: 'Rete selezionata', text: 'Collaboriamo con partner e canali affidabili per garantirti il meglio del mercato.' },
              { icon: ShieldCheck, title: 'Supporto end-to-end', text: 'Siamo al tuo fianco dalla prima consulenza fino alla consegna e oltre.' }
            ].map((card, i) => (
              <Reveal key={i} delay={i * 0.06} className="bg-white border border-[#e6ebf2] rounded-lg p-7 shadow-[0_12px_28px_-24px_rgba(6,22,41,0.32)] hover:shadow-[0_18px_42px_-26px_rgba(6,22,41,0.38)] transition-shadow flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-[#0b2b5b] text-white flex items-center justify-center shrink-0">
                  <card.icon size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[16px] font-extrabold text-[#061629] mb-2">{card.title}</h4>
                  <p className="text-[14px] text-muted leading-[1.6]">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. IL NOSTRO METODO (rimando alla pagina dedicata) */}
      <section className="py-24 bg-white">
        <Reveal className="ds-container text-center max-w-2xl">
          <h2 className="text-[30px] md:text-[34px] font-extrabold text-[#061629] mb-5">Il nostro metodo</h2>
          <p className="text-[16px] text-muted leading-relaxed mb-8">
            Dall'ascolto iniziale alla consegna a domicilio, seguiamo un percorso chiaro: profilo dell'auto, ricerca selezionata sul mercato italiano ed europeo, verifica tecnica, trattativa, gestione pratiche e assistenza post-vendita.
          </p>
          <Link to="/servizi" className="inline-flex h-[48px] px-7 items-center justify-center rounded-full bg-[#0b2b5b] hover:bg-[#0c438f] text-white font-bold transition-colors text-[14px] gap-2">
            Scopri il nostro metodo, fase per fase <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      {/* 6. PARLIAMO E IL TEAM */}
      <section className="bg-[#061629] py-24">
        <div className="ds-container">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <Reveal className="w-full md:w-1/2">
              <div className="relative rounded-lg overflow-hidden h-auto md:h-[450px] shadow-[0_22px_48px_-26px_rgba(0,0,0,0.6)]">
                <img
                  src="/images/team-highfive.webp"
                  alt="Il team Diamanti Automobili celebra insieme un nuovo traguardo in ufficio"
                  className="block w-full h-auto md:h-full md:object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061629]/40 to-transparent"></div>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="w-full md:w-1/2 flex flex-col items-start text-left">
              <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-white/60 mb-4">Il team</p>
              <h2 className="text-[30px] md:text-[34px] font-extrabold text-white mb-8 leading-tight">
                Persone, non solo processi
              </h2>
              <div className="space-y-5 text-white/80 text-[16px] leading-relaxed">
                <p>
                  Dietro ogni ricerca c'è un team di consulenti che segue il cliente con attenzione e dedizione, trasformando ogni richiesta in un progetto di ricerca su misura.
                </p>
                <p>
                  Fiducia, discrezione e una conoscenza profonda del mercato auto sono alla base di ogni relazione che costruiamo.
                </p>
                <p>
                  Lavoriamo con passione, per dare a ogni cliente il meglio del mercato.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. LA FIDUCIA DEI CLIENTI */}
      <section className="py-24 bg-[#f6f8fb] overflow-hidden">
        <div className="ds-container">
          <Reveal><h2 className="text-center text-[30px] md:text-[34px] font-extrabold text-[#061629] mb-10 md:mb-16">La fiducia dei clienti</h2></Reveal>

          {/* Desktop: griglia 3 colonne invariata */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {fiducia.map((review, i) => (
              <div key={i} className="bg-white border border-[#e6ebf2] rounded-lg p-8 flex flex-col shadow-[0_12px_28px_-24px_rgba(6,22,41,0.32)] hover:shadow-[0_18px_42px_-26px_rgba(6,22,41,0.38)] transition-shadow">
                <div className="flex gap-1 mb-5">
                  {[1,2,3,4,5].map(star => <Star key={star} size={14} className="fill-[#F59E0B] text-[#F59E0B]" />)}
                </div>
                <p className="italic text-[18px] text-[#061629] leading-[1.5] mb-8 flex-grow">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-[#f0f3f7]">
                  <div className="w-11 h-11 rounded-full bg-[#0b2b5b] text-white flex items-center justify-center font-bold text-[13px] tracking-wide shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[#061629] leading-tight">{review.name}</p>
                    <p className="text-[12px] text-muted mt-0.5">{review.car} · Consegnata a {review.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: marquee automatico (card compatte) come in home */}
        <div className="md:hidden flex w-max animate-marquee">
          {[...fiducia, ...fiducia].map((review, i) => (
            <div key={i} className="shrink-0 w-[280px] mr-4 bg-white border border-[#e6ebf2] rounded-lg p-5 flex flex-col">
              <div className="flex gap-[2px] mb-3">
                {[1,2,3,4,5].map(star => <Star key={star} size={12} className="fill-[#F59E0B] text-[#F59E0B]" />)}
              </div>
              <p className="italic text-[13.5px] text-[#061629] leading-[1.5] mb-4">"{review.text}"</p>
              <div className="flex items-center gap-3 mt-auto pt-3 border-t border-[#f0f3f7]">
                <div className="w-9 h-9 rounded-full bg-[#0b2b5b] text-white flex items-center justify-center font-bold text-[12px] shrink-0">{review.initials}</div>
                <div className="min-w-0">
                  <p className="text-[12.5px] font-bold text-[#061629] leading-tight truncate">{review.name}</p>
                  <p className="text-[11px] text-muted truncate">{review.car} · {review.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CTA PRE-FOOTER */}
      <ContactCTA image="/images/audi-a1-costiera.webp" imageMobile="/images/cta-mercedes-a.webp" />

    </div>
  );
}
