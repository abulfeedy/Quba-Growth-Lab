const stats = [
  { value: "1,000+", label: "Escrow Users", color: "from-emerald-glow/30" },
  { value: "600+", label: "Month-One Users", color: "from-cyan-glow/30" },
  { value: "400+", label: "E-Commerce Sales", color: "from-violet-glow/30" },
  { value: "17", label: "High-Ticket Solar Conversions", color: "from-emerald-glow/30" },
];

export default function Hero() {
  return (
    <section id="top" className="relative px-4 pb-20 pt-36 sm:px-6 sm:pt-44">
      {/* glow backdrops */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-violet-glow/20 blur-[140px]" />
        <div className="absolute left-[10%] top-[25%] h-72 w-72 animate-float rounded-full bg-emerald-glow/15 blur-[110px]" />
        <div className="absolute right-[8%] top-[18%] h-72 w-72 animate-float rounded-full bg-cyan-glow/15 blur-[110px] [animation-delay:2s]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="glass mx-auto mb-8 inline-flex animate-fadeUp items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-white/80">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-glow opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-glow" />
          </span>
          Now onboarding new growth partners
        </div>

        <h1 className="animate-fadeUp text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl [animation-delay:80ms]">
          Your <span className="gradient-text">Embedded Growth Department</span>{" "}
          for Predictable Scaling.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl animate-fadeUp text-base leading-relaxed text-white/65 sm:text-lg [animation-delay:160ms]">
          We handle paid acquisition, funnel building, AI video creative
          production, and social growth. Built for businesses that want real
          revenue, not vanity metrics.
        </p>

        <div className="mt-10 flex animate-fadeUp flex-col items-center justify-center gap-3 sm:flex-row [animation-delay:240ms]">
          <a href="#book" className="btn-primary w-full sm:w-auto">
            Book a Growth Audit
            <span aria-hidden>→</span>
          </a>
          <a href="#pricing" className="btn-secondary w-full sm:w-auto">
            Explore Pricing Tiers
          </a>
        </div>

        <ul
          aria-label="Key results"
          className="mx-auto mt-16 grid max-w-4xl animate-fadeUp grid-cols-2 gap-3 md:grid-cols-4 [animation-delay:320ms]"
        >
          {stats.map((s) => (
            <li
              key={s.label}
              className="glass group relative overflow-hidden rounded-2xl px-4 py-5 transition duration-300 hover:-translate-y-1 hover:border-white/25"
            >
              <div
                aria-hidden
                className={`absolute inset-0 bg-gradient-to-b ${s.color} to-transparent opacity-0 transition duration-300 group-hover:opacity-100`}
              />
              <div className="relative">
                <div className="text-2xl font-bold text-white sm:text-3xl">{s.value}</div>
                <div className="mt-1 text-xs leading-snug text-white/55">{s.label}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
