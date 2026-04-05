import React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SchemaMarkup from "./SchemaMarkup";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

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
      <section className="py-20 bg-neutral-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Got questions? We have answers
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-card mb-4 overflow-hidden transition-all duration-300 hover:shadow-soft"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-bold text-primary pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-accent flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
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
