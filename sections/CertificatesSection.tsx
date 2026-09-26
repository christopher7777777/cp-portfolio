"use client";

import { motion } from "framer-motion";
import { CERTIFICATES } from "@/data/portfolioData";
import { Cloud, Cpu, Database, Brain, Award, ShieldCheck } from "lucide-react";

export function CertificatesSection() {
  const getCertificateIcon = (title: string) => {
    if (title.includes("Cloud")) return <Cloud className="w-6 h-6 text-amber-400" />;
    if (title.includes("Natural Language")) return <Brain className="w-6 h-6 text-amber-400" />;
    if (title.includes("Data Engineering")) return <Database className="w-6 h-6 text-amber-400" />;
    return <Cpu className="w-6 h-6 text-amber-400" />;
  };

  return (
    <section id="certificates" className="py-24 relative overflow-hidden bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-widest mb-2">
            <span>06</span>
            <span className="w-8 h-[1px] bg-sky-400/40" />
            <span>CLOUD & TECHNICAL ACCREDITATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Certifications
          </h2>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATES.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              className="glass-panel p-6 rounded-2xl border-white/10 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                    {getCertificateIcon(cert.title)}
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-300 font-mono text-[10px]">
                    AWS ACADEMY
                  </span>
                </div>

                <div className="text-[11px] font-mono text-slate-400 mb-1">
                  {cert.category}
                </div>

                <h3 className="text-base font-bold text-slate-100 leading-snug mb-4 group-hover:text-amber-300 transition-colors">
                  {cert.title}
                </h3>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Issuer: {cert.issuer}</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
