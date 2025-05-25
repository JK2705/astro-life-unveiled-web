
import React, { useEffect, useRef, useState } from 'react';

const AstrologerIntro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-astrology-midnight/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className={`lg:w-1/3 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-astrology-gold hover-glow">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Astrologer"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-astrology-gold rounded-full animate-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-astrology-silver rounded-full animate-glow animation-delay-1000"></div>
            </div>
          </div>
          
          <div className={`lg:w-2/3 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-astrology-gold mb-6 glow-text">
              Meet Your Guide to the Stars
            </h2>
            <div className="text-lg text-astrology-silver leading-relaxed space-y-4">
              <p>
                Astrologer [Name] specializes in Astro Life Prediction (ALP) and has helped 2000+ clients gain clarity on life events, relationships, career transitions, and spiritual growth through precise, timeline-based astrological guidance.
              </p>
              <p>
                With over 15 years of experience in both traditional Vedic astrology and modern ALP techniques, [Name] bridges ancient wisdom with contemporary understanding to provide practical insights that actually make a difference in your daily life.
              </p>
              <p className="text-astrology-gold font-semibold">
                "I believe astrology should be a practical tool for empowerment, not just mystical entertainment. ALP makes that possible."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AstrologerIntro;
