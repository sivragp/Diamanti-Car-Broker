import { CheckCircle2, Target, Search, ShieldCheck, Star, Users, Globe, Settings, Car, Check } from 'lucide-react';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { ContactCTA } from '../components/ContactCTA';

export default function About() {

  return (
    <div className="bg-surface min-h-screen font-sans text-text pt-[74px]">
      <SEO
        title="Chi siamo — Diamanti Automobili | Consulenti acquisto auto"
        description="Diamanti Automobili è un team di consulenti indipendenti specializzati nella ricerca, verifica e acquisto di auto premium. Sede a Roma, attivi in tutta Italia ed Europa."
        path="/chi-siamo"
      />

      {/* 1. HERO unificato — Chi siamo */}
      <PageHero
        image="/images/glc-showroom.png"
        eyebrow="Chi siamo"
        title="Diamanti Automobili"
        subtitle={
          <>
            Diamanti Automobili è il consulente indipendente che ti accompagna nell'acquisto della tua prossima auto: nuova, usata, km 0 o di importazione.
            <br />
            <br />
            Fondata da Thomas Diamanti, con 6 anni di esperienza nel settore automobilistico, oggi è un team di consulenti che segue ogni cliente in tutte le fasi: dall'ascolto iniziale alla consegna, con un approccio su misura, trasparente e orientato al dettaglio.
            <br />
            <br />
            Il nostro obiettivo è semplice: trasformare ogni richiesta in una scelta concreta, sicura e in linea con le tue aspettative.
          </>
        }
      />

      {/* 2. MISSION E VISION */}
      <section className="py-12 bg-white pb-20">
        <div className="ds-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#061629] rounded-lg p-10 md:p-14 flex flex-col items-center text-center shadow-[0_16px_34px_-26px_rgba(6,22,41,0.35)]">
              <div className="w-16 h-16 rounded-full bg-white/10 text-white flex items-center justify-center mb-6">
                <Target size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-[28px] font-bold text-white mb-4">La nostra missione</h3>
              <p className="text-white/80 leading-relaxed text-[15px]">
                Rendere l'acquisto di un'auto un'esperienza semplice, sicura ed efficiente, eliminando incertezze, sorprese e perdite di tempo.
              </p>
            </div>
            <div className="bg-[#061629] rounded-lg p-10 md:p-14 flex flex-col items-center text-center shadow-[0_16px_34px_-26px_rgba(6,22,41,0.35)]">
              <div className="w-16 h-16 rounded-full bg-white/10 text-white flex items-center justify-center mb-6">
                <Search size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-[28px] font-bold text-white mb-4">La nostra visione</h3>
              <p className="text-white/80 leading-relaxed text-[15px]">
                Ridefinire il modo di cercare e acquistare auto in Italia: consulenza dedicata, selezione accurata e supporto di fiducia in ogni fase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. I VALORI */}
      <section className="py-16 bg-[#f6f8fb] border-t border-gray-100">
        <div className="ds-container max-w-[1400px]">
          <h2 className="text-center text-[32px] md:text-[36px] font-extrabold text-[#061629] mb-16">
            I valori che guidano ogni ricerca
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { icon: Star, title: 'Trasparenza', text: 'Informazioni chiare e comunicazione sempre onesta.' },
              { icon: Users, title: 'Ascolto', text: 'Ascoltiamo davvero le tue esigenze per proporre solo il giusto.' },
              { icon: ShieldCheck, title: 'Competenza', text: 'Conoscenza del mercato e analisi approfondite per scelte consapevoli.' },
              { icon: Search, title: 'Selezione accurata', text: 'Valutiamo ogni dettaglio per offrirti solo auto di qualità.' },
              { icon: CheckCircle2, title: 'Supporto completo', text: 'Ti seguiamo in ogni fase, fino alla consegna e oltre.' }
            ].map((val, i) => (
              <div key={i} className="border border-[#e6ebf2] rounded-lg p-7 text-center flex flex-col items-center shadow-[0_12px_28px_-24px_rgba(6,22,41,0.32)] hover:shadow-[0_18px_42px_-26px_rgba(6,22,41,0.38)] transition-shadow bg-white">
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
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-white mb-10 leading-tight">
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
              <div key={i} className="bg-white border border-[#e6ebf2] rounded-lg p-7 shadow-[0_12px_28px_-24px_rgba(6,22,41,0.32)] hover:shadow-[0_18px_42px_-26px_rgba(6,22,41,0.38)] transition-shadow flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-[#0b2b5b] text-white flex items-center justify-center shrink-0">
                  <card.icon size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[16px] font-extrabold text-[#061629] mb-2">{card.title}</h4>
                  <p className="text-[14px] text-muted leading-[1.6]">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. IL NOSTRO METODO */}
      <section className="py-24 bg-white">
        <div className="ds-container">
          <h2 className="text-center text-[36px] font-extrabold text-[#061629] mb-20">Il nostro metodo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-8">
            {[
              { num: 1, icon: Users, title: 'Ascolto iniziale', text: 'Conosciamo le tue esigenze, il budget e le preferenze per impostare la ricerca ideale.' },
              { num: 2, icon: Check, title: 'Definizione del profilo auto', text: 'Definiamo insieme il profilo perfetto: modello, allestimento, condizioni e obiettivi.' },
              { num: 3, icon: Search, title: 'Ricerca personalizzata', text: 'Attiviamo la nostra rete e analizziamo le migliori opportunità sul mercato, in Italia e all\'estero.' },
              { num: 4, icon: CheckCircle2, title: 'Verifica e selezione', text: 'Controlliamo ogni dettaglio: storia, condizioni, documenti e costi di gestione.' },
              { num: 5, icon: ShieldCheck, title: 'Gestione trattativa e pratiche', text: 'Negoziazione trasparente, gestione pratiche burocratiche e contrattuali senza stress.' },
              { num: 6, icon: Car, title: 'Consegna e supporto', text: 'Consegna dell\'auto e assistenza post-acquisto: restiamo al tuo fianco anche dopo.' }
            ].map((step, i) => (
              <div key={i} className="relative flex flex-col">
                <div className="bg-white border border-[#e6ebf2] rounded-lg p-7 h-full flex flex-col shadow-[0_12px_28px_-24px_rgba(6,22,41,0.32)] hover:shadow-[0_22px_48px_-26px_rgba(6,22,41,0.42)] hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-[#0b2b5b] text-white flex items-center justify-center shrink-0">
                      <step.icon size={22} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-[16px] font-extrabold text-[#061629] mb-3 leading-tight">{step.title}</h3>
                      <p className="text-[13px] text-muted leading-[1.65]">{step.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PARLIAMO E IL TEAM */}
      <section className="bg-[#061629] py-24">
        <div className="ds-container">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative rounded-lg overflow-hidden h-[450px] shadow-[0_22px_48px_-26px_rgba(0,0,0,0.6)]">
                <img
                  src="/images/team-diamanti.jpg"
                  alt="Il team Diamanti Automobili nello showroom con il logo aziendale alle spalle"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061629]/40 to-transparent"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
              <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-white/60 mb-4">Il team</p>
              <h2 className="text-[36px] md:text-[40px] font-extrabold text-white mb-8 leading-tight">
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
            </div>
          </div>
        </div>
      </section>

      {/* 7. LA FIDUCIA DEI CLIENTI */}
      <section className="py-24 bg-[#f6f8fb]">
        <div className="ds-container">
          <h2 className="text-center text-[32px] md:text-[36px] font-extrabold text-[#061629] mb-16">La fiducia dei clienti</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                initials: 'GM',
                name: 'Giorgio M.',
                car: 'BMW X3',
                city: 'Milano',
                text: "Servizio impeccabile. Il team di Diamanti Automobili ha trovato l'auto perfetta per me. Trasparenti, professionali e sempre disponibili. Consigliatissimi!"
              },
              {
                initials: 'EF',
                name: 'Elena F.',
                car: 'Audi Q5',
                city: 'Roma',
                text: "Mi hanno seguito in ogni fase, dalla ricerca alla consegna. Nessuno stress, massima competenza e un'auto che corrisponde esattamente alle mie aspettative."
              },
              {
                initials: 'AT',
                name: 'Alessandro T.',
                car: 'Mercedes GLC',
                city: 'Torino',
                text: 'Finalmente un servizio che fa davvero la differenza. Competenti, rapidi e super affidabili. La mia GLC è stata una scelta perfetta.'
              }
            ].map((review, i) => (
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
      </section>

      {/* 8. CTA PRE-FOOTER */}
      <ContactCTA />

    </div>
  );
}
