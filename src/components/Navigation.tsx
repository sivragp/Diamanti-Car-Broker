import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageSquare, Car, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Come Funziona', path: '/come-funziona' },
    { label: 'Servizi', path: '/servizi' },
    { label: 'Storie Vere', path: '/storie' },
    { label: 'Chi Siamo', path: '/chi-siamo' },
    { label: 'FAQ', path: '/faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-border text-primary shadow-sm transition-all">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-primary p-2 rounded-lg group-hover:bg-accent transition-colors duration-300">
              <Car size={22} className="text-white" />
            </div>
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tight">
              Diamanti <span className="text-accent italic">Broker</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs font-semibold uppercase tracking-widest transition-colors hover:text-accent relative group/link ${
                  location.pathname === item.path ? 'text-accent' : 'text-text-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contatti" className="bg-primary hover:bg-primary-light text-white text-xs font-semibold uppercase tracking-widest py-3 px-6 rounded-lg transition-colors ml-4">
              Consulenza
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2 text-primary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-neutral-border overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif font-semibold text-primary hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contatti"
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-primary text-white text-center py-4 rounded-lg font-semibold"
              >
                Prenota Consulenza
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-accent p-2 rounded-lg">
                <Car size={22} className="text-white" />
              </div>
              <span className="text-xl font-serif font-bold tracking-tight">
                Diamanti <span className="italic">Broker</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              L'eccellenza nella consulenza automobilistica. Gestiamo il tuo investimento cercando la perfezione nel mercato europeo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <MessageSquare size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-6 text-gray-500">Navigazione</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/come-funziona" className="text-sm text-gray-400 hover:text-accent transition-colors">Il Nostro Metodo</Link></li>
              <li><Link to="/servizi" className="text-sm text-gray-400 hover:text-accent transition-colors">I Servizi</Link></li>
              <li><Link to="/storie" className="text-sm text-gray-400 hover:text-accent transition-colors">Successi & Testimonials</Link></li>
              <li><Link to="/chi-siamo" className="text-sm text-gray-400 hover:text-accent transition-colors">Azienda & Vision</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-6 text-gray-500">Supporto</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/faq" className="text-sm text-gray-400 hover:text-accent transition-colors">Centro Assistenza</Link></li>
              <li><Link to="/risorse" className="text-sm text-gray-400 hover:text-accent transition-colors">Guide Anti-Fregatura</Link></li>
              <li><Link to="/contatti" className="text-sm text-gray-400 hover:text-accent transition-colors">Contatti</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-6 text-gray-500">Contatti Diretti</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 items-start">
                <Phone size={18} className="text-accent shrink-0" />
                <span className="text-gray-300 text-sm">+39 333 123 4567</span>
              </li>
              <li className="flex gap-3 items-start">
                <MessageSquare size={18} className="text-accent shrink-0" />
                <span className="text-gray-300 text-sm">broker@diamanti.it</span>
              </li>
              <li className="mt-4 bg-white/5 border border-white/10 p-4 rounded-xl flex gap-3 items-center">
                <ShieldCheck size={24} className="text-accent shrink-0" />
                <span className="text-xs uppercase tracking-widest leading-relaxed text-gray-300 font-semibold">Brokeraggio <br/>Certificato</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Diamanti Broker - P.IVA 01234567890. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6">
             <span className="text-gray-500 text-xs font-semibold uppercase tracking-widest">Torino</span>
             <span className="text-gray-500 text-xs font-semibold uppercase tracking-widest">Milano</span>
             <span className="text-gray-500 text-xs font-semibold uppercase tracking-widest">Monaco</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
