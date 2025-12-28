import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Downloads from './components/Downloads';
import ResumePrint from './components/ResumePrint';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home.tsx');
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);
  const [showPortraitWarning, setShowPortraitWarning] = useState(false);
  const [isWarningDismissed, setIsWarningDismissed] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { id: 'home.tsx', name: 'home.tsx', icon: 'react', component: <Hero /> },
    { id: 'about.md', name: 'about.md', icon: 'markdown', component: <About /> },
    { id: 'skills.json', name: 'skills.json', icon: 'json', component: <Skills /> },
    { id: 'projects.cpp', name: 'projects.cpp', icon: 'cpp', component: <Projects /> },
    { id: 'education.txt', name: 'education.txt', icon: 'text', component: <Education /> },
    { id: 'downloads.json', name: 'downloads.json', icon: 'json', component: <Downloads /> },
    { id: 'contact.js', name: 'contact.js', icon: 'js', component: <Contact /> },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'react': return <span className="text-blue-400" aria-hidden="true">⚛️</span>;
      case 'markdown': return <span className="text-blue-300" aria-hidden="true">M↓</span>;
      case 'json': return <span className="text-yellow-400" aria-hidden="true">{}</span>;
      case 'cpp': return <span className="text-blue-600" aria-hidden="true">C++</span>;
      case 'text': return <span className="text-slate-400" aria-hidden="true">≡</span>;
      case 'js': return <span className="text-yellow-300" aria-hidden="true">JS</span>;
      default: return <span aria-hidden="true">📄</span>;
    }
  };

  useEffect(() => {
    const checkOrientation = () => {
      if (isWarningDismissed) return;
      const isMobile = window.innerWidth < 768;
      const isPortrait = window.innerHeight > window.innerWidth;
      setShowPortraitWarning(isMobile && isPortrait);
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    return () => window.removeEventListener('resize', checkOrientation);
  }, [isWarningDismissed]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      root: scrollContainerRef.current,
      rootMargin: '0px 0px -100px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          entry.target.classList.remove('scroll-out');
        } else if (entry.boundingClientRect.top < 0) {
          entry.target.classList.add('scroll-out');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, observerOptions);

    const setupReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((el) => {
        el.classList.remove('active');
        el.classList.remove('scroll-out');
        revealObserver.observe(el);
      });
    };

    const timeoutId = setTimeout(setupReveal, 50);

    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false);
    }

    return () => {
      clearTimeout(timeoutId);
      revealObserver.disconnect();
    };
  }, [activeTab]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  const handleDismissWarning = () => {
    setIsWarningDismissed(true);
    setShowPortraitWarning(false);
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="flex flex-col h-screen select-none overflow-hidden bg-[#1e1e1e]" role="main">
      {/* Main Body */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Activity Bar */}
        <nav className="w-10 sm:w-12 md:w-14 bg-[#333333] flex flex-col items-center py-4 space-y-4 sm:space-y-6 text-slate-400 z-30 shrink-0" aria-label="Activity Bar">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            className={`hover:text-white transition-colors p-1.5 sm:p-2 ${isSidebarOpen ? 'text-white' : ''}`}
            aria-label={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
            aria-expanded={isSidebarOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7h18M3 12h18m-7 5h7" /></svg>
          </button>
          <button className="hover:text-white transition-colors cursor-pointer p-1.5 sm:p-2" aria-label="Search"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button>
          <button className="hover:text-white transition-colors cursor-pointer p-1.5 sm:p-2" aria-label="Source Control"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg></button>
          <button 
            className="hover:text-white transition-colors cursor-pointer mt-auto p-1.5 sm:p-2" 
            aria-label="Settings"
            onClick={() => handleTabChange('downloads.json')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
          </button>
        </nav>

        {/* Sidebar */}
        <div className={`explorer-sidebar ${isSidebarOpen ? 'w-[75vw] sm:w-64 translate-x-0 shadow-2xl md:shadow-none' : 'w-0 -translate-x-full'} bg-[#252526] transition-all duration-300 absolute md:relative left-10 sm:left-12 md:left-0 h-full overflow-hidden flex flex-col border-r border-[#3c3c3c] z-20`}>
          <div className="p-3 text-[11px] font-bold uppercase tracking-wider text-slate-500 flex justify-between items-center whitespace-nowrap">
            <span>Explorer</span>
            <button aria-label="Explorer Options" className="text-slate-400">...</button>
          </div>
          <nav className="flex-1 overflow-y-auto overflow-x-hidden" aria-label="File Explorer">
            <div className="flex items-center space-x-1 px-3 py-1 bg-[#37373d]/50 cursor-pointer">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              <span className="text-xs font-bold text-slate-300 whitespace-nowrap">PORTFOLIO</span>
            </div>
            <div className="pl-2 mt-1" role="list">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  role="listitem"
                  aria-selected={activeTab === tab.id}
                  className={`w-full flex items-center space-x-2 px-4 py-3 sm:py-2 cursor-pointer text-sm transition-colors whitespace-nowrap text-left ${activeTab === tab.id ? 'bg-[#37373d] text-white border-l-2 border-[#007acc]' : 'text-slate-400 hover:bg-[#2a2d2e] hover:text-slate-200'}`}
                >
                  <span className="text-xs shrink-0">{getIcon(tab.icon)}</span>
                  <span className="truncate">{tab.name}</span>
                </button>
              ))}
            </div>
          </nav>
        </div>

        {/* Editor Area */}
        <div className="flex-1 flex flex-col bg-[#1e1e1e] overflow-hidden editor-area w-full">
          {/* Tabs Bar */}
          <div className="flex bg-[#252526] overflow-x-auto no-scrollbar border-b border-[#3c3c3c] scroll-smooth shrink-0 tabs-bar" role="tablist" aria-label="Open Editors">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                className={`flex items-center px-4 py-3 sm:py-2.5 space-x-2 cursor-pointer border-r border-[#3c3c3c] transition-all min-w-[120px] sm:min-w-[max-content] shrink-0 outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-[#007acc] ${activeTab === tab.id ? 'bg-[#1e1e1e] border-t-2 border-t-[#007acc] text-white' : 'bg-[#2d2d2d] text-slate-500 hover:bg-[#2b2b2b]'}`}
              >
                <span className="text-xs shrink-0">{getIcon(tab.icon)}</span>
                <span className="text-xs font-medium">{tab.name}</span>
                {activeTab === tab.id && <span className="text-[10px] ml-1 opacity-50" aria-hidden="true">×</span>}
              </button>
            ))}
          </div>

          {/* Breadcrumbs */}
          <div className="px-4 py-2 sm:py-1.5 text-[10px] sm:text-xs text-slate-500 flex items-center space-x-2 border-b border-[#3c3c3c] bg-[#1e1e1e] shrink-0 whitespace-nowrap overflow-hidden breadcrumbs" aria-label="Breadcrumbs">
            <span className="inline">portfolio</span>
            <span className="inline" aria-hidden="true">&gt;</span>
            <span className="text-slate-300 truncate">{activeTab}</span>
          </div>

          {/* Main Content Area */}
          <div 
            ref={scrollContainerRef}
            className="flex-1 overflow-y-auto p-4 sm:p-8 lg:p-12 font-mono scroll-smooth bg-[#1e1e1e]"
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
          >
            <div className="max-w-5xl mx-auto w-full">
              {tabs.find(t => t.id === activeTab)?.component}
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <footer className="h-[25px] bg-[#007acc] text-white text-[10px] sm:text-[11px] flex items-center justify-between px-3 shrink-0 z-30" aria-label="Status Bar">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="flex items-center space-x-1 hover:bg-white/10 px-2 h-full cursor-pointer transition-colors" title="Source Control Branch">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            <span className="hidden xs:inline">main*</span>
          </div>
          <div className="flex items-center space-x-1 hover:bg-white/10 px-2 h-full cursor-pointer transition-colors" title="Problems">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>0</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <span className="hidden xs:inline hover:bg-white/10 px-2 cursor-pointer transition-colors">Spaces: 2</span>
          <span className="hidden md:inline hover:bg-white/10 px-2 cursor-pointer transition-colors">UTF-8</span>
          <span className="hidden xs:inline hover:bg-white/10 px-2 cursor-pointer transition-colors">TSX</span>
          <div className="flex items-center hover:bg-white/10 px-2 h-full cursor-pointer transition-colors" title="Formatting Status">
             <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
             <span className="hidden sm:inline">Prettier</span>
          </div>
        </div>
      </footer>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/40 md:hidden z-10 transition-opacity backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Landscape Warning Overlay */}
      {showPortraitWarning && (
         <div className="fixed inset-0 z-[60] bg-[#1e1e1e] flex flex-col items-center justify-center p-8 text-center no-print animate-fade-in">
            <div className="w-20 h-32 border-4 border-slate-500 rounded-2xl relative flex items-center justify-center mb-8 animate-rotate-device shadow-2xl bg-[#252526]">
               <div className="w-1 h-1 bg-slate-500 rounded-full absolute bottom-3"></div>
               <div className="w-12 h-16 bg-[#1e1e1e]/50 border border-white/10 rounded"></div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Rotate for Better Experience</h2>
            <p className="text-slate-400 text-sm max-w-[260px] leading-relaxed mb-10">
               This portfolio is designed like VS Code. For the best viewing experience, please switch to landscape mode.
            </p>
            <button 
              onClick={handleDismissWarning}
              className="text-xs text-[#007acc] hover:text-white uppercase tracking-widest font-bold border-b border-transparent hover:border-white transition-all pb-1"
            >
              Continue anyway
            </button>
         </div>
       )}

      {/* Global Resume Print Component */}
      <ResumePrint />
    </div>
  );
};

export default App;