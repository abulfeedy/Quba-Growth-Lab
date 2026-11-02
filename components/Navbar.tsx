const links = [
  { href: "#why", label: "Why Us" },
  { href: "#proof", label: "Results" },
  { href: "#pricing", label: "Pricing" },
  { href: "#process", label: "Process" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Main"
        className="glass mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6"
      >
        <a href="#top" className="flex items-center gap-2 font-bold tracking-tight">
          <span
            aria-hidden
            className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-emerald-glow to-cyan-glow text-sm font-black text-black"
          >
            Q
          </span>
          <span>
            Quba <span className="text-white/60">Growth Lab</span>
          </span>
        </a>
        <ul className="hidden items-center gap-7 text-sm text-white/70 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#book"
          className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:scale-105 active:scale-95"
        >
          Book Audit
        </a>
      </nav>
    </header>
  );
}
