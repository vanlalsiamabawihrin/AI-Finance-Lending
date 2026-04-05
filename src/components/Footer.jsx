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
      className="text-white pt-16 pb-8"
      style={{ background: "linear-gradient(to bottom, #0B1C3D, #071125)" }}
    >
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-soft border border-white/15">
                <img
                  src={appLogo}
                  alt="AI Finance & Lending - Australian Mortgage Broker Logo"
                  className="h-8 w-auto rounded-2xl"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight">
                  AI Finance
                </span>
                <span
                  className="text-xs font-semibold leading-tight tracking-[0.16em]"
                  style={{ color: "#E7D2A8" }}
                >
                  PREMIUM ADVISORY
                </span>
              </div>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Your trusted partner in finding the perfect home loan solution.
              Expert advice, competitive rates, and personalized service.
            </p>
            <div className="flex gap-4">
              <button
                type="button"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#C8A55A";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.1)";
                }}
                aria-label="Facebook"
              >
                <span className="text-white font-bold text-sm">f</span>
              </button>
              <button
                type="button"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#C8A55A";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.1)";
                }}
                aria-label="Instagram"
              >
                <span className="text-white font-bold text-sm">📷</span>
              </button>
              <button
                type="button"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#C8A55A";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.1)";
                }}
                aria-label="LinkedIn"
              >
                <span className="text-white font-bold text-sm">in</span>
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
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
            <h4 className="text-lg font-bold mb-6">Resources</h4>
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
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
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
