import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageSquare, Car, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Azienda', path: '/azienda' },
    { label: 'Veicoli', path: '/veicoli' },
    { label: 'Acquisto', path: '/acquisto' },
    { label: 'Servizi', path: '/servizi' },
    { label: 'Contatti', path: '/contatti' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-border text-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="text-xl font-bold tracking-tight">
              DIAMANTI <span className="font-normal">BROKER</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold transition-colors hover:text-accent ${
                  location.pathname === item.path ? 'text-accent' : 'text-text-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
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
            <div className="container mx-auto px-6 py-6 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold text-primary hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-8 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Logo Column */}
          <div className="lg:col-span-2">
            <span className="text-xl font-bold tracking-tight mb-4 block">
              DIAMANTI <span className="font-normal">BROKER</span>
            </span>
            <p className="text-gray-400 leading-relaxed mb-6">
              Siamo leader nell'importare auto tedesche! Facci sapere qual è l'auto che desideri e ci occuperemo noi di importarla per te.
            </p>
            <div className="text-gray-400">
              <p>info@diamantibroker.com</p>
              <p>+39 333 123 4567</p>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold mb-4">Menu Sito</h4>
            <ul className="flex flex-col gap-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/azienda" className="text-gray-400 hover:text-white transition-colors">Azienda</Link></li>
              <li><Link to="/veicoli" className="text-gray-400 hover:text-white transition-colors">Veicoli</Link></li>
              <li><Link to="/acquisto" className="text-gray-400 hover:text-white transition-colors">Acquisto</Link></li>
              <li><Link to="/servizi" className="text-gray-400 hover:text-white transition-colors">Servizi</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white transition-colors">News</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Le Nostre Marche</h4>
            <ul className="flex flex-col gap-2 text-gray-400">
              <li>Audi</li>
              <li>BMW</li>
              <li>Mercedes</li>
              <li>Porsche</li>
              <li>Volkswagen</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Privacy</h4>
            <ul className="flex flex-col gap-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookie" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/contatti" className="text-gray-400 hover:text-white transition-colors">Contatti</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
          <p>
            © {new Date().getFullYear()} Diamanti Broker. Tutti i diritti riservati.
          </p>
          <div className="flex gap-4">
             <span>Powered by Diamanti</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
