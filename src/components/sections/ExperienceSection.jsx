import { experience } from "../../constants/cleanSite";

export function ExperienceSection() {
  if (!experience.length) return null;
  return (
    <section id="experience" className="section-pad experience-section" aria-labelledby="experience-heading">
      <div className="container">
        <div className="section-heading"><span className="section-label">Experience</span><h2 id="experience-heading">Work that happened, <em>not plans.</em></h2></div>
        <div className="experience-list">{experience.map((item) => <article key={`${item.date}-${item.title}`}><span>{item.date}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div></article>)}</div>
      </div>
    </section>
  );
}
