"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export function AnimatedCounter({ value, suffix = "", duration = 950 }) {
  const numeric = Number.parseFloat(value);
  const decimals = value.includes(".") ? value.split(".")[1].length : 0;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || Number.isNaN(numeric)) return;
    let frame = 0;
    const frames = Math.max(1, Math.round(duration / 16));
    const tick = () => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / frames, 3);
      setDisplay(numeric * progress);
      if (frame < frames) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [duration, inView, numeric]);

  return <span ref={ref}>{Number.isNaN(numeric) ? value : display.toFixed(decimals)}{suffix}</span>;
}
