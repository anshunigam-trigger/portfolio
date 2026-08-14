import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ArrowUpRight, Download, GraduationCap, Mail, MapPin, Sparkles } from "lucide-react";
import { PageNav } from "../../src/components/PageNav";
import { siteProfile, skills, timeline } from "../../src/constants/site";

export const metadata = {
  title: "About",
  description: "Background, technical focus, and working principles of Anshu Nigam.",
};

const skillGroups = skills.reduce((groups, skill) => {
  (groups[skill.group] ??= []).push(skill.name);
  return groups;
}, {});

const principles = [
  ["Start with the real constraint", "Clarify the decision, the data, and the person the system is meant to help before choosing the stack."],
  ["Make intelligence inspectable", "Models earn trust when their predictions, assumptions, and limits are easy to understand."],
  ["Finish the product loop", "A useful prototype includes the interface, the backend, and feedback that makes the next iteration obvious."],
];

export default function AboutPage() {
  return (
    <main className="subpage">
      <PageNav current="about" actionHref="/" actionLabel="Back home" />

      <section className="subpage-hero subpage-hero--about">
        <span>PROFILE / 01</span>
        <h1>I build systems that make <em>complexity usable.</em></h1>
        <p>{siteProfile.summary} My work sits where applied machine learning, reliable backend systems, and thoughtful interfaces meet.</p>
        <div className="subpage-actions">
          <a href={siteProfile.resume} download><Download size={15} /> Resume</a>
          <a href={siteProfile.github} target="_blank" rel="noreferrer"><FaGithub size={15} /> GitHub</a>
          <a href={siteProfile.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn size={15} /> LinkedIn</a>
          <a href={`mailto:${siteProfile.email}`}><Mail size={15} /> Email</a>
        </div>
      </section>

      <section className="profile-snapshot" aria-label="Profile at a glance">
        <article>
          <span><GraduationCap size={16} /> Education</span>
          <strong>B.Tech CSE (IoT)</strong>
          <p>IEM Kolkata · 2024–2028 · Current CGPA 8.52</p>
        </article>
        <article>
          <span><Sparkles size={16} /> Focus</span>
          <strong>AI/ML + product engineering</strong>
          <p>From model experimentation to production-ready software systems.</p>
        </article>
        <article>
          <span><MapPin size={16} /> Based in</span>
          <strong>{siteProfile.location}</strong>
          <p>Open to ambitious problems, collaborative teams, and useful work.</p>
        </article>
      </section>

      <section className="profile-section">
        <div className="profile-section__intro">
          <span>HOW I WORK</span>
          <h2>Research, infrastructure, and interface are one conversation.</h2>
          <p>I treat software as a complete system. That means a clear problem, dependable data and services, honest model behavior, and an interaction people can understand at a glance.</p>
        </div>
        <div className="principle-list">
          {principles.map(([title, detail], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{title}</h3><p>{detail}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-section profile-section--split">
        <div>
          <span className="profile-kicker">TRAJECTORY</span>
          <div className="subpage-timeline">
            {timeline.map((item) => (
              <article key={item.year}><b>{item.year}</b><div><h3>{item.title}</h3><p>{item.detail}</p></div></article>
            ))}
          </div>
        </div>
        <div>
          <span className="profile-kicker">TOOLKIT</span>
          <div className="skill-groups">
            {Object.entries(skillGroups).map(([group, groupSkills]) => (
              <article key={group}><h3>{group}</h3><div>{groupSkills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="subpage-closing">
        <span>LET&apos;S BUILD</span>
        <h2>Have a system worth making clearer, faster, or more useful?</h2>
        <a href={`mailto:${siteProfile.email}`}>Start a conversation <ArrowUpRight size={16} /></a>
      </section>
    </main>
  );
}