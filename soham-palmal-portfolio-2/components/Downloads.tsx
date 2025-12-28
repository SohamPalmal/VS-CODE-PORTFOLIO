import React from 'react';
import { PERSONAL_DETAILS } from '../constants';
import Typewriter from './Typewriter';

const Downloads: React.FC = () => {
  const handleDownloadCV = () => {
    window.open(PERSONAL_DETAILS.resumeLink, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      <div className="reveal space-y-2">
        <div className="token-comment text-sm select-none"><Typewriter text="// Asset_Manager.json" speed={20} /></div>
        <div className="text-2xl sm:text-4xl font-bold text-white mb-2">
            # <Typewriter text="Download Center" speed={30} delay={200} />
        </div>
        <p className="text-slate-400 text-sm italic">Get official documents and assets for {PERSONAL_DETAILS.name}</p>
      </div>

      <div className="grid grid-cols-1 max-w-md mx-auto">
        {/* CV Download Card */}
        <div className="reveal bg-[#252526] border border-[#3c3c3c] rounded-lg p-6 flex flex-col items-center text-center space-y-6 hover:border-[#007acc] transition-all group shadow-xl">
          <div className="w-16 h-16 bg-[#007acc]/10 rounded-full flex items-center justify-center text-[#007acc] group-hover:scale-110 transition-transform">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
             </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Professional CV</h3>
            <p className="text-slate-400 text-sm">View and download the professional CV directly from the repository.</p>
          </div>
          <button 
            onClick={handleDownloadCV}
            className="w-full py-3 bg-[#007acc] text-white rounded font-bold hover:bg-[#0062a3] transition-all active:scale-95 flex items-center justify-center space-x-2 shadow-lg shadow-blue-900/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>DOWNLOAD_PDF</span>
          </button>
        </div>
      </div>

      <div className="reveal mt-12 bg-black/20 p-6 rounded border border-[#3c3c3c] font-mono text-xs text-slate-500 leading-relaxed" style={{ transitionDelay: '200ms' }}>
        <p className="mb-2 uppercase tracking-widest font-bold">// System Note</p>
        <p>
          The CV is hosted on GitHub for easy access and version tracking. Clicking "DOWNLOAD_PDF" will open the file in a new tab.
        </p>
      </div>
    </div>
  );
};

export default Downloads;