"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Smile, Zap, Users, MessageSquare, ShieldAlert, Award } from "lucide-react";

export function StrengthsSection() {
  const getIcon = (title: string) => {
    switch (title) {
      case "Friendly": return <Smile className="w-5 h-5 text-emerald-400" />;
      case "Positive Attitude": return <Zap className="w-5 h-5 text-amber-400" />;
      case "Teamwork": return <Users className="w-5 h-5 text-sky-400" />;
      case "Communication": return <MessageSquare className="w-5 h-5 text-indigo-400" />;
      case "Problem-Solving": return <ShieldAlert className="w-5 h-5 text-purple-400" />;
      default: return <Award className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2 h-2 rounded-full bg-sky-400" />
          <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400">
            Professional Strengths & Collaboration Values
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PERSONAL_INFO.strengths.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * index, duration: 0.4 }}
              className="glass-panel p-5 rounded-xl border-white/10 hover:border-sky-400/30 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="p-2.5 rounded-lg bg-white/5 w-fit mb-3 group-hover:bg-white/10 transition-colors">
                  {getIcon(item.title)}
                </div>
                <h4 className="text-base font-bold text-slate-100 mb-1 group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
