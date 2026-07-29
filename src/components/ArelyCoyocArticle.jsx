import React, { useEffect } from 'react';
import { ArrowLeft, Music, CheckCircle2, BookOpen, Smartphone } from 'lucide-react';

// Importación de imágenes locales
import arelyCoyocImg from '../images/arelytct2.jpg';
import alabanza1Img from '../images/arelytct3.jpg';
import alabanza2Img from '../images/arelytct1.jpg';

export default function ArelyCoyocArticle({ onGoBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="bg-white py-6 text-[#111111] sm:py-10 lg:py-8">
      <div className="mx-auto max-w-[1150px] space-y-6 px-4 sm:px-8">

        {/* Botón de Regreso */}
        {onGoBack && (
          <div>
            <button
              type="button"
              onClick={onGoBack}
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-[#E4E4E7]/70 bg-white px-3 py-1.5 text-[11px] font-semibold text-[#111111] transition hover:bg-[#F4F4F5] active:scale-95"
            >
              <ArrowLeft className="h-3.5 w-3.5 text-[#666666]" />
              <span>Volver a Pastores</span>
            </button>
          </div>
        )}

        {/* Header del Artículo */}
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-3 text-[10px] font-semibold text-[#919191]">
            <span className="flex items-center gap-1 rounded-md border border-[#E4E4E7]/60 bg-[#F4F4F5] px-2 py-0.5 font-bold text-[#111111]">
              Liderazgo de Alabanza
            </span>
            <span>•</span>
            <span>Dirección musical</span>
          </div>

          <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-[#111111] sm:text-3xl lg:text-[34px]">
            Arely Coyoc: guía de adoración y creatividad espiritual
          </h1>

          <p className="text-xs font-normal leading-relaxed text-[#919191] sm:text-sm">
            Descubre cómo Arely inspira a la congregación a conectarse con Dios a través de una adoración vibrante, auténtica y relevante para cada generación.
          </p>
        </div>

        {/* Imagen Principal */}
        <div className="relative h-[280px] overflow-hidden rounded-2xl border border-[#E4E4E7]/70 shadow-2xs sm:h-[380px] lg:h-[420px]">
          <img
            src={arelyCoyocImg}
            alt="Directora de adoración Arely Coyoc"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Contenido Principal + Sidebar */}
        <div className="grid grid-cols-1 items-start gap-8 pt-2 lg:grid-cols-12">
          
          {/* Columna Principal */}
          <div className="space-y-6 lg:col-span-8">
            <div className="flex items-center justify-between border-b border-[#F4F4F5] pb-4 text-[11px] text-[#919191]">
              <div className="flex items-center gap-6">
                <div>
                  <span className="block text-[10px] font-bold uppercase text-[#A0A0A0]">Equipo de música</span>
                  <span className="font-semibold text-[#111111]">Ministerio de Adoración</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase text-[#A0A0A0]">Visión</span>
                  <span className="font-semibold text-[#111111]">Cultivar encuentros reales</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-xs leading-relaxed text-[#666666] sm:text-sm">
              <h2 className="text-base font-extrabold tracking-tight text-[#111111] sm:text-lg">
                Una adoración que invita a vivir la fe con pasión
              </h2>
              <p>
                Arely Coyoc lidera el ministerio de adoración con un estilo cercano, íntimo y lleno de autenticidad, donde cada canción es una oportunidad para acercarse a Dios.
              </p>
              <p>
                Su equipo acompaña a la iglesia en momentos de celebración y profundidad espiritual, conectando generaciones mediante música y mensaje con propósito.
              </p>
            </div>

            {/* Cuadro Destacado */}
            <div className="space-y-3 rounded-xl border border-[#E4E4E7]/60 bg-[#F4F4F5]/60 p-4">
              <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111111]">
                <Music className="h-4 w-4 text-[#1D35E1]" />
                Elementos de su liderazgo
              </h3>
              <ul className="space-y-2 text-[11px] text-[#666666] sm:text-xs">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#1D35E1]" />
                  <span><strong>Adoración inspiradora:</strong> Canciones que promueven conexión genuina con Dios.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#1D35E1]" />
                  <span><strong>Formación musical:</strong> Entrenamiento para músicos y vocalistas del ministerio.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#1D35E1]" />
                  <span><strong>Eventos especiales:</strong> Producciones que fortalecen la experiencia congregacional.</span>
                </li>
              </ul>
            </div>

            {/* Cita / Testimonio */}
            <blockquote className="my-4 rounded-r-lg border-l-2 border-[#1D35E1] bg-slate-50/50 py-1 pl-4">
              <p className="text-xs font-medium italic text-[#111111] sm:text-sm">
                "Adorar con el corazón abierto nos ayuda a experimentar a Dios en cada momento de nuestra iglesia."
              </p>
              <footer className="mt-1 text-[10px] font-bold text-[#919191]">
                — Arely Coyoc, Directora de Adoración
              </footer>
            </blockquote>

            {/* Galería Secundaria */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                Una adoración cercana y creativa
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="h-32 overflow-hidden rounded-xl border border-[#E4E4E7]/70 sm:h-40">
                  <img
                    src={alabanza1Img}
                    alt="Equipo de adoración en servicio"
                    className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="h-32 overflow-hidden rounded-xl border border-[#E4E4E7]/70 sm:h-40">
                  <img
                    src={alabanza2Img}
                    alt="Músicos de iglesia actuando"
                    className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-4 lg:sticky lg:top-24 lg:col-span-4">
            <div className="space-y-4 rounded-2xl border border-[#E4E4E7]/80 bg-white p-5 shadow-2xs">
              <div className="space-y-1 text-center">
                <span className="inline-block rounded-md bg-teal-50 px-2 py-0.5 text-[10px] font-bold text-[#4fc1bd]">
                  Ministerio de Adoración
                </span>
                <h3 className="text-sm font-bold text-[#111111]">
                  Participa en el equipo musical
                </h3>
                <p className="text-[11px] text-[#919191]">
                  Únete a los ensayos y acompaña la alabanza de nuestra iglesia.
                </p>
              </div>

              <div className="space-y-3 text-[11px] text-[#666666]">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-[#1D35E1]" />
                  <span>Capacitación musical para el equipo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-[#1D35E1]" />
                  <span>Recursos digitales para líderes de adoración</span>
                </div>
                <div className="flex items-center gap-2">
                  <Music className="h-4 w-4 text-[#1D35E1]" />
                  <span>Producción de momentos de adoración memorables</span>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </article>
  );
}