import { Project, EducationItem, SkillCategory } from './types';

export const PERSONAL_DETAILS = {
  name: "SOHAM PALMAL",
  location: "Midnapore, Paschim Medinipur, West Bengal",
  email: "palmalsoham692@gmail.com",
  phone: "9635212909",
  role: "Full-Stack Developer",
  objective: "Results-driven and innovative full-stack developer with a successful project history. Proficient in programming languages, databases, and adept at leveraging cutting-edge technologies. Seeking a challenging role to contribute technical proficiency, creative problem-solving, and collaborative skills.",
  resumeLink: "https://github.com/SohamPalmal/LANDING-PAGE-PROJECT-NEW/blob/9b81a74f50c5fe09d7e23bfb4aca5da140bcbd53/SOHAM%20PALMAL%20CV.pdf",
  profileImage: "https://photos.app.goo.gl/1EhNkgbmUL6U2gKMA"
};

export const PROJECTS: Project[] = [
  {
    title: "TO-DO-LIST",
    description: "In this project I have created a simple to-do app using HTML CSS and JavaScript. Built a To-Do List application to make a list of daily works written down in one place. Implemented functionalities like add task, remove task, filter tasks and also mark tasks as done.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/SohamPalmal/TO-DO-LIST2.git"
  },
  {
    title: "Weather Web App",
    description: "Real-time weather, global locations. Forecasts, conditions, user-friendly design. Simple search, clear weather icons.",
    technologies: ["JavaScript", "Weather API", "CSS"],
    link: "https://github.com/SohamPalmal/Weather-Web-App2.git"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Netaji Subhash Engineering College, India",
    duration: "2021 - 2025",
    score: "CGPA: 7.58"
  },
  {
    degree: "WBCHSE, (Class XII)",
    institution: "Midnapore Collegiate School, India",
    duration: "2020 - 2021",
    score: "Aggregate: 69.2%"
  },
  {
    degree: "WBBSE, (Class X)",
    institution: "Midnapore Collegiate School, India",
    duration: "2018 - 2019",
    score: "Aggregate: 75.71%"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Proficient",
    skills: ["C", "HTML", "CSS", "SQL"]
  },
  {
    title: "Familiar",
    skills: ["JavaScript", "Java"]
  },
  {
    title: "Others",
    skills: ["DSA in C"]
  }
];