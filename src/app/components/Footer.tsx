const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Visit", href: "#visit" },
  { label: "Loyalty", href: "#" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  {
    label: "Weedmaps",
    href: "https://weedmaps.com/dispensaries/delta-health-and-wellness-2-4",
  },
  { label: "Leafly", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal px-6 pt-16 pb-8 md:px-12">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-8 md:flex-row md:justify-between">
        {/* Brand */}
        <div>
          <div className="font-display text-xl text-cream">
            Delta Health &amp; Wellness
          </div>
          <p className="mt-2 text-[13px] font-light text-cream/50">
            Sacramento&rsquo;s Trusted Dispensary
          </p>
        </div>

        {/* Link columns */}
        <div className="flex gap-16">
          <div>
            <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-cream/30">
              Navigate
            </h4>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-1 text-sm font-light text-cream/50 transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div>
            <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-cream/30">
              Connect
            </h4>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="block py-1 text-sm font-light text-cream/50 transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-12 flex max-w-[1100px] flex-wrap justify-between gap-2 border-t border-cream/[0.08] pt-6 text-xs font-light text-cream/30">
        <span>&copy; {new Date().getFullYear()} Delta Health &amp; Wellness. All rights reserved.</span>
        <span>Must be 21+ to enter. Please consume responsibly.</span>
      </div>
    </footer>
  );
}
