
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryFilter from "@/components/CategoryFilter";
import FeaturedCourses from "@/components/FeaturedCourses";
import Testimonials from "@/components/Testimonials";
import FacultySpotlight from "@/components/FacultySpotlight";
import BlogSection from "@/components/BlogSection";
import AppCTA from "@/components/AppCTA";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const Index = () => {
  const { theme } = useTheme();
  const isAlternate = theme === "alternate";

  return (
    <div 
      className={cn(
        "min-h-screen flex flex-col",
        isAlternate ? "bg-lecturewala2-bg" : "bg-lecturewala-bg"
      )}
    >
      <Navbar />
      <HeroSection />
      <CategoryFilter />
      <FeaturedCourses />
      <Testimonials />
      <FacultySpotlight />
      <BlogSection />
      <AppCTA />
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default Index;
