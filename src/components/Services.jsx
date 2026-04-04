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
      className="py-24"
      style={{ background: "linear-gradient(to bottom, white, #F7F5F0)" }}
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-eyebrow mb-4">What we help you secure</span>
          <h2 className="premium-heading mb-4">Our Services</h2>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: "rgba(11, 28, 61, 0.65)" }}
          >
            Comprehensive mortgage solutions for every situation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group card hover:border-accent/40 hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 group-hover:transition-colors group-hover:duration-300"
                style={{
                  backgroundColor: "rgba(11, 28, 61, 0.05)",
                  border: "1px solid rgba(200, 165, 90, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(11, 28, 61, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(11, 28, 61, 0.05)";
                }}
              >
                <service.icon
                  className="w-6 h-6 transition-colors duration-300"
                  style={{ color: "#A98336" }}
                />
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "#0B1C3D" }}
              >
                {service.title}
              </h3>
              <p
                className="leading-relaxed mb-4"
                style={{ color: "rgba(11, 28, 61, 0.7)" }}
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
