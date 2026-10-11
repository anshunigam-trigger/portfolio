"use client";

import { useEffect, useRef } from "react";
import { ParticleField } from "./ParticleField";

export function AuroraBackground({ children }) {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const move = (event) => {
      element.style.setProperty("--mx", `${(event.clientX / window.innerWidth) * 100}%`);
      element.style.setProperty("--my", `${(event.clientY / window.innerHeight) * 100}%`);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return <div ref={ref} className="site-shell"><div className="aurora-bg" aria-hidden="true"><ParticleField /><div className="aurora-bg__orb aurora-bg__orb--a" /><div className="aurora-bg__orb aurora-bg__orb--b" /><div className="aurora-bg__orb aurora-bg__orb--c" /><div className="aurora-bg__grid" /><div className="aurora-bg__spotlight" /></div>{children}</div>;
}
