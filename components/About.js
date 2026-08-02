import ScrollReveal from "./ScrollReveal";

const profile = [
  ["Institution", "IEM Kolkata"],
  ["Program", "B.Tech CSE - IoT"],
  ["Batch", "2024 - 2028"],
  ["CGPA", "8.52"],
  ["Direction", "AI/ML + product engineering"],
];

const principles = ["Deployable outcomes", "Explainable models", "Fast feedback loops", "Interface polish"];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden border-b border-hairline/70 bg-panel/25 px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <ScrollReveal>
          <p className="section-kicker">01 / about</p>
          <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">
            Second-year student, production-minded builder.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-mist">
            I work at the intersection of AI/ML and full-stack systems: AutoML platforms, fraud-detection dashboards,
            reinforcement-learning experiments for fog computing, and real-time web apps. The standard is simple: build things
            that can be opened, tested, and improved.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {principles.map((item, index) => (
              <div key={item} className="principle-row">
                <span>0{index + 1}</span>
                {item}
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="profile-panel">
            <div className="profile-panel__top">
              <span className="font-mono text-xs uppercase text-signal">profile matrix</span>
              <span className="h-2 w-2 rounded-full bg-ember shadow-[0_0_18px_rgba(255,184,77,0.8)]" />
            </div>
            <div className="divide-y divide-hairline/70">
              {profile.map(([key, value]) => (
                <div key={key} className="flex justify-between gap-6 py-4 font-mono text-sm">
                  <span className="text-mist">{key}</span>
                  <span className="text-right text-ink">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

