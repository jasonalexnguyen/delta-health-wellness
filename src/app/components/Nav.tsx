"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Visit", href: "#visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 transition-all duration-300 md:px-12 ${
          scrolled || mobileOpen
            ? "bg-cream/90 shadow-sm backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <a href="#" className="font-display text-xl text-plum tracking-wide md:text-[22px]">
          <span className="text-sage-dark">Delta</span> Health &amp; Wellness
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] font-medium uppercase tracking-[0.08em] text-plum transition-colors hover:text-sage-dark"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://weedmaps.com/dispensaries/delta-health-and-wellness-2-4"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border-[1.5px] border-sage bg-transparent px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-sage-dark transition-all hover:border-sage-dark hover:bg-sage-dark hover:text-ivory md:inline-flex"
        >
          Order Pickup
        </a>

        {/* Mobile hamburger */}
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
        >
          <div className="flex flex-col items-end gap-[5px]">
            <span
              className={`block h-[1.5px] bg-plum transition-all duration-300 ${
                mobileOpen ? "w-5 translate-y-[6.5px] rotate-45" : "w-5"
              }`}
            />
            <span
              className={`block h-[1.5px] w-3.5 bg-plum transition-all duration-300 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[1.5px] bg-plum transition-all duration-300 ${
                mobileOpen ? "w-5 -translate-y-[6.5px] -rotate-45" : "w-4"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-cream transition-all duration-500 md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-display text-4xl font-light text-plum transition-colors hover:text-sage-dark"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://weedmaps.com/dispensaries/delta-health-and-wellness-2-4"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-4 rounded-full bg-sage-dark px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory transition-all hover:bg-plum"
          >
            Order Pickup
          </a>
        </div>
      </div>
    </>
  );
}
