"use client";

import { ArrowUpRight, ExternalLink, Layers3, Plus } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { mainProjects } from "../../constants/cleanSite";
import { Reveal } from "../animations/Reveal";
import { Magnetic } from "../animations/Magnetic";
import { SectionLabel } from "../ui/SectionLabel";
import { ButtonLink } from "../ui/ButtonLink";
import { SpotlightCard } from "../ui/SpotlightCard";
import { isTodo } from "../../../data/projects";

export function ProjectsSection() {
  return (
    <section id="work" className="section-pad projects-section">
      <div className="container">
        <Reveal className="section-heading projects-heading">
          <SectionLabel index="03" label="Selected systems" />
          <h2>From experiments to <em>experiences with teeth.</em></h2>
          <p><Balancer>Three featured projects, each treated as a system: the problem, the interface, the architecture, and the proof that it works.</Balancer></p>
        </Reveal>
        <div className="project-stack">
          {mainProjects.map((project, index) => (
            <Reveal key={project.id} delay={Math.min(index * 0.06, 0.25)}>
              <SpotlightCard as={motion.article} className="project-card" style={{ "--accent": ["#00f5d4", "#8b5cff", "#66e3ff"][index] }} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
                <div className="project-card__top"><span>{project.order.toString().padStart(2, "0")}</span><span className="project-status"><i />{project.status}</span></div>
                <div className="project-machine" aria-hidden="true"><div className="machine-grid" /><div className="machine-orb" /><div className="machine-panel"><span /><span /><span /></div><div className="machine-line machine-line--one" /><div className="machine-line machine-line--two" /></div>
                <div className="project-card__body"><span className="eyebrow">{project.tagline}</span><h3>{project.title}</h3><p>{project.problem}</p><strong>{project.resultMetric.startsWith("TODO:") ? "Result pending" : project.resultMetric}</strong></div>
                <footer className="project-card__footer"><div>{project.stack.slice(0, 3).map((item) => <span key={item}>{item}</span>)}</div><div className="project-proof-links"><Magnetic><a href={project.caseStudyUrl} aria-label={`Open ${project.title} case study`}>Case study <Plus size={15} /></a></Magnetic>{!isTodo(project.repoUrl) && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} repository`}>Repo <ExternalLink size={14} /></a>}{!isTodo(project.demoUrl) && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} demo`}>Live demo <ExternalLink size={14} /></a>}</div></footer>
                {!isTodo(project.repoUrl) && <a className="project-repo" href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} repository`}><Layers3 size={16} /><ArrowUpRight size={15} /></a>}
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
        <Reveal className="projects-more">
          <Magnetic><ButtonLink href="/projects" variant="ghost">More projects</ButtonLink></Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
