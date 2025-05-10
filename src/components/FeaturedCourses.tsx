
import CourseCard from "./CourseCard";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const FeaturedCourses = () => {
  const { theme } = useTheme();
  const isAlternate = theme === "alternate";
  
  const courses = [
    {
      id: "1",
      title: "CA Foundation Complete Course 2024",
      instructor: "CA Rahul Sharma",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
      rating: 4.8,
      reviewCount: 2453,
      price: 8999,
      originalPrice: 12999,
      isBestseller: true,
      isNew: false
    },
    {
      id: "2",
      title: "Advanced Accounting for CA Intermediate",
      instructor: "CA Priya Patel",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      rating: 4.6,
      reviewCount: 1298,
      price: 9999,
      originalPrice: 14999,
      isBestseller: false,
      isNew: false
    },
    {
      id: "3",
      title: "Corporate and Economic Laws",
      instructor: "Prof. Amit Jain",
      thumbnail: "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=600&q=80",
      rating: 4.9,
      reviewCount: 876,
      price: 7499,
      originalPrice: 9999,
      isBestseller: true,
      isNew: false
    },
    {
      id: "4",
      title: "Strategic Financial Management",
      instructor: "CA Vikram Singh",
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      rating: 4.7,
      reviewCount: 1052,
      price: 11999,
      originalPrice: 15999,
      isBestseller: false,
      isNew: true
    }
  ];

  return (
    <div className={cn(
      isAlternate ? "bg-white py-24" : "section-padding bg-lecturewala-bg-alt"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "flex items-center justify-between mb-8",
          isAlternate && "flex-col text-center mb-12"
        )}>
          <h2 className={cn(
            isAlternate ? "text-3xl font-bold uppercase tracking-wide mb-2" : "text-2xl md:text-3xl font-bold"
          )}>
            {isAlternate ? "Top Rated Courses" : "Featured Courses"}
          </h2>
          
          <a 
            href="/courses" 
            className={cn(
              "font-medium hover:underline flex items-center",
              isAlternate 
                ? "text-lecturewala2-primary-dark mt-2" 
                : "text-lecturewala-yellow-dark"
            )}
          >
            {isAlternate && <span>Explore All Courses</span>}
            {!isAlternate && <span>View All</span>}
            {isAlternate && <ArrowRight className="ml-1 h-4 w-4" />}
          </a>
        </div>
        
        <div className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
          isAlternate && "gap-8"
        )}>
          {courses.map((course) => (
            <CourseCard 
              key={course.id}
              {...course}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
