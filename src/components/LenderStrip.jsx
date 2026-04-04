import React from "react";

export default function LenderStrip() {
  const lenders = [
    "Commonwealth Bank",
    "Westpac",
    "ANZ",
    "NAB",
    "Macquarie",
    "ING",
    "Bankwest",
    "Suncorp",
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-neutral-50 to-white border-y border-neutral-200/70">
      <div className="section-container">
        <div className="text-center mb-8">
          <span className="section-eyebrow mb-3">Lender network advantage</span>
          <p className="text-primary/70 font-semibold">
            Trusted by Australia's leading lenders
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-5 items-center">
          {lenders.map((lender, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-h-[52px] text-primary/65 font-semibold text-xs md:text-sm rounded-2xl border border-neutral-200 bg-white/90 px-3 text-center shadow-soft hover:border-accent/40 hover:text-primary transition-all duration-300"
            >
              {lender}
            </div>
          ))}
        </div>

        <p className="text-center text-accent-dark font-semibold mt-8 tracking-wide text-sm">
          + 32 More Lenders
        </p>
      </div>
    </section>
  );
}
