import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronDown, 
  Menu,
  X,
  BookOpen, 
  HelpCircle, 
  ArrowUpRight, 
  MapPin, 
  Radio,
  Calendar,
  Clock
} from 'lucide-react';

// Imports de imágenes
import slide1 from '../images/campamentotct.jpg';
import slide2 from '../images/pastores-tct.jpg';
import slide3 from '../images/mision-tct.jpg';
import slide4 from '../images/contacto-tct.jpg';
import logoImage from '../images/logo-tct.svg'; 

function CarouselArea({ slides = [], onSlideClick, open, onNavigate }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!open) return undefined;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, [open, slides.length]);

  if (!slides || slides.length === 0) return null;

  return (
    <div className="relative w-full h-[280px] rounded-2xl overflow-hidden shadow-sm group/carousel cursor-pointer">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === index && open ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
          }`}
          onClick={() => open && onSlideClick && onSlideClick(s)}
        >
          {/* Imagen de Fondo con efecto de zoom suave */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover/carousel:scale-105"
            style={{ backgroundImage: `url(${s.img})` }}
          />

          {/* Sombra/Gradiente para legibilidad del texto */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-black/30" />

          {/* Encabezado del Slide */}
          <div className="relative z-10 flex justify-between items-start p-5">
            <span className="inline-block bg-[#4FC1BD] text-white text-[10px] font-extrabold tracking-wider uppercase px-3 py-1 rounded-full shadow-sm">
              {s.tag}
            </span>
            <div
              className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-slate-950 cursor-pointer"
              onClick={(e) => { 
                e.stopPropagation(); 
                if (open && onNavigate) onNavigate('#ministerios'); 
              }}
              title="Ver más avisos"
            >
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Contenido Inferior */}
          <div className="absolute bottom-0 inset-x-0 z-10 p-5 flex items-end justify-between gap-4 bg-gradient-to-t from-black/80 to-transparent">
            <div className="pr-12">
              <h3 className="text-xl font-extrabold text-white leading-tight tracking-tight drop-shadow-sm">
                {s.title}
              </h3>
              <p className="text-xs text-slate-200 font-medium mt-1 line-clamp-1">
                {s.subtitle}
              </p>
            </div>
            
            <div className="text-right shrink-0">
              <span className="inline-block px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-md text-xs font-bold text-[#4FC1BD] border border-white/10">
                {s.time}
              </span>
            </div>
          </div>
        </div>
      ))}

      {/* Indicadores de Puntos (Dots) */}
      <div className={`absolute left-5 bottom-3 flex gap-1.5 z-20 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={(e) => { 
              e.stopPropagation(); 
              if (open) setIndex(i); 
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-[#4FC1BD]' : 'w-1.5 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Ir al aviso ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const Navbar = ({ onNavigate, currentView = 'home' }) => {
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);
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

  const desktopMainLinks = navLinks.slice(0, 5);

  const noticesList = [
    { 
      img: slide1, 
      tag: 'TCT Kids', 
      title: 'Campamento infantil TCT 2026', 
      subtitle: 'Información detallada en la iglesia', 
      time: 'Del 6 al 8 de agosto', 
      details: 'Más información sobre nuestro campamento infantil en la iglesia, pregunta acerca de las actividades recreativas, enseñanza bíblica y momentos de adoración para los niños de nuestra comunidad.' 
    },
    { 
      img: slide2, 
      tag: 'Aviso Semanal', 
      title: 'Servicio Dominical Dominical', 
      subtitle: 'Auditorio principal', 
      time: 'Domingo • 11:30 am', 
      details: 'Acompáñanos a celebrar juntos nuestro servicio dominical. Tendremos tiempo de alabanza congregacional, oración por las familias y la predicación de la Palabra.' 
    },
    { 
      img: slide3, 
      tag: 'Misión', 
      title: 'Salida Misionera Local', 
      subtitle: 'Proyecto Comunitario', 
      time: 'Próximo mes', 
      details: 'Únete a nuestro equipo de impacto social e itinerante. Estaremos llevando ayuda alimentaria y apoyo espiritual a las zonas más vulnerables de nuestra ciudad.' 
    },
    { 
      img: slide4, 
      tag: 'Contacto & Apoyo', 
      title: 'Jornada de Servicio y Oración', 
      subtitle: 'Centro social TCT', 
      time: 'Viernes • 5:00 pm', 
      details: 'Un espacio dedicado para atender peticiones de oración, consejería familiar y entrega de donaciones recibidas durante la semana.' 
    },
  ];

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

          {/* NAV LINKS - DESKTOP */}
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
                className={`absolute left-1/2 -translate-x-1/2 mt-4 w-[840px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 grid grid-cols-12 gap-6 transition-all duration-300 transform origin-top ${
                  desktopMenuOpen 
                    ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' 
                    : 'opacity-0 scale-95 pointer-events-none -translate-y-2'
                }`}
              >
                {/* Opciones de la Izquierda */}
                <div className="col-span-5 flex flex-col justify-center space-y-1.5 border-r border-slate-100 pr-4">
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 px-3 mb-1">
                    Secciones rápidas
                  </p>
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

                {/* Área de Avisos Destacados / Carrusel */}
                <div className="col-span-7 flex flex-col justify-center">
                  <CarouselArea
                    slides={noticesList}
                    onSlideClick={(slide) => setSelectedNotice(slide)}
                    open={desktopMenuOpen}
                    onNavigate={handleNavClick}
                  />
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

      {/* MODAL DETALLES DEL AVISO */}
      {selectedNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          {/* Fondo oscuro traslúcido */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity" 
            onClick={() => setSelectedNotice(null)} 
          />
          
          {/* Contenedor Principal del Modal */}
          <div className="relative z-10 w-full max-w-lg rounded-3xl bg-white shadow-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[90vh]">
            
            {/* Imagen Superior del Modal */}
            <div className="relative h-48 sm:h-56 w-full shrink-0">
              <img 
                src={selectedNotice.img} 
                alt={selectedNotice.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <button 
                type="button"
                onClick={() => setSelectedNotice(null)} 
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 text-white backdrop-blur-md flex items-center justify-center hover:bg-black transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <span className="absolute bottom-4 left-4 inline-block bg-[#4FC1BD] text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                {selectedNotice.tag}
              </span>
            </div>

            {/* Contenido del Modal */}
            <div className="p-6 overflow-y-auto space-y-4">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
                  {selectedNotice.title}
                </h3>
                <div className="flex flex-wrap gap-4 mt-2 text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#4FC1BD]" />
                    {selectedNotice.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#4FC1BD]" />
                    {selectedNotice.subtitle}
                  </span>
                </div>
              </div>

              <hr className="border-slate-100" />

              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedNotice.details}
              </p>
            </div>

            {/* Footer del Modal con Botón de Cierre */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
              <button 
                type="button"
                onClick={() => setSelectedNotice(null)} 
                className="px-5 py-2.5 rounded-xl bg-[#4FC1BD] text-white text-xs font-bold hover:bg-[#3db0ac] transition shadow-xs cursor-pointer"
              >
                Entendido / Cerrar
              </button>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;