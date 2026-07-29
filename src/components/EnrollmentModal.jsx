import React, { useState } from 'react';
import { X, Check, Loader2, ChevronDown } from 'lucide-react';
import Swal from 'sweetalert2';

// ⚠️ REEMPLAZA ESTA URL CON LA QUE TERMINA EN /exec QUE TE DIO GOOGLE APPS SCRIPT AL IMPLEMENTAR
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbw1aDlDHBD0qADfZDaZNRgAHXu0Tv0z91PdzQt5FoOX5bdROIQFMhze5WJtuJxLO53bjw/exec';

export default function EnrollmentModal({ isOpen, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCustomLada, setIsCustomLada] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    countryCode: '+52', // Lada por defecto
    customCountryCode: '+', // Para escribir lada manual
    phone: '',
    baptized: 'No',
    location: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Lógica para el selector de Lada
    if (name === 'countryCode') {
      if (value === 'OTHER') {
        setIsCustomLada(true);
        // Reseteamos la lada manual a '+' cuando eligen esta opción
        setFormData((prev) => ({ ...prev, countryCode: value, customCountryCode: '+' }));
      } else {
        setIsCustomLada(false);
        setFormData((prev) => ({ ...prev, countryCode: value }));
      }
      return;
    }

    // Lógica para escribir la lada manual
    if (name === 'customCountryCode') {
      // Asegurar que siempre empiece con '+'
      let cleaned = value;
      if (!value.startsWith('+')) {
        cleaned = '+' + value.replace(/\+/g, '');
      }
      // Permitir solo números después del '+' y limitar longitud
      cleaned = '+' + cleaned.substring(1).replace(/\D/g, '').substring(0, 4);
      setFormData((prev) => ({ ...prev, customCountryCode: cleaned }));
      return;
    }

    // Lógica para el número de teléfono
    if (name === 'phone') {
      // Elimina cualquier carácter que no sea un número
      const cleaned = value.replace(/\D/g, '');
      // Limita la entrada a un máximo de 10 dígitos (estándar común, ajusta si es necesario para internacional)
      if (cleaned.length <= 10) {
        setFormData((prev) => ({ ...prev, phone: cleaned }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Determinar la lada final a enviar
    const finalLada = isCustomLada ? formData.customCountryCode : formData.countryCode;
    
    // Validar que la lada manual no sea solo '+'
    if (isCustomLada && (finalLada === '+' || finalLada.length < 2)) {
        Swal.fire({
            icon: 'error',
            title: 'Lada inválida',
            text: 'Por favor, escribe un código de país válido (Ej. +1, +502).',
            background: '#FFFFFF',
            confirmButtonText: 'Corregir',
            customClass: {
                confirmButton: 'bg-[#4FC1BD] text-white font-bold py-2 px-6 rounded-xl cursor-pointer'
            }
        });
        setIsSubmitting(false);
        return;
    }

    const fullPhone = `${finalLada} ${formData.phone}`;

    // Payload enviado a Google Apps Script
    const payload = {
      formType: 'enrollment', // Identificador para el script
      fullName: formData.fullName,
      phone: fullPhone,
      baptized: formData.baptized,
      location: formData.location
    };

    try {
      // Petición no-cors para enviar los datos a Google Apps Script
      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error('Error enviando datos:', error);
    }

    setIsSubmitting(false);
    onClose();

    // Notificación SweetAlert2 estilizada
    Swal.fire({
      icon: 'success',
      title: '¡Inscripción Exitosa!',
      text: 'Tus datos han sido registrados adecuadamente. Nos pondremos en contacto contigo muy pronto.',
      background: '#FFFFFF',
      confirmButtonText: 'Excelente',
      customClass: {
        popup: 'rounded-2xl border border-slate-200 shadow-xl',
        confirmButton: 'bg-[#4FC1BD] hover:bg-[#3db0ac] text-white font-bold py-2.5 px-6 rounded-xl cursor-pointer transition-colors'
      }
    });

    // Reiniciar valores del formulario
    setIsCustomLada(false);
    setFormData({
      fullName: '',
      countryCode: '+52',
      customCountryCode: '+',
      phone: '',
      baptized: 'No',
      location: ''
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-sm transform overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Encabezado del Modal */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 pt-5 pb-3">
          <div>
            <h3 className="text-base font-bold leading-tight text-slate-800">Inscripción a Ruta TCT</h3>
            <p className="mt-0.5 text-[11px] text-slate-500">Completa tus datos para iniciar el proceso.</p>
          </div>
          <button
            onClick={onClose}
            className="cursor-pointer rounded-full p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Cuerpo del Formulario */}
        <form onSubmit={handleSubmit} className="space-y-3.5 p-5">
          {/* Campo: Nombre Completo */}
          <div>
            <label className="mb-1 block text-[11px] font-semibold text-slate-700">
              Nombre Completo
            </label>
            <input
              type="text"
              name="fullName"
              required
              placeholder="Ej. Juan Pérez"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/30 px-3 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#4FC1BD] focus:outline-none"
            />
          </div>

          {/* Campo: Teléfono con Lada Opcional */}
          <div>
            <label className="mb-1 block text-[11px] font-semibold text-slate-700">
              Número de Teléfono / WhatsApp
            </label>
            <div className="flex gap-1.5">
              
              {/* Selector o Input de Lada */}
              {!isCustomLada ? (
                // Selector Lada por defecto (+52)
                <div className="relative shrink-0">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="appearance-none flex select-none items-center gap-1 rounded-xl border border-slate-200 bg-slate-100 pl-2.5 pr-7 py-2 text-xs font-medium text-slate-600 cursor-pointer focus:outline-none focus:border-[#4FC1BD]"
                  >
                    <option value="+52">🇲🇽 +52</option>
                    <option value="OTHER">Otro...</option>
                  </select>
                  <ChevronDown className="h-3 w-3 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              ) : (
                // Input manual para otra Lada
                <div className="flex items-center gap-1 shrink-0">
                    <input
                        type="text"
                        name="customCountryCode"
                        required
                        placeholder="+1"
                        value={formData.customCountryCode}
                        onChange={handleChange}
                        className="w-16 rounded-xl border border-slate-200 bg-slate-100 px-2.5 py-2 text-xs font-medium text-slate-800 focus:border-[#4FC1BD] focus:outline-none"
                    />
                    <button 
                        type="button"
                        onClick={() => {
                            setIsCustomLada(false);
                            setFormData(prev => ({...prev, countryCode: '+52'}))
                        }}
                        className="text-slate-400 hover:text-slate-600 cursor-pointer p-0.5"
                        title="Volver a lada por defecto"
                    >
                        <X className="h-3.5 w-3.5"/>
                    </button>
                </div>
              )}

              {/* Input del Número */}
              <input
                type="tel"
                name="phone"
                required
                placeholder="10 dígitos"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 rounded-xl border border-slate-200 bg-slate-50/30 px-3 py-2 text-xs text-slate-800 focus:border-[#4FC1BD] focus:outline-none"
              />
            </div>
          </div>

          {/* Campo: ¿Está bautizado? */}
          <div>
            <label className="mb-1.5 block text-[11px] font-semibold text-slate-700">
              ¿Estás Bautizado/a?
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['Sí', 'No'].map((option) => (
                <button
                  type="button"
                  key={option}
                  onClick={() => setFormData((prev) => ({ ...prev, baptized: option }))}
                  className={`flex cursor-pointer items-center justify-center gap-1.5 rounded-xl border py-1.5 px-3 text-xs font-medium transition-all ${
                    formData.baptized === option
                      ? 'border-[#4FC1BD] bg-[#4FC1BD]/10 font-semibold text-[#2c8582]'
                      : 'border-slate-200 bg-slate-50/30 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {formData.baptized === option && <Check className="h-3.5 w-3.5" />}
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Campo: Ubicación Manual (Texto) */}
          <div>
            <label className="mb-1 block text-[11px] font-semibold text-slate-700">
              ¿Dónde vives?
            </label>
            <input
              type="text"
              name="location"
              required
              placeholder="Colonia, Ciudad o Municipio"
              value={formData.location}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/30 px-3 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:border-[#4FC1BD] focus:outline-none"
            />
          </div>

          {/* Botón de Envío */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="shadow-xs cursor-pointer flex w-full mt-2 items-center justify-center gap-2 rounded-xl bg-[#4FC1BD] py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#3db0ac] disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                <span>Enviando...</span>
              </>
            ) : (
              <span>Confirmar Inscripción</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}