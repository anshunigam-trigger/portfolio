import { ExternalLink, GitBranch } from "lucide-react";
import { siteProfile } from "../../constants/cleanSite";
import { Reveal } from "../animations/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

export function CredentialsSection({ github }) {
  if (!github) return null;
  return (
    <section id="github" className="section-pad credentials-section" aria-labelledby="github-heading">
      <div className="container">
        <Reveal className="section-heading credentials-heading"><SectionLabel index="06" label="Open source" /><h2 id="github-heading">Code you can <em>inspect.</em></h2><p>Selected public repositories and the implementation record behind the portfolio.</p></Reveal>
        <Reveal className="open-source-panel" delay={0.08}>
          <div className="open-source-panel__top"><div><span>GITHUB / LIVE PROFILE</span><h3>{github.name}</h3></div><a href={siteProfile.github} target="_blank" rel="noopener noreferrer" aria-label="Open GitHub profile"><ExternalLink size={17} /></a></div>
          <div className="github-stats"><div className="proof-stat"><span>Public repos</span><strong>{github.public_repos}</strong></div><div className="proof-stat"><span>Stars on public repos</span><strong>{github.stars}</strong></div></div>
          <div className="github-repos">{github.repos?.slice(0, 4).map((repo) => <a key={repo.name} href={repo.html_url} target="_blank" rel="noopener noreferrer"><GitBranch size={15} /><span><strong>{repo.name}</strong><small>{repo.description || repo.language || "Public repository"}</small></span><ExternalLink size={14} /></a>)}</div>
        </Reveal>
      </div>
    </section>
  );
}
