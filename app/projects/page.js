import { ArrowUpRight, ExternalLink, FileText } from "lucide-react";
import { featuredProjects } from "../../src/constants/cleanSite";
import { isTodo } from "../../data/projects";
import { PageNav } from "../../src/components/PageNav";

export const metadata = { title: "Projects", description: "Evidence-led AI/ML and backend projects by Anshu Nigam." };

export default function ProjectsPage() {
  return (
    <main className="subpage">
      <PageNav current="projects" actionHref="/" actionLabel="Back home" />
      <section className="subpage-hero"><span>PROJECTS / CASE STUDIES</span><h1>Project work, with <em>the proof attached.</em></h1><p>Three projects organized around the problem, the build, the result, and the next piece of evidence to publish.</p></section>
      <section className="project-dossiers" aria-label="Project case studies">
        {featuredProjects.map((project) => <article className="project-dossier" key={project.id}>
          <header className="project-dossier__header"><span>{String(project.order).padStart(2, "0")}</span><i>{project.status}</i></header>
          <div className="project-dossier__lead"><div><span className="eyebrow">{project.tagline}</span><h2>{project.title}</h2></div><strong>{project.resultMetric.startsWith("TODO:") ? "Result pending" : project.resultMetric}</strong></div>
          <div className="project-dossier__body"><div className="dossier-details"><div><dt>Problem</dt><dd>{project.problem}</dd></div><div><dt>What I built</dt><dd>{project.built}</dd></div><div><dt>Result</dt><dd>{isTodo(project.result) ? "Measured result pending." : project.result}</dd></div><div><dt>Baseline</dt><dd>{isTodo(project.resultBaseline) ? "Baseline pending documentation." : project.resultBaseline}</dd></div></div></div>
          <footer className="project-dossier__footer"><div>{project.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="project-link-row"><a href={project.caseStudyUrl}>Case study <ArrowUpRight size={14} /></a>{!isTodo(project.repoUrl) && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">Repo <ExternalLink size={14} /></a>}{!isTodo(project.demoUrl) && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live demo <ExternalLink size={14} /></a>}{!isTodo(project.paperUrl) && <a href={project.paperUrl} target="_blank" rel="noopener noreferrer">Paper <FileText size={14} /></a>}</div></footer>
        </article>)}
      </section>
    </main>
  );
}
