import React, { useEffect, useRef } from 'react';
import { EDUCATION } from '../constants';
import Typewriter from './Typewriter';

const Education: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' 
      }
    );

    const revealItems = containerRef.current?.querySelectorAll('.reveal-item');
    revealItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="max-w-4xl mx-auto font-mono text-xs sm:text-sm md:text-base pb-20">
      <div className="text-slate-500 mb-6 sm:mb-10 italic select-none">
          <Typewriter text="// ACADEMIC_HISTORY.log" speed={20} />
      </div>
      
      <div className="space-y-8 sm:space-y-12 border-l border-[#3c3c3c] ml-1 sm:ml-4">
        {EDUCATION.map((item, idx) => (
          <div 
            key={idx} 
            className="reveal reveal-item relative pl-6 sm:pl-10 group"
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#3c3c3c] group-hover:bg-[#4ec9b0] transition-all duration-300 group-hover:scale-125 shadow-sm z-10"></div>
            
            <div className="space-y-2 sm:space-y-3">
              <div className="text-slate-500 text-[10px] sm:text-xs font-bold tracking-wider">
                <span className="text-[#569cd6]">@</span> [{item.duration}]
              </div>
              
              <h3 className="text-base sm:text-xl font-bold text-white uppercase tracking-tight leading-tight group-hover:text-[#4ec9b0] transition-colors duration-300">
                <Typewriter text={item.degree} speed={15} delay={idx * 250 + 100} />
              </h3>
              
              <p className="text-[#4ec9b0] font-medium text-xs sm:text-sm">
                <span className="text-slate-400">institution:</span> "
                <Typewriter text={item.institution} speed={15} delay={idx * 250 + 300} />
                "
              </p>
              
              <div className="text-slate-400 py-1.5 px-3 sm:px-4 bg-slate-800/40 rounded border border-white/5 inline-flex items-center text-[10px] sm:text-sm group-hover:bg-slate-800/60 group-hover:border-[#4ec9b0]/20 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Result: <span className="text-white font-bold ml-1.5">{item.score}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 sm:mt-24 pt-8 border-t border-[#3c3c3c] reveal reveal-item">
        <div className="text-slate-600 text-[10px] sm:text-xs text-center font-bold tracking-[0.3em] uppercase opacity-50">
          <Typewriter text="-- END_OF_FILE --" speed={30} delay={1000} />
        </div>
      </div>
    </div>
  );
};

export default Education;