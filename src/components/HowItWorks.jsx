import React from "react";
import { MessageSquare, FileSearch, CheckCircle2, Key } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Free Consultation",
      description:
        "Book a no-obligation chat to discuss your goals, budget, and circumstances.",
      step: "01",
    },
    {
      icon: FileSearch,
      title: "Compare & Recommend",
      description:
        "We search 40+ lenders to find the best rates and loan features for you.",
      step: "02",
    },
    {
      icon: CheckCircle2,
      title: "Application & Approval",
      description:
        "We handle all paperwork and liaise with lenders to secure your approval.",
      step: "03",
    },
    {
      icon: Key,
      title: "Settlement",
      description:
        "We guide you through to settlement and beyond. Your success is our success.",
      step: "04",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 text-white relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom right, #071125, #0B1C3D, #142B56)",
      }}
    >
      <div
        className="hidden md:block absolute top-10 -left-28 w-80 h-80 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(200, 165, 90, 0.15)" }}
      />
      <div
        className="hidden md:block absolute -bottom-24 -right-20 w-72 h-72 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <p
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-4"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "#E7D2A8",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            Your path to approval
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-xl text-white/75 max-w-2xl mx-auto">
            Simple, transparent process from start to finish
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div
                className="backdrop-blur-sm rounded-3xl p-8 hover:transition-all hover:duration-300 h-full transition-all duration-300"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 12px 30px -18px rgba(7, 17, 37, 0.32)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.1)";
                }}
              >
                <div
                  className="text-6xl font-bold mb-4 tracking-tight"
                  style={{ color: "rgba(200, 165, 90, 0.35)" }}
                >
                  {step.step}
                </div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #C8A55A, #A98336)",
                    boxShadow: "0 20px 45px -22px rgba(169, 131, 54, 0.45)",
                  }}
                >
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/75 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <div
                    className="w-8 h-0.5"
                    style={{ backgroundColor: "rgba(200, 165, 90, 0.7)" }}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary inline-block">
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}
