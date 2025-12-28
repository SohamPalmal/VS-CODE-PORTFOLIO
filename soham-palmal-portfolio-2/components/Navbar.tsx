
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync scroll lock with menu state to prevent background scrolling
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled || isMenuOpen ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center relative z-[110]">
        <a 
          href="#" 
          onClick={closeMenu} 
          className="text-2xl font-bold text-teal-600 dark:text-teal-500 tracking-tight hover:scale-105 transition-transform"
        >
          SP.
        </a>
        
        {/* Desktop Links (Large screens only - 1024px+) */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 dark:bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
          
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-all hover:scale-110 active:scale-90"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile & Tablet Controls (Below 1024px) */}
        <div className="flex lg:hidden items-center space-x-2">
          <button 
            onClick={toggleDarkMode}
            className="p-3 rounded-lg text-slate-600 dark:text-slate-300 transition-all hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          
          <button 
            onClick={toggleMenu}
            className="p-3 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-all relative z-[120]"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-6 relative flex flex-col justify-center items-center pointer-events-none">
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 absolute ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 absolute ${isMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`}></span>
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 absolute ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 h-screen w-screen bg-white/98 dark:bg-slate-950/98 z-[90] lg:hidden transition-all duration-500 ease-in-out flex flex-col items-center justify-center ${
          isMenuOpen 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-8 px-6 w-full max-w-sm">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              style={{ 
                transitionDelay: isMenuOpen ? `${idx * 75}ms` : '0ms',
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isMenuOpen ? 1 : 0
              }}
              className="group relative text-3xl font-bold text-slate-800 dark:text-slate-100 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-500"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-teal-600 dark:bg-teal-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <div 
            className="pt-12 transition-all duration-700 w-full flex justify-center"
            style={{ 
              transitionDelay: isMenuOpen ? '400ms' : '0ms',
              transform: isMenuOpen ? 'scale(1)' : 'scale(0.9)',
              opacity: isMenuOpen ? 1 : 0
            }}
          >
             <a 
              href="#contact" 
              onClick={closeMenu} 
              className="px-12 py-4 bg-teal-600 text-white rounded-2xl font-bold text-xl shadow-xl shadow-teal-600/20 hover:scale-105 active:scale-95 transition-all block text-center w-full sm:w-auto"
             >
              Hire Me
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
