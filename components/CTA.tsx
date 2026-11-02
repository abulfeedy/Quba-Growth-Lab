"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  BOOKING_URL,
  CONTACT_EMAIL,
  FORM_ENDPOINT,
  WHATSAPP_NUMBER,
} from "@/lib/config";

type Status = "idle" | "sending" | "sent" | "error";

export default function CTA() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const business = String(data.get("business") || "");
    const goal = String(data.get("goal") || "");

    if (FORM_ENDPOINT) {
      setStatus("sending");
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ name, business, goal }),
        });
        if (!res.ok) throw new Error("Request failed");
        setStatus("sent");
        form.reset();
      } catch {
        setStatus("error");
      }
      return;
    }

    // Fallback: pre-filled WhatsApp (or email) so no lead is lost
    const text = `Hi Quba Growth Lab, I'd like a Growth Audit.\n\nName: ${name}\nBusiness: ${business}\nMonthly spend / revenue goal: ${goal}`;
    const hasWhatsApp = WHATSAPP_NUMBER && !/^2340+$/.test(WHATSAPP_NUMBER);
    const url = hasWhatsApp
      ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
      : `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
          "Growth Audit Request"
        )}&body=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("sent");
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-emerald-glow/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-emerald-glow/20";

  return (
    <>
      <section id="book" className="relative px-4 pb-10 pt-20 sm:px-6 sm:pt-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[500px] bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.25),transparent_65%)]"
        />
        <div className="glass relative mx-auto max-w-4xl overflow-hidden rounded-3xl p-6 sm:p-12">
          <div
            aria-hidden
            className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-emerald-glow/20 blur-[100px]"
          />
          <div
            aria-hidden
            className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-violet-glow/25 blur-[100px]"
          />
          <div className="relative grid gap-10 md:grid-cols-2">
            <div>
              <p className="section-eyebrow">Let&apos;s Talk</p>
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Ready to Add a Growth Department to Your Business?
              </h2>
              <p className="mt-4 text-white/60">
                Tell us about your business and we&apos;ll come back with a
                free, no-fluff Growth Audit.
              </p>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="btn-secondary mt-8"
              >
                ⚡ Book an Instant Strategy Call
              </button>
            </div>

            <form onSubmit={onSubmit} className="space-y-4" aria-label="Growth audit request">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-white/60">
                  Name
                </label>
                <input id="name" name="name" required autoComplete="name" placeholder="Your name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="business" className="mb-1.5 block text-xs font-medium text-white/60">
                  Business Name
                </label>
                <input id="business" name="business" required autoComplete="organization" placeholder="Your business" className={inputClass} />
              </div>
              <div>
                <label htmlFor="goal" className="mb-1.5 block text-xs font-medium text-white/60">
                  Current Monthly Spend / Revenue Goal
                </label>
                <input id="goal" name="goal" required placeholder="e.g. $1,000 ad spend / $10k revenue goal" className={inputClass} />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Get My Free Growth Audit"}
              </button>
              <p role="status" aria-live="polite" className="min-h-[1.25rem] text-center text-sm">
                {status === "sent" && (
                  <span className="text-emerald-glow">Thanks! We&apos;ll be in touch shortly.</span>
                )}
                {status === "error" && (
                  <span className="text-red-400">Something went wrong. Please try again.</span>
                )}
              </p>
            </form>
          </div>
        </div>

        <footer className="relative mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <span>© {new Date().getFullYear()} Quba Growth Lab. All rights reserved.</span>
          <a href="https://qubaagency.com" className="transition hover:text-white">
            A Quba Tech Agency company
          </a>
        </footer>
      </section>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Book a strategy call"
          className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div className="glass relative w-full max-w-3xl rounded-2xl bg-obsidian/90 p-3">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute -top-3 right-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white text-lg font-bold text-black transition hover:scale-110"
            >
              ×
            </button>
            <iframe
              src={BOOKING_URL}
              title="Book a strategy call"
              className="h-[70vh] w-full rounded-xl bg-white"
            />
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-center text-xs text-white/50 hover:text-white"
            >
              Trouble loading? Open the booking page in a new tab →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
