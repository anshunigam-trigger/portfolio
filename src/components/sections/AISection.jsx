"use client";

import { useState } from "react";
import { BrainCircuit, Database, GitBranch, ScanSearch, Sparkles } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { aiPipeline } from "../../constants/site";
import { Reveal } from "../animations/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

const pipelineMeta = [
  { icon: ScanSearch, detail: "Schemas, text, events, and signals enter through a quality gate." },
  { icon: Sparkles, detail: "Clean representations make downstream decisions more reliable." },
  { icon: Database, detail: "Semantic memory keeps relevant context close to inference." },
  { icon: BrainCircuit, detail: "Models produce scored, inspectable outputs rather than magic." },
  { icon: GitBranch, detail: "Evaluation feeds the next product and training decision." },
];

export function AISection() {
  const [focusedStep, setFocusedStep] = useState(3);
  const focusedMeta = pipelineMeta[Math.min(focusedStep, pipelineMeta.length - 1)];
  const FocusIcon = focusedMeta.icon;
  return (
    <section id="ai" className="section-pad ai-section">
      <div className="container ai-layout">
        <Reveal className="section-heading ai-copy">
          <SectionLabel index="04" label="AI systems" />
          <h2>Models are only useful inside a <em>well-designed loop.</em></h2>
          <p><Balancer>I think beyond the prompt or the metric: data quality, retrieval, evals, observability, and a product feedback cycle.</Balancer></p>
          <div className="ai-principles"><span>Explainable outputs</span><span>Measured evaluation</span><span>Human-in-the-loop</span></div>
        </Reveal>
        <Reveal delay={0.12} className="ai-pipeline-card">
          <div className="pipeline-glow" aria-hidden="true" />
          <div className="pipeline-topline"><span>NEURAL PRODUCT PIPELINE</span><span>LIVE DESIGN MODEL</span></div>
          <div className="pipeline-nodes">
            {aiPipeline.map((step, index) => {
              const isFocused = focusedStep === index;
              return <button type="button" key={step} className={isFocused ? "is-focused" : ""} onMouseEnter={() => setFocusedStep(index)} onFocus={() => setFocusedStep(index)} onClick={() => setFocusedStep(index)}><i>{String(index + 1).padStart(2, "0")}</i><span>{step}</span></button>;
            })}
          </div>
          <div className="pipeline-inspector"><FocusIcon size={22} /><div><span>Stage {String(focusedStep + 1).padStart(2, "0")}</span><strong>{aiPipeline[focusedStep]}</strong><p>{focusedMeta.detail}</p></div></div>
        </Reveal>
      </div>
    </section>
  );
}
