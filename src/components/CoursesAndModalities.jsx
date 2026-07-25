import React from 'react';
import { ChevronRight, Laptop, Building2, GraduationCap } from 'lucide-react';

// Importación de banderas e imágenes
import us from '../images/us.png';
import fr from '../images/fr.png';
import it from '../images/it.png';

// Import de ejemplo para las imágenes de los cards
import ejemploImg from '../images/ejemplo.png';

const CoursesAndModalities = ({ onNavigateCourse }) => {
  const courses = [
    {
      id: 'english',
      cardImage: ejemploImg, // Usamos la imagen importada
      imageAlt: 'Ruta TCT',
      flagSrc: us,
      flagAlt: 'Crecimiento',
      title: 'Ruta TCT',
      level: 'TCT',
      description: 'Un proceso de discipulado y enseñanza por etapas diseñado para guiarte desde tus primeros pasos de fe hasta descubrir tus dones y servir con propósito.',
    },
    {
      id: 'french',
      cardImage: ejemploImg,
      imageAlt: 'TCT Jóvenes',
      flagSrc: fr,
      flagAlt: 'TCT Jóvenes',
      title: 'TCT Jóvenes (JNI)',
      level: 'TCT',
      description: 'Una comunidad vibrante donde la juventud encuentra amistad sincera, alabanza apasionada y enseñanzas relevantes para impactar su entorno.',
    },
    {
      id: 'italian',
      cardImage: ejemploImg,
      imageAlt: 'TCT Kids',
      flagSrc: it,
      flagAlt: 'TCT Kids',
      title: 'TCT Kids',
      level: 'TCT',
      description: 'Un ambiente seguro, divertido y creativo donde los más pequeños aprenden los principios de la Palabra de Dios a través de clases y actividades hechas a su medida.',
    },
  ];

  const modalities = [
    {
      id: 'online',
      cardImage: ejemploImg,
      imageAlt: 'Bautizos',
      icon: <Laptop className="w-4 h-4 text-[#111111]" />,
      title: 'Bautizos',
      level: 'TCT',
      description: 'Un momento especial de celebración y testimonio público donde declaras tu decisión de seguir a Jesús y comenzar una nueva vida en Él.',
    },
    {
      id: 'presencial',
      cardImage: ejemploImg,
      imageAlt: 'Donaciones y Ofrendas',
      icon: <Building2 className="w-4 h-4 text-[#111111]" />,
      title: 'Donaciones y Ofrendas',
      level: 'TCT',
      description: 'Apoya la visión, la obra social y el crecimiento de la iglesia a través de tus diezmos y ofrendas voluntarias de forma fácil y segura.',
    },
    {
      id: 'asesoria',
      cardImage: ejemploImg,
      imageAlt: 'MNI',
      icon: <GraduationCap className="w-4 h-4 text-[#111111]" />,
      title: 'MNI (Misioneros Nazarenos)',
      level: 'TCT',
      description: 'Conéctate con la red global de misiones que moviliza y apoya a misioneros internacionales para llevar esperanza, ayuda compasiva y el Evangelio a cada rincón del mundo.',
    },
  ];

  return (
    <section id="cursos" className="relative bg-white py-2 text-[#111111] sm:py-14 lg:py-8">
      <div className="mx-auto max-w-[1150px] space-y-10 px-4 sm:px-8">
        
        {/* ================= SECCIÓN 1: NUESTROS MINISTERIOS ================= */}
        <div className="space-y-5">
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
                className="bg-[#fcfcfc] rounded-xl p-5 border border-[#E4E4E7]/60 flex flex-col justify-between hover:shadow-sm transition-all duration-200"
              >
                <div>
                  {/* IMAGEN DE LA CARD */}
                  {course.cardImage && (
                    <div className="w-full h-36 mb-4 overflow-hidden rounded-lg bg-slate-100">
                      <img
                        src={course.cardImage}
                        alt={course.imageAlt || course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-3">
                    <img
                      src={course.flagSrc}
                      alt={course.flagAlt}
                      className="w-5 h-3 object-cover rounded-xs shadow-2xs"
                    />
                    <span className="text-[11px] font-extrabold text-[#111111] tracking-wider">
                      {course.level}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#111111] mb-1.5">
                    {course.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-[#919191] leading-relaxed mb-4">
                    {course.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onNavigateCourse && onNavigateCourse(course.id)}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1D35E1] hover:underline cursor-pointer transition-colors w-fit"
                >
                  Más información
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECCIÓN 2: PASOS DE FE Y SERVICIO ================= */}
        <div className="space-y-5">
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
                className="bg-[#fcfcfc] rounded-xl p-5 border border-[#E4E4E7]/60 flex flex-col justify-between h-full hover:shadow-sm transition-all duration-200"
              >
                <div>
                  {/* IMAGEN DE LA CARD */}
                  {modality.cardImage && (
                    <div className="w-full h-36 mb-4 overflow-hidden rounded-lg bg-slate-100">
                      <img
                        src={modality.cardImage}
                        alt={modality.imageAlt || modality.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-3">
                    {modality.icon}
                    <span className="text-[11px] font-extrabold text-[#111111] tracking-wider">
                      {modality.level}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#111111] mb-1.5">
                    {modality.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-[#919191] leading-relaxed mb-4">
                    {modality.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onNavigateCourse && onNavigateCourse(modality.id)}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1D35E1] hover:underline cursor-pointer transition-colors w-fit"
                >
                  Más información
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoursesAndModalities;