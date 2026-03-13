const reviews = [
  {
    name: "Marcus T.",
    text: "Best dispensary in Sacramento, hands down. The staff is incredibly knowledgeable and always helps me find exactly what I need. Tax-inclusive pricing is a huge plus.",
    rating: 5,
  },
  {
    name: "Sarah L.",
    text: "Love this place! Clean, welcoming atmosphere and their edible selection is unmatched. The budtenders took the time to explain everything to me as a first-timer.",
    rating: 5,
  },
  {
    name: "David K.",
    text: "Great deals, great vibes. I've been coming here for over a year and the quality is consistently top-notch. The loyalty program saves me so much money.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-gold">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-sm">&#9733;</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-cream px-6 py-24 md:px-12">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            What People Say
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-plum">
            Loved by Sacramento
          </h2>
          <p className="mx-auto mt-4 max-w-[500px] text-base font-light leading-relaxed text-stone">
            Over 2,200 five-star reviews from our community.
          </p>
        </div>

        <div className="reveal-stagger grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="reveal rounded-2xl border border-sage/10 bg-ivory p-8 transition-all hover:border-sage/20 hover:shadow-[0_8px_32px_rgba(68,56,80,0.06)]"
            >
              <Stars count={review.rating} />
              <p className="mt-4 text-[15px] font-light leading-[1.7] text-charcoal">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.1em] text-sage-dark">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
