const deals = [
  {
    day: "Mon",
    title: "Munchie Monday",
    description: "15% off all edibles & drinks",
    accent: "bg-sage/15 text-sage-dark",
  },
  {
    day: "Tue",
    title: "Topical Tuesday",
    description: "20% off topicals & tinctures",
    accent: "bg-gold/15 text-gold",
  },
  {
    day: "Wed",
    title: "Wax Wednesday",
    description: "15% off all concentrates",
    accent: "bg-sage/15 text-sage-dark",
  },
  {
    day: "Thu",
    title: "Thrifty Thursday",
    description: "10% off storewide",
    accent: "bg-gold/15 text-gold",
  },
  {
    day: "Fri",
    title: "BOGO Friday",
    description: "Buy one pre-roll, get one 50% off",
    accent: "bg-sage/15 text-sage-dark",
  },
  {
    day: "Sat–Sun",
    title: "Weekend Vibes",
    description: "Rotating vendor pop-ups & samples",
    accent: "bg-gold/15 text-gold",
  },
];

export default function Deals() {
  return (
    <section className="bg-ivory px-6 py-24 md:px-12">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            Daily Deals
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-plum">
            Something Special Every Day
          </h2>
          <p className="mx-auto mt-4 max-w-[500px] text-base font-light leading-relaxed text-stone">
            We keep it fresh with rotating daily specials. Stop by and save.
          </p>
        </div>

        <div className="reveal-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deals.map((deal) => (
            <div
              key={deal.day}
              className="reveal flex items-start gap-4 rounded-2xl border border-sage/10 bg-cream-light p-6 transition-all hover:border-sage/20 hover:shadow-[0_8px_32px_rgba(68,56,80,0.05)]"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xs font-bold uppercase tracking-wide ${deal.accent}`}
              >
                {deal.day}
              </div>
              <div>
                <h3 className="font-display text-lg font-normal text-plum">
                  {deal.title}
                </h3>
                <p className="mt-1 text-sm font-light text-stone">
                  {deal.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs font-light text-stone/60">
          Deals cannot be combined with other offers. While supplies last.
        </p>
      </div>
    </section>
  );
}
