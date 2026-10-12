"use client";

import { useRef } from "react";

// A small React Bits-style spotlight primitive. It keeps the interaction local
// to the card and avoids adding another animation dependency to the homepage.
export function SpotlightCard({ as: Component = "div", children, className = "", ...props }) {
  const ref = useRef(null);

  const updateSpotlight = (event) => {
    const element = ref.current;
    if (!element) return;
    const bounds = element.getBoundingClientRect();
    element.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`);
    element.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <Component
      ref={ref}
      className={`spotlight-card ${className}`}
      onPointerMove={updateSpotlight}
      {...props}
    >
      <span className="spotlight-card__glow" aria-hidden="true" />
      {children}
    </Component>
  );
}
