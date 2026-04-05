import React from "react";
import { Star, Quote } from "lucide-react";
import SchemaMarkup from "./SchemaMarkup";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah & James Mitchell",
      location: "Sydney, NSW",
      rating: 5,
      text: "Absolutely fantastic service! We were first home buyers and felt overwhelmed, but the team made everything so easy. They found us a rate 0.5% lower than what our bank offered. Highly recommend!",
      loanType: "First Home Purchase",
    },
    {
      name: "David Chen",
      location: "Melbourne, VIC",
      rating: 5,
      text: "Refinanced our home loan and saved over $400 per month. The process was seamless and the team handled everything. Best financial decision we've made this year.",
      loanType: "Refinance",
    },
    {
      name: "Emma Thompson",
      location: "Brisbane, QLD",
      rating: 5,
      text: "As a self-employed business owner, I thought getting a loan would be impossible. They found a lender who understood my situation and got me approved within 2 weeks. Professional and knowledgeable.",
      loanType: "Investment Property",
    },
    {
      name: "Michael & Lisa Patel",
      location: "Perth, WA",
      rating: 5,
      text: "We've used their services twice now - once for our home and again for an investment property. Always responsive, always professional. They genuinely care about getting the best outcome.",
      loanType: "Investment Loan",
    },
    {
      name: "Rachel Williams",
      location: "Adelaide, SA",
      rating: 5,
      text: "The team went above and beyond. They explained everything in simple terms and were available whenever I had questions. Made buying my first home stress-free!",
      loanType: "First Home Buyer",
    },
    {
      name: "Tom Anderson",
      location: "Gold Coast, QLD",
      rating: 5,
      text: "Exceptional service from start to finish. They saved me thousands on my construction loan and the ongoing support has been incredible. Can't thank them enough!",
      loanType: "Construction Loan",
    },
  ];

  return (
    <>
      <SchemaMarkup type="review" data={testimonials} />
      <section
        className="py-24 md:py-32"
        style={{
          background:
            "linear-gradient(180deg, var(--neutral-50) 0%, #ffffff 100%)",
        }}
      >
        <div className="section-container">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 mb-6 premium-badge">
              <span>Client Success Stories</span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: "var(--primary)",
                marginBottom: "1rem",
              }}
            >
              Trusted by Australia's Homeowners
            </h2>
            <div className="accent-line mx-auto mb-6"></div>
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.125rem)",
                lineHeight: 1.6,
                color: "var(--neutral-600)",
                maxWidth: "42rem",
                margin: "0 auto 2rem",
              }}
            >
              Join thousands of satisfied clients who achieved their property
              goals with our expert guidance
            </p>
            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
              style={{
                background: "var(--neutral-100)",
                border: "1px solid var(--neutral-200)",
              }}
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5"
                    style={{ fill: "var(--accent)", color: "var(--accent)" }}
                  />
                ))}
              </div>
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--primary)",
                }}
              >
                4.9/5 from 500+ reviews
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card"
                style={{ padding: "2rem", position: "relative" }}
              >
                <Quote
                  className="absolute top-6 right-6 w-10 h-10"
                  style={{
                    color: "rgba(212, 175, 55, 0.12)",
                    strokeWidth: 1.5,
                  }}
                />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      style={{ fill: "var(--accent)", color: "var(--accent)" }}
                    />
                  ))}
                </div>

                <p
                  style={{
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                    color: "var(--neutral-700)",
                    marginBottom: "1.5rem",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  "{testimonial.text}"
                </p>

                <div
                  style={{
                    borderTop: "1px solid var(--neutral-200)",
                    paddingTop: "1rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--primary)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--neutral-600)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {testimonial.location}
                  </p>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      color: "var(--neutral-700)",
                      background: "var(--neutral-100)",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "var(--radius-full)",
                      border: "1px solid var(--neutral-200)",
                    }}
                  >
                    {testimonial.loanType}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#contact" className="btn-primary inline-block">
              Start Your Success Story
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
