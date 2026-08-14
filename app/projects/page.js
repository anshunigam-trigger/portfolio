import { FaGithub } from "react-icons/fa";
import { ArrowUpRight, CircleDot, GitBranch, Layers3 } from "lucide-react";
import { PageNav } from "../../src/components/PageNav";
import { projects } from "../../src/constants/site";

export const metadata = {
  title: "Projects",
  description: "Detailed AI/ML, backend, research, and product projects by Anshu Nigam.",
};

const caseStudySections = [
  ["Problem", "problem"],
  ["Research", "research"],
  ["Product surface", "frontend"],
  ["System design", "backend"],
  ["Intelligence", "ai"],
  ["What it taught me", "lessons"],
];

export default function ProjectsPage() {
  return (
    <main className="subpage">
      <PageNav current="projects" actionHref="/" actionLabel="Back home" />

      <section className="subpage-hero subpage-hero--projects">
        <span>ARCHIVE / 06 SYSTEMS</span>
        <h1>Project work, with <em>the full thinking included.</em></h1>
        <p>Each project begins as a practical question and becomes a deliberate system — architecture, interaction, and a measurable outcome included.</p>
      </section>

      <section className="archive-summary" aria-label="Project archive summary">
        <article><Layers3 size={18} /><strong>06 systems</strong><span>AI, backend, research, and realtime product work</span></article>
        <article><GitBranch size={18} /><strong>End-to-end lens</strong><span>Problem framing through architecture and interface</span></article>
        <article><CircleDot size={18} /><strong>Evidence-led</strong><span>Metrics and specific lessons beside each build</span></article>
      </section>

      <section className="project-dossiers" aria-label="Detailed project case studies">
        {projects.map((project, index) => (
          <article className="project-dossier" key={project.slug} style={{ "--accent": project.accent }}>
            <header className="project-dossier__header">
              <span>{String(index + 1).padStart(2, "0")} / {project.id}</span>
              <i><b /> {project.status}</i>
            </header>
            <div className="project-dossier__lead">
              <div>
                <span className="eyebrow">{project.eyebrow}</span>
                <h2>{project.name}</h2>
                <p>{project.blurb}</p>
              </div>
              <strong>{project.metric}</strong>
            </div>

            <div className="project-dossier__body">
              <section className="dossier-architecture">
                <span>ARCHITECTURE TRACE</span>
                <ol>
                  {project.architecture.map((step, stepIndex) => <li key={step}><i>{String(stepIndex + 1).padStart(2, "0")}</i>{step}</li>)}
                </ol>
              </section>
              <dl className="dossier-details">
                {caseStudySections.map(([label, key]) => (
                  <div key={key}><dt>{label}</dt><dd>{project.caseStudy[key]}</dd></div>
                ))}
              </dl>
            </div>

            <footer className="project-dossier__footer">
              <div>{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              <a href={project.links.github} target="_blank" rel="noreferrer">View source <FaGithub size={15} /><ArrowUpRight size={14} /></a>
            </footer>
          </article>
        ))}
      </section>
    </main>
  );
}