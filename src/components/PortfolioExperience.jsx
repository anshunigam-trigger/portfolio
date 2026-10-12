"use client";
import { AuroraBackground } from "./experience/AuroraBackground";
import { Navigation } from "./sections/Navigation";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { SkillGalaxy } from "./sections/SkillGalaxy";
import { ProjectsSection } from "./sections/ProjectsSection";
import { AISection } from "./sections/AISection";
import { BackendSection } from "./sections/BackendSection";
import { ContactSection } from "./sections/ContactSection";
import { FooterSection } from "./sections/FooterSection";

export function PortfolioExperience() {
  return (
    <AuroraBackground>
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillGalaxy />
        <ProjectsSection />
        <AISection />
        <BackendSection />
        <ContactSection />
      </main>
      <FooterSection />
    </AuroraBackground>
  );
}
