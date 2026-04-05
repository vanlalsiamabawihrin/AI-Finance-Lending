import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [formData, setFormData] = useState({
    loanAmount: "",
    loanType: "home-purchase",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quick enquiry:", formData);
  };

  return (
    <section
      id="home"
      className="relative pt-40 md:pt-44 pb-16 md:pb-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(to bottom right, #F7F5F0, white, #ECE8DD)",
        }}
      />
      <div
        className="hidden md:block absolute top-20 -left-32 w-80 h-80 rounded-full blur-3xl -z-10"
        style={{ backgroundColor: "rgba(200, 165, 90, 0.1)" }}
      />
      <div
        className="hidden md:block absolute bottom-10 -right-24 w-72 h-72 rounded-full blur-3xl -z-10"
        style={{ backgroundColor: "rgba(11, 28, 61, 0.1)" }}
      />

      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-eyebrow mb-6">
              Trusted by 2,500+ Australian homeowners
            </span>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight"
              style={{ color: "#0B1C3D" }}
            >
              Your Trusted
              <span className="block mt-2" style={{ color: "#C8A55A" }}>
                Finance Advisor
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl mb-8 leading-relaxed max-w-2xl"
              style={{ color: "rgba(11, 28, 61, 0.7)" }}
            >
              Get expert mortgage advice and access to 40+ lenders.
              <span
                className="block mt-2 font-semibold"
                style={{ color: "#0B1C3D" }}
              >
                Pre-approval in 24 hours. No upfront fees.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-5 shadow-lg hover:shadow-xl transition-shadow"
              >
                Get Pre-Approval Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:1300000000"
                className="btn-secondary inline-flex items-center justify-center gap-2 text-lg px-8 py-5"
              >
                📞 Call 1300 000 000
              </a>
            </div>

            <div
              className="inline-flex items-center gap-2 px-4 py-2 mb-2 rounded-full"
              style={{
                backgroundColor: "rgba(200, 165, 90, 0.1)",
                border: "1px solid rgba(200, 165, 90, 0.3)",
              }}
            >
              <span
                className="text-sm font-semibold"
                style={{ color: "#A98336" }}
              >
                ⚡ 24-Hour Response Guarantee
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <div
                className="flex items-center gap-3"
                style={{ color: "rgba(11, 28, 61, 0.8)" }}
              >
                <CheckCircle2
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#C8A55A" }}
                />
                <span>No upfront fees - free consultation</span>
              </div>
              <div
                className="flex items-center gap-3"
                style={{ color: "rgba(11, 28, 61, 0.8)" }}
              >
                <CheckCircle2
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#C8A55A" }}
                />
                <span>Compare 40+ lenders in minutes</span>
              </div>
              <div
                className="flex items-center gap-3"
                style={{ color: "rgba(11, 28, 61, 0.8)" }}
              >
                <CheckCircle2
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "#C8A55A" }}
                />
                <span>Expert guidance from application to settlement</span>
              </div>
            </div>
          </div>

          <div className="relative bg-white/90 border border-white rounded-[2rem] shadow-card p-6 sm:p-8 lg:p-10 backdrop-blur">
            <h3
              className="text-2xl font-bold mb-2"
              style={{ color: "#0B1C3D" }}
            >
              Quick Loan Enquiry
            </h3>
            <p className="mb-6" style={{ color: "rgba(11, 28, 61, 0.7)" }}>
              Get a free assessment in 24 hours
            </p>

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
