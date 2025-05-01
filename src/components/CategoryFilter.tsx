
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

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

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsFilterOpen(false);
  };

  return (
    <div className="bg-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Explore Our Courses</h2>
        
        {/* Mobile dropdown */}
        <div className="md:hidden relative">
          <Button 
            variant="outline"
            className="w-full justify-between border border-gray-300"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            {selectedCategory}
            <ChevronDown size={16} />
          </Button>
          
          {isFilterOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg animate-fade-in">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                    category === selectedCategory ? "bg-lecturewala-yellow-light" : ""
                  }`}
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Desktop pills */}
        <div className="hidden md:flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === selectedCategory ? "default" : "outline"}
              className={category === selectedCategory ? "bg-lecturewala-yellow text-lecturewala-text" : ""}
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
