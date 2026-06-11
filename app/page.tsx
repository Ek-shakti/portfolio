"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#0F0B1F] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black to-black" />

        <motion.div
  className="relative z-10"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
          <p className="mb-4 text-blue-400 font-medium">
            Full Stack Developer
          </p>

          <h1 className="text-6xl md:text-8xl font-bold">
            E.K.
            <span className="text-blue-500">Shakti</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-400">
            Computer Science Engineering graduate specializing in
            MERN Stack Development, Machine Learning, and Data Analytics.
            Passionate about building scalable applications and intelligent
            solutions.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium hover:bg-blue-500 transition"
            >
              View Projects
            </a>

            <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-lg border border-gray-600 px-6 py-3 hover:border-white transition"
>
  View Resume
</a>
          </div>
        </motion.div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}