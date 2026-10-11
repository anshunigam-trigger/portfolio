import { ArrowUpRight, BookOpen } from "lucide-react";
import Image from "next/image";
import { research, siteProfile } from "../../constants/cleanSite";
import { isTodo } from "../../../data/projects";
import { Reveal } from "../animations/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

export function ResearchSection() {
  return (
    <section id="research" className="section-pad research-section" aria-labelledby="research-heading">
      <div className="container research-grid">
        <Reveal className="section-heading"><SectionLabel index="04" label="Research" /><h2 id="research-heading">HARD-RL, <em>under review.</em></h2><p>{research.summary}</p></Reveal>
        <Reveal className="research-card" delay={0.1}>
          <div className="research-card__top"><span><BookOpen size={15} /> {research.status}</span>{!isTodo(research.paperUrl) && <a href={research.paperUrl} target="_blank" rel="noopener noreferrer">Paper <ArrowUpRight size={14} /></a>}</div>
          <div className="research-chart" aria-label="Results chart placeholder">{isTodo(research.chartUrl) ? <p>Results chart will appear here when the paper materials are public.</p> : <Image src={research.chartUrl} alt="HARD-RL results chart" width={1200} height={675} unoptimized />}</div>
          <p className="research-card__note">{isTodo(siteProfile.paperUrl) ? "Paper URL pending. Email Anshu to request the manuscript." : "Paper link available above."}</p>
        </Reveal>
      </div>
    </section>
  );
}
