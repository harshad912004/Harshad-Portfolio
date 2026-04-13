import React from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-10 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20">

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-orange-500 rounded-full mb-8"></div>

          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-6">
            <a href="mailto:harshaddhongade9124@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-orange-400 transition-colors group">
              <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all">
                <Mail size={20} />
              </div>
              <span className="text-lg font-medium">Send me an email</span>
            </a>

            <a href="https://linkedin.com/in/harshad-dhongade" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-orange-400 transition-colors group">
              <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all">
                <FaLinkedin size={20} />
              </div>
              <span className="text-lg font-medium">Connect on LinkedIn</span>
            </a>

            <a href="https://github.com/harshad912004" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-orange-400 transition-colors group">
              <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-full flex items-center justify-center group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all">
                <FaGithub size={20} />
              </div>
              <span className="text-lg font-medium">Follow on GitHub</span>
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 bg-gray-900/50 border border-gray-800 p-8 rounded-3xl backdrop-blur-sm"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white transition-colors resize-none"
                placeholder="How can we help each other?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-orange-500 text-gray-900 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-orange-400 transition-colors"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-black py-8 text-center text-gray-500">
      <p>&copy; {new Date().getFullYear()} Harshad Dhongade. All rights reserved.</p>
    </footer>
  );
};