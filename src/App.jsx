import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { About, Skills } from "./components/About";
import Projects from "./components/Projects";
import { Experience, Education } from "./components/Experience";
import { Contact, Footer } from "./components/Contact";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
