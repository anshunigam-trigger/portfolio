"use client";

import { ArrowUpRight, ExternalLink, Layers3, Plus } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { featuredProjects } from "../../constants/cleanSite";
import { isTodo } from "../../../data/projects";
import { Reveal } from "../animations/Reveal";
import { Magnetic } from "../animations/Magnetic";
import { SectionLabel } from "../ui/SectionLabel";
import { ButtonLink } from "../ui/ButtonLink";

export function ProjectsSection() {
  return (
    <section id="work" className="section-pad projects-section">
      <div className="container">
        <Reveal className="section-heading projects-heading">
          <SectionLabel index="03" label="Selected systems" />
          <h2>Projects that make the claim <em>easy to verify.</em></h2>
          <p><Balancer>Each featured project answers four recruiter questions quickly: who needed it, what I built, what changed, and where the proof lives.</Balancer></p>
        </Reveal>
        <div className="project-stack">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delay={Math.min(index * 0.06, 0.25)}>
              <motion.article className="project-card" style={{ "--accent": "#66e3ff" }} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
                <div className="project-card__top"><span>{project.order.toString().padStart(2, "0")}</span><span className="project-status"><i />{project.status}</span></div>
                <div className="project-card__body">
                  <span className="eyebrow">{project.tagline}</span>
                  <h3>{project.title}</h3>
                  {!isTodo(project.mediaUrl) && <Image className="project-card__media" src={project.mediaUrl} alt={`${project.title} proof`} width={1200} height={675} loading="lazy" />}
                  <div className="case-study-grid">
                    <section><span>Problem</span><p>{project.problem}</p></section>
                    <section><span>What I built</span><p>{project.built}</p></section>
                    <section><span>Result</span><p>{project.result}</p><small>{isTodo(project.resultBaseline) ? "Baseline pending documentation." : project.resultBaseline}</small></section>
                    <section><span>Proof</span><p>{isTodo(project.mediaUrl) ? "Results media pending. The repository and case study links are below." : "Results media is linked below."}</p></section>
                  </div>
                </div>
                <footer className="project-card__footer">
                  <div>{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <div className="project-proof-links">
                    {!isTodo(project.demoUrl) && project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={13} /> Demo</a>}
                    {!isTodo(project.mediaUrl) && project.mediaUrl && <a href={project.mediaUrl} target="_blank" rel="noopener noreferrer"><ArrowUpRight size={13} /> Proof</a>}
                    {!isTodo(project.paperUrl) && project.paperUrl && <a href={project.paperUrl} target="_blank" rel="noopener noreferrer"><Layers3 size={13} /> Paper</a>}
                    {!isTodo(project.repoUrl) && project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"><FaGithub size={13} /> Repo</a>}
                    <Magnetic><a href={project.caseStudyUrl} aria-label={`Open ${project.title} case study`}>Case study <Plus size={14} /></a></Magnetic>
                  </div>
                </footer>
              </motion.article>
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
