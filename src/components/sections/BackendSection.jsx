"use client";

import { useState } from "react";
import { Activity, Box, Database, KeyRound, Network, ServerCog, Workflow } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { backendFlow } from "../../constants/site";
import { Reveal } from "../animations/Reveal";
import { GlassCard } from "../ui/GlassCard";
import { SectionLabel } from "../ui/SectionLabel";

const icons = [Network, ServerCog, KeyRound, Workflow, Box, Database, Activity, ServerCog];
const systemNotes = ["Responsive interaction surface", "Boundary for contracts and rate control", "Session and authorization layer", "Domain services and model operations", "Async throughput and retry control", "Durable state and analytics", "Signals, traces, and health", "Repeatable shipping environment"];

export function BackendSection() {
  const [hovered, setHovered] = useState(3);
  return (
    <section id="backend" className="section-pad backend-section">
      <div className="container">
        <Reveal className="section-heading backend-heading">
          <SectionLabel index="05" label="Backend posture" />
          <h2>Product confidence is an <em>architecture decision.</em></h2>
          <p><Balancer>Interfaces can be beautiful, but the system underneath must also be legible, resilient, and ready to evolve.</Balancer></p>
        </Reveal>
        <Reveal delay={0.12}>
          <GlassCard className="architecture-card">
            <div className="architecture-card__header"><span>REFERENCE ARCHITECTURE</span><span><i /> system healthy</span></div>
            <div className="architecture-rail" role="list" aria-label="Interactive backend architecture">
              {backendFlow.map((step, index) => {
                const Icon = icons[index];
                return <button key={step} role="listitem" type="button" className={hovered === index ? "is-active" : ""} onMouseEnter={() => setHovered(index)} onFocus={() => setHovered(index)} onClick={() => setHovered(index)}><i className="architecture-link" /><span className="architecture-icon"><Icon size={18} /></span><strong>{step}</strong><small>{String(index + 1).padStart(2, "0")}</small></button>;
              })}
            </div>
            <div className="architecture-inspector"><span>Current concern</span><strong>{backendFlow[hovered]}</strong><p>{systemNotes[hovered]}</p></div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
