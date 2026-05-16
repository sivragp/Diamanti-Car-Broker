import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Stat {
  value: string;
  label: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  cta?: { label: string; href: string };
  stats?: Stat[];
  image?: string;
}

/**
 * Hero compatto unificato, usato in cima a tutte le pagine interne
 * per dare un tema coerente. Versione "a metà altezza" dell'hero
 * della pagina Valuta-la-tua-auto.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  cta,
  stats,
  image = '/images/fleet-overview.jpg',
}: PageHeroProps) {
  const ctaClasses =
    'mt-7 inline-flex h-[48px] items-center justify-center rounded-full bg-white px-7 text-[14px] font-bold text-[#061629] hover:bg-[#eef3f8] transition-colors gap-2';
  const isInternal = !!cta && cta.href.startsWith('/');

  return (
    <section className="relative py-10 md:py-14 bg-[#061629] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-25">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061629] via-[#061629]/60 to-[#061629]" />
      </div>

      <div className="ds-container relative z-10 text-center max-w-3xl mx-auto">
        {eyebrow && (
          <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#7ba6e4] mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="text-[26px] md:text-[38px] font-extrabold text-white leading-[1.1]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[15px] md:text-[17px] text-white/80 leading-relaxed mt-4 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {cta &&
          (isInternal ? (
            <Link to={cta.href} className={ctaClasses}>
              {cta.label} <ArrowRight size={16} />
            </Link>
          ) : (
            <a href={cta.href} className={ctaClasses}>
              {cta.label} <ArrowRight size={16} />
            </a>
          ))}
        {stats && stats.length > 0 && (
          <div className="mt-9 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-[20px] md:text-[26px] font-extrabold text-white leading-none mb-1.5">
                  {stat.value}
                </p>
                <p className="text-[11px] uppercase tracking-[0.14em] text-white/60 font-bold leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
