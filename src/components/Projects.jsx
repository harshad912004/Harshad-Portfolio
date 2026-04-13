import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projectsData = [
  {
    title: "CyberGuardian",
    category: "backend",
    image: "/Cyber_Guardian.png",
    tech: ["Java (JSP/Servlet)", "JDBC", "MySQL"],
    desc: "A cyber-awareness e-learning full-stack platform featuring secure login, interactive quizzes, and a comprehensive admin panel.",
    github: "https://github.com/harshad912004/Cyber_Guardian",
    live: "https://harshad912004.github.io/Cyber_Guardian/"
  },
  {
    title: "Subscription Retention Analysis",
    category: "analytics",
    image: "/subscription_retention_analysis_dashboard.png",
    tech: ["Python", "Scikit-learn", "Pandas", "SQL"],
    desc: "End-to-end Machine Learning project to predict user churn. Visualized retention metrics and derived business insights to reduce churn rate.",
    github: "https://github.com/harshad912004/Subscription_Retention_Analysis",
    live: "https://harshad912004.github.io/Subscription_Retention_Analysis/"
  },
  {
    title: "CampusEats",
    category: "Python",
    image: "/CampusEats.png",
    tech: ["Python", "Flask", "MySQL", "HTML/CSS"],
    desc: "An online canteen ordering system built with Python Flask. Includes real-time order tracking, analytics, and role-based access control.",
    github: "#",
    live: "#"
  },
  {
    title: "Healthcare Dashboard",
    category: "analytics",
    image: "/Healthcare_Dashboard.png",
    tech: ["Python", "Power BI", "Excel"],
    desc: "Analyzed global healthcare dataset using Python. Cleaned massive datasets and built an interactive dashboard to visualize treatment access.",
    github: "https://github.com/harshad912004/Mental_Health_Analysis-Healthcare",
    live: "https://harshad912004.github.io/Mental_Health_Analysis-Healthcare/"
  },
  {
    title: "CareConnect",
    category: "backend",
    image: "/Care_Connect.png",
    tech: ["Java", "JDBC", "MySQL"],
    desc: "A healthcare appointment and records system handling role-based access for doctors and patients securely.",
    github: "https://github.com/harshad912004/Care-Connect",
    live: "https://harshad912004.github.io/Care-Connect/src/main/webapp/index.html"
  },
  {
    title: "Finance & Mental Health",
    category: "analytics",
    image: "/Finance_Dashboard.png",
    tech: ["Power BI", "Pandas", "NumPy"],
    desc: "Data analytics project discovering correlations between financial stress indicators and mental health via dynamic dashboards.",
    github: "https://github.com/harshad912004/Mental_Health_Analysis-Finance",
    live: "https://harshad912004.github.io/Mental_Health_Analysis-Finance/"
  }
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "analytics", label: "Data Analytics & ML" },
  { id: "backend", label: "Java Backend" },
  { id: "Python", label: "Python/MERN Focus" }
];

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projectsData.filter(
    proj => filter === "all" || proj.category === filter
  );

  return (
    <section id="projects" className="py-20 px-6 md:px-10 bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Featured Work</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full mb-8"></div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${filter === cat.id
                  ? "bg-orange-500 text-gray-900"
                  : "bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-orange-500/50"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800/40 border border-gray-700/50 rounded-2xl overflow-hidden group hover:border-orange-500/30 transition-colors flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-3">{project.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-medium px-2 py-1 bg-gray-900 rounded-md text-orange-300 border border-gray-700">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-gray-700/50">
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center text-sm font-semibold text-white hover:text-orange-400 transition-colors"
                      >
                        <ExternalLink size={16} className="mr-1" /> Live Demo
                      </a>
                    )}
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center text-sm font-semibold text-gray-400 hover:text-white transition-colors ml-auto"
                      >
                        <FaGithub size={16} className="mr-1" /> Source
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
