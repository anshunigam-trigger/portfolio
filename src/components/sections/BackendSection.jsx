"use client";

import { useState } from "react";
import { Activity, Box, Database, Network, ServerCog, Workflow } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { Reveal } from "../animations/Reveal";
import { GlassCard } from "../ui/GlassCard";
import { SectionLabel } from "../ui/SectionLabel";

const flow = ["Client", "FastAPI", "Validation", "Model service", "Review", "Data"];
const icons = [Network, ServerCog, Workflow, Box, Activity, Database];
const notes = ["A clear interface for the task and its result.", "API-backed training, serving, and review flows.", "Inputs and outputs stay explicit at each boundary.", "Model artifacts return a result that can be inspected.", "Flagged cases can be reviewed by a person.", "Data and evaluation context remain available for the next run."];

export function BackendSection() {
  const [hovered, setHovered] = useState(1);

  return (
    <section id="backend" className="section-pad backend-section">
      <div className="container">
        <Reveal className="section-heading backend-heading">
          <SectionLabel index="05" label="Backend posture" />
          <h2>Product confidence is an <em>architecture decision.</em></h2>
          <p><Balancer>The interface is only useful when the system underneath has clear boundaries for data, inference, and review.</Balancer></p>
        </Reveal>
        <Reveal delay={0.12}>
          <GlassCard className="architecture-card">
            <div className="architecture-card__header"><span>REFERENCE FLOW</span><span><i /> system map</span></div>
            <div className="architecture-rail" role="list" aria-label="Interactive backend flow">
              {flow.map((step, index) => { const Icon = icons[index]; return <button key={step} role="listitem" type="button" className={hovered === index ? "is-active" : ""} onMouseEnter={() => setHovered(index)} onFocus={() => setHovered(index)} onClick={() => setHovered(index)}><i className="architecture-link" /><span className="architecture-icon"><Icon size={18} /></span><strong>{step}</strong><small>{String(index + 1).padStart(2, "0")}</small></button>; })}
            </div>
            <div className="architecture-inspector"><span>Current concern</span><strong>{flow[hovered]}</strong><p>{notes[hovered]}</p></div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
