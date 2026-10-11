import Image from "next/image";
import { ArrowUpRight, ExternalLink, FileText } from "lucide-react";
import { featuredProjects } from "../../../src/constants/cleanSite";
import { isTodo } from "../../../data/projects";
import { PageNav } from "../../../src/components/PageNav";

export function generateStaticParams() { return featuredProjects.map((project) => ({ id: project.id })); }

export async function generateMetadata({ params }) {
  const project = featuredProjects.find((item) => item.id === params.id);
  return project ? { title: project.title, description: project.problem } : { title: "Project" };
}

export default async function ProjectPage({ params }) {
  const project = featuredProjects.find((item) => item.id === params.id);
  if (!project) return <main className="subpage"><PageNav actionHref="/projects" actionLabel="Back to projects" /><section className="subpage-hero"><h1>Project not found.</h1></section></main>;
  const mediaReady = project.mediaUrl && !isTodo(project.mediaUrl);
  return (
    <main className="subpage">
      <PageNav current="projects" actionHref="/projects" actionLabel="Back to projects" />
      <article className="project-detail">
        <header className="subpage-hero"><span>{project.status} / {project.tagline}</span><h1>{project.title}</h1><p>{project.problem}</p></header>
        <div className="detail-facts"><div><span>Result</span><strong>{project.result}</strong></div><div><span>Baseline</span><strong>{isTodo(project.resultBaseline) ? "Pending documentation" : project.resultBaseline}</strong></div><div><span>Stack</span><strong>{project.stack.join(" · ")}</strong></div></div>
        {mediaReady && <figure className="detail-media"><Image src={project.mediaUrl} alt={`${project.title} proof`} width={1200} height={675} loading="lazy" /></figure>}
        <div className="detail-grid"><section><span>01 / Problem</span><h2>Why this needed to exist</h2><p>{project.problem}</p></section><section><span>02 / Approach</span><h2>What I built</h2><p>{project.built}</p></section><section><span>03 / Architecture</span>{isTodo(project.architectureUrl) ? <p>Architecture diagram pending.</p> : <a href={project.architectureUrl} target="_blank" rel="noopener noreferrer">Open architecture diagram <ArrowUpRight size={14} /></a>}</section><section><span>04 / Results</span><h2>{project.resultMetric.startsWith("TODO:") ? "Measured result pending" : project.resultMetric}</h2><p>{isTodo(project.result) ? "Measured result pending." : project.result}</p><p>{isTodo(project.resultBaseline) ? "Baseline comparison pending documentation." : project.resultBaseline}</p></section><section><span>05 / Tradeoffs and next</span>{!isTodo(project.tradeoffs) && <p>{project.tradeoffs}</p>}{!isTodo(project.next) && <p>{project.next}</p>}{isTodo(project.tradeoffs) && isTodo(project.next) && <p>Tradeoffs and next steps will be added with the next research or product update.</p>}</section></div>
        <footer className="detail-links"><span>Links</span><div>{!isTodo(project.repoUrl) && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">Repo <ExternalLink size={14} /></a>}{!isTodo(project.demoUrl) && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live demo <ExternalLink size={14} /></a>}{!isTodo(project.paperUrl) && <a href={project.paperUrl} target="_blank" rel="noopener noreferrer">Paper <FileText size={14} /></a>}</div></footer>
      </article>
    </main>
  );
}
