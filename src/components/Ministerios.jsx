import React from 'react';
import { ChevronRight } from 'lucide-react';

// Importación de banderas e imágenes
import us from '../images/icon-tct.svg';
import fr from '../images/icon-tct.svg';
import it from '../images/icon-tct.svg';

// Importación de imágenes corregidas (sintaxis camelCase)
import rutatct from '../images/ruta-tct.jpg';
import tctjovenes from '../images/tct-jovenes.jpg';
import tctkids from '../images/tct-kids.jpg';
import bautizostct from '../images/bautizos-tct.jpg';
import ofrendastct from '../images/ofrendas-tct.jpg';
const CoursesAndModalities = ({ onNavigateCourse }) => {
  const courses = [
    {
      id: 'ruta-tct',
      cardImage: rutatct,
      imageAlt: 'Ruta TCT',
      flagSrc: us,
      flagAlt: 'Crecimiento',
      title: 'Ruta TCT',
      level: 'TCT',
      description: 'Un proceso de discipulado y enseñanza por etapas diseñado para guiarte desde tus primeros pasos de fe hasta descubrir tus dones.',
    },
    {
      id: 'tct-jovenes',
      cardImage: tctjovenes,
      imageAlt: 'TCT Jóvenes',
      flagSrc: fr,
      flagAlt: 'TCT Jóvenes',
      title: 'TCT Jóvenes (JNI)',
      level: 'TCT',
      description: 'Una comunidad vibrante donde la juventud encuentra amistad sincera, alabanza apasionada y enseñanzas relevantes.',
    },
    {
      id: 'tct-kids',
      cardImage: tctkids,
      imageAlt: 'TCT Kids',
      flagSrc: it,
      flagAlt: 'TCT Kids',
      title: 'TCT Kids',
      level: 'TCT',
      description: 'Un ambiente seguro, divertido y creativo donde los más pequeños aprenden los principios de la Palabra de Dios a su medida.',
    },
  ];

  const modalities = [
    {
      id: 'bautizos',
      cardImage: bautizostct,
      imageAlt: 'Bautizos',
      title: 'Bautizos',
      description: 'Un momento especial de celebración y testimonio público donde declaras tu decisión de seguir a Jesús.',
    },
    {
      id: 'donaciones',
      cardImage: ofrendastct,
      imageAlt: 'Donaciones y Ofrendas',
      title: 'Donaciones y Ofrendas',
      description: 'Apoya la visión, la obra social y el crecimiento de la iglesia a través de tus diezmos y ofrendas voluntarias.',
    },
  ];

  return (
    <section id="ministerios" className="relative bg-white py-6 text-[#111111] sm:py-14 lg:py-8">
      <div className="mx-auto max-w-[1150px] space-y-12 px-4 sm:px-8">
        
        {/* ================= SECCIÓN 1: NUESTROS MINISTERIOS ================= */}
        <div className="space-y-6">
          <div className="space-y-1">
            <p className="text-xs font-bold text-[#111111] tracking-tight uppercase">
              NUESTROS MINISTERIOS
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
              Descubre el espacio perfecto para ti y tu familia
            </h2>
            <p className="text-xs sm:text-sm text-[#919191] font-normal">
              Encuentra un entorno diseñado para cada etapa de la vida, donde podrás aprender, conectar con otros y fortalecer tu fe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {courses.map((course) => (
              <div
                key={course.id}
                className="group relative overflow-hidden bg-slate-900 rounded-2xl p-6 text-white flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 min-h-[380px]"
              >
                {/* Imagen de Fondo Completa */}
                {course.cardImage && (
                  <img
                    src={course.cardImage}
                    alt={course.imageAlt || course.title}
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                )}

                {/* Sombra / Degradado para legibilidad del texto */}
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                {/* Encabezado de la Tarjeta (Bandera y Nivel) */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2 px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                    <img
                      src={course.flagSrc}
                      alt={course.flagAlt}
                      className="w-2 h-2.5 object-cover rounded-xs"
                    />
                    <span className="text-[10px] font-bold text-white tracking-wider">
                      {course.flagAlt}
                    </span>
                  </div>
                </div>

                {/* Pie de la Tarjeta (Texto y Botón) */}
                <div className="relative z-10 space-y-3 pt-6">
                  <div>
                    <h3 className="text-lg font-black text-white leading-snug drop-shadow-xs">
                      {course.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed mt-1 line-clamp-3">
                      {course.description}
                    </p>
                  </div>

                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => onNavigateCourse && onNavigateCourse(course.id)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-slate-900 rounded-xl text-xs font-bold hover:bg-slate-100 active:scale-95 transition-all shadow-xs cursor-pointer"
                    >
                      Más información
                      <ChevronRight className="w-3.5 h-3.5 text-slate-700" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECCIÓN 2: PASOS DE FE Y SERVICIO ================= */}
        <div className="space-y-6">
          <div className="space-y-1">
            <p className="text-xs font-bold text-[#111111] tracking-tight uppercase">
              PASOS DE FE Y SERVICIO
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
              Sé parte del impacto y la transformación
            </h2>
            <p className="text-xs sm:text-sm text-[#919191] font-normal">
              Participa en las actividades y programas que extienden el Reino de Dios dentro y fuera de nuestra comunidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {modalities.map((modality) => (
              <div
                key={modality.id}
                className="group relative overflow-hidden bg-slate-900 rounded-2xl p-6 text-white flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 min-h-[380px]"
              >
                {/* Imagen de Fondo Completa */}
                {modality.cardImage && (
                  <img
                    src={modality.cardImage}
                    alt={modality.imageAlt || modality.title}
                    className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                )}

                {/* Sombra / Degradado para legibilidad */}
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                {/* Encabezado de la Tarjeta (Icono y Nivel) */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                    <span className="text-[10px] font-bold text-white tracking-wider">
                      {modality.imageAlt}
                    </span>
                  </div>
                </div>

                {/* Pie de la Tarjeta (Texto y Botón) */}
                <div className="relative z-10 space-y-3 pt-6">
                  <div>
                    <h3 className="text-lg font-black text-white leading-snug drop-shadow-xs">
                      {modality.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed mt-1 line-clamp-3">
                      {modality.description}
                    </p>
                  </div>

                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => onNavigateCourse && onNavigateCourse(modality.id)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-slate-900 rounded-xl text-xs font-bold hover:bg-slate-100 active:scale-95 transition-all shadow-xs cursor-pointer"
                    >
                      Más información
                      <ChevronRight className="w-3.5 h-3.5 text-slate-700" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoursesAndModalities;