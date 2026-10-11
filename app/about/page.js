import { ArrowUpRight, Download, GraduationCap, Mail, MapPin, Sparkles } from "lucide-react";
import { PageNav } from "../../src/components/PageNav";
import { siteProfile, skills, featuredProjects } from "../../src/constants/cleanSite";

export const metadata = { title: "About", description: "About Anshu Nigam, a third-year CSE student in Kolkata." };

const principles = [
  ["Start with the real constraint", "Define the task, the data, and the person who needs to use the result before choosing the stack."],
  ["Make intelligence inspectable", "Use explainability and measurable evaluation when a model's output needs to be reviewed."],
  ["Finish the system around the model", "Pair experiments with APIs and interfaces that make the next decision clear."],
];

const trajectory = [
  { year: "2024–2028", title: "B.Tech CSE (IoT)", detail: "Institute of Engineering and Management, Kolkata." },
  { year: "Current", title: "Applied ML builds", detail: "Fraud detection with SHAP review flows and AutoBench, a no-code AutoML platform in progress." },
  { year: "Research", title: "HARD-RL Fog Load Balancer", detail: "Q-Learning research paper submitted to IJACSA and currently under review." },
];

export default function AboutPage() {
  return (
    <main className="subpage">
      <PageNav current="about" actionHref="/" actionLabel="Back home" />
      <section className="subpage-hero subpage-hero--about">
        <span>PROFILE / 01</span>
        <h1>I build systems that make <em>complexity usable.</em></h1>
        <p>{siteProfile.summary} My work connects applied machine learning, backend systems, and clear interfaces.</p>
        <div className="subpage-actions">
          <a href={siteProfile.resume} target="_blank" rel="noopener noreferrer"><Download size={15} /> Resume</a>
          <a href={siteProfile.github} target="_blank" rel="noopener noreferrer"><ArrowUpRight size={15} /> GitHub</a>
          <a href={siteProfile.linkedin} target="_blank" rel="noopener noreferrer"><ArrowUpRight size={15} /> LinkedIn</a>
          <a href={`mailto:${siteProfile.email}`}><Mail size={15} /> Email</a>
        </div>
      </section>

      <section className="profile-snapshot" aria-label="Profile at a glance">
        <article><span><GraduationCap size={16} /> Education</span><strong>B.Tech CSE (IoT)</strong><p>Institute of Engineering and Management, Kolkata.</p></article>
        <article><span><Sparkles size={16} /> Focus</span><strong>SWE and AI/ML internships</strong><p>ML systems, FastAPI backends, and product interfaces.</p></article>
        <article><span><MapPin size={16} /> Based in</span><strong>{siteProfile.location}</strong><p>Open to winter 2026 internship opportunities.</p></article>
      </section>

      <section className="profile-section">
        <div className="profile-section__intro">
          <span>HOW I WORK</span>
          <h2>Research, infrastructure, and interface are one conversation.</h2>
          <p>I keep the problem, the model behavior, and the user decision visible in the same system. That is the thread across my current projects.</p>
        </div>
        <div className="principle-list">
          {principles.map(([title, detail], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{detail}</p></div></article>)}
        </div>
      </section>

      <section className="profile-section profile-section--split">
        <div>
          <span className="profile-kicker">TRAJECTORY</span>
          <div className="subpage-timeline">
            {trajectory.map((item) => <article key={item.title}><b>{item.year}</b><div><h3>{item.title}</h3><p>{item.detail}</p></div></article>)}
          </div>
        </div>
        <div>
          <span className="profile-kicker">TOOLKIT</span>
          <div className="skill-groups">
            {Object.entries(skills).map(([group, groupSkills]) => <article key={group}><h3>{group}</h3><div>{groupSkills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}
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
