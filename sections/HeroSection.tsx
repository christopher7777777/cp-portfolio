"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Mail, MapPin, Sparkles, Code } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { HeroVisual } from "@/components/HeroVisual";

export function HeroSection() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-sky-500/30 text-sky-400 text-xs font-mono mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              <span>{PERSONAL_INFO.smallLabel}</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 mb-4 leading-[1.1]"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                Christopher Pokharel
              </span>
              .
            </motion.h1>

            {/* Sub Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl sm:text-2xl font-semibold text-slate-300 mb-5 tracking-tight"
            >
              {PERSONAL_INFO.subHeading}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-base sm:text-lg text-slate-400 max-w-2xl mb-8 leading-relaxed font-normal"
            >
              {PERSONAL_INFO.bioHero}
            </motion.p>

            {/* Location & Quick Meta */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-8"
            >
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md glass-panel">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md glass-panel">
                <Code className="w-3.5 h-3.5 text-sky-400" />
                <span>MERN Stack Specialist</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, "projects")}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all duration-300 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 flex items-center justify-center gap-2 group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl glass-panel text-slate-200 hover:text-sky-400 hover:border-sky-400/40 font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Contact Me</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl glass-panel text-slate-400 hover:text-slate-100 hover:border-white/20 font-mono text-xs transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column Developer Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <HeroVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
