"use client";

import { useState } from "react";
import { BrainCircuit, Database, GitBranch, ScanSearch, Sparkles } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { Reveal } from "../animations/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

const pipeline = ["Dataset", "Features", "Model", "Evaluation", "Explanation", "Review", "Iteration"];
const details = [
  [ScanSearch, "Start with the data and the decision the system needs to support."],
  [Sparkles, "Build representations that preserve useful signals for the task."],
  [Database, "Keep the inputs, outputs, and artifacts available for comparison."],
  [BrainCircuit, "Treat model predictions as inspectable outputs, not magic."],
  [GitBranch, "Use evaluation and review feedback to choose the next iteration."],
];

export function AISection() {
  const [focusedStep, setFocusedStep] = useState(3);
  const detail = details[Math.min(focusedStep, details.length - 1)];
  const FocusIcon = detail[0];

  return (
    <section id="ai" className="section-pad ai-section">
      <div className="container ai-layout">
        <Reveal className="section-heading ai-copy">
          <SectionLabel index="04" label="AI systems" />
          <h2>Models are useful inside a <em>well-designed loop.</em></h2>
          <p><Balancer>Data quality, evaluation, explainability, and a human review step matter as much as the model itself.</Balancer></p>
          <div className="ai-principles"><span>Explainable outputs</span><span>Measured evaluation</span><span>Human review</span></div>
        </Reveal>
        <Reveal delay={0.12} className="ai-pipeline-card">
          <div className="pipeline-glow" aria-hidden="true" />
          <div className="pipeline-topline"><span>ML SYSTEM LOOP</span><span>INTERACTIVE MODEL</span></div>
          <div className="pipeline-nodes">
            {pipeline.map((step, index) => <button type="button" key={step} className={focusedStep === index ? "is-focused" : ""} onMouseEnter={() => setFocusedStep(index)} onFocus={() => setFocusedStep(index)} onClick={() => setFocusedStep(index)}><i>{String(index + 1).padStart(2, "0")}</i><span>{step}</span></button>)}
          </div>
          <div className="pipeline-inspector"><FocusIcon size={22} /><div><span>Stage {String(focusedStep + 1).padStart(2, "0")}</span><strong>{pipeline[focusedStep]}</strong><p>{detail[1]}</p></div></div>
        </Reveal>
      </div>
    </section>
  );
}
