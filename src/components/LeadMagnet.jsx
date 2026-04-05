import React from "react";
import { Download, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function LeadMagnet() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lead magnet download:", formData);
  };

  const benefits = [
    "Step-by-step home buying checklist",
    "How to improve your borrowing capacity",
    "Understanding interest rates and loan types",
    "First home buyer grants and schemes",
    "Tips to speed up loan approval",
  ];

  return (
    <section
      className="py-20 text-white relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0B1C3D, #071125)" }}
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
        ></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 mb-6 premium-badge"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <span>FREE DOWNLOAD</span>
            </div>
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
              The Ultimate Australian Home Buyer's Guide
            </h2>
            <p
              className="text-xl mb-8 leading-relaxed"
              style={{ color: "rgba(255, 255, 255, 0.7)" }}
            >
              Download our comprehensive 30-page guide packed with insider tips,
              checklists, and strategies to help you secure your dream home.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-6 h-6 flex-shrink-0 mt-0.5"
                    style={{ color: "rgba(255, 255, 255, 0.7)" }}
                  />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <div
              className="flex items-center gap-4"
              style={{ color: "rgba(255, 255, 255, 0.7)" }}
            >
              <Download className="w-6 h-6" />
              <span className="font-semibold">
                Instant PDF Download - No Credit Card Required
              </span>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-soft p-8 lg:p-10">
            <h3
              className="text-2xl font-bold mb-2"
              style={{ color: "#0B1C3D" }}
            >
              Get Your Free Guide
            </h3>
            <p className="mb-6" style={{ color: "rgba(11, 28, 61, 0.6)" }}>
              Enter your details to download instantly
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="full-name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors text-gray-900"
                  style={{ borderColor: "#ECE8DD" }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#C8A55A";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#ECE8DD";
                  }}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email-address"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email-address"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors text-gray-900"
                  style={{ borderColor: "#ECE8DD" }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#C8A55A";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#ECE8DD";
                  }}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Free Guide
              </button>

              <p
                className="text-xs text-center"
                style={{ color: "rgba(11, 28, 61, 0.5)" }}
              >
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
