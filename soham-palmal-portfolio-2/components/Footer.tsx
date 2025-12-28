
import React from 'react';
import { PERSONAL_DETAILS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-900 dark:bg-slate-950 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0 mb-12">
          <div className="w-full md:w-auto">
            <h3 className="text-2xl font-bold text-teal-400 mb-2">{PERSONAL_DETAILS.name}</h3>
            <p className="text-slate-400 text-sm max-w-xs mx-auto md:mx-0">{PERSONAL_DETAILS.role}</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm md:text-base">
             <a href={`mailto:${PERSONAL_DETAILS.email}`} className="text-slate-300 hover:text-teal-400 transition-colors font-medium">
               {PERSONAL_DETAILS.email}
             </a>
             <div className="hidden sm:block h-4 w-px bg-slate-700"></div>
             <p className="text-slate-300 font-medium">{PERSONAL_DETAILS.phone}</p>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} {PERSONAL_DETAILS.name}. All rights reserved.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-[10px] uppercase tracking-widest text-slate-600 font-semibold">
            <span>Built with React</span>
            <span>Tailwind CSS</span>
            <span>TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
