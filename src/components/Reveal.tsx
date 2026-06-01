import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
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

/**
 * Rivela il contenuto con dissolvenza + risalita quando entra nel viewport.
 *
 * SOLO MOBILE: su desktop (≥768px) o con "riduci animazioni" attivo, rende un
 * semplice <div> con le stesse classi — il layout desktop resta identico al pixel.
 * Renderizza sempre un <div>, quindi è sicuro anche come figlio diretto di
 * grid/flex (non altera la struttura DOM).
 */
export function Reveal({ children, className, delay = 0, y = 22 }: RevealProps) {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();

  if (!isMobile || reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
