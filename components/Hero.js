"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";


import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail, MoveUpRight, Sparkles } from "lucide-react";
import Scene3D from "./Scene3D";

const signature = ["AI/ML systems", "Full-stack products", "Research that ships"];
const bootLines = [
  ["whoami", "Anshu Nigam"],
  ["mission", "turn models into useful products"],
  ["status", "open to AI/ML internships and collaborations"],
];

export default function Hero() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 620], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 520], [1, 0.38]);

  return (
    <section id="top" className="hero-shell relative min-h-[92svh] overflow-hidden border-b border-hairline/70">
      <Scene3D />
      <div className="hero-vignette pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-void to-transparent" />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 mx-auto flex min-h-[92svh] w-full max-w-6xl items-center px-6 pb-20 pt-28"
      >
        <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_400px]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-3 py-1.5 font-mono text-[11px] uppercase text-signal"
            >
              <Sparkles size={13} />
              2027 placement track
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl font-semibold leading-[0.94] text-ink sm:text-7xl lg:text-8xl"
            >
              Anshu
              <span className="text-stroke block">Nigam</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 max-w-2xl text-base leading-8 text-mist sm:text-lg"
            >
              B.Tech CSE (IoT) student building deployable AI/ML products,
              real-time web systems, and fog-computing research with the polish
              of a production interface.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                href="#work"
                className="group inline-flex items-center gap-2 rounded-md bg-signal px-5 py-3 font-mono text-sm font-semibold text-void shadow-[0_0_42px_rgba(79,255,211,0.24)] transition-colors hover:bg-[#8affdf]"
              >
                View work
                <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
              </motion.a>
              <motion.a whileHover={{ y: -4 }} whileTap={{ scale: 0.97 }} href="https://github.com/anshunigam-trigger" target="_blank" rel="noreferrer" className="icon-link" aria-label="GitHub">
                <FaGithub size={17} />
              </motion.a>
              <motion.a whileHover={{ y: -4 }} whileTap={{ scale: 0.97 }} href="https://linkedin.com/in/anshu-nigam" target="_blank" rel="noreferrer" className="icon-link" aria-label="LinkedIn">
                <FaLinkedinIn size={17} />
              </motion.a>
              <motion.a whileHover={{ y: -4 }} whileTap={{ scale: 0.97 }} href="mailto:nigamanshu188@gmail.com" className="icon-link" aria-label="Email">
                <Mail size={17} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.46, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3"
            >
              {signature.map((item, index) => (
                <div key={item} className="signal-tile">
                  <span className="font-mono text-[10px] text-mist">0{index + 1}</span>
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, rotateY: -16, y: 30 }}
            animate={{ opacity: 1, rotateY: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="hero-console hidden lg:block"
          >
            <div className="flex items-center justify-between border-b border-hairline/70 px-5 py-4">
              <div className="flex items-center gap-2 font-mono text-xs text-mist">
                <span className="h-2 w-2 rounded-full bg-signal shadow-[0_0_18px_rgba(79,255,211,0.85)]" />
                live profile
              </div>
              <MoveUpRight size={15} className="text-signal" />
            </div>
            <div className="space-y-4 px-5 py-5 font-mono text-sm">
              {bootLines.map(([command, output], index) => (
                <motion.div key={command} initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.55 + index * 0.12, duration: 0.5 }}>
                  <span className="text-signal">$</span> <span className="text-mist">{command}</span>
                  <p className="mt-1 pl-4 text-ink">{output}</p>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-2 border-t border-hairline/70 font-mono text-xs">
              <div className="border-r border-hairline/70 px-5 py-4">
                <p className="text-mist">CGPA</p>
                <p className="mt-1 text-xl text-signal">8.52</p>
              </div>
              <div className="px-5 py-4">
                <p className="text-mist">Focus</p>
                <p className="mt-1 text-xl text-ember">AI/ML</p>
              </div>
            </div>
          </motion.aside>
        </div>
      </motion.div>

      <a href="#about" className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 rounded-full border border-hairline bg-void/60 p-3 text-mist backdrop-blur transition-colors hover:border-signal/50 hover:text-signal sm:inline-flex" aria-label="Next section">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}

