"use client";

import { useState } from "react";

const categories = [
  "All",
  "Flower",
  "Edibles",
  "Vapes",
  "Concentrates",
  "Pre-Rolls",
  "Drinks",
  "Wellness",
];

const products = [
  {
    icon: "\uD83C\uDF3F",
    badge: "Flower",
    title: "Top Shelf Strains",
    description:
      "Hand-selected indica, sativa, and hybrid strains from California's finest cultivators.",
    count: "120+ strains",
  },
  {
    icon: "\uD83C\uDF6C",
    badge: "Edibles",
    title: "Gummies & More",
    description:
      "Precisely dosed gummies, chocolates, and baked goods for a consistent experience.",
    count: "200+ items",
  },
  {
    icon: "\uD83D\uDCA8",
    badge: "Vapes",
    title: "Carts & Disposables",
    description:
      "Top-brand cartridges and disposables. Discreet, convenient, and full of flavor.",
    count: "150+ options",
  },
  {
    icon: "\u2726",
    badge: "Concentrates",
    title: "Wax, Resin & Rosin",
    description:
      "Premium concentrates for the connoisseur seeking potency and purity.",
    count: "80+ varieties",
  },
  {
    icon: "\uD83D\uDCAB",
    badge: "Pre-Rolls",
    title: "Ready to Enjoy",
    description:
      "Expertly rolled singles, multi-packs, and infused pre-rolls for on-the-go convenience.",
    count: "90+ options",
  },
  {
    icon: "\uD83C\uDF79",
    badge: "Drinks",
    title: "Cannabis Beverages",
    description:
      "Refreshing THC-infused seltzers, teas, and tonics with fast-acting effects.",
    count: "40+ drinks",
  },
  {
    icon: "\u2728",
    badge: "Wellness",
    title: "Topicals & Tinctures",
    description:
      "CBD and THC topicals, tinctures, and capsules for targeted relief and daily wellness.",
    count: "60+ products",
  },
];

export default function Products() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? products
      : products.filter((p) => p.badge === active);

  return (
    <section id="menu" className="bg-cream-light px-6 py-24 md:px-12">
      {/* Header */}
      <div className="mx-auto mb-10 max-w-[1200px] text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sage">
          Our Collection
        </p>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-plum">
          Explore the Menu
        </h2>
        <p className="mx-auto mt-4 max-w-[500px] text-base font-light leading-relaxed text-stone">
          Over 850 products updated in real time. Tax-inclusive pricing, always.
        </p>
      </div>

      {/* Category tabs */}
      <div className="reveal-stagger mx-auto mb-12 flex max-w-[1200px] flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`reveal rounded-full px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.04em] transition-all ${
              active === cat
                ? "bg-sage-dark text-ivory"
                : "border border-plum/10 bg-transparent text-stone hover:border-plum/25 hover:text-plum"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="reveal-stagger mx-auto grid max-w-[1200px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((product) => (
          <div
            key={product.title}
            className="product-card-accent reveal group relative overflow-hidden rounded-2xl border border-sage/10 bg-ivory p-7 text-center transition-all duration-400 hover:-translate-y-1 hover:border-sage/25 hover:shadow-[0_16px_48px_rgba(68,56,80,0.08)]"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-cream text-[28px]">
              {product.icon}
            </div>
            <span className="inline-block rounded-full bg-sage/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-sage-dark">
              {product.badge}
            </span>
            <h3 className="mt-3 font-display text-2xl font-normal text-plum">
              {product.title}
            </h3>
            <p className="mt-2 text-sm font-light leading-relaxed text-stone">
              {product.description}
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-[0.08em] text-sage-dark">
                {product.count}
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-plum/10 text-sm text-stone transition-all group-hover:border-gold group-hover:bg-gold group-hover:text-plum">
                &rarr;
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <a
          href="https://weedmaps.com/dispensaries/delta-health-and-wellness-2-4"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-plum/20 px-8 py-3.5 text-[13px] font-medium uppercase tracking-[0.08em] text-plum transition-all hover:border-plum hover:bg-plum/[0.04]"
        >
          View Full Menu on Weedmaps &rarr;
        </a>
      </div>
    </section>
  );
}
