"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { 
  Atom, 
  Zap, 
  Code, 
  Palette, 
  FileCode, 
  Server, 
  Cpu, 
  Flame, 
  Layers, 
  Database, 
  Workflow, 
  Terminal, 
  Coffee, 
  Link, 
  Sparkles,
  Filter
} from "lucide-react";

interface SkillsSectionProps {
  selectedTechFilter?: string | null;
  onSelectTechFilter?: (tech: string | null) => void;
}

export function SkillsSection({ selectedTechFilter, onSelectTechFilter }: SkillsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const getIcon = (iconName: string) => {
    const iconProps = { className: "w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform duration-300" };
    switch (iconName) {
      case "Atom": return <Atom {...iconProps} />;
      case "Zap": return <Zap {...iconProps} />;
      case "Code": return <Code {...iconProps} />;
      case "Palette": return <Palette {...iconProps} />;
      case "FileCode": return <FileCode {...iconProps} />;
      case "Server": return <Server {...iconProps} />;
      case "Cpu": return <Cpu {...iconProps} />;
      case "Flame": return <Flame {...iconProps} />;
      case "Layers": return <Layers {...iconProps} />;
      case "Database": return <Database {...iconProps} />;
      case "Workflow": return <Workflow {...iconProps} />;
      case "Terminal": return <Terminal {...iconProps} />;
      case "Coffee": return <Coffee {...iconProps} />;
      case "Link": return <Link {...iconProps} />;
      default: return <Code {...iconProps} />;
    }
  };

  const categories = ["All", ...SKILL_CATEGORIES.map((cat) => cat.name)];

  const handleTechClick = (techName: string) => {
    if (onSelectTechFilter) {
      const nextValue = selectedTechFilter === techName ? null : techName;
      onSelectTechFilter(nextValue);
      // Smooth scroll to projects if selecting a filter
      if (nextValue) {
        const el = document.getElementById("projects");
        if (el) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          window.scrollTo({
            top: elementRect - bodyRect - offset,
            behavior: "smooth",
          });
        }
      }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-widest mb-2">
              <span>02</span>
              <span className="w-8 h-[1px] bg-sky-400/40" />
              <span>TECHNICAL PROFICIENCY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Technical Skills
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              Click any skill to filter and highlight matching projects across my portfolio.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 glass-panel p-1.5 rounded-xl border-white/10 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeCategory === cat
                    ? "bg-sky-500 text-slate-950 font-semibold shadow-md"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Filter Alert Banner */}
        {selectedTechFilter && (
          <div className="mb-8 p-3 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-between text-xs font-mono text-sky-300">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-sky-400 animate-pulse" />
              <span>Filtering projects by skill: <strong>{selectedTechFilter}</strong></span>
            </div>
            <button
              onClick={() => onSelectTechFilter && onSelectTechFilter(null)}
              className="px-2.5 py-1 rounded bg-sky-500/20 hover:bg-sky-500/30 text-sky-200 transition-colors"
            >
              Clear Filter
            </button>
          </div>
        )}

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.filter(
            (cat) => activeCategory === "All" || cat.name === activeCategory
          ).map((catGroup) => (
            <div key={catGroup.name} className="flex flex-col gap-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider px-1 flex items-center justify-between">
                <span>{catGroup.name}</span>
                <span className="text-[10px] text-slate-500">{catGroup.skills.length} Skills</span>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {catGroup.skills.map((skill) => {
                  const isSelected = selectedTechFilter === skill.name;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => handleTechClick(skill.name)}
                      className={`glass-panel p-4 rounded-xl cursor-pointer border transition-all duration-300 flex items-center justify-between group ${
                        isSelected
                          ? "border-sky-400 bg-sky-500/15 shadow-lg shadow-sky-500/10"
                          : "border-white/10 hover:border-sky-400/40 hover:bg-slate-800/40"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`p-2.5 rounded-lg transition-colors ${
                          isSelected ? "bg-sky-400 text-slate-950" : "bg-sky-500/10 group-hover:bg-sky-500/20"
                        }`}>
                          {getIcon(skill.iconName)}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-100 group-hover:text-sky-300 transition-colors">
                            {skill.name}
                          </div>
                          <div className="text-[11px] font-mono text-slate-400">
                            {skill.tag}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500 group-hover:text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Filter</span>
                        <Sparkles className="w-3 h-3" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
