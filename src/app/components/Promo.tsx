export default function Promo() {
  return (
    <section className="bg-plum px-6 py-16 text-center md:px-12">
      <div className="reveal mx-auto max-w-[600px]">
        <h3 className="font-display text-[32px] font-light text-cream">
          First Time? Welcome.
        </h3>
        <p className="mt-3 text-[15px] font-light text-cream/60">
          New members get a $1.00 pre-roll with any purchase of $15 or more.
          Plus, earn loyalty points every time you shop.
        </p>
        <a
          href="https://weedmaps.com/dispensaries/delta-health-and-wellness-2-4"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-plum transition-all hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-[0_8px_24px_rgba(196,168,108,0.3)]"
        >
          Claim Your Deal
        </a>
      </div>
    </section>
  );
}
