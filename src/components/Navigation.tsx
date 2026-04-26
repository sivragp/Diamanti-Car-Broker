import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageSquare, Car, ShieldCheck, MapPin } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Veicoli', path: '/veicoli' },
    { label: 'Ricerca su richiesta', path: '/ricerca' },
    { label: 'Importazione', path: '/importazione' },
    { label: 'Metodo Diamanti', path: '/metodo' },
    { label: 'Vendi / Permuta', path: '/vendi' },
    { label: 'Recensioni', path: '/recensioni' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border text-text">
        <div className="ds-container">
          <div className="flex items-center justify-between h-[68px] lg:h-[76px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <span className="text-xl font-bold tracking-tight text-dark">
                DIAMANTI <span className="font-normal text-muted">BROKER</span>
              </span>
            </Link>

            {/* Desktop Nav (Center) */}
            <nav className="hidden lg:flex items-center justify-center flex-1 gap-8 px-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-[13px] xl:text-[14px] font-semibold uppercase tracking-wider transition-colors hover:text-accent ${
                    location.pathname === item.path ? 'text-accent' : 'text-text'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Right Actions */}
            <div className="hidden lg:flex items-center gap-5 shrink-0">
              <div className="flex items-center gap-4 border-r border-border pr-5">
                <a href="tel:TODO_PHONE" className="text-text hover:text-accent transition-colors flex items-center gap-2">
                  <Phone size={18} strokeWidth={2} />
                  <span className="text-sm font-semibold">Chiama</span>
                </a>
                <a href="TODO_WHATSAPP" target="_blank" rel="noreferrer" className="text-green-600 hover:text-green-700 transition-colors" title="Scrivici su WhatsApp">
                  <MessageSquare size={20} strokeWidth={2} />
                </a>
              </div>
              <Link to="/consulenza" className="flex items-center justify-center h-[42px] px-[18px] rounded-sm bg-dark text-white font-semibold text-[14px] hover:bg-dark-soft transition-colors">
                Richiedi consulenza
              </Link>
            </div>

            {/* Mobile Actions & Toggle */}
            <div className="lg:hidden flex items-center gap-4 shrink-0">
              <a href="tel:TODO_PHONE" className="p-1.5 text-text">
                <Phone size={20} strokeWidth={2} />
              </a>
              <a href="TODO_WHATSAPP" target="_blank" rel="noreferrer" className="p-1.5 text-green-600">
                <MessageSquare size={20} strokeWidth={2} />
              </a>
              <button className="p-1.5 text-text" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={26} strokeWidth={2} /> : <Menu size={26} strokeWidth={2} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white fixed top-[68px] left-0 right-0 bottom-0 overflow-y-auto"
            >
              <div className="px-5 py-8 flex flex-col gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold text-text hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                
                <div className="mt-4 pt-8 border-t border-border">
                  <Link to="/consulenza" onClick={() => setIsOpen(false)} className="flex items-center justify-center h-[52px] w-full rounded-md bg-dark text-white font-semibold text-base">
                    Richiedi consulenza
                  </Link>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
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
