import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function PageNav({ current, actionHref, actionLabel }) {
  return (
    <header className="subpage-nav">
      <Link href="/" className="brand" aria-label="Anshu Nigam home">
        <span className="brand-glyph" />
        <span>Anshu Nigam</span>
      </Link>
      <nav aria-label="Portfolio pages">
        <Link href="/about" aria-current={current === "about" ? "page" : undefined}>About</Link>
        <Link href="/projects" aria-current={current === "projects" ? "page" : undefined}>Projects</Link>
      </nav>
      <Link href={actionHref} className="subpage-nav__action">
        {actionLabel} <ArrowUpRight size={14} />
      </Link>
    </header>
  );
}