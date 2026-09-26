"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Github, ExternalLink, Code2, GitBranch, Star } from "lucide-react";

export function GithubSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border-sky-500/30 bg-gradient-to-r from-sky-950/40 via-slate-900/90 to-indigo-950/40 relative overflow-hidden shadow-2xl">
          {/* Background Decorative Graphic */}
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none text-sky-400">
            <Github className="w-80 h-80" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono text-xs mb-4">
              <Code2 className="w-3.5 h-3.5" />
              <span>DEVELOPER PORTFOLIO & CODE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight mb-4">
              Let's Build Something
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              {PERSONAL_INFO.ctaText}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all duration-300 shadow-lg shadow-sky-500/20 flex items-center gap-2 group"
              >
                <Github className="w-4 h-4" />
                <span>Visit GitHub</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-400 bg-white/5 px-4 py-3 rounded-xl border border-white/5">
                <span className="flex items-center gap-1.5">
                  <GitBranch className="w-3.5 h-3.5 text-sky-400" />
                  <span>christopher7777777</span>
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
