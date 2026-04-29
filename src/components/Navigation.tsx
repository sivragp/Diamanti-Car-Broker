import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageSquare, Car, ShieldCheck, MapPin, Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Chi siamo', path: '/chi-siamo' },
    { label: 'Servizi', path: '/servizi' },
    { label: 'Come funziona', path: '/come-funziona' },
    { label: 'Contatti', path: '/contatti' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 text-[#061629] border-b border-[#e6ebf2] backdrop-blur-md shadow-[0_8px_24px_rgba(6,22,41,0.05)]">
        <div className="ds-container">
          <div className="flex items-center justify-between h-[74px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              {/* Diamond Icon Placeholder - using SVG since it's a specific logo */}
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0b2b5b]">
                <path d="M20 2L2 12L20 38L38 12L20 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M2 12H38" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 12L20 38L28 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M20 2L12 12" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M20 2L28 12" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-[18px] font-extrabold tracking-[0.14em] leading-none">DIAMANTI</span>
                <span className="text-[9px] font-bold tracking-[0.28em] mt-1 text-[#5f6b7a]">CAR BROKER</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative py-[29px] text-[12px] font-bold transition-colors hover:text-[#0c438f] ${
                    location.pathname === item.path ? 'text-[#0c438f] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[3px] after:bg-[#0c438f]' : 'text-[#061629]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center shrink-0">
              <button className="p-2 text-[#061629]" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
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
              className="lg:hidden bg-white fixed top-[74px] left-0 right-0 bottom-0 overflow-y-auto"
            >
              <div className="px-5 py-8 flex flex-col gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold text-[#061629] hover:text-[#0c438f] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                
                <div className="mt-4 pt-8 border-t border-border">
                  <Link to="/consulenza" onClick={() => setIsOpen(false)} className="flex items-center justify-center h-[52px] w-full rounded-full bg-[#0b2b5b] text-white font-semibold text-base">
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
    <footer className="bg-[#061629] text-white/72 pt-14 pb-7 border-t border-white/10">
      <div className="ds-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Logo Col */}
          <div className="lg:col-span-1 flex flex-col">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M20 2L2 12L20 38L38 12L20 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M2 12H38" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 12L20 38L28 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M20 2L12 12" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M20 2L28 12" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <div className="flex flex-col">
                <span className="text-[16px] text-white font-extrabold tracking-[0.14em] leading-none">DIAMANTI</span>
                <span className="text-[8px] text-white/80 font-bold tracking-[0.3em] mt-1">CAR BROKER</span>
              </div>
            </Link>
            <p className="text-[13px] leading-relaxed mb-6">
              Troviamo l'auto giusta per te, senza farti perdere tempo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-colors"><Facebook size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-colors"><Instagram size={14} /></a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-brand-dark transition-colors"><Linkedin size={14} /></a>
            </div>
          </div>

          {/* Links Cols */}
          <div>
            <h4 className="text-white font-bold text-[14px] mb-5">Servizi</h4>
            <ul className="flex flex-col gap-3 text-[13px]">
              <li><Link to="#" className="hover:text-white transition-colors">Ricerca auto su misura</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Auto nuove</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Auto usate e km 0</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Verifica e controllo</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Consegna a domicilio</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Supporto pratiche</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-[14px] mb-5">Come funziona</h4>
            <ul className="flex flex-col gap-3 text-[13px]">
              <li><Link to="#" className="hover:text-white transition-colors">Il nostro metodo</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Le fasi del servizio</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Domande frequenti</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Condizioni di servizio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-[14px] mb-5">Informazioni</h4>
            <ul className="flex flex-col gap-3 text-[13px]">
              <li><Link to="#" className="hover:text-white transition-colors">Chi siamo</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Perché sceglierci</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Dicono di noi</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Privacy e cookie</Link></li>
            </ul>
          </div>

          {/* Contacts Col */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold text-[14px] mb-5">Contatti</h4>
            <ul className="flex flex-col gap-4 text-[13px]">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-white/50" />
                <span>+39 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-white/50" />
                <span>info@diamanticarbroker.it</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-white/50 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Operiamo in tutta Italia<br/>e in Europa</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[11px] text-white/50">
          <p>© 2024 Diamanti Car Broker - Tutti i diritti riservati.</p>
          <p className="mt-2 md:mt-0">P.IVA 12345678901</p>
        </div>
      </div>
    </footer>
  );
}
