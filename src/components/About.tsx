"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Database, Code2, ShieldAlert, Rocket, ServerCog, Coffee, FlaskConical } from "lucide-react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-10 bg-gradient-to-b from-black to-gray-950 border-t border-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden text-gray-300 space-y-6"
          >
            {/* Subtle glow */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <p className="text-lg leading-relaxed">
              I am a dedicated <strong>Master of Computer Applications (MCA)</strong> student with a great interest in building high-performance, secure, and scalable web applications. My coding journey revolves around fundamental aspects of computer science, clean code practices, and modern system architectures.
            </p>

            <p className="text-lg leading-relaxed">
              With hands-on experience in full-stack environments, I enjoy engineering robust backend services, designing efficient relational and non-relational database schemas, and developing responsive, user-friendly frontend interfaces.
            </p>

            <p className="text-lg leading-relaxed">
              My philosophy behind software engineering includes aspects of <strong>scalability, modularity, and efficient problem-solving</strong>. Whether structuring RESTful API middleware or resolving concurrency race conditions in database transactions, I prioritize engineering excellence, documentation, and maintainability.
            </p>

            <div className="mt-8 pt-8 border-t border-gray-800/80 flex flex-wrap items-center gap-4 text-orange-400 text-sm font-semibold tracking-wider uppercase">
              <div className="flex items-center gap-2">
                <Rocket className="h-4 w-4" /><span>Full Stack Developer</span>
              </div>

              <span className="text-gray-700">•</span>

              <div className="flex items-center gap-2">
                <ServerCog className="h-4 w-4" /><span>Backend Engineer</span>
              </div>

              <span className="text-gray-700">•</span>

              <div className="flex items-center gap-2">
                <Coffee className="h-4 w-4" /><span>Java & Web Enthusiast</span>
              </div>

              <span className="text-gray-700">•</span>

              <div className="flex items-center gap-2">
                <FlaskConical className="h-4 w-4" /><span>Quality Assurance Engineer</span>
              </div>
            </div>
          </motion.div>

          {/* Pillars of Engineering Excellence */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-3"
          >
            <h3 className="text-2xl font-bold text-white mb-3 pl-1">My Engineering Core</h3>

            <div className="flex items-start gap-4 p-5 glass rounded-2xl hover-glow">
              <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                <Server size={22} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Robust Backend Architectures</h4>
                <p className="text-sm text-gray-400">Designing secure API architecture using Java Servlets, JDBC, Node.js, and Express, focusing on session management and token authentications.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 glass rounded-2xl hover-glow">
              <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                <Database size={22} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Database Optimization</h4>
                <p className="text-sm text-gray-400">Normalizing relational schemas, indexes creation and transaction isolation locking to mitigate problems associated with concurrency control.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 glass rounded-2xl hover-glow">
              <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                <Code2 size={22} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Scalable UI Components</h4>
                <p className="text-sm text-gray-400">Developing responsive React and Next.js interfaces with optimal render cycles and clean modular state management strategies.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 glass rounded-2xl hover-glow">
              <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                <ShieldAlert size={22} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Testing & Quality Assurance</h4>
                <p className="text-sm text-gray-400">Testing applications using unit testing and integration testing methodologies, ensuring REST APIs are working correctly.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
