
import React from 'react';

const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center celestial-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-astrology-deep/50"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-astrology-gold rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-astrology-silver rounded-full animate-float animation-delay-1000 opacity-40"></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-astrology-gold rounded-full animate-float animation-delay-2000 opacity-50"></div>
      
      <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white glow-text animate-fade-in">
          What is ALP Astrology?
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-astrology-silver animate-fade-in animation-delay-500 max-w-3xl mx-auto">
          Discover the revolutionary approach to Astro Life Prediction that transforms traditional astrology into precise, timeline-based guidance for your life journey
        </p>
        <div className="mt-10 animate-fade-in animation-delay-1000">
          <button 
            onClick={scrollToServices}
            className="bg-astrology-gold text-astrology-deep px-8 py-4 rounded-full text-lg font-semibold hover-glow hover:scale-105 transition-all duration-300"
          >
            Explore Your Destiny
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
