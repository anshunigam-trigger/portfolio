"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";


import dynamic from "next/dynamic";
import Balancer from "react-wrap-balancer";
import { Download, Mail, Play, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import { siteProfile, metrics } from "../../constants/site";
import { ButtonLink } from "../ui/ButtonLink";
import { Magnetic } from "../animations/Magnetic";
import { AnimatedCounter } from "../animations/AnimatedCounter";

const HeroScene = dynamic(() => import("../three/HeroScene").then((mod) => mod.HeroScene), { ssr: false, loading: () => <div className="hero-scene hero-scene--loading" /> });

const letters = siteProfile.name.split("");

export function HeroSection() {
  return (
    <section id="hero" className="hero-section section-pad">
      <HeroScene />
      <div className="hero-radial" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.div className="status-pill" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="status-dot" /> Engineering AI systems into usable products
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
            <Magnetic><ButtonLink href={siteProfile.resume} download variant="ghost"><Download size={15} /> Resume</ButtonLink></Magnetic>
            <div className="hero-socials">
              <a href={siteProfile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={18} /></a>
              <a href={siteProfile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn size={18} /></a>
              <a href={`mailto:${siteProfile.email}`} aria-label="Email"><Mail size={18} /></a>
            </div>
          </motion.div>
        </div>
        <motion.aside className="hero-console glass-border" initial={{ opacity: 0, x: 34, rotateY: -10 }} animate={{ opacity: 1, x: 0, rotateY: 0 }} transition={{ duration: 0.9, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}>
          <div className="console-top"><span>live capability signal</span><Play size={13} /></div>
          <div className="console-metrics">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <strong><AnimatedCounter value={metric.value} suffix={metric.suffix} /></strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
          <div className="console-stream" aria-hidden="true">
            {siteProfile.headlineWords.map((word, index) => <span key={word} style={{ "--i": index }}>{word}</span>)}
          </div>
        </motion.aside>
      </div>
      <div className="scroll-cue"><span /> Scroll</div>
    </section>
  );
}
