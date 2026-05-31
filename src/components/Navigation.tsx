import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { PHONE_DISPLAY, PHONE_HREF, EMAIL, EMAIL_HREF } from '../lib/contact';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Chi siamo', path: '/chi-siamo' },
    { label: 'Servizi', path: '/servizi' },
    { label: 'Valuta la tua auto', path: '/valuta-la-tua-auto' },
    { label: 'Contatti', path: '/contatti' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 text-white backdrop-blur-md transition-colors duration-300 ${
          scrolled
            ? 'bg-[#061629]/82 border-b border-white/5 shadow-[0_8px_24px_rgba(6,22,41,0.18)]'
            : 'bg-[#061629] border-b border-transparent'
        }`}
      >
        <div className="ds-container">
          <div className="flex items-center justify-between h-[74px]">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src="/logo-diamanti.png"
                alt="Diamanti Automobili — Consulente per l'acquisto di auto a Roma"
                className="h-[58px] w-auto"
              />
            </Link>

            {/* Desktop Nav + CTA */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              <nav className="flex items-center gap-8 xl:gap-10">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative py-[29px] text-[12px] font-bold uppercase tracking-[0.14em] transition-colors hover:text-white ${
                      location.pathname === item.path
                        ? 'text-white after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[3px] after:bg-white'
                        : 'text-white/72'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Link
                to="/contatti#form"
                className="hidden xl:inline-flex h-[40px] items-center justify-center rounded-full bg-white px-5 text-[12px] font-bold text-[#061629] hover:bg-[#eef3f8] transition-colors whitespace-nowrap"
              >
                Richiedi consulenza
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center shrink-0">
              <button className="p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu — DEVE stare fuori dall'<header>: l'header ha
          backdrop-blur (backdrop-filter), che lo rende containing block per i
          figli `position: fixed`, facendo collassare il menu a 0px di altezza. */}
      <nav
        aria-hidden={!isOpen}
        className={`lg:hidden bg-[#061629] fixed top-[74px] left-0 right-0 bottom-0 z-50 overflow-y-auto transition-[opacity,transform] duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none invisible'
        }`}
      >
        <div className="px-5 py-8 flex flex-col gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-white hover:text-[#7ba6e4] transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-4 pt-8 border-t border-white/10">
            <Link to="/contatti#form" onClick={() => setIsOpen(false)} className="flex items-center justify-center h-[52px] w-full rounded-full bg-white text-[#061629] font-semibold text-base">
              Richiedi consulenza
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#061629] text-white/72 pt-14 pb-7 border-t border-white/10">
      <div className="ds-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Logo Col */}
          <div className="lg:col-span-1 flex flex-col">
            <Link to="/" className="flex items-center mb-6">
              <img
                src="/logo-diamanti.png"
                alt="Diamanti Automobili — Consulente acquisto auto a Roma"
                className="h-[52px] w-auto"
              />
            </Link>
            <p className="text-[13px] leading-relaxed mb-6">
              Il consulente che cerca, verifica e consegna la tua prossima auto. Da Roma, in tutta Italia.
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
              <li><Link to="/servizi" className="hover:text-white transition-colors">Ricerca auto su misura</Link></li>
              <li><Link to="/servizi" className="hover:text-white transition-colors">Auto nuove, usate e km 0</Link></li>
              <li><Link to="/valuta-la-tua-auto" className="hover:text-white transition-colors">Permuta e valutazione auto</Link></li>
              <li><Link to="/valuta-la-tua-auto" className="hover:text-white transition-colors">Acquistiamo la tua auto</Link></li>
              <li><Link to="/servizi" className="hover:text-white transition-colors">Finanziamenti fino a 120 mesi</Link></li>
              <li><Link to="/servizi" className="hover:text-white transition-colors">Verifica e controllo</Link></li>
              <li><Link to="/servizi" className="hover:text-white transition-colors">Consegna a domicilio in tutta Italia</Link></li>
              <li><Link to="/servizi" className="hover:text-white transition-colors">Primo tagliando incluso</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-[14px] mb-5">Il metodo</h4>
            <ul className="flex flex-col gap-3 text-[13px]">
              <li><Link to="/servizi" className="hover:text-white transition-colors">Il nostro metodo</Link></li>
              <li><Link to="/servizi" className="hover:text-white transition-colors">Le fasi del servizio</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">Domande frequenti</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-[14px] mb-5">Informazioni</h4>
            <ul className="flex flex-col gap-3 text-[13px]">
              <li><Link to="/chi-siamo" className="hover:text-white transition-colors">Chi siamo</Link></li>
              <li><Link to="/chi-siamo" className="hover:text-white transition-colors">Perché sceglierci</Link></li>
              <li><Link to="/chi-siamo" className="hover:text-white transition-colors">Dicono di noi</Link></li>
              <li><Link to="/contatti" className="hover:text-white transition-colors">Contatti</Link></li>
            </ul>
          </div>

          {/* Contacts Col */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold text-[14px] mb-5">Contatti</h4>
            <ul className="flex flex-col gap-4 text-[13px]">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-white/50" />
                <a href={PHONE_HREF} className="hover:text-white transition-colors">{PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-white/50" />
                <a href={EMAIL_HREF} className="hover:text-white transition-colors break-all">{EMAIL}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-white/50 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Operiamo in tutta Italia<br/>e in Europa</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[11px] text-white/50">
          <p>© 2026 Diamanti Automobili - Tutti i diritti riservati.</p>
          <p className="mt-2 md:mt-0">P.IVA 12345678901</p>
        </div>
      </div>
    </footer>
  );
}
