// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import ProjectsCarousel from "../components/UI/ProjectsCarousel";

const realProjects = [
  {
    title: "Nova ERP Modular",
    description:
      "Rediseño de sistema ERP legado con arquitectura modular, permitiendo integraciones seguras y despliegues independientes por módulo.",
    tags: ["Angular", "Django", "PostgreSQL"],
    image: "https://www.techzine.eu/wp-content/uploads/2025/02/shutterstock_2471711495.jpg",
    link: "",
  },
  {
    title: "Climatic ORG",
    description:
      "Automatización y control del clima en el hogar. Control mediante una innovador Aplicación Móvil",
    tags: ["Cloud Google", "Flutter - Dart", "IOT"],
    image: "https://i.ibb.co/YGfBJRW/climatic.jpg",
    link: "#",
  },
  {
    title: "Seani",
    description:
      "Sistema de Evaluación a Aspirantes de Nuevo Ingreso. Plataforma institucional innovadora en Tlaxcala.",
    tags: ["Seguridad", "Integraciones", "REST"],
    image: "https://i.ibb.co/pBBNPc6p/seani.jpg",
    link: "#",
  },
]

const projects = [
  {
    title: "",
    description: "",
    tags: [],
    image: "https://i.ibb.co/yBnVg9vh/vaquera.jpg",
    link: "#",
  },
  {
    title: "",
    description: "",
    tags: [],
    image: "https://i.ibb.co/VpY8vkf7/snt.jpg",
    link: "#",
  },
  {
    title: "",
    description: "",
    tags: [],
    image: "https://i.ibb.co/yBnVg9vh/vaquera.jpg",
    link: "#",
  },
  {
    title: "",
    description: "",
    tags: [],
    image: "https://i.ibb.co/VpY8vkf7/snt.jpg",
    link: "#",
  },
  {
    title: "",
    description: "",
    tags: [],
    image: "https://i.ibb.co/yBnVg9vh/vaquera.jpg",
    link: "#",
  },
  {
    title: "",
    description: "",
    tags: [],
    image: "https://i.ibb.co/VpY8vkf7/snt.jpg",
    link: "#",
  },
  {
    title: "",
    description: "",
    tags: [],
    image: "https://i.ibb.co/yBnVg9vh/vaquera.jpg",
    link: "#",
  },
  {
    title: "",
    description: "",
    tags: [],
    image: "https://i.ibb.co/VpY8vkf7/snt.jpg",
    link: "#",
  },
  {
    title: "",
    description: "",
    tags: [],
    image: "https://i.ibb.co/yBnVg9vh/vaquera.jpg",
    link: "#",
  },
  {
    title: "",
    description: "",
    tags: [],
    image: "https://i.ibb.co/VpY8vkf7/snt.jpg",
    link: "#",
  },
];

const Projects = () => {
  const [carrusel, setCarrusel] = useState(realProjects);

  const alternarCarrusel = () => {
    if (carrusel.length === projects.length) {
      setCarrusel(realProjects)
    } else {
      setCarrusel(projects)
    }
  }

  return (
    <section
      id="proyectos"
      className="bg-[#F2F2F2] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#AFAFAF]/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#73030D] font-bold text-sm tracking-widest uppercase block mb-3 font-mono">
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

        {/* El carrusel ahora renderizará los 6 elementos, incluyendo las botas */}
        <ProjectsCarousel projects={carrusel} />
        <div className="flex justify-center mt-8">
          <button
            onClick={alternarCarrusel}
            className="
              bg-[#73030D]
              hover:bg-[#73030D]/90
              text-white
              font-mono
              font-bold
              px-6 py-3
              rounded-md
              transition-all
              duration-300
              shadow-md
              hover:shadow-lg
              active:scale-95
            "
          >
            
          </button>
        </div>

      </div>
    </section>
  );
};

export default Projects;