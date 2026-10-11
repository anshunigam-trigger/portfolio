import { MapPin } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { siteProfile } from "../../constants/cleanSite";
import { Reveal } from "../animations/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

export function AboutSection() {
  return (
    <section id="about" className="section-pad about-section" aria-labelledby="about-heading">
      <div className="container">
        <Reveal className="section-heading about-heading"><SectionLabel index="05" label="About" /><h2 id="about-heading">A student building <em>ML systems and backends.</em></h2><p><Balancer>{siteProfile.summary}</Balancer></p></Reveal>
        <div className="about-grid">
          <Reveal className="about-manifesto-wrap"><article className="about-manifesto glass-border"><span className="eyebrow">Current focus</span><p>Explainable ML, API-backed products, and reinforcement-learning research for fog computing.</p><div className="manifesto-meta"><MapPin size={15} /><span>{siteProfile.location}</span><span>Open to SWE / AI-ML internships</span></div></article></Reveal>
          <Reveal delay={0.08} className="timeline"><article className="timeline-item"><span className="timeline-year">2024</span><div className="timeline-line"><i /></div><div className="timeline-copy"><h3>B.Tech CSE (IoT)</h3><p>Institute of Engineering and Management, Kolkata. Program runs from 2024 to 2028.</p></div></article></Reveal>
        </div>
      </div>
    </section>
  );
}
