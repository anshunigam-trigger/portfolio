"use client";
import { AuroraBackground } from "./experience/AuroraBackground";
import { Navigation } from "./sections/Navigation";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { SkillGalaxy } from "./sections/SkillGalaxy";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ResearchSection } from "./sections/ResearchSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { ProblemSolvingSection } from "./sections/ProblemSolvingSection";
import { CredentialsSection } from "./sections/CredentialsSection";
import { ContactSection } from "./sections/ContactSection";
import { FooterSection } from "./sections/FooterSection";

export function PortfolioExperience({ github }) {
  return (
    <AuroraBackground>
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <ProjectsSection />
        <SkillGalaxy />
        <ResearchSection />
        <ExperienceSection />
        <ProblemSolvingSection />
        <AboutSection />
        <CredentialsSection github={github} />
        <ContactSection />
      </main>
      <FooterSection />
    </AuroraBackground>
  );
}
