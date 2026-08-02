"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { skills } from "../../constants/site";
import { Reveal } from "../animations/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

const groupColors = { Language: "#ffffff", Backend: "#66e3ff", Frontend: "#8b5cff", AI: "#00f5d4", Infra: "#ffb86b", Data: "#a9b8ff" };

export function SkillGalaxy() {
  const [active, setActive] = useState("Python");
  const activeSkill = skills.find((skill) => skill.name === active) ?? skills[0];
  const nodes = useMemo(() => skills.map((skill, index) => {
    const angle = (index / skills.length) * Math.PI * 2 - Math.PI / 2;
    const radius = index % 3 === 0 ? 31 : index % 3 === 1 ? 42 : 49;
    return { ...skill, x: 50 + Math.cos(angle) * radius, y: 50 + Math.sin(angle) * radius };
  }), []);

  return (
    <section id="skills" className="section-pad skills-section">
      <div className="container">
        <Reveal className="section-heading skills-heading">
          <SectionLabel index="02" label="Capability constellation" />
          <h2>Systems thinking, <em>rendered as a graph.</em></h2>
          <p><Balancer>Not a list of tools. A working constellation of the technologies I use to move from a question to a dependable outcome.</Balancer></p>
        </Reveal>
        <Reveal delay={0.12} className="skill-galaxy">
          <div className="skill-galaxy__field" role="list" aria-label="Interactive technology constellation">
            <svg className="galaxy-links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              {nodes.map((node) => {
                return <line key={node.name} x1="50" y1="50" x2={node.x} y2={node.y} className={active === node.name ? "is-active" : ""} />;
              })}
              {nodes.map((node, index) => {
                const next = nodes[(index + 3) % nodes.length];
                return <line key={`${node.name}-mesh`} x1={node.x} y1={node.y} x2={next.x} y2={next.y} className="mesh-link" />;
              })}
            </svg>
            <motion.button className="galaxy-core" type="button" onClick={() => setActive("Python")} whileTap={{ scale: 0.94 }} aria-label="Center the Python node">
              <span>CORE</span><strong>{activeSkill.group}</strong>
            </motion.button>
            {nodes.map((node, index) => (
              <motion.button
                type="button"
                role="listitem"
                key={node.name}
                className={`galaxy-node ${active === node.name ? "is-active" : ""}`}
                style={{ left: `${node.x}%`, top: `${node.y}%`, "--node-color": groupColors[node.group], "--delay": `${index * -0.45}s` }}
                onMouseEnter={() => setActive(node.name)}
                onFocus={() => setActive(node.name)}
                onClick={() => setActive(node.name)}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
              >
                <i /><span>{node.name}</span><small>{node.group}</small>
              </motion.button>
            ))}
            <div className="galaxy-readout" aria-live="polite"><span>Selected capability</span><strong>{activeSkill.name}</strong><p>{activeSkill.weight}% operating confidence</p></div>
          </div>
          <div className="skill-galaxy__legend">
            {Object.entries(groupColors).map(([group, color]) => <span key={group}><i style={{ background: color }} />{group}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

