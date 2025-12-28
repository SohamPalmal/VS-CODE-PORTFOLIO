import React, { useEffect, useRef, useState, useMemo } from 'react';
import { PERSONAL_DETAILS } from '../constants';
import Typewriter from './Typewriter';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  fadeDirection: number;
  color: string;
}

interface CodeToken {
  text: string;
  className: string;
}

const TypingCodeBlock: React.FC<{ start: boolean }> = ({ start }) => {
  const [displayedChars, setDisplayedChars] = useState(0);
  
  const firstName = PERSONAL_DETAILS.name.split(' ')[0];
  
  const codeLines: CodeToken[][] = useMemo(() => [
    [
      { text: "export", className: "text-[#569cd6]" },
      { text: " ", className: "" },
      { text: "default", className: "text-[#569cd6]" },
      { text: " ", className: "" },
      { text: "function", className: "text-[#4ec9b0]" },
      { text: " ", className: "" },
      { text: "Profile", className: "text-[#dcdcaa]" },
      { text: "()", className: "text-[#ffd700]" },
      { text: " ", className: "" },
      { text: "{", className: "text-[#ffd700]" }
    ],
    [
      { text: "  ", className: "" },
      { text: "return", className: "text-[#569cd6]" },
      { text: " ", className: "" },
      { text: "<", className: "text-[#808080]" },
      { text: "Developer", className: "text-[#4ec9b0]" }
    ],
    [
      { text: "    ", className: "" },
      { text: "name", className: "text-[#9cdcfe]" },
      { text: "=", className: "" },
      { text: '"', className: "text-[#ce9178]" },
      { text: firstName, className: "text-[#ce9178]" },
      { text: '"', className: "text-[#ce9178]" }
    ],
    [
      { text: "  ", className: "" },
      { text: "/>", className: "text-[#808080]" },
      { text: ";", className: "" }
    ],
    [
      { text: "}", className: "text-[#ffd700]" }
    ]
  ], [firstName]);

  const totalChars = useMemo(() => {
    return codeLines.reduce((acc, line) => acc + line.reduce((lAcc, token) => lAcc + token.text.length, 0), 0);
  }, [codeLines]);

  useEffect(() => {
    if (!start) {
      setDisplayedChars(0);
      return;
    }

    let timer: number;
    // Small delay before typing starts to allow slide-up animation
    const startTimeout = setTimeout(() => {
        timer = window.setInterval(() => {
        setDisplayedChars((prev) => {
            if (prev >= totalChars) {
            clearInterval(timer);
            return prev;
            }
            return prev + 1;
        });
        }, 30); 
    }, 300);

    return () => {
        clearTimeout(startTimeout);
        if (timer) clearInterval(timer);
    };
  }, [start, totalChars]);

  let charCount = 0;

  return (
    <div className="font-mono text-[10px] leading-relaxed">
      {codeLines.map((line, lineIdx) => (
        <div key={lineIdx} className="flex min-h-[1.5em]">
          <span className="text-slate-500 w-4 select-none mr-1 text-right shrink-0">{lineIdx + 1}</span>
          <div className="flex flex-wrap whitespace-pre break-all">
            {line.map((token, tokenIdx) => {
              // Determine logic for this token
              const startIdx = charCount;
              const endIdx = charCount + token.text.length;
              charCount += token.text.length;

              if (displayedChars <= startIdx) return null;
              
              const textToRender = displayedChars >= endIdx 
                 ? token.text 
                 : token.text.slice(0, displayedChars - startIdx);

              return (
                <span key={tokenIdx} className={token.className}>
                  {textToRender}
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reliableImage = PERSONAL_DETAILS.profileImage;
  const [isProfileHovered, setIsProfileHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Particle Animation Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 40;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    const createParticle = (): Particle => {
      const colors = ['rgba(0, 122, 204, ', 'rgba(78, 201, 176, ']; // Blue and Teal
      const colorBase = colors[Math.floor(Math.random() * colors.length)];
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.2, // Very slow movement
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.5,
        fadeDirection: Math.random() > 0.5 ? 0.005 : -0.005,
        color: colorBase
      };
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Update Position
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around screen
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Update Opacity (Fade in/out)
        p.opacity += p.fadeDirection;
        if (p.opacity > 0.4 || p.opacity < 0.05) {
          p.fadeDirection = -p.fadeDirection;
        }

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0, p.opacity)})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleDownloadResume = () => {
    window.open(PERSONAL_DETAILS.resumeLink, '_blank');
  };

  const switchToContact = () => {
    const sidebarButtons = document.querySelectorAll('button[role="listitem"]');
    sidebarButtons.forEach(btn => {
      if (btn.textContent?.toLowerCase().includes('contact.js')) {
        (btn as HTMLButtonElement).click();
      }
    });
  };

  return (
    <div className="relative">
      {/* 1. SCREEN VIEW: VS Code UI */}
      <div ref={heroRef} className="reveal screen-only flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 max-w-6xl mx-auto py-2 sm:py-8 lg:min-h-[70vh]">
        <div className="flex-1 space-y-3 sm:space-y-4 w-full z-10">
          <div className="text-slate-500 mb-4 sm:mb-8 italic text-xs sm:text-sm select-none" aria-hidden="true">// Introduction.tsx</div>
          
          <div className="flex items-start space-x-2 sm:space-x-4">
            <span className="text-slate-600 text-[10px] sm:text-sm w-4 select-none pt-1.5 sm:pt-4 code-line-number" aria-hidden="true">1</span>
            <div className="text-xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="token-keyword">const</span> <span className="token-variable">developer</span> = <span className="text-slate-300">{'{'}</span>
            </div>
          </div>

          <div className="flex items-start space-x-2 sm:space-x-4">
            <span className="text-slate-600 text-[10px] sm:text-sm w-4 select-none pt-1 code-line-number" aria-hidden="true">2</span>
            <div className="pl-3 sm:pl-8 text-base sm:text-2xl md:text-3xl break-words">
              <span className="token-variable">name</span>: <span className="token-string">"
                <Typewriter text={PERSONAL_DETAILS.name} speed={30} delay={200} />
              "</span>,
            </div>
          </div>

          <div className="flex items-start space-x-2 sm:space-x-4">
            <span className="text-slate-600 text-[10px] sm:text-sm w-4 select-none pt-1 code-line-number" aria-hidden="true">3</span>
            <div className="pl-3 sm:pl-8 text-base sm:text-2xl md:text-3xl break-words">
              <span className="token-variable">role</span>: <span className="token-string text-wrap">"
                <Typewriter text={PERSONAL_DETAILS.role} speed={20} delay={600} />
              "</span>,
            </div>
          </div>

          <div className="flex items-start space-x-2 sm:space-x-4">
            <span className="text-slate-600 text-[10px] sm:text-sm w-4 select-none pt-1 code-line-number" aria-hidden="true">4</span>
            <div className="pl-3 sm:pl-8 text-base sm:text-2xl md:text-3xl break-words">
              <span className="token-variable">location</span>: <span className="token-string">"
                <Typewriter text="West Bengal, India" speed={20} delay={1000} />
              "</span>,
            </div>
          </div>

          <div className="flex items-start space-x-2 sm:space-x-4">
            <span className="text-slate-600 text-[10px] sm:text-sm w-4 select-none pt-1 code-line-number" aria-hidden="true">5</span>
            <div className="pl-3 sm:pl-8 text-base sm:text-2xl md:text-3xl break-words">
              <span className="token-variable">available</span>: <span className="token-keyword">true</span>
            </div>
          </div>

          <div className="flex items-start space-x-2 sm:space-x-4">
            <span className="text-slate-600 text-[10px] sm:text-sm w-4 select-none pt-1 code-line-number" aria-hidden="true">6</span>
            <div className="text-xl sm:text-4xl md:text-5xl font-bold">
              <span className="text-slate-300">{'}'}</span>;
            </div>
          </div>

          <div className="mt-8 sm:mt-12 flex flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-8">
            <button 
              onClick={switchToContact}
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#007acc] text-white rounded-sm text-xs sm:text-sm hover:bg-[#0062a3] transition-all active:scale-95 shadow-lg shadow-blue-900/20 font-bold tracking-wide flex items-center"
            >
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              HIRE_ME()
            </button>
            <button 
              onClick={handleDownloadResume}
              className="px-6 sm:px-8 py-2.5 sm:py-3 border border-[#3c3c3c] text-slate-300 rounded-sm text-xs sm:text-sm hover:bg-white/5 transition-all active:scale-95 font-bold tracking-wide"
            >
              DOWNLOAD_CV()
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end w-full relative h-[350px] sm:h-[450px] lg:h-auto items-center mt-8 lg:mt-0">
           {/* Background Particles Canvas */}
           <canvas 
            ref={canvasRef} 
            className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60"
          />

          <div className="relative group z-10 perspective-1000">
            {/* Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#007acc] to-[#4ec9b0] rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            {/* Window Frame */}
            <div 
              className="relative w-64 sm:w-72 lg:w-80 rounded-lg overflow-hidden border border-[#3c3c3c] bg-[#1e1e1e] shadow-2xl flex flex-col transform transition-transform duration-300 ease-out sm:group-hover:rotate-1 sm:group-hover:scale-[1.02]"
              onMouseEnter={() => setIsProfileHovered(true)}
              onMouseLeave={() => setIsProfileHovered(false)}
            >
              
              {/* Window Title Bar */}
              <div className="bg-[#252526] px-3 py-2 flex items-center justify-between border-b border-[#3c3c3c]">
                <div className="flex space-x-1.5">
                   <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="text-[10px] text-slate-400 font-mono flex items-center">
                  <span className="w-2 h-2 mr-1.5 bg-[#4ec9b0] rounded-full"></span>
                  profile.tsx
                </div>
                <div className="w-8"></div>
              </div>

              {/* Image Area */}
              <div className="relative aspect-[4/5] w-full bg-[#1e1e1e] group-hover:bg-[#1e1e1e] transition-colors flex items-center justify-center overflow-hidden">
                  
                  {/* Grid Lines */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#3c3c3c 1px, transparent 1px), linear-gradient(90deg, #3c3c3c 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                  {/* SP Logo Fallback with Fade Effect */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                    <span className="text-[120px] font-bold text-[#2a2a2a] select-none z-0 tracking-tighter opacity-50 blur-[1px]">SP</span>
                  </div>

                  {/* Profile Image */}
                  <img 
                    src={reliableImage} 
                    alt={PERSONAL_DETAILS.name}
                    className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />

                  {/* Code Overlay (On Hover) */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/85 backdrop-blur-sm p-3 transform translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300 z-20 border-t border-[#3c3c3c]">
                     <TypingCodeBlock start={isProfileHovered} />
                  </div>
              </div>

              {/* Status Bar */}
              <div className="bg-[#007acc] h-1.5 w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;