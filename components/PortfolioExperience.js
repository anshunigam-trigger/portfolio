"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";


import { useEffect, useState } from "react";
import { ArrowUpRight, Download, Mail, Menu, Send, Sparkles, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import SmoothScroll from "./SmoothScroll";
import { metrics, otherWork, projects, stackLayers } from "../data/projects";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Contact", href: "/#contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 px-4 py-4 transition-all ${scrolled ? "bg-void/80 backdrop-blur-xl" : "bg-transparent"}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-5 rounded-2xl border border-hairline/70 bg-panel/70 px-4 py-3 text-ink shadow-2xl shadow-black/10" aria-label="Main navigation">
        <Link href="/" className="font-mono text-sm tracking-tight">anshu<span className="text-signal">.</span>labs</Link>

        <div className="hidden items-center gap-7 text-sm text-mist md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-ink">{item.label}</a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-md border border-signal/30 bg-signal/10 px-3 py-2 font-mono text-xs uppercase text-signal transition-colors hover:bg-signal/15">
            <Download size={14} /> Resume
          </a>
        </div>

        <button className="rounded-md border border-hairline p-2 md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 flex max-w-6xl flex-col rounded-2xl border border-hairline bg-panel p-3 text-ink md:hidden">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-hairline/60 px-2 py-3 text-sm text-mist last:border-b-0">
              {item.label}<ArrowUpRight size={16} />
            </a>
          ))}
          <a href="/resume.pdf" download onClick={() => setOpen(false)} className="flex items-center justify-between px-2 py-3 text-sm text-signal">Resume<Download size={16} /></a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_70%_15%,rgba(79,255,211,0.16),transparent_32%),linear-gradient(135deg,#050608,#0D1117_55%,#111820)] px-6 pt-40 text-ink">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/70 to-transparent" />
      <motion.div className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-6xl flex-col items-start justify-center" initial="hidden" animate="visible">
        <motion.p className="mb-6 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-signal" variants={fadeUp}>
          <Sparkles size={13} /> AI/ML builder ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â· full-stack product engineer
        </motion.p>
        <motion.h1 className="max-w-5xl font-display text-[clamp(4.5rem,13vw,11rem)] font-semibold leading-[0.82] tracking-[-0.09em] text-ink" variants={fadeUp}>
          Anshu Nigam
        </motion.h1>
        <motion.p className="mt-8 max-w-2xl text-lg leading-8 text-mist sm:text-xl" variants={fadeUp}>
          I build deployable machine-learning products, real-time web systems, and research-backed interfaces that are clear enough to use and rigorous enough to trust.
        </motion.p>
        <motion.div className="mt-10 flex flex-wrap items-center gap-4" variants={fadeUp}>
          <a href="/projects" className="inline-flex items-center gap-2 rounded-md bg-signal px-5 py-3 font-mono text-sm font-semibold text-void shadow-[0_0_42px_rgba(79,255,211,0.24)] transition hover:bg-[#8affdf]">
            More Projects <ArrowUpRight size={17} />
          </a>
          <a href="/about" className="inline-flex items-center gap-2 rounded-md border border-hairline bg-panel/80 px-5 py-3 font-mono text-sm text-ink transition hover:border-signal/50">About Me</a>
          <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-md border border-hairline bg-panel/80 px-5 py-3 font-mono text-sm text-ink transition hover:border-signal/50"><Download size={16} /> Resume</a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Approach() {
  const principles = [
    ["01", "Turn ambiguity into a system.", "Start with the sharpest useful question, then design a path from raw signal to a clear decision."],
    ["02", "Make intelligence legible.", "The model matters; so does a product that lets real people understand, test, and trust it."],
    ["03", "Ship the whole loop.", "Prototype, interface, deployment, and iteration belong to the same product loop."],
  ];

  return (
    <section id="about-preview" className="bg-panel2 px-6 py-28 text-ink">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">01 / About</p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">Production-minded AI/ML work.</h2>
          <p className="mt-6 text-base leading-8 text-mist">B.Tech CSE (IoT) student at IEM Kolkata, focused on useful AI systems, full-stack interfaces, and experiments that can be opened, tested, and improved.</p>
          <a href="/about" className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-signal">Read About <ArrowUpRight size={16} /></a>
        </div>
        <div className="grid gap-4">
          {principles.map(([number, title, copy]) => (
            <article key={number} className="rounded-xl border border-hairline bg-panel/70 p-6">
              <span className="font-mono text-xs text-signal">{number}</span>
              <h3 className="mt-5 font-display text-2xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-mist">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="bg-void px-6 py-28 text-ink">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">02 / Selected work</p>
        <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">Projects with signal, metrics, and live-system thinking.</h2>
          <a href="/projects" className="inline-flex items-center gap-2 rounded-md border border-signal/30 bg-signal/10 px-4 py-3 font-mono text-sm text-signal transition hover:bg-signal/15">More Projects <ArrowUpRight size={16} /></a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.slice(0, 6).map((project) => (
            <article key={project.id} className="group rounded-xl border border-hairline bg-panel/70 p-6 transition hover:-translate-y-1 hover:border-signal/40">
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-xs text-mist">{project.id}</span>
                <span className="rounded border border-signal/30 bg-signal/10 px-2 py-1 font-mono text-[10px] text-signal">{project.status}</span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-semibold">{project.name}</h3>
              <p className="mt-3 text-sm leading-7 text-mist">{project.blurb}</p>
              <div className="mt-5 inline-flex rounded-md border border-hairline bg-void/70 px-3 py-2 font-mono text-xs text-signal">{project.metric}</div>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => <span key={item} className="rounded border border-hairline px-2.5 py-1 font-mono text-[11px] text-mist">{item}</span>)}
              </div>
              {project.links.github && <a href={project.links.github} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-mist transition hover:text-signal"><FaGithub size={14} /> source</a>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricsAndCapabilities() {
  return (
    <section id="capabilities" className="bg-panel2 px-6 py-28 text-ink">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">03 / Capabilities</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-xl border border-hairline bg-panel/70 p-5">
              <strong className="font-display text-4xl text-signal">{metric.value}</strong>
              <p className="mt-3 text-sm leading-6 text-mist">{metric.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stackLayers.map((layer) => (
            <article key={layer.label} className="rounded-xl border border-hairline bg-panel/70 p-5">
              <h3 className="font-display text-xl font-semibold">{layer.label}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {layer.items.map((item) => <span key={item} className="rounded border border-hairline px-2 py-1 font-mono text-[11px] text-mist">{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <footer id="contact" className="bg-[#111738] px-6 py-24 text-ink">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">The next useful thing</p>
        <h2 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-none tracking-tight sm:text-7xl">Have a difficult problem? LetÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢s give it a shape.</h2>
        <div className="mt-10 flex flex-wrap gap-4">
          <a className="inline-flex items-center gap-2 rounded-md bg-signal px-5 py-3 font-mono text-sm font-semibold text-void" href="mailto:nigamanshu188@gmail.com">Start a conversation <Send size={17} /></a>
          <a className="inline-flex items-center gap-2 rounded-md border border-hairline px-5 py-3 font-mono text-sm text-ink" href="https://github.com/anshunigam-trigger" target="_blank" rel="noreferrer">See the code <ArrowUpRight size={16} /></a>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-hairline pt-6 font-mono text-xs text-mist sm:flex-row">
          <span>ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© 2026 Anshu Nigam</span>
          <div className="flex gap-4">
            <a href="https://github.com/anshunigam-trigger" target="_blank" rel="noreferrer" className="hover:text-signal"><FaGithub size={16} /></a>
            <a href="https://linkedin.com/in/anshu-nigam" target="_blank" rel="noreferrer" className="hover:text-signal"><FaLinkedinIn size={16} /></a>
            <a href="mailto:nigamanshu188@gmail.com" className="hover:text-signal"><Mail size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function PortfolioExperience() {
  return (
    <main className="bg-void">
      <SmoothScroll />
      <Navigation />
      <Hero />
      <Approach />
      <Work />
      <MetricsAndCapabilities />
      <Closing />
    </main>
  );
}
