import React from "react";
import { Star, Quote } from "lucide-react";

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
    <section
      className="py-24"
      style={{ background: "linear-gradient(to bottom, #F7F5F0, white)" }}
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-eyebrow mb-4">Real homeowner outcomes</span>
          <h2 className="premium-heading mb-4">What Our Clients Say</h2>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: "rgba(11, 28, 61, 0.65)" }}
          >
            Join thousands of happy homeowners who trusted us with their
            mortgage
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6"
                  style={{ fill: "#C8A55A", color: "#C8A55A" }}
                />
              ))}
            </div>
            <span
              className="text-lg font-semibold"
              style={{ color: "rgba(11, 28, 61, 0.8)" }}
            >
              4.9/5 from 500+ reviews
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8 relative">
              <Quote
                className="absolute top-6 right-6 w-12 h-12"
                style={{ color: "rgba(200, 165, 90, 0.1)" }}
              />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5"
                    style={{ fill: "#C8A55A", color: "#C8A55A" }}
                  />
                ))}
              </div>

              <p
                className="leading-relaxed mb-6 relative z-10"
                style={{ color: "rgba(11, 28, 61, 0.75)" }}
              >
                "{testimonial.text}"
              </p>

              <div className="border-t border-neutral-200 pt-4">
                <p className="font-bold" style={{ color: "#0B1C3D" }}>
                  {testimonial.name}
                </p>
                <p
                  className="text-sm"
                  style={{ color: "rgba(11, 28, 61, 0.65)" }}
                >
                  {testimonial.location}
                </p>
                <p
                  className="text-sm font-semibold mt-2"
                  style={{ color: "#A98336" }}
                >
                  {testimonial.loanType}
                </p>
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
  );
}
