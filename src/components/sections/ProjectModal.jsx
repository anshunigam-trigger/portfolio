"use client";

import { FaGithub } from "react-icons/fa";


import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, X } from "lucide-react";
import { useEffect } from "react";

export function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const handleKeydown = (event) => { if (event.key === "Escape") onClose(); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeydown);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handleKeydown); };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div className="project-modal-shell" role="dialog" aria-modal="true" aria-label={`${project.name} case study`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
          <motion.article className="project-modal" initial={{ opacity: 0, y: 34, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 24, scale: 0.98 }} transition={{ type: "spring", damping: 26, stiffness: 260 }}>
            <div className="modal-accent" style={{ background: project.accent }} />
            <button className="modal-close" type="button" onClick={onClose} aria-label="Close case study"><X size={18} /></button>
            <header className="modal-header"><span>{project.id} / CASE STUDY</span><h2>{project.name}</h2><p>{project.blurb}</p></header>
            <div className="modal-facts"><div><span>Outcome</span><strong>{project.metric}</strong></div><div><span>Status</span><strong>{project.status}</strong></div><div><span>Stack</span><strong>{project.stack.slice(0, 3).join(" ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· ")}</strong></div></div>
            <div className="modal-content-grid">
              <section><span className="modal-kicker">01 / Problem</span><p>{project.caseStudy.problem}</p></section>
              <section><span className="modal-kicker">02 / Research</span><p>{project.caseStudy.research}</p></section>
              <section><span className="modal-kicker">03 / Product surface</span><p>{project.caseStudy.frontend}</p></section>
              <section><span className="modal-kicker">04 / System design</span><p>{project.caseStudy.backend}</p></section>
              <section><span className="modal-kicker">05 / Intelligence</span><p>{project.caseStudy.ai}</p></section>
              <section><span className="modal-kicker">06 / Lesson</span><p>{project.caseStudy.lessons}</p></section>
            </div>
            <section className="modal-architecture"><span className="modal-kicker">Architecture trace</span><div>{project.architecture.map((step, index) => <span key={step}><i>{String(index + 1).padStart(2, "0")}</i>{step}</span>)}</div></section>
            <footer className="modal-footer"><div>{project.stack.map((item) => <span key={item}><Check size={12} />{item}</span>)}</div><a href={project.links.github} target="_blank" rel="noreferrer">Repository <FaGithub size={15} /><ArrowUpRight size={15} /></a></footer>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
