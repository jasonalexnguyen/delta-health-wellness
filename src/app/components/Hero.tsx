export default function Hero() {
  return (
    <section className="hero-bg hero-grid relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 pb-20 text-center md:px-12">
      <div className="relative z-10 max-w-[800px] animate-[fadeUp_1.2s_ease_both]">
        {/* Pulsing "Open Now" tag — Direction B */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-sage/20 bg-sage/10 px-4 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-olive animate-[pulse_2s_ease_infinite]" />
          <span className="font-body text-xs font-medium tracking-[0.05em] text-sage-dark">
            Open Today &middot; 9 AM – 9 PM
          </span>
        </div>

        {/* Gold divider */}
        <div className="mx-auto mb-6 h-px w-12 bg-gold" />

        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-sage">
          Sacramento&rsquo;s Trusted Dispensary
        </p>

        <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)] font-light leading-[1.1] tracking-tight text-plum">
          Wellness, <em className="italic text-sage-dark">naturally</em> elevated
        </h1>

        <p className="mx-auto mt-7 max-w-[520px] text-lg font-light leading-relaxed text-stone">
          Premium recreational cannabis curated with care. Expert budtenders, the
          best deals, and a welcoming space between Land Park and downtown
          Sacramento.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-full bg-sage-dark px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-ivory transition-all hover:-translate-y-0.5 hover:bg-plum hover:shadow-[0_8px_24px_rgba(68,56,80,0.15)]"
          >
            Browse Our Menu &rarr;
          </a>
          <a
            href="#visit"
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-plum/20 bg-transparent px-8 py-3.5 text-[13px] font-medium uppercase tracking-[0.08em] text-plum transition-all hover:border-plum hover:bg-plum/[0.04]"
          >
            Visit Us
          </a>
        </div>

        {/* Stats bar — Direction B */}
        <div className="mt-16 flex flex-col items-center justify-center gap-10 border-t border-plum/10 pt-8 sm:flex-row">
          <div>
            <span className="block font-display text-3xl font-semibold text-gold">
              850+
            </span>
            <span className="mt-1 text-xs font-medium uppercase tracking-[0.08em] text-stone">
              Products
            </span>
          </div>
          <div>
            <span className="block font-display text-3xl font-semibold text-gold">
              4.8&thinsp;&#9733;
            </span>
            <span className="mt-1 text-xs font-medium uppercase tracking-[0.08em] text-stone">
              Rating
            </span>
          </div>
          <div>
            <span className="block font-display text-3xl font-semibold text-gold">
              2,200+
            </span>
            <span className="mt-1 text-xs font-medium uppercase tracking-[0.08em] text-stone">
              Reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
