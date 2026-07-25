import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(true);

  // Número telefónico en formato internacional (Código de país + Lada + Teléfono)
  const phoneNumber = '529613001519';
  const message = 'Hola, me gustaría información sobre las reuniones y actividades de TCT.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    let hideTimer;

    // 1. Ocultar el texto después de 5 segundos de carga inicial
    const initialTimer = setTimeout(() => {
      setIsExpanded(false);
    }, 5000);

    // 2. Repetir el ciclo cada 30 segundos
    const interval = setInterval(() => {
      setIsExpanded(true);

      hideTimer = setTimeout(() => {
        setIsExpanded(false);
      }, 5000);
    }, 30000);

    // Limpieza de timers al desmontar el componente
    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp a TCT"
      className={`group fixed bottom-5 right-5 z-50 flex items-center rounded-full border border-slate-200/80 bg-white p-2 text-[#111111] shadow-lg shadow-slate-200/60 transition-all duration-500 ease-in-out hover:border-emerald-300 hover:bg-emerald-50/40 hover:shadow-xl active:scale-95 cursor-pointer ${
        isExpanded ? 'pr-4' : 'pr-2'
      }`}
    >
      {/* Icono en contenedor verde con punto de estado */}
      <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xs">
        <MessageCircle className="h-4 h-4 fill-white text-emerald-500" />
        
        {/* Punto pulsante cuando el texto está oculto */}
        {!isExpanded && (
          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-white"></span>
          </span>
        )}
      </div>

      {/* Texto animado que se despliega automáticamente o al hacer Hover */}
      <div
        className={`grid transition-[grid-template-columns,opacity,margin] duration-500 ease-in-out ${
          isExpanded
            ? 'grid-cols-[1fr] opacity-100 ml-2.5'
            : 'grid-cols-[0fr] opacity-0 ml-0 group-hover:grid-cols-[1fr] group-hover:opacity-100 group-hover:ml-2.5'
        }`}
      >
        <div className="overflow-hidden whitespace-nowrap">
          <span className="text-xs font-extrabold tracking-tight text-slate-800">
            ¿Dudas? <span className="text-emerald-600 font-extrabold">Escríbenos</span>
          </span>
        </div>
      </div>
    </a>
  );
}