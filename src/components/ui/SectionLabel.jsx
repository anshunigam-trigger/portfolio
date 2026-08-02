import { cn } from "../../lib/utils";

export function SectionLabel({ index, children, className }) {
  return (
    <div className={cn("mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-cyan-200/80", className)}>
      <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-2.5 py-1 text-cyan-200">{index}</span>
      <span>{children}</span>
    </div>
  );
}
