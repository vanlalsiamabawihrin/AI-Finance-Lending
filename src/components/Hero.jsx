import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Award,
  TrendingUp,
  Phone,
} from "lucide-react";

export default function Hero() {
  const [formData, setFormData] = useState({
    loanAmount: "",
    loanType: "home-purchase",
  });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quick enquiry:", formData);
  };

  return (
    <section
      id="home"
      className="relative pt-45 md:pt-60 pb-20 md:pb-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #fafaf9 0%, #ffffff 100%)",
      }}
    >
      {/* Sophisticated Background Pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.03) 0%, transparent 50%),
                         radial-gradient(circle at 80% 80%, rgba(10, 22, 40, 0.03) 0%, transparent 50%)`,
        }}
      />

      {/* Premium Grid Pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 22, 40, 0.02) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(10, 22, 40, 0.02) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            data-animate="fade-up"
            id="hero-badge"
            className={`transition-all duration-1000 transform ${
              visibleElements.has("hero-badge")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Premium Trust Badge */}
            <div className="inline-flex items-center gap-2 mb-6 premium-badge">
              <Shield
                className="w-3.5 h-3.5"
                style={{ color: "var(--neutral-600)" }}
              />
              <span>Trusted by 2,500+ Australian Homeowners</span>
            </div>

            <h1
              data-animate="fade-up"
              id="hero-title"
              className={`transition-all duration-1000 delay-200 transform ${
                visibleElements.has("hero-title")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "1.5rem",
                color: "var(--primary)",
              }}
            >
              Premium Mortgage
              <span
                className="block"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Solutions for Australia
              </span>
            </h1>

            <p
              data-animate="fade-up"
              id="hero-description"
              className={`transition-all duration-1000 delay-300 transform ${
                visibleElements.has("hero-description")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                lineHeight: 1.6,
                color: "var(--neutral-600)",
                marginBottom: "2rem",
                maxWidth: "600px",
              }}
            >
              Access exclusive rates from 40+ premium lenders. Expert guidance,
              <strong style={{ color: "var(--primary)", fontWeight: 600 }}>
                {" "}
                24-hour pre-approval
              </strong>
              , and zero upfront fees.
            </p>

            {/* Trust Indicators */}
            <div
              data-animate="fade-up"
              id="hero-trust"
              className={`flex flex-wrap gap-4 mb-8 transition-all duration-1000 delay-400 transform ${
                visibleElements.has("hero-trust")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="trust-indicator">
                <Award
                  className="w-4 h-4"
                  style={{ color: "var(--neutral-600)" }}
                />
                <span>15+ Years Experience</span>
              </div>
              <div className="trust-indicator">
                <TrendingUp
                  className="w-4 h-4"
                  style={{ color: "var(--neutral-600)" }}
                />
                <span>$850M+ Settled</span>
              </div>
            </div>

            <div
              data-animate="fade-up"
              id="hero-cta"
              className={`flex flex-col sm:flex-row gap-4 mb-10 transition-all duration-1000 delay-500 transform ${
                visibleElements.has("hero-cta")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <a href="#contact" className="btn-primary group">
                <span>Get Pre-Approval Now</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="tel:1300000000" className="btn-secondary group">
                <Phone className="w-4 h-4" />
                <span>1300 000 000</span>
              </a>
            </div>

            {/* Key Benefits */}
            <div
              data-animate="fade-up"
              id="hero-benefits"
              className={`space-y-3 transition-all duration-1000 delay-600 transform ${
                visibleElements.has("hero-benefits")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {[
                "No upfront fees - complimentary consultation",
                "Compare 40+ premium lenders instantly",
                "White-glove service from application to settlement",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                  style={{ color: "var(--neutral-700)" }}
                >
                  <div
                    style={{
                      marginTop: "2px",
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "var(--neutral-200)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <CheckCircle2
                      className="w-3 h-3"
                      style={{ color: "var(--neutral-600)" }}
                    />
                  </div>
                  <span style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            data-animate="fade-up"
            id="hero-form"
            className={`relative bg-white border rounded-[1.5rem] p-6 sm:p-8 lg:p-10 transition-all duration-1000 delay-700 transform ${
              visibleElements.has("hero-form")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{
              border: "1px solid var(--neutral-100)",
              boxShadow: "var(--shadow-xl)",
            }}
          >
            {/* Form Header with Accent Line */}
            <div className="mb-8">
              <div className="accent-line mb-4"></div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
                  fontWeight: 700,
                  color: "var(--primary)",
                  marginBottom: "0.5rem",
                }}
              >
                Start Your Application
              </h3>
              <p style={{ color: "var(--neutral-600)", fontSize: "0.9375rem" }}>
                Complimentary assessment • 24-hour response
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="loan-type"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Loan Type
                </label>
                <select
                  id="loan-type"
                  value={formData.loanType}
                  onChange={(e) =>
                    setFormData({ ...formData, loanType: e.target.value })
                  }
                  className="field-input"
                >
                  <option value="home-purchase">Home Purchase</option>
                  <option value="refinance">Refinance</option>
                  <option value="investment">Investment Property</option>
                  <option value="construction">Construction Loan</option>
                  <option value="first-home">First Home Buyer</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="loan-amount"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Loan Amount
                </label>
                <input
                  id="loan-amount"
                  type="text"
                  placeholder="e.g., $500,000"
                  value={formData.loanAmount}
                  onChange={(e) =>
                    setFormData({ ...formData, loanAmount: e.target.value })
                  }
                  className="field-input"
                />
              </div>

              <div>
                <label
                  htmlFor="your-name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  id="your-name"
                  type="text"
                  placeholder="Full name"
                  className="field-input"
                />
              </div>

              <div>
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  id="phone-number"
                  type="tel"
                  placeholder="04XX XXX XXX"
                  className="field-input"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="field-input"
                />
              </div>

              <button type="submit" className="w-full btn-primary">
                Get My Free Assessment
              </button>

              <p
                className="text-xs text-center"
                style={{ color: "rgba(11, 28, 61, 0.6)" }}
              >
                By submitting, you agree to our privacy policy. We'll never
                share your details.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
