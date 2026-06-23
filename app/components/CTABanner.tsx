"use client";

import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-[#0B1120] py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl text-white sm:text-5xl">
          Ready to travel without the friction?
        </h2>
        <p className="mt-6 text-lg text-slate-300">
          Join the world’s first AI travel concierge for global business travelers.
          Just tell us where you need to go.
        </p>
        <a
          href="#pricing"
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-blue-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-400 hover:shadow-blue-500/50"
        >
          Start Your Free Trial
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>
      </div>
    </section>
  );
}
