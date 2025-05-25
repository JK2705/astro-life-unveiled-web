
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { 
  Star, Clock, Users, Zap, Heart, Shield, Eye, Calendar, BookOpen, Compass, 
  Gift, Target, Lightbulb, Phone, MessageCircle, Home, DollarSign, Briefcase, 
  Baby, Flower, Globe, Mountain, Sun, Moon 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
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

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-astrology-gold glow-text mb-6">
            ALP Astrology Services
          </h2>
          <p className="text-xl text-astrology-silver max-w-3xl mx-auto">
            Discover precise, timeline-based predictions that provide clarity and direction for every aspect of your life journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
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

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-astrology-cosmic/20 to-astrology-gold/20 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-astrology-gold mb-4">
              Ready to Transform Your Life?
            </h3>
            <p className="text-astrology-silver mb-6">
              Book your personalized ALP astrology consultation today and discover what the stars have planned for your future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919999999999"
                className="bg-astrology-gold text-astrology-deep px-8 py-3 rounded-full font-semibold hover-glow hover:scale-105 transition-all duration-300"
              >
                Call Now: +91 99999 99999
              </a>
              <a 
                href="https://wa.me/919999999999"
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
