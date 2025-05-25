
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

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
    },
    {
      name: "Fatima Al-Zahra",
      location: "Riyadh, Saudi Arabia",
      text: "Past life reading revealed so much about my current life patterns. It helped me break negative cycles and embrace my true potential.",
      rating: 5,
      service: "Past Life Reading"
    },
    {
      name: "James Wilson",
      location: "Sydney, Australia",
      text: "Investment timing advice has been incredibly profitable. Made decisions based on astrological guidance and the returns have been excellent!",
      rating: 5,
      service: "Investment Guidance"
    },
    {
      name: "Ananya Sharma",
      location: "Mumbai, India",
      text: "Family compatibility analysis brought peace to our household. Understanding each family member's nature helped resolve long-standing issues.",
      rating: 5,
      service: "Family Consultation"
    },
    {
      name: "Pierre Dubois",
      location: "Paris, France",
      text: "Creative potential reading unlocked my artistic abilities. Started my art business at the suggested time and it's thriving beyond expectations!",
      rating: 5,
      service: "Creative Guidance"
    },
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      text: "Life purpose discovery session was life-changing. Finally found my true calling and am living a more fulfilling and meaningful life now.",
      rating: 5,
      service: "Life Purpose"
    },
    {
      name: "Raj Kumar Singh",
      location: "Delhi, India",
      text: "Foreign settlement guidance was incredibly helpful. Got my visa approved exactly when predicted and settled in Canada successfully.",
      rating: 5,
      service: "Foreign Travel"
    },
    {
      name: "Isabella Romano",
      location: "Rome, Italy",
      text: "Marriage compatibility reading prevented a disaster. Realized the incompatibility before marriage and found my perfect match later as predicted.",
      rating: 5,
      service: "Marriage Analysis"
    },
    {
      name: "Mohammed Rahman",
      location: "Dhaka, Bangladesh",
      text: "Business partnership analysis saved me from a bad deal. The astrologer warned about timing and partner issues which proved absolutely accurate.",
      rating: 5,
      service: "Business Partnership"
    },
    {
      name: "Nina Petrov",
      location: "Moscow, Russia",
      text: "Spiritual guidance helped me find inner peace. The meditation practices and timing suggestions transformed my spiritual journey completely.",
      rating: 5,
      service: "Spiritual Growth"
    },
    {
      name: "Carlos Silva",
      location: "São Paulo, Brazil",
      text: "Financial prosperity predictions were amazing. Started my business venture exactly when suggested and achieved success beyond my dreams!",
      rating: 5,
      service: "Wealth Creation"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-astrology-midnight/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-on-scroll">
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
              className={`bg-astrology-deep/80 border-astrology-cosmic hover:border-astrology-gold transition-all duration-300 hover:shadow-lg hover:shadow-astrology-gold/20 animate-on-scroll stagger-${(index % 6) + 1}`}
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

        <div className="text-center mt-16 animate-on-scroll">
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
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
              </svg>
              Start Your Journey Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
