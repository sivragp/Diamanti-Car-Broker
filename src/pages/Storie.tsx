import { SEO } from '../components/SEO';

/**
 * Placeholder "Prossimamente". Contenuto ancora minimale → noindex finché non
 * sono pubblicati i case study reali (evita thin content nell'indice).
 */
export default function Storie() {
  return (
    <div className="pt-24 min-h-screen container mx-auto px-4">
      <SEO
        title="Storie vere e case study | Diamanti Automobili"
        description="Una selezione dei nostri acquisti riusciti: presto online le storie reali dei clienti."
        path="/storie"
        noIndex
      />
      <h1 className="text-4xl font-bold py-10 text-primary">Storie vere e case study</h1>
      <p className="text-text-muted">Prossimamente una selezione completa dei nostri successi...</p>
    </div>
  );
}
