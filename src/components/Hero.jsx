import React, { useState } from 'react';
import { Calendar, Clock, Sun, Moon, Heart, Sparkles, Users } from 'lucide-react';
import iconTct from '../images/icon-tct.svg';
import EnrollmentModal from './EnrollmentModal';

const Hero = ({ onNavigate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const schedules = [
    { time: '11:30 am', label: 'Culto Matutino', day: 'Domingo', icon: Sun },
    { time: '07:00 pm', label: 'Culto Vespertino', day: 'Domingo', icon: Moon },
    { time: '07:30 pm', label: 'Miércoles de oración', day: 'Miércoles', icon: Heart },
    { time: '07:30 pm', label: 'Celebremos la recuperación', day: 'Viernes', icon: Sparkles },
    { time: '06:30 pm', label: 'Jóvenes (JNI)', day: 'Sábado', icon: Users },
  ];

  return (
    <section id="inicio" className="relative overflow-hidden bg-white pb-6 pt-20 text-slate-900 sm:pb-12 sm:pt-12 lg:pb-6 lg:pt-30">
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-floating-slow {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:px-10">
        
        {/* Columna Izquierda */}
        <div className="lg:col-span-7 space-y-4">
          <p className="text-sm font-normal text-[#9E9E9E]">
            TCT
          </p>
          
          <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-[#111111] sm:text-4xl lg:text-[40px]">
            <span className="text-[#4fc1bd]"> Templo Cristiano de Tuxtla</span><br className="hidden sm:inline" /> tu casa, tu comunidad
          </h1>
          
          <p className="text-xs text-[#919191] font-normal leading-relaxed max-w-2xl">
            Guiamos a cada persona hacia una relación más profunda con Dios. Descubre nuestros servicios semanales, actividades y ministerios presenciales o en línea
          </p>
          
          {/* Botones de Acción */}
          <div className="flex flex-col gap-2.5 pt-2 sm:flex-row sm:flex-wrap sm:gap-3">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#4fc1bd] text-white rounded-xl font-bold text-xs hover:bg-[#3db0ac] transition shadow-sm active:scale-95 cursor-pointer text-center"
            >
              Inscribirme a ruta TCT
            </button>
            
            <div className="grid grid-cols-2 gap-2 sm:flex sm:gap-3">
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('ruta-tct')}
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 bg-[#F4F4F4] text-[#222222] rounded-xl font-medium text-xs hover:bg-[#EAEAEA] transition active:scale-95 cursor-pointer text-center"
              >
                Ruta TCT
              </button>
              <button
                type="button"
                onClick={() => onNavigate && onNavigate('transmisiones')}
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 bg-[#F4F4F4] text-[#222222] rounded-xl font-medium text-xs hover:bg-[#EAEAEA] transition active:scale-95 cursor-pointer text-center"
              >
                Transmisiones en vivo
              </button>
            </div>
          </div>

          {/* ================= VISTA MÓVIL (sm:hidden) ================= */}
          <div className="block sm:hidden pt-6">
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#4fc1bd]" /> Horarios de Reunión
              </span>
              <span className="text-[10px] bg-[#4fc1bd]/10 text-[#4fc1bd] font-semibold px-2 py-0.5 rounded-full">
                Presencial / Online
              </span>
            </div>

            <div className="space-y-2">
              {schedules.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-slate-50/90 border border-slate-100 rounded-xl active:bg-slate-100/80 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-lg text-[#4fc1bd] shadow-2xs border border-slate-100">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#111111] leading-tight">
                          {item.label}
                        </h4>
                        <span className="text-[10px] text-[#808080] font-medium block mt-0.5">
                          {item.day}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="inline-flex items-center gap-1 text-xs font-extrabold text-[#111111] bg-white px-2.5 py-1 rounded-lg border border-slate-200/60 shadow-2xs">
                        <Clock className="w-3 h-3 text-[#4fc1bd]" />
                        {item.time}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= VISTA DESKTOP (hidden sm:block) ================= */}
          <div className="hidden sm:block pt-6 w-full">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
              Horarios de Reunión
            </p>

            <div className="grid grid-cols-5 gap-2.5 w-full py-1">
              {schedules.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-50/80 border border-slate-100 rounded-2xl p-3 shadow-xs hover:shadow-md hover:border-[#4fc1bd]/40 transition-all duration-200 cursor-default flex flex-col justify-between"
                >
                  <div>
                    <span className="block text-[9px] font-bold text-[#4fc1bd] uppercase tracking-wide">
                      {item.day}
                    </span>
                    <span className="block text-sm lg:text-base font-extrabold text-[#111111] leading-snug mt-0.5">
                      {item.time}
                    </span>
                  </div>
                  <span className="block text-[10px] text-[#808080] font-medium leading-tight mt-2 line-clamp-2">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Columna Derecha: Exclusiva para Desktop con SVG Flotante en Tamaño Adecuado */}
        <div className="hidden lg:col-span-5 lg:flex items-center justify-center p-4">
          <div className="relative flex items-center justify-center w-full max-w-[180px] animate-floating-slow">
            <img 
              src={iconTct} 
              alt="Logo TCT" 
              className="w-full h-auto object-contain select-none drop-shadow-xs"
            />
          </div>
        </div>

      </div>

      {/* Modal de Inscripción */}
      <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </section>
  );
};

export default Hero;