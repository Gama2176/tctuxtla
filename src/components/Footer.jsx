import React from 'react';
import logo from '../images/logo-ecim.svg';

const Footer = ({ onNavigate }) => {
  const scrollToSection = (href) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleScroll = (e, href) => {
    e.preventDefault();
    if (!onNavigate) return;
    onNavigate('home');
    setTimeout(() => scrollToSection(href), 120);
  };

  const handlePage = (e, view) => {
    e.preventDefault();
    if (!onNavigate) return;
    onNavigate(view);
  };

  return (
    <footer className="border-t border-[#E4E4E7]/60 bg-white text-[#111111]">
      {/* Sección Principal del Footer */}
      <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Columna Izquierda: Logo + Descripción + Status Badge (5 columnas) */}
          <div className="lg:col-span-5 space-y-5 pr-0 lg:pr-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Euro Centro de Idiomas"
                loading="lazy"
                decoding="async"
                className="h-12 w-auto object-contain sm:h-14"
              />
            </div>

            {/* Texto Descriptivo */}
            <p className="text-xs xs:text-xs text-[#71717A] leading-relaxed max-w-sm">
              Centro especializado en la enseñanza de idiomas. Desarrolla las cuatro habilidades lingüísticas con metodologías avanzadas y certificación.
            </p>

            {/* Badge Status (Punto Verde Operativo) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0]/60">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
              <span className="text-[11px] font-semibold text-[#047857]">
                Inscripciones Abiertas, ¡Escríbenos!
              </span>
            </div>
          </div>

          {/* Columnas de Enlaces (7 columnas divididas en 4 secciones) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Columna 1: Institución */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-[#111111] tracking-tight">
                Institución
              </h4>
              <ul className="space-y-2.5 text-xs text-[#71717A]">
                <li>
                  <a href="#inicio" onClick={(e) => handleScroll(e, '#inicio')} className="hover:text-[#111111] transition-colors">Inicio</a>
                </li>
                <li>
                  <a href="#nosotros" onClick={(e) => handleScroll(e, '#nosotros')} className="hover:text-[#111111] transition-colors">Nosotros</a>
                </li>
                <li>
                  <a href="#metodologia" onClick={(e) => handleScroll(e, '#metodologia')} className="hover:text-[#111111] transition-colors">Metodología</a>
                </li>
                <li>
                  <a href="#cursos" onClick={(e) => handleScroll(e, '#cursos')} className="hover:text-[#111111] transition-colors">Idiomas</a>
                </li>
                <li>
                  <a href="#programas" onClick={(e) => handleScroll(e, '#programas')} className="hover:text-[#111111] transition-colors">Programas</a>
                </li>
                <li>
                  <a href="#ubicacion" onClick={(e) => handleScroll(e, '#ubicacion')} className="hover:text-[#111111] transition-colors">¿Dónde estamos?</a>
                </li>
              </ul>
            </div>

            {/* Columna 2: Cursos */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-[#111111] tracking-tight">
                Cursos
              </h4>
              <ul className="space-y-2.5 text-xs text-[#71717A]">
                <li>
                  <a href="#english" onClick={(e) => handlePage(e, 'english')} className="hover:text-[#111111] transition-colors">Inglés</a>
                </li>
                <li>
                  <a href="#french" onClick={(e) => handlePage(e, 'french')} className="hover:text-[#111111] transition-colors">Francés</a>
                </li>
                <li>
                  <a href="#italian" onClick={(e) => handlePage(e, 'italian')} className="hover:text-[#111111] transition-colors">Italiano</a>
                </li>
              </ul>
            </div>

            {/* Columna 3: Programas */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-[#111111] tracking-tight">
                Programas
              </h4>
              <ul className="space-y-2.5 text-xs text-[#71717A]">
                <li>
                  <a href="#online" onClick={(e) => handlePage(e, 'online')} className="hover:text-[#111111] transition-colors">Modalidad Online</a>
                </li>
                <li>
                  <a href="#presencial" onClick={(e) => handlePage(e, 'presencial')} className="hover:text-[#111111] transition-colors">Modalidad Presencial</a>
                </li>
                <li>
                  <a href="#programas" onClick={(e) => handleScroll(e, '#programas')} className="hover:text-[#111111] transition-colors">EuroSelf</a>
                </li>
                <li>
                  <a href="#programas" onClick={(e) => handleScroll(e, '#programas')} className="hover:text-[#111111] transition-colors">EuroKids</a>
                </li>
                <li>
                  <a href="#asesoria" onClick={(e) => handlePage(e, 'asesoria')} className="hover:text-[#111111] transition-colors">Asesorías</a>
                </li>
              </ul>
            </div>

            {/* Columna 4: Conecta */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-[#111111] tracking-tight">
                Conecta
              </h4>
              <ul className="space-y-2.5 text-xs text-[#71717A]">
                <li>
                  <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#111111] transition-colors">Facebook</a>
                </li>
                <li>
                  <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#111111] transition-colors">Instagram</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#111111] transition-colors">LinkedIn</a>
                </li>
                <li>
                  <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#111111] transition-colors">YouTube</a>
                </li>
                <li>
                  <a href="https://wa.me/521" target="_blank" rel="noreferrer" className="hover:text-[#111111] transition-colors">WhatsApp</a>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* Franja Inferior de Copyright y Legales */}
      <div className="border-t border-[#E4E4E7]/60 bg-[#F4F4F5]/60 py-4 text-xs text-[#71717A]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-10">
          <p>© Copyright 2026 – Euro Centro de Idiomas.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#111111] transition-colors">
              Términos y Condiciones
            </a>
            <span>|</span>
            <a href="#" className="hover:text-[#111111] transition-colors">
              Aviso de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;