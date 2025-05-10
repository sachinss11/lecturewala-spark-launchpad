
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";
import { ArrowRight, BookOpen } from "lucide-react";

const HeroSection = () => {
  const { theme } = useTheme();
  const isAlternate = theme === "alternate";
  
  return (
    <div className={cn(
      "overflow-hidden relative",
      isAlternate 
        ? "bg-hero-gradient-alt py-24" 
        : "bg-hero-gradient py-12 md:py-20"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "flex flex-col-reverse items-center",
          isAlternate ? "md:flex-row-reverse" : "md:flex-row"
        )}>
          {/* Hero content */}
          <div className={cn(
            "w-full md:w-1/2 space-y-6 animate-fade-in text-center",
            isAlternate ? "md:text-right md:pl-8" : "md:text-left md:pr-8"
          )}>
            <h1 className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight",
              isAlternate ? "font-poppins" : ""
            )}>
              {isAlternate ? (
                <>Advance Your <span className="text-lecturewala2-primary">Career</span> With Expert Guidance</>
              ) : (
                <>Master Your <span className="text-lecturewala-yellow">CA Journey</span> With Expert Guidance</>
              )}
            </h1>
            <p className={cn(
              "text-lg md:text-xl",
              isAlternate ? "text-lecturewala2-text-light" : "text-lecturewala-text-light"
            )}>
              {isAlternate ? 
                "Join our platform and learn from industry experts. Get personalized learning paths and achieve your career goals." :
                "Join thousands of aspiring CAs learning from India's top educators. Get comprehensive courses, study materials, and personalized guidance."
              }
            </p>
            <div className={cn(
              "flex gap-4 pt-2",
              isAlternate ? "justify-center md:justify-end" : "flex-wrap justify-center md:justify-start"
            )}>
              <Button className={cn(
                isAlternate 
                  ? "bg-lecturewala2-primary hover:bg-lecturewala2-primary-dark text-white rounded-full px-6" 
                  : "bg-lecturewala-yellow hover:bg-lecturewala-yellow-dark text-lecturewala-text"
              )}>
                {isAlternate ? (
                  <>Browse Courses <ArrowRight className="ml-2 h-4 w-4" /></>
                ) : (
                  "Explore Courses"
                )}
              </Button>
              <Button variant={isAlternate ? "outline" : "outline"} className={cn(
                isAlternate && "rounded-full px-6"
              )}>
                {isAlternate ? (
                  <>View Instructors <BookOpen className="ml-2 h-4 w-4" /></>
                ) : (
                  "Meet Our Faculty"
                )}
              </Button>
            </div>
            
            {/* Stats */}
            <div className={cn(
              "flex pt-4",
              isAlternate ? "justify-center md:justify-end space-x-12" : "flex-wrap gap-8"
            )}>
              <div className={cn(
                isAlternate ? "text-center" : "text-center md:text-left"
              )}>
                <p className={cn(
                  "text-3xl font-bold",
                  isAlternate && "text-lecturewala2-primary"
                )}>50K+</p>
                <p className={cn(
                  isAlternate ? "text-lecturewala2-text-light" : "text-lecturewala-text-light"
                )}>Students</p>
              </div>
              <div className={cn(
                isAlternate ? "text-center" : "text-center md:text-left"
              )}>
                <p className={cn(
                  "text-3xl font-bold",
                  isAlternate && "text-lecturewala2-primary"
                )}>200+</p>
                <p className={cn(
                  isAlternate ? "text-lecturewala2-text-light" : "text-lecturewala-text-light"
                )}>Courses</p>
              </div>
              <div className={cn(
                isAlternate ? "text-center" : "text-center md:text-left"
              )}>
                <p className={cn(
                  "text-3xl font-bold",
                  isAlternate && "text-lecturewala2-primary"
                )}>95%</p>
                <p className={cn(
                  isAlternate ? "text-lecturewala2-text-light" : "text-lecturewala-text-light"
                )}>Success Rate</p>
              </div>
            </div>
          </div>
          
          {/* Hero illustration */}
          <div className={cn(
            "w-full md:w-1/2 mb-12 md:mb-0",
            isAlternate ? "animate-bounce-slow" : "animate-float"
          )}>
            <img 
              src={isAlternate 
                ? "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
                : "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
              } 
              alt="Student studying" 
              className={cn(
                isAlternate 
                  ? "rounded-3xl shadow-2xl mx-auto transform rotate-2" 
                  : "rounded-lg shadow-xl mx-auto"
              )}
            />
          </div>
        </div>
      </div>
      
      {isAlternate && (
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-lecturewala2-primary-light rounded-full opacity-20"></div>
      )}
      
      {isAlternate && (
        <div className="absolute top-10 right-10 w-20 h-20 bg-lecturewala2-primary-light rounded-full opacity-20"></div>
      )}
    </div>
  );
};

export default HeroSection;
