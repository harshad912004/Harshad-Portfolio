"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormState {
  status: "idle" | "loading" | "success" | "error";
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [state, setState] = useState<FormState>({
    status: "idle",
    message: ""
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setState({ status: "error", message: "Please fill out all fields." });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setState({ status: "error", message: "Please enter a valid email address." });
      return false;
    }
    return true;
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setState({ status: "loading", message: "Sending your message..." });

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setState({
        status: "success",
        message: result.simulated
          ? "Message simulation sent successfully!"
          : "Thank you! Your message has been sent successfully."
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      setState({ status: "error", message: err.message || "Failed to deliver. Please try again later." });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-10 bg-black relative overflow-hidden border-t border-gray-900">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">

        {/* Contact Info (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Let's Connect</h2>
          <div className="w-20 h-1.5 bg-orange-500 rounded-full mb-8"></div>

          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            I am currently looking for new opportunities in Software Developement, Full Stack, and Backend roles. Whether you have a project idea or just want to discuss architectures, feel free to reach out!
          </p>

          <div className="space-y-6">
            <a
              href="mailto:harshaddhongade9124@gmail.com"
              className="flex items-center gap-4 text-gray-300 hover:text-orange-400 transition-colors group focus-visible:ring-2 focus-visible:ring-orange-500 rounded-xl p-2 -ml-2"
              aria-label="Send email to harshaddhongade9124@gmail.com"
            >
              <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all">
                <Mail size={20} />
              </div>
              <div>
                <span className="text-xs text-gray-500 block font-mono uppercase tracking-wider">Email</span>
                <span className="text-base font-semibold">harshaddhongade9124@gmail.com</span>
              </div>
            </a>

            <a
              href="tel:+919209396743"
              className="flex items-center gap-4 text-gray-300 hover:text-orange-400 transition-colors group focus-visible:ring-2 focus-visible:ring-orange-500 rounded-xl p-2 -ml-2"
              aria-label="Call phone number +91 92093 96743"
            >
              <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all">
                <Phone size={20} />
              </div>
              <div>
                <span className="text-xs text-gray-500 block font-mono uppercase tracking-wider">Phone</span>
                <span className="text-base font-semibold">+91 92093 96743</span>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/harshad-dhongade"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-300 hover:text-orange-400 transition-colors group focus-visible:ring-2 focus-visible:ring-orange-500 rounded-xl p-2 -ml-2"
              aria-label="Visit LinkedIn profile"
            >
              <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all">
                <FaLinkedin size={20} />
              </div>
              <div>
                <span className="text-xs text-gray-500 block font-mono uppercase tracking-wider">LinkedIn</span>
                <span className="text-base font-semibold">linkedin.com/in/harshad-dhongade</span>
              </div>
            </a>

            <a
              href="https://github.com/harshad912004"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-gray-300 hover:text-orange-400 transition-colors group focus-visible:ring-2 focus-visible:ring-orange-500 rounded-xl p-2 -ml-2"
              aria-label="Visit GitHub profile"
            >
              <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all">
                <FaGithub size={20} />
              </div>
              <div>
                <span className="text-xs text-gray-500 block font-mono uppercase tracking-wider">GitHub</span>
                <span className="text-base font-semibold">github.com/harshad912004</span>
              </div>
            </a>

            <a
              href="/Harshad_Resume_Software_Development.pdf"
              download
              className="flex items-center gap-4 text-gray-300 hover:text-orange-400 transition-colors group focus-visible:ring-2 focus-visible:ring-orange-500 rounded-xl p-2 -ml-2"
              aria-label="Download Software Developer Resume"
            >
              <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all">
                <FaFileDownload size={20} />
              </div>
              <div>
                <span className="text-xs text-gray-500 block font-mono uppercase tracking-wider">Resume</span>
                <span className="text-base font-semibold">Download Software Developer PDF</span>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Contact Form (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 glass-card p-8 rounded-3xl shadow-xl"
        >
          <form className="space-y-6" onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-400 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-xl text-white transition-all duration-300 hover:border-gray-700"
                disabled={state.status === "loading"}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-400 mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-xl text-white transition-all duration-300 hover:border-gray-700"
                disabled={state.status === "loading"}
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-400 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-xl text-white transition-all duration-300 hover:border-gray-700"
                disabled={state.status === "loading"}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-400 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-950 border border-gray-800 rounded-xl text-white transition-all duration-300 hover:border-gray-700 resize-none"
                disabled={state.status === "loading"}
              />
            </div>

            {/* Alert message displays */}
            {state.status === "success" && (
              <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-450 rounded-xl text-sm" role="alert">
                <CheckCircle2 size={20} className="flex-shrink-0" />
                <span>{state.message}</span>
              </div>
            )}

            {state.status === "error" && (
              <div className="flex items-center gap-3 p-4 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-xl text-sm" role="alert">
                <AlertCircle size={20} className="flex-shrink-0" />
                <span>{state.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={state.status === "loading"}
              className="w-full py-4 bg-orange-500 text-gray-950 hover:bg-orange-400 disabled:bg-gray-800 disabled:text-gray-500 font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all duration-300 active:scale-95 focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer disabled:cursor-not-allowed"
            >
              {state.status === "loading" ? (
                <>
                  Sending Message <Loader2 size={18} className="animate-spin" />
                </>
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
export { Contact };
