import React from "react";

const About = () => {
  return (
    <section
      id="nosotros"
      className="bg-[#F2F2F2] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#AFAFAF]/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Información */}
        <div>
          <span className="text-[#73030D] font-bold text-sm tracking-widest uppercase block mb-3 animate-pulse">
            QUIÉNES SOMOS
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0D0D0D] leading-tight">
            Transformamos desafíos empresariales en
            <span className="text-[#73030D]"> soluciones digitales.</span>
          </h2>

          <p className="mt-8 text-lg text-[#0D0D0D]/80 leading-relaxed">
            En <span className="font-bold text-[#73030D]">Nova Solutions</span>
            desarrollamos software personalizado para empresas que buscan
            optimizar procesos, centralizar información y acelerar su
            transformación digital.
          </p>

          <p className="mt-6 text-lg text-[#0D0D0D]/80 leading-relaxed">
            Diseñamos arquitecturas escalables, plataformas web, aplicaciones
            móviles, sistemas empresariales e integraciones tecnológicas que
            permiten automatizar operaciones críticas y mejorar la toma de
            decisiones mediante información confiable y en tiempo real.
          </p>

          <p className="mt-6 text-lg text-[#0D0D0D]/80 leading-relaxed">
            Nuestro enfoque combina ingeniería de software, experiencia de
            usuario y metodologías ágiles para construir productos seguros,
            modernos y preparados para crecer junto con cada organización.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 gap-6">

          <div className="bg-[#AFAFAF]/10 border border-[#AFAFAF]/30 rounded-xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl">
            <h3 className="text-xl font-bold text-[#73030D] mb-3">
              Ingeniería de Software
            </h3>

            <p className="text-[#0D0D0D]/80 leading-relaxed">
              Construimos aplicaciones web y móviles utilizando tecnologías
              modernas, arquitecturas escalables y buenas prácticas de
              desarrollo para garantizar calidad y mantenimiento a largo plazo.
            </p>
          </div>

          <div className="bg-[#AFAFAF]/10 border border-[#AFAFAF]/30 rounded-xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl">
            <h3 className="text-xl font-bold text-[#73030D] mb-3">
              Automatización Empresarial
            </h3>

            <p className="text-[#0D0D0D]/80 leading-relaxed">
              Digitalizamos procesos, eliminamos tareas repetitivas e integramos
              sistemas para aumentar la productividad y reducir tiempos
              operativos.
            </p>
          </div>

          <div className="bg-[#AFAFAF]/10 border border-[#AFAFAF]/30 rounded-xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl">
            <h3 className="text-xl font-bold text-[#73030D] mb-3">
              Innovación y Escalabilidad
            </h3>

            <p className="text-[#0D0D0D]/80 leading-relaxed">
              Desarrollamos soluciones preparadas para evolucionar con tu
              empresa, priorizando seguridad, rendimiento e innovación en cada
              etapa del proyecto.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;