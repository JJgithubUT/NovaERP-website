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

      {/* Grid de puntos sutil, refuerza la identidad "sistema/ingeniería" */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(#AFAFAF 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        {/* Columna de texto */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 text-[#73030D] font-bold text-sm tracking-widest uppercase mb-4 font-mono">
            <span className="relative flex h-2 w-2">
              <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-[#73030D] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#73030D]" />
            </span>
            // INGENIERÍA DE SOFTWARE
          </span>

          <h1 className="text-4xl sm:text-6xl font-extrabold leading-[1.05] tracking-tight max-w-2xl mx-auto lg:mx-0">
            Construimos software que impulsa la{" "}
            <span className="bg-gradient-to-r from-[#73030D] via-[#B3141F] to-[#D9A441] bg-clip-text text-transparent">
              transformación digital
            </span>{" "}
            de tu empresa.
          </h1>

          <p className="mt-6 text-lg text-[#AFAFAF] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Plataformas web, aplicaciones móviles y sistemas empresariales
            diseñados para automatizar procesos, centralizar información y
            escalar junto con tu negocio.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button href="#contacto" variant="primary">
              Hablemos de tu proyecto
            </Button>
            <Button href="#proyectos" variant="secondary">
              Ver proyectos
            </Button>
          </div>

          {/* Métricas como "terminal de estado" */}
          <div className="mt-12 max-w-md mx-auto lg:mx-0 rounded-xl border border-[#2A2A2A] bg-[#141414] overflow-hidden text-left shadow-2xl shadow-black/40">
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#2A2A2A] bg-[#181818]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#73030D]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#AFAFAF]/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#AFAFAF]/40" />
              <span className="ml-2 text-[11px] text-[#AFAFAF]/70 font-mono">
                nova@core:~
              </span>
            </div>
            <div className="px-4 py-4 font-mono text-[13px] leading-relaxed">
              <p className="text-[#AFAFAF]">
                <span className="text-[#73030D]">$</span> nova status --proyectos
              </p>
              <p className="text-[#F2F2F2]">
                <span className="text-[#D9A441]">›</span> entregados:{" "}
                <span className="font-bold">+5</span> casos de éxito
              </p>
              <p className="text-[#F2F2F2]">
                <span className="text-[#D9A441]">›</span> código propio:{" "}
                <span className="font-bold">100%</span> a medida
              </p>
              <p className="text-[#F2F2F2]">
                <span className="text-[#D9A441]">›</span> soporte:{" "}
                <span className="font-bold">24/7</span> activo
                <span className="inline-block w-2 h-3.5 ml-1 bg-[#73030D] motion-safe:animate-pulse align-middle" />
              </p>
            </div>
          </div>
        </div>

        {/* Núcleo Nova: diagrama orbital animado */}
        <div className="relative w-full max-w-sm mx-auto lg:max-w-none order-first lg:order-last">
          <div className="pointer-events-none absolute inset-0 m-auto w-40 h-40 bg-[#73030D]/30 rounded-full blur-3xl motion-safe:animate-pulse" />
          <svg
            viewBox="0 0 400 400"
            className="relative w-full h-auto"
            aria-hidden="true"
          >
            {/* Anillos orbitales rotando a distintas velocidades */}
            <circle
              cx="200"
              cy="200"
              r="70"
              fill="none"
              stroke="#AFAFAF"
              strokeOpacity="0.15"
              strokeWidth="1"
              strokeDasharray="4 6"
              className="origin-center motion-safe:animate-spin [animation-duration:14s]"
            />
            <circle
              cx="200"
              cy="200"
              r="120"
              fill="none"
              stroke="#AFAFAF"
              strokeOpacity="0.12"
              strokeWidth="1"
              strokeDasharray="2 8"
              className="origin-center motion-safe:animate-spin [animation-duration:22s] [animation-direction:reverse]"
            />
            <circle
              cx="200"
              cy="200"
              r="170"
              fill="none"
              stroke="#73030D"
              strokeOpacity="0.2"
              strokeWidth="1"
              strokeDasharray="1 10"
              className="origin-center motion-safe:animate-spin [animation-duration:32s]"
            />

            {/* Núcleo central */}
            <defs>
              <radialGradient id="novaCore" cx="35%" cy="30%" r="75%">
                <stop offset="0%" stopColor="#D9A441" />
                <stop offset="45%" stopColor="#B3141F" />
                <stop offset="100%" stopColor="#73030D" />
              </radialGradient>
            </defs>
            <circle cx="200" cy="200" r="30" fill="url(#novaCore)" />
            <circle
              cx="200"
              cy="200"
              r="30"
              fill="none"
              stroke="#F2F2F2"
              strokeOpacity="0.15"
            />

            {/* Nodos de módulos ERP */}
            {[
              { x: 150, y: 250, label: "Finanzas" },
              { x: 320, y: 200, label: "Inventario" },
              { x: 142, y: 40, label: "RRHH" },
              { x: 87, y: 159, label: "Ventas" },
            ].map((node, i) => (
              <g key={node.label}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="6"
                  fill="#73030D"
                  className="motion-safe:animate-pulse"
                  style={{ animationDelay: `${i * 0.4}s` }}
                />
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="11"
                  fill="none"
                  stroke="#73030D"
                  strokeOpacity="0.4"
                />
                <text
                  x={node.x}
                  y={node.y - 16}
                  textAnchor="middle"
                  className="fill-[#AFAFAF] font-mono"
                  fontSize="11"
                >
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Home;