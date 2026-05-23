import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Clock } from 'lucide-react';
import { SEO, SITE_URL } from '../components/SEO';
import { getArticle, ARTICLES } from '../content/articles';

const MONTHS = [
  'gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno',
  'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre',
];
function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export default function Article() {
  const { slug = '' } = useParams();
  const article = getArticle(slug);

  if (!article) {
    return (
      <div className="bg-surface min-h-screen font-sans text-text pt-[74px]">
        <SEO
          title="Articolo non trovato | Diamanti Automobili"
          description="La risorsa richiesta non è disponibile."
          path={`/risorse/${slug}`}
          noIndex
        />
        <div className="ds-container py-32 text-center">
          <h1 className="text-[28px] font-extrabold text-[#061629] mb-4">Articolo non trovato</h1>
          <p className="text-muted mb-8">La guida che cerchi non esiste o è stata spostata.</p>
          <Link to="/risorse" className="inline-flex h-[46px] px-6 items-center justify-center rounded-full bg-[#0b2b5b] text-white font-bold text-[14px]">
            Vai a tutte le risorse
          </Link>
        </div>
      </div>
    );
  }

  const url = `${SITE_URL}/risorse/${article.slug}`;
  const related = article.related
    .map((s) => ARTICLES.find((a) => a.slug === s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: article.h1,
      description: article.description,
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      inLanguage: 'it-IT',
      image: `${SITE_URL}/images/og-cover.jpg`,
      author: { '@type': 'Organization', name: 'Diamanti Automobili' },
      publisher: {
        '@type': 'Organization',
        name: 'Diamanti Automobili',
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo-diamanti.png` },
      },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: article.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Risorse', item: `${SITE_URL}/risorse` },
        { '@type': 'ListItem', position: 3, name: article.h1, item: url },
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-text pt-[74px]">
      <SEO
        title={article.title}
        description={article.description}
        path={`/risorse/${article.slug}`}
        jsonLd={jsonLd}
        jsonLdId={`article-${article.slug}`}
      />

      {/* Header scuro */}
      <header className="bg-[#061629] text-white">
        <div className="ds-container max-w-[820px] py-12 md:py-16">
          <nav aria-label="breadcrumb" className="flex flex-wrap items-center gap-2 text-[12px] text-white/55 mb-6">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/risorse" className="hover:text-white">Risorse</Link>
            <span>/</span>
            <span className="text-white/80">{article.category}</span>
          </nav>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#7ba6e4] mb-3">{article.category}</p>
          <h1 className="text-[28px] md:text-[40px] font-extrabold leading-[1.12] mb-5 text-white">{article.h1}</h1>
          <div className="flex items-center gap-4 text-[12px] text-white/60">
            <time dateTime={article.datePublished}>{formatDate(article.dateModified)}</time>
            <span className="inline-flex items-center gap-1.5"><Clock size={13} /> {article.readingMinutes} min di lettura</span>
          </div>
        </div>
      </header>

      {/* Corpo */}
      <article className="ds-container max-w-[820px] py-12 md:py-16">
        <div className="article-prose">{article.body}</div>

        {/* FAQ */}
        {article.faqs.length > 0 && (
          <section className="mt-14 pt-10 border-t border-[#e6ebf2]">
            <h2 className="text-[22px] md:text-[26px] font-extrabold text-[#061629] mb-8">Domande frequenti</h2>
            <div className="flex flex-col gap-6">
              {article.faqs.map((f, i) => (
                <div key={i}>
                  <h3 className="text-[16px] md:text-[17px] font-bold text-[#061629] mb-2">{f.q}</h3>
                  <p className="text-[15px] text-muted leading-[1.75]">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="mt-14 rounded-lg bg-[#061629] text-white p-8 md:p-10 text-center shadow-[0_16px_34px_-26px_rgba(6,22,41,0.4)]">
          <h2 className="text-[22px] md:text-[26px] font-extrabold mb-3 leading-tight text-white">Vuoi una mano da un consulente?</h2>
          <p className="text-white/72 text-[15px] leading-relaxed mb-7 max-w-xl mx-auto">
            Diamanti Automobili cerca, verifica e consegna la tua prossima auto — con permuta, finanziamento fino a 120 mesi e consegna a domicilio in tutta Italia.
          </p>
          <Link to="/contatti" className="inline-flex h-[48px] px-7 items-center justify-center rounded-full bg-white text-[#061629] font-bold text-[14px] hover:bg-[#eef3f8] transition-colors gap-2">
            Richiedi una consulenza <ArrowRight size={16} />
          </Link>
        </div>

        {/* Correlati */}
        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="text-[18px] font-extrabold text-[#061629] mb-6">Continua a leggere</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/risorse/${r.slug}`}
                  className="block border border-[#e6ebf2] rounded-lg p-5 hover:shadow-[0_18px_42px_-26px_rgba(6,22,41,0.38)] transition-shadow"
                >
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0c438f] mb-2">{r.category}</p>
                  <h3 className="text-[15px] font-bold text-[#061629] leading-snug">{r.h1}</h3>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-12">
          <Link to="/risorse" className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#0c438f] hover:text-[#0b2b5b]">
            <ArrowLeft size={16} /> Tutte le risorse
          </Link>
        </div>
      </article>
    </div>
  );
}
