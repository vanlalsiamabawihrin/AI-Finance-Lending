import React from "react";
import {
  Home,
  RefreshCw,
  Building2,
  Hammer,
  Heart,
  TrendingUp,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Home Purchase Loans",
      description:
        "First home or upgrading? We find the perfect loan for your dream property.",
    },
    {
      icon: RefreshCw,
      title: "Refinancing",
      description:
        "Lower your rate, reduce repayments, or access equity. We compare all options.",
    },
    {
      icon: Building2,
      title: "Investment Loans",
      description:
        "Build your property portfolio with tailored investment loan solutions.",
    },
    {
      icon: Hammer,
      title: "Construction Loans",
      description:
        "Building your dream home? We arrange construction and land loans.",
    },
    {
      icon: Heart,
      title: "First Home Buyer",
      description:
        "Special programs, grants, and guidance for first-time buyers.",
    },
    {
      icon: TrendingUp,
      title: "Commercial Loans",
      description:
        "Business property finance and commercial lending solutions.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, var(--neutral-50) 100%)",
      }}
    >
      <div className="section-container">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-6 premium-badge">
            <span>Premium Services</span>
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
            Comprehensive Lending Solutions
          </h2>
          <div className="accent-line mx-auto mb-6"></div>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
              lineHeight: 1.6,
              color: "var(--neutral-600)",
              maxWidth: "42rem",
              margin: "0 auto",
            }}
          >
            Tailored mortgage solutions backed by 15+ years of expertise and
            access to Australia's leading lenders
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group card"
              style={{
                cursor: "pointer",
                transition: "all var(--transition-base)",
              }}
            >
              <div
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "var(--radius-xl)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  background: "var(--neutral-100)",
                  border: "1px solid var(--neutral-200)",
                  transition: "all var(--transition-base)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--neutral-200)";
                  e.currentTarget.style.borderColor = "var(--neutral-300)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--neutral-100)";
                  e.currentTarget.style.borderColor = "var(--neutral-200)";
                }}
              >
                <service.icon
                  className="w-6 h-6"
                  style={{ color: "var(--neutral-700)" }}
                />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  lineHeight: 1.3,
                  color: "var(--primary)",
                  marginBottom: "0.75rem",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.6,
                  color: "var(--neutral-600)",
                }}
              >
                {service.description}
              </p>
              <a
                href="#contact"
                className="font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all"
                style={{ color: "#A98336" }}
              >
                Learn More
                <span>→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary inline-block">
            Discuss Your Needs
          </a>
        </div>
      </div>
    </section>
  );
}
