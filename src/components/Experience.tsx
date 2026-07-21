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
    location: "Onsite - Nashik, Maharashtra, India",
    description: "Developed and optimized robust, scalable full-stack web applications. Collaborated with team members to design high-throughput service APIs and normalized database models.",
    points: [
      "Engineered high-performance RESTful web services using Node.js and Express.js to process data operations efficiently.",
      "Designed and normalized MySQL relational structures, establishing performance indices to reduce query latencies.",
      "Integrated secure JSON Web Token (JWT) middleware modules and request filtering to enforce strict role-based access control.",
      "Optimized client-side rendering pathways and component lifecycles in React.js, improving layout paint speeds and lowering load bottlenecks."
    ],
    tech: ["Node.js", "Express.js", "React.js", "MySQL", "RESTful APIs", "Postman", "JWT", "Github"]
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed - UpWork",
    period: "Aug 2025 - Mar 2026",
    location: "Remote (WFH)",
    description: "Delivered custom web applications for international clients.",
    points: [
      "Focused on delivering custom web applications",
      "Specialized in building responsive websites, dashboards, API integrations using React.js, Node.js, Mysql and other technologies.",
      "Gained experience in client communication, proposal writing, and managing long & short term projects."
    ],
    tech: ["Client Services", "Customer Relationship Management", "Project Management", "Proposal Writing", "Self-Employement"]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-10 bg-[#0d1b2a] border-t border-[#415a77]/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-[#e0e1dd] mb-4">Work Experience</h2>
          <div className="w-20 h-1.5 bg-[#ff5d5d] mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-[#415a77] ml-4 md:ml-6 pl-8 space-y-12">
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
              <div className="absolute -left-[41px] md:-left-[43px] top-9 w-5 h-5 bg-[#ff5d5d] rounded-full border-4 border-[#0d1b2a] group-hover:scale-125 transition-transform duration-300"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-[#ff5d5d] flex items-center gap-2">
                    <Briefcase size={22} /> {exp.role}
                  </h3>
                  <h4 className="text-lg text-[#e0e1dd] font-heading font-semibold mt-1">{exp.company}</h4>
                </div>
                <div className="flex flex-col md:items-end text-[#e0e1dd]/70 text-sm gap-1">
                  <span className="flex items-center"><Calendar size={14} className="mr-1.5 text-[#ff5d5d]" /> {exp.period}</span>
                  <span className="flex items-center"><MapPin size={14} className="mr-1.5 text-[#ff5d5d]" /> {exp.location}</span>
                </div>
              </div>

              <p className="text-[#e0e1dd]/80 leading-relaxed mb-6 font-medium">
                {exp.description}
              </p>

              <ul className="space-y-3 mb-8">
                {exp.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#e0e1dd]">
                    <CheckCircle2 size={16} className="text-[#ff5d5d] mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-[#1b263b] border border-[#415a77]/50 rounded-md text-xs font-mono text-[#e0e1dd]"
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
