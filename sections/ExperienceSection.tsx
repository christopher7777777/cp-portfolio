"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/data/portfolioData";
import { Briefcase, Calendar, Building2, CheckCircle, Code } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-widest mb-2">
            <span>03</span>
            <span className="w-8 h-[1px] bg-sky-400/40" />
            <span>WORK EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Industry Experience
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-sky-500 via-indigo-500 to-transparent" />

          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-12 sm:pl-20 mb-12"
            >
              {/* Timeline Node Badge */}
              <div className="absolute left-1.5 sm:left-5 top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-sky-400 flex items-center justify-center shadow-lg shadow-sky-500/30">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              </div>

              {/* Main Experience Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/10 hover:border-sky-400/30 transition-all duration-300">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-xs mb-2">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{exp.role}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-slate-400" />
                      <span>{exp.company}</span>
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                    Key Responsibilities & Contributions:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {exp.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-500 mr-2 flex items-center gap-1">
                    <Code className="w-3 h-3" /> Tech:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
                    >
                      {tech}
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
}
