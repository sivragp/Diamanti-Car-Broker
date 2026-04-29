import { CheckCircle2, Target, Search, ShieldCheck, Star, Users, Globe, Settings, Car, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {

  return (
    <div className="bg-surface min-h-screen font-sans text-text pt-[80px]">
      
      {/* 1. HERO CHI SIAMO */}
      <section className="py-16 md:py-24 bg-white">
        <div className="ds-container">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
              <h1 className="text-[40px] md:text-[50px] font-serif font-bold text-[#061629] mb-8 leading-tight">
                Chi siamo
              </h1>
              <div className="space-y-6 text-[#061629] text-[16px] leading-relaxed">
                <p>
                  Diamanti Car Broker nasce per semplificare la ricerca e l'acquisto dell'auto giusta.
                </p>
                <p>
                  <strong>Sono Thomas</strong>, fondatore di Diamanti Car Broker, e insieme <strong>al mio team</strong> accompagniamo ogni cliente in tutte le fasi del processo, con un approccio su misura, trasparente e orientato al dettaglio.
                </p>
                <p>
                  Il nostro obiettivo è trasformare ogni richiesta in una soluzione concreta, sicura e in linea con le tue aspettative.
                </p>
              </div>
              
              <div className="mt-12">
                <div className="font-serif italic text-[42px] text-[#0c438f] mb-2 leading-none">
                  Thomas
                </div>
                <div className="text-[14px] font-bold text-[#061629]">Fondatore</div>
                <div className="text-[13px] text-muted">Diamanti Car Broker</div>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="Thomas - Fondatore" 
                className="w-full h-full object-cover object-[center_20%] shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. MISSION E VISION */}
      <section className="py-12 bg-white pb-20">
        <div className="ds-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#061629] p-10 md:p-14 flex flex-col items-center text-center shadow-lg">
              <Target size={48} strokeWidth={1.5} className="text-[#0c438f] mb-6" />
              <h3 className="font-serif text-[28px] font-bold text-white mb-4">La nostra missione</h3>
              <p className="text-white/80 leading-relaxed text-[15px]">
                Rendere l'acquisto di un'auto un'esperienza più semplice, sicura ed efficiente, eliminando incertezze e perdite di tempo.
              </p>
            </div>
            <div className="bg-[#061629] p-10 md:p-14 flex flex-col items-center text-center shadow-lg">
              <Search size={48} strokeWidth={1.5} className="text-[#0c438f] mb-6" />
              <h3 className="font-serif text-[28px] font-bold text-white mb-4">La nostra visione</h3>
              <p className="text-white/80 leading-relaxed text-[15px]">
                Ridefinire il modo in cui le persone cercano e acquistano auto, attraverso consulenza, selezione e supporto di fiducia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. I VALORI */}
      <section className="py-16 bg-[#f6f8fb] border-t border-gray-100">
        <div className="ds-container max-w-[1400px]">
          <h2 className="text-center text-[32px] md:text-[36px] font-serif font-bold text-[#061629] mb-16">
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
              <div key={i} className="bg-white border border-gray-100 p-8 flex flex-col items-center text-center shadow-[0_5px_20px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                <div className="w-16 h-16 rounded-full border border-[#0c438f]/30 flex items-center justify-center mb-6">
                  <val.icon className="text-[#0c438f]" size={32} strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-[#061629] text-[16px] mb-3">{val.title}</h4>
                <p className="text-[13px] text-muted leading-relaxed">{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PERCHÉ I CLIENTI SCELGONO... */}
      <section className="bg-[#f6f7f9] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-[#061629] py-20 px-8 md:pl-[max(2rem,calc((100vw-1280px)/2))] md:pr-16 flex flex-col justify-center">
          <div className="max-w-xl ml-auto w-full">
            <h2 className="text-[32px] md:text-[40px] font-serif font-bold text-white mb-10 leading-tight">
              Perché i clienti scelgono<br/>Diamanti Car Broker
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
              <div key={i} className="bg-white p-8 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex gap-6 items-start">
                <card.icon className="text-[#0c438f] shrink-0 mt-1" size={36} strokeWidth={1.5} />
                <div>
                  <h4 className="font-bold text-[#061629] text-[18px] mb-2">{card.title}</h4>
                  <p className="text-[15px] text-muted leading-relaxed">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. IL NOSTRO METODO */}
      <section className="py-24 bg-white">
        <div className="ds-container">
          <h2 className="text-center text-[36px] font-serif font-bold text-[#061629] mb-20">Il nostro metodo</h2>
          
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
                <div className="bg-white border border-gray-100 p-8 pt-10 h-full flex flex-col shadow-sm">
                  <div className="absolute -top-[20px] -left-[10px] w-12 h-12 rounded-full bg-[#061629] text-white font-sans font-bold text-[18px] flex items-center justify-center border-[4px] border-white">
                    {step.num}
                  </div>
                  <div className="flex items-start gap-5">
                    <step.icon className="text-[#0c438f] shrink-0" size={32} strokeWidth={1.5} />
                    <div>
                      <h3 className="font-bold text-[#061629] text-[16px] mb-3 leading-tight">{step.title}</h3>
                      <p className="text-[14px] text-muted leading-relaxed">{step.text}</p>
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
            <div className="w-full md:w-1/2 relative h-[450px]">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" 
                alt="Thomas Team" 
                className="w-2/3 h-[350px] object-cover object-[center_20%] absolute left-0 top-0 border-[6px] border-[#061629]"
              />
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600" 
                alt="Discussione Team" 
                className="w-2/3 h-[300px] object-cover absolute right-0 bottom-0 border-[6px] border-[#061629]"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
              <h2 className="text-[36px] font-serif font-bold text-[#0c438f] mb-8">
                Parliamo e il team
              </h2>
              <div className="space-y-6 text-white/90 text-[16px] leading-relaxed">
                <p>
                  Thomas, insieme al suo team, segue ogni cliente con attenzione e dedizione, trasformando ogni richiesta in un progetto di ricerca su misura.
                </p>
                <p>
                  La fiducia, la discrezione e la conoscenza del mercato sono alla base di ogni relazione.
                </p>
                <p>
                  Il nostro team lavora con passione per offrirti il massimo, sempre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LA FIDUCIA DEI CLIENTI (Copied from Home essentially) */}
      <section className="py-24 bg-[#f6f8fb]">
        <div className="ds-container">
          <h2 className="text-center text-[36px] font-serif font-bold text-[#061629] mb-16">La fiducia dei clienti</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
                text: 'Servizio impeccabile. Thomas e il suo team hanno trovato l\'auto perfetta per me. Trasparenti, professionali e sempre disponibili. Consigliatissimi!',
                car: 'BMW X3',
                city: 'Consegnata a Milano'
              },
              {
                img: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=800',
                text: 'Mi hanno seguito in ogni fase, dalla ricerca alla consegna. Nessuno stress, massima competenza e un\'auto che corrisponde esattamente alle mie aspettative.',
                car: 'Audi Q5',
                city: 'Consegnata a Roma'
              },
              {
                img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800',
                text: 'Finalmente un servizio che fa davvero la differenza. Competenti, rapidi e super affidabili. La mia GLC è stata una scelta perfetta!',
                car: 'Mercedes GLC',
                city: 'Consegnata a Torino'
              }
            ].map((review, i) => (
              <div key={i} className="bg-white border border-gray-100 flex flex-col shadow-[0_10px_30px_rgba(0,0,0,0.03)] h-full">
                <div className="h-[220px] w-full relative">
                  <img src={review.img} alt={review.car} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(star => <Star key={star} size={14} className="fill-[#F59E0B] text-[#F59E0B]" />)}
                  </div>
                  <p className="font-serif italic text-[#061629] text-[16px] leading-relaxed mb-8 flex-grow">
                    "{review.text}"
                  </p>
                  <div>
                    <div className="font-bold text-[#061629] text-[14px] uppercase tracking-wider">{review.car}</div>
                    <div className="text-[12px] text-muted mt-1">{review.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA PRE-FOOTER */}
      <section className="bg-[#061629] text-white">
        <div className="ds-container">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 py-20 pr-10">
              <h2 className="text-[36px] md:text-[44px] font-serif font-bold mb-6 leading-tight">
                Parliamo della tua <br/>prossima auto?
              </h2>
              <p className="text-white/70 text-[16px] mb-10 leading-relaxed max-w-md">
                Raccontaci cosa stai cercando: ti aiutiamo a trovare la soluzione giusta con un servizio su misura.
              </p>
              <Link to="/contatti" className="inline-flex h-[48px] px-8 bg-[#0c438f] hover:bg-[#0b2b5b] text-[#061629] font-bold items-center justify-center rounded-md transition-colors text-[14px]">
                Richiedi consulenza
              </Link>
            </div>
            <div className="w-full md:w-1/2 h-[400px] md:h-[500px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#061629] via-transparent to-transparent z-10"></div>
              <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200" alt="Dettaglio auto premium" className="w-full h-full object-cover opacity-60" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
