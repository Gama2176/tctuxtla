import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

const faqs = [
  {
    id: 1,
    category: 'TCT',
    question: '¿Cuáles son los horarios de nuestros servicios?',
    answer:
      'Nos reunimos de manera presencial en nuestras instalaciones los domingos a las 10:00 AM. También transmitimos en vivo a través de nuestras redes sociales.',
  },
  {
    id: 2,
    category: 'TCT',
    question: '¿Tienen espacio o actividades para niños y jóvenes?',
    answer:
      '¡Sí! Contamos con TCT Kids para los más pequeños y la comunidad de TCT Jóvenes (JNI), ofreciendo espacios seguros, dinámicos y enfocados en su crecimiento espiritual.',
  },
  {
    id: 3,
    category: 'TCT',
    question: '¿Cómo puedo iniciar mi proceso de discipulado?',
    answer:
      'Puedes integrarte a la Ruta TCT, nuestro programa de discipulado por etapas diseñado para guiarte en tu fe, conocer la Palabra de Dios y descubrir tus dones.',
  },
  {
    id: 4,
    category: 'TCT',
    question: '¿Qué necesito para bautizarme en la iglesia?',
    answer:
      'Si has tomado la decisión de seguir a Jesús, puedes solicitar tu inscripción a las charlas preparatorias de bautismo con nuestro equipo pastoral.',
  },
  {
    id: 5,
    category: 'TCT',
    question: '¿Cómo puedo involucrarme o servir en un ministerio?',
    answer:
      'Puedes acercarte al área de contacto o hablar con un servidor al finalizar las reuniones para conocer las áreas disponibles de acuerdo a tus dones y talentos.',
  },
];

export default function FAQSection({ onNavigateToContact }) {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="preguntas" className="bg-white py-10 text-[#111111] sm:py-16">
      <div className="mx-auto max-w-[1150px] space-y-10 px-4 sm:px-8">
        
        {/* Encabezado Centrado */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <span className="inline-block text-[11px] font-bold text-[#4fc1bd] uppercase tracking-wider bg-[#4fc1bd]/10 px-3 py-1 rounded-full">
            Dudas Comunes
          </span>

          <h2 className="text-2xl font-extrabold tracking-tight text-[#111111] sm:text-3xl lg:text-[34px]">
            Preguntas Frecuentes
          </h2>

          <p className="text-xs sm:text-sm text-[#808080] font-normal leading-relaxed">
            Todo lo que necesitas saber sobre nuestras reuniones, ministerios, discipulado y actividades comunitarias.
          </p>
        </div>

        {/* Acordeón Compacto */}
        <div className="mx-auto max-w-2xl space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`group rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#4fc1bd]/50 bg-slate-50/40 shadow-2xs'
                    : 'border-slate-100 bg-slate-50/60 hover:border-slate-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="flex w-full items-center justify-between gap-3 p-4 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-2.5">
                    {/* Badge Categoría */}
                    <div className="inline-block px-2 py-0.5 bg-white rounded-md border border-slate-200/80 shadow-2xs">
                      <span className="text-[10px] font-bold text-slate-700">
                        {faq.category}
                      </span>
                    </div>

                    <span className="text-xs sm:text-sm font-bold text-[#111111] tracking-tight">
                      {faq.question}
                    </span>
                  </div>

                  {/* Flecha indicadora */}
                  <div
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-[#4fc1bd] text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="h-3.5 w-3.5" />
                  </div>
                </button>

                {/* Despliegue Suave */}
                <div
                  className={`grid transition-[grid-template-rows,padding] duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] pb-4 pt-0' : 'grid-rows-[0fr] pb-0 pt-0'
                  }`}
                >
                  <div className="overflow-hidden px-4">
                    <p className="text-xs leading-relaxed text-[#808080] border-t border-slate-200/60 pt-3">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer pequeño de la sección */}
        <div className="text-center pt-2">
          <p className="text-xs text-[#808080]">
            ¿Tienes otra duda?{' '}
            <a
              href="#contacto"
              onClick={(e) => {
                if (onNavigateToContact) {
                  e.preventDefault();
                  onNavigateToContact();
                }
              }}
              className="font-bold text-[#4fc1bd] hover:underline inline-flex items-center gap-1 ml-1"
            >
              <span>Contáctanos aquí</span>
              <MessageCircle className="h-3.5 w-3.5" />
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}