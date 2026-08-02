"use client";

import { motion } from "framer-motion";
import { metrics } from "../data/projects";

const accents = ["bg-signal", "bg-ember", "bg-coral", "bg-mint"];

export default function StatusBar() {
  return (
    <section className="relative border-b border-hairline/70 bg-panel/35 px-6 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden border-x border-hairline/60 bg-hairline/60 sm:grid-cols-4">
        {metrics.map((metric, index) => (
          <motion.div key={metric.label} whileHover={{ y: -5 }} className="group bg-void/88 px-4 py-5 font-mono sm:px-6">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xl font-semibold text-ink sm:text-2xl">{metric.value}</p>
              <span className={`h-1.5 w-8 rounded-full ${accents[index % accents.length]} opacity-70 transition-all group-hover:w-12`} />
            </div>
            <p className="mt-2 text-[10px] uppercase text-mist">{metric.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

