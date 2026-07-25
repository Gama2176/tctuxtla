import React, { useEffect } from 'react';
import { ArrowLeft, Clock, MessageCircle, PhoneCall, HelpCircle } from 'lucide-react';
import exampleImg from '../images/task.svg';

const Inscription = ({ onGoBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  return (
    <section id="inscription" className="bg-white py-4 text-[#111111] sm:py-8 lg:py-6 min-h-[70vh] flex items-center">
      <div className="mx-auto max-w-[1150px] w-full px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Columna Izquierda: Mensaje e Información */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Subtítulo / Badge */}
            <div className="inline-block px-2.5 py-0.5 bg-[#F4F4F5] rounded-md border border-[#E4E4E7]/60">
              <span className="text-[10px] font-semibold text-[#111111] inline-flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-[#1D35E1] animate-pulse" />
                Próximamente disponible
              </span>
            </div>

            {/* Título Principal */}
            <h1 className="text-2xl font-extrabold tracking-tight text-[#111111] sm:text-3xl lg:text-[34px] leading-tight">
              Estamos trabajando <span className="text-[#1D35E1]"> para ti</span>
            </h1>

            {/* Descripción */}
            <p className="text-xs sm:text-sm text-[#919191] font-normal leading-relaxed max-w-lg">
              Estamos optimizando nuestro portal de inscripciones en línea para brindarte una experiencia más rápida y sencilla. Mientras tanto, puedes solicitar tu registro asistido con nuestros asesores académicos.
            </p>

            {/* Botón Volver / Regresar */}
            <div className="pt-1">
              <button
                type="button"
                onClick={onGoBack || (() => window.history.back())}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[#E4E4E7]/70 bg-white text-xs font-semibold text-[#111111] shadow-2xs hover:bg-[#F4F4F5] transition-all active:scale-95 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#666666]" />
                <span>Volver al inicio</span>
              </button>
            </div>

            {/* Enlaces de Ayuda / Asistencia Directa */}
            <div className="border-t border-[#F4F4F5] pt-4 space-y-2">
              <p className="text-[11px] font-bold text-[#111111] uppercase tracking-wider">
                ¿Necesitas inscribirte hoy mismo?
              </p>
              <p className="text-[11px] text-[#919191]">
                Contáctanos directamente por cualquiera de nuestros canales de atención:
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] font-medium text-[#666666]">
                <a
                  href="https://wa.me/521"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 hover:text-[#1D35E1] transition-colors"
                >
                  <MessageCircle className="w-3 h-3 text-emerald-500" />
                  <span>WhatsApp Asesores</span>
                </a>

                <span className="text-[#E4E4E7]">•</span>

                <a
                  href="#preguntas"
                  className="flex items-center gap-1 hover:text-[#1D35E1] transition-colors"
                >
                  <HelpCircle className="w-3 h-3 text-amber-500" />
                  <span>Preguntas frecuentes</span>
                </a>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Imagen Ilustrativa */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[4/3] sm:aspect-square overflow-hidden rounded-2xl border border-[#E4E4E7]/70 shadow-2xs">
              <img
                src={exampleImg}
                alt="Estudiantes trabajando"
                className="w-full h-full transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Inscription;