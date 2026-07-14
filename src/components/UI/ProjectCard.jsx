import React, { useState } from "react";

const ProjectCard = ({ title, description, tags = [], image, link, disable }) => {
    const [isVisible, setIsVisible] = useState(true);

    const disableCard = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="group bg-[#AFAFAF]/10 border border-[#AFAFAF]/30 rounded-xl overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="relative h-48 overflow-hidden bg-[#0D0D0D]">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#73030D] font-mono text-xs tracking-widest uppercase">
                        preview
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-transparent"></div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-[#0D0D0D] mb-2 group-hover:text-[#73030D] transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-[#0D0D0D]/80 text-sm leading-relaxed mb-4">
                    {description}
                </p>

                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
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
                        className="inline-flex items-center gap-1 text-sm font-bold text-[#73030D] hover:text-[#9E1A22] transition-colors duration-200"
                    >
                        Ver proyecto
                        <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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

                {disable && (
                    <button
                        onClick={disableCard}
                        className="text-xs font-bold text-[#AFAFAF]/10  px-2 py-1 rounded"
                    >
                        O
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;