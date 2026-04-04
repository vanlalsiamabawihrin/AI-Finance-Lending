import React from "react";
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
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 via-white to-neutral-50">
      <TrustBar />
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
