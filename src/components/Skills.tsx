"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Layout, Server, Database, Wrench, Bug, FlaskConical, Code2, Users } from "lucide-react";

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  items: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: <Terminal size={24} />,
    items: ["Java", "Python", "JavaScript"],
    color: "from-blue-600 to-cyan-500",
  },
  {
    category: "Backend Technologies & Frameworks",
    icon: <Server size={24} />,
    items: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "JWT Authentication"],
    color: "from-emerald-600 to-teal-500",
  },
  {
    category: "Frontend Technologies & Frameworks",
    icon: <Layout size={24} />,
    items: ["React.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
    color: "from-orange-600 to-amber-500",
  },
  {
    category: "Databases",
    icon: <Database size={24} />,
    items: ["MySQL", "PostgreSQL", "SQL", "MongoDB", "Database Design"],
    color: "from-red-600 to-orange-500",
  },
  {
    category: "Testing",
    icon: <Bug size={24} />,
    items: ["Manual Testing", "Automation Testing", "API Testing", "AI Testing"],
    color: "from-sky-600 to-blue-500",
  },
  {
    category: "Testing Frameworks",
    icon: <FlaskConical size={24} />,
    items: ["Selenium", "JUnit", "TestNG", "PyTest"],
    color: "from-yellow-600 to-amber-500",
  },
  {
    category: "Software Development & Testing Concepts",
    icon: <Code2 size={24} />,
    items: ["SDLC", "STLC", "Agile", "Git Workflow", "Debugging"],
    color: "from-purple-600 to-indigo-500",
  },
  {
    category: "Tools & Platforms",
    icon: <Wrench size={24} />,
    items: ["Git", "GitHub", "Postman", "Jira"],
    color: "from-violet-600 to-fuchsia-500",
  },
  {
    category: "Soft Skills",
    icon: <Users size={24} />,
    items: ["Problem Solving", "Team Collaboration", "Adaptability", "Communication"],
    color: "from-rose-600 to-pink-500",
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
    <section id="skills" className="py-24 px-6 md:px-10 bg-gray-950 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Skills</h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
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
              <div className={`absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r ${skill.color}`} />

              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-md`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">{skill.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 bg-gray-950 border border-gray-800 rounded-lg text-sm font-medium text-gray-300 group-hover:border-gray-700 transition-colors"
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