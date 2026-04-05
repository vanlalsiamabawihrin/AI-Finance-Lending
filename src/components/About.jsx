import React from "react";
import { Award, Users, TrendingUp, Heart } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Users, value: "2,500+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: TrendingUp, value: "$850M+", label: "Loans Settled" },
    { icon: Heart, value: "4.9/5", label: "Client Rating" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent to-accent-dark rounded-3xl opacity-20 blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop"
                alt="Professional mortgage broker in Melbourne helping Australian families with home loans and refinancing"
                className="relative rounded-3xl shadow-soft w-full h-[500px] object-cover"
              />
              <div className="hidden sm:block absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-card p-6">
                <p className="text-4xl font-bold text-accent mb-1">15+</p>
                <p className="text-sm text-gray-600 font-semibold">
                  Years Experience
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Meet Your Trusted Mortgage Broker
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 15 years of experience in the Australian mortgage
              industry, we have helped thousands of families achieve their
              homeownership dreams. Our commitment to personalized service and
              expert guidance sets us apart.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              As an accredited mortgage broker with access to over 40 lenders,
              we work for you - not the banks. Our mission is simple: find you
              the best loan at the best rate with the best terms possible.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-neutral-50 rounded-xl"
                >
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <p className="text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-primary inline-block text-center"
              >
                Book a Consultation
              </a>
              <a
                href="tel:1300000000"
                className="btn-secondary inline-block text-center"
              >
                Call 1300 000 000
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
