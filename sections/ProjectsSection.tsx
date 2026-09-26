"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, Project } from "@/data/portfolioData";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectPreviewModal } from "@/components/ProjectPreviewModal";
import { Sparkles, Layers, Filter } from "lucide-react";

interface ProjectsSectionProps {
  selectedTechFilter?: string | null;
  onClearTechFilter?: () => void;
}

export function ProjectsSection({ selectedTechFilter, onClearTechFilter }: ProjectsSectionProps) {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("All");
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const categoryFilters = [
    "All",
    "Full Stack",
    "Frontend",
    "Backend",
    "E-commerce",
    "Final Year Project",
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    // 1. Tech filter check
    if (selectedTechFilter) {
      const matchTech = project.technologies.some(
        (t) => t.toLowerCase() === selectedTechFilter.toLowerCase()
      );
      if (!matchTech) return false;
    }

    // 2. Category filter check
    if (activeCategoryFilter === "All") return true;
    if (activeCategoryFilter === "Final Year Project") return !!project.isFinalYearProject;
    if (activeCategoryFilter === "E-commerce") return project.category.includes("E-commerce");
    if (activeCategoryFilter === "Full Stack")
      return project.category.includes("MERN") || project.category.includes("Full Stack") || project.category.includes("Marketplace");
    if (activeCategoryFilter === "Frontend")
      return project.technologies.includes("React") || project.technologies.includes("HTML");
    if (activeCategoryFilter === "Backend")
      return project.technologies.includes("Node.js") || project.technologies.includes("Express.js") || project.technologies.includes("Django") || project.technologies.includes(".NET");

    return true;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const secondaryProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-widest mb-2">
              <span>04</span>
              <span className="w-8 h-[1px] bg-sky-400/40" />
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Selected Projects
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Real-world web applications built with modern stacks, clean code architectures, and live deployments.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 glass-panel p-1.5 rounded-xl border-white/10 self-start md:self-auto">
            {categoryFilters.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategoryFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeCategoryFilter === cat
                    ? "bg-sky-500 text-slate-950 font-semibold shadow-md"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Tech Banner */}
        {selectedTechFilter && (
          <div className="mb-8 p-3 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-between text-xs font-mono text-sky-300">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-sky-400" />
              <span>Showing projects matching technology: <strong>{selectedTechFilter}</strong></span>
            </div>
            <button
              onClick={onClearTechFilter}
              className="px-2.5 py-1 rounded bg-sky-500/20 hover:bg-sky-500/30 text-sky-200 transition-colors"
            >
              Show All Projects
            </button>
          </div>
        )}

        {/* Featured Projects Grid */}
        {featuredProjects.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>Featured Web Applications ({featuredProjects.length})</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {featuredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    selectedTechFilter={selectedTechFilter}
                    onOpenPreview={setModalProject}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Secondary Projects Section */}
        {secondaryProjects.length > 0 && (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-6 pt-6 border-t border-white/10">
              <Layers className="w-4 h-4 text-slate-400" />
              <span>Additional Projects & Implementations ({secondaryProjects.length})</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {secondaryProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    selectedTechFilter={selectedTechFilter}
                    onOpenPreview={setModalProject}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Empty state if filtering yields no results */}
        {filteredProjects.length === 0 && (
          <div className="glass-panel p-12 text-center rounded-2xl border-white/10 my-8">
            <p className="text-slate-400 text-sm mb-4">No projects found matching the selected filters.</p>
            <button
              onClick={() => {
                setActiveCategoryFilter("All");
                if (onClearTechFilter) onClearTechFilter();
              }}
              className="px-5 py-2.5 rounded-xl bg-sky-500 text-slate-950 font-semibold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Modal View */}
      <ProjectPreviewModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
}
