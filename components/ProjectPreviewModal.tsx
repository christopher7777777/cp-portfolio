"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, ShieldAlert, Cpu, Sparkles } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectPreviewModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectPreviewModal({ project, onClose }: ProjectPreviewModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl glass-panel rounded-2xl border-white/10 p-6 sm:p-8 bg-slate-900/95 shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full glass-panel text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {project.isFinalYearProject && (
              <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 font-mono text-xs flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Final Year Project
              </span>
            )}
            <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono text-xs">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-3">
            {project.name}
          </h3>

          {/* Description */}
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
            {project.description}
          </p>

          {/* Features Checklist if available */}
          {project.features && project.features.length > 0 && (
            <div className="mb-6 bg-slate-950/50 p-4 rounded-xl border border-white/5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-sky-400" /> Key Features & Capabilities:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Badges */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20"
              >
                <span>View Live Project</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/5 px-4 py-2.5 rounded-lg border border-white/5">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                <span>Project details available on request.</span>
              </div>
            )}

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl glass-panel text-slate-300 hover:text-white text-xs font-mono"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
