import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { submitLead } from '../lib/forms';

/**
 * Modulo contatti compatto usato sotto l'hero della home.
 * Su desktop è l'overlay orizzontale sovrapposto all'hero; su mobile è una
 * sezione a sé sotto l'hero. Stato interno: può essere montato due volte
 * (desktop + mobile) senza condividere lo stato.
 */
export function HeroLeadForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  return (
    <div className="bg-white md:bg-[#1156bf]/60 rounded-lg shadow-[0_22px_48px_-26px_rgba(6,22,41,0.45)] p-4 md:p-5 border border-[#e6ebf2] md:border-white/30 relative z-10">
      <div className="flex items-baseline gap-2 mb-4 text-left">
        <span className="text-[14px] md:text-[15px] font-extrabold text-[#061629] md:text-white">Raccontaci che auto cerchi</span>
        <span className="hidden sm:inline text-[12px] text-[#7b8794] md:text-white/80">— ti ricontattiamo noi, gratis e senza impegno.</span>
      </div>

      <form
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
        <input type="hidden" name="_subject" value="Nuova richiesta dall'hero — sito Diamanti Automobili" />
        <input type="hidden" name="_template" value="table" />
        <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        <input type="hidden" name="Provenienza" value="Form hero homepage" />

        {/* Campi: stack su mobile, UNA sola riga su desktop (campi più stretti) */}
        <div className="flex flex-col md:flex-row md:items-end gap-2.5 md:gap-2">
          <div className="flex flex-col text-left min-w-0 md:flex-1">
            <label className="text-[11px] font-semibold text-[#7b8794] md:text-white/90 mb-1">Nome e cognome *</label>
            <input type="text" name="Nome" required placeholder="Mario Rossi" className="w-full min-w-0 border border-[#dbe3ec] bg-white rounded-md h-[44px] md:h-[42px] px-3 text-[13px] text-[#061629] focus:outline-none focus:border-[#0b2b5b] focus:ring-2 focus:ring-[#d9e6f7]" />
          </div>
          <div className="flex flex-col text-left min-w-0 md:flex-1">
            <label className="text-[11px] font-semibold text-[#7b8794] md:text-white/90 mb-1">Email *</label>
            <input type="email" name="Email" required placeholder="mario@email.it" className="w-full min-w-0 border border-[#dbe3ec] bg-white rounded-md h-[44px] md:h-[42px] px-3 text-[13px] text-[#061629] focus:outline-none focus:border-[#0b2b5b] focus:ring-2 focus:ring-[#d9e6f7]" />
          </div>
          <div className="flex flex-col text-left min-w-0 md:flex-1">
            <label className="text-[11px] font-semibold text-[#7b8794] md:text-white/90 mb-1">Telefono *</label>
            <input type="tel" name="Telefono" required placeholder="345 678 9010" className="w-full min-w-0 border border-[#dbe3ec] bg-white rounded-md h-[44px] md:h-[42px] px-3 text-[13px] text-[#061629] focus:outline-none focus:border-[#0b2b5b] focus:ring-2 focus:ring-[#d9e6f7]" />
          </div>
          <div className="flex flex-col text-left min-w-0 md:flex-1">
            <label className="text-[11px] font-semibold text-[#7b8794] md:text-white/90 mb-1">Tipologia auto</label>
            <select name="Tipologia" defaultValue="" className="w-full min-w-0 border border-[#dbe3ec] bg-white rounded-md h-[44px] md:h-[42px] px-3 text-[13px] text-[#5f6b7a] focus:outline-none focus:border-[#0b2b5b] focus:ring-2 focus:ring-[#d9e6f7] appearance-none">
              <option value="">Seleziona...</option>
              <option>SUV</option>
              <option>Berlina</option>
              <option>Station Wagon</option>
              <option>City Car</option>
              <option>Sportiva</option>
            </select>
          </div>
          <div className="flex flex-col text-left min-w-0 md:flex-1">
            <label className="text-[11px] font-semibold text-[#7b8794] md:text-white/90 mb-1">Budget</label>
            <select name="Budget" defaultValue="" className="w-full min-w-0 border border-[#dbe3ec] bg-white rounded-md h-[44px] md:h-[42px] px-3 text-[13px] text-[#5f6b7a] focus:outline-none focus:border-[#0b2b5b] focus:ring-2 focus:ring-[#d9e6f7] appearance-none">
              <option value="">Seleziona...</option>
              <option>Fino a 15.000€</option>
              <option>15.000€ - 25.000€</option>
              <option>25.000€ - 40.000€</option>
              <option>40.000€ - 60.000€</option>
              <option>Oltre 60.000€</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="md:flex-none bg-[#0b2b5b] hover:bg-[#0c438f] disabled:opacity-60 disabled:cursor-not-allowed text-white h-[44px] md:h-[42px] px-5 rounded-md text-[13px] font-bold whitespace-nowrap transition-colors flex items-center justify-center gap-2"
          >
            {status === 'submitting' ? 'Invio…' : (<>Richiedi consulenza <ArrowRight size={16} /></>)}
          </button>
        </div>

        {/* Privacy */}
        <div className="flex items-start gap-2 mt-3">
          <input type="checkbox" name="Privacy" value="Accettata" required className="w-3.5 h-3.5 accent-[#061629] mt-[3px] shrink-0" />
          <label className="text-[11px] text-[#7b8794] md:text-white/80 leading-snug text-left">
            Acconsento al trattamento dei dati personali per essere ricontattato.
          </label>
        </div>

        {status === 'success' && (
          <p role="status" aria-live="polite" className="mt-3 text-[12.5px] font-semibold text-[#0c438f] bg-[#0c438f]/8 border border-[#0c438f]/20 rounded-md py-2.5 px-4 text-left">
            Richiesta inviata! Ti ricontattiamo entro 24 ore lavorative.
          </p>
        )}
        {status === 'error' && (
          <p role="alert" aria-live="assertive" className="mt-3 text-[12.5px] font-semibold text-[#b42318] bg-[#b42318]/8 border border-[#b42318]/20 rounded-md py-2.5 px-4 text-left">
            Invio non riuscito. Riprova tra poco oppure scrivici via email.
          </p>
        )}
      </form>
    </div>
  );
}
