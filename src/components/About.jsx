import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, Layout, Brain, Terminal, Server } from "lucide-react";

const skills = [
  {
    category: "Programming & Backend",
    icon: <Terminal size={24} />,
    items: ["Java", "Python", "C", "SQL", "RESTful APIs", "JDBC", "Servlets"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    category: "Web Development",
    icon: <Layout size={24} />,
    items: ["MERN Stack", "React.js", "Node.js", "Express", "HTML5/CSS3", "Tailwind CSS"],
    color: "from-orange-500 to-yellow-400"
  },
  {
    category: "Data Analytics & ML",
    icon: <Brain size={24} />,
    items: ["Python (Pandas, NumPy)", "Power BI", "Excel", "Machine Learning", "Scikit-Learn"],
    color: "from-purple-500 to-pink-500"
  },
  {
    category: "Tools & Core Concepts",
    icon: <Code2 size={24} />,
    items: ["Git/GitHub", "VS Code", "Jupyter", "OOP", "Agile", "Problem Solving"],
    color: "from-green-500 to-emerald-400"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-10 bg-gradient-to-b from-black to-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800/40 border border-gray-700 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden text-lg text-gray-300 leading-relaxed space-y-6"
        >
          {/* Subtle bg glow */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <p>
            I’m an <strong>MCA student</strong> who thrives at the intersection of application development and data science. My goal is to build intelligent, scalable systems that solve real-world problems.
          </p>
          <p>
            My journey started with <strong>Java backend development</strong>, where I built full-stack applications and strengthened my fundamentals in databases and secure architecture. Driven by curiosity, I transitioned into <strong>Data Analytics</strong>, mastering Python, Power BI, and Excel to extract actionable insights from complex datasets.
          </p>
          <p>
            Today, I combine my engineering background with analytical thinking. Whether I'm designing a <strong>MERN stack</strong> application or developing predictive <strong>Machine Learning</strong> models, my focus is bridging the gap between raw data and scalable software solutions.
          </p>

          <div className="mt-8 pt-8 border-t border-gray-700/50 flex flex-wrap gap-4 text-orange-400 text-sm font-semibold uppercase tracking-wider">
            <span>✨ Java Developer</span>
            <span className="text-gray-600">•</span>
            <span>📊 Data Analyst</span>
            <span className="text-gray-600">•</span>
            <span>🌐 Full Stack Engineer</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-10 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Core Competencies</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-800/50 border border-gray-700/50 hover:border-gray-600 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} text-white shadow-lg`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{skill.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map(item => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-gray-900/50 border border-gray-700 rounded-md text-sm text-gray-300 group-hover:border-gray-500 transition-colors"
                  >
                    {item}
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
