import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] text-[#F2F2F2] border-t border-[#73030D]/30">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Información */}
          <div>
            <span className="text-[#73030D] text-sm font-bold uppercase tracking-[0.25em]">
              NOVA SOLUTIONS
            </span>
{/* 
            <h2 className="mt-3 text-3xl font-extrabold">
              Ingeniería de Software
            </h2> */}

            <p className="mt-5 text-[#AFAFAF] leading-relaxed">
              Desarrollamos soluciones digitales que optimizan procesos,
              automatizan operaciones y aceleran la transformación tecnológica
              de empresas mediante software moderno, seguro y escalable.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-lg font-bold text-[#73030D] mb-5">
              Navegación
            </h3>

            <ul className="space-y-3 text-[#AFAFAF]">
              <li>
                <a
                  href="#nosotros"
                  className="hover:text-white transition-colors duration-300"
                >
                  Nosotros
                </a>
              </li>

              <li>
                <a
                  href="#contacto"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-bold text-[#73030D] mb-5">
              Contacto
            </h3>

            <div className="space-y-4 text-[#AFAFAF]">

              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-[#73030D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span>novasolutions@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-[#73030D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span>2471012228</span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-[#73030D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span>Huamantla, Tlaxcala</span>
              </div>

            </div>
          </div>

        </div>

        {/* Línea inferior */}
        <div className="mt-12 pt-8 border-t border-[#73030D]/30 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-[#AFAFAF] text-sm text-center md:text-left">
            © {new Date().getFullYear()} Nova Solutions. Todos los derechos reservados.
          </p>

          <p className="text-sm text-[#73030D] font-semibold tracking-wider uppercase">
            Innovación • Transformación Digital
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;