import React, { useEffect } from 'react';
import { Droplets, ArrowLeft, Sparkles, CheckCircle2, BookOpen, Heart, Users } from 'lucide-react';

// Importación de imágenes independientes para cada sección
import heroImg from '../images/bautizos1-tct.jpg';
import galleryImg1 from '../images/bautizos2-tct.jpg';
import galleryImg2 from '../images/bautizos3-tct.jpg';

export default function BautizosArticle({ onGoBack }) {
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
              <span>Volver a eventos</span>
            </button>
          </div>
        )}

        {/* Encabezado Principal */}
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-3 text-[10px] font-semibold text-[#919191]">
            <span className="px-2 py-0.5 bg-[#F4F4F5] rounded-md border border-[#E4E4E7]/60 text-[#111111] font-bold flex items-center gap-1">
              <Droplets className="w-3 h-3 text-[#1D35E1]" />
              Paso de Fe
            </span>
            <span>•</span>
            <span>Celebración y Compromiso</span>
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-[#111111] sm:text-3xl lg:text-[34px] leading-tight">
            El Bautismo: Un compromiso público de <span className="text-[#1D35E1]">transformación y fe</span>
          </h1>

          <p className="text-xs sm:text-sm text-[#919191] font-normal leading-relaxed">
            Descubre el significado bíblico del bautismo, la preparación previa y cómo dar este importante paso en tu vida espiritual.
          </p>
        </div>

        {/* Imagen Principal Hero */}
        <div className="relative overflow-hidden rounded-2xl border border-[#E4E4E7]/70 shadow-2xs bg-white max-h-[420px]">
          <img
            src={heroImg}
            alt="Celebración de Bautizos"
            className="w-full h-auto object-contain object-center"
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
                  <span className="font-semibold text-[#111111]">Pastoral y Discipulado</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#A0A0A0]">Enfoque</span>
                  <span className="font-semibold text-[#111111]">Identidad y Testimonio</span>
                </div>
              </div>
            </div>

            {/* Introducción / Descripción */}
            <div className="space-y-4 text-xs sm:text-sm text-[#666666] leading-relaxed">
              <h2 className="text-base sm:text-lg font-extrabold text-[#111111] tracking-tight">
                Simbolismo, obediencia y vida nueva
              </h2>
              <p>
                El <strong className="text-[#111111]">bautismo en agua</strong> es un acto de obediencia y una declaración pública de nuestra fe. Representa la muerte al viejo estilo de vida y el nacimiento a una nueva etapa guiada por el amor y la verdad de Dios.
              </p>
              <p>
                No se trata solo de un ritual, sino de una celebración comunitaria donde compartimos nuestro testimonio y confirmamos la decisión de caminar bajo una nueva identidad espiritual.
              </p>
              <p>
                Previo a cada jornada de bautizos, impartimos talleres de preparación para que cada candidato entienda a profundidad la relevancia teológica y personal de este paso de fe.
              </p>
            </div>

            {/* Puntos Clave / Preparación */}
            <div className="bg-[#F4F4F5]/60 rounded-xl p-4 border border-[#E4E4E7]/60 space-y-3">
              <h3 className="text-xs font-bold text-[#111111] uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#1D35E1]" />
                ¿Qué implica la preparación para el Bautismo?
              </h3>
              <ul className="space-y-2 text-[11px] sm:text-xs text-[#666666]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D35E1] shrink-0 mt-0.5" />
                  <span><strong>Taller Doctrinario:</strong> Sesiones breves para comprender el fundamento bíblico del bautismo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D35E1] shrink-0 mt-0.5" />
                  <span><strong>Acompañamiento Personal:</strong> Espacios de conversación con mentores para resolver dudas y preparar tu testimonio.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D35E1] shrink-0 mt-0.5" />
                  <span><strong>Celebración Familiar:</strong> Un evento especial diseñado para compartir con familiares y amigos.</span>
                </li>
              </ul>
            </div>

            {/* Cita Destacada */}
            <blockquote className="border-l-2 border-[#1D35E1] pl-4 py-1 my-4 bg-slate-50/50 rounded-r-lg">
              <p className="text-xs sm:text-sm italic font-medium text-[#111111]">
                "De modo que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas."
              </p>
              <footer className="text-[10px] text-[#919191] mt-1 font-bold">
                — Equipo Pastoral
              </footer>
            </blockquote>

            {/* Galería de Imágenes */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                Momentos de Celebración
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="overflow-hidden rounded-xl border border-[#E4E4E7]/70 h-32 sm:h-40">
                  <img
                    src={galleryImg1}
                    alt="Jornada de bautizos"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-[#E4E4E7]/70 h-32 sm:h-40">
                  <img
                    src={galleryImg2}
                    alt="Fiesta comunitaria"
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
                  Próxima Fecha
                </span>
                <h3 className="text-sm font-bold text-[#111111]">
                  ¿Listo para bautizarte?
                </h3>
                <p className="text-[11px] text-[#919191]">
                  Aproxímate con nuestro equipo para registrarte en la próxima jornada de clases y bautizos.
                </p>
              </div>

              <div className="space-y-3 text-[11px] text-[#666666]">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#1D35E1]" />
                  <span>Clase de preparación previa</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#1D35E1]" />
                  <span>Acompañamiento espiritual</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#1D35E1]" />
                  <span>Celebración junto a la comunidad</span>
                </div>
              </div>
            </div>
          </aside>

        </div>

      </div>
    </article>
  );
}