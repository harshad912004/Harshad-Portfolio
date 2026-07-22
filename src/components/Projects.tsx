"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, GitBranch, Cpu, ListChecks } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

interface Project {
  title: string;
  image: string;
  tech: string[];
  desc: string;
  features: string[];
  challenges: string;
  impact: string;
  github: string;
  live: string;
}

const projectsData: Project[] = [
  {
    title: "SteelMart",
    image: "/Projects/steelmart.png",
    tech: ["Node.js", "Express.js", "MySQL", "React.js"],
    desc: "Developed a Full Stack ERP & CRM Portal by using Node.js, Express.js, MySQL, React.js which enables secured communication between Admin, General Contractors and Vendors online. Designed and Implemented REST APIs for managing projects, authenticating users and processing bids that helps in maintaining efficient communication between frontend & backend. Postman used for testing APIs. Added JSON Web Token (JWT) based Authentication & Role Based Access Control (RBAC) to provide secure, role-specific access to the application. Also added password encryption and authentication process. Enhanced performance of the application through optimization of MySQL queries and schemas. Collaborated with the development team using Git/GitHub and followed Agile methodologies.",
    features: [
      "Portal to connect admin and vendors",
      "Real-time communication using RFIs and Submittals"
    ],
    challenges: "Developed a custom geospatial matching algorithm to handle complex logistics constraints for steel procurement while maintaining sub-second response times.",
    impact: "Reduced procurement cycle times by 45% and expanded supplier discovery reach by 200% for participating SMEs.",
    github: "https://github.com/harshad912004/SteelMart",
    live: ""
  },
  {
    title: "CampusEats",
    image: "/Projects/CampusEats.png",
    tech: ["Python (Flask)", "MySQL", "Tailwind CSS", "JavaScript"],
    desc: "An online food ordering and real-time vendor dispatch system tailored for university canteens.",
    features: [
      "Real-time food order status synchronization",
      "Robust shopping cart state preservation",
      "Multi-role user portal (Customers vs. Canteen Vendors)"
    ],
    challenges: "Managed real-time order state updates reliably via lightweight client polling, and resolved database deadlock issues under peak menu updates.",
    impact: "Reduced canteen checkout transaction latencies by 30% and lowered average peak canteen queue times by 40%.",
    github: "https://github.com/harshad912004/CampusEats",
    live: ""
  },
  {
    title: "CyberGuardian",
    image: "/Projects/Cyber_Guardian.png",
    tech: ["Java (JSP/Servlet)", "JDBC", "MySQL", "Tailwind CSS"],
    desc: "A secure cyber-awareness e-learning full-stack platform featuring interactive quiz engines and session audits.",
    features: [
      "Secure session-based authentication & session audits",
      "Dynamic quiz grading engine with automatic scoring",
      "Administrative dashboard for content & user management"
    ],
    challenges: "Prevented SQL injection and Cross-Site Scripting (XSS) by implementing parameterized prepared queries and HTML input sanitation filters.",
    impact: "Optimized server API response latency to sub-50ms and ensured 100% transactional data integrity for user progress audits.",
    github: "https://github.com/harshad912004/Cyber_Guardian",
    live: "https://harshad912004.github.io/Cyber_Guardian/"
  },
  {
    title: "CareConnect",
    image: "/Projects/Care_Connect.png",
    tech: ["Java", "JDBC", "MySQL", "HTML5", "CSS3"],
    desc: "A medical appointment booking and electronic patient health record management application.",
    features: [
      "Pessimistic doctor-patient scheduling checks",
      "Role-based authorization modules (Admin / Doctor / Patient)",
      "Encrypted medical history entries for HIPAA-like standards"
    ],
    challenges: "Resolved high-concurrency booking race conditions by executing transaction lockouts (SELECT ... FOR UPDATE) inside relational queries.",
    impact: "Achieved 99.9% booking reliability with zero schedule double-bookings during concurrent traffic simulations.",
    github: "https://github.com/harshad912004/Care-Connect",
    live: "https://harshad912004.github.io/Care-Connect/src/main/webapp/index.html"
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<"All" | "MERN" | "Java" | "Python">("All");
  const [activeTabs, setActiveTabs] = useState<Record<number, "overview" | "system">>({
    0: "overview",
    1: "overview",
    2: "overview"
  });

  const toggleTab = (index: number, tab: "overview" | "system") => {
    setActiveTabs(prev => ({ ...prev, [index]: tab }));
  };

  const filteredProjects: Project[] = projectsData.filter(p => {
    if (filter === "All") return true;
    if (filter === "MERN") return p.tech.includes("Node.js") && p.tech.includes("React.js");
    if (filter === "Java") return p.tech.some(t => t.includes("Java") && !t.includes("JavaScript"));
    if (filter === "Python") return p.tech.some(t => t.includes("Python"));
    return true;
  });

  return (
    <section id="projects" className="py-24 px-6 md:px-10 bg-[var(--background)] border-t border-[var(--border-slate)]/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-[var(--foreground)] mb-4">
            Featured Projects by Harshad Dhongade
          </h2>
          <div className="w-20 h-1.5 bg-[var(--accent-coral)] mx-auto rounded-full mb-6"></div>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <button onClick={() => setFilter("All")}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${filter === "All" ? "bg-[var(--accent-coral)] text-[var(--foreground)] shadow-md" : "bg-[var(--bg-card)] text-[var(--foreground)]/70 hover:text-[var(--foreground)] border border-[var(--border-slate)]/50"}`}
            >All Projects</button>
            <button onClick={() => setFilter("MERN")}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${filter === "MERN" ? "bg-[var(--accent-coral)] text-[var(--foreground)] shadow-md" : "bg-[var(--bg-card)] text-[var(--foreground)]/70 hover:text-[var(--foreground)] border border-[var(--border-slate)]/50"}`}
            >MERN Projects</button>
            <button onClick={() => setFilter("Java")}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${filter === "Java" ? "bg-[var(--accent-coral)] text-[var(--foreground)] shadow-md" : "bg-[var(--bg-card)] text-[var(--foreground)]/70 hover:text-[var(--foreground)] border border-[var(--border-slate)]/50"}`}
            >Java Projects</button>
            <button onClick={() => setFilter("Python")}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${filter === "Python" ? "bg-[var(--accent-coral)] text-[var(--foreground)] shadow-md" : "bg-[var(--bg-card)] text-[var(--foreground)]/70 hover:text-[var(--foreground)] border border-[var(--border-slate)]/50"}`}
            >Python Projects</button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const currentTab = activeTabs[index] || "overview";

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card hover-glow rounded-3xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col h-[580px] group relative"
              >
                {/* Project Image Header */}
                <div className="h-44 overflow-hidden relative bg-[var(--bg-card)]">
                  <Image
                    src={project.image}
                    alt={`${project.title} - Full Stack Software Engineering Project by Harshad Dhongade`}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 33vw, 400px"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,10,0,0.18)] to-transparent opacity-60"></div>
                </div>

                {/* Card Title & Navigation Tabs */}
                <div className="p-6 pb-2 border-b border-[var(--border-slate)]/40 bg-[var(--bg-card)]/80">
                  <h3 className="text-xl font-bold font-heading text-[var(--foreground)] mb-3 group-hover:text-[var(--accent-coral)] transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleTab(index, "overview")}
                      className={`flex-1 py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${currentTab === "overview"
                        ? "bg-[var(--accent-coral)] text-[var(--foreground)] shadow-md"
                        : "bg-[var(--background)] text-[var(--foreground)]/70 hover:text-[var(--foreground)] border border-[var(--border-slate)]/50"
                        }`}
                    >
                      <ListChecks size={14} /> Overview
                    </button>
                    <button
                      onClick={() => toggleTab(index, "system")}
                      className={`flex-1 py-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${currentTab === "system"
                        ? "bg-[var(--accent-coral)] text-[var(--foreground)] shadow-md"
                        : "bg-[var(--background)] text-[var(--foreground)]/70 hover:text-[var(--foreground)] border border-[var(--border-slate)]/50"
                        }`}
                    >
                      <Cpu size={14} /> System Design
                    </button>
                  </div>
                </div>

                {/* Tab Contents Area */}
                <div className="p-6 flex-1 flex flex-col justify-between overflow-y-auto">
                  <AnimatePresence mode="wait">
                    {currentTab === "overview" ? (
                      <motion.div
                        key="overview"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4 flex-1"
                      >
                        <p className="text-[var(--foreground)]/80 text-sm leading-relaxed">{project.desc}</p>

                        <div>
                          <span className="block text-xs font-mono text-[var(--border-slate)] uppercase tracking-widest mb-1.5">Key Features</span>
                          <ul className="space-y-1 text-sm text-[var(--foreground)]">
                            {project.features.map((feat, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-[#ff5d5d] mt-1 text-xs">•</span>
                                <span className="leading-snug">{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="system"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4 flex-1"
                      >
                        <div>
                          <span className="flex items-center gap-1 text-xs font-mono text-[var(--accent-coral)] uppercase tracking-widest mb-1">
                            <GitBranch size={12} /> Challenges Solved
                          </span>
                          <p className="text-[var(--foreground)] text-sm leading-relaxed bg-[var(--background)] border border-[var(--border-slate)]/50 p-3 rounded-xl">
                            {project.challenges}
                          </p>
                        </div>

                        <div>
                          <span className="flex items-center gap-1 text-xs font-mono text-[#ff8585] uppercase tracking-widest mb-1">
                            <Cpu size={12} /> Engineering Impact
                          </span>
                          <p className="text-[var(--foreground)] text-sm leading-relaxed bg-[var(--background)] border border-[var(--border-slate)]/50 p-3 rounded-xl">
                            {project.impact}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Technologies Badges */}
                  <div className="mt-4 pt-4 border-t border-[var(--border-slate)]/40">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 bg-[var(--background)] rounded-md text-[var(--accent-coral)] border border-[var(--border-slate)]/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center justify-between">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-bold text-[var(--foreground)]/80 hover:text-[var(--accent-coral)] transition-colors py-1 focus-visible:ring-1 focus-visible:ring-[var(--accent-coral)] rounded px-1.5"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <FaGithub size={14} /> Source Code
                      </a>

                      {project.live && project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs font-bold text-[var(--accent-coral)] hover:text-[#ff8585] transition-colors py-1 focus-visible:ring-1 focus-visible:ring-[var(--accent-coral)] rounded px-1.5"
                          aria-label={`View ${project.title} live demo`}
                        >
                          Live Demo <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
