import { Link } from 'react-router-dom';

interface ContactCTAProps {
  /** Foto di sfondo della sezione. Default: Fiat 500 in showroom (usata in home). */
  image?: string;
}

/**
 * Sezione CTA pre-footer unificata, presente in fondo a ogni pagina.
 * Banner a dimensione fissa 1512×500px (min-h 500px, full-bleed) con
 * foto di sfondo (per pagina) e contenuto centrato verticalmente.
 */
export function ContactCTA({ image = '/images/fiat-500-showroom.webp' }: ContactCTAProps) {
  return (
    <section className="relative min-h-[240px] sm:min-h-[300px] flex items-center bg-[#061629] text-white overflow-hidden">
      {/* Sfondo: foto auto della pagina */}
      <div className="absolute inset-0 z-0">
        {/* Riempimento sfondo: stessa foto, cover + sfocata, copre tutta la sezione */}
        <img
          src={image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-50"
        />
        {/* Auto intera, alla dimensione attuale */}
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-contain object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061629]/70 via-[#061629]/20 to-[#061629]/70"></div>
      </div>

      <div className="ds-container relative z-10 py-9 sm:py-11 text-center w-full">
        <h2 className="text-[21px] sm:text-[27px] md:text-[32px] font-extrabold mb-2.5 sm:mb-3 leading-tight text-white">
          Hai già in mente la tua <br className="sm:hidden" />prossima auto?
        </h2>
        <p className="text-white/80 text-[13.5px] sm:text-[15px] mb-5 sm:mb-6 leading-relaxed max-w-md mx-auto">
          Parla con un consulente Diamanti Automobili: la cerchiamo noi, con permuta, finanziamento fino a 120 mesi e consegna a domicilio.
        </p>
        <Link
          to="/contatti"
          className="inline-flex h-[44px] px-7 bg-[#0c438f] hover:bg-[#0b2b5b] text-white font-bold items-center justify-center rounded-md transition-colors text-[13px] sm:text-[14px]"
        >
          Richiedi una consulenza
        </Link>
      </div>
    </section>
  );
}
