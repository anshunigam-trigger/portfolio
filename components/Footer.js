export default function Footer() {
  return (
    <footer className="border-t border-hairline/70 px-6">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 py-8 font-mono text-xs text-mist sm:flex-row">
        <span>anshu_nigam / Next.js / Three.js / Framer Motion / GSAP / Lenis / AnimeJS</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
