import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen font-sans text-text pt-[74px]">
      <SEO
        title="Pagina non trovata (404) | Diamanti Automobili"
        description="La pagina che cerchi non esiste o è stata spostata."
        path="/404"
        noIndex
      />
      <div className="ds-container py-28 md:py-36 text-center max-w-xl">
        <p className="text-[64px] md:text-[88px] font-extrabold text-[#0c438f] leading-none mb-4">404</p>
        <h1 className="text-[26px] md:text-[32px] font-extrabold text-[#061629] mb-4">Pagina non trovata</h1>
        <p className="text-[15px] text-muted leading-relaxed mb-8">
          La pagina che cerchi non esiste o è stata spostata. Torna alla home oppure scopri come possiamo aiutarti a trovare la tua prossima auto.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="inline-flex h-[48px] px-7 items-center justify-center rounded-full bg-[#0b2b5b] hover:bg-[#0c438f] text-white font-bold text-[14px] transition-colors">
            Torna alla home
          </Link>
          <Link to="/servizi" className="inline-flex h-[48px] px-7 items-center justify-center rounded-full bg-white border border-[#d7e2ef] text-[#0b2b5b] hover:bg-[#eef3f8] font-bold text-[14px] transition-colors">
            Scopri i servizi
          </Link>
        </div>
      </div>
    </div>
  );
}
