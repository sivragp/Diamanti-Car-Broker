import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { SOLD_CARS, type SoldCar } from '../content/soldCars';

interface SoldCarsProps {
  /** Occhiello sopra il titolo (facoltativo). */
  eyebrow?: string;
  /** Titolo della sezione. */
  title?: string;
  /** Sottotitolo opzionale. */
  subtitle?: string;
  /** Elenco auto da mostrare (default: SOLD_CARS). */
  cars?: SoldCar[];
}

/** Card singola con galleria foto sfogliabile (frecce + puntini). */
function SoldCarCard({ car }: { car: SoldCar }) {
  const [idx, setIdx] = useState(0);
  const total = car.images.length;
  const hasGallery = total > 1;
  const go = (n: number) => setIdx((n + total) % total);
  const specs = [car.year, car.km, car.fuel].filter(Boolean).join(' · ');

  return (
    <article className="snap-center md:snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[340px] bg-white border border-[#e6ebf2] rounded-lg overflow-hidden flex flex-col shadow-[0_12px_28px_-24px_rgba(6,22,41,0.32)] hover:shadow-[0_22px_48px_-26px_rgba(6,22,41,0.42)] hover-lift">
      {/* Galleria foto */}
      <div className="relative aspect-[4/3] bg-[#eef2f7] overflow-hidden group">
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {car.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${car.model} — foto ${i + 1}`}
              className="w-full h-full object-cover shrink-0"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>

        {/* Badge VENDUTA */}
        <span className="absolute top-3 left-3 rounded-full bg-[#061629]/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
          Venduta
        </span>

        {hasGallery && (
          <>
            {/* Frecce */}
            <button
              type="button"
              onClick={() => go(idx - 1)}
              aria-label="Foto precedente"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/85 text-[#061629] flex items-center justify-center backdrop-blur-sm shadow-sm transition-opacity opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
            >
              <ChevronLeft size={18} strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={() => go(idx + 1)}
              aria-label="Foto successiva"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/85 text-[#061629] flex items-center justify-center backdrop-blur-sm shadow-sm transition-opacity opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
            >
              <ChevronRight size={18} strokeWidth={2} />
            </button>

            {/* Puntini */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {car.images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIdx(i)}
                  aria-label={`Vai alla foto ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx ? 'w-5 bg-white' : 'w-1.5 bg-white/55'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Dettagli auto */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-[16px] font-extrabold text-[#061629] leading-tight">{car.model}</h3>
        {specs && <p className="text-[12.5px] text-muted mt-1.5">{specs}</p>}
        {car.price && <p className="text-[20px] font-extrabold text-[#061629] mt-2">{car.price}</p>}

        {/* Recensione del cliente (mostrata solo se presente) */}
        {(car.text || car.name || car.city) && (
          <div className="mt-auto pt-5 border-t border-[#f0f3f7]">
            {car.text && (
              <>
                <div className="flex gap-[2px] mb-2.5">
                  {Array.from({ length: car.rating ?? 5 }).map((_, s) => (
                    <Star key={s} size={13} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <p className="italic text-[13.5px] text-[#061629] leading-[1.5]">"{car.text}"</p>
              </>
            )}
            {(car.name || car.city) && (
              <div className="flex items-center gap-3 mt-4">
                {(car.initials || car.name) && (
                  <div className="w-9 h-9 rounded-full bg-[#0b2b5b] text-white flex items-center justify-center font-bold text-[12px] shrink-0">
                    {car.initials ?? (car.name ?? '').slice(0, 2)}
                  </div>
                )}
                <div className="min-w-0">
                  {car.name && <p className="text-[12.5px] font-bold text-[#061629] leading-tight truncate">{car.name}</p>}
                  {car.city && <p className="text-[11px] text-muted truncate">Consegnata a {car.city}</p>}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

/**
 * Vetrina "Auto che abbiamo consegnato" — sezione riusabile.
 * Desktop: griglia 3 colonne. Mobile: carosello orizzontale swipe.
 */
export function SoldCars({
  eyebrow,
  title = 'Auto che abbiamo consegnato',
  subtitle,
  cars = SOLD_CARS,
}: SoldCarsProps) {
  return (
    <section className="py-16 md:py-20 bg-[#f6f8fb] border-t border-[#e6ebf2] overflow-hidden">
      <div className="ds-container">
        <Reveal className="text-center mb-10 md:mb-12">
          {eyebrow && (
            <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#0c438f] mb-3">{eyebrow}</p>
          )}
          <h2 className="text-[30px] md:text-[34px] font-extrabold text-[#061629] leading-tight">{title}</h2>
          {subtitle && (
            <p className="text-[15px] md:text-[16px] text-muted max-w-[640px] mx-auto leading-relaxed mt-4">{subtitle}</p>
          )}
        </Reveal>

        {/* Carosello orizzontale a riga singola (mobile e desktop), swipe/scroll */}
        <div className="flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar -mx-5 px-5 md:-mx-8 md:px-8 pb-2">
          {cars.map((car, i) => (
            <SoldCarCard key={i} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}
