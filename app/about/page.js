import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { siteProfile, skills, timeline } from "../../src/constants/site";

export const metadata = { title: "About", description: "Background, technical posture, and working principles of Anshu Nigam." };

export default function AboutPage() {
  return <main className="subpage"><header className="subpage-nav"><Link href="/" className="brand"><span className="brand-glyph" />Anshu Nigam</Link><Link href="/#work">Selected work <ArrowUpRight size={14} /></Link></header><section className="subpage-hero"><span>PROFILE / 01</span><h1>Engineering is the art of turning <em>complexity into confidence.</em></h1><p>{siteProfile.summary}</p><div><a href={siteProfile.resume} download><Download size={15} /> Resume</a><a href={siteProfile.github} target="_blank" rel="noreferrer"><FaGithub size={15} /> GitHub</a><a href={siteProfile.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn size={15} /> LinkedIn</a><a href={`mailto:${siteProfile.email}`}><Mail size={15} /> Email</a></div></section><section className="subpage-grid"><article><span>WORKING PRINCIPLE</span><h2>Research, infrastructure, and interface are one conversation.</h2><p>I approach ML and software projects as product systems: a clear problem, trustworthy feedback, thoughtful state management, and an interaction people can understand at a glance.</p></article><article><span>CAPABILITY MAP</span><div className="subpage-skills">{skills.map((skill) => <b key={skill.name}>{skill.name}<small>{skill.group}</small></b>)}</div></article></section><section className="subpage-timeline"><span>TRAJECTORY</span>{timeline.map((item) => <article key={item.year}><b>{item.year}</b><div><h3>{item.title}</h3><p>{item.detail}</p></div></article>)}</section></main>;
}
