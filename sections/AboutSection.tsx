"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { CheckCircle2, MapPin, Target, Sparkles, Layers, Cpu } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-widest mb-2">
            <span>01</span>
            <span className="w-8 h-[1px] bg-sky-400/40" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main About Text & Bio Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="glass-panel p-8 rounded-2xl border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-sky-400 pointer-events-none group-hover:opacity-10 transition-opacity">
                <Cpu className="w-48 h-48" />
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-400" />
                <span>Full Stack Web Developer</span>
              </h3>

              <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-6">
                {PERSONAL_INFO.aboutText}
              </p>

              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">Location</div>
                    <div className="text-sm font-semibold text-slate-200">{PERSONAL_INFO.location}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase">Current Focus</div>
                    <div className="text-sm font-semibold text-slate-200">MERN & Next.js Development</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Highlights Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-2">
              <Layers className="w-4 h-4 text-sky-400" />
              <span>Developer Highlights</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PERSONAL_INFO.highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  className="glass-panel p-4 rounded-xl border-white/10 hover:border-sky-400/40 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 group"
                >
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-slate-200 group-hover:text-sky-300 transition-colors">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Quick Tech Badge Banner */}
            <div className="glass-panel p-5 rounded-xl border-sky-500/20 bg-sky-500/5 mt-2">
              <div className="text-xs font-mono text-sky-400 font-semibold mb-2">
                TECHNOLOGY VERSATILITY
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Proficient in modern JavaScript/TypeScript ecosystems with backend integration experience in Django, Java, and .NET.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
