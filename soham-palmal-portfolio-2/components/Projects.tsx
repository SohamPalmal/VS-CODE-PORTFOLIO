import React, { useRef } from 'react';
import { PROJECTS } from '../constants';
import Typewriter from './Typewriter';

// Individual Project Card with Parallax Effect
const ProjectCard = ({ project, index }: { project: typeof PROJECTS[0], index: number }) => {
  const cardRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current || !imageRef.current) return;

    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    // Parallax intensity
    const xOffset = x * 20; 
    const yOffset = y * 20;

    // Apply transform directly for performance
    // Use a short transition for the follow effect
    imageRef.current.style.transition = 'transform 0.1s ease-out';
    imageRef.current.style.transform = `scale(1.1) translate(${-xOffset}px, ${-yOffset}px)`;
  };

  const handleMouseLeave = () => {
    if (!imageRef.current) return;
    // Reset transition for smooth exit
    imageRef.current.style.transition = 'transform 0.7s ease-in-out';
    imageRef.current.style.transform = 'scale(1) translate(0px, 0px)';
  };

  return (
    <article 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-[#252526] border border-[#3c3c3c] rounded-lg overflow-hidden flex flex-col transition-all duration-500 ease-out group shadow-lg hover:shadow-2xl hover:shadow-[#4ec9b0]/10 hover:border-[#4ec9b0] hover:transform-none sm:hover:-translate-y-2 sm:hover:scale-[1.02] sm:hover:rotate-[0.5deg]"
      style={{ 
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Project Image Section */}
      <div className="aspect-video relative overflow-hidden bg-slate-900">
         <img 
          ref={imageRef}
          src={`https://picsum.photos/seed/${project.title.replace(/\s/g, '')}/800/450`} 
          alt={`Screenshot for ${project.title}`}
          // Removed sm:group-hover:scale-110 to control transform via JS for parallax
          // Retained opacity transitions
          className="w-full h-full object-cover opacity-80 sm:opacity-60 group-hover:opacity-100 transition-opacity duration-700 ease-in-out will-change-transform"
          loading="lazy"
        />
        {/* Overlay: Always visible on mobile (opacity-100), fade on desktop (sm:opacity-0) */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 sm:bg-black/0 sm:group-hover:bg-black/50 transition-all duration-300 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 pointer-events-none">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={`View ${project.title} project source on GitHub`}
            className="bg-[#007acc] text-white px-6 py-3 rounded-sm text-xs font-bold sm:translate-y-4 sm:group-hover:translate-y-0 transition-all active:scale-95 shadow-lg border border-white/10 pointer-events-auto"
          >
            view_project()
          </a>
        </div>
        <div className="absolute top-0 left-0 w-full sm:w-0 h-[2px] bg-[#4ec9b0] sm:group-hover:w-full transition-all duration-500" aria-hidden="true"></div>
      </div>

      {/* Content Section */}
      <div className="p-5 sm:p-7 flex-1 flex flex-col space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-[#4ec9b0] transition-all duration-300 tracking-tight">
            <Typewriter text={project.title} speed={20} delay={index * 200 + 100} />
          </h3>
          <span className="text-slate-600 text-[10px] font-mono group-hover:text-slate-400 transition-colors" aria-hidden="true">0{index + 1}</span>
        </div>
        
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed flex-1 group-hover:text-slate-200 transition-colors duration-300 min-h-[60px]">
          <Typewriter text={project.description} speed={2} delay={index * 200 + 300} />
        </p>

        {/* Technologies Section */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-[#3c3c3c] transition-all duration-500" aria-label="Technologies used">
          {project.technologies.map((tech, techIdx) => (
            <span 
              key={tech} 
              className="text-[10px] bg-[#1e1e1e] text-teal-400 px-2.5 py-1 rounded border border-teal-900/30 whitespace-nowrap opacity-90 sm:opacity-70 group-hover:opacity-100 transition-all duration-300 cursor-default sm:hover:bg-[#4ec9b0] sm:hover:text-[#1e1e1e] sm:hover:-translate-y-1 sm:hover:border-[#4ec9b0] sm:hover:shadow-md"
              style={{ transitionDelay: `${techIdx * 40}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12 pb-20">
      <div className="space-y-2">
        <div className="token-comment text-xs sm:text-sm select-none" aria-hidden="true">// Featured Projects Implementation</div>
        <div className="flex items-center space-x-2">
          <span className="token-keyword">class</span> <span className="token-type">Portfolio</span> <span className="text-slate-300" aria-hidden="true">{'{'}</span>
        </div>
        <div className="pl-4 sm:pl-6 text-[#569cd6] text-sm sm:text-base">public:</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 pl-0 sm:pl-6">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>

      <div className="pl-0 sm:pl-6">
        <span className="text-slate-300" aria-hidden="true">{'}'}</span>;
      </div>
    </div>
  );
};

export default Projects;