import React from 'react';
import { Phone, Mail, MessageSquare, MapPin } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-5 h-5 text-[#111111]" />,
      title: 'Llámanos',
      description: 'Habla directamente con nuestro equipo de atención.',
      actionText: '+52 961 123 4567',
      href: 'tel:+529611234567',
    },
    {
      icon: <Mail className="w-5 h-5 text-[#111111]" />,
      title: 'Correo Electrónico',
      description: 'Escríbenos para informes sobre cursos e inscripciones.',
      actionText: 'contacto@eurocentro.edu.mx',
      href: 'mailto:contacto@eurocentro.edu.mx',
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-[#111111]" />,
      title: 'Chat por WhatsApp',
      description: 'Respuesta inmediata para resolver todas tus dudas.',
      actionText: 'Iniciar conversación',
      href: 'https://wa.me/529611234567',
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#111111]" />,
      title: 'Nuestras Oficinas',
      description: 'Visítanos en nuestras instalaciones presenciales.',
      actionText: 'Ver en Google Maps',
      href: 'https://maps.google.com',
    },
  ];

  return (
    <section id="contacto" className="py-2 text-[#111111] sm:py-16 lg:py-8">
      <div className="mx-auto max-w-[1150px] space-y-10 px-4 sm:px-8">
        
        {/* ================= ENCABEZADO ================= */}
        <div className="space-y-3 max-w-xl">
          {/* Badge Superior */}
          <div className="inline-block px-3 py-1 bg-[#E2E8F0]/70 rounded-md">
            <span className="text-[11px] font-bold text-[#2547eb] tracking-wide uppercase">
              Contáctanos
            </span>
          </div>

          {/* Título */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            Estamos aquí para ayudarte
          </h2>

          {/* Descripción */}
          <p className="text-xs sm:text-sm text-[#71717A] leading-relaxed">
            ¿Tienes preguntas sobre nuestros niveles, horarios o procesos de inscripción? Ponte en contacto con nosotros por el medio que prefieras.
          </p>
        </div>

        {/* ================= GRID DE 4 TARJETAS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-[#E4E4E7]/60 flex flex-col justify-between hover:shadow-sm transition-all duration-300"
            >
              <div>
                {/* Contenedor del Ícono (Gris Claro) */}
                <div className="w-10 h-10 rounded-xl bg-[#F4F4F5] flex items-center justify-center mb-5">
                  {method.icon}
                </div>

                {/* Título del Método */}
                <h3 className="text-base font-bold text-[#111111] mb-1.5">
                  {method.title}
                </h3>

                {/* Descripción Corta */}
                <p className="text-[11px] sm:text-xs text-[#71717A] leading-relaxed mb-6">
                  {method.description}
                </p>
              </div>

              {/* Botón / Recuadro de Acción Inferior */}
              <a
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl border border-[#E4E4E7] text-center text-xs font-semibold text-[#111111] hover:bg-[#F4F4F5] transition-colors truncate block"
              >
                {method.actionText}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContactSection;