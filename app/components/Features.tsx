"use client";

import {
  Plane,
  Hotel,
  Car,
  MessageCircle,
  TrendingDown,
  Globe,
  Shield,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Plane,
    title: "Complete Trip Plans",
    description:
      "Full itineraries generated in seconds, optimized for your schedule and preferences.",
  },
  {
    icon: Hotel,
    title: "Curated Hotels",
    description:
      "Hotel selections matched to your standards, with amenities and locations you actually want.",
  },
  {
    icon: Car,
    title: "Premium Ground Transport",
    description:
      "Seamless airport rides and transfers arranged for every leg of your journey.",
  },
  {
    icon: MessageCircle,
    title: "Multilingual Concierge",
    description:
      "Communicate in your preferred language. Voyagent understands and responds globally.",
  },
  {
    icon: TrendingDown,
    title: "Proactive Price Alerts",
    description:
      "Automatic monitoring for price drops on flights and hotels. We rebook when savings appear.",
  },
  {
    icon: Globe,
    title: "Built for Global Travel",
    description:
      "Designed for international business travelers with support for complex multi-city trips.",
  },
  {
    icon: Shield,
    title: "No Hidden Commissions",
    description:
      "Like Costco for travel: a transparent subscription with zero hidden markups or booking fees.",
  },
  {
    icon: Zap,
    title: "Last-Minute Changes",
    description:
      "A dedicated AI concierge handles changes, cancellations, and special requests on your behalf.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-[#080C16] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            Features
          </span>
          <h2 className="font-serif text-4xl text-white sm:text-5xl">
            Built for the executive traveler
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Every feature is designed to save you time and deliver results — from
            complex itineraries to proactive price monitoring.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-[#0B1120] p-6 transition-all hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                <feature.icon size={22} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
