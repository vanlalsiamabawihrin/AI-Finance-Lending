import React from "react";
import { TrendingDown, Clock, Shield, Award } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: TrendingDown,
      title: "Better Rates",
      description:
        "Access exclusive rates and deals not available to the public. We negotiate on your behalf with 40+ lenders.",
    },
    {
      icon: Clock,
      title: "Save Time",
      description:
        "We handle all the paperwork, comparisons, and negotiations. Get approved faster with expert guidance.",
    },
    {
      icon: Shield,
      title: "No Hidden Fees",
      description:
        "Completely free service for borrowers. We are paid by the lender, so you get expert advice at no cost.",
    },
    {
      icon: Award,
      title: "Expert Support",
      description:
        "15+ years of experience helping Australians secure their dream homes. From pre-approval to settlement.",
    },
  ];

  return (
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
            <span>Our Advantages</span>
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
            Why Choose AI Finance
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
            We are not just mortgage brokers - we are your partners in achieving
            homeownership success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card text-center"
              style={{
                padding: "2rem 1.5rem",
                transition: "all var(--transition-base)",
              }}
            >
              <div
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "var(--radius-xl)",
                  background: "var(--neutral-100)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
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
                <feature.icon
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
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.6,
                  color: "var(--neutral-600)",
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
