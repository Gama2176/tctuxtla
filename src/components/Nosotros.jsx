import React from 'react';
import mision from '../images/mision.svg';
import vision from '../images/vision.svg';
import valores from '../images/valores.svg';

const AboutUs = () => {
  const values = [
    {
      title: 'Misión',
      subtitle: 'Nuestra Razón de Ser',
      description:
        'Acompañar a cada persona en su caminar con Dios, brindando un entorno cálido y familiar donde puedan desarrollar su fe, sanar sus historias y servir activamente a la comunidad con amor e integridad.',
      image: mision,
      tag: 'Crecimiento y Fe',
    },
    {
      title: 'Visión',
      subtitle: 'Hacia Dónde Vamos',
      description:
        'Ser una comunidad viva, incluyente y vibrante en Tuxtla Gutiérrez que inspire y conecte generaciones, extendiendo el mensaje de esperanza tanto en nuestros encuentros presenciales como en medios digitales.',
      image: vision,
      tag: 'Alcance e Impacto',
    },
    {
      title: 'Valores',
      subtitle: 'Lo que nos Mueve',
      description:
        'Nos fundamentamos en el amor incondicional, la hospitalidad sincera, la transparencia en nuestras acciones y el deseo constante de servir con excelencia a Dios y a nuestros semejantes.',
      image: valores,
      tag: 'Principios',
    },
  ];

  return (
    <section id="nosotros" className="bg-white py-10 text-[#111111] sm:py-16">
      <div className="mx-auto max-w-[1150px] space-y-10 px-4 sm:px-8">
        
        {/* Encabezado Principal */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <span className="inline-block text-[11px] font-bold text-[#4fc1bd] uppercase tracking-wider bg-[#4fc1bd]/10 px-3 py-1 rounded-full">
            Conócenos
          </span>

          <h2 className="text-2xl font-extrabold tracking-tight text-[#111111] sm:text-3xl lg:text-[34px]">
            El Origen de Nuestra Comunidad
          </h2>

          <p className="text-xs sm:text-sm text-[#808080] font-normal leading-relaxed">
            Un espacio donde la fe cobra vida a través de relaciones genuinas, servicio sincero y un compromiso constante con Dios y con nuestro entorno.
          </p>
        </div>

        {/* Tarjetas Misión, Visión y Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((item, index) => (
            <div
              key={index}
              className="group bg-slate-50/50 border border-slate-100/90 rounded-2xl p-5 hover:bg-white hover:border-[#4fc1bd]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Marco para Imagen / Vector */}
                <div className="mb-5 overflow-hidden rounded-xl h-40 bg-white border border-slate-100 flex items-center justify-center p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Subtítulo Sutil */}
                <span className="text-[10px] font-bold text-[#4fc1bd] uppercase tracking-wide block mb-1">
                  {item.subtitle}
                </span>

                {/* Título de Tarjeta */}
                <h3 className="text-lg font-bold text-[#111111] mb-2 leading-tight">
                  {item.title}
                </h3>

                {/* Texto descriptivo (Incluyendo Valores como texto normal) */}
                <p className="text-xs text-[#707070] font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Pie de Tarjeta */}
              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-[10px] font-medium text-slate-400">
                <span>Templo Cristiano de Tuxtla</span>
                <span className="text-[#4fc1bd] font-semibold">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutUs;