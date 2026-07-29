import React, { useEffect } from 'react';
import { Heart, ArrowLeft, HandHeart, CheckCircle2, ShieldCheck, Globe2, Users } from 'lucide-react';

// Importación de imágenes independientes para cada sección
import heroImg from '../images/ofrendas1-tct.jpg';
import galleryImg1 from '../images/ofrendas2-tct.jpg';
import galleryImg2 from '../images/ofrendas3-tct.jpg';

export default function DonacionesArticle({ onGoBack }) {
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
              <span>Volver al inicio</span>
            </button>
          </div>
        )}

        {/* Encabezado Principal */}
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-3 text-[10px] font-semibold text-[#919191]">
            <span className="px-2 py-0.5 bg-[#F4F4F5] rounded-md border border-[#E4E4E7]/60 text-[#111111] font-bold flex items-center gap-1">
              <Heart className="w-3 h-3 text-[#1D35E1]" />
              Cultura de Generosidad
            </span>
            <span>•</span>
            <span>Impacto Social y Ministerial</span>
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-[#111111] sm:text-3xl lg:text-[34px] leading-tight">
            Tus aportaciones transforman vidas a través de <span className="text-[#1D35E1]">nuestra comunidad</span>
          </h1>

          <p className="text-xs sm:text-sm text-[#919191] font-normal leading-relaxed">
            Conoce cómo cada donación impulsa proyectos sociales, sostiene la labor ministerial y fortalece nuestros programas de desarrollo.
          </p>
        </div>

        {/* Imagen Principal Hero */}
        <div className="relative overflow-hidden rounded-2xl border border-[#E4E4E7]/70 shadow-2xs h-[280px] sm:h-[380px] lg:h-[420px]">
          <img
            src={heroImg}
            alt="Cultura de Donación e Impacto Social"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Contenido en 2 Columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">

          {/* Columna Izquierda: Cuerpo del Artículo */}
          <div className="lg:col-span-8 space-y-6">

            {/* Meta de Enfoque */}
            <div className="flex items-center justify-between border-b border-[#F4F4F5] pb-4 text-[11px] text-[#919191]">
              <div className="flex items-center gap-6">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#A0A0A0]">Área</span>
                  <span className="font-[#111111] font-semibold">Administración y Mayordomía</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#A0A0A0]">Compromiso</span>
                  <span className="font-semibold text-[#111111]">Transparencia Total</span>
                </div>
              </div>
            </div>

            {/* Introducción / Descripción */}
            <div className="space-y-4 text-xs sm:text-sm text-[#666666] leading-relaxed">
              <h2 className="text-base sm:text-lg font-extrabold text-[#111111] tracking-tight">
                Sembrando en iniciativas de alto impacto
              </h2>
              <p>
                La <strong className="text-[#111111]">generosidad</strong> es un principio fundamental que nos permite extender nuestro alcance más allá de los muros de la comunidad. Cada diezmo y ofrenda entregado con alegría se traduce en apoyo directo para familias vulnerables, equipamiento técnico y soporte a proyectos de formación.
              </p>
              <p>
                Creemos en la mayordomía responsable y la rendición de cuentas, garantizando que cada recurso financiero sea administrado con integridad para maximizar su beneficio social y espiritual.
              </p>
              <p>
                Gracias a la fidelidad y colaboración de voluntarios y donantes, logramos sostener programas permanentes de ayuda humanitaria, talleres comunitarios y espacios de desarrollo integral.
              </p>
            </div>

            {/* Puntos Clave */}
            <div className="bg-[#F4F4F5]/60 rounded-xl p-4 border border-[#E4E4E7]/60 space-y-3">
              <h3 className="text-xs font-bold text-[#111111] uppercase tracking-wider flex items-center gap-2">
                <HandHeart className="w-4 h-4 text-[#1D35E1]" />
                ¿En qué se utilizan tus aportaciones?
              </h3>
              <ul className="space-y-2 text-[11px] sm:text-xs text-[#666666]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D35E1] shrink-0 mt-0.5" />
                  <span><strong>Acción Social y Humanitaria:</strong> Suministro de víveres, despensas y apoyo a familias en momentos de necesidad.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D35E1] shrink-0 mt-0.5" />
                  <span><strong>Infraestructura y Equipamiento:</strong> Mantenimiento y mejora de espacios para el desarrollo de actividades comunitarias.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D35E1] shrink-0 mt-0.5" />
                  <span><strong>Programas Educativos:</strong> Becas y materiales para cursos de formación, discipulado y liderazgo.</span>
                </li>
              </ul>
            </div>

            {/* Cita Destacada */}
            <blockquote className="border-l-2 border-[#1D35E1] pl-4 py-1 my-4 bg-slate-50/50 rounded-r-lg">
              <p className="text-xs sm:text-sm italic font-medium text-[#111111]">
                "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre."
              </p>
              <footer className="text-[10px] text-[#919191] mt-1 font-bold">
                — Equipo de Administración Financiera
              </footer>
            </blockquote>

            {/* Galería de Imágenes */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                Impacto en Nuestra Comunidad
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="overflow-hidden rounded-xl border border-[#E4E4E7]/70 h-32 sm:h-40">
                  <img
                    src={galleryImg1}
                    alt="Proyectos de Ayuda Social"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-[#E4E4E7]/70 h-32 sm:h-40">
                  <img
                    src={galleryImg2}
                    alt="Labor de Voluntariado"
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
                  Generosidad Digital
                </span>
                <h3 className="text-sm font-bold text-[#111111]">
                  Aporta con Confianza
                </h3>
                <p className="text-[11px] text-[#919191]">
                  Disponemos de canales seguros para realizar tus diezmos u ofrendas electrónicas.
                </p>
              </div>

              <div className="space-y-3 text-[11px] text-[#666666]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1D35E1]" />
                  <span>Transacciones Seguras</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-[#1D35E1]" />
                  <span>Transferencias e Importes Digitales</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#1D35E1]" />
                  <span>Informes Anuales de Transparencia</span>
                </div>
              </div>
            </div>
          </aside>

        </div>

      </div>
    </article>
  );
}