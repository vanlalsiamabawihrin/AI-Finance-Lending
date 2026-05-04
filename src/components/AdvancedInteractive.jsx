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
  ChevronRight,
  Star,
  Sparkles,
  MousePointer
} from 'lucide-react';

const AdvancedInteractive = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [counters, setCounters] = useState({
    clients: 0,
    years: 0,
    loans: 0,
    rating: 0
  });
  const [activeFeature, setActiveFeature] = useState(null);
  const observerRef = useRef();
  const containerRef = useRef();

  // Enhanced parallax and mouse tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Enhanced Intersection Observer with different thresholds
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set(prev).add(entry.target.id));
            
            // Trigger specific animations
            if (entry.target.id === 'stats-section') {
              animateCounters();
            }
          }
        });
      },
      { 
        threshold: [0.1, 0.3, 0.6], 
        rootMargin: '0px 0px -100px 0px' 
      }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Enhanced counter animation with easing
  const animateCounters = () => {
    const duration = 2500;
    const targets = {
      clients: 2500,
      years: 15,
      loans: 850,
      rating: 4.9
    };

    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out-elastic)
      const easeOutElastic = (t) => {
        const p = 0.3;
        return Math.pow(2, -10 * t) * Math.sin((t - p / 4) * (2 * Math.PI) / p) + 1;
      };

      const easedProgress = easeOutElastic(progress);

      setCounters({
        clients: Math.floor(targets.clients * easedProgress),
        years: Math.floor(targets.years * easedProgress),
        loans: Math.floor(targets.loans * easedProgress),
        rating: (targets.rating * easedProgress).toFixed(1)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  // Enhanced features with more interactions
  const features = [
    {
      icon: TrendingUp,
      title: "Smart Analytics",
      description: "Advanced data-driven insights powered by machine learning algorithms",
      gradient: "from-blue-500 to-cyan-500",
      stats: "99.8% Accuracy",
      detailedInfo: "Our proprietary AI analyzes millions of data points to provide personalized recommendations"
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Military-grade encryption protecting your sensitive information 24/7",
      gradient: "from-green-500 to-emerald-500",
      stats: "256-bit Encryption",
      detailedInfo: "We use the same security protocols as major financial institutions worldwide"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get approved in record time with our revolutionary streamlined process",
      gradient: "from-purple-500 to-pink-500",
      stats: "24hr Approval",
      detailedInfo: "Our automated system can process and approve applications in under 24 hours"
    },
    {
      icon: Target,
      title: "Precision Matching",
      description: "AI-powered algorithm finds your perfect loan match from 40+ lenders",
      gradient: "from-orange-500 to-red-500",
      stats: "40+ Lenders",
      detailedInfo: "We compare rates from Australia's leading lenders to find you the best deal"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "First Home Buyer",
      content: "Absolutely incredible experience! The platform found me a rate 0.8% lower than any bank offered.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "David Chen",
      role: "Property Investor",
      content: "The analytics and insights helped me make informed decisions. Saved me thousands!",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Emma Thompson",
      role: "Refinance Client",
      content: "Seamless process from start to finish. The team was professional and supportive.",
      rating: 5,
      avatar: "👩‍💻"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" ref={containerRef}>
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mouse-following gradient orb */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, transparent 70%)',
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            filter: 'blur(40px)',
            transition: 'all 0.3s ease-out'
          }}
        />
        
        {/* Parallax floating elements */}
        <div 
          className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 floating-element"
          style={{
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px) rotate(${scrollY * 0.02}deg)`
          }}
        />
        <div 
          className="absolute top-40 right-32 w-48 h-48 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 floating-element"
          style={{
            transform: `translate(${-scrollY * 0.08}px, ${scrollY * 0.12}px) rotate(-${scrollY * 0.03}deg)`
          }}
        />
        <div 
          className="absolute bottom-32 left-1/3 w-56 h-56 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 floating-element"
          style={{
            transform: `translate(${scrollY * 0.06}px, ${-scrollY * 0.08}px) rotate(${scrollY * 0.04}deg)`
          }}
        />
      </div>

      {/* Hero Section with Enhanced Effects */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-5xl mx-auto relative z-10">
          {/* Animated title with letter-by-letter reveal */}
          <div
            data-animate="fade-up"
            id="hero-title"
            className={`transition-all duration-1500 transform ${
              visibleElements.has('hero-title') 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-20 scale-95'
            }`}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Experience the
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Future Today
              </span>
            </h1>
            
            {/* Animated subtitle */}
            <div className="relative h-8 mb-8">
              <p className="text-xl md:text-2xl text-blue-100 absolute w-full transition-all duration-1000">
                Where innovation meets excellence in
                <span className="inline-block ml-2">
                  {['financial solutions', 'digital banking', 'smart investing'].map((text, index) => (
                    <span 
                      key={index}
                      className="absolute left-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"
                      style={{
                        animation: visibleElements.has('hero-title') 
                          ? `textRotate 9s infinite ${index * 3}s` 
                          : 'none'
                      }}
                    >
                      {text}
                    </span>
                  ))}
                </span>
              </p>
            </div>
          </div>
          
          {/* Enhanced CTA buttons */}
          <div
            data-animate="fade-up"
            id="hero-cta"
            className={`transition-all duration-1000 delay-500 transform ${
              visibleElements.has('hero-cta') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative magnetic-button">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 opacity-70" />
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3">
                  <Sparkles className="w-5 h-5" />
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </button>
              
              <button className="group border-2 border-blue-400 text-blue-100 px-10 py-5 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center gap-3">
                <MousePointer className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div 
            className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
              visibleElements.has('hero-cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-blue-200 text-sm">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section 
        id="stats-section"
        data-animate="fade-up"
        className={`relative py-24 px-4 transition-all duration-1000 transform ${
          visibleElements.has('stats-section') 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: counters.clients, label: "Happy Clients", suffix: "+", color: "from-blue-500 to-cyan-500" },
              { icon: Clock, value: counters.years, label: "Years Experience", suffix: "+", color: "from-green-500 to-emerald-500" },
              { icon: TrendingUp, value: `$${counters.loans}M`, label: "Loans Settled", suffix: "", color: "from-purple-500 to-pink-500" },
              { icon: Award, value: counters.rating, label: "Client Rating", suffix: "/5", color: "from-orange-500 to-red-500" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group relative"
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 counter">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-slate-300 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features with Interactive Cards */}
      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            data-animate="fade-up"
            id="features-title"
            className={`text-center mb-20 transition-all duration-1000 transform ${
              visibleElements.has('features-title') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Cutting-edge technology designed to transform your financial journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                data-animate="fade-up"
                id={`feature-${index}`}
                className={`group relative interactive-card ${
                  visibleElements.has(`feature-${index}`) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-20'
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`
                }}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-500">
                  {/* Animated gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {feature.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${feature.gradient} text-white`}>
                        {feature.stats}
                      </span>
                    </div>
                    
                    <p className="text-slate-300 leading-relaxed mb-4 group-hover:text-slate-200 transition-colors">
                      {feature.description}
                    </p>
                    
                    {/* Expandable detailed info */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      activeFeature === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-slate-400 text-sm pt-4 border-t border-slate-700">
                        {feature.detailedInfo}
                      </p>
                    </div>
                    
                    <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-4">
                      <span>Learn more</span>
                      <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${
                        activeFeature === index ? 'rotate-90' : ''
                      }`} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Testimonials */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-transparent to-blue-900/20">
        <div className="max-w-4xl mx-auto">
          <div
            data-animate="fade-up"
            id="testimonials-title"
            className={`text-center mb-20 transition-all duration-1000 transform ${
              visibleElements.has('testimonials-title') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-blue-100">
              Hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                data-animate="fade-up"
                id={`testimonial-${index}`}
                className={`group relative ${
                  visibleElements.has(`testimonial-${index}`) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-20'
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105">
                  {/* Avatar */}
                  <div className="text-4xl mb-4">{testimonial.avatar}</div>
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-slate-200 mb-4 italic">"{testimonial.content}"</p>
                  
                  {/* Author */}
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-slate-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA with Enhanced Effects */}
      <section className="relative py-24 px-4">
        <div
          data-animate="fade-up"
          id="cta-section"
          className={`max-w-5xl mx-auto text-center transition-all duration-1000 transform ${
            visibleElements.has('cta-section') 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-20 scale-95'
          }`}
        >
          <div className="relative">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-50 animate-pulse" />
            
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 md:p-16 text-white overflow-hidden">
              {/* Floating particles */}
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-pulse"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${10 + (i % 2) * 80}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${3 + i * 0.5}s`
                    }}
                  />
                ))}
              </div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  Ready to Transform
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                    Your Financial Future?
                  </span>
                </h2>
                <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                  Join thousands of satisfied clients who have already transformed their financial future with our innovative platform
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="group relative magnetic-button">
                    <div className="absolute inset-0 bg-white rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
                    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3">
                      <Sparkles className="w-5 h-5" />
                      <span>Get Started Now</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </button>
                  
                  <button className="border-2 border-white text-white px-10 py-5 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-3">
                    <span>Schedule a Demo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom styles for text rotation animation */}
      <style jsx>{`
        @keyframes textRotate {
          0%, 33% { transform: translateY(0); opacity: 1; }
          34%, 66% { transform: translateY(-20px); opacity: 0; }
          67%, 100% { transform: translateY(20px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default AdvancedInteractive;
