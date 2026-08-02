import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../src/constants/site";

export const metadata = { title: "Projects", description: "Selected AI/ML, backend, research, and product projects by Anshu Nigam." };

export default function ProjectsPage() {
  return <main className="subpage"><header className="subpage-nav"><Link href="/" className="brand"><span className="brand-glyph" />Anshu Nigam</Link><Link href="/#contact">Start a conversation <ArrowUpRight size={14} /></Link></header><section className="subpage-hero"><span>ARCHIVE / 06 SYSTEMS</span><h1>A portfolio of <em>working intelligence.</em></h1><p>Each project begins as a practical question and becomes a deliberate system â€” architecture, interaction, and measurable outcome included.</p></section><section className="archive-grid">{projects.map((project) => <article key={project.slug} style={{ "--accent": project.accent }}><header><span>{project.id}</span><i>{project.status}</i></header><div className="archive-orb" /><span>{project.eyebrow}</span><h2>{project.name}</h2><p>{project.blurb}</p><strong>{project.metric}</strong><footer><div>{project.stack.map((item) => <small key={item}>{item}</small>)}</div><a href={project.links.github} target="_blank" rel="noreferrer">Source <FaGithub size={14} /></a></footer></article>)}</section></main>;
}
