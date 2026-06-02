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
  imageMobile?: string;
}

/**
 * Hero unificato, usato in cima a tutte le pagine interne per dare un
 * tema coerente. Banner a dimensione fissa 1512×500px (min-h 500px,
 * full-bleed), con contenuto centrato verticalmente.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  cta,
  stats,
  image = '/images/fleet-overview.webp',
  imageMobile,
}: PageHeroProps) {
  const ctaClasses =
    'mt-7 inline-flex h-[48px] items-center justify-center rounded-full bg-white/65 ring-1 ring-white/30 px-7 text-[14px] font-bold text-[#061629] hover:bg-white/90 transition-colors gap-2';
  const isInternal = !!cta && cta.href.startsWith('/');

  return (
    <section className="relative min-h-[500px] flex items-center py-12 bg-[#061629] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={image} alt="" className="hidden md:block w-full h-full object-cover" fetchPriority="high" decoding="async" />
        <img src={imageMobile ?? image} alt="" className="md:hidden w-full h-full object-cover" fetchPriority="high" decoding="async" />
        {/* Overlay: scuro ai bordi (fonde con header e sezione successiva),
            più trasparente al centro per far risaltare l'auto. */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#061629]/85 via-[#061629]/55 to-[#061629]/90" />
      </div>

      <div className="ds-container relative z-10 text-center max-w-3xl mx-auto">
        {eyebrow && (
          <p className="text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#7ba6e4] mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="text-[26px] md:text-[38px] font-extrabold text-white leading-[1.1] [text-shadow:_0_2px_18px_rgb(6_22_41_/_0.55)]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[15px] md:text-[17px] text-white/90 leading-relaxed mt-4 max-w-2xl mx-auto [text-shadow:_0_2px_14px_rgb(6_22_41_/_0.5)]">
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
