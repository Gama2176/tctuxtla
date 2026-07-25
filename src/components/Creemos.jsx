import React from 'react';
import { 
  Sun, 
  Heart, 
  Flame, 
  BookOpen, 
  ShieldCheck, 
  Church 
} from 'lucide-react';

const WhatWeBelieve = () => {
  const beliefs = [
    {
      icon: Sun,
      title: 'El Dios Trino',
      description: 'Creemos en un solo Dios verdadero, eterno e inmutable, manifestado en tres personas: Padre, Hijo y Espíritu Santo.',
    },
    {
      icon: Heart,
      title: 'Jesucristo',
      description: 'Creemos en Jesús como verdadero Dios y hombre, quien mediante su muerte y resurrección ofreció la expiación por nuestros pecados.',
    },
    {
      icon: Flame,
      title: 'El Espíritu Santo',
      description: 'Creemos en su presencia activa, que nos convence de pecado, nos regenera, nos guía a la verdad y nos empodera para una vida santa.',
    },
    {
      icon: BookOpen,
      title: 'Las Sagradas Escrituras',
      description: 'Creemos que la Biblia es la Palabra de Dios inspirada, inerrante y la autoridad suprema para nuestra fe y estilo de vida.',
    },
    {
      icon: ShieldCheck,
      title: 'Gracia y Salvación',
      description: 'Creemos en la gracia preveniente, el arrepentimiento, la justificación y la santificación entera que nos transforma a la imagen de Cristo.',
    },
    {
      icon: Church,
      title: 'La Iglesia y Esperanza Futura',
      description: 'Creemos en la comunidad de creyentes, los sacramentos, la sanidad divina y la gloriosa segunda venida de Jesucristo.',
    },
  ];

  return (
    <section id="creemos" className="bg-white py-10 text-[#111111] sm:py-16">
      <div className="mx-auto max-w-[1150px] px-4 sm:px-8">
        
        {/* Encabezado Centrado */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2.5">
          <span className="inline-block text-[11px] font-bold text-[#4fc1bd] uppercase tracking-wider bg-[#4fc1bd]/10 px-3 py-1 rounded-full">
            Nuestra Fe
          </span>
          
          <h2 className="text-2xl font-extrabold tracking-tight text-[#111111] sm:text-3xl lg:text-[34px]">
            Lo Que Creemos
          </h2>
          
          <p className="text-xs sm:text-sm text-[#808080] font-normal leading-relaxed">
            Nuestra fe se fundamenta en las verdades eternas de la Palabra de Dios. Compartimos los principios bíblicos que guían nuestra manera de vivir y nuestra adoración.
          </p>
        </div>

        {/* Grid de 6 Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {beliefs.map((belief, index) => {
            const Icon = belief.icon;
            return (
              <div
                key={index}
                className="group bg-slate-50/50 rounded-2xl p-5 border border-slate-100 hover:bg-white hover:border-[#4fc1bd]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Encabezado superior de tarjeta: Ícono y número */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-[#4fc1bd]/10 border border-[#4fc1bd]/20 flex items-center justify-center text-[#4fc1bd] transition-colors group-hover:bg-[#4fc1bd] group-hover:text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-300 tracking-wider">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Título de la tarjeta */}
                  <h3 className="text-sm font-bold text-[#111111] mb-2 tracking-tight">
                    {belief.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-xs text-[#707070] font-normal leading-relaxed">
                    {belief.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhatWeBelieve;