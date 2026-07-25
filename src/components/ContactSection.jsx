import React from 'react';
import { Phone, Mail, MessageSquare, MapPin } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-5 h-5 text-[#111111]" />,
      title: 'Llámanos',
      description: 'Habla directamente con nuestro equipo de atención y pastoral.',
      actionText: '+52 961 123 4567',
      href: 'tel:+529611234567',
    },
    {
      icon: <Mail className="w-5 h-5 text-[#111111]" />,
      title: 'Correo Electrónico',
      description: 'Escríbenos para dudas sobre reuniones, cursos y actividades.',
      actionText: 'contacto@tct.org.mx',
      href: 'mailto:contacto@tct.org.mx',
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-[#111111]" />,
      title: 'Chat por WhatsApp',
      description: 'Respuesta rápida para resolver tus preguntas en minutos.',
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
    <section id="contacto" className="bg-white py-10 text-[#111111] sm:py-16">
      <div className="mx-auto max-w-[1150px] space-y-10 px-4 sm:px-8">
        
        {/* ================= ENCABEZADO ================= */}
        <div className="space-y-2.5 max-w-xl">
          {/* Pill Badge */}
          <span className="inline-block text-[11px] font-bold text-[#4fc1bd] uppercase tracking-wider bg-[#4fc1bd]/10 px-3 py-1 rounded-full">
            Contáctanos
          </span>

          {/* Título */}
          <h2 className="text-2xl font-extrabold tracking-tight text-[#111111] sm:text-3xl lg:text-[34px]">
            Estamos aquí para ayudarte
          </h2>

          {/* Descripción */}
          <p className="text-xs sm:text-sm text-[#808080] font-normal leading-relaxed">
            ¿Tienes preguntas sobre nuestras reuniones, ministerios o actividades? Ponte en contacto con nosotros por el medio que prefieras.
          </p>
        </div>

        {/* ================= GRID DE 4 TARJETAS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="group bg-slate-50/60 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between hover:border-[#4fc1bd]/40 transition-all duration-300"
            >
              <div>
                {/* Contenedor del Ícono */}
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center mb-5 group-hover:bg-[#4fc1bd]/10 transition-colors">
                  {method.icon}
                </div>

                {/* Título del Método */}
                <h3 className="text-base font-extrabold text-[#111111] mb-1 tracking-tight">
                  {method.title}
                </h3>

                {/* Descripción Corta */}
                <p className="text-xs text-[#707070] font-normal leading-relaxed mb-6">
                  {method.description}
                </p>
              </div>

              {/* Botón de Acción Inferior */}
              <a
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 bg-white rounded-xl border border-slate-200 text-center text-xs font-bold text-[#111111] hover:bg-slate-100 hover:border-[#4fc1bd]/50 active:scale-95 transition-all truncate block shadow-2xs"
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