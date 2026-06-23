"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden pt-18">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0B1120]/90 via-[#0B1120]/60 to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="max-w-2xl">
          <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            AI Travel Concierge
          </span>
          <h1 className="font-serif text-5xl leading-[1.1] text-white sm:text-6xl lg:text-7xl">
            Tell us where you need to go.{" "}
            <span className="text-blue-400">Voyagent handles the rest.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-300">
            Like having a world-class executive assistant for every trip. Voyagent plans,
            books, and monitors everything — from airport rides to flights and hotels.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-400 hover:shadow-blue-500/50"
            >
              Start Your Free Trial
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/5"
            >
              See How It Works
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/images/product-mockup.webp"
              alt="Voyagent product interface showing travel itinerary on laptop and mobile"
              fill
              priority
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
