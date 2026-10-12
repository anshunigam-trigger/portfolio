"use client";

import { useEffect, useRef } from "react";

export function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const context = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const points = Array.from({ length: 36 }, (_, index) => ({ x: (index * 37) % 100, y: (index * 61) % 100, dx: ((index % 3) - 1) * 0.012, dy: ((index % 5) - 2) * 0.009 }));
    let frame = 0;
    let last = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };
    const draw = (time = 0) => {
      const { width, height } = canvas.getBoundingClientRect();
      context.clearRect(0, 0, width, height);
      for (const point of points) {
        const x = (point.x / 100) * width;
        const y = (point.y / 100) * height;
        context.fillStyle = "rgba(151,237,255,0.55)";
        context.beginPath();
        context.arc(x, y, 1.45, 0, Math.PI * 2);
        context.fill();
      }
      for (let index = 0; index < points.length; index += 1) {
        for (let next = index + 1; next < points.length; next += 1) {
          const a = points[index];
          const b = points[next];
          const dx = ((a.x - b.x) / 100) * width;
          const dy = ((a.y - b.y) / 100) * height;
          if (Math.hypot(dx, dy) > Math.min(width, height) * 0.22) continue;
          context.strokeStyle = "rgba(102,227,255,0.11)";
          context.beginPath();
          context.moveTo((a.x / 100) * width, (a.y / 100) * height);
          context.lineTo((b.x / 100) * width, (b.y / 100) * height);
          context.stroke();
        }
      }
      if (!reduceMotion.matches && document.visibilityState === "visible") {
        points.forEach((point) => { point.x = (point.x + point.dx + 100) % 100; point.y = (point.y + point.dy + 100) % 100; });
        frame = requestAnimationFrame((nextTime) => { if (nextTime - last > 33) { last = nextTime; draw(nextTime); } else frame = requestAnimationFrame(draw); });
      }
    };
    const onVisibility = () => { if (document.visibilityState === "visible") { cancelAnimationFrame(frame); draw(); } else cancelAnimationFrame(frame); };
    const onMotionChange = () => { cancelAnimationFrame(frame); draw(); };
    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    reduceMotion.addEventListener?.("change", onMotionChange);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); document.removeEventListener("visibilitychange", onVisibility); reduceMotion.removeEventListener?.("change", onMotionChange); };
  }, []);

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />;
}
