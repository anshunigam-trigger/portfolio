"use client";

import { BrainCircuit, Code2, Cpu, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { stackLayers } from "../data/projects";

const icons = [Code2, BrainCircuit, Cpu, Wrench];

export default function Skills() {
  return (
    <section id="stack" className="relative overflow-hidden border-y border-hairline/70 bg-panel/25 px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <ScrollReveal>
          <p className="section-kicker">03 / stack</p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">
            A compact stack for shipping intelligent interfaces.
          </h2>
          <div className="skill-orbit mt-10" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {stackLayers.map((layer, index) => {
            const Icon = icons[index] || Code2;
            return (
              <ScrollReveal key={layer.label} delay={index * 70}>
                <motion.div whileHover={{ x: 8 }} className="skill-layer">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-signal/25 bg-signal/10 text-signal">
                      <Icon size={18} />
                    </span>
                    <span className="w-36 shrink-0 font-mono text-xs uppercase text-mist">{layer.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <motion.span key={item} whileHover={{ y: -4, scale: 1.03 }} className="rounded border border-hairline bg-void/45 px-3 py-1.5 font-mono text-xs text-ink">
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

