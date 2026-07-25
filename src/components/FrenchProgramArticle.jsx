import React, { useState, useEffect } from 'react';
import { 
  Award, 
  CheckCircle2, 
  Globe2, 
  Send, 
  Users, 
  BookOpen,
  Copy,
  ArrowLeft
} from 'lucide-react';
import exampleImg from '../images/banner.svg';

export default function FrenchProgramArticle({ onGoBack }) {
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);

  // EFECTO: Scroll automático al inicio al montar el componente
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
              <span>Volver al inicio</span>
            </button>
          </div>
        )}

        {/* ================= 1. ENCABEZADO Y TÍTULO ================= */}
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-3 text-[10px] font-semibold text-[#919191]">
            <span className="px-2 py-0.5 bg-[#F4F4F5] rounded-md border border-[#E4E4E7]/60 text-[#111111] font-bold">
              Programa de Francés
            </span>
            <span>•</span>
            <span>5 min lectura</span>
            <span>•</span>
            <span>+850 Alumnos inscritos</span>
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-[#111111] sm:text-3xl lg:text-[34px] leading-tight">
            Descubre la elegancia y oportunidades del <span className="text-[#1D35E1]">idioma francés</span>
          </h1>

          <p className="text-xs sm:text-sm text-[#919191] font-normal leading-relaxed">
            Aprende la segunda lengua más hablada en diplomacia y negocios internacionales con la metodología práctica de Euro Centro de Idiomas de México.
          </p>
        </div>

        {/* ================= 2. IMAGEN DESTACADA PRINCIPAL ================= */}
        <div className="relative overflow-hidden rounded-2xl border border-[#E4E4E7]/70 shadow-2xs h-[280px] sm:h-[380px] lg:h-[420px]">
          <img
            src={exampleImg}
            alt="Programa de Francés en Euro Centro"
            className="h-full w-full object-cover"
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
                  <span className="font-semibold text-[#111111]">Coordinación de Lenguas Romances</span>
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
                El idioma de la cultura, la diplomacia y el comercio multinacional
              </h2>
              <p>
                En <strong className="text-[#111111]">Euro Centro de Idiomas de México</strong>, nuestro programa de francés te sumerge desde la primera sesión en un entorno conversacional estructurado para lograr autonomía en lectura, escritura, comprensión auditiva y expresión oral.
              </p>
              <p>
                Tanto si buscas estudiar en el extranjero, aplicar a becas en países francófonos o postular a vacantes en empresas multinacionales, nuestro mapa curricular abarca desde nivel A1 hasta C2 según el Marco Común Europeo.
              </p>
            </div>

            {/* Puntos Clave del Programa */}
            <div className="bg-[#F4F4F5]/60 rounded-xl p-4 border border-[#E4E4E7]/60 space-y-3">
              <h3 className="text-xs font-bold text-[#111111] uppercase tracking-wider flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-[#1D35E1]" />
                ¿Qué incluye nuestro programa de francés?
              </h3>
              <ul className="space-y-2 text-[11px] sm:text-xs text-[#666666]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D35E1] shrink-0 mt-0.5" />
                  <span><strong>Certificación Oficial:</strong> Preparación intensiva para exámenes DELF y DALF.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D35E1] shrink-0 mt-0.5" />
                  <span><strong>Docentes Nativos y Certificados:</strong> Profesores con vasta experiencia pedagógica.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1D35E1] shrink-0 mt-0.5" />
                  <span><strong>Enfoque Práctico:</strong> Dinámicas orientadas a situaciones de trabajo, viaje y vida cotidiana.</span>
                </li>
              </ul>
            </div>

            {/* Cita Destacada */}
            <blockquote className="border-l-2 border-[#1D35E1] pl-4 py-1 my-4 bg-slate-50/50 rounded-r-lg">
              <p className="text-xs sm:text-sm italic font-medium text-[#111111]">
                "El francés es hablado en los cinco continentes y es idioma oficial de decenas de organizaciones globales. Aprenderlo multiplica exponencialmente tu perfil."
              </p>
              <footer className="text-[10px] text-[#919191] mt-1 font-bold">
                — Departamento Académico de Francés, Euro Centro
              </footer>
            </blockquote>

            {/* Galería de imágenes secundarias */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                Inmersión cultural y aprendizaje colaborativo
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="overflow-hidden rounded-xl border border-[#E4E4E7]/70 h-32 sm:h-40">
                  <img
                    src={exampleImg}
                    alt="Estudiantes de francés"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-[#E4E4E7]/70 h-32 sm:h-40">
                  <img
                    src={exampleImg}
                    alt="Material de lectura en francés"
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
                  Inscripciones Abiertas
                </span>
                <h3 className="text-sm font-bold text-[#111111]">
                  Solicita información del Programa de Francés
                </h3>
                <p className="text-[11px] text-[#919191]">
                  Recibe el plan de estudios, costos y horarios presenciales u online en tu correo.
                </p>
              </div>

              {/* Prueba Social */}
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
                  +850 alumnos estudiando francés
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
                  <span>Obtener plan de francés</span>
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