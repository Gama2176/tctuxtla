import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Skeleton } from 'boneyard-js/react';

// Importación de imágenes
import pastores from '../images/pastores-tct.jpg';
import pastoresjovenes from '../images/pastores-jovenes-tct.jpg';
import pastoraalabanza from '../images/pastora-alabanza-tct.jpg';

const ProgramsSection = ({ onNavigateCourse }) => {
  const [programs, setPrograms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPrograms([
        {
          id: 'pastores-juveniles',
          badge: 'Pastores Juveniles',
          roleText: 'Ministerio Juvenil TCT',
          title: 'Arcelia Tercero y Fredy Castellanos',
          image: pastoresjovenes,
        },
        {
          id: 'arely-coyoc',
          badge: 'Directora de Alabanza',
          roleText: 'Ministerio de Adoración',
          title: 'Arely Coyoc',
          image: pastoraalabanza,
        },
      ]);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, []);

  const fallbackCards = (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="h-80 rounded-2xl bg-slate-200 animate-pulse" />
      <div className="h-80 rounded-2xl bg-slate-200 animate-pulse" />
      <div className="h-80 rounded-2xl bg-slate-200 animate-pulse" />
    </div>
  );

  return (
    <section id="pastores" className="bg-white py-6 text-[#111111] sm:py-14 lg:py-8">
      <div className="mx-auto max-w-[1150px] space-y-6 px-4 sm:px-8">
        
        {/* Encabezado */}
        <div className="space-y-1">
          <p className="text-xs font-bold text-[#111111] tracking-tight uppercase">
            NUESTRO LIDERAZGO
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            Conoce a nuestro equipo pastoral
          </h2>
          <p className="text-xs sm:text-sm text-[#919191] font-normal">
            Hombres y mujeres comprometidos con el servicio, la guía espiritual y la familia TCT.
          </p>
        </div>

        {/* Grid de 3 Tarjetas */}
        <Skeleton name="program-cards" loading={isLoading} fallback={fallbackCards}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            
            {/* ================= TARJETA 1: PASTORES PRINCIPALES ================= */}
            <div className="group relative overflow-hidden bg-slate-900 rounded-2xl p-6 sm:p-7 text-white flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 min-h-[360px]">
              
              {/* Imagen de fondo */}
              <img
                src={pastores} 
                alt="Patricia Pandolfo y Germán Picavea"
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Degradado para legibilidad */}
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

              <div className="relative z-10" />

              {/* Contenido inferior */}
              <div className="relative z-10 space-y-3 pt-8">
                
                {/* Badge Glassmorphism */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"> 
                  <span className="text-[10px] font-bold tracking-wider uppercase text-white/90">
                    Pastores Principales
                  </span>
                </div>

                {/* Información de los pastores */}
                <div>
                  <h3 className="text-lg sm:text-xl font-black leading-snug tracking-tight text-white drop-shadow-md">
                    Patricia Pandolfo <br className="hidden sm:block" />y Germán Picavea
                  </h3>
                  <p className="text-[11px] text-slate-300 mt-1 font-medium">
                    Liderazgo General & Cobertura Espiritual
                  </p>
                </div>

                {/* Botón */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onNavigateCourse && onNavigateCourse('german-pastor')}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-slate-900 rounded-xl text-xs font-extrabold hover:bg-slate-100 active:scale-95 transition-all shadow-md w-full sm:w-auto"
                  >
                    Conoce más acerca de ellos
                    <ChevronRight className="w-4 h-4 text-slate-700" />
                  </button>
                </div>

              </div>
            </div>

            {/* ================= TARJETAS 2 Y 3: EQUIPO PASTORAL ================= */}
            {programs.map((program) => (
              <div
                key={program.id}
                className="group relative overflow-hidden bg-slate-900 rounded-2xl p-6 sm:p-7 text-white flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 min-h-[360px]"
              >
                {/* Imagen de fondo */}
                <img
                  src={program.image}
                  alt={program.title}
                  className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Degradado para legibilidad */}
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                <div className="relative z-10" />

                {/* Contenido inferior */}
                <div className="relative z-10 space-y-3 pt-8">
                  
                  {/* Badge Glassmorphism */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-white/90">
                      {program.badge}
                    </span>
                  </div>

                  {/* Información */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-black leading-snug tracking-tight text-white drop-shadow-md">
                      {program.title}
                    </h3>
                    <p className="text-[11px] text-slate-300 mt-1 font-medium">
                      {program.roleText}
                    </p>
                  </div>

                  {/* Botón */}
                  <div className="pt-2">
                      <button
                      type="button"
                      onClick={() => onNavigateCourse && onNavigateCourse(program.id)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-slate-900 rounded-xl text-xs font-extrabold hover:bg-slate-100 active:scale-95 transition-all shadow-md w-full sm:w-auto"
                    >
                      Conoce más acerca de ellos
                      <ChevronRight className="w-4 h-4 text-slate-700" />
                    </button>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </Skeleton>

      </div>
    </section>
  );
};

export default ProgramsSection;