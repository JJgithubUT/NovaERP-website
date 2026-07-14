import React from "react";
import Button from "../components/UI/Button";

const Home = () => {
  return (
    <section
      id="inicio"
      className="relative bg-[#0D0D0D] text-[#F2F2F2] overflow-hidden px-4 sm:px-6 lg:px-8 pt-24 pb-28"
    >
      {/* Glow decorativo */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-[#73030D]/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-24 w-72 h-72 bg-[#73030D]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto text-center">
        <span className="text-[#73030D] font-bold text-sm tracking-widest uppercase block mb-4 animate-pulse">
          // INGENIERÍA DE SOFTWARE
        </span>

        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight max-w-4xl mx-auto">
          Construimos software que impulsa la
          <span className="text-[#73030D]"> transformación digital</span> de
          tu empresa.
        </h1>

        <p className="mt-6 text-lg text-[#AFAFAF] max-w-2xl mx-auto leading-relaxed">
          Plataformas web, aplicaciones móviles y sistemas empresariales
          diseñados para automatizar procesos, centralizar información y
          escalar junto con tu negocio.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#contacto" variant="primary">
            Hablemos de tu proyecto
          </Button>
          <Button href="#proyectos" variant="secondary">
            Ver proyectos
          </Button>
        </div>

        {/* Métricas rápidas */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-[#AFAFAF]/20 pt-10">
          <div>
            <p className="text-3xl font-extrabold text-[#73030D]">+5</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-[#AFAFAF]">
              Proyectos entregados
            </p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-[#73030D]">100%</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-[#AFAFAF]">
              Código a medida
            </p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-3xl font-extrabold text-[#73030D]">24/7</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-[#AFAFAF]">
              Soporte técnico
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;