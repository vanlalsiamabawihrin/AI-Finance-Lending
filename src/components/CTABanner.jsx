import React from "react";
import { ArrowRight, Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section
      className="py-24 text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #071125, #0B1C3D, #142B56)",
      }}
    >
      <div
        className="hidden md:block absolute -top-24 -right-20 w-80 h-80 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
      />
      <div
        className="hidden md:block absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
      />
      <div className="section-container">
        <div className="relative text-center max-w-4xl mx-auto border border-white/15 rounded-[2rem] px-6 py-12 md:px-12 bg-white/5 backdrop-blur-sm">
          <p
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-5"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "rgba(255, 255, 255, 0.8)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            Let's structure your next move
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "white",
              marginBottom: "1.5rem",
            }}
          >
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Take the first step towards your dream home. Book a free
            consultation with our expert mortgage brokers today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#contact"
              className="font-semibold px-10 py-5 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center gap-3 text-lg"
              style={{
                background: "white",
                color: "var(--primary)",
                boxShadow: "var(--shadow-lg)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "var(--shadow-xl)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--shadow-lg)";
              }}
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:1300000000"
              className="font-semibold px-10 py-5 rounded-full transition-all duration-300 inline-flex items-center gap-3 text-lg"
              style={{
                backgroundColor: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                color: "white",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <Phone className="w-5 h-5" />
              Call 1300 000 000
            </a>
          </div>

          <p className="text-white/70 mt-8 text-sm">
            No obligation • Free service • Expert advice
          </p>
        </div>
      </div>
    </section>
  );
}
