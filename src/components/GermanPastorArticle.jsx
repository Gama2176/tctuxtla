import React, { useEffect } from 'react';
import { ArrowLeft, Target, CheckCircle2, BookOpen, Heart, Users, Calendar } from 'lucide-react';

// Importación de imágenes independientes para cada sección
import heroImg from '../images/pastores-gp.jpg';
import galleryImg1 from '../images/pasgerman-tct.jpg';
import galleryImg2 from '../images/paspa-tct.jpg';

export default function GermanPastorArticle({ onGoBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="bg-white py-6 text-[#111111] sm:py-10 lg:py-8">
      <div className="mx-auto max-w-[1150px] px-4 sm:px-8 space-y-6">

        {onGoBack && (
          <div>
            <button
              type="button"
              onClick={onGoBack}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E4E4E7]/70 bg-white text-[11px] font-semibold text-[#111111] hover:bg-[#F4F4F5] transition active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#666666]" />
              <span>Volver a Pastores</span>
            </button>
          </div>
        )}

        {/* Encabezado Principal */}
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-3 text-[10px] font-semibold text-[#919191]">
            <span className="px-2 py-0.5 bg-[#F4F4F5] rounded-md border border-[#E4E4E7]/60 text-[#111111] font-bold flex items-center gap-1">
              Pastores Principales
            </span>
            <span>•</span>
            <span>Historia y Liderazgo</span>
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-[#111111] sm:text-3xl lg:text-[34px] leading-tight">
            Germán y Patricia: Un legado de fe, familia y servicio pastoral
          </h1>

          <p className="text-xs sm:text-sm text-[#919191] font-normal leading-relaxed">
            Conoce la trayectoria de los pastores principales de TCT, impulsados por la visión de edificar familias sólidas y transformar vidas a través del Evangelio.
          </p>
        </div>

        {/* Imagen Principal Hero */}
        <div className="relative overflow-hidden rounded-2xl border border-[#E4E4E7]/70 shadow-2xs h-[280px] sm:h-[380px] lg:h-[420px]">
          <img
            src={heroImg}
            alt="Pastores Germán Picavea y Patricia Pandolfo"
            className="w-full h-full object-cover object-center will-change-auto"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
          {/* Contenido Principal */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="flex items-center justify-between border-b border-[#F4F4F5] pb-4 text-[11px] text-[#919191]">
              <div className="flex items-center gap-6">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#A0A0A0]">Pastores Principales</span>
                  <span className="font-semibold text-[#111111]">Germán Picavea & Patricia Pandolfo</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#A0A0A0]">Enfoque</span>
                  <span className="font-semibold text-[#111111]">Familias, Discipulado y Comunidad</span>
                </div>
              </div>
            </div>

            {/* Historia Pastoral */}
            <div className="space-y-4 text-xs sm:text-sm text-[#666666] leading-relaxed">
              <h2 className="text-base sm:text-lg font-extrabold text-[#111111] tracking-tight">
                Una vida dedicada al llamado y a la edificación de la iglesia
              </h2>
              <p>
                Los pastores Germán Picavea y Patricia Pandolfo han dedicado años de servicio ininterrumpido a la obra de Dios. Desde los inicios de su ministerio, respondieron con fe al llamado de ser pastores, guiando con convicción y entregando sus vidas al servicio de la congregación y el Reino de Dios.
              </p>
              <p>
                Como fundadores de la casa pastoral TCT, su pilar fundamental ha sido la edificación del hogar. Creen firmemente que una iglesia saludable y transformadora es el reflejo de familias fortalecidas en la verdad bíblica, el amor incondicional y la oración constante.
              </p>
              <p>
                A lo largo de su caminar, han formado a múltiples generaciones de líderes, brindando un discipulado cercano, consejería matrimonial y acompañamiento en cada una de las etapas vitales de los creyentes.
              </p>
            </div>

            {/* Bloque de Pilares */}
            <div className="bg-[#F4F4F5]/60 rounded-xl p-4 border border-[#E4E4E7]/60 space-y-3">
              <h3 className="text-xs font-bold text-[#111111] uppercase tracking-wider flex items-center gap-2">
                <Target className="w-4 h-4 text-[#1D35E1]" />
                Ejes Fundamentales de su Ministerio
              </h3>
              <ul className="space-y-2 text-[11px] sm:text-xs text-[#666666]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D35E1] shrink-0 mt-0.5" />
                  <span><strong>Pastorado Familiar:</strong> Cuidado de los matrimonios, padres e hijos con principios de la Palabra.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D35E1] shrink-0 mt-0.5" />
                  <span><strong>Discipulado y Formación:</strong> Capacitación continua para desarrollar el potencial espiritual de cada creyente.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D35E1] shrink-0 mt-0.5" />
                  <span><strong>Amor y Servicio Comunitario:</strong> Cercanía espiritual y consejería para quienes atraviesan tiempos difíciles.</span>
                </li>
              </ul>
            </div>

            {/* Cita en Bloque */}
            <blockquote className="border-l-2 border-[#1D35E1] pl-4 py-1 my-4 bg-slate-50/50 rounded-r-lg">
              <p className="text-xs sm:text-sm italic font-medium text-[#111111]">
                "Nuestra pasión es ver a cada familia restaurada, afirmada en Cristo y cumpliendo el propósito eterno para el cual fue creada."
              </p>
              <footer className="text-[10px] text-[#919191] mt-1 font-bold">
                — Ps. Germán Picavea y Ps. Patricia Pandolfo
              </footer>
            </blockquote>

            {/* Galería con 2 imágenes independientes */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                Ministerio en Acción y Comunidad
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="overflow-hidden rounded-xl border border-[#E4E4E7]/70 h-32 sm:h-40">
                  <img
                    src={galleryImg1}
                    alt="Pastores Germán y Patricia compartiendo en comunidad"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-[#E4E4E7]/70 h-32 sm:h-40">
                  <img
                    src={galleryImg2}
                    alt="Dirección y enseñanza pastoral en TCT"
                    className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Barra Lateral / Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
            <div className="rounded-2xl border border-[#E4E4E7]/80 bg-white p-5 shadow-2xs space-y-4">
              <div className="space-y-1 text-center">
                <span className="inline-block px-2 py-0.5 bg-teal-50 text-[#4fc1bd] rounded-md text-[10px] font-bold">
                  Atención Pastoral
                </span>
                <h3 className="text-sm font-bold text-[#111111]">
                  Conéctate con los Pastores
                </h3>
                <p className="text-[11px] text-[#919191]">
                  Estamos para acompañarte, orar por ti y brindarte consejería espiritual cuando lo necesites.
                </p>
              </div>

              <div className="space-y-3 text-[11px] text-[#666666]">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#1D35E1]" />
                  <span>Consejería pastoral y matrimonial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#1D35E1]" />
                  <span>Cuidado pastoral y oración por peticiones</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#1D35E1]" />
                  <span>Grupos de conexión y discipulado</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}