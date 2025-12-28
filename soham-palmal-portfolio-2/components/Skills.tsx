import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import Typewriter from './Typewriter';

const getSkillIcon = (skill: string) => {
  const s = skill.toLowerCase();
  const iconClass = "w-4 h-4 mr-2 shrink-0 transition-transform group-hover:scale-110";
  
  // C Programming
  if (s === 'c' || s === 'c programming' || s.includes('dsa in c')) {
    return (
      <svg className={`${iconClass} text-[#A8B9CC]`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
         <path d="M12 2L1.5 8.2V15.8L12 22L22.5 15.8V8.2L12 2ZM18.5 13.5H16.5V11.5H18.5V13.5ZM12 4.5L19.5 8.8V15.2L12 19.5L4.5 15.2V8.8L12 4.5Z" fill="currentColor"/>
         <text x="12" y="16" fontSize="10" textAnchor="middle" fill="currentColor" fontWeight="bold">C</text>
      </svg>
    );
  }

  // C++
  if (s === 'c++' || s.includes('cpp')) {
    return (
      <svg className={`${iconClass} text-[#00599C]`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.616 19.345l-1.464-2.828H16.82l-.078.204.072.059-1.956-5.176s-2.4-9.503-2.4-9.503a.16.16 0 0 0-.295-.095.161.161 0 0 0-.149.098c-.297.776-4.502 11.83-4.502 11.83l-1.934 5.06H1.65l1.626 3.654h18.06l1.28-3.311zM9.378 19.782l1.242-3.266h2.956l1.258 3.266H9.378zm2.622-3.266l-1.125 2.828h2.25L12 16.516z" />
        <path d="M19.72 13.5h-1.62v1.62h-1.62v1.62h1.62v1.62h1.62v-1.62h1.62v-1.62h-1.62V13.5zm-5.76 0h-1.62v1.62h-1.62v1.62h1.62v1.62h1.62v-1.62h1.62v-1.62h-1.62V13.5z" />
      </svg>
    );
  }

  // HTML
  if (s.includes('html')) {
    return (
      <svg className={`${iconClass} text-[#E34F26]`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
      </svg>
    );
  }

  // CSS
  if (s.includes('css')) {
    return (
      <svg className={`${iconClass} text-[#1572B6]`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-9.75l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
      </svg>
    );
  }

  // SQL
  if (s.includes('sql')) {
    return (
      <svg className={`${iconClass} text-[#00758F]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    );
  }

  // JavaScript
  if (s.includes('javascript') || s.includes('js')) {
    return (
      <svg className={`${iconClass} text-[#F7DF1E]`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="4" />
        <path d="M17.5 17h-1.5v-4.5h1.5V17zm-4.5 0h-1.5v-2.5c0-.5-.5-1-1-1H10V12h2.5c1 0 1.5.5 1.5 1.5V17z" fill="#000"/>
      </svg>
    );
  }

  // Java
  if (s.includes('java')) {
    return (
      <svg className={`${iconClass} text-[#5382A1]`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C15 2 17 3 17 4C17 5 15 6 12 6C9 6 7 5 7 4C7 3 9 2 12 2ZM6 18C6 19.5 9 21 12 21C15 21 18 19.5 18 18H6ZM4.06 15C4.5 16.5 7.5 18 12 18C16.5 18 19.5 16.5 20 15C20.5 13.5 18.5 12.5 16 12C18 11.5 19 10.5 19 9.5C19 8.5 17 7.5 14.5 7.5C16.5 7 18 6 18 4.5C18 2 15 0 12 0C9 0 6 2 6 4.5C6 6 7.5 7 9.5 7.5C7 7.5 5 8.5 5 9.5C5 10.5 6 11.5 8 12C5.5 12.5 3.5 13.5 4.06 15Z"/>
      </svg>
    );
  }

  // Python
  if (s.includes('python')) {
    return (
      <svg className={`${iconClass}`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.25.75l-.97.02h-2.5c-2.4 0-4.5 1.5-4.5 4v1.5h6v1.25h-8c-2.5 0-4.5 2-4.5 4.5v3c0 2.5 2 4.5 4.5 4.5h.75v-2.25c0-1.8 1.45-3.25 3.25-3.25h6.25v-1.25h-6v-1.5h8c2.5 0 4.5-2 4.5-4.5v-3c0-2.5-2-4.5-4.5-4.5h-.75V2.5c0-1.25-.5-1.75-1.75-1.75zM9 4.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm6 12.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#FFD43B"/>
        <path d="M9.75 23.25l.97-.02h2.5c2.4 0 4.5-1.5 4.5-4v-1.5h-6v-1.25h8c2.5 0 4.5-2 4.5-4.5v-3c0-2.5-2-4.5-4.5-4.5h-.75v2.25c0 1.25.5 1.75 1.75 1.75z" fill="#3776AB"/>
      </svg>
    );
  }
  
  // React
  if (s.includes('react')) {
     return (
        <svg className={`${iconClass} text-[#61DAFB]`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
           <circle cx="12" cy="12" r="2" fill="currentColor"/>
           <g stroke="currentColor" strokeWidth="1" fill="none">
              <ellipse cx="12" cy="12" rx="10" ry="4.5"/>
              <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)"/>
              <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)"/>
           </g>
        </svg>
     )
  }

  // Default code icon
  return (
    <svg className={`${iconClass} text-slate-500`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
};

const Skills: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto font-mono text-xs sm:text-sm md:text-base pb-10">
      <div className="mb-4 sm:mb-8">
        <span className="text-slate-300" aria-hidden="true">{'{'}</span>
      </div>

      <div className="space-y-4 sm:space-y-6" role="list">
        {SKILL_CATEGORIES.map((category, idx) => (
          <div key={idx} className="pl-2 sm:pl-10" role="listitem">
            <div className="flex items-start">
              <span className="token-variable">
                "<Typewriter text={category.title.toLowerCase()} speed={30} delay={idx * 300} />"
              </span>: <span className="text-slate-300" aria-hidden="true">[</span>
            </div>
            <div className="pl-6 sm:pl-12 flex flex-col gap-1 py-1.5 sm:py-2" aria-label={`Skills in ${category.title} category`}>
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="flex items-center group">
                  {getSkillIcon(skill)}
                  <span className="token-string">
                    "<Typewriter text={skill} speed={15} delay={idx * 300 + 100 + sIdx * 50} />"
                  </span>
                  {sIdx < category.skills.length - 1 && <span className="text-slate-500 mr-1 sm:mr-2" aria-hidden="true">,</span>}
                </div>
              ))}
            </div>
            <div>
              <span className="text-slate-300" aria-hidden="true">]</span>
              {idx < SKILL_CATEGORIES.length - 1 && <span className="text-slate-500" aria-hidden="true">,</span>}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 sm:mt-6">
        <span className="text-slate-300" aria-hidden="true">{'}'}</span>
      </div>

      <div className="mt-10 sm:mt-16 bg-slate-800/20 p-5 sm:p-8 border border-[#3c3c3c] rounded-md">
        <h2 className="text-[#4ec9b0] font-bold mb-4 sm:mb-6 uppercase text-[10px] sm:text-xs tracking-widest">
           <Typewriter text="// Technical Proficiencies" speed={20} delay={1000} />
        </h2>
        <div className="flex flex-wrap gap-2 sm:gap-3" role="list" aria-label="Consolidated skills list">
          {SKILL_CATEGORIES.flatMap(c => c.skills).map((skill, i) => (
            <div key={i} role="listitem" className="px-3 py-1.5 bg-[#1e1e1e] border border-[#3c3c3c] text-slate-300 rounded text-[10px] sm:text-xs hover:border-[#4ec9b0] transition-all cursor-default select-none shadow-sm animate-fade-in flex items-center group" style={{ animationDelay: `${1.5 + i * 0.1}s` }}>
              {getSkillIcon(skill)}
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;