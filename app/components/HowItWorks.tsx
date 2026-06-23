"use client";

import { MessageSquare, Wand2, CalendarCheck, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Tell Us Your Trip",
    description:
      "Share your destination, dates, and preferences in plain language. Voyagent understands and responds globally.",
  },
  {
    icon: Wand2,
    title: "AI Builds Your Plan",
    description:
      "Our AI constructs a complete itinerary in seconds — flights, hotels, and ground transport tailored to your standards.",
  },
  {
    icon: CalendarCheck,
    title: "We Book Everything",
    description:
      "We reserve flights, hotels, and transfers directly. No copy-paste, no manual comparisons, no hidden fees.",
  },
  {
    icon: ShieldCheck,
    title: "Continuous Monitoring",
    description:
      "Voyagent monitors prices and travel conditions, rebooking and alerting you when savings or changes appear.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-[#0B1120] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            How It Works
          </span>
          <h2 className="font-serif text-4xl text-white sm:text-5xl">
            Four steps to effortless travel
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            From managing complex multi-city itineraries to last-minute changes, every
            feature is designed to save you time and deliver results.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-blue-500/30 hover:bg-white/[0.04]"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
                <step.icon size={24} />
              </div>
              <div className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">
                Step {index + 1}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
