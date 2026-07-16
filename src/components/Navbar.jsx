import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Se corrigieron los href para alinearse con los "id" reales de tus secciones
  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Quiénes Somos', href: '#nosotros' }, // Coincide con id="nosotros" del componente About
    { name: 'Proyectos', href: '#proyectos' },   // Coincide con id="proyectos" del componente Projects
  ];

  // Función de scroll suave que compensa los 80px de altura del Navbar fijo
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offset = 80; // Altura del Navbar (h-20 = 80px)
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false); // Cierra el menú móvil al hacer clic
  };

  return (
    // CAMBIO CLAVE: Cambiado de "sticky" a "fixed top-0 left-0 w-full"
    // Esto asegura que el Navbar flote permanentemente por encima de todas las secciones
    <nav className="bg-[#0D0D0D] border-b border-[#AFAFAF]/20 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo / Nombre */}
          <div className="flex-shrink-0 flex items-center">
            <span className="flex items-center gap-3 text-2xl font-bold tracking-wider text-[#F2F2F2]">
              <img
                src="https://i.ibb.co/gM3HVM1K/logo-navbar.png"
                alt="Logo NovaERP"
                className="h-8 w-auto object-contain"
              />
              {/* El texto del logo */}
              <span>
                NOVA<span className="text-[#73030D]">.</span>SOLUTIONS
              </span>

            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-[#AFAFAF] hover:text-[#F2F2F2] transition-colors duration-200 text-sm font-medium tracking-wide uppercase"
              >
                {link.name}
              </a>
            ))}
            {/* Botón de Contacto */}
            <a
              href="#contacto"
              onClick={(e) => handleScroll(e, '#contacto')}
              className="bg-[#73030D] text-[#F2F2F2] px-5 py-2.5 rounded-sm text-sm font-semibold tracking-wide uppercase hover:bg-[#9E1A22] transition-colors duration-300"
            >
              Contacto
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#AFAFAF] hover:text-[#F2F2F2] focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú</span>
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#0D0D0D] border-t border-[#AFAFAF]/10`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="block px-3 py-2.5 rounded-md text-[#AFAFAF] hover:text-[#F2F2F2] hover:bg-[#9E1A22]/20 text-base font-medium tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-3">
            {/* Botón Móvil de Contacto */}
            <a
              href="#contacto"
              onClick={(e) => handleScroll(e, '#contacto')}
              className="block w-full text-center bg-[#73030D] text-[#F2F2F2] px-4 py-3 rounded-sm text-sm font-semibold tracking-wide uppercase hover:bg-[#9E1A22]"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;