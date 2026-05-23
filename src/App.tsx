import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from './components/Navigation';

// Code-splitting: ogni pagina è un chunk separato, caricato on-demand.
const Home = lazy(() => import('./pages/Home'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const TradeIn = lazy(() => import('./pages/TradeIn'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const Storie = () => <div className="pt-24 min-h-screen container mx-auto px-4"><h1 className="text-4xl font-bold py-10 text-primary">Storie vere e case study</h1><p className="text-text-muted">Prossimamente una selezione completa dei nostri successi...</p></div>;
const Risorse = () => <div className="pt-24 min-h-screen container mx-auto px-4"><h1 className="text-4xl font-bold py-10 text-primary">Risorse e blog anti-fregature</h1><p className="text-text-muted">Articoli e guide in arrivo per aiutarti a scegliere l'auto usata perfetta.</p></div>;

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-neutral-soft">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<div className="min-h-[60vh]" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/come-funziona" element={<HowItWorks />} />
              <Route path="/servizi" element={<Services />} />
              <Route path="/valuta-la-tua-auto" element={<TradeIn />} />
              <Route path="/chi-siamo" element={<About />} />
              <Route path="/storie" element={<Storie />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contatti" element={<Contact />} />
              <Route path="/risorse" element={<Risorse />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
