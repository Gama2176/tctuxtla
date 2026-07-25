import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(true);

  // Número telefónico en formato internacional
  const phoneNumber = '9613001519'; // Reemplaza con tu número real
  const message = 'Hola, me gustaría obtener más información sobre los cursos de idiomas.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    // 1. Ocultar el texto por primera vez a los 10 segundos de cargar
    const initialTimer = setTimeout(() => {
      setIsExpanded(false);
    }, 5000);

    // 2. Repetir el ciclo cada 60 segundos (1 minuto)
    const interval = setInterval(() => {
      setIsExpanded(true); // Se despliega el texto

      // Permanecer abierto por 10 segundos y ocultarse de nuevo
      setTimeout(() => {
        setIsExpanded(false);
      }, 5000);
    }, 30000);

    // Limpieza de timers al desmontar el componente
    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={`group fixed bottom-5 right-5 z-50 flex items-center rounded-full border border-[#E4E4E7]/80 bg-white p-2 text-[#111111] shadow-md shadow-slate-200/50 transition-all duration-500 ease-in-out hover:border-emerald-200 hover:bg-emerald-50/50 hover:text-emerald-600 hover:shadow-lg active:scale-95 cursor-pointer ${
        isExpanded ? 'pr-3.5' : 'pr-2'
      }`}
    >
      {/* Icono compacto en contenedor verde */}
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xs">
        <MessageCircle className="h-5 w-5" />
      </div>

      {/* Texto animado (se contrae de 10s a 0s, expandiéndose en Hover o según el Intervalo) */}
      <div
        className={`grid transition-[grid-template-columns,opacity] duration-500 ease-in-out ${
          isExpanded
            ? 'grid-cols-[1fr] opacity-100 ml-2'
            : 'grid-cols-[0fr] opacity-0 ml-0 group-hover:grid-cols-[1fr] group-hover:opacity-100 group-hover:ml-2'
        }`}
      >
        <div className="overflow-hidden whitespace-nowrap">
          <span className="text-[11px] font-bold tracking-tight">
            ¿Dudas? <span className="text-emerald-600">Escríbenos</span>
          </span>
        </div>
      </div>
    </a>
  );
}