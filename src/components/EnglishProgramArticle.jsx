import React, { useState, useEffect } from 'react';
import { 
  Award, 
  CheckCircle2, 
  Globe2, 
  Send, 
  Users, 
  BookOpen,
  Share2,
  Copy,
  ArrowLeft
} from 'lucide-react';
import exampleImg from '../images/banner.svg';

export default function EnglishProgramArticle({ onGoBack }) {
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);

  // EFECTO: Mueve la pantalla arriba del todo al entrar al componente
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

        {/* Botón Volver a la vista principal */}
        {onGoBack && (
          <div>
            <button
              type="button"
              onClick={onGoBack}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E4E4E7]/70 bg-white text-[11px] font-semibold text-[#111111] hover:bg-[#F4F4F5] transition active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#666666]" />
              <span>Volver a cursos</span>
            </button>
          </div>
        )}

        {/* ================= 1. ENCABEZADO Y TÍTULO ================= */}
        <div className="max-w-3xl space-y-2">
          {/* Badges superiores */}
          <div className="flex items-center gap-3 text-[10px] font-semibold text-[#919191]">
            <span className="px-2 py-0.5 bg-[#F4F4F5] rounded-md border border-[#E4E4E7]/60 text-[#111111] font-bold">
              Programa de Inglés
            </span>
            <span>•</span>
            <span>5 min lectura</span>
            <span>•</span>
            <span>+1.2k Alumnos inscritos</span>
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-[#111111] sm:text-3xl lg:text-[34px] leading-tight">
            Dominar el inglés con la metodología <span className="text-[#1D35E1]">Euro Centro</span>
          </h1>

          <p className="text-xs sm:text-sm text-[#919191] font-normal leading-relaxed">
            Descubre cómo nuestro enfoque práctico e interdisciplinario te permite alcanzar fluidez real y certificaciones internacionales reconocidas por la SEP y TOEFL.
          </p>
        </div>

        {/* ================= 2. IMAGEN DESTACADA PRINCIPAL ================= */}
        <div className="relative overflow-hidden rounded-2xl border border-[#E4E4E7]/70 shadow-2xs h-[280px] sm:h-[380px] lg:h-[420px]">
          <img
            src={exampleImg}
            alt="Estudiantes en Euro Centro de Idiomas"
            className="h-full w-full object-cover"
          />
        </div>

        {/* ================= 3. CONTENIDO EN 2 COLUMNAS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">

          {/* COLUMNA IZQUIERDA: CUERPO DEL ARTÍCULO (col-span-8) */}
          <div className="lg:col-span-8 space-y-6">

            {/* Datos de Autor y Fecha */}
            <div className="flex items-center justify-between border-b border-[#F4F4F5] pb-4 text-[11px] text-[#919191]">
              <div className="flex items-center gap-6">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-[#A0A0A0]">Escrito por</span>
                  <span className="font-semibold text-[#111111]">Coordinación Académica</span>
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
                El idioma clave para tu éxito académico y profesional
              </h2>
              <p>
                En <strong className="text-[#111111]">Euro Centro de Idiomas de México</strong>, entendemos que aprender inglés va más allá de memorizar reglas gramaticales. Nuestro programa está diseñado para que desarrolles habilidades de comunicación efectivas en situaciones reales del mundo profesional y cotidiano.
              </p>
              <p>
                A través de clases interactivas, grupos reducidos y docentes altamente calificados, garantizamos un avance medible desde tu primer nivel.
              </p>
            </div>

            {/* Puntos Clave del Programa */}
            <div className="bg-[#F4F4F5]/60 rounded-xl p-4 border border-[#E4E4E7]/60 space-y-3">
              <h3 className="text-xs font-bold text-[#111111] uppercase tracking-wider flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-[#1D35E1]" />
                ¿Qué hace único nuestro curso de inglés?
              </h3>
              <ul className="space-y-2 text-[11px] sm:text-xs text-[#666666]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D35E1] shrink-0 mt-0.5" />
                  <span><strong>Preparación Internacional:</strong> Enfoque directo hacia exámenes TOEFL, TOEIC y CENNI.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D35E1] shrink-0 mt-0.5" />
                  <span><strong>Grupos Reducidos:</strong> Atención personalizada para asegurar tu participación en cada sesión.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D35E1] shrink-0 mt-0.5" />
                  <span><strong>Modalidad Híbrida:</strong> Elige entre clases presenciales o en línea en vivo con las mismas validez.</span>
                </li>
              </ul>
            </div>

            {/* Cita Destacada (Blockquote) */}
            <blockquote className="border-l-2 border-[#1D35E1] pl-4 py-1 my-4 bg-slate-50/50 rounded-r-lg">
              <p className="text-xs sm:text-sm italic font-medium text-[#111111]">
                "El inglés no es solo una asignatura, es la herramienta que abre las puertas a oportunidades laborales globales y especializaciones internacionales."
              </p>
              <footer className="text-[10px] text-[#919191] mt-1 font-bold">
                — Dirección General, Euro Centro de Idiomas
              </footer>
            </blockquote>

            {/* Galería de imágenes secundarias */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                Nuestras instalaciones y dinámicas
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="overflow-hidden rounded-xl border border-[#E4E4E7]/70 h-32 sm:h-40">
                  <img
                    src={exampleImg}
                    alt="Clases en grupo"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-[#E4E4E7]/70 h-32 sm:h-40">
                  <img
                    src={exampleImg}
                    alt="Material didáctico"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA: TARJETA FLOTANTE DE INSCRIPCIÓN / NEWSLETTER (col-span-4) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
            <div className="rounded-2xl border border-[#E4E4E7]/80 bg-white p-5 shadow-2xs space-y-4">
              
              <div className="space-y-1 text-center">
                <span className="inline-block px-2 py-0.5 bg-blue-50 text-[#1D35E1] rounded-md text-[10px] font-bold">
                  Inscripciones Abiertas
                </span>
                <h3 className="text-sm font-bold text-[#111111]">
                  Solicita información del Programa de Inglés
                </h3>
                <p className="text-[11px] text-[#919191]">
                  Recibe el plan de estudios, costos y horarios disponibles directamente en tu correo.
                </p>
              </div>

              {/* Prueba Social de Alumnos */}
              <div className="flex items-center justify-center gap-2 py-1 border-y border-[#F4F4F5]">
                <div className="flex -space-x-1.5">
                  <img
                    className="w-6 h-6 rounded-full ring-2 ring-white object-cover"
                    src={exampleImg}
                    alt="Alumno"
                  />
                  <img
                    className="w-6 h-6 rounded-full ring-2 ring-white object-cover"
                    src={exampleImg}
                    alt="Alumno"
                  />
                  <img
                    className="w-6 h-6 rounded-full ring-2 ring-white object-cover"
                    src={exampleImg}
                    alt="Alumno"
                  />
                </div>
                <span className="text-[10px] font-bold text-[#111111]">
                  +2,500 alumnos ya inscritos
                </span>
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
                  <span>Obtener plan de estudio</span>
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