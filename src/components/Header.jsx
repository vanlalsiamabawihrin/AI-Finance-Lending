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
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-soft border border-neutral-100">
                <img
                  src={appLogo}
                  alt="AI Finance logo"
                  className="h-12 w-auto rounded-2xl"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className="font-extrabold text-lg leading-tight tracking-tight"
                  style={{ color: "#0B1C3D" }}
                >
                  AI Finance & Lending
                </span>
                <span
                  className="hidden sm:block text-[10px] font-bold leading-tight tracking-[0.2em]"
                  style={{ color: "#A98336" }}
                >
                  HELPING YOU GET APPROVED
                </span>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-semibold text-sm transition-colors duration-200"
                  style={{ color: "rgba(11, 28, 61, 0.9)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#A98336";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(11, 28, 61, 0.9)";
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:1300000000"
                className="flex items-center gap-2 transition-colors"
                style={{ color: "rgba(11, 28, 61, 0.9)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#A98336";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(11, 28, 61, 0.9)";
                }}
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">1300 000 000</span>
              </a>
              <a href="#contact" className="btn-primary text-sm py-3 px-6">
                Book Free Consultation
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
            <div className="lg:hidden pb-4 border-t border-neutral-200/80 pt-4 max-h-[70vh] overflow-y-auto">
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
