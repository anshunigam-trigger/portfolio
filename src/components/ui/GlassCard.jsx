import { cn } from "../../lib/utils";

export function GlassCard({ children, className, as: Component = "div" }) {
  return (
    <Component className={cn("relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] shadow-[0_24px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_35%,rgba(102,227,255,0.12))] before:opacity-70", className)}>
      {children}
    </Component>
  );
}
