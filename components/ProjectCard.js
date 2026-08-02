"use client";

import { FaGithub } from "react-icons/fa";


import { ExternalLink } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const STATUS_STYLES = {
  live: { label: "LIVE", className: "text-signal border-signal/40 bg-signal/10" },
  done: { label: "DEPLOYED", className: "text-signal border-signal/40 bg-signal/10" },
  progress: { label: "IN PROGRESS", className: "text-ember border-ember/40 bg-ember/10" },
  research: { label: "RESEARCH", className: "text-coral border-coral/40 bg-coral/10" },
};

const spring = { stiffness: 180, damping: 18, mass: 0.4 };

export default function ProjectCard({ project }) {
  const status = STATUS_STYLES[project.status];
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), spring);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), spring);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    mouseX.set(x - 0.5);
    mouseY.set(y - 0.5);
    event.currentTarget.style.setProperty("--pointer-x", `${x * 100}%`);
    event.currentTarget.style.setProperty("--pointer-y", `${y * 100}%`);
  }

  function handleMouseLeave(event) {
    mouseX.set(0);
    mouseY.set(0);
    event.currentTarget.style.setProperty("--pointer-x", "50%");
    event.currentTarget.style.setProperty("--pointer-y", "50%");
  }

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", "--project-accent": project.accent, "--pointer-x": "50%", "--pointer-y": "50%" }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="project-card group relative h-full overflow-hidden rounded-lg border border-hairline bg-panel/70 p-6"
    >
      <div style={{ transform: "translateZ(30px)" }}>
        <div className="mb-5 flex items-start justify-between gap-4">
          <span className="font-mono text-xs text-mist">{project.id}</span>
          <span className={`rounded border px-2 py-1 font-mono text-[10px] ${status.className}`}>{status.label}</span>
        </div>

        <h3 className="font-display text-xl font-semibold text-ink">{project.name}</h3>
        <p className="mt-3 text-sm leading-7 text-mist">{project.blurb}</p>
        <div className="metric-pill mt-5">{project.metric}</div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded border border-hairline bg-void/45 px-2.5 py-1 font-mono text-[11px] text-mist transition-colors group-hover:border-signal/30 group-hover:text-ink">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 border-t border-hairline/70 pt-5">
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-mono text-xs text-mist transition-colors hover:text-signal">
              <FaGithub size={14} /> source
            </a>
          )}
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-mono text-xs text-mist transition-colors hover:text-signal">
              <ExternalLink size={14} /> demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

