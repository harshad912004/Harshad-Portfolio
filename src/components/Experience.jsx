import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-10 bg-gray-900 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-gray-700 ml-4 md:ml-6 pl-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-gray-800/40 border border-gray-700 hover:border-orange-500/50 rounded-2xl p-6 md:p-8 transition-colors group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] top-8 w-5 h-5 bg-orange-500 rounded-full border-4 border-gray-900 group-hover:scale-125 transition-transform"></div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <div>
                <h3 className="text-2xl font-bold text-orange-400 flex items-center">
                  <Briefcase className="mr-2" size={24} />
                  MERN Stack Developer Intern
                </h3>
                <h4 className="text-xl text-white font-medium mt-1">Aquil Tech Labs</h4>
              </div>
              <div className="flex flex-col md:items-end text-gray-400 text-sm gap-1">
                <span className="flex items-center"><Calendar size={14} className="mr-1"/> 6 Months</span>
                <span className="flex items-center"><MapPin size={14} className="mr-1"/> India</span>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Developed robust, scalable full-stack web applications leveraging the MERN stack. Engineered REST APIs handling complex data interactions and optimized frontend-backend synchronization for superior performance.
            </p>
            
            <div className="flex flex-wrap gap-2">
              {["MongoDB", "Express.js", "React.js", "Node.js", "MySQL", "REST APIs"].map(tech => (
                <span key={tech} className="px-3 py-1 bg-gray-900/80 border border-gray-700 rounded-md text-sm text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Education = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      school: "MET Institute of Engineering (SPPU)",
      year: "2024 - 2026",
      details: "Focus: Data Science, Software Development, Backend Engineering"
    },
    {
      degree: "Bachelor of Science (Computer Science)",
      school: "Bytco College Nashik (SPPU)",
      year: "2021 - 2024",
      details: "8.72 CGPA (79.64%) | Final Grade: A+"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 md:px-10 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800/40 border border-gray-700 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center hover:border-orange-500/30 transition-colors"
            >
              <div className="p-4 bg-orange-500/10 rounded-xl text-orange-400 flex-shrink-0 border border-orange-500/20">
                <GraduationCap size={40} />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                <h4 className="text-lg text-orange-400 font-medium mb-1">{edu.school}</h4>
                <p className="text-gray-400 md:hidden mb-2">{edu.year}</p>
                <p className="text-gray-300">{edu.details}</p>
              </div>
              
              <div className="hidden md:block text-right text-gray-400 font-medium text-lg whitespace-nowrap">
                {edu.year}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
