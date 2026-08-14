"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navItems, siteProfile } from "../../constants/site";
import { Magnetic } from "../animations/Magnetic";

const sectionHrefs = ["#hero", ...navItems.map((item) => item.href).filter((href) => href.startsWith("#"))];
const NAV_OFFSET = 96;

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(sectionHrefs[0] ?? "#hero");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 20);

      let current = sectionHrefs[0] ?? "#hero";
      for (const href of sectionHrefs) {
        const section = document.getElementById(href.slice(1));
        if (section && section.getBoundingClientRect().top <= NAV_OFFSET + 36) current = href;
      }
      setActiveHref(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function handleNavClick(event, href) {
    setOpen(false);
    if (!href.startsWith("#")) return;

    event.preventDefault();
    setActiveHref(href);

    if (typeof window.__portfolioScrollTo === "function") {
      window.__portfolioScrollTo(href);
      return;
    }

    const target = document.getElementById(href.slice(1));
    if (!target) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.history.pushState(null, "", href);
    window.scrollTo({ top: Math.max(0, top), behavior: reduced ? "auto" : "smooth" });
  }

  return (
    <header className={`nav-shell ${scrolled ? "nav-shell--scrolled" : ""} ${open ? "nav-shell--open" : ""}`}>
      <nav className="nav-panel" aria-label="Main navigation">
        <a href="#hero" className="brand" data-cursor="interactive" aria-label="Anshu Nigam home" onClick={(event) => handleNavClick(event, "#hero")}>
          <span className="brand-glyph" />
          <span>Anshu Nigam</span>
        </a>
        <div className="nav-links">
          {navItems.map((item) => <a key={item.href} href={item.href} className={`nav-link ${activeHref === item.href ? "is-active" : ""}`} aria-current={activeHref === item.href ? "page" : undefined} onClick={(event) => handleNavClick(event, item.href)}>{item.label}</a>)}
        </div>
        <Magnetic className="nav-resume-wrap">
          <a href={siteProfile.resume} download className="nav-resume" data-cursor="interactive"><Download size={14} /> Resume</a>
        </Magnetic>
        <button type="button" className="nav-toggle" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>{open ? <X size={18} /> : <Menu size={18} />}</button>
      </nav>
      {open && (
        <div className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => <a key={item.href} href={item.href} className={`nav-link ${activeHref === item.href ? "is-active" : ""}`} aria-current={activeHref === item.href ? "page" : undefined} onClick={(event) => handleNavClick(event, item.href)}>{item.label}</a>)}
          <a href={siteProfile.resume} download onClick={() => setOpen(false)}>Resume</a>
        </div>
      )}
    </header>
  );
}