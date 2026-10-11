import { ArrowUpRight, CircleDot, ExternalLink, FileText, GitBranch, Layers3 } from "lucide-react";
import { featuredProjects } from "../../src/constants/cleanSite";
import { isTodo } from "../../data/projects";
import { PageNav } from "../../src/components/PageNav";

export const metadata = { title: "Projects", description: "Evidence-led AI/ML and backend projects by Anshu Nigam." };

export default function ProjectsPage() {
  return (
    <main className="subpage">
      <PageNav current="projects" actionHref="/" actionLabel="Back home" />
      <section className="subpage-hero subpage-hero--projects">
        <span>ARCHIVE / {String(featuredProjects.length).padStart(2, "0")} SYSTEMS</span>
        <h1>Project work, with <em>the full thinking included.</em></h1>
        <p>Each project starts with a practical question and records the build, the measured result, and the evidence still to publish.</p>
      </section>

      <section className="archive-summary" aria-label="Project archive summary">
        <article><Layers3 size={18} /><strong>{featuredProjects.length} documented builds</strong><span>Research, deployed ML, and a full-stack AutoML platform</span></article>
        <article><GitBranch size={18} /><strong>End-to-end lens</strong><span>Problem framing through model behavior, APIs, and interface</span></article>
        <article><CircleDot size={18} /><strong>Evidence-led</strong><span>Results are paired with baselines or marked for follow-up</span></article>
      </section>

      <section className="project-dossiers" aria-label="Project case studies">
        {featuredProjects.map((project, index) => <article className="project-dossier" key={project.id} style={{ "--accent": ["#00F5D4", "#8B5CFF", "#66E3FF"][index] }}>
          <header className="project-dossier__header"><span>{String(project.order).padStart(2, "0")} / {project.id}</span><i><b /> {project.status}</i></header>
          <div className="project-dossier__lead"><div><span className="eyebrow">{project.tagline}</span><h2>{project.title}</h2></div><strong>{project.resultMetric.startsWith("TODO:") ? "Result pending" : project.resultMetric}</strong></div>
          <div className="project-dossier__body">
            <section className="dossier-architecture"><span>BUILD TRACE</span><ol><li><i>01</i>Problem framing</li><li><i>02</i>System build</li><li><i>03</i>Measured result</li><li><i>04</i>Proof to publish</li></ol></section>
            <dl className="dossier-details"><div><dt>Problem</dt><dd>{project.problem}</dd></div><div><dt>What I built</dt><dd>{project.built}</dd></div><div><dt>Result</dt><dd>{isTodo(project.result) ? "Measured result pending." : project.result}</dd></div><div><dt>Baseline</dt><dd>{isTodo(project.resultBaseline) ? "Baseline pending documentation." : project.resultBaseline}</dd></div></dl>
          </div>
          <footer className="project-dossier__footer"><div>{project.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="project-link-row"><a href={project.caseStudyUrl}>Case study <ArrowUpRight size={14} /></a>{!isTodo(project.repoUrl) && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">Repo <ExternalLink size={14} /></a>}{!isTodo(project.demoUrl) && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live demo <ExternalLink size={14} /></a>}{!isTodo(project.paperUrl) && <a href={project.paperUrl} target="_blank" rel="noopener noreferrer">Paper <FileText size={14} /></a>}</div></footer>
        </article>)}
      </section>
    </main>
  );
}
