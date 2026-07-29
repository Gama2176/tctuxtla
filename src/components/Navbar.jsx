import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronDown, 
  Menu,
  X,
  BookOpen, 
  HelpCircle, 
  ArrowUpRight, 
  MapPin, 
  Radio
} from 'lucide-react';

import worship from '../images/tct-jovenes.jpg';
import logoImage from '../images/logo-tct.svg'; 

const Navbar = ({ onNavigate, currentView = 'home' }) => {
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoAvailable, setLogoAvailable] = useState(true);
  
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setDesktopMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileOpen]);

  const scrollToSection = (href) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    setDesktopMenuOpen(false);

    if (currentView !== 'home') {
      if (onNavigate) onNavigate('home');
      setTimeout(() => {
        scrollToSection(href);
      }, 150);
    } else {
      scrollToSection(href);
    }
  };

  // Subrutas secundarias para el menú desplegable 'Más' en Desktop
  const dropdownLinks = [
    {
      name: 'Dónde estamos',
      href: '#ubicacion',
      desc: 'Ubicación, horarios y servicios para visitarnos.',
      icon: MapPin
    },
    {
      name: 'Contacto',
      href: '#contacto',
      desc: 'Ponte en contacto con nuestro equipo.',
      icon: BookOpen
    },
    {
      name: 'Preguntas',
      href: '#preguntas',
      desc: 'Respuestas a las dudas más comunes.',
      icon: HelpCircle
    }
  ];

  // Lista maquetada con el orden exacto solicitado
  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Lo que creemos', href: '#creemos' },
    { name: 'Equipo pastoral', href: '#pastores' },
    { name: 'Ministerios', href: '#ministerios' },
    { name: 'Dónde estamos', href: '#ubicacion' },
    { name: 'Contacto', href: '#contacto' },
    { name: 'Preguntas', href: '#preguntas' },
  ];

  // Separación para Desktop: Primeros 5 visibles, los demás dentro de "Más"
  const desktopMainLinks = navLinks.slice(0, 5);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 transition-all duration-300" ref={menuRef}>
      <div 
        className={`w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-slate-200/80' 
            : 'bg-white/70 backdrop-blur-sm py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          
          {/* LOGO */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center cursor-pointer transition-transform active:scale-95 shrink-0"
          >
            {logoAvailable ? (
              <img
                src={logoImage}
                alt="Templo Cristiano de Tuxtla - TCT"
                className="h-7 sm:h-8 w-auto object-contain transition-all"
                onError={() => setLogoAvailable(false)}
              />
            ) : (
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#4FC1BD]/10 flex items-center justify-center text-[#4FC1BD] font-bold text-lg">
                TCT
              </div>
            )}
          </a>

          {/* BOTÓN HAMBURGUESA - MÓVIL */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-slate-200/80 bg-white/90 p-2.5 text-slate-800 shadow-sm transition hover:bg-slate-100 active:scale-95 md:hidden cursor-pointer"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* NAV LINKS - DESKTOP (Actualizados con el nuevo orden) */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 text-slate-900 font-medium text-sm">
            {desktopMainLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)} 
                className="hover:text-[#4FC1BD] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            
            {/* DESPLEGABLE 'MÁS' DESKTOP */}
            <div className="relative">
              <button 
                onClick={() => setDesktopMenuOpen((prev) => !prev)}
                className={`flex items-center gap-1 py-2 text-slate-900 hover:text-[#4FC1BD] transition-colors duration-200 focus:outline-none cursor-pointer ${
                  desktopMenuOpen ? 'text-[#4FC1BD]' : ''
                }`}
              >
                Más
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${desktopMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <div 
                className={`absolute left-1/2 -translate-x-1/2 mt-4 w-[780px] lg:w-[840px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 grid grid-cols-12 gap-6 transition-all duration-300 transform origin-top ${
                  desktopMenuOpen 
                    ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' 
                    : 'opacity-0 scale-95 pointer-events-none -translate-y-2'
                }`}
              >
                <div className="col-span-5 flex flex-col justify-center space-y-2 border-r border-slate-100 pr-4">
                  {dropdownLinks.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="flex items-start gap-3 p-3 rounded-2xl hover:bg-[#4FC1BD]/10 transition-colors group"
                      >
                        <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 group-hover:bg-[#4FC1BD]/20 group-hover:text-[#4FC1BD] transition-colors shrink-0 mt-0.5">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-slate-800 group-hover:text-[#4FC1BD] transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>

                <div
                  className="col-span-7 relative rounded-2xl overflow-hidden p-6 flex flex-col justify-between text-white group/card cursor-pointer min-h-[220px] shadow-md transition-transform duration-300 hover:scale-[1.01]"
                  style={{
                    backgroundImage: `url(${worship})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  onClick={(e) => handleNavClick(e, '#ministerios')}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-black/20 group-hover/card:from-slate-950/80 transition-all"></div>
                  
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="inline-block bg-black/40 backdrop-blur-md text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border border-white/10">
                      Worship & Devotion
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover/card:bg-white group-hover/card:text-slate-950">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="relative z-10 mt-8 pt-3 border-t border-white/20 flex items-end justify-between">
                    <div>
                      <h3 className="text-lg font-extrabold leading-tight tracking-tight">
                        Reunión de jóvenes
                      </h3>
                      <p className="text-xs text-slate-300 font-medium mt-0.5">Nave principal</p>
                    </div>
                    <div className="text-right">
                      <span className="block text-xl font-black tracking-tight text-[#4FC1BD]">Sábado</span>
                      <span className="text-xs font-semibold text-slate-200">6:30 pm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTÓN TRANSMISIONES EN VIVO */}
          <div className="hidden md:flex items-center shrink-0">
            <button
              type="button"
              onClick={() => {
                if (onNavigate) onNavigate('transmisiones');
              }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4FC1BD] px-4.5 py-2.5 text-xs font-bold text-white shadow-md shadow-[#4FC1BD]/20 hover:bg-[#3db0ac] transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <Radio className="h-4 w-4 animate-pulse text-white" />
              <span>Transmisiones en vivo</span>
            </button>
          </div>

        </div>
      </div>

      {/* BACKDROP MÓVIL */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* DRAWER MÓVIL */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-[340px] bg-white/95 backdrop-blur-xl p-5 shadow-2xl transition-transform duration-300 ease-out md:hidden flex flex-col justify-between ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-6 overflow-y-auto overscroll-contain space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
              Navegación
            </p>
            <button 
              onClick={() => setMobileOpen(false)}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex flex-col space-y-1">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-[#4FC1BD]/10 hover:text-[#4FC1BD] transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* FOOTER MÓVIL */}
        <div className="border-t border-slate-100 pt-4 space-y-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              if (onNavigate) onNavigate('transmisiones');
            }}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#4FC1BD] py-3 text-center text-xs font-bold text-white shadow-md shadow-[#4FC1BD]/20 transition hover:bg-[#3db0ac] active:scale-[0.98] cursor-pointer"
          >
            <Radio className="h-4 w-4 animate-pulse" />
            <span>Transmisiones en vivo</span>
          </button>
          
          <p className="text-center text-[10px] font-medium text-slate-400">
            Templo Cristiano de Tuxtla (TCT) © 2026
          </p>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;