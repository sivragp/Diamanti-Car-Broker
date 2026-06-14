import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useIsMobile } from '../lib/useIsMobile';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Ritardo in secondi, utile per lo stagger nelle griglie (es. index * 0.06). */
  delay?: number;
  /** Spostamento verticale iniziale in px. */
  y?: number;
  /**
   * Dichiarato solo per soddisfare TS quando Reveal è usato dentro una .map()
   * come figlio con `key` (il progetto non include @types/react, che normalmente
   * abilita `key` a livello JSX). React estrae `key` a runtime: non arriva mai nei props.
   */
  key?: string | number;
}

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

/**
 * Rivela il contenuto con dissolvenza + risalita quando entra nel viewport.
 *
 * SOLO MOBILE: su desktop (≥768px) o con "riduci animazioni" attivo, rende un
 * semplice <div> con le stesse classi — il layout desktop resta identico al pixel.
 * Renderizza sempre un <div>, quindi è sicuro anche come figlio diretto di
 * grid/flex (non altera la struttura DOM).
 *
 * Implementazione senza librerie: IntersectionObserver + transizione CSS su
 * transform/opacity (GPU), così non trasciniamo l'intera libreria `motion`
 * (~124 KB) solo per un fade-in mobile.
 */
export function Reveal({ children, className, delay = 0, y = 22 }: RevealProps) {
  const isMobile = useIsMobile();
  const [reduce] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  const animate = isMobile && !reduce;

  useEffect(() => {
    if (!animate) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [animate]);

  if (!animate) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : `translateY(${y}px)`,
        transition: `opacity 0.55s ${EASE} ${delay}s, transform 0.55s ${EASE} ${delay}s`,
        willChange: shown ? undefined : 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
