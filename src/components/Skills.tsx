"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Layout, Server, Database, Wrench, Bug, FlaskConical, Code2, Users } from "lucide-react";

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: <Terminal size={24} />,
    items: ["Java", "Python", "JavaScript"],
  },
  {
    category: "Backend Technologies & Frameworks",
    icon: <Server size={24} />,
    items: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "JWT Authentication"],
  },
  {
    category: "Frontend Technologies & Frameworks",
    icon: <Layout size={24} />,
    items: ["React.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
  },
  {
    category: "Databases",
    icon: <Database size={24} />,
    items: ["MySQL", "PostgreSQL", "SQL", "MongoDB", "Database Design"],
  },
  {
    category: "Testing",
    icon: <Bug size={24} />,
    items: ["Manual Testing", "Automation Testing", "API Testing", "AI Testing"],
  },
  {
    category: "Testing Frameworks",
    icon: <FlaskConical size={24} />,
    items: ["Selenium", "JUnit", "TestNG", "PyTest"],
  },
  {
    category: "Software Development & Testing Concepts",
    icon: <Code2 size={24} />,
    items: ["SDLC", "STLC", "Agile", "Git Workflow", "Debugging"],
  },
  {
    category: "Tools & Platforms",
    icon: <Wrench size={24} />,
    items: ["Git", "GitHub", "Postman", "Jira"],
  },
  {
    category: "Soft Skills",
    icon: <Users size={24} />,
    items: ["Problem Solving", "Team Collaboration", "Adaptability", "Communication"],
  },
];

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-10 bg-[#0d1b2a] border-t border-[#415a77]/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-[#e0e1dd] mb-4">Technical Skills & Expertise</h2>
          <div className="w-20 h-1.5 bg-[#ff5d5d] mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skillCategories.map((skill) => (
            <motion.div
              key={skill.category}
              variants={itemVariants}
              className="group glass-card rounded-2xl p-6 transition-all duration-300 hover-glow relative overflow-hidden"
            >
              {/* Top card accent glow */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#ff5d5d] via-[#ff8585] to-[#415a77]" />

              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-xl bg-[#ff5d5d]/10 text-[#ff5d5d] border border-[#ff5d5d]/30 shadow-md">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-[#e0e1dd] tracking-wide">{skill.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 bg-[#1b263b] border border-[#415a77]/60 rounded-lg text-sm font-medium text-[#e0e1dd] group-hover:border-[#ff5d5d]/40 group-hover:text-[#ff5d5d] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;