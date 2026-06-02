import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from './components/Navigation';

// Code-splitting: ogni pagina è un chunk separato, caricato on-demand.
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const TradeIn = lazy(() => import('./pages/TradeIn'));
const Risorse = lazy(() => import('./pages/Risorse'));
const Article = lazy(() => import('./pages/Article'));
const NotFound = lazy(() => import('./pages/NotFound'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Attendi il mount della pagina (lazy) e scrolla all'ancora (es. #form),
      // riprovando perché la chunk potrebbe non essere ancora caricata.
      let tries = 0;
      let t: ReturnType<typeof setTimeout>;
      const tryScroll = () => {
        const el = document.querySelector(hash);
        if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; }
        if (++tries < 8) t = setTimeout(tryScroll, 200);
        else window.scrollTo(0, 0);
      };
      t = setTimeout(tryScroll, 200);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

const Storie = () => <div className="pt-24 min-h-screen container mx-auto px-4"><h1 className="text-4xl font-bold py-10 text-primary">Storie vere e case study</h1><p className="text-text-muted">Prossimamente una selezione completa dei nostri successi...</p></div>;

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-neutral-soft">
        <Header />
        <main className="flex-grow overflow-x-hidden">
          <Suspense fallback={<div className="min-h-[60vh]" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servizi" element={<Services />} />
              <Route path="/valuta-la-tua-auto" element={<TradeIn />} />
              <Route path="/chi-siamo" element={<About />} />
              <Route path="/storie" element={<Storie />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contatti" element={<Contact />} />
              <Route path="/risorse" element={<Risorse />} />
              <Route path="/risorse/:slug" element={<Article />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
