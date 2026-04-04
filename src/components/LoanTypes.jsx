import React, { useState } from "react";
import {
  Users,
  Briefcase,
  GraduationCap,
  Sparkles,
  Home,
  TrendingUp,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Heart,
} from "lucide-react";

export default function LoanTypes() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const borrowerTypes = [
    {
      id: "first-home",
      icon: Sparkles,
      emoji: "🏠",
      title: "First Home Buyers",
      subtitle: "Your journey to homeownership",
      color: "#10B981",
      gradient: "linear-gradient(135deg, #10B981, #059669)",
      features: [
        "First Home Owner Grants up to $30,000",
        "Low deposit options from 5%",
        "Stamp duty concessions available",
        "Government schemes & support",
        "Specialist first home advisor",
      ],
      stats: { label: "Average saving", value: "$25,000" },
      popular: true,
    },
    {
      id: "families",
      icon: Users,
      emoji: "👨‍👩‍👧‍👦",
      title: "Families & Upgraders",
      subtitle: "Growing your family home",
      color: "#3B82F6",
      gradient: "linear-gradient(135deg, #3B82F6, #2563EB)",
      features: [
        "Larger loan amounts up to $5M",
        "Equity release options",
        "Flexible repayment terms",
        "100% offset accounts",
        "Family-friendly loan features",
      ],
      stats: { label: "Max loan amount", value: "$5,000,000" },
      popular: false,
    },
    {
      id: "self-employed",
      icon: Briefcase,
      emoji: "💼",
      title: "Self-Employed",
      subtitle: "Business owners & entrepreneurs",
      color: "#8B5CF6",
      gradient: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
      features: [
        "Low-doc loan options",
        "Alternative income verification",
        "Tax-effective structures",
        "Business asset lending",
        "Self-employed specialist team",
      ],
      stats: { label: "Quick approval", value: "48 hours" },
      popular: false,
    },
    {
      id: "professionals",
      icon: GraduationCap,
      emoji: "🎓",
      title: "Professionals",
      subtitle: "Career-focused individuals",
      color: "#F59E0B",
      gradient: "linear-gradient(135deg, #F59E0B, #D97706)",
      features: [
        "Higher borrowing capacity",
        "Professional packages",
        "Premium rate discounts",
        "Waived LMI options",
        "Dedicated relationship manager",
      ],
      stats: { label: "Rate discount", value: "0.5% p.a." },
      popular: false,
    },
  ];

  const handleCardClick = (id) => {
    setSelectedCard(selectedCard === id ? null : id);
  };

  const handleKeyDown = (event, id) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleCardClick(id);
    }
  };

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F7F5F0, white)" }}
    >
      {/* Decorative Elements */}
      <div
        className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "#C8A55A" }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-64 h-64 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "#0B1C3D" }}
      ></div>

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-6"
            style={{
              backgroundColor: "rgba(200, 165, 90, 0.1)",
              color: "#A98336",
            }}
          >
            <Heart className="w-4 h-4" />
            Personalized loan solutions
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "#0B1C3D" }}
          >
            Find Your Perfect
            <span className="block" style={{ color: "#C8A55A" }}>
              Home Loan Match
            </span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto mb-8"
            style={{ color: "rgba(11, 28, 61, 0.7)" }}
          >
            Every borrower is unique. We've designed specialized loan pathways
            that match your specific situation, from first-time buyers to
            seasoned professionals.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div
              className="flex items-center gap-2"
              style={{ color: "rgba(11, 28, 61, 0.6)" }}
            >
              <CheckCircle className="w-4 h-4" style={{ color: "#10B981" }} />
              40+ Lenders
            </div>
            <div
              className="flex items-center gap-2"
              style={{ color: "rgba(11, 28, 61, 0.6)" }}
            >
              <Star className="w-4 h-4" style={{ color: "#F59E0B" }} />
              4.9/5 Rating
            </div>
            <div
              className="flex items-center gap-2"
              style={{ color: "rgba(11, 28, 61, 0.6)" }}
            >
              <Zap className="w-4 h-4" style={{ color: "#8B5CF6" }} />
              24hr Approval
            </div>
          </div>
        </div>

        {/* Loan Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {borrowerTypes.map((type, index) => {
            const isSelected = selectedCard === type.id;
            const isHovered = hoveredCard === type.id;

            return (
              <div
                key={type.id}
                className="relative group"
                onMouseEnter={() => setHoveredCard(type.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(type.id)}
                role="button"
                tabIndex={0}
                aria-label={`Select ${type.title} loan type`}
                aria-pressed={selectedCard === type.id}
                onKeyDown={(e) => handleKeyDown(e, type.id)}
              >
                {/* Popular Badge */}
                {type.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div
                      className="flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        background:
                          "linear-gradient(to right, #C8A55A, #A98336)",
                        color: "white",
                        boxShadow: "0 4px 12px rgba(200, 165, 90, 0.3)",
                      }}
                    >
                      <Star className="w-3 h-3 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Main Card */}
                <div
                  className="relative h-full cursor-pointer transition-all duration-500 transform"
                  style={{
                    transform: isSelected
                      ? "scale(1.05)"
                      : isHovered
                        ? "scale(1.02)"
                        : "scale(1)",
                    zIndex: isSelected ? 10 : 1,
                  }}
                >
                  {/* Glass morphism background */}
                  <div
                    className="absolute inset-0 rounded-2xl transition-all duration-500"
                    style={{
                      background: isSelected
                        ? "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9))"
                        : "linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6))",
                      backdropFilter: "blur(20px)",
                      border: isSelected
                        ? `2px solid ${type.color}`
                        : "1px solid rgba(200, 165, 90, 0.2)",
                      boxShadow: isSelected
                        ? `0 20px 40px -10px ${type.color}40, 0 0 0 1px ${type.color}20`
                        : isHovered
                          ? "0 20px 40px -10px rgba(11, 28, 61, 0.15)"
                          : "0 10px 30px -10px rgba(11, 28, 61, 0.1)",
                    }}
                  ></div>

                  {/* Decorative gradient overlay */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ background: type.gradient }}
                  ></div>

                  {/* Content */}
                  <div className="relative p-6 h-full">
                    {/* Icon and Title */}
                    <div className="text-center mb-6">
                      <div className="relative inline-block mb-4">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500"
                          style={{
                            background: isSelected
                              ? type.gradient
                              : "linear-gradient(135deg, rgba(200, 165, 90, 0.1), rgba(169, 131, 54, 0.1))",
                            transform: isHovered
                              ? "scale(1.1) rotate(5deg)"
                              : "scale(1) rotate(0deg)",
                            border: isSelected
                              ? "none"
                              : "1px solid rgba(200, 165, 90, 0.3)",
                          }}
                        >
                          <type.icon
                            className="w-8 h-8 transition-colors duration-500"
                            style={{ color: isSelected ? "white" : "#A98336" }}
                          />
                        </div>
                        {/* Hover effect ring */}
                        <div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                          style={{
                            background: type.gradient,
                            transform: "scale(1.2)",
                          }}
                        ></div>
                      </div>

                      <div className="mb-2 text-2xl">{type.emoji}</div>
                      <h3
                        className="text-xl font-bold mb-2 transition-colors duration-500"
                        style={{ color: isSelected ? type.color : "#0B1C3D" }}
                      >
                        {type.title}
                      </h3>
                      <p
                        className="text-sm font-medium transition-colors duration-500"
                        style={{
                          color: isSelected
                            ? `${type.color}CC`
                            : "rgba(11, 28, 61, 0.6)",
                        }}
                      >
                        {type.subtitle}
                      </p>
                    </div>

                    {/* Stats Badge */}
                    <div className="flex justify-center mb-4">
                      <div
                        className="px-3 py-1 rounded-full text-xs font-semibold transition-all duration-500"
                        style={{
                          background: isSelected
                            ? `${type.color}20`
                            : "rgba(200, 165, 90, 0.1)",
                          color: isSelected ? type.color : "#A98336",
                        }}
                      >
                        {type.stats.label}: {type.stats.value}
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      {type.features
                        .slice(0, isSelected ? 5 : 3)
                        .map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 transition-all duration-500"
                            style={{
                              opacity: isSelected || idx < 3 ? 1 : 0,
                              transform:
                                isSelected || idx < 3
                                  ? "translateX(0)"
                                  : "translateX(-10px)",
                            }}
                          >
                            <CheckCircle
                              className="w-4 h-4 mt-0.5 flex-shrink-0 transition-colors duration-500"
                              style={{
                                color: isSelected ? type.color : "#C8A55A",
                              }}
                            />
                            <span
                              className="text-sm leading-relaxed transition-colors duration-500"
                              style={{
                                color: isSelected
                                  ? "rgba(11, 28, 61, 0.8)"
                                  : "rgba(11, 28, 61, 0.6)",
                              }}
                            >
                              {feature}
                            </span>
                          </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                      <button
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-500 transform hover:-translate-y-0.5"
                        style={{
                          background: isSelected
                            ? type.gradient
                            : "linear-gradient(to right, #C8A55A, #A98336)",
                          color: "white",
                          boxShadow: isSelected
                            ? `0 10px 25px -5px ${type.color}40`
                            : "0 10px 25px -5px rgba(200, 165, 90, 0.3)",
                        }}
                      >
                        {isSelected ? (
                          <>
                            <Shield className="w-4 h-4" />
                            Selected
                          </>
                        ) : (
                          <>
                            <ArrowRight className="w-4 h-4" />
                            Learn More
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold mb-6"
            style={{
              background: "linear-gradient(135deg, #0B1C3D, #071125)",
              color: "white",
            }}
          >
            <Home className="w-4 h-4" />
            Not sure which loan type fits you?
          </div>
          <h3 className="text-2xl font-bold mb-4" style={{ color: "#0B1C3D" }}>
            Let Our Experts Guide You
          </h3>
          <p
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: "rgba(11, 28, 61, 0.7)" }}
          >
            Take our 2-minute quiz to discover your perfect loan match, or speak
            with one of our specialist advisors for personalized
            recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center gap-2"
              style={{
                background: "linear-gradient(to right, #C8A55A, #A98336)",
                color: "white",
                boxShadow: "0 10px 30px -10px rgba(200, 165, 90, 0.3)",
              }}
            >
              <TrendingUp className="w-5 h-5" />
              Take Quick Quiz
            </button>
            <button
              className="px-8 py-3 rounded-full font-semibold border-2 transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2"
              style={{
                borderColor: "#C8A55A",
                color: "#C8A55A",
              }}
            >
              <Users className="w-5 h-5" />
              Talk to Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
