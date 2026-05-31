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
      {/* Sfondo: foto a tutto banner (object-cover) + overlay per leggibilità del titolo */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061629]/72 via-[#061629]/45 to-[#061629]/78"></div>
      </div>

      <div className="ds-container relative z-10 py-9 sm:py-11 text-center w-full">
        <h2 className="text-[22px] sm:text-[28px] md:text-[34px] font-extrabold mb-5 sm:mb-6 leading-tight text-white [text-shadow:_0_2px_18px_rgb(0_0_0_/_0.65)]">
          Hai già in mente la tua <br className="sm:hidden" />prossima auto?
        </h2>
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
