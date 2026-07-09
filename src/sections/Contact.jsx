import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    painPoint: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de auditoría técnica solicitada:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="bg-[#F2F2F2] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#AFAFAF]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-5 lg:gap-12 items-stretch">
        
        {/* Información Corporativa / Canales Directos Ampliados */}
        <div className="lg:col-span-2 pr-4 mb-12 lg:mb-0 flex flex-col justify-between bg-[#AFAFAF]/10 p-8 rounded-xl border border-[#AFAFAF]/30 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div>
            {/* Subtítulo en Guinda */}
            <span className="text-[#73030D] font-bold text-sm tracking-widest uppercase block mb-3 animate-pulse">
              // CONECTIVIDAD DIRECTA
            </span>
            {/* Título en Negro */}
            <h2 className="text-3xl font-extrabold text-[#0D0D0D] sm:text-4xl tracking-tight">
              Hablemos de Ingeniería Real.
            </h2>
            <p className="mt-4 text-base text-[#0D0D0D]/80 leading-relaxed">
              Sin intermediarios comerciales ni burocracia. Al enviar este formulario, tu requerimiento será evaluado directamente por nuestro equipo de arquitectos de software.
            </p>
          </div>

          {/* Información de Contacto Directo (Más grande y con efectos hover) */}
          <div className="mt-12 pt-8 border-t border-[#AFAFAF]/40 space-y-6">
            {/* Subtítulo en Guinda */}
            <h3 className="text-base font-bold text-[#73030D] uppercase tracking-wider mb-2">
              Canales de Comunicación Directa
            </h3>
            
            {/* Correo Electrónico */}
            <div className="flex items-center text-[#0D0D0D]/90 hover:text-[#73030D] transition-all duration-300 transform hover:translate-x-2 group">
              <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-[#73030D]/10 transition-colors">
                <svg className="h-6 w-6 text-[#73030D] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <a href="mailto:contacto@novasolutions.com" className="ml-4 text-base md:text-lg font-mono font-bold tracking-tight">
                contacto@novasolutions.com
              </a>
            </div>

            {/* Número Telefónico */}
            <div className="flex items-center text-[#0D0D0D]/90 hover:text-[#73030D] transition-all duration-300 transform hover:translate-x-2 group">
              <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-[#73030D]/10 transition-colors">
                <svg className="h-6 w-6 text-[#73030D] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <a href="tel:+522461234567" className="ml-4 text-base md:text-lg font-mono font-bold tracking-tight">
                +52 (246) 123-4567
              </a>
            </div>

            {/* Ubicación */}
            <div className="flex items-center text-[#0D0D0D]/90 transition-all duration-300 transform hover:translate-x-2 group">
              <div className="p-2 bg-white rounded-lg shadow-sm group-hover:bg-[#73030D]/10 transition-colors">
                <svg className="h-6 w-6 text-[#73030D] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="ml-4 text-base md:text-lg font-bold tracking-tight">
                Tlaxcala, México
              </span>
            </div>
          </div>
        </div>

        {/* Formulario Técnico con Contenedor Gris Animado */}
        <div className="lg:col-span-3 bg-[#AFAFAF]/20 p-8 rounded-xl border border-[#AFAFAF]/40 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="name" className="block text-xs font-bold text-[#0D0D0D] uppercase tracking-wider mb-2 transition-colors group-focus-within:text-[#73030D]">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#F2F2F2] border border-[#AFAFAF] rounded-md px-4 py-3 text-[#0D0D0D] placeholder-[#0D0D0D]/40 focus:outline-none focus:border-[#73030D] focus:ring-2 focus:ring-[#73030D]/20 shadow-sm transition-all duration-200"
                  placeholder="Ej. Ing. Carlos Mendoza"
                />
              </div>
              <div className="group">
                <label htmlFor="company" className="block text-xs font-bold text-[#0D0D0D] uppercase tracking-wider mb-2 transition-colors group-focus-within:text-[#73030D]">
                  Organización / Empresa
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#F2F2F2] border border-[#AFAFAF] rounded-md px-4 py-3 text-[#0D0D0D] placeholder-[#0D0D0D]/40 focus:outline-none focus:border-[#73030D] focus:ring-2 focus:ring-[#73030D]/20 shadow-sm transition-all duration-200"
                  placeholder="Ej. Gamo Retail S.A."
                />
              </div>
            </div>

            <div className="group">
              <label htmlFor="email" className="block text-xs font-bold text-[#0D0D0D] uppercase tracking-wider mb-2 transition-colors group-focus-within:text-[#73030D]">
                Correo Corporativo
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#F2F2F2] border border-[#AFAFAF] rounded-md px-4 py-3 text-[#0D0D0D] placeholder-[#0D0D0D]/40 focus:outline-none focus:border-[#73030D] focus:ring-2 focus:ring-[#73030D]/20 shadow-sm transition-all duration-200"
                placeholder="c.mendoza@empresa.com"
              />
            </div>

            <div className="group">
              <label htmlFor="painPoint" className="block text-xs font-bold text-[#0D0D0D] uppercase tracking-wider mb-2 transition-colors group-focus-within:text-[#73030D]">
                ¿Cuál es el dolor operativo crítico?
              </label>
              <select
                name="painPoint"
                id="painPoint"
                value={formData.painPoint}
                onChange={handleChange}
                required
                className="w-full bg-[#F2F2F2] border border-[#AFAFAF] rounded-md px-4 py-3 text-[#0D0D0D] focus:outline-none focus:border-[#73030D] focus:ring-2 focus:ring-[#73030D]/20 shadow-sm transition-all duration-200"
              >
                <option value="" disabled className="text-[#0D0D0D]/40">Selecciona una opción</option>
                <option value="fragmentacion">Silos de información / Fragmentación de datos</option>
                <option value="arquitectura">Modernización de Core ERP / Arquitectura Modular</option>
                <option value="apis">Integración de APIs y Ecosistemas Seguros</option>
                <option value="seguridad">Auditoría de Sistemas / Optimización de Procesos</option>
              </select>
            </div>

            <div className="group">
              <label htmlFor="message" className="block text-xs font-bold text-[#0D0D0D] uppercase tracking-wider mb-2 transition-colors group-focus-within:text-[#73030D]">
                Descripción del requerimiento técnico o alcance del proyecto
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-[#F2F2F2] border border-[#AFAFAF] rounded-md px-4 py-3 text-[#0D0D0D] placeholder-[#0D0D0D]/40 focus:outline-none focus:border-[#73030D] focus:ring-2 focus:ring-[#73030D]/20 shadow-sm transition-all duration-200 resize-none"
                placeholder="Detalla brevemente la infraestructura actual o la lógica de negocio que necesitas automatizar..."
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-[#73030D] text-[#F2F2F2] py-4 rounded-md font-bold text-sm uppercase tracking-widest hover:bg-[#9E1A22] shadow-md hover:shadow-xl active:scale-[0.99] transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#F2F2F2] focus:ring-[#73030D]"
              >
                Contacto
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;