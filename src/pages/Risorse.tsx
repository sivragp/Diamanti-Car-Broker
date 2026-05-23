import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { SEO, SITE_URL } from '../components/SEO';
import { ARTICLES } from '../content/articles';

const RISORSE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Risorse e guide per comprare e vendere auto',
  description:
    'Guide pratiche di Diamanti Automobili su acquisto, verifica, importazione e permuta di auto usate e nuove.',
  url: `${SITE_URL}/risorse`,
  inLanguage: 'it-IT',
  hasPart: ARTICLES.map((a) => ({
    '@type': 'BlogPosting',
    headline: a.h1,
    url: `${SITE_URL}/risorse/${a.slug}`,
    datePublished: a.datePublished,
  })),
};

export default function Risorse() {
  return (
    <div className="bg-white min-h-screen font-sans text-text pt-[74px]">
      <SEO
        title="Guide e risorse per comprare e vendere auto | Diamanti Automobili"
        description="Guide pratiche su acquisto, verifica, importazione dalla Germania e permuta di auto. Consigli chiari per comprare e vendere senza brutte sorprese."
        path="/risorse"
        jsonLd={RISORSE_JSONLD}
        jsonLdId="risorse"
      />

      {/* Header */}
      <header className="bg-[#061629] text-white">
        <div className="ds-container py-14 md:py-20 text-center max-w-2xl">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#7ba6e4] mb-3">Risorse</p>
          <h1 className="text-[30px] md:text-[40px] font-extrabold leading-[1.12] mb-5">
            Guide per comprare e vendere auto senza brutte sorprese
          </h1>
          <p className="text-white/75 text-[15px] md:text-[16px] leading-relaxed">
            Consigli pratici dal nostro lavoro quotidiano di consulenti: acquisto, verifica, importazione e permuta, spiegati in modo chiaro.
          </p>
        </div>
      </header>

      {/* Elenco articoli */}
      <section className="py-14 md:py-16">
        <div className="ds-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.map((a) => (
              <Link
                key={a.slug}
                to={`/risorse/${a.slug}`}
                className="flex flex-col border border-[#e6ebf2] rounded-lg p-7 bg-white shadow-[0_12px_28px_-24px_rgba(6,22,41,0.32)] hover:shadow-[0_18px_42px_-26px_rgba(6,22,41,0.38)] hover:-translate-y-1 transition-all duration-300"
              >
                <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0c438f] mb-3">{a.category}</p>
                <h2 className="text-[18px] font-extrabold text-[#061629] leading-snug mb-3">{a.h1}</h2>
                <p className="text-[14px] text-muted leading-[1.65] mb-6 flex-1">{a.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[12px] text-[#7b8794]">
                    <Clock size={13} /> {a.readingMinutes} min
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#0b2b5b]">
                    Leggi <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
