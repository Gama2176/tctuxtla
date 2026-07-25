import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';
import graduado from '../images/graduado.svg';
import satisfaccion from '../images/satisfaccion.svg';
import presyon from '../images/presyon.svg';

const WhereWeAreSection = () => {
  return (
    <section id="ubicacion" className="bg-white py-10 text-[#111111] sm:py-16">
      <div className="mx-auto max-w-[1150px] space-y-10 px-4 sm:px-8">
        
        {/* ================= ENCABEZADO CENTRADO ================= */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <span className="inline-block text-[11px] font-bold text-[#4fc1bd] uppercase tracking-wider bg-[#4fc1bd]/10 px-3 py-1 rounded-full">
            ¡Visítanos!
          </span>

          <h2 className="text-2xl font-extrabold tracking-tight text-[#111111] sm:text-3xl lg:text-[34px]">
            ¿Dónde estamos?
          </h2>

          <p className="text-xs sm:text-sm text-[#808080] font-normal leading-relaxed">
            Acompáñanos en nuestras instalaciones presenciales para vivir nuestras reuniones en comunidad o conéctate en vivo desde cualquier lugar a través de nuestras transmisiones.
          </p>

          {/* Botones de acción centrados */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <a
              href="#sedes"
              className="px-5 py-2.5 bg-[#4fc1bd] text-white rounded-xl text-xs font-bold hover:bg-[#43aba7] active:scale-95 transition-all shadow-xs inline-flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5" />
              Ver Ubicación
            </a>
            <a
              href="#contacto"
              className="px-5 py-2.5 bg-slate-50 border border-slate-200 text-[#111111] rounded-xl text-xs font-bold hover:bg-slate-100 active:scale-95 transition-all shadow-2xs inline-flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-slate-600" />
              Contactar
            </a>
          </div>
        </div>

        {/* ================= GRID BENTO / MOSAICO ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          
          {/* ----- COLUMNA 1 ----- */}
          <div className="space-y-5 flex flex-col justify-between">
            {/* Imagen Superior */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden h-60 border border-slate-100">
              <img
                src={graduado}
                alt="Comunidad TCT"
                loading="lazy"
                decoding="async"
                className="w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Estadística Inferior */}
            <div className="bg-slate-50/60 rounded-2xl p-6 border border-slate-100 hover:border-[#4fc1bd]/40 transition-colors space-y-1.5 flex-1 flex flex-col justify-center">
              <h3 className="text-3xl font-extrabold text-[#111111] tracking-tight">
                +2,000
              </h3>
              <p className="text-xs font-bold text-[#111111]">
                Vidas e Historias Impactadas
              </p>
              <p className="text-xs text-[#707070] font-normal leading-relaxed">
                Familias y personas acompañadas en su crecimiento espiritual y discipulado.
              </p>
            </div>
          </div>

          {/* ----- COLUMNA 2 ----- */}
          <div className="space-y-5 flex flex-col justify-between">
            {/* Estadística Superior */}
            <div className="bg-slate-50/60 rounded-2xl p-6 border border-slate-100 hover:border-[#4fc1bd]/40 transition-colors space-y-1.5 flex-1 flex flex-col justify-center">
              <h3 className="text-3xl font-extrabold text-[#4fc1bd] tracking-tight">
                100%
              </h3>
              <p className="text-xs font-bold text-[#111111]">
                Ambiente Familiar y Cálido
              </p>
              <p className="text-xs text-[#707070] font-normal leading-relaxed">
                Espacios seguros y preparados para niños, jóvenes y adultos en cada reunión.
              </p>
            </div>

            {/* Imagen Inferior */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden h-60 border border-slate-100">
              <img
                src={satisfaccion}
                alt="Reuniones TCT"
                loading="lazy"
                decoding="async"
                className="w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* ----- COLUMNA 3 ----- */}
          <div className="space-y-5 flex flex-col justify-between">
            {/* Imagen Superior */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden h-60 border border-slate-100">
              <img
                src={presyon}
                alt="Nuestras Instalaciones"
                loading="lazy"
                decoding="async"
                className="w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Estadística Inferior */}
            <div className="bg-slate-50/60 rounded-2xl p-6 border border-slate-100 hover:border-[#4fc1bd]/40 transition-colors space-y-1.5 flex-1 flex flex-col justify-center">
              <h3 className="text-2xl font-extrabold text-[#111111] tracking-tight">
                Presencial y Online
              </h3>
              <p className="text-xs font-bold text-[#111111]">
                Conexión Sin Fronteras
              </p>
              <p className="text-xs text-[#707070] font-normal leading-relaxed">
                Reuniones presenciales en nuestra sede y transmisiones en vivo para acompañarte estés donde estés.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhereWeAreSection;