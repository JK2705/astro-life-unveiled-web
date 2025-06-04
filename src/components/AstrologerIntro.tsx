
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
        <div className="flex flex-col items-center gap-12">
          <div className={`w-full ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-astrology-gold mb-6 glow-text text-center">
              Meet Your Guide to the Stars
            </h2>
            <div className="text-lg text-astrology-silver leading-relaxed space-y-4 max-w-4xl mx-auto">
              <p>
               ALP Astrologer Brindha specializes in Astro Life Prediction (ALP) and has helped 2000+ clients gain clarity on life events, relationships, career transitions, and spiritual growth through precise, timeline-based astrological guidance.
              </p>
              <p>
                With over 2+ years of experience in both traditional Vedic astrology and modern ALP techniques, Brindha bridges ancient wisdom with contemporary understanding to provide practical insights that actually make a difference in your daily life.
              </p>
              <p className="text-astrology-gold font-semibold text-center">
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
