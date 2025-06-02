
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { 
  Star, Clock, Users, Zap, Heart, Shield, Eye, Calendar, BookOpen, Compass, 
  Gift, Target, Lightbulb, Phone, MessageCircle, Home, DollarSign, Briefcase, 
  Baby, Flower, Globe, Mountain, Sun, Moon 
} from 'lucide-react';

const ServicesSection = () => {
  const astrologServices = [
    {
      icon: Star,
      title: "Complete Life Reading",
      description: "Comprehensive analysis of your entire life path, major events, and key turning points with detailed timeline predictions",
      duration: "90 minutes"
    },
    {
      icon: Heart,
      title: "Love & Relationship Analysis",
      description: "Deep insights into romantic compatibility, marriage timing, soulmate connections, and relationship dynamics",
      duration: "60 minutes"
    },
    {
      icon: Target,
      title: "Career & Business Guidance",
      description: "Strategic advice for career growth, business ventures, professional success timing, and wealth creation",
      duration: "75 minutes"
    },
    {
      icon: Shield,
      title: "Health & Wellness Predictions",
      description: "Preventive health insights, wellness guidance, and healing recommendations based on planetary influences",
      duration: "45 minutes"
    },
    {
      icon: Calendar,
      title: "Annual Life Forecast",
      description: "Year-ahead predictions covering all major life areas with monthly breakdowns and important dates",
      duration: "120 minutes"
    },
    {
      icon: Gift,
      title: "Child Birth Timing & Pregnancy",
      description: "Auspicious timing for conception, pregnancy guidance, and insights into future children's nature",
      duration: "60 minutes"
    },
    {
      icon: Eye,
      title: "Past Life Karma Reading",
      description: "Understanding karmic patterns, past life influences, and soul lessons affecting your current journey",
      duration: "90 minutes"
    },
    {
      icon: Compass,
      title: "Life Purpose & Soul Mission",
      description: "Uncover your soul's purpose, spiritual calling, and align with your true dharma in this lifetime",
      duration: "75 minutes"
    },
    {
      icon: Zap,
      title: "Emergency Life Decisions",
      description: "Quick guidance for urgent decisions, crisis situations, and time-sensitive life choices",
      duration: "30 minutes"
    },
    {
      icon: BookOpen,
      title: "Education & Career Path",
      description: "Best educational choices, exam timing, academic success strategies, and career direction",
      duration: "45 minutes"
    }
  ];

  const vastuServices = [
    {
      icon: Home,
      title: "Residential Vastu Consultation",
      description: "Complete home analysis for positive energy flow, peace, prosperity and harmony in family relationships",
      duration: "120 minutes"
    },
    {
      icon: Briefcase,
      title: "Commercial Vastu Analysis",
      description: "Office, shop and business space optimization for maximum growth, profit and success in ventures",
      duration: "150 minutes"
    },
    {
      icon: DollarSign,
      title: "Wealth Corner Activation",
      description: "Specific remedies for enhancing financial prosperity, removing money blocks and attracting abundance",
      duration: "60 minutes"
    },
    {
      icon: Globe,
      title: "Land & Plot Selection",
      description: "Guidance for choosing auspicious land, plot direction analysis and construction timing recommendations",
      duration: "90 minutes"
    },
    {
      icon: Mountain,
      title: "Industrial Vastu Solutions",
      description: "Large-scale industrial setup planning, factory layout optimization and machinery placement guidance",
      duration: "180 minutes"
    },
    {
      icon: Sun,
      title: "Remedial Vastu Solutions",
      description: "Non-structural corrections using crystals, yantras, colors and energy enhancement techniques",
      duration: "75 minutes"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-astrology-gold glow-text mb-6">
            Our Spiritual Services
          </h2>
          <p className="text-xl text-astrology-silver max-w-3xl mx-auto">
            Discover precise guidance through ALP Astrology and harmonious living through Akshaya Vastu
          </p>
        </div>

        {/* ALP Astrology Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-astrology-gold mb-4">
              ALP Astrology Services
            </h3>
            <p className="text-lg text-astrology-silver max-w-2xl mx-auto">
              Timeline-based predictions that provide clarity and direction for every aspect of your life journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {astrologServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.title}
                  className="bg-astrology-midnight/80 border-astrology-cosmic hover:border-astrology-gold transition-all duration-300 hover:shadow-lg hover:shadow-astrology-gold/20"
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-astrology-gold/10 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-astrology-gold" />
                    </div>
                    <CardTitle className="text-xl font-serif text-astrology-gold">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-astrology-silver text-sm">
                      Duration: {service.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-astrology-silver leading-relaxed text-center">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Akshaya Vastu Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-astrology-gold mb-4">
              Akshaya Vastu Services
            </h3>
            <p className="text-lg text-astrology-silver max-w-2xl mx-auto">
              Ancient Vastu Shastra wisdom for creating harmonious spaces that enhance prosperity and well-being
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vastuServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.title}
                  className="bg-astrology-midnight/80 border-astrology-cosmic hover:border-astrology-gold transition-all duration-300 hover:shadow-lg hover:shadow-astrology-gold/20"
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-astrology-gold/10 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-astrology-gold" />
                    </div>
                    <CardTitle className="text-xl font-serif text-astrology-gold">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-astrology-silver text-sm">
                      Duration: {service.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-astrology-silver leading-relaxed text-center">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-astrology-cosmic/20 to-astrology-gold/20 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-astrology-gold mb-4">
              Ready to Transform Your Life?
            </h3>
            <p className="text-astrology-silver mb-6">
              Book your personalized consultation today and discover the perfect harmony of cosmic guidance and spatial energy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919360878276"
                className="bg-astrology-gold text-astrology-deep px-8 py-3 rounded-full font-semibold hover-glow hover:scale-105 transition-all duration-300"
              >
                Call Now: +91 93608 78276
              </a>
              <a 
                href="https://wa.me/919360878276"
                className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
