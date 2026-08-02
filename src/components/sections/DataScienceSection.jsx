"use client";

import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { BarChart3, CircleCheckBig, FlaskConical } from "lucide-react";
import { dataWorkflow } from "../../constants/site";
import { Reveal } from "../animations/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

const bars = [42, 72, 58, 91, 76, 88, 64, 95, 71, 83, 62, 90];

export function DataScienceSection() {
  return (
    <section id="data" className="section-pad data-section">
      <div className="container data-layout">
        <Reveal className="data-visual">
          <div className="data-visual__header"><span>EXPERIMENT MEMORY</span><span className="data-live"><i /> tracking</span></div>
          <div className="chart-canvas"><div className="chart-grid" /> <div className="chart-line" /> <div className="chart-bars">{bars.map((height, index) => <motion.i key={index} initial={{ height: 0 }} whileInView={{ height: `${height}%` }} viewport={{ once: true }} transition={{ duration: 0.75, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }} />)}</div><div className="chart-dot chart-dot--one" /><div className="chart-dot chart-dot--two" /></div>
          <div className="data-visual__footer"><span><BarChart3 size={15} /> Metric-aware model selection</span><span><FlaskConical size={15} /> Repeatable experiments</span></div>
        </Reveal>
        <Reveal delay={0.12} className="section-heading data-copy">
          <SectionLabel index="06" label="Data practice" />
          <h2>Every model begins with <em>an honest look at the data.</em></h2>
          <p><Balancer>My workflow is designed to make useful signals visible early, validate decisions rigorously, and preserve why a result was trusted.</Balancer></p>
          <div className="workflow-list">{dataWorkflow.map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong><CircleCheckBig size={15} /></div>)}</div>
        </Reveal>
      </div>
    </section>
  );
}
