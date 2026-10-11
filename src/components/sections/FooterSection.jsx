"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ArrowUp, Mail, MoveUpRight } from "lucide-react";
import { siteProfile } from "../../constants/cleanSite";
import { Magnetic } from "../animations/Magnetic";

export function FooterSection() {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="site-footer">
      <div className="footer-wave" aria-hidden="true" />
      <div className="container footer-inner">
        <a className="footer-brand" href="#hero">AN<span>{"\\u2022"}</span>LABS</a>
        <p>AI/ML systems, FastAPI backends, and research projects with measurable results.</p>
        <div className="footer-links">
          <a href={siteProfile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub size={17} /></a>
          <a href={siteProfile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn size={17} /></a>
          <a href={`mailto:${siteProfile.email}`} aria-label="Email"><Mail size={17} /></a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open resume"><MoveUpRight size={17} /></a>
        </div>
        <Magnetic><button type="button" className="footer-top" onClick={toTop}>Back to top <ArrowUp size={15} /></button></Magnetic>
        <small>{"\\u00a9"} 2026 Anshu Nigam.</small>
      </div>
    </footer>
  );
}
