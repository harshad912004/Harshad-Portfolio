"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  points: string[];
  tech: string[];
}

const experienceData: ExperienceItem[] = [
  {
    role: "Software Developer Intern",
    company: "Aquil Tech Labs",
    period: "Jan 2026 - Jun 2026",
    location: "Nashik, Maharashtra, India",
    description: "Developed and optimized robust, scalable full-stack web applications. Collaborated with team members to design high-throughput service APIs and normalized database models.",
    points: [
      "Engineered high-performance RESTful web services using Node.js and Express.js to process data operations efficiently.",
      "Designed and normalized MySQL relational structures, establishing performance indices to reduce query latencies.",
      "Integrated secure JSON Web Token (JWT) middleware modules and request filtering to enforce strict role-based access control.",
      "Optimized client-side rendering pathways and component lifecycles in React.js, improving layout paint speeds and lowering load bottlenecks."
    ],
    tech: ["Node.js", "Express.js", "React.js", "MySQL", "RESTful APIs", "Postman", "JWT", "Github"]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-10 bg-gray-950 border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-gray-800 ml-4 md:ml-6 pl-8 space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative glass-card rounded-3xl p-6 md:p-8 transition-all duration-350 group hover-glow"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[41px] md:-left-[43px] top-9 w-5 h-5 bg-orange-500 rounded-full border-4 border-gray-950 group-hover:scale-125 transition-transform duration-300"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-orange-400 flex items-center gap-2">
                    <Briefcase size={22} /> {exp.role}
                  </h3>
                  <h4 className="text-lg text-white font-semibold mt-1">{exp.company}</h4>
                </div>
                <div className="flex flex-col md:items-end text-gray-500 text-sm gap-1">
                  <span className="flex items-center"><Calendar size={14} className="mr-1.5" /> {exp.period}</span>
                  <span className="flex items-center"><MapPin size={14} className="mr-1.5" /> {exp.location}</span>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6 font-medium">
                {exp.description}
              </p>

              <ul className="space-y-3 mb-8">
                {exp.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-gray-950 border border-gray-800 rounded-md text-xs font-mono text-gray-350"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
