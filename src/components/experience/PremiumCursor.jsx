"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function PremiumCursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const x = useSpring(useMotionValue(-100), { stiffness: 420, damping: 36, mass: 0.4 });
  const y = useSpring(useMotionValue(-100), { stiffness: 420, damping: 36, mass: 0.4 });
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const frame = window.requestAnimationFrame(() => setEnabled(finePointer && !reduced));
    if (!finePointer || reduced) return () => window.cancelAnimationFrame(frame);

    const move = (event) => {
      x.set(event.clientX - 18);
      y.set(event.clientY - 18);
      dotX.set(event.clientX - 3);
      dotY.set(event.clientY - 3);
    };
    const over = (event) => setActive(Boolean(event.target.closest("a,button,[data-cursor='interactive']")));

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, [dotX, dotY, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div className="cursor-ring" style={{ x, y }} animate={{ scale: active ? 1.7 : 1, opacity: active ? 0.7 : 0.45 }} />
      <motion.div className="cursor-dot" style={{ x: dotX, y: dotY }} animate={{ scale: active ? 0.55 : 1 }} />
    </>
  );
}
