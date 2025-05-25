
import React, { useEffect, useRef, useState } from 'react';

const BenefitsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: "✨",
      title: "More Life-Specific Predictions",
      description: "Get insights tailored to your actual life situations and upcoming events"
    },
    {
      icon: "⏰",
      title: "Precise Timing Guidance",
      description: "Know exactly when opportunities and challenges are most likely to manifest"
    },
    {
      icon: "🎯",
      title: "Actionable Decision Support",
      description: "Make informed choices with cosmic timing and planetary influences in your favor"
    },
    {
      icon: "💡",
      title: "Easier to Understand",
      description: "Clear, practical insights without complex astrological jargon or confusing metaphors"
    },
    {
      icon: "🚀",
      title: "Future-Focused Approach",
      description: "Plan ahead and prepare for life's most significant transitions and opportunities"
    },
    {
      icon: "🎨",
      title: "Personalized Life Roadmap",
      description: "Receive a customized timeline of your most important upcoming life phases"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-astrology-midnight to-astrology-deep">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-astrology-gold mb-6 glow-text">
            Why ALP is More Effective
          </h2>
          <p className="text-xl text-astrology-silver max-w-3xl mx-auto">
            Experience the transformative power of timeline-based astrological guidance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`bg-astrology-midnight/50 p-8 rounded-2xl border border-astrology-cosmic hover-glow hover:scale-105 transition-all duration-300 ${
                isVisible ? `animate-fade-in stagger-${index + 1}` : 'opacity-0'
              }`}
            >
              <div className="text-4xl mb-4 animate-float">{benefit.icon}</div>
              <h3 className="text-xl font-serif font-semibold text-astrology-gold mb-4">
                {benefit.title}
              </h3>
              <p className="text-astrology-silver leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
