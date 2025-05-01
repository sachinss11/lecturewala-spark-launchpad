
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  thumbnail: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  isBestseller?: boolean;
  isNew?: boolean;
}

const CourseCard = ({
  id,
  title,
  instructor,
  thumbnail,
  rating,
  reviewCount,
  price,
  originalPrice,
  isBestseller,
  isNew
}: CourseCardProps) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="fill-lecturewala-yellow text-lecturewala-yellow" size={16} />);
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="text-gray-300" size={16} />
          <div className="absolute top-0 left-0 overflow-hidden w-1/2">
            <Star className="fill-lecturewala-yellow text-lecturewala-yellow" size={16} />
          </div>
        </div>
      );
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="text-gray-300" size={16} />);
    }
    
    return stars;
  };

  return (
    <div className="course-card flex flex-col h-full">
      {/* Course thumbnail */}
      <div className="relative">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-48 object-cover" 
        />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-2">
          {isBestseller && (
            <Badge className="bg-lecturewala-yellow text-lecturewala-text">
              Bestseller
            </Badge>
          )}
          {isNew && (
            <Badge className="bg-green-500 text-white">
              New
            </Badge>
          )}
        </div>
      </div>
      
      {/* Course content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg mb-1 line-clamp-2">{title}</h3>
        <p className="text-sm text-lecturewala-text-light mb-2">{instructor}</p>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex mr-1">
            {renderStars()}
          </div>
          <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          <span className="text-xs text-lecturewala-text-light ml-1">({reviewCount})</span>
        </div>
        
        {/* Price */}
        <div className="mt-auto pt-2">
          <div className="flex items-center">
            <span className="font-bold text-lg">₹{price}</span>
            {originalPrice && (
              <span className="text-lecturewala-text-light line-through ml-2">
                ₹{originalPrice}
              </span>
            )}
            {originalPrice && (
              <span className="ml-2 text-green-600 text-sm font-medium">
                {Math.round(((originalPrice - price) / originalPrice) * 100)}% off
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
