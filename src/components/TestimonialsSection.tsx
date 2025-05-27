import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, MessageCircle } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Arjun Krishnamurthy",
      location: "Chennai, India",
      text: "The ALP reading was incredibly accurate! The astrologer predicted my job change with exact timing - it happened exactly when they said it would. Amazing precision!",
      rating: 5,
      service: "Career Guidance"
    },
    {
      name: "Sofia Martinez",
      location: "Barcelona, Spain",
      text: "I was skeptical at first, but the marriage timing prediction was spot on. Found my life partner exactly in the timeframe mentioned. Truly grateful for this guidance!",
      rating: 5,
      service: "Love & Relationship"
    },
    {
      name: "Ravi Patel",
      location: "London, UK",
      text: "The health predictions helped me take preventive measures that literally saved my life. The timing and nature of health issues were precisely predicted.",
      rating: 5,
      service: "Health & Wellness"
    },
    {
      name: "Chen Wei Lin",
      location: "Singapore",
      text: "Business expansion guidance was phenomenal. Launched my new venture in the suggested timeframe and it's been incredibly successful. Thank you so much!",
      rating: 5,
      service: "Business Consultation"
    },
    {
      name: "Priya Nair",
      location: "Dubai, UAE",
      text: "The annual forecast was like reading my diary in advance. Every major event happened as predicted. ALP astrology is truly revolutionary!",
      rating: 5,
      service: "Annual Forecast"
    },
    {
      name: "David Thompson",
      location: "Toronto, Canada",
      text: "Property purchase timing was perfect. Bought at the right time and right price as suggested. The financial gains have been substantial!",
      rating: 5,
      service: "Financial Guidance"
    },
    {
      name: "Lakshmi Reddy",
      location: "Hyderabad, India",
      text: "Child birth timing consultation was a blessing. My baby was born healthy and at the perfect time as predicted. Couldn't be happier with the outcome!",
      rating: 5,
      service: "Child Birth Timing"
    },
    {
      name: "Ahmed Hassan",
      location: "Cairo, Egypt",
      text: "Educational path guidance for my son was invaluable. He got into his dream university exactly as the astrologer had foreseen. Remarkable accuracy!",
      rating: 5,
      service: "Educational Guidance"
    },
    {
      name: "Maria Gonzalez",
      location: "Mexico City, Mexico",
      text: "The relationship compatibility analysis saved my marriage. Understanding our dynamics helped us resolve conflicts and grow stronger together.",
      rating: 5,
      service: "Relationship Analysis"
    },
    {
      name: "Hiroshi Tanaka",
      location: "Tokyo, Japan",
      text: "Career transition guidance was spot on. Changed my field at the right time and it's been the best decision of my life. Highly recommended!",
      rating: 5,
      service: "Career Transition"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-astrology-midnight/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-astrology-gold glow-text mb-6">
            Global Client Success Stories
          </h2>
          <p className="text-xl text-astrology-silver max-w-3xl mx-auto">
            Discover how ALP astrology has transformed lives worldwide with precise predictions and timely guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={`${testimonial.name}-${index}`}
              className="bg-astrology-deep/80 border-astrology-cosmic hover:border-astrology-gold transition-all duration-300 hover:shadow-lg hover:shadow-astrology-gold/20"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-astrology-gold fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-astrology-silver leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="border-t border-astrology-cosmic pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-astrology-gold">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-astrology-silver/80">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs bg-astrology-cosmic/30 text-astrology-gold px-2 py-1 rounded-full">
                        {testimonial.service}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-astrology-deep/50 to-astrology-cosmic/50 rounded-lg p-8 max-w-2xl mx-auto border border-astrology-gold/20">
            <h3 className="text-2xl font-serif font-bold text-astrology-gold mb-4">
              Join Thousands of Satisfied Clients Worldwide
            </h3>
            <p className="text-astrology-silver mb-6">
              Experience the accuracy and life-changing insights of ALP astrology for yourself
            </p>
            <a 
              href="https://wa.me/919999999999"
              className="inline-flex items-center gap-2 bg-astrology-gold text-astrology-deep px-8 py-3 rounded-full font-semibold hover-glow hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Start Your Journey Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
