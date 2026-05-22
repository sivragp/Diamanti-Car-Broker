import { Link } from 'react-router-dom';

/**
 * Sezione CTA pre-footer unificata, presente in fondo a ogni pagina.
 * Banner a dimensione fissa 1512×500px (min-h 500px, full-bleed) con
 * sfondo Fiat 500 e contenuto centrato verticalmente.
 */
export function ContactCTA() {
  return (
    <section className="relative min-h-[500px] flex items-center bg-[#061629] text-white overflow-hidden">
      {/* Sfondo: Fiat 500 in showroom */}
      <div className="absolute inset-0 z-0">
        {/* Riempimento sfondo: stessa foto, cover + sfocata, copre tutta la sezione */}
        <img
          src="/images/fiat-500-showroom.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-50"
        />
        {/* Auto intera, alla dimensione attuale */}
        <img
          src="/images/fiat-500-showroom.png"
          alt=""
          className="absolute inset-0 w-full h-full object-contain object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061629]/70 via-[#061629]/20 to-[#061629]/70"></div>
      </div>

      <div className="ds-container relative z-10 py-16 text-center w-full">
        <h2 className="text-[36px] md:text-[44px] font-extrabold mb-6 leading-tight text-white">
          Hai già in mente la tua <br />prossima auto?
        </h2>
        <p className="text-white/80 text-[16px] mb-10 leading-relaxed max-w-md mx-auto">
          Parla con un consulente Diamanti Automobili.<br />
          La cerchiamo noi: con permuta, finanziamento fino a 120 mesi e consegna a domicilio.
        </p>
        <Link
          to="/contatti"
          className="inline-flex h-[48px] px-8 bg-[#0c438f] hover:bg-[#0b2b5b] text-white font-bold items-center justify-center rounded-md transition-colors text-[14px]"
        >
          Richiedi una consulenza
        </Link>
      </div>
    </section>
  );
}
