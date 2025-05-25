
import React, { useEffect, useRef, useState } from 'react';

const ComparisonTable = () => {
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

  const comparisons = [
    {
      feature: "Primary Focus",
      traditional: "General personality traits and characteristics",
      alp: "Specific life events and their timing"
    },
    {
      feature: "Prediction Style",
      traditional: "Broad, general guidance",
      alp: "Timeline-specific, event-driven predictions"
    },
    {
      feature: "Tools Used",
      traditional: "Birth chart analysis, planetary positions",
      alp: "Advanced transit analysis, progressive techniques"
    },
    {
      feature: "Ease of Understanding",
      traditional: "Complex interpretations, metaphorical",
      alp: "Clear, practical, actionable insights"
    },
    {
      feature: "Time Specificity",
      traditional: "Vague timing, general periods",
      alp: "Precise windows, specific dates/months"
    },
    {
      feature: "Practical Application",
      traditional: "Self-understanding and awareness",
      alp: "Decision-making and life planning"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-astrology-midnight/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-astrology-gold mb-6 glow-text">
            ALP vs Traditional Vedic Astrology
          </h2>
          <p className="text-xl text-astrology-silver max-w-3xl mx-auto">
            See how ALP revolutionizes the ancient art of astrological prediction
          </p>
        </div>

        <div className={`max-w-6xl mx-auto ${isVisible ? 'animate-scale-in stagger-2' : 'opacity-0'}`}>
          <div className="overflow-x-auto">
            <table className="w-full bg-astrology-midnight/50 rounded-2xl overflow-hidden border border-astrology-cosmic">
              <thead>
                <tr className="bg-astrology-cosmic/30">
                  <th className="p-6 text-left text-astrology-gold font-serif text-lg">Feature</th>
                  <th className="p-6 text-left text-astrology-silver font-serif text-lg">Traditional Vedic</th>
                  <th className="p-6 text-left text-astrology-gold font-serif text-lg">ALP Astrology</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr 
                    key={index}
                    className="border-t border-astrology-cosmic/30 hover:bg-astrology-cosmic/10 transition-colors duration-300"
                  >
                    <td className="p-6 font-semibold text-astrology-gold">{item.feature}</td>
                    <td className="p-6 text-astrology-silver">{item.traditional}</td>
                    <td className="p-6 text-white font-medium">{item.alp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
