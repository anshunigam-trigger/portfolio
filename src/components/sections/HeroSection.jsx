"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import Balancer from "react-wrap-balancer";
import { Download, Mail, Play, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import { siteProfile, stats } from "../../constants/cleanSite";
import { isTodo } from "../../../data/projects";
import { ButtonLink } from "../ui/ButtonLink";
import { Magnetic } from "../animations/Magnetic";
import { AnimatedCounter } from "../animations/AnimatedCounter";
import { SpotlightCard } from "../ui/SpotlightCard";

const letters = siteProfile.name.split("");

export function HeroSection() {
  return (
    <section id="hero" className="hero-section section-pad">
      <div className="hero-radial" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.div className="status-pill" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="status-dot" /> {siteProfile.role}
          </motion.div>
          <h1 className="hero-name" aria-label={siteProfile.name}>
            {letters.map((letter, index) => (
              <motion.span key={`${letter}-${index}`} aria-hidden="true" initial={{ y: "110%", opacity: 0, rotateX: -70 }} animate={{ y: 0, opacity: 1, rotateX: 0 }} transition={{ duration: 0.72, delay: 0.16 + index * 0.035, ease: [0.16, 1, 0.3, 1] }}>
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>
          <motion.p className="hero-headline" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.52 }}>
            <Balancer>{siteProfile.role}</Balancer>
          </motion.p>
          <motion.p className="hero-summary" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.68 }}>
            <Balancer>{siteProfile.summary}</Balancer>
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.82 }}>
            <Magnetic><ButtonLink href="#work">Explore work</ButtonLink></Magnetic>
            <Magnetic><ButtonLink href="/about" variant="ghost"><UserRound size={15} /> About me</ButtonLink></Magnetic>
            <Magnetic><ButtonLink href={siteProfile.resume} target="_blank" rel="noopener noreferrer" download variant="ghost"><Download size={15} /> Resume</ButtonLink></Magnetic>
            <Magnetic><ButtonLink href={siteProfile.aiMlResume} target="_blank" rel="noopener noreferrer" download variant="ghost"><Download size={15} /> AI/ML resume</ButtonLink></Magnetic>
            <a className="hero-email" href={`mailto:${siteProfile.email}`}><Mail size={15} /> Email</a>
          </motion.div>
        </div>
        <SpotlightCard as={motion.aside} className="hero-console glass-border" initial={{ opacity: 0, x: 34, rotateY: -10 }} animate={{ opacity: 1, x: 0, rotateY: 0 }} transition={{ duration: 0.9, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}>
          <div className="console-top"><span>live capability signal</span><Play size={13} /></div>
          <div className="console-metrics">
            {stats.filter((metric) => !isTodo(metric.value)).map((metric) => (
              <div key={metric.label}>
                <strong><AnimatedCounter value={metric.value} suffix={metric.suffix} /></strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
          <div className="console-stream" aria-hidden="true">
            {siteProfile.headlineWords.map((word, index) => <span key={word} style={{ "--i": index }}>{word}</span>)}
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
