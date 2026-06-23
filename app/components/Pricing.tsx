"use client";

import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/ month",
    description: "Perfect for occasional business travelers.",
    features: [
      "Up to 3 trips per month",
      "AI itinerary planning",
      "Flight & hotel booking",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$79",
    period: "/ month",
    description: "For frequent travelers who need full concierge support.",
    features: [
      "Unlimited trips",
      "AI itinerary planning",
      "Flight, hotel & ground transport booking",
      "Proactive price monitoring",
      "24/7 concierge chat",
      "Multi-language support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored travel programs for teams and executives.",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom travel policies",
      "Team analytics & reporting",
      "SSO and advanced security",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#0B1120] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            Pricing
          </span>
          <h2 className="font-serif text-4xl text-white sm:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Like Costco for travel. Pay a transparent membership and access the best
            available prices with zero hidden markups or commissions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.popular
                  ? "border-blue-500/50 bg-blue-500/5 shadow-2xl shadow-blue-500/10"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="font-serif text-5xl text-white">{plan.price}</span>
                <span className="ml-1 text-slate-400">{plan.period}</span>
              </div>
              <p className="mt-4 text-sm text-slate-400">{plan.description}</p>

              <ul className="mt-8 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check size={18} className="mt-0.5 shrink-0 text-blue-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all ${
                  plan.popular
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-400"
                    : "border border-white/20 text-white hover:border-white/40 hover:bg-white/5"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
