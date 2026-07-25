  import React from 'react';
  import mision from '../images/mision.svg';
  import vision from '../images/vision.svg';
  import valores from '../images/valores.svg';

  const AboutUs = () => {
    const values = [
      {
        category: 'Misión',
        title: 'Formar profesionales globales e interdisciplinarios',
        description:
          'Guiar a cada persona hacia una relación profunda y personal con Jesús, acompañándola activamente en su proceso de crecimiento espiritual y construyendo un entorno familiar de fe, esperanza y servicio.',
        image: mision,
        stats: ['+15 años', 'Excelencia', 'Certificados'],
      },
      {
        category: 'Visión',
        title: 'Líderes en enseñanza e innovación lingüística',
        description: 'Ser una iglesia relevante, abierta y en constante expansión que impacte a Tuxtla Gutiérrez y sus alrededores, trascendiendo fronteras a través de nuestras transmisiones en línea.',
        image: vision,
        stats: ['Presencial', 'Online', 'Global'],
      },
      {
        category: 'Valores',
        title: 'Compromiso, diversidad y pasión por enseñar',
        description:
          'Amor Incondicional y Hospitalidad, Transformación y Restauración, Comunidad y Discipulado, Excelencia e Integridad, Pasión por la Innovación y el Servicio',
        image: valores,
        stats: ['Calidez', 'Calidad', 'Comunidad'],
      },
    ];

    return (
      <section id="nosotros" className="bg-white py-2 text-[#111111] sm:py-10 lg:py-6">
        <div className="mx-auto max-w-[1150px] space-y-8 px-4 sm:px-8">
          
          {/* Encabezado Centrado */}
          <div className="text-center max-w-3xl mx-auto space-y-2">
            {/* Badge estilo pill superior */}
              <p className="text-[11px] font-bold text-[#111111] uppercase tracking-wider">
                Nosotros
              </p>
            

            <h2 className="text-2xl font-extrabold tracking-tight text-[#111111] sm:text-3xl lg:text-[34px]">
              El Origen de Nuestra Comunidad
            </h2>

            <p className="text-xs sm:text-sm text-[#919191] font-normal leading-relaxed max-w-xl mx-auto">
              Descubre cómo nació este espacio dedicado a conectar personas y guiarlas hacia un encuentro personal con Dios.
            </p>
          </div>

          {/* ================= GRID INFERIOR (3 TARJETAS VERTICALES) ================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {values.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-[#E4E4E7]/70 p-4 shadow-2xs hover:shadow-sm transition-all duration-200 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Imagen Tarjeta - h-full*/}
                  <div className="mb-4 overflow-hidden rounded-xl h-40 sm:h-44">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="h-center w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Badge Categoría */}
                  <div className="inline-block px-2.5 py-0.5 bg-[#F4F4F5] rounded-md border border-[#E4E4E7]/60 mb-2.5">
                    <span className="text-[10px] font-semibold text-[#111111]">
                      {item.category}
                    </span>
                  </div>

                  {/* Título */}
                  <h4 className="text-sm font-bold text-[#111111] mb-1.5 leading-snug tracking-tight">
                    {item.title}
                  </h4>

                  {/* Descripción */}
                  <p className="text-[11px] text-[#919191] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Stats / Badges inferiores */}
                <div className="flex items-center gap-2 pt-3 border-t border-[#F4F4F5] text-[10px] font-medium text-[#666666]">
                  {item.stats.map((stat, i) => (
                    <React.Fragment key={i}>
                      <span>{stat}</span>
                      {i < item.stats.length - 1 && <span>•</span>}
                    </React.Fragment>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    );
  };

  export default AboutUs;