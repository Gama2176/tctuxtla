import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Skeleton } from 'boneyard-js/react';
import euroSelfLogo from '../images/euroself.svg';
import kidsLogo from '../images/eurokids.svg';

// CORRECCIÓN AQUÍ: Se añade ({ onNavigateCourse }) en los props
const ProgramsSection = ({ onNavigateCourse }) => {
  const [programs, setPrograms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPrograms([
        {
          id: 'euroself',
          badge: 'Programa Autónomo',
          date: 'Flexible',
          title: 'EuroSelf: Aprende a tu propio ritmo',
          description:
            'Diseñado para quienes buscan flexibilidad total. Accede a contenidos interactivos, tutorías personalizadas y avanza según tus horarios.',
          image: euroSelfLogo,
        },
        {
          id: 'eurokids',
          badge: 'Programa Infantil',
          date: 'Niños de 6 a 12 años',
          title: 'EuroKids: Idiomas de forma divertida',
          description:
            'Una metodología 100% interactiva mediante juegos, canciones y dinámicas grupales para asegurar un aprendizaje natural y duradero.',
          image: kidsLogo,
          href: 'https://www.eurokidsidiomas.com/',
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
    <section id="programas" className="bg-white py-6 text-[#111111] sm:py-14 lg:py-8">
      <div className="mx-auto max-w-[1150px] space-y-6 px-4 sm:px-8">
        
        {/* Encabezado */}
        <div className="space-y-1">
          <p className="text-xs font-bold text-[#111111] tracking-tight uppercase">
            Programas especiales
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
            Descubre nuestros programas diseñados a tu medida
          </h2>
          <p className="text-xs sm:text-sm text-[#919191] font-normal">
            Opciones adaptadas a diferentes edades, necesidades y ritmos de aprendizaje.
          </p>
        </div>

        {/* Grid de 3 Tarjetas */}
        <Skeleton name="program-cards" loading={isLoading} fallback={fallbackCards}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            
            {/* ================= TARJETA 1: DESTACADA AZUL ================= */}
            <div className="bg-[#2547eb] rounded-2xl p-6 sm:p-7 text-white flex flex-col justify-between shadow-xs hover:shadow-sm transition-all duration-200">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-xs rounded-lg">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-white">
                    Programas Euro
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold leading-snug tracking-tight">
                  Elige la mejor opción para potenciar tus habilidades
                </h3>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  Nuestros programas están diseñados para brindar la máxima flexibilidad y eficacia pedagógica según tus objetivos personales.
                </p>
              </div>

              <div className="pt-6">
                <a
                  href="#cursos"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-[#2547eb] rounded-xl text-xs font-bold hover:bg-slate-100 transition-colors shadow-xs"
                >
                  Conocer todos
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* ================= TARJETAS 2 Y 3: EUROSELF Y EUROKIDS object-cover en img ================= */}
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-2xl border border-[#E4E4E7]/70 p-4 sm:p-5 flex flex-col justify-between hover:shadow-sm transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-medium text-[#71717A] mb-3">
                    <span className="font-semibold text-[#111111]">{program.badge}</span>
                    <span>• {program.date}</span>
                  </div>

                  <div className="mb-4 overflow-hidden rounded-xl h-36 sm:h-40">
                    <img
                      src={program.image}
                      alt={program.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full"
                    />
                  </div>

                  <h3 className="text-base font-bold text-[#111111] mb-2 leading-snug tracking-tight">
                    {program.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-[#919191] leading-relaxed mb-4">
                    {program.description}
                  </p>
                </div>

                {/* CORRECCIÓN EN EL BOTÓN: Maneja enlaces externos (EuroKids) o la navegación (EuroSelf) */}
                {program.href ? (
                  <a
                    href={program.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1D35E1] hover:underline cursor-pointer transition-colors w-fit"
                  >
                    Más información
                    <ChevronRight className="w-3 h-3" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => onNavigateCourse && onNavigateCourse(program.id)}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1D35E1] hover:underline cursor-pointer transition-colors w-fit"
                  >
                    Más información
                    <ChevronRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            ))}

          </div>
        </Skeleton>

      </div>
    </section>
  );
};

export default ProgramsSection;