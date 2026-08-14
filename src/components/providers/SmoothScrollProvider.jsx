"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const NAV_OFFSET = 96;
const easeOutExpo = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

function getScrollTarget(hash) {
  if (!hash || hash === "#" || hash === "#top") return { target: 0, hash: "#hero" };
  const target = document.getElementById(decodeURIComponent(hash.slice(1)));
  return target ? { target, hash } : null;
}

function updateHash(hash) {
  const nextUrl = `${window.location.pathname}${window.location.search}${hash}`;
  if (window.location.hash === hash) {
    window.history.replaceState(null, "", nextUrl);
    return;
  }
  window.history.pushState(null, "", nextUrl);
}

export function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenis;

    const scrollToHash = (hash, options = {}) => {
      const resolved = getScrollTarget(hash);
      if (!resolved) return;

      const { target, hash: nextHash } = resolved;
      if (options.updateHash !== false) updateHash(nextHash);

      if (reduced || !lenis) {
        const top = target === 0 ? 0 : target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
        window.scrollTo({ top: Math.max(0, top), behavior: reduced || options.immediate ? "auto" : "smooth" });
        return;
      }

      lenis.scrollTo(target, {
        offset: target === 0 ? 0 : -NAV_OFFSET,
        immediate: Boolean(options.immediate),
        duration: 0.82,
        easing: easeOutExpo,
        lock: false,
        force: true,
      });
    };

    const onAnchorClick = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target instanceof Element ? event.target : null;
      const anchor = target?.closest("a[href]");
      if (!anchor || anchor.hasAttribute("download")) return;

      const url = new URL(anchor.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) return;

      event.preventDefault();
      scrollToHash(url.hash);
    };

    window.__portfolioScrollTo = scrollToHash;
    document.addEventListener("click", onAnchorClick);

    if (reduced) {
      return () => {
        document.removeEventListener("click", onAnchorClick);
        delete window.__portfolioScrollTo;
      };
    }

    lenis = new Lenis({
      lerp: 0.13,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      overscroll: false,
    });

    window.__portfolioLenis = lenis;

    let raf = 0;
    const frame = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    const resize = () => lenis.resize();
    window.addEventListener("resize", resize);

    if (window.location.hash) {
      requestAnimationFrame(() => scrollToHash(window.location.hash, { immediate: true, updateHash: false }));
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("click", onAnchorClick);
      delete window.__portfolioScrollTo;
      delete window.__portfolioLenis;
      lenis.destroy();
    };
  }, []);

  return children;
}