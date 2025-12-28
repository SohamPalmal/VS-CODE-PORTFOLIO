import React from 'react';
import { PERSONAL_DETAILS } from '../constants';
import Typewriter from './Typewriter';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 pb-12">
      <div className="border-b border-[#3c3c3c] pb-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2"># About Me</h1>
        <p className="text-xs sm:text-sm text-slate-400">Documentation for developer: <Typewriter text={PERSONAL_DETAILS.name} speed={20} /></p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#4ec9b0]">## Objective</h2>
        <blockquote className="border-l-4 border-[#007acc] pl-4 py-2 bg-slate-800/20 text-slate-300 italic text-base sm:text-lg leading-relaxed min-h-[100px]">
          <Typewriter text={PERSONAL_DETAILS.objective} speed={5} delay={200} />
        </blockquote>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-8 sm:mt-12">
        <div className="p-5 sm:p-6 bg-slate-800/30 border border-[#3c3c3c] rounded-md hover:border-[#4ec9b0] transition-colors group">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center">
            <span className="text-[#4ec9b0] mr-2">1.</span> Problem Solving
          </h3>
          <p className="text-slate-400 leading-relaxed text-xs sm:text-sm h-full">
            <Typewriter 
              text="Expert problem solver, adept at breaking down challenges and implementing innovative solutions with attention to detail." 
              speed={10} 
              delay={600} 
            />
          </p>
        </div>
        <div className="p-5 sm:p-6 bg-slate-800/30 border border-[#3c3c3c] rounded-md hover:border-[#4ec9b0] transition-colors group">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center">
            <span className="text-[#4ec9b0] mr-2">2.</span> Leadership
          </h3>
          <p className="text-slate-400 leading-relaxed text-xs sm:text-sm h-full">
            <Typewriter 
              text="Leading teams, optimizing operations, driving problem-solving, and fostering clear, concise verbal communication. Demonstrates strong leadership and organizational capabilities." 
              speed={10} 
              delay={900} 
            />
          </p>
        </div>
      </section>

      <section className="mt-8 pt-8 border-t border-[#3c3c3c]">
         <div className="bg-[#252526] p-6 rounded-lg border border-[#3c3c3c]">
            <h3 className="text-lg font-bold text-white mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
               <div className="flex flex-col space-y-1">
                  <span className="text-slate-500 uppercase text-[10px] font-bold tracking-widest">Address</span>
                  <span className="text-slate-300"><Typewriter text={PERSONAL_DETAILS.location} speed={15} delay={1200} /></span>
               </div>
               <div className="flex flex-col space-y-1">
                  <span className="text-slate-500 uppercase text-[10px] font-bold tracking-widest">Phone</span>
                  <span className="text-slate-300"><Typewriter text={PERSONAL_DETAILS.phone} speed={20} delay={1350} /></span>
               </div>
               <div className="flex flex-col space-y-1">
                  <span className="text-slate-500 uppercase text-[10px] font-bold tracking-widest">Email</span>
                  <span className="text-[#4ec9b0]"><Typewriter text={PERSONAL_DETAILS.email} speed={15} delay={1500} /></span>
               </div>
            </div>
         </div>
      </section>

      <div className="mt-8 sm:mt-12 text-slate-600 text-[10px] sm:text-xs italic text-right">
        Last updated: {new Date().toLocaleDateString()}
      </div>
    </div>
  );
};

export default About;