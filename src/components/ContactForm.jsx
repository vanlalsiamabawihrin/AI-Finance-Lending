import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  User,
  DollarSign,
  MessageSquare,
  Building,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    loanType: "home-purchase",
    deposit: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Contact form submission:", formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFieldFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleFieldBlur = () => {
    setFocusedField(null);
  };

  if (isSubmitted) {
    return (
      <section
        id="contact"
        className="py-24"
        style={{ background: "linear-gradient(135deg, #F7F5F0, white)" }}
      >
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{
                background:
                  "linear-gradient(to bottom right, #C8A55A, #A98336)",
              }}
            >
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: "#0B1C3D" }}
            >
              Thank You for Contacting Us!
            </h2>
            <p
              className="text-xl mb-8"
              style={{ color: "rgba(11, 28, 61, 0.7)" }}
            >
              We've received your message and will get back to you within 2
              hours during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(to right, #C8A55A, #A98336)",
                  color: "white",
                }}
              >
                Send Another Message
              </button>
              <a
                href="tel:1300000000"
                className="px-8 py-3 rounded-full font-semibold border-2 transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
                style={{ borderColor: "#C8A55A", color: "#C8A55A" }}
              >
                <Phone className="w-4 h-4" />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F7F5F0, white)" }}
    >
      {/* Decorative Elements */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "#C8A55A" }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
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
            <Clock className="w-4 h-4" />
            2-Hour Response Time
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "#0B1C3D" }}
          >
            Start Your Home Loan
            <span className="block" style={{ color: "#C8A55A" }}>
              Journey Today
            </span>
          </h2>
          <p
            className="text-xl max-w-3xl mx-auto mb-8"
            style={{ color: "rgba(11, 28, 61, 0.7)" }}
          >
            Get expert advice and access to 40+ lenders. No upfront fees, no
            obligation.
            <span className="block font-semibold mt-2">
              Your path to homeownership starts here.
            </span>
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div
              className="flex items-center gap-2"
              style={{ color: "rgba(11, 28, 61, 0.6)" }}
            >
              <Shield className="w-4 h-4" style={{ color: "#C8A55A" }} />
              SSL Secure
            </div>
            <div
              className="flex items-center gap-2"
              style={{ color: "rgba(11, 28, 61, 0.6)" }}
            >
              <CheckCircle className="w-4 h-4" style={{ color: "#C8A55A" }} />
              Privacy Protected
            </div>
            <div
              className="flex items-center gap-2"
              style={{ color: "rgba(11, 28, 61, 0.6)" }}
            >
              <User className="w-4 h-4" style={{ color: "#C8A55A" }} />
              2,500+ Happy Clients
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Glass morphism card */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(200, 165, 90, 0.2)",
                  boxShadow: "0 20px 60px -10px rgba(11, 28, 61, 0.15)",
                }}
              ></div>

              <div className="relative p-8 lg:p-10 rounded-3xl">
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(to bottom right, #C8A55A, #A98336)",
                    }}
                  >
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold"
                      style={{ color: "#0B1C3D" }}
                    >
                      Get Your Free Consultation
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "rgba(11, 28, 61, 0.6)" }}
                    >
                      Fill in the form below and we'll contact you within 2
                      hours
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information Section */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <User className="w-4 h-4" style={{ color: "#C8A55A" }} />
                      <span
                        className="text-sm font-semibold"
                        style={{ color: "#0B1C3D" }}
                      >
                        Personal Information
                      </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold mb-2"
                          style={{ color: "#0B1C3D" }}
                        >
                          Full Name *
                        </label>
                        <div className="relative">
                          <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => handleFieldFocus("name")}
                            onBlur={handleFieldBlur}
                            placeholder="John Smith"
                            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                              focusedField === "name"
                                ? "border-blue-500 shadow-lg transform -translate-y-0.5"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                            style={{
                              backgroundColor:
                                focusedField === "name"
                                  ? "white"
                                  : "rgba(255, 255, 255, 0.8)",
                              outline: "none",
                            }}
                            required
                          />
                          {focusedField === "name" && (
                            <div className="absolute -top-8 left-0 text-xs bg-blue-500 text-white px-2 py-1 rounded">
                              Enter your full legal name
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="relative">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold mb-2"
                          style={{ color: "#0B1C3D" }}
                        >
                          Phone Number *
                        </label>
                        <div className="relative">
                          <input
                            id="phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => handleFieldFocus("phone")}
                            onBlur={handleFieldBlur}
                            placeholder="04XX XXX XXX"
                            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                              focusedField === "phone"
                                ? "border-blue-500 shadow-lg transform -translate-y-0.5"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                            style={{
                              backgroundColor:
                                focusedField === "phone"
                                  ? "white"
                                  : "rgba(255, 255, 255, 0.8)",
                              outline: "none",
                            }}
                            required
                          />
                          {focusedField === "phone" && (
                            <div className="absolute -top-8 left-0 text-xs bg-blue-500 text-white px-2 py-1 rounded">
                              We'll call you back within 2 hours
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "#0B1C3D" }}
                      >
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => handleFieldFocus("email")}
                          onBlur={handleFieldBlur}
                          placeholder="john@example.com"
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                            focusedField === "email"
                              ? "border-blue-500 shadow-lg transform -translate-y-0.5"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          style={{
                            backgroundColor:
                              focusedField === "email"
                                ? "white"
                                : "rgba(255, 255, 255, 0.8)",
                            outline: "none",
                          }}
                          required
                        />
                        {focusedField === "email" && (
                          <div className="absolute -top-8 left-0 text-xs bg-blue-500 text-white px-2 py-1 rounded">
                            We'll send your free consultation details here
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Loan Information Section */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <DollarSign
                        className="w-4 h-4"
                        style={{ color: "#C8A55A" }}
                      />
                      <span
                        className="text-sm font-semibold"
                        style={{ color: "#0B1C3D" }}
                      >
                        Loan Information
                      </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label
                          htmlFor="loan-type"
                          className="block text-sm font-semibold mb-2"
                          style={{ color: "#0B1C3D" }}
                        >
                          Loan Type *
                        </label>
                        <div className="relative">
                          <select
                            id="loan-type"
                            name="loanType"
                            value={formData.loanType}
                            onChange={handleChange}
                            onFocus={() => handleFieldFocus("loanType")}
                            onBlur={handleFieldBlur}
                            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/80 backdrop-blur-sm appearance-none cursor-pointer ${
                              focusedField === "loanType"
                                ? "border-blue-500 shadow-lg transform -translate-y-0.5"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                            style={{
                              backgroundColor:
                                focusedField === "loanType"
                                  ? "white"
                                  : "rgba(255, 255, 255, 0.8)",
                              outline: "none",
                            }}
                            required
                          >
                            <option value="home-purchase">
                              🏠 Home Purchase
                            </option>
                            <option value="refinance">💰 Refinance</option>
                            <option value="investment">
                              📈 Investment Property
                            </option>
                            <option value="construction">
                              🏗️ Construction Loan
                            </option>
                            <option value="first-home">
                              🎯 First Home Buyer
                            </option>
                            <option value="commercial">
                              🏢 Commercial Loan
                            </option>
                          </select>
                          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                            <ArrowRight
                              className="w-4 h-4"
                              style={{ color: "#C8A55A" }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <label
                          htmlFor="deposit"
                          className="block text-sm font-semibold mb-2"
                          style={{ color: "#0B1C3D" }}
                        >
                          Deposit Amount
                        </label>
                        <div className="relative">
                          <input
                            id="deposit"
                            type="text"
                            name="deposit"
                            value={formData.deposit}
                            onChange={handleChange}
                            onFocus={() => handleFieldFocus("deposit")}
                            onBlur={handleFieldBlur}
                            placeholder="e.g., $100,000"
                            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                              focusedField === "deposit"
                                ? "border-blue-500 shadow-lg transform -translate-y-0.5"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                            style={{
                              backgroundColor:
                                focusedField === "deposit"
                                  ? "white"
                                  : "rgba(255, 255, 255, 0.8)",
                              outline: "none",
                            }}
                          />
                          {focusedField === "deposit" && (
                            <div className="absolute -top-8 left-0 text-xs bg-blue-500 text-white px-2 py-1 rounded">
                              Helps us find the best loan options
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "#0B1C3D" }}
                      >
                        Tell us about your situation
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => handleFieldFocus("message")}
                          onBlur={handleFieldBlur}
                          placeholder="e.g., First home buyer, looking at properties around $800k, have $80k deposit..."
                          rows="4"
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none ${
                            focusedField === "message"
                              ? "border-blue-500 shadow-lg transform -translate-y-0.5"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          style={{
                            backgroundColor:
                              focusedField === "message"
                                ? "white"
                                : "rgba(255, 255, 255, 0.8)",
                            outline: "none",
                          }}
                        ></textarea>
                        {focusedField === "message" && (
                          <div className="absolute -top-8 left-0 text-xs bg-blue-500 text-white px-2 py-1 rounded">
                            More details help us provide better advice
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
                      style={{
                        background: isSubmitting
                          ? "linear-gradient(to right, #A98336, #8B6F2F)"
                          : "linear-gradient(to right, #C8A55A, #A98336)",
                        color: "white",
                        boxShadow: "0 10px 30px -10px rgba(200, 165, 90, 0.5)",
                      }}
                    >
                      <div className="relative z-10 flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Get Your Free Consultation</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </div>
                      {!isSubmitting && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      )}
                    </button>

                    <div
                      className="flex flex-wrap justify-center gap-4 mt-4 text-xs"
                      style={{ color: "rgba(11, 28, 61, 0.6)" }}
                    >
                      <div className="flex items-center gap-1">
                        <CheckCircle
                          className="w-3 h-3"
                          style={{ color: "#C8A55A" }}
                        />
                        No spam ever
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle
                          className="w-3 h-3"
                          style={{ color: "#C8A55A" }}
                        />
                        SSL encrypted
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle
                          className="w-3 h-3"
                          style={{ color: "#C8A55A" }}
                        />
                        2-hour response
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            {/* Quick Contact Cards */}
            <div
              className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:shadow-xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(200, 165, 90, 0.2)",
              }}
            >
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-5 group-hover:opacity-10 transition-opacity"
                style={{ backgroundColor: "#C8A55A" }}
              ></div>

              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #C8A55A, #A98336)",
                  }}
                >
                  <Phone className="w-6 h-6" style={{ color: "white" }} />
                </div>
                <h4
                  className="text-lg font-bold mb-2"
                  style={{ color: "#0B1C3D" }}
                >
                  Call Us
                </h4>
                <a
                  href="tel:1300000000"
                  className="text-xl font-semibold mb-2 block transition-colors hover:text-blue-600"
                  style={{ color: "#C8A55A" }}
                >
                  1300 000 000
                </a>
                <p
                  className="text-sm"
                  style={{ color: "rgba(11, 28, 61, 0.6)" }}
                >
                  <Clock className="w-3 h-3 inline mr-1" />
                  Mon-Fri: 9am-6pm
                </p>
              </div>
            </div>

            <div
              className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:shadow-xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(200, 165, 90, 0.2)",
              }}
            >
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-5 group-hover:opacity-10 transition-opacity"
                style={{ backgroundColor: "#C8A55A" }}
              ></div>

              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #C8A55A, #A98336)",
                  }}
                >
                  <Mail className="w-6 h-6" style={{ color: "white" }} />
                </div>
                <h4
                  className="text-lg font-bold mb-2"
                  style={{ color: "#0B1C3D" }}
                >
                  Email Us
                </h4>
                <a
                  href="mailto:hello@aifinancelending.com.au"
                  className="text-sm font-medium mb-2 block transition-colors hover:text-blue-600 break-all"
                  style={{ color: "#C8A55A" }}
                >
                  hello@aifinancelending.com.au
                </a>
                <p
                  className="text-sm"
                  style={{ color: "rgba(11, 28, 61, 0.6)" }}
                >
                  <CheckCircle className="w-3 h-3 inline mr-1" />
                  24-hour response
                </p>
              </div>
            </div>

            <div
              className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:shadow-xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(200, 165, 90, 0.2)",
              }}
            >
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-5 group-hover:opacity-10 transition-opacity"
                style={{ backgroundColor: "#C8A55A" }}
              ></div>

              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(to bottom right, #C8A55A, #A98336)",
                  }}
                >
                  <Building className="w-6 h-6" style={{ color: "white" }} />
                </div>
                <h4
                  className="text-lg font-bold mb-2"
                  style={{ color: "#0B1C3D" }}
                >
                  Visit Us
                </h4>
                <p
                  className="text-sm mb-2"
                  style={{ color: "rgba(11, 28, 61, 0.8)" }}
                >
                  Level 10, 123 Queen Street
                  <br />
                  Melbourne VIC 3000
                  <br />
                  Australia
                </p>
                <p
                  className="text-sm"
                  style={{ color: "rgba(11, 28, 61, 0.6)" }}
                >
                  <MapPin className="w-3 h-3 inline mr-1" />
                  By appointment only
                </p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "linear-gradient(135deg, #0B1C3D, #071125)",
                color: "white",
              }}
            >
              <h4 className="text-lg font-bold mb-4">Why Choose Us?</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "#C8A55A" }}
                  />
                  <span>Access to 40+ lenders</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "#C8A55A" }}
                  />
                  <span>No upfront fees</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "#C8A55A" }}
                  />
                  <span>2,500+ happy clients</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                    style={{ color: "#C8A55A" }}
                  />
                  <span>5-star rated service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
