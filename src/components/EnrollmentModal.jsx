import React, { useState, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';
import Swal from 'sweetalert2';

const EnrollmentModal = ({ isOpen, onClose }) => {
  const [isModalMounted, setIsModalMounted] = useState(false);
  const [isCustomLada, setIsCustomLada] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    countryCode: '+52',
    customCountryCode: '+',
    phone: '',
    baptized: '',
    location: '',
  });

  useEffect(() => {
    if (isOpen) {
      setIsModalMounted(true);
      setTimeout(() => setIsModalMounted(true), 10);
    } else {
      setIsModalMounted(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isModalMounted && isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalMounted, isOpen]);

  useEffect(() => {
    if (document.getElementById('sweetalert2-custom-animations')) return;

    const style = document.createElement('style');
    style.id = 'sweetalert2-custom-animations';
    style.innerHTML = `
      @keyframes modalEnter {
        0% { opacity: 0; transform: scale(0.95) translateY(10px); }
        100% { opacity: 1; transform: scale(1) translateY(0); }
      }

      @keyframes modalExit {
        0% { opacity: 1; transform: scale(1) translateY(0); }
        100% { opacity: 0; transform: scale(0.95) translateY(10px); }
      }

      .swal2-modal-enter {
        animation: modalEnter 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
      }

      .swal2-modal-exit {
        animation: modalExit 200ms cubic-bezier(0.7, 0, 0.84, 0) forwards !important;
      }

      .swal2-styled-popup {
        border-radius: 1rem !important;
        border: 1px solid #E4E4E7 !important;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1) !important;
        font-family: inherit !important;
      }

      .swal2-backdrop-custom {
        background: rgba(15, 23, 42, 0.4) !important;
        backdrop-filter: blur(4px) !important;
      }

      .swal2-icon.swal2-success {
        border-color: #4FC1BD !important;
        color: #4FC1BD !important;
      }

      .swal2-icon.swal2-success [class^='swal2-success-line'] {
        background-color: #4FC1BD !important;
      }

      .swal2-icon.swal2-success .swal2-success-ring {
        border: 4px solid rgba(79, 193, 189, 0.2) !important;
      }
    `;

    document.head.appendChild(style);
  }, []);

  const handleCloseModal = () => {
    setIsModalMounted(false);
    setTimeout(() => onClose(), 10);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'countryCode') {
      if (value === 'OTHER') {
        setIsCustomLada(true);
      } else {
        setIsCustomLada(false);
        setFormData((prev) => ({ ...prev, countryCode: '+52' }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // =========================================================================
  // ENVÍO DE FORMULARIO A WHATSAPP
  // =========================================================================
  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "5571080066";

    const finalLada = isCustomLada ? formData.customCountryCode : formData.countryCode;
    const fullPhone = `${finalLada} ${formData.phone}`;

    const message = 
      `*¡Hola! Me gustaría inscribirme a Ruta TCT.*\n\n` +
      `*Mis Datos de Registro:*\n` +
      `*Nombre:* ${formData.fullName}\n` +
      `*Teléfono:* ${fullPhone}\n` +
      `*¿Cuenta con bautismo?:* ${formData.baptized}\n` +
      `*Ubicación:* ${formData.location}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    Swal.fire({
      icon: 'success',
      title: '¡Redirigiendo a WhatsApp!',
      html: `
        <p class="text-xs text-slate-500 mt-1">
          Gracias, <strong class="text-slate-900">${formData.fullName}</strong>. Se ha abierto una pestaña para enviar tu registro de Ruta TCT directamente por WhatsApp.
        </p>
      `,
      background: '#FFFFFF',
      buttonsStyling: false,
      confirmButtonText: 'Entendido',
      width: 400,
      padding: '1.75rem',
      showClass: { popup: 'swal2-modal-enter' },
      hideClass: { popup: 'swal2-modal-exit' },
      customClass: {
        container: 'swal2-backdrop-custom',
        popup: 'swal2-styled-popup',
        title: 'text-lg font-extrabold text-slate-900 tracking-tight',
        htmlContainer: 'text-xs text-slate-500 mt-1 leading-relaxed',
        confirmButton:
          'w-full py-2.5 px-4 bg-[#4FC1BD] hover:bg-[#3db0ac] text-white rounded-xl font-bold text-xs transition-colors cursor-pointer mt-4 shadow-xs',
      },
    });

    handleCloseModal();
    setFormData({
      fullName: '',
      countryCode: '+52',
      customCountryCode: '+',
      phone: '',
      baptized: '',
      location: '',
    });
  };

  if (!isModalMounted && !isOpen) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300 ease-out ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleCloseModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-lg rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 shadow-2xl transition-all duration-300 ease-out ${
          isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
        }`}
      >
        <button
          onClick={handleCloseModal}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-4 pr-6">
          <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
            Inscríbete a Ruta TCT
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Comienza tu camino de crecimiento espiritual y discipulado.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">
              Nombre(s) y Apellidos
            </label>
            <input
              type="text"
              name="fullName"
              required
              placeholder="Tu nombre completo"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#4FC1BD] transition-colors bg-slate-50/30"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">
              Número de Teléfono
            </label>
            <div className="flex items-center gap-2">
              {!isCustomLada ? (
                <div className="relative shrink-0">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="appearance-none pr-7 pl-2.5 py-2 bg-slate-100 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#4FC1BD] cursor-pointer"
                  >
                    <option value="+52">🇲🇽 +52</option>
                    <option value="OTHER">Otro...</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              ) : (
                <div className="flex items-center shrink-0 gap-1">
                  <input
                    type="text"
                    name="customCountryCode"
                    required
                    placeholder="+1"
                    value={formData.customCountryCode}
                    onChange={handleChange}
                    className="w-16 px-2 py-2 bg-slate-100 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#4FC1BD]"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setIsCustomLada(false);
                      setFormData((prev) => ({ ...prev, countryCode: '+52' }));
                    }}
                    className="text-xs text-[#4FC1BD] hover:underline font-bold px-1 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              )}

              <input
                type="tel"
                name="phone"
                required
                placeholder="10 dígitos"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#4FC1BD] transition-colors bg-slate-50/30"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">
              ¿Bautizado(a)?
            </label>
            <div className="relative">
              <select
                name="baptized"
                required
                value={formData.baptized}
                onChange={handleChange}
                className="w-full appearance-none px-3 pr-8 py-2 text-xs rounded-xl border border-slate-200 text-slate-800 bg-slate-50/30 focus:outline-none focus:border-[#4FC1BD] transition-colors cursor-pointer"
              >
                <option value="" disabled>Seleccione...</option>
                <option value="Sí">Sí</option>
                <option value="No">No</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-700 mb-1">
              ¿Dónde vives?
            </label>
            <input
              type="text"
              name="location"
              required
              placeholder="Colonia, Ciudad o Municipio"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#4FC1BD] transition-colors bg-slate-50/30"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 bg-[#4FC1BD] text-white rounded-xl font-bold text-sm hover:bg-[#3db0ac] transition-colors shadow-xs cursor-pointer"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentModal;