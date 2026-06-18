"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck, FileSpreadsheet } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  skillsValidated: string[];
  fileUrl: string;
  isPdf: boolean;
}

const certificationsData: Certificate[] = [
  {
    title: "Research Paper Publication: CampusEats Canteen System",
    issuer: "IRJIET Journal (International Research Journal of Innovative Engineering & Technology)",
    skillsValidated: ["System Architecture", "Application Development", "Software Design", "Documentation"],
    fileUrl: "/IRJIET_Paper_Publication.pdf",
    isPdf: true
  },
  {
    title: "IIT Spoken Tutorial: Python Programming",
    issuer: "IIT Bombay Spoken Tutorial Project",
    skillsValidated: ["Python syntax", "Data structures", "Procedural & OOP scripting"],
    fileUrl: "/Certificates/Certificate-IIT_SPOKEN-PYTHON.jpg",
    isPdf: false
  },
  {
    title: "Certificate of Achievement: MET Code Trace",
    issuer: "MET Institute of Engineering (SPPU)",
    skillsValidated: ["Problem Solving", "Code Debugging & Execution tracing", "Logic construction"],
    fileUrl: "/Certificates/Certificate-MET_Code_Trace.jpg",
    isPdf: false
  },
  {
    title: "Introduction to Java Development",
    issuer: "Simplilearn",
    skillsValidated: ["Java Programming", "OOP Foundations", "Classes & Inheritances"],
    fileUrl: "/Certificates/Certificate-SimpliLearn-Introduction_To_Java.jpg",
    isPdf: false
  }
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 px-6 md:px-10 bg-black border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Certifications & Publications</h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/40 border border-gray-800 hover:border-orange-500/30 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:-translate-y-0.5"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-5">
                  <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                    <Award size={22} />
                  </div>
                  <a
                    href={cert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-semibold text-gray-400 hover:text-orange-400 transition-colors py-1 focus-visible:ring-1 focus-visible:ring-orange-500 rounded px-1.5"
                    aria-label={`View verification document for ${cert.title}`}
                  >
                    View Document <ExternalLink size={15} />
                  </a>
                </div>

                <div>
                  <h2 className="text-lg font-bold text-white leading-snug hover:text-orange-400 transition-colors">
                    {cert.title}
                  </h2>
                  <p className="text-m text-gray-400 font-medium mt-1">{cert.issuer}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800/60">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsValidated.map(skill => (
                    <span
                      key={skill}
                      className="flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 bg-gray-950 text-gray-300 border border-gray-850 rounded"
                    >
                      <ShieldCheck size={15} className="text-orange-500" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
