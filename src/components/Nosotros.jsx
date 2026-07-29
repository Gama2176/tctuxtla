import React from 'react';

const AboutUs = () => {
  const values = [
    {
      number: '01',
      title: 'Misión',
      subtitle: 'Nuestra Razón de Ser',
      description:
        'Acompañar a cada persona en su caminar con Dios, brindando un entorno cálido y familiar donde puedan desarrollar su fe, sanar sus historias y servir activamente a la comunidad con amor e integridad.',
      tag: 'Crecimiento y Fe',
    },
    {
      number: '02',
      title: 'Visión',
      subtitle: 'Hacia Dónde Vamos',
      description:
        'Ser una comunidad viva, incluyente y vibrante en Tuxtla Gutiérrez que inspire y conecte generaciones, extendiendo el mensaje de esperanza tanto en nuestros encuentros presenciales como en medios digitales.',
      tag: 'Alcance e Impacto',
    },
    {
      number: '03',
      title: 'Valores',
      subtitle: 'Lo que nos Mueve',
      description:
        'Nos fundamentamos en el amor incondicional, la hospitalidad sincera, la transparencia en nuestras acciones y el deseo constante de servir con excelencia a Dios y a nuestros semejantes.',
      tag: 'Principios',
    },
  ];

  return (
    <section id="nosotros" className="bg-white py-8 text-[#111111] sm:py-12">
      <div className="mx-auto max-w-[1150px] space-y-8 px-4 sm:px-8">
        
        {/* Encabezado Principal */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="inline-block text-[11px] font-bold text-[#4fc1bd] uppercase tracking-wider bg-[#4fc1bd]/10 px-3 py-0.5 rounded-full">
            Conócenos
          </span>

          <h2 className="text-2xl font-extrabold tracking-tight text-[#111111] sm:text-3xl">
            El Origen de Nuestra Comunidad
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
            Un espacio donde la fe cobra vida a través de relaciones genuinas, servicio sincero y un compromiso constante con Dios y con nuestro entorno.
          </p>
        </div>

        {/* Tarjetas compactas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {values.map((item, index) => (
            <div
              key={index}
              className="group relative bg-slate-50/80 border border-slate-200/70 rounded-2xl p-5 sm:p-6 hover:bg-white hover:border-[#4fc1bd]/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Número legible y claro en la esquina */}
              <span className="absolute top-3 right-4 text-3xl font-extrabold text-slate-300/80 select-none group-hover:text-[#4fc1bd]/40 transition-colors duration-300">
                {item.number}
              </span>

              <div className="space-y-3 pr-8">
                <div>
                  <span className="text-[10px] font-bold text-[#4fc1bd] uppercase tracking-wide block">
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-[#111111] leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Texto descriptivo */}
                <p className="text-xs text-slate-600 font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Pie de Tarjeta */}
              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-[10px] font-medium text-slate-400">
                <span>Templo Cristiano de Tuxtla</span>
                <span className="text-[#4fc1bd] font-bold bg-[#4fc1bd]/10 px-2 py-0.5 rounded">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutUs;