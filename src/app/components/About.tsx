export default function About() {
  return (
    <section id="about" className="bg-cream px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-[1100px] items-center gap-16 md:grid-cols-2 md:gap-20">
        {/* Text */}
        <div className="reveal">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            Our Story
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-plum">
            Your Cannabis Guides
          </h2>
          <p className="mt-6 text-base font-light leading-[1.8] text-charcoal">
            Our budtenders aren&rsquo;t just friendly &mdash; they know their
            stuff. Whether you&rsquo;re a first-timer or a seasoned connoisseur,
            we&rsquo;ll help you find exactly what you need.
          </p>
          <p className="mt-4 text-base font-light leading-[1.8] text-charcoal">
            Located between Land Park and downtown Sacramento, Delta Health &amp;
            Wellness has been the neighborhood&rsquo;s go-to dispensary for
            quality products, honest advice, and the best deals in town.
          </p>

          {/* Value props */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { value: "Tax-Inclusive", label: "Pricing" },
              { value: "Expert", label: "Budtenders" },
              { value: "850+", label: "Products" },
              { value: "Loyalty", label: "Rewards" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-sage/15 bg-cream-light p-4">
                <span className="block font-display text-lg font-medium text-sage-dark">
                  {item.value}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.08em] text-stone">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual block */}
        <div className="reveal relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-sage-muted/80 to-sage-dark">
          {/* Decorative leaf pattern overlay */}
          <div className="absolute inset-0 opacity-[0.07]" style={{
            backgroundImage: `radial-gradient(circle at 30% 20%, white 1px, transparent 1px),
                              radial-gradient(circle at 70% 60%, white 1px, transparent 1px),
                              radial-gradient(circle at 50% 80%, white 1px, transparent 1px)`,
            backgroundSize: '60px 60px, 80px 80px, 40px 40px',
          }} />
          <div className="flex h-full flex-col items-center justify-center p-8">
            <div className="text-[72px] opacity-30">&#x1F33F;</div>
            <span className="mt-4 font-display text-2xl font-light text-white/70">
              Est. Sacramento
            </span>
            <span className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-white/40">
              Land Park &middot; 17th Street
            </span>
          </div>
          {/* Corner accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-sage-dark/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
