
import React, { useEffect, useRef, useState } from 'react';

const ALPExplanation = () => {
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

  return (
    <section ref={sectionRef} id="astrology" className="py-20 bg-gradient-to-b from-astrology-deep to-astrology-midnight">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-astrology-gold mb-6 glow-text">
            Understanding ALP Astrology
          </h2>
          <p className="text-xl text-astrology-silver max-w-3xl mx-auto">
            A revolutionary approach that transforms traditional astrological wisdom into precise, actionable guidance
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in stagger-2' : 'opacity-0'}`}>
            <div className="bg-astrology-midnight/50 p-8 rounded-2xl border border-astrology-cosmic hover-glow">
              <h3 className="text-2xl font-serif font-semibold text-astrology-gold mb-4">
                What is ALP?
              </h3>
              <p className="text-astrology-silver leading-relaxed">
                Astro Life Prediction (ALP) is a modern evolution of traditional astrology that focuses on specific life events and their precise timing. Unlike general personality readings, ALP provides timeline-based predictions that help you prepare for and navigate life's most important moments.
              </p>
            </div>

            <div className="bg-astrology-midnight/50 p-8 rounded-2xl border border-astrology-cosmic hover-glow">
              <h3 className="text-2xl font-serif font-semibold text-astrology-gold mb-4">
                How It Works
              </h3>
              <p className="text-astrology-silver leading-relaxed">
                ALP analyzes planetary transits, dashas, and progressions to identify specific time windows when significant life events are most likely to occur. This creates a roadmap of opportunities and challenges, allowing you to make informed decisions with cosmic timing on your side.
              </p>
            </div>
          </div>

          <div className={`${isVisible ? 'animate-slide-in-right stagger-4' : 'opacity-0'}`}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop"
                alt="Celestial sky with stars"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-astrology-deep/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-semibold text-lg">
                  "ALP reveals not just what might happen, but when it's most likely to unfold"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ALPExplanation;
