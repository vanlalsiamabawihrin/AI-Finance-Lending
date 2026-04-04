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
      className="py-24"
      style={{ background: "linear-gradient(to bottom, #F7F5F0, white)" }}
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="section-eyebrow mb-4">
            Why clients choose AI Finance
          </span>
          <h2 className="premium-heading mb-4">Why Choose Us?</h2>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: "rgba(11, 28, 61, 0.65)" }}
          >
            We are not just mortgage brokers - we are your partners in achieving
            homeownership
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card hover:-translate-y-1 hover:scale-[1.02]"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background:
                    "linear-gradient(to bottom right, #C8A55A, #A98336)",
                  boxShadow: "0 20px 45px -22px rgba(169, 131, 54, 0.45)",
                }}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: "#0B1C3D" }}
              >
                {feature.title}
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "rgba(11, 28, 61, 0.6)" }}
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
