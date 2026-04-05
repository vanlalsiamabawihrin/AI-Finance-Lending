import React from "react";
import { Mail, Phone, MapPin, Link } from "lucide-react";
import appLogo from "../images/app-logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Home Loans", href: "#services" },
      { name: "Refinancing", href: "#services" },
      { name: "Investment Loans", href: "#services" },
      { name: "First Home Buyer", href: "#services" },
      { name: "Construction Loans", href: "#services" },
      { name: "Commercial Loans", href: "#services" },
    ],
    resources: [
      { name: "Mortgage Calculators", href: "#calculators" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "FAQ", href: "#faq" },
      { name: "About Us", href: "#about" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact", href: "#contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Disclaimer", href: "#" },
      { name: "Complaints", href: "#" },
    ],
  };

  return (
    <footer
      className="text-white pt-20 pb-8"
      style={{
        background:
          "linear-gradient(180deg, var(--primary) 0%, var(--primary-dark) 100%)",
      }}
    >
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "var(--radius-xl)",
                  background: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <img
                  src={appLogo}
                  alt="AI Finance & Lending - Australian Mortgage Broker Logo"
                  style={{
                    height: "2rem",
                    width: "auto",
                    borderRadius: "var(--radius-lg)",
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    lineHeight: 1.2,
                    color: "white",
                  }}
                >
                  AI Finance & Lending
                </span>
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(255, 255, 255, 0.6)",
                  }}
                >
                  Premium Advisory
                </span>
              </div>
            </div>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "0.9375rem",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
              }}
            >
              Your trusted partner in premium mortgage solutions. Expert
              guidance, exclusive rates, and personalized service.
            </p>
            <div className="flex gap-4">
              <button
                type="button"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "var(--radius-lg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all var(--transition-base)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--accent)";
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                aria-label="Facebook"
              >
                <span
                  style={{
                    color: "white",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                  }}
                >
                  f
                </span>
              </button>
              <button
                type="button"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "var(--radius-lg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all var(--transition-base)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--accent)";
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                aria-label="Instagram"
              >
                <span style={{ fontSize: "0.875rem" }}>📷</span>
              </button>
              <button
                type="button"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "var(--radius-lg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all var(--transition-base)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--accent)";
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                aria-label="LinkedIn"
              >
                <span
                  style={{
                    color: "white",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                  }}
                >
                  in
                </span>
              </button>
            </div>
          </div>

          <div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.125rem",
                fontWeight: 700,
                marginBottom: "1.5rem",
                color: "white",
              }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="transition-colors"
                    style={{ color: "rgba(255, 255, 255, 0.7)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#E7D2A8";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.125rem",
                fontWeight: 700,
                marginBottom: "1.5rem",
                color: "white",
              }}
            >
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="transition-colors"
                    style={{ color: "rgba(255, 255, 255, 0.6)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#C8A55A";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)";
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.125rem",
                fontWeight: 700,
                marginBottom: "1.5rem",
                color: "white",
              }}
            >
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  style={{ color: "#E7D2A8" }}
                />
                <div>
                  <a
                    href="tel:1300000000"
                    className="transition-colors"
                    style={{ color: "rgba(255, 255, 255, 0.7)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#E7D2A8";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                    }}
                  >
                    1300 000 000
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  style={{ color: "#E7D2A8" }}
                />
                <div>
                  <a
                    href="mailto:hello@aifinancelending.com.au"
                    className="transition-colors break-all"
                    style={{ color: "rgba(255, 255, 255, 0.7)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#E7D2A8";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                    }}
                  >
                    hello@aifinancelending.com.au
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  style={{ color: "#E7D2A8" }}
                />
                <div style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                  Level 10, 123 Queen Street
                  <br />
                  Melbourne VIC 3000
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-sm text-center md:text-left"
              style={{ color: "rgba(255, 255, 255, 0.7)" }}
            >
              © {currentYear} AI Finance. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="transition-colors text-sm"
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#E7D2A8";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-6 text-center">
            <p
              className="text-xs leading-relaxed max-w-4xl mx-auto"
              style={{ color: "rgba(255, 255, 255, 0.5)" }}
            >
              Australian Credit Licence Number 123456. This website provides
              general information only and does not constitute financial advice.
              You should consider seeking independent legal, financial, taxation
              or other advice to check how the information relates to your
              unique circumstances.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
