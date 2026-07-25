import React from 'react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import graduado from '../images/graduado.svg';
import satisfaccion from '../images/satisfaccion.svg';
import presyon from '../images/presyon.svg';

const WhereWeAreSection = () => {
  return (
    <section id="ubicacion" className="bg-white py-6 text-[#111111] sm:py-8 lg:py-5">
      <div className="mx-auto max-w-[1150px] space-y-8 px-4 sm:px-8">
        
        {/* ================= ENCABEZADO CENTRADO ================= */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
            <p className="text-[11px] font-bold text-[#111111] uppercase tracking-wider">
              Vísitanos
            </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            ¿Dónde estamos?
          </h2>
          <p className="text-xs sm:text-sm text-[#71717A] leading-relaxed">
            Encuéntranos en nuestras planteles presenciales equipados con la mejor tecnología o conéctate desde cualquier lugar a través de nuestra plataforma digital.
          </p>

          {/* Botones de acción centrados */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <a
              href="#sedes"
              className="px-5 py-2.5 bg-[#2547eb] text-white rounded-xl text-xs font-semibold hover:bg-[#1d3bc4] transition-colors shadow-xs inline-flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5" />
              Ver Sedes
            </a>
            <a
              href="#contacto"
              className="px-5 py-2.5 bg-white border border-[#E4E4E7] text-[#111111] rounded-xl text-xs font-semibold hover:bg-[#FAFAFA] transition-colors shadow-2xs"
            >
              Agendar Visita
            </a>
          </div>
        </div>

        {/* ================= GRID BENTO / MOSAICO (Replicado) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* ----- COLUMNA 1 ----- */}
          <div className="space-y-5 flex flex-col justify-between">
            {/* Imagen Superior */}
            <div className="bg-[#F4F4F5] rounded-2xl overflow-hidden h-64 border border-[#E4E4E7]/60">
              <img
                src={graduado}
                alt="Instalaciones Euro Centro de Idiomas"
                className="w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Estadística Inferior */}
            <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-[#E4E4E7]/80 space-y-2">
              <h3 className="text-3xl font-extrabold text-[#111111] tracking-tight">
                +15,000
              </h3>
              <p className="text-xs font-bold text-[#111111]">
                Alumnos Graduados
              </p>
              <p className="text-[11px] sm:text-xs text-[#71717A] leading-relaxed">
                Estudiantes capacitados con certificaciones internacionales oficiales en todo el país.
              </p>
            </div>
          </div>

          {/* ----- COLUMNA 2 ----- */}
          <div className="space-y-5 flex flex-col justify-between">
            {/* Estadística Superior */}
            <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-[#E4E4E7]/80 space-y-2">
              <h3 className="text-3xl font-extrabold text-[#111111] tracking-tight">
                98%
              </h3>
              <p className="text-xs font-bold text-[#111111]">
                Satisfacción Académica
              </p>
              <p className="text-[11px] sm:text-xs text-[#71717A] leading-relaxed">
                Nuestros alumnos respaldan la metodología conversacional y el nivel de nuestros docentes.
              </p>
            </div>

            {/* Imagen Inferior */}
            <div className="bg-[#F4F4F5] rounded-2xl overflow-hidden h-64 border border-[#E4E4E7]/60">
              <img
                src={satisfaccion}
                alt="Aulas equipadas"
                className="w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* ----- COLUMNA 3 ----- */}
          <div className="space-y-5 flex flex-col justify-between">
            {/* Imagen Superior Grande */}
            <div className="bg-[#F4F4F5] rounded-2xl overflow-hidden h-64 border border-[#E4E4E7]/60">
              <img
                src={presyon}
                alt="Campus e infraestructura"
                className="w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Estadística Inferior */}
            <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-[#E4E4E7]/80 space-y-2">
              <h3 className="text-3xl font-extrabold text-[#111111] tracking-tight">
                100%
              </h3>
              <p className="text-xs font-bold text-[#111111]">
                Cobertura Presencial y Online
              </p>
              <p className="text-[11px] sm:text-xs text-[#71717A] leading-relaxed">
                Aulas físicamente ubicadas en puntos estratégicos y clases en vivo en todo el mundo.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhereWeAreSection;