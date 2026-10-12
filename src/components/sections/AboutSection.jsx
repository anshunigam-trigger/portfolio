import { ArrowDownRight, Cpu, MapPin, Sparkles } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { mainProjects, siteProfile, skills } from "../../constants/cleanSite";
import { AnimatedCounter } from "../animations/AnimatedCounter";
import { Reveal } from "../animations/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

const timeline = [
  { year: "2024", title: "B.Tech CSE (IoT)", detail: "Started at Institute of Engineering and Management, Kolkata. The program runs from 2024 to 2028." },
  { year: "Current", title: "Applied ML projects", detail: "Building fraud detection with SHAP review flows and AutoBench, a no-code AutoML platform in progress." },
  { year: "Research", title: "Fog-computing RL", detail: "Submitted the HARD-RL Fog Load Balancer paper to IJACSA; it is currently under review." },
];

export function AboutSection() {
  return (
    <section id="about" className="section-pad about-section" aria-labelledby="about-heading">
      <div className="container">
        <Reveal className="section-heading about-heading"><SectionLabel index="01" label="Signal / profile" /><h2 id="about-heading">Engineering lives where <em>curiosity</em> meets execution.</h2><p><Balancer>{siteProfile.summary}</Balancer></p></Reveal>
        <div className="about-grid">
          <Reveal className="about-manifesto-wrap"><article className="about-manifesto glass-border"><div className="manifesto-orbit" aria-hidden="true"><Cpu size={22} /><span /><Sparkles size={16} /></div><span className="eyebrow">The throughline</span><p>Build the model, understand the infrastructure, then make the interaction easy to follow.</p><div className="manifesto-meta"><MapPin size={15} /><span>{siteProfile.location}</span><ArrowDownRight size={17} /><span>Open to SWE / AI-ML internships</span></div></article></Reveal>
          <div className="timeline" aria-label="Education and project timeline">
            {timeline.map((item, index) => <Reveal key={item.year} delay={0.1 + index * 0.07} className="timeline-item"><span className="timeline-year">{item.year}</span><div className="timeline-line"><i /></div><div className="timeline-copy"><h3>{item.title}</h3><p>{item.detail}</p></div></Reveal>)}
          </div>
        </div>
        <Reveal delay={0.2} className="proof-grid">
          <div className="proof-item"><strong><AnimatedCounter value={String(mainProjects.length)} suffix="" /></strong><span>main projects</span></div>
          <div className="proof-item"><strong><AnimatedCounter value={String(Object.keys(skills).length)} suffix="" /></strong><span>skill groups</span></div>
          <div className="proof-item"><strong><AnimatedCounter value="3" suffix="" /></strong><span>proof metrics</span></div>
        </Reveal>
      </div>
    </section>
  );
}
