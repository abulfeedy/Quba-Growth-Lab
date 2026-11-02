const steps = [
  { title: "Audit & Acquisition Setup", body: "We audit your offer, funnel and channels, then set up tracking and the acquisition foundation." },
  { title: "Funnel & AI Creative Engine", body: "We build your funnel and produce a steady pipeline of AI video and static creatives." },
  { title: "Launch & Ad Testing", body: "Campaigns go live. We test hooks, audiences and offers to find the winners fast." },
  { title: "Bi-Weekly Review & Scale", body: "Every 14 days we review revenue and acquisition data, cut losers and scale winners." },
];

export default function Process() {
  return (
    <section id="process" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">How We Operate</p>
          <h2 className="section-title">A repeatable growth loop.</h2>
        </div>

        <ol className="relative mt-14 grid gap-5 md:grid-cols-4">
          <div
            aria-hidden
            className="absolute left-[12%] right-[12%] top-6 hidden h-px bg-gradient-to-r from-emerald-glow/0 via-cyan-glow/60 to-violet-glow/0 md:block"
          />
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <div className="glass group h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1.5 hover:border-white/25">
                <div className="relative mb-5 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-emerald-glow to-cyan-glow text-base font-bold text-black shadow-[0_0_30px_rgba(16,245,160,0.35)]">
                  {i + 1}
                </div>
                <h3 className="text-base font-semibold text-white">
                  <span className="sr-only">Step {i + 1}: </span>
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{s.body}</p>
              </div>
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-white/30 md:hidden"
                >
                  ↓
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
