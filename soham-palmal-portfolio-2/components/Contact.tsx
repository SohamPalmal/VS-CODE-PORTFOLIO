import React, { useState } from 'react';
import { PERSONAL_DETAILS } from '../constants';
import Typewriter from './Typewriter';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_DETAILS.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 pb-20">
      <div className="space-y-2 reveal">
        <div className="token-keyword text-sm sm:text-base">export default function <span className="token-function"><Typewriter text="ContactHandler" speed={30} /></span><span className="text-slate-300" aria-hidden="true">() {'{'}</span></div>
      </div>

      {/* Intro / Contact Info Section */}
      <section className="reveal pl-0 sm:pl-6" aria-labelledby="connect-heading">
        <h2 id="connect-heading" className="text-xl sm:text-2xl font-bold text-white mb-6 tracking-tight">
            <Typewriter text="// Let's Connect" speed={20} delay={300} />
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-12">
          <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
            <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center text-[#4ec9b0] shrink-0" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div className="min-w-0">
              <span className="block text-[10px] text-slate-500 uppercase tracking-widest font-bold">Email</span>
              <span className="text-slate-300 truncate block text-sm">{PERSONAL_DETAILS.email}</span>
              <button 
                onClick={handleCopyEmail} 
                className="text-[10px] text-[#4ec9b0] hover:underline mt-1 font-mono focus:outline-none focus:ring-1 focus:ring-[#4ec9b0]"
                aria-live="polite"
              >
                {copied ? 'COPIED!' : 'COPY_TO_CLIPBOARD'}
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
            <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center text-[#4ec9b0] shrink-0" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <div>
              <span className="block text-[10px] text-slate-500 uppercase tracking-widest font-bold">Phone</span>
              <span className="text-slate-300 text-sm">{PERSONAL_DETAILS.phone}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form and Preview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pl-0 sm:pl-6 items-stretch">
        {/* Form Side */}
        <form className="reveal bg-[#252526] p-4 sm:p-8 rounded border border-[#3c3c3c] space-y-4 shadow-xl flex flex-col justify-between" style={{ transitionDelay: '100ms' }} onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            <div className="text-slate-500 text-[10px] font-mono mb-2" aria-hidden="true">// quick_message.js</div>
            <div className="space-y-1">
              <input 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                aria-label="Your Name"
                className="w-full bg-[#1e1e1e] border border-[#3c3c3c] px-4 py-3 text-sm text-slate-300 focus:border-[#4ec9b0] outline-none transition-all rounded-sm placeholder-slate-600 focus:bg-black/20" 
                placeholder="name" 
              />
            </div>
            <div className="space-y-1">
              <input 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                aria-label="Your Email Address"
                className="w-full bg-[#1e1e1e] border border-[#3c3c3c] px-4 py-3 text-sm text-slate-300 focus:border-[#4ec9b0] outline-none transition-all rounded-sm placeholder-slate-600 focus:bg-black/20" 
                placeholder="email" 
              />
            </div>
            <div className="space-y-1">
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                aria-label="Your Message Body"
                rows={6} 
                className="w-full bg-[#1e1e1e] border border-[#3c3c3c] px-4 py-3 text-sm text-slate-300 focus:border-[#4ec9b0] outline-none resize-none transition-all rounded-sm placeholder-slate-600 focus:bg-black/20" 
                placeholder="message_body"
              ></textarea>
            </div>
          </div>
          <button type="submit" className="bg-[#007acc] text-white w-full py-4 text-sm font-bold hover:bg-[#0062a3] transition-all active:scale-95 shadow-lg shadow-black/20 mt-4 border border-white/5 uppercase tracking-widest outline-none focus-visible:ring-2 focus-visible:ring-white">
            submit_form()
          </button>
        </form>

        {/* Live Preview Side */}
        <div className="reveal bg-[#1e1e1e] rounded border border-[#3c3c3c] flex flex-col shadow-2xl overflow-hidden min-h-[350px]" style={{ transitionDelay: '200ms' }} aria-label="Message JSON Preview">
          {/* Editor Header */}
          <div className="bg-[#252526] flex items-center px-4 py-2 space-x-2 border-b border-[#3c3c3c]" aria-hidden="true">
            <span className="text-xs text-yellow-400">{}</span>
            <span className="text-xs text-slate-400 font-mono">live_message_preview.json</span>
            <div className="ml-auto flex space-x-1.5 opacity-50">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
            </div>
          </div>
          
          {/* Editor Body */}
          <div className="p-4 sm:p-6 font-mono text-sm overflow-auto h-full bg-[#1e1e1e]" aria-live="polite">
            <div className="flex items-start space-x-4 group">
              <span className="text-slate-600 select-none text-right w-4" aria-hidden="true">1</span>
              <span className="text-slate-300">{'{'}</span>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-slate-600 select-none text-right w-4" aria-hidden="true">2</span>
              <div className="pl-6">
                <span className="token-variable">"sender"</span>: <span className="token-string">"{formData.name || 'Anonymous'}"</span>,
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-slate-600 select-none text-right w-4" aria-hidden="true">3</span>
              <div className="pl-6">
                <span className="token-variable">"contact"</span>: <span className="token-string">"{formData.email || 'not_provided'}"</span>,
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-slate-600 select-none text-right w-4" aria-hidden="true">4</span>
              <div className="pl-6 flex">
                <span className="token-variable shrink-0">"content"</span>: <span className="text-slate-300 ml-1">"</span>
              </div>
            </div>
            {/* Multi-line message body preview */}
            {(formData.message || 'Write something...').split('\n').map((line, i) => (
              <div key={i} className="flex items-start space-x-4">
                <span className="text-slate-600 select-none text-right w-4" aria-hidden="true">{5 + i}</span>
                <div className="pl-12">
                   <span className={formData.message ? "text-orange-300/90 break-all" : "text-slate-600 italic break-all"}>
                    {line}
                  </span>
                </div>
              </div>
            ))}
            <div className="flex items-start space-x-4">
              <span className="text-slate-600 select-none text-right w-4" aria-hidden="true">{5 + (formData.message ? formData.message.split('\n').length : 1)}</span>
              <div className="pl-6">
                <span className="text-slate-300">"</span>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-slate-600 select-none text-right w-4" aria-hidden="true">{6 + (formData.message ? formData.message.split('\n').length : 1)}</span>
              <span className="text-slate-300">{'}'}</span>
            </div>

            <div className="mt-8 flex items-center space-x-2">
              <div className="w-2 h-4 bg-[#4ec9b0] animate-pulse" aria-hidden="true"></div>
              <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">Watching...</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pl-0 sm:pl-6 pt-8 reveal">
        <span className="text-slate-300 text-sm sm:text-base" aria-hidden="true">{'}'}</span>
      </div>
    </div>
  );
}