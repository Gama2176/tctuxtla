import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

const faqs = [
  {
    id: 1,
    category: 'ECIM',
    question: '¿Cuáles son las modalidades de clases disponibles?',
    answer:
      'Ofrecemos clases presenciales en nuestras instalaciones y cursos en línea en vivo. Ambas opciones cuentan con la misma validez académica.',
  },
  {
    id: 2,
    category: 'ECIM',
    question: '¿Qué certificación recibo al concluir mi programa?',
    answer:
      'Al completar tus niveles recibes nuestra certificación avalada, además de la preparación para exámenes oficiales como TOEFL o CENNI.',
  },
  {
    id: 3,
    category: 'ECIM',
    question: '¿Tienen horarios flexibles si trabajo o estudio?',
    answer:
      'Contamos con horarios matutinos, vespertinos, nocturnos y sabatinos intensivos adaptados a tu ritmo de vida diario.',
  },
  {
    id: 4,
    category: 'ECIM',
    question: '¿Cómo sé en qué nivel debo empezar?',
    answer:
      'Realizamos un examen de colocación gratuito y sin compromiso para evaluar tus habilidades actuales de habla, escucha, lectura y escritura.',
  },
  {
    id: 5,
    category: 'ECIM',
    question: '¿Cuáles son las formas de pago aceptadas?',
    answer:
      'Aceptamos tarjetas de débito/crédito, transferencias y pagos en efectivo en nuestro centro. Contamos con opciones de pago mensual o por módulo.',
  },
];

export default function FAQSection({ onNavigateToContact }) {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="preguntas" className="bg-white py-2 text-[#111111] sm:py-10 lg:py-6">
      <div className="mx-auto max-w-[1150px] space-y-8 px-4 sm:px-8">
        
        {/* Encabezado Centrado (Mismo formato que AboutUs) */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <p className="text-[11px] font-bold text-[#111111] uppercase tracking-wider">
            Dudas Comunes
          </p>

          <h2 className="text-2xl font-extrabold tracking-tight text-[#111111] sm:text-3xl lg:text-[34px]">
            Preguntas Frecuentes
          </h2>

          <p className="text-xs sm:text-sm text-[#919191] font-normal leading-relaxed max-w-xl mx-auto">
            Todo lo que necesitas saber sobre nuestras inscripciones, métodos de enseñanza y certificaciones.
          </p>
        </div>

        {/* Acordeón Compacto */}
        <div className="mx-auto max-w-2xl space-y-2.5">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`group rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? 'border-[#1D35E1]/40 bg-white shadow-2xs'
                    : 'border-[#E4E4E7]/70 bg-white hover:border-[#E4E4E7]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="flex w-full items-center justify-between gap-3 p-3.5 text-left transition cursor-pointer sm:p-4"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-2.5">
                    {/* Badge Categoría */}
                    <div className="inline-block px-2 py-0.5 bg-[#F4F4F5] rounded-md border border-[#E4E4E7]/60">
                      <span className="text-[10px] font-semibold text-[#111111]">
                        {faq.category}
                      </span>
                    </div>

                    <span className="text-xs sm:text-sm font-bold text-[#111111] tracking-tight">
                      {faq.question}
                    </span>
                  </div>

                  {/* Flecha discreta */}
                  <div
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-[#1D35E1] text-white'
                        : 'bg-[#F4F4F5] text-[#666666]'
                    }`}
                  >
                    <ChevronDown className="h-3.5 w-3.5" />
                  </div>
                </button>

                {/* Despliegue Suave */}
                <div
                  className={`grid transition-[grid-template-rows,padding] duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] pb-3.5 pt-0' : 'grid-rows-[0fr] pb-0 pt-0'
                  }`}
                >
                  <div className="overflow-hidden px-3.5 sm:px-4">
                    <p className="text-[11px] leading-relaxed text-[#919191] border-t border-[#F4F4F5] pt-2.5">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer pequeño de la sección */}
        <div className="text-center pt-2 pb-8">
          <p className="text-[11px] text-[#919191]">
            ¿Tienes otra duda?{' '}
            <a
              href="#contacto"
              onClick={(e) => {
                if (onNavigateToContact) {
                  e.preventDefault();
                  onNavigateToContact();
                }
              }}
              className="font-bold text-[#1D35E1] hover:underline inline-flex items-center gap-1"
            >
              <span>Contáctanos aquí</span>
              <MessageCircle className="h-3 w-3" />
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}