"use client";

import { motion } from "framer-motion";
import { EDUCATION } from "@/data/portfolioData";
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-widest mb-2">
            <span>05</span>
            <span className="w-8 h-[1px] bg-sky-400/40" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Education
          </h2>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * index, duration: 0.5 }}
              className="glass-panel p-8 rounded-2xl border-white/10 hover:border-sky-400/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>{edu.periodOrDate}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-sky-300 transition-colors">
                  {edu.degree}
                </h3>

                <div className="text-base font-medium text-slate-300 mb-1 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-slate-400" />
                  <span>{edu.institution}</span>
                </div>

                <div className="text-xs font-mono text-slate-400 mb-6 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>{edu.location}</span>
                </div>
              </div>

              {edu.gpa && (
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Grade Point Average:</span>
                  <span className="px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" /> GPA {edu.gpa}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
