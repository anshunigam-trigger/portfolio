"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import Balancer from "react-wrap-balancer";
import { BookOpen, FileText, Mail, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import { siteProfile, stats } from "../../constants/cleanSite";
import { isTodo } from "../../../data/projects";
import { ButtonLink } from "../ui/ButtonLink";
import { Magnetic } from "../animations/Magnetic";
import { AnimatedCounter } from "../animations/AnimatedCounter";

const letters = siteProfile.name.split("");

export function HeroSection() {
  return (
    <section id="hero" className="hero-section section-pad">
      <div className="hero-radial" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.div className="status-pill" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="status-dot" /> {siteProfile.target}
          </motion.div>
          <h1 className="hero-name" aria-label={siteProfile.name}>
            {letters.map((letter, index) => (
              <motion.span key={`${letter}-${index}`} aria-hidden="true" initial={{ y: "110%", opacity: 0, rotateX: -70 }} animate={{ y: 0, opacity: 1, rotateX: 0 }} transition={{ duration: 0.72, delay: 0.16 + index * 0.035, ease: [0.16, 1, 0.3, 1] }}>
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>
          <nav className="hero-proof" aria-label="Proof links">
            <a href={siteProfile.resume} target="_blank" rel="noopener noreferrer"><FileText size={14} /> Resume</a>
            <a href={siteProfile.github} target="_blank" rel="noopener noreferrer"><FaGithub size={14} /> GitHub</a>
            <a href={siteProfile.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={14} /> LinkedIn</a>
            {isTodo(siteProfile.paperUrl) ? <span><BookOpen size={14} /> Research paper under review</span> : <a href={siteProfile.paperUrl} target="_blank" rel="noopener noreferrer"><BookOpen size={14} /> Paper: HARD-RL</a>}
          </nav>
          <motion.p className="hero-headline" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.52 }}>
            <Balancer>{siteProfile.role}</Balancer>
          </motion.p>
          <motion.p className="hero-summary" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.68 }}>
            <Balancer>{siteProfile.summary}</Balancer>
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.82 }}>
            <Magnetic><ButtonLink href="#work">Explore work</ButtonLink></Magnetic>
            <Magnetic><ButtonLink href="/about" variant="ghost"><UserRound size={15} /> About me</ButtonLink></Magnetic>
            <a className="hero-email" href={`mailto:${siteProfile.email}`}><Mail size={15} /> Email</a>
          </motion.div>
        </div>
        <motion.aside className="hero-console glass-border" initial={{ opacity: 0, x: 34, rotateY: -10 }} animate={{ opacity: 1, x: 0, rotateY: 0 }} transition={{ duration: 0.9, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}>
          <div className="console-top"><span>defensible proof points</span><FileText size={13} /></div>
          <div className="console-metrics">
            {stats.filter((metric) => !isTodo(metric.value)).map((metric) => (
              <div key={metric.label}>
                <strong><AnimatedCounter value={metric.value} suffix={metric.suffix} /></strong>
                <span>{metric.label}<small>{metric.caption}</small></span>
              </div>
            ))}
          </div>
          <div className="console-stream" aria-hidden="true">
            {siteProfile.headlineWords.map((word, index) => <span key={word} style={{ "--i": index }}>{word}</span>)}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
