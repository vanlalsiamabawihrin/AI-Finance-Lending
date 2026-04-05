import React from "react";
import { Award, Users, TrendingUp, Heart } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Users, value: "2,500+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: TrendingUp, value: "$850M+", label: "Loans Settled" },
    { icon: Heart, value: "4.9/5", label: "Client Rating" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-neutral-100 to-neutral-50 rounded-3xl opacity-60 blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop"
                alt="Professional mortgage broker in Melbourne helping Australian families with home loans and refinancing"
                className="relative rounded-3xl shadow-xl w-full h-[500px] object-cover"
                style={{ boxShadow: "var(--shadow-xl)" }}
              />
              <div
                className="hidden sm:block absolute -bottom-6 -right-6 bg-white rounded-2xl card p-6"
                style={{ boxShadow: "var(--shadow-lg)" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: "var(--primary)",
                    marginBottom: "0.25rem",
                    lineHeight: 1,
                  }}
                >
                  15+
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--neutral-600)",
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                  }}
                >
                  Years Experience
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 mb-6 premium-badge">
              <span>About Us</span>
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
              Your Trusted Mortgage Partner
            </h2>
            <div className="accent-line mb-6"></div>
            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.7,
                color: "var(--neutral-600)",
                marginBottom: "1.5rem",
              }}
            >
              With over 15 years of experience in the Australian mortgage
              industry, we have helped thousands of families achieve their
              homeownership dreams. Our commitment to personalized service and
              expert guidance sets us apart.
            </p>
            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.7,
                color: "var(--neutral-600)",
                marginBottom: "2rem",
              }}
            >
              As an accredited mortgage broker with access to over 40 lenders,
              we work for you - not the banks. Our mission is simple: find you
              the best loan at the best rate with the best terms possible.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 card"
                  style={{
                    background: "var(--neutral-50)",
                    border: "1px solid var(--neutral-100)",
                  }}
                >
                  <stat.icon
                    className="w-6 h-6 mx-auto mb-3"
                    style={{ color: "var(--neutral-600)" }}
                  />
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.875rem",
                      fontWeight: 700,
                      color: "var(--primary)",
                      marginBottom: "0.25rem",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--neutral-600)",
                      fontWeight: 500,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-primary inline-block text-center"
              >
                Book a Consultation
              </a>
              <a
                href="tel:1300000000"
                className="btn-secondary inline-block text-center"
              >
                Call 1300 000 000
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
