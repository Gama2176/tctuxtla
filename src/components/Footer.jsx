import React from 'react';
import logo from '../images/logo-tct.svg';

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
    <footer className="border-t border-slate-100 bg-white text-[#111111]">
      {/* Sección Principal del Footer */}
      <div className="mx-auto max-w-[1250px] px-4 py-12 sm:px-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Columna Izquierda: Logo + Descripción + Badge Operativo (5 columnas) */}
          <div className="lg:col-span-5 space-y-5 pr-0 lg:pr-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Templo Cristiano de Tuxtla - TCT"
                loading="lazy"
                decoding="async"
                className="h-7 w-auto object-contain sm:h-8"
              />
            </div>

            {/* Texto Descriptivo */}
            <p className="text-xs text-[#808080] leading-relaxed max-w-sm">
              Una comunidad cristiana enfocada en proclamar el Evangelio, formar discípulos y fortalecer la fe de las familias en Tuxtla y sus alrededores.
            </p>

            {/* Badge Status (Punto Turquesa Operativo) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4fc1bd]/10 border border-[#4fc1bd]/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4fc1bd] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4fc1bd]"></span>
              </span>
              <span className="text-[11px] font-bold text-slate-800">
                Templo Cristiano de Tuxtla
              </span>
            </div>
          </div>

          {/* Columnas de Enlaces (7 columnas divididas en 4 secciones) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Columna 1: Iglesia */}
            <div className="space-y-3.5">
              <h4 className="text-xs font-extrabold text-[#111111] uppercase tracking-wider">
                Iglesia
              </h4>
              <ul className="space-y-2.5 text-xs text-[#808080] font-medium">
                <li>
                  <a href="#inicio" onClick={(e) => handleScroll(e, '#inicio')} className="hover:text-[#4fc1bd] transition-colors">Inicio</a>
                </li>
                <li>
                  <a href="#nosotros" onClick={(e) => handleScroll(e, '#nosotros')} className="hover:text-[#4fc1bd] transition-colors">Nosotros</a>
                </li>
                <li>
                  <a href="#metodologia" onClick={(e) => handleScroll(e, '#metodologia')} className="hover:text-[#4fc1bd] transition-colors">Nuestros Valores</a>
                </li>
                <li>
                  <a href="#cursos" onClick={(e) => handleScroll(e, '#cursos')} className="hover:text-[#4fc1bd] transition-colors">Ministerios</a>
                </li>
                <li>
                  <a href="#programas" onClick={(e) => handleScroll(e, '#programas')} className="hover:text-[#4fc1bd] transition-colors">Programas</a>
                </li>
                <li>
                  <a href="#ubicacion" onClick={(e) => handleScroll(e, '#ubicacion')} className="hover:text-[#4fc1bd] transition-colors">Ubicación</a>
                </li>
              </ul>
            </div>

            {/* Columna 2: Ministerios */}
            <div className="space-y-3.5">
              <h4 className="text-xs font-extrabold text-[#111111] uppercase tracking-wider">
                Ministerios
              </h4>
              <ul className="space-y-2.5 text-xs text-[#808080] font-medium">
                <li>
                  <a href="#ruta-tct" onClick={(e) => handlePage(e, 'ruta-tct')} className="hover:text-[#4fc1bd] transition-colors">Ruta TCT</a>
                </li>
                <li>
                  <a href="#tct-jovenes" onClick={(e) => handlePage(e, 'tct-jovenes')} className="hover:text-[#4fc1bd] transition-colors">TCT Jóvenes</a>
                </li>
                <li>
                  <a href="#tct-kids" onClick={(e) => handlePage(e, 'tct-kids')} className="hover:text-[#4fc1bd] transition-colors">TCT Kids</a>
                </li>
              </ul>
            </div>

            {/* Columna 3: Pasos de Fe */}
            <div className="space-y-3.5">
              <h4 className="text-xs font-extrabold text-[#111111] uppercase tracking-wider">
                Pasos de Fe
              </h4>
              <ul className="space-y-2.5 text-xs text-[#808080] font-medium">
                <li>
                  <a href="#bautizos" onClick={(e) => handlePage(e, 'bautizos')} className="hover:text-[#4fc1bd] transition-colors">Bautizos</a>
                </li>
                <li>
                  <a href="#donaciones" onClick={(e) => handlePage(e, 'donaciones')} className="hover:text-[#4fc1bd] transition-colors">Donaciones</a>
                </li>
                <li>
                  <a href="#misiones-mni" onClick={(e) => handlePage(e, 'misiones-mni')} className="hover:text-[#4fc1bd] transition-colors">Misiones (MNI)</a>
                </li>
                <li>
                  <a href="#programas" onClick={(e) => handleScroll(e, '#programas')} className="hover:text-[#4fc1bd] transition-colors">Servicio</a>
                </li>
                <li>
                  <a href="#misiones-mni" onClick={(e) => handlePage(e, 'misiones-mni')} className="hover:text-[#4fc1bd] transition-colors">Misiones (MNI)</a>
                </li>
              </ul>
            </div>

            {/* Columna 4: Conecta */}
            <div className="space-y-3.5">
              <h4 className="text-xs font-extrabold text-[#111111] uppercase tracking-wider">
                Conecta
              </h4>
              <ul className="space-y-2.5 text-xs text-[#808080] font-medium">
                <li>
                  <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#4fc1bd] transition-colors">Facebook</a>
                </li>
                <li>
                  <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#4fc1bd] transition-colors">Instagram</a>
                </li>
                <li>
                  <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#4fc1bd] transition-colors">YouTube</a>
                </li>
                <li>
                  <a href="https://wa.me/521" target="_blank" rel="noreferrer" className="hover:text-[#4fc1bd] transition-colors">WhatsApp</a>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* Franja Inferior de Copyright y Legales */}
      <div className="border-t border-slate-100 bg-slate-50/60 py-4 text-xs text-[#808080]">
        <div className="mx-auto flex max-w-[1250px] flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-8">
          <p className="font-medium">© Copyright 2026 – Templo Cristiano de Tuxtla (TCT).</p>
          <div className="flex items-center gap-4 font-medium">
            <a href="#" className="hover:text-[#4fc1bd] transition-colors">
              Términos de Uso
            </a>
            <span className="text-slate-300">|</span>
            <a href="#" className="hover:text-[#4fc1bd] transition-colors">
              Aviso de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;