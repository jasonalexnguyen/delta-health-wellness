"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I need a medical card to purchase?",
    a: "No. Delta Health & Wellness is a recreational (adult-use) dispensary. You just need a valid government-issued ID showing you are 21 or older.",
  },
  {
    q: "Is your pricing tax-inclusive?",
    a: "Yes! The price you see on the shelf is the price you pay at the register. No surprises at checkout.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash and debit cards. There is an ATM available on-site for your convenience.",
  },
  {
    q: "Is there parking available?",
    a: "Yes, we have a dedicated parking lot right next to the store with free parking for all customers.",
  },
  {
    q: "Do you offer delivery?",
    a: "We currently offer in-store shopping and online ordering for pickup through Weedmaps. Place your order ahead and skip the wait!",
  },
  {
    q: "How does your loyalty program work?",
    a: "Earn points with every purchase. Points can be redeemed for discounts on future orders. Ask a budtender to sign you up — it's free!",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-plum/8">
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-sage-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-dark"
      >
        <span className="font-display text-lg font-normal text-plum">
          {q}
        </span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-plum/15 text-sm text-stone transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[15px] font-light leading-[1.7] text-stone">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="bg-cream px-6 py-24 md:px-12">
      <div className="mx-auto max-w-[700px]">
        <div className="mb-10 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            FAQ
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-plum">
            Common Questions
          </h2>
        </div>

        <div className="reveal">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
