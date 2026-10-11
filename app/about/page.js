import { ArrowUpRight, Download, Mail } from "lucide-react";
import { PageNav } from "../../src/components/PageNav";
import { siteProfile } from "../../src/constants/cleanSite";

export const metadata = { title: "About", description: "About Anshu Nigam, a third-year CSE student in Kolkata." };

export default function AboutPage() {
  return (
    <main className="subpage">
      <PageNav current="about" actionHref="/" actionLabel="Back home" />
      <section className="subpage-hero"><span>ABOUT / ANSHU NIGAM</span><h1>Building ML systems that people can <em>inspect.</em></h1><p>{siteProfile.summary}</p><div className="subpage-actions"><a href={siteProfile.resume} target="_blank" rel="noopener noreferrer"><Download size={15} /> Resume</a><a href={siteProfile.github} target="_blank" rel="noopener noreferrer"><ArrowUpRight size={15} /> GitHub</a><a href={siteProfile.linkedin} target="_blank" rel="noopener noreferrer"><ArrowUpRight size={15} /> LinkedIn</a><a href={`mailto:${siteProfile.email}`}><Mail size={15} /> Email</a></div></section>
      <section className="profile-snapshot"><article><span>Education</span><strong>B.Tech CSE (IoT)</strong><p>Institute of Engineering and Management, Kolkata</p></article><article><span>Dates</span><strong>2024 to 2028</strong><p>Currently in the third year.</p></article><article><span>Focus</span><strong>SWE and AI/ML internships</strong><p>Based in {siteProfile.location}.</p></article></section>
    </main>
  );
}
