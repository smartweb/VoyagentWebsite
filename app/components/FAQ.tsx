"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does price monitoring work?",
    answer:
      "After booking, Voyagent continuously monitors prices for your flights and hotels. If a price drop is detected, we notify you automatically and can rebook at the lower rate when possible.",
  },
  {
    question: "How is this different from ChatGPT or other AI travel chatbots?",
    answer:
      "While other tools give you suggestions, Voyagent actually plans, books, and monitors your trip end-to-end. It’s a concierge that takes action, not just gives advice.",
  },
  {
    question: "Is it suitable for business travel?",
    answer:
      "Yes. Voyagent is specifically designed for business travelers, with support for complex multi-city itineraries, last-minute changes, and corporate travel policies.",
  },
  {
    question: "Can I use it internationally?",
    answer:
      "Absolutely. We support international flights, hotels, and transfers, and Voyagent understands and responds in multiple languages.",
  },
  {
    question: "Do you charge booking commissions?",
    answer:
      "No. Voyagent operates on a transparent subscription model. You pay a membership fee and access the best available prices with zero hidden markups or commissions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-[#080C16] py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            FAQ
          </span>
          <h2 className="font-serif text-4xl text-white sm:text-5xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-white/10 bg-[#0B1120] p-6 transition-all hover:border-white/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="pr-4 text-lg font-semibold text-white">
                  {faq.question}
                </span>
                <span className="shrink-0 text-blue-400">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-slate-400 leading-relaxed">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
