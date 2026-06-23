"use client";

export default function About() {
  return (
    <section id="about" className="relative bg-[#0B1120] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
              About
            </span>
            <h2 className="font-serif text-4xl text-white sm:text-5xl">
              We built Voyagent to be the executive assistant we always wished we had.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-slate-300">
            <p>
              Voyagent was founded by frequent business travelers who were tired of
              spending hours comparing flights and managing reservations. We created a
              concierge that not only advises, but acts.
            </p>
            <p>
              Traditional travel platforms earn commissions from airlines and hotels,
              creating a conflict of interest. Our subscription model aligns our
              incentives with yours — so you always get the best experience, not the
              most profitable one.
            </p>
            <p>
              Our mission is to eliminate the friction of business travel so
              professionals can focus on what matters most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
