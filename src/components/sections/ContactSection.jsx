"use client";

import { useState } from "react";
import { Check, Copy, Mail, Send, Sparkles } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { siteProfile } from "../../constants/site";
import { Magnetic } from "../animations/Magnetic";
import { Reveal } from "../animations/Reveal";
import { SectionLabel } from "../ui/SectionLabel";

const defaultForm = { name: "", email: "", message: "" };

export function ContactSection() {
  const [form, setForm] = useState(defaultForm);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const valid = form.name.trim().length > 1 && /^\S+@\S+\.\S+$/.test(form.email) && form.message.trim().length > 8;
  const update = (event) => { setSubmitted(false); setForm((current) => ({ ...current, [event.target.name]: event.target.value })); };
  const submit = (event) => {
    event.preventDefault();
    if (!valid) return;
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nReply to: ${form.email}`);
    window.location.href = `mailto:${siteProfile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(siteProfile.email); setCopied(true); window.setTimeout(() => setCopied(false), 1800); } catch { setCopied(false); }
  };
  return (
    <section id="contact" className="section-pad contact-section">
      <div className="container contact-grid">
        <Reveal className="section-heading contact-copy">
          <SectionLabel index="08" label="Open channel" />
          <h2>Have an ambitious system in mind? <em>Let’s make it real.</em></h2>
          <p><Balancer>I’m interested in AI/ML, backend, and product engineering work where craft and technical depth share the same brief.</Balancer></p>
          <button type="button" className="email-copy" onClick={copyEmail}><Mail size={16} /><span>{siteProfile.email}</span>{copied ? <Check size={15} /> : <Copy size={15} />}</button>
        </Reveal>
        <Reveal delay={0.12} className="contact-form-shell">
          <div className="contact-form-orb" aria-hidden="true" />
          {submitted ? <motion.div className="contact-success" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}><span><Check size={20} /></span><h3>Your mail client is ready.</h3><p>The message has been prepared with your details. I’ll reply as soon as I can.</p><button type="button" onClick={() => { setSubmitted(false); setForm(defaultForm); }}>Send another note</button></motion.div> : <form onSubmit={submit} noValidate>
            <label><span>Name</span><input name="name" value={form.name} onChange={update} placeholder="Your name" autoComplete="name" /></label>
            <label><span>Email</span><input name="email" value={form.email} onChange={update} placeholder="you@company.com" autoComplete="email" inputMode="email" /></label>
            <label><span>What are we building?</span><textarea name="message" value={form.message} onChange={update} placeholder="A little context goes a long way." rows={4} /></label>
            <Magnetic><button className="contact-submit" type="submit" disabled={!valid}>Start the conversation <Send size={16} /></button></Magnetic>
            <p className="contact-validation"><Sparkles size={13} /> {valid ? "Ready to send" : "Add your details and a short message to unlock send."}</p>
          </form>}
        </Reveal>
      </div>
    </section>
  );
}
