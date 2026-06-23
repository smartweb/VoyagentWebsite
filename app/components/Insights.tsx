"use client";

import Image from "next/image";

const posts = [
  {
    image: "/images/blog-flights.webp",
    category: "Strategy",
    title: "Data-Driven Flight Pricing Strategies",
    excerpt:
      "How executives use price monitoring and flexible booking windows to reduce travel spend without sacrificing comfort.",
  },
  {
    image: "/images/blog-productivity.webp",
    category: "Productivity",
    title: "How Top Executives Maximize Travel Productivity",
    excerpt:
      "Expert perspectives on turning airport layovers and transit time into productive, focused work sessions.",
  },
  {
    image: "/images/blog-travel.webp",
    category: "Travel Tips",
    title: "Guide to Productive Airport Layovers",
    excerpt:
      "Curated tips for business travelers to rest, recharge, and stay efficient during long-haul connections.",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="relative bg-[#080C16] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            Insights
          </span>
          <h2 className="font-serif text-4xl text-white sm:text-5xl">
            Expert perspectives on business travel
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0B1120] transition-all hover:border-blue-500/20"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  {post.category}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-white transition-colors group-hover:text-blue-400">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
