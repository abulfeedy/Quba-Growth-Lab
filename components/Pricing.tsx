const tiers = [
  {
    name: "Starter Growth",
    usd: "$300 – $500",
    ngn: "₦150k – ₦250k",
    target: "Small businesses & solopreneurs",
    features: [
      "1–2 Social Channels",
      "1 Ad Platform (Meta/Google)",
      "1 Lead Funnel Optimization",
      "6–8 Graphics + 2 AI Videos",
      "Bi-weekly Reports",
    ],
    popular: false,
  },
  {
    name: "Accelerate Growth",
    usd: "$750 – $1,200",
    ngn: "₦350k – ₦550k",
    target: "Growing brands looking to scale sales & leads",
    features: [
      "2–3 Social Channels",
      "Multi-Platform Ad Management & Retargeting",
      "Custom Funnel Build",
      "10–12 Graphics + 4–6 AI/Edited Video Reels",
      "Bi-weekly Sync Call",
    ],
    popular: true,
  },
  {
    name: "Full-Stack Partner",
    usd: "$1,500 – $2,500",
    ngn: "₦750k – ₦1.2M",
    target: "Enterprise & high-volume scaling brands",
    features: [
      "3+ Social Channels",
      "Full Ad Ops",
      "Continuous A/B Funnel Iteration",
      "Unlimited AI Video & Asset Production",
      "Daily Engagement & Direct Response Management",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Pricing</p>
          <h2 className="section-title">Simple monthly retainers.</h2>
          <p className="mt-5 text-white/60">
            Transparent pricing in USD or Naira. No lock-in surprises, just a
            growth team you can scale up as results come in.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`relative flex flex-col rounded-3xl p-7 transition duration-300 hover:-translate-y-1.5 ${
                t.popular
                  ? "border border-emerald-glow/40 bg-gradient-to-b from-emerald-glow/10 via-white/[0.04] to-white/[0.02] shadow-[0_0_60px_-10px_rgba(16,245,160,0.35)] lg:scale-[1.04]"
                  : "glass"
              }`}
            >
              {t.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-glow to-cyan-glow px-4 py-1 text-xs font-bold uppercase tracking-wider text-black">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-white">{t.name}</h3>
              <p className="mt-1 text-sm text-white/50">{t.target}</p>

              <div className="mt-6">
                <div className="text-3xl font-bold tracking-tight text-white">
                  {t.usd}
                  <span className="text-sm font-medium text-white/40"> /mo</span>
                </div>
                <div className="mt-1 text-sm font-medium text-emerald-glow">
                  {t.ngn} / month
                </div>
              </div>

              <ul className="my-7 flex-1 space-y-3 text-sm text-white/75">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <svg
                      viewBox="0 0 20 20"
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-glow"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 111.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                className={t.popular ? "btn-primary w-full" : "btn-secondary w-full"}
              >
                Get Started
              </a>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-white/40">
          Ad spend is paid directly to the platforms and is not included in the retainer.
        </p>
      </div>
    </section>
  );
}
