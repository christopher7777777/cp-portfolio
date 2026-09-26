"use client";

import { useState } from "react";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { StrengthsSection } from "@/sections/StrengthsSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { EducationSection } from "@/sections/EducationSection";
import { CertificatesSection } from "@/sections/CertificatesSection";
import { GithubSection } from "@/sections/GithubSection";
import { ContactSection } from "@/sections/ContactSection";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  const [selectedTechFilter, setSelectedTechFilter] = useState<string | null>(null);

  return (
    <main className="min-h-screen relative selection:bg-sky-500 selection:text-slate-950">
      <ScrollProgress />
      <Navbar />

      <HeroSection />

      <div className="space-y-4">
        <AboutSection />
        
        <SkillsSection
          selectedTechFilter={selectedTechFilter}
          onSelectTechFilter={setSelectedTechFilter}
        />

        <StrengthsSection />

        <ExperienceSection />

        <ProjectsSection
          selectedTechFilter={selectedTechFilter}
          onClearTechFilter={() => setSelectedTechFilter(null)}
        />

        <EducationSection />

        <CertificatesSection />

        <GithubSection />

        <ContactSection />
      </div>

      <Footer />
      <BackToTop />
    </main>
  );
}
