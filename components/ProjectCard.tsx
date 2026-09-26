"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles, Check, Info, Bike, Wrench, ShoppingBag, Music, ShieldAlert } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectCardProps {
  project: Project;
  selectedTechFilter?: string | null;
  onOpenPreview: (project: Project) => void;
}

export function ProjectCard({ project, selectedTechFilter, onOpenPreview }: ProjectCardProps) {
  const isMatch = selectedTechFilter
    ? project.technologies.some((t) => t.toLowerCase() === selectedTechFilter.toLowerCase())
    : false;

  // Custom preview graphics generator based on project ID
  const renderAbstractPreview = () => {
    switch (project.id) {
      case "ridehub":
        return (
          <div className="w-full h-48 bg-gradient-to-br from-blue-950/80 via-slate-900 to-cyan-950/80 p-4 relative overflow-hidden flex flex-col justify-between border-b border-white/10 group-hover:scale-[1.02] transition-transform duration-500">
            <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400">
              <span className="flex items-center gap-1.5 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/30">
                <Bike className="w-3.5 h-3.5" /> RIDEHUB PORTAL
              </span>
              <span className="text-slate-400">MERN Stack</span>
            </div>
            <div className="space-y-2 my-auto">
              <div className="text-xs font-semibold text-slate-200">Motorcycle Rental & Sales Platform</div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 flex-1 bg-cyan-500/20 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-cyan-400 rounded-full" />
                </div>
                <span className="text-[10px] font-mono text-cyan-300">Auth + Payment API</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-white/5 pt-2">
              <span>Rental / Buying / Selling</span>
              <span className="text-emerald-400 font-bold">JWT Verified</span>
            </div>
          </div>
        );

      case "localfix":
        return (
          <div className="w-full h-48 bg-gradient-to-br from-emerald-950/80 via-slate-900 to-teal-950/80 p-4 relative overflow-hidden flex flex-col justify-between border-b border-white/10 group-hover:scale-[1.02] transition-transform duration-500">
            <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400">
              <span className="flex items-center gap-1.5 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                <Wrench className="w-3.5 h-3.5" /> LOCALFIX MARKETPLACE
              </span>
              <span className="text-slate-400">Service Search</span>
            </div>
            <div className="space-y-1.5 my-auto">
              <div className="text-xs font-semibold text-slate-200">Verified Local Technicians</div>
              <div className="grid grid-cols-3 gap-1.5 text-[10px] font-mono text-center">
                <div className="p-1 rounded bg-white/5 border border-white/5 text-slate-300">Booking</div>
                <div className="p-1 rounded bg-white/5 border border-white/5 text-slate-300">Filter</div>
                <div className="p-1 rounded bg-white/5 border border-white/5 text-slate-300">Reviews</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-white/5 pt-2">
              <span>Status Tracking</span>
              <span className="text-teal-300">City Filter Active</span>
            </div>
          </div>
        );

      case "sneakerstore":
        return (
          <div className="w-full h-48 bg-gradient-to-br from-purple-950/80 via-slate-900 to-indigo-950/80 p-4 relative overflow-hidden flex flex-col justify-between border-b border-white/10 group-hover:scale-[1.02] transition-transform duration-500">
            <div className="flex items-center justify-between text-[11px] font-mono text-purple-400">
              <span className="flex items-center gap-1.5 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/30">
                <ShoppingBag className="w-3.5 h-3.5" /> SNEAKERSTORE E-COM
              </span>
              <span className="text-slate-400">Next.js + Express</span>
            </div>
            <div className="space-y-2 my-auto">
              <div className="text-xs font-semibold text-slate-200">Sneaker Catalogue & Shopping Flow</div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px] font-mono">Cart State</span>
                <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[10px] font-mono">Backend API</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-white/5 pt-2">
              <span>Product Catalogue</span>
              <span className="text-indigo-400">MongoDB Storage</span>
            </div>
          </div>
        );

      case "musichub":
        return (
          <div className="w-full h-48 bg-gradient-to-br from-amber-950/80 via-slate-900 to-orange-950/80 p-4 relative overflow-hidden flex flex-col justify-between border-b border-white/10 group-hover:scale-[1.02] transition-transform duration-500">
            <div className="flex items-center justify-between text-[11px] font-mono text-amber-400">
              <span className="flex items-center gap-1.5 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                <Music className="w-3.5 h-3.5" /> MUSICHUB APP
              </span>
              <span className="text-slate-400">Interactive UI</span>
            </div>
            <div className="space-y-2 my-auto">
              <div className="text-xs font-semibold text-slate-200">Interactive Music Explorer</div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-6 bg-amber-400 rounded animate-pulse" />
                <div className="w-2 h-8 bg-amber-500 rounded animate-pulse delay-75" />
                <div className="w-2 h-4 bg-orange-400 rounded animate-pulse delay-150" />
                <div className="w-2 h-10 bg-amber-300 rounded animate-pulse delay-100" />
                <div className="w-2 h-5 bg-orange-500 rounded animate-pulse" />
                <span className="text-[10px] font-mono text-amber-300 ml-2">Web Audio Features</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-white/5 pt-2">
              <span>React & JS</span>
              <span className="text-amber-300">Clean Interface</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-36 bg-slate-900/60 p-4 relative overflow-hidden flex flex-col justify-between border-b border-white/10">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>{project.category}</span>
              <span>{project.technologies.join(" • ")}</span>
            </div>
            <div className="text-sm font-semibold text-slate-200">{project.name}</div>
          </div>
        );
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className={`glass-panel rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-300 group ${
        isMatch
          ? "border-sky-400 ring-2 ring-sky-400/30 shadow-xl shadow-sky-500/10"
          : "border-white/10 hover:border-sky-400/40 hover:shadow-xl"
      }`}
    >
      <div>
        {/* Abstract Preview Banner */}
        {renderAbstractPreview()}

        {/* Card Header & Content */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-mono text-sky-400 px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/20">
              {project.category}
            </span>

            {project.isFinalYearProject && (
              <span className="text-[11px] font-mono text-amber-300 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Final Year Project
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-sky-300 transition-colors">
            {project.name}
          </h3>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((tech) => {
              const isTechSelected = selectedTechFilter?.toLowerCase() === tech.toLowerCase();
              return (
                <span
                  key={tech}
                  className={`text-[11px] font-mono px-2.5 py-0.5 rounded-md border transition-colors ${
                    isTechSelected
                      ? "bg-sky-400 text-slate-950 border-sky-300 font-bold"
                      : "bg-white/5 text-slate-300 border-white/5"
                  }`}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Card Footer Buttons */}
      <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-white/5 mt-auto">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md shadow-sky-500/20"
          >
            <span>View Live Project</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <div className="flex-1 flex items-center gap-1.5 text-[11px] font-mono text-slate-400 bg-white/5 px-3 py-2 rounded-lg border border-white/5">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate">Project details available on request.</span>
          </div>
        )}

        <button
          onClick={() => onOpenPreview(project)}
          className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-sky-400 hover:border-sky-400/30 transition-colors"
          title="View Project Details & Features"
          aria-label="View Project Details"
        >
          <Info className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}
