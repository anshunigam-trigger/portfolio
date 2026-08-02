"use client";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";


import { Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="contact-band">
            <div>
              <p className="section-kicker">04 / contact</p>
              <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">
                Let us build something that survives beyond the demo.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-mist">
                Open to AI/ML internships, placement conversations, research collaboration, and full-stack product work.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <motion.a whileHover={{ y: -4 }} whileTap={{ scale: 0.97 }} href="mailto:nigamanshu188@gmail.com" className="group inline-flex items-center gap-2 rounded-md bg-signal px-5 py-3 font-mono text-sm font-semibold text-void transition-colors hover:bg-[#8affdf]">
                <Mail size={16} />
                nigamanshu188@gmail.com
                <Send size={14} className="transition-transform group-hover:translate-x-0.5" />
              </motion.a>
              <motion.a whileHover={{ y: -4 }} whileTap={{ scale: 0.97 }} href="https://github.com/anshunigam-trigger" target="_blank" rel="noreferrer" className="button-secondary">
                <FaGithub size={16} /> GitHub
              </motion.a>
              <motion.a whileHover={{ y: -4 }} whileTap={{ scale: 0.97 }} href="https://linkedin.com/in/anshu-nigam" target="_blank" rel="noreferrer" className="button-secondary">
                <FaLinkedinIn size={16} /> LinkedIn
              </motion.a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
