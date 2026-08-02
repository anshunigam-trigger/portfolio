import ScrollReveal from "./ScrollReveal";
import ProjectCard from "./ProjectCard";
import { otherWork, projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="work" className="relative overflow-hidden px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="section-kicker">02 / selected work</p>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">
              Projects with signal, metrics, and live-system thinking.
            </h2>
            <p className="max-w-sm text-sm leading-7 text-mist">
              A portfolio should feel built, not assembled. These experiments turn ML notebooks and web ideas into usable interfaces.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 70}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={180}>
          <div className="mt-8 overflow-hidden border-y border-hairline/70 py-4">
            <div className="marquee-track">
              {[...otherWork, ...otherWork].map((work, index) => (
                <span key={`${work.name}-${index}`} className="marquee-pill">
                  <span className="text-ink">{work.name}</span>
                  <span className="text-mist">{work.stack}</span>
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
