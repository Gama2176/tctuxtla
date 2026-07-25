import React, { useState, useEffect } from 'react';
import { Menu, X, Radio, ChevronRight } from 'lucide-react';
import logo from '../images/logo-ecim.svg';

const Navbar = ({ onNavigate, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para ajustar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear el scroll de la página cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Lo que creemos', href: '#creemos' },
    { name: 'Equipo pastoral', href: '#pastores' },
    { name: 'Ministerios', href: '#ministerios' },
    { name: 'Encuéntranos', href: '#ubicacion' },
    { name: 'Contacto', href: '#contacto' },
    { name: 'Preguntas Frecuentes', href: '#preguntas' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (currentView !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        scrollToSection(href);
      }, 120);
    } else {
      scrollToSection(href);
    }
  };

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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-slate-200/80 bg-white/85 backdrop-blur-md shadow-xs py-3'
            : 'border-b border-transparent bg-white/70 backdrop-blur-sm py-4'
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 sm:px-6 md:px-10">
          
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleScrollTo(e, '#inicio')}
            className="flex items-center transition-transform hover:scale-[0.98] active:scale-95"
          >
            <img
              src={logo}
              alt="Templo Cristiano de Tuxtla - TCT"
              className="h-9 w-auto object-contain sm:h-11 transition-all"
            />
          </a>

          {/* Nav Links - Desktop */}
          <div className="hidden items-center md:flex md:space-x-5 lg:space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-xs font-semibold tracking-tight text-[#222222] transition duration-150 hover:text-[#4fc1bd] sm:text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden items-center md:flex">
            <button
              type="button"
              onClick={() => onNavigate('inscription')}
              className="group inline-flex items-center gap-2 rounded-xl bg-[#4fc1bd] px-4.5 py-2.5 text-xs font-bold text-white shadow-md shadow-[#4fc1bd]/20 transition-all duration-200 hover:bg-[#3db0ac] hover:shadow-lg hover:shadow-[#4fc1bd]/30 active:scale-95 sm:text-xs cursor-pointer"
            >
              <Radio className="h-4 w-4 animate-pulse text-white" />
              <span>Transmisiones en vivo</span>
            </button>
          </div>

          {/* Botón Hamburguesa - Mobile */}
          <button
            type="button"
            className="relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 backdrop-blur-sm text-slate-700 shadow-2xs transition hover:bg-slate-100 active:scale-90 md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5 text-slate-900" /> : <Menu className="h-5 w-5 text-slate-800" />}
          </button>
        </div>
      </nav>

      {/* Overlay Oscuro / Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Drawer Deslizable Móvil */}
      <aside
        className={`fixed top-0 right-0 z-40 h-full w-[85%] max-w-[340px] bg-white/95 backdrop-blur-xl p-5 shadow-2xl transition-transform duration-300 ease-out md:hidden flex flex-col justify-between ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full' 
        }`}
      >
        <div className="pt-20 overflow-y-auto">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-3 px-2">
            Navegación
          </p>
          
          <div className="flex flex-col space-y-1">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 35}ms` : '0ms',
                }}
                className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 transition-all duration-200 hover:bg-[#4fc1bd]/10 hover:text-[#4fc1bd] active:bg-[#4fc1bd]/15 ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="h-4 w-4 text-slate-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Footer del Drawer */}
        <div className="border-t border-slate-100 pt-4 space-y-3">
          <button
            type="button"
            onClick={() => {
              setIsMenuOpen(false);
              onNavigate('inscription');
            }}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#4fc1bd] py-3 text-center text-sm font-bold text-white shadow-md shadow-[#4fc1bd]/20 transition hover:bg-[#3db0ac] active:scale-[0.98] cursor-pointer"
          >
            <Radio className="h-4 w-4 animate-pulse" />
            <span>Transmisiones en vivo</span>
          </button>
          <p className="text-center text-[11px] font-medium text-slate-400">
            Templo Cristiano de Tuxtla (TCT) © 2026
          </p>
        </div>
      </aside>
    </>
  );
};

export default Navbar;