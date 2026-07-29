import React, { useEffect } from 'react';
import { Sparkles, ArrowLeft, Target, CheckCircle2, BookOpen, Heart, Users } from 'lucide-react';

// Importación de imágenes independientes para cada sección
import heroImg from '../images/tct-jovenes3.jpg';
import galleryImg1 from '../images/tct-jovenes1.jpg';
import galleryImg2 from '../images/tct-jovenes2.jpg';

export default function TCTJovenesArticle({ onGoBack }) {
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
              Ministerio Juvenil
            </span>
            <span>•</span>
            <span>Comunidad y Liderazgo</span>
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-[#111111] sm:text-3xl lg:text-[34px] leading-tight">
            TCT Jóvenes: Una generación apasionada y con propósito
          </h1>

          <p className="text-xs sm:text-sm text-[#919191] font-normal leading-relaxed">
            Un espacio dinámico diseñado para jóvenes que buscan crecer espiritualmente, desarrollar amistades sinceras y marcar una diferencia en su entorno.
          </p>
        </div>

        {/* Imagen Principal Hero */}
        <div className="relative overflow-hidden rounded-2xl border border-[#E4E4E7]/70 shadow-2xs bg-white max-h-[420px]">
          <img
            src={heroImg}
            alt="Ministerio TCT Jóvenes"
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
                  <span className="font-semibold text-[#111111]">TCT Jóvenes</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#A0A0A0]">Enfoque</span>
                  <span className="font-semibold text-[#111111]">Identidad, Discipulado y Amistad</span>
                </div>
              </div>
            </div>

            {/* Introducción / Descripción */}
            <div className="space-y-4 text-xs sm:text-sm text-[#666666] leading-relaxed">
              <h2 className="text-base sm:text-lg font-extrabold text-[#111111] tracking-tight">
                Impulsando la fe y el potencial de las nuevas generaciones
              </h2>
              <p>
                En <strong className="text-[#111111]">TCT Jóvenes</strong> creamos un ambiente auténtico e incluyente donde cada joven puede hacer preguntas reales, profundizar en la Biblia y fortalecer su fe frente a los retos de la vida cotidiana.
              </p>
              <p>
                A través de nuestras reuniones semanales, grupos de conexión y campamentos, fomentamos relaciones saludables y brindamos herramientas prácticas para que cada participante pueda descubrir sus dones y utilizarlos al servicio de los demás.
              </p>
              <p>
                Queremos ver a una juventud fuerte, cimentada en principios bíblicos, capaz de tomar decisiones sabias y apasionada por vivir de acuerdo al diseño de Dios para sus vidas.
              </p>
            </div>

            {/* Ejes Fundamentales */}
            <div className="bg-[#F4F4F5]/60 rounded-xl p-4 border border-[#E4E4E7]/60 space-y-3">
              <h3 className="text-xs font-bold text-[#111111] uppercase tracking-wider flex items-center gap-2">
                <Target className="w-4 h-4 text-[#1D35E1]" />
                Ejes Fundamentales de TCT Jóvenes
              </h3>
              <ul className="space-y-2 text-[11px] sm:text-xs text-[#666666]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D35E1] shrink-0 mt-0.5" />
                  <span><strong>Encuentros Semanales:</strong> Tiempos de alabanza, prédicas prácticas y dinámicas de integración.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D35E1] shrink-0 mt-0.5" />
                  <span><strong>Grupos Pequeños:</strong> Espacios de conversación cercanos para compartir vivencias y orar los unos por los otros.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D35E1] shrink-0 mt-0.5" />
                  <span><strong>Impacto y Servicio:</strong> Proyectos de apoyo social y actividades de alcance comunitario.</span>
                </li>
              </ul>
            </div>

            {/* Cita Destacada */}
            <blockquote className="border-l-2 border-[#1D35E1] pl-4 py-1 my-4 bg-slate-50/50 rounded-r-lg">
              <p className="text-xs sm:text-sm italic font-medium text-[#111111]">
                "Ninguno tenga en poco tu juventud, sino sé ejemplo de los creyentes en palabra, conducta, amor, espíritu, fe y pureza."
              </p>
              <footer className="text-[10px] text-[#919191] mt-1 font-bold">
                — Liderazgo de TCT Jóvenes
              </footer>
            </blockquote>

            {/* Galería de Imágenes */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                Vida en Comunidad
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="overflow-hidden rounded-xl border border-[#E4E4E7]/70 h-32 sm:h-40">
                  <img
                    src={galleryImg1}
                    alt="Reunión de jóvenes"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-[#E4E4E7]/70 h-32 sm:h-40">
                  <img
                    src={galleryImg2}
                    alt="Actividades juveniles"
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
                  Atención Juvenil
                </span>
                <h3 className="text-sm font-bold text-[#111111]">
                  Súmate a TCT Jóvenes
                </h3>
                <p className="text-[11px] text-[#919191]">
                  Te esperamos en nuestras reuniones semanales para que vivas la experiencia.
                </p>
              </div>

              <div className="space-y-3 text-[11px] text-[#666666]">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-[#1D35E1]" />
                  <span>Enseñanza bíblica contextualizada</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#1D35E1]" />
                  <span>Acompañamiento y mentoría</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#1D35E1]" />
                  <span>Comunidad activa y amistades firmes</span>
                </div>
              </div>
            </div>
          </aside>

        </div>

      </div>
    </article>
  );
}