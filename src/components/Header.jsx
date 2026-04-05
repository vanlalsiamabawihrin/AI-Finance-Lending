import React from "react";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import appLogo from "../images/app-logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [trustBarHeight, setTrustBarHeight] = useState(44);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const trustBar = document.getElementById("trust-bar");
    if (!trustBar) {
      return;
    }

    const updateTrustBarHeight = () => {
      setTrustBarHeight(Math.ceil(trustBar.getBoundingClientRect().height));
    };

    updateTrustBarHeight();

    const observer = new ResizeObserver(updateTrustBarHeight);
    observer.observe(trustBar);
    window.addEventListener("resize", updateTrustBarHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateTrustBarHeight);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Calculators", href: "#calculators" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full z-[60] transition-all duration-300 ${
        isScrolled ? "py-3" : "py-4"
      }`}
      style={{ top: `${trustBarHeight}px` }}
    >
      <nav className="section-container">
        <div
          className={`glass-nav rounded-2xl px-4 md:px-6 transition-all duration-300 ${
            isScrolled ? "shadow-card" : ""
          }`}
        >
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-1">
              {/* use gradient like 24 hour response Guarantee */}
              <div
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "var(--radius-xl)",
                  background:
                    "linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(212, 175, 55, 0.12) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(212, 175, 55, 0.15)",
                  boxShadow: "var(--shadow-xs)",
                }}
              >
                <img
                  src={appLogo}
                  alt="AI Finance & Lending - Australian Mortgage Broker Logo"
                  style={{
                    height: "2.75rem",
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
                    letterSpacing: "-0.01em",
                    color: "var(--primary)",
                  }}
                >
                  AI Finance & Lending
                </span>
                <span
                  className="hidden sm:block"
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    lineHeight: 1.2,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--accent-dark)",
                  }}
                >
                  Premium Advisory
                </span>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    color: "var(--neutral-700)",
                    transition: "all var(--transition-base)",
                    padding: "0.5rem 0.75rem",
                    borderRadius: "var(--radius-md)",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--primary)";
                    e.currentTarget.style.background =
                      "rgba(212, 175, 55, 0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--neutral-700)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:1300000000"
                className="flex items-center gap-2"
                style={{
                  color: "var(--neutral-700)",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  transition: "all var(--transition-base)",
                  padding: "0.5rem 0.75rem",
                  borderRadius: "var(--radius-md)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent-dark)";
                  e.currentTarget.style.background = "rgba(212, 175, 55, 0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--neutral-700)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <Phone className="w-4 h-4" />
                <span>1300 000 000</span>
              </a>
              <a
                href="#contact"
                className="btn-primary"
                style={{ fontSize: "0.9375rem", padding: "0.75rem 1.5rem" }}
              >
                Get Started
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-primary p-2 rounded-xl hover:bg-primary/5 transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden pb-4 border-t border-neutral-200/80 pt-4 h-screen overflow-y-auto">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-primary hover:text-accent-dark font-semibold transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="tel:1300000000"
                  className="flex items-center gap-2 text-primary font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  1300 000 000
                </a>
                <a
                  href="#contact"
                  className="btn-primary text-center text-sm py-3"
                >
                  Book Free Consultation
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
