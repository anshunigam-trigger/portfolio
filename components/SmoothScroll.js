"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";
import gsap from "gsap";
import Lenis from "lenis";

export default function SmoothScroll() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const point = useRef({ x: 0, y: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = reducedMotion
      ? null
      : new Lenis({ lerp: 0.075, smoothWheel: true, wheelMultiplier: 0.9 });

    const tick = (time) => lenis?.raf(time * 1000);
    if (lenis) {
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (dot && ring && !reducedMotion) {
      animate([dot, ring], {
        opacity: [0, 1],
        scale: [0.25, 1],
        duration: 700,
        ease: "outExpo",
      });
    }

    let raf = 0;
    const move = (event) => {
      point.current.x = event.clientX;
      point.current.y = event.clientY;
    };

    const render = () => {
      const p = point.current;
      p.rx += (p.x - p.rx) * 0.18;
      p.ry += (p.y - p.ry) * 0.18;
      if (dot) dot.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
      if (ring) ring.style.transform = `translate3d(${p.rx}px, ${p.ry}px, 0)`;
      raf = requestAnimationFrame(render);
    };

    const pulse = () => {
      if (!ring || reducedMotion) return;
      animate(ring, {
        scale: [1, 1.85, 1],
        opacity: [0.7, 0.18, 0.7],
        duration: 520,
        ease: "outCubic",
      });
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerdown", pulse);
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", pulse);
      cancelAnimationFrame(raf);
      if (lenis) {
        gsap.ticker.remove(tick);
        lenis.destroy();
      }
    };
  }, []);

  return (
    <>
      <span ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <span ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
