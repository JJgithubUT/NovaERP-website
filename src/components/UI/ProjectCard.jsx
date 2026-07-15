// eslint-disable-next-line no-unused-vars
import React from "react";

const ProjectCard = ({ title, description, tags = [], image, link, active }) => {
  return (
    <div
      className={`h-full flex flex-col bg-white border border-[#AFAFAF]/40 rounded-xl overflow-hidden transition-all duration-500 ${
        active 
          ? "shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border-transparent" 
          : "shadow-[0_10px_25px_-5px_rgba(0,0,0,0.2)]"
      }`}
    >
      <div className="relative h-48 shrink-0 overflow-hidden bg-[#0D0D0D]">
        {image ? (
          <img
            src={image}
            alt={title}
            draggable={false}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              active ? "scale-100" : "scale-105"
            }`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#73030D] font-mono text-xs tracking-widest uppercase">
            preview
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-transparent" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-[#0D0D0D] mb-2">{title}</h3>

        <p className="text-[#0D0D0D]/80 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4 mt-auto">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono font-semibold text-[#73030D] bg-[#73030D]/10 px-2.5 py-1 rounded-sm tracking-wide uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={active ? 0 : -1}
            onClick={(e) => {
              if (!active) e.preventDefault();
            }}
            className="inline-flex items-center gap-1 text-sm font-bold text-[#73030D] hover:text-[#9E1A22] transition-colors duration-200"
          >
            Ver proyecto
            <svg
              className="w-4 h-4 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;