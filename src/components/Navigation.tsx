import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageSquare, Car, ShieldCheck, MapPin } from 'lucide-react';
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 text-brand-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="text-xl font-extrabold tracking-tight">
              DIAMANTI <span className="font-light">BROKER</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-brand-accent ${
                  location.pathname === item.path ? 'text-brand-accent' : 'text-brand-secondary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2 text-brand-primary" onClick={() => setIsOpen(!isOpen)}>
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
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-brand-primary hover:text-brand-accent transition-colors uppercase tracking-wider"
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
    <footer className="bg-brand-dark text-white pt-20 pb-8 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Logo Column */}
          <div className="lg:col-span-2">
            <span className="text-2xl font-extrabold tracking-tight mb-4 block text-white">
              DIAMANTI <span className="font-light">BROKER</span>
            </span>
            <p className="text-gray-400 leading-relaxed mb-6 font-medium pr-8">
              Siamo specializzati nella ricerca, selezione e importazione di auto premium in tutta Europa. Affidati a professionisti per un acquisto sicuro e senza sorprese, chiavi in mano.
            </p>
            <div className="text-gray-400 space-y-2">
              <p className="flex items-center gap-2"><MapPin size={16} /> Via dell'Automotive 12, 20100 Milano (MI)</p>
              <p className="flex items-center gap-2"><Phone size={16} /> +39 333 123 4567</p>
              <p className="flex items-center gap-2"><MessageSquare size={16} /> <a href="mailto:info@diamantibroker.com" className="hover:text-white transition-colors">info@diamantibroker.com</a></p>
              <p className="flex items-center gap-2"><ShieldCheck size={16} /> P.IVA 12345678901</p>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-white">Menu Sito</h4>
            <ul className="flex flex-col gap-2">
              <li><Link to="/" className="text-gray-400 hover:text-brand-accent transition-colors font-medium">Home</Link></li>
              <li><Link to="/azienda" className="text-gray-400 hover:text-brand-accent transition-colors font-medium">Azienda</Link></li>
              <li><Link to="/veicoli" className="text-gray-400 hover:text-brand-accent transition-colors font-medium">Veicoli Disponibili</Link></li>
              <li><Link to="/acquisto" className="text-gray-400 hover:text-brand-accent transition-colors font-medium">Servizio Broker</Link></li>
              <li><Link to="/servizi" className="text-gray-400 hover:text-brand-accent transition-colors font-medium">Finanziamenti</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-brand-accent transition-colors font-medium">Guide Acquisto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-white">Assistenza</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="https://wa.me/393331234567" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-accent transition-colors font-medium flex items-center gap-2">Chat WhatsApp</a></li>
              <li><Link to="/contatti" className="text-gray-400 hover:text-brand-accent transition-colors font-medium">Contattaci</Link></li>
              <li><Link to="/valutazione" className="text-gray-400 hover:text-brand-accent transition-colors font-medium">Vendi la tua auto</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-brand-accent transition-colors font-medium">Domande Frequenti</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-white">Legale</h4>
            <ul className="flex flex-col gap-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors font-medium">Privacy Policy</Link></li>
              <li><Link to="/cookie" className="text-gray-400 hover:text-white transition-colors font-medium">Cookie Policy</Link></li>
              <li><Link to="/condizioni" className="text-gray-400 hover:text-white transition-colors font-medium">Termini e Condizioni</Link></li>
              <li><Link to="/garanzia" className="text-gray-400 hover:text-white transition-colors font-medium">Informativa Garanzia</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 font-medium text-xs uppercase tracking-wider">
          <p>
            © {new Date().getFullYear()} Diamanti Broker S.r.l. Tutti i diritti riservati.
          </p>
          <div className="flex gap-4">
             <span>Sviluppato con dedizione</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
