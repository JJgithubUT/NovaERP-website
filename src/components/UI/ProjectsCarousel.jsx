import React, { useState, useRef, useCallback, useEffect } from "react";
import ProjectCard from "./ProjectCard";

const ANGLE = 32; // grados de rotación por tarjeta lateral
const SPACING = 62; // % de desplazamiento horizontal por posición
const DEPTH = 140; // px hacia el fondo por posición
const AUTOPLAY_MS = 4500;

const ProjectsCarousel = ({ projects }) => {
  const [active, setActive] = useState(0);
  const total = projects.length;

  const dragState = useRef({ startX: 0, dragging: false });
  const autoplayRef = useRef(null);
  const stageRef = useRef(null);

  const goTo = useCallback(
    (index) => {
      setActive(((index % total) + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    autoplayRef.current = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(autoplayRef.current);
  }, [next]);

  const pauseAutoplay = () => clearInterval(autoplayRef.current);
  const resumeAutoplay = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(next, AUTOPLAY_MS);
  };

  const onPointerDown = (e) => {
    pauseAutoplay();
    dragState.current = { startX: e.clientX, dragging: true };
    stageRef.current?.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!dragState.current.dragging) return;
  };

  const onPointerUp = (e) => {
    if (!dragState.current.dragging) return;
    const deltaX = e.clientX - dragState.current.startX;
    const THRESHOLD = 50;
    if (deltaX > THRESHOLD) prev();
    else if (deltaX < -THRESHOLD) next();
    dragState.current.dragging = false;
    resumeAutoplay();
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      pauseAutoplay();
      prev();
    }
    if (e.key === "ArrowRight") {
      pauseAutoplay();
      next();
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      {/* Escenario 3D */}
      <div
        className="relative h-[480px] sm:h-[520px] overflow-hidden outline-none"
        style={{ perspective: "1600px" }}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Proyectos destacados"
        onKeyDown={onKeyDown}
      >
        <div
          ref={stageRef}
          className="relative w-full h-full cursor-grab active:cursor-grabbing touch-pan-y"
          style={{ transformStyle: "preserve-3d" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {projects.map((project, i) => {
            let offset = i - active;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const abs = Math.abs(offset);
            const isActive = offset === 0;
            const visible = abs <= 2;

            // Calculamos un brillo dinámico en lugar de usar un div superpuesto
            const brightness = isActive ? 1 : Math.max(0.4, 1 - abs * 0.35);

            const style = {
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "300px",
              transform: `translate(-50%, -50%) translateX(${
                offset * SPACING
              }%) translateZ(${-abs * DEPTH}px) rotateY(${-offset * ANGLE}deg) scale(${
                isActive ? 1 : Math.max(0.8, 1 - abs * 0.12)
              })`,
              zIndex: 100 - abs,
              pointerEvents: visible ? "auto" : "none",
              visibility: visible ? "visible" : "hidden",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              // Aplicamos el filtro de brillo nativo aquí:
              filter: `brightness(${brightness})`,
              transition:
                "transform 0.6s cubic-bezier(.22,.61,.36,1), visibility 0.6s, filter 0.6s ease",
            };

            return (
              <div
                key={project.title + i}
                style={style}
                className="h-[420px] sm:h-[440px]"
                aria-hidden={!isActive}
                onClick={() => {
                  if (!isActive) {
                    pauseAutoplay();
                    goTo(i);
                    resumeAutoplay();
                  }
                }}
              >
                {/* Contenedor limpio sin divs oscuros extra */}
                <div className="relative h-full">
                  <ProjectCard {...project} active={isActive} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Flechas */}
      <button
        onClick={() => {
          pauseAutoplay();
          prev();
          resumeAutoplay();
        }}
        aria-label="Proyecto anterior"
        className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-[#0D0D0D] text-[#F2F2F2] hover:bg-[#73030D] transition-colors duration-200 shadow-lg"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => {
          pauseAutoplay();
          next();
          resumeAutoplay();
        }}
        aria-label="Proyecto siguiente"
        className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-[#0D0D0D] text-[#F2F2F2] hover:bg-[#73030D] transition-colors duration-200 shadow-lg"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {projects.map((project, i) => (
          <button
            key={project.title + i}
            onClick={() => {
              pauseAutoplay();
              goTo(i);
              resumeAutoplay();
            }}
            aria-label={`Ir al proyecto ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-[#73030D]" : "w-2 bg-[#AFAFAF]/40 hover:bg-[#AFAFAF]/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsCarousel;