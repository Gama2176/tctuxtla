import React, { useEffect } from 'react';
import { Sparkles, ArrowLeft, Target, CheckCircle2, BookOpen, Heart, Users } from 'lucide-react';

// Importación de imágenes independientes para cada sección
import heroImg from '../images/tctkids2-tct.jpg';
import galleryImg1 from '../images/tctkids1-tct.jpg';
import galleryImg2 from '../images/tctkids-tct.jpg';

export default function TCTKidsArticle({ onGoBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="bg-white py-6 text-[#111111] sm:py-10 lg:py-8">
      <div className="mx-auto max-w-[1150px] px-4 sm:px-8 space-y-6">

        {/* Botón Volver */}
        {onGoBack && (
          <div>
            <button
              type="button"
              onClick={onGoBack}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E4E4E7]/70 bg-white text-[11px] font-semibold text-[#111111] hover:bg-[#F4F4F5] transition active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#666666]" />
              <span>Volver a Ministerios</span>
            </button>
          </div>
        )}

        {/* Encabezado Principal */}
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-3 text-[10px] font-semibold text-[#919191]">
            <span className="px-2 py-0.5 bg-[#F4F4F5] rounded-md border border-[#E4E4E7]/60 text-[#111111] font-bold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#1D35E1]" />
              Ministerio Infantil
            </span>
            <span>•</span>
            <span>Formación y Fe</span>
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-[#111111] sm:text-3xl lg:text-[34px] leading-tight">
            TCT Kids: Guiando a los niños a conocer y amar a Dios
          </h1>

          <p className="text-xs sm:text-sm text-[#919191] font-normal leading-relaxed">
            Un espacio seguro, alegre y creativo diseñado para enseñar verdades bíblicas de forma dinámica a la niñez de nuestra comunidad.
          </p>
        </div>

        {/* Imagen Principal Hero */}
        <div className="relative overflow-hidden rounded-2xl border border-[#E4E4E7]/70 shadow-2xs bg-white max-h-[420px]">
          <img
            src={heroImg}
            alt="Ministerio Infantil TCT Kids"
            className="w-full h-auto object-contain object-center"
          />
        </div>

        {/* Contenido en 2 Columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
          
          {/* Columna Izquierda: Cuerpo del Artículo */}
          <div className="lg:col-span-8 space-y-6">

            {/* Meta de Autor / Enfoque */}
            <div className="flex items-center justify-between border-b border-[#F4F4F5] pb-4 text-[11px] text-[#919191]">
              <div className="flex items-center gap-6">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#A0A0A0]">Ministerio</span>
                  <span className="font-semibold text-[#111111]">TCT Kids</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#A0A0A0]">Enfoque</span>
                  <span className="font-semibold text-[#111111]">Enseñanza Bíblica, Creatividad y Cuidado</span>
                </div>
              </div>
            </div>

            {/* Introducción / Descripción */}
            <div className="space-y-4 text-xs sm:text-sm text-[#666666] leading-relaxed">
              <h2 className="text-base sm:text-lg font-extrabold text-[#111111] tracking-tight">
                Construyendo cimientos firmes desde la infancia
              </h2>
              <p>
                En <strong className="text-[#111111]">TCT Kids</strong> creemos que la infancia es la etapa clave para sembrar valores cristianos, fe genuina y el amor por la Palabra de Dios a través de experiencias significativas y adaptadas a su edad.
              </p>
              <p>
                Nuestro equipo de maestros y voluntarios trabaja con pasión para ofrecer un entorno cálido y seguro donde cada niño puede aprender, hacer amigos, desarrollar sus talentos y experimentar el amor de Dios en cada reunión.
              </p>
              <p>
                A través de lecciones interactivas, dinámicas creativas y tiempos de alabanza infantil, acompañamos a las familias en la tarea más importante: guiar a los más pequeños hacia una relación personal con Jesús.
              </p>
            </div>

            {/* Ejes Fundamentales */}
            <div className="bg-[#F4F4F5]/60 rounded-xl p-4 border border-[#E4E4E7]/60 space-y-3">
              <h3 className="text-xs font-bold text-[#111111] uppercase tracking-wider flex items-center gap-2">
                <Target className="w-4 h-4 text-[#1D35E1]" />
                Ejes Fundamentales de TCT Kids
              </h3>
              <ul className="space-y-2 text-[11px] sm:text-xs text-[#666666]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D35E1] shrink-0 mt-0.5" />
                  <span><strong>Enseñanza Bíblica Creativa:</strong> Clases adaptadas por niveles de edad con historias, manualidades y aplicaciones prácticas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D35E1] shrink-0 mt-0.5" />
                  <span><strong>Ambiente Seguro y Protegido:</strong> Protocolos de cuidado y atención personalizada para la tranquilidad de los padres.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D35E1] shrink-0 mt-0.5" />
                  <span><strong>Desarrollo de Fe y Valores:</strong> Fomento del compañerismo, el respeto, el servicio y la oración sincera desde niños.</span>
                </li>
              </ul>
            </div>

            {/* Cita Destacada */}
            <blockquote className="border-l-2 border-[#1D35E1] pl-4 py-1 my-4 bg-slate-50/50 rounded-r-lg">
              <p className="text-xs sm:text-sm italic font-medium text-[#111111]">
                "Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él. Nuestra misión es sembrar la verdad en sus corazones."
              </p>
              <footer className="text-[10px] text-[#919191] mt-1 font-bold">
                — Equipo de Coordinación, TCT Kids
              </footer>
            </blockquote>

            {/* Galería de Imágenes */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                Aprender, Jugar y Crecer
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="overflow-hidden rounded-xl border border-[#E4E4E7]/70 h-32 sm:h-40">
                  <img
                    src={galleryImg1}
                    alt="Actividades de TCT Kids"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-[#E4E4E7]/70 h-32 sm:h-40">
                  <img
                    src={galleryImg2}
                    alt="Clases bíblicas infantiles"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Barra Lateral */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
            <div className="rounded-2xl border border-[#E4E4E7]/80 bg-white p-5 shadow-2xs space-y-4">
              <div className="space-y-1 text-center">
                <span className="inline-block px-2 py-0.5 bg-teal-50 text-[#4fc1bd] rounded-md text-[10px] font-bold">
                  Atención Infantil
                </span>
                <h3 className="text-sm font-bold text-[#111111]">
                  Conéctate con TCT Kids
                </h3>
                <p className="text-[11px] text-[#919191]">
                  Recibe a tus pequeños en nuestras clases semanales durante cada servicio general.
                </p>
              </div>

              <div className="space-y-3 text-[11px] text-[#666666]">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#1D35E1]" />
                  <span>Clases por grupos de edad</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#1D35E1]" />
                  <span>Cuidado pastoral y ambiente seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#1D35E1]" />
                  <span>Maestros y servidores capacitados</span>
                </div>
              </div>
            </div>
          </aside>

        </div>

      </div>
    </article>
  );
}