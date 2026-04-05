import React from "react";
import SEO from "./components/SEO";
import SchemaMarkup from "./components/SchemaMarkup";
import TrustBar from "./components/TrustBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LenderStrip from "./components/LenderStrip";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import LoanTypes from "./components/LoanTypes";
import Calculators from "./components/Calculators";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import FAQ from "./components/FAQ";
import LeadMagnet from "./components/LeadMagnet";
import CTABanner from "./components/CTABanner";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  // Breadcrumb data for structured data
  const breadcrumbs = [
    { name: "Home", url: "https://www.aifinancelending.com.au" },
  ];

  return (
    <>
      <SEO
        title="AI Finance & Lending - Expert Mortgage Brokers Australia"
        description="Get expert mortgage advice and access to 40+ lenders. Pre-approval in 24 hours. No upfront fees. Trusted by 2,500+ Australian homeowners."
        pathname="/"
      />
      <SchemaMarkup type="organization" />
      <SchemaMarkup type="localBusiness" />
      <SchemaMarkup type="financialService" />
      <SchemaMarkup type="breadcrumb" data={breadcrumbs} />
      <div className="min-h-screen bg-gradient-to-b from-neutral-50 via-white to-neutral-50">
        <TrustBar />
        <Header />
        <main>
          <Hero />
          <LenderStrip />
          <WhyChooseUs />
          <Services />
          <HowItWorks />
          <LoanTypes />
          <Calculators />
          <Testimonials />
          <About />
          <FAQ />
          <LeadMagnet />
          <CTABanner />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
