"use client";

import { PERSONAL_INFO } from "@/data/portfolioData";
import { Github, Mail, Code2, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="glass-nav border-t border-white/10 pt-16 pb-12 relative overflow-hidden text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Left Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-sky-400" />
              </div>
              <span className="font-bold text-base text-slate-100 tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-slate-400 text-xs font-mono">
              Full Stack Developer (MERN) • Inaruwa, Sunsari, Nepal
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-sky-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full glass-panel text-slate-400 hover:text-white hover:border-white/30 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-full glass-panel text-slate-400 hover:text-sky-400 hover:border-sky-400/40 transition-all"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full glass-panel text-slate-400 hover:text-sky-400 hover:border-sky-400/40 transition-all ml-2"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] font-mono">
          <div>
            © 2026 Christopher Pokharel. All rights reserved.
          </div>
          <div>
            Built with Next.js, React, Tailwind CSS & Framer Motion
          </div>
        </div>
      </div>
    </footer>
  );
}
