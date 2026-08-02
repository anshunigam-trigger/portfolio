import { ArrowUpRight } from "lucide-react";
import { cn } from "../../lib/utils";

const variants = {
  primary: "bg-white text-black shadow-[0_0_45px_rgba(102,227,255,0.28)] hover:bg-cyan-100",
  ghost: "border border-white/12 bg-white/[0.04] text-white hover:border-cyan-300/50 hover:bg-cyan-300/10",
};

export function ButtonLink({ href, children, variant = "primary", className, download, target }) {
  return (
    <a href={href} download={download} target={target} rel={target === "_blank" ? "noreferrer" : undefined} data-cursor="interactive" className={cn("group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300", variants[variant], className)}>
      {children}
      <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}
