export default function Location() {
  return (
    <section id="visit" className="bg-cream-light px-6 py-24 md:px-12">
      <div className="mx-auto max-w-[1100px]">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sage">
          Visit Us
        </p>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-plum">
          Find Your Way
        </h2>

        <div className="mt-10 grid items-start gap-12 md:grid-cols-2 md:gap-16">
          {/* Info */}
          <div className="reveal">
            <h3 className="font-display text-xl font-normal text-plum">
              Address
            </h3>
            <address className="mt-3 text-[15px] font-light not-italic leading-relaxed text-charcoal">
              2416 17th St
              <br />
              Sacramento, CA 95818
            </address>

            <h3 className="mt-8 font-display text-xl font-normal text-plum">
              Hours
            </h3>
            <table className="mt-3 w-full border-collapse">
              <tbody>
                <tr>
                  <td className="py-1.5 text-sm font-light text-charcoal">
                    Monday &ndash; Sunday
                  </td>
                  <td className="py-1.5 text-right text-sm font-normal text-charcoal">
                    9:00 AM &ndash; 9:00 PM
                  </td>
                </tr>
              </tbody>
            </table>

            <h3 className="mt-8 font-display text-xl font-normal text-plum">
              Contact
            </h3>
            <p className="mt-3 text-[15px] font-light text-charcoal">
              <a href="tel:+19168850888" className="transition-colors hover:text-sage-dark">
                (916) 885-0888
              </a>
            </p>

            <a
              href="https://www.google.com/maps/dir//2416+17th+St,+Sacramento,+CA+95818"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border-[1.5px] border-sage bg-transparent px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-sage-dark transition-all hover:border-sage-dark hover:bg-sage-dark hover:text-ivory"
            >
              Get Directions &rarr;
            </a>
          </div>

          {/* Map embed */}
          <div className="reveal aspect-square overflow-hidden rounded-2xl border border-sage/15">
            <iframe
              title="Delta Health &amp; Wellness location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.2!2d-121.4935!3d38.5635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad0f8a4b1e9f3%3A0x1c9e6c5a3d8f4b2e!2s2416%2017th%20St%2C%20Sacramento%2C%20CA%2095818!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
