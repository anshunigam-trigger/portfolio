"use client";

import { useState } from "react";
import { Code2 } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const links = [
  { href: "#about", label: "about" },
  { href: "#work", label: "work" },
  { href: "#stack", label: "stack" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 18));

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-hairline/80 bg-void/78 backdrop-blur-xl" : "border-b border-transparent bg-transparent"}`}>
      <motion.div className="absolute left-0 top-0 h-[2px] w-full origin-left bg-signal" style={{ scaleX: scrollYProgress }} />
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-6 py-4">
        <a href="#top" className="group inline-flex items-center gap-3 font-mono text-sm text-ink">
          <span className="grid h-8 w-8 place-items-center rounded-md border border-hairline bg-panel/80 text-signal transition-colors group-hover:border-signal/60">
            <Code2 size={16} />
          </span>
          <span className="hidden sm:inline">anshu<span className="text-signal">.</span>nigam</span>
        </a>

        <div className="flex items-center gap-1 rounded-full border border-hairline/70 bg-panel/45 p-1 font-mono text-[11px] text-mist backdrop-blur">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="rounded-full px-3 py-1.5 transition-colors hover:bg-signal/10 hover:text-signal">
              {link.label}
            </a>
          ))}
        </div>

        <a href="mailto:nigamanshu188@gmail.com" className="hidden items-center gap-2 rounded-md border border-signal/30 bg-signal/10 px-3 py-2 font-mono text-[11px] uppercase text-signal transition-colors hover:bg-signal/15 md:inline-flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
          </span>
          available
        </a>
      </nav>
    </header>
  );
}

