"use client";

import { useState } from "react";
import { ArrowUpRight, Layers3, Plus } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { projects } from "../../constants/site";
import { Reveal } from "../animations/Reveal";
import { Magnetic } from "../animations/Magnetic";
import { SectionLabel } from "../ui/SectionLabel";
import { ProjectModal } from "./ProjectModal";

export function ProjectsSection() {
  const [selected, setSelected] = useState(null);
  return (
    <section id="work" className="section-pad projects-section">
      <div className="container">
        <Reveal className="section-heading projects-heading">
          <SectionLabel index="03" label="Selected systems" />
          <h2>From experiments to <em>experiences with teeth.</em></h2>
          <p><Balancer>Six projects, each treated as a system: the problem, the interface, the architecture, and the proof that it works.</Balancer></p>
        </Reveal>
        <div className="project-stack">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={Math.min(index * 0.06, 0.25)}>
              <motion.article className="project-card" style={{ "--accent": project.accent }} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
                <div className="project-card__top"><span>{project.id}</span><span className="project-status"><i />{project.status}</span></div>
                <div className="project-machine" aria-hidden="true"><div className="machine-grid" /> <div className="machine-orb" /> <div className="machine-panel"><span /><span /><span /></div><div className="machine-line machine-line--one" /><div className="machine-line machine-line--two" /></div>
                <div className="project-card__body"><span className="eyebrow">{project.eyebrow}</span><h3>{project.name}</h3><p>{project.blurb}</p><strong>{project.metric}</strong></div>
                <footer className="project-card__footer"><div>{project.stack.slice(0, 3).map((item) => <span key={item}>{item}</span>)}</div><Magnetic><button type="button" onClick={() => setSelected(project)} aria-label={`Open ${project.name} case study`}>Case study <Plus size={16} /></button></Magnetic></footer>
                <a className="project-repo" href={project.links.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} repository`}><Layers3 size={16} /><ArrowUpRight size={15} /></a>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
