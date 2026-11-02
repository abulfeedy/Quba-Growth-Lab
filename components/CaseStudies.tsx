const cases = [
  {
    name: "Bluufun Platform",
    tag: "Social / Matchmaking App",
    badge: "0 to 600+ Active Users in 30 Days",
    points: [
      "Complete user acquisition strategy",
      "Targeted traction engine",
      "Launch optimization",
    ],
    glow: "from-violet-glow/25",
  },
  {
    name: "Austa Solar",
    tag: "Solar & Energy",
    badge: "17 High-Ticket Solar & Inverter Systems Sold",
    points: [
      "Targeted lead gen campaigns",
      "2-month targeted sales funnel execution",
    ],
    glow: "from-emerald-glow/25",
  },
  {
    name: "Prinny-Largent",
    tag: "Italy E-Commerce",
    badge: "400+ International Sales in 90 Days",
    points: [
      "Brand awareness scaling",
      "Direct-response Meta / sales ads",
      "Conversion optimization",
    ],
    glow: "from-cyan-glow/25",
  },
  {
    name: "Guuzell Escrow Marketplace",
    tag: "Fintech / Marketplace",
    badge: "1,000+ Verified Platform Users",
    points: ["Scaled marketplace adoption within the first 60 days of launch"],
    glow: "from-emerald-glow/25",
  },
  {
    name: "Digital Info Product",
    tag: "Course Creator",
    badge: "300+ Digital Product Sales",
    points: [
      "Automated sales funnel setup",
      "Ad hook testing",
      "Retargeting workflow",
    ],
    glow: "from-violet-glow/25",
  },
];

export default function CaseStudies() {
  return (
    <section id="proof" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-[700px] -translate-x-1/2 rounded-full bg-cyan-glow/10 blur-[140px]"
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Verified Proof of Performance</p>
          <h2 className="section-title">Results we can put numbers on.</h2>
          <p className="mt-5 text-white/60">
            Real launches, real revenue. Here&apos;s what an embedded growth
            team delivers.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <article
              key={c.name}
              className={`glass group relative overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1.5 hover:border-white/25 ${
                i === 3 ? "lg:col-start-1" : ""
              }`}
            >
              <div
                aria-hidden
                className={`absolute inset-0 bg-gradient-to-br ${c.glow} to-transparent opacity-0 transition duration-500 group-hover:opacity-100`}
              />
              <div className="relative flex h-full flex-col">
                <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                  {c.tag}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">{c.name}</h3>
                <div className="mt-4 inline-flex w-fit items-start gap-2 rounded-lg border border-emerald-glow/30 bg-emerald-glow/10 px-3 py-2 text-sm font-semibold text-emerald-glow">
                  <span aria-hidden>↗</span>
                  <span>{c.badge}</span>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-white/65">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-glow" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
