import React from 'react';

const WhatWeBelieve = () => {
  const beliefs = [
    {
      number: '01',
      title: 'El Dios Trino',
      description: 'Creemos en un solo Dios verdadero, eterno e inmutable, manifestado en tres personas: Padre, Hijo y Espíritu Santo.',
    },
    {
      number: '02',
      title: 'Jesucristo',
      description: 'Creemos en Jesús como verdadero Dios y hombre, quien mediante su muerte y resurrección ofreció la expiación por nuestros pecados.',
    },
    {
      number: '03',
      title: 'El Espíritu Santo',
      description: 'Creemos en su presencia activa, que nos convence de pecado, nos regenera, nos guía a la verdad y nos empodera para una vida santa.',
    },
    {
      number: '04',
      title: 'Las Sagradas Escrituras',
      description: 'Creemos que la Biblia es la Palabra de Dios inspirada, inerrante y la autoridad suprema para nuestra fe y estilo de vida.',
    },
    {
      number: '05',
      title: 'Gracia y Salvación',
      description: 'Creemos en la gracia preveniente, el arrepentimiento, la justificación y la santificación entera que nos transforma a la imagen de Cristo.',
    },
    {
      number: '06',
      title: 'La Iglesia y Esperanza Futura',
      description: 'Creemos en la comunidad de creyentes, los sacramentos, la sanidad divina y la gloriosa segunda venida de Jesucristo.',
    },
  ];

  return (
    <section id="creemos" className="bg-white py-8 text-[#111111] sm:py-12">
      <div className="mx-auto max-w-[1150px] space-y-8 px-4 sm:px-8">
        
        {/* Encabezado Centrado */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="inline-block text-[11px] font-bold text-[#4fc1bd] uppercase tracking-wider bg-[#4fc1bd]/10 px-3 py-0.5 rounded-full">
            Nuestra Fe
          </span>
          
          <h2 className="text-2xl font-extrabold tracking-tight text-[#111111] sm:text-3xl">
            Lo Que Creemos
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
            Nuestra fe se fundamenta en las verdades eternas de la Palabra de Dios. Compartimos los principios bíblicos que guían nuestra manera de vivir y nuestra adoración.
          </p>
        </div>

        {/* Grid de 6 Tarjetas Compactas sin iconos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {beliefs.map((belief, index) => (
            <div
              key={index}
              className="group relative bg-slate-50/80 border border-slate-200/70 rounded-2xl p-5 sm:p-6 hover:bg-white hover:border-[#4fc1bd]/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Número legible y destacado en la esquina */}
              <span className="absolute top-3 right-4 text-3xl font-extrabold text-slate-300/80 select-none group-hover:text-[#4fc1bd]/40 transition-colors duration-300">
                {belief.number}
              </span>

              <div className="space-y-3 pr-8">
                <h3 className="text-base font-bold text-[#111111] leading-tight">
                  {belief.title}
                </h3>

                {/* Texto descriptivo */}
                <p className="text-xs text-slate-600 font-normal leading-relaxed">
                  {belief.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeBelieve;