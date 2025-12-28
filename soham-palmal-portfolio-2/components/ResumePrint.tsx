import React from 'react';
import { PERSONAL_DETAILS, EDUCATION, PROJECTS, SKILL_CATEGORIES } from '../constants';

const ResumePrint: React.FC = () => {
  const reliableImage = PERSONAL_DETAILS.profileImage;

  return (
    <div className="print-only bg-white text-black p-0 font-serif leading-tight">
      {/* Header */}
      <div className="flex items-start space-x-6 mb-4">
        <div className="w-32 h-36 border border-gray-300 flex items-center justify-center bg-gray-100 shrink-0 overflow-hidden relative">
            <span className="text-5xl font-bold text-gray-300">SP</span>
            <img 
              src={reliableImage} 
              className="absolute inset-0 w-full h-full object-cover" 
              alt="Profile"
              loading="eager"
              crossOrigin="anonymous"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
        </div>
        <div className="flex-1 mt-2">
          <h1 className="text-3xl font-bold mb-1 uppercase tracking-wide">{PERSONAL_DETAILS.name}</h1>
          <div className="text-sm space-y-1 mt-2">
            <p><strong>Address:</strong> {PERSONAL_DETAILS.location}</p>
            <p><strong>Phone:</strong> {PERSONAL_DETAILS.phone}</p>
            <p><strong>Email:</strong> <span className="text-blue-700 underline decoration-1">{PERSONAL_DETAILS.email}</span></p>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-t-2 border-black mb-4" />

      {/* Objective */}
      <div className="mb-5">
        <h2 className="text-lg font-bold border-b border-black uppercase mb-2 tracking-wide">OBJECTIVE</h2>
        <p className="text-sm text-justify leading-snug">{PERSONAL_DETAILS.objective}</p>
      </div>

      {/* Education */}
      <div className="mb-5">
        <h2 className="text-lg font-bold border-b border-black uppercase mb-2 tracking-wide">EDUCATION</h2>
        {EDUCATION.map((edu, idx) => (
          <div key={idx} className="mb-3">
            <div className="flex justify-between font-bold text-sm">
              <span>{edu.institution}</span>
              <span>{edu.duration}</span>
            </div>
            <p className="text-sm">{edu.degree}, {edu.score}</p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="mb-5">
        <h2 className="text-lg font-bold border-b border-black uppercase mb-2 tracking-wide">SKILLS</h2>
        <div className="text-sm space-y-1">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="flex">
              <span className="font-bold w-24 shrink-0">{cat.title}</span>
              <span>{cat.skills.join(', ')}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="mb-5">
        <h2 className="text-lg font-bold border-b border-black uppercase mb-2 tracking-wide">PROJECTS</h2>
        {PROJECTS.map((proj, idx) => (
          <div key={idx} className="mb-3">
            <p className="font-bold text-sm mb-1">
              {proj.title}. <a href={proj.link} className="text-blue-700 underline font-normal italic decoration-1">(Try it here)</a>
            </p>
            <ul className="list-disc ml-5 text-sm space-y-0.5">
              {proj.description.split('. ').map((point, pIdx) => {
                const cleanPoint = point.trim();
                if (!cleanPoint) return null;
                const finalPoint = cleanPoint.endsWith('.') ? cleanPoint : cleanPoint + '.';
                return <li key={pIdx}>{finalPoint}</li>;
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Soft Skills */}
      <div className="mb-5">
        <h2 className="text-lg font-bold border-b border-black uppercase mb-2 tracking-wide">SOFT SKILLS</h2>
        <ul className="list-disc ml-5 text-sm space-y-1">
          <li><strong>Problem Solving:</strong> Expert problem solver, adept at breaking down challenges and implementing innovative solutions with attention to detail.</li>
          <li><strong>Leadership:</strong> Leading teams, optimizing operations, driving problem-solving, and fostering clear, concise verbal communication. Demonstrates strong leadership and organizational capabilities.</li>
        </ul>
      </div>
    </div>
  );
};

export default ResumePrint;