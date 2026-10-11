"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { skills } from "../../constants/cleanSite";
import { Reveal } from "../animations/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

const groupColors = { Languages: "#ffffff", Backend: "#66e3ff", Frontend: "#8b5cff", ML: "#00f5d4", "Data / Infra": "#ffb86b" };

export function SkillGalaxy() {
  const nodes = useMemo(() => Object.entries(skills).flatMap(([group, items]) => items.map((name) => ({ name, group }))), []);
  const [active, setActive] = useState(nodes[0]?.name);
  const activeSkill = nodes.find((skill) => skill.name === active) ?? nodes[0];
  const positioned = useMemo(() => nodes.map((node, index) => {
    const angle = (index / nodes.length) * Math.PI * 2 - Math.PI / 2;
    const radius = index % 3 === 0 ? 31 : index % 3 === 1 ? 42 : 49;
    return { ...node, x: 50 + Math.cos(angle) * radius, y: 50 + Math.sin(angle) * radius };
  }), [nodes]);

  return (
    <section id="skills" className="section-pad skills-section" aria-labelledby="skills-heading">
      <div className="container">
        <Reveal className="section-heading skills-heading"><SectionLabel index="02" label="Skills" /><h2 id="skills-heading">Systems thinking, <em>rendered as a graph.</em></h2><p><Balancer>Technologies grouped by the work they support. No proficiency scores, just the tools in the brief.</Balancer></p></Reveal>
        <Reveal delay={0.12} className="skill-galaxy">
          <div className="skill-galaxy__field" role="list" aria-label="Technology constellation">
            <svg className="galaxy-links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              {positioned.map((node) => <line key={node.name} x1="50" y1="50" x2={node.x} y2={node.y} className={active === node.name ? "is-active" : ""} />)}
            </svg>
            <motion.button className="galaxy-core" type="button" onClick={() => setActive(nodes[0]?.name)} whileTap={{ scale: 0.94 }} aria-label="Reset selected technology"><span>TOOLS</span><strong>{activeSkill?.group}</strong></motion.button>
            {positioned.map((node, index) => <motion.button type="button" role="listitem" key={node.name} className={`galaxy-node ${active === node.name ? "is-active" : ""}`} style={{ left: `${node.x}%`, top: `${node.y}%`, "--node-color": groupColors[node.group], "--delay": `${index * -0.45}s` }} onMouseEnter={() => setActive(node.name)} onFocus={() => setActive(node.name)} onClick={() => setActive(node.name)} whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}><i /><span>{node.name}</span><small>{node.group}</small></motion.button>)}
            <div className="galaxy-readout" aria-live="polite"><span>Selected technology</span><strong>{activeSkill?.name}</strong><p>{activeSkill?.group}</p></div>
          </div>
          <div className="skill-galaxy__legend">{Object.entries(groupColors).map(([group, color]) => <span key={group}><i style={{ background: color }} />{group}</span>)}</div>
        </Reveal>
      </div>
    </section>
  );
}
