"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Code2, Database, ShieldCheck, Cpu, Play } from "lucide-react";

const CODE_FILES = [
  {
    name: "DeveloperProfile.ts",
    language: "typescript",
    code: `const developer = {
  name: "Christopher Pokharel",
  role: "Full Stack Developer (MERN)",
  location: "Inaruwa, Sunsari, Nepal",
  stack: ["MongoDB", "Express", "React", "Next.js", "Node.js"],
  status: "Available for Opportunities",
  build: () => "High quality, modern web apps"
};`,
  },
  {
    name: "Server.js",
    language: "javascript",
    code: `import express from 'express';
import { connectMongoDB } from './config/db.js';

const app = express();
app.use(express.json());

// API Routes
app.use('/api/ridehub', rideHubRouter);
app.use('/api/localfix', localFixRouter);

connectMongoDB().then(() => {
  app.listen(5000, () => console.log('MERN Server running...'));
});`,
  },
  {
    name: "App.tsx",
    language: "typescript",
    code: `export default function Portfolio() {
  return (
    <MainLayout theme="dark">
      <HeroSection title="Full Stack Developer" />
      <ProjectGrid filter="featured" />
      <ContactForm status="ready" />
    </MainLayout>
  );
}`,
  },
];

export function HeroVisual() {
  const [activeTab, setActiveTab] = useState(0);
  const [terminalLineIndex, setTerminalLineIndex] = useState(0);

  const terminalLogs = [
    "➜  cp-portfolio git:(main) npm run dev",
    "✔  Ready in 340ms - http://localhost:3000",
    "⚡ Compiled /api/portfolio in 120ms",
    "✔  MongoDB Cluster connected successfully",
    "➜  Ready for production build & deploy",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTerminalLineIndex((prev) => (prev + 1) % terminalLogs.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [terminalLogs.length]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Decorative Outer Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-75 animate-pulse-glow" />

      {/* Main Terminal Window Card */}
      <div className="relative glass-panel rounded-2xl border border-white/10 shadow-2xl overflow-hidden bg-slate-950/90 text-slate-200">
        {/* IDE Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 text-xs font-mono text-slate-400">cp-workspace — v2.4</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            ONLINE
          </div>
        </div>

        {/* IDE File Tabs */}
        <div className="flex items-center bg-slate-900/50 border-b border-white/5 overflow-x-auto scrollbar-none">
          {CODE_FILES.map((file, idx) => (
            <button
              key={file.name}
              onClick={() => setActiveTab(idx)}
              className={`px-3.5 py-2 text-xs font-mono flex items-center gap-2 border-r border-white/5 transition-all whitespace-nowrap ${
                activeTab === idx
                  ? "bg-slate-950 text-sky-400 border-t-2 border-t-sky-400 font-medium"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/80"
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              {file.name}
            </button>
          ))}
        </div>

        {/* Code Content Area */}
        <div className="p-4 font-mono text-xs leading-relaxed min-h-[190px] overflow-x-auto">
          <pre className="text-slate-300">
            <code>
              {CODE_FILES[activeTab].code.split("\n").map((line, idx) => (
                <div key={idx} className="table-row">
                  <span className="table-cell pr-4 text-slate-600 select-none text-right">
                    {idx + 1}
                  </span>
                  <span className="table-cell">{highlightSyntax(line)}</span>
                </div>
              ))}
            </code>
          </pre>
        </div>

        {/* Live Integrated Terminal Strip */}
        <div className="bg-slate-900/90 border-t border-white/10 p-3 font-mono text-[11px]">
          <div className="flex items-center justify-between text-slate-400 mb-1.5">
            <div className="flex items-center gap-1.5 text-sky-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>TERMINAL</span>
            </div>
            <span className="text-[10px] text-slate-500">node v22.17</span>
          </div>
          <div className="text-emerald-400 flex items-center gap-2 bg-black/40 p-2 rounded border border-white/5">
            <Play className="w-3 h-3 text-emerald-400 shrink-0 animate-pulse" />
            <span className="truncate">{terminalLogs[terminalLineIndex]}</span>
          </div>
        </div>
      </div>

      {/* Floating Tech Badges around Visual */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -right-4 glass-panel px-3 py-1.5 rounded-xl text-xs font-mono flex items-center gap-2 border-sky-500/30 shadow-lg text-sky-300 bg-slate-900/90"
      >
        <Cpu className="w-3.5 h-3.5 text-sky-400" />
        MERN Stack
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-4 -left-4 glass-panel px-3 py-1.5 rounded-xl text-xs font-mono flex items-center gap-2 border-emerald-500/30 shadow-lg text-emerald-300 bg-slate-900/90"
      >
        <Database className="w-3.5 h-3.5 text-emerald-400" />
        MongoDB & Prisma
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-1/2 -right-6 glass-panel px-2.5 py-1 rounded-lg text-[11px] font-mono text-indigo-300 border-indigo-500/30 bg-slate-900/90 shadow-md hidden sm:flex items-center gap-1.5"
      >
        <ShieldCheck className="w-3 h-3 text-indigo-400" />
        JWT & API Security
      </motion.div>
    </div>
  );
}

// Simple syntax highlighting helper for code view
function highlightSyntax(line: string) {
  if (line.includes("const ") || line.includes("import ") || line.includes("export ")) {
    return <span className="text-purple-400">{line}</span>;
  }
  if (line.includes("return") || line.includes("default") || line.includes("function")) {
    return <span className="text-sky-400">{line}</span>;
  }
  if (line.includes("http") || line.includes('"') || line.includes("'")) {
    return <span className="text-emerald-300">{line}</span>;
  }
  if (line.includes("//")) {
    return <span className="text-slate-500 italic">{line}</span>;
  }
  return line;
}
