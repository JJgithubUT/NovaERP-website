import React from "react";
import ProjectCard from "../components/UI/ProjectCard";

const projects = [
  {
    title: "Nova ERP Modular",
    description:
      "Rediseño de sistema ERP legado con arquitectura modular, permitiendo integraciones seguras y despliegues independientes por módulo.",
    tags: ["Angular", "Django", "PostgreSQL"],
    image: "https://www.techzine.eu/wp-content/uploads/2025/02/shutterstock_2471711495.jpg",
    link: "https://tu-sitio-web-o-repo.com", // El enlace real al proyecto si lo tienes
    disable: true
  },
  {
    title: "Climatic ORG",
    description:
      "Automatización y control del clima en el hogar. Control mediante una innovador Aplicación Móvil",
    tags: ["Cloud Google", "Flutter - Dart", "IOT"],
    image: "/climatic.jpg", // Busca directo en la raíz de public
    link: "#", 
    disable: true
  },
  {
    title: "Seani",
    description:
      "Sistema de Evaluación a Aspirantes de Nuevo Ingreso. Plataforma institucional innovadora en Tlaxcala.",
    tags: ["Seguridad", "Integraciones", "REST"],
    image: "/seani.jpeg", // Busca directo en la raíz de public
    link: "#",
    disable: true
  },
  {
    title: "👢",
    description:
      "👢",
    tags: ["👢", "💫", "👢", "🌟"],
    image: "../../public/vaquera.jpeg", // Busca directo en la raíz de public
    link: "#",
    disable: true
  },
];

const Projects = () => {
  return (
    <section
      id="proyectos"
      className="bg-[#F2F2F2] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#AFAFAF]/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#73030D] font-bold text-sm tracking-widest uppercase block mb-3 animate-pulse">
            // NUESTRO TRABAJO
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0D0D0D] leading-tight">
            Proyectos que resuelven
            <span className="text-[#73030D]"> problemas reales.</span>
          </h2>
          <p className="mt-4 text-lg text-[#0D0D0D]/80 leading-relaxed">
            Una muestra de cómo aplicamos ingeniería de software para resolver
            necesidades operativas concretas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;