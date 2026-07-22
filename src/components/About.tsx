"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Database, Code2, ShieldAlert, Rocket, ServerCog, Coffee, FlaskConical } from "lucide-react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-10 bg-[#0d1b2a] border-t border-[#415a77]/40"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-[#e0e1dd] mb-4">
            About Harshad Dhongade
          </h2>
          <div className="w-20 h-1.5 bg-[#ff5d5d] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden text-[#e0e1dd]/85 space-y-6"
          >
            {/* Subtle glow */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#ff5d5d]/10 rounded-full blur-3xl pointer-events-none"></div>

            <p className="text-lg leading-relaxed">
              I am <strong>Harshad Dhongade</strong>, a dedicated <strong>Master of Computer Applications (MCA)</strong> student with a passionate drive for engineering high-performance, secure, and scalable software applications. My coding journey revolves around fundamental aspects of computer science, clean architecture, and modern full-stack web development.
            </p>

            <p className="text-lg leading-relaxed">
              With hands-on experience in full-stack environments, I specialize in engineering robust backend services in Java and Node.js, designing optimized database schemas (MySQL), and building responsive, dynamic user interfaces in React and Next.js.
            </p>

            <p className="text-lg leading-relaxed">
              My engineering philosophy prioritizes <strong>scalability, code modularity, and efficient problem-solving</strong>. Whether structuring RESTful API middleware or resolving complex database concurrency transactions, I aim for software excellence and maintainable architecture.
            </p>

            <div className="mt-8 pt-8 border-t border-[#415a77]/50 flex flex-wrap items-center gap-4 text-[#ff5d5d] text-sm font-semibold tracking-wider uppercase">
              <div className="flex items-center gap-2">
                <Rocket className="h-4 w-4" /><span>Full Stack Developer</span>
              </div>

              <span className="text-[#415a77]">•</span>

              <div className="flex items-center gap-2">
                <ServerCog className="h-4 w-4" /><span>Backend Engineer</span>
              </div>

              <span className="text-[#415a77]">•</span>

              <div className="flex items-center gap-2">
                <Coffee className="h-4 w-4" /><span>Java & Web Enthusiast</span>
              </div>

              <span className="text-[#415a77]">•</span>

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
            <h3 className="text-2xl font-bold font-heading text-[#e0e1dd] mb-3 pl-1">
              Harshad's Engineering Core
            </h3>

            <div className="flex items-start gap-4 p-5 glass rounded-2xl hover-glow">
              <div className="p-3 rounded-xl bg-[#ff5d5d]/10 text-[#ff5d5d] border border-[#ff5d5d]/30">
                <Server size={22} />
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading text-[#e0e1dd] mb-1">Robust Backend Architectures</h4>
                <p className="text-sm text-[#e0e1dd]/70">Designing secure API architecture using Java Servlets, JDBC, Node.js, and Express, focusing on session management and token authentications.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 glass rounded-2xl hover-glow">
              <div className="p-3 rounded-xl bg-[#ff5d5d]/10 text-[#ff5d5d] border border-[#ff5d5d]/30">
                <Database size={22} />
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading text-[#e0e1dd] mb-1">Database Optimization</h4>
                <p className="text-sm text-[#e0e1dd]/70">Normalizing relational schemas, indexes creation and transaction isolation locking to mitigate problems associated with concurrency control.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 glass rounded-2xl hover-glow">
              <div className="p-3 rounded-xl bg-[#ff5d5d]/10 text-[#ff5d5d] border border-[#ff5d5d]/30">
                <Code2 size={22} />
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading text-[#e0e1dd] mb-1">Scalable UI Components</h4>
                <p className="text-sm text-[#e0e1dd]/70">Developing responsive React and Next.js interfaces with optimal render cycles and clean modular state management strategies.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 glass rounded-2xl hover-glow">
              <div className="p-3 rounded-xl bg-[#ff5d5d]/10 text-[#ff5d5d] border border-[#ff5d5d]/30">
                <ShieldAlert size={22} />
              </div>
              <div>
                <h4 className="text-lg font-bold font-heading text-[#e0e1dd] mb-1">Testing & Quality Assurance</h4>
                <p className="text-sm text-[#e0e1dd]/70">Testing applications using unit testing and integration testing methodologies, ensuring REST APIs are working correctly.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
