"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, ExternalLink, ShieldCheck } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { certificates, githubStats, leetcodeStats, siteProfile } from "../../constants/site";
import { Reveal } from "../animations/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

function StatBlock({ label, value }) {
  return <div className="proof-stat"><span>{label}</span><strong>{value}</strong></div>;
}

export function CredentialsSection({ github }) {
  const totalRepos = github?.public_repos ?? "—";
  const followers = github?.followers ?? "—";
  const totalStars = github?.stars ?? "—";
  return (
    <section id="proof" className="section-pad credentials-section">
      <div className="container">
        <Reveal className="section-heading credentials-heading">
          <SectionLabel index="07" label="Proof of practice" />
          <h2>Signals that make the <em>work legible.</em></h2>
          <p><Balancer>Proof matters when it is connected to how you work: shared code, focused practice, and a record of building across disciplines.</Balancer></p>
        </Reveal>
        <div className="credentials-grid">
          <Reveal delay={0.08} className="credential-deck">
            {certificates.map((certificate, index) => (
              <motion.article key={certificate.title} className="credential-card" style={{ "--card-index": index }} whileHover={{ rotateX: -5, rotateY: 6, y: -10 }} transition={{ type: "spring", damping: 18, stiffness: 220 }}>
                <div className="credential-card__stamp"><Award size={18} /><span>AN</span></div>
                <span className="credential-card__number">0{index + 1}</span>
                <h3>{certificate.title}</h3><p>{certificate.detail}</p>
                <footer><BadgeCheck size={15} />{certificate.issuer}</footer>
              </motion.article>
            ))}
          </Reveal>
          <Reveal delay={0.16} className="open-source-panel">
            <div className="open-source-panel__top"><div><span>GITHUB / LIVE PROFILE</span><h3>{github?.name || "Anshu Nigam"}</h3></div><a href={siteProfile.github} target="_blank" rel="noreferrer" aria-label="Open GitHub profile"><ExternalLink size={17} /></a></div>
            <div className="github-stats"><StatBlock label="Public repos" value={totalRepos} /><StatBlock label="Followers" value={followers} /><StatBlock label="Stars (public)" value={totalStars} /></div>
            <div className="contribution-grid" aria-label="Contribution-style activity pattern">{Array.from({ length: 70 }, (_, index) => <i key={index} style={{ "--level": ((index * 17 + 11) % 5) + 1 }} />)}</div>
            <div className="github-focus">{githubStats.map((stat) => <span key={stat.label}><small>{stat.label}</small>{stat.value}</span>)}</div>
          </Reveal>
          <Reveal delay={0.23} className="practice-panel">
            <div className="practice-panel__mark"><ShieldCheck size={19} /></div><span>PROBLEM-SOLVING / CONTINUOUS</span><h3>Deliberate practice is part of the build loop.</h3><p>Applied problem-solving alongside systems work — patterns, data structures, state, and tradeoff awareness.</p>
            <div>{leetcodeStats.map((stat) => <span key={stat.label}><small>{stat.label}</small><strong>{stat.value}</strong></span>)}</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

