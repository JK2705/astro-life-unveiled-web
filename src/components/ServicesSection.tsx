
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Star, Clock, Users, Zap, Heart, Shield, Eye, Calendar, BookOpen, Compass, Gift, Target, Lightbulb, Phone, MessageCircle, Home, DollarSign, Briefcase, Baby, Flower, Globe, Mountain, Sun, Moon } from 'lucide-react';

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
    },
    {
      icon: Users,
      title: "Family Harmony Analysis",
      description: "Understanding family dynamics, resolving conflicts, and creating peaceful relationships",
      duration: "60 minutes"
    },
    {
      icon: DollarSign,
      title: "Financial Prosperity Reading",
      description: "Wealth creation timing, investment guidance, property purchase, and financial abundance predictions",
      duration: "60 minutes"
    },
    {
      icon: Home,
      title: "Property & Real Estate",
      description: "Auspicious timing for buying/selling property, location selection, and real estate investments",
      duration: "45 minutes"
    },
    {
      icon: Briefcase,
      title: "Business Partnership Analysis",
      description: "Partner compatibility, business venture timing, and collaborative success strategies",
      duration: "60 minutes"
    },
    {
      icon: Baby,
      title: "Child Development Guidance",
      description: "Understanding your child's nature, educational path, and nurturing their talents effectively",
      duration: "45 minutes"
    },
    {
      icon: Globe,
      title: "Foreign Travel & Settlement",
      description: "International opportunities, visa timing, foreign settlement prospects, and global connections",
      duration: "50 minutes"
    },
    {
      icon: Mountain,
      title: "Spiritual Growth Path",
      description: "Meditation guidance, spiritual practices, enlightenment timing, and inner awakening journey",
      duration: "60 minutes"
    },
    {
      icon: Flower,
      title: "Marriage Compatibility",
      description: "Deep partner analysis, wedding timing, marital harmony, and long-term relationship success",
      duration: "75 minutes"
    },
    {
      icon: Sun,
      title: "Solar Return Reading",
      description: "Birthday year predictions, personal new year forecast, and annual growth opportunities",
      duration: "45 minutes"
    },
    {
      icon: Moon,
      title: "Lunar Cycle Guidance",
      description: "Working with moon phases, emotional cycles, and lunar-based manifestation techniques",
      duration: "30 minutes"
    },
    {
      icon: Clock,
      title: "Muhurat & Auspicious Timing",
      description: "Perfect timing selection for important events, ceremonies, launches, and new beginnings",
      duration: "30 minutes"
    },
    {
      icon: Phone,
      title: "Follow-up Consultation",
      description: "Continued guidance, progress updates, and refinement of previous readings with new developments",
      duration: "30 minutes"
    },
    {
      icon: MessageCircle,
      title: "Quick Question Session",
      description: "Fast answers to specific questions about immediate concerns, opportunities, or decisions",
      duration: "15 minutes"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-astrology-gold glow-text mb-6">
            ALP Astrology Services
          </h2>
          <p className="text-xl text-astrology-silver max-w-3xl mx-auto">
            Discover precise, timeline-based predictions that provide clarity and direction for every aspect of your life journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`bg-astrology-midnight/80 border-astrology-cosmic hover:border-astrology-gold transition-all duration-300 hover:shadow-lg hover:shadow-astrology-gold/20 animate-on-scroll stagger-${(index % 6) + 1}`}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-astrology-gold/10 rounded-full flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-astrology-gold" />
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
          ))}
        </div>

        <div className="text-center mt-16 animate-on-scroll">
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
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                </svg>
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
