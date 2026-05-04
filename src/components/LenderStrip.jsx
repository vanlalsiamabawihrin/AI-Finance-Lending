import React, { useState, useEffect, useRef } from "react";

export default function LenderStrip() {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const observerRef = useRef();

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    // Observe all elements with data-animate attribute
    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

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
    <section className="py-16 md:py-20 bg-gradient-to-b from-neutral-50 to-white border-y border-neutral-200/70">
      <div className="section-container">
        <div
          data-animate="fade-up"
          id="lenderstrip-header"
          className={`text-center mb-8 transition-all duration-1000 transform ${
            visibleElements.has("lenderstrip-header")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-4 premium-badge">
            <span>Lender Network</span>
          </div>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--neutral-600)",
              fontWeight: 600,
            }}
          >
            Trusted by Australia's leading lenders
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-5 items-center">
          {lenders.map((lender, index) => (
            <div
              key={index}
              data-animate="fade-up"
              id={`lenderstrip-logo-${index}`}
              className={`flex items-center justify-center min-h-[52px] font-semibold text-xs md:text-sm rounded-2xl border border-neutral-200 bg-white/90 px-3 text-center card transition-all duration-300 transform hover:-translate-y-1 ${
                visibleElements.has(`lenderstrip-logo-${index}`)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                color: "var(--neutral-700)",
                transition: "all var(--transition-base)",
                transitionDelay: `${200 + index * 50}ms`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--neutral-300)";
                e.currentTarget.style.color = "var(--primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--neutral-200)";
                e.currentTarget.style.color = "var(--neutral-700)";
              }}
            >
              {lender}
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            color: "var(--neutral-700)",
            fontWeight: 600,
            letterSpacing: "0.05em",
            fontSize: "0.875rem",
            marginTop: "2rem",
          }}
        >
          + 32 More Lenders
        </p>
      </div>
    </section>
  );
}
