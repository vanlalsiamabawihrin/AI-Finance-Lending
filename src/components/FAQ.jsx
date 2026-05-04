import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import SchemaMarkup from "./SchemaMarkup";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const observerRef = useRef();

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    // Observe all elements with data-animate attribute
    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const faqs = [
    {
      question: "How much does a mortgage broker cost?",
      answer:
        "Our service is completely free for borrowers. We are paid a commission by the lender once your loan settles. There are no upfront fees, hidden charges, or ongoing costs to you.",
    },
    {
      question: "How long does the home loan process take?",
      answer:
        "Typically, pre-approval takes 24-48 hours. Full approval can take 5-10 business days depending on the lender and complexity of your application. We work to expedite the process wherever possible.",
    },
    {
      question: "Can I get a home loan with bad credit?",
      answer:
        "Yes, it is possible. We work with specialist lenders who consider applications with credit issues. While rates may be higher, we can help you find a solution and work towards improving your credit for better rates in the future.",
    },
    {
      question: "What deposit do I need for a home loan?",
      answer:
        "Generally, a 20% deposit helps you avoid Lenders Mortgage Insurance (LMI). However, we can arrange loans with as little as 5% deposit. First home buyers may qualify for government schemes with even lower deposits.",
    },
    {
      question: "Should I refinance my current home loan?",
      answer:
        "If you can save 0.5% or more on your interest rate, refinancing is usually worthwhile. We offer a free loan health check to compare your current loan against available options and calculate potential savings.",
    },
    {
      question: "How do I know if I can afford a home loan?",
      answer:
        "We provide a free borrowing capacity assessment based on your income, expenses, and financial commitments. Use our calculators for an estimate, then book a consultation for an accurate assessment.",
    },
    {
      question: "What documents do I need to apply?",
      answer:
        "Typically: ID, payslips (last 2-3 months), tax returns (if self-employed), bank statements (3-6 months), and details of assets and liabilities. We provide a complete checklist once we understand your situation.",
    },
    {
      question: "Can you help with investment property loans?",
      answer:
        "Absolutely! We specialize in investment loans and can help structure your loan for maximum tax benefits. We work with lenders who understand property investment and offer competitive rates for investors.",
    },
  ];

  return (
    <>
      <SchemaMarkup type="faq" data={faqs} />
      <section className="py-24 md:py-32 bg-neutral-50">
        <div className="section-container">
          <div
            data-animate="fade-up"
            id="faq-header"
            className={`text-center mb-16 md:mb-20 transition-all duration-1000 transform ${
              visibleElements.has("faq-header")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 mb-6 premium-badge">
              <span>Quick Answers</span>
            </div>
            <h2
              data-animate="fade-up"
              id="faq-title"
              className={`transition-all duration-1000 delay-200 transform ${
                visibleElements.has("faq-title")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
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
              Frequently Asked Questions
            </h2>
            <div className="accent-line mx-auto mb-6"></div>
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.125rem)",
                lineHeight: 1.6,
                color: "var(--neutral-600)",
                maxWidth: "42rem",
                margin: "0 auto",
              }}
            >
              Got questions? We have the answers you need
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card mb-4 overflow-hidden"
                style={{
                  transition: "all var(--transition-base)",
                  border:
                    openIndex === index
                      ? "1px solid var(--neutral-300)"
                      : "1px solid var(--neutral-100)",
                }}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                  style={{
                    transition: "all var(--transition-base)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      color: "var(--primary)",
                      paddingRight: "2rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    style={{ color: "var(--neutral-600)" }}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <a href="#contact" className="btn-primary inline-block">
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
