const pillars = [
  {
    title: "Embedded Growth Management",
    body: "Not just an agency, your extended team. We plug into your business, own the growth targets, and move at your pace.",
    icon: (
      <path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-5.13a4 4 0 11-8 0 4 4 0 018 0zm6 0a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
    accent: "text-emerald-glow",
  },
  {
    title: "End-to-End Funnels & Repurposing",
    body: "High-converting funnels built from first click to paid customer, with every asset repurposed across channels for maximum reach.",
    icon: <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" />,
    accent: "text-cyan-glow",
  },
  {
    title: "AI Video Creative & Social Management",
    body: "Modern AI video creatives and consistent social media management that stop the scroll and feed your ad engine.",
    icon: (
      <path d="M15 10l4.55-2.28A1 1 0 0121 8.62v6.76a1 1 0 01-1.45.9L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    ),
    accent: "text-violet-glow",
  },
  {
    title: "Bi-Weekly Revenue & Acquisition Reports",
    body: "Transparent 14-day performance syncs. You see spend, leads, sales and what we're changing next. No black boxes.",
    icon: <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
    accent: "text-emerald-glow",
  },
];

export default function Pillars() {
  return (
    <section id="why" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Why Quba Growth Lab</p>
          <h2 className="section-title">
            We don&apos;t just run ads or post content.
          </h2>
          <p className="mt-5 text-white/60">
            We act as your embedded Growth Department: building funnels,
            engineering data-driven acquisition ads, producing AI video
            creatives, and driving measurable revenue.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1.5 hover:border-white/25"
            >
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-violet-glow/30 to-cyan-glow/20 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"
              />
              <div className="relative">
                <div
                  className={`mb-5 grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 ${p.accent}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    {p.icon}
                  </svg>
                </div>
                <div className="mb-2 text-xs font-semibold text-white/35">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-semibold leading-snug text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
