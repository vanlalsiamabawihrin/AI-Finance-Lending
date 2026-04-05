import React from "react";
import { Calculator, PiggyBank, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function Calculators() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const calculateRepayment = () => {
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;
    const monthlyPayment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
    return monthlyPayment.toFixed(2);
  };

  const calculatorTools = [
    {
      icon: Calculator,
      title: "Repayment Calculator",
      description: "Calculate your monthly home loan repayments",
    },
    {
      icon: PiggyBank,
      title: "Borrowing Power",
      description: "Find out how much you can borrow",
    },
    {
      icon: TrendingUp,
      title: "Refinance Savings",
      description: "See how much you could save by refinancing",
    },
  ];

  return (
    <section
      id="calculators"
      className="py-24 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, var(--neutral-50) 100%)",
      }}
    >
      <div className="section-container">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-6 premium-badge">
            <span>Financial Tools</span>
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
            Mortgage Calculators
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
            Plan your finances with our free calculators
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {calculatorTools.map((tool, index) => (
            <div
              key={index}
              className="card text-center hover:-translate-y-1 cursor-pointer"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{
                  backgroundColor: "var(--neutral-100)",
                  border: "1px solid var(--neutral-200)",
                  transition: "all var(--transition-base)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--neutral-200)";
                  e.currentTarget.style.borderColor = "var(--neutral-300)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--neutral-100)";
                  e.currentTarget.style.borderColor = "var(--neutral-200)";
                }}
              >
                <tool.icon
                  className="w-8 h-8"
                  style={{ color: "var(--neutral-700)" }}
                />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  lineHeight: 1.3,
                  color: "var(--primary)",
                  marginBottom: "0.75rem",
                }}
              >
                {tool.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.6,
                  color: "var(--neutral-600)",
                  marginBottom: "1rem",
                }}
              >
                {tool.description}
              </p>
              <button
                className="font-semibold hover:underline"
                style={{ color: "var(--neutral-700)" }}
              >
                Use Calculator →
              </button>
            </div>
          ))}
        </div>

        <div className=" mx-auto bg-white/90 border border-white rounded-3xl shadow-card p-8 lg:p-12 backdrop-blur-sm">
          <h3
            className="text-2xl font-bold mb-8 text-center"
            style={{ color: "#0B1C3D" }}
          >
            Quick Repayment Calculator
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <label
                htmlFor="loan-amount"
                className="block text-sm font-semibold mb-3"
                style={{ color: "rgba(11, 28, 61, 0.8)" }}
              >
                Loan Amount
              </label>
              <input
                id="loan-amount"
                type="range"
                min="100000"
                max="2000000"
                step="10000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full mb-3"
                style={{ accentColor: "#C8A55A" }}
              />
              <div className="text-2xl font-bold" style={{ color: "#A98336" }}>
                ${loanAmount.toLocaleString()}
              </div>
            </div>

            <div>
              <label
                htmlFor="interest-rate"
                className="block text-sm font-semibold mb-3"
                style={{ color: "rgba(11, 28, 61, 0.8)" }}
              >
                Interest Rate (%)
              </label>
              <input
                id="interest-rate"
                type="range"
                min="2"
                max="10"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full mb-3"
                style={{ accentColor: "#C8A55A" }}
              />
              <div className="text-2xl font-bold" style={{ color: "#A98336" }}>
                {interestRate.toFixed(2)}%
              </div>
            </div>

            <div>
              <label
                htmlFor="loan-term"
                className="block text-sm font-semibold mb-3"
                style={{ color: "rgba(11, 28, 61, 0.8)" }}
              >
                Loan Term (Years)
              </label>
              <input
                id="loan-term"
                type="range"
                min="5"
                max="30"
                step="1"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full mb-3"
                style={{ accentColor: "#C8A55A" }}
              />
              <div className="text-2xl font-bold" style={{ color: "#A98336" }}>
                {loanTerm} years
              </div>
            </div>
          </div>

          <div
            className="rounded-3xl p-8 text-white text-center"
            style={{
              background: "linear-gradient(to bottom right, #0B1C3D, #071125)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <p className="text-lg mb-2">Estimated Monthly Repayment</p>
            <p className="text-5xl font-bold mb-2">
              ${Number(calculateRepayment()).toLocaleString()}
            </p>
            <p className="text-white/70 text-sm">
              *This is an estimate only. Actual repayments may vary.
            </p>
          </div>

          <div className="text-center mt-8">
            <a href="#contact" className="btn-primary inline-block">
              Get Accurate Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
