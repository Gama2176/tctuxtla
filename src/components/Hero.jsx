import React, { useState } from 'react';
import { Star, ArrowRight } from 'lucide-react';
import teacher1 from '../images/teacher1.png';
import teacher2 from '../images/teacher2.png';
import teacher3 from '../images/teacher1.png';
import sepLogo from '../images/sep-logo.svg';
import richmondLogo from '../images/richmond-logo.svg';
import edEnglishLogo from '../images/ed-logo.svg';
import toeicLogo from '../images/toeic-logo.svg';
import conniLogo from '../images/cenni-logo.svg';
import cognoLogo from '../images/cogno.svg';
import aulavLogo from '../images/aulav.svg';
import youtubeLogo from '../images/youtube.svg';
import zoomLogo from '../images/zoom.svg';
import starIcon from '../images/star.svg';
import EnrollmentModal from './EnrollmentModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teacherAvatars = [
    { src: teacher1, alt: 'Docente 1' },
    { src: teacher2, alt: 'Docente 2' },
    { src: teacher3, alt: 'Docente 3' },
  ];

  const partnerLogos = [
    { src: sepLogo, alt: 'SEP' },
    { src: richmondLogo, alt: 'Richmond' },
    { src: edEnglishLogo, alt: 'ED English Discoveries' },
    { src: toeicLogo, alt: 'TOEIC' },
    { src: conniLogo, alt: 'CONNI' },
  ];

  return (
    <section id="inicio" className="relative overflow-hidden bg-white pb-6 pt-20 text-slate-900 sm:pb-12 sm:pt-12 lg:pb-6 lg:pt-30">
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(2deg);
          }
        }
        .animate-floating {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:px-10">
        
        {/* Columna Izquierda */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-sm font-normal text-[#9E9E9E]">
            Templo Cristiano de Tuxtla
          </p>
          
          <h1 className="text-2xl font-extrabold leading-[1.15] tracking-tight text-[#111111] sm:text-4xl lg:text-[40px]">
            Bienvenido al<span className="text-[#1D35E1]"> Templo Cristiano de Tuxtla</span><br className="hidden sm:inline" /> tu casa, tu comunidad
          </h1>
          
          <p className="text-xs text-[#919191] font-normal leading-relaxed max-w-2xl">
            Guiamos a cada persona hacia una relación más profunda con Dios. Descubre nuestros servicios semanales, actividades y ministerios presenciales o en línea
          </p>
          
          {/* Botones de Acción */}
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2.5 bg-white border border-[#DCDCDC] text-[#222222] rounded-xl font-medium text-xs hover:bg-slate-50 transition shadow-2xs active:scale-95 cursor-pointer"
            >
              Inscribirme a ruta TCT
            </button>
            <a
              href="#cursos"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#F4F4F4] text-[#222222] rounded-xl font-medium text-xs hover:bg-[#EAEAEA] transition active:scale-95 cursor-pointer"
            >
            Ruta TCT
            </a>
            <a
              href="#metodologia"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#F4F4F4] text-[#222222] rounded-xl font-medium text-xs hover:bg-[#EAEAEA] transition active:scale-95 cursor-pointer"
            >
              Equipo pastoral
            </a>
          </div>

          {/* Métricas y Prueba Social - Optimizado para móviles */}
            <div className="grid grid-cols-3 gap-y-5 gap-x-3 pt-6 sm:flex sm:flex-wrap sm:items-center sm:gap-8 lg:gap-10 ">
              
              {/* Avatares */}
              <div className="flex items-center gap-2 hidden lg:flex">
                <div className="flex -space-x-2">
                  {teacherAvatars.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar.src}
                      alt={avatar.alt}
                      loading="lazy"
                      decoding="async"
                      className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white object-cover"
                    />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#111111]">+20</span>
              </div>

              {/* SEP */}
              <div className="text-center sm:text-left">
                <span className="block text-sm sm:text-base font-bold text-[#111111] leading-tight">SEP</span>
                <span className="block text-[9px] sm:text-[10px] text-[#A0A0A0] uppercase font-medium tracking-wider">
                  Certificación
                </span>
              </div>
              
              {/* Valoración */}
              <div className="text-center sm:text-left">
                <span className="block text-sm sm:text-base font-bold text-[#111111] leading-tight">4.9★</span>
                <span className="block text-[9px] sm:text-[10px] text-[#A0A0A0] uppercase font-medium tracking-wider">
                  Valoración
                </span>
              </div>
              
              {/* Docentes */}
              <div className="text-center sm:text-left">
                <span className="block text-sm sm:text-base font-bold text-[#111111] leading-tight">20+</span>
                <span className="block text-[9px] sm:text-[10px] text-[#A0A0A0] uppercase font-medium tracking-wider">
                  Docentes
                </span>
              </div>
            </div>
        </div>

        {/* Columna Derecha con Ondas e Íconos Flotantes */}
        <div className="lg:col-span-5 flex items-center justify-center p-2 hidden lg:flex">
          <div className="relative flex aspect-square w-full max-w-[300px] items-center justify-center sm:max-w-[380px]">
            <div className="absolute inset-0 bg-slate-200/50 rounded-full animate-ping opacity-10 scale-120 duration-1000"></div>
            <div className="absolute inset-6 bg-slate-100/60 rounded-full animate-pulse opacity-30"></div>

            <div className="absolute inset-0 bg-[#F9F9F9] rounded-full border border-[#F0F0F0]"></div>
            <div className="absolute inset-8 bg-[#F2F2F2]/80 rounded-full border border-[#E6E6E6]"></div>
            <div className="absolute inset-16 bg-[#EBEBEB]/80 rounded-full border border-[#DCDCDC]"></div>
            <div className="absolute inset-24 bg-[#E0E0E0]/60 rounded-full border border-[#D0D0D0]"></div>

            <div className="absolute inset-0 flex items-center justify-center z-10">
              <img src={starIcon} alt="Star" className="h-7 w-7" />
            </div>

            <div 
              className="absolute top-[18%] left-[14%] z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white p-2 shadow-md ring-1 ring-slate-100 transition hover:scale-110 cursor-pointer animate-floating"
              style={{ animationDuration: '3.8s', animationDelay: '0s' }}
            >
              <img src={cognoLogo} alt="Cogno" className="h-5 w-5 object-contain" />
            </div>

            <div 
              className="absolute top-[10%] right-[22%] z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white p-2 shadow-md ring-1 ring-slate-100 transition hover:scale-110 cursor-pointer animate-floating"
              style={{ animationDuration: '4.2s', animationDelay: '0.8s' }}
            >
              <img src={youtubeLogo} alt="Youtube" className="h-5 w-5 object-contain" />
            </div>

            <div 
              className="absolute bottom-[18%] left-[26%] z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white p-2 shadow-md ring-1 ring-slate-100 transition hover:scale-110 cursor-pointer animate-floating"
              style={{ animationDuration: '3.5s', animationDelay: '1.4s' }}
            >
              <img src={zoomLogo} alt="Zoom" className="h-5 w-5 object-contain" />
            </div>

            <div 
              className="absolute top-[48%] right-[20%] z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white p-2 shadow-md ring-1 ring-slate-100 transition hover:scale-110 cursor-pointer animate-floating"
              style={{ animationDuration: '4.5s', animationDelay: '0.4s' }}
            >
              <img src={aulavLogo} alt="Aulav" className="h-5 w-5 object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Franja de Logos */}
      <div className="mt-10 border-t border-b border-gray-100 bg-white sm:mt-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 overflow-x-auto px-4 py-8 sm:px-6 lg:px-10">
          {partnerLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              decoding="async"
              className="h-6 shrink-0 object-contain"
            />
          ))}
        </div>
      </div>

      {/* ================= MODAL DE INSCRIPCIÓN REUTILIZABLE ================= */}
      <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </section>
  );
};

export default Hero;