"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Landmark } from "lucide-react";

interface EducationItem {
  degree: string;
  school: string;
  year: string;
  focus: string;
  details: string;
  icon: React.ReactNode;
}

const educationData: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "MET Institute of Engineering, Nashik (SPPU)",
    year: "2024 - 2026",
    focus: "Advanced Database Architectures, Distributed Systems, Software Engineering & Project Management, Object-Oriented Analysis & Design.",
    details: "Developing clean production code structures, managing software deployment workflows, and constructing scalable web-oriented solutions.",
    icon: <GraduationCap size={28} />
  },
  {
    degree: "Bachelor of Science in Computer Science (B.Sc. CS)",
    school: "Bytco College, Nashik (SPPU)",
    year: "2021 - 2024",
    focus: "Data Structures & Algorithms, Object-Oriented Programming (Java), Operating Systems, Relational Database Management Systems (RDBMS).",
    details: "Graduated with 8.72 CGPA (79.64%) | Final Grade: A+. Built fundamental programming and computational logic structures.",
    icon: <BookOpen size={28} />
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-10 bg-gradient-to-b from-gray-950 to-black border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Education</h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-gray-900/30 border border-gray-900 hover:border-orange-500/30 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover:shadow-xl transition-all duration-300"
            >
              <div className="p-4 bg-orange-500/10 rounded-2xl text-orange-400 flex-shrink-0 border border-orange-500/20">
                {edu.icon}
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">{edu.degree}</h3>
                  <span className="text-gray-500 font-mono text-sm md:text-base font-semibold">{edu.year}</span>
                </div>

                <h4 className="text-lg text-orange-450 font-medium mb-3">{edu.school}</h4>

                <div className="space-y-2.5 text-sm md:text-base text-gray-300">
                  <p className="leading-relaxed">
                    <strong className="text-gray-400 text-xs font-mono uppercase tracking-wider block mb-1">Focus Areas:</strong>
                    {edu.focus}
                  </p>
                  <p className="leading-relaxed text-gray-400">
                    <strong className="text-gray-400 text-xs font-mono uppercase tracking-wider block mb-1">Details:</strong>
                    {edu.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;