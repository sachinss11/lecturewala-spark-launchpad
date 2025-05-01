
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  course: string;
  rating: number;
  text: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ananya Sharma",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      course: "CA Foundation",
      rating: 5,
      text: "The course content was extremely comprehensive and well-structured. I cleared my CA Foundation in the first attempt thanks to Lecturewala's expert faculty and study material."
    },
    {
      id: 2,
      name: "Rahul Verma",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
      course: "CA Intermediate",
      rating: 5,
      text: "The practice questions and mock tests were invaluable. The explanations were clear and the faculty was always available to clear doubts. Highly recommended for serious CA aspirants!"
    },
    {
      id: 3,
      name: "Priya Patel",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      course: "CA Final",
      rating: 4,
      text: "Lecturewala's mobile app made it easy to study on the go. The video lectures were concise yet thorough, and the faculty's expertise in simplifying complex topics was remarkable."
    },
    {
      id: 4,
      name: "Vikram Singh",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      course: "CA Foundation",
      rating: 5,
      text: "After trying multiple coaching institutes, I found Lecturewala to be the most effective. The quality of teaching and materials is unmatched. I secured a rank in the top 50!"
    }
  ];

  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = () => {
    if (current < testimonials.length - 1) {
      setCurrent(current + 1);
      scrollToCard(current + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
      scrollToCard(current - 1);
    }
  };

  const scrollToCard = (index: number) => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.scrollWidth / testimonials.length;
      containerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth"
      });
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? "fill-lecturewala-yellow text-lecturewala-yellow" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-lecturewala-text-light max-w-2xl mx-auto">
            Join thousands of satisfied students who have transformed their careers with Lecturewala's expert guidance and comprehensive courses.
          </p>
        </div>

        <div className="relative">
          {/* Desktop navigation buttons */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white ${
                current === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={prev}
              disabled={current === 0}
            >
              <ArrowLeft size={20} />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white ${
                current === testimonials.length - 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={next}
              disabled={current === testimonials.length - 1}
            >
              <ArrowRight size={20} />
            </Button>
          </div>
          
          {/* Testimonial cards */}
          <div 
            ref={containerRef}
            className="flex overflow-x-auto gap-6 pb-6 scrollbar-none"
          >
            {testimonials.map((testimonial) => (
              <Card 
                key={testimonial.id}
                className="min-w-[300px] md:min-w-[400px] p-6 flex-shrink-0 border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4" 
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-lecturewala-text-light">{testimonial.course}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-lecturewala-text">{testimonial.text}</p>
              </Card>
            ))}
          </div>
          
          {/* Mobile navigation buttons */}
          <div className="flex justify-center mt-6 gap-4 md:hidden">
            <Button
              variant="outline"
              size="icon"
              className={`${current === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={prev}
              disabled={current === 0}
            >
              <ArrowLeft size={16} />
            </Button>
            
            <Button
              variant="outline"
              size="icon" 
              className={`${
                current === testimonials.length - 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={next}
              disabled={current === testimonials.length - 1}
            >
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
