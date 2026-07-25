import React from 'react';
import { 
  MessageSquare, 
  Users, 
  Award, 
  Sparkles, 
  Clock, 
  Target 
} from 'lucide-react';

const Methodology = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Encuentro y Transformación',
      description: 'Un espacio diseñado para encontrarte con Jesús y experimentar un cambio real, renovando tu vida y fortaleciendo tu fe día con día.',
    },
    {
      icon: Users,
      title: 'Grupos Pequeños y Células',
      description: 'Conéctate en comunidad a través de espacios de apoyo, amistad sincera y aprendizaje mutuo entre líderes, servidores y familias.',
    },
    {
      icon: Award,
      title: 'Líderes y Pastores Comprometidos',
      description: 'Contamos con un equipo pastoral experimentado y dedicado a guiarte con amor, paciencia y enseñanza centrada en la Palabra de Dios.',
    },
    {
      icon: Sparkles,
      title: 'Crecimiento Flexible y Digital',
      description: 'Acompañamiento espiritual adaptado a tu ritmo con recursos, servicios y transmisiones en vivo desde cualquier lugar.',
    },
    {
      icon: Clock,
      title: 'Horarios y Modalidades',
      description: 'Diversas opciones de cultos y actividades presenciales o en línea que se ajustan a tus tiempos y a la rutina de tu familia.',
    },
    {
      icon: Target,
      title: 'Discipulado Continuo',
      description: 'Un camino de enseñanza por etapas para descubrir tus dones, servir a la comunidad y alcanzar una madurez espiritual constante.',
    },
  ];

  return (
    <section id="metodologia" className="py-7 text-[#111111] sm:py-12 lg:py-7">
      <div className="mx-auto max-w-[1150px] px-4 sm:px-8">
        
        {/* Encabezado Centrado */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <p className="text-[11px] font-bold text-[#111111] uppercase tracking-wider">
            NUESTRA ESENCIA
          </p>
          
          {/* Título en una sola línea */}
          <h2 className="text-2xl font-extrabold tracking-tight text-[#111111] sm:text-3xl lg:text-[34px]">
            Todo lo que necesitas para crecer en tu fe
          </h2>
          
          <p className="text-xs sm:text-sm text-[#919191] font-normal leading-relaxed pt-1 max-w-xl mx-auto">
            Un modelo pastoral diseñado para acompañarte de forma práctica, cercana y personalizada hacia tu madurez espiritual y tu propósito en Dios.
          </p>
        </div>

        {/* Grid de 6 Tarjetas (Más compactas, con gap reducido y animación hover) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-[#E4E4E7]/70 shadow-2xs hover:shadow-sm transition-all duration-200 w-full flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Ícono dentro de contenedor gris suave */}
                  <div className="w-9 h-9 rounded-xl bg-[#F4F4F5] border border-[#E4E4E7]/60 flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-[#222222]" />
                  </div>

                  {/* Título de la tarjeta */}
                  <h3 className="text-sm font-bold text-[#111111] mb-1.5 tracking-tight">
                    {feature.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-[11px] sm:text-xs text-[#919191] leading-relaxed">
                    {feature.description}
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

export default Methodology;