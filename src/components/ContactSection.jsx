import React, { useState } from 'react';
import { Loader2, ChevronDown } from 'lucide-react';
import Swal from 'sweetalert2';

// Import de la imagen para que Vite / React la procese correctamente
import contactoBanner from '../images/contacto-tct.jpg'; // Ajusta la ruta relativa según la ubicación de tu imagen en src/assets/

const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbw1aDlDHBD0qADfZDaZNRgAHXu0Tv0z91PdzQt5FoOX5bdROIQFMhze5WJtuJxLO53bjw/exec';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    helpType: 'Consulta general',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      formType: 'contact',
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      helpType: formData.helpType,
      message: formData.message.trim(),
    };

    try {
      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      Swal.fire({
        icon: 'success',
        title: '¡Mensaje Enviado!',
        text: 'Gracias por escribirnos. Nos pondremos en contacto contigo pronto.',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#4FC1BD',
        allowOutsideClick: true,
        allowEscapeKey: true,
      });

      setFormData(initialFormState);

    } catch (error) {
      console.error('Error enviando mensaje:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo enviar el mensaje. Inténtalo de nuevo.',
        confirmButtonColor: '#EF4444'
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contactform" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        
        {/* Columna Izquierda: Información de Contacto e Imagen */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <span className="inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#4FC1BD] bg-[#4FC1BD]/10 rounded-full">
              Contacto
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Escríbenos un mensaje
            </h2>
            
            <p className="text-xs xs:text-base text-slate-500 leading-relaxed max-w-lg">
              Estamos aquí para responder tus preguntas, acompañarte en oración o brindarte más información sobre nuestros servicios y eventos.
            </p>
          </div>

          {/* Tarjeta contenedora de la imagen */}
          <div className="relative flex-1 min-h-[260px] sm:min-h-[320px] overflow-hidden rounded-3xl border border-slate-100 shadow-sm group">
            <img 
              src={contactoBanner} 
              alt="Contacto TCT" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Columna Derecha: Formulario */}
        <div className="flex items-center">
          <form onSubmit={handleSubmit} className="space-y-4 w-full bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm">
            
            <div className="mb-2">
              <h3 className="text-xl font-bold text-slate-800">Déjanos tus datos</h3>
              <p className="text-xs text-slate-500 mt-1">Queremos saber de ti. Llena el formulario y te responderemos pronto.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder="Escribe tu nombre"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#4FC1BD] bg-slate-50/30"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Apellido
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  placeholder="Escribe tu apellido"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#4FC1BD] bg-slate-50/30"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="tu@ejemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#4FC1BD] bg-slate-50/30"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Teléfono / WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="961 000 0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#4FC1BD] bg-slate-50/30"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                ¿En qué te podemos ayudar?
              </label>
              <div className="relative">
                <select
                  name="helpType"
                  value={formData.helpType}
                  onChange={handleChange}
                  className="w-full appearance-none px-4 py-2.5 text-xs rounded-xl border border-slate-200 text-slate-800 bg-slate-50/30 focus:outline-none focus:border-[#4FC1BD] cursor-pointer"
                >
                  <option value="Consulta general">Consulta general</option>
                  <option value="Petición de oración">Petición de oración</option>
                  <option value="Información de Ruta TCT">Información de Ruta TCT</option>
                  <option value="Otro">Otro</option>
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                Mensaje
              </label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Escribe tu mensaje aquí..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 text-xs rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#4FC1BD] bg-slate-50/30 resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#4FC1BD] text-white rounded-xl font-bold text-sm hover:bg-[#3db0ac] transition shadow-xs flex items-center justify-center gap-2.5 disabled:opacity-70 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Enviando mensaje...</span>
                  </>
                ) : (
                  <span>Enviar mensaje</span>
                )}
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}