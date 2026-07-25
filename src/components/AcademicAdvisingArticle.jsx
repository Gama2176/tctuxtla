import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  CheckCircle2, 
  Globe2, 
  Send, 
  Users, 
  Target,
  Copy,
  ArrowLeft
} from 'lucide-react';
import exampleImg from '../images/banner.svg';

export default function AcademicAdvisingArticle({ onGoBack }) {
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
              <span>Volver ai inicio</span>
            </button>
          </div>
        )}

        {/* ================= 1. ENCABEZADO Y TÍTULO ================= */}
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-3 text-[10px] font-semibold text-[#919191]">
            <span className="px-2 py-0.5 bg-[#F4F4F5] rounded-md border border-[#E4E4E7]/60 text-[#111111] font-bold">
              Asesoría Académica
            </span>
            <span>•</span>
            <span>4 min lectura</span>
            <span>•</span>
            <span>Atención 1 a 1</span>
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-[#111111] sm:text-3xl lg:text-[34px] leading-tight">
            Acompañamiento personalizado para alcanzar tus <span className="text-[#1D35E1]">objetivos lingüísticos</span>
          </h1>

          <p className="text-xs sm:text-sm text-[#919191] font-normal leading-relaxed">
            Supera bloqueos, prepárate para exámenes de certificación o diseña un plan de estudio a tu medida con nuestros asesores académicos.
          </p>
        </div>

        {/* ================= 2. IMAGEN DESTACADA PRINCIPAL ================= */}
        <div className="relative overflow-hidden rounded-2xl border border-[#E4E4E7]/70 shadow-2xs h-[280px] sm:h-[380px] lg:h-[420px]">
          <img
            src={exampleImg}
          />
        </div>

        {/* ================= 3. CONTENIDO EN 2 COLUMNAS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">

          {/* COLUMNA IZQUIERDA: CUERPO DEL ARTÍCULO */}
          <div className="lg:col-span-8 space-y-6">

            {/* Datos de Autor y Fecha */}
            <div className="flex items-center justify-between border-b border-[#F4F4F5] pb-4 text-[11px] text-[#919191]">
              <div className="flex items-center gap-6">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#A0A0A0]">Escrito por</span>
                  <span className="font-semibold text-[#111111]">Departamento de Asesoría Psicopedagógica</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#A0A0A0]">Publicado</span>
                  <span className="font-semibold text-[#111111]">Julio 2026</span>
                </div>
              </div>
            </div>

            {/* Introducción */}
            <div className="space-y-3 text-xs sm:text-sm text-[#666666] leading-relaxed">
              <h2 className="text-base sm:text-lg font-extrabold text-[#111111] tracking-tight">
                Estrategias a la medida de tu estilo de aprendizaje
              </h2>
              <p>
                Cada estudiante aprende de manera diferente. El servicio de **Asesoría Académica** de <strong className="text-[#111111]">Euro Centro</strong> está diseñado para brindar apoyo focalizado en las áreas que más necesitas reforzar.
              </p>
              <p>
                Ya sea que necesites asesoría previa a una entrevista laboral en otro idioma, nivelación para certificar un nivel del Marco Común Europeo (MCER) o refuerzo en temas gramaticales específicos, te asignamos a un tutor experto.
              </p>
            </div>

            {/* Puntos Clave */}
            <div className="bg-[#F4F4F5]/60 rounded-xl p-4 border border-[#E4E4E7]/60 space-y-3">
              <h3 className="text-xs font-bold text-[#111111] uppercase tracking-wider flex items-center gap-2">
                <Target className="w-4 h-4 text-[#1D35E1]" />
                ¿Qué incluye la Asesoría Académica?
              </h3>
              <ul className="space-y-2 text-[11px] sm:text-xs text-[#666666]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D35E1] shrink-0 mt-0.5" />
                  <span><strong>Diagnóstico Inicial:</strong> Evaluación precisa de fortalezas y áreas de oportunidad.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D35E1] shrink-0 mt-0.5" />
                  <span><strong>Plan Personalizado:</strong> Sesiones 1 a 1 orientadas a tus metas puntuales.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D35E1] shrink-0 mt-0.5" />
                  <span><strong>Estrategias de Estudio:</strong> Tácticas eficientes de memorización, pronunciación y redacción.</span>
                </li>
              </ul>
            </div>

            {/* Cita Destacada */}
            <blockquote className="border-l-2 border-[#1D35E1] pl-4 py-1 my-4 bg-slate-50/50 rounded-r-lg">
              <p className="text-xs sm:text-sm italic font-medium text-[#111111]">
                "Una asesoría a tiempo puede transformar la frustración en fluidez y abrirte la puerta a la certificación que buscas."
              </p>
              <footer className="text-[10px] text-[#919191] mt-1 font-bold">
                — Coordinación Pedagógica, Euro Centro
              </footer>
            </blockquote>

            {/* Galería de imágenes secundarias */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                Acompañamiento Tutorizado
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="overflow-hidden rounded-xl border border-[#E4E4E7]/70 h-32 sm:h-40">
                  <img
                    src={exampleImg}
                    alt="Sesión de tutoría personalizada"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-[#E4E4E7]/70 h-32 sm:h-40">
                  <img
                    src={exampleImg}
                    alt="Evaluación y materiales"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA: TARJETA DE INSCRIPCIÓN */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
            <div className="rounded-2xl border border-[#E4E4E7]/80 bg-white p-5 shadow-2xs space-y-4">
              
              <div className="space-y-1 text-center">
                <span className="inline-block px-2 py-0.5 bg-blue-50 text-[#1D35E1] rounded-md text-[10px] font-bold">
                  Atención Personalizada
                </span>
                <h3 className="text-sm font-bold text-[#111111]">
                  Solicita una Asesoría
                </h3>
                <p className="text-[11px] text-[#919191]">
                  Agenda tu sesión diagnóstica y habla con un especialista.
                </p>
              </div>

              {/* Formulario */}
              <form onSubmit={(e) => e.preventDefault()} className="space-y-2.5">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu correo electrónico"
                    required
                    className="w-full px-3 py-2 rounded-xl border border-[#E4E4E7] text-xs text-[#111111] placeholder:text-[#A0A0A0] focus:outline-none focus:border-[#1D35E1] transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 rounded-xl bg-[#1D35E1] text-white text-xs font-bold shadow-2xs hover:bg-blue-700 active:scale-95 transition cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3 h-3" />
                  <span>Agendar Asesoría</span>
                </button>
              </form>

              <p className="text-[9px] text-center text-[#A0A0A0]">
                Sin compromisos. Respetamos tu privacidad.
              </p>
            </div>
          </aside>

        </div>

      </div>
    </article>
  );
}