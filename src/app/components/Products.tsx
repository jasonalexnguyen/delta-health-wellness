"use client";

import { useEffect, useState } from "react";
import type { MenuItem, MenuCategory } from "@/app/lib/weedmaps/types";

// ---------------------------------------------------------------------------
// Static fallback data (shown when the Weedmaps API is unreachable)
// ---------------------------------------------------------------------------

const FALLBACK_CATEGORIES: MenuCategory[] = [
  "All",
  "Flower",
  "Edibles",
  "Vapes",
  "Concentrates",
  "Pre-Rolls",
  "Drinks",
  "Wellness",
];

interface FallbackProduct {
  icon: string;
  badge: string;
  title: string;
  description: string;
  count: string;
}

const FALLBACK_PRODUCTS: FallbackProduct[] = [
  {
    icon: "🌿",
    badge: "Flower",
    title: "Top Shelf Strains",
    description:
      "Hand-selected indica, sativa, and hybrid strains from California's finest cultivators.",
    count: "120+ strains",
  },
  {
    icon: "🍬",
    badge: "Edibles",
    title: "Gummies & More",
    description:
      "Precisely dosed gummies, chocolates, and baked goods for a consistent experience.",
    count: "200+ items",
  },
  {
    icon: "💨",
    badge: "Vapes",
    title: "Carts & Disposables",
    description:
      "Top-brand cartridges and disposables. Discreet, convenient, and full of flavor.",
    count: "150+ options",
  },
  {
    icon: "✦",
    badge: "Concentrates",
    title: "Wax, Resin & Rosin",
    description:
      "Premium concentrates for the connoisseur seeking potency and purity.",
    count: "80+ varieties",
  },
  {
    icon: "💫",
    badge: "Pre-Rolls",
    title: "Ready to Enjoy",
    description:
      "Expertly rolled singles, multi-packs, and infused pre-rolls for on-the-go convenience.",
    count: "90+ options",
  },
  {
    icon: "🍹",
    badge: "Drinks",
    title: "Cannabis Beverages",
    description:
      "Refreshing THC-infused seltzers, teas, and tonics with fast-acting effects.",
    count: "40+ drinks",
  },
  {
    icon: "✨",
    badge: "Wellness",
    title: "Topicals & Tinctures",
    description:
      "CBD and THC topicals, tinctures, and capsules for targeted relief and daily wellness.",
    count: "60+ products",
  },
];

// ---------------------------------------------------------------------------
// Genetics badge colors
// ---------------------------------------------------------------------------

function geneticsColor(g: string) {
  switch (g) {
    case "sativa":
      return "bg-amber-100 text-amber-700";
    case "indica":
      return "bg-violet-100 text-violet-700";
    case "hybrid":
      return "bg-emerald-100 text-emerald-700";
    default:
      return "bg-stone-100 text-stone-500";
  }
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Products() {
  const [active, setActive] = useState<MenuCategory>("All");
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [categories, setCategories] = useState<MenuCategory[]>(FALLBACK_CATEGORIES);
  const [loading, setLoading] = useState(true);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    async function loadMenu() {
      try {
        const res = await fetch("/api/menu");
        if (!res.ok) throw new Error("API returned " + res.status);
        const data = await res.json();
        if (data.items && data.items.length > 0) {
          setMenuItems(data.items);
          setCategories(data.categories);
        } else {
          setUseFallback(true);
        }
      } catch {
        setUseFallback(true);
      } finally {
        setLoading(false);
      }
    }
    loadMenu();
  }, []);

  // Filtered items for current category
  const filteredItems =
    active === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === active);

  const filteredFallback =
    active === "All"
      ? FALLBACK_PRODUCTS
      : FALLBACK_PRODUCTS.filter((p) => p.badge === active);

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
          {useFallback
            ? "Over 850 products updated in real time. Tax-inclusive pricing, always."
            : `${menuItems.length} products synced live from Weedmaps. Tax-inclusive pricing, always.`}
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

      {/* Loading skeleton */}
      {loading && (
        <div className="mx-auto grid max-w-[1200px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse rounded-2xl border border-sage/10 bg-ivory p-7"
            >
              <div className="mx-auto mb-4 h-24 w-24 rounded-xl bg-cream" />
              <div className="mx-auto mb-2 h-4 w-20 rounded bg-cream" />
              <div className="mx-auto mb-2 h-5 w-32 rounded bg-cream" />
              <div className="mx-auto h-3 w-40 rounded bg-cream" />
            </div>
          ))}
        </div>
      )}

      {/* Live menu items from Weedmaps */}
      {!loading && !useFallback && (
        <div className="reveal-stagger mx-auto grid max-w-[1200px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredItems.map((item) => (
            <a
              key={item.id}
              href={`https://weedmaps.com/dispensaries/delta-health-and-wellness-2-4/menu/${item.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="product-card-accent reveal group relative overflow-hidden rounded-2xl border border-sage/10 bg-ivory p-5 transition-all duration-400 hover:-translate-y-1 hover:border-sage/25 hover:shadow-[0_16px_48px_rgba(68,56,80,0.08)]"
            >
              {/* Image */}
              {item.imageUrl ? (
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="mx-auto mb-4 h-24 w-24 rounded-xl object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-xl bg-cream text-3xl text-sage">
                  🌿
                </div>
              )}

              {/* Category + genetics badges */}
              <div className="mb-2 flex flex-wrap items-center justify-center gap-1.5">
                <span className="inline-block rounded-full bg-sage/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-sage-dark">
                  {item.category}
                </span>
                {item.genetics !== "n/a" && (
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] ${geneticsColor(item.genetics)}`}
                  >
                    {item.genetics}
                  </span>
                )}
              </div>

              {/* Name */}
              <h3 className="text-center font-display text-lg font-normal leading-snug text-plum">
                {item.name}
              </h3>

              {/* Brand */}
              {item.brand !== "Unknown" && (
                <p className="mt-1 text-center text-[11px] font-medium uppercase tracking-wider text-sage-dark">
                  {item.brand}
                </p>
              )}

              {/* THC / CBD */}
              <div className="mt-3 flex items-center justify-center gap-3 text-xs text-stone">
                {item.thc !== "—" && (
                  <span>
                    <strong className="text-plum">THC</strong> {item.thc}
                  </span>
                )}
                {item.cbd !== "—" && (
                  <span>
                    <strong className="text-sage-dark">CBD</strong> {item.cbd}
                  </span>
                )}
              </div>

              {/* Price */}
              {item.prices.length > 0 && (
                <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                  {item.prices.slice(0, 3).map((p) => (
                    <span
                      key={p.label}
                      className="rounded-full border border-plum/10 px-2.5 py-1 text-[11px] text-stone"
                    >
                      {p.label}{" "}
                      <strong className="text-plum">
                        ${p.price.toFixed(2)}
                      </strong>
                    </span>
                  ))}
                </div>
              )}

              {/* Arrow */}
              <div className="mt-4 flex justify-end">
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-plum/10 text-sm text-stone transition-all group-hover:border-gold group-hover:bg-gold group-hover:text-plum">
                  &rarr;
                </div>
              </div>
            </a>
          ))}

          {filteredItems.length === 0 && (
            <p className="col-span-full py-12 text-center text-stone">
              No products found in this category.
            </p>
          )}
        </div>
      )}

      {/* Fallback static cards */}
      {!loading && useFallback && (
        <div className="reveal-stagger mx-auto grid max-w-[1200px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredFallback.map((product) => (
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
      )}

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
