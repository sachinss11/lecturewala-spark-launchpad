
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const { theme } = useTheme();
  const isAlternate = theme === "alternate";
  
  return (
    <div className={cn(
      "overflow-hidden",
      isAlternate ? "bg-hero-gradient-alt" : "bg-hero-gradient"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center py-12 md:py-20">
          {/* Hero content */}
          <div className="w-full md:w-1/2 md:pr-8 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Master Your <span className={cn(
                isAlternate ? "text-lecturewala2-primary" : "text-lecturewala-yellow"
              )}>CA Journey</span> With Expert Guidance
            </h1>
            <p className={cn(
              "text-lg md:text-xl",
              isAlternate ? "text-lecturewala2-text-light" : "text-lecturewala-text-light"
            )}>
              Join thousands of aspiring CAs learning from India's top educators. 
              Get comprehensive courses, study materials, and personalized guidance.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button className={cn(
                "text-lecturewala-text",
                isAlternate 
                  ? "bg-lecturewala2-primary hover:bg-lecturewala2-primary-dark" 
                  : "bg-lecturewala-yellow hover:bg-lecturewala-yellow-dark"
              )}>
                Explore Courses
              </Button>
              <Button variant="outline">
                Meet Our Faculty
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="text-center md:text-left">
                <p className="text-3xl font-bold">50K+</p>
                <p className={cn(
                  isAlternate ? "text-lecturewala2-text-light" : "text-lecturewala-text-light"
                )}>Students</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-3xl font-bold">200+</p>
                <p className={cn(
                  isAlternate ? "text-lecturewala2-text-light" : "text-lecturewala-text-light"
                )}>Courses</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-3xl font-bold">95%</p>
                <p className={cn(
                  isAlternate ? "text-lecturewala2-text-light" : "text-lecturewala-text-light"
                )}>Success Rate</p>
              </div>
            </div>
          </div>
          
          {/* Hero illustration */}
          <div className="w-full md:w-1/2 mt-12 md:mt-0 animate-float">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" 
              alt="Student studying" 
              className="rounded-lg shadow-xl mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
