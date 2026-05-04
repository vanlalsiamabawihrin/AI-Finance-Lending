import React, { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, 
  Users, 
  Award, 
  Clock,
  ArrowRight,
  Zap,
  Shield,
  Target,
  ChevronRight
} from 'lucide-react';

const InteractiveShowcase = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [counters, setCounters] = useState({
    clients: 0,
    years: 0,
    loans: 0,
    rating: 0
  });
  const observerRef = useRef();

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set(prev).add(entry.target.id));
            
            // Start counter animation when stats section is visible
            if (entry.target.id === 'stats-section') {
              animateCounters();
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all elements with data-animate attribute
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Animated counter function
  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    const targets = {
      clients: 2500,
      years: 15,
      loans: 850,
      rating: 4.9
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounters({
        clients: Math.floor(targets.clients * easeOutQuart),
        years: Math.floor(targets.years * easeOutQuart),
        loans: Math.floor(targets.loans * easeOutQuart),
        rating: (targets.rating * easeOutQuart).toFixed(1)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, increment);
  };

  const features = [
    {
      icon: TrendingUp,
      title: "Smart Analytics",
      description: "Advanced data-driven insights to optimize your financial decisions",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Bank-level security protecting your sensitive information",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get approved in record time with our streamlined process",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Precision Matching",
      description: "AI-powered algorithm finds your perfect loan match",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Free 15-minute call to understand your needs",
      delay: 0
    },
    {
      number: "02",
      title: "Custom Analysis",
      description: "We analyze your financial profile and goals",
      delay: 100
    },
    {
      number: "03",
      title: "Loan Matching",
      description: "Our AI finds the best rates from 40+ lenders",
      delay: 200
    },
    {
      number: "04",
      title: "Quick Approval",
      description: "Get pre-approved within 24 hours",
      delay: 300
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          style={{
            transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.02}px)`
          }}
        />
        <div 
          className="absolute -top-20 -right-20 w-60 h-60 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          style={{
            transform: `translate(${-scrollY * 0.03}px, ${scrollY * 0.04}px)`
          }}
        />
        <div 
          className="absolute -bottom-40 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          style={{
            transform: `translate(${scrollY * 0.04}px, ${-scrollY * 0.03}px)`
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div
            data-animate="fade-up"
            id="hero-title"
            className={`transition-all duration-1000 transform ${
              visibleElements.has('hero-title') 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-10 scale-95'
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6">
              Experience the Future
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
              Where innovation meets excellence in financial solutions
            </p>
          </div>
          
          <div
            data-animate="fade-up"
            id="hero-cta"
            className={`transition-all duration-1000 delay-300 transform ${
              visibleElements.has('hero-cta') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Start Your Journey</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        id="stats-section"
        data-animate="fade-up"
        className={`relative py-20 px-4 transition-all duration-1000 transform ${
          visibleElements.has('stats-section') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: counters.clients, label: "Happy Clients", suffix: "+" },
              { icon: Clock, value: counters.years, label: "Years Experience", suffix: "+" },
              { icon: TrendingUp, value: `$${counters.loans}M`, label: "Loans Settled", suffix: "" },
              { icon: Award, value: counters.rating, label: "Client Rating", suffix: "/5" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group"
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            data-animate="fade-up"
            id="features-title"
            className={`text-center mb-16 transition-all duration-1000 transform ${
              visibleElements.has('features-title') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Cutting-edge technology designed to transform your financial journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                data-animate="fade-up"
                id={`feature-${index}`}
                className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${
                  visibleElements.has(`feature-${index}`) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                  {feature.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div
            data-animate="fade-up"
            id="process-title"
            className={`text-center mb-16 transition-all duration-1000 transform ${
              visibleElements.has('process-title') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Simple Process
            </h2>
            <p className="text-xl text-slate-600">
              Four steps to financial freedom
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 to-purple-300 transform md:-translate-x-0.5" />
            
            {processSteps.map((step, index) => (
              <div
                key={index}
                data-animate="fade-up"
                id={`step-${index}`}
                className={`relative flex items-center mb-12 md:mb-16 transition-all duration-1000 transform ${
                  visibleElements.has(`step-${index}`) 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 ' + (index % 2 === 0 ? '-translate-x-10' : 'translate-x-10')
                }`}
                style={{
                  transitionDelay: `${step.delay}ms`
                }}
              >
                {/* Step Number */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                  {step.number}
                </div>
                
                {/* Step Content */}
                <div className="ml-6 md:ml-0 md:w-1/2 md:px-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                {index % 2 === 1 && <div className="hidden md:block md:w-1/2" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 px-4">
        <div
          data-animate="fade-up"
          id="cta-section"
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${
            visibleElements.has('cta-section') 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-10 scale-95'
          }`}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of satisfied clients who have transformed their financial future
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  Get Started Now
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteractiveShowcase;
