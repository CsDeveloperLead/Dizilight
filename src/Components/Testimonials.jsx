import React, { useState, useEffect, useRef } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    name: "Suraj Keshari",
    role: "Founder",
    company: "KS Production",
    content: "Dizilight’s comprehensive digital marketing approach has brought in more clients than we ever expected. From stunning social media graphics to engaging blog posts, their team knows how to attract and retain customers. Our online bookings have increased dramatically thanks to their efforts."
  },
  {
    name: "Mohit Kumar Mishra",
    role: "Founder",
    company: "Zoopond Private Limited",
    content: "Our experience with Dizilight has been phenomenal. They took our outdated website and transformed it into a modern, mobile-friendly site that our customers love. Their social media strategies have also significantly increased our brand awareness and follower count. We highly recommend Dizilight!"
  },
  {
    name: "Suraj Anand",
    role: "Founder",
    company: "Harvest India Solar",
    content: "The Dizilight team has been instrumental in revamping our online presence. They provided a comprehensive digital marketing strategy that included a beautiful website redesign and effective social media campaigns. Our inquiries and sales have significantly increased, and we couldn’t be more pleased with their work."
  },
  {
    name: "Vipin Mishra",
    role: "Founder",
    company: "ABM Consultancy",
    content: "Working with Dizilight has been an absolute pleasure. They redesigned our website, making it more user-friendly and visually appealing. Their social media management has also helped us reach a broader audience and engage with our followers more effectively. We couldn’t be happier with the results."
  },
  {
    name: "Monish Gupta",
    role: "Managing Director",
    company: "Hotel Mahadev Palace",
    content: "Dizilight’s website development and SEO services were game changers for us. We went from being virtually invisible online to ranking on the first page of search results. Their expertise in digital marketing has also helped us connect with pet lovers across the country. Thank you, Dizilight!"
  },
  {
    name: "OP Singh",
    role: "Managing Director",
    company: "Adrika Residency",
    content: "Dizilight has exceeded our expectations in every way. Their social media management has brought our community together and created a loyal following. The new website they built for us is sleek, fast, and easy to navigate. We’ve seen a marked increase in memberships and positive feedback from our clients."
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className="relative w-full overflow-hidden py-16 bg-gradient-to-r from-[#353b46] via-[#1b1c1c] to-[#353b46] flex flex-col items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        What Our Clients Say
      </h2>
      
      <div 
        ref={sliderRef}
        className="flex transition-transform duration-700 ease-in-out w-full max-w-5xl"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full flex-shrink-0 px-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-lg shadow-xl p-8 rounded-xl flex flex-col items-center text-center border border-white/30">
              <FaQuoteLeft className="text-white text-3xl mb-4" />
              <p className="text-lg text-white font-light italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <FaQuoteRight className="text-white text-3xl mt-4" />
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                <p className="text-gray-300">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 flex space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition-all ${
              currentIndex === index ? "bg-white scale-125" : "bg-gray-300 opacity-50"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
