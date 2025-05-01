
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryFilter from "@/components/CategoryFilter";
import FeaturedCourses from "@/components/FeaturedCourses";
import Testimonials from "@/components/Testimonials";
import FacultySpotlight from "@/components/FacultySpotlight";
import BlogSection from "@/components/BlogSection";
import AppCTA from "@/components/AppCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-lecturewala-bg flex flex-col">
      <Navbar />
      <HeroSection />
      <CategoryFilter />
      <FeaturedCourses />
      <Testimonials />
      <FacultySpotlight />
      <BlogSection />
      <AppCTA />
      <Footer />
    </div>
  );
};

export default Index;
