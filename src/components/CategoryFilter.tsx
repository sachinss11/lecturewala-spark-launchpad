
import { Button } from "@/components/ui/button";
import { ChevronDown, Filter } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const CategoryFilter = () => {
  const categories = [
    "All Courses",
    "CA Foundation",
    "CA Intermediate",
    "CA Final",
    "ACCA",
    "CMA",
    "Mock Tests",
    "Crash Courses"
  ];

  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { theme } = useTheme();
  const isAlternate = theme === "alternate";

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsFilterOpen(false);
  };

  return (
    <div className={cn(
      isAlternate ? "bg-gray-50 py-10" : "bg-white py-6"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={cn(
          "font-bold mb-6 text-center",
          isAlternate ? "text-3xl text-lecturewala2-text uppercase tracking-wide" : "text-2xl"
        )}>
          {isAlternate ? "Find Your Course Path" : "Explore Our Courses"}
        </h2>
        
        {/* Mobile dropdown */}
        <div className="md:hidden relative">
          <Button 
            variant="outline"
            className={cn(
              "w-full justify-between border",
              isAlternate ? "rounded-full border-lecturewala2-primary" : "border-gray-300"
            )}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <span className="flex items-center">
              {isAlternate && <Filter size={16} className="mr-2 text-lecturewala2-primary" />}
              {selectedCategory}
            </span>
            <ChevronDown size={16} />
          </Button>
          
          {isFilterOpen && (
            <div className={cn(
              "absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg animate-fade-in",
              isAlternate ? "border-lecturewala2-primary-light rounded-2xl" : "border-gray-200"
            )}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={cn(
                    "block w-full text-left px-4 py-2 hover:bg-gray-100",
                    category === selectedCategory ? (
                      isAlternate ? "bg-lecturewala2-primary-light text-lecturewala2-primary" : "bg-lecturewala-yellow-light"
                    ) : "",
                    isAlternate && "first:rounded-t-2xl last:rounded-b-2xl"
                  )}
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Desktop pills */}
        <div className={cn(
          "hidden md:flex flex-wrap justify-center gap-2",
          isAlternate && "gap-4"
        )}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === selectedCategory ? "default" : "outline"}
              className={cn(
                category === selectedCategory ? (
                  isAlternate 
                    ? "bg-lecturewala2-primary text-white shadow-md"
                    : "bg-lecturewala-yellow text-lecturewala-text"
                ) : "",
                isAlternate && "rounded-full px-6 hover:bg-lecturewala2-primary-light hover:text-lecturewala2-primary"
              )}
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
