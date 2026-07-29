import React, { useEffect } from 'react';
import { Compass, ArrowLeft, MapPin, CheckCircle2, BookOpen, Heart, Users } from 'lucide-react';

// Importación de imágenes para cada sección
import heroImg from '../images/rutatct1.jpg';
import galleryImg1 from '../images/rutatct2.jpg';
import galleryImg2 from '../images/rutatct3.jpg';

export default function RutaTCTArticle({ onGoBack }) {
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
              <span>Volver a programas</span>
            </button>
          </div>
        )}

        {/* Encabezado Principal */}
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-3 text-[10px] font-semibold text-[#919191]">
            <span className="px-2 py-0.5 bg-[#F4F4F5] rounded-md border border-[#E4E4E7]/60 text-[#111111] font-bold flex items-center gap-1">
              <Compass className="w-3 h-3 text-[#1D35E1]" />
              Crecimiento & Discipulado
            </span>
            <span>•</span>
            <span>Ruta de Aprendizaje</span>
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-[#111111] sm:text-3xl lg:text-[34px] leading-tight">
            Descubre tu camino con la <span className="text-[#1D35E1]">Ruta TCT</span>
          </h1>

          <p className="text-xs sm:text-sm text-[#919191] font-normal leading-relaxed">
            Un proceso paso a paso diseñado para acompañarte desde tus primeros pasos en la fe hasta consolidar tu liderazgo y propósito.
          </p>
        </div>

        {/* Imagen Principal Hero */}
        <div className="relative overflow-hidden rounded-2xl border border-[#E4E4E7]/70 shadow-2xs h-[280px] sm:h-[380px] lg:h-[420px]">
          <img
            src={heroImg}
            alt="Ruta TCT - Proceso de Crecimiento"
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
                  <span className="block text-[10px] uppercase font-bold text-[#A0A0A0]">Programa</span>
                  <span className="font-semibold text-[#111111]">Ruta TCT</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#A0A0A0]">Objetivo</span>
                  <span className="font-semibold text-[#111111]">Formación Integral y Madurez Espiritual</span>
                </div>
              </div>
            </div>

            {/* Introducción / Descripción */}
            <div className="space-y-4 text-xs sm:text-sm text-[#666666] leading-relaxed">
              <h2 className="text-base sm:text-lg font-extrabold text-[#111111] tracking-tight">
                Un trayecto claro para fortalecer tu vida y fe
              </h2>
              <p>
                La <strong className="text-[#111111]">Ruta TCT</strong> es nuestro mapa de crecimiento intencional. Creemos que cada persona se encuentra en una etapa distinta de su caminar, por lo que este trayecto ofrece pasos claros para avanzar de manera ordenada y constante.
              </p>
              <p>
                A través de módulos dinámicos, mentorías personalizadas y talleres prácticos, la Ruta TCT te brinda herramientas bíblicas y operativas para aplicar principios espirituales en tu día a día, en tu familia y en tu entorno profesional.
              </p>
              <p>
                Desde la integración inicial hasta la preparación para el servicio activo, este proceso está pensado para formarte con fundamentos sólidos y visión de futuro.
              </p>
            </div>

            {/* Etapas de la Ruta */}
            <div className="bg-[#F4F4F5]/60 rounded-xl p-4 border border-[#E4E4E7]/60 space-y-3">
              <h3 className="text-xs font-bold text-[#111111] uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#1D35E1]" />
                ¿Qué etapas comprende la Ruta TCT?
              </h3>
              <ul className="space-y-2 text-[11px] sm:text-xs text-[#666666]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D35E1] shrink-0 mt-0.5" />
                  <span><strong>Conectar:</strong> Conoce los valores de la comunidad y establece relaciones significativas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D35E1] shrink-0 mt-0.5" />
                  <span><strong>Fundamentos:</strong> Profundiza en principios bíblicos clave para afianzar tu identidad y fe.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D35E1] shrink-0 mt-0.5" />
                  <span><strong>Servicio y Liderazgo:</strong> Descubre tus dones y ponlos en acción con propósito e impacto social.</span>
                </li>
              </ul>
            </div>

            {/* Cita Destacada */}
            <blockquote className="border-l-2 border-[#1D35E1] pl-4 py-1 my-4 bg-slate-50/50 rounded-r-lg">
              <p className="text-xs sm:text-sm italic font-medium text-[#111111]">
                "El crecimiento constante no es fruto del azar, sino de dar pasos intencionales en la dirección correcta."
              </p>
              <footer className="text-[10px] text-[#919191] mt-1 font-bold">
                — Equipo de Coordinación Ruta TCT
              </footer>
            </blockquote>

            {/* Galería de Imágenes */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                Crecimiento en Comunidad
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="overflow-hidden rounded-xl border border-[#E4E4E7]/70 h-32 sm:h-40">
                  <img
                    src={galleryImg1}
                    alt="Talleres Ruta TCT"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-[#E4E4E7]/70 h-32 sm:h-40">
                  <img
                    src={galleryImg2}
                    alt="Módulos de Formación"
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
                  Inicia Tu Proceso
                </span>
                <h3 className="text-sm font-bold text-[#111111]">
                  Inscríbete en la Ruta TCT
                </h3>
                <p className="text-[11px] text-[#919191]">
                  Avanza a tu propio ritmo con el acompañamiento de nuestros mentores.
                </p>
              </div>

              <div className="space-y-3 text-[11px] text-[#666666]">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#1D35E1]" />
                  <span>Material Didáctico Incluido</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#1D35E1]" />
                  <span>Acompañamiento Personalizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#1D35E1]" />
                  <span>Grupos de Discusión y Crecimiento</span>
                </div>
              </div>
            </div>
          </aside>

        </div>

      </div>
    </article>
  );
}