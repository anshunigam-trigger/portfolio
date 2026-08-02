"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Cpu, Sparkles } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { siteProfile, timeline } from "../../constants/site";
import { AnimatedCounter } from "../animations/AnimatedCounter";
import { Reveal } from "../animations/Reveal";
import { GlassCard } from "../ui/GlassCard";
import { SectionLabel } from "../ui/SectionLabel";

const proof = [
  { value: "06", suffix: "+", label: "shipped systems" },
  { value: "04", suffix: "", label: "core disciplines" },
  { value: "03", suffix: "", label: "product layers" },
];

export function AboutSection() {
  return (
    <section id="about" className="section-pad about-section">
      <div className="container">
        <Reveal className="section-heading about-heading">
          <SectionLabel index="01" label="Signal / profile" />
          <h2>Engineering lives where <em>curiosity</em> meets execution.</h2>
          <p><Balancer>I build the connective tissue between research, systems, and a product experience people can actually trust and use.</Balancer></p>
        </Reveal>

        <div className="about-grid">
          <Reveal delay={0.08} className="about-manifesto-wrap">
            <GlassCard className="about-manifesto">
              <div className="manifesto-orbit" aria-hidden="true"><Cpu size={22} /><span /><Sparkles size={16} /></div>
              <span className="eyebrow">The throughline</span>
              <p>“Build the model, understand the infrastructure, then make the interaction feel inevitable.”</p>
              <div className="manifesto-meta"><span>{siteProfile.location}</span><ArrowDownRight size={17} /><span>Available for ambitious work</span></div>
            </GlassCard>
          </Reveal>

          <div className="timeline" aria-label="Career timeline">
            {timeline.map((item, index) => (
              <Reveal key={item.year} delay={0.1 + index * 0.07} className="timeline-item">
                <span className="timeline-year">{item.year}</span>
                <div className="timeline-line"><i /></div>
                <div className="timeline-copy"><h3>{item.title}</h3><p>{item.detail}</p></div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2} className="proof-grid">
          {proof.map((item) => (
            <div className="proof-item" key={item.label}>
              <strong><AnimatedCounter value={item.value} suffix={item.suffix} /></strong>
              <span>{item.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
